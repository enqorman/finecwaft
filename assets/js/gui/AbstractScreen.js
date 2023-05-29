export default class AbstractScreen {
	/**
	 * @private
	 * @type {AbstractScreen | null}
	 */
	parent;

	/**
	 * @param {AbstractScreen | null} parent
	 */
	constructor(parent) {
		this.parent = parent;
	}

	render() {}
}
