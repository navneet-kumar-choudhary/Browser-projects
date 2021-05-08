// alert("Hello from JS");

//get -> first element
let inputBox = document.querySelector(".input-box");
let ul = document.querySelector(".task-list");

//listener
// dom -> form -> value
// rest -> textContent
inputBox.addEventListener("keydown", function (object) {
  // console.log("event object",object);
  if (object.key == "Enter" && inputBox.value != "") {
    let value = inputBox.value;
    // console.log("value",value);

    //apnend
    let li = document.createElement("li");
    li.textContent = value;
    // set attributes
    li.setAttribute("class", "task");
    ul.appendChild(li);
    li.addEventListener("dblclick", function () {
      li.remove();
    });
    inputBox.value = "";
  }
});
