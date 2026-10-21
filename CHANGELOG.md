# Changelog – PelletCAN-card

Historia zmian firmware: [CHANGELOG-firmware.md](CHANGELOG-firmware.md).

## v1.3 – Podajnik palnika
- Wersja karty 1.3 wymaga firmware ≥ 1.2 (nowe encje: Podajnik palnika pracuje, stany mieszaczy, CWU Źródło/Zwiększenie/Delta). Bez nich pozycje pokazują „-”.
- **Ekran Palnik: ikona „2”** (podajnik palnika) na dolnym pasku obok ikon wentylatora i podajnika „1” (kolejność jak na panelu). Encja „Podajnik palnika pracuje” z firmware ≥ 1.2.
- **NASTAWY przebudowane według zdjęć panelu** (poziomy tylko 0 i 1; poziom 2 w tych menu nie występuje): Kocioł (poziom 0: Temperatura zadana, Histereza załączenia/wyłączenia; klucz 1: Minimalna temp. pomp, Wybieg pompy, Minimalna temp. powrotu, Czas mieszacza, Rezerwa paliwa stop), Ogrzewanie 1 (histereza, kalibracja, tryb, krzywa pogodowa na poziomie 0; reszta pod kluczem 1), Woda (klucz 1: Źródło, Zwiększenie temp. źródła, Delta załączenia pompy – z zapisem; Temp. maksymalna bez rejestru). Pozycje bez znanego rejestru są przyciemnione i pokazują „-”.
- Histerezy kotła i ustawienia CO1 są teraz dostępne bez PIN-u (poziom 0), zgodnie z panelem.
- **Ekran Kocioł: ikona zaworu (mieszacza)** pojawia się tylko gdy mieszacz pracuje, ze strzałką w lewo (zamyka) lub w prawo (otwiera), jak na panelu; dane z firmware ≥ 1.2 („Mieszacz CO1 stan”, „Mieszacz powrotu stan”).
- **Test wyjść: Podajnik palnika sterowalny** (wyjście 19, rejestr 0x2295) – już nie tylko podgląd.
- **Edytor karty**: YAML odzwierciedla edytor (wykryte encje wpisują się automatycznie do `entities:`; zmiana urządzenia/prefiksu wykrywa je od nowa).
- Czas podawania na ekranie Palnik zaokrąglony do 1 miejsca (wcześniej surowa liczba zmiennoprzecinkowa nachodziła na obraz).

## v1.2 – Test wyjść 1:1 z panelem
- Ekran Test wyjść przerysowany według zdjęć panelu (perspektywa wyprostowana, wymiary w % szerokości ekranu): wiersz 10,55, pola wyboru 6,2 × 6,2, kolumny A/OFF/ON co 8,3, niebieskie tło listy, cyjanowe separatory, żółto-zielony ptaszek, biała gałka suwaka.
- Wszystkie 21 pozycji w kolejności panelu, w tym suwak „Dm.” (pokazany, bez rejestru – nieaktywny) i suwak „WentWyc” (rejestr 0x2298). Bez dodatkowych lampek i wierszy; pozycje bez znanego rejestru są przyciemnione.
- Nagłówek pokazuje bieżący poziom dostępu (jak ikona klucza na panelu).

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
