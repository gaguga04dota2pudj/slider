// Инициализируем Swiper
new Swiper('.image-slider',{
	//Стрелки
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	//Навигатция
	//Буллеты, текущее положение, прогрессбар
	pagination: {
		el: '.swiper-pagination',
		/*
		//Буллеты
		clickable: true,
		//Динамические буллеты
		dynamicBullets: true,
		//Кастомные буллеты
		renderBullet: function (index, className) {
			return '<span class="'+ className + '">' + (index + 1) + '</span>';
		},
		*/
		// Фракция
		type: 'fraction',
		//Кастомный вывод фраксии
		renderFraction: function (currentClass, totalClass) {
			return 'Фото <span class="' + currentClass + '"></span>' +
			' из ' +
			'<span class="' + totalClass + '"></span>';
		},
		/*
		// Прогрессбар
		type: 'progressbar'
		*/
	},
	// Скролл
	scrollbar: {
		el: '.swiper-scrollbar',
		// Возможность перетаскивать скролл
		draggable: true
	},

	// Включение/отключение
	// перетаскивания на ПК
	simulateTouch: true,
	// Чуствителность свайпа
	touchRatio: 1,
	// Угол срабатывания свайпа/перетаскивания
	touchAngle: 45,
	// Курсор перетаскивания
	grabCursor: true,
});