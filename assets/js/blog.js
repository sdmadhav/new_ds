fetch('data/blogs.json')
  .then(response => response.json())
  .then(data => {
    const blogList = document.getElementById('blog-list');
    const tagSet = new Set();

    data.forEach(post => { 
      const blogCard = document.createElement('div');
      blogCard.className = 'blog-card';

      // Save tags as a data attribute for easier filtering
      blogCard.dataset.tags = post.tags.join(',');

      blogCard.innerHTML = `
        <h3><a href="blog/${post.slug}.html">${post.title}</a></h3>
        <p><small>${post.date}</small></p>
        <p>${post.description}</p>
        <div class="tags">${post.tags.map(tag => `<span class="tag">${tag}</span>`).join(' ')}</div>
      `;
      blogList.appendChild(blogCard);

      post.tags.forEach(tag => tagSet.add(tag));
    });

    const tagContainer = document.getElementById('blog-tags');

    // Add "Show All" button
    const showAllBtn = document.createElement('button');
    showAllBtn.textContent = 'Show All';
    showAllBtn.onclick = () => {
      document.querySelectorAll('.blog-card').forEach(card => card.style.display = 'block');
    };
    tagContainer.appendChild(showAllBtn);

    // Cache blog cards once
    const blogCards = document.querySelectorAll('.blog-card');

    tagSet.forEach(tag => {
      const btn = document.createElement('button');
      btn.textContent = tag;
      btn.onclick = () => {
        blogCards.forEach(card => {
          const tags = card.dataset.tags.split(',');
          card.style.display = tags.includes(tag) ? 'block' : 'none';
        });
      };
      tagContainer.appendChild(btn);
    });
  });
