import "../styles/main.css";
import { mountLayout } from "./components";

mountLayout();

// Cookie consent (skip on /solutionslab — English-only audit)
(() => {
  if (typeof window === "undefined") return;
  if (window.location.pathname.endsWith("solutionslab.html")) return;
  const KEY = "mh-cookie-ok";
  if (localStorage.getItem(KEY)) return;
  const el = document.createElement("div");
  el.innerHTML = `
    <div class="fixed bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-md z-50 fade-up" style="background: #FEF3E1; border: 1px solid #855C54; padding: 1.5rem; box-shadow: 0 10px 40px -12px rgba(33, 31, 64, 0.18);">
      <div style="font-family: 'Century Gothic', sans-serif; font-size: 13px; line-height: 1.65; margin-bottom: 0.85rem; color: #4d4d4d;">Wij gebruiken alleen functionele en analytische cookies om de site te verbeteren. Geen tracking voor derden.</div>
      <div class="flex gap-2 items-center">
        <button data-cookie-ok class="btn-primary" style="padding: 0.55rem 1.1rem; font-size: 10px;">Akkoord</button>
        <a href="/pages/contact.html" style="font-family: 'Century Gothic', sans-serif; font-size: 11px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: #800000;">Meer info</a>
      </div>
    </div>
  `;
  document.body.appendChild(el);
  el.querySelector("[data-cookie-ok]")?.addEventListener("click", () => {
    localStorage.setItem(KEY, "1");
    el.remove();
  });
})();

// Fade in on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add("fade-up");
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1, rootMargin: "0px 0px -60px 0px" });

document.querySelectorAll("[data-animate]").forEach((el) => observer.observe(el));

// Contact form (mailto fallback)
const form = document.querySelector("[data-contact-form]") as HTMLFormElement | null;
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const subject = encodeURIComponent(`Bericht via website — ${data.get("naam")}`);
    const body = encodeURIComponent(
      `Naam: ${data.get("naam")}\n` +
      `Email: ${data.get("email")}\n` +
      `Telefoon: ${data.get("telefoon") ?? "—"}\n` +
      `Onderwerp: ${data.get("onderwerp") ?? "—"}\n\n` +
      `Bericht:\n${data.get("bericht")}`
    );
    window.location.href = `mailto:info@mijnhemel.nl?subject=${subject}&body=${body}`;
  });
}

// Reservation form
const resForm = document.querySelector("[data-reserve-form]") as HTMLFormElement | null;
if (resForm) {
  resForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(resForm);
    const subject = encodeURIComponent(`Reservering wijncafé — ${data.get("naam")}`);
    const body = encodeURIComponent(
      `Naam: ${data.get("naam")}\n` +
      `Aantal personen: ${data.get("personen")}\n` +
      `Datum: ${data.get("datum")}\n` +
      `Tijd: ${data.get("tijd")}\n` +
      `Telefoon: ${data.get("telefoon") ?? "—"}\n\n` +
      `Opmerking:\n${data.get("opmerking") ?? "—"}`
    );
    window.location.href = `mailto:info@mijnhemel.nl?subject=${subject}&body=${body}`;
  });
}
