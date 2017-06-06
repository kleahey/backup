$(document).ready(function() {
  $("#newQuote").on("click", function () {
  $.ajax({
      url: "http://api.icndb.com/jokes/random",
      dataType: "json",
      type: "get",
      cache: false,
      success: function (data) {
          $(data.value).each(function(index, value) {
            $('#message').html(value.joke);
          }
      )}
  });
  });
});

