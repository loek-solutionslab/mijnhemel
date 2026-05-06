import { BUSINESS, NAV } from "./constants";

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
    <nav class="sticky top-0 z-40 backdrop-blur" style="background: rgba(254, 243, 225, 0.94); border-bottom: 1px solid rgba(133, 92, 84, 0.35);">
      <div class="container-page">
        <div class="flex items-center justify-between h-24">
          <a href="/" class="flex flex-col leading-none group" aria-label="${BUSINESS.name} home">
            <span style="font-family: 'Baskervville', serif; font-style: italic; font-weight: 400; font-size: 2rem; color: #800000; letter-spacing: 0.005em; line-height: 1;">Mijn Hemel</span>
            <span class="smallcaps mt-2" style="color: #855C54; font-size: 9px; letter-spacing: 0.32em;">de apotheek voor levensgenieters</span>
          </a>

          <div class="hidden lg:flex items-center gap-9">
            ${NAV.map(n => `
              <a href="${n.href}" style="font-family: 'Century Gothic', 'URW Gothic', sans-serif; font-size: 11px; font-weight: 700; letter-spacing: 0.28em; text-transform: uppercase; color: #800000; transition: color 200ms;" onmouseover="this.style.color='#5e0000'" onmouseout="this.style.color='#800000'">
                ${n.label}
              </a>
            `).join("")}
          </div>

          <div class="flex items-center gap-3">
            <a href="/pages/contact.html" class="hidden sm:inline-flex btn-primary">
              Reserveren
            </a>
            <button id="mobile-menu-btn" class="lg:hidden p-2 transition" style="color: #800000;" aria-label="Open menu">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
            </button>
          </div>
        </div>
      </div>

      <div id="mobile-menu" class="hidden lg:hidden border-t" style="border-color: rgba(133, 92, 84, 0.35); background: #FEF3E1;">
        <div class="container-page py-5 flex flex-col gap-1">
          ${NAV.map(n => `
            <a href="${n.href}" class="py-3 px-2" style="font-family: 'Century Gothic', sans-serif; font-size: 12px; font-weight: 700; letter-spacing: 0.28em; text-transform: uppercase; color: #800000;">${n.label}</a>
          `).join("")}
          <a href="/pages/contact.html" class="mt-3 btn-primary justify-center">Reserveren</a>
        </div>
      </div>
    </nav>
  `;
}

export function footerHTML(): string {
  return `
    <footer class="cream-deep-bg" style="background: #F4E4C7; border-top: 1px solid #855C54;">
      <div class="container-page py-20">
        <div class="grid md:grid-cols-2 lg:grid-cols-12 gap-12 mb-14">
          <div class="lg:col-span-5">
            <div class="leading-none mb-6">
              <div style="font-family: 'Baskervville', serif; font-style: italic; font-size: 2.25rem; color: #800000; line-height: 1;">Mijn Hemel</div>
              <div class="smallcaps mt-3" style="color: #855C54; font-size: 10px;">de apotheek voor levensgenieters</div>
            </div>
            <p style="font-family: 'Baskervville', serif; font-style: italic; font-size: 17px; line-height: 1.6; color: #5e0000; max-width: 28rem;">
              "Niet dat we bij Mijn Hemel met alle winden meewaaien — ons windvaantje staat ook geregeld tegen de wind in."
            </p>
            <div class="mt-8 smallcaps" style="color: #855C54; font-size: 10px;">— Het huis · Hilversum</div>
          </div>

          <div class="lg:col-span-3">
            <h4 class="smallcaps mb-5" style="font-style: italic; font-family: 'Baskervville', serif; font-size: 18px; font-weight: 400; letter-spacing: 0.02em; text-transform: none; color: #800000;">Bezoek</h4>
            <div class="rule-cocoa mb-5"></div>
            <address class="not-italic" style="font-family: 'Century Gothic', sans-serif; font-size: 13px; line-height: 1.85; color: #4d4d4d;">
              ${BUSINESS.address.street}<br>
              ${BUSINESS.address.postal} ${BUSINESS.address.city}
            </address>
            <div class="mt-5 space-y-1.5" style="font-family: 'Century Gothic', sans-serif; font-size: 13px;">
              <a href="tel:${BUSINESS.phoneTel}" class="block" style="color: #800000;">${BUSINESS.phone}</a>
              <a href="mailto:${BUSINESS.email}" class="block" style="color: #800000;">${BUSINESS.email}</a>
            </div>
          </div>

          <div class="lg:col-span-2">
            <h4 class="smallcaps mb-5" style="font-style: italic; font-family: 'Baskervville', serif; font-size: 18px; font-weight: 400; letter-spacing: 0.02em; text-transform: none; color: #800000;">Wijncafé</h4>
            <div class="rule-cocoa mb-5"></div>
            <ul class="space-y-1.5" style="font-family: 'Century Gothic', sans-serif; font-size: 12px; color: #4d4d4d;">
              ${BUSINESS.hoursCafe.map(h => `
                <li class="flex justify-between gap-3">
                  <span style="color: #855C54;">${h.day}</span>
                  <span>${h.time}</span>
                </li>
              `).join("")}
            </ul>
          </div>

          <div class="lg:col-span-2">
            <h4 class="smallcaps mb-5" style="font-style: italic; font-family: 'Baskervville', serif; font-size: 18px; font-weight: 400; letter-spacing: 0.02em; text-transform: none; color: #800000;">Volg ons</h4>
            <div class="rule-cocoa mb-5"></div>
            <a href="${BUSINESS.social.instagram}" target="_blank" rel="noopener" class="inline-flex items-center gap-2" style="color: #800000;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.5 1 .5.5.7.9 1 1.5.2.4.4 1 .4 2.2.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.5-.5.5-.9.7-1.5 1-.4.2-1 .4-2.2.4-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.5-.9-.5-.5-.7-.9-1-1.5-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.5.5-.5.9-.7 1.5-1 .4-.2 1-.4 2.2-.4 1.2-.1 1.6-.1 4.8-.1Zm0 2c-3.2 0-3.5 0-4.7.1-1.1 0-1.7.2-2.1.4-.5.2-.9.4-1.3.8-.4.4-.6.8-.8 1.3-.2.4-.3 1-.4 2.1-.1 1.2-.1 1.5-.1 4.7s0 3.5.1 4.7c0 1.1.2 1.7.4 2.1.2.5.4.9.8 1.3.4.4.8.6 1.3.8.4.2 1 .3 2.1.4 1.2.1 1.5.1 4.7.1s3.5 0 4.7-.1c1.1 0 1.7-.2 2.1-.4.5-.2.9-.4 1.3-.8.4-.4.6-.8.8-1.3.2-.4.3-1 .4-2.1.1-1.2.1-1.5.1-4.7s0-3.5-.1-4.7c0-1.1-.2-1.7-.4-2.1-.2-.5-.4-.9-.8-1.3-.4-.4-.8-.6-1.3-.8-.4-.2-1-.3-2.1-.4-1.2-.1-1.5-.1-4.7-.1Zm0 3.4a4.4 4.4 0 1 1 0 8.8 4.4 4.4 0 0 1 0-8.8Zm0 2a2.4 2.4 0 1 0 0 4.8 2.4 2.4 0 0 0 0-4.8Zm5.6-2.2a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"/></svg>
              <span style="font-family: 'Century Gothic', sans-serif; font-size: 12px;">@gastrovinomijnhemel</span>
            </a>
            <p class="mt-6" style="font-family: 'Century Gothic', sans-serif; font-size: 11px; color: #855C54; line-height: 1.6;">Wij verkopen geen alcohol aan personen onder de 18 jaar.</p>
          </div>
        </div>

        <div class="rule-cocoa mb-6"></div>
        <div class="flex flex-col sm:flex-row justify-between gap-3 items-start sm:items-center" style="font-family: 'Century Gothic', sans-serif; font-size: 11px; color: #855C54;">
          <div>© 2026 M.M.G.M.K.J. — Gastrovino Mijn Hemel · Hilversum</div>
          <div class="flex gap-4 items-center">
            <span>Wijncafé &amp; Wijnkoperij</span>
            <span class="hidden sm:inline">·</span>
            <a href="/pages/solutionslab.html" style="color: #800000;">Site analyse · Solutions Lab</a>
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
