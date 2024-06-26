// let random = Math.random();
// 0 ile 1 arasında sayı üretir

// let min = Math.min(1,2,3,4,5); 
// en küçük sayı

// let max = Math.max(1,2,3,4,5);
// en büyük sayı

// let round = Math.round(3.5);
// en yakın sayıya yuvarlar 

 function hesapmakinasi(){
    let hesapmakinasi=document.getElementById("hesapmakinasi");
    hesapmakinasi.style.display="none";
    let hesapmakinasiDurum = false ;
 }

 function hesapla(){

    let inputhesap = document.getElementById("inputhesap");
    let sonuc = eval(inputhesap.value);
    inputhesap.value = sonuc;

 }

 function uyeekle(){
     let uyeler= [
        {
            ad: "Fatma",
            kullanici: "fatma",
            email:"ahmet@gmail.com",
            cinsiyet: "kadın",

        },
        {
            ad: "mehmet",
            kullanici: "mehmet",
            email:"mehmet@gmail.com",
            cinsiyet: "erkek",
        },
        {
            ad: "ada",
            kullanici: "ada",
            email:"ada@gmail.com",
            cinsiyet: "kadın",
          
        }
     ];
 }
let alldata = document.getElementsByClassName("alldata")[0];
    
    // Tablonun içeriğini temizle
    alldata.innerHTML = "";

    for (let i = 0; i < uyeler.length; i++) {
        alldata.innerHTML += `
            <tr>
                <td>${i + 1}</td>
                <td>${uyeler[i].ad}</td>
                <td>${uyeler[i].kullanici}</td>
                <td>${uyeler[i].email}</td>
                <td>${uyeler[i].cinsiyet}</td>
            </tr>
        `;
    }


// "Veri Çek Tümü" butonuna tıklama olayı ekliyoruz
document.querySelector(".gelAll").addEventListener("click", uyeekle);


// let alldata = document.getElementsByClassName("alldata")[0];
    
  
  

//     for (let i = 0; i < uyeler.length; i++) {
//         alldata.innerHTML += `
//             <tr>
//                 <td>${i + 1}</td>
//                 <td>${uyeler[i].ad}</td>
//                 <td>${uyeler[i].kullanici}</td>
//                 <td>${uyeler[i].email}</td>
//                 <td>${uyeler[i].cinsiyet}</td>
//             </tr>
//         `;
//     }


// // Tıklama olayı ekliyoruz
// document.querySelector(".gelAll").addEventListener("click", uyeekle);
// // let alldata3 = document.getElementsByClassName("alldata3")[0];
    
//     // Tablonun içeriğini temizle
//     alldata3.innerHTML = "";

//     for (let i = 0; i < uyeler.length; i++) {
//         alldata3.innerHTML += `
//             <tr>
//                 <td>${i + 1}</td>
//                 <td>${uyeler[i].ad}</td>
//                 <td>${uyeler[i].kullanici}</td>
//                 <td>${uyeler[i].email}</td>
//                 <td>${uyeler[i].cinsiyet}</td>
//             </tr>
//         `;
//     }

//     document.querySelector(".gelAll").addEventListener("click", uyeekle);


// // // Buton tıklama olayını dinle
//  document.querySelector(".gelAll").addEventListener("click", uyeekle);

//   let alldata3 = document.getElementsByClassName("alldata3");  
//     for (let i = 0; i < uyeler.length; i++) {
//                  alldata3[0].innerHTML += 
//          '<tr>';
//         <td>${uyeler[i].ad}</td>;
//         <td>${uyeler[i].ad}</td>;
//                  <td>${uyeler[i].ad}</td>;


// //  }

//  yukarıyı çalıştır üye ekleye tıklandgında uyeler listelensin








// document.addEventListener("DOMContentLoaded", function() {
//  document.querySelector(".btn-basla").addEventListener("click",function () {
//     var yazi ="merhaba sınıf nasılsınız";
//     setTimeout(function(){
//         document.querySelector(".yaz1").innerHTML = yazi;
//     },3000);
// });



//      let sayi=0;
//     document.querySelector(".btn-basla2").addEventListener("click",function () {
//     setInterval(function () {
//         sayi++;
//         document.querySelector(".yaz2").innerHTML=sayi
//     },1000);

// });
// });



// event olayını dinle 

