var projects = [
    {
        title: "Project 1",
        description: "Description of project 1. Highlight the technologies used and your role in the project.",
        imageUrl: "/pics/shot.jpg",
        githubUrl: "https://github.com/yourusername/project1",
        demoUrl: "https://project1-demo.com"
    },
    // Add more projects as needed
];
var skills = [
    { name: "HTML5" },
    { name: "CSS3" },
    { name: "TypeScript" },
    // Add more skills as needed
];
function renderProjects() {
    var projectsSection = document.getElementById('projects');
    if (projectsSection) {
        projects.forEach(function (project) {
            var projectDiv = document.createElement('div');
            projectDiv.className = 'project';
            projectDiv.innerHTML = "\n                <h3>".concat(project.title, "</h3>\n                <img src=\"").concat(project.imageUrl, "\" alt=\"").concat(project.title, " Screenshot\">\n                <p>").concat(project.description, "</p>\n                <a href=\"").concat(project.githubUrl, "\" target=\"_blank\">View on GitHub</a>\n                <a href=\"").concat(project.demoUrl, "\" target=\"_blank\">Live Demo</a>\n            ");
            projectsSection.appendChild(projectDiv);
        });
    }
}
function renderSkills() {
    var skillsSection = document.getElementById('skills');
    if (skillsSection) {
        var skillsList_1 = document.createElement('div');
        skillsList_1.className = 'skills-list';
        skills.forEach(function (skill) {
            var skillSpan = document.createElement('span');
            skillSpan.className = 'skill-item';
            skillSpan.textContent = skill.name;
            skillsList_1.appendChild(skillSpan);
        });
        skillsSection.appendChild(skillsList_1);
    }
}
document.addEventListener('DOMContentLoaded', function () {
    renderProjects();
    renderSkills();
});
export {};
