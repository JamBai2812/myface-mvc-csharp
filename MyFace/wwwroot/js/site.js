let modal = document.getElementById("myModal");

let btns = document.getElementsByClassName("myBtn"), i , len;

let span = document.getElementsByClassName("close")[0];


for (i = 0, len = btns.length; i < len; i++) {
    btns[i].onclick = function(){
        modal.style.display = "block";
    }
}

span.onclick = function () {
 modal.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};