# Changelog

Pełna historia zmian firmware jest w nagłówku `esphome/tekla-estyma.yaml` (sekcja `# CHANGELOG`).

## Karta
- **igneo-card v9.2** – automatyczne wykrywanie wszystkich encji po prefiksie (brak encji = „-”, bez błędów); tryb `lite: true/false` w jednej karcie (poziom 0, bez „Poziom menu”); nowy edytor wizualny podzielony wg ekranów i menu; osobny plik lite usunięty (typ `tekla-panel-card_lite` zostaje jako alias).
- **igneo-card v9.1** – historia alarmów z kotła (encje „Alarm wpis 1..20”, firmware ≥ 2.25); rekorder HA tylko jako zapas.
- igneo-card v9.0 – wszystkie poprawki i moduły scalone w jeden plik wejściowy (zamiast łańcucha plików v78–v86); lite wydzielone do `igneo-card-lite.js`.
- v8.6 – linia autora na ekranie INFO.
- v8.5 – grafiki kotła, palnika i bojlera z plików w `img/`.
- v8.4 – historia alarmów z historii HA, przycisk POTWIERDŹ.
- v8.0–v8.3 – poziomy dostępu z ESP (PIN), menu wg poziomu, nastawy palnika/CO/CWU.

## Firmware
- **v2.26** – awaryjny punkt dostępu Wi-Fi `Tekla-Estyma Fallback` z portalem (nowy wpis `ap_pass` w secrets).
- **v2.25** – pełna historia alarmów z kotła (20 wpisów) w encjach „Alarm wpis 1..20”, akcja `alarm_refresh`.
- **v2.24** – po starcie odczyt wszystkich ustawień (poziom 0 pierwszy, potem klucz 1 i 2); poziom 0 czytany cyklicznie; klucz 1/2 po wpisaniu PIN-u i na żądanie.
- **v2.23** – migawka katalogowa rozszerzona z 538 do 593 rejestrów (węzeł 4), +55 rejestrów z katalogu.
- **v2.22** – ukryty diagnostyczny sensor „Sygnatura konfiguracji" (autor).
- v2.21 – usunięta „CWU antylegionella" (rejestr 0x216F okazał się inny).
- v2.20 – menu palnika: 22 parametry (odczyt i zapis), moc kW i spalanie liczone w ESP, poziomy dostępu.
