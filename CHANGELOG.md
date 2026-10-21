# Changelog – PelletCAN-card

Historia zmian firmware: [CHANGELOG-firmware.md](CHANGELOG-firmware.md).

## v1.1 – Test wyjść
- **Ekran Test wyjść jak na panelu Igneo Touch**: 21 pozycji w kolejności z panelu, A/OFF/ON i A/CLOSE/OPEN (ruszt, mieszacze), suwak WentWyc, zaznaczenie stanu odczytanego z kotła. Sterowanie tylko na poziomie 2 (PIN klucza 2); na poziomie 1 podgląd.
- Wyjścia wracają na Automat po wyjściu z ekranu (i po 2 min w firmware). Pompa CWU, Wymiennik i Podajnik palnika są tylko do podglądu (rejestr nieznany).
- Wymaga firmware ≥ 1.1 (akcje `set_output`, `set_output_pct`, `test_refresh`, `test_reset`, sensor „Test wyjsc stany”).

## v1.0 – pierwsze oficjalne wydanie
Wszystko, co powstało w wersjach roboczych, jest stanem v1.0:
- **Wierna replika panelu Igneo Touch** (typ `custom:pelletcan-card`; stary `custom:tekla-panel-card` działa dalej): ekran główny, Ogrzewanie, Woda, Kocioł, Palnik, Menu, Historia alarmów, Informacje o programie, harmonogramy tygodniowe (paski, edycja), Test wyjść i Statystyki (poziom 1).
- **Ustawienia (NASTAWY)** kotła, palnika (22 parametry), CO obwód 1 i CWU z oknami edycji (suwak, +/–, przełączniki); zapis przez usługi ESPHome.
- **Poziomy dostępu z PIN** (użytkownik / klucz 1 / klucz 2), blokada po bezczynności; tryb `lite: true` (zawsze poziom 0, bez PIN-u).
- **Automatyczne wykrywanie encji** po prefiksie nazwy (brak encji = „-”), wizualny edytor karty.
- **Historia alarmów** czytana z bufora kotła (20 wpisów), przewijanie strzałkami, potwierdzanie alarmu.
- **Ekran INFO**: autor, wersje firmware i karty, zielona dioda i changelog przy dostępnej aktualizacji (z `version.json` w repo), „Odrzuć aktualizację”, dyskretny przycisk wsparcia.
- **Grafiki** kotła, palnika i bojlera z folderu `img/` (można podmienić).
- **Instalacja przez HACS** (repozytorium niestandardowe, kategoria Dashboard), jeden zasób; ścieżki względne.

<details><summary>Historia robocza przed v1.0 (numeracja wewnętrzna 9.x i wcześniejsza)</summary>

- **v9.6** – projekt nazywa się teraz **PelletCAN** (nowe repozytorium `GieOeRZet/PelletCAN`): plik karty `pelletcan-card.js`, katalog HACS `pelletcan`, dodatkowy alias typu `custom:pelletcan-card` (typ `custom:tekla-panel-card` działa dalej); nazwa karty: **PelletCAN-card**.
- **igneo-card v9.5** – instalacja przez HACS (katalog `dist/`, `hacs.json`); karta sama wykrywa swój katalog (rdzeń i grafiki ładowane z tego samego miejsca).
- **igneo-card v9.4** – dyskretny przycisk wsparcia na dole ekranu INFO.
- **igneo-card v9.3** – informacja o aktualizacjach: zielona dioda przy ikonie menu i zielony napis „Informacje o programie”, gdy `version.json` w repo ma nowszą wersję firmware lub karty; ekran INFO przebudowany (autor, wersje, changelog aktualizacji, przycisk „Odrzuć aktualizację”, zapamiętany w przeglądarce); nowa rola encji `fw_ver` (Wersja firmware).
- **igneo-card v9.2** – automatyczne wykrywanie wszystkich encji po prefiksie (brak encji = „-”, bez błędów); tryb `lite: true/false` w jednej karcie (poziom 0, bez „Poziom menu”); nowy edytor wizualny podzielony wg ekranów i menu; osobny plik lite usunięty (typ `tekla-panel-card_lite` zostaje jako alias).
- **igneo-card v9.1** – historia alarmów z kotła (encje „Alarm wpis 1..20”, firmware ≥ 2.25); rekorder HA tylko jako zapas.
- igneo-card v9.0 – wszystkie poprawki i moduły scalone w jeden plik wejściowy (zamiast łańcucha plików v78–v86); lite wydzielone do `igneo-card-lite.js`.
- v8.6 – linia autora na ekranie INFO.
- v8.5 – grafiki kotła, palnika i bojlera z plików w `img/`.
- v8.4 – historia alarmów z historii HA, przycisk POTWIERDŹ.
- v8.0–v8.3 – poziomy dostępu z ESP (PIN), menu wg poziomu, nastawy palnika/CO/CWU.

</details>
