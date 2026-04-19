// 



// var name 


const slides = document.querySelectorAll(".slide")
const dots = document.querySelectorAll(".dot")
const next = document.querySelector(".next")
const prev = document.querySelector(".prev")
const slider = document.querySelector(".slider")
const header =document.getElementsByTagName("header")[0]

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




//STICKY HEADER
window.addEventListener("scroll",()=> {
  if(window.scrollY > 100){
   header.classList.add("sticky");
  }
  else{header.classList.remove("sticky")}
})





// mobile menu
const hamburger =document.querySelector(".hamburger")
const navLinks =document.querySelector(".menu");

hamburger.addEventListener("click", () =>{
  navLinks.classList.toggle("show")
})





const playbtn =document.getElementById('playbtn')
const modal=document.getElementById("videomodal")
const closebtn=document.getElementById("closebtn")
const iframe =document.getElementById(VideoFrame)


const videoURL ="https://www.youtube.com/embed/tljlOlMiYZU?si=6vxn0aPZZ1qbjC4t"

playbtn.oneclick =() =>  {
  modal.style.display ="block"
  iframe.src =videoURL;
}

closebtn.oneclick =() =>  {
  modal .style.display ="none"
  iframe.src ="";
}


windows.oneclick =() =>  {
  if(e.target == modal){
    modal.style.display ="none"
    iframe.src="";
  }
}
