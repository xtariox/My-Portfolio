// -------- scrollUp Button --------

// Get the button
let mybutton = document.getElementById("scrollupButton");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// -------- NavBar --------

// Get the header element
const header = document.querySelector('header');

// Listen for the scroll event
window.addEventListener('scroll', () => {
    // Check the scroll position
    if (window.scrollY > 0) {
        // Add a class to the header when scrolled
        header.classList.add('scrolled');
    } else {
        // Remove the class if at the top of the page
        header.classList.remove('scrolled');
    }
});

// -------- Social-media button --------

document.addEventListener("DOMContentLoaded", function () {
  const findMeButton = document.querySelector(".find-me-button");
  const socialMedia = document.querySelector(".social-media");

  let socialMediaVisible = false;

  findMeButton.addEventListener("click", function () {
    if (!socialMediaVisible) {
      socialMedia.style.display = "flex";
    } else {
      socialMedia.style.display = "none";
    }
    socialMediaVisible = !socialMediaVisible;
  });
});
