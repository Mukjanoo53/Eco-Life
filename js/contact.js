// contact.html
const contactHeader = document.querySelector('.contactheader2');
contactHeader.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.5)';

const footer = document.querySelector('footer p');
footer.textContent = `© ${new Date().getFullYear()} Eco-Life. All Rights Reserved.`;



const submitButton = document.querySelector('button');
submitButton.addEventListener('mouseover', () => {
    submitButton.style.backgroundColor = '#2E8B57';
});
submitButton.addEventListener('mouseout', () => {
    submitButton.style.backgroundColor = '#4CAF50';
});

const textarea = document.querySelector('textarea');
textarea.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        console.log('Enter pressed in textarea');
    }
});

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('All fields are required!');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    alert('Form submitted successfully!');
    form.reset();
});

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

const emailInput = document.getElementById('email');
const errorDiv = document.createElement('div');
errorDiv.style.color = 'red';
errorDiv.style.fontSize = '14px';
emailInput.insertAdjacentElement('afterend', errorDiv);
emailInput.addEventListener('blur', () => {
    if (!validateEmail(emailInput.value.trim())) {
        errorDiv.textContent = 'Invalid email format';
    } else {
        errorDiv.textContent = '';
    }
});
