addComment = (commentID) => {
  let html = "";

  $("#addComment").click(() => {
    let commentBody = $("#comment").val();

    html += `
        <div class="d-flex gap-2 my-4">
            <img
            src="/spapp/frontend/assets/profilepic.jpg"
            class="rounded-5 rounded-circle"
            style="width: 50px; height: 50px; background-size: cover"
            />
            <div class="comment w-100 rounded-5 p-4 border">
            <h6 class="p-1 text-start w-100">
                Sead Mašetić <br /><span class="text-secondary fw-light"
                >@seadmasetic</span
                >
            </h6>
            <h6 class="text-start fw-light">
                ${commentBody}
            </h6>
            </div>
        </div>
        `;

    $(`#commentSection-0`).append(html);

    html = "";
  });
};

addComment();
