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
  patientsData.forEach((data) => {
    let RenderTemplate = `
    <tr class="table-success">
    <th scope="row">${data.ID}</th>
    <td> ${data.fname} ${data.mname} ${data.lname} </td>
    <td>${data.email}</td>
    <td>${data.gender}</td>
    <td>${data.DOB}</td>
    <td>${data.status}</td>
    <td>${data.CreatedBy} at ${data.creationDate}</td>
    <td>
      <button class="btn btn-primary" data-target="patient-edit">
        Edit
      </button>
    </td>
  </tr>
  `;
    $(".patient-list-body").append(RenderTemplate);
  });
}
