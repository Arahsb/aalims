// navbar search form validation
/*
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('enhancedSearchForm');
  const resultsDiv = document.getElementById('results');
  let selectedFilter = 'all';

  document.querySelectorAll('.dropdown-item').forEach((item) => {
    item.addEventListener('click', (event) => {
      selectedFilter = event.target.getAttribute('data-filter');
      document.getElementById(
        'dropdownMenuButton'
      ).textContent = `Filter: ${event.target.textContent}`;
    });
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const searchInput = document.getElementById('search');
    const searchValue = searchInput.value.trim().toLowerCase();

    if (searchValue.length < 3) {
      alert('Search term must be at least 3 characters long.');
      return;
    }

    // Simulated search results (replace this with your actual search logic)
    const allResults = {
      products: [
        { id: 1, name: 'Product A' },
        { id: 2, name: 'Product B' },
      ],
      blogs: [
        { id: 1, title: 'Blog 1' },
        { id: 2, title: 'Blog 2' },
      ],
    };

    let filteredResults = { products: [], blogs: [] };
    if (selectedFilter === 'products' || selectedFilter === 'all') {
      filteredResults.products = allResults.products.filter((product) =>
        product.name.toLowerCase().includes(searchValue)
      );
    }

    if (selectedFilter === 'blogs' || selectedFilter === 'all') {
      filteredResults.blogs = allResults.blogs.filter((blog) =>
        blog.title.toLowerCase().includes(searchValue)
      );
    }

    displayResults(filteredResults);
  });

  function displayResults(results) {
    resultsDiv.innerHTML = '';

    if (results.products.length > 0) {
      const productResults = results.products
        .map((product) => `<div>Product: ${product.name}</div>`)
        .join('');
      resultsDiv.innerHTML += `<h2>Products</h2><div class="result-category">${productResults}</div>`;
    }

    if (results.blogs.length > 0) {
      const blogResults = results.blogs
        .map((blog) => `<div>Blog: ${blog.title}</div>`)
        .join('');
      resultsDiv.innerHTML += `<h2>Blogs</h2><div class="result-category">${blogResults}</div>`;
    }

    if (results.products.length === 0 && results.blogs.length === 0) {
      resultsDiv.innerHTML = '<p>No results found</p>';
    }
  }

  // Logging for testing in the console
  console.log(
    'Search form and results script is loaded and ready for testing.'
  );
});
*/

// subscribe section email form validation
/*
document
  .querySelector('#subscribe-form')
  .addEventListener('submit', (event) => {
    event.preventDefault();

    const emailInput = document.querySelector('#email-input');
    const emailValue = emailInput.value;
    const validationMessage = document.querySelector('#validation-message');

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(emailValue)) {
      validationMessage.textContent = 'please enter a valid email address.';
    } else {
      validationMessage.textContent = '';
      // Proceed with form submission or AJAX call to the server
      console.log('Email is valid:', emailValue);
    }
  });
  */

// Blog page modal form validation
/*
document.addEventListener('DOMContentLoaded', () => {
  // Ensure bootstrap modal is initialized correctly
  const subscribeModalElement = document.getElementById('subscribe_modal');
  const subscribeModal = new bootstrap.Modal(subscribeModalElement, {
    keyboard: false,
  });

  const form = document.querySelector('#subscribe_modal form');
  const submitButton = form.querySelector('#form-submit-btn'); // Updated button ID
  const emailInput = form.querySelector('#email-input');
  const emailError = form.querySelector('#email-error');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const firstName = form.querySelector(
      'input[placeholder="First Name"]'
    ).value;
    const lastName = form.querySelector('input[placeholder="Last Name"]').value;
    const email = emailInput.value;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Reset previous error message
    emailError.style.display = 'none';

    if (!firstName || !lastName || !email) {
      alert('Please fill out all fields.');
      return;
    }

    if (!emailPattern.test(email)) {
      emailError.style.display = 'block';
      return;
    }

    submitButton.disabled = true;
    submitButton.innerHTML = 'Submitting...';

    setTimeout(() => {
      console.log('First Name:', firstName);
      console.log('Last Name:', lastName);
      console.log('Email:', email);

      alert('Thank you for subscribing!');

      submitButton.disabled = false;
      submitButton.innerHTML = ` 
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-envelope-arrow-up-fill me-2"
          viewBox="0 0 16 16"
        >
          <path
            d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zm.192 8.159 6.57-4.027L8 9.586l1.239-.757.367.225A4.49 4.49 0 0 0 8 12.5c0 .526.09 1.03.256 1.5H2a2 2 0 0 1-1.808-1.144M16 4.697v4.974A4.5 4.5 0 0 0 12.5 8a4.5 4.5 0 0 0-1.965.45l-.338-.207z"
          />
          <path
            d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.354-5.354 1.25 1.25a.5.5 0 0 1-.708.708L13 12.207V14a.5.5 0 0 1-1 0v-1.717l-.28.305a.5.5 0 0 1-.737-.676l1.149-1.25a.5.5 0 0 1 .722-.016"
          />
        </svg>
        Subscribe
      `;

      subscribeModal.hide();
    }, 2000);
  });

  emailInput.addEventListener('input', () => {
    // Hide the error message when the user starts typing
    emailError.style.display = 'none';
  });
});
*/

