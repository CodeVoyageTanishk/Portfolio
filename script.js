function showSection(id) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('hidden');
    });
    
    // Show selected section
    const selectedSection = document.getElementById(id);
    selectedSection.classList.remove('hidden');
    selectedSection.classList.add('animated');
}

function sendEmail(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Use EmailJS or any email service provider here
    alert(`Message sent! Name: ${name}, Email: ${email}, Message: ${message}`);
}
