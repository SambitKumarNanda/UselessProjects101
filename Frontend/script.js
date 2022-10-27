const generate_btn = document.querySelector("#generate-btn");
const close_btn = document.querySelector("#close-btn");
const result = document.querySelector("#result_div");
const result_text = document.querySelector("#result_text");
const drop_down_list = document.querySelectorAll("#drop-down-list");

generate_btn.addEventListener("click", () => {
  if (result.classList.contains("hidden")) {
    setTimeout(() => {
      result.classList.remove("hidden");
    }, 50);
  }
});

close_btn.addEventListener("click", () => {
  if (!result.classList.contains("hidden")) {
    setTimeout(() => {
      result.classList.add("hidden");
    }, 50);
  }
});

console.log(drop_down_list);
