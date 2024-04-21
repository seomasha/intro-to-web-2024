var users = [];

$("#signup-form").validate({
  rules: {
    firstname: {
      required: true,
    },

    lastname: {
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

    users.push(data);
    $("#signup-form")[0].reset();

    unblockUI("body");
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

    $("#signin-form")[0].reset();

    unblockUI("body");

    window.location.href = "#home";
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
      like_count: '0',
      comment_count: '0',
      apply_count: '0',
      user_id: '20'
    };

    let mergedData = Object.assign({}, data, defaultValues);
    
    $.post("../backend/add_position.php", mergedData)
      .done(function (response) {
        console.log("Data sent successfully:", mergedData);
        $("#createPositionForm")[0].reset();
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

    $("#addStartup").on("click", createStartup());
    $("#createStartupForm")[0].reset();

    unblockUI("body");
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