// signup.html page signupForm validation
/*
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed');
  const form = document.getElementById('signupForm');
  const message = document.getElementById('message');

  if (form) {
    console.log('Form found!');

    // Real-time validation feedback
    form.elements
      .namedItem('name')
      .addEventListener('input', () => validateField('name'));
    form.elements
      .namedItem('email')
      .addEventListener('input', () => validateField('email'));
    form.elements
      .namedItem('password')
      .addEventListener('input', () => validateField('password'));

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const isValid = validateForm();
      if (isValid) {
        message.style.display = 'none';
        form.reset();
        window.location.href = 'thankyou.html';
      } else {
        message.style.display = 'block';
      }
    });
  }

  function validateForm() {
    const name = getValue('name');
    const email = getValue('email');
    const password = getValue('password');

    if (name === '' || email === '' || password === '') {
      showMessage('All fields are required.');
      return false;
    }

    if (!validateName(name)) {
      showMessage(
        'Invalid name. Only alphabets allowed and must be at least 3 characters long.'
      );
      return false;
    }

    if (!validateEmail(email)) {
      showMessage('Invalid email address.');
      return false;
    }

    if (!validatePassword(password)) {
      showMessage(
        'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.'
      );
      return false;
    }

    return true;
  }

  function validateField(field) {
    const value = getValue(field);
    let valid = false;
    let errorMessage = '';

    switch (field) {
      case 'name':
        valid = validateName(value);
        errorMessage =
          'Invalid name. Only alphabets allowed and must be at least 3 characters long.';
        break;
      case 'email':
        valid = validateEmail(value);
        errorMessage = 'Invalid email address.';
        break;
      case 'password':
        valid = validatePassword(value);
        errorMessage =
          'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.';
        break;
    }

    if (!valid) {
      showMessage(errorMessage);
      message.style.display = 'block';
    } else {
      message.style.display = 'none';
    }
  }

  function getValue(id) {
    return document.getElementById(id).value.trim();
  }

  function validateName(name) {
    const re = /^[A-Za-z]{3,}$/;
    return re.test(name);
  }

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  function validatePassword(password) {
    const re =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return re.test(password);
  }

  function showMessage(msg) {
    message.textContent = msg;
  }
});

window.onload = () => {
  const formCheck = document.getElementById('signupForm');
  if (!formCheck) {
    console.error('Form still not found on window load!');
  } else {
    console.log('Form found on window load!');
  }
};

*/

// login.html page loginForm validation
/*
document.addEventListener('DOMContentLoaded', function () {
  console.log('DOM fully loaded and parsed');

  const loginForm = document.getElementById('loginForm');

  if (loginForm) {
    console.log('Login Form found');

    loginForm.addEventListener('submit', function (event) {
      event.preventDefault();

      console.log('Form submitted'); // Log to confirm form submission

      const email = loginForm.email.value.trim();
      const password = loginForm.password.value.trim();

      console.log(`Entered email: ${email}`);
      console.log(`Entered password: ${password}`);

      let errors = [];

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        errors.push('Please enter a valid email address.');
        console.log('Invalid email format'); // Log invalid email
      } else {
        console.log('Valid email format'); // Log valid email
      }

      // Password validation
      if (password.length < 8) {
        errors.push('Password must be at least 8 characters long.');
        console.log('Password too short'); // Log password too short
      } else {
        console.log('Valid password length'); // Log valid password length
      }

      // Mock user data for testing purposes
      const mockUsers = [
        { email: 'user1@example.com', password: 'password123' },
        { email: 'user2@example.com', password: 'password123' },
      ];

      console.log('Mock Users:', mockUsers); // Log mock user data

      const user = mockUsers.find(
        (user) => user.email === email && user.password === password
      );
      console.log(`User found: ${user ? 'Yes' : 'No'}`); // Log if user is found

      if (!user) {
        errors.push('Invalid login credentials. Please sign up first.');
        console.log('Credentials not found'); // Log invalid credentials
      } else {
        console.log('Credentials found'); // Log valid credentials
      }

      if (errors.length > 0) {
        console.error('Errors:', errors.join('\n')); // Log the errors for debugging
        alert(errors.join('\n'));
      } else {
        alert('Form submitted successfully!');
      }
    });
  } else {
    console.error(
      'Login form not found. Ensure the form has the id="loginForm"'
    );
  }
});
*/

