document.getElementById("welcome-message").innerText = "We are glad you're here!";

function showStudentPage() {
  const name = prompt("Enter your name:");
  alert("Welcome, " + name + "!");
  console.log("Student Name:", name);

  document.getElementById("student-section").innerHTML =
    "<h2>Hello " + name + "!</h2><p>Welcome to SIT Nagpur's CSE Department.</p>";
}
