// Show/hide the About Me summary
function showSummary() {
    const summaryContent = document.querySelector('.summary-content');
    summaryContent.classList.toggle('hidden');
}
document.addEventListener("DOMContentLoaded", () => {
    const nameElement = document.getElementById("typing-name");
    const titleElement = document.getElementById("typing-title");

    // Add a delay to ensure animation plays only once, then make the text static
    setTimeout(() => {
        nameElement.style.borderRight = "none";
        titleElement.style.borderRight = "none";
    }, 3000); // 3 seconds duration for typing effect
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



