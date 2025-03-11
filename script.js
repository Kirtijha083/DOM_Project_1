let isStatus = document.querySelector("h5");

let btn = document.querySelector("#add");

// let remove = document.querySelector("#remove"); //this is only for 1st way-->when 2 btn display on page

let check = 0;

btn.addEventListener("click", () =>{
    if(check == 0){
        isStatus.innerHTML = "Friends";
        isStatus.style.color = "green";
        btn.innerHTML = "Remove Friend";
        check = 1;
    }else{
        isStatus.innerHTML = "Stranger";
        isStatus.style.color = "red";
        btn.innerHTML = "Add Friend";
        check = 0;
    }
    
});

// this is only for 1st way-->when 2 btn display on page
// remove.addEventListener("click", () =>{
//     isStatus.innerHTML = "Stranger";
//     isStatus.style.color = "red";
// });
