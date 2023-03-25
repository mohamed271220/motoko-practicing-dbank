//the declations is the export folder
import { dbank } from "../../declarations/dbank";

window.addEventListener("load", async function () {
  // console.log('idk');
  // document.getElementById("value").innerText= Math.round(currentAmout*100)/100; or
  update();
});

document.querySelector("form").addEventListener("submit", async function (ev) {
  ev.preventDefault();
  // console.log("Submitted");
  const button = ev.target.querySelector("#submit-btn");
  button.setAttribute("disabled", true);
  const inputAmount = parseFloat(document.getElementById("input-amount").value);
  const outputAmount = parseFloat(
    document.getElementById("withdrawal-amount").value
  );
  if (document.getElementById("input-amount").value.length != 0) {
    await dbank.topUp(inputAmount);
  }
  if (document.getElementById("withdrawal-amount").value.length != 0) {
    await dbank.withdraw(outputAmount);
  }

  await dbank.compound();
  update();
  document.getElementById("input-amount").value = "";
  document.getElementById("withdrawal-amount").value = "";
  button.removeAttribute("disabled");
});

async function update() {
  const currentAmout = await dbank.checkBalance();
  document.getElementById("value").innerText = currentAmout.toFixed(2);
}
