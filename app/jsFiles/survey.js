$(document).ready(function () {
  console.log("here");

  $("#submit").on("click", function () {
    console.log("here");
    var newFriend = {
      name: $("#name").val().trim(),
      photo: $("#photo").val().trim()
    }
  });
});
