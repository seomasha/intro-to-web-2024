editPosition = (id) => {
  $.get("../backend/positions/" + id, (position) => {
    $("#edit_id").val(position.id);
    $("#editPositionName").val(position.positionName);
    $("#editPositionDescription").val(position.positionDescription);
  });
};

editStartup = (id) => {
  $.get("../backend/startups/" + id, (data) => {
    $("#edit_startup_id").val(data.id);
    $("#editStartupName").val(data.name);
    $("#editStartupDescription").val(data.description);
    $("#editStartupMembers").val(data.members);
    $("#editStartupCategory option").each(function () {
      if ($(this).val() === data.category) {
        $(this).prop("selected", true);
      }
    });
  });
};

editUser = (id) => {
  $.get("../backend/users/" + id, (user) => {
    $("#edit_user_id").val(user.id);
    $("#user_first_name").val(user.first_name);
    $("#user_last_name").val(user.last_name);
    $("#user_name").val(user.username);
    $("#user_email").val(user.email);
    $("#user_password").val(user.password);
  });
};
