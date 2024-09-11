using System;
using System.Data;
using System.Data.SqlClient;
using System.Threading;

namespace EliteRentACar
{
    internal class Menu
    {
        private static string connectionString = "Data Source=LAPTOP-D75U4V7F\\SQLEXPRESS01;Initial Catalog=EliteRentalCarDB;Integrated Security=True;";

        public void Run()
        {
            if (Login())
            {
                ShowMenu();
            }
        }

        public void DrawMenu(string[] menuLines)
        {
            for (int i = 0; i < menuLines.Length; i++)
            {
                Console.SetCursorPosition(20, (i + 1));
                Console.WriteLine(menuLines[i]);
            }
        }

        private bool Login()
        {
            while (true)
            {
                Console.Clear();
                Console.ForegroundColor = ConsoleColor.Magenta;

                string[] menuLines = new string[]
                {
            "╔══════════════════════════════════════════════════╗",
            "║               Elite Rental Car Giriş             ║",
            "║                                                  ║",
            "║ Kullanıcı Adı:                                   ║",
            "║ Şifre:                                           ║",
            "╚══════════════════════════════════════════════════╝"
                };

                
                DrawMenu(menuLines);

                
                Console.SetCursorPosition(50, 4);
                string username = Console.ReadLine();

                Console.SetCursorPosition(50, 5);
                string password = Console.ReadLine();

                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    string query = "SELECT COUNT(*) FROM Musteriler WHERE KullaniciAdi = @username AND Sifre = @password AND Aktif = 1";
                    SqlCommand command = new SqlCommand(query, connection);
                    command.Parameters.AddWithValue("@username", username);
                    command.Parameters.AddWithValue("@password", password);

                    int count = (int)command.ExecuteScalar();

                    if (count > 0)
                    {
                        return true;
                    }
                    else
                    {
                        Console.SetCursorPosition(30, 7);
                        Console.WriteLine("\nHatalı kullanıcı adı veya şifre. Tekrar deneyin.");
                        Thread.Sleep(2000);
                    }
                }
            }
        }
      //----------------------------------------------------------------------------------------------MAIN MENU 
        
        private void ShowMenu()
        {
            while (true)
            {
                Console.Clear();
                Console.ForegroundColor = ConsoleColor.Magenta;
                Console.WriteLine("       ______");
                Console.WriteLine("      //  ||\\ \\");
                Console.WriteLine(" ____//___||_\\ \\___");
                Console.WriteLine(" |  _          _    \\");
                Console.WriteLine(" |_/ \\________/ \\___|");
                Console.WriteLine("___\\_/________\\_/______");

                
                Console.ForegroundColor = ConsoleColor.Magenta;
                Console.WriteLine("\n\n Elite Rental Car \n");
                string[] mm =
                {
                    "╔════════════════════════════════════════════════════╗",
                    "║                     Hoşgeldiniz                    ║",
                    "╠════════════════════════════════════════════════════╣",
                    "║                      Ana Menü                      ║",
                    "╠════════════════════════════════════════════════════╣",
                    "║ 1. Müşteri İşlemleri                               ║",
                    "║ 2. Araç İşlemleri                                  ║",
                    "║ 3. Kiralama İşlemleri                              ║",
                    "║ 4. Fatura İşlemleri                                ║",
                    "║ 5. Çalışan İşlemleri                               ║",
                    "║ 0. Çıkış                                           ║",
                    "║                                                    ║",
                    "╠════════════════════════════════════════════════════╣",
                    "║ İşlem Seçiniz:                                     ║",
                    "║                                                    ║",
                    "╚════════════════════════════════════════════════════╝",

            };
                Console.ForegroundColor = ConsoleColor.Magenta;
                Console.WriteLine("       ______");
                Console.WriteLine("      //  ||\\ \\");
                Console.WriteLine(" ____//___||_\\ \\___");
                Console.WriteLine(" |  _          _    \\");
                Console.WriteLine(" |_/ \\________/ \\___|");
                Console.WriteLine("___\\_/________\\_/______");
                for (int i = 0; i < mm.Length; i++)
                {
                    Console.SetCursorPosition(20, (i + 1));
                    Console.WriteLine(mm[i]);
                }

                Console.SetCursorPosition(40, 14);
                string process = Console.ReadLine().Trim();
                Console.Clear();

                switch (process)
                {
                    case "1":
                        MusteriMenu();
                        break;
                    case "2":
                        ArabaMenu();
                        break;
                    case "3":
                        KiralamaMenu();
                        break;
                    case "4":
                        FaturaMenu();
                        break;
                    case "5":
                        CalısanMenu();
                        break;
                    case "0":
                        Console.WriteLine("Sistem Kapatılıyor...");
                        Thread.Sleep(3000);
                        Environment.Exit(0);
                        break;
                    default:
                        Console.WriteLine("Tanımsız Seçim. Ana menüye dönüyorsunuz...");
                        Thread.Sleep(2000);
                        Console.Clear();
                        break;
                }
            }
        }

     //---------------------------------------------------------------------------------------------MUSTERİLER MENU


        private void MusteriMenu()
        {
            while (true)
            {
                Console.Clear();

                string[] menuLines = new string[]
                {
            "╔════════════════════════════════════════════════════╗",
            "║                    MÜŞTERİLER                      ║",
            "╠════════════════════════════════════════════════════╣",
            "║ 1. Müşteriler Listesi                              ║",
            "║ 2. Müşteri Ekle                                    ║",
            "║ 3. Müşteri Güncelle                                ║",
            "║ 4. Müşteri Sil                                     ║",
            "║ 5. Müşteri Bilgisi                                 ║",
            "║ 6. Ana Menüye Dön                                  ║",
            "║ 7. Çıkış                                           ║",
            "║                                                    ║",
            "╠════════════════════════════════════════════════════╣",
            "║ İşlem Seçiniz:                                     ║",
            "╚════════════════════════════════════════════════════╝"
                };

                foreach (string line in menuLines)
                {
                    Console.SetCursorPosition((Console.WindowWidth - line.Length) / 2, Console.CursorTop);
                    Console.WriteLine(line);
                }

                
                Console.SetCursorPosition((Console.WindowWidth - "İşlem Seçiniz: ".Length) / 2 + 14, Console.CursorTop - 2);
                string choice = Console.ReadLine();

                try
                {
                    switch (choice)
                    {
                        case "1":
                            MusterileriListele();
                            break;
                        case "2":
                            MusteriEkle();
                            break;
                        case "3":
                            MusteriGuncelle();
                            break;
                        case "4":
                            MusteriSilme();
                            break;
                        case "5":
                            MusteriGoruntule();
                            break;
                        case "6":
                            
                            return;
                        case "7":
                            Console.WriteLine("Sistem Kapatılıyor...");
                            Thread.Sleep(3000);
                            Environment.Exit(0);
                            break;
                        default:

                            Console.WriteLine("\nGeçersiz seçenek, lütfen tekrar deneyin.");

                            Console.ReadLine();
                            break;
                    }
                }
                catch (Exception ex)
                {
                    Console.WriteLine("Bir hata oluştu: " + ex.Message);
                    Console.WriteLine("Devam etmek için bir tuşa basın...");
                    Console.ReadLine();
                }
            }
        }
       
