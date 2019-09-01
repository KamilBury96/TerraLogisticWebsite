pOsoba = document.querySelector('p.osoba');
pRola = document.querySelector('p.rola');
pOpinia = document.querySelector('p.opinia');
dots = [...document.querySelectorAll('.dots span')]
time = 5000;
active = 0;
slideList = [{
        osoba: 'Mateusz Szymański',
        rola: 'Client',
        opinia: 'Good, modern fleet. Everything on time as it should be. Transport without problems. Cultural, good driver. The driver knows languages, knows this job. I recommend working with Ms Dominika',
    },
    {
        osoba: 'Weronika Dymaniuk',
        rola: 'Carrier',
        opinia: 'Exemplary contact with the forwarder, everything without any problems, I recommend !!',
    },
    {
        osoba: 'Tomasz Gosk',
        rola: 'Client',
        opinia: 'I recommend this company. Exemplary contact with the forwarder, everything without any problems, I recommend !!',
    },
    {
        osoba: 'Monika Olechowska',
        rola: 'Carrier',
        opinia: ' I recommend TerraLogistic. Very good contact with Mr. Maciek. I recommend cooperation. ',
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