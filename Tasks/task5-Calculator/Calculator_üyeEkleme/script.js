function hesapmakinasi() {
    let hesapmakinasi = document.getElementById("hesapmakinasi");
    hesapmakinasi.style.display = hesapmakinasi.style.display === "none" ? "block" : "none";
}

function hesapla() {
    let inputhesap = document.getElementById("inputhesap");
    let sonuc = eval(inputhesap.value);
    inputhesap.value = sonuc;
}

let uyeler = [
    {
        ad: "Fatma",
        kullanici: "fatma",
        email: "ahmet@gmail.com",
        cinsiyet: "kadın",
    },
    {
        ad: "Mehmet",
        kullanici: "mehmet",
        email: "mehmet@gmail.com",
        cinsiyet: "erkek",
    },
    {
        ad: "Ada",
        kullanici: "ada",
        email: "ada@gmail.com",
        cinsiyet: "kadın",
    }
];

function uyeekle() {
    let alldata3 = document.getElementsByClassName("alldata3")[0];
    
    
    alldata3.innerHTML = "";

    for (let i = 0; i < uyeler.length; i++) {
        alldata3.innerHTML += `
            <tr>
                <td>${i + 1}</td>
                <td>${uyeler[i].ad}</td>
                <td>${uyeler[i].kullanici}</td>
                <td>${uyeler[i].email}</td>
                <td>${uyeler[i].cinsiyet}</td>
            </tr>
        `;
    }
}


document.querySelector(".gelAll").addEventListener("click", uyeekle);


document.getElementById("uyeForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Formun varsayılan submit davranışını durdur

    let ad = document.getElementById("ad").value;
    let kullanici = document.getElementById("kullanici").value;
    let email = document.getElementById("email").value;
    let cinsiyet = document.getElementById("cinsiyet").value;

   
    let yeniUye = {
        ad: ad,
        kullanici: kullanici,
        email: email,
        cinsiyet: cinsiyet
    };

   
    uyeler.push(yeniUye);


    document.getElementById("uyeForm").reset();

   
    uyeekle();
});
