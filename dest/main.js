// bgr header


let heightjHeader = $("header").height();

$(document).scroll(function() {
    let heightPage = $(document).height() - $(window).height();
    let scrollTop = $(window).scrollTop();
    let progressBar = 100 * scrollTop / heightPage;
    let scrollBar = $("header .scroll-bar");
    if (scrollTop > heightjHeader) {
        scrollBar.show();
        scrollBar.css({
            height: '4px',
            width: progressBar + "%"
        })
    } else {
        scrollBar.hide();
    }
})

let header = document.querySelector('header');
let slider = document.querySelector('.slider');
let heighSlider = slider.clientHeight;
heighHeader = header.clientHeight;

function changeBgheader() {
    let scrollY = window.pageYOffset;
    if (scrollY > (heighSlider - heighHeader)) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }

}


// back to top 

let backtotop = document.querySelector('.backtotop');

function showBackToTop() {
    let scrollY = window.pageYOffset;
    if (scrollY > (heighSlider - heighHeader)) {
        backtotop.classList.add('active');
    } else {
        backtotop.classList.remove('active');
    }
}

backtotop.addEventListener('click', function() {
    // window.scrollTo({
    //         top: 0,
    //         behavior: 'smooth'
    //     })
    $("html, body").animate({ scrollTop: 0 });
});


document.addEventListener('scroll', function() {
    changeBgheader();
    showBackToTop();
});



// hambuger button
let nav = document.querySelector('.nav');
let btnMenu = document.querySelector('header .btnmenu');
btnMenu.onclick = function() {
    nav.classList.toggle('active');
    this.classList.toggle('clicked');

}
let langCur = document.querySelector('.lang .lang__current span');
let lang = document.querySelector('.lang');
let langOptions = document.querySelector('.lang .lang__option');
let langItem = document.querySelectorAll('.lang .lang__option a');
lang.addEventListener('click', function(e) {

    lang.classList.toggle('active');
    e.stopPropagation();
});
langItem.forEach(function(item) {
    item.addEventListener('click', function() {
        let langDefaults = document.querySelector('.lang .lang__current').textContent;
        langCur.innerHTML = this.textContent;
        this.innerHTML = langDefaults;
    });
});

// body

let body = document.querySelector('body');
body.addEventListener('click', function() {
    lang.classList.remove('active');
});

// news active

// let tag = document.querySelectorAll('.tag');
// let box = document.querySelectorAll('.box');

// tag.forEach(function(item, index) {
//     item.addEventListener('click', function() {
//         let tagID = index + 1;
//         tag.forEach(function(t) {
//             t.classList.remove('active');
//         });
//         this.classList.add('active');

//         box.forEach(function(b) {
//             b.classList.remove('active');
//         });
//         document.querySelector('.box' + '-' + tagID).classList.add('active');
//     });
// });

$(document).ready(function() {
        let box = $(".news__tag .box");
        $(document).on('click', '.news__tag .news__tag-text .tag', function() {
            let i = $(this).index();
            let itemBox = box.eq(i);
            box.removeClass('active');
            $('.news__tag .news__tag-text .tag').removeClass('active');
            itemBox.addClass('active');
            $(this).addClass('active');
        })
    })
    // menu go 

let menu = document.querySelectorAll('header .menu a');
let listChoice = document.querySelectorAll('.menu li');
let menuMain = document.querySelectorAll('header .container-fluid .menu a');


function removeActiveMenu() {
    menu.forEach(function(m) {
        m.classList.remove('active');
    });
}
let listSec = [];
menu.forEach(function(item, index) {

    let href = item.getAttribute('href').replace('#', '');
    let section = document.querySelector('.' + href);
    listSec.push(section);
    item.addEventListener('click', function(e) {
        e.preventDefault;
        removeActiveMenu();
        this.classList.remove('active');
        btnMenu.classList.remove('clicked');
        nav.classList.remove('active');

        let posSection = section.offsetTop;
        // window.scrollTo({
        //     top: posSection - heighHeader + 1,

        //     behavior: 'smooth'

        // });
        $("html, body").animate({ scrollTop: (posSection - heighHeader + 1) });
    });
});

window.addEventListener('scroll', function(e) {
    let posSectionScroll = window.pageYOffset;
    let count = 0;
    listSec.forEach(function(item, index) {
        if (count < 5) {
            if (posSectionScroll > item.offsetTop - heighHeader && posSectionScroll < item.offsetTop + item.clientHeight) {
                removeActiveMenu();
                menu[index].classList.add('active');
            } else {
                menu[index].classList.remove('active');
            }
        }
        count++;
    });
});



