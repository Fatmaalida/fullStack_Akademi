// alert("merhaba dünya") ;

// console.log("merhaba dünya") ; 
// konsolda gözükür sayfada gözükmez

// prompt bize input açar

// let isim= prompt("isminizi giriniz");
// document.write(isim);


function hesapla(){
    let boy = prompt("boyunuzu giriniz");
    let kilo = prompt("kilonuzu giriniz");
    let sonuc = (kilo/(boy*boy))*10000;


    let endexresult = document.getElementById("endexresult");
    let endextext= document.getElementById("endextext");
    let endeximg= document.getElementById("endeximg");

    endexresult.innerHTML = "sonuç :" + sonuc.toFixed(2);

    // tofixed sayıyı iki basamaklı şekilde yuvarlar 10,525=11

    endeximg.style.width = "250px";


    if (sonuc< 18.5){
        endextext.innerHTML = "zayıf";
        endeximg.src = "./zayif.png";
        endextext.style.color="purple";
    }else if(sonuc<25){
        endextext.innerHTML = "normal";
        endeximg.src = "./normal.png";
        endextext.style.color="green";
    }else if(sonuc < 30){
        endextext.innerHTML = "fazla kilolu";
        endeximg.src = "./kilolu.png";
        endextext.style.color="orange";
    }else{
        endextext.innerHTML = "obez";
        endeximg.src = "./obez.png";
        endextext.style.color="red";
    }
    

}

