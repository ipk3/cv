// Konsol mesajı
console.log("Kişisel sayfa yüklendi.");

// Scroll animasyonu (bölüm görünürlük)
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll(".section, .hero");
  const scrollPos = window.scrollY + window.innerHeight * 0.75;

  sections.forEach(section => {
    if (scrollPos > section.offsetTop) {
      section.classList.add("visible");
    }
  });
});
window.dispatchEvent(new Event("scroll"));

// Navbar scroll gizle/göster
let lastScrollTop = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop && currentScroll > 100) {
    // Aşağı scroll: navbar gizle
    navbar.style.transform = "translateY(-90%)";
  } else {
    // Yukarı scroll: navbar göster
    navbar.style.transform = "translateY(0)";
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // iOS bounce bug fix
});




// E-posta modal fonksiyonları (eğer kullanıyorsan)
function openEmailModal() {
  document.getElementById("emailModal").style.display = "block";
}

function closeEmailModal() {
  document.getElementById("emailModal").style.display = "none";
}

window.onclick = function(event) {
  const modal = document.getElementById("emailModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

// Karakter sayacı
document.addEventListener("DOMContentLoaded", () => {
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const emailCount = document.getElementById("emailCount");
  const messageCount = document.getElementById("messageCount");

  if (emailInput) {
    emailInput.addEventListener("input", () => {
      emailCount.textContent = `${emailInput.value.length}/50`;
    });
  }

  if (messageInput) {
    messageInput.addEventListener("input", () => {
      messageCount.textContent = `${messageInput.value.length}/200`;
    });
  }
});

function toggleMenu(){
  let ul = document.querySelector('.navbar ul');
 if(ul.style.display == "flex") ul.style.display = 'none';
 else ul.style.display = 'flex';
}