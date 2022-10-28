$('header').load('inc.html header > .wrapper', menu);
$('footer').load('inc.html footer > nav, footer > p', fmenu);
$('.cookietext').load('inc.html .cookietext > p, .cookietext > button', cookieLoad);

let index = localStorage.index;
function menu() {
    $('header nav > a').removeClass('active');
    if (index != undefined) {
        $('header nav > a').eq(index).addClass('active');
    }

    $('header nav > a').on('click', function () {
        localStorage.index = $(this).index();
        if(index!=2){
            localStorage.findex = undefined;
        }
        else{
            localStorage.findex = 0;
        }
    });

    $('header .openmenu').on('click', function () {
        $('header nav').addClass('active');
        console.log(1)
    });
} 

let findex = localStorage.findex;
function fmenu() {
    $('footer nav > a').removeClass('active');
    $('footer nav > a').eq(findex).addClass('active');
    $('footer nav > a').on('click', function () {
        localStorage.findex = $(this).index();
        if(localStorage.findex !=0){
            localStorage.index = undefined;
        }
        else{
            localStorage.index = 1;
        }
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


