jQuery(document).ready(function($) {
  $('.brick-event').each(function() {
    var brick_height = $(this).data("brick-height");
    $(this).find('.brick-photo').css({'height': brick_height});
  });
});
