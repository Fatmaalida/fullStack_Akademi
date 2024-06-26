


function hesapla(){
    let usergender = prompt("cinsiyetinizi giriniz");
    let boy = prompt("boyunuzu giriniz");
    let kilo = prompt("kilonuzu giriniz");
    let sonuc = (kilo/(boy*boy))*10000;


    let endexresult = document.getElementById("endexresult");
    let endextext= document.getElementById("endextext");
    let endeximg= document.getElementById("endeximg");
    let genderDisplay = document.getElementById("gender");

    endexresult.innerHTML = "sonuç :" + sonuc.toFixed(2);

    // tofixed sayıyı iki basamaklı şekilde yuvarlar 10,525=11
    genderDisplay.innerHTML = " Gender: " + usergender;

    endeximg.style.width = "250px";

    if(usergender == "male"){
        if(sonuc < 18){
            endexresult.innerHTML =  sonuc.toFixed(2);
            endextext.innerHTML = "zayıf";
            endeximg.src = "./zayif.png";
        }else if(sonuc <25){
            endexresult.innerHTML =  sonuc.toFixed(2);
            endextext.innerHTML = "normal";
            endeximg.src = "./normal.png";
        }else if(sonuc>30){
            endexresult.innerHTML =  sonuc.toFixed(2);
            endextext.innerHTML = "fazla kilolu";
            endeximg.src = "./kilolu.png";
        }else{
            endexresult.innerHTML =  sonuc.toFixed(2);
            endextext.innerHTML = "obez";
            endeximg.src = "./obez.png";
        }
       
    }else if (usergender=="female"){
        if(sonuc < 16){
            endexresult.innerHTML =  sonuc.toFixed(2);
            endextext.innerHTML = "zayıf";
            endeximg.src = "./zayif.png";
        }else if(sonuc<22){
            endexresult.innerHTML =  sonuc.toFixed(2);
            endextext.innerHTML = "normal";
            endeximg.src = "./normal.png";
        }else if(sonuc<32){
            endexresult.innerHTML =  sonuc.toFixed(2);
            endextext.innerHTML = "fazla kilolu";
            endeximg.src = "./kilolu.png";
        }else{
            endexresult.innerHTML =  sonuc.toFixed(2);
            endextext.innerHTML = "obez";
            endeximg.src = "./obez.png";
        }
        
    }else {

        alert("Please select male or female.");
       
    }


  

}