// slider
// let currentSlider = 0;
// let listItemSlider = document.querySelectorAll('.slider__image-item');
// let node = document.querySelectorAll('.slider__bottom ul li');
// let number = document.querySelector('.slider__bottom .pagging span');
// let slider__image = document.querySelector('.slider__image');

// slider__image.style.width = listItemSlider.length * 100 + "vw";
// const sizeSlider = listItemSlider[0].clientWidth;



// listItemSlider.forEach(function(item, index) {
//     if (item.classList.contains('active')) {
//         currentSlider = index;

//     }
// });

// function showNumber(index) {
//     if (index < 10) {
//         number.innerHTML = '0' + (index + 1);
//     } else {
//         number.innerHTML = index;
//     }
// }

// function gotoSlider(index) {
//     listItemSlider[currentSlider].classList.remove('active');
//     listItemSlider[index].classList.add('active');
//     currentSlider = index;
//     showNumber(index);
//     removeActiveNode();
//     node[index].classList.add('active');
//     slider__image.style.transition = "transform 0.4s ease-in-out";
//     slider__image.style.transform = "translateX(" + (-sizeSlider * currentSlider) + 'px)';


// };



// button prev , next button

// document.querySelector('.control__btn.next').addEventListener('click', function() {
//     if (currentSlider < listItemSlider.length - 1) {
//         gotoSlider(currentSlider + 1);

//     } else {
//         gotoSlider(0);
//     }

// });

// document.querySelector('.control__btn.prev').addEventListener('click', function() {
//     if (currentSlider > 0) {
//         gotoSlider(currentSlider - 1);
//     } else {
//         gotoSlider(listItemSlider.length - 1);
//     }
// });

// node 
// function removeActiveNode() {
//     node.forEach(function(item, index) {
//         item.classList.remove('active');
//     });
// }
// node.forEach(function(item, index) {
//     item.addEventListener('click', function() {
//         removeActiveNode();
//         this.classList.add('active');
//         gotoSlider(index);
//         showNumber(index);
//     });
// });

// slider libary

let $carousel = $('.slider__image');
$carousel.flickity({
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
    prevNextButtons: false,
    autoPlay: 2500,
    pauseAutoPlayOnHover: true,
    on: {
        ready: function() {
            let dotted = $('.flickity-page-dots');
            pagging = $('.slider__bottom .dotted');
            dotted.appendTo(pagging);
        },
        change: function(index) {
            let number = $('.slider__bottom .pagging span');
            let indexPage = index + 1;
            number.text(indexPage.toString().padStart(2, 0));
        }
    }
});

$('.slider__bottom .control .prev').on('click', function() {
    $carousel.flickity('previous');
});
$('.slider__bottom .control .next').on('click', function() {
    $carousel.flickity('next');
});


// image scroll
$(document).ready(function() {
    let $imageCarousel = $('.drag-item');
    $progressBar = $(".process .time-line");
    $imageCarousel.flickity({
        freeScroll: true,
        cellAlign: 'left',
        contain: true,
        prevNextButtons: false,
        pageDots: false,
        fullscreen: true,
        lazyLoad: 2,
        // wrapAround: true,

    });

    $imageCarousel.on('scroll.flickity', function(event, progress) {
        progress = Math.max(0, Math.min(1, progress));
        $progressBar.width(progress * 100 + '%');
    });
})









// pop up video

let popup_video = document.querySelector('.popup-video');
let iframe = document.querySelector('.popup-video iframe');
let btn_video = document.querySelectorAll('.play-btn');
let close_video = document.querySelector('.popup-video .close');
btn_video.forEach(function(item, index) {
    item.addEventListener('click', function() {
        let videoId = item.getAttribute('data-video-id');
        iframe.setAttribute('src', 'https://www.youtube.com/embed/' + videoId);
        popup_video.style.display = 'flex';

    });
});

close_video.addEventListener('click', function() {
    iframe.setAttribute('src', '');
    popup_video.style.display = 'none';
});

popup_video.addEventListener('click', function(e) {
    iframe.setAttribute('src', '');
    popup_video.style.display = 'none';
});



