/* eslint-disable */
const initHideText = () => {
	const hideTextList = document.querySelector('.catalog__list');

	if (!hideTextList) {
		return;
	}

	const hideTextElements = hideTextList.querySelectorAll('.cover-wrapper');

	const hidenText = () => {
		hideTextElements.forEach((textElement) => {
			textElement.previousElementSibling.classList.remove('catalog__list-item--active');
		});
	};

	hideTextList.addEventListener('click', function (evt) {
		hideTextElements.forEach((textElement) => {
			if (evt.target === textElement) {
				if (textElement.previousElementSibling.classList.contains('catalog__list-item--active')) {
					hidenText();
				} else {
					hidenText();
					textElement.previousElementSibling.classList.add('catalog__list-item--active');
				}
			}
		});
	});
};

export default initHideText;
