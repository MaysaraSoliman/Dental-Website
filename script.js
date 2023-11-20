// *********************************** Start Function of header Bar Menu *************************************

// This for Open navbar in mobile screen
let openHeaderBarMenu = document.querySelector("#header-bottom .container .fa-bars");

openHeaderBarMenu.addEventListener("click", function () {
    document.querySelector("#header-bottom .container .links").style.cssText = "left: 0;"
})

// This for Close navbar in mobile screen
let closeHeaderBarMenu = document.querySelector("#header-bottom .container .links .fa-times");

closeHeaderBarMenu.addEventListener("click", function () {
    document.querySelector("#header-bottom .container .links").style.cssText = "left: -100%;"
})

// This for RightArrown navbar in mobile screen
let rightArrow = document.querySelectorAll("#header-bottom .container .links .fa-long-arrow-alt-right");

rightArrow[0].addEventListener("click", function () {
    document.querySelectorAll("#header-bottom .container .links li .first-inner-links")[0].style.cssText = "left: 0; top: 0; opacity: 1;"
})

rightArrow[1].addEventListener("click", function () {
    document.querySelectorAll("#header-bottom .container .links li .first-inner-links")[1].style.cssText = "left: 0; top: 0; opacity: 1;"
})

// This for LeftArrow navbar in mobile screen

let leftArrow = document.querySelectorAll("#header-bottom .container .links .fa-long-arrow-alt-left");

leftArrow[0].addEventListener("click", function () {
    document.querySelectorAll("#header-bottom .container .links li .first-inner-links")[0].style.cssText = "left: 100%; top: 0; opacity: 0;"
})

leftArrow[1].addEventListener("click", function () {
    document.querySelectorAll("#header-bottom .container .links li .first-inner-links")[1].style.cssText = "left: 100%; top: 0; opacity: 0;"
})
//********************************* */ End Function of header Bar Menu **************************************

// ******************************** Start Main Scroll Slider ******************************************
// this for manual scroll
function scrollSlider(arrow, container, imageScroll) {
    arrow[0]?.addEventListener("click", function () {
        container.scrollLeft -= imageScroll.clientWidth;
    })

    arrow[1]?.addEventListener("click", function () {
        container.scrollLeft += imageScroll.clientWidth;
    })
}

// this manual scroll by gap
function scrollSliderByGap(arrow, container, imageScroll) {
    arrow[0]?.addEventListener("click", function () {
        container.scrollLeft -= imageScroll.clientWidth + 10;
    })

    arrow[1]?.addEventListener("click", function () {
        container.scrollLeft += imageScroll.clientWidth + 10;
    })
}

// ******************************** End Main Scroll Slider ******************************************

// ********************************** Start Hero Section Slider ***************************************************
let heroArrows = document.querySelectorAll("#hero .arrows i");
let heroSliderContainer = document.querySelector("#hero .hero-container");
let colScroll = document.querySelector("#hero .hero-container .col");

// This for run scrollslider
scrollSlider(heroArrows, heroSliderContainer, colScroll)

if (document.querySelector("#hero .col")) {
    // this for auto scroll
    let isHeroSectionHover = false;

    heroSliderContainer?.addEventListener('mouseover', function () {
        isHeroSectionHover = true;
    });

    heroSliderContainer?.addEventListener('mouseout', function () {
        isHeroSectionHover = false;
    });

    function heroAutoslideRight() {
        if (isHeroSectionHover === true) {
            return false;
        }
        heroSliderContainer.style.scrollBehavior = "smooth"
        heroSliderContainer.scrollLeft += colScroll.clientWidth;
    }

    function heroAutoslideLeft() {
        if (isHeroSectionHover === true) {
            return false;
        }
        heroSliderContainer.style.scrollBehavior = "smooth"
        heroSliderContainer.scrollLeft -= colScroll.clientWidth;
    }

    function heroAutoslide() {
        setTimeout(heroAutoslideRight, 5000),
            setTimeout(heroAutoslideRight, 10000),
            setTimeout(heroAutoslideLeft, 15000),
            setTimeout(heroAutoslideLeft, 20000)
    }

    heroAutoslide()
    setInterval(heroAutoslide, 20000)
}

// ********************************** End Hero Section Slider ***************************************************

// ********************************** Start Offers Counting  ***********************************\

