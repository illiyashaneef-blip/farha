// 



// var name 


const slides = document.querySelectorAll(".slide")
const dots = document.querySelectorAll(".dot")
const next = document.querySelector(".next")
const prev = document.querySelector(".prev")
const slider = document.querySelector(".slider")

// next & prev
next.addEventListener("click", () => {
    stopAutoSlide();
    index =(index + 1) % slides.length;
    showSlide(index)
    startAutoSlide()
})


  let index=0
  let autoSlide;

  function showSlide(i){
    slides.forEach(slide => slide.classList.remove("active"))
    dots.forEach(dot=> dot.classList.remove("active"))

  slides[i].classList.add("active")
   dots[i].classList.add("active")
  
  }


function startAutoSlide(){
       autoSlide =setInterval(()=> {
       index =(index + 1)% slides.length;
       showSlide(index);

       }, 5000)


}



function stopAutoSlide(){
    clearInterval(autoSlide)
}


 
startAutoSlide();
