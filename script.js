const dts = document.querySelectorAll("dt");
const dds = document.querySelectorAll("dd");
const activeClass = "ativo";

function showDd() {
  dts.forEach((dt) => {
    if (dt === this) {
      return this.classList.toggle(activeClass);
    }
    dt.classList.remove(activeClass);
  });
  dds.forEach((dd) => {
    if (dd === this.nextElementSibling) {
      return this.nextElementSibling.classList.toggle(activeClass);
    }
    dd.classList.remove(activeClass);
  });
}

dts.forEach((dt) => {
  dt.addEventListener("click", showDd);
});
