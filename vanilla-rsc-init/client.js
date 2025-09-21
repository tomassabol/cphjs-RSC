/* eslint-disable */
// @ts-nocheck

const catNames = [
  "Bella",
  "Milo",
  "Lily",
  "Oscar",
  "Pumpkin",
  "Leo",
  "Maple",
  "Moonie",
];

async function onClick() {
  const index = Math.floor(Math.random() * catNames.length);
  const catName = catNames[index];
  document.body.innerText = catName;
}
