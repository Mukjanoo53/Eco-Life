// services.html
const servicesHeader = document.querySelector('.services-section h2');
servicesHeader.style.color = '#2c7a47';

const footer = document.querySelector('footer p');
footer.textContent = `© ${new Date().getFullYear()} Eco-Life. All Rights Reserved.`;

const servicesList = document.querySelector('.services-list');
const newService = document.createElement('div');
newService.className = 'service-item';
newService.innerHTML = '<h3>🌍 Community Outreach</h3><p>Engaging local communities in sustainability.</p>';
servicesList.appendChild(newService);

const serviceItems = document.querySelectorAll('.service-item');
serviceItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = '#e0f7e0';
    });
    item.addEventListener('mouseout', () => {
        item.style.backgroundColor = '#f3f7f2';
    });
});

serviceItems.forEach(item => {
    item.addEventListener('click', (event) => {
        console.log(`Clicked: ${event.target.textContent}`);
    });
});

let index = 0;
serviceItems.forEach(item => item.style.display = 'none');
serviceItems[0].style.display = 'block';
setInterval(() => {
    serviceItems.forEach(item => item.style.display = 'none');
    index = (index + 1) % serviceItems.length;
    serviceItems[index].style.display = 'block';
}, 3000);