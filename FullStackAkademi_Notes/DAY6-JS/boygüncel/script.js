/* erkek 18 küçük zayıf 25ten küçük normal 30dan küçük 
     kilolu 35ten küçük obez 35ten büyük aşırı obez 
     kadın 16 küçük zayıf 22den küçük normal 27den küçük 
        kilolu 32den küçük obez 32den büyük aşırı obez */

        function hesapla() {
            let boy = prompt("Boyunuzu giriniz (örnek: 1.75)");
            let kilo = prompt("Kilonuzu giriniz");
            let cinsiyet = prompt("Cinsiyetinizi giriniz (erkek/kadın)");
            let yas = prompt("Yaşınızı giriniz");
            let sonuc = (kilo / (boy * boy)) * 10000;
          
            let endexresult = document.getElementById("endexresult");
            let endextext = document.getElementById("endextext");
            let endeximg = document.getElementById("endeximg");
          
            if (cinsiyet == "erkek") {
              if (yas < 50) {
                var text = "Çocuksunuz";
              } else {
                var text = "Yaşlısınız";
              }
              if (sonuc < 18) {
                endexresult.innerHTML = sonuc.toFixed(2);
                endextext.innerHTML = "Zayıf ve " + text;
                endeximg.src = "zayif.png";
              } else if (sonuc < 25) {
                endexresult.innerHTML = sonuc.toFixed(2);
                endextext.innerHTML = "Normal ve " + text;
                endeximg.src = "normal.png";
              } else if (sonuc < 30) {
                endexresult.innerHTML = sonuc.toFixed(2);
                endextext.innerHTML = "Kilolu ve " + text;
                endeximg.src = "kilolu.png";
              } else if (sonuc < 35) {
                endexresult.innerHTML = sonuc.toFixed(2);
                endextext.innerHTML = "Obez ve " + text;
                endeximg.src = "obez.png";
              } else if (sonuc > 35) {
                endexresult.innerHTML = sonuc.toFixed(2);
                endextext.innerHTML = "Aşırı Obez ve " + text;
                endeximg.src = "obez.png";
              }
            } else if (cinsiyet == "kadın") {
              if (yas < 50) {
                var text = "Hala Gençsiniz";
              } else {
                var text = "Yaşlısınız";
              }
              if (sonuc < 16) {
                endexresult.innerHTML = sonuc.toFixed(2);
                endextext.innerHTML = "Zayıf ve " + text;
                endeximg.src = "zayif.png";
              } else if (sonuc < 22) {
                endexresult.innerHTML = sonuc.toFixed(2);
                endextext.innerHTML = "Normal ve " + text;
                endeximg.src = "normal.png";
              } else if (sonuc < 27) {
                endexresult.innerHTML = sonuc.toFixed(2);
                endextext.innerHTML = "Kilolu ve " + text;
                endeximg.src = "kilolu.png";
              } else if (sonuc < 32) {
                endexresult.innerHTML = sonuc.toFixed(2);
                endextext.innerHTML = "Obez ve " + text;
                endeximg.src = "obez.png";
              } else if (sonuc > 32) {
                endexresult.innerHTML = sonuc.toFixed(2);
                endextext.innerHTML = "Aşırı Obez ve " + text;
                endeximg.src = "obez.png";
              }
            } else {
              alert("Lütfen cinsiyetinizi doğru giriniz (erkek/kadın)");
            }
        }