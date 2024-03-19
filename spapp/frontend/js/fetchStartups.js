getStartups = () => {
  return fetch("./data/startups.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);

      let html = ``;

      data.forEach((startup) => {
        html += `
        <div class="card col-md-3" style="width: 15rem" id="startup-${startup.id}">
            <img
              src=${startup.image}
              class="card-img-top"
              alt="startup-image"
            />
            <div class="card-body">
              <h6 class="card-title text-center" style="color: #00396c">
                ${startup.name} <br> <span class="fw-light text-primary">${startup.founder}</span>
              </h6>
              <p class="card-text text-center fw-light">
                ${startup.category}
              </p>
              <div class="text-center">
                <a
                  href="#"
                  class="btn btn-outline-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#apply-startup"
                  ><i class="fa fa-share" aria-hidden="true"></i> Apply</a
                >
              </div>
            </div>
          </div>
        `
      })
      document.getElementById("startupSection").innerHTML = html;
    })
    .catch((error) => {
      console.log(error);
    });
};

getStartups();
