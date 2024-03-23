/* 
=================Шапка================
*/






// Проверяем, есть ли сохраненное значение скролла в Local Storage
var savedScrollPosition = localStorage.getItem('scrollPosition');
if (savedScrollPosition) {
    $(window).scrollTop(savedScrollPosition);

    if (savedScrollPosition >= 60) {
        $('header').addClass('header-open');
        $('nav').addClass('fixed-header');
    }
    if (savedScrollPosition >= 1) {
        $('nav ul').removeClass('visible-title');
    } else {
        $('nav').removeClass('fixed-header');
        $('nav ul').addClass('visible-title');
        $('body').removeClass('menu-active');
        $('header').removeClass('header-open');
    }
}

// Обработчик события скролла
$(window).scroll(function(){
    var scrollPosition = $(window).scrollTop();

    // Сохраняем текущее значение скролла в Local Storage
    localStorage.setItem('scrollPosition', scrollPosition);

    if (scrollPosition >= 60) {
        $('header').addClass('header-open');
        $('nav').addClass('fixed-header');
    }
    if (scrollPosition >= 1) {
        $('nav ul').removeClass('visible-title');
    } else {
        $('nav').removeClass('fixed-header');
        $('nav ul').addClass('visible-title');
        $('body').removeClass('menu-active');
        $('header').removeClass('header-open');
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

$('#content').on('click', function() {
    $('body').removeClass('menu-active');
});

/* 
================плавный скролл===========
*/
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
    
    
    
    /*
    =============скролл на верх==========
    */
   $(document).ready(function(){
       $('#site-title').click(function(){
           document.querySelector('#up').scrollIntoView({
               behavior: 'smooth'
            });
        });
    });
    
    
    /*
    ====================форма================
    */
   const token = "5503407538:AAHLyriaZKCbGFc0INxKMut9XGW0nf-UJ-Y"; // Укажи здесь токен своего бота Telegram
const chat_id = "-1002073943410"; // Укажи здесь токен своего бота Telegram
const URI_API = `https://api.telegram.org/bot${ token }/sendMessage`;

document.getElementById('tg').addEventListener('submit', function(e){
    e.preventDefault();

    let nameValue = document.getElementById('name').value;
    let emailValue = document.getElementById('email').value;
    let phoneValue = document.getElementById('phone').value;

    // Удаление всех пробелов из номера телефона
    let phoneCleaned = phoneValue.replace(/\s/g, '');

    let message = `<b>Новая Заявка</b>\n`;
    message += `<b>имя: </b> ${nameValue}\n`;
    message += `<b>почта: </b> ${emailValue}\n`;
    message += `<b>тел: </b> ${phoneCleaned}\n`;
    console.log(message);
    
    axios.post(URI_API, {
        chat_id: chat_id,
        parse_mode: 'html',
        text: message 
    })
    .then((res) =>{
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('phone').value = '';
        success.style.display = "block";
    })
    .catch((err) =>{
        console.warn(err)
    })
    .finally(()=>{
        console.log('отправлено')
    })
})



$(document).ready(function(){
    $('#bc5b1').click(function(){
        document.querySelector('#form').scrollIntoView({
            behavior: 'smooth'
        });
     });
 });
 


// карусель

$(document).ready(function() {
    $(".custom-carousel").owlCarousel({
        autoWidth: true,
        loop: true
    });
});

$(document).ready(function () {
    $(".custom-carousel .item").hover(function () {
        $(".custom-carousel .item").not($(this)).removeClass("active");
        $(this).toggleClass("active");
    });
    
    $(".prev-btn").click(function() {
        $(".custom-carousel").trigger('prev.owl.carousel');
        // $(".item").removeClass("active");
    });
    
    $(".next-btn").click(function() {
        $(".custom-carousel").trigger('next.owl.carousel');
        // $(".item").removeClass("active");
    });
});

// видимость скролл кнопок
const ua = navigator.userAgent;
if (!/(Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|tablet|ipad|playbook|silk|android(?!.*mobile))/i.test(ua)) {
    const bttns = document.getElementById('bttns');
    if (bttns) {
        bttns.classList.add('visible-title');
        console.log('Класс .visible-title добавлен к элементу с id "bttns".');
    } else {
        console.log('Элемент с id "bttns" не найден.');
    }
} else {
    console.log('Устройство не определено как ПК.');
}