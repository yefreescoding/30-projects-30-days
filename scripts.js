const projectCountContainer = document.getElementById('project-count');

window.addEventListener('load', async () => {
  /* The code is making an asynchronous request to fetch the 'projects.json' file from the server. Once
 the response is received, it is converted to JSON format using the `response.json()` method. The
 resulting JSON data is then stored in the `projects` variable. */
  const response = await fetch('./projects.json');
  const projects = await response.json();
  const projectsContainer = document.querySelector('.projects_container');

  projectCountContainer.innerHTML = projects.projects.length;

  let displayProjects = projects.projects.map((item, index) => {
    let toolsList = item.tools
      .map((tool) => {
        return `<li>${tool}</li>`;
      })
      .join('');

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
