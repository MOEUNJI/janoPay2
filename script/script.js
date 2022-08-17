window.addEventListener("scroll", scroll);

const scrollHeader = document.querySelector(".web-header");
const headerMenu = document.getElementsByClassName("header-main-menu");
const mClick = document.querySelector(".m-ham-click");
const hamBtn = document.querySelector(".ham-img");
const mHeader = document.querySelector(".all-header");
const close = document.querySelector(".close");
const allContainer = document.querySelector(".all-container");
const twoSubAccordionUl = document.getElementsByClassName("accordion-sub-menu");
// 쇼핑 및 구매방법 / 보내기 및 받기 등 ul
const arrBtn = document.getElementsByClassName("arr-content");

console.log(twoSubAccordionUl);
console.log(arrBtn);

for (let i = 0; i < arrBtn.length; i++){
  for (let j = 0; j < twoSubAccordionUl.length; j++){
      arrBtn[i].addEventListener("click", () => {
        if (twoSubAccordionUl[j].style.display == "none") {
          twoSubAccordionUl[j].style.display = "block"
        } else {
          twoSubAccordionUl[j].style.display = "none";
        }
      });
    }

}





hamBtn.addEventListener("click", () => {
  if (mClick.style.display == "none") {
    mClick.style.display = "block";
    mHeader.style.display = "none"
    allContainer.style.display = "none"
  } else {
    mClick.style.display = "none";
  }  
});

close.addEventListener("click", () => {
  if (mClick.style.display == "block") {
    mClick.style.display = "none";
    mHeader.style.display = "flex";
    allContainer.style.display = "block";
  } else {
    mClick.style.display = "none";
  }
});


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
