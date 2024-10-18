import { Project, Skill } from './types';

const projects: Project[] = [
    {
        title: "Project 1",
        description: "Description of project 1. Highlight the technologies used and your role in the project.",
        imageUrl: "path/to/project1-screenshot.jpg",
        githubUrl: "https://github.com/yourusername/project1",
        demoUrl: "https://project1-demo.com"
    },
    // Add more projects as needed
];

const skills: Skill[] = [
    { name: "HTML5" },
    { name: "CSS3" },
    { name: "TypeScript" },
    // Add more skills as needed
];

function renderProjects(): void {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
        projects.forEach(project => {
            const projectDiv = document.createElement('div');
            projectDiv.className = 'project';
            projectDiv.innerHTML = `
                <h3>${project.title}</h3>
                <img src="${project.imageUrl}" alt="${project.title} Screenshot">
                <p>${project.description}</p>
                <a href="${project.githubUrl}" target="_blank">View on GitHub</a>
                <a href="${project.demoUrl}" target="_blank">Live Demo</a>
            `;
            projectsSection.appendChild(projectDiv);
        });
    }
}

function renderSkills(): void {
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        const skillsList = document.createElement('div');
        skillsList.className = 'skills-list';
        skills.forEach(skill => {
            const skillSpan = document.createElement('span');
            skillSpan.className = 'skill-item';
            skillSpan.textContent = skill.name;
            skillsList.appendChild(skillSpan);
        });
        skillsSection.appendChild(skillsList);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    renderSkills();
});
