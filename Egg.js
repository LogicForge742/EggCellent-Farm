document.addEventListener('DOMContentLoaded', () => {
  // Fetch and render products
  async function fetchProducts() {
    try {
      const res = await fetch('http://localhost:3000/products');
      if (!res.ok) throw new Error('Failed to fetch products');
      const products = await res.json();

      const productsGrid = document.querySelector('.products-grid');
      productsGrid.innerHTML = ''; // Clear existing static content

      products.map(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        // Create product image container
        const productImage = document.createElement('div');
        productImage.classList.add('product-image');
        const img = document.createElement('img');
        img.src = product.image;
        img.alt = product.name;
        img.width = 300;
        img.height = 200;
        productImage.appendChild(img);

        // Create product info container
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productName = document.createElement('h3');
        productName.textContent = product.name;

        const productDesc = document.createElement('p');
        productDesc.textContent = product.description;

        const productPrice = document.createElement('div');
        productPrice.classList.add('product-price');
        if (product.price) {
          productPrice.textContent = `$${product.price.toFixed(2)}`;
        } else if (product.pricePerTray) {
          productPrice.textContent = `$${product.pricePerTray.toFixed(2)} per tray`;
        } else {
          productPrice.textContent = 'Price not available';
        }

        productInfo.appendChild(productName);
        productInfo.appendChild(productDesc);
        productInfo.appendChild(productPrice);

        productCard.appendChild(productImage);
        productCard.appendChild(productInfo);

        productsGrid.appendChild(productCard);
      });
    } catch (error) {
      console.error('Error loading products:', error);
    }
  }

  // Fetch and render services
  async function fetchServices() {
    try {
      const res = await fetch('http://localhost:3000/services');
      if (!res.ok) throw new Error('Failed to fetch services');
      const services = await res.json();

      const servicesGrid = document.querySelector('.services-grid');
      servicesGrid.innerHTML = ''; // Clear existing static content

      services.map(service => {
        const serviceCard = document.createElement('div');
        serviceCard.classList.add('service-card');

        const serviceIcon = document.createElement('div');
        serviceIcon.classList.add('service-icon');
        serviceIcon.textContent = service.icon;

        const serviceTitle = document.createElement('h3');
        serviceTitle.textContent = service.title;

        const serviceDesc = document.createElement('p');
        serviceDesc.textContent = service.description;

        serviceCard.appendChild(serviceIcon);
        serviceCard.appendChild(serviceTitle);
        serviceCard.appendChild(serviceDesc);

        servicesGrid.appendChild(serviceCard);
      });
    } catch (error) {
      console.error('Error loading services:', error);
    }
  }

  // Initialize fetching and rendering
  fetchProducts();
  fetchServices();
const form = document.querySelector('form');
const submissionsList = document.getElementById('submissions-list');

let currentlyEditingDiv = null; // Track which submission is being edited

// Function to fetch and display submissions
async function loadSubmissions() {
  try {
    const response = await fetch('http://localhost:3000/submissions');
    if (!response.ok) throw new Error('Failed to fetch submissions');
    const submissions = await response.json();

    submissionsList.innerHTML = '';

    if (submissions.length === 0) {
      submissionsList.textContent = 'No submissions yet.';
      return;
    }

    submissions.forEach(sub => {
      const div = document.createElement('div');
      div.classList.add('submission-item');
      div.style.border = '1px solid #ccc';
      div.style.padding = '10px';
      div.style.marginBottom = '10px';

      // Store original data for cancel
      div.dataset.originalName = sub.name;
      div.dataset.originalEmail = sub.email;
      div.dataset.originalMessage = sub.message;

      div.innerHTML = `
        <strong>Name:</strong> <span class="name">${sub.name}</span><br>
        <strong>Email:</strong> <span class="email">${sub.email}</span><br>
        <strong>Message:</strong> <span class="message">${sub.message}</span><br>
        <button class="edit-btn">Edit</button>
        <button class="save-btn" style="display:none;">Save</button>
        <button class="cancel-btn" style="display:none;">Cancel</button>
        <button class="delete-btn" style="background-color:#f44336;color:white;">Delete</button>
        <span class="loading" style="display:none;margin-left:10px;">Saving...</span>
      `;

      submissionsList.appendChild(div);

      const editBtn = div.querySelector('.edit-btn');
      const saveBtn = div.querySelector('.save-btn');
      const cancelBtn = div.querySelector('.cancel-btn');
      const deleteBtn = div.querySelector('.delete-btn');
      const loadingSpan = div.querySelector('.loading');

      // Handle Edit button click
      editBtn.addEventListener('click', () => {
        if (currentlyEditingDiv && currentlyEditingDiv !== div) {
          alert('Finish editing the current submission before editing another.');
          return;
        }
        currentlyEditingDiv = div;
        toggleEditMode(div, true);
      });

      // Handle Cancel button click
      cancelBtn.addEventListener('click', () => {
        toggleEditMode(div, false, true);
        currentlyEditingDiv = null;
      });
    
     saveBtn.addEventListener('click', async () => {
  const nameInput = div.querySelector('input.name-input');
  const emailInput = div.querySelector('input.email-input');
  const messageInput = div.querySelector('textarea.message-input');

  const updatedName = nameInput.value.trim();
  const updatedEmail = emailInput.value.trim();
  const updatedMessage = messageInput.value.trim();

  if (!updatedName || !updatedEmail || !updatedMessage) {
    alert('Please fill in all fields.');
    return;
  }

  saveBtn.disabled = true;
  loadingSpan.style.display = 'inline';

  try {
    const res = await fetch(`http://localhost:3000/submissions/${sub.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: updatedName,
        email: updatedEmail,
        message: updatedMessage
      })
    });

    if (!res.ok) {
      const errMsg = await res.text();
      throw new Error('Failed to update submission: ' + errMsg);
    }
    const updatedSub = await res.json();

    div.dataset.originalName = updatedSub.name;
    div.dataset.originalEmail = updatedSub.email;
    div.dataset.originalMessage = updatedSub.message;

    // Switch out of edit mode first!
    toggleEditMode(div, false);

    // Now spans exist, update them
    div.querySelector('.name').textContent = updatedSub.name;
    div.querySelector('.email').textContent = updatedSub.email;
    div.querySelector('.message').textContent = updatedSub.message;

    currentlyEditingDiv = null;
    alert('Submission updated successfully!');
  } catch (error) {
    alert('Error updating submission: ' + error.message);
    console.error(error);
  } finally {
    saveBtn.disabled = false;
    loadingSpan.style.display = 'none';
  }
});


      // Handle Delete button click
      deleteBtn.addEventListener('click', async () => {
        if (!confirm('Are you sure you want to delete this submission?')) return;
        try {
          const res = await fetch(`http://localhost:3000/submissions/${sub.id}`, {
            method: 'DELETE'
          });
          if (!res.ok) throw new Error('Failed to delete submission');
          alert('Submission deleted!');
          loadSubmissions();
        } catch (error) {
          alert('Error deleting submission. Please try again.');
          console.error(error);
        }
      });
    });
  } catch (error) {
    submissionsList.textContent = 'Error loading submissions.';
    console.error(error);
  }
}

