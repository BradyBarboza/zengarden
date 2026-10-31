// Three references connect JavaScript to the HTML.
const email = document.querySelector('#email');
const message = document.querySelector('#message');
const button = document.querySelector('#check');

button.addEventListener('click', function () {
  // Check for text before @, a domain, and an ending such as .com.
  const pattern = /^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)+$/;
  if (pattern.test(email.value.trim())) {
    email.style.borderColor = 'green';
    email.setAttribute('aria-invalid', 'false');
    message.textContent = '';
  } else {
    email.style.borderColor = 'red';
    email.setAttribute('aria-invalid', 'true');
    message.textContent = 'Please enter a valid email address, such as name@example.com.';
  }
});
