$articles = @(
    @{
        Name = "hydraulic-oil-press-buying-guide.md"
        Title = @{ en="Hydraulic Oil Press Buying Guide"; fr="Guide d'achat de presse hydraulique"; ar="Dalil Istismar Ma'bad al-Zayt al-Hidrawlik"; id="Panduan Membeli Mesin Press Minyak Hidrolik" }
        Description = @{ en="How to choose the right machine for your business"; fr="Comment choisir la bonne machine pour votre entreprise"; ar="Kayfa tasta'mil al-ma'bad al-musawi li-sharikatikum"; id="Cara memilih mesin yang tepat untuk bisnis Anda" }
        Type = "guide"
        Date = "2026-07-15"
    },
    @{
        Name = "cold-press-vs-hot-press-oil.md"
        Title = @{ en="Cold Press vs Hot Press Oil"; fr="Froid Press vs Chaud Press Huile"; ar="Cold Press vs Hot Press Oil"; id="Cold Press vs Hot Press Minyak" }
        Description = @{ en="Comparison of cold and hot pressing methods"; fr="Comparaison des methodes de pressage a froid et a chaud"; ar="Munqashat bayna turuq al-tab'i'i wal-musammat"; id="Perbandingan metode cold press dan hot press" }
        Type = "comparison"
        Date = "2026-07-14"
    },
    @{
        Name = "how-to-maximize-oil-yield.md"
        Title = @{ en="How to Maximize Oil Yield"; fr="Comment maximiser le rendement en huile"; ar="Kayfa tazid hasilat al-zayt"; id="Cara Memaksimalkan Hasil Minyak" }
        Description = @{ en="Tips and techniques for better oil extraction"; fr="Conseils et techniques pour une meilleure extraction d'huile"; ar="Nusus wa-turuq li-istithmar al-zayt al-afdal"; id="Tips dan teknik untuk ekstraksi minyak yang lebih baik" }
        Type = "guide"
        Date = "2026-07-12"
    },
    @{
        Name = "hydraulic-oil-press-maintenance-guide.md"
        Title = @{ en="Hydraulic Oil Press Maintenance"; fr="Maintenance de presse hydraulique"; ar="Muhafaza Ma'bad al-Zayt al-Hidrawlik"; id="Pemeliharaan Mesin Press Minyak Hidrolik" }
        Description = @{ en="Complete maintenance guide"; fr="Guide complet de maintenance"; ar="Dalil shamil li-l-muhafaza"; id="Panduan pemeliharaan lengkap" }
        Type = "guide"
        Date = "2026-07-16"
    },
    @{
        Name = "complete-oil-production-line-guide.md"
        Title = @{ en="Complete Oil Production Line Guide"; fr="Guide complet de ligne de production d'huile"; ar="Dalil Khat Intaj al-Zayt al-Kamil"; id="Panduan Garis Produksi Minyak Lengkap" }
        Description = @{ en="Designing an efficient production system"; fr="Concevoir un systeme de production efficace"; ar="Tasmiym niza'm intaj muqtafi"; id="Merancang sistem produksi yang efisien" }
        Type = "guide"
        Date = "2026-07-11"
    },
    @{
        Name = "hydraulic-oil-press-vs-other-types.md"
        Title = @{ en="Hydraulic vs Other Oil Press Types"; fr="Hydraulique vs Autres Types de Presse"; ar="Hidrawlik vs Anwar al-Ma'badat"; id="Hidrolik vs Jenis Press Minyak Lain" }
        Description = @{ en="Comparison with screw and solvent extraction"; fr="Comparaison avec la vis et l'extraction par solvant"; ar="Munqashat ma'a al-musammat wa-l-istithmar bi-l-sulvent"; id="Perbandingan dengan screw dan solvent extraction" }
        Type = "comparison"
        Date = "2026-07-13"
    },
    @{
        Name = "oil-press-raw-materials-guide.md"
        Title = @{ en="Oil Press Raw Materials Guide"; fr="Guide des matieres premieres pour presse"; ar="Dalil al-Madin al-Asliyyah li-l-Ma'bad"; id="Panduan Bahan Baku Press Minyak" }
        Description = @{ en="Best seeds and nuts for extraction"; fr="Meilleures graines et noix pour l'extraction"; ar="Aflaj wal-jawz al-afdal li-l-istithmar"; id="Biji dan kacang terbaik untuk ekstraksi" }
        Type = "guide"
        Date = "2026-07-17"
    },
    @{
        Name = "oil-press-electrical-requirements-guide.md"
        Title = @{ en="Oil Press Electrical Requirements"; fr="Exigences electriques de la presse"; ar="Masahat al-Taqlidiya li-l-Ma'bad"; id="Persyaratan Listrik Mesin Press" }
        Description = @{ en="Power supply and generator configuration"; fr="Alimentation electrique et configuration du generateur"; ar="Taqlid al-qawi wa-tasmiym al-mujarrad"; id="Konfigurasi pasokan daya dan generator" }
        Type = "guide"
        Date = "2026-07-18"
    },
    @{
        Name = "oil-press-price-investment-guide.md"
        Title = @{ en="Oil Press Price and Investment"; fr="Prix et investissement presse"; ar="Qimat wa-Ishtirak al-Ma'bad"; id="Harga dan Investasi Mesin Press" }
        Description = @{ en="Cost analysis and ROI calculation"; fr="Analyse des couts et calcul du ROI"; ar="Tahlil al-masalih wa-hisab al-ROI"; id="Analisis biaya dan perhitungan ROI" }
        Type = "guide"
        Date = "2026-07-19"
    }
)

foreach ($article in $articles) {
    $content = @"
---
title:
  en: $($article.Title.en)
  fr: $($article.Title.fr)
  ar: $($article.Title.ar)
  id: $($article.Title.id)
description:
  en: $($article.Description.en)
  fr: $($article.Description.fr)
  ar: $($article.Description.ar)
  id: $($article.Description.id)
type: $($article.Type)
publishedAt: $($article.Date)
seoKeywords:
  - hydraulic oil press
---

## Introduction

$($article.Description.en)
"@
    Set-Content -Path "src/content/resources/$($article.Name)" -Value $content -Encoding UTF8
    Write-Host "Created: $($article.Name)"
}