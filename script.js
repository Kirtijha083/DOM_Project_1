let isStatus = document.querySelector("h5");

let addFrnd = document.querySelector("#add");

let remove = document.querySelector("#remove");

addFrnd.addEventListener("click", () =>{
    isStatus.innerHTML = "Friends";
    isStatus.style.color = "green";
});

remove.addEventListener("click", () =>{
    isStatus.innerHTML = "Stranger";
    isStatus.style.color = "red";
});
