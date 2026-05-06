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
    <div class="fixed bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-md z-50 card-paper fade-up">
      <div class="text-sm leading-relaxed mb-3" style="color: var(--color-ink-soft);">Wij gebruiken alleen functionele en analytische cookies om de site te verbeteren. Geen tracking voor derden.</div>
      <div class="flex gap-2">
        <button data-cookie-ok class="btn-primary text-xs py-2 px-4">Akkoord</button>
        <a href="/pages/contact.html" class="btn-ghost text-xs">Meer info</a>
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
