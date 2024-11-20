document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("dark-mode-toggle");
    const themeStylesheet = document.querySelector("#theme-stylesheet");

    // Get current theme from localStorage or default to "light"
    let currentTheme = localStorage.getItem("charystag-theme");
    console.log(currentTheme);
    if (currentTheme === null || currentTheme == undefined  || typeof currentTheme !== 'string')
    {
        currentTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    console.log(currentTheme);

    // Function to replace the basename of the current href
    function updateStylesheetFilename(newFilename) {
        const currentHref = themeStylesheet.href;
        const newHref = currentHref.substring(0, currentHref.lastIndexOf('/') + 1) + newFilename;
        return newHref;
    }

    // Function to switch themes
    function switchTheme(theme) {
        const newFilename = `${theme}-mode.css`;
        themeStylesheet.href = updateStylesheetFilename(newFilename);
        localStorage.setItem("charystag-theme", theme);
    }

    // Set initial theme
    switchTheme(currentTheme);

    function capitalizeFirst(str){
        const capitalized = str.substring(0, 1).toUpperCase() + str.substring(1,);
        return capitalized;
    }

    // Add event listener to the toggle button
    toggleButton.addEventListener("click", () => {
        currentTheme = currentTheme === "light" ? "dark" : "light";
        switchTheme(currentTheme);
    });
});
