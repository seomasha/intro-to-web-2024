addFriend = () => {
  let timeout;

  document.getElementById("addFriend").addEventListener("click", () => {
    const alert = document.getElementById("alert");

    alert.classList.remove("d-none");
    alert.innerHTML = `You have sent a friend request to <strong>Fikret Zajmovic</strong>`

    clearTimeout(timeout);

    timeout = setTimeout(() => {
      document.getElementById("alert").classList.add("d-none");
    }, 3000);
  });
};

applyPosition = () => {
  let timeout;

  document.getElementById("applyPosition").addEventListener("click", () => {

    const alert = document.getElementById("alert");

    alert.classList.remove("d-none");
    alert.innerHTML = `You have succesfully applied for the <strong>Frontend Web Developer position at IT Startup</strong>`

    clearTimeout(timeout);

    timeout = setTimeout(() => {
      document.getElementById("alert").classList.add("d-none");
    }, 3000);
  });
};

applyStartup = () => {
  let timeout;

  document.getElementById("applyStartup").addEventListener("click", () => {

    const alert = document.getElementById("alert");

    alert.classList.remove("d-none");
    alert.innerHTML = `You have succesfully applied for <strong>IT Startup</strong>`

    clearTimeout(timeout);

    timeout = setTimeout(() => {
      document.getElementById("alert").classList.add("d-none");
    }, 3000);
  });
}

addFriend();
applyPosition();
applyStartup();