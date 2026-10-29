(function () {
  const state = {
    current: "start",
    history: ["start"]
  };

  const els = {
    image: document.getElementById("slide-image"),
    title: document.getElementById("slide-title"),
    text: document.getElementById("slide-text"),
    choices: document.getElementById("choices"),
    back: document.getElementById("btn-back"),
    restart: document.getElementById("btn-restart"),
    breadcrumb: document.getElementById("breadcrumb"),
    slide: document.getElementById("slide")
  };

  function escapeHtml(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function fitText() {
    const el = els.text;
    const max = 18;
    const min = 11;
    let size = max;
    el.style.fontSize = size + "px";
    el.style.lineHeight = "1.55";
    while (size > min && el.scrollHeight > el.clientHeight) {
      size -= 0.5;
      el.style.fontSize = size + "px";
    }
  }

  function renderText(raw) {
    const escaped = escapeHtml(raw);
    const withDialogues = escaped.replace(/«([^»]+)»/g, '<span class="dialogue">«$1»</span>');
    return withDialogues.replace(/\b(CHOIX [A-Z0-9.]+)/g, "<em>$1</em>");
  }

  function render(nodeId) {
    const node = STORY[nodeId];
    if (!node) return;

    state.current = nodeId;

    els.image.src = node.image;
    els.image.alt = "Illustration — " + node.title;
    els.title.textContent = node.title;

    const ending = node.ending
      ? '<span class="ending-badge">🏁 ' + escapeHtml(node.ending) + "</span>\n"
      : "";
    els.text.innerHTML = ending + renderText(node.text);
    els.text.scrollTop = 0;

    els.choices.innerHTML = "";
    node.choices.forEach(function (choice) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "btn btn-choice";
      btn.textContent = choice.label;
      btn.addEventListener("click", function () {
        state.history.push(choice.next);
        render(choice.next);
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
      els.choices.appendChild(btn);
    });

    els.back.disabled = state.history.length <= 1;
    els.breadcrumb.textContent = "Chapitre " + state.history.length + " — " + Object.keys(STORY).indexOf(nodeId) + "/" + (Object.keys(STORY).length - 1);

    els.slide.style.animation = "none";
    void els.slide.offsetWidth;
    els.slide.style.animation = "";

    requestAnimationFrame(fitText);
  }

  els.back.addEventListener("click", function () {
    if (state.history.length <= 1) return;
    state.history.pop();
    render(state.history[state.history.length - 1]);
  });

  els.restart.addEventListener("click", function () {
    state.history = ["start"];
    render("start");
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") els.back.click();
    if (e.key === "ArrowRight" && els.choices.firstChild) els.choices.firstChild.click();
  });

  render("start");

  let resizeTimer = null;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(fitText, 120);
  });
})();
