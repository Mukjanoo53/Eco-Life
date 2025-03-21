// about.html
const missionTitle = document.querySelector('.mission-text h2');
missionTitle.style.color = '#2c7a47';

const footer = document.querySelector('footer p');
footer.textContent = `© ${new Date().getFullYear()} Eco-Life. All Rights Reserved.`;

const missionSection = document.querySelector('.mission-section .mission-text');
const newPara = document.createElement('p');
newPara.textContent = 'Join us in building a sustainable future.';
missionSection.appendChild(newPara);

const missionImage = document.querySelector('.mission-image img');
missionImage.addEventListener('mouseover', () => {
    missionImage.style.filter = 'brightness(70%)';
});
missionImage.addEventListener('mouseout', () => {
    missionImage.style.filter = 'brightness(100%)';
});

const futureSection = document.querySelector('.future-section');
futureSection.addEventListener('click', (event) => {
    console.log(`Clicked element: ${event.target.tagName}`);
});