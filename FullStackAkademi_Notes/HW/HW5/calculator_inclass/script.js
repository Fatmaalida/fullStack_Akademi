function hesapmakinasi() {
    let hesapmakinasi = document.getElementById("hesapmakinasi");
    hesapmakinasi.style.display = "none";
    let hesapmakinasiDurum = false;
  }
  function hesapla() {
    let inputhesap = document.getElementById("inputhesap");
    let sonuc = eval(inputhesap.value);
    inputhesap.value = sonuc;
  }


// .value özelliği, <input> elemanının değerini almak veya ayarlamak için vazgeçilmezdir. 
 // Form işleme, kullanıcı girdileri ve dinamik içerik güncellemeleri gibi pek çok durumda kullanılır. 
 // Eğer kullanılmazsa, input elemanının içeriğiyle etkileşim kuramazsınız ve kullanıcı girdilerini işleyemezsiniz.
// ----------------------------------------------------------------------------------------------------------------------------
// eval(), bir kod dizisini gerçek JavaScript koduymuş gibi çalıştırmanıza olanak tanır.
// Yararlı bir araç olmasına rağmen bir güvenlik riskidir.
//  Herhangi bir gerçek üretim kodunu değil, SADECE öğrenme amaçlı eval()
// --------------------------------------------------------------------------------------------------------------------------------

  function uyeekle() {
    // uyeler adında bir array oluşturulacak içerisine 3 tane obje eklenecek
    // içinde isim kullanıcı adı email ve cinssiyet bilgisi olacak
    // bu array içindeki objeleri tablo içerisinde listeleyecek


  
    let uyeler = [
      {
        isim: "Ali",
        kullaniciadi: "ali123",
        email: "ali@gmail.com",
        phone: "+905555555555",
      },
      {
        isim: "Ayşe",
        kullaniciadi: "ayse123",
        email: "ayse@gmail.com",
        phone: "+905555555555",
      },
      {
        isim: "Mehmet",
        kullaniciadi: "mehmet123",
        email: "mehmet@gmail.com",
        phone: "+905555555555",
      },
    ];

    
    let tablo = document.querySelector(".alldata3");
    let html = ""; 
    //tabloyu temizleme.  boş bir string tanımlar
    // i + 1 ifadesi, dizinin indeksinin 1'den başlayacak şekilde gösterilmesini sağlamak içindir

    for (let i = 0; i < uyeler.length; i++) {
      html += `
      <tr>
      <td>${i + 1}</td>
        <td>${uyeler[i].isim}</td>
        <td>${uyeler[i].kullaniciadi}</td>
        <td>${uyeler[i].email}</td>
        <td>${uyeler[i].phone}</td>
      </tr>
      `;
    }
    tablo.innerHTML = html;
  }


  // ---------------------------------------------------------------------------------------------------------------------------
    
  // for (let i = 0; i < users.length; i++) {
  //     html += '<tr>';
  //     html += '<td>' + (i + 1) + '</td>';
  //     html += '<td>' + users[i].name + '</td>';
  //     html += '<td>' + users[i].username + '</td>';
  //     html += '<td>' + users[i].email + '</td>';
  //     html += '<td>' + users[i].phone + '</td>';
  //     html += '</tr>';
  // }

  // td leri bu şekilde de yazabiliriz. for döngüsünde TextTrack, çift veya geri tırnak stringleri belirtmmiz için gereklidir
// -------------------------------------------------------------------------------------------------------------------------------- 

 
  document.addEventListener("DOMContentLoaded", function () {
    // DOMContentLoaded olayı tetiklendiğinde, yani HTML belgesi tamamen yüklendiğinde ve çözümlendiğinde bu işlev çağrılır.
    document.querySelector(".btn-basla").addEventListener("click", function () {
      var yazi = "Merhaba sınıf nasılsınız";
      setTimeout(function () {
        document.querySelector(".yaz1").innerHTML = yazi;
      }, 3000);
    });
    let sayi = 0;
    document.querySelector(".btn-basla2").addEventListener("click", function () {
      setInterval(function () {
        sayi++;
        document.querySelector(".yaz2").innerHTML = sayi;
      }, 1000);
    });
  });

//-----------------------------------------------------------------------------------------------------------------------------------------

//   .btn-basla butonuna tıklandığında, 3 saniye sonra .yaz1 öğesinin içeriği "Merhaba sınıf nasılsınız" olarak değiştirilir.
// .btn-basla2 butonuna tıklandığında, her saniye sayi değişkeni 1 arttırılır ve .yaz2 öğesinin içeriği bu yeni değerle güncellenir.
// -----------------------------------------------------------------------------------------------------------------------------------------
  
// fetchdata fonksiyonu, gönderi verilerini almak için "https://jsonplaceholder.typicode.com/posts" URL'sini kullanır.
// fetchuserdata fonksiyonu, kullanıcı verilerini almak için "https://jsonplaceholder.typicode.com/users" URL'sini kullanır.



function fetchuserdata() {
    fetch("https://jsonplaceholder.typicode.com/users")
    // API'den veri çeker
    // fetch fonksiyonu, belirli bir URL'ye HTTP isteği gönderir. fetch attı istek
    // Bu örnekte, "https://jsonplaceholder.typicode.com/users" URL'sine GET isteği gönderir.
      .then((response) => response.json())
      // Gelen yanıtı JSON formatına çevirir
      .then((data) => {
        // JSON verisi kullanılarak aşağıdaki işlemler yapılır
        let tablo = document.querySelector(".alldata3");
        let html = "";
        data.forEach((element) => {
          html += `
          <tr>
            <td>${element.id}</td>
            <td>${element.name}</td>
            <td>${element.username}</td>
            <td>${element.email}</td>
            <td>${element.phone}</td>
          </tr>
          `;
        });
        tablo.innerHTML = html;
        // Oluşturulan HTML içeriğini tabloya ekler
        // Template literal ( ) kullanarak dinamik olarak her bir öğenin verilerini (element.id vs.) HTML'e ekler.
      });
  }
  function fetchdata() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        let tablo = document.querySelector(".alldata2");
        let html = "";
        data.forEach((element) => {
          html += `
          <tr>
            <td>${element.id}</td>
            <td>${element.title}</td>
            <td>${element.body}</td>
          </tr>
          `;
        });
        tablo.innerHTML = html;
      });
  }
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".gelAll").addEventListener("click", function () {
      // class a tıklandığında çalıştı
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => {
          let tablo = document.querySelector(".alldata");
          let html = "";
          data.forEach((element) => {
            html += `
            <tr>
              <td>${element.id}</td>
              <td>${element.title}</td>
              <td>${element.body}</td>
            </tr>
            `;
          });
          tablo.innerHTML = html;
        });
    });
  });
  let buttons = document.querySelectorAll(".button");
  let display = document.querySelector(".display");
  
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      let value = button.textContent;
      // Tıklanan butonu bulur metin içeriğini alır
  
      if (value === "C") {
        display.value = "";
      } else if (value === "=") {
        try {
          display.value = eval(display.value);
           // eval() fonksiyonu ile display alanındaki ifadeyi değerlendirir ve sonucu display alanına yazar
        // eval mat işlemlerini yapıp dönderir
          } catch (e) {
          // e de ne için eror verdi yazarız
          display.value = "Error";
        }
      } else {
        display.value += value;
        // Tıklanan düğmenin değerini display alanına ekler
        // 2 ye tıkladık tekrar  tıklayabilmek için tekrar 2 yazar 22 olur
      }
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".btn").addEventListener("click", function () {
      let bTag = document.querySelector("b");
      alert(bTag.innerText);
    });
  });