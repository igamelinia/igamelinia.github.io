// Navbar Fixed
window.onscroll = function() {
    const header= document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
       header.classList.add('navbar-fixed'); 
    } else {
        header.classList.remove('navbar-fixed');
    }
};

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// Dropdown
function toggleDropdown(id) {
  const dropdown = document.getElementById(id);
  const isHidden = dropdown.classList.contains("hidden");

  document.querySelectorAll("[id^='dropdown']").forEach(el => {
    el.classList.add("hidden");
  });

  if (isHidden) {
    dropdown.classList.remove("hidden");
  } else {
    dropdown.classList.add("hidden");
  }
}

document.addEventListener("click", function (event) {
  const dropdowns = document.querySelectorAll("[id^='dropdown']");
  dropdowns.forEach(dropdown => {
    if (!dropdown.parentElement.contains(event.target)) {
      dropdown.classList.add("hidden");
    }
  });
});


//// Preview Sertifikat
// Ambil elemen
const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImage");
const overlay = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".modal-close");

// Event buka modal
document.querySelectorAll(".preview-img").forEach(img => {
  img.addEventListener("click", () => {
    modal.classList.remove("hidden");
    modalImg.src = img.src;
  });
});

// Event tutup modal
overlay.addEventListener("click", () => {
  modal.classList.add("hidden");
});

closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

