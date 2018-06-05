class HeticSlider{
  constructor(container, speed, arrow, pagination){
    this.container = document.querySelector(container)
    this.containerSlider
    this.speed = speed
    this.transition = "ease-in"
    this.arrow = arrow
    this.pagination = pagination
    this.currentImage = 0
    this.leftArrow
    this.rightArrow

    this.init();
  }

  init(){
    this.containerSlider = document.createElement("div")
    this.containerSlider.classList.add("sliderContainer")
    this.containerSlider.innerHTML = this.container.innerHTML

    this.container.innerHTML =''
    this.container.appendChild(this.containerSlider)
    this.container.classList.add("heticSlider")

    if(this.arrow)
    {
      this.leftArrow = document.createElement("a")
      this.leftArrow.setAttribute("href","#")
      this.leftArrow.classList.add("leftArrow")
      this.container.appendChild(this.leftArrow)

      let _this = this

      this.leftArrow.addEventListener(
        "click",
        function(e)
        {
          e.preventDefault()
          _this.currentImage--
          _this.setPosition()
        }
      );

      this.rightArrow = document.createElement("a")
      this.rightArrow.setAttribute("href","#")
      this.rightArrow.classList.add("rightArrow")
      this.container.appendChild(this.rightArrow)
    }
  }

  setPosition(){
    console.log("Ca marche !")
  }
}
