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

  // call functions to log and show the books
  consoleLogTexture();
  showTexture();
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
    textureType.forEach((type) => {
      if (type == "blanket") {
        // display blanket images
        var textureImg = document.createElement("img");
        textureImg.classListadd('blanket-img');
        textureImg.src = texture.fields.image[0].url;
        document.querySelector(".cloth").appendChild();
      }
    })
  });
}
