addFriend = () => {
  let timeout;

  $("#addFriend").click(() => {

    const alert = $("#alert");

    alert.removeClass("d-none");
    alert.html("You have sent a friend request to <strong>Fikret Zajmovic</strong>")

    clearTimeout(timeout);

    timeout = setTimeout(() => {
      document.getElementById("alert").classList.add("d-none");
    }, 3000);
  })
};

applyPosition = () => {
  let timeout;

  $("#applyPosition").click(() => {

    const alert = $("#alert");

    alert.removeClass("d-none");
    alert.html("You have succesfully applied for the <strong>Frontend Web Developer position at IT Startup</strong>")

    clearTimeout(timeout);

    timeout = setTimeout(() => {
      document.getElementById("alert").classList.add("d-none");
    }, 3000);
  })
};

applyStartup = () => {
  let timeout;

  
  $("#applyStartup").click(() => {

    const alert = $("#alert");

    alert.removeClass("d-none");
    alert.html("You have succesfully applied for <strong>IT Startup</strong>")

    clearTimeout(timeout);

    timeout = setTimeout(() => {
      document.getElementById("alert").classList.add("d-none");
    }, 3000);
  })

}

addFriend();
applyPosition();
applyStartup();