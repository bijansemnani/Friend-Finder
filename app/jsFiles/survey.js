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
      scores:[]
    };

    for (var i = 1; i < 11; i++) {
      var q = parseInt($("#q"+i).val().trim());
      console.log(q);
      newFriend.scores.push(q)
    }

    reset();
    $.post("/api/friends", newFriend)
    .then(function (data) {
      console.log(data);
      $("#Modal").modal('show');
      $("#modalBody").html(data.name);
    })
  });
});
