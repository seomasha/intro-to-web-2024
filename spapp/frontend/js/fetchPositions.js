getPositions = () => {
  return fetch("./data/positions.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let html = ``;

      data.forEach((position) => {
        
        let positionPicture = position.positionpicture !== '' ? `<img src=${position.positionpicture} alt="" class="img-thumbnail mt-4" style="width: auto" />` : '';

        html += `
        <div class="bg-white rounded-5 p-4 border" id="position-${position.id}">
            <div class="justify-content-start">
            <div class="gap-2 d-flex">
                <img
                src=${position.profilepicture}
                class="rounded-5 rounded-circle"
                style="width: 50px; height: 50px; background-size: cover"
                />
                <div class="p-2">
                <h2 class="fs-6">
                    ${position.name}<br /><span class="fs-6 text-secondary fw-light"
                    >@${position.username}</span
                    >
                </h2>
                </div>
            </div>
            </div>
            <h6 class="text-start mt-4 mb-8 fs-6 fw-light">
                ${position.positiondescription}
            </h6>
            ${positionPicture}
            <div class="mt-5 d-flex gap-5">
            <div class="d-flex">
                <i
                class="fa fa-thumbs-up text-primary my-auto"
                aria-hidden="true"
                ></i>
                <h6 class="mx-2 my-auto" style="font-size: 12px">${position.likecount} likes</h6>
            </div>
            <div class="d-flex">
                <i class="fa fa-comment text-primary" aria-hidden="true"></i>
                <h6 class="mx-2 my-auto my-auto" style="font-size: 12px">
                ${position.commentcount} Comments
                </h6>
            </div>
            <div class="d-flex">
                <i class="fa fa-share text-primary" aria-hidden="true"></i>
                <h6 class="mx-2 my-auto my-auto" style="font-size: 12px">
                ${position.applycount} applies
                </h6>
            </div>
            </div>
            <hr />
            <div class="d-flex gap-2 my-4" id="comment-${position.id}">
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
        <br>
        `;
      });
      document.getElementById("postSection").innerHTML = html;
    })
    .catch((error) => {
      console.log(error);
    });
};

getPositions();
