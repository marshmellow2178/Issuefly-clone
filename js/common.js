$('header').load('inc.html header > .wrapper', menu);
$('footer').load('inc.html footer > nav, footer > p', menu);
$('.cookietext').load('inc.html .cookietext > p, .cookietext > button', cookieLoad);

let url = location.pathname.split('/')[1]; 

function menu(){
    $('nav > a').each(function(){
        if($(this).attr('href')==url){
            $(this).addClass('active');
        }
        else{
            $(this).removeClass('active');
        }
        console.log(url, $(this).attr('href'))
    });

    $('header .openmenu').on('click', function () {
        $(this).hide();
        $('header nav').addClass('active');
    });
}

function cookieLoad(){
    const cookie = document.querySelector('.cookie');
    const cookieText = document.querySelector('.cookietext');
    const button = document.querySelector('.cookietext button');
    cookie.addEventListener('click', function () {
        cookieText.classList.add('active');
    });
    button.addEventListener('click', function () {
        cookieText.classList.remove('active');
    });
}


