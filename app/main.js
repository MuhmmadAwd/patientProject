$(document).ready(function () {
  $(".action-link").click(onActionLinkClick);
});

function onActionLinkClick(e) {
  let dataComponent = $(e.target).data("target");
  navigate(dataComponent);
}
function navigate(dataComponent) {
  $(".component").hide();
  $(`.${dataComponent}`).show();
}
