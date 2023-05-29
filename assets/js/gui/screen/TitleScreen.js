import FinecwaftClient from "../../FinecwaftClient.js";
import Screen from "./Screen.js";

export default class TitleScreen extends Screen {
	/**
	 * @param {Screen | null} parent
	 */
	constructor(parent) {
		super(parent);
	}

	render() {
		super.render();
		const instance = FinecwaftClient.getInstance();
		if (!instance) return;
		const renderer = instance.renderer;
		renderer.setColor("white");
		renderer.drawCenteredRect(0, 0, 750, 150, 0.5);
		renderer.setColor("red");
		renderer.drawCenteredText(instance.fpsCounter, 0, 0, 5);
	}
}
