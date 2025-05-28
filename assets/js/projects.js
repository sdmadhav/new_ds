fetch('data/projects.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('projects-container');
    const tagSet = new Set();

    data.forEach(project => {
      const card = document.createElement('div');
      card.className = 'project-card';

      card.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.github}">GitHub</a>
        ${project.demo ? `<a href="${project.demo}">Live Demo</a>` : ""}
        <div class="tags">${project.tags.map(tag => `<span class="tag">${tag}</span>`).join(' ')}</div>
      `;
      container.appendChild(card);
      project.tags.forEach(tag => tagSet.add(tag));
    });

    const filterDiv = document.getElementById('filter-tags');
    tagSet.forEach(tag => {
      const btn = document.createElement('button');
      btn.textContent = tag;
      btn.onclick = () => {
        document.querySelectorAll('.project-card').forEach(card => {
          card.style.display = card.innerHTML.includes(tag) ? 'block' : 'none';
        });
      };
      filterDiv.appendChild(btn);
    });
  });
