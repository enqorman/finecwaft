import FinecwaftClient from "./FinecwaftClient.js";

export default class Renderer {
	/**
	 * @private
	 * @type {HTMLCanvasElement}
	 */
	canvasElement;

	/**
	 * @private
	 * @type {CanvasRenderingContext2D}
	 */
	context;

	/**
	 * @param {HTMLCanvasElement} canvas
	 */
	constructor(canvas) {
		this.canvasElement = canvas;
		this.context = this.canvasElement.getContext("2d");
		this.canvasElement.width = window.innerWidth;
		this.canvasElement.height = window.innerHeight;

		const instance = FinecwaftClient.getInstance();
		window.addEventListener("resize", () => {
			const { innerWidth, innerHeight } = window;
			if (instance)
				instance.debug(
					`Resizing canvas to ${innerWidth}x${innerHeight}`
				);
			this.canvasElement.width = innerWidth;
			this.canvasElement.height = innerHeight;
		});

		if (!this.context) {
			instance.crash(
				"Failed to initalize Renderer: Canvas context was null."
			);
			return;
		}

		this.clear();
	}

	clear() {
		this.setColor("black");
		this.context.fillRect(
			0,
			0,
			this.canvasElement.width,
			this.canvasElement.height
		);
	}

	/**
	 * @param {string} color
	 */
	setColor(color) {
		this.context.fillStyle = color;
	}

	/**
	 * @private
	 * @param {number} width
	 * @param {number} height
	 * @returns {boolean}
	 */
	getCenteredRect(width, height, scale = 1) {
		return {
			x: this.canvasElement.width / 2 - (width * scale) / 2,
			y: this.canvasElement.height / 2 - (height * scale) / 2,
			width: width * scale,
			height: height * scale,
		};
	}

	/**
	 * @param {number} x
	 * @param {number} y
	 * @param {number} width
	 * @param {number} height
	 * @param {number} scale
	 */
	drawCenteredRect(x, y, width, height, scale) {
		const centeredRect = this.getCenteredRect(width, height, scale);
		this.context.fillRect(
			centeredRect.x + x,
			centeredRect.y + y,
			centeredRect.width,
			centeredRect.height
		);
	}

	/**
	 * @param {number} x
	 * @param {number} y
	 * @param {number} width
	 * @param {number} height
	 * @param {number} scale
	 */
	drawCenteredText(text, x, y, scale = 1) {
		this.context.textAlign = "center";
		this.context.font = this.context.font.replace(
			/(?<value>\d+\.?\d*)/,
			16 * scale
		);
		const textDims = this.context.measureText(text);
		const fontHeight =
			textDims.actualBoundingBoxAscent +
			textDims.actualBoundingBoxDescent;
		const centeredRect = this.getCenteredRect(
			textDims.width,
			fontHeight,
			scale
		);
		this.context.fillText(text, centeredRect.x + x, centeredRect.y + y);
	}
}