// Faq page queryForm validation
/*
const maxTitleLength = 50; // Maximum character limit for Query Title
const maxDetailsLength = 300; // Maximum character limit for Query Details

// Function to check if the first character is a non-alphabetical character
const startsWithNonAlphabet = (str) => /^[^a-zA-Z]/.test(str);

// Function to set border color based on validity
const setBorderColor = (input, isValid) => {
  input.style.borderColor = isValid ? 'green' : 'red';
};

// Email pattern
const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

// Add input event listeners to dynamically change border colors while typing
document
  .querySelectorAll('#queryForm input, #queryForm textarea')
  .forEach((input) => {
    input.addEventListener('input', () => {
      let isValidInput = true;
      if (input.placeholder === 'Email') {
        isValidInput = emailPattern.test(input.value.trim());
      } else {
        isValidInput =
          !startsWithNonAlphabet(input.value) &&
          input.value.length <=
            (input.placeholder === 'Query Title'
              ? maxTitleLength
              : maxDetailsLength);
      }
      setBorderColor(input, isValidInput);
    });
  });

document
  .getElementById('queryForm')
  .addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting

    const nameInput = document.querySelector('input[placeholder="Name"]');
    const emailInput = document.querySelector('input[placeholder="Email"]');
    const queryTitleInput = document.querySelector(
      'input[placeholder="Query Title"]'
    );
    const queryDetailsInput = document.querySelector(
      'textarea[placeholder="Query Details.."]'
    );

    let isValid = true;

    // Validate Name
    if (startsWithNonAlphabet(nameInput.value)) {
      console.error('Name should start with an alphabetical character');
      setBorderColor(nameInput, false);
      isValid = false;
    } else {
      setBorderColor(nameInput, true);
    }

    // Validate Email (Skip first character check for email)
    if (emailInput.value.trim() === '') {
      console.error('Email is required');
      setBorderColor(emailInput, false);
      isValid = false;
    } else if (!emailInput.value.match(emailPattern)) {
      console.error('Invalid email format');
      setBorderColor(emailInput, false);
      isValid = false;
    } else {
      setBorderColor(emailInput, true);
    }

    // Validate Query Title
    if (
      startsWithNonAlphabet(queryTitleInput.value) ||
      queryTitleInput.value.length > maxTitleLength
    ) {
      console.error(
        `Query Title should start with an alphabetical character and be less than ${maxTitleLength} characters`
      );
      setBorderColor(queryTitleInput, false);
      isValid = false;
    } else {
      setBorderColor(queryTitleInput, true);
    }

    // Validate Query Details
    if (
      startsWithNonAlphabet(queryDetailsInput.value) ||
      queryDetailsInput.value.length > maxDetailsLength
    ) {
      console.error(
        `Query Details should start with an alphabetical character and be less than ${maxDetailsLength} characters`
      );
      setBorderColor(queryDetailsInput, false);
      isValid = false;
    } else {
      setBorderColor(queryDetailsInput, true);
    }

    // If form is valid
    if (isValid) {
      console.log('Form is valid. Submitting...');
      alert('Form is valid. Submitting...');

      // Reset the form to its initial state
      document.getElementById('queryForm').reset();

      // Reset border colors to default after resetting the form
      [nameInput, emailInput, queryTitleInput, queryDetailsInput].forEach(
        (input) => {
          input.style.borderColor = '';
        }
      );
    } else {
      console.warn('Form is not valid. Please check the errors and try again.');
      alert('Form is not valid. Please check the errors and try again.');
    }
  });
*/

// Faq page searchForm validation
/*
document.addEventListener('DOMContentLoaded', (event) => {
  const faqForm = document.getElementById('faq-search');

  const mockFaqContent = `
      <div class="faq-item">How do I reset my password? - To reset your password, click on 'Forgot Password' on the login screen.</div>
      <div class="faq-item">Where can I find my order history? - Your order history is available under 'My Account' > 'Order History'.</div>
      <div class="faq-item">How do I contact support? - You can contact support via the 'Contact Us' page or call our helpline number.</div>
    `;

  faqForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchTerm = e.target
      .querySelector('input[type="search"]')
      .value.trim();

    if (!searchTerm) {
      console.error('Search term cannot be empty.');
      return;
    }

    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(mockFaqContent, 'text/html');
      const questionsAndAnswers = doc.querySelectorAll('.faq-item');

      const results = Array.from(questionsAndAnswers).filter((item) =>
        item.textContent.toLowerCase().includes(searchTerm.toLowerCase())
      );

      if (results.length) {
        console.log('Search Results:', results);
      } else {
        console.log('No results found.');
      }
    } catch (error) {
      console.error('Error parsing the content:', error);
    }
  });
});
*/
