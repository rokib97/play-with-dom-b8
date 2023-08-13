document.querySelector("#submit-btn").addEventListener("click", function () {
  //   console.log("clicked");

  const textAreaElement = document.getElementById("text-area");
  const areaValue = textAreaElement.value;
  //   console.log(textAreaElement.value);

  const p = document.createElement("p");
  p.innerText = areaValue;
  //   console.log(p);

  const container = document.querySelector("#review");
  container.appendChild(p);
  document.getElementById("text-area").value = "";
});

document.getElementById("text-area").addEventListener("keyup", function (e) {
  console.log(e.target.value);
  if (e.key === "Enter") {
    // console.log("Enter key pressed!");
    const textAreaElement = document.getElementById("text-area");
    const areaValue = textAreaElement.value;
    //   console.log(textAreaElement.value);

    const p = document.createElement("p");
    p.innerText = areaValue;
    //   console.log(p);

    const container = document.querySelector("#review");
    container.appendChild(p);
    document.getElementById("text-area").value = "";
  }
});
