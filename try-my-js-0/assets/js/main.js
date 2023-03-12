const CENTER = 50;
const X_SHIFT = 12.5;
const Y_SHIFT = 18.75;

const containerEl = document.querySelector(".container");

const qhexElement = document.createElement("div");
qhexElement.classList.add("qhex");

const hexElement1 = document.createElement("div");
hexElement1.classList.add("hex");
hexElement1.style.top = CENTER + 0 * X_SHIFT + "%";
hexElement1.style.left = CENTER + 0 * Y_SHIFT + "%";
hexElement1.innerText = "1";
qhexElement.append(hexElement1);

const hexElement2 = document.createElement("div");
hexElement2.classList.add("hex");
hexElement2.style.top = CENTER + -2 * X_SHIFT + "%";
hexElement2.style.left = CENTER + 0 * Y_SHIFT + "%";
hexElement2.innerText = "2";
qhexElement.append(hexElement2);

const hexElement3 = document.createElement("div");
hexElement3.classList.add("hex");
hexElement3.style.top = CENTER + -1 * X_SHIFT + "%";
hexElement3.style.left = CENTER + 1 * Y_SHIFT + "%";
hexElement3.innerText = "3";
qhexElement.append(hexElement3);

const hexElement4 = document.createElement("div");
hexElement4.classList.add("hex");
hexElement4.style.top = CENTER + 1 * X_SHIFT + "%";
hexElement4.style.left = CENTER + 1 * Y_SHIFT + "%";
hexElement4.innerText = "4";
qhexElement.append(hexElement4);

const hexElement5 = document.createElement("div");
hexElement5.classList.add("hex");
hexElement5.style.top = CENTER + 2 * X_SHIFT + "%";
hexElement5.style.left = CENTER + 0 * Y_SHIFT + "%";
hexElement5.innerText = "5";
qhexElement.append(hexElement5);

const hexElement6 = document.createElement("div");
hexElement6.classList.add("hex");
hexElement6.style.top = CENTER + 1 * X_SHIFT + "%";
hexElement6.style.left = CENTER - 1 * Y_SHIFT + "%";
hexElement6.innerText = "6";
qhexElement.append(hexElement6);

const hexElement7 = document.createElement("div");
hexElement7.classList.add("hex");
hexElement7.style.top = CENTER - 1 * X_SHIFT + "%";
hexElement7.style.left = CENTER - 1 * Y_SHIFT + "%";
hexElement7.innerText = "7";
qhexElement.append(hexElement7);

const hexElement8 = document.createElement("div");
hexElement8.classList.add("hex");
hexElement8.style.top = CENTER + -4 * X_SHIFT + "%";
hexElement8.style.left = CENTER + 0 * X_SHIFT + "%";
hexElement8.innerText = "8";
qhexElement.append(hexElement8);

const hexElement9 = document.createElement("div");
hexElement9.classList.add("hex");
hexElement9.style.top = CENTER - 3 * X_SHIFT + "%";
hexElement9.style.left = CENTER + 1 * Y_SHIFT + "%";
hexElement9.innerText = "9";
qhexElement.append(hexElement9);

const hexElement10 = document.createElement("div");
hexElement10.classList.add("hex");
hexElement10.style.top = CENTER - 2 * X_SHIFT + "%";
hexElement10.style.left = CENTER + 3 * X_SHIFT + "%";
hexElement10.innerText = "10";
qhexElement.append(hexElement10);

const hexElement11 = document.createElement("div");
hexElement11.classList.add("hex");
hexElement11.style.top = CENTER + 0 * X_SHIFT + "%";
hexElement11.style.left = CENTER + 2 * Y_SHIFT + "%";
hexElement11.innerText = "11";
qhexElement.append(hexElement11);

const hexElement12 = document.createElement("div");
hexElement12.classList.add("hex");
hexElement12.style.top = CENTER + 2 * X_SHIFT + "%";
hexElement12.style.left = CENTER + 2 * Y_SHIFT + "%";
hexElement12.innerText = "12";
qhexElement.append(hexElement12);

const hexElement13 = document.createElement("div");
hexElement13.classList.add("hex");
hexElement13.style.top = CENTER + 3 * X_SHIFT + "%";
hexElement13.style.left = CENTER + 1 * Y_SHIFT + "%";
hexElement13.innerText = "13";
qhexElement.append(hexElement13);

const hexElement14 = document.createElement("div");
hexElement14.classList.add("hex");
hexElement14.style.top = CENTER + 4 * X_SHIFT + "%";
hexElement14.style.left = CENTER + 0 * Y_SHIFT + "%";
hexElement14.innerText = "14";
qhexElement.append(hexElement14);

const hexElement15 = document.createElement("div");
hexElement15.classList.add("hex");
hexElement15.style.top = CENTER + 3 * X_SHIFT + "%";
hexElement15.style.left = CENTER + -1 * Y_SHIFT + "%";
hexElement15.innerText = "15";
qhexElement.append(hexElement15);

const hexElement16 = document.createElement("div");
hexElement16.classList.add("hex");
hexElement16.style.top = CENTER + 2 * X_SHIFT + "%";
hexElement16.style.left = CENTER + -2 * Y_SHIFT + "%";
hexElement16.innerText = "16";
qhexElement.append(hexElement16);

const hexElement17 = document.createElement("div");
hexElement17.classList.add("hex");
hexElement17.style.top = CENTER + 0 * X_SHIFT + "%";
hexElement17.style.left = CENTER + -2 * Y_SHIFT + "%";
hexElement17.innerText = "17";
qhexElement.append(hexElement17);

const hexElement18 = document.createElement("div");
hexElement18.classList.add("hex");
hexElement18.style.top = CENTER + -2 * X_SHIFT + "%";
hexElement18.style.left = CENTER + -2 * Y_SHIFT + "%";
hexElement18.innerText = "18";
qhexElement.append(hexElement18);

const hexElement19 = document.createElement("div");
hexElement19.classList.add("hex");
hexElement19.style.top = CENTER + -3 * X_SHIFT + "%";
hexElement19.style.left = CENTER + -1 * Y_SHIFT + "%";
hexElement19.innerText = "19";
qhexElement.append(hexElement19);

containerEl.append(qhexElement);
