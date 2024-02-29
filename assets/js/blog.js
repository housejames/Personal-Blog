document.addEventListener('DOMContentLoaded', function () {
    const blogPostsContainer = document.getElementById('blog-posts');

    function renderPosts() {
        const posts = JSON.parse(localStorage.getItem('posts')) || [];

        if (posts.length === 0) {
            blogPostsContainer.innerHTML = '<p>No posts yet.</p>';
            return;
        }

        blogPostsContainer.innerHTML = '';

        posts.forEach(function (post, index) {
            const postDiv = document.createElement('div');
            postDiv.classList.add('post');
            postDiv.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.content}</p>
                <p>By: ${post.username}</p>
            `;
            blogPostsContainer.appendChild(postDiv);
        });
    }

    renderPosts();
});
