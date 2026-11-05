# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro (static output). User leaned toward Astro ("chyba astro najlepsze po takie rzeczy"); confirmed as a simple static site, no backend.

## Users

Mieszkańcy Łodzi i osoby odwiedzające miasto, którzy szukają miejsca na pizzę: najczęściej na telefonie, w drodze albo wieczorem w domu. Chcą w kilka sekund sprawdzić menu z cenami, godziny otwarcia, adres, i zadzwonić, zamówić dowóz albo zarezerwować stolik. Drugi odbiorca: prowadzący zajęcia z marketingu, który ocenia stronę według kryteriów z Zadania 1.

## Product Purpose

Wizytówka firmowa www fikcyjnej pizzerii Przędza w Łodzi (projekt na zajęcia, Zadanie 2). Strona ma przekonać do odwiedzin lub zamówienia i dać wszystkie informacje kontaktowe bez szukania. Sukces: gość w pierwszym ekranie wie, co to za miejsce, i jednym ruchem dzwoni, rezerwuje lub widzi menu.

## Positioning

Pizza neapolitańska z pieca opalanego drewnem: krótkie menu (ok. 10 pizz), ciasto dojrzewające 48 h, pomidory San Marzano, fior di latte. Mała, rzemieślnicza pizzeria, nie sieciówka z dużym menu.

## Operating Context

- Większość wizyt z telefonu; wersja mobilna jest priorytetem.
- Brak backendu: formularze (rezerwacja, newsletter) walidowane po stronie przeglądarki, wysyłka symulowana.
- Kryteria oceny pochodzą z Zadania 1 (sprawozdanie: /home/kacper-kleczaj/Pulpit/sprawozdanie_kacper_kleczaj.pdf): szata graficzna, układ, czcionka (rozmiar, kontrast), multimedia, menu, oferta z opisem/zdjęciem/ceną, zamówienia, płatność i dostawa, bezpieczeństwo (RODO, regulamin, NIP/KRS), kontakt (adres, tel./e-mail, mapa, godziny, formularz), ankiety/ocena, promocje z konkretnymi cenami, opinie z możliwością dodania, newsletter, wersja mobilna, social media.
- Wnioski z Zadania 1: ładna strona to za mało; wygrywa połączenie dobrej grafiki z funkcjami (opinie, newsletter, promocje z cenami). Unikać wyskakujących okienek zasłaniających treść.

## Capabilities and Constraints

- Rezerwacja stolika: formularz z walidacją, bez backendu.
- Zamówienie: telefon (przycisk „Zadzwoń”), dowóz z opisaną strefą, linki do zewnętrznych platform dostaw.
- Opinie, promocje z konkretnymi cenami, zapis do newslettera.
- Kontakt: mapa, godziny, adres, telefon, e-mail, dane firmy (NIP/KRS), polityka prywatności (RODO).
- Brak płatności online.

## Brand Commitments

- Nazwa: Przędza (nawiązanie do łódzkich przędzalni i rozciąganego ciasta). Repozytorium nazywa się marint-pizzeria, to tylko nazwa repo.
- Miasto: Łódź. Adres i dane rejestrowe fikcyjne.
- Język strony: polski.
- Strona nie może wyglądać na „AI slop”: mało krojów pisma, dobre rozmiary, czytelna na telefonie.

## Evidence on Hand

- Zdjęcia: darmowe z Unsplash (licencja Unsplash), pobrane do repo i zoptymalizowane.
- Brak prawdziwych opinii klientów, prawdziwych cen, prawdziwego NIP/KRS i adresu. Wszystkie takie treści są przykładowe i muszą być oznaczone jako fikcyjne (projekt na zajęcia).

## Product Principles

1. Informacja przed ozdobą: menu z cenami, godziny, telefon i adres zawsze w zasięgu jednego ruchu.
2. Telefon jest głównym ekranem.
3. Rzemiosło pokazywane konkretem (48 h, piec, składniki), nie przymiotnikami.
4. Funkcje marketingowe (opinie, promocje, newsletter) są częścią strony, ale nigdy nie zasłaniają treści.

## Accessibility & Inclusion

WCAG 2.1 AA: kontrast tekstu, czytelne rozmiary czcionki na telefonie, obsługa klawiatury, etykiety formularzy, `prefers-reduced-motion`.
