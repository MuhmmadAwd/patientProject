$(document).ready(function () {
  $(".patients").click(onRouting);
  $(".users").click(onRouting);
  $(".add-patient").click(onRouting);
  $(".edit-patient").click(onRouting);
  $(".add-users").click(onRouting);
  $(".edit-users").click(onRouting);
  $(".save-users").click(onRouting);
  $(".delete-users").click(onRouting);
  $(".save-patient").click(onRouting);
  $(".delete-patient").click(onRouting);
});

function onRouting(e) {
  let page = $(e.target).data("routing");
  $(".route").hide();
  $(`.${page}`).show();
}
