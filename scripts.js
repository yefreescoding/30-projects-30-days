const projects = [
  {
    title: 'Project #1',
    date: 'Finished: Thursday July 27, 2023.',
    text: 'A basic hero section for a landing page.',
    tools: ['HTML5', 'CSS', 'Vanilla Javascript'],
    liveSite:
      'https://github.com/yefreescoding/30-projects-30-days/tree/main/project-1',
    gitHub: './project-1/index.html',
  },
  {
    title: 'Project #2',
    date: 'Finished: Friday July 28, 2023.',
    text: 'QR code component.',
    tools: ['HTML5', 'CSS'],
    liveSite:
      'https://github.com/yefreescoding/30-projects-30-days/tree/main/project-2',
    gitHub: './project-2/index.html',
  },
  {
    title: 'Project #3',
    date: 'Finished: Saturday July 29, 2023.',
    text: 'Stats card component.',
    tools: ['HTML5', 'CSS'],
    liveSite:
      'https://github.com/yefreescoding/30-projects-30-days/tree/main/project-3',
    gitHub: './project-1/index.html',
  },
  {
    title: 'Project #4',
    date: 'Finished: Sunday July 30, 2023.',
    text: 'Room Landing Page',
    tools: ['HTML5', 'CSS', 'Vanilla Javascript'],
    liveSite:
      'https://github.com/yefreescoding/30-projects-30-days/tree/main/project-3',
    gitHub: './project-3/index.html',
  },
  {
    title: 'Project #5',
    date: 'Finished: Monday July 31, 2023.',
    text: 'Sign up card component.',
    tools: ['HTML5', 'SASS', 'Vite JS'],
    liveSite:
      'https://github.com/yefreescoding/30-projects-30-days/tree/main/project-4',
    gitHub: './project-4/index.html',
  },
  {
    title: 'Project #6',
    date: 'Finished: Tuesday August 1, 2023.',
    text: 'Calculator App with theme switcher.',
    tools: ['HTML5', 'CSS', 'Vanilla Javascript'],
    liveSite:
      'https://github.com/yefreescoding/30-projects-30-days/tree/main/project-5',
    gitHub: './project-5/index.html',
  },
  {
    title: 'Project #7',
    date: 'Finished: Thursday August 2, 2023.',
    text: 'TIC TAC TOE',
    tools: ['REACT JS', 'VITE JS', 'HTML5', 'CSS'],
    liveSite:
      'https://github.com/yefreescoding/30-projects-30-days/tree/main/project-6',
    gitHub: './project-6/index.html',
  },
];

const projectCountContainer = document.getElementById('project-count');

projectCountContainer.innerHTML = projects.length;

const projectsContainer = document.querySelector('.projects_container');

window.addEventListener('load', () => {
  let displayProjects = projects.map((item, index) => {
    let toolsList = item.tools
      .map((tool) => {
        return `<li>${tool}</li>`;
      })
      .join('');

    console.log(toolsList);
    return `  <article>
            <p>${item.title}</p>
            <header>
              <h3>${item.text}</h3>
              <span>${item.date}</span>
            </header>
            <p>The technologies I used:</p>
            <ul>
              ${toolsList}
            </ul>
            <div>
              <a
                href=${item.gitHub}
                >Github repo</a
              >
              <a href=${item.liveSite}>Live Site</a>
            </div>
          </article>`;
  });

  displayProjects = displayProjects.join('');
  projectsContainer.innerHTML = displayProjects;
});
