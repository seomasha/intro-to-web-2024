let url = "";

if (location.hostname == "localhost") {
  url = "../backend/";
} else {
  url = "https://ibu-startup-app-k8tq2.ondigitalocean.app/backend/";
}

var Fetch = {
  getStartups: (category = "") => {
    const checkedValues = [];
    $("input[type='radio']").each(function () {
      if ($(this).prop("checked")) {
        checkedValues.push($(this).attr("value"));
      }
    });
    $.get(url + "startups", (data) => {
      let html = ``;

      $.each(data, (index, startups) => {
        $.each(startups, (index, startup) => {
          html += `
          <div class="card col-md-3" style="width: 15rem" id="startup-${startup.id}">
              <img
                src="./frontend/assets/startup.jpeg"
                class="card-img-top"
                alt="startup-image"
              />
              <div class="card-body">
                <h6 class="card-title text-center" style="color: #00396c">
                  ${startup.name} <br> <span class="fw-light text-primary">${startup.first_name} ${startup.last_name}</span>
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
      });
      $("#startupSection").html(html);
    }).fail((error) => {
      console.log(error);
    });
  },

  getPositions: () => {
    $.ajax({
      url: url + "positions",
      type: "GET",
      success: function (data) {
        let html = ``;

        $.each(data, function (index, jsonData) {
          $.each(jsonData, function (index, position) {
            html += `
                        <div class="bg-white rounded-5 p-4 border" id="position-${position.id}">
                            <div class="justify-content-start">
                                <div class="gap-2 d-flex justify-content-between">
                                  <div class="d-flex">
                                    <img
                                    src="./frontend/assets/profilepic.jpg"
                                    class="rounded-5 rounded-circle"
                                    style="width: 50px; height: 50px; background-size: cover"
                                    />
                                    <div class="p-2">
                                    <h2 class="fs-6">
                                        Sead Masetic<br /><span class="fs-6 text-secondary fw-light"
                                        >@mashaseo</span
                                        >
                                    </h2>
                                    </div>
                                  </div>
                                  <div class="d-flex">
                                      <button type="button" class="btn text-primary" data-bs-toggle="modal" data-bs-target="#edit-position" onclick="editPosition(${position.id})"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                                      <button type="button" class="btn text-danger" onclick="deletePosition(${position.id})"><i class="fa fa-trash" aria-hidden="true"></i></button>
                                  </div>
                              </div>
                            </div>
                            <h6 class="text-primary">${position.positionName}</h6>
                            <h6 class="text-start mt-4 mb-8 fs-6 fw-light">
                                ${position.positionDescription}
                            </h6>
                            <div class="mt-5 d-flex gap-5">
                            <div class="d-flex">
                                <i
                                class="fa fa-thumbs-up text-primary my-auto"
                                aria-hidden="true"
                                ></i>
                                <h6 class="mx-2 my-auto" style="font-size: 12px">${position.like_count} likes</h6>
                            </div>
                            <div class="d-flex">
                                <i class="fa fa-comment text-primary" aria-hidden="true"></i>
                                <h6 class="mx-2 my-auto my-auto" style="font-size: 12px">
                                ${position.comment_count} Comments
                                </h6>
                            </div>
                            <div class="d-flex">
                                <i class="fa fa-share text-primary" aria-hidden="true"></i>
                                <h6 class="mx-2 my-auto my-auto" style="font-size: 12px">
                                ${position.apply_count} applies
                                </h6>
                            </div>
                            </div>
                            <hr />
                            <div id="commentSection-${position.id}">
                            </div>
                            <div class="d-flex justify-content-evenly">
                            <button class="btn btn-outline-primary">
                                <i class="fa fa-thumbs-up" aria-hidden="true"></i> Like
                            </button>
                            <button

                                id="commentBtn-${position.id}"
                                class="btn btn-outline-primary"
                                data-bs-toggle="modal"
                                data-bs-target="#add-comment"
                            >
                                <i class="fa fa-comment" aria-hidden="true "></i> Comment
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
        });

        $("#positionSection").html(html);
      },
      error: function (error) {
        console.log(error);
      },
    });
  },

  getInvestors: () => {
    $.get("frontend/data/investors.json", (data) => {
      let jsonData = JSON.parse(data);

      let html = ``;
      $.each(jsonData, (index, investor) => {
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
  },

  getNotifications: () => {
    $.get("frontend/data/notifications.json", (data) => {
      let jsonData = JSON.parse(data);

      let html = ``;
      $.each(jsonData, (index, notification) => {
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
  },

  getFriendsRequests: () => {
    $.get("frontend/data/users.json", (data) => {
      let html = ``;

      let jsonData = JSON.parse(data);

      $.each(jsonData, (index, user) => {
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
              <button class="btn btn-outline-danger" id="declineFriend-${request.id}" onclick="declineFriendRequest(${user.id}, ${request.id})">
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
  },

  getFriendsRequestsProfile: () => {
    $.get("frontend/data/users.json", (data) => {
      let html = ``;

      let jsonData = JSON.parse(data);

      $.each(jsonData, (index, user) => {
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
              <button class="btn btn-outline-danger" id="removeFriend-${friend.id}" onclick="declineFriendRequest(${user.id}, ${friend.id})">
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
  },

  getStartupsProfile: () => {
    $.get(url + "startups", (data) => {
      let html = ``;

      $.each(data, (index, user) => {
        $.each(user, (index, startup) => {
          html += `
            <div class="card col-md-3" style="width: 15rem" id="startup-${startup.id}">
            <img
              src="./frontend/assets/startup.jpeg"
              class="card-img-top"
              alt="startup-image"
            />
            <div class="card-body">
              <h6 class="card-title text-center" style="color: #00396c">
                ${startup.name} <br> <span class="fw-light text-primary">${startup.first_name} ${startup.last_name}</span>
              </h6>
              <p class="card-text text-center fw-light">
                ${startup.category}
              </p>
              <div class="text-center">
                <button
                  class="btn btn-outline-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#edit-startup"
                  onclick="editStartup(${startup.id})"
                  ><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit</button
                >
                <button
                onclick="deleteStartup(${startup.id})"
                class="btn btn-outline-danger"
                ><i class="fa fa-trash" aria-hidden="true"></i> Delete</button
              >
              </div>
            </div>
          </div>
            `;
        });
      });
      $("#startupProfileSection").html(html);
    });
  },

  getSuggestedFriends: () => {
    let count = 0;

    $.get("frontend/data/users.json", (data) => {
      let jsonData = JSON.parse(data);

      let html = ``;
      let homeHtml = ``;

      $.each(jsonData, (index, suggestedFriend) => {
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

      $.each(jsonData, (index, suggestedFriend) => {
        if (count >= 3) {
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
      });
      $("#suggestedFriends").html(html);
      $("#profileSuggestedFriends").html(homeHtml);
      $("#homeSuggestedFriends").html(homeHtml);
    });
  },

  getUsers: () => {
    $.get(url + "users", (data) => {
      let html = ``;

      $.each(data, (index, users) => {
        $.each(users, (index, u) => {
          html += `
            <div class="card col-md-3" style="width: 15rem" id="startup-${u.id}">
                <img
                  src="./frontend/assets/startup.jpeg"
                  class="card-img-top"
                  alt="startup-image"
                />
                <div class="card-body">
                  <h6 class="card-title text-center" style="color: #00396c">
                    ${u.first_name} ${u.last_name} <br> <span class="fw-light text-primary">${u.username}</span>
                  </h6>
                  <div class="text-center">
                    <div class="d-flex justify-content-center">
                        <button type="button" class="btn text-primary" data-bs-toggle="modal" data-bs-target="#edit-user" onclick="editUser(${u.id})"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                        <button type="button" class="btn text-danger" onclick="deleteUser(${u.id})"><i class="fa fa-trash" aria-hidden="true"></i></button>
                    </div>
                  </div>
                </div>
              </div>
              `;
        });
      });
      $("#userSection").html(html);
    });
  },
  setToLocalStorage: (key, value) => {
    window.localStorage.setItem(key, JSON.stringify(value));
  },

  getFromLocalStorage: (key) => {
    return JSON.parse(window.localStorage.getItem(key));
  },
};

Fetch.getPositions();
Fetch.getSuggestedFriends();
Fetch.getStartups();
Fetch.getInvestors();
Fetch.getNotifications();
Fetch.getFriendsRequests();
Fetch.getFriendsRequestsProfile();
Fetch.getStartupsProfile();
Fetch.getUsers();
