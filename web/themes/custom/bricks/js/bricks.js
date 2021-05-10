jQuery(document).ready(function($) {

  // Set brick heights on project pages:
  $('.brick-event').each(function() {
    var brick_height = $(this).data('brick-height');
    $(this).find('.brick-photo').css({'height': brick_height});
  });

  // Scroll to previous event.
  $('.prev-event').click(function(event){
    event.preventDefault();
    $('html, body').animate({scrollTop: $(this).parents('.brick-event').prev().offset().top -200 }, 'slow');
  });

  // Scroll to next event.
  $('.next-event').click(function(event){
    event.preventDefault();
    $('html, body').animate({scrollTop: $(this).parents('.brick-event').next().offset().top -200 }, 'slow');
  });

  // Implement srcroll to brick event for Brick Events Menu:
  $('.brick-event-menu a').click(function(event){
    event.preventDefault();
    var target_event_id = 'brick-event-' + $(this).data('target-event-id');
    $('html, body').animate({scrollTop: $('#'+target_event_id).offset().top -200 }, 'slow');
  })

  // Mobile Menu
  $('.menu-toggle').click(function() {
    $('body').toggleClass('mm-active');
    $('.mobile-menu').toggleClass('mm-active');
    $(this).toggleClass('mm-active');
  })
 
});
