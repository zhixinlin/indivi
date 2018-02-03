$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 3000) {
        $('#floating-cta').fadeIn();
    } else {
        $('#floating-cta').fadeOut();
    }

});
