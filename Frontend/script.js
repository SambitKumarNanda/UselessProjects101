const generate_btn = document.querySelector("#generate-btn");
const close_btn = document.querySelector("#close-btn");
const result = document.querySelector("#result_div");
const result_text = document.querySelector("#result_text");

generate_btn.addEventListener("click", () => {

    let selectedValue = document.getElementById("drop-down-list").value;
    console.log(selectedValue);
    switch (selectedValue){
        case 'python': result_text.innerHTML=`print("Hello World")`
        break;
        case 'javascript': result_text.innerHTML=`console.log("Hello World")`
        break;
        case 'c': result_text.innerHTML=`printf("Hello World")`
        break;
        case 'c++': result_text.innerHTML =` cout << "Hello World!";`
        break;
        case 'c#': result_text.innerHTML=`Console.WriteLine("Hello World!");`
        break;
        case 'java':result_text.innerHTML=`System.out.print("Hello World");`
        break;
    }

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
