var searchQuestions = $("#search_questions");
searchQuestions.focus(),
  searchQuestions.keyup(function() {
    var s = $(".brands_list .brand_item");
    $(".brands_list .brands-messages").hide();
    var e = $(this).val(),
      a = $(".search_questions_wrap .brands-clear"),
      t = s.filter(function() {
        var s = new RegExp(e, "i"),
          a = $(this)
            .find("img")
            .attr("alt");
        return !s.test(a);
      });
    "" === e
      ? (s.show(), a.hasClass("active") && a.removeClass("active"))
      : (t.hide(), a.hasClass("active") || a.addClass("active"));
    var i = s.filter(function() {
      var s = new RegExp(e, "i"),
        a = $(this)
          .find("img")
          .attr("alt");
      return s.test(a);
    });
    i
      .stop()
      .show()
      .addClass("bounceInRight"),
      mediaCheck({
        media: "(max-width: 640px)",
        entry: $.proxy(function() {
          $([document.documentElement, document.body]).animate(
            { scrollTop: searchQuestions.offset().top - 58 },
            750
          );
        }, this),
        exit: $.proxy(function() {}, this)
      }),
      i.length || $(".brands_list .brands-messages").show();
  }),
  $(".brands-clear").on("click", function() {
    $("#search_questions").val(""),
      $(".brands_list .brand_item").show(),
      $(".brands_list .brands-messages").hide(),
      $(".brands-clear").hasClass("active") &&
        $(".brands-clear").removeClass("active"),
      $("#search_questions").focus();
  });
