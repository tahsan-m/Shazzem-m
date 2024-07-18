$(document).ready(function(){
    /* Get iframe src attribute value i.e. YouTube video url

    and store it in a variable */
    var url = $("#ytVideo").attr('src');
    /* Remove iframe src attribute on page load to

    prevent autoplay in background */
    $("#ytVideo").attr('src', '')
    /* Assign the initially stored url back to the iframe src
    attribute when modal is displayed */
    $("#videoModal").on('shown.bs.modal', function(){
        $("#ytVideo").attr('src', url);
    });

    /* Assign empty url value to the iframe src attribute when
    modal hide, which stop the video playing */
    $("#videoModal").on('hide.bs.modal', function(){
        $("#ytVideo").attr('src', '');
    });
});

//ekko-lightbox effect
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
      event.preventDefault();
      $(this).ekkoLightbox();
});

//slick slider
$(document).ready(function(){
  $('.slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1
});
});
