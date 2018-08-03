$(window).scroll(function () {
    if (isInView($('#video-container'))) {
        //fire whatever you what 
        $('.navbar-sidebar').hide();
    } else {
        $('.navbar-sidebar').show();
    }
})
function isInView(elem) {
    const difference = $(elem).offset().top - $(window).scrollTop();
    const heightOfElem = $(elem).height();
    const isTop = difference > 0 && difference < heightOfElem / 2;
    const isBottom = difference < 0 && difference > heightOfElem * (-1);
    return isTop || isBottom;
}