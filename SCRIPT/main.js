function toggleDropdown() {
    var dropdown = document.getElementById("myDropdown");
    var dropdownBtn = document.getElementById("dropdownBtn");
    var dropdownIcon = document.getElementById("dropdownIcon");
    var closeButton = document.getElementById("closeButton");

    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
        dropdownIcon.style.display = "inline"; // Show the dropdown icon
        closeButton.style.display = "none"; // Hide the close button
    } else {
        dropdown.style.display = "block";
        dropdownIcon.style.display = "none"; // Hide the dropdown icon
        closeButton.style.display = "inline"; // Show the close button
    }
}

function closeDropdown() {
    var dropdown = document.getElementById("myDropdown");
    var dropdownIcon = document.getElementById("dropdownIcon");
    var closeButton = document.getElementById("closeButton");

    dropdown.style.display = "none";
    dropdownIcon.style.display = "inline"; // Show the dropdown icon
    closeButton.style.display = "none"; // Hide the close button
}
