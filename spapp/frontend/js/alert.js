addFriend = () => {
  let timeout;

  document.getElementById("addFriend").addEventListener("click", () => {
    document.getElementById("friendAlert").classList.remove("d-none");

    clearTimeout(timeout);

    timeout = setTimeout(() => {
      document.getElementById("friendAlert").classList.add("d-none");
    }, 3000);
  });
};

applyStartup = () => {
  let timeout;

  document.getElementById("applyStartup").addEventListener("click", () => {
    document.getElementById("applyAlert").classList.remove("d-none");

    clearTimeout(timeout);

    timeout = setTimeout(() => {
      document.getElementById("applyAlert").classList.add("d-none");
    }, 3000);
  });
};

addFriend();
applyStartup();