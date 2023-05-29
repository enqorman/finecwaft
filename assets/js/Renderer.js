import Finecwaft from "./Finecwaft.js";

export default class Renderer {
	/**
	 * @private
	 * @type {HTMLCanvasElement}
	 */
	canvasElement;

	/**
	 * @private
	 * @type {HTMLCanvasElement}
	 */
	context;

	/**
	 * @param {HTMLCanvasElement} canvas
	 */
	constructor(canvas) {
		this.canvasElement = canvas;
		this.context = this.canvasElement.getContext("2d");
		if (!this.context) {
			throw new Error(
				"Failed to initalize Renderer: Canvas context was null."
			);
		}

		this.canvasElement.width = window.innerWidth;
		this.canvasElement.height = window.innerHeight;
		window.addEventListener("resize", () => {
			const { innerWidth, innerHeight } = window;

			const instance = Finecwaft.getInstance();
			if (instance)
				instance.debug(
					`Resizing canvas to ${innerWidth}x${innerHeight}`
				);

			this.canvasElement.width = innerWidth;
			this.canvasElement.height = innerHeight;
		});
	}
}
