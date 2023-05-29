import FinecwaftClient from "../../FinecwaftClient.js";
import TextRenderer from "../../font/TextRenderer.js";

export default class Screen {
	/**
	 * @protected
	 * @type {string}
	 */
	title;

	/**
	 * @protected
	 * @type {FinecwaftClient | null}
	 */
	client;

	/**
	 * @type {number}
	 */
	width;

	/**
	 * @type {number}
	 */
	height;

	/**
	 * @protected
	 * @type {TextRenderer}
	 */
	textRenderer;

	/**
	 * @protected
	 * @type {Screen | null}
	 */
	parent;

	/**
	 * @param {string} title
	 */
	constructor(title) {
		this.title = title;
	}

	getTitle() {
		return this.title;
	}

	render() {}

	/**
	 * @param {number} keyCode
	 * @param {number} scanCode
	 * @param {number} modifiers
	 */
	keyPressed(keyCode, scanCode, modifiers) {}

	shouldCloseOnEsc() {
		return true;
	}

	close() {
		this.client.setScreen(null);
	}

	/**
	 * @param {FinecwaftClient} client
	 * @param {number} width
	 * @param {number} height
	 */
	init(client, width, height) {}

	tick() {}

	removed() {}

	shouldPause() {
		return true;
	}
}
