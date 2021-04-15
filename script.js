// declare variable for all buttons
let blanket = document.querySelector(".blanket")
let cloth = document.querySelector(".cloth")
let collection = document.querySelector(".collection")
let knit = document.querySelector(".knit")
let landscape = document.querySelector(".landscape")
let liquid = document.querySelector(".liquid")
let pillowcase = document.querySelector(".pillowcase")
let pleats = document.querySelector(".pleats")
let pompom = document.querySelector(".pompom")

// declare variable for black overlay
let black = document.querySelector(".black")

// function for adding class "opq"
function addOpq() {
    black.classList.add("opq");
  }

  // transition from past page
  function remOpq() {
    black.classList.remove("opq");
}

setTimeout(function(){
    remOpq()
}, 100);

  // blanket
  function blanketRight() {
    blanket.classList.add("right");
  }
  
  blanket.addEventListener("click", blanketRight);

  blanket.addEventListener("click", function() {
    
    // run the addOpg function first
    addOpq();
    
    // set a delay of 2 seconds (or change to whatver you want, then redirect to cloth page
     setTimeout(function(){
       window.location.href = "./subpages/blanket.html";
     }, 400);
  });

// cloth
function clothRight() {
    cloth.classList.add("right");
  }

  cloth.addEventListener("click", clothRight);

  cloth.addEventListener("click", function() {
    
    // run the addOpg function first
    addOpq();
    
    // set a delay of 2 seconds (or change to whatver you want, then redirect to cloth page
     setTimeout(function(){
       window.location.href = "./subpages/cloth.html";
     }, 400);
  });

 // collection
function collectionRight() {
    collection.classList.add("right");
  }

  collection.addEventListener("click", collectionRight);

  collection.addEventListener("click", function() {
    
    // run the addOpg function first
    addOpq();
    
    // set a delay of 2 seconds (or change to whatver you want, then redirect to cloth page
     setTimeout(function(){
       window.location.href = "./subpages/collection.html";
     }, 400);
  });

  // knit
function knitRight() {
    knit.classList.add("right");
  }

  knit.addEventListener("click", knitRight);

  knit.addEventListener("click", function() {
    
    // run the addOpg function first
    addOpq();
    
    // set a delay of 2 seconds (or change to whatver you want, then redirect to cloth page
     setTimeout(function(){
       window.location.href = "./subpages/knit.html";
     }, 400);
  });

  // landscape
function landscapeRight() {
    landscape.classList.add("right");
  }

  landscape.addEventListener("click", landscapeRight);

  landscape.addEventListener("click", function() {
    
    // run the addOpg function first
    addOpq();
    
    // set a delay of 2 seconds (or change to whatver you want, then redirect to cloth page
     setTimeout(function(){
       window.location.href = "./subpages/landscape.html";
     }, 400);
  });

  // liquid
function liquidRight() {
    liquid.classList.add("right");
  }

  liquid.addEventListener("click", liquidRight);

  liquid.addEventListener("click", function() {
    
    // run the addOpg function first
    addOpq();
    
    // set a delay of 2 seconds (or change to whatver you want, then redirect to cloth page
     setTimeout(function(){
       window.location.href = "./subpages/liquid.html";
     }, 400);
  });

  // pillowcase
function pillowcaseRight() {
    pillowcase.classList.add("right");
  }

  pillowcase.addEventListener("click", pillowcaseRight);

  pillowcase.addEventListener("click", function() {
    
    // run the addOpg function first
    addOpq();
    
    // set a delay of 2 seconds (or change to whatver you want, then redirect to cloth page
     setTimeout(function(){
       window.location.href = "./subpages/pillowcase.html";
     }, 400);
  });

  
  // pleats
function pleatsRight() {
    pleats.classList.add("right");
  }

 pleats.addEventListener("click", pleatsRight);

  pleats.addEventListener("click", function() {
    
    // run the addOpg function first
    addOpq();
    
    // set a delay of 2 seconds (or change to whatver you want, then redirect to cloth page
     setTimeout(function(){
       window.location.href = "./subpages/pleats.html";
     }, 400);
  });

   // pompom
function pompomRight() {
    pompom.classList.add("right");
  }

 pompom.addEventListener("click", pompomRight);

  pompom.addEventListener("click", function() {
    
    // run the addOpg function first
    addOpq();
    
    // set a delay of 2 seconds (or change to whatver you want, then redirect to cloth page
     setTimeout(function(){
       window.location.href = "./subpages/pompom.html";
     }, 400);
  });