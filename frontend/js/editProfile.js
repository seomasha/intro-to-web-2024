const nameInput = document.getElementById("nameInput");
const usernameInput = document.getElementById("usernameInput");
const imageInput = document.getElementById("imageInput").files[0];

document.getElementById("editButton").addEventListener("click", () => {
  document.getElementById("name").innerText = nameInput.value;
  document.getElementById("username").innerText = "@" + usernameInput.value;

  const reader = new FileReader();

  reader.onload = (e) => {
    const profileImage = e.target.result;

    document.getElementById("image").setAttribute("src", profileImage);
  };

  //reader.readAsDataURL(imageInput);
});