        private void MusterileriListele()
        {
            try
            {
                Console.Clear();

                string[] headerLines = new string[]
                {
            "╔════════════════════════════════════════════════════╗",
            "║                  TÜM MÜŞTERİLER                    ║",
            "╚════════════════════════════════════════════════════╝"
                };
                foreach (string line in headerLines)
                {
                    Console.SetCursorPosition((Console.WindowWidth - line.Length) / 2, Console.CursorTop);
                    Console.WriteLine(line);
                }

                using (SqlConnection conn = new SqlConnection(connectionString))
                {
                    conn.Open();
                    using (SqlCommand cmd = new SqlCommand("TümMusteriler", conn))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;

                        SqlDataReader reader = cmd.ExecuteReader();
                        while (reader.Read())
                        {
                            string[] customerLines = new string[]
                            {
                        $" ID: {reader["MusteriId"]}",
                        $" Ad: {reader["Ad"]}",
                        $" Soyad: {reader["Soyad"]}",
                        $" Telefon: {reader["Telefon"]}",
                        $" Email: {reader["Email"]}",
                        $" Ehliyet No: {reader["EhliyetNo"]}",
                        $" Ehliyet Verilis Tarihi: {reader["EhliyetVerilisTarihi"]}",
                        $" Ehliyet Bitis Tarihi: {reader["EhliyetBitisTarihi"]}",
                        $" Ehliyet Sinifi Id: {reader["EhliyetSinifiId"]}",
                        $" Dogum Tarihi: {reader["DogumTarihi"]}",
                        $" Adres: {reader["Adres"]}",
                        $" Sigorta No: {reader["SigortaNo"]}",
                        $" Sigorta Bitis Tarihi: {reader["SigortaBitisTarihi"]}",
                        $" Meslek: {reader["Meslek"]}",
                        $" Kullanici Adi: {reader["KullaniciAdi"]}",
                        $" Aktif: {reader["Aktif"]}",
                        "╠════════════════════════════════════════════════════╣"
                            };
                            foreach (string line in customerLines)
                            {
                                Console.SetCursorPosition((Console.WindowWidth - line.Length) / 2, Console.CursorTop);
                                Console.WriteLine(line);
                            }
                        }
                    }
                }

                string[] footerLines = new string[]
                {
           
            "Devam etmek için bir tuşa basın..."
                };
                foreach (string line in footerLines)
                {
                    Console.SetCursorPosition((Console.WindowWidth - line.Length) / 2, Console.CursorTop);
                    Console.WriteLine(line);
                }
                Console.ReadLine();
            }
            catch (Exception ex)
            {
                string[] errorLines = new string[]
                {
            $"Bir hata oluştu: {ex.Message}",
            "Devam etmek için bir tuşa basın..."
                };
                foreach (string line in errorLines)
                {
                    Console.SetCursorPosition((Console.WindowWidth - line.Length) / 2, Console.CursorTop);
                    Console.WriteLine(line);
                }
                Console.ReadLine();
            }
        }

        private void MusteriEkle()
        {
            using (SqlConnection conn = new SqlConnection(connectionString))
            {
                conn.Open();
                using (SqlCommand cmd = new SqlCommand("MusteriEkleme", conn))
                {
                    cmd.CommandType = CommandType.StoredProcedure;

                    string[] promptLines = new string[]
                    {
                "Ad: ", "Soyad: ", "Telefon: ", "Email: ", "Ehliyet No: ", "Ehliyet Verilis Tarihi: ",
                "Ehliyet Bitis Tarihi: ", "Ehliyet Sınıfı Id: ", "Dogum Tarihi: ", "Adres: ",
                "Sigorta No: ", "Sigorta Bitis Tarihi: ", "Meslek: ", "Kullanıcı Adı: ", "Şifre: "
                    };

                    Console.Clear();
                    string[] headerLines = new string[]
                    {
                "╔════════════════════════════════════════════════════╗",
                "║                    MÜŞTERİ EKLE                    ║",
                "╚════════════════════════════════════════════════════╝"
                    };
                    foreach (string line in headerLines)
                    {
                        Console.SetCursorPosition((Console.WindowWidth - line.Length) / 2, Console.CursorTop);
                        Console.WriteLine(line);
                    }

                    foreach (string prompt in promptLines)
                    {
                        Console.Write(prompt);
                        cmd.Parameters.AddWithValue(prompt.Trim(' ', ':').Replace(' ', '_'), Console.ReadLine());
                    }

                    cmd.ExecuteNonQuery();

                    string[] footerLines = new string[]
                    {
                "════════════════════════════════════════════════════",
                "Müşteri başarıyla eklendi.",
                "Devam etmek için bir tuşa basın..."
                    };
                    foreach (string line in footerLines)
                    {
                        Console.SetCursorPosition((Console.WindowWidth - line.Length) / 2, Console.CursorTop);
                        Console.WriteLine(line);
                    }
                    Console.ReadLine();
                }
            }
        }

        private void MusteriGuncelle()
        {
            try
            {
                Console.Clear();
                string[] promptLines = new string[]
                {
            "Müşteri ID: ", "Ad: ", "Soyad: ", "Telefon: ", "Email: ", "Ehliyet No: ", "Ehliyet Verilis Tarihi: ",
            "Ehliyet Bitis Tarihi: ", "Ehliyet Sınıfı Id: ", "Dogum Tarihi: ", "Adres: ", "Sigorta No: ",
            "Sigorta Bitis Tarihi: ", "Meslek: ", "Kullanıcı Adı: ", "Şifre: ", "Aktif (1/0): "
                };

                string[] headerLines = new string[]
                {
            "╔════════════════════════════════════════════════════╗",
            "║                 MÜŞTERİ GÜNCELLE                   ║",
            "╚════════════════════════════════════════════════════╝"
                };
                foreach (string line in headerLines)
                {
                    Console.SetCursorPosition((Console.WindowWidth - line.Length) / 2, Console.CursorTop);
                    Console.WriteLine(line);
                }

                using (SqlConnection conn = new SqlConnection(connectionString))
                {
                    conn.Open();
                    using (SqlCommand cmd = new SqlCommand("MusteriGuncelleme", conn))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        foreach (string prompt in promptLines)
                        {
                            Console.Write(prompt);
                            if (prompt.Contains("Tarihi"))
                                cmd.Parameters.AddWithValue(prompt.Trim(' ', ':').Replace(' ', '_'), Convert.ToDateTime(Console.ReadLine()));
                            else if (prompt.Contains("Id") || prompt.Contains("(1/0)"))
                                cmd.Parameters.AddWithValue(prompt.Trim(' ', ':').Replace(' ', '_'), Convert.ToInt32(Console.ReadLine()));
                            else
                                cmd.Parameters.AddWithValue(prompt.Trim(' ', ':').Replace(' ', '_'), Console.ReadLine());
                        }
                        cmd.ExecuteNonQuery();
                    }
                }

                string[] footerLines = new string[]
                {
            "═══════════════════════════════════════════════════",
            "Müşteri başarıyla güncellendi.",
            "Devam etmek için bir tuşa basın..."
                };
                foreach (string line in footerLines)
                {
                    Console.SetCursorPosition((Console.WindowWidth - line.Length) / 2, Console.CursorTop);
                    Console.WriteLine(line);
                }
                Console.ReadLine();
            }
            catch (Exception ex)
            {
                Console.WriteLine("Bir hata oluştu: " + ex.Message);
                Console.WriteLine("Devam etmek için bir tuşa basın...");
                Console.ReadLine();
            }
        }

        private void MusteriSilme()
        {
            try
            {
                Console.Clear();
                string[] headerLines = new string[]
                {
            "╔════════════════════════════════════════════════════╗",
            "║                   MÜŞTERİ PASİFİ                   ║",
            "╚════════════════════════════════════════════════════╝"
                };
                foreach (string line in headerLines)
                {
                    Console.SetCursorPosition((Console.WindowWidth - line.Length) / 2, Console.CursorTop);
                    Console.WriteLine(line);
                }

                Console.Write("Müşteri ID: ");
                int musteriId = Convert.ToInt32(Console.ReadLine());

                using (SqlConnection conn = new SqlConnection(connectionString))
                {
                    conn.Open();
                    using (SqlCommand cmd = new SqlCommand("MusteriPasifeAlma", conn))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@MusteriId", musteriId);
                        cmd.ExecuteNonQuery();
                    }
                }

                string[] footerLines = new string[]
                {
            "═══════════════════════════════════════════════════",
            "Müşteri başarıyla pasife alındı.",
            "Devam etmek için bir tuşa basın..."
                };
                foreach (string line in footerLines)
                {
                    Console.SetCursorPosition((Console.WindowWidth - line.Length) / 2, Console.CursorTop);
                    Console.WriteLine(line);
                }
                Console.ReadLine();
            }
            catch (Exception ex)
            {
                Console.WriteLine("Bir hata oluştu: " + ex.Message);
                Console.WriteLine("Devam etmek için bir tuşa basın...");
                Console.ReadLine();
            }
        }

        private void MusteriGoruntule()
        {
            try
            {
                Console.Clear();

                string[] headerLines = new string[]
                {
            "╔════════════════════════════════════════════════════╗",
            "║                  MÜŞTERİ BİLGİLERİ                 ║",
            "╚════════════════════════════════════════════════════╝"
                };
                foreach (string line in headerLines)
                {
                    Console.SetCursorPosition((Console.WindowWidth - line.Length) / 2, Console.CursorTop);
                    Console.WriteLine(line);
                }

                Console.Write("Müşteri ID: ");
                int musteriId = Convert.ToInt32(Console.ReadLine());

                using (SqlConnection conn = new SqlConnection(connectionString))
                {
                    conn.Open();
                    using (SqlCommand cmd = new SqlCommand("MüsteriBilgisi", conn))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@MusteriId", musteriId);

                        SqlDataReader reader = cmd.ExecuteReader();
                        if (reader.Read())
                        {
                            string[] customerLines = new string[]
                            {
                        $" ID: {reader["MusteriId"]}",
                        $" Ad: {reader["Ad"]}",
                        $" Soyad: {reader["Soyad"]}",
                        $" Telefon: {reader["Telefon"]}",
                        $" Email: {reader["Email"]}",
                        $" Ehliyet No: {reader["EhliyetNo"]}",
                        $" Ehliyet Verilis Tarihi: {reader["EhliyetVerilisTarihi"]}",
                        $" Ehliyet Bitis Tarihi: {reader["EhliyetBitisTarihi"]}",
                        $" Ehliyet Sinifi Id: {reader["EhliyetSinifiId"]}",
                        $" Dogum Tarihi: {reader["DogumTarihi"]}",
                        $" Adres: {reader["Adres"]}",
                        $" Sigorta No: {reader["SigortaNo"]}",
                        $" Sigorta Bitis Tarihi: {reader["SigortaBitisTarihi"]}",
                        $" Meslek: {reader["Meslek"]}",
                        $" Kullanici Adi: {reader["KullaniciAdi"]}",
                        $" Aktif: {reader["Aktif"]}",
                        
                            };
                            foreach (string line in customerLines)
                            {
                                Console.SetCursorPosition((Console.WindowWidth - line.Length) / 2, Console.CursorTop);
                                Console.WriteLine(line);
                            }
                        }
                        else
                        {
                            Console.WriteLine("Müşteri bulunamadı.");
                        }
                    }
                }

                string[] footerLines = new string[]
                {
            "════════════════════════════════════════════════════",
            "Devam etmek için bir tuşa basın..."
                };
                foreach (string line in footerLines)
                {
                    Console.SetCursorPosition((Console.WindowWidth - line.Length) / 2, Console.CursorTop);
                    Console.WriteLine(line);
                }
                Console.ReadLine();
            }
            catch (Exception ex)
            {
                Console.WriteLine("Bir hata oluştu: " + ex.Message);
                Console.WriteLine("Devam etmek için bir tuşa basın...");
                Console.ReadLine();
            }
        }


     //----------------------------------------------------------------------------------------------ARABA MENU

        public void ArabaMenu()
        {
            while (true)
            {
                Console.Clear();

                
                string[] menuLines = new string[]
                {
            "╔════════════════════════════════════════════════════╗",
            "║                    ARAÇ İŞLEMLERİ                  ║",
            "╠════════════════════════════════════════════════════╣",
            "║ 1. Araç Ekle                                       ║",
            "║ 2. Araç Güncelle                                   ║",
            "║ 3. Araç Bilgisi                                    ║",
            "║ 4. Araç Pasife Alma                                ║",
            "║ 5. Araçları Listeleme                              ║",
            "║ 6. Ana Menüye Dön                                  ║",
            "║ 7. Çıkış                                           ║",
            "║                                                    ║",
            "╠════════════════════════════════════════════════════╣",
            "║ İşlem Seçiniz:                                     ║",
            "╚════════════════════════════════════════════════════╝"
                };

               
                DrawMenu(menuLines);

                
                Console.SetCursorPosition((Console.WindowWidth - "İşlem Seçiniz: ".Length) / 2 + 14, Console.CursorTop - 2);
                string choice = Console.ReadLine();

                try
                {
                    switch (choice)
                    {
                        case "1":
                            ArabaEkle();
                            break;
                        case "2":
                            ArabaGuncelle();
                            break;
                        case "3":
                            ArabaBilgisi();
                            break;
                        case "4":
                            ArabaSilme();
                            break;
                        case "5":
                            Arabalistele();
                            break;
                        case "6":
                           
                            return;
                        case "7":
                            Console.WriteLine("Sistem Kapatılıyor...");
                            Thread.Sleep(3000);
                            Environment.Exit(0);
                            break;
                        default:
                            Console.WriteLine("\nGeçersiz seçenek, lütfen tekrar deneyin.");
                            Console.ReadLine();
                            break;
                    }
                }
                catch (Exception ex)
                {
                    Console.WriteLine("Bir hata oluştu: " + ex.Message);
                    Console.WriteLine("Devam etmek için bir tuşa basın...");
                    Console.ReadLine();
                }
            }
        }

        public void ArabaEkle()
        {
            Console.Clear();

            // Define the menu lines
            string[] menuLines = new string[]
            {
        "╔════════════════════════════════════════════════════╗",
        "║                    ARAÇ EKLEME                     ║",
        "╠════════════════════════════════════════════════════╣",
        "║ 1. MarkaID:                                        ║",
        "║ 2. Yıl:                                            ║",
        "║ 3. Plaka:                                          ║",
        "║ 4. Vites Tipi:                                     ║",
        "║ 5. Yakıt Tipi:                                     ║",
        "║ 6. Renk:                                           ║",
        "║ 7. Motor Hacmi:                                    ║",
        "║ 8. Günlük Ücret:                                   ║",
        "║ 9. Durum:                                          ║",
        "║10. Sigorta Durumu:                                 ║",
        "║11. Kilometre:                                      ║",
        "║12. Son Bakım Tarihi:                               ║",
        "║13. Model:                                          ║",
        "╠════════════════════════════════════════════════════╣",
        "║ İşlem Seçiniz:                                     ║",
        "╚════════════════════════════════════════════════════╝"
            };

            
            DrawMenu(menuLines);

            try
            {
                Console.Write("MarkaID: ");
                int markaID = int.Parse(Console.ReadLine());
                Console.Write("Yıl: ");
                int yil = int.Parse(Console.ReadLine());
                Console.Write("Plaka: ");
                string plaka = Console.ReadLine();
                Console.Write("Vites Tipi: ");
                string vitesTipi = Console.ReadLine();
                Console.Write("Yakıt Tipi: ");
                string yakitTipi = Console.ReadLine();
                Console.Write("Renk: ");
                string renk = Console.ReadLine();
                Console.Write("Motor Hacmi: ");
                int motorHacmi = int.Parse(Console.ReadLine());
                Console.Write("Günlük Ücret: ");
                decimal gunlukUcret = decimal.Parse(Console.ReadLine());
                Console.Write("Durum: ");
                string durum = Console.ReadLine();
                Console.Write("Sigorta Durumu: ");
                string sigortaDurumu = Console.ReadLine();
                Console.Write("Kilometre: ");
                int kilometre = int.Parse(Console.ReadLine());
                Console.Write("Son Bakım Tarihi (yyyy-MM-dd): ");
                DateTime sonBakimTarihi = DateTime.Parse(Console.ReadLine());
                Console.Write("Model: ");
                string model = Console.ReadLine();

                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    SqlCommand command = new SqlCommand("AracEkle", connection);
                    command.CommandType = System.Data.CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@MarkaID", markaID);
                    command.Parameters.AddWithValue("@Yil", yil);
                    command.Parameters.AddWithValue("@Plaka", plaka);
                    command.Parameters.AddWithValue("@VitesTipi", vitesTipi);
                    command.Parameters.AddWithValue("@YakıtTipi", yakitTipi);
                    command.Parameters.AddWithValue("@Renk", renk);
                    command.Parameters.AddWithValue("@MotorHacmi", motorHacmi);
                    command.Parameters.AddWithValue("@GunlukUcret", gunlukUcret);
                    command.Parameters.AddWithValue("@Durum", durum);
                    command.Parameters.AddWithValue("@SigortaDurumu", sigortaDurumu);
                    command.Parameters.AddWithValue("@Kilometre", kilometre);
                    command.Parameters.AddWithValue("@SonBakimTarihi", sonBakimTarihi);
                    command.Parameters.AddWithValue("@Model", model);

                    connection.Open();
                    try
                    {
                        command.ExecuteNonQuery();
                        Console.WriteLine("Araç başarıyla eklendi.");
                    }
                    catch (Exception ex)
                    {
                        Console.WriteLine("Hata: " + ex.Message);
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("Hata: " + ex.Message);
            }
            Console.ReadKey();
        }

        public void ArabaGuncelle()
        {
            Console.Clear();

            
            string[] menuLines = new string[]
            {
        "╔════════════════════════════════════════════════════╗",
        "║                    ARAÇ GÜNCELLEME                ║",
        "╠════════════════════════════════════════════════════╣",
        "║ 1. AraçID:                                         ║",
        "║ 2. MarkaID:                                        ║",
        "║ 3. Yıl:                                            ║",
        "║ 4. Plaka:                                          ║",
        "║ 5. Vites Tipi:                                     ║",
        "║ 6. Yakıt Tipi:                                     ║",
        "║ 7. Renk:                                           ║",
        "║ 8. Motor Hacmi:                                    ║",
        "║ 9. Günlük Ücret:                                  ║",
        "║10. Durum:                                          ║",
        "║11. Sigorta Durumu:                                ║",
        "║12. Kilometre:                                      ║",
        "║13. Son Bakım Tarihi:                              ║",
        "║14. Model:                                         ║",
        "╠════════════════════════════════════════════════════╣",
        "║ İşlem Seçiniz:                                     ║",
        "╚════════════════════════════════════════════════════╝"
            };

           
            DrawMenu(menuLines);

            try
            {
                Console.Write("AraçID: ");
                int aracID = int.Parse(Console.ReadLine());
                Console.Write("MarkaID: ");
                int markaID = int.Parse(Console.ReadLine());
                Console.Write("Yıl: ");
                int yil = int.Parse(Console.ReadLine());
                Console.Write("Plaka: ");
                string plaka = Console.ReadLine();
                Console.Write("Vites Tipi: ");
                string vitesTipi = Console.ReadLine();
                Console.Write("Yakıt Tipi: ");
                string yakitTipi = Console.ReadLine();
                Console.Write("Renk: ");
                string renk = Console.ReadLine();
                Console.Write("Motor Hacmi: ");
                int motorHacmi = int.Parse(Console.ReadLine());
                Console.Write("Günlük Ücret: ");
                decimal gunlukUcret = decimal.Parse(Console.ReadLine());
                Console.Write("Durum: ");
                string durum = Console.ReadLine();
                Console.Write("Sigorta Durumu: ");
                string sigortaDurumu = Console.ReadLine();
                Console.Write("Kilometre: ");
                int kilometre = int.Parse(Console.ReadLine());
                Console.Write("Son Bakım Tarihi (yyyy-MM-dd): ");
                DateTime sonBakimTarihi = DateTime.Parse(Console.ReadLine());
                Console.Write("Model: ");
                string model = Console.ReadLine();

                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    SqlCommand command = new SqlCommand("AracGuncelle", connection);
                    command.CommandType = System.Data.CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@AracID", aracID);
                    command.Parameters.AddWithValue("@MarkaID", markaID);
                    command.Parameters.AddWithValue("@Yil", yil);
                    command.Parameters.AddWithValue("@Plaka", plaka);
                    command.Parameters.AddWithValue("@VitesTipi", vitesTipi);
                    command.Parameters.AddWithValue("@YakıtTipi", yakitTipi);
                    command.Parameters.AddWithValue("@Renk", renk);
                    command.Parameters.AddWithValue("@MotorHacmi", motorHacmi);
                    command.Parameters.AddWithValue("@GunlukUcret", gunlukUcret);
                    command.Parameters.AddWithValue("@Durum", durum);
                    command.Parameters.AddWithValue("@SigortaDurumu", sigortaDurumu);
                    command.Parameters.AddWithValue("@Kilometre", kilometre);
                    command.Parameters.AddWithValue("@SonBakimTarihi", sonBakimTarihi);
                    command.Parameters.AddWithValue("@Model", model);

                    connection.Open();
                    try
                    {
                        command.ExecuteNonQuery();
                        Console.WriteLine("Araç başarıyla güncellendi.");
                    }
                    catch (Exception ex)
                    {
                        Console.WriteLine("Hata: " + ex.Message);
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("Hata: " + ex.Message);
            }
            Console.ReadKey();
        }

        public void ArabaBilgisi()
        {
            Console.Clear();

          
          

            try
            {
                Console.Write("AraçID: ");
                int aracID = int.Parse(Console.ReadLine());

                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    SqlCommand command = new SqlCommand("AracListeleme", connection);
                    command.CommandType = System.Data.CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@AracID", aracID);

                    connection.Open();
                    using (SqlDataReader reader = command.ExecuteReader())
                    {
                        Console.Clear();
                        Console.WriteLine("╔════════════════════════════════════════════════════╗");
                        Console.WriteLine("║                    ARAÇ BİLGİLERİ                  ║");
                        Console.WriteLine("╚════════════════════════════════════════════════════╝");

                        if (reader.Read())
                        {
                            Console.WriteLine($"AraçID: {reader["AracID"]}");
                            Console.WriteLine($"MarkaID: {reader["MarkaID"]}");
                            Console.WriteLine($"Yıl: {reader["Yil"]}");
                            Console.WriteLine($"Plaka: {reader["Plaka"]}");
                            Console.WriteLine($"Vites Tipi: {reader["VitesTipi"]}");
                            Console.WriteLine($"Yakıt Tipi: {reader["YakıtTipi"]}");
                            Console.WriteLine($"Renk: {reader["Renk"]}");
                            Console.WriteLine($"Motor Hacmi: {reader["MotorHacmi"]}");
                            Console.WriteLine($"Günlük Ücret: {reader["GunlukUcret"]}");
                            Console.WriteLine($"Durum: {reader["Durum"]}");
                            Console.WriteLine($"Sigorta Durumu: {reader["SigortaDurumu"]}");
                            Console.WriteLine($"Kilometre: {reader["Kilometre"]}");
                            Console.WriteLine($"Son Bakım Tarihi: {reader["SonBakimTarihi"]}");
                            Console.WriteLine($"Model: {reader["Model"]}");
                        }
                        else
                        {
                            Console.WriteLine("Araç bulunamadı.");
                        }

                        Console.WriteLine("═══════════════════════════════════════════════════");
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("Hata: " + ex.Message);
            }
            Console.ReadKey();
        }

        public void ArabaSilme()
        {
            Console.Clear();

            // Define the menu lines
            string[] menuLines = new string[]
            {
        "╔════════════════════════════════════════════════════╗",
        "║                    ARAÇ SİLME                      ║",
        "╠════════════════════════════════════════════════════╣",
        "║ 1. AraçID:                                         ║",
        "╠════════════════════════════════════════════════════╣",
        "║ İşlem Seçiniz:                                     ║",
        "╚════════════════════════════════════════════════════╝"
            };

            // Draw the menu
            DrawMenu(menuLines);

            try
            {
                Console.Write("AraçID: ");
                int aracID = int.Parse(Console.ReadLine());

                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    SqlCommand command = new SqlCommand("AracPasifeAlma", connection);
                    command.CommandType = System.Data.CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@AracID", aracID);

                    connection.Open();
                    try
                    {
                        command.ExecuteNonQuery();
                        Console.WriteLine("Araç başarıyla pasife alındı.");
                    }
                    catch (Exception ex)
                    {
                        Console.WriteLine("Hata: " + ex.Message);
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("Hata: " + ex.Message);
            }
            Console.ReadKey();
        }


        public void Arabalistele()
        {
            Console.Clear();

            try
            {
                using (SqlConnection conn = new SqlConnection(connectionString))
                {
                    conn.Open();
                    using (SqlCommand cmd = new SqlCommand("TumAraclarListeleme", conn))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;

                        using (SqlDataReader reader = cmd.ExecuteReader())
                        {
                            Console.Clear();
                            Console.WriteLine("╔══════════════════════════════════════════════════════════╗");
                            Console.WriteLine("║                     TÜM ARAÇLAR                          ║");
                            Console.WriteLine("╠══════════════════════════════════════════════════════════╣");

                            // Başlıkları yazdır
                            Console.WriteLine($"║ {"Araç ID",-8} ║ {"Model",-20} ║ {"Yıl",-4} ║ {"Günlük Ücret",-15} ║");
                            Console.WriteLine("╠══════════════════════════════════════════════════════════╣");

                            // Her aracın detaylarını yazdır
                            while (reader.Read())
                            {
                                var aracID = reader["AracID"] ?? "N/A";
                                var model = reader["Model"] ?? "N/A";
                                var yil = reader["Yil"] ?? "N/A";
                                var gunlukUcret = reader["GunlukUcret"] ?? "N/A";

                                // Araç bilgilerini ekrana yazdır
                                Console.WriteLine($"║ {aracID,-8} ║ {model,-20} ║ {yil,-4} ║ {gunlukUcret,-15} ║");
                            }

                            Console.WriteLine("╚══════════════════════════════════════════════════════════╝");
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                // Hata mesajını yazdır
                Console.WriteLine($"Bir hata oluştu: {ex.Message}");
            }
            Console.ReadLine();
        }

     //----------------------------------------------------------------------------------------------KİRALAMA MENU

        public void KiralamaMenu()
        {
            while (true)
            {
                Console.Clear();
                string[] menuLines = new string[]
                {
            "╔═══════════════════════════════════════════════════╗",
            "║                 KİRALAMA MENÜ                     ║",
            "╠═══════════════════════════════════════════════════╣",
            "║ 1. Kiralama Bilgisi                               ║",
            "║ 2. Kiralama Ekle                                  ║",
            "║ 3. Kiralama Güncelle                              ║",
            "║ 4. Kiralama Pasife Alma                           ║",
            "║ 5. Tüm Kiralamaları Listele                       ║",
            "║ 0. Ana Menüye Dön                                 ║",
            "╚═══════════════════════════════════════════════════╝"
                };

                DrawMenu(menuLines);
                Console.Write("İşlem Seçiniz: ");

                switch (Console.ReadLine())
                {
                    case "1":
                        KiralamaBilgisi();
                        break;
                    case "2":
                        KiralamaEkle();
                        break;
                    case "3":
                        KiralamaGuncelle();
                        break;
                    case "4":
                        KiralamaPasifeAlma();
                        break;
                    case "5":
                        KiralamaListele();
                        break;
                    case "0":
                        return;
                    default:
                        Console.WriteLine("Geçersiz seçim. Tekrar deneyin.");
                        break;
                }
            }
        }

        private void KiralamaBilgisi()
        {
            Console.Write("Kiralama ID giriniz: ");
            int kiralamaID = int.Parse(Console.ReadLine());

            using (SqlConnection conn = new SqlConnection(connectionString))
            {
                conn.Open();
                using (SqlCommand cmd = new SqlCommand("KiralamaBilgisi", conn))
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@KiralamaID", kiralamaID);

                    SqlDataReader reader = cmd.ExecuteReader();
                    Console.Clear();
                    Console.WriteLine("╔═══════════════════════════════╗");
                    Console.WriteLine("║         KİRALAMA BİLGİSİ      ║");
                    Console.WriteLine("╚═══════════════════════════════╝");

                    while (reader.Read())
                    {
                        Console.WriteLine($"Kiralama ID: {reader["KiralamaID"]}");
                        Console.WriteLine($"Müşteri ID: {reader["MusteriID"]}");
                        Console.WriteLine($"Araç ID: {reader["AracID"]}");
                        Console.WriteLine($"Kiralama Tarihi: {reader["KiralamaTarihi"]}");
                        Console.WriteLine($"İade Tarihi: {reader["IadeTarihi"]}");
                        Console.WriteLine($"Ücret: {reader["Ucret"]}");
                        Console.WriteLine($"Gecikme Ücreti: {reader["GecikmeUcreti"]}");
                        Console.WriteLine($"Durum: {reader["Durum"]}");
                        Console.WriteLine("═════════════════════════════════");
                    }
                }
            }
            Console.ReadLine();
        }

        private void KiralamaEkle()
        {
            Console.Write("Müşteri ID giriniz: ");
            int musteriID = int.Parse(Console.ReadLine());
            Console.Write("Araç ID giriniz: ");
            int aracID = int.Parse(Console.ReadLine());
            Console.Write("Kiralama Tarihi giriniz (yyyy-MM-dd): ");
            DateTime kiralamaTarihi = DateTime.Parse(Console.ReadLine());
            Console.Write("İade Tarihi giriniz (yyyy-MM-dd): ");
            DateTime iadeTarihi = DateTime.Parse(Console.ReadLine());
            Console.Write("Gecikme Ücreti giriniz: ");
            decimal gecikmeUcreti = decimal.Parse(Console.ReadLine());
            Console.Write("Durum giriniz: ");
            string durum = Console.ReadLine();

            using (SqlConnection conn = new SqlConnection(connectionString))
            {
                conn.Open();
                using (SqlCommand cmd = new SqlCommand("KiralamaEkle", conn))
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@MusteriID", musteriID);
                    cmd.Parameters.AddWithValue("@AracID", aracID);
                    cmd.Parameters.AddWithValue("@KiralamaTarihi", kiralamaTarihi);
                    cmd.Parameters.AddWithValue("@IadeTarihi", iadeTarihi);
                    cmd.Parameters.AddWithValue("@GecikmeUcreti", gecikmeUcreti);
                    cmd.Parameters.AddWithValue("@Durum", durum);

                    cmd.ExecuteNonQuery();
                    Console.WriteLine("╔═══════════════════════════════╗");
                    Console.WriteLine("║     KİRALAMA EKLEME BAŞARILI  ║");
                    Console.WriteLine("╚═══════════════════════════════╝");
                }
            }
        }

        private void KiralamaGuncelle()
        {
            try
            {
                Console.Write("Kiralama ID giriniz: ");
                int kiralamaID = int.Parse(Console.ReadLine());

                Console.Write("Müşteri ID giriniz: ");
                int musteriID = int.Parse(Console.ReadLine());

                Console.Write("Araç ID giriniz: ");
                int aracID = int.Parse(Console.ReadLine());

                Console.Write("Kiralama Tarihi giriniz (yyyy-MM-dd): ");
                DateTime kiralamaTarihi = DateTime.Parse(Console.ReadLine());

                Console.Write("İade Tarihi giriniz (yyyy-MM-dd): ");
                DateTime iadeTarihi = DateTime.Parse(Console.ReadLine());

                Console.Write("Ücret giriniz: ");
                decimal ucret = decimal.Parse(Console.ReadLine());

                Console.Write("Gecikme Ücreti giriniz: ");
                decimal gecikmeUcreti = decimal.Parse(Console.ReadLine());

                Console.Write("Durum giriniz: ");
                string durum = Console.ReadLine();

                using (SqlConnection conn = new SqlConnection(connectionString))
                {
                    conn.Open();
                    using (SqlCommand cmd = new SqlCommand("KiralamaGuncelle", conn))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@KiralamaID", kiralamaID);
                        cmd.Parameters.AddWithValue("@MusteriID", musteriID);
                        cmd.Parameters.AddWithValue("@AracID", aracID);
                        cmd.Parameters.AddWithValue("@KiralamaTarihi", kiralamaTarihi);
                        cmd.Parameters.AddWithValue("@IadeTarihi", iadeTarihi);
                        cmd.Parameters.AddWithValue("@Ucret", ucret);
                        cmd.Parameters.AddWithValue("@GecikmeUcreti", gecikmeUcreti);
                        cmd.Parameters.AddWithValue("@Durum", durum);

                        cmd.ExecuteNonQuery();
                        Console.WriteLine("╔═══════════════════════════════╗");
                        Console.WriteLine("║ KİRALAMA GÜNCELLEME BAŞARILI  ║");
                        Console.WriteLine("╚═══════════════════════════════╝");
                    }
                }
            }
            catch (FormatException ex)
            {
                Console.WriteLine($"Girdi formatında bir hata oluştu: {ex.Message}");
            }
            catch (SqlException ex)
            {
                Console.WriteLine($"Veritabanı hatası oluştu: {ex.Message}");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Beklenmeyen bir hata oluştu: {ex.Message}");
            }

            Console.WriteLine("Devam etmek için bir tuşa basın...");
            Console.ReadLine();
        }

        private void KiralamaPasifeAlma()
        {
            Console.Write("Kiralama ID giriniz: ");
            int kiralamaID = int.Parse(Console.ReadLine());

            using (SqlConnection conn = new SqlConnection(connectionString))
            {
                conn.Open();
                using (SqlCommand cmd = new SqlCommand("KiralamaPasifeAlma", conn))
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@KiralamaID", kiralamaID);

                    cmd.ExecuteNonQuery();
                    Console.WriteLine("╔═══════════════════════════════╗");
                    Console.WriteLine("║KİRALAMA PASİFE ALMA BAŞARILI  ║");
                    Console.WriteLine("╚═══════════════════════════════╝");
                }
            }
        }

        private void KiralamaListele()
        {
            using (SqlConnection conn = new SqlConnection(connectionString))
            {
                conn.Open();
                using (SqlCommand cmd = new SqlCommand("TumKiralamalar", conn))
                {
                    cmd.CommandType = CommandType.StoredProcedure;

                    SqlDataReader reader = cmd.ExecuteReader();
                    Console.Clear();
                    Console.WriteLine("╔════════════════════════════════════════════════════╗");
                    Console.WriteLine("║                 TÜM KİRALAMALAR                    ║");
                    Console.WriteLine("╚════════════════════════════════════════════════════╝");

                    while (reader.Read())
                    {
                        Console.WriteLine($"Kiralama ID: {reader["KiralamaID"]}, Müşteri ID: {reader["MusteriID"]}, Araç ID: {reader["AracID"]}, Kiralama Tarihi: {reader["KiralamaTarihi"]}, İade Tarihi: {reader["IadeTarihi"]}, Ücret: {reader["Ucret"]}, Gecikme Ücreti: {reader["GecikmeUcreti"]}, Durum: {reader["Durum"]}");

                        Console.WriteLine("════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════");
                    }
                }
            }
            Console.ReadLine();
        }


     //----------------------------------------------------------------------------------------------FATURA MENU
        private void FaturaMenu()
        {
            while (true)
            {
                Console.Clear();
                string[] menuLines = new string[]
                {
            "╔════════════════════════════════════════════════════╗",
            "║                    FATURALAR                       ║",
            "╠════════════════════════════════════════════════════╣",
            "║ 1. Fatura Bilgisi                                  ║",
            "║ 2. Fatura Ekle                                     ║",
            "║ 3. Fatura Güncelle                                 ║",
            "║ 4. Fatura Pasif Yap                                ║",
            "║ 5. Faturaları Listele                              ║",
            "║ 6. Kasa Bakiye Bilgisi                             ║",
            "║ 7. Ana Menüye Dön                                  ║",
            "║ 8. Çıkış                                           ║",
            "╠════════════════════════════════════════════════════╣",
            "║ İşlem Seçiniz:                                     ║",
            "╚════════════════════════════════════════════════════╝"
                };

                foreach (string line in menuLines)
                {
                    Console.SetCursorPosition((Console.WindowWidth - line.Length) / 2, Console.CursorTop);
                    Console.WriteLine(line);
                }

              
                Console.SetCursorPosition((Console.WindowWidth - "İşlem Seçiniz: ".Length) / 2 + 14, Console.CursorTop - 2);
                string choice = Console.ReadLine();

                try
                {
                    switch (choice)
                    {
                        case "1":
                            FaturaBilgisi();
                            break;
                        case "2":
                            FaturaEkle();
                            break;
                        case "3":
                            FaturaGuncelle();
                            break;
                        case "4":
                            FaturaSilme();
                            break;
                        case "5":
                            TumFaturalariListele();
                            break;
                        case "6":
                            KasaBakiyeBilgisi();
                            break;
                        case "7":
                            
                            return;
                            break;
                        case "8":
                            Console.WriteLine("Sistem Kapatılıyor...");
                            Thread.Sleep(1000);
                            Environment.Exit(0);
                            break;
                        default:
                            Console.WriteLine("Geçersiz seçenek, lütfen tekrar deneyin.");
                            Console.ReadLine();
                            break;
                    }
                }
                catch (Exception ex)
                {
                    Console.WriteLine("Bir hata oluştu: " + ex.Message);
                    Console.WriteLine("Devam etmek için bir tuşa basın...");
                    Console.ReadLine();
                }
            }
        }

        private void FaturaBilgisi()
        {
            Console.Write("Fatura ID giriniz: ");
            int faturaID = int.Parse(Console.ReadLine());

            try
            {
                using (SqlConnection conn = new SqlConnection(connectionString))
                {
                    conn.Open();
                    using (SqlCommand cmd = new SqlCommand("FaturaBilgisi", conn))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@FaturaID", faturaID);

                        SqlDataReader reader = cmd.ExecuteReader();
                        Console.Clear();
                        Console.WriteLine("╔════════════════════════════════════════════════════╗");
                        Console.WriteLine("║                    FATURA BİLGİLERİ                ║");
                        Console.WriteLine("╚════════════════════════════════════════════════════╝");
                        while (reader.Read())
                        {
                            Console.WriteLine(" Fatura ID: {0}", reader["FaturaID"]);
                            Console.WriteLine(" Kiralama ID: {0}", reader["KiralamaID"]);
                            Console.WriteLine(" Fatura Tarihi: {0}", reader["FaturaTarihi"]);
                            Console.WriteLine(" Tutar: {0}", reader["Tutar"]);
                            Console.WriteLine(" Ödenme Durumu: {0}", reader["OdenmeDurumu"]);
                            Console.WriteLine(" Ödenme Tarihi: {0}", reader["OdenmeTarihi"]);
                            Console.WriteLine(" Ödeme Yöntemi: {0}", reader["OdemeYontemi"]);
                            Console.WriteLine(" Açıklama: {0}", reader["Aciklama"]);
                            Console.WriteLine(" Müşteri ID: {0}", reader["MusteriID"]);
                            Console.WriteLine("╔════════════════════════════════════════════════════╗");
                        }
                        Console.WriteLine("╚════════════════════════════════════════════════════╝");
                        Console.WriteLine("Devam etmek için bir tuşa basın...");
                        Console.ReadLine();
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("Bir hata oluştu: " + ex.Message);
                Console.ReadLine();
            }
        }


        private void FaturaEkle()
        {
            Console.Clear();
            string[] formLines = new string[]
            {
        "╔════════════════════════════════════════════════════╗",
        "║                    FATURA EKLE                     ║",
        "╠════════════════════════════════════════════════════╣",
        "║ Kiralama ID:                                       ║",
        "║ Fatura Tarihi (YYYY-MM-DD):                        ║",
        "║ Tutar:                                             ║",
        "║ Ödenme Durumu:                                     ║",
        "║ Ödenme Tarihi (YYYY-MM-DD):                        ║",
        "║ Ödeme Yöntemi:                                     ║",
        "║ Açıklama:                                          ║",
        "║ Müşteri ID:                                        ║",
        "╚════════════════════════════════════════════════════╝"
            };

            foreach (string line in formLines)
            {
                Console.SetCursorPosition((Console.WindowWidth - line.Length) / 2, Console.CursorTop);
                Console.WriteLine(line);
            }

            // Kullanıcı girişlerinin yerlerini ayarlamak için her bir satırdan sonra yeni bir satıra geçelim
            int cursorLeft, cursorTop;

            cursorLeft = (Console.WindowWidth - "Kiralama ID: ".Length) / 2 + 14;
            cursorTop = Console.CursorTop - formLines.Length + 3;
            Console.SetCursorPosition(cursorLeft, cursorTop);
            int kiralamaID = int.Parse(Console.ReadLine());

            cursorLeft = (Console.WindowWidth - "Fatura Tarihi (YYYY-MM-DD): ".Length) / 2 + 26;
            cursorTop += 1;
            Console.SetCursorPosition(cursorLeft, cursorTop);
            DateTime faturaTarihi = DateTime.Parse(Console.ReadLine());

            cursorLeft = (Console.WindowWidth - "Tutar: ".Length) / 2 + 14;
            cursorTop += 1;
            Console.SetCursorPosition(cursorLeft, cursorTop);
            decimal tutar = decimal.Parse(Console.ReadLine());

            cursorLeft = (Console.WindowWidth - "Ödenme Durumu: ".Length) / 2 + 17;
            cursorTop += 1;
            Console.SetCursorPosition(cursorLeft, cursorTop);
            string odenmeDurumu = Console.ReadLine();

            cursorLeft = (Console.WindowWidth - "Ödenme Tarihi (YYYY-MM-DD): ".Length) / 2 + 26;
            cursorTop += 1;
            Console.SetCursorPosition(cursorLeft, cursorTop);
            DateTime odenmeTarihi = DateTime.Parse(Console.ReadLine());

            cursorLeft = (Console.WindowWidth - "Ödeme Yöntemi: ".Length) / 2 + 18;
            cursorTop += 1;
            Console.SetCursorPosition(cursorLeft, cursorTop);
            string odemeYontemi = Console.ReadLine();

            cursorLeft = (Console.WindowWidth - "Açıklama: ".Length) / 2 + 15;
            cursorTop += 1;
            Console.SetCursorPosition(cursorLeft, cursorTop);
            string aciklama = Console.ReadLine();

            cursorLeft = (Console.WindowWidth - "Müşteri ID: ".Length) / 2 + 15;
            cursorTop += 1;
            Console.SetCursorPosition(cursorLeft, cursorTop);
            int musteriID = int.Parse(Console.ReadLine());

            try
            {
                using (SqlConnection conn = new SqlConnection(connectionString))
                {
                    conn.Open();
                    using (SqlCommand cmd = new SqlCommand("FaturaEkle", conn))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@KiralamaID", kiralamaID);
                        cmd.Parameters.AddWithValue("@FaturaTarihi", faturaTarihi);
                        cmd.Parameters.AddWithValue("@Tutar", tutar);
                        cmd.Parameters.AddWithValue("@OdenmeDurumu", odenmeDurumu);
                        cmd.Parameters.AddWithValue("@OdenmeTarihi", odenmeTarihi);
                        cmd.Parameters.AddWithValue("@OdemeYontemi", odemeYontemi);
                        cmd.Parameters.AddWithValue("@Aciklama", aciklama);
                        cmd.Parameters.AddWithValue("@MusteriID", musteriID);

                        cmd.ExecuteNonQuery();
                        Console.Clear();
                        Console.WriteLine("╔════════════════════════════════════════════════════╗");
                        Console.WriteLine("║                    FATURA EKLEME                   ║");
                        Console.WriteLine("╠════════════════════════════════════════════════════╣");
                        Console.WriteLine("║ Fatura başarıyla eklendi.                          ║");
                        Console.WriteLine("╚════════════════════════════════════════════════════╝");
                    }
                }
            }
            catch (Exception ex)
            {
                Console.Clear();
                Console.WriteLine("╔════════════════════════════════════════════════════╗");
                Console.WriteLine("║                    FATURA EKLEME                   ║");
                Console.WriteLine("╠════════════════════════════════════════════════════╣");
                Console.WriteLine($"║ Bir hata oluştu:  + {ex.Message}                  ║");
                Console.WriteLine("╚════════════════════════════════════════════════════╝");
            }
            Console.ReadLine();
        }


        private void FaturaGuncelle()
        {
            Console.Clear();
            string[] formLines = new string[]
            {
        "╔════════════════════════════════════════════════════╗",
        "║                    FATURA GÜNCELLE                 ║",
        "╠════════════════════════════════════════════════════╣",
        "║ Fatura ID:                                         ║",
        "║ Kiralama ID:                                       ║",
        "║ Fatura Tarihi (YYYY-MM-DD):                        ║",
        "║ Tutar:                                             ║",
        "║ Ödenme Durumu:                                     ║",
        "║ Ödenme Tarihi (YYYY-MM-DD):                        ║",
        "║ Ödeme Yöntemi:                                     ║",
        "║ Açıklama:                                          ║",
        "║ Müşteri ID:                                        ║",
        "╚════════════════════════════════════════════════════╝"
            };

            foreach (string line in formLines)
            {
                Console.SetCursorPosition((Console.WindowWidth - line.Length) / 2, Console.CursorTop);
                Console.WriteLine(line);
            }

            Console.SetCursorPosition((Console.WindowWidth - "Fatura ID: ".Length) / 2 + 14, Console.CursorTop - 10);
            int faturaID = int.Parse(Console.ReadLine());
            Console.SetCursorPosition((Console.WindowWidth - "Kiralama ID: ".Length) / 2 + 14, Console.CursorTop - 8);
            int kiralamaID = int.Parse(Console.ReadLine());
            Console.SetCursorPosition((Console.WindowWidth - "Fatura Tarihi (YYYY-MM-DD): ".Length) / 2 + 26, Console.CursorTop - 6);
            DateTime faturaTarihi = DateTime.Parse(Console.ReadLine());
            Console.SetCursorPosition((Console.WindowWidth - "Tutar: ".Length) / 2 + 14, Console.CursorTop - 4);
            decimal tutar = decimal.Parse(Console.ReadLine());
            Console.SetCursorPosition((Console.WindowWidth - "Ödenme Durumu: ".Length) / 2 + 17, Console.CursorTop - 2);
            string odenmeDurumu = Console.ReadLine();
            Console.SetCursorPosition((Console.WindowWidth - "Ödenme Tarihi (YYYY-MM-DD): ".Length) / 2 + 26, Console.CursorTop);
            DateTime odenmeTarihi = DateTime.Parse(Console.ReadLine());
            Console.SetCursorPosition((Console.WindowWidth - "Ödeme Yöntemi: ".Length) / 2 + 18, Console.CursorTop + 2);
            string odemeYontemi = Console.ReadLine();
            Console.SetCursorPosition((Console.WindowWidth - "Açıklama: ".Length) / 2 + 15, Console.CursorTop + 4);
            string aciklama = Console.ReadLine();
            Console.SetCursorPosition((Console.WindowWidth - "Müşteri ID: ".Length) / 2 + 15, Console.CursorTop + 6);
            int musteriID = int.Parse(Console.ReadLine());

            try
            {
                using (SqlConnection conn = new SqlConnection(connectionString))
                {
                    conn.Open();
                    using (SqlCommand cmd = new SqlCommand("FaturaGuncelle", conn))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@FaturaID", faturaID);
                        cmd.Parameters.AddWithValue("@KiralamaID", kiralamaID);
                        cmd.Parameters.AddWithValue("@FaturaTarihi", faturaTarihi);
                        cmd.Parameters.AddWithValue("@Tutar", tutar);
                        cmd.Parameters.AddWithValue("@OdenmeDurumu", odenmeDurumu);
                        cmd.Parameters.AddWithValue("@OdenmeTarihi", odenmeTarihi);
                        cmd.Parameters.AddWithValue("@OdemeYontemi", odemeYontemi);
                        cmd.Parameters.AddWithValue("@Aciklama", aciklama);
                        cmd.Parameters.AddWithValue("@MusteriID", musteriID);

                        cmd.ExecuteNonQuery();
                        Console.Clear();
                        Console.WriteLine("╔════════════════════════════════════════════════════╗");
                        Console.WriteLine("║                    FATURA GÜNCELLE                 ║");
                        Console.WriteLine("╠════════════════════════════════════════════════════╣");
                        Console.WriteLine("║ Fatura başarıyla güncellendi.                      ║");
                        Console.WriteLine("╚════════════════════════════════════════════════════╝");
                    }
                }
            }
            catch (Exception ex)
            {
                Console.Clear();
                Console.WriteLine("╔════════════════════════════════════════════════════╗");
                Console.WriteLine("║                    FATURA GÜNCELLE                 ║");
                Console.WriteLine("╠════════════════════════════════════════════════════╣");
                Console.WriteLine($"║ Bir hata oluştu:  + {ex.Message}                  ║");
                Console.WriteLine("╚════════════════════════════════════════════════════╝");
            }
            Console.ReadLine();
        }

        private void FaturaSilme()
        {
            Console.Clear();
            string[] formLines = new string[]
            {
        "╔════════════════════════════════════════════════════╗",
        "║                    FATURA PASİF YAP                ║",
        "╠════════════════════════════════════════════════════╣",
        "║ Fatura ID:                                         ║",
        "╚════════════════════════════════════════════════════╝"
            };

            foreach (string line in formLines)
            {
                Console.SetCursorPosition((Console.WindowWidth - line.Length) / 2, Console.CursorTop);
                Console.WriteLine(line);
            }

            Console.SetCursorPosition((Console.WindowWidth - "Fatura ID: ".Length) / 2 + 14, Console.CursorTop - 2);
            int faturaID = int.Parse(Console.ReadLine());

            try
            {
                using (SqlConnection conn = new SqlConnection(connectionString))
                {
                    conn.Open();
                    using (SqlCommand cmd = new SqlCommand("FaturaPasifYap", conn))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@FaturaID", faturaID);

                        cmd.ExecuteNonQuery();
                        Console.Clear();
                        Console.WriteLine("╔════════════════════════════════════════════════════╗");
                        Console.WriteLine("║                    FATURA PASİF YAP                ║");
                        Console.WriteLine("╠════════════════════════════════════════════════════╣");
                        Console.WriteLine("║ Fatura başarıyla pasif yapıldı.                    ║");
                        Console.WriteLine("╚════════════════════════════════════════════════════╝");
                    }
                }
            }
            catch (Exception ex)
            {
                Console.Clear();
                Console.WriteLine("╔════════════════════════════════════════════════════╗");
                Console.WriteLine("║                    FATURA PASİF YAP                ║");
                Console.WriteLine("╠════════════════════════════════════════════════════╣");
                Console.WriteLine("║ Bir hata oluştu: " + ex.Message                      );
                Console.WriteLine("╚════════════════════════════════════════════════════╝");
            }
            Console.ReadLine();
        }

        private void KasaBakiyeBilgisi()
        {
            try
            {
                using (SqlConnection conn = new SqlConnection(connectionString))
                {
                    conn.Open();
                    using (SqlCommand cmd = new SqlCommand("KasaBakiyeBilgileri", conn))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        SqlDataReader reader = cmd.ExecuteReader();
                        Console.Clear();
                        Console.WriteLine("╔════════════════════════════════════════════════════╗");
                        Console.WriteLine("║                    KASA BAKİYE BİLGİSİ             ║");
                        Console.WriteLine("╚════════════════════════════════════════════════════╝");
                        if (reader.Read())
                        {
                            Console.WriteLine("║ Bakiye: {0}", reader["bakiye"]+ "                                   ║");
                            // Eğer `GuncellemeTarihi` gibi bir sütun varsa ve saklı yordamdan döndürülüyorsa onu da yazdırabilirsiniz.
                            // Console.WriteLine("║ Güncelleme Tarihi: {0}", reader["GuncellemeTarihi"]);
                        }
                        Console.WriteLine("╚════════════════════════════════════════════════════╝");
                        Console.WriteLine("Devam etmek için bir tuşa basın...");
                        Console.ReadLine();
                    }
                }
            }
            catch (Exception ex)
            {
                Console.Clear();
                Console.WriteLine("╔════════════════════════════════════════════════════╗");
                Console.WriteLine("║                    KASA BAKİYE BİLGİSİ             ║");
                Console.WriteLine("╠════════════════════════════════════════════════════╣");
                Console.WriteLine($"║ Bir hata oluştu:  + {ex.Message}                  ║");
                Console.WriteLine("╚════════════════════════════════════════════════════╝");
                Console.ReadLine();
            }
        }


        private void TumFaturalariListele()
        {
            try
            {
                using (SqlConnection conn = new SqlConnection(connectionString))
                {
                    Console.Clear();
                    conn.Open();
                    using (SqlCommand cmd = new SqlCommand("TumFaturalar", conn))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        SqlDataReader reader = cmd.ExecuteReader();
                        Console.Clear();
                        Console.WriteLine("                                  ╔════════════════════════════════════════════════════╗");
                        Console.WriteLine("                                  ║                    TÜM FATURALAR                   ║");
                        Console.WriteLine("                                  ╚════════════════════════════════════════════════════╝");


                        while (reader.Read())
                        {
                            string[] faturaLines = new string[]
                            {
                        $"Fatura ID: {reader["FaturaID"]}",
                        $"Kiralama ID: {reader["KiralamaID"]}",
                        $"Fatura Tarihi: {reader["FaturaTarihi"]}",
                        $"Tutar: {reader["Tutar"]}",
                        $"Ödenme Durumu: {reader["OdenmeDurumu"]}",
                        $"Ödenme Tarihi: {reader["OdenmeTarihi"]}",
                        $"Ödeme Yöntemi: {reader["OdemeYontemi"]}",
                        $"Açıklama: {reader["Aciklama"]}",
                        $"Müşteri ID: {reader["MusteriID"]}",
                        "╠════════════════════════════════════════════════════╣"
                            };

                            foreach (string line in faturaLines)
                            {
                                Console.SetCursorPosition((Console.WindowWidth - line.Length) / 2, Console.CursorTop);
                                Console.WriteLine(line);
                            }
                        }

                        Console.SetCursorPosition((Console.WindowWidth - "Devam etmek için bir tuşa basın...".Length) / 2, Console.CursorTop);
                        Console.WriteLine("Devam etmek için bir tuşa basın...");
                        Console.ReadLine();
                    }
                }
            }
            catch (Exception ex)
            {
                Console.Clear();
                Console.WriteLine("                                     ╔════════════════════════════════════════════════════╗");
                Console.WriteLine("                                     ║                    TÜM FATURALAR                   ║");
                Console.WriteLine("                                     ╠════════════════════════════════════════════════════╣");


                Console.SetCursorPosition((Console.WindowWidth - ("Bir hata oluştu: " + ex.Message).Length) / 2, Console.CursorTop);
                Console.WriteLine("║ Bir hata oluştu: " + ex.Message);
                Console.WriteLine("╚════════════════════════════════════════════════════╝");
                Console.ReadLine();
            }
        }
    

               
     //----------------------------------------------------------------------------------------------CALISANLAR MENU

    

        private void CalısanMenu()
        {
            while (true)
            {
                Console.Clear();

                string[] menuLines = new string[]
                {
            "╔════════════════════════════════════════════════════╗",
            "║                    ÇALIŞANLAR                      ║",
            "╠════════════════════════════════════════════════════╣",
            "║ 1. Çalışan Bilgisi                                 ║",
            "║ 2. Çalışan Ekle                                    ║",
            "║ 3. Çalışan Güncelle                                ║",
            "║ 4. Çalışan Pasif Yap                               ║",
            "║ 5. Tüm Çalışanları Listele                         ║",
            "║ 6. Ana Menüye Dön                                  ║",
            "║ 7. Çıkış                                           ║",
            "╠════════════════════════════════════════════════════╣",
            "║ İşlem Seçiniz:                                     ║",
            "╚════════════════════════════════════════════════════╝"
                };

                DrawMenu(menuLines);

                Console.SetCursorPosition((Console.WindowWidth - "İşlem Seçiniz: ".Length) / 2 + 14, Console.CursorTop - 2);
                string choice = Console.ReadLine();

                try
                {
                    switch (choice)
                    {
                        case "1":
                            CalisanBilgisi();
                            break;
                        case "2":
                            CalisanEkle();
                            break;
                        case "3":
                            CalisanGuncelle();
                            break;
                        case "4":
                            CalisanPasifeAlma();
                            break;
                        case "5":
                            TumCalisanlariListele();
                            break;
                        case "6":
                            return;
                        case "7":
                            Console.WriteLine("Sistem Kapatılıyor...");
                            Thread.Sleep(1000);
                            Environment.Exit(0);
                            break;
                        default:
                            Console.WriteLine("Geçersiz seçenek, lütfen tekrar deneyin.");
                            Console.ReadLine();
                            break;
                    }
                }
                catch (Exception ex)
                {
                    Console.WriteLine("\n\nBir hata oluştu: " + ex.Message);
                    Console.WriteLine("" +
                        "Devam etmek için bir tuşa basın...");
                    Console.ReadLine();
                }
            }
        }

        private void CalisanEkle()
        {
            Console.Clear();

            string[] menuLines = new string[]
            {
        "╔════════════════════════════════════════════════════╗",
        "║                    ÇALIŞAN EKLE                    ║",
        "╠════════════════════════════════════════════════════╣",
        "║ Ad:                                                ║",
        "║ Soyad:                                             ║",
        "║ Telefon:                                           ║",
        "║ Email:                                             ║",
        "║ Pozisyon:                                          ║",
        "║ Maas:                                              ║",
        "║ IseGirisTarihi:                                    ║",
        "╚════════════════════════════════════════════════════╝"
            };

            DrawMenu(menuLines);

            Console.SetCursorPosition(45, 4); string ad = Console.ReadLine();
            Console.SetCursorPosition(45, 5); string soyad = Console.ReadLine();
            Console.SetCursorPosition(45, 6); string telefon = Console.ReadLine();
            Console.SetCursorPosition(45, 7); string email = Console.ReadLine();
            Console.SetCursorPosition(45, 8); string pozisyon = Console.ReadLine();
            Console.SetCursorPosition(45, 9); decimal maas = Convert.ToDecimal(Console.ReadLine());
            Console.SetCursorPosition(45, 10); DateTime iseGirisTarihi = Convert.ToDateTime(Console.ReadLine());

            using (SqlConnection con = new SqlConnection(connectionString))
            {
                using (SqlCommand cmd = new SqlCommand("CalisanEkle", con))
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@Ad", ad);
                    cmd.Parameters.AddWithValue("@Soyad", soyad);
                    cmd.Parameters.AddWithValue("@Telefon", telefon);
                    cmd.Parameters.AddWithValue("@Email", email);
                    cmd.Parameters.AddWithValue("@Pozisyon", pozisyon);
                    cmd.Parameters.AddWithValue("@Maas", maas);
                    cmd.Parameters.AddWithValue("@IseGirisTarihi", iseGirisTarihi);

                    con.Open();
                    cmd.ExecuteNonQuery();
                    con.Close();
                }
            }
            Console.WriteLine("\n\nÇalışan başarıyla eklendi.");
            Console.ReadLine();
        }


        private void CalisanGuncelle()
        {
            Console.Clear();
           

            string[] menuLines = new string[]
            {
        "╔════════════════════════════════════════════════════╗",
        "║                 ÇALIŞAN GÜNCELLE                   ║",
        "╠════════════════════════════════════════════════════╣",
        "║ Çalışan ID:                                        ║",
        "║ Ad:                                                ║",
        "║ Soyad:                                             ║",
        "║ Telefon:                                           ║",
        "║ Email:                                             ║",
        "║ Pozisyon:                                          ║",
        "║ Maas:                                              ║",
        "║ IseGirisTarihi:                                    ║",
        "║ Aktif (1/0):                                       ║",
        "╚════════════════════════════════════════════════════╝"
            };

            DrawMenu(menuLines);

            Console.SetCursorPosition(25, 4); int calisanID = Convert.ToInt32(Console.ReadLine());
            Console.SetCursorPosition(25, 5); string ad = Console.ReadLine();
            Console.SetCursorPosition(25, 6); string soyad = Console.ReadLine();
            Console.SetCursorPosition(25, 7); string telefon = Console.ReadLine();
            Console.SetCursorPosition(25, 8); string email = Console.ReadLine();
            Console.SetCursorPosition(25, 9); string pozisyon = Console.ReadLine();
            Console.SetCursorPosition(25, 10); decimal maas = Convert.ToDecimal(Console.ReadLine());
            Console.SetCursorPosition(25, 11); DateTime iseGirisTarihi = Convert.ToDateTime(Console.ReadLine());
            Console.SetCursorPosition(25, 12); bool aktif = Convert.ToBoolean(Convert.ToInt32(Console.ReadLine()));

            using (SqlConnection con = new SqlConnection(connectionString))
            {
                using (SqlCommand cmd = new SqlCommand("CalisanGuncelle", con))
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@CalisanID", calisanID);
                    cmd.Parameters.AddWithValue("@Ad", ad);
                    cmd.Parameters.AddWithValue("@Soyad", soyad);
                    cmd.Parameters.AddWithValue("@Telefon", telefon);
                    cmd.Parameters.AddWithValue("@Email", email);
                    cmd.Parameters.AddWithValue("@Pozisyon", pozisyon);
                    cmd.Parameters.AddWithValue("@Maas", maas);
                    cmd.Parameters.AddWithValue("@IseGirisTarihi", iseGirisTarihi);
                    cmd.Parameters.AddWithValue("@Aktif", aktif);

                    con.Open();
                    cmd.ExecuteNonQuery();
                    con.Close();
                }
            }
            Console.WriteLine("Çalışan başarıyla güncellendi.");
            Console.ReadLine();
        }


        private void CalisanBilgisi()
        {
            Console.Clear();
           

            string[] menuLines = new string[]
            {
        "╔════════════════════════════════════════════════════╗",
        "║                 ÇALIŞAN BİLGİSİ                    ║",
        "╠════════════════════════════════════════════════════╣",
        "║ Çalışan ID:                                        ║",
        "╚════════════════════════════════════════════════════╝"
            };

            DrawMenu(menuLines);

            Console.SetCursorPosition(42, 4);
            int calisanID = Convert.ToInt32(Console.ReadLine());

            using (SqlConnection con = new SqlConnection(connectionString))
            {
                using (SqlCommand cmd = new SqlCommand("CalisanBilgisi", con))
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@CalisanID", calisanID);

                    con.Open();
                    SqlDataReader reader = cmd.ExecuteReader();

                    if (reader.Read())
                    {
                        Console.WriteLine($"Ad: {reader["Ad"]}");
                        Console.WriteLine($"Soyad: {reader["Soyad"]}");
                        Console.WriteLine($"Telefon: {reader["Telefon"]}");
                        Console.WriteLine($"Email: {reader["Email"]}");
                        Console.WriteLine($"Pozisyon: {reader["Pozisyon"]}");
                        Console.WriteLine($"Maas: {reader["Maas"]}");
                        Console.WriteLine($"IseGirisTarihi: {reader["IseGirisTarihi"]}");
                        Console.WriteLine($"Aktif: {reader["Aktif"]}");
                    }
                    else
                    {
                        Console.WriteLine("Çalışan bulunamadı.");
                    }

                    con.Close();
                }
            }
            Console.ReadLine();
        }

        private void CalisanPasifeAlma()
        {
            Console.Clear();
          

            string[] menuLines = new string[]
            {
        "╔════════════════════════════════════════════════════╗",
        "║                ÇALIŞANI PASİFE AL                  ║",
        "╠════════════════════════════════════════════════════╣",
        "║ Çalışan ID:                                        ║",
        "╚════════════════════════════════════════════════════╝"
            };

            DrawMenu(menuLines);

            Console.SetCursorPosition(40, 4); int calisanID = Convert.ToInt32(Console.ReadLine());

            using (SqlConnection con = new SqlConnection(connectionString))
            {
                using (SqlCommand cmd = new SqlCommand("CalisanPasifeAlma", con))
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@CalisanID", calisanID);

                    con.Open();
                    cmd.ExecuteNonQuery();
                    con.Close();
                }
            }
            Console.WriteLine("Çalışan başarıyla pasif hale getirildi.");
            Console.ReadLine();
        }

        private void TumCalisanlariListele()
        {
            Console.Clear();

            string[] menuLines = new string[]
            {
        "                ╔════════════════════════════════════════════════════╗",
        "                ║                 TÜM ÇALIŞANLAR                     ║",
        "                ╚════════════════════════════════════════════════════╝"
            };

            DrawMenu(menuLines);

            using (SqlConnection con = new SqlConnection(connectionString))
            {
                using (SqlCommand cmd = new SqlCommand("TumCalisanlariListele", con))
                {
                    cmd.CommandType = CommandType.StoredProcedure;

                    con.Open();
                    SqlDataReader reader = cmd.ExecuteReader();

                    int lineIndex = menuLines.Length + 1; 

                    while (reader.Read())
                    {
                        string[] lines = new string[]
                        {
                    $"ID: {reader["CalisanID"]}",
                    $"Ad: {reader["Ad"]}",
                    $"Soyad: {reader["Soyad"]}",
                    $"Telefon: {reader["Telefon"]}",
                    $"Email: {reader["Email"]}",
                    $"Pozisyon: {reader["Pozisyon"]}",
                    $"Maas: {reader["Maas"]}",
                    $"IseGirisTarihi: {reader["IseGirisTarihi"]}",
                    $"Aktif: {reader["Aktif"]}",
                    "════════════════════════════════════════════════════"
                        };

                        foreach (string line in lines)
                        {
                            
                            if (lineIndex < Console.WindowHeight)
                            {
                                Console.SetCursorPosition((Console.WindowWidth - line.Length) / 2, lineIndex);
                                Console.WriteLine(line);
                                lineIndex++;
                            }
                            else
                            {
                               
                                Console.WriteLine("Daha fazla çalışan görüntülemek için bir tuşa basın...");
                                Console.ReadKey();
                                Console.Clear();
                                DrawMenu(menuLines);
                                lineIndex = menuLines.Length + 1; 
                            }
                        }
                    }

                    con.Close();
                }
            }
            Console.ReadLine();
        }

    }
}

