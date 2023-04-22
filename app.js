const sections = document.querySelectorAll(".section")
const sectBtns = document.querySelectorAll(".controls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");


function PageTransition(){
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener("click", function(){
            let currentBtn = document.querySelectorAll(".active-btn");
            currentBtn[0].className = currentBtn[0].className.replace("active-btn", "");
            this.className += " active-btn";
        })
    }

    allSections.addEventListener("click", (e)=>{
        const id = e.target.dataset.id;
        if(id){
            sectBtns.forEach((btn)=>{
                btn.classList.remove("active");
            })
            e.target.classList.add("active");
            
            sections.forEach((section)=>{
                section.classList.remove("active");
            })

            const element = document.getElementById(id);
            element.classList.add("active");
        }

    })
    const Themebtn = document.querySelector(".theme-btn");
    Themebtn.addEventListener("click", ()=>{
        let element = document.body;
        element.classList.toggle("light-mode");
    })

    var audio = document.getElementById('audio');
    var isPlaying = false;
    const Themebtn2 = document.querySelector(".theme-btn-2");
    Themebtn2.addEventListener("click", ()=>{
        // let element = document.getElementById('music');
        if(isPlaying == false){
            console.log("True hora");
            audio.play()
            isPlaying = true;
        }
        else {
            console.log("false hora");
            audio.pause()
            isPlaying = false;
            console.log(isPlaying)
        }
        // element.classList.toggle("fas fa-pause");
    })
}

PageTransition();