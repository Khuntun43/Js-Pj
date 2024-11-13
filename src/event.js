
    // Selector
const heading = document.querySelector("#heading");
const textInput = document.querySelector("#textInput");
// process function
  const handleClick = () => {
  console.log("U click");
};

// heading.addEventListener("mouseout", handleClick);
const handleKeyup = ()=>{
  console.log("U keyup");
}
textInput.addEventListener("keyup", handleKeyup);

const handleFocus = () => {
  console.log("U focus");
}

const handleBlur= () => {
  console.log("U blur");
}

textInput.addEventListener("focus", handleFocus);


textInput.addEventListener("blur", handleBlur);