const circleIcons = document.querySelectorAll(".circle-icon");

window.addEventListener("load", () => {
  circleIcons.forEach((icon) => {
    icon.classList.add("active");
  });
});

fetch("https://baconipsum.com/api/?type=lucky")
  .then((response) => response.json())
  .then((data) => {
    console.log(typeof data);
    JSON.stringify(data[1]);

    const description = data[1].match(/^([\w]+\b[\W]*){1,14}/)[0]; // получаем первый элемент массива с описанием
    const descriptionElem = document.querySelector(".paragraph"); // получаем элемент, в который будем добавлять описание
    descriptionElem.textContent = description; // добавляем описание в элемент
  })
  .catch((error) => console.log(error));
