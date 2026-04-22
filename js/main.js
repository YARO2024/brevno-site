(function () {
  const en = {
    kw1: "NATURAL",
    kw2: "WARM",
    kw3: "DURABLE",
    kw4: "FAST",
    processLabel: "SEQUENCE",
    processH1: "PATH TO SUCCESSFUL",
    processH2: "COMPLETION",
    processStep1:
      "We harvest timber (cedar, pine, larch) according to your preference",
    processStep2: "We turn logs into a precise cylinder",
    processStep3: "We assemble the house at a dedicated assembly site",
    processStep4:
      "We dismantle the house and deliver to your plot within 2 days",
    processStep5: "In 3 weeks the house is ready to live in",
    productLabel: "ABOUT THE PRODUCT",
    servicesHeading: "OUR SERVICES",
    prodLabel: "CYLINDERING PROCESS",
    prodHeading: "HOW WE PREPARE LOGS",
    prodSwipeHint: "Swipe left — more steps",
    quote:
      "Our company offers clients unique, environmentally clean and economical housing that will last for years and suit everyone who values beauty and naturalness.",
    uspLabel: "ADVANTAGES",
    uspHeadingLine1: "OUR COMPANY",
    uspHeadingLine2: "UNIQUENESS",
    teamLabel: "TEAM",
    teamHeading: "OUR SPECIALISTS",
    catLabel: "PROJECTS",
    catHeading: "OUR COLLECTION",
    navLangHint: "Language",
    reviewsLine1: "50+",
    reviewsLine2: "HAPPY",
    reviewsLine3: "CLIENTS",
    reviewsHint: "Click a client portrait to read a testimonial",
    leadLabel: "REQUEST A CALLBACK",
    leadLine1: "LEAVE A REQUEST",
    leadLine2: "AND GET",
    leadLine3: "A CLEAR",
    leadLine4: "AND DETAILED",
    leadLine5: "CONSULTATION",
    leadIntro:
      "After talking to us, you will have a complete picture of the services we provide.",
    leadPhName: "Your name",
    leadPhPhone: "Mobile phone",
    leadPhContact: "Email or WhatsApp / Telegram",
    leadConsentBefore: "By clicking the button you agree to the processing of ",
    leadConsentPrivacy: "personal data",
    leadConsentAfter: ".",
    showMore: "SHOW MORE",
    sendBtn: "SUBMIT",
    formSending: "Sending…",
    formSuccess: "Thank you! We will contact you soon.",
    formError: "Could not send. Please try again later or call us.",
  };

  const FORM_SUBMIT_EMAIL = "barabanshchikov2024@mail.ru";
  const FORM_SUBMIT_ENDPOINT =
    "https://formsubmit.co/ajax/" + encodeURIComponent(FORM_SUBMIT_EMAIL);

  const ru = {};
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (key) ru[key] = el.textContent;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (key) ru[key] = el.getAttribute("placeholder") || "";
  });

  ru.formSending = "Отправка…";
  ru.formSuccess = "Спасибо! Мы скоро свяжемся с вами.";
  ru.formError =
    "Не удалось отправить. Попробуйте позже или позвоните нам.";

  const REVIEWS_DATA = [
    {
      img: "images/Ellipse%2050.png",
      shortName: { ru: "Иван Л.", en: "Ivan L." },
      nameFeatured: { ru: "Иван Леонов", en: "Ivan Leonov" },
      quote: {
        ru: "Дом сдали в срок, без скрытых доплат. Качество брёвен и подгонки углов — на уровне, рекомендуем.",
        en: "The house was delivered on time with no hidden costs. Log quality and corner fit are top-notch — we recommend them.",
      },
    },
    {
      img: "images/Ellipse%2051.png",
      shortName: { ru: "Марина М.", en: "Marina M." },
      nameFeatured: { ru: "Марина Миронова", en: "Marina Mironova" },
      quote: {
        ru: "Интерьер совпал с визуализацией, а сроки сметы не разъехались. Спасибо за спокойную коммуникацию на всех этапах.",
        en: "The interior matched the visuals and the estimate stayed on track. Thanks for clear communication at every step.",
      },
    },
    {
      img: "images/Ellipse%2052.png",
      shortName: { ru: "Тарас К.", en: "Taras K." },
      nameFeatured: { ru: "Тарас Ковалёв", en: "Taras Kovalyov" },
      quote: {
        ru: "Материал ровный, маркировка брёвен понятная — сборка на участке прошла без лишних вопросов к бригаде.",
        en: "Even logs, clear marking — on-site assembly went smoothly without endless questions for the crew.",
      },
    },
    {
      img: "images/Ellipse%2053.png",
      shortName: { ru: "Олег М.", en: "Oleg M." },
      nameFeatured: { ru: "Олег Мельников", en: "Oleg Melnikov" },
      quote: {
        ru: "Привезли комплект в оговорённые окна, разгрузка и разборка прошли организованно. Дом стоит ровно.",
        en: "The kit arrived in the agreed windows; unloading and staging were organized. The house sits perfectly plumb.",
      },
    },
    {
      img: "images/Ellipse%2054.png",
      shortName: { ru: "Павел А.", en: "Pavel A." },
      nameFeatured: { ru: "Павел Артёмов", en: "Pavel Artemov" },
      quote: {
        ru: "Смета была прозрачной, без «сюрпризов» по факту. За соотношение цена — качество ставлю высокий балл.",
        en: "The quote was transparent with no surprise add-ons. Great value for the quality.",
      },
    },
    {
      img: "images/Ellipse%2055.png",
      shortName: { ru: "Михаил О.", en: "Mikhail O." },
      nameFeatured: { ru: "Михаил Орлов", en: "Mikhail Orlov" },
      quote: {
        ru: "После сдачи остались на связи: ответили по герметизации и усадке. Приятно, когда сервис не заканчивается на акте.",
        en: "They stayed in touch after handover — helpful on sealing and settling. Service doesn’t end at signing.",
      },
    },
    {
      img: "images/Ellipse%20553.png",
      shortName: { ru: "Иван К.", en: "Ivan K." },
      nameFeatured: { ru: "Иван Краснов", en: "Ivan Krasnov" },
      quote: {
        ru: "Сотрудничество с вашей компанией построило нам мечту - уютный бревенчатый дом, в котором мы теперь живем. Спасибо за профессионализм, качество материалов и отличный сервис!",
        en: "Working with your company built our dream — a cozy log home we now live in. Thank you for the professionalism, material quality, and excellent service!",
      },
    },
    {
      img: "images/Ellipse%20555.png",
      shortName: { ru: "Павел Д.", en: "Pavel D." },
      nameFeatured: { ru: "Павел Дмитриев", en: "Pavel Dmitriev" },
      quote: {
        ru: "Тепло и тишина в доме ощущаются с первой ночи. Если ищете честного подрядчика по дереву — эти ребята в деле.",
        en: "Warmth and quiet from night one. If you want an honest timber contractor — these folks deliver.",
      },
    },
  ];

  let currentReviewIndex = 6;
  let lang = "ru";
  const langToggle = document.getElementById("langToggle");
  const slotEn = document.getElementById("slotEn");
  const slotRu = document.getElementById("slotRu");

  function syncReviewsUi() {
    const img = document.getElementById("reviewsFeaturedImg");
    const nameEl = document.getElementById("reviewsFeaturedName");
    const quoteEl = document.getElementById("reviewsFeaturedQuote");
    const picks = document.querySelectorAll(".reviews-pick[data-review-index]");
    if (!img || !nameEl || !quoteEl || !picks.length) return;

    const r = REVIEWS_DATA[currentReviewIndex];
    if (!r) return;

    const loc = lang === "en" ? "en" : "ru";
    img.src = r.img;
    img.alt =
      loc === "en" ? `Photo: ${r.nameFeatured.en}` : `Фото: ${r.nameFeatured.ru}`;
    nameEl.textContent = r.nameFeatured[loc];
    quoteEl.textContent = r.quote[loc];

    picks.forEach((btn) => {
      const i = parseInt(btn.getAttribute("data-review-index"), 10);
      const row = REVIEWS_DATA[i];
      if (!row) return;
      const active = i === currentReviewIndex;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-current", active ? "true" : "false");
      const label = btn.querySelector(".reviews-pick__name");
      if (label) label.textContent = row.shortName[loc];
    });
  }

  function applyLang(next) {
    lang = next;
    document.documentElement.lang = next === "en" ? "en" : "ru";
    if (slotEn && slotRu) {
      slotEn.classList.toggle("is-active", next === "en");
      slotRu.classList.toggle("is-active", next === "ru");
    }
    if (langToggle) {
      langToggle.setAttribute("aria-pressed", next === "en" ? "true" : "false");
      langToggle.setAttribute(
        "aria-label",
        next === "en" ? "Switch language" : "Переключить язык"
      );
    }

    const dict = next === "en" ? en : ru;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (key && dict[key] != null) el.textContent = dict[key];
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (key && dict[key] != null) el.setAttribute("placeholder", dict[key]);
    });
    syncReviewsUi();
    syncNavToggleAria();
    syncNavCloseAria();
  }

  const navToggle = document.getElementById("navToggle");
  const primaryNav = document.getElementById("primary-nav");

  function syncNavToggleAria() {
    if (!navToggle) return;
    const open = document.body.classList.contains("is-nav-open");
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    navToggle.setAttribute(
      "aria-label",
      lang === "en"
        ? open
          ? "Close menu"
          : "Open menu"
        : open
          ? "Закрыть меню"
          : "Открыть меню"
    );
  }

  function syncNavCloseAria() {
    const btn = document.getElementById("navClose");
    if (!btn) return;
    btn.setAttribute(
      "aria-label",
      lang === "en" ? "Close menu" : "Закрыть меню"
    );
  }

  if (navToggle && primaryNav) {
    let navBackdrop = document.getElementById("navBackdrop");
    if (!navBackdrop) {
      navBackdrop = document.createElement("div");
      navBackdrop.id = "navBackdrop";
      navBackdrop.className = "nav-backdrop";
      navBackdrop.setAttribute("aria-hidden", "true");
      document.body.appendChild(navBackdrop);
    }
    navBackdrop.addEventListener("click", () => {
      if (!document.body.classList.contains("is-nav-open")) return;
      document.body.classList.remove("is-nav-open");
      syncNavToggleAria();
    });

    navToggle.addEventListener("click", () => {
      document.body.classList.toggle("is-nav-open");
      syncNavToggleAria();
    });

    document.getElementById("navClose")?.addEventListener("click", () => {
      document.body.classList.remove("is-nav-open");
      syncNavToggleAria();
    });

    primaryNav.querySelectorAll('a[href^="#"]').forEach((a) => {
      a.addEventListener("click", () => {
        document.body.classList.remove("is-nav-open");
        syncNavToggleAria();
      });
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        document.body.classList.remove("is-nav-open");
        syncNavToggleAria();
      }
    });

    window.addEventListener(
      "resize",
      () => {
        if (window.matchMedia("(min-width: 768px)").matches) {
          document.body.classList.remove("is-nav-open");
          syncNavToggleAria();
        }
      },
      { passive: true }
    );

    syncNavCloseAria();
  }

  if (langToggle) {
    langToggle.addEventListener("click", () => {
      applyLang(lang === "ru" ? "en" : "ru");
    });
  }

  const reviewsHero = document.querySelector(".reviews-hero");
  if (reviewsHero) {
    reviewsHero.addEventListener("click", (e) => {
      const btn = e.target.closest(".reviews-pick[data-review-index]");
      if (!btn) return;
      const next = parseInt(btn.getAttribute("data-review-index"), 10);
      if (Number.isNaN(next) || next === currentReviewIndex) return;
      currentReviewIndex = next;
      syncReviewsUi();
    });
    syncReviewsUi();
  }

  const portrait = document.getElementById("teamPortrait");
  const teamName = document.getElementById("teamName");
  const roles = document.getElementById("teamRoles");
  if (portrait && roles) {
    roles.addEventListener("click", (e) => {
      const btn = e.target.closest("button[data-src]");
      if (!btn || btn.classList.contains("is-active")) return;

      const nextSrc = btn.getAttribute("data-src");
      const nextName = btn.getAttribute("data-name") || "";

      portrait.classList.add("is-switching");
      if (teamName) teamName.classList.add("is-switching");

      window.setTimeout(() => {
        roles.querySelectorAll("button").forEach((b) => b.classList.remove("is-active"));
        btn.classList.add("is-active");
        portrait.src = nextSrc;
        if (teamName) teamName.textContent = nextName;
        const done = () => {
          portrait.classList.remove("is-switching");
          if (teamName) teamName.classList.remove("is-switching");
          portrait.removeEventListener("load", done);
        };
        if (portrait.complete) {
          window.requestAnimationFrame(done);
        } else {
          portrait.addEventListener("load", done, { once: true });
          portrait.addEventListener(
            "error",
            () => {
              portrait.removeEventListener("load", done);
              done();
            },
            { once: true }
          );
        }
      }, 220);
    });
  }

  const form = document.getElementById("leadForm");
  const formStatus = document.getElementById("leadFormStatus");
  const formSubmitBtn = document.getElementById("leadSubmit");

  function leadFormMessages() {
    const dict = lang === "en" ? en : ru;
    return {
      sending: dict.formSending,
      success: dict.formSuccess,
      error: dict.formError,
    };
  }

  function setFormStatus(text, kind) {
    if (!formStatus) return;
    formStatus.textContent = text || "";
    formStatus.dataset.state = kind || "";
  }

  if (form && formSubmitBtn) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      const nameEl = document.getElementById("leadName");
      const phoneEl = document.getElementById("leadPhone");
      const contactEl = document.getElementById("leadContact");
      const consentEl = form.querySelector('input[name="consent"]');

      const name = (nameEl?.value || "").trim();
      const phone = (phoneEl?.value || "").trim();
      const contact = (contactEl?.value || "").trim();
      const consentOn = consentEl?.checked;

      const msg = leadFormMessages();
      setFormStatus(msg.sending, "pending");
      formSubmitBtn.disabled = true;

      const contactLower = contact.toLowerCase();
      const replyTo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactLower) ? contactLower : "";

      const payload = {
        _subject: "Заявка с сайта Brevno",
        name,
        phone,
        contact: contact || "—",
        consent: consentOn ? (lang === "en" ? "Yes" : "Да") : "—",
        _template: "table",
      };
      if (replyTo) payload._replyto = replyTo;

      try {
        const res = await fetch(FORM_SUBMIT_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        });

        const data = await res.json().catch(() => ({}));
        if (!res.ok || data.success === false) {
          throw new Error(data.message || "FormSubmit error");
        }

        setFormStatus(msg.success, "ok");
        form.reset();
      } catch (_) {
        setFormStatus(msg.error, "err");
      } finally {
        formSubmitBtn.disabled = false;
      }
    });
  }

  const servicesAcc = document.getElementById("servicesAcc");
  if (servicesAcc) {
    servicesAcc.querySelectorAll("details.services-acc__item").forEach((det) => {
      det.addEventListener("toggle", () => {
        if (!det.open) return;
        servicesAcc.querySelectorAll("details.services-acc__item").forEach((other) => {
          if (other !== det) other.open = false;
        });
      });
    });
  }

  (function initUspCarousel() {
    const vp = document.getElementById("uspViewport");
    const btnPrev = document.getElementById("uspPrev");
    const btnNext = document.getElementById("uspNext");
    if (!vp) return;
    const cards = vp.querySelectorAll(".usp-card");
    if (!cards.length) return;

    function maxScroll() {
      return Math.max(0, vp.scrollWidth - vp.clientWidth);
    }

    function cardStep() {
      if (cards.length < 2) return Math.max(200, vp.clientWidth * 0.82);
      const a = cards[0].getBoundingClientRect();
      const b = cards[1].getBoundingClientRect();
      return Math.max(120, b.left - a.left);
    }

    function updateArrows() {
      const ms = maxScroll();
      const tol = 2;
      if (btnPrev) btnPrev.disabled = vp.scrollLeft <= tol;
      if (btnNext) btnNext.disabled = vp.scrollLeft >= ms - tol;
    }

    function scrollDir(dir) {
      vp.scrollBy({ left: dir * cardStep(), behavior: "smooth" });
    }

    btnPrev?.addEventListener("click", () => scrollDir(-1));
    btnNext?.addEventListener("click", () => scrollDir(1));

    vp.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows, { passive: true });

    let drag = false;
    let startX = 0;
    let startScroll = 0;

    function onPointerDown(e) {
      if (e.pointerType === "touch") return;
      if (e.button !== 0) return;
      drag = true;
      vp.classList.add("is-dragging");
      startX = e.clientX;
      startScroll = vp.scrollLeft;
      try {
        vp.setPointerCapture(e.pointerId);
      } catch (_) {}
    }

    function onPointerMove(e) {
      if (!drag) return;
      vp.scrollLeft = startScroll - (e.clientX - startX);
    }

    function onPointerUp(e) {
      if (!drag) return;
      drag = false;
      vp.classList.remove("is-dragging");
      try {
        vp.releasePointerCapture(e.pointerId);
      } catch (_) {}
      updateArrows();
    }

    vp.addEventListener("pointerdown", onPointerDown);
    vp.addEventListener("pointermove", onPointerMove);
    vp.addEventListener("pointerup", onPointerUp);
    vp.addEventListener("pointercancel", onPointerUp);

    updateArrows();
  })();

  (function initQuoteReveal() {
    const section = document.getElementById("quoteReveal");
    if (!section) return;
    const lines = section.querySelectorAll(".quote__line");
    if (!lines.length) return;

    let ticking = false;

    function updateReveal() {
      ticking = false;
      const r = section.getBoundingClientRect();
      const vh = window.innerHeight;
      const n = lines.length;
      const start = vh * 0.9;
      const traveled = start - r.top;
      const range = Math.max(r.height + vh * 0.35, vh * 0.6);
      let p = traveled / range;
      p = Math.max(0, Math.min(1, p));

      lines.forEach((line, i) => {
        const threshold = i / n;
        line.classList.toggle("is-visible", p > threshold);
      });
    }

    function onScrollOrResize() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateReveal);
      }
    }

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize, { passive: true });
    updateReveal();
  })();

  (function initProductionStepper() {
    const vp = document.getElementById("productionViewport");
    const track = document.getElementById("productionTrack");
    const btnPrev = document.getElementById("productionPrev");
    const btnNext = document.getElementById("productionNext");
    const heroImg = document.getElementById("productionHeroImage");
    if (!vp || !track) return;
    const slides = track.querySelectorAll(".production-slide");
    if (!slides.length) return;

    let scrollEndTimer;
    /** Когда все слайды помещаются без прокрутки (maxScroll≈0), активный шаг задаём только стрелками */
    let activeIdx = 0;

    function syncProductionHero() {
      if (!heroImg) return;
      const nextSrc = slides[activeIdx]?.getAttribute("data-hero-img");
      if (!nextSrc || heroImg.getAttribute("src") === nextSrc) return;
      heroImg.setAttribute("src", nextSrc);
    }

    function maxScroll() {
      return Math.max(0, vp.scrollWidth - vp.clientWidth);
    }

    function slideScrollStep() {
      if (slides.length < 2) return Math.max(120, vp.clientWidth * 0.75);
      const a = slides[0].getBoundingClientRect();
      const b = slides[1].getBoundingClientRect();
      return Math.max(80, b.left - a.left);
    }

    function updateSwipeHint() {
      const hint = document.getElementById("productionSwipeHint");
      if (!hint) return;
      if (!window.matchMedia("(max-width: 768px)").matches) {
        hint.setAttribute("hidden", "");
        return;
      }
      const tol = 12;
      const show = vp.scrollLeft <= tol && activeIdx === 0;
      hint.toggleAttribute("hidden", !show);
    }

    function updateProductionEdge() {
      const stepper = document.getElementById("productionStepper");
      if (!stepper) return;
      if (!window.matchMedia("(max-width: 768px)").matches) {
        stepper.classList.remove("production-stepper--at-end");
        return;
      }
      const ms = maxScroll();
      const tol = 10;
      const atEnd = ms <= tol || vp.scrollLeft >= ms - tol;
      stepper.classList.toggle("production-stepper--at-end", atEnd);
    }

    function applyActiveIndex(idx) {
      const last = slides.length - 1;
      activeIdx = Math.max(0, Math.min(idx, last));
      slides.forEach((s, i) => s.classList.toggle("is-active", i === activeIdx));
      updateArrows();
      syncProductionHero();
      updateSwipeHint();
      updateProductionEdge();
    }

    function setActiveFromScroll() {
      const tol = 12;
      const ms = maxScroll();
      const last = slides.length - 1;

      if (ms <= tol) {
        applyActiveIndex(activeIdx);
        return;
      }

      if (vp.scrollLeft <= tol) {
        applyActiveIndex(0);
        return;
      }

      if (vp.scrollLeft >= ms - tol) {
        applyActiveIndex(last);
        return;
      }

      const vpRect = vp.getBoundingClientRect();
      let best = 0;
      let bestVis = 0;
      slides.forEach((slide, i) => {
        const r = slide.getBoundingClientRect();
        const w = Math.max(
          0,
          Math.min(r.right, vpRect.right) - Math.max(r.left, vpRect.left)
        );
        if (w > bestVis) {
          bestVis = w;
          best = i;
        }
      });
      if (bestVis <= 0) {
        updateSwipeHint();
        updateProductionEdge();
        return;
      }
      applyActiveIndex(best);
    }

    function updateArrows() {
      const ms = maxScroll();
      const tol = 2;
      const last = slides.length - 1;
      if (ms <= tol) {
        if (btnPrev) btnPrev.disabled = activeIdx <= 0;
        if (btnNext) btnNext.disabled = activeIdx >= last;
        return;
      }
      if (btnPrev) btnPrev.disabled = vp.scrollLeft <= tol;
      if (btnNext) btnNext.disabled = vp.scrollLeft >= ms - tol;
    }

    vp.addEventListener(
      "scroll",
      () => {
        setActiveFromScroll();
        clearTimeout(scrollEndTimer);
        scrollEndTimer = setTimeout(setActiveFromScroll, 100);
      },
      { passive: true }
    );

    window.addEventListener(
      "resize",
      () => {
        setActiveFromScroll();
        updateSwipeHint();
        updateProductionEdge();
      },
      { passive: true }
    );

    function scrollByStep(dir) {
      const step = slideScrollStep();
      vp.scrollBy({ left: dir * step, behavior: "smooth" });
    }

    btnPrev?.addEventListener("click", () => {
      const ms = maxScroll();
      const tol = 12;
      if (ms <= tol) {
        applyActiveIndex(activeIdx - 1);
        return;
      }
      scrollByStep(-1);
    });

    btnNext?.addEventListener("click", () => {
      const ms = maxScroll();
      const tol = 12;
      if (ms <= tol) {
        applyActiveIndex(activeIdx + 1);
        return;
      }
      scrollByStep(1);
    });

    requestAnimationFrame(() => {
      setActiveFromScroll();
      updateSwipeHint();
      updateProductionEdge();
    });
  })();

  document.querySelector(".catalog__more")?.addEventListener("click", () => {
    alert(
      lang === "en"
        ? "More projects — connect CMS or API."
        : "Дополнительные проекты — подключите CMS или API."
    );
  });

  (function initCatalogAccordion() {
    const tbody = document.getElementById("catalogRows");
    if (!tbody) return;
    const rows = tbody.querySelectorAll("[data-catalog-row]");

    function syncRow(row) {
      const open = row.classList.contains("is-open");
      const btn = row.querySelector(".catalog__toggle");
      const icon = row.querySelector(".catalog__toggle-icon");
      if (btn) {
        btn.setAttribute("aria-expanded", open ? "true" : "false");
        const collapse = lang === "en" ? "Collapse row" : "Свернуть строку";
        const expand = lang === "en" ? "Expand row" : "Развернуть строку";
        btn.setAttribute("aria-label", open ? collapse : expand);
      }
      if (icon) icon.textContent = open ? "\u2212" : "+";
    }

    function syncAll() {
      rows.forEach(syncRow);
    }

    tbody.addEventListener("click", (e) => {
      if (e.target.closest(".catalog__thumbs")) return;

      const row = e.target.closest("[data-catalog-row]");
      if (!row || !tbody.contains(row)) return;

      const isToggle = Boolean(e.target.closest(".catalog__toggle"));
      const opening = !row.classList.contains("is-open");

      if (isToggle) {
        e.preventDefault();
        if (opening) {
          rows.forEach((r) => r.classList.toggle("is-open", r === row));
        } else {
          row.classList.remove("is-open");
        }
        syncAll();
        return;
      }

      if (opening) {
        rows.forEach((r) => r.classList.toggle("is-open", r === row));
      } else {
        row.classList.remove("is-open");
      }
      syncAll();
    });

    syncAll();
  })();
})();
