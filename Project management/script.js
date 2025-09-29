let projects = JSON.parse(localStorage.getItem("projects")) || [];
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function showSection(id) {
    document.querySelectorAll(".section").forEach(sec => sec.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

function createProject() {
    const title = document.getElementById("newProject").value;
    if (title) {
        projects.push({ title });
        localStorage.setItem("projects", JSON.stringify(projects));
        document.getElementById("newProject").value = "";
        renderProjects();
    }
}

function createTask() {
    const title = document.getElementById("newTask").value;
    const project = document.getElementById("taskProject").value;
    const status = document.getElementById("taskStatus").value;
    if (title && project) {
        tasks.push({ title, project, status });
        localStorage.setItem("tasks", JSON.stringify(tasks));
        document.getElementById("newTask").value = "";
        renderTasks();
    }
}

function renderProjects() {
    let projectList = document.getElementById("projectList");
    let projectSelect = document.getElementById("taskProject");
    if (!projectList || !projectSelect) return;

    projectList.innerHTML = "";
    projectSelect.innerHTML = "";

    projects.forEach(p => {
        projectList.innerHTML += `<div class="card">${p.title}</div>`;
        projectSelect.innerHTML += `<option>${p.title}</option>`;
    });

    updateStats();
}

function renderTasks() {
    let taskList = document.getElementById("taskList");
    if (!taskList) return;

    taskList.innerHTML = "";
    tasks.forEach(t => {
        taskList.innerHTML += `<div class="card"><strong>${t.title}</strong><br>${t.project} - ${t.status}</div>`;
    });

    updateStats();
}

function updateStats() {
    let projectCount = document.getElementById("projectCount");
    let taskCount = document.getElementById("taskCount");
    let todoCount = document.getElementById("todoCount");
    let inProgressCount = document.getElementById("inProgressCount");
    let doneCount = document.getElementById("doneCount");

    if (projectCount) projectCount.textContent = projects.length;
    if (taskCount) taskCount.textContent = tasks.length;
    if (todoCount) todoCount.textContent = tasks.filter(t => t.status === "To Do").length;
    if (inProgressCount) inProgressCount.textContent = tasks.filter(t => t.status === "In Progress").length;
    if (doneCount) doneCount.textContent = tasks.filter(t => t.status === "Done").length;
}

function toggleMenu() {
    document.getElementById("hamburgerMenu").classList.toggle("show");
}

renderProjects();
renderTasks();
