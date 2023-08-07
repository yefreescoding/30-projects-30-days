const projects = [
  {
    title: 'Project #1',
    date: 'Finished: Thursday July 27, 2023.',
    text: 'A basic hero section for a landing page.',
    tools: ['HTML5', 'CSS', 'Vanilla Javascript'],
    github:
      'https://github.com/yefreescoding/30-projects-30-days/tree/main/project-1',
    liveSite: './project-1/index.html',
  },
  {
    title: 'Project #2',
    date: 'Finished: Friday July 28, 2023.',
    text: 'QR code component.',
    tools: ['HTML5', 'CSS'],
    github:
      'https://github.com/yefreescoding/30-projects-30-days/tree/main/project-2',
    liveSite: './project-2/index.html',
  },
  {
    title: 'Project #3',
    date: 'Finished: Saturday July 29, 2023.',
    text: 'Stats card component.',
    tools: ['HTML5', 'CSS'],
    github:
      'https://github.com/yefreescoding/30-projects-30-days/tree/main/project-3',
    liveSite: './project-3/index.html',
  },
  {
    title: 'Project #4',
    date: 'Finished: Sunday July 30, 2023.',
    text: 'Room Landing Page',
    tools: ['HTML5', 'CSS', 'Vanilla Javascript'],
    github:
      'https://github.com/yefreescoding/30-projects-30-days/tree/main/project-4',
    liveSite: './project-4/index.html',
  },
  {
    title: 'Project #5',
    date: 'Finished: Monday July 31, 2023.',
    text: 'Sign up card component.',
    tools: ['HTML5', 'SASS', 'Vite JS'],
    github:
      'https://github.com/yefreescoding/30-projects-30-days/tree/main/project-5',
    liveSite: './project-5/app/dist/index.html',
  },
  {
    title: 'Project #6',
    date: 'Finished: Tuesday August 1, 2023.',
    text: 'Calculator App with theme switcher.',
    tools: ['HTML5', 'CSS', 'Vanilla Javascript'],
    github:
      'https://github.com/yefreescoding/30-projects-30-days/tree/main/project-6',
    liveSite: './project-6/index.html',
  },
  {
    title: 'Project #7',
    date: 'Finished: Thursday August 2, 2023.',
    text: 'TIC TAC TOE',
    tools: ['REACT JS', 'VITE JS', 'HTML5', 'CSS'],
    github:
      'https://github.com/yefreescoding/30-projects-30-days/tree/main/project-7',
    liveSite: './project-7/tic-tac-toe/dist/index.html',
  },
  {
    title: 'Project #8',
    date: 'Finished: Monday August 7, 2023.',
    text: 'Social Proof Section',
    tools: ['Vanilla JavaScript', 'HTML5', 'CSS'],
    github:
      'https://github.com/yefreescoding/30-projects-30-days/tree/main/project-8',
    liveSite: './project-8/index.html',
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
            <p><b>Tools I used: </b></p>
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
