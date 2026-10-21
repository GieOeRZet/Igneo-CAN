# Changelog

Historia zmian firmware: [CHANGELOG-firmware.md](CHANGELOG-firmware.md).

## Karta
- **igneo-card v9.4** – dyskretny przycisk wsparcia na dole ekranu INFO.
- **igneo-card v9.3** – informacja o aktualizacjach: zielona dioda przy ikonie menu i zielony napis „Informacje o programie”, gdy `version.json` w repo ma nowszą wersję firmware lub karty; ekran INFO przebudowany (autor, wersje, changelog aktualizacji, przycisk „Odrzuć aktualizację”, zapamiętany w przeglądarce); nowa rola encji `fw_ver` (Wersja firmware).
- **igneo-card v9.2** – automatyczne wykrywanie wszystkich encji po prefiksie (brak encji = „-”, bez błędów); tryb `lite: true/false` w jednej karcie (poziom 0, bez „Poziom menu”); nowy edytor wizualny podzielony wg ekranów i menu; osobny plik lite usunięty (typ `tekla-panel-card_lite` zostaje jako alias).
- **igneo-card v9.1** – historia alarmów z kotła (encje „Alarm wpis 1..20”, firmware ≥ 2.25); rekorder HA tylko jako zapas.
- igneo-card v9.0 – wszystkie poprawki i moduły scalone w jeden plik wejściowy (zamiast łańcucha plików v78–v86); lite wydzielone do `igneo-card-lite.js`.
- v8.6 – linia autora na ekranie INFO.
- v8.5 – grafiki kotła, palnika i bojlera z plików w `img/`.
- v8.4 – historia alarmów z historii HA, przycisk POTWIERDŹ.
- v8.0–v8.3 – poziomy dostępu z ESP (PIN), menu wg poziomu, nastawy palnika/CO/CWU.
