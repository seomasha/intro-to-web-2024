let url = "";

if (location.hostname == "localhost") {
  url = "../backend/";
} else {
  url = "https://ibu-startup-lrk7c.ondigitalocean.app/backend/";
}

$("#signup-form").validate({
  rules: {
    first_name: {
      required: true,
    },

    last_name: {
      required: true,
    },

    username: {
      required: true,
      minlength: 3,
      maxlength: 15,
    },

    email: {
      required: true,
    },

    password: {
      required: true,
      minlength: 8,
    },

    confirmpassword: {
      required: true,
      equalTo: "#password",
    },
  },

  messages: {
    confirmpassword: {
      equalTo: "The passwords don't match",
    },
  },

  submitHandler: (form, event) => {
    event.preventDefault();
    blockUI("body");
    let data = serializeForm(form);

    $.post(url + "users/add", data)
      .done(function (response) {
        $("#signup-form")[0].reset();
        window.location.href = "#signin";
      })
      .fail(function (xhr, status, error) {
        console.error("Error:", error);
      })
      .always(function () {
        unblockUI("body");
      });
  },
});

$("#signin-form").validate({
  rules: {
    email: {
      required: true,
    },

    password: {
      required: true,
    },
  },
  submitHandler: (form, event) => {
    event.preventDefault();
    blockUI("body");
    let data = serializeForm(form);

    $.post(url + "auth/signin", data)
      .done(function (response) {
        console.log(response);
        $("#signin-form")[0].reset();
        //LocalStorage.setToLocalStorage("user", response);
        window.localStorage.setItem("user", JSON.stringify(response));
        window.location.href = "#home";
      })
      .fail(function (xhr, status, error) {
        const toastTitle = $("#toastTitle");
        const toastBody = $("#toastBody");
        const toastImage = $("#toastImage");

        toastTitle.text("Invalid email or password");
        toastBody.text("You provided false credentials!");
        toastImage.attr("src", "./frontend/assets/decline.gif");

        $("#toast").toast("show");
        console.log("Error:", error);
      })
      .always(function () {
        unblockUI("body");
      });
  },
});

$("#editUserForm").validate({
  submitHandler: (form, event) => {
    let data = serializeForm(form);
    $.post(url + "users/add", data)
      .done(function (response) {
        console.log("Data sent successfully:", data);
        Fetch.getUsers();
      })
      .fail(function (xhr, status, error) {
        console.error("Error:", error);
      })
      .always(function () {
        unblockUI("body");
      });
  },
});

$("#createPositionForm").validate({
  rules: {
    positionName: {
      required: true,
      minlength: 5,
    },

    positionDescription: {
      required: true,
      minlength: 25,
    },
  },
  submitHandler: (form, event) => {
    event.preventDefault();
    blockUI("body");
    let data = serializeForm(form);

    let defaultValues = {
      like_count: "0",
      comment_count: "0",
      apply_count: "0",
      user_id: "20",
    };

    let mergedData = Object.assign({}, data, defaultValues);

    $.post(url + "positions/add", mergedData)
      .done(function (response) {
        console.log("Data sent successfully:", mergedData);
        $("#createPositionForm")[0].reset();
        Fetch.getPositions();
      })
      .fail(function (xhr, status, error) {
        console.error("Error:", error);
      })
      .always(function () {
        unblockUI("body");
      });
  },
});

$("#createCommentForm").validate({
  rules: {
    comment: {
      required: true,
    },
  },

  submitHandler: (form, event) => {
    event.preventDefault();
    blockUI("body");
    let data = serializeForm(form);

    $("#addComment").on("click", addComment());
    $("#createCommentForm")[0].reset();

    unblockUI("body");
  },
});

$("#createStartupForm").validate({
  rules: {
    startupname: {
      required: true,
    },
  },

  submitHandler: (form, event) => {
    event.preventDefault();
    blockUI("body");
    let data = serializeForm(form);
    let defaultValues = {
      founder_id: "20",
    };

    let mergedData = Object.assign({}, data, defaultValues);

    $.post(url + "startups/add", mergedData)
      .done(function (response) {
        console.log("Data sent successfully:", mergedData);
        $("#createStartupForm")[0].reset();
        Fetch.getStartups();
        Fetch.getStartupsProfile();
      })
      .fail(function (xhr, status, error) {
        console.error("Error:", error);
      })
      .always(function () {
        unblockUI("body");
      });
  },
});

$("#editStartupForm").validate({
  submitHandler: (form, event) => {
    let data = serializeForm(form);
    $.post("../backend/startups/add", data)
      .done(function (response) {
        console.log("Data sent successfully:", data);
        Fetch.getStartupsProfile();
        Fetch.getStartups();
      })
      .fail(function (xhr, status, error) {
        console.error("Error:", error);
      })
      .always(function () {
        unblockUI("body");
      });
  },
});

$("#editPositionForm").validate({
  submitHandler: (form, event) => {
    let data = serializeForm(form);
    $.post(url + "positions/add", data)
      .done(function (response) {
        console.log("Data sent successfully:", data);
        Fetch.getPositions();
      })
      .fail(function (xhr, status, error) {
        console.error("Error:", error);
      })
      .always(function () {
        unblockUI("body");
      });
  },
});

blockUI = (element) => {
  $(element).block({
    message: '<div class="spinner-border text-primary" role="status"></div>',
    css: {
      backgroundColor: "transparent",
      border: "0",
    },
    overlayCSS: {
      backgroundColor: "#000",
      opacity: 0.25,
    },
  });
};

unblockUI = (element) => {
  $(element).unblock({});
};

serializeForm = (form) => {
  let jsonResult = {};
  $.each($(form).serializeArray(), function () {
    jsonResult[this.name] = this.value;
  });

  return jsonResult;
};
