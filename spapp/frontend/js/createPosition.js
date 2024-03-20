createPosition = () => {
  const positionName = document.getElementById("positionName").value;
  const positionDescription = document.getElementById(
    "positionDescription"
  ).value;
  const positionImage = document.getElementById("positionImage").files[0];

  let image = ""; // Initialize image variable

  if (positionImage) {
    const reader = new FileReader();
    reader.readAsDataURL(positionImage);

    reader.onload = function () {
      image = `<img src="${reader.result}" alt="" class="img-thumbnail mt-4" style="width: auto" />`;
      let html = `
          <div class="bg-white rounded-5 p-4 border">
            <div class="justify-content-start">
              <div class="gap-2 d-flex">
                <img src="/spapp/frontend/assets/profilepic.jpg" class="rounded-5 rounded-circle" style="width: 50px; height: 50px; background-size: cover" />
                <div class="p-2">
                  <h2 class="fs-6">Sead Masetic<br /><span class="fs-6 text-secondary fw-light">@seadmasetic</span></h2>
                </div>
              </div>
            </div>
            <h6 class="text-primary">${positionName}</h6>
            <h6 class="text-start mt-4 mb-8 fs-6 fw-light">${positionDescription}</h6>
            ${image}
            <div class="mt-5 d-flex gap-5">
              <div class="d-flex">
                <i class="fa fa-thumbs-up text-primary my-auto" aria-hidden="true"></i>
                <h6 class="mx-2 my-auto" style="font-size: 12px">15 likes</h6>
              </div>
              <div class="d-flex">
                <i class="fa fa-comment text-primary" aria-hidden="true"></i>
                <h6 class="mx-2 my-auto my-auto" style="font-size: 12px">25 Comments</h6>
              </div>
              <div class="d-flex">
                <i class="fa fa-share text-primary" aria-hidden="true"></i>
                <h6 class="mx-2 my-auto my-auto" style="font-size: 12px">0 applies</h6>
              </div>
            </div>
            <hr />
            <div class="d-flex gap-2 my-4"></div>
            <div class="d-flex justify-content-evenly">
              <button class="btn btn-outline-primary"><i class="fa fa-thumbs-up" aria-hidden="true"></i> Like</button>
              <button class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#add-comment"><i class="fa fa-comment" aria-hidden="true"></i> Comment</button>
              <button class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#apply-startup"><i class="fa fa-share" aria-hidden="true"></i> Apply</button>
            </div>
          </div>
          <br>`;

      document.getElementById("positionSection").innerHTML += html;
    };
  } else {
    let html = `
        <div class="bg-white rounded-5 p-4 border">
          <div class="justify-content-start">
            <div class="gap-2 d-flex">
              <img src="/spapp/frontend/assets/profilepic.jpg" class="rounded-5 rounded-circle" style="width: 50px; height: 50px; background-size: cover" />
              <div class="p-2">
                <h2 class="fs-6">Sead Masetic<br /><span class="fs-6 text-secondary fw-light">@seadmasetic</span></h2>
              </div>
            </div>
          </div>
          <h6 class="text-primary">${positionName}</h6>
          <h6 class="text-start mt-4 mb-8 fs-6 fw-light">${positionDescription}</h6>
          ${image}
          <div class="mt-5 d-flex gap-5">
            <div class="d-flex">
              <i class="fa fa-thumbs-up text-primary my-auto" aria-hidden="true"></i>
              <h6 class="mx-2 my-auto" style="font-size: 12px">15 likes</h6>
            </div>
            <div class="d-flex">
              <i class="fa fa-comment text-primary" aria-hidden="true"></i>
              <h6 class="mx-2 my-auto my-auto" style="font-size: 12px">25 Comments</h6>
            </div>
            <div class="d-flex">
              <i class="fa fa-share text-primary" aria-hidden="true"></i>
              <h6 class="mx-2 my-auto my-auto" style="font-size: 12px">0 applies</h6>
            </div>
          </div>
          <hr />
          <div class="d-flex gap-2 my-4"></div>
          <div class="d-flex justify-content-evenly">
            <button class="btn btn-outline-primary"><i class="fa fa-thumbs-up" aria-hidden="true"></i> Like</button>
            <button class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#add-comment"><i class="fa fa-comment" aria-hidden="true"></i> Comment</button>
            <button class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#apply-startup"><i class="fa fa-share" aria-hidden="true"></i> Apply</button>
          </div>
        </div>
        <br>`;

    document.getElementById("positionSection").innerHTML += html;
  }
};

document
  .getElementById("createPosition")
  .addEventListener("click", createPosition);
