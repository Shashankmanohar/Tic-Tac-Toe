let Copybtn = document.getElementById('copybtn');
Copybtn.addEventListener('click', Copytext);
function Copytext() {
    let input = document.getElementsByClassName("inputtext");
    if(input !== ""){
        for(i=0; i<input.length; i++){
        input[i].select();
        document.execCommand('copy');
        }
    }else{
        alert("Please enter your text!")
    }
}