let index = 1; // Global variable to keep track of the index

function addDestination() {
    const destinationInput = document.getElementById('destinationInput');
    const detailsInput = document.getElementById('detailsInput');
    const destination = destinationInput.value.trim();
    const details = detailsInput.value.trim();

    if (destination === '') {
        alert('Please enter a destination!');
        return;
    }

    const ul = document.getElementById('bucketList');
    const li = document.createElement('li');
    
    li.innerHTML = `
        <span class="index">${index}.</span><strong>${destination}</strong><br>
        <p>${details}</p>
        <button class="visited-btn" onclick="toggleVisited(this)">Mark as Visited</button>
        <button class="remove-btn" onclick="removeDestination(this)">Remove</button>
    `;

    ul.appendChild(li);

    // Increment the index for the next item
    index++;

    // Clear the input fields
    destinationInput.value = '';
    detailsInput.value = '';
}

function toggleVisited(button) {
    const li = button.parentElement;
    li.classList.toggle('visited');
    button.textContent = li.classList.contains('visited') ? 'Marked as Visited' : 'Mark as Visited';
    button.classList.toggle('visited-btn');
}

function removeDestination(button) {
    const li = button.parentElement;
    li.remove();

    // Update index numbers after removal
    updateIndices();
}

function updateIndices() {
    const items = document.querySelectorAll('#bucketList li');
    index = 1; // Reset index
    items.forEach(item => {
        item.querySelector('.index').textContent = `${index}.`;
        index++;
    });
}

// Get modal element
const modal = document.getElementById('myModal');
const closeBtn = document.getElementById('closeBtn');

// Show the modal when the page loads
window.onload = function() {
    modal.style.display = 'block';
};

// Close the modal when the user clicks on <span> (x)
closeBtn.onclick = function() {
    modal.style.display = 'none';
};

// Close the modal when the user clicks anywhere outside of the modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};

// Function to handle form submission
function submitUsername() {
    const username = document.getElementById('usernameInput').value.trim();
    if (username === '') {
        alert('Please enter a username.');
        return;
    }

    // Display the username in the greeting div
    const greetingDiv = document.getElementById('greeting');
    greetingDiv.textContent = `${username}'s`;

    // Close the modal
    modal.style.display = 'none';
}
