// Show/hide the About Me summary
function showSummary() {
    const summaryContent = document.querySelector('.summary-content');
    summaryContent.classList.toggle('hidden');
}

// Typing animation cleanup
document.addEventListener("DOMContentLoaded", () => {
    const nameElement = document.getElementById("typing-name");
    const titleElement = document.getElementById("typing-title");

    setTimeout(() => {
        nameElement.style.borderRight = "none";
        titleElement.style.borderRight = "none";
    }, 3000); // 3 seconds duration for typing effect

    // Add click event for flipping profile card
    const profileCard = document.querySelector('.profile-card');
    if (profileCard) {
        profileCard.addEventListener('click', () => {
            profileCard.classList.toggle('flipped');
        });
    }
});

// Function to show different sections
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.add('hidden');
    });

    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.classList.remove('hidden');
    }
}



