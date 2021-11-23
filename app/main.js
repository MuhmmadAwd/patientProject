$(document).ready(function () {
  $(".action-link").click(onActionLinkClick);
  renderTable();
});

function onActionLinkClick(e) {
  let dataComponent = $(e.target).data("target");
  navigate(dataComponent);
}
function navigate(dataComponent) {
  $(".component").hide();
  $(`.${dataComponent}`).show();
}
function renderTable() {
  let templateText = $("#patient-list-template").html();

  patientsData.forEach((data) => {
    let RenderTemplate = Rendertemplate(templateText, data);

    $(".patient-list-body").append(RenderTemplate);
  });
}

Rendertemplate = (templateText, data) => {
  let placeholderRegex = /{{[^\"\}]+}}/g;
  let newMatchRegex = /{{|}}|\|\w+/g;

  return templateText.replace(placeholderRegex, (match) => {
    let newMatch = match.replace(newMatchRegex, "");
    return data[newMatch];
  });
};
