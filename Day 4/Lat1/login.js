let listuser = localStorage.user ? JSON.parse(localStorage.user) : []

newuser = {
    username : "admin",
    password : "adminpass"
}

newuser2 = {
    username : "yusal",
    password : "yusalpass"
}

listuser.push(newuser);
listuser.push(newuser2);

localStorage.setItem("user", JSON.stringify(listuser))

document.querySelector(".login").addEventListener("submit",function(){
    event.preventDefault();
    let status = 0;
    listuser.forEach(element => {
        if (this.username.value == element.username && this.password.value == element.password){
            status = 1;
        }
    });
    if (status == 1){
        alert("Login Berhasil");
        window.location=this.getAttribute("action");
    } else{
        alert("Login Gagal");
    }
})


