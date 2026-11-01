fetch("story.json")
  .then((r) => r.json())
  .then((story) => {
    const byId = new Map(story.slides.map((s) => [s.id, s]));
    const img = document.getElementById("slide-img");
    const text = document.getElementById("slide-text");
    const choices = document.getElementById("choices");
    const btnNext = document.getElementById("btn-next");
    const btnRestart = document.getElementById("btn-restart");

    function render(id) {
      const slide = byId.get(id);
      if (!slide) return;
      img.src = slide.image;
      img.alt = "Illustration de la page " + slide.id;
      text.innerHTML = "";
      for (const para of slide.text) {
        const p = document.createElement("p");
        p.innerHTML = para;
        text.appendChild(p);
      }
      choices.innerHTML = "";
      for (const c of slide.choices) {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "btn choice";
        for (const para of c.text) {
          const p = document.createElement("p");
          p.innerHTML = para;
          btn.appendChild(p);
        }
        btn.addEventListener("click", () => render(c.next));
        choices.appendChild(btn);
      }
      const hasNext = !slide.fin && slide.next != null;
      btnNext.hidden = !hasNext;
      if (hasNext) btnNext.onclick = () => render(slide.next);
      btnRestart.hidden = !slide.fin;
      if (slide.fin) btnRestart.onclick = () => render(story.start);
    }

    render(story.start);
  });
