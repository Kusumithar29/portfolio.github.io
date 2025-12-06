// Get all the button elements using their shared class
const ideaButtons = document.querySelectorAll('.idea-button');
// Get all the description content containers
const descriptionContents = document.querySelectorAll('.description-content');

/**
 * Hides all description containers by adding the 'hidden' class.
 */
function hideAllDescriptions() {
    descriptionContents.forEach(desc => {
        desc.classList.add('hidden'); 
    });
}

/**
 * Removes the 'active' class from all idea buttons.
 */
function deactivateAllButtons() {
    ideaButtons.forEach(button => {
        button.classList.remove('active');
    });
}

/**
 * Handles the click event for an idea button.
 * @param {HTMLElement} button - The button that was clicked.
 */
function handleIdeaClick(button) {
    // Get the specific idea ID from the data-idea attribute (e.g., "idea1")
    const ideaId = button.getAttribute('data-idea'); 

    // 1. Reset state: Hide all descriptions and deactivate all buttons
    hideAllDescriptions();
    deactivateAllButtons();

    // 2. Show the description corresponding to the clicked button
    // It looks for an element with an ID like "idea1-desc"
    const targetDesc = document.getElementById(`${ideaId}-desc`);
    if (targetDesc) {
        targetDesc.classList.remove('hidden');
    }

    // 3. Set the clicked button as active (triggers the orange line and scaling CSS)
    button.classList.add('active');
}

// Attach the click handler to every idea button
ideaButtons.forEach(button => {
    button.addEventListener('click', () => {
        handleIdeaClick(button);
    });
});


// --- Initialization Function ---

// Ensure the first idea is displayed and active when the page first loads
document.addEventListener('DOMContentLoaded', () => {
    // Select the first button dynamically
    const firstButton = document.querySelector('.idea-button');
    
    // Check if a button exists before trying to click it
    if (firstButton) {
        // Trigger the click handler to set the initial state (show description, add active class)
        handleIdeaClick(firstButton);
    }
});
