//EVENTI IN JAVASCRIPT

const funzioneButton = function (e) {
  console.log("QUESTA É UNA PROVA PER IL BUTTON", e);
};

//metodo 2
//creo il button

const newButton = document.createElement("button");

newButton.innerText = "CLICK";

const div = document.getElementById("secondDiv");

newButton.onclick = function () {
  console.log("click 2");
};

div.appendChild(newButton);
