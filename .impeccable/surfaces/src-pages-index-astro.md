---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: []
---

# Surface: strona główna (one-page wizytówka)

Mode: Persuade. Audience: łodzianie na telefonie wieczorem + prowadzący oceniający wg kryteriów z Zad. 1. Action: zadzwoń / zarezerwuj stolik / zobacz menu z cenami. Constraints: brak backendu, treści fikcyjne oznaczone, bez popupów.

## Direction contract

THESIS: Neapolitański piec w łódzkiej przędzalni. Strona mówi językiem miejsca (cegła, malowany szyld na murze, żeliwne okno fabryczne), nie włoskiej przebieranki. Odrzuca kremowo-terakotową „rustykalną Italię” i ciemny loft z neonem.

OWN-WORLD: Cegła #9e3a22 jako pole całych sekcji, nie tapeta; sadza #1a1512 jako tekst i ciemne pasy; zieleń żeliwa #2d4a3e na ramy okien i stopkę; ochra szyldu #e0a82e zarezerwowana wyłącznie dla akcji; wapno #ece6dc tylko jako jasna sekcja menu. Kroje: jeden kondensowany grotesk szyldowy (nagłówki, wersaliki, malowane na murze) + jeden czytelny humanistyczny sans do tekstu. Siatka w modułach cegły: odstępy to wielokrotności „warstwy”. Okna = zdjęcia w szprosach. Ceny jak numery na tkanej metce.

STORY: Gość widzi: to pizzeria, Łódź, otwarta teraz, numer telefonu. Wierzy: rzemiosło (48 h ciasta, 485 °C, 90 s), krótkie menu z cenami. Robi: dzwoni, rezerwuje formularzem, zapisuje się na newsletter, dodaje opinię.

FIRST VIEWPORT: Pole cegły na pełną szerokość. Ogromny malowany napis PRZĘDZA (wyblakła farba na murze) przez całą szerokość. Pod nim okno fabryczne (żeliwne szprosy, 3x2 szyby) ze zdjęciem pizzy z pieca. Jedna linia: „Pizza neapolitańska z pieca opalanego drewnem. Ogrodowa, Łódź.” Pasek statusu (żywy: Otwarte do 22:00 / Zamknięte, otwieramy jutro 12:00). Dwie akcje w ochrze: Zadzwoń (tel:) i Zarezerwuj stolik. Na telefonie napis i okno na pełną szerokość, akcje przyklejone u dołu ekranu.

FORM: Ceglana fabryka (Łódź włókiennicza), pozycja 4 na mojej liście, seed key 5190f806. Raises: żywy status otwarcia (VU), dyscyplina modułu cegły (arcade), pionowa oś 0 h → 48 h → 90 s (dive), ochra tylko dla akcji (automata). Signature interaction: oś procesu ciasta wypełnia się przy przewijaniu, status otwarcia liczony na żywo.

ADAPTATIONS (po finish review, rebuild materiału): Cegła to prawdziwe zdjęcie muru (Unsplash, Jon McCallon) w lustrzanym kaflu 2x2, lekko podbite w stronę czerwieni; średnia kafla ok. #80412d, bo pełne przesunięcie do #9e3a22 dawało pomarańczowy plastik. Farba szyldów (PRZĘDZA, Promocje, Kontakt) maskowana luminancją tego samego zdjęcia: trzyma się lic cegieł, wypada w fugach. Desktop ma trzy identyczne okna fabryczne (ciasto, piec, pizza): rytm fasady przędzalni, na telefonie zostaje jedno okno z piecem. Tło karty to #e4e1d8 zamiast #ece6dc: chłodniejsze wapno, żeby nie wpaść w kremowe tło. Obie akcje w fasadzie są ochrowe. Szyld PRZĘDZA na desktopie jest ograniczony wysokością (28vh, max 16rem, ok. 830 px z 1200), żeby okna i cokół z akcjami zostały w pierwszym ekranie 1440x900; na telefonie wypełnia szerokość.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
