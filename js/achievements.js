// achievements.html
const achievementsHeader = document.querySelector('.achievements-section h2');
achievementsHeader.style.color = '#2c7a47';

const footer = document.querySelector('footer p');
footer.textContent = `© ${new Date().getFullYear()} Eco-Life. All Rights Reserved.`;

const achievementsList = document.querySelector('.achievements-list');
const newAchievement = document.createElement('div');
newAchievement.className = 'achievement-item';
newAchievement.innerHTML = '<h3>🌟 New Milestone</h3><p>75,000 people educated!</p>';
achievementsList.appendChild(newAchievement);

const achievementItems = document.querySelectorAll('.achievement-item');
achievementItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = '#e0f7e0';
    });
    item.addEventListener('mouseout', () => {
        item.style.backgroundColor = '#f3f7f2';
    });
});

achievementItems.forEach(item => {
    item.addEventListener('click', (event) => {
        console.log(`Clicked: ${event.target.textContent}`);
    });
});