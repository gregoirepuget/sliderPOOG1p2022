class HeticSlider{
  constructor(container, speed, arrow, pagination){
    this.container = document.querySelector(container)
    this.containerSlider
    this.speed = speed
    this.transition = "ease-in"
    this.arrow = arrow
    this.pagination = pagination
    this.currentImage = 0
    this.shift = new Array()
    this.leftArrow
    this.rightArrow

    this.init();
  }

  init(){

    let images = this.container.querySelectorAll("img");
    console.log(images);

    this.shift.push(0);
    for(let i=0; i< images.length-1; i++)
    {
      let imageLength = images[i].offsetWidth;
      this.shift.push(imageLength+this.shift[this.shift.length-1])
    }
    console.log(this.shift)

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

      this.rightArrow.addEventListener(
        "click",
        function(e)
        {
          e.preventDefault()
          _this.currentImage++
          _this.setPosition()
        }
      );
    }
  }

  setPosition(){
    let position = - this.shift[this.currentImage];
    this.containerSlider.style.transform =`translateX(${position}px)`
  }
}
