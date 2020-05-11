var elements = $('.modal-overlay, .modales');

$('.sd').click(function(){
    elements.addClass('active');
});

$('.close-modal').click(function(){
    elements.removeClass('active');
});