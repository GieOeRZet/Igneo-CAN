# Tekla-Igneo-HA

Karta Home Assistant (`custom:tekla-panel-card`) – replika panelu **Estyma / Tekla Igneo Touch** – oraz konfiguracja ESPHome (XIAO ESP32-C6 + MCP2515), która czyta i zapisuje parametry kotła po CANopen (SDO, węzeł 4, 125 kbit/s).

Kod ESPHome i karta: Gorz Roman.

## Zawartość

| Ścieżka | Co to |
|---|---|
| `esphome/tekla-estyma.yaml` | firmware ESPHome (aktualna wersja w nagłówku `CHANGELOG`) |
| `esphome/secrets.example.yaml` | wzór pliku `secrets.yaml` (hasła, klucz API) |
| `www/community/igneo-ha/igneo-card.js` | karta (jedyny plik do dodania jako zasób dashboardu) |
| `www/community/igneo-ha/tekla-panel-card.js` | rdzeń karty, pobierany przez `igneo-card.js` |
| `www/community/igneo-ha/igneo-card-lite.js` | wersja lite, tylko podgląd (na razie nierozwijana) |
| `www/community/igneo-ha/img/` | grafiki kotła, palnika i bojlera (można podmienić) |
| `docs/rejestry/` | katalog rejestrów CANopen (opis + CSV) |

## Instalacja

1. **ESP:** skopiuj `esphome/secrets.example.yaml` do `secrets.yaml`, uzupełnij, wgraj `tekla-estyma.yaml` do ESPHome.
2. **Karta:** skopiuj zawartość `www/community/igneo-ha/` do `/config/www/community/igneo-ha/`.
3. **Zasób dashboardu** (Ustawienia → Dashboardy → Zasoby): typ *moduł JavaScript*, adres `/local/community/igneo-ha/igneo-card.js?v=1`. Dla lite dodatkowo `/local/community/igneo-ha/igneo-card-lite.js?v=1`.
4. Po każdej zmianie pliku podbij `?v=` i odśwież stronę (Ctrl+F5).
5. Karta: `type: custom:tekla-panel-card` (konfiguracja encji jak dotąd).

Karta pobiera rdzeń z ustalonej ścieżki `/local/community/igneo-ha/`, dlatego pliki muszą leżeć dokładnie tam (instalacja przez HACS nie jest przewidziana).

## Grafiki

Karta używa `img/kociol.*`, `img/palnik.*`, `img/bojler.*` (png, webp, jpg, jpeg, svg – w tej kolejności). Wgraj własny plik, aby podmienić domyślny.

## Uwagi

- Rejestry „Antylegionella" nie zostały jeszcze zidentyfikowane (w karcie „-").
- Zapis do kotła jest aktywny (`mirror: "false"`); tryb lustra blokuje wszystkie zapisy poza włącz/wyłącz i potwierdzeniem alarmu.
- Poziomy menu: użytkownik, klucz 1, klucz 2 – PIN-y to domyślne PIN-y kotła, zapisane w YAML (repo ma być prywatne).
