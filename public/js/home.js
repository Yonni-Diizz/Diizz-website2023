$(".awards-block  .content").on("mouseover", function() { // Changes the .image-holder's img src to the src defined in .list a's data attribute.
    var value=$(this).attr('data-src');
    $(".awards-photos img").attr("src", value);
    $(this).addClass("active");
})

  $(".awards-block ").on("mouseleave", function() {
    $( '.awards-photos img' ).attr("src","");
  });
  $(".awards-block .content").on("mouseleave", function() {
    $(this).removeClass("active");
  });