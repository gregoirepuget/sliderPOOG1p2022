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

    
  }
}
