// const modalText = ok() => {

//     const modal = document.querySelector("")
// }

const buttonAbrir = document.querySelector("#abrirModal");
const buttonFechar = document.querySelector("#fecharModal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {


    modal.classList.toggle("hide");
    fade.classList.toggle("hide");

};


[buttonAbrir, buttonFechar, fade].forEach((element) => {
    element.addEventListener("click", () => toggleModal());
});




// buttonOpen.onclick = function ok(){

//     modal.showModal()

// }

// buttonClose.onclick = function (){
//     modal.close()
// }
