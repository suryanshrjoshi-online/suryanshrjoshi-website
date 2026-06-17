/* ============================================================
   Suryansh R Joshi — Business Growth Specialist
   Site interactions + contact configuration
   ------------------------------------------------------------
   EDIT THESE PLACEHOLDERS WITH REAL DETAILS:
   ============================================================ */
const CONTACT = {
  // WhatsApp number in international format, digits only (no + or spaces).
  // Example for India: "919876543210"
  whatsappNumber: "919277029521",
  // Pre-filled WhatsApp message
  whatsappMessage: "Hello Suryansh, I'd like to discuss growing my business.",
  // Email address
  email: "hello@suryanshrjoshi.online",
  // Pre-filled email subject
  emailSubject: "Business Growth Enquiry",
  // LinkedIn profile URL
  linkedin: "https://www.linkedin.com/in/suryanshrjoshi-online",
};

(function () {
  "use strict";

  /* ---- Build contact links ---- */
  const waHref =
    "https://wa.me/" +
    CONTACT.whatsappNumber +
    "?text=" +
    encodeURIComponent(CONTACT.whatsappMessage);
  const mailHref =
    "mailto:" + CONTACT.email + "?subject=" + encodeURIComponent(CONTACT.emailSubject);

  document.querySelectorAll("[data-whatsapp]").forEach(function (el) {
    el.setAttribute("href", waHref);
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
  });
  document.querySelectorAll("[data-email]").forEach(function (el) {
    el.setAttribute("href", mailHref);
  });
  document.querySelectorAll("[data-linkedin]").forEach(function (el) {
    el.setAttribute("href", CONTACT.linkedin);
  });

  /* ---- Sticky header state ---- */
  const header = document.getElementById("siteHeader");
  const onScroll = function () {
    if (window.scrollY > 24) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---- Mobile menu ---- */
  const toggle = document.getElementById("navToggle");
  const menu = document.getElementById("mobileMenu");
  const closeMenu = function () {
    toggle.classList.remove("open");
    menu.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
  };
  toggle.addEventListener("click", function () {
    const isOpen = menu.classList.toggle("open");
    toggle.classList.toggle("open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  });
  menu.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", closeMenu);
  });

  /* ---- Scroll reveal ---- */
  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach(function (el, i) {
      el.style.transitionDelay = Math.min(i % 4, 3) * 0.08 + "s";
      io.observe(el);
    });
  } else {
    reveals.forEach(function (el) {
      el.classList.add("in");
    });
  }

  /* ---- Current year ---- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
