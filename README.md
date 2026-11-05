# Przędza: wizytówka pizzerii (Marketing, Zadanie 2)

Strona-wizytówka fikcyjnej pizzerii neapolitańskiej **Przędza** z Łodzi (Księży Młyn). Projekt zaliczeniowy. Nazwa, adres, NIP/KRS, ceny i opinie są wymyślone.

## Technologia

- [Astro](https://astro.build) 7, wynik w postaci statycznego HTML/CSS z małymi skryptami (bez frameworka po stronie przeglądarki).
- Zdjęcia: Unsplash (licencja Unsplash), przetwarzane przy budowaniu do AVIF/WebP w kilku rozmiarach (`astro:assets` + `sharp`).
- Kroje pisma hostowane lokalnie (Fontsource): Big Shoulders Display (nagłówki, szyld) i Source Sans 3 (tekst).
- Ikony: Lucide.
- Mapa: OpenStreetMap (bez cookies, bez klucza API).

## Uruchomienie

```bash
npm install
npm run dev       # http://localhost:4321/marint-pizzeria/
npm run build     # wynik w dist/
npm run preview
```

## Co jest na stronie

| Sekcja | Kryterium z Zadania 1 |
|---|---|
| Fasada: szyld, okna ze zdjęciami, status „otwarte do…” liczony na żywo, przyciski Zadzwoń / Zarezerwuj | szata graficzna, układ, multimedia, kontakt |
| 48 godzin ciasta: oś procesu od zarobu do pieca | treści dodatkowe, multimedia |
| Karta: 10 pizz z opisem, ceną i oznaczeniami (wege, wegańska, ostra), zdjęcia, desery i napoje | oferta: opis, zdjęcia, cena |
| Promocje z konkretnymi cenami i datą aktualności | promocje |
| Zamów do domu: telefon, strefa, minimum, koszt dostawy, płatność, linki do aplikacji | zamówienia, płatność i dostawa |
| Rezerwacja stolika: formularz z walidacją | zamówienia / rezerwacja online |
| Opinie gości + formularz oceny (jedzenie, obsługa) | opinie, ankiety, ocena obsługi |
| Newsletter z checkboxem zgody | newsletter |
| Kontakt: adres, telefon, e-mail, godziny (dzisiejszy dzień wyróżniony), mapa | kontakt |
| Stopka: NIP, KRS, regulamin, polityka prywatności (RODO), social media | bezpieczeństwo, social media |
| Pasek „Zadzwoń / Stolik” przyklejony do dołu ekranu na telefonie | wersja mobilna |

Formularze nie mają backendu: walidują dane w przeglądarce i pokazują potwierdzenie z informacją, że to wersja demonstracyjna.
