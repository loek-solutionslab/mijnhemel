import { BUSINESS, NAV, IMAGES } from "./constants";

export function announcementBar(): string {
  return `
    <a href="/pages/solutionslab.html" class="block bg-black text-white text-center text-[13px] sm:text-sm py-2.5 px-4 hover:bg-zinc-900 transition group" style="font-family: 'Bricolage Grotesque', system-ui, sans-serif; letter-spacing: -0.01em;">
      <span class="inline-flex items-center gap-2 flex-wrap justify-center">
        <span class="inline-flex items-center gap-1.5 font-semibold">
          <span class="inline-block" style="color:#FFD500;">●</span>
          <span class="text-white/85">this is a demo site built by</span>
        </span>
        <span class="inline-flex items-center gap-1.5 font-semibold lowercase">solutions lab</span>
        <span class="text-[#FFD500] group-hover:translate-x-1 transition inline-block">→ see the full analysis</span>
      </span>
    </a>
  `;
}

export function navHTML(): string {
  return `
    <nav class="sticky top-0 z-40 backdrop-blur" style="background: rgba(250, 244, 234, 0.92); border-bottom: 1px solid rgba(212, 162, 135, 0.25);">
      <div class="container-page flex items-center justify-between h-20">
        <a href="/" class="flex items-center gap-3 group" aria-label="${BUSINESS.name} home">
          <span class="inline-flex items-center justify-center w-11 h-11 rounded-full" style="background: var(--color-wine-700); color: var(--color-cream); font-family: var(--font-display); font-style: italic; font-size: 1.4rem; font-weight: 500; letter-spacing: 0.02em;">M</span>
          <div class="hidden sm:block leading-tight">
            <div style="font-family: var(--font-display); font-size: 1.35rem; font-weight: 500; color: var(--color-wine-800); letter-spacing: -0.005em;">Gastrovino <span class="italic-accent">Mijn Hemel</span></div>
            <div class="text-[10px] uppercase tracking-[0.22em] mt-0.5" style="color: var(--color-brass-600); font-weight: 500;">Wijnkoperij &middot; sinds Hilversum</div>
          </div>
        </a>

        <div class="hidden lg:flex items-center gap-8">
          ${NAV.map(n => `
            <a href="${n.href}" class="text-[14px] font-medium transition relative group" style="color: var(--color-wine-800); letter-spacing: 0.02em;">
              ${n.label}
              <span class="absolute -bottom-1 left-0 w-0 h-px transition-all" style="background: var(--color-wine-500);"></span>
            </a>
          `).join("")}
        </div>

        <div class="flex items-center gap-3">
          <a href="/pages/contact.html" class="hidden sm:inline-flex btn-primary text-sm py-2.5 px-5">
            Reserveren
          </a>
          <button id="mobile-menu-btn" class="lg:hidden p-2 transition" style="color: var(--color-wine-800);" aria-label="Open menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>
      </div>

      <div id="mobile-menu" class="hidden lg:hidden border-t bg-cream" style="border-color: rgba(212, 162, 135, 0.25); background: var(--color-cream);">
        <div class="container-page py-4 flex flex-col gap-1">
          ${NAV.map(n => `
            <a href="${n.href}" class="py-3 px-3 font-medium transition" style="color: var(--color-wine-800);">${n.label}</a>
          `).join("")}
          <a href="/pages/contact.html" class="mt-3 btn-primary justify-center">Reserveren</a>
        </div>
      </div>
    </nav>
  `;
}

