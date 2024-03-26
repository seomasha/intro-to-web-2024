createStartup = () => {
  var startupID = 0;
  var html = "";

  $("#addStartup").click(() => {
    var startupName = $("#startup-name").val();
    var startupCategory = $("#startupCategory").val();

    html += `
        <div class="card col-md-3" style="width: 15rem" id="startup-${startupID}">
          <img src="./frontend/assets/postpic.jpeg" class="card-img-top" alt="startup-image" />
          <div class="card-body">
            <h6 class="card-title text-center" style="color: #00396c">
              ${startupName} <br> <span class="fw-light text-primary">Sead Masetic</span>
            </h6>
            <p class="card-text text-center fw-light">
              ${startupCategory}
            </p>
            <div class="text-center">
              <a href="#" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#edit-startup">
                <i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit
              </a>
            </div>
          </div>
        </div>
      `;

    $("#startupProfileSection").append(html);

    html = "";
  });
};

createStartup();
