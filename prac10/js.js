let employees = [];

function showTable(data) {
  let table = document.createElement("table");
  let header = document.createElement("tr");
  ["ID","Name","Department","Salary"].forEach(text=>{
    let th=document.createElement("th");
    th.textContent=text;
    header.appendChild(th);
  });
  table.appendChild(header);

  data.forEach(emp=>{
    let tr=document.createElement("tr");
    if(emp.salary>50000){ tr.classList.add("highlight"); }
    tr.innerHTML=`<td>${emp.id}</td><td>${emp.name}</td><td>${emp.department}</td><td>${emp.salary}</td>`;
    table.appendChild(tr);
  });

  let container=document.getElementById("tableContainer");
  container.innerHTML="";
  container.appendChild(table);
}

function filterData(dept){
  let filtered = dept==="all" ? employees : employees.filter(e=>e.department===dept);
  showTable(filtered);
}

function loadEmployees(){
  fetch("employees.json")
  .then(res=>res.json())
  .then(data=>{
    console.table(data);
    employees=data;
    showTable(employees);

    let deptSelect=document.getElementById("deptFilter");
    let depts=[...new Set(employees.map(e=>e.department))];
    depts.forEach(d=>{
      let opt=document.createElement("option");
      opt.value=d;
      opt.textContent=d;
      deptSelect.appendChild(opt);
    });
  })
  .catch(err=>console.error("Error loading JSON:",err));
}

document.getElementById("deptFilter").addEventListener("change",function(){
  filterData(this.value);
});

loadEmployees();
