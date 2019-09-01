//scroll from other site
if (window.location.hash.length == 8) {
    $('body, html').animate({
            scrollTop: $('.zalety').offset().top - 25
        },
        1000)
} else if (window.location.hash.length == 7) {
    $('body, html').animate({
            scrollTop: $('.kariera').offset().top - 25
        },
        1000)
}

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



const $kolumna = $('.kolumna');
const $containerLiczby = $('.containerLiczby');
const pLiczby = document.querySelectorAll(".pLiczby");
const containerLiczbyFromTop = $containerLiczby.offset().top
const containerLiczbyHeight = $containerLiczby.outerHeight();
const kolumnaFromTop = $kolumna.offset().top
const kolumnaHeight = $kolumna.outerHeight();
const windowHeight = $(window).height();
let flag = 1;
let indexNumber0 = 0;
let indexNumber1 = 0;
let indexNumber2 = 0;
let resetLiczb = () => {
    pLiczby.forEach(Liczba => {
        Liczba.textContent = `0`;
    })
};
resetLiczb();
$(document).on('scroll', function () {
    const scrollValue = $(this).scrollTop();
    if (scrollValue > kolumnaFromTop + kolumnaHeight / 3 - windowHeight + 50) {
        $kolumna.addClass('active');
    }

    if (scrollValue > containerLiczbyFromTop + containerLiczbyHeight / 3 - windowHeight && flag == 1) {
        flag = 0;
        let Number1 = () => {
            indexNumber0 += 10;
            pLiczby[0].textContent = `${indexNumber0}`;
            if (indexNumber0 >= 2700) {
                clearInterval(increment1);
            }
        }
        let increment1 = setInterval(Number1, 5);

        let Number2 = () => {
            indexNumber1 += 50;
            pLiczby[1].textContent = `${indexNumber1}`;
            if (indexNumber1 >= 14578) {
                clearInterval(increment2);
            }
        }
        let increment2 = setInterval(Number2, 5);

        let Number3 = () => {
            indexNumber2 += 1;
            pLiczby[2].textContent = `${indexNumber2}%`;
            if (indexNumber2 >= 100) {
                clearInterval(increment3);

            }
        }
        let increment3 = setInterval(Number3, 20);
    }
})
// Slider
const pOsoba = document.querySelector('p.osoba');
const pRola = document.querySelector('p.rola');
const pOpinia = document.querySelector('p.opinia');
const dots = [...document.querySelectorAll('.dots span')]
const time = 5000;
let active = 0;
const slideList = [{
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
const changeDot = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
    dots[activeDot].classList.remove('active');
    dots[active].classList.add('active');
}

const changeSlide = () => {
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