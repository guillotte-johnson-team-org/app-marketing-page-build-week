class Tab {
  constructor(element, icon) {
    this.element = element;
    this.icon = icon;
    this.para =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum dictum tortor quis luctus. Pellentesque congue aliquet venenatis. Phasellus dictum rhoncus scelerisque.";

    this.constructTab.bind(this);
    this.getRandomColor.bind(this);
    this.randomColorize.bind(this);
  }

  constructTab() {
    const i = document.createElement("i");
    const p = document.createElement("p");
    p.textContent = this.para;

    i.classList.add(this.icon.prefix);
    i.classList.add("fa");
    i.classList.add(this.icon.suffix);

    this.element.appendChild(i);
    this.element.appendChild(p);
    this.randomColorize();
  }

  getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  randomColorize() {
    const thisColor = this.getRandomColor();
    this.element.style = `border-bottom: 5px solid ${thisColor}`;
    this.element.querySelector("i").style.color = thisColor;
  }
}

const icons = [
  { prefix: "fab", suffix: "fa-apple" },
  { prefix: "fab", suffix: "fa-android" },
  { prefix: "far", suffix: "fa-address-card" },
  { prefix: "far", suffix: "fa-comments" },
  { prefix: "fas", suffix: "fa-assistive-listening-systems" },
  { prefix: "far", suffix: "fa-bookmark" },
  { prefix: "fab", suffix: "fa-angellist" },
  { prefix: "fas", suffix: "fa-asterisk" },
  { prefix: "fas", suffix: "fa-cloud" },
  { prefix: "fas", suffix: "fa-tasks" },
  { prefix: "fas", suffix: "fa-user-secret" },
  { prefix: "fas", suffix: "fa-key" },
  { prefix: "far", suffix: "fa-eye" },
  { prefix: "far", suffix: "fa-bell" },
  { prefix: "far", suffix: "fa-folder-open" }
];

const tabs = document.querySelectorAll(".tab").forEach((elem, i) => {
  const tab = new Tab(elem, icons[i]);
  tab.constructTab();
});
