$(document).on('scroll', function() {
    if( $(this).scrollTop() >= $('.sales-reading').position().top ){
        $('#floating-cta').fadeIn();
    }
    else {
        $('#floating-cta').fadeOut();
    }
});
