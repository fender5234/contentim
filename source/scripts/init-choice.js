import Choices from 'choices.js';
/* eslint-disable */
const initChoice = () => {
	const select = document.querySelector('.js-choice');

	if (!select) {
		return;
	}
	const choices = new Choices(select, {
		allowHTML: true,
		itemSelectText: false,
		placeholder: false,
		searchChoices: false,
		searchEnabled: false
	});
};

export default initChoice;
