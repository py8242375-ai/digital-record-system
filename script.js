const form = document.getElementById("patientForm");
const list = document.getElementById("patientList");

let patients = JSON.parse(
  localStorage.getItem("patients") || "[]"
);

function displayPatients() {
  list.innerHTML = "";

  patients.forEach((patient) => {
    const item = document.createElement("li");
    item.textContent =
      `${patient.name} | Age: ${patient.age} | ` +
      `Village: ${patient.village}`;
    list.appendChild(item);
  });
}

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const patient = {
    name: document.getElementById("name").value.trim(),
    age: document.getElementById("age").value,
    village: document.getElementById("village").value.trim()
  };

  patients.push(patient);
  localStorage.setItem("patients", JSON.stringify(patients));

  displayPatients();
  form.reset();
  alert("Patient registered successfully!");
});

displayPatients();