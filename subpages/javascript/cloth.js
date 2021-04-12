// console.log("hello, airtable");

// load the airtable library, call it "Airtable";
var Airtable = require("airtable");
// console.log(Airtable);

// use airtable library, connect to our base using API key
var base = new Airtable({ apiKey: "key8wMhiOX4E4uya7" }).base(
  "app2l1JHP3YeCuS6P"
);

//get the "texture" table from the base, select ALL the records, and specify the functions that will receive the data
base("comfy").select({}).eachPage(gotPageOfTexture, gotAllTexture);

// an empty array to hold our texture data
const texture = [];

// callback function that receives our data
function gotPageOfTexture(records, fetchNextPage) {
  console.log("gotPageOfTexture()");
  // add the records from this page to our texture array
  texture.push(...records);
  // request more pages
  fetchNextPage();
}

// call back function that is called when all pages are loaded
function gotAllTexture(err) {
  console.log("gotAllTexture()");

  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading texture");
    console.error(err);
    return;
  }

  // call functions to log and show the texture
  consoleLogTexture();
  try {
    showTexture();
  } catch (e) {
    console.error(e);
  }
}

// just loop through the texture and console.log them
function consoleLogTexture() {
  console.log("consoleLogTexture()");
  texture.forEach((texture) => {
    console.log("Texture:", texture);
  });
}

// loop through the texture, create element
function showTexture() {
  console.log("showTexture()");
  texture.forEach((texture) => {
    // var textureImg = document.createElement("img");
    // textureImg.src = texture.fields.image[0].url;
    // document.body.append(textureImg);

    // var textureColor = document.createElement("p");
    // textureColor.innerText = texture.fields.color;
    // document.body.append(textureColor);

    // var textureMat = document.createElement("p");
    // textureMat.innerText = texture.fields.material;
    // document.body.append(textureMat);

    var textureType = texture.fields.type;
    if (textureType == "Cloth") {
      // create new div
      var textureContainer = document.createElement("div");
      textureContainer.classList.add("texture-container");
      document.querySelector(".container").append(textureContainer);

      // display blanket images
      var textureImg = document.createElement("img");
      textureImg.classList.add("texture-image");
      textureImg.classList.add("js-modal-toggle");
      textureImg.src = texture.fields.image[0].url;
      textureContainer.appendChild(textureImg);

      // display type
      var textureType = document.createElement("h1");
      textureType.innerText = texture.fields.type;
      textureContainer.appendChild(textureType);

      // display color
      var textureColor = document.createElement("p");
      textureColor.innerText = texture.fields.color;
      textureContainer.appendChild(textureColor);

      // display material
      var textureMat = document.createElement("p");
      textureMat.innerText = texture.fields.material;
      textureContainer.appendChild(textureMat);

      // add modal container 
      var modalContainer = document.createElement("div");
      modalContainer.classList.add("modal-container");
      textureContainer.append(modalContainer);

      // add modal box to the modal container
      var modalBox = document.createElement("div");
      modalBox.classList.add("modal-box");
      modalContainer.append(modalBox);

      // add image to modal box
      var modalImage = document.createElement("img");
      modalImage.classList.add("modal-image");
      modalImage.src = texture.fields.image[0].url;
      modalBox.append(modalImage);

      // add a close button to our modal
      var closeModalBtn = document.createElement("div");
      closeModalBtn.classList.add("modal-close-btn");
      closeModalBtn.classList.add("js-modal-toggle");
      closeModalBtn.innerHTML = "Close";
      modalBox.append(closeModalBtn);
    }
  });

  // close and open modal
  // find all of our modals
  var modals = document.querySelectorAll(".texture-container");

  // check if there are any modals
  if (modals) {
    modals.forEach((modal) => {

        var toggles = modal.querySelectorAll(".js-modal-toggle");

        // add event listener to each toggle, to hid and show modal
        toggles.forEach((toggle) => {
            
            toggle.addEventListener("click", function() {
                modal.classList.toggle("modal-is-active");
            })

        })
    })
  }
}

let backBtn = document.querySelector(".backbtn")
let black = document.querySelector(".black")


function remOpq() {
    black.classList.remove("opq");
}

function addOpq() {
  black.classList.add("opq");
}



setTimeout(function(){
  remOpq()
}, 300);

backBtn.addEventListener("click", function() {
  
  // run the addOpg function first
  addOpq();
  
  // set a delay of 400ms (or change to whatver you want, then redirect to cloth page
   setTimeout(function(){
     window.location.href = "../index.html";
   }, 400);
});
