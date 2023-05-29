import Finecwaft from "./Finecwaft.js";
import TitleScreen from "./gui/screens/TitleScreen.js";

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

	new Finecwaft(canvas, new TitleScreen(null));
})();
