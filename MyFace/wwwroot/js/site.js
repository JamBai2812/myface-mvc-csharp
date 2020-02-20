//Removing posts


// function removeElement(event) {
//     event.target.remove();
//     event.preventDefault();
// }
//
// function deletePost(event) {
//     const clickedElement = event.target;
//     const closestPost = clickedElement.closest(".post");
//     closestPost.remove();
//     event.preventDefault();
// }
//
// document.addEventListener("click", deletePost);



//Modal popup for Creating post

let modal = document.getElementById("myModal");

let btns = document.getElementsByClassName("myBtn"), i, len;

let span = document.getElementsByClassName("close")[0];

for (i = 0, len = btns.length; i < len; i++) {
    btns[i].onclick = function (event) {
        console.log(event);
        event.preventDefault();
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


// let userModals = document.getElementsByClassName("");
// let j, y;
// for (j = 0, y = userModals.length; i < len; i++) {
//     userModals[j].onclick = function(event){
//         console.log(event);
//         userModals[j].style.display = "block";
//     }
// }

//Creating modal popups for individual users.

// window.onload = function(){
//     let userModals = document.querySelectorAll(".modal,.tester");
//
//     let firstName = document.querySelectorAll(".firstName"), j, y;
//
//     let span2 = document.getElementsByClassName("close")[0];
//
//     for (j = 0, y = userModals.length; j < y; j++) {
//         firstName[j].onclick = function (event) {
//             console.log(event);
//             event.preventDefault();
//             console.log("User Modals:" + userModals[j]);
//             console.log("FirstNames:"+ firstName[j]);
//             /*userModals[j].style.display = "block";*/
//         }
//     }
//
//     span2.onclick = function () {
//         userModals.style.display = "none";
//     };
//
//     window.onclick = function (event) {
//         if (event.target == userModals) {
//             userModals.style.display = "none";
//         }
//     };
// };




