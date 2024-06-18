// Selecting necessary elements from the DOM
const menuBtn = document.getElementById("menu-btn"); // Menu button
const navLinks = document.getElementById("nav-links"); // Navigation links container
const menuBtnIcon = menuBtn.querySelector("i"); // Icon inside the menu button

// Event listener for the menu button click
menuBtn.addEventListener("click", (e) => {
  // Toggle the 'open' class on the navigation links container
  navLinks.classList.toggle("open");

  // Check if the navigation links container is open
  const isOpen = navLinks.classList.contains("open");

  // Change the menu button icon based on whether the navigation links are open or not
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

// Event listener for clicks on navigation links
navLinks.addEventListener("click", (e) => {
  // Close the navigation links container when a link is clicked
  navLinks.classList.remove("open");

  // Reset the menu button icon to the default 'menu' icon
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

// ScrollReveal configuration options
const scrollRevealOption = {
  distance: "50px", // Distance from which the element is revealed
  origin: "bottom", // Origin of the animation
  duration: 1000, // Duration of the animation
};

// Applying ScrollReveal animation to specific elements
ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right", // Override origin for the header image
});

ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 500, // Delay before animating the heading
});

ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1000, // Delay before animating the paragraph
});

ScrollReveal().reveal(".header__content form", {
  ...scrollRevealOption,
  delay: 1500, // Delay before animating the form
});

ScrollReveal().reveal(".header__content .bar", {
  ...scrollRevealOption,
  delay: 2000, // Delay before animating the bar (copyright notice)
});

ScrollReveal().reveal(".header__image__card", {
  duration: 1000, // Duration of each card animation
  interval: 500, // Interval between each card animation
  delay: 2500, // Delay before starting card animations
});
