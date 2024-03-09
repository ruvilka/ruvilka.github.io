/* 
=================Шапка================
*/
// Проверяем состояние скролла при загрузке страницы
$(document).ready(function() {
    if (localStorage.getItem('scrollPosition') >= 301) {
        $('nav').addClass('fixed-header');
        $('nav div').addClass('visible-title');
        $('nav ul').removeClass('visible-title');
    }
    else {
        $('nav').removeClass('fixed-header');
        $('nav div').removeClass('visible-title');
        $('nav ul').addClass('visible-title');
    }
});

// Обработчик события скролла
$(window).scroll(function(){
    var scrollPosition = $(window).scrollTop();

    // Сохраняем текущее значение скролла в Local Storage
    localStorage.setItem('scrollPosition', scrollPosition);

    if (scrollPosition >= 301) {
        $('nav').addClass('fixed-header');
        $('nav div').addClass('visible-title');
        $('nav ul').removeClass('visible-title');
    }
    else {
        $('nav').removeClass('fixed-header');
        $('nav div').removeClass('visible-title');
        $('nav ul').addClass('visible-title');
        $('body').removeClass('menu-active');
    }
});
    


    
    /*
=======Slidemenu===============
    */
(function() {
	var $motionbody = document.body
	, $menu_trigger = $motionbody.getElementsByClassName('menu-trigger')[0];

	if ( typeof $menu_trigger !== 'undefined' ) {
		$menu_trigger.addEventListener('click', function() {
			$motionbody.className = ( $motionbody.className == 'menu-active' )? '' : 'menu-active';
		});
	}

}).call(this);

/* плавный скролл */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        setTimeout(function() {
            $('body').removeClass('menu-active');
        }, 10); // 1000 миллисекунд = 1 секунда

        setTimeout(function() {
                document.querySelector(anchor.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            }, 150); // 1000 миллисекунд = 1 секунда

    });
});
