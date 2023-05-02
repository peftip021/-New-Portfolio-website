// header background reveal
const headerBg = () =>{
    const header = document.querySelector(".js-header");
  
    window.addEventListener("scroll", function(){
        if(this.scrollY > 200){
            header.classList.add("bg-reveal");
        }else{
            header.classList.remove("bg-reveal");
        }
    })
  }
  headerBg();