getStartups = () => {
  const checkboxes = document.querySelectorAll("input[type='checkbox']");
  const checkedValues = [];

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      checkedValues.push(checkbox.name);
    }
  });

  console.log(checkedValues);

  return fetch("./data/startups.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let html = ``;

      if (checkedValues.length === 0) {
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
          `;
        });
      } else {
        const filteredStartups = data.filter((startup) =>
          checkedValues.includes(startup.category)
        );

        filteredStartups.forEach((startup) => {
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
          `;
        });
      }

      document.getElementById("startupSection").innerHTML = html;
    })
    .catch((error) => {
      console.log(error);
    });
};

getPositions = () => {
  return fetch("./data/positions.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let html = ``;

      data.forEach((position) => {
        let positionPicture =
          position.positionpicture !== ""
            ? `<img src=${position.positionpicture} alt="" class="img-thumbnail mt-4" style="width: auto" />`
            : "";

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
            <h6 class="text-primary">${position.positionname}</h6>
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
                id="commentBtn-${position.id}
            >
                <i class="fa fa-comment" aria-hidden="true"></i> Comment
            </button>
            <button
                class="btn btn-outline-primary"
                data-bs-toggle="modal"
                data-bs-target="#apply-position"
            >
                <i class="fa fa-share" aria-hidden="true"></i> Apply
            </button>
            </div>
        </div>
        <br>
        `;
      });
      document.getElementById("positionSection").innerHTML = html;
    })
    .catch((error) => {
      console.log(error);
    });
};

getInvestors = () => {
  return fetch("./data/investors.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let html = ``;

      data.forEach((investor) => {
        html += `
        <div class="card col-md-3" style="width: 15rem" id="investor-${investor.id}">
            <img
            src=${investor.image}
            class="card-img-top"
            alt="startup-image"
            />
            <div class="card-body">
            <h6 class="card-title text-center" style="color: #00396c">
                ${investor.name}
            </h6>
            <p class="card-text text-center">
                Here you will add a quick description for your startup.
            </p>
            <div class="text-center">
                <a class="btn btn-outline-primary"
                ><i class="fa fa-share" aria-hidden="true"></i> Apply</a
                >
            </div>
            </div>
        </div>
        `;
      });
      document.getElementById("investorSection").innerHTML = html;
    })
    .catch((error) => {
      console.log(error);
    });
};

getNotifications = () => {
  return fetch("./data/notifications.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let html = ``;

      data.forEach((notification) => {
        let body = ``;

        if (notification.type === "position") {
          body = `${notification.name} is looking for a new associate for his ${notification.typename}`;
        } else if (notification.type === "startup") {
          body = `${notification.name} has created a new startup called ${notification.typename}`;
        }

        html += `
          <div class="rounded-pill bg-white p-4 border mt-2" id="notification-${notification.id}">
            <div class="d-flex gap-2">
              <img
                src=${notification.image}
                class="rounded-5 rounded-circle"
                style="width: 50px; height: 50px; background-size: cover"
              />
              <h6 class="my-auto" style="font-size: 14px; color: #00396c">
                ${body}
                <br />
                12:35 - 24.03.2024
              </h6>
            </div>
          </div>
      `;
      });
      document.getElementById("notificationSection").innerHTML = html;
    })
    .catch((error) => {
      console.log(error);
    });
};

getNotifications();
getInvestors();
getPositions();
getStartups();
