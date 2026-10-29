(function () {
  "use strict";

  var state = {
    current: "start",
    history: ["start"]
  };

  var els = {
    image: document.getElementById("slide-image"),
    title: document.getElementById("slide-title"),
    text: document.getElementById("slide-text"),
    choices: document.getElementById("choices"),
    homeActions: document.getElementById("home-actions"),
    start: document.getElementById("btn-start"),
    back: document.getElementById("btn-back"),
    restart: document.getElementById("btn-restart"),
    breadcrumb: document.getElementById("breadcrumb"),
    slide: document.getElementById("slide")
  };

  // Matches the mobile breakpoint in style.css: there the text scrolls instead of shrinking.
  var NARROW = window.matchMedia("(max-width: 860px)");

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  // Only allow local relative image paths (defense in depth for STORY data).
  function safeImage(src) {
    return typeof src === "string" && src.indexOf(":") === -1 && src.charAt(0) !== "/" ? src : "";
  }

  function renderText(raw) {
    var escaped = escapeHtml(raw);
    return escaped.replace(/«([^»]+)»/g, '<span class="dialogue">«$1»</span>');
  }

  function fitText() {
    if (NARROW.matches) {
      els.text.style.fontSize = "";
      return;
    }
    var el = els.text;
    var max = 18;
    var min = 11;
    var size = max;
    el.style.fontSize = size + "px";
    el.style.lineHeight = "1.55";
    while (size > min && el.scrollHeight > el.clientHeight) {
      size -= 0.5;
      el.style.fontSize = size + "px";
    }
  }

  function showError(message) {
    els.title.textContent = "Oups…";
    els.slide.classList.remove("home");
    els.homeActions.hidden = true;
    els.text.innerHTML = '<p class="error">' + escapeHtml(message) + "</p>";
    els.choices.innerHTML = "";
    els.image.removeAttribute("src");
    els.image.alt = "";
    els.breadcrumb.textContent = "";
    els.back.disabled = state.history.length <= 1;
  }

  function render(nodeId) {
    var node = STORY[nodeId];
    if (!node || typeof node !== "object") {
      showError("Cette page de l'histoire est introuvable (« " + nodeId + " »).");
      return;
    }

    state.current = nodeId;

    var isHome = nodeId === "start";
    els.slide.classList.toggle("home", isHome);
    els.homeActions.hidden = !isHome;

    var img = safeImage(node.image);
    if (img) {
      els.image.src = img;
      els.image.alt = isHome ? "Illustration de la soirée" : "Illustration de la scène";
      els.image.style.visibility = "visible";
    } else {
      els.image.removeAttribute("src");
      els.image.alt = "";
    }
    els.title.textContent = node.title;

    var ending = node.ending
      ? '<span class="ending-badge">🏁 ' + escapeHtml(node.ending) + "</span>\n"
      : "";
    els.text.innerHTML = ending + renderText(node.text);
    els.text.scrollTop = 0;

    els.choices.innerHTML = "";
    if (isHome) return finishRender();
    var choices = (node.choices || []).filter(function (choice) {
      return choice && choice.next;
    });
    var singleNext = !node.ending && choices.length === 1;
    choices.forEach(function (choice) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "btn " + (singleNext ? "btn-next" : "btn-choice");
      btn.textContent = choice.label || choice.next;
      btn.addEventListener("click", function () {
        state.history.push(choice.next);
        render(choice.next);
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
      els.choices.appendChild(btn);
    });

    finishRender();
  }

  function finishRender() {
    els.back.disabled = state.history.length <= 1;
    els.breadcrumb.textContent = "Chapitre " + state.history.length;

    els.slide.style.animation = "none";
    void els.slide.offsetWidth;
    els.slide.style.animation = "";

    requestAnimationFrame(fitText);
    els.title.focus({ preventScroll: true });
  }

  // Hide the frame instead of showing a broken-image icon if a file is missing.
  els.image.addEventListener("error", function () {
    els.image.style.visibility = "hidden";
  });

  els.back.addEventListener("click", function () {
    if (state.history.length <= 1) return;
    state.history.pop();
    render(state.history[state.history.length - 1]);
  });

  els.restart.addEventListener("click", function () {
    state.history = ["start"];
    render("start");
  });

  els.start.addEventListener("click", function () {
    var first = STORY.start.choices && STORY.start.choices[0];
    if (first && first.next) {
      state.history.push(first.next);
      render(first.next);
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft" && !els.back.disabled) {
      e.preventDefault();
      els.back.click();
    } else if (e.key === "ArrowRight" && els.choices.firstChild) {
      e.preventDefault();
      els.choices.firstChild.click();
    }
  });

  // Preload every slide image so transitions don't flash the previous picture.
  Object.keys(STORY).forEach(function (id) {
    var img = safeImage(STORY[id] && STORY[id].image);
    if (img) {
      var pre = new Image();
      pre.src = img;
    }
  });

  render("start");

  var resizeTimer = null;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(fitText, 120);
  });
})();
