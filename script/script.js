window.addEventListener("scroll", scroll);

const scrollHeader = document.querySelector(".web-header");
const headerMenu = document.getElementsByClassName("header-main-menu");

function scroll() {
  let top = window.scrollY;

  console.log(top);
  if (top >= 68) {
    scrollHeader.classList.add("active");
    document.querySelector(".white-logo").src = "./images/header-logo.png";
  } else {
    scrollHeader.classList.remove("active");
    document.querySelector(".white-logo").src = "./images/white-logo.png";
  }

  for (let i = 0; i < headerMenu.length; i++) {
    if (top >= 68) {
      headerMenu[i].classList.add("on");
    } else {
      headerMenu[i].classList.remove("on");
    }
  }
}

// let header = document.querySelector('.web-header');
//     nav = document.querySelector('')
