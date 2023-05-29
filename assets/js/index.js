import FinecwaftClient from "./FinecwaftClient.js";
import TitleScreen from "./gui/screen/TitleScreen.js";

(async function main() {
	/**
	 * @type {HTMLCanvasElement | null}
	 */
	const canvas = document.getElementById("app");
	if (canvas == null) {
		throw new Error(
			"Failed to initalize Finecwaft: Missing canvas container with id 'app'."
		);
	}

	// init
	const client = new FinecwaftClient(canvas, new TitleScreen(null));
	client.run();
	// todo: game closed
})();
