// blog.html
const blogHeader = document.querySelector('.blog-section h2');
blogHeader.style.color = '#2c7a47';

const footer = document.querySelector('footer p');
footer.textContent = `© ${new Date().getFullYear()} Eco-Life. All Rights Reserved.`;

const blogSection = document.querySelector('.blog-section');
const newPost = document.createElement('div');
newPost.className = 'blog-post';
newPost.innerHTML = '<h3><a href="new-post.html">New Eco-Tips</a></h3><p>Latest sustainability tips!</p>';
blogSection.appendChild(newPost);

const blogPosts = document.querySelectorAll('.blog-post h3 a');
blogPosts.forEach(post => {
    post.addEventListener('mouseover', () => {
        post.style.color = '#2E8B57';
    });
    post.addEventListener('mouseout', () => {
        post.style.color = '#2c7a47';
    });
});

blogPosts.forEach(post => {
    post.addEventListener('click', (event) => {
        console.log(`Clicked: ${event.target.textContent}`);
    });
});