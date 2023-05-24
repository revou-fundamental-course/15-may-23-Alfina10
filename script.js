function hitungLuas(){
    let sisiLuas = document.getElementById("sisiLuas").value;
    let hitungLuas = sisiLuas*sisiLuas;
    document.getElementById("outputLuas").innerHTML= "S X S " + "<br />" + sisiLuas + " X " + sisiLuas + "<br />" + hitungLuas;
}

function resetLuas(){
    document.getElementById("sisiLuas").value="0";
    document.getElementById("outputLuas").innerHTML= "";
}

function hitungKeliling(){
    let sisiKeliling = document.getElementById("sisiKeliling").value;
    let jumlahSisi = "4"
    let hitungKeliling = jumlahSisi*sisiKeliling;
    document.getElementById("outputKeliling").innerHTML= "4 X S " + "<br />" + "4 X " + sisiKeliling + "<br />" + hitungKeliling;
}

function resetKeliling(){
    document.getElementById("sisiKeliling").value="0";
    document.getElementById("outputKeliling").innerHTML= "";
}