if (document.querySelector("#offers")) {
    // Implant Offer
    let implantOffer = setInterval(() => {
        let implantCountDownDate = new Date("dec 31, 2023 23:59:59").getTime();
        // Date Now
        let dateNow = new Date().getTime();

        // The Difference between now and countDown
        let dateDiff = implantCountDownDate - dateNow;

        // Time Units
        const days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

        document.querySelector("#offers .implant-offer .time .days").innerHTML = days < 10 ? `0${days}` : days;
        document.querySelector("#offers .implant-offer .time .hours").innerHTML = hours < 10 ? `0${hours}` : hours;
        document.querySelector("#offers .implant-offer .time .minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
        document.querySelector("#offers .implant-offer .time .seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

        if (dateDiff < 0) {
            clearInterval(implantOffer);
            document.querySelector("#offers .implant-offer").style.cssText = "display: none;"
        }

    }, 1000)
}

if (document.querySelector("#offers")) {
    // Veneers Offer
    let veneersOffer = setInterval(() => {
        let veneersCountDownDate = new Date("dec 31, 2023 23:59:59").getTime();
        // Date Now
        const dateNow = new Date().getTime();

        // The Difference between now and countDown
        let dateDiff = veneersCountDownDate - dateNow;

        // Time Units
        const days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

        document.querySelector("#offers .veneers-offer .time .days").innerHTML = days < 10 ? `0${days}` : days;
        document.querySelector("#offers .veneers-offer .time .hours").innerHTML = hours < 10 ? `0${hours}` : hours;
        document.querySelector("#offers .veneers-offer .time .minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
        document.querySelector("#offers .veneers-offer .time .seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

        if (dateDiff < 0) {
            clearInterval(veneersOffer);
            document.querySelector("#offers .veneers-offer").style.cssText = "display: none;"
        }

    }, 1000)
}

if (document.querySelector("#offers")) {
    // Whitening Offer
    let whiteningOffer = setInterval(() => {
        let whiteningCountDownDate = new Date("dec 31, 2023 13:10:59").getTime();
        // Date Now
        let dateNow = new Date().getTime();

        // The Difference between now and countDown
        let dateDiff = whiteningCountDownDate - dateNow;

        // Time Units
        const days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

        document.querySelector("#offers .whitening-offer .time .days").innerHTML = days < 10 ? `0${days}` : days;
        document.querySelector("#offers .whitening-offer .time .hours").innerHTML = hours < 10 ? `0${hours}` : hours;
        document.querySelector("#offers .whitening-offer .time .minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
        document.querySelector("#offers .whitening-offer .time .seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

        if (dateDiff < 0) {
            clearInterval(whiteningOffer);
            document.querySelector("#offers .whitening-offer").style.cssText = "display: none;"
        }

    }, 1000)
}

// ********************************** End Offers Counting  ***********************************\

// *********************************** Start Our Services Slider *******************************

let ourServicesArrow = document?.querySelectorAll("#ourServices .container .arrows i");
let ourServicesContainer = document?.querySelector("#ourServices .container .services-wrapper");
let ourServicesCol = document?.querySelector("#ourServices .container .services-wrapper .col")

// this for run scroll slider by gap
scrollSliderByGap(ourServicesArrow, ourServicesContainer, ourServicesCol);

if (document.querySelector("#ourServices")) {
    // this for auto scroll
    let isOurServicesSectionHover = false;

    ourServicesContainer?.addEventListener('mouseover', function () {
        isOurServicesSectionHover = true;
    });

    ourServicesContainer?.addEventListener('mouseout', function () {
        isOurServicesSectionHover = false;
    });

    function ourServicesAutoslideRight() {
        if (isOurServicesSectionHover === true) {
            return false;
        }
        ourServicesContainer.style.scrollBehavior = "smooth"
        ourServicesContainer.scrollLeft += ourServicesCol.clientWidth + 10;
    }

    function ourServicesAutoslideLeft() {
        if (isOurServicesSectionHover === true) {
            return false;
        }
        ourServicesContainer.style.scrollBehavior = "smooth"
        ourServicesContainer.scrollLeft -= ourServicesCol.clientWidth + 10;
    }

    function ourServicesAutoslide() {
        setTimeout(ourServicesAutoslideRight, 4000),
            setTimeout(ourServicesAutoslideRight, 8000),
            setTimeout(ourServicesAutoslideRight, 12000),
            setTimeout(ourServicesAutoslideRight, 16000),
            setTimeout(ourServicesAutoslideRight, 20000),
            setTimeout(ourServicesAutoslideLeft, 24000),
            setTimeout(ourServicesAutoslideLeft, 28000),
            setTimeout(ourServicesAutoslideLeft, 32000),
            setTimeout(ourServicesAutoslideLeft, 36000),
            setTimeout(ourServicesAutoslideLeft, 40000)
    }

    ourServicesAutoslide()
    setInterval(ourServicesAutoslide, 40000)
}

// *********************************** End Our Services Slider *******************************

// ********************************** Start before & after image ***********************************\

const beforeAfterContainer = document.querySelectorAll("#beforeAndAfter .container .col");

function slideBeforeAndAfter(beforeAfterContainer) {
    beforeAfterContainer.forEach(function (el) {
        el.querySelector(".slider").addEventListener("input", function (e) {
            el.style.setProperty(`--position`, `${e.target.value}%`)
        })
    })
}
slideBeforeAndAfter(beforeAfterContainer)

// ********************************** End before & after image ***********************************

// ********************************** Start Reviews Slider ****************************************

// const reviewsSlide = document?.querySelector("#reviews .reviews-slide");
// const reviewImage = reviewsSlide?.querySelector(".image");


// // this for auto scroll
// let isfocusStart = false;

// reviewsSlide?.addEventListener('mouseover', function () {
//     isfocusStart = true;
// });

// reviewsSlide?.addEventListener('mouseout', function () {
//     isfocusStart = false;
// });

// function AutoslideRight(e) {
//     if (isfocusStart === true) {
//         return e.preventDefault();
//     }
//     reviewsSlide.style.scrollBehavior = "smooth"
//     reviewsSlide.scrollLeft += reviewImage.clientWidth + 10;
// }

// function AutoslideLeft(e) {
//     if (isfocusStart === true) {
//         return e.preventDefault();
//     }
//     reviewsSlide.style.scrollBehavior = "smooth"
//     reviewsSlide.scrollLeft -= reviewImage.clientWidth + 10;
// }

// function Autoslide2() {
//     setTimeout(AutoslideRight, 8000),
//         setTimeout(AutoslideRight, 16000),
//         setTimeout(AutoslideRight, 24000),
//         setTimeout(AutoslideRight, 32000),
//         setTimeout(AutoslideLeft, 40000),
//         setTimeout(AutoslideLeft, 48000),
//         setTimeout(AutoslideLeft, 56000),
//         setTimeout(AutoslideLeft, 64000)
// }

// Autoslide2()
// setInterval(Autoslide2, 64000)

// // this for manual scroll
// let arrowsReviewSlider = document?.querySelectorAll("#reviews .col i");

// function scrollReviews() {
//     arrowsReviewSlider[0]?.addEventListener("click", function () {
//         reviewsSlide.scrollLeft += reviewImage.clientWidth + 10;
//     })

//     arrowsReviewSlider[1]?.addEventListener("click", function () {
//         reviewsSlide.scrollLeft -= reviewImage.clientWidth + 10;
//     })
// }

// scrollReviews()

// ********************************** End Reviews Slider ****************************************

// ********************************** Start What Patient Says Slider *************************************
let patientSaysArrow = document?.querySelectorAll("#whatOurPatientsSay .container .arrows i");
let patientSaysContainer = document?.querySelector("#whatOurPatientsSay .container .reviews-container");
let patientSaysCol = document?.querySelector("#whatOurPatientsSay .container .reviews-container .col")

// this for run scroll slider by gap
scrollSliderByGap(patientSaysArrow, patientSaysContainer, patientSaysCol);

if (document.querySelector("#whatOurPatientsSay")) {
    // this for auto scroll
    let isPatientSaysSectionHover = false;

    patientSaysContainer?.addEventListener('mouseover', function () {
        isPatientSaysSectionHover = true;
    });

    patientSaysContainer?.addEventListener('mouseout', function () {
        isPatientSaysSectionHover = false;
    });

    function patientSaysAutoslideRight() {
        if (isPatientSaysSectionHover === true) {
            return false;
        }
        patientSaysContainer.style.scrollBehavior = "smooth"
        patientSaysContainer.scrollLeft += patientSaysCol.clientWidth + 10;
    }

    function patientSaysAutoslideLeft() {
        if (isPatientSaysSectionHover === true) {
            return false;
        }
        patientSaysContainer.style.scrollBehavior = "smooth"
        patientSaysContainer.scrollLeft -= patientSaysCol.clientWidth + 10;
    }

    function patientSaysAutoslide() {
        setTimeout(patientSaysAutoslideRight, 6000),
            setTimeout(patientSaysAutoslideRight, 12000),
            setTimeout(patientSaysAutoslideRight, 18000),
            setTimeout(patientSaysAutoslideLeft, 24000),
            setTimeout(patientSaysAutoslideLeft, 30000),
            setTimeout(patientSaysAutoslideLeft, 36000)
    }

    patientSaysAutoslide()
    setInterval(patientSaysAutoslide, 42000)
}


// ********************************** End What Patient Says Slider *************************************

// ********************************* Start The Office Slider *******************************************

const theOfficeSliderContainer = document.querySelector("#theOfficeSlider .theOfficeSlider-container");
const theOfficeSliderCol = document.querySelector("#theOfficeSlider .theOfficeSlider-container .col");
const theOfficeSliderArrow = document.querySelectorAll("#theOfficeSlider .arrows i");

scrollSliderByGap(theOfficeSliderArrow, theOfficeSliderContainer, theOfficeSliderCol);

// ********************************* End The Office Slider *******************************************

// ********************************** Start button scroll to top ***********************************

const arrowUp = document?.querySelector(".scrollToTop .arrow i");

window.onscroll = function () {
    if (window.scrollY >= 600) {
        // arrowUp.style.display = "flex"
        arrowUp.style.cssText = "right: 10px"
    } else {
        // arrowUp.style.display = "none"
        arrowUp.style.cssText = "right: -100%"
    }
}
arrowUp?.addEventListener("click", function () {
    window?.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth",
    });
});

// ********************************** End button scroll to top ***********************************

// ********************************* Start Google Reviews bar************************************

let googleReviewsBtn = document.getElementById("googleReviewsButton");
let googleReviewsBar = document.getElementById("googleReviewsBar");
let quitBar = document?.querySelector("#googleReviewsBar .fa-xmark")

// Open Google Reviews Bar
googleReviewsBtn?.addEventListener("click", function () {
    googleReviewsBar.style.cssText = " left: 0;";
    quitBar.classList.add('active');
    // quitBar.style.cssText = " left: 31%;";
})

// Close Google Reviews Bar
quitBar?.addEventListener("click", function (e) {
    googleReviewsBar.style.cssText = " left: -100%;";
    // e.target.style.cssText = "left: -100%;";
    e.target.classList.remove('active')
})

// ********************************* End Google Reviews bar***********************************************

// ********************************* Start Intersection Observe Animation *********************************

window?.addEventListener('scroll', fade);

function fade() {
    let fade = document?.querySelectorAll('.fade');

    for (let i = 0; i < fade.length; i++) {
        let windowHeight = window.innerHeight;
        let fadeTop = fade[i].getBoundingClientRect().top;
        let fadePoint = 150;

        if (fadeTop < windowHeight - fadePoint) {
            fade[i].classList.add('animation')
            fade[i].classList.add('active')
        }

    }
}

// ********************************* End Intersection Observe Animation *********************************

// ********************************* Start PopUp Office Gallery **********************************************
let imageBox = document.querySelectorAll("#office .container .office-wrapper .col img");
function displayPopUpImage(imageBox) {
    imageBox.forEach((img) => {
        img.addEventListener("click", function () {
            this.closest(".col").classList.add("popupCol");
            this.closest(".col").querySelector("i").classList.add("popupIcon");
            this.classList.add("popupImage");
            // Run Hide Popup Image
            hidePopUpImage(this.closest(".col").querySelector("i"))
        })
    })
}
displayPopUpImage(imageBox)

function hidePopUpImage(icon) {
    icon.addEventListener("click", function () {
        this.closest(".col").classList.remove("popupCol");
        this.closest(".col").querySelector("img").classList.remove("popupImage");
    })
}
// ********************************* End PopUp Office Gallery **********************************************

// ********************************* Start PopUp Follow us Gallery **********************************************
let imageFollowBox = document.querySelectorAll("#followUs .followUs-wrapper .col .image img");
displayPopUpImage(imageFollowBox)

// ********************************* Start PopUp Follow us Gallery **********************************************

// ********************************* Start Display and Slide Smiles Section *************************************

function displaySmilesBeforeAndAfter() {
    let proceduresList = document.querySelectorAll("#smiles .container .smiles-wrapper ul li");
    proceduresList.forEach((procedure) => {
        procedure.addEventListener("click", function () {
            getSmilesContainer(this.getAttribute("data-name"));
        })
    })
}

function getSmilesContainer(procedure) {
    let smileGalleryContainer = document.querySelectorAll("#smiles .container .smiles-gallery-container");
    smileGalleryContainer.forEach((container) => {
        container.style.cssText = "display: none";
        if (container.getAttribute("data-name") == procedure && container.hasAttribute("data-name")) {
            container.style.cssText = "display: flex";
        }
    })
}
displaySmilesBeforeAndAfter()

let smileGalleryContainer = document.querySelectorAll("#smiles .container .smiles-gallery-container .col");
// This For Run slide right and left
slideBeforeAndAfter(smileGalleryContainer)

// ********************************* End Display and Slide Smiles Section *************************************
