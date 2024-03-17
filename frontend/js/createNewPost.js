const createPost = document.getElementById("createPost");
const postSection = document.getElementById("postSection");


createPost.addEventListener("click", () => {
  const postDescription = document.getElementById("postDescription");
  const postDescriptionValue = postDescription.value;

  const postImage = document.getElementById("postImage").files[0];

  const reader = new FileReader();

  reader.onload = (e) => {
    const postImageValue = e.target.result;

    const html = `
    <br>
    <div class="bg-white rounded-5 p-4 border">
        <div class="justify-content-start">
            <div class="gap-2 d-flex">
            <img
                src="../assets/profilepic.jpg"
                class="rounded-5 rounded-circle"
                style="width: 50px; height: 50px; background-size: cover"
            />
            <div class="p-2">
                <h2 class="fs-6">
                Sead Mašetić<br /><span class="fs-6 text-secondary"
                    >@seadmasetic</span
                >
                </h2>
            </div>
            </div>
        </div>
        <h6 class="text-start mt-4 mb-8 fs-6">
            ${postDescriptionValue}
        </h6>
        <img
            src="${postImageValue}"
            class="img-thumbnail mt-4"
            style="width: auto"
        />
        <div class="mt-5 d-flex gap-5">
            <div class="d-flex">
            <i
                class="fa fa-thumbs-up text-primary my-auto"
                aria-hidden="true"
            ></i>
            <h6 class="mx-2 my-auto" style="font-size: 12px">15 likes</h6>
            </div>
            <div class="d-flex">
            <i class="fa fa-comment text-primary" aria-hidden="true"></i>
            <h6 class="mx-2 my-auto my-auto" style="font-size: 12px">
                1 Comments
            </h6>
            </div>
            <div class="d-flex">
            <i class="fa fa-share text-primary" aria-hidden="true"></i>
            <h6 class="mx-2 my-auto my-auto" style="font-size: 12px">
                5 applies
            </h6>
            </div>
        </div>
        <hr />
        <div class="d-flex gap-2 my-4" id="commentSection">
        </div>
        <div class="d-flex justify-content-evenly">
            <button class="btn btn-outline-primary">
            <i class="fa fa-thumbs-up" aria-hidden="true"></i> Like
            </button>
            <button
            class="btn btn-outline-primary"
            data-bs-toggle="modal"
            data-bs-target="#add-comment"
            >
            <i class="fa fa-comment" aria-hidden="true"></i> Comment
            </button>
            <button
            class="btn btn-outline-primary"
            data-bs-toggle="modal"
            data-bs-target="#apply-startup"
            >
            <i class="fa fa-share" aria-hidden="true"></i> Apply
            </button>
        </div>
    </div>
    `;

    postSection.innerHTML += html;
  }



  reader.readAsDataURL(postImage)
});
