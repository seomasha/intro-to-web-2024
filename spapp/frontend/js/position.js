editPosition = (id) => {
  $.get("../backend/get_position.php?id=" + id, (data) => {
    $("#edit_id").val(data.id);
    $("#editPositionName").val(data.positionName);
    $("#editPositionDescription").val(data.positionDescription);
  });
};