export function footerHTML(): string {
  return `
    <footer style="background: var(--color-noir); color: var(--color-cream);">
      <div class="container-page py-20 relative">
        <div class="grid md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          <div class="lg:col-span-4">
            <div class="flex items-center gap-3 mb-5">
              <span class="inline-flex items-center justify-center w-12 h-12 rounded-full" style="background: var(--color-wine-700); color: var(--color-cream); font-family: var(--font-display); font-style: italic; font-size: 1.5rem; font-weight: 500;">M</span>
              <div class="leading-tight">
                <div style="font-family: var(--font-display); font-size: 1.45rem; font-weight: 500; color: var(--color-cream); letter-spacing: -0.005em;">Gastrovino <em style="color: var(--color-brass-300);">Mijn Hemel</em></div>
                <div class="text-[10px] uppercase tracking-[0.22em] mt-0.5" style="color: var(--color-brass-400);">Wijncafé &amp; Wijnwinkel</div>
              </div>
            </div>
            <p class="leading-relaxed text-[15px] mb-6" style="color: rgba(250, 244, 234, 0.7);">
              "Niet dat we bij Mijn Hemel met alle winden meewaaien — ons windvaantje staat ook geregeld tegen de wind in."
            </p>
            <p class="text-[13px]" style="color: var(--color-brass-300);">
              Een woonkamer voor iedereen. Hilversum.
            </p>
          </div>

          <div class="lg:col-span-3">
            <h4 class="text-[10px] uppercase tracking-[0.28em] mb-5" style="color: var(--color-brass-400);">Bezoek</h4>
            <address class="not-italic text-[15px] leading-relaxed" style="color: rgba(250, 244, 234, 0.85);">
              ${BUSINESS.address.street}<br>
              ${BUSINESS.address.postal} ${BUSINESS.address.city}
            </address>
            <div class="mt-5 space-y-2 text-[14px]">
              <a href="tel:${BUSINESS.phoneTel}" class="block transition hover:opacity-100" style="color: rgba(250, 244, 234, 0.7);">${BUSINESS.phone}</a>
              <a href="mailto:${BUSINESS.email}" class="block transition hover:opacity-100" style="color: rgba(250, 244, 234, 0.7);">${BUSINESS.email}</a>
            </div>
          </div>

          <div class="lg:col-span-3">
            <h4 class="text-[10px] uppercase tracking-[0.28em] mb-5" style="color: var(--color-brass-400);">Wijncafé</h4>
            <ul class="space-y-1.5 text-[14px]" style="color: rgba(250, 244, 234, 0.75);">
              ${BUSINESS.hoursCafe.map(h => `
                <li class="flex justify-between gap-4">
                  <span style="color: rgba(250, 244, 234, 0.55);">${h.day}</span>
                  <span>${h.time}</span>
                </li>
              `).join("")}
            </ul>
          </div>

          <div class="lg:col-span-2">
            <h4 class="text-[10px] uppercase tracking-[0.28em] mb-5" style="color: var(--color-brass-400);">Volg ons</h4>
            <a href="${BUSINESS.social.instagram}" target="_blank" rel="noopener" class="inline-flex items-center gap-2 transition" style="color: var(--color-cream);">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.5 1 .5.5.7.9 1 1.5.2.4.4 1 .4 2.2.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.5-.5.5-.9.7-1.5 1-.4.2-1 .4-2.2.4-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.5-.9-.5-.5-.7-.9-1-1.5-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.5.5-.5.9-.7 1.5-1 .4-.2 1-.4 2.2-.4 1.2-.1 1.6-.1 4.8-.1Zm0 2c-3.2 0-3.5 0-4.7.1-1.1 0-1.7.2-2.1.4-.5.2-.9.4-1.3.8-.4.4-.6.8-.8 1.3-.2.4-.3 1-.4 2.1-.1 1.2-.1 1.5-.1 4.7s0 3.5.1 4.7c0 1.1.2 1.7.4 2.1.2.5.4.9.8 1.3.4.4.8.6 1.3.8.4.2 1 .3 2.1.4 1.2.1 1.5.1 4.7.1s3.5 0 4.7-.1c1.1 0 1.7-.2 2.1-.4.5-.2.9-.4 1.3-.8.4-.4.6-.8.8-1.3.2-.4.3-1 .4-2.1.1-1.2.1-1.5.1-4.7s0-3.5-.1-4.7c0-1.1-.2-1.7-.4-2.1-.2-.5-.4-.9-.8-1.3-.4-.4-.8-.6-1.3-.8-.4-.2-1-.3-2.1-.4-1.2-.1-1.5-.1-4.7-.1Zm0 3.4a4.4 4.4 0 1 1 0 8.8 4.4 4.4 0 0 1 0-8.8Zm0 2a2.4 2.4 0 1 0 0 4.8 2.4 2.4 0 0 0 0-4.8Zm5.6-2.2a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"/></svg>
              <span class="text-[13px]">@gastrovinomijnhemel</span>
            </a>
            <p class="mt-6 text-[12px]" style="color: rgba(250, 244, 234, 0.45);">Wij verkopen geen alcohol aan personen onder de 18 jaar.</p>
          </div>
        </div>

        <div class="pt-8 border-t flex flex-col sm:flex-row justify-between gap-4 items-start sm:items-center text-[12px]" style="border-color: rgba(212, 162, 135, 0.18); color: rgba(250, 244, 234, 0.45);">
          <div>© 2026 M.M.G.M.K.J. — Gastrovino Mijn Hemel Hilversum</div>
          <div class="flex gap-5 items-center">
            <span>Wijncafé &amp; Wijnwinkel</span>
            <span class="hidden sm:inline">·</span>
            <a href="/pages/solutionslab.html" class="transition hover:opacity-100" style="color: rgba(229, 201, 154, 0.7);">Site analyse door Solutions Lab</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}

export function mountLayout(): void {
  const top = document.querySelector("[data-layout-top]");
  const footer = document.querySelector("[data-layout-footer]");
  const path = window.location.pathname;
  const isSL = path.endsWith("solutionslab.html");

  if (top && !isSL) {
    top.innerHTML = announcementBar() + navHTML();
  } else if (top && isSL) {
    top.innerHTML = `
      <header style="background:#0a0a0a;border-bottom:1px solid #1f1f1f;">
        <div class="sl-container" style="display:flex;align-items:center;justify-content:space-between;padding-top:20px;padding-bottom:20px;">
          <a href="/pages/solutionslab.html" style="display:inline-flex;align-items:center;gap:10px;text-decoration:none;font-family:'Bricolage Grotesque',system-ui,sans-serif;font-weight:700;font-size:1.25rem;letter-spacing:-0.02em;color:#fafafa;text-transform:lowercase;">
            <span style="width:14px;height:14px;border-radius:50%;background:#FFD500;display:inline-block;flex-shrink:0;"></span>
            solutions lab
          </a>
          <a href="/" style="font-family:'DM Sans',system-ui,sans-serif;font-size:0.85rem;color:#a3a3a3;text-decoration:none;letter-spacing:0.02em;transition:color 200ms;" onmouseover="this.style.color='#FFD500'" onmouseout="this.style.color='#a3a3a3'">
            ← back to mijnhemel.nl
          </a>
        </div>
      </header>
    `;
  }

  if (footer && !isSL) {
    footer.innerHTML = footerHTML();
  } else if (footer && isSL) {
    footer.innerHTML = `
      <footer style="background:#0a0a0a;border-top:1px solid #1f1f1f;padding:40px 0;">
        <div class="sl-container" style="display:flex;flex-direction:column;gap:16px;justify-content:space-between;align-items:center;font-family:'DM Sans',system-ui,sans-serif;font-size:0.8rem;color:#a3a3a3;">
          <div style="display:inline-flex;align-items:center;gap:8px;">
            <span style="width:8px;height:8px;border-radius:50%;background:#FFD500;display:inline-block;"></span>
            solutions lab — solutionslab.nl
          </div>
          <a href="mailto:loek@solutionslab.nl" style="color:#a3a3a3;text-decoration:none;letter-spacing:0.02em;" onmouseover="this.style.color='#FFD500'" onmouseout="this.style.color='#a3a3a3'">
            loek@solutionslab.nl
          </a>
        </div>
      </footer>
    `;
  }

  const btn = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");
  if (btn && menu) {
    btn.addEventListener("click", () => menu.classList.toggle("hidden"));
  }
}
