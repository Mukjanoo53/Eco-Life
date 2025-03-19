// home.html
const header = document.querySelector('.header1');
header.style.color = '#2c7a47';

const footer = document.querySelector('footer p');
footer.textContent = `© ${new Date().getFullYear()} Eco-Life. All Rights Reserved.`;

const homeList = document.querySelector('.homeul');
const newItem = document.createElement('li');
newItem.textContent = 'Support local green initiatives';
homeList.appendChild(newItem);

header.addEventListener('mouseover', () => {
    header.style.backgroundColor = '#e0f7e0';
});
header.addEventListener('mouseout', () => {
    header.style.backgroundColor = 'rgba(200, 238, 189, 0.847)';
});

const listItems = document.querySelectorAll('.homeul li');
listItems.forEach(item => {
    item.addEventListener('click', (event) => {
        console.log(`Clicked: ${event.target.textContent}`);
    });
});

const homeHeader = document.querySelector('.homeheader2');
homeHeader.style.opacity = 0;
let opacity = 0;
const fadeIn = setInterval(() => {
    if (opacity < 1) {
        opacity += 0.05;
        homeHeader.style.opacity = opacity;
    } else {
        clearInterval(fadeIn);
    }
}, 50);

const footerElement = document.querySelector('footer');
footerElement.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});