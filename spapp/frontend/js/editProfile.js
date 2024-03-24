$("#editButton").on("click", function() {
  $("#name").text($("#nameInput").val());
  $("#username").text("@" + $("#usernameInput").val());

  const reader = new FileReader();

  reader.onload = function(e) {
    $("#image").attr("src", e.target.result);
  };

  reader.readAsDataURL($("#imageInput")[0].files[0]);
});
