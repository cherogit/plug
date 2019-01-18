$('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    var target = this.hash,
        $target = $(target);

    $('html, body').stop().animate( {
        scrollTop: $target.offset().top
    }, 900);
});

$('._phone-mask').mask('+7 (000) 000-00-00', {
    placeholder: '+7 (___) ___ - __ - __',
    selectOnFocus: true
});