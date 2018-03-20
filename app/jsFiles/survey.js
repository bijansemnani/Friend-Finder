$(document).ready(function () {
  console.log("here");

  function reset() {
    $("#name").val(" ");
    $("#photo").val(" ");
    for (var i = 1; i < 11; i++) {
      var q = "#q" + i;
      $(q).val('').trigger("chosen:updated");
    }
  }

  $("#submit").on("click", function () {
    var newFriend = {
      name: $("#name").val().trim(),
      photo: $("#photo").val().trim(),
      scores:[
        $("#q1").val().trim(),
        $("#q2").val().trim(),
        $("#q3").val().trim(),
        $("#q4").val().trim(),
        $("#q5").val().trim(),
        $("#q6").val().trim(),
        $("#q7").val().trim(),
        $("#q8").val().trim(),
        $("#q9").val().trim(),
        $("#q10").val().trim()
      ]
    };
    reset();
    $.post("/api/friends", newFriend)
    .then(function (data) {
      console.log(data);
    })
  });
});
