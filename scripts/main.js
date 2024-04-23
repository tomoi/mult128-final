$('#mobile-nav').on('click', function () {
        $('#navbar').slideToggle();
})

$('#card-1').on('click', function () {
        $('#card-content-1').slideToggle("slow");
        $('#card-1 > h4').text('Scroll');
        $('#card-1 > h4').addClass('card-arrow');

        $('#card-content-3').slideUp("slow");
        $('#card-content-2').slideUp("slow");
})

$('#card-2').on('click', function () {
        $('#card-content-2').slideToggle("slow");
        $('#card-2 > h4').text('Scroll');
        $('#card-2 > h4').addClass('card-arrow');

        $('#card-content-3').slideUp("slow");
        $('#card-content-1').slideUp("slow");

})

$('#card-3').on('click', function () {
        $('#card-content-3').slideToggle("slow");
        $('#card-3 > h4').text('Scroll');
        $('#card-3 > h4').addClass('card-arrow');

        $('#card-content-2').slideUp("slow");
        $('#card-content-1').slideUp("slow");
})