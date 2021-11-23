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
  for (let i = 0; i < 10; i++) {
    let fisrtBraces = templateText.search("{{");
    let lastBraces = templateText.search("}}");
    let propertyWithBreaces = templateText.slice(fisrtBraces, lastBraces + 2);
    let property = templateText.slice(fisrtBraces + 2, lastBraces);
    let propertyData = data[property];
    let editTemplateText = templateText.replace(
      propertyWithBreaces,
      propertyData
    );
    let orignalTemplateText = templateText;
    templateText = editTemplateText;
    orignalTemplateText = editTemplateText;
  }
  return templateText;
};
