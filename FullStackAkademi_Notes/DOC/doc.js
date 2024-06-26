/*----ÖNEMLİ NOT: eval(), bir kod dizisini gerçek JavaScript koduymuş gibi çalıştırmanıza olanak tanır.
Yararlı bir araç olmasına rağmen bir güvenlik riskidir.
 Herhangi bir gerçek üretim kodunu değil, SADECE öğrenme amaçlı eval() kullanmanızı öneririm.
 -*/



//  number vs parseInt
// Number fonksiyonu, bir değeri tam sayı veya kayan noktalı sayıya dönüştürmeye çalışır.
// Boş string (""), null, true ve false gibi farklı türleri de sayıya dönüştürebilir.
// Virgül (desimal) içeren string'leri doğru bir şekilde sayıya dönüştürebilir.

Number("123");         // 123
Number("123.45");      // 123.45
Number(" 123 ");       // 123 (boşlukları yoksayar)
Number("");            // 0 (boş string)
Number(null);          // 0
Number(true);          // 1
Number(false);         // 0
Number("123abc");      // NaN (geçersiz sayı)


// parseInt fonksiyonu, bir string'in başından itibaren geçerli bir tam sayı bulmaya çalışır. Bu fonksiyon sadece tam sayı döndürür.
// Geçerli tam sayı karakterleri dışında bir karakterle karşılaştığında, işlemi durdurur ve o ana kadar bulduğu tam sayıyı döndürür.
// Boş string (""), null, true ve false gibi değerler üzerinde çalışmaz ve NaN döndürür.
// İkinci bir parametre (radix) alabilir, bu parametre sayının hangi tabanda olduğunu belirtir (örneğin, ikilik, sekizlik, ondalık, onaltılık vb.).

parseInt("123");         // 123
parseInt("123.45");      // 123 (kayan noktalı kısmı yoksayar)
parseInt(" 123 ");       // 123 (boşlukları yoksayar)
parseInt("");            // NaN (boş string)
parseInt(null);          // NaN
parseInt(true);          // NaN
parseInt(false);         // NaN
parseInt("123abc");      // 123 (geçersiz sayı karakterine kadar olan kısmı döndürür)
parseInt("abc123");      // NaN (başlangıçta geçersiz karakter olduğu için)
parseInt("101", 2);      // 5 (ikilik tabanda 101, ondalık tabanda 5 eder)
parseInt("0xF", 16);     // 15 (onaltılık tabanda 0xF, ondalık tabanda 15 eder)
