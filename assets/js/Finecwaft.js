import AbstractScreen from "./gui/AbstractScreen.js";
import Renderer from "./Renderer.js";

export default class Finecwaft {
	/**
	 * @private
	 * @type {Finecwaft | null}
	 */
	static instance;

	/**
	 * @private
	 * @type {AbstractScreen}
	 */
	currentScreeen;

	/**
	 * @private
	 * @type {Renderer}
	 */
	renderer;

	/**
	 * @private
	 * @type {boolean}
	 */
	hasCrashed;

	/**
	 * @param {HTMLCanvasElement} canvas
	 * @param {AbstractScreen} screen
	 */
	constructor(canvas, screen) {
		console.log("Initializing Finecwaft!");
		Finecwaft.instance = this;
		this.currentScreeen = screen;
		this.renderer = new Renderer(canvas);
		this.render();
	}

	/**
	 * @returns {Finecwaft | null}
	 */
	static getInstance() {
		return Finecwaft.instance;
	}

	/**
	 * @param {string} message
	 */
	debug(message) {
		console.warn(`DEBUG: ${message}`);
	}

	/**
	 * @param {string} reason
	 */
	crash(reason) {
		console.error(`ERROR: ${reason}`);
		this.hasCrashed = true;
		Finecwaft.instance = null;
	}

	render() {
		if (this.hasCrashed) return;
		requestAnimationFrame(this.render.bind(this));
		// render
		if (this.currentScreeen == null)
			return this.crash("Current screen is null.");
		this.currentScreeen.render();
	}
}
