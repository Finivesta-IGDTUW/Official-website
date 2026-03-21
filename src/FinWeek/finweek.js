import { useEffect } from "react";
import "./finweek.css";
import bannerImg from "./banner.png";

import event1Img from "./mun.png";
import event2Img from "./plan.png";
import event3Img from "./plan.png";
import event4Img from "./plan.png";


export default function FinWeek() {
  useEffect(() => {
    const GAP      = 14;
    const CARD_H   = 72;
    const DETAIL_H = 220;

    const EVENTS = [
      {
        number:  "01",
        title:   "PLAN YOUR PENNIES",
        sub:     "DAY 1 · AUDITORIUM A",
        desc:    "The ultimate personal finance challenge. Build a budget, defend your decisions, and outlast the competition. Ideal for aspiring financial planners.",
        date:    "14 FEB 2025",
        venue:   "Auditorium A",
        team:    "2 Members",
        link:    "https://unstop.com/o/vCRnEi7?lb=PiK21U6&utm_medium=Share&utm_source=competitions&utm_campaign=Finivigd80267",
        preview: event1Img,           
        previewAlt: "Plan Your Pennies event poster",
      },
      {
        number:  "02",
        title:   "FINMUN",
        sub:     "DAY 1 · SEMINAR HALL",
        desc:    "A Model UN with a financial twist. Debate global economic policy, negotiate trade deals, and pass resolutions that shape fictional economies.",
        date:    "14 FEB 2025",
        venue:   "Seminar Hall",
        team:    "1–2 Members",
        link:    "https://unstop.com/o/vpOF9xL?lb=PiK21U6&utm_medium=Share&utm_source=conferences&utm_campaign=Finivigd80267",
        preview: event2Img,
        previewAlt: "FinMUN event poster",
      },
      {
        number:  "03",
        title:   "EVENT THREE",
        sub:     "DAY 2 · VENUE TBA",
        desc:    "Details coming soon. Stay tuned for updates on this exciting FinWeek 2.0 event.",
        date:    "15 FEB 2025",
        venue:   "TBA",
        team:    "TBA",
        link:    null,
        preview: event3Img,
        previewAlt: "Event Three poster",
      },
      {
        number:  "04",
        title:   "EVENT FOUR",
        sub:     "DAY 2 · VENUE TBA",
        desc:    "Details coming soon. Stay tuned for updates on this exciting FinWeek 2.0 event.",
        date:    "15 FEB 2025",
        venue:   "TBA",
        team:    "TBA",
        link:    null,
        preview: event4Img,
        previewAlt: "Event Four poster",
      },
    ];

    const stage    = document.getElementById("fw-stage");
    const deckWrap = document.getElementById("fw-deck-wrap");
    const hintEl   = document.getElementById("fw-hint");
    const closeBtn = document.getElementById("fw-close-btn");
    const banner   = document.getElementById("fw-banner");

    if (!stage || !deckWrap) return;

    // ── HOVER PREVIEW BUBBLE ────────────────────────────────
    const preview = document.createElement("div");
    preview.id = "fw-preview";
    preview.innerHTML = `
      <div id="fw-preview-inner">
        <img id="fw-preview-img" src="" alt="" />
        <div id="fw-preview-placeholder">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#333" stroke-width="1.5">
            <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>
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

  // Use viewport coords — position fixed, left of the card
  const cardRect = card.getBoundingClientRect();
  const previewWidth = 200;
  const gap = 24;

  preview.style.position   = "fixed";           // ← fixed not absolute
  preview.style.top        = (cardRect.top + cardRect.height / 2) + "px";
  preview.style.left       = (cardRect.left - previewWidth - gap - 12) + "px"; // 12 = tail width
  preview.style.right      = "auto";
  preview.style.opacity    = "1";
  preview.style.transform  = "translateY(-50%) scale(1)";
  preview.style.visibility = "visible";
}

    function hidePreview() {
      hideTimer = setTimeout(() => {
        preview.style.opacity    = "0";
        preview.style.transform  = "translateY(-50%) scale(0.92)";
        preview.style.visibility = "hidden";
      }, 80);
    }

    // ── BUILD TIMELINE LINE ────────────────────────────────
    const timelineLine = document.createElement("div");
    timelineLine.id = "fw-timeline-line";
    deckWrap.appendChild(timelineLine);

    // ── BUILD CARDS ────────────────────────────────────────
    EVENTS.forEach((ev, i) => {
      const card = document.createElement("div");
      card.className = "fw-card";

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
            <div class="fw-card-dot"></div>
            <span class="fw-card-number">— ${ev.number}</span>
            <span class="fw-card-title">${ev.title}</span>
            <span class="fw-card-sub">${ev.sub}</span>
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
            <div class="fw-detail-meta-item">
              <span class="fw-detail-meta-label">TEAM SIZE</span>
              <span class="fw-detail-meta-value">${ev.team}</span>
            </div>
          </div>
          <div class="fw-detail-divider"></div>
          ${registerHTML}
        </div>
      `;

      // hover listeners — only show preview when timeline is expanded
      card.addEventListener("mouseenter", () => {
        if (isExpanded) showPreview(card, ev);
      });
      card.addEventListener("mouseleave", hidePreview);

      deckWrap.appendChild(card);
    });

    const cards = deckWrap.querySelectorAll(".fw-card");
    let isExpanded = false;
    let openIndex  = -1;

    // ── HELPERS ────────────────────────────────────────────
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
      deckWrap.style.height      = totalH + "px";
      timelineLine.style.height  = totalH + "px";
      cards.forEach((card, i) => {
        card.style.top = getCardTop(i, openIdx) + "px";
        card.classList.toggle("open", i === openIdx);
      });
    }

    // ── OPEN STACKED ──────────────────────────────────────
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
        hintEl.textContent   = "CLICK STACK TO EXPAND TIMELINE";
      }
    }

    // ── EXPAND TIMELINE ───────────────────────────────────
    function expandTimeline() {
      if (isExpanded) return;
      isExpanded = true;
      openIndex  = -1;

      if (hintEl) hintEl.style.opacity = "0";

      const totalH = getTotalHeight(-1);

      deckWrap.classList.remove("stacked");
      deckWrap.classList.add("expanded");

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
        timelineLine.style.height = totalH + "px";
      }, 300);
    }

    // ── COLLAPSE ──────────────────────────────────────────
    function closeDeck() {
      stage.classList.remove("active");
      isExpanded = false;
      openIndex  = -1;
      deckWrap.style.marginLeft = "0";
      cards.forEach((c) => {
        c.style.top  = "0px";
        c.style.left = "0px";
        c.classList.remove("flipped", "open");
      });
      timelineLine.style.height = "0";
      hidePreview();
    }

    // ── CLICK LISTENERS ───────────────────────────────────
    banner && banner.addEventListener("click", openDeck);

    deckWrap.addEventListener("click", (e) => {
      if (!isExpanded) { expandTimeline(); return; }
      if (e.target.closest(".fw-register-btn")) return;

      const card = e.target.closest(".fw-card");
      if (!card) return;

      const idx = Array.from(cards).indexOf(card);
      if (idx === -1) return;

      openIndex = openIndex === idx ? -1 : idx;
      repositionCards(openIndex);
    });

    stage.addEventListener("click", (e) => {
      if (e.target === stage) closeDeck();
    });

    closeBtn && closeBtn.addEventListener("click", closeDeck);

    // ── CLEANUP ───────────────────────────────────────────
    return () => {
        clearTimeout(hideTimer);
        banner   && banner.removeEventListener("click", openDeck);
        closeBtn && closeBtn.removeEventListener("click", closeDeck);
        deckWrap.innerHTML = "";
        if (document.body.contains(preview)) document.body.removeChild(preview); // ← updated
    };
  }, []);

  return (
    <div className="fw-body">
      <div id="fw-banner">
        <img src={bannerImg} alt="FinWeek 2.0" />
      </div>
      <div id="fw-stage">
        <div id="fw-deck-wrap" className="stacked"></div>
      </div>
      <div id="fw-close-btn">✕ CLOSE</div>
      <div id="fw-hint"></div>
    </div>
  );
}