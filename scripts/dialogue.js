/* document.querySelector(".theBox").addEventListener("mouseOver", () => {
    document.querySelector(".unorderedList").classList.add("visible")
    document.querySelector(".unorderedList").classList.remove("invisible")
    
})

const borderColorChange = () => {
  const travelTips = document.querySelectorAll("ul")
  

  for (const ul of travelTips) {
      ul.addEventListener(
          "mouseover",
          (theMouseOverEvent) => {
              ul.style.display ="block";
          }
      )


      ul.addEventListener("mouseout", (theMouseOutEvent) => {
          ul.style.display = "none";
      })
  }



document.querySelector("#myCard").classList.toggle("flip")
*/


document.querySelector("#myCard").classList.toggle("flip")


export default borderColorChange