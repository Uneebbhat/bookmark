function toggleHide() {
  const mobileNav = document.querySelector(".mob__nav");

  if (mobileNav.style.display != "none") {
    mobileNav.style.display = "none";
  } else {
    mobileNav.style.display = "block";
  }
}

toggleHide();
