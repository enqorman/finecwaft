import Renderer from "./Renderer.js";
import Screen from "./gui/screen/TitleScreen.js";
import TextRenderer from "./font/TextRenderer.js";
import TitleScreen from "./gui/screen/TitleScreen.js";

export default class FinecwaftClient {
	/**
	 * @private
	 * @type {FinecwaftClient | null}
	 */
	static instance;

	/**
	 * @private
	 * @readonly
	 * @type {TextRenderer}
	 */
	textRenderer;

	/**
	 * @private
	 * @readonly
	 * @type {GameOptions}
	 */
	options;

	/**
	 * @private
	 * @readonly
	 * @type {LanguageManager}
	 */
	languageManager;

	/**
	 * @private
	 * @type {Renderer}
	 */
	renderer;

	/**
	 * @private
	 * @type {boolean}
	 */
	paused;

	/**
	 * @private
	 * @type {number}
	 */
	fpsCounter;

	/**
	 * @private
	 * @type {Screen | null}
	 */
	currentScreeen;

	/**
	 * @private
	 * @type {boolean}
	 */
	running;

	/**
	 * @param {HTMLCanvasElement} canvas
	 * @param {Screen} screen
	 */
	constructor(canvas, screen) {
		console.log("Initializing FinecwaftClient!");
		FinecwaftClient.instance = this;
		this.fpsCounter = 0;
		this.running = true;
		this.currentScreeen = screen;
		this.renderer = new Renderer(canvas);
	}

	run() {
		this.render();
	}

	/**
	 * @returns {FinecwaftClient | null}
	 */
	static getInstance() {
		return FinecwaftClient.instance;
	}

	/**
	 * @returns {boolean}
	 */
	isRunning() {
		return this.running;
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
		this.running = false;
		FinecwaftClient.instance = null;
	}

	/**
	 * @param {Screen | null} screen
	 */
	setScreen(screen) {
		if (this.currentScreeen != null) this.currentScreeen.removed();
		if (screen == null) {
			screen = new TitleScreen();
		}
		this.screen = screen;
	}

	stop() {}

	close() {}

	render() {
		if (!this.running) return;
		++this.fpsCounter;
		requestAnimationFrame(this.render.bind(this));
		this.renderer.clear();
		// render
		if (this.currentScreeen == null)
			return this.crash("Current screen is null.");
		try {
			this.currentScreeen.render();
		} catch (e) {
			this.crash(e);
		}
	}
}
