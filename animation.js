// -------- scrollUp Button --------

let mybutton = document.getElementById("scrollupButton");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// -------- NavBar --------

const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
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


//-------- Menu-icon --------

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navlist.classList.toggle('open');

};

window.onscroll = () => {
  menu.classList.remove('bx-x');
  navlist.classList.remove('open');
};

//-------- about --------