// Toggle between view and edit mode
function toggleEditMode(div, isEditing, isCancel = false) {
  const editBtn = div.querySelector('.edit-btn');
  const saveBtn = div.querySelector('.save-btn');
  const cancelBtn = div.querySelector('.cancel-btn');

  if (isEditing) {
    // Replace spans with input fields
    const nameSpan = div.querySelector('.name');
    const emailSpan = div.querySelector('.email');
    const messageSpan = div.querySelector('.message');

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.value = nameSpan.textContent;
    nameInput.classList.add('name-input');

    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.value = emailSpan.textContent;
    emailInput.classList.add('email-input');

    const messageInput = document.createElement('textarea');
    messageInput.classList.add('message-input');
    messageInput.value = messageSpan.textContent;

    nameSpan.replaceWith(nameInput);
    emailSpan.replaceWith(emailInput);
    messageSpan.replaceWith(messageInput);

    // Autofocus first input
    nameInput.focus();

    // Enable Save only when fields are changed and all filled
    function checkInputs() {
      const changed =
        nameInput.value.trim() !== div.dataset.originalName ||
        emailInput.value.trim() !== div.dataset.originalEmail ||
        messageInput.value.trim() !== div.dataset.originalMessage;
      const allFilled =
        nameInput.value.trim() && emailInput.value.trim() && messageInput.value.trim();
      saveBtn.disabled = !(changed && allFilled);
    }
    nameInput.addEventListener('input', checkInputs);
    emailInput.addEventListener('input', checkInputs);
    messageInput.addEventListener('input', checkInputs);
    checkInputs();

    editBtn.style.display = 'none';
    saveBtn.style.display = 'inline-block';
    cancelBtn.style.display = 'inline-block';
  } else {
    // Replace inputs back with spans, use original values if cancel
    const nameInput = div.querySelector('input.name-input');
    const emailInput = div.querySelector('input.email-input');
    const messageInput = div.querySelector('textarea.message-input');

    const nameSpanNew = document.createElement('span');
    nameSpanNew.classList.add('name');
    nameSpanNew.textContent = isCancel ? div.dataset.originalName : nameInput.value;

    const emailSpanNew = document.createElement('span');
    emailSpanNew.classList.add('email');
    emailSpanNew.textContent = isCancel ? div.dataset.originalEmail : emailInput.value;

    const messageSpanNew = document.createElement('span');
    messageSpanNew.classList.add('message');
    messageSpanNew.textContent = isCancel ? div.dataset.originalMessage : messageInput.value;

    nameInput.replaceWith(nameSpanNew);
    emailInput.replaceWith(emailSpanNew);
    messageInput.replaceWith(messageSpanNew);

    editBtn.style.display = 'inline-block';
    saveBtn.style.display = 'none';
    cancelBtn.style.display = 'none';
  }
}

// Initial load of submissions
loadSubmissions();

// Form submission handler
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    alert('Please fill in all fields.');
    return;
  }

  const submission = { name, email, message };

  try {
    const response = await fetch('http://localhost:3000/submissions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(submission)
    });

    if (!response.ok) throw new Error('Failed to submit form');

    alert('Message sent successfully!');
    form.reset();
    loadSubmissions();

  } catch (error) {
    alert('Error sending message. Please try again.');
    console.error(error);
  }
});
// Mobile menu toggle (basic implementation)
  document.querySelector('.mobile-menu').addEventListener('click', () => {
   const navLinks = document.querySelector('.nav-links');
   navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        })
})
