applyPosition = (startupID) => {
  let positionName = "";

  $.get("frontend/data/positions.json", (data) => {

    let jsonData = JSON.parse(data);

    $.each(jsonData, (index, position) => {
      if (position.id === startupID) {
        positionName = position.positionname;
        $("#positionNameAlert").html(positionName);
      }
    });
  });

  $("#applyPosition").click(() => {
    const toastTitle = $("#toastTitle");
    const toastBody = $("#toastBody");
    const toastImage = $("#toastImage");

    toastTitle.text("Applied for position!");
    toastBody.text(`You have applied to the position ${positionName}!`);
    toastImage.attr("src", "./frontend/assets/success.gif");

    $("#toast").toast("show");
  });
};

addFriend = (friendID) => {

  let friendName = "";

  $.get("frontend/data/users.json", (data) => {

    let jsonData = JSON.parse(data);

    $.each(jsonData, (index, friend) => {
      if (friend.id === friendID) {
        friendName = friend.name;
        $("#friendName").text(friendName);
      }
    });
  });

  $("#addFriend").click(() => {
    const toastTitle = $("#toastTitle");
    const toastBody = $("#toastBody");
    const toastImage = $("#toastImage");

    toastTitle.text("Friend request sent!");
    toastBody.text(`You have sent a friend request to ${friendName}!`);
    toastImage.attr("src", "./frontend/assets/success.gif");

    $("#toast").toast("show");
  });
};

applyStartup = (startupID) => {
  
  let startupName = "";

  $.get("frontend/data/startups.json", (data) => {
    let jsonData = JSON.parse(data);
    $.each(jsonData, (index, startup) => {
      if (startup.id === startupID) {
        startupName = startup.name;
        $("#startupName").text(startup.name);
        $("#startupCategory").text("Category: " + startup.category);
        $("#startupDescription").text(startup.description);

        $.each(startup.members, (index, member) => {
          $("ul#startupMembers").append(`<li>${member.name}</li>`);
        });
      }
    });
  });

  $("#applyStartup").click(() => {
    const toastTitle = $("#toastTitle");
    const toastBody = $("#toastBody");
    const toastImage = $("#toastImage");

    toastTitle.text("Applied for startup!");
    toastBody.text(`You have applied for ${startupName}!`);
    toastImage.attr("src", "./frontend/assets/success.gif");

    $("#toast").toast("show");
    clearStartup();
  });
  
};

applyInvestor = (investorID) => {
  
  let investorName = "";

  $.get("frontend/data/investors.json", (data) => {
    let jsonData = JSON.parse(data);
    $.each(jsonData, (index, investor) => {
      if (investor.id === investorID) {
        investorName = investor.name;
        $("#investorName").text(investor.name);
        $("#investorBudget").text("Budget: " + investor.budget);
        $("#investorDescription").text(investor.description);
        $("#investorApplies").text("Applies: " + investor.applies);
      }
    });
  });

  $("#applyInvestor").click(() => {
    const toastTitle = $("#toastTitle");
    const toastBody = $("#toastBody");
    const toastImage = $("#toastImage");

    toastTitle.text("Applied for investor support!");
    toastBody.text(`You have applied for ${investorName}!`);
    toastImage.attr("src", "./frontend/assets/success.gif");

    $("#toast").toast("show");
  });
  
};

acceptFriendRequest = (userID, requestID) => {
  
  let requestName = "";

  $.get("frontend/data/users.json", (data) => {

    let jsonData = JSON.parse(data);

    $.each(jsonData, (index, user) => {
      if (user.id === userID) {
        $.each(user.friendRequests, (index, request) => {
          if (request.id === requestID) {
            requestName = request.name;

            $(`#acceptFriend-${requestID}`).click(() => {
              const toastTitle = $("#toastTitle");
              const toastBody = $("#toastBody");
              const toastImage = $("#toastImage");

              toastTitle.text("Accepted friend request!");
              toastBody.text(`You accepted ${requestName} as a friend!`);
              toastImage.attr("src", "./frontend/assets/success.gif");

              $("#toast").toast("show");
            });
          }
        });
      }
    });
  });
  
};

declineFriendRequest = (userID, requestID) => {
  
  let requestName = "";

  $.get("frontend/data/users.json", (data) => {
    let jsonData = JSON.parse(data);
    $.each(jsonData, (index, user) => {
      if (user.id === userID) {
        $.each(user.friends, (index, request) => {
          if (request.id === requestID) {
            requestName = request.name;

            $(`#declineFriend-${requestID}`).click(() => {
              const toastTitle = $("#toastTitle");
              const toastBody = $("#toastBody");
              const toastImage = $("#toastImage");

              toastTitle.text("Decline friend request!");
              toastBody.text(`You declined ${requestName}!`);
              toastImage.attr("src", "./frontend/assets/decline.gif");

              $("#toast").toast("show");
            });

            $(`#removeFriend-${requestID}`).click(() => {
              const toastTitle = $("#toastTitle");
              const toastBody = $("#toastBody");
              const toastImage = $("#toastImage");

              toastTitle.text("Removed friend!");
              toastBody.text(`You removed ${requestName} from your friend list!`);
              toastImage.attr("src", "./frontend/assets/decline.gif");

              $("#toast").toast("show");
            });
          }
        });
      }
    });
  });
};

clearStartup = () => {
  $("ul#startupMembers").empty();
};

$(document).ready(() => {
  addFriend();
  applyPosition();
  applyStartup();
  applyInvestor();
  acceptFriendRequest();
});
