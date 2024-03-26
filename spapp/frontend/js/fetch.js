getStartups = () => {
  const checkedValues = [];
  $("input[type='checkbox']").each(function () {
    //Why doesn't an arrow function work here?
    if ($(this).prop("checked")) {
      checkedValues.push($(this).attr("name"));
    }
  });

  $.get("./data/startups.json", (data) => {
    let html = ``;

    if (checkedValues.length === 0) {
      $.each(data, (index, startup) => {
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
                  onclick="applyStartup(${startup.id})"
                  ><i class="fa fa-share" aria-hidden="true"></i> Apply</a
                >
              </div>
            </div>
          </div>
        `;
      });
    } else {
      const filteredStartups = $.grep(data, (startup) => {
        return checkedValues.includes(startup.category);
      });

      $.each(filteredStartups, (index, startup) => {
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
                  onclick="applyStartup(${startup.id})"
                  ><i class="fa fa-share" aria-hidden="true"></i> Apply</a
                >
              </div>
            </div>
          </div>
        `;
      });
    }

    $("#startupSection").html(html);
  }).fail((error) => {
    console.log(error);
  });
};

getPositions = () => {
  $.get("./data/positions.json", (data) => {
    let html = ``;
    $.each(data, (index, position) => {
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
                  <i class="fa fa-thumbs-up" aria-hidden="true "></i> Comment
              </button>
              <button
                  class="btn btn-outline-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#apply-position"
                  onclick="applyPosition(${position.id})"
              >
                  <i class="fa fa-share" aria-hidden="true"></i> Apply
              </button>
              </div>
          </div>
          <br>
          `;
    });

    $("#positionSection").html(html);
  }).fail((error) => {
    console.log(error);
  });
};

getInvestors = () => {
  $.get("./data/investors.json", (data) => {
    let html = ``;
    $.each(data, (index, investor) => {
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
              data-bs-toggle="modal"
              data-bs-target="#apply-investor"
              onclick="applyInvestor(${investor.id})"
              ><i class="fa fa-share" aria-hidden="true"></i> Apply</a
              >
          </div>
          </div>
      </div>
      `;
    });
    $("#investorSection").html(html);
  }).fail((error) => {
    console.log(error);
  });
};

getNotifications = () => {
  $.get("./data/notifications.json", (data) => {
    let html = ``;
    $.each(data, (index, notification) => {
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
    $("#notificationSection").html(html);
  }).fail((error) => {
    console.log(error);
  });
};

getFriendsRequests = () => {
  $.get("./data/users.json", (data) => {
    let html = ``;

    $.each(data, (index, user) => {
      if (user.name === "Sead Masetic") {
        $.each(user.friendRequests, (index, request) => {
          html += `
          <div
          class="d-flex p-2 friend rounded-pill mt-4 justify-content-between border" id="#request-${request.id}"
          >
          <div class="d-flex gap-2">
            <img
              src=${request.image}
              class="rounded-5 rounded-circle"
              style="width: 50px; height: 50px; background-size: cover"
            />
            <h6 class="my-auto" style="font-size: 14px; color: #00396c">
              ${request.name}
            </h6>
          </div>
          <div class="my-auto p-2">
            <button class="btn btn-outline-primary" id="acceptFriend-${request.id}" onclick="acceptFriendRequest(${user.id}, ${request.id})">
              <i class="fa fa-check" aria-hidden="true"></i>
            </button>
            <button class="btn btn-outline-danger">
              <i class="fa fa-ban" aria-hidden="true"></i>
            </button>
          </div>
        </div>
          `;
        });
      }
    });
    $("#requestsSection").html(html);
  });
};

getFriendsRequestsProfile = () => {
  $.get("./data/users.json", (data) => {
    let html = ``;

    $.each(data, (index, user) => {
      if (user.name === "Sead Masetic") {
        $.each(user.friends, (index, friend) => {
          html += `
          <div
          class="d-flex p-2 friend rounded-pill mt-4 justify-content-between border" id="#request-${friend.id}"
          >
          <div class="d-flex gap-2">
            <img
              src=${friend.image}
              class="rounded-5 rounded-circle"
              style="width: 50px; height: 50px; background-size: cover"
            />
            <h6 class="my-auto" style="font-size: 14px; color: #00396c">
              ${friend.name}
            </h6>
          </div>
          <div class="my-auto p-2">
            <button class="btn btn-outline-danger">
              <i class="fa fa-user-times" aria-hidden="true"></i>
            </button>
          </div>
        </div>
          `;
        });
      }
    });
    $("#requestsProfileSection").html(html);
  });
};

getStartupsProfile = () => {
  $.get("./data/users.json", (data) => {
    let html = ``;

    $.each(data, (index, user) => {
      if (user.name === "Sead Masetic") {
        $.each(user.startups, (index, startup) => {
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
                data-bs-target="#edit-startup"
                ><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit</a
              >
            </div>
          </div>
        </div>
          `;
        });
      }
    });
    $("#startupProfileSection").html(html);
  });
};

getSuggestedFriends = () => {
  let count = 0;
  $.get("./data/users.json", (data) => {
    let html = ``;
    let homeHtml = ``;

    $.each(data, (index, suggestedFriend) => {
      html += `
      <div class="card col-md-3" style="width: 15rem">
            <img
              src="${suggestedFriend.profilepic}"
              class="card-img-top"
              style="background-size: cover; max-height: 200px;"
              alt="friend-image"
            />
            <div class="card-body">
              <h4 class="card-title text-center" style="color: #00396c">
                ${suggestedFriend.name}
              </h4>
              <p class="card-text text-center text-secondary fw-light">@${suggestedFriend.username}</p>
              <div class="text-center mt-4">
                <a
                  href="#"
                  class="btn btn-outline-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#add-friend"
                  onclick="addFriend(${suggestedFriend.id})"
                  ><i class="fa fa-user-plus" aria-hidden="true"></i> Add
                  friend</a
                >
              </div>
            </div>
          </div>
      `;
    });

    $.each(data, (index, suggestedFriend) => {

      if(count >= 3) {
        return false;
      }

      homeHtml += `
      <div
        class="d-flex p-2 gap-2 friend rounded-pill mt-4 justify-content-between border"
      >
        <div class="d-flex gap-2">
          <img
            src="${suggestedFriend.profilepic}"
            class="rounded-5 rounded-circle"
            style="width: 50px; height: 50px; background-size: cover"
          />
          <h6 class="my-auto" style="font-size: 14px; color: #00396c">
            ${suggestedFriend.name}
          </h6>
        </div>
        <div class="my-auto p-2">
          <button
            class="btn btn-outline-primary"
            data-bs-toggle="modal"
            data-bs-target="#add-friend"
            onclick="addFriend(${suggestedFriend.id})"
          >
            <i class="fa fa-user-plus" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      `;
      count++;
    })
    $("#suggestedFriends").html(html);
    $("#homeSuggestedFriends").html(homeHtml);
  });
};

getFriendsRequests();
getFriendsRequestsProfile();
getStartups();
getStartupsProfile();
getNotifications();
getInvestors();
getPositions();
getSuggestedFriends();
