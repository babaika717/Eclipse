document.addEventListener('DOMContentLoaded', function () {

    //FIRST CAROUSEL
    $('.slides').slick({
        autoplay: true,
        arrows: false,
        infinite: true,
        pauseOnHover: false,
        autoplaySpeed: 3000,
        dots: true,
        dotsClass: "my-dots"
    });

    //SECOND CAROSUEL
    $('.carousel-inner').slick({
        autoplay: true,
        arrows: false,
        infinite: true,
        pauseOnHover: false,
        autoplaySpeed: 3000,
        dots: true,
        draggable: false,
        dotsClass: "my-dots"
    });

    //THIRD CAROUSEL
    $('.carousel-start').slick({
        autoplay: true,
        arrows: true,
        infinite: true,
        pauseOnHover: false,
        autoplaySpeed: 3000,
        appendArrows: '.arrow',
        prevArrow: '<span class="slick-arrow slick-prev navigate"><img src="./assets/images/arrow-left.png"></span>',
        nextArrow: '<span class="slick-arrow slick-next navigate"><img src="./assets/images/arrow-right.png"></span>'
    });

    //THIRD FOR SMALL DEVICES
    $('.carousel-init').slick({
        autoplay: true,
        arrows: true,
        infinite: true,
        pauseOnHover: false,
        autoplaySpeed: 3000,
        appendArrows: '.arrow2',
        prevArrow: '<span class="slick-arrow slick-prev navigate"><img src="./assets/images/arrow-left.png"></span>',
        nextArrow: '<span class="slick-arrow slick-next navigate"><img src="./assets/images/arrow-right.png"></span>'
    });

    ////////CALLBACK

    var
        callback = document.getElementById('callback'),
        callback2 = document.getElementById('callback2'),
        popup = document.getElementById('popup'),
        close = document.getElementById('closebtn'),
        inptConf0 = document.getElementsByClassName('inpt-conf0')[0],
        inptConf = document.getElementsByClassName('inpt-conf')[0],
        inptConf2 = document.getElementsByClassName('inpt-conf2')[0],
        inptConf3 = document.getElementsByClassName('inpt-conf3')[0],
        inptConf4 = document.getElementsByClassName('inpt-conf4')[0],
        question = document.getElementById('question'),
        ask = document.getElementById('ask'),
        submit = document.getElementById('confirm'),
        name0 = document.getElementById('name0'),
        name = document.getElementById('name'),
        name2 = document.getElementById('name2'),
        name3 = document.getElementById('name3'),
        name4 = document.getElementById('name4'),
        send = document.getElementById('send'),
        translate = document.getElementById('translate'),
        telephone0 = document.getElementById('telephone0'),
        telephone = document.getElementById('telephone'),
        email0 = document.getElementById('email0'),
        email = document.getElementById('email'),
        email3 = document.getElementById('email3'),
        email4 = document.getElementById('email4'),
        telephone2 = document.getElementById('telephone2'),
        telephone3 = document.getElementById('telephone3');


    submit.addEventListener('click',function () {
        inptConf.style.display = 'block';
    });

    send.addEventListener('click',function () {
        inptConf2.style.display = 'block';
    });

    translate.addEventListener('click',function () {
        inptConf3.style.display = 'block';
    });

    ask.addEventListener('click',function () {
        inptConf4.style.display = 'block';
    });

    function FirstButton() {
        close.disabled = name0.value.trim().length === 0;
        close.disabled = telephone0.value.trim().length === 0;
        close.disabled = email0.value.trim().length === 0;
        close.style.cursor = 'not-allowed';
        if (telephone0.value.trim().length >= 1 && name0.value.trim().length >= 1 && email0.value.trim().length >= 1) {
            close.style.cursor = 'pointer';
        } else {
            close.style.cursor = 'not-allowed';
        }
    }

    name0.addEventListener('input', FirstButton, false);
    FirstButton.call(name0);
    telephone0.addEventListener('input', FirstButton, false);
    FirstButton.call(telephone0);
    email0.addEventListener('input', FirstButton, false);
    FirstButton.call(email0);


    function Button() {
        submit.disabled = name.value.trim().length === 0;
        submit.disabled = telephone.value.trim().length === 0;
        submit.style.cursor = 'not-allowed';
        send.disabled = name2.value.trim().length === 0;
        send.disabled = telephone2.value.trim().length === 0;
        send.disabled = email.value.trim().length === 0;
        send.style.cursor = 'not-allowed';
        if (telephone.value.trim().length >= 1 && name.value.trim().length >= 1) {
            submit.style.cursor = 'pointer';
        } else {
            submit.style.cursor = 'not-allowed';
        }
        if (telephone2.value.trim().length >= 1 && name2.value.trim().length >= 1 && email.value.trim().length >= 1) {
            send.style.cursor = 'pointer';
        } else {
            send.style.cursor = 'not-allowed';
        }
    }

    name.addEventListener('input', Button, false);
    Button.call(name);
    telephone.addEventListener('input', Button, false);
    Button.call(telephone);

    name2.addEventListener('input', Button, false);
    Button.call(name2);
    telephone2.addEventListener('input', Button, false);
    Button.call(telephone2);
    email.addEventListener('input', Button, false);
    Button.call(email);


    function ThirdButton() {
        translate.disabled = name3.value.trim().length === 0;
        translate.disabled = telephone3.value.trim().length === 0;
        translate.disabled = email3.value.trim().length === 0;
        translate.style.cursor = 'not-allowed';
        if (telephone3.value.trim().length >= 1 && name3.value.trim().length >= 1 && email3.value.trim().length >= 1) {
            translate.style.cursor = 'pointer';
        } else {
            translate.style.cursor = 'not-allowed';
        }
    }

    name3.addEventListener('input', ThirdButton, false);
    ThirdButton.call(name3);
    telephone3.addEventListener('input', ThirdButton, false);
    ThirdButton.call(telephone3);
    email3.addEventListener('input', ThirdButton, false);
    ThirdButton.call(email3);


    function LastButton() {
        ask.disabled = name4.value.trim().length === 0;
        ask.disabled = email4.value.trim().length === 0;
        ask.style.cursor = 'not-allowed';
        if (name4.value.trim().length >= 1 && email4.value.trim().length >= 1) {
            ask.style.cursor = 'pointer';
        } else {
            ask.style.cursor = 'not-allowed';
        }
    }

    name4.addEventListener('input', LastButton, false);
    LastButton.call(name4);
    email4.addEventListener('input', LastButton, false);
    LastButton.call(email4);

    ////////////SIMPLEBOX

    (function(){
        var boxes=[],els,i,l;
        if(document.querySelectorAll){
            els=document.querySelectorAll('a[rel=simplebox]');

            Box.getStyles('simplebox_css','./lib/simplebox/simplebox.css');
            Box.getScripts('simplebox_js','./lib/simplebox/simplebox.js',function(){
                simplebox.init();
                for(i=0,l=els.length;i<l;++i)
                    simplebox.start(els[i]);
                simplebox.start('a[rel=simplebox_group]');
            });
        }


    })();

    //////////////MAIN-MENU

    $('.hamburger, .hide_menu').click(function(){
        $('.hide_menu').toggleClass('menu-open');
    });

    ////////////POPUP`s

    $(function () {
        $(".callback, #callback2").on("click", function(){
            $("#popup").fadeIn(700);
        });

        $(".background-field").on("click", function(){
            $("#popup").fadeOut(700);
        });
    });











});