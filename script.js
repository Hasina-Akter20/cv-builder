// pp size photo
const image_input = document.querySelector("#image_input");
var uploaded_image = "";

image_input.addEventListener("change", function () {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    uploaded_image = reader.result;
    // document.querySelector(
    //   "#display_image"
    // ).style.backgroundImage = `url(${uploaded_image})`;
    document
      .getElementById("display_image")
      .setAttribute("src", uploaded_image);
  });
  reader.readAsDataURL(this.files[0]);
});

// signature image
const signature_input = document.querySelector("#signature_input");
var uploaded_image02 = "";

signature_input.addEventListener("change", function () {
  // pp size photo
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    uploaded_image02 = reader.result;
    // document.querySelector(
    //   "#signature_image"
    // ).style.backgroundImage = `url(${uploaded_image})`;
    document
      .getElementById("signature_image")
      .setAttribute("src", uploaded_image02);
  });
  reader.readAsDataURL(this.files[0]);
});
// //image adding
// const image_adding = document.querySelector("#image_adding");
// var adding_image = "";

// image_adding.addEventListener("change", function () {
//   const reader = new FileReader();
//   reader.addEventListener("load", () => {
//     adding_image = reader.result;
//     console.log(adding_image);
//     document.getElementById("image-change").setAttribute("src", adding_image);
//   });
//   reader.readAsDataURL(this.files[0]);
// });

// pdf generator
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

// print cv
function printCV() {
  document.getElementById("input-div").style.display = "none";
  window.print();
}
