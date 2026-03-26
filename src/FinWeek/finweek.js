import { useEffect } from "react";
import "./finweek.css";
import bannerImg from "./banner.png";

import pitchdeskImg from "./plan.png";
import moneymasterclassImg from "./moneymasterclass.jpg";
import speakersessionImg from "./speakersession.png";


export default function FinWeek() {
  useEffect(() => {
    const GAP      = 14;
    const CARD_H   = 72;
    const DETAIL_H = 220;

    const EVENTS = [
      {
        number:  "01",
        title:   "Pitch Desk 2.0",
        // sub:     "2 Rounds · ",
        desc:    "With 500+ submissions last year on Unstop, Pitch Desk 2.0 is back to scale innovation to the next level! COMPETE. INNOVATE. PITCH. WIN",
        date:    "25 March 2026",
        venue:   "Seminar Hall",
        team:    " 1-4 members",
        link:    null,
        preview: pitchdeskImg,
        previewAlt: "pitch desk 2.0 poster",
      },
      {
        number:  "02",
        title:   "Money MasterClass",
        // sub:     "2 Rounds · ",
        desc:    "Ever wondered what to do with your first paycheck? 💭Should you save, invest, or spend? This session will guide you through smart financial decisions from Day 1!",
        date:    "26 March 2026",
        venue:   "Online",
        // team:    " 1-4 members",
        link:    null,
        preview: moneymasterclassImg,
        previewAlt: "money masterclass poster",
      },
      {
        number:  "03",
        title:   "Speaker Session: From Engineering to Finance",
        // sub:     "2 Rounds · ",
        desc:    "Join us for an insightful speaker session on “From Engineering to Finance: Cracking the Transition” featuring Nikita Garg, Credit Trading Desk Analyst at Barclays. Discover how to pivot your career into finance, build the right skill set, and gain practical insights from real industry experience.",
        date:    "27 March 2026",
        venue:   "Online",
        // team:    " 1-4 members",
        link:    "https://chat.whatsapp.com/Gfxg2YGlXd9AX7wBc0XQQD?mode=gi_t",
        preview: speakersessionImg,
        previewAlt: "speaker session poster",
      },
    ];

    const stage    = document.getElementById("fw-stage");
    const deckWrap = document.getElementById("fw-deck-wrap");
    const hintEl   = document.getElementById("fw-hint");
    const closeBtn = document.getElementById("fw-close-btn");
    const banner   = document.getElementById("fw-banner");

    if (!stage || !deckWrap) return;

    // ─────────────────────────────────────────────────────
    // HOVER PREVIEW BUBBLE  (mobile only — hidden via CSS on desktop)
    // ─────────────────────────────────────────────────────
    const preview = document.createElement("div");
    preview.id = "fw-preview";
    preview.innerHTML = `
      <div id="fw-preview-inner">
        <img id="fw-preview-img" src="" alt="" />
        <div id="fw-preview-placeholder">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#333" stroke-width="1.5">
            <rect x="3" y="3" width="18" height="18" rx="2"/>
            <circle cx="8.5" cy="8.5" r="1.5"/>
            <polyline points="21 15 16 10 5 21"/>
          </svg>
          <span>No preview</span>
        </div>
      </div>
      <div id="fw-preview-tail"></div>
    `;
    document.body.appendChild(preview);

    const previewImg         = document.getElementById("fw-preview-img");
    const previewPlaceholder = document.getElementById("fw-preview-placeholder");
    let hideTimer = null;

    // FIX: showPreview positions bubble ABOVE card on mobile to prevent clipping
    function showPreview(card, ev) {
      clearTimeout(hideTimer);
      if (ev.preview) {
        previewImg.src = ev.preview;
        previewImg.alt = ev.previewAlt || "";
        previewImg.style.display = "block";
        previewPlaceholder.style.display = "none";
      } else {
        previewImg.style.display = "none";
        previewPlaceholder.style.display = "flex";
      }

      const cardRect   = card.getBoundingClientRect();
      const previewW   = 200;
      const previewH   = 240;
      const gap        = 12;
      const mobile     = window.innerWidth < 768;

      if (mobile) {
        // Place bubble ABOVE the card, horizontally centered and clamped to viewport
        const centerX    = cardRect.left + cardRect.width / 2;
        const bubbleLeft = Math.max(8, Math.min(
          centerX - previewW / 2,
          window.innerWidth - previewW - 8
        ));
        const bubbleTop  = cardRect.top - previewH - gap - 12;

        preview.style.flexDirection = "column";
        preview.style.alignItems    = "center";
        preview.style.top           = Math.max(8, bubbleTop) + "px";
        preview.style.left          = bubbleLeft + "px";
        preview.style.right         = "auto";
        preview.style.transform     = "scale(1)";
      } else {
        // Desktop: to the left of the card
        preview.style.flexDirection = "row";
        preview.style.alignItems    = "center";
        preview.style.top           = (cardRect.top + cardRect.height / 2) + "px";
        preview.style.left          = (cardRect.left - previewW - gap - 12) + "px";
        preview.style.right         = "auto";
        preview.style.transform     = "translateY(-50%) scale(1)";
      }

      preview.style.opacity    = "1";
      preview.style.visibility = "visible";
    }

    function hidePreview() {
      hideTimer = setTimeout(() => {
        preview.style.opacity    = "0";
        preview.style.transform  = "scale(0.92)";
        preview.style.visibility = "hidden";
      }, 80);
    }

    // ─────────────────────────────────────────────────────
    // DESKTOP MODAL
    // ─────────────────────────────────────────────────────
    const modalOverlay = document.createElement("div");
    modalOverlay.id = "fw-modal-overlay";
    modalOverlay.innerHTML = `
      <div id="fw-modal-box">
        <div id="fw-modal-poster">
          <div id="fw-modal-poster-gradient"></div>
          <div id="fw-modal-close">✕</div>
        </div>
        <div id="fw-modal-body">
          <span id="fw-modal-number"></span>
          <div id="fw-modal-title"></div>
          <div id="fw-modal-sub"></div>
          <p id="fw-modal-desc"></p>
          <div id="fw-modal-meta"></div>
          <div id="fw-modal-divider"></div>
          <div id="fw-modal-register-wrap"></div>
        </div>
      </div>
    `;
    document.body.appendChild(modalOverlay);

    const modalClose        = document.getElementById("fw-modal-close");
    const modalPoster       = document.getElementById("fw-modal-poster");
    const modalNumber       = document.getElementById("fw-modal-number");
    const modalTitle        = document.getElementById("fw-modal-title");
    const modalSub          = document.getElementById("fw-modal-sub");
    const modalDesc         = document.getElementById("fw-modal-desc");
    const modalMeta         = document.getElementById("fw-modal-meta");
    const modalRegisterWrap = document.getElementById("fw-modal-register-wrap");

    function openModal(ev) {
      if (ev.preview) {
        modalPoster.style.backgroundImage = `url(${ev.preview})`;
      } else {
        modalPoster.style.backgroundImage = "none";
        modalPoster.style.background = "#111";
      }

      modalNumber.textContent = `— ${ev.number}`;
      modalTitle.textContent  = ev.title;
      modalSub.textContent    = ev.sub;
      modalDesc.textContent   = ev.desc;

      modalMeta.innerHTML = `
        <div class="fw-modal-meta-item">
          <span class="fw-modal-meta-label">DATE</span>
          <span class="fw-modal-meta-value">${ev.date}</span>
        </div>
        <div class="fw-modal-meta-item">
          <span class="fw-modal-meta-label">VENUE</span>
          <span class="fw-modal-meta-value">${ev.venue}</span>
        </div>
        ${ev.team ? `
  <div class="fw-modal-meta-item">
    <span class="fw-modal-meta-label">TEAM SIZE</span>
    <span class="fw-modal-meta-value">${ev.team}</span>
  </div>` : ''}
      `;

      modalRegisterWrap.innerHTML = ev.link
        ? `<a class="fw-register-btn" href="${ev.link}" target="_blank" rel="noopener noreferrer">
             REGISTER NOW
             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
               <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
             </svg>
           </a>`
        : `<span class="fw-coming-soon">EVENT OVER</span>`;

      modalOverlay.classList.add("open");
    }

    function closeModal() {
      modalOverlay.classList.remove("open");
    }

    modalClose.addEventListener("click", closeModal);
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) closeModal();
    });

    // ─────────────────────────────────────────────────────
    // TIMELINE LINE
    // ─────────────────────────────────────────────────────
    const timelineLine = document.createElement("div");
    timelineLine.id = "fw-timeline-line";
    deckWrap.appendChild(timelineLine);

    // ─────────────────────────────────────────────────────
    // BUILD CARDS
    // ─────────────────────────────────────────────────────
    EVENTS.forEach((ev, i) => {
      const card = document.createElement("div");
      card.className = "fw-card";

      if (ev.preview) {
        card.style.setProperty("--fw-poster", `url(${ev.preview})`);
      }

      const registerHTML = ev.link
        ? `<a class="fw-register-btn" href="${ev.link}" target="_blank" rel="noopener noreferrer">
             REGISTER NOW
             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
               <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
             </svg>
           </a>`
        : `<span class="fw-coming-soon">REGISTRATION OPENING SOON</span>`;

      card.innerHTML = `
        <div class="fw-card-inner">
          <div class="fw-card-back">FINWEEK 2.0</div>
          <div class="fw-card-front">
            <div class="fw-poster-bg"></div>
            <div class="fw-poster-gradient"></div>
            <div class="fw-card-dot"></div>
            <span class="fw-card-number">— ${ev.number}</span>
            <span class="fw-card-title">${ev.title}</span>
            ${ev.sub ? `<span class="fw-card-sub">${ev.sub}</span>` : ''}
          </div>
        </div>
        <div class="fw-card-detail">
          <p class="fw-detail-desc">${ev.desc}</p>
          <div class="fw-detail-meta">
            <div class="fw-detail-meta-item">
              <span class="fw-detail-meta-label">DATE</span>
              <span class="fw-detail-meta-value">${ev.date}</span>
            </div>
            <div class="fw-detail-meta-item">
              <span class="fw-detail-meta-label">VENUE</span>
              <span class="fw-detail-meta-value">${ev.venue}</span>
            </div>
            ${ev.team ? `
              <div class="fw-detail-meta-item">
              <span class="fw-detail-meta-label">TEAM SIZE</span>
              <span class="fw-detail-meta-value">${ev.team}</span>
              </div>` : ''}
          </div>
          <div class="fw-detail-divider"></div>
          ${registerHTML}
        </div>
      `;

      if (ev.preview) {
        const posterBg = card.querySelector(".fw-poster-bg");
        if (posterBg) posterBg.style.backgroundImage = `url(${ev.preview})`;
      }

      card.addEventListener("mouseenter", () => {
        if (isExpanded && isMobileView()) showPreview(card, ev);
      });
      card.addEventListener("mouseleave", hidePreview);

      deckWrap.appendChild(card);
    });

    const cards = deckWrap.querySelectorAll(".fw-card");
    let isExpanded = false;
    let openIndex  = -1;

    function isMobileView() {
      return window.innerWidth < 768;
    }

    // ─────────────────────────────────────────────────────
    // MOBILE HELPERS
    // ─────────────────────────────────────────────────────
    function getCardTop(i, openIdx) {
      let top = 0;
      for (let j = 0; j < i; j++) {
        top += CARD_H + GAP;
        if (j === openIdx) top += DETAIL_H;
      }
      return top;
    }

    function getTotalHeight(openIdx) {
      let h = EVENTS.length * CARD_H + (EVENTS.length - 1) * GAP;
      if (openIdx >= 0) h += DETAIL_H;
      return h;
    }

    function repositionCards(openIdx) {
      const totalH = getTotalHeight(openIdx);
      deckWrap.style.height     = totalH + "px";
      timelineLine.style.height = totalH + "px";
      cards.forEach((card, i) => {
        card.style.top = getCardTop(i, openIdx) + "px";
        card.classList.toggle("open", i === openIdx);
      });
    }

    // ─────────────────────────────────────────────────────
    // OPEN STACKED
    // ─────────────────────────────────────────────────────
    function openDeck() {
      stage.classList.add("active");
      isExpanded = false;
      openIndex  = -1;

      deckWrap.style.width      = "340px";
      deckWrap.style.height     = CARD_H + "px";
      deckWrap.style.marginLeft = "0";
      deckWrap.classList.add("stacked");
      deckWrap.classList.remove("expanded");

      cards.forEach((c) => {
        c.style.top  = "0px";
        c.style.left = "0px";
        c.classList.remove("flipped", "open");
      });

      timelineLine.style.height = "0";
      hidePreview();

      if (hintEl) {
        hintEl.style.opacity = "1";
        hintEl.textContent   = "CLICK STACK TO EXPAND";
      }
    }

    // ─────────────────────────────────────────────────────
    // EXPAND
    // ─────────────────────────────────────────────────────
    function expandTimeline() {
      if (isExpanded) return;
      isExpanded = true;
      openIndex  = -1;

      if (hintEl) {
        hintEl.style.opacity = "1";
        hintEl.textContent   = isMobileView()
          ? "CLICK AN EVENT FOR DETAILS"
          : "HOVER TO PREVIEW · CLICK FOR DETAILS";
        setTimeout(() => { hintEl.style.opacity = "0"; }, 2200);
      }

      deckWrap.classList.remove("stacked");
      deckWrap.classList.add("expanded");

      if (isMobileView()) {
        // ── MOBILE: vertical timeline ──────────────────
        const totalH = getTotalHeight(-1);
        deckWrap.style.width      = "380px";
        deckWrap.style.height     = totalH + "px";
        deckWrap.style.marginLeft = "30px";

        cards.forEach((card, i) => {
          const targetTop = i * (CARD_H + GAP);
          setTimeout(() => {
            card.style.left = "30px";
            card.style.top  = targetTop + "px";
          }, i * 80);
          setTimeout(() => {
            card.classList.add("flipped");
          }, 200 + i * 120);
        });

        setTimeout(() => {
          timelineLine.style.left   = "14px";
          timelineLine.style.height = getTotalHeight(-1) + "px";
        }, 300);

      } else {
        // ── DESKTOP: horizontal poster cards ──────────
        deckWrap.style.width      = "auto";
        deckWrap.style.height     = "auto";
        deckWrap.style.marginLeft = "0";

        cards.forEach((card, i) => {
          card.style.top       = "";
          card.style.left      = "";
          card.style.opacity   = "0";
          card.style.transform = "translateY(18px)";
          card.style.transition = "opacity 0.4s ease, transform 0.4s cubic-bezier(0.34,1.2,0.64,1)";
          setTimeout(() => {
            card.style.opacity   = "1";
            card.style.transform = "translateY(0px)";
          }, 80 + i * 100);
        });
      }
    }

    // ─────────────────────────────────────────────────────
    // COLLAPSE (close the whole stage)
    // ─────────────────────────────────────────────────────
    function closeDeck() {
      stage.classList.remove("active");
      isExpanded = false;
      openIndex  = -1;
      deckWrap.style.marginLeft = "0";
      deckWrap.style.width      = "";
      deckWrap.style.height     = "";
      cards.forEach((c) => {
        c.style.top       = "";
        c.style.left      = "";
        c.style.opacity   = "";
        c.style.transform = "";
        c.style.transition = "";
        c.classList.remove("flipped", "open");
      });
      timelineLine.style.height = "0";
      closeModal();
      hidePreview();
    }

    // ─────────────────────────────────────────────────────
    // CLICK LISTENERS
    // ─────────────────────────────────────────────────────
    banner && banner.addEventListener("click", openDeck);
    expandTimeline();

    deckWrap.addEventListener("click", (e) => {
      if (!isExpanded) { expandTimeline(); return; }
      if (e.target.closest(".fw-register-btn")) return;

      const card = e.target.closest(".fw-card");
      if (!card) return;

      const idx = Array.from(cards).indexOf(card);
      if (idx === -1) return;

      if (isMobileView()) {
        openIndex = openIndex === idx ? -1 : idx;
        repositionCards(openIndex);
      } else {
        openModal(EVENTS[idx]);
      }
    });

    stage.addEventListener("click", (e) => {
      if (e.target === stage) closeDeck();
    });

    closeBtn && closeBtn.addEventListener("click", closeDeck);

    // ─────────────────────────────────────────────────────
    // CLEANUP
    // ─────────────────────────────────────────────────────
    return () => {
      clearTimeout(hideTimer);
      banner   && banner.removeEventListener("click", openDeck);
      closeBtn && closeBtn.removeEventListener("click", closeDeck);
      modalClose.removeEventListener("click", closeModal);
      deckWrap.innerHTML = "";
      if (document.body.contains(preview))       document.body.removeChild(preview);
      if (document.body.contains(modalOverlay))  document.body.removeChild(modalOverlay);
    };
  }, []);

  return (
    <div className="fw-body">
      {/* <div id="fw-banner">
        <img src={bannerImg} alt="FinWeek 2.0" />
      </div> */}
      
      <div id="fw-stage" className="active">
        <div id="fw-stage-header">
          <div id="fw-heading">FINWEEK <span>2.0</span></div>
          <p id="fw-subheading">Our Events</p>
        </div>
        <div id="fw-deck-wrap" className="stacked"></div>
      </div>
      <div id="fw-close-btn">✕ CLOSE</div>
      <div id="fw-hint"></div>
    </div>
  );
}