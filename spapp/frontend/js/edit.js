editPosition = (id) => {
  $.get("../backend/get_position.php?id=" + id, (data) => {
    $("#edit_id").val(data.id);
    $("#editPositionName").val(data.positionName);
    $("#editPositionDescription").val(data.positionDescription);
  });
};

editStartup = (id) => {
  $.get("../backend/get_startup.php?id=" + id, (data) => {
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
  $.get("../backend/get_user.php?id=" + id, (data) => {
    $("#edit_user_id").val(data.id);
    $("#user_first_name").val(data.first_name);
    $("#user_last_name").val(data.last_name);
    $("#user_name").val(data.username);
    $("#user_email").val(data.email);
    $("#user_password").val(data.password);
  })
}