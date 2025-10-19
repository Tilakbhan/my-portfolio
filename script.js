// 🌟 ページ読み込み後のアニメーション
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.2 }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
});

// 🌟 スムーズスクロール
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// 🌟 トップに戻るボタン
const topBtn = document.createElement("button");
topBtn.textContent = "▲ トップへ";
topBtn.id = "topBtn";
document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "30px";
topBtn.style.right = "30px";
topBtn.style.padding = "10px 15px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50px";
topBtn.style.background = "#16a085";
topBtn.style.color = "white";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// 🌟 ナビゲーションの現在位置をハイライト
const navLinks = document.querySelectorAll("nav ul li a");
window.addEventListener("scroll", () => {
  let current = "";
  document.querySelectorAll("section").forEach((section) => {
    const sectionTop = section.offsetTop - 80;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });
  navLinks.forEach((a) => {
    a.classList.remove("active");
    if (a.getAttribute("href") === #${current}) {
      a.classList.add("active");
    }
  });
});
Sent
Write to Abishek Mandal



