$(document).ready(function () {
  //Function to clear the input boxes and option dropdown boxes
  function reset() {
    $("#name").val(" ");
    $("#photo").val(" ");
    for (var i = 1; i < 11; i++) {
      var q = "#q" + i;
      $(q).val('').trigger("chosen:updated");
    }
  }

  $("#submit").on("click", function () {
    //On submit click create new object with info passed in
    var newFriend = {
      name: $("#name").val().trim(),
      photo: $("#photo").val().trim(),
      scores:[]
    };
    //Record the scores of the user in an array
    for (var i = 1; i < 11; i++) {
      var q = parseInt($("#q"+i).val().trim());
      newFriend.scores.push(q)
    }
    reset();
    //Make ajax post call to back-end to post new user in database
    $.post("/api/friends", newFriend)
    .then(function (data) {
      //Create a modal popup with the match response from the back-end
      $("#modalBody").empty();
      $("#Modal").modal('show');
      $("#modalBody").html("<h3> Name: " + data.name + "</h3>");
      //Get the image from the returned data object to show user
      var img = $("<img>");
      img.attr("src", data.photo);
      img.attr("height", "300px");
      img.attr("class", "text-center");
      $("#modalBody").append(img);
    });
  });
});
