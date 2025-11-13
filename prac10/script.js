fetch('data.json')
  .then(response => response.json())
  .then(data => {
    setTimeout(function() {
      let table = document.getElementById('fetchTable');
      table.innerHTML = "<tr><th>ID</th><th>Name</th><th>Marks</th><th>Grade</th></tr>";
      data.forEach(student => {
        let rowColor = student.marks > 90 ? " style='background-color: #ffe599;'" : "";
        table.innerHTML += `<tr${rowColor}>
          <td>${student.id}</td>
          <td>${student.name}</td>
          <td>${student.marks}</td>
          <td>${student.grade}</td>
        </tr>`;
      });
    }, 2000);
  })
  .catch(error => console.error('Fetch Error:', error));

$(document).ready(function() {
  $.getJSON('data.json', function(data) {
    let table = $('#jqueryTable');
    table.append("<tr><th>ID</th><th>Name</th><th>Marks</th><th>Grade</th></tr>");
    $.each(data, function(index, student) {
      let rowColor = student.marks > 90 ? " style='background-color: #136;'" : "";
      table.append(`<tr${rowColor}>
        <td>${student.id}</td>
        <td>${student.name}</td>
        <td>${student.marks}</td>
        <td>${student.grade}</td>
      </tr>`);
    });
  }).fail(function() {
    console.log("Error loading JSON data with jQuery.");
  });
});
