// pp size photo

const image_input = document.querySelector("#image_input");
var uploaded_image = "";

image_input.addEventListener("change", function () {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    uploaded_image = reader.result;
    document.querySelector(
      "#display_image"
    ).style.backgroundImage = `url(${uploaded_image})`;
  });
  reader.readAsDataURL(this.files[0]);
});
// signature image
const signature_input = document.querySelector("#signature_input");
var uploaded_image = "";

signature_input.addEventListener("change", function () {
  // pp size photo
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    uploaded_image = reader.result;
    document.querySelector(
      "#signature_image"
    ).style.backgroundImage = `url(${uploaded_image})`;
  });
  reader.readAsDataURL(this.files[0]);
});

function generatePDF() {
  const element = document.getElementById("invoice");
  html2pdf().from(element).save();
}

function onSubmit(inputValue, outputValue) {
  const cellNumber = document.getElementById(inputValue).value;
  document.getElementById(outputValue).innerText = cellNumber;
}
// function setImage(event) {
//   const imageSource = document.getElementById("profile-input").value;
//   document
//     .getElementById("profile")
//     .setAttribute("src", URL.createObjectURL(imageSource));

//   console.log(imageSource);
// }
function onCellSubmit() {
  onSubmit("cell-input", "cell-output");
  onSubmit("email-input", "email-output");
  onSubmit("name-input", "name-output");
  onSubmit("name-input", "name-output-2");
  onSubmit("name-input", "name-output-3");
}
