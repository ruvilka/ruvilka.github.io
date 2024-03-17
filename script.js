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

    let message = `<b>Новая Заявка</b>\n`;
    message += `<b>имя: </b> ${this.name.value }\n`;
    message += `<b>почта: </b> ${this.email.value }\n`;
    console.log(message);
    
    axios.post(URI_API, {
        chat_id: chat_id,
        parse_mode: 'html',
        text: message 
    })
    .then((res) =>{
        this.name.value = '';
        this.email.value = '';
        success.style.display = "block";
    })
    .catch((err) =>{
        console.warn(err)
    })
    .finally(()=>{
        console.log('отправленно')
    })
    
})