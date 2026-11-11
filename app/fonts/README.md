# Fontlar

Site fontları buradan, kendi sunucumuzdan yüklenir (`app/layout.tsx`).

| Dosya | İçerik |
|---|---|
| `inter-latin.woff2`, `plus-jakarta-sans-latin.woff2` | Google Fonts'un `latin` alt kümesi; yalnızca `wght` ekseni 400–800 aralığına kırpıldı (`fontTools.varLib.instancer`), glyph'ler değişmedi |
| `inter-tr.woff2`, `plus-jakarta-sans-tr.woff2` | Aynı fontların `latin-ext` dosyasından yalnızca **Ğ ğ İ Ş ş ₺** karakterleri kalacak şekilde kırpılmış kopyası (`pyftsubset`, `wght` 400–800) |

Neden: Türkçe için gerekli `latin-ext` dosyaları 85 KB + 22 KB idi ve yalnızca 6 harf için indiriliyordu (mobil PageSpeed'de FCP/LCP).

Yeni bir metinde bu dışında bir Latin-ext karakteri (ör. `ă`, `ő`) kullanılırsa o karakter sistem fontuyla çizilir; gerekirse ilgili `-tr.woff2` dosyası o karakteri ekleyerek yeniden üretilmeli:

    pyftsubset <latin-ext.woff2> --unicodes=U+011E,U+011F,U+0130,U+015E,U+015F,U+20BA,... --flavor=woff2 --layout-features=kern --no-hinting --output-file=<x>-tr.woff2

Lisans: Inter (© The Inter Project Authors) ve Plus Jakarta Sans (© The Plus Jakarta Sans Project Authors), SIL Open Font License 1.1 — yeniden dağıtım ve alt küme üretimi serbest.

Sitede 400–800 dışında bir `font-weight` (ör. `font-light`) kullanılırsa tarayıcı en yakın kalınlığa sabitler; gerekirse eksen aralığı genişletilmeli.
