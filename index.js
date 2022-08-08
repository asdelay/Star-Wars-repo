const dropZone = document.getElementById("dropZone");
const success = document.querySelector(".success");
const error = document.querySelector(".error");
let file;

dropZone.addEventListener("dragover", (event)=>{
    event.preventDefault();
    dropZone.classList.add("active_drag_drop");
});
dropZone.addEventListener("dragleave", (event)=>{
    event.preventDefault();
    dropZone.classList.remove("active_drag_drop");
});

dropZone.addEventListener("drop", (event)=>{
    event.preventDefault();
    file = event.dataTransfer.files[0];
    if(file.type === "application/json"){
        success.classList.add("visibility");
        console.log("thisisa json file");
    } else {
        error.classList.add("visibility");
        console.log("thisisnot a json file");
    }
});