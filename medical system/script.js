// Loads appointments from localStorage or create empty array
let appointments = JSON.parse(localStorage.getItem("appointments") || "[]");

// Hamburger menu toggle
function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}

// Shows info sections on home page
function showInfo(sectionId) {
  document.querySelectorAll('.info-section').forEach(section => {
    section.style.display = 'none';
  });
  document.getElementById(sectionId).style.display = 'block';
}

// Appointment page initialization
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("appointmentDate")) {
    const today = new Date().toISOString().split("T")[0];
    document.getElementById("appointmentDate").setAttribute("min", today);

    document.getElementById("appointmentDate").addEventListener("change", generateTimeSlots);
    document.getElementById("doctor").addEventListener("change", generateTimeSlots);

    generateTimeSlots();
    displayAppointments();
  }
});

// Available times
function generateTimeSlots() {
  const timeSelect = document.getElementById("time");
  const selectedDate = document.getElementById("appointmentDate").value;
  const selectedDoctor = document.getElementById("doctor").value;

  timeSelect.innerHTML = "";

  const startHour = 9;
  const endHour = 19;

  const now = new Date();
  const todayStr = now.toISOString().split("T")[0];

  for (let hour = startHour; hour < endHour; hour++) {
    for (let min of [0, 30]) {
      if (hour === 18 && min === 30) break;

      const slotTime = `${String(hour).padStart(2, "0")}:${String(min).padStart(2, "0")}`;

      if (selectedDate === todayStr) {
        const slotDateTime = new Date(`${selectedDate}T${slotTime}`);
        if (slotDateTime < now) continue;
      }

      const isBooked = appointments.some(
        a => a.date === selectedDate && a.time === slotTime && a.doctor === selectedDoctor
      );
      if (isBooked) continue;

      const option = document.createElement("option");
      option.value = slotTime;
      option.textContent = slotTime;
      timeSelect.appendChild(option);
    }
  }

  if (timeSelect.options.length === 0) {
    const option = document.createElement("option");
    option.textContent = "No slots available";
    option.disabled = true;
    option.selected = true;
    timeSelect.appendChild(option);
  }
}

// Book appointment
function bookAppointment() {
  const name = document.getElementById('patientName').value.trim();
  const email = document.getElementById('patientEmail').value.trim();
  const phone = document.getElementById('patientPhone').value.trim();
  const doctor = document.getElementById('doctor').value;
  const date = document.getElementById('appointmentDate').value;
  const time = document.getElementById('time').value;

  if (!name || name.split(" ").length < 2) {
    alert("Please enter your full name (first and last).");
    return;
  }

  if (!email || !phone || !doctor || !date || !time || time === "No slots available") {
    alert("Please fill in all details.");
    return;
  }

  const appointment = { name, email, phone, doctor, date, time };
  appointments.push(appointment);

  // Save to localStorage
  localStorage.setItem("appointments", JSON.stringify(appointments));

  displayAppointments();
  generateTimeSlots();

  document.getElementById('patientName').value = '';
  document.getElementById('patientEmail').value = '';
  document.getElementById('patientPhone').value = '';
  document.getElementById('appointmentDate').value = '';
  document.getElementById('time').innerHTML = '';
}

// Display appointments
function displayAppointments() {
  const listDiv = document.getElementById('appointmentsList');
  if (appointments.length === 0) {
    listDiv.innerHTML = "No appointments booked yet.";
    return;
  }

  listDiv.innerHTML = appointments.map((a) =>
    `<div class="appointment">
      <strong>${a.name}</strong> (${a.email}, ${a.phone})<br>
      Appointment with <em>${a.doctor}</em><br>
      Date: ${a.date}, Time: ${a.time}
    </div>`
  ).join("<hr>");
}
