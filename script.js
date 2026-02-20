let btn1 = document.querySelector("#one");
let btn2 = document.querySelector("#two");
let divq = document.querySelector(".divq");

const keyboardKeys = [
  { srNo: 1, code: "KeyC", audio: "./28.mp3" },
  { srNo: 2, code: "KeyD", audio: "./29.mp3" },
  { srNo: 3, code: "KeyE", audio: "./30.mp3" },
  { srNo: 4, code: "KeyF", audio: "./31.mp3" },
  { srNo: 5, code: "KeyG", audio: "./32.mp3" },
  { srNo: 6, code: "KeyA", audio: "./33.mp3" },
  { srNo: 7, code: "KeyB", audio: "./34.mp3" },

  { srNo: 8, code: "Digit1", audio: "./35.mp3" },
  { srNo: 9, code: "Digit2", audio: "./36.mp3" },
  { srNo: 10, code: "Digit3", audio: "./37.mp3" },
  { srNo: 11, code: "Digit4", audio: "./38.mp3" },
  { srNo: 12, code: "Digit5", audio: "./39.mp3" }
];

let ispianoactive = false;

btn1.addEventListener("click",()=>{
  console.log("Piano Ready 🎹");
  ispianoactive = true;
});
document.body.addEventListener("keydown", (event) => {
  
  if(!ispianoactive) return;
  const key = keyboardKeys.find(k => k.code === event.code);

  // keyboardKeys ek array hai jisme saare piano keys ka data hai.
  // .find() array ke andar search karta hai.
  // k => k.code === event.code ka matlab:
  // Har object ko check karo
  // Agar uska code (jaise "KeyC")
  // event.code (jo actual keyboard se press hua hai) ke equal ho
  // Toh us object ko return kar do
  // Simple words mein:
  // "Jo key press hui hai, uska matching object array se dhoondo."
  // Agar match mil gaya toh key mein object aa jayega.
  // Agar nahi mila toh key = undefined.

  if (key) {
    // Yeh check karta hai ki match mila ya nahi.
    // Agar mila (matlab key empty nahi hai), tab hi aage ka code chalega.
    const sound = new Audio(key.audio);
    // Jo object mila tha usme audio property hai (jaise "./28.mp3").
    // Us file ka ek naya Audio object bana diya.
    // Jo key press hui thi, uska sound load karo
    sound.currentTime = 0; // allows rapid pressing

    // Iska matlab hai audio ko start se play karo.
    // Agar tum ek hi key ko jaldi jaldi dabao, toh sound properly repeat hoga.
    // Agar yeh nahi lagate toh kabhi kabhi sound cut ho sakta tha.

    sound.play();
    // Bas sound play kar do 🎵
  }
});


btn2.addEventListener("click",()=>{
  console.log("piano cannot be played.");
  ispianoactive = false;
  btn1.disabled = true;
  btn2.disabled = true;
});

