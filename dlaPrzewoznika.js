//scroll

$('.aboutUs').on('click', function () {
    $('body, html').animate({
            scrollTop: $('.zalety').offset().top - 25
        },
        1000)
})
$('.career').on('click', function () {
    $('body, html').animate({
            scrollTop: $('.kariera').offset().top - 25
        },
        1000)
})




//slider
pOsoba = document.querySelector('p.osoba');
pRola = document.querySelector('p.rola');
pOpinia = document.querySelector('p.opinia');
dots = [...document.querySelectorAll('.dots span')]
time = 5000;
active = 0;
slideList = [{
        osoba: 'Mateusz Szymański',
        rola: 'Klient',
        opinia: 'Dobra, nowoczesna flota. Wszystko na czas jak trzeba. Transport bez problemów. Kulturalny, dobry kierowca. Kierowca zna języki, zna się na tej pracy. polecam wspólpraca z Panią Dominiką wzorowa',
    },
    {
        osoba: 'Weronika Dymaniuk',
        rola: 'Przewoźnik',
        opinia: 'Polecam tę firmę. wzorowy kontakt ze spedytorem, wszystko bez najmniejszych problemów, polecam!!',
    },
    {
        osoba: 'Tomasz Gosk',
        rola: 'Klient',
        opinia: 'Wszystko na czas jak trzeba. Transport bez problemów. Polecam przewoźnika',
    },
    {
        osoba: 'Monika Olechowska',
        rola: 'Przewoźnik',
        opinia: 'Płaci w terminie. Polecam tę firmę. Bardzo dobry kontakt z Panem Maćkiem. Polecam współpracę. ',
    }
];
changeDot = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
    dots[activeDot].classList.remove('active');
    dots[active].classList.add('active');
}

changeSlide = () => {
    active++;
    if (active === slideList.length) {
        active = 0;
    }
    pOsoba.textContent = slideList[active].osoba;
    pRola.textContent = slideList[active].rola;
    pOpinia.textContent = slideList[active].opinia;
    changeDot()

}
changeSlide();
setInterval(changeSlide, time);

$(window).on('load', function () {
    const $zapytanieh1 = $('.zapytanie h1');
    const $zapytanie1h1 = $('.zapytanie1 h1');
    const $zapytaniep = $('.zapytanie p');
    const $zapytanie1p = $('.zapytanie1 p');
    const $lewah1 = $('.lewa h1');
    const $lewap = $('.lewa p');
    window.setTimeout(function () {
        $zapytanie1h1.addClass('active');
        $zapytanie1p.addClass('active');
    }, 800);
    $zapytanieh1.addClass('active');
    $zapytaniep.addClass('active');
    window.setTimeout(function () {
        $lewah1.addClass('active');
        $lewap.addClass('active');
    }, 1600);
})


$(document).ready(function () {
    $("html").on("submit", "#contact_form", function (e) {
        e.preventDefault();
        $("#send_form_status").html('').hide();
        var data = $("#contact_form").serialize();
        $.post("/send_form.php", data, function (res) {
            $("#send_form_status").html(res.msg).show();
            if (res.status == 1) {
                $("#contact_form")[0].reset();
            }
        });
    });
});