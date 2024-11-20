document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.createElement("button");
    toggleButton.id = "dark-mode-toggle"; // Add an ID for styling
    toggleButton.textContent = "Toggle Dark Mode";

    document.body.appendChild(toggleButton);

    // Load the current mode from local storage (if available)
    if (localStorage.getItem("dark-mode") === "enabled") {
        document.body.classList.add("dark-mode");
    }

    toggleButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        // Save the user's preference in local storage
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("dark-mode", "enabled");
        } else {
            localStorage.setItem("dark-mode", "disabled");
        }
    });
});
