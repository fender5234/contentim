import Choices from 'choices.js';
/* eslint-disable */
const initChoice = () => {
	const select = document.querySelector('.js-choice');

	if (select) {
		const choices = new Choices(select, {
			allowHTML: true,
			itemSelectText: ' ',
			placeholder: false,
			searchChoices: false,
			position: 'bottom',
			searchEnabled: false,
			classNames: {
				containerOuter: 'choices choice-main',
				listDropdown: 'choices__list--dropdown'
			}
		});
	}

	const aboutSelect = document.querySelector('.about-js-choice');
	if (aboutSelect) {
		const aboutSelectInit = new Choices(aboutSelect, {
			allowHTML: true,
			itemSelectText: ' ',
			placeholder: false,
			position: 'bottom',
			searchChoices: false,
			searchEnabled: false,
			classNames: {
				containerOuter: 'choices choices-about',
				listDropdown: 'choices__list--dropdown'
			}
		});
	}

	const commandSelect = document.querySelector('.command-js-choice');
	if (commandSelect) {
		const commandSelectInit = new Choices(commandSelect, {
			allowHTML: true,
			itemSelectText: ' ',
			placeholder: false,
			position: 'bottom',
			searchChoices: false,
			searchEnabled: false,
			classNames: {
				containerOuter: 'choices about-choices',
				listDropdown: 'choices__list--dropdown'
			}
		});
	}
};

export default initChoice;
