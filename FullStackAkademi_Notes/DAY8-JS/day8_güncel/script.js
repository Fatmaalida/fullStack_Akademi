// Sayfa yüklendiğinde form işlemleri için hazır olunmasını bekler
document.addEventListener("DOMContentLoaded", function () {
    // Form elementini seçer
    const form = document.querySelector("form");
  
    // Form submit edildiğinde çalışacak fonksiyonu tanımlar
    form.addEventListener("submit", function (event) {
      // Sayfanın yenilenmesini engeller
      event.preventDefault();
  
      // Formdaki input değerlerini alır
      const nameSurname = document.querySelector(".name").value;
      const phone = document.querySelector(".phone").value;
      const subject = document.querySelector(".subject").value;
      const message = document.querySelector(".message").value;
  
      // Alert mesajını oluşturur
      const alertMessage = `Adı Soyadı: ${nameSurname}\nTelefon: ${phone}\nKonu: ${subject}\nMesaj: ${message}`;
  
      // Alert mesajını gösterir
      alert(alertMessage);
  
      // Formu sıfırlar (reset)
      form.reset();
    });
  });
  // Sayfa yüklendiğinde sepete ürün eklemek için hazır olunmasını bekler
  document.addEventListener("DOMContentLoaded", function () {
    // "Sepete Ekle" butonlarını seçer
    const addToCartButtons = document.querySelectorAll(".add_to_cart");
  
    // Her bir butona tıklama event listener'ı ekler
    addToCartButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        // Ürünü içeren parent elementi bulur
        const productContainer = button.parentElement;
  
        // Ürün adını ve fiyatını alır
        const productName =
          productContainer.querySelector(".product_title").innerText;
        const productPrice =
          productContainer.querySelector(".product_price").innerText;
  
        // Ürün objesi oluşturur
        const product = {
          name: productName,
          price: productPrice,
          count: 1, // Varsayılan olarak bir adet ekler
          image: "https://picsum.photos/200/300", // Varsayılan bir resim
        };
  
        // Ürünü session storage'a JSON formatında kaydeder
        sessionStorage.setItem("cartProduct", JSON.stringify(product));
  
        // Kullanıcıya ürünün sepete eklendiğine dair bildirim gösterir
        alert("Ürün sepete eklendi!");
  
        // Sepet sayfasına yönlendirir
        window.location.href = "sepet.html";
      });
    });
  });
  
  // Sayfa yüklendiğinde sepet içeriğini göstermek için hazır olunmasını bekler
  document.addEventListener("DOMContentLoaded", function () {
    // Sepet içeriğini gösterecek HTML elementlerini seçer
    const cartItems = document.getElementById("cartItems");
    const subTotalPrice = document.getElementById("subTotalPrice");
    const finalTotalPrice = document.getElementById("finalTotalPrice");
    const totalPrice = document.getElementById("totalPrice");
  
    // Session storage'dan sepet ürün bilgisini alır
    const cartProduct = JSON.parse(sessionStorage.getItem("cartProduct"));
  
    // Eğer sepet boş değilse
    if (cartProduct) {
      // Yeni bir satır (row) elementi oluşturur
      const tr = document.createElement("tr");
  
      // Satır içeriğini doldurur
      tr.innerHTML = `
        <td>${cartProduct.name}</td>
        <td><img src="${cartProduct.image}" alt="${cartProduct.name}" class="product_img"></td>
        <td>${cartProduct.count}</td>
        <td>${cartProduct.price} </td>
      `;
  
      // Oluşturulan satırı sepet tablosuna ekler
      cartItems.appendChild(tr);
  
      // Toplam fiyat hesaplamalarını yapar
      const totalPriceValue =
        parseFloat(cartProduct.price.replace("₺", "").trim()) *
        parseInt(cartProduct.count);
      subTotalPrice.textContent = `${totalPriceValue} ₺`;
      finalTotalPrice.textContent = `${(totalPriceValue * 1.2).toFixed(2)} ₺`;
      totalPrice.textContent = `${totalPriceValue} ₺`;
    }
  });