const fetchBtn = document.getElementById("fetchBtn");
const output = document.getElementById("output");
const reloadBtn = document.getElementById("reloadBtn");

fetchBtn.addEventListener("click", () => {
  dataToShow();
});

reloadBtn.addEventListener("click", () => {
  reloadData();
});

function cardCreation(data) {
  output.innerHTML = "";
  data.forEach((element) => {
    const { name, email, phone } = element;
    // console.log(name, email, phone);
    const newDiv = document.createElement("div");
    newDiv.className = "card";
    const nameDiv = document.createElement("div");
    nameDiv.textContent = `Name: ${name}`;
    const emailDiv = document.createElement("div");
    emailDiv.textContent = `Email: ${email}`;
    const phoneDiv = document.createElement("div");
    phoneDiv.textContent = `Phone: ${phone}`;

    // -------------

    newDiv.append(nameDiv, emailDiv, phoneDiv);
    output.appendChild(newDiv);
  });
}

function reloadData() {
  output.innerHTML = "";
  output.innerHTML = `<div class="card">
        <div class="skeleton" style="width: 80%"></div>
        <div class="skeleton" style="width: 60%"></div>
        <div class="skeleton" style="width: 90%"></div>
      </div>`;

  dataToShow();
}

async function dataToShow() {
  try {
    let responce = await fetch("https://jsonplaceholder.typicode.com/users");

    if (responce.status === 200) {
      let data = await responce.json();
      cardCreation(data);
      console.log(data);
    } else {
      throw new Error("Problem in Fetching data");
    }
  } catch (err) {
    console.log(err);
  } finally {
    console.log("Final Execute.");
  }
}
