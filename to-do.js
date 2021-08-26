const inputBox = document.querySelector(".inputfield");
const addBtn = document.querySelector(".inputfield button ");

inputBox.onkeyup = ()=>{
let userData = inputBox.Value;
if(userData.trim() !=0){
    addBtn.classList.add("active");
}else{
    addBtn.classList.remove("active");
}

}
addBtn.onclick = ()=>{
    let userData = inputBox.Value;
    let getlocalStorage = localStorage.getItem("New Todo");
    if(getlocalStorage == null){
        listArr = [];
    }else{
    listArr = JSON.parse(getlocalStorage);
    }
    listArr.push(userData);
    localStorage.setItem("New Todo",JSON.parse(listArr));
}