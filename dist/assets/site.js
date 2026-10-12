const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#main-nav");
const header = document.querySelector(".site-header");

function closeMenu({ restoreFocus = false } = {}) {
  menuButton.setAttribute("aria-expanded", "false");
  navigation.classList.remove("is-open");
  if (restoreFocus) menuButton.focus();
}

menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") !== "true";
  menuButton.setAttribute("aria-expanded", String(open));
  navigation.classList.toggle("is-open", open);
});

navigation.addEventListener("click", event => {
  if (event.target.closest("a")) closeMenu();
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
    closeMenu({ restoreFocus: true });
  }
});

document.addEventListener("click", event => {
  if (!header.contains(event.target)) closeMenu();
});

const mobileLayout = window.matchMedia("(max-width: 490px)");
mobileLayout.addEventListener("change", () => closeMenu());

const updateHeader = () => header.classList.toggle("scrolled", window.scrollY > 12);
window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

if ("IntersectionObserver" in window) {
  const sectionLinks = [...navigation.querySelectorAll('a[href^="#"]')];
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      for (const link of sectionLinks) {
        if (link.hash === "#" + entry.target.id) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      }
    }
  }, { rootMargin: "-10% 0px -55% 0px", threshold: 0 });
  for (const link of sectionLinks) {
    const section = document.querySelector(link.hash);
    if (section) observer.observe(section);
  }
  observer.observe(document.querySelector("#top"));
}
