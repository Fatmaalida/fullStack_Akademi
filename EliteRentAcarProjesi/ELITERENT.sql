USE [EliteRentalCarDB]
GO
/****** Object:  Table [dbo].[ArabaMarkalari]    Script Date: 30.07.2024 20:46:32 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ArabaMarkalari](
	[MarkaID] [int] IDENTITY(1,1) NOT NULL,
	[MarkaAd] [nvarchar](30) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[MarkaID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Araclar]    Script Date: 30.07.2024 20:46:32 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Araclar](
	[AracID] [int] IDENTITY(1,1) NOT NULL,
	[MarkaID] [int] NOT NULL,
	[Yil] [int] NOT NULL,
	[Plaka] [nvarchar](20) NOT NULL,
	[VitesTipi] [nvarchar](20) NOT NULL,
	[YakıtTipi] [nvarchar](20) NOT NULL,
	[Renk] [nvarchar](20) NULL,
	[MotorHacmi] [int] NULL,
	[GunlukUcret] [decimal](10, 2) NOT NULL,
	[Durum] [nvarchar](20) NOT NULL,
	[SigortaDurumu] [varchar](50) NULL,
	[Kilometre] [int] NULL,
	[SonBakimTarihi] [date] NULL,
	[Model] [nvarchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[AracID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Calisanlar]    Script Date: 30.07.2024 20:46:32 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Calisanlar](
	[CalisanID] [int] IDENTITY(1,1) NOT NULL,
	[Ad] [nvarchar](50) NOT NULL,
	[Soyad] [nvarchar](50) NOT NULL,
	[Telefon] [nvarchar](20) NULL,
	[Email] [nvarchar](100) NULL,
	[Pozisyon] [nvarchar](50) NULL,
	[Maas] [decimal](10, 2) NULL,
	[IseGirisTarihi] [date] NULL,
	[Aktif] [bit] NULL,
PRIMARY KEY CLUSTERED 
(
	[CalisanID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[EhliyetSiniflari]    Script Date: 30.07.2024 20:46:32 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[EhliyetSiniflari](
	[SinifID] [int] IDENTITY(1,1) NOT NULL,
	[SinifAd] [nvarchar](20) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[SinifID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Faturalar]    Script Date: 30.07.2024 20:46:32 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Faturalar](
	[FaturaID] [int] IDENTITY(1,1) NOT NULL,
	[KiralamaID] [int] NOT NULL,
	[FaturaTarihi] [date] NOT NULL,
	[Tutar] [decimal](10, 2) NOT NULL,
	[OdenmeDurumu] [nvarchar](20) NOT NULL,
	[OdenmeTarihi] [date] NULL,
	[OdemeYontemi] [nvarchar](50) NULL,
	[Aciklama] [nvarchar](255) NULL,
	[MusteriID] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[FaturaID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Kasa]    Script Date: 30.07.2024 20:46:32 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Kasa](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[bakiye] [decimal](10, 3) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Kiralamalar]    Script Date: 30.07.2024 20:46:32 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Kiralamalar](
	[KiralamaID] [int] IDENTITY(1,1) NOT NULL,
	[MusteriID] [int] NOT NULL,
	[AracID] [int] NOT NULL,
	[KiralamaTarihi] [date] NOT NULL,
	[IadeTarihi] [date] NULL,
	[Ucret] [decimal](10, 2) NOT NULL,
	[GecikmeUcreti] [decimal](10, 2) NULL,
	[Durum] [nvarchar](20) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[KiralamaID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Musteriler]    Script Date: 30.07.2024 20:46:32 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Musteriler](
	[MusteriId] [int] IDENTITY(1,1) NOT NULL,
	[Ad] [nvarchar](50) NOT NULL,
	[Soyad] [nvarchar](50) NOT NULL,
	[Telefon] [nvarchar](20) NULL,
	[Email] [nvarchar](100) NULL,
	[EhliyetNo] [nvarchar](50) NOT NULL,
	[EhliyetVerilisTarihi] [date] NOT NULL,
	[EhliyetBitisTarihi] [date] NOT NULL,
	[EhliyetSinifiId] [int] NOT NULL,
	[DogumTarihi] [date] NOT NULL,
	[Adres] [nvarchar](200) NULL,
	[SigortaNo] [nvarchar](50) NULL,
	[SigortaBitisTarihi] [date] NULL,
	[Meslek] [nvarchar](50) NULL,
	[KullaniciAdi] [nvarchar](50) NOT NULL,
	[Sifre] [char](5) NOT NULL,
	[Aktif] [bit] NULL,
	[Bakiye] [decimal](10, 2) NULL,
PRIMARY KEY CLUSTERED 
(
	[MusteriId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Sirket]    Script Date: 30.07.2024 20:46:32 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Sirket](
	[SirketID] [int] IDENTITY(1,1) NOT NULL,
	[SirketAdi] [nvarchar](100) NOT NULL,
	[Adres] [nvarchar](50) NULL,
	[Telefon] [nvarchar](12) NULL,
	[Email] [nvarchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[SirketID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[ArabaMarkalari] ON 

INSERT [dbo].[ArabaMarkalari] ([MarkaID], [MarkaAd]) VALUES (1, N'BMW')
INSERT [dbo].[ArabaMarkalari] ([MarkaID], [MarkaAd]) VALUES (2, N'Mercedes')
INSERT [dbo].[ArabaMarkalari] ([MarkaID], [MarkaAd]) VALUES (3, N'Audi')
SET IDENTITY_INSERT [dbo].[ArabaMarkalari] OFF
GO
SET IDENTITY_INSERT [dbo].[Araclar] ON 

INSERT [dbo].[Araclar] ([AracID], [MarkaID], [Yil], [Plaka], [VitesTipi], [YakıtTipi], [Renk], [MotorHacmi], [GunlukUcret], [Durum], [SigortaDurumu], [Kilometre], [SonBakimTarihi], [Model]) VALUES (1, 1, 2020, N'34ABC123', N'Otomatik', N'Benzin', N'Siyah', 2000, CAST(450.00 AS Decimal(10, 2)), N'Mevcut', N'Aktif', 12000, CAST(N'2023-06-15' AS Date), N'BMW 320i')
INSERT [dbo].[Araclar] ([AracID], [MarkaID], [Yil], [Plaka], [VitesTipi], [YakıtTipi], [Renk], [MotorHacmi], [GunlukUcret], [Durum], [SigortaDurumu], [Kilometre], [SonBakimTarihi], [Model]) VALUES (2, 1, 2019, N'34DEF456', N'Manuel', N'Dizel', N'Beyaz', 2200, CAST(400.00 AS Decimal(10, 2)), N'Kiralik', N'Aktif', 25000, CAST(N'2023-05-01' AS Date), N'BMW 520d')
INSERT [dbo].[Araclar] ([AracID], [MarkaID], [Yil], [Plaka], [VitesTipi], [YakıtTipi], [Renk], [MotorHacmi], [GunlukUcret], [Durum], [SigortaDurumu], [Kilometre], [SonBakimTarihi], [Model]) VALUES (3, 1, 2022, N'34GHI789', N'Otomatik', N'Elektrik', N'Mavi', 0, CAST(600.00 AS Decimal(10, 2)), N'Mevcut', N'Aktif', 5000, CAST(N'2023-08-20' AS Date), N'BMW i4')
INSERT [dbo].[Araclar] ([AracID], [MarkaID], [Yil], [Plaka], [VitesTipi], [YakıtTipi], [Renk], [MotorHacmi], [GunlukUcret], [Durum], [SigortaDurumu], [Kilometre], [SonBakimTarihi], [Model]) VALUES (4, 1, 2017, N'34JKL345', N'Manuel', N'Dizel', N'Kirmizi', 2300, CAST(440.00 AS Decimal(10, 2)), N'Kiralik', N'Aktif', 27000, CAST(N'2023-04-20' AS Date), N'BMW 740i')
INSERT [dbo].[Araclar] ([AracID], [MarkaID], [Yil], [Plaka], [VitesTipi], [YakıtTipi], [Renk], [MotorHacmi], [GunlukUcret], [Durum], [SigortaDurumu], [Kilometre], [SonBakimTarihi], [Model]) VALUES (5, 1, 2023, N'34MNO678', N'Otomatik', N'Benzin', N'Gri', 2600, CAST(520.00 AS Decimal(10, 2)), N'Mevcut', N'Aktif', 5000, CAST(N'2023-10-01' AS Date), N'BMW M3')
INSERT [dbo].[Araclar] ([AracID], [MarkaID], [Yil], [Plaka], [VitesTipi], [YakıtTipi], [Renk], [MotorHacmi], [GunlukUcret], [Durum], [SigortaDurumu], [Kilometre], [SonBakimTarihi], [Model]) VALUES (6, 1, 2021, N'34PQR901', N'Otomatik', N'Elektrik', N'Beyaz', 0, CAST(650.00 AS Decimal(10, 2)), N'Kiralik', N'Aktif', 7000, CAST(N'2023-07-15' AS Date), N'BMW iX')
INSERT [dbo].[Araclar] ([AracID], [MarkaID], [Yil], [Plaka], [VitesTipi], [YakıtTipi], [Renk], [MotorHacmi], [GunlukUcret], [Durum], [SigortaDurumu], [Kilometre], [SonBakimTarihi], [Model]) VALUES (7, 2, 2021, N'34JKL012', N'Otomatik', N'Benzin', N'Gri', 2500, CAST(500.00 AS Decimal(10, 2)), N'Mevcut', N'Aktif', 15000, CAST(N'2023-07-10' AS Date), N'Mercedes C200')
INSERT [dbo].[Araclar] ([AracID], [MarkaID], [Yil], [Plaka], [VitesTipi], [YakıtTipi], [Renk], [MotorHacmi], [GunlukUcret], [Durum], [SigortaDurumu], [Kilometre], [SonBakimTarihi], [Model]) VALUES (8, 2, 2018, N'34MNO345', N'Manuel', N'Dizel', N'Kirmizi', 2700, CAST(450.00 AS Decimal(10, 2)), N'Kiralik', N'Aktif', 30000, CAST(N'2023-04-25' AS Date), N'Mercedes E220')
INSERT [dbo].[Araclar] ([AracID], [MarkaID], [Yil], [Plaka], [VitesTipi], [YakıtTipi], [Renk], [MotorHacmi], [GunlukUcret], [Durum], [SigortaDurumu], [Kilometre], [SonBakimTarihi], [Model]) VALUES (9, 2, 2023, N'34PQR678', N'Otomatik', N'Elektrik', N'Yesil', 0, CAST(650.00 AS Decimal(10, 2)), N'Mevcut', N'Aktif', 2000, CAST(N'2023-09-01' AS Date), N'Mercedes EQS')
INSERT [dbo].[Araclar] ([AracID], [MarkaID], [Yil], [Plaka], [VitesTipi], [YakıtTipi], [Renk], [MotorHacmi], [GunlukUcret], [Durum], [SigortaDurumu], [Kilometre], [SonBakimTarihi], [Model]) VALUES (10, 2, 2017, N'34BCD678', N'Otomatik', N'Benzin', N'Mavi', 2600, CAST(480.00 AS Decimal(10, 2)), N'Mevcut', N'Aktif', 22000, CAST(N'2023-06-10' AS Date), N'Mercedes GLC')
INSERT [dbo].[Araclar] ([AracID], [MarkaID], [Yil], [Plaka], [VitesTipi], [YakıtTipi], [Renk], [MotorHacmi], [GunlukUcret], [Durum], [SigortaDurumu], [Kilometre], [SonBakimTarihi], [Model]) VALUES (11, 2, 2022, N'34EFG901', N'Manuel', N'Dizel', N'Beyaz', 2800, CAST(500.00 AS Decimal(10, 2)), N'Kiralik', N'Aktif', 12000, CAST(N'2023-08-25' AS Date), N'Mercedes A200')
INSERT [dbo].[Araclar] ([AracID], [MarkaID], [Yil], [Plaka], [VitesTipi], [YakıtTipi], [Renk], [MotorHacmi], [GunlukUcret], [Durum], [SigortaDurumu], [Kilometre], [SonBakimTarihi], [Model]) VALUES (12, 2, 2020, N'34HIJ234', N'Otomatik', N'Elektrik', N'Siyah', 0, CAST(600.00 AS Decimal(10, 2)), N'Mevcut', N'Aktif', 8000, CAST(N'2023-09-15' AS Date), N'Mercedes EQB')
INSERT [dbo].[Araclar] ([AracID], [MarkaID], [Yil], [Plaka], [VitesTipi], [YakıtTipi], [Renk], [MotorHacmi], [GunlukUcret], [Durum], [SigortaDurumu], [Kilometre], [SonBakimTarihi], [Model]) VALUES (13, 2, 2017, N'34STU456', N'Manuel', N'Dizel', N'Kahverengi', 3000, CAST(510.00 AS Decimal(10, 2)), N'Mevcut', N'Aktif', 32000, CAST(N'2023-02-20' AS Date), N'Mercedes S-Class')
INSERT [dbo].[Araclar] ([AracID], [MarkaID], [Yil], [Plaka], [VitesTipi], [YakıtTipi], [Renk], [MotorHacmi], [GunlukUcret], [Durum], [SigortaDurumu], [Kilometre], [SonBakimTarihi], [Model]) VALUES (14, 2, 2022, N'34UVW789', N'Otomatik', N'Benzin', N'Gümüs', 3200, CAST(550.00 AS Decimal(10, 2)), N'Mevcut', N'Aktif', 10000, CAST(N'2023-09-05' AS Date), N'Mercedes CLS')
INSERT [dbo].[Araclar] ([AracID], [MarkaID], [Yil], [Plaka], [VitesTipi], [YakıtTipi], [Renk], [MotorHacmi], [GunlukUcret], [Durum], [SigortaDurumu], [Kilometre], [SonBakimTarihi], [Model]) VALUES (15, 3, 2020, N'34STU901', N'Otomatik', N'Benzin', N'Kahverengi', 2000, CAST(460.00 AS Decimal(10, 2)), N'Mevcut', N'Aktif', 18000, CAST(N'2023-03-15' AS Date), N'Audi A3')
INSERT [dbo].[Araclar] ([AracID], [MarkaID], [Yil], [Plaka], [VitesTipi], [YakıtTipi], [Renk], [MotorHacmi], [GunlukUcret], [Durum], [SigortaDurumu], [Kilometre], [SonBakimTarihi], [Model]) VALUES (16, 3, 2019, N'34VWX234', N'Manuel', N'Dizel', N'Siyah', 2200, CAST(420.00 AS Decimal(10, 2)), N'Kiralik', N'Aktif', 20000, CAST(N'2023-06-01' AS Date), N'Audi A4')
INSERT [dbo].[Araclar] ([AracID], [MarkaID], [Yil], [Plaka], [VitesTipi], [YakıtTipi], [Renk], [MotorHacmi], [GunlukUcret], [Durum], [SigortaDurumu], [Kilometre], [SonBakimTarihi], [Model]) VALUES (17, 3, 2022, N'34YZA567', N'Otomatik', N'Elektrik', N'Beyaz', 0, CAST(620.00 AS Decimal(10, 2)), N'Mevcut', N'Aktif', 7000, CAST(N'2023-08-10' AS Date), N'Audi Q4 e-tron')
INSERT [dbo].[Araclar] ([AracID], [MarkaID], [Yil], [Plaka], [VitesTipi], [YakıtTipi], [Renk], [MotorHacmi], [GunlukUcret], [Durum], [SigortaDurumu], [Kilometre], [SonBakimTarihi], [Model]) VALUES (19, 3, 2023, N'34AUDI2023', N'Otomatik', N'Benzin', N'Siyah', 2000, CAST(300.00 AS Decimal(10, 2)), N'Aktif', N'Geçerli', 10000, CAST(N'2024-06-01' AS Date), N'A6')
SET IDENTITY_INSERT [dbo].[Araclar] OFF
GO
SET IDENTITY_INSERT [dbo].[Calisanlar] ON 

INSERT [dbo].[Calisanlar] ([CalisanID], [Ad], [Soyad], [Telefon], [Email], [Pozisyon], [Maas], [IseGirisTarihi], [Aktif]) VALUES (1, N'Emir', N'Kurtulus', N'05312233445', N'emir.kurtulus@gamil.com', N'Genel Müdür', CAST(9500.00 AS Decimal(10, 2)), CAST(N'2012-09-01' AS Date), NULL)
INSERT [dbo].[Calisanlar] ([CalisanID], [Ad], [Soyad], [Telefon], [Email], [Pozisyon], [Maas], [IseGirisTarihi], [Aktif]) VALUES (2, N'Nalan', N'Çelikkanat', N'05314455678', N'nalan.celikkanat@gamil.com', N'IK Uzmani', CAST(4000.00 AS Decimal(10, 2)), CAST(N'2017-04-15' AS Date), NULL)
INSERT [dbo].[Calisanlar] ([CalisanID], [Ad], [Soyad], [Telefon], [Email], [Pozisyon], [Maas], [IseGirisTarihi], [Aktif]) VALUES (3, N'Serkan', N'Aydinli', N'05316667788', N'serkan.aydinli@gamil.com', N'Finans Müdürü', CAST(5600.00 AS Decimal(10, 2)), CAST(N'2019-06-10' AS Date), NULL)
INSERT [dbo].[Calisanlar] ([CalisanID], [Ad], [Soyad], [Telefon], [Email], [Pozisyon], [Maas], [IseGirisTarihi], [Aktif]) VALUES (4, N'Gamze', N'SERCE', N'05224441144', N'djd@dj', N'çalisan', CAST(2000.00 AS Decimal(10, 2)), CAST(N'2024-07-04' AS Date), 1)
INSERT [dbo].[Calisanlar] ([CalisanID], [Ad], [Soyad], [Telefon], [Email], [Pozisyon], [Maas], [IseGirisTarihi], [Aktif]) VALUES (5, N'fatma', N'paltaci', N'555', N'asd@', N'yönetici yard', CAST(44.00 AS Decimal(10, 2)), CAST(N'2024-07-30' AS Date), 1)
SET IDENTITY_INSERT [dbo].[Calisanlar] OFF
GO
SET IDENTITY_INSERT [dbo].[EhliyetSiniflari] ON 

INSERT [dbo].[EhliyetSiniflari] ([SinifID], [SinifAd]) VALUES (1, N'A')
INSERT [dbo].[EhliyetSiniflari] ([SinifID], [SinifAd]) VALUES (2, N'B')
INSERT [dbo].[EhliyetSiniflari] ([SinifID], [SinifAd]) VALUES (3, N'C')
SET IDENTITY_INSERT [dbo].[EhliyetSiniflari] OFF
GO
SET IDENTITY_INSERT [dbo].[Faturalar] ON 

INSERT [dbo].[Faturalar] ([FaturaID], [KiralamaID], [FaturaTarihi], [Tutar], [OdenmeDurumu], [OdenmeTarihi], [OdemeYontemi], [Aciklama], [MusteriID]) VALUES (1, 1, CAST(N'2024-07-29' AS Date), CAST(600.00 AS Decimal(10, 2)), N'Ödendi', CAST(N'2024-07-28' AS Date), N'Kredi', N'', 4)
INSERT [dbo].[Faturalar] ([FaturaID], [KiralamaID], [FaturaTarihi], [Tutar], [OdenmeDurumu], [OdenmeTarihi], [OdemeYontemi], [Aciklama], [MusteriID]) VALUES (2, 2, CAST(N'2024-02-01' AS Date), CAST(600.00 AS Decimal(10, 2)), N'Ödendi', CAST(N'2024-02-10' AS Date), N'Nakit', N'Subat ayi faturasi', 2)
INSERT [dbo].[Faturalar] ([FaturaID], [KiralamaID], [FaturaTarihi], [Tutar], [OdenmeDurumu], [OdenmeTarihi], [OdemeYontemi], [Aciklama], [MusteriID]) VALUES (3, 3, CAST(N'2024-03-01' AS Date), CAST(700.00 AS Decimal(10, 2)), N'Ödenmedi', NULL, NULL, N'Mart ayi faturasi', 3)
INSERT [dbo].[Faturalar] ([FaturaID], [KiralamaID], [FaturaTarihi], [Tutar], [OdenmeDurumu], [OdenmeTarihi], [OdemeYontemi], [Aciklama], [MusteriID]) VALUES (4, 4, CAST(N'2024-04-14' AS Date), CAST(50.00 AS Decimal(10, 2)), N'Pasif', NULL, NULL, NULL, 4)
INSERT [dbo].[Faturalar] ([FaturaID], [KiralamaID], [FaturaTarihi], [Tutar], [OdenmeDurumu], [OdenmeTarihi], [OdemeYontemi], [Aciklama], [MusteriID]) VALUES (5, 1, CAST(N'2024-07-31' AS Date), CAST(50.00 AS Decimal(10, 2)), N'ödendi', CAST(N'2024-08-10' AS Date), N'nakit', N'', 10)
SET IDENTITY_INSERT [dbo].[Faturalar] OFF
GO
SET IDENTITY_INSERT [dbo].[Kasa] ON 

INSERT [dbo].[Kasa] ([id], [bakiye]) VALUES (1, CAST(1950.000 AS Decimal(10, 3)))
SET IDENTITY_INSERT [dbo].[Kasa] OFF
GO
SET IDENTITY_INSERT [dbo].[Kiralamalar] ON 

INSERT [dbo].[Kiralamalar] ([KiralamaID], [MusteriID], [AracID], [KiralamaTarihi], [IadeTarihi], [Ucret], [GecikmeUcreti], [Durum]) VALUES (1, 1, 2, CAST(N'2024-07-01' AS Date), CAST(N'2024-07-10' AS Date), CAST(450.00 AS Decimal(10, 2)), CAST(0.00 AS Decimal(10, 2)), N'Tamamlandi')
INSERT [dbo].[Kiralamalar] ([KiralamaID], [MusteriID], [AracID], [KiralamaTarihi], [IadeTarihi], [Ucret], [GecikmeUcreti], [Durum]) VALUES (2, 2, 5, CAST(N'2024-07-05' AS Date), NULL, CAST(600.00 AS Decimal(10, 2)), NULL, N'Pasif')
INSERT [dbo].[Kiralamalar] ([KiralamaID], [MusteriID], [AracID], [KiralamaTarihi], [IadeTarihi], [Ucret], [GecikmeUcreti], [Durum]) VALUES (3, 2, 2, CAST(N'2024-07-30' AS Date), CAST(N'2024-08-21' AS Date), CAST(500.00 AS Decimal(10, 2)), CAST(20.00 AS Decimal(10, 2)), N'aktif')
INSERT [dbo].[Kiralamalar] ([KiralamaID], [MusteriID], [AracID], [KiralamaTarihi], [IadeTarihi], [Ucret], [GecikmeUcreti], [Durum]) VALUES (4, 1, 3, CAST(N'2024-07-12' AS Date), NULL, CAST(550.00 AS Decimal(10, 2)), NULL, N'Aktif')
INSERT [dbo].[Kiralamalar] ([KiralamaID], [MusteriID], [AracID], [KiralamaTarihi], [IadeTarihi], [Ucret], [GecikmeUcreti], [Durum]) VALUES (5, 2, 6, CAST(N'2024-07-15' AS Date), CAST(N'2024-07-20' AS Date), CAST(520.00 AS Decimal(10, 2)), CAST(30.00 AS Decimal(10, 2)), N'Tamamlandi')
SET IDENTITY_INSERT [dbo].[Kiralamalar] OFF
GO
SET IDENTITY_INSERT [dbo].[Musteriler] ON 

INSERT [dbo].[Musteriler] ([MusteriId], [Ad], [Soyad], [Telefon], [Email], [EhliyetNo], [EhliyetVerilisTarihi], [EhliyetBitisTarihi], [EhliyetSinifiId], [DogumTarihi], [Adres], [SigortaNo], [SigortaBitisTarihi], [Meslek], [KullaniciAdi], [Sifre], [Aktif], [Bakiye]) VALUES (1, N'Selçuk', N'Dogankaya', N'05552225566', N'selcuk.dogankaya@gmail.com', N'D123456789', CAST(N'2010-01-15' AS Date), CAST(N'2025-01-15' AS Date), 1, CAST(N'1985-07-10' AS Date), N'Istanbul, Türkiye', N'S123456789', CAST(N'2024-07-01' AS Date), N'Mühendis', N'selcukdogankaya', N'54321', 1, NULL)
INSERT [dbo].[Musteriler] ([MusteriId], [Ad], [Soyad], [Telefon], [Email], [EhliyetNo], [EhliyetVerilisTarihi], [EhliyetBitisTarihi], [EhliyetSinifiId], [DogumTarihi], [Adres], [SigortaNo], [SigortaBitisTarihi], [Meslek], [KullaniciAdi], [Sifre], [Aktif], [Bakiye]) VALUES (2, N'Eda', N'Tatlisu', N'05554445566', N'eda.tatlisu@gamil.com', N'D987654321', CAST(N'2015-06-20' AS Date), CAST(N'2030-06-20' AS Date), 2, CAST(N'1990-03-25' AS Date), N'Ankara, Türkiye', N'S987654321', CAST(N'2025-03-01' AS Date), N'Doktor', N'edatatlisu', N'67890', 0, NULL)
INSERT [dbo].[Musteriler] ([MusteriId], [Ad], [Soyad], [Telefon], [Email], [EhliyetNo], [EhliyetVerilisTarihi], [EhliyetBitisTarihi], [EhliyetSinifiId], [DogumTarihi], [Adres], [SigortaNo], [SigortaBitisTarihi], [Meslek], [KullaniciAdi], [Sifre], [Aktif], [Bakiye]) VALUES (3, N'Zeynep', N'Çinar', N'05556667766', N'zeynep.cinar@gamil.com', N'D135792468', CAST(N'2018-11-05' AS Date), CAST(N'2033-11-05' AS Date), 3, CAST(N'1982-12-15' AS Date), N'Izmir, Türkiye', N'S135792468', CAST(N'2026-11-01' AS Date), N'Ögretmen', N'zeynepcinar', N'13579', 1, NULL)
INSERT [dbo].[Musteriler] ([MusteriId], [Ad], [Soyad], [Telefon], [Email], [EhliyetNo], [EhliyetVerilisTarihi], [EhliyetBitisTarihi], [EhliyetSinifiId], [DogumTarihi], [Adres], [SigortaNo], [SigortaBitisTarihi], [Meslek], [KullaniciAdi], [Sifre], [Aktif], [Bakiye]) VALUES (4, N'Ahmet', N'Deniz', N'05312225566', N'ahmet.yilmaz@gmail.com', N'1234567890', CAST(N'2018-05-01' AS Date), CAST(N'2028-05-01' AS Date), 1, CAST(N'1990-01-15' AS Date), N'Istanbul, Besiktas', N'SG123456789', CAST(N'2025-12-31' AS Date), N'Mühendis', N'ad', N'24680', 0, NULL)
INSERT [dbo].[Musteriler] ([MusteriId], [Ad], [Soyad], [Telefon], [Email], [EhliyetNo], [EhliyetVerilisTarihi], [EhliyetBitisTarihi], [EhliyetSinifiId], [DogumTarihi], [Adres], [SigortaNo], [SigortaBitisTarihi], [Meslek], [KullaniciAdi], [Sifre], [Aktif], [Bakiye]) VALUES (5, N'Ahmet', N'Yilmaz', N'05312225566', N'ahmet.yilmaz@gmail.com', N'1234567890', CAST(N'2018-05-01' AS Date), CAST(N'2028-05-01' AS Date), 1, CAST(N'1990-01-15' AS Date), N'Istanbul, Besiktas', N'SG123456789', CAST(N'2025-12-31' AS Date), N'Mühendis', N'ahyilmaz', N'24680', 1, CAST(1000.00 AS Decimal(10, 2)))
SET IDENTITY_INSERT [dbo].[Musteriler] OFF
GO
SET IDENTITY_INSERT [dbo].[Sirket] ON 

INSERT [dbo].[Sirket] ([SirketID], [SirketAdi], [Adres], [Telefon], [Email]) VALUES (1, N'Elite Car Rentals', N'Istanbul, Türkiye', N'05554443322', N'elitecar@gmail.com')
SET IDENTITY_INSERT [dbo].[Sirket] OFF
GO
ALTER TABLE [dbo].[Calisanlar] ADD  DEFAULT ((1)) FOR [Aktif]
GO
ALTER TABLE [dbo].[Musteriler] ADD  DEFAULT ((1)) FOR [Aktif]
GO
ALTER TABLE [dbo].[Musteriler] ADD  DEFAULT ((1000.00)) FOR [Bakiye]
GO
ALTER TABLE [dbo].[Araclar]  WITH CHECK ADD FOREIGN KEY([MarkaID])
REFERENCES [dbo].[ArabaMarkalari] ([MarkaID])
GO
ALTER TABLE [dbo].[Faturalar]  WITH CHECK ADD FOREIGN KEY([KiralamaID])
REFERENCES [dbo].[Kiralamalar] ([KiralamaID])
GO
ALTER TABLE [dbo].[Kiralamalar]  WITH CHECK ADD FOREIGN KEY([AracID])
REFERENCES [dbo].[Araclar] ([AracID])
GO
ALTER TABLE [dbo].[Kiralamalar]  WITH CHECK ADD FOREIGN KEY([MusteriID])
REFERENCES [dbo].[Musteriler] ([MusteriId])
GO
ALTER TABLE [dbo].[Musteriler]  WITH CHECK ADD FOREIGN KEY([EhliyetSinifiId])
REFERENCES [dbo].[EhliyetSiniflari] ([SinifID])
GO
/****** Object:  StoredProcedure [dbo].[AracEkle]    Script Date: 30.07.2024 20:46:32 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[AracEkle]
    @MarkaID INT,
    @Yil INT,
    @Plaka NVARCHAR(20),
    @VitesTipi NVARCHAR(20),
    @YakıtTipi NVARCHAR(20),
    @Renk NVARCHAR(20),
    @MotorHacmi INT,
    @GunlukUcret DECIMAL(10, 2),
    @Durum NVARCHAR(20),
    @SigortaDurumu VARCHAR(50),
    @Kilometre INT,
    @SonBakimTarihi DATE,
    @Model NVARCHAR(50)
AS
BEGIN
    
    IF NOT EXISTS (SELECT 1 FROM Markalar WHERE MarkaID = @MarkaID AND MarkaAd IN ('Audi', 'BMW', 'Mercedes'))
    BEGIN
        RAISERROR('Sadece Audi, BMW veya Mercedes markası olan araçlar eklenebilir.', 16, 1);
        RETURN;
    END

  
    IF EXISTS (SELECT 1 FROM Araclar 
               WHERE MarkaID = @MarkaID 
                 AND Yil = @Yil 
                 AND Plaka = @Plaka 
                 AND VitesTipi = @VitesTipi 
                 AND YakıtTipi = @YakıtTipi 
                 AND Renk = @Renk 
                 AND MotorHacmi = @MotorHacmi 
                 AND GunlukUcret = @GunlukUcret 
                 AND Durum = @Durum 
                 AND SigortaDurumu = @SigortaDurumu 
                 AND Kilometre = @Kilometre 
                 AND SonBakimTarihi = @SonBakimTarihi 
                 AND Model = @Model)
    BEGIN
        RAISERROR('Bu araç zaten mevcut.', 16, 1);
        RETURN;
    END

    INSERT INTO Araclar (MarkaID, Yil, Plaka, VitesTipi, YakıtTipi, Renk, MotorHacmi, GunlukUcret, Durum, SigortaDurumu, Kilometre, SonBakimTarihi, Model)
    VALUES (@MarkaID, @Yil, @Plaka, @VitesTipi, @YakıtTipi, @Renk, @MotorHacmi, @GunlukUcret, @Durum, @SigortaDurumu, @Kilometre, @SonBakimTarihi, @Model);
END
GO
/****** Object:  StoredProcedure [dbo].[AracGuncelle]    Script Date: 30.07.2024 20:46:32 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[AracGuncelle]
    @AracID int,
    @MarkaID int,
    @Yil int,
    @Plaka nvarchar(20),
    @VitesTipi nvarchar(20),
    @YakıtTipi nvarchar(20),
    @Renk nvarchar(20),
    @MotorHacmi int,
    @GunlukUcret decimal(10, 2),
    @Durum nvarchar(20),
    @SigortaDurumu varchar(50),
    @Kilometre int,
    @SonBakimTarihi date,
    @Model nvarchar(50)
AS
BEGIN
    UPDATE Araclar
    SET
        MarkaID = @MarkaID,
        Yil = @Yil,
        Plaka = @Plaka,
        VitesTipi = @VitesTipi,
        YakıtTipi = @YakıtTipi,
        Renk = @Renk,
        MotorHacmi = @MotorHacmi,
        GunlukUcret = @GunlukUcret,
        Durum = @Durum,
        SigortaDurumu = @SigortaDurumu,
        Kilometre = @Kilometre,
        SonBakimTarihi = @SonBakimTarihi,
        Model = @Model
    WHERE AracID = @AracID;
END
GO
/****** Object:  StoredProcedure [dbo].[AracListeleme]    Script Date: 30.07.2024 20:46:32 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[AracListeleme]
    @AracID int
as 
begin
    SELECT *
    FROM Araclar
    WHERE AracID = @AracID;
END
GO
/****** Object:  StoredProcedure [dbo].[AracPasifeAlma]    Script Date: 30.07.2024 20:46:32 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[AracPasifeAlma]
    @AracID int
AS
BEGIN
    UPDATE Araclar
    SET Durum = 'Pasif'
    WHERE AracID = @AracID
END
GO
/****** Object:  StoredProcedure [dbo].[CalisanBilgisi]    Script Date: 30.07.2024 20:46:32 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROC [dbo].[CalisanBilgisi]
    @CalisanID INT
AS
BEGIN
    SELECT * FROM Calisanlar WHERE CalisanID = @CalisanID;
END
GO
/****** Object:  StoredProcedure [dbo].[CalisanEkle]    Script Date: 30.07.2024 20:46:32 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[CalisanEkle]
    @Ad NVARCHAR(50),
    @Soyad NVARCHAR(50),
    @Telefon NVARCHAR(11),
    @Email NVARCHAR(100),
    @Pozisyon NVARCHAR(50),
    @Maas DECIMAL(18, 2),
    @IseGirisTarihi DATE
AS
BEGIN
    INSERT INTO Calisanlar (Ad, Soyad, Telefon, Email, Pozisyon, Maas, IseGirisTarihi, Aktif)
    VALUES (@Ad, @Soyad, @Telefon, @Email, @Pozisyon, @Maas, @IseGirisTarihi, 1)
END
GO
/****** Object:  StoredProcedure [dbo].[CalisanGuncelle]    Script Date: 30.07.2024 20:46:32 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[CalisanGuncelle]
    @CalisanID INT,
    @Ad NVARCHAR(50),
    @Soyad NVARCHAR(50),
    @Telefon NVARCHAR(11),
    @Email NVARCHAR(100),
    @Pozisyon NVARCHAR(50),
    @Maas DECIMAL(18, 2),
    @IseGirisTarihi DATE,
    @Aktif BIT
AS
BEGIN
    UPDATE Calisanlar
    SET Ad = @Ad, Soyad = @Soyad, Telefon = @Telefon, Email = @Email, 
        Pozisyon = @Pozisyon, Maas = @Maas, IseGirisTarihi = @IseGirisTarihi, Aktif = @Aktif
    WHERE CalisanID = @CalisanID
END
GO
/****** Object:  StoredProcedure [dbo].[CalisanPasifeAlma]    Script Date: 30.07.2024 20:46:32 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[CalisanPasifeAlma]
    @CalisanID INT
AS
BEGIN
    UPDATE Calisanlar
    SET Aktif = 0
    WHERE CalisanID = @CalisanID
END
GO
/****** Object:  StoredProcedure [dbo].[FaturaBilgisi]    Script Date: 30.07.2024 20:46:32 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[FaturaBilgisi]
    @FaturaID int
AS
BEGIN
    SELECT * FROM Faturalar
    WHERE FaturaID = @FaturaID
END
GO
/****** Object:  StoredProcedure [dbo].[FaturaEkle]    Script Date: 30.07.2024 20:46:32 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[FaturaEkle]
    @KiralamaID int,
    @FaturaTarihi date,
    @Tutar decimal(10, 2),
    @OdenmeDurumu nvarchar(20),
    @OdenmeTarihi date,
    @OdemeYontemi nvarchar(50),
    @Aciklama nvarchar(255),
    @MusteriID int
AS
BEGIN
    INSERT INTO Faturalar (KiralamaID, FaturaTarihi, Tutar, OdenmeDurumu, OdenmeTarihi, OdemeYontemi, Aciklama, MusteriID)
    VALUES (@KiralamaID, @FaturaTarihi, @Tutar, @OdenmeDurumu, @OdenmeTarihi, @OdemeYontemi, @Aciklama, @MusteriID)
END
GO
/****** Object:  StoredProcedure [dbo].[FaturaGuncelle]    Script Date: 30.07.2024 20:46:32 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[FaturaGuncelle]
    @FaturaID int,
    @KiralamaID int,
    @FaturaTarihi date,
    @Tutar decimal(10, 2),
    @OdenmeDurumu nvarchar(20),
    @OdenmeTarihi date,
    @OdemeYontemi nvarchar(50),
    @Aciklama nvarchar(255),
    @MusteriID int
AS
BEGIN
    UPDATE Faturalar
    SET KiralamaID = @KiralamaID,
        FaturaTarihi = @FaturaTarihi,
        Tutar = @Tutar,
        OdenmeDurumu = @OdenmeDurumu,
        OdenmeTarihi = @OdenmeTarihi,
        OdemeYontemi = @OdemeYontemi,
        Aciklama = @Aciklama,
        MusteriID = @MusteriID
    WHERE FaturaID = @FaturaID
END
GO
/****** Object:  StoredProcedure [dbo].[FaturaPasifYap]    Script Date: 30.07.2024 20:46:32 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[FaturaPasifYap]
    @FaturaID int
AS
BEGIN
    UPDATE Faturalar
    SET OdenmeDurumu = 'Pasif'
    WHERE FaturaID = @FaturaID
END
GO
/****** Object:  StoredProcedure [dbo].[KasaBakiyeBilgileri]    Script Date: 30.07.2024 20:46:32 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[KasaBakiyeBilgileri]
AS
BEGIN
  
    DECLARE @toplamTutari DECIMAL(18, 2);

    SELECT @toplamTutari = SUM(tutar) FROM Faturalar;

   
    UPDATE Kasa
    SET bakiye = @toplamTutari
    WHERE id = 1;

    
    SELECT bakiye FROM Kasa WHERE id = 1;
END
GO
/****** Object:  StoredProcedure [dbo].[KiralamaBilgisi]    Script Date: 30.07.2024 20:46:32 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[KiralamaBilgisi]
    @KiralamaID int
AS
BEGIN
    SELECT * FROM Kiralamalar
    WHERE KiralamaID = @KiralamaID
END
GO
/****** Object:  StoredProcedure [dbo].[KiralamaEkle]    Script Date: 30.07.2024 20:46:32 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[KiralamaEkle]
    @MusteriID INT,
    @AracID INT,
    @KiralamaTarihi DATE,
    @IadeTarihi DATE,
    @GecikmeUcreti DECIMAL(10, 2),
    @Durum NVARCHAR(20)
AS
BEGIN
    DECLARE @Bugun DATE = GETDATE();
    DECLARE @IkiAySonra DATE = DATEADD(MONTH, 2, @Bugun);
    DECLARE @GunSayisi INT;
    DECLARE @GunlukUcret DECIMAL(10, 2);
    DECLARE @Ucret DECIMAL(10, 2);
    DECLARE @MusteriBakiye DECIMAL(10, 2);

   
    IF @KiralamaTarihi < @Bugun OR @KiralamaTarihi > @IkiAySonra
    BEGIN
        RAISERROR('Kiralama tarihi bugünden itibaren 2 ay içinde olmalıdır.', 16, 1);
        RETURN;
    END

    
    IF @IadeTarihi > DATEADD(MONTH, 2, @KiralamaTarihi)
    BEGIN
        RAISERROR('Araç en fazla 2 ay süreyle kiralanabilir.', 16, 1);
        RETURN;
    END

    
    IF EXISTS (
        SELECT 1
        FROM Kiralamalar
        WHERE AracID = @AracID
        AND (@KiralamaTarihi <= IadeTarihi AND @IadeTarihi >= KiralamaTarihi)
    )
    BEGIN
        RAISERROR('Araç bu tarihler arasında rezerve edilmiş veya kullanımda.', 16, 1);
        RETURN;
    END

    IF EXISTS (
        SELECT 1
        FROM Araclar
        WHERE AracID = @AracID
        AND (Durum = 'Aktif' OR Durum = 'Bakımda')
    )
    BEGIN
        RAISERROR('Araç bu tarihler arasında bakımda veya aktif durumda.', 16, 1);
        RETURN;
    END

    
    SET @GunSayisi = DATEDIFF(DAY, @KiralamaTarihi, @IadeTarihi);

    
    SELECT @GunlukUcret = GunlukUcret
    FROM Araclar
    WHERE AracID = @AracID;

    
    SET @Ucret = @GunSayisi * @GunlukUcret;

    
    SELECT @MusteriBakiye = Bakiye
    FROM Musteriler
    WHERE MusteriID = @MusteriID;

    IF @MusteriBakiye < @Ucret
    BEGIN
        RAISERROR('Yetersiz bakiye. Kiralama ücretini karşılamak için yeterli bakiyeniz yok.', 16, 1);
        RETURN;
    END

   
    INSERT INTO Kiralamalar (MusteriID, AracID, KiralamaTarihi, IadeTarihi, Ucret, GecikmeUcreti, Durum)
    VALUES (@MusteriID, @AracID, @KiralamaTarihi, @IadeTarihi, @Ucret, @GecikmeUcreti, @Durum);

    
    UPDATE Musteriler
    SET Bakiye = @MusteriBakiye - @Ucret
    WHERE MusteriID = @MusteriID;

END
GO
/****** Object:  StoredProcedure [dbo].[KiralamaGuncelle]    Script Date: 30.07.2024 20:46:32 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[KiralamaGuncelle]
    @KiralamaID int,
    @MusteriID int,
    @AracID int,
    @KiralamaTarihi date,
    @IadeTarihi date,
    @Ucret decimal(10, 2),
    @GecikmeUcreti decimal(10, 2),
    @Durum nvarchar(20)
AS
BEGIN
    UPDATE Kiralamalar
    SET MusteriID = @MusteriID,
        AracID = @AracID,
        KiralamaTarihi = @KiralamaTarihi,
        IadeTarihi = @IadeTarihi,
        Ucret = @Ucret,
        GecikmeUcreti = @GecikmeUcreti,
        Durum = @Durum
    WHERE KiralamaID = @KiralamaID
END
GO
/****** Object:  StoredProcedure [dbo].[KiralamaPasifeAlma]    Script Date: 30.07.2024 20:46:32 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[KiralamaPasifeAlma]
    @KiralamaID int
AS
BEGIN
    UPDATE Kiralamalar
    SET Durum = 'Pasif'
    WHERE KiralamaID = @KiralamaID
END
GO
/****** Object:  StoredProcedure [dbo].[MüsteriBilgisi]    Script Date: 30.07.2024 20:46:32 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[MüsteriBilgisi]
    @MusteriId int
as
begin
    select*from Musteriler
    where MusteriId = @MusteriId
end
GO
/****** Object:  StoredProcedure [dbo].[MusteriEkleme]    Script Date: 30.07.2024 20:46:32 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[MusteriEkleme]
    @Ad NVARCHAR(50),
    @Soyad NVARCHAR(50),
    @Telefon NVARCHAR(20),
    @Email NVARCHAR(100),
    @EhliyetNo NVARCHAR(50),
    @EhliyetVerilisTarihi DATE,
    @EhliyetBitisTarihi DATE,
    @EhliyetSinifiId INT,
    @DogumTarihi DATE,
    @Adres NVARCHAR(200),
    @SigortaNo NVARCHAR(50),
    @SigortaBitisTarihi DATE,
    @Meslek NVARCHAR(50),
    @KullaniciAdi NVARCHAR(50),
    @Sifre CHAR(5),
    @Bakiye DECIMAL(10, 2) = 1000.00  
AS 
BEGIN
    INSERT INTO Musteriler (
        Ad, Soyad, Telefon, Email, EhliyetNo, EhliyetVerilisTarihi, EhliyetBitisTarihi, EhliyetSinifiId,
        DogumTarihi, Adres, SigortaNo, SigortaBitisTarihi, Meslek, KullaniciAdi, Sifre, Aktif, Bakiye
    )
    VALUES (
        @Ad, @Soyad, @Telefon, @Email, @EhliyetNo, @EhliyetVerilisTarihi, @EhliyetBitisTarihi, @EhliyetSinifiId,
        @DogumTarihi, @Adres, @SigortaNo, @SigortaBitisTarihi, @Meslek, @KullaniciAdi, @Sifre, 1, @Bakiye
    )
END
GO
/****** Object:  StoredProcedure [dbo].[MusteriGuncelleme]    Script Date: 30.07.2024 20:46:32 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[MusteriGuncelleme]
    @MusteriId int,
    @Ad nvarchar(50),
    @Soyad nvarchar(50),
    @Telefon nvarchar(20),
    @Email nvarchar(100),
    @EhliyetNo nvarchar(50),
    @EhliyetVerilisTarihi date,
    @EhliyetBitisTarihi date,
    @EhliyetSinifiId int,
    @DogumTarihi date,
    @Adres nvarchar(200),
    @SigortaNo nvarchar(50),
    @SigortaBitisTarihi date,
    @Meslek nvarchar(50),
    @KullaniciAdi nvarchar(50),
    @Sifre char(5),
    @Aktif bit
as
begin
    update Musteriler
    set
        Ad = @Ad,
        Soyad = @Soyad,
        Telefon = @Telefon,
        Email = @Email,
        EhliyetNo = @EhliyetNo,
        EhliyetVerilisTarihi = @EhliyetVerilisTarihi,
        EhliyetBitisTarihi = @EhliyetBitisTarihi,
        EhliyetSinifiId = @EhliyetSinifiId,
        DogumTarihi = @DogumTarihi,
        Adres = @Adres,
        SigortaNo = @SigortaNo,
        SigortaBitisTarihi = @SigortaBitisTarihi,
        Meslek = @Meslek,
        KullaniciAdi = @KullaniciAdi,
        Sifre = @Sifre,
        Aktif = @Aktif
    where MusteriId = @MusteriId
end
GO
/****** Object:  StoredProcedure [dbo].[MusteriPasifeAlma]    Script Date: 30.07.2024 20:46:32 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[MusteriPasifeAlma]
    @MusteriId int
as
begin
    update Musteriler
    set Aktif = 0
    where MusteriId = @MusteriId
end
GO
/****** Object:  StoredProcedure [dbo].[TumAraclarListeleme]    Script Date: 30.07.2024 20:46:32 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[TumAraclarListeleme]
AS
BEGIN
    SELECT *
    FROM Araclar
END
GO
/****** Object:  StoredProcedure [dbo].[TumCalisanlariListele]    Script Date: 30.07.2024 20:46:32 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[TumCalisanlariListele]
AS
BEGIN
    SELECT * FROM Calisanlar
END
GO
/****** Object:  StoredProcedure [dbo].[TumFaturalar]    Script Date: 30.07.2024 20:46:32 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[TumFaturalar]
AS
BEGIN
    SELECT * FROM Faturalar
END
GO
/****** Object:  StoredProcedure [dbo].[TumKiralamalar]    Script Date: 30.07.2024 20:46:32 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[TumKiralamalar]
AS
BEGIN
    SELECT * FROM Kiralamalar
END
GO
/****** Object:  StoredProcedure [dbo].[TümMusteriler]    Script Date: 30.07.2024 20:46:32 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[TümMusteriler]
as
begin
    select*from Musteriler
end

GO
