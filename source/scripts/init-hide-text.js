/* eslint-disable */
const initHideText = () => {
	const hideTextList = document.querySelector('.catalog__list');

	if (!hideTextList) {
		return;
	}

	hideTextList.addEventListener('click', function (evt) {
		evt.target.closest('.catalog__list-item').classList.toggle('catalog__list-item--active');
	});
};

export default initHideText;
