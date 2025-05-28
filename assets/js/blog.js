fetch('data/blogs.json')
  .then(response => response.json())
  .then(data => {
    const blogList = document.getElementById('blog-list');
    const tagSet = new Set();

    data.forEach(post => {
      const blogCard = document.createElement('div');
      blogCard.className = 'blog-card';
      blogCard.innerHTML = `
        <h3><a href="blog/${post.slug}.html">${post.title}</a></h3>
        <p><small>${post.date}</small></p>
        <p>${post.description}</p>
        <div class="tags">${post.tags.map(tag => `<span class="tag">${tag}</span>`).join(' ')}</div>
      `;
      blogList.appendChild(blogCard);
      post.tags.forEach(tag => tagSet.add(tag));
    });

    // Filter buttons
    const tagContainer = document.getElementById('blog-tags');
    tagSet.forEach(tag => {
      const btn = document.createElement('button');
      btn.textContent = tag;
      btn.onclick = () => {
        document.querySelectorAll('.blog-card').forEach(card => {
          card.style.display = card.innerHTML.includes(tag) ? 'block' : 'none';
        });
      };
      tagContainer.appendChild(btn);
    });
  });
