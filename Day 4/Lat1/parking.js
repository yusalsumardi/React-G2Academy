let listpark = localStorage.listpark ? JSON.parse(localStorage.listpark) : []

document.querySelector(".parksubmit").addEventListener("submit",function(){
    if (this.action.value == "vehiclein"){
        var resultin="";
        var timestampin = new Date(Date.now());
        resultin += timestampin.getFullYear()+"/"+(timestampin.getMonth()+1)+"/"+timestampin.getDate() + 
             " "+ timestampin.getHours()+":"+timestampin.getMinutes()+":"+
             timestampin.getSeconds();
        newpark = {
            platno : this.platno.value,
            vehicle : this.vehicle.value,
            timein : resultin,
            timeout : "",
            payment : "",
            status : "Parking",
            timestampin : timestampin
        }
        listpark.push(newpark);
        localStorage.setItem("listpark", JSON.stringify(listpark));
    } else {
        var resultout="";
        var timestampout = new Date(Date.now());
        resultout += timestampout.getFullYear()+"/"+(timestampout.getMonth()+1)+"/"+timestampout.getDate() + 
             " "+ timestampout.getHours()+":"+timestampout.getMinutes()+":"+
             timestampout.getSeconds();
        var retrievedData = localStorage.getItem("listpark");
        updatedata = JSON.parse(retrievedData);
        let finded = true;
        let msg = "";
        updatedata.forEach(element => {
            if(element.platno == this.platno.value && element.vehicle == this.vehicle.value){
                if(element.status != "Done"){
                    let bill = 0;
                    let int = parseInt(Date.parse(element.timestampin))/1000/60;
                    let outt = parseInt(Date.parse(timestampout))/1000/60;
                    let cur = Math.ceil(outt - int);
                    if(element.vehicle == "Mobil"){
                        if(cur==0){
                            bill = 5000;
                        }else{
                            bill += ((cur-1)*3000)+5000;
                        }      
                    } else{
                        if(cur==0){
                            bill = 3000;
                        }else{
                            bill += ((cur-1)*1000)+3000
                        }  
                    }
                    element.timeout = resultout;
                    element.payment = bill;
                    element.status = "Done";
                    localStorage.setItem("listpark", JSON.stringify(updatedata));
                    alert("No Plat: " + element.platno + "\nTipe Kendaraan: " + element.vehicle + "\nBill: " + bill);
                } else{
                    alert("Gagal! Sudah Dibayar")
                }
            } else{
                // alert("Nomor Kendaraan / Type Kendaraan Salah!")
                finded = false;
                msg = "Nomor Kendaraan / Type Kendaraan Salah!";
            }
        });
        if(finded==false){
            alert(msg);
        }
    }
})


//===================================SHOW TABLE=========================================
var retrievedData = localStorage.getItem("listpark");
var dataass = JSON.parse(retrievedData);
let temprow = "";
dataass.forEach(element => {
temprow += `<tr><td> ${element.platno} </td> <td> ${element.vehicle} </td> <td> ${element.timein} </td> <td> ${element.timeout} </td> <td> ${element.payment} </td> <td> ${element.status} </td></tr>` 
});
document.querySelector("#isi_park").innerHTML=temprow;  