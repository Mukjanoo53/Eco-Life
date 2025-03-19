// faq.html
const faqHeader = document.querySelector('.faq-section h2');
faqHeader.style.color = '#2c7a47';

const footer = document.querySelector('footer p');
footer.textContent = `© ${new Date().getFullYear()} Eco-Life. All Rights Reserved.`;

const faqSection = document.querySelector('.faq-section');
const newFaq = document.createElement('div');
newFaq.className = 'faq-item';
newFaq.innerHTML = '<h3>What’s next?</h3><p>More sustainability tips coming soon!</p>';
faqSection.appendChild(newFaq);

const faqItems = document.querySelectorAll('.faq-item h3');
faqItems.forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.nextElementSibling;
        answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
    });
});

faqItems.forEach(item => {
    item.addEventListener('mouseover', (event) => {
        console.log(`Hovered: ${event.target.textContent}`);
    });
});