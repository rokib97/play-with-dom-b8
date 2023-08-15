let count = 0;
document.querySelector("#task-btn").addEventListener("click", function () {
  // getting the value fron input box
  const inputElement = document.getElementById("input-value");
  const inputValue = inputElement.value;

  //   creating tr and th, td and dynamically insert data
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <th>${(count += 1)}</th>
    <td>${inputValue}</td>
    <td>
        <button class="done-btn btn btn-success btn-xs">Done</button>
        <button class="delete-btn btn btn-error btn-xs">Delete</button>
    </td>
  `;

  //   injecting to html
  const container = document.querySelector("#content-container");
  container.appendChild(tr);

  //   clear the input field
  document.getElementById("input-value").value = "";

  //   deleting the task AKA delete button
  const deleteBtns = document.querySelectorAll(".delete-btn");
  for (let btn of deleteBtns) {
    btn.addEventListener("click", function (e) {
      //   console.log(e.target.parentElement.parentElement);
      e.target.parentElement.parentElement.style.display = "none";
    });
  }
  //   complete the task AKA delete button
  const doneBtns = document.querySelectorAll(".done-btn");
  for (let btn of doneBtns) {
    btn.addEventListener("click", function (e) {
      e.target.parentElement.parentElement.style.textDecoration =
        "line-through";
    });
  }

  //   comeplete clear all button task
  document.querySelector("#clear-btn").addEventListener("click", function (e) {
    // console.log(e.target.parentElement.parentElement.children[0].children[1]);
    e.target.parentElement.parentElement.children[0].children[1].style.display =
      "none";

    //   disable the clear all button
    e.target.style.display = "none";
  });
});
