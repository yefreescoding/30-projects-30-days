const projectCountContainer = document.getElementById("project-count");

window.addEventListener("load", async () => {
  const response = await fetch("./projects.json");
  const projects = await response.json();
  const projectsContainer = document.querySelector(".projects_container");

  projectCountContainer.innerHTML = projects.projects.length;

  let displayProjects = projects.projects.map((item, index) => {
    let toolsList = item.tools
      .map((tool) => {
        return `<li class="tools">${tool}</li>`;
      })
      .join("");

    return `  
    <article class="article">
      <header class="article__header">
        <h2>${item.title}</h2>
        <img style="--size: ${item["image-size"]}" src="./project-img/${item.image}"/>
        <ul>
          ${toolsList}
        </ul>
      </header>
      <div class="article__body">
        <div class="article__links">
          <a class="article__links-github" href=${item.github} target="_blank">
            <svg width="20px" height="20px" stroke-width="1.2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M16 22.0268V19.1568C16.0375 18.68 15.9731 18.2006 15.811 17.7506C15.6489 17.3006 15.3929 16.8902 15.06 16.5468C18.2 16.1968 21.5 15.0068 21.5 9.54679C21.4997 8.15062 20.9627 6.80799 20 5.79679C20.4558 4.5753 20.4236 3.22514 19.91 2.02679C19.91 2.02679 18.73 1.67679 16 3.50679C13.708 2.88561 11.292 2.88561 8.99999 3.50679C6.26999 1.67679 5.08999 2.02679 5.08999 2.02679C4.57636 3.22514 4.54413 4.5753 4.99999 5.79679C4.03011 6.81549 3.49251 8.17026 3.49999 9.57679C3.49999 14.9968 6.79998 16.1868 9.93998 16.5768C9.61098 16.9168 9.35725 17.3222 9.19529 17.7667C9.03334 18.2112 8.96679 18.6849 8.99999 19.1568V22.0268" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 20.0267C6 20.9999 3.5 20.0267 2 17.0267" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            <span>Code</span>
          </a>
          <a class="article__links-site" href=${item.liveSite} target="_blank">
            <svg width="20px" height="20px" stroke-width="1.2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M10.5857 10.5857L16.9496 7.0502L13.4141 13.4142M10.5857 10.5857L7.05012 16.9497L13.4141 13.4142M10.5857 10.5857L13.4141 13.4142" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19 12H18" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6 12H5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 5V6" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 18V19" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7.05029 7.05029L7.7574 7.7574" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.2427 16.2427L16.9498 16.9498" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            <span>Live Site</span>
          </a>
        </div>
      </div>
    </article>`;
  });

  displayProjects = displayProjects.join("");
  projectsContainer.innerHTML = displayProjects;
});
