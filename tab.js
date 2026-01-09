const tabs = document.querySelector(".tabs");
const btns = document.querySelectorAll(".button");
const content = document.querySelectorAll(".content");

tabs.addEventListener("click", function(e){
    const id=e.target.dataset.id;
    if(id){
        //remove selected from other buttons
        btns.forEach(function(btn){
            btn.classList.remove("live");
        });
        e.target.classList.add("live");
        //hide other contents
        content.forEach(function(content){
            content.classList.remove("live");
        });

        //find element with same id name as dataset id. 
        const element = document.getElementById(id);
        element.classList.add("live");
    }
})