$(document).ready(function() {

    $("nav ul li").hover(function() {
            $(this).addClass("active");
            $("li.active").siblings().css({
                "opacity": "0.5",
                "transition": "0.3s"
            });

        },
        function() {
            $(this).removeClass("active");
            $("li").siblings().css({
                "opacity": "1",
                "transition": "0.3s"
            });

        });

})

// ------------------------------------------------------------------------------------

// lib photoswipe

var initPhotoSwipeFromDOM = function(gallerySelector) {
    var parseThumbnailElements = function(el) {
        var thumbElements = el.childNodes,
            numNodes = thumbElements.length,
            items = [],
            figureEl,
            linkEl,
            size,
            item;
        for (var i = 0; i < numNodes; i++) {
            figureEl = thumbElements[i]; // <figure> element
            if (figureEl.nodeType !== 1) {
                continue;
            }
            linkEl = figureEl.children[0]; // <a> element
            size = linkEl.getAttribute('data-size').split('x');
            item = {
                src: linkEl.getAttribute('href'),
                w: parseInt(size[0], 10),
                h: parseInt(size[1], 10)
            };
            if (figureEl.children.length > 1) {
                item.title = figureEl.children[1].innerHTML;
            }
            if (linkEl.children.length > 0) {
                // <img> thumbnail element, retrieving thumbnail url
                item.msrc = linkEl.children[0].getAttribute('src');
            }
            item.el = figureEl; // save link to element for getThumbBoundsFn
            items.push(item);
        }
        return items;
    };
    var closest = function closest(el, fn) {
        return el && (fn(el) ? el : closest(el.parentNode, fn));
    };
    var onThumbnailsClick = function(e) {
        e = e || window.event;
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
        var eTarget = e.target || e.srcElement;
        var clickedListItem = closest(eTarget, function(el) {
            return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
        });
        if (!clickedListItem) {
            return;
        }
        var clickedGallery = clickedListItem.parentNode,
            childNodes = clickedListItem.parentNode.childNodes,
            numChildNodes = childNodes.length,
            nodeIndex = 0,
            index;
        for (var i = 0; i < numChildNodes; i++) {
            if (childNodes[i].nodeType !== 1) {
                continue;
            }
            if (childNodes[i] === clickedListItem) {
                index = nodeIndex;
                break;
            }
            nodeIndex++;
        }
        if (index >= 0) {
            openPhotoSwipe(index, clickedGallery);
        }
        return false;
    };
    var photoswipeParseHash = function() {
        var hash = window.location.hash.substring(1),
            params = {};
        if (hash.length < 5) {
            return params;
        }
        var vars = hash.split('&');
        for (var i = 0; i < vars.length; i++) {
            if (!vars[i]) {
                continue;
            }
            var pair = vars[i].split('=');
            if (pair.length < 2) {
                continue;
            }
            params[pair[0]] = pair[1];
        }
        if (params.gid) {
            params.gid = parseInt(params.gid, 10);
        }
        return params;
    };
    var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
        var pswpElement = document.querySelectorAll('.pswp')[0],
            gallery,
            options,
            items;
        items = parseThumbnailElements(galleryElement);
        options = {
            galleryUID: galleryElement.getAttribute('data-pswp-uid'),
            getThumbBoundsFn: function(index) {
                var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                    pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                    rect = thumbnail.getBoundingClientRect();

                return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
            },
            showAnimationDuration: 0,
            hideAnimationDuration: 0
        };
        if (fromURL) {
            if (options.galleryPIDs) {
                for (var j = 0; j < items.length; j++) {
                    if (items[j].pid == index) {
                        options.index = j;
                        break;
                    }
                }
            } else {
                options.index = parseInt(index, 10) - 1;
            }
        } else {
            options.index = parseInt(index, 10);
        }
        if (isNaN(options.index)) {
            return;
        }
        if (disableAnimation) {
            options.showAnimationDuration = 0;
        }
        gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    };
    var galleryElements = document.querySelectorAll(gallerySelector);
    for (var i = 0, l = galleryElements.length; i < l; i++) {
        galleryElements[i].setAttribute('data-pswp-uid', i + 1);
        galleryElements[i].onclick = onThumbnailsClick;
    }
    var hashData = photoswipeParseHash();
    if (hashData.pid && hashData.gid) {
        openPhotoSwipe(hashData.pid, galleryElements[hashData.gid - 1], true, true);
    }
};


initPhotoSwipeFromDOM('.gallery__grid-item');