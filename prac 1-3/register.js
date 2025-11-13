const form = document.getElementById('registerForm');
const resultDiv = document.getElementById('result');

const validateEmail = (email) => {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(email);
};

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const age = parseInt(document.getElementById('age').value);
  const email = document.getElementById('email').value.trim();

  if (name === '') {
    resultDiv.innerHTML = 'Name cannot be empty!';
    return;
  }

  if (isNaN(age) || age < 13 || age > 120) {
    resultDiv.innerHTML = 'Age must be between 13 and 120!';
    return;
  }

  if (!validateEmail(email)) {
    resultDiv.innerHTML = 'Invalid email format!';
    return;
  }

  const successMessage = `Welcome, ${name} (Age: ${age}). Your email ${email} has been registered successfully!`;
  resultDiv.innerHTML = successMessage;
});
