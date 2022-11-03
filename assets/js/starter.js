// Importing JavaScript
//
// You have two choices for including Bootstrap's JS files—the whole thing,
// or just the bits that you need.


// Option 1
//
// Import Bootstrap's bundle (all of Bootstrap's JS + Popper.js dependency)

import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../../node_modules/owl.carousel/dist/owl.carousel.js";


// Option 2
//
// Import just what we need

// If you're importing tooltips or popovers, be sure to include our Popper.js dependency
// import "../../node_modules/popper.js/dist/popper.min.js";

// import "../../node_modules/bootstrap/js/dist/util.js";
// import "../../node_modules/bootstrap/js/dist/modal.js";
/**
 * Owl Carousel
 */
var owl = $('.owl-carousel');
var prevCarousel = `
    <div class='nav-btn prev-slide rounded-circle'>
        <svg class="bi text-white mr-2 pb-1" width="22" height="22">
            <use xlink:href="node_modules/bootstrap-icons/bootstrap-icons.svg#chevron-left" />
        </svg></span>
    </div>
`
var nextCarousel = `
    <div class='nav-btn next-slide rounded-circle'>
        <svg class="bi text-white mr-2 pb-1" width="22" height="22">
            <use xlink:href="node_modules/bootstrap-icons/bootstrap-icons.svg#chevron-right" />
        </svg></span>
    </div>
`
owl.owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    },
    navText: [prevCarousel, nextCarousel],
})
