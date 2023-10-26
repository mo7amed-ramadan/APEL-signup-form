const selectUniversity = document.getElementById("select-univ");
const options = document.getElementById("options");
const selectTitle = document.getElementById("select-title");
const first = document.getElementById("1");
const second = document.getElementById("2");
const third = document.getElementById("3");
let clickCount = 0;
function show() {
  options.classList.remove("hide");
  options.classList.add("show");
}

function hide() {
  options.classList.remove("show");
  options.classList.add("hide");
}

function clickHandler() {
  if (clickCount === 0) {
    show();
    clickCount++;
  } else {
    hide();
    clickCount--;
  }
}
first.addEventListener("click", () => {
  selectTitle.innerHTML = `<span class="university-selection">${first.value}</span>`;
});
second.addEventListener("click", () => {
  selectTitle.innerHTML = `<span class="university-selection">${second.value}</span>`;
});
third.addEventListener("click", () => {
  selectTitle.innerHTML = `<span class="university-selection">${third.value}</span>`;
});
selectUniversity.addEventListener("click", clickHandler);
