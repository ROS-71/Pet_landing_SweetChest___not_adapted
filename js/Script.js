let offset = 0; /* Переменная хранящая смещение от левого края */
const sliderline = document.querySelector('.Slider-line');

document.querySelector('.ScrRep_SliderRight').addEventListener('click', function (){
	offset = offset + 1566;	/* Можно сделать короче: offset += 1566 (сама картинка 1212px + 354px поле слева*/
	if (offset > 3132) {		/* Если offset больше 3132px */
		offset = 0;				/* то offset равен 0 (начальная позиция) - т.е. зацикливаем слайдер на кнопке вправо*/
	}
	sliderline.style.left = -offset + 'px'; /* стили left и right работают только когда элемнту присвоен position, лучше всего относительный relative */
});

document.querySelector('.ScrRep_SliderLeft').addEventListener('click', function (){
	offset -= 1566;			/* !!!   Замена на более короький код: offset -= 1566 */
	if (offset < 0) {			/* Если offset меньше 0 */
		offset = 3132;			/* то offset равен 3132 (коненая позиция) - т.е. зацикливаем слайдер на кнопке влево */
	}
	sliderline.style.left = -offset + 'px';
});