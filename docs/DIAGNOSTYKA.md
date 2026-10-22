# Diagnostyka – jak znaleźć brakujące rejestry i ramki (firmware ≥ 1.3)

Wszystko dzieje się w HA, bez czytania logów ESPHome. Włączone domyślnie (`sniff: "true"`).

## Nowe encje (Ustawienia → Urządzenia → ESPHome → PelletCAN → Diagnostyka)
- **CAN diag** – każdy ślad podsłuchu to nowy stan, więc historia encji = log:
  - `ZAPIS id=0x604 0xIDX.sub dane=CS IL IH SUB V0 V1 V2 V3` – **panel (lub inny węzeł) zapisał rejestr**. CS: 2F = 1 bajt, 2B = 2 bajty, 23 = 4 bajty; IDX = IL + IH w odwróconej kolejności (np. `14 22` = 0x2214); wartość = V0 V1… (młodszy bajt pierwszy).
  - `NOWY` / `ZMIANA` – pierwsza ramka SDO rejestru albo zmiana jego danych.
  - `PDO 0x456 bajt0 00>02 dane=…` – zmiana bajtu w ramce procesowej (np. modułu CAN IO BIG, węzeł 86 = 0x?56). Każdy bajt wyciszany po 6 zmianach na minutę.
  - W czasie skanu i migawki podsłuch jest wstrzymany.
- **CAN ID ramek** – lista unikalnych ID ramek widzianych na magistrali (hex, do 60). Nowe ID = nowe urządzenie lub nowy typ ramki.
- **SDO ostatni odczyt** – jak dotąd: wyniki odczytów, skanów, migawek; surowe PDO 0x456.

## Typowe zadania
1. **Znaleźć rejestr ustawienia, które zmieniasz na panelu** (np. Temp. maksymalna CWU, Wybieg pompy, Czujnik CO): zmień wartość na panelu, wejdź w historię „CAN diag” i szukaj wpisu `ZAPIS`. Panel zwykle zapisuje właśnie ten rejestr.
2. **Znaleźć rejestr, który panel tylko odczytuje**: migawka (`sdo_snapshot_cat`) przed i po zmianie – jak dotąd (wynik w „SDO ostatni odczyt”).
3. **Polecenia Pompy CWU i Wymiennika (Test wyjść)** – ruszaj nimi na panelu: w „CAN diag” pojawi się zapis (jeśli rejestr jest w węźle 4) albo zmiana bajtu PDO węzła 86. Dodatkowo skan węzła 86:
   `esphome.tekla_estyma_sdo_scan` z `from_index: 25088`, `to_index: 25632` (0x6200–0x6420), `sub: 1`, `node: 86`. Przerwanie: `sdo_scan_stop`.
4. **Bit „Podajnik palnika pracuje”**: włącz/wyłącz podajnik palnika w Test wyjść i obejrzyj zmianę w `PDO 0x456` (CAN diag lub SDO ostatni odczyt).
5. **Sieć na panelu**: ESP odpowiada jako węzeł `can_node_id` (domyślnie 90; 86 i 87 są zajęte przez kocioł) na zapytania o tożsamość: nazwa **PelletCAN** (0x1008), wersja softu (0x100A) i 0x1018. Po wgraniu wejdź w Menu → Sieć. Gdy dalej „Unknown”: sprawdź w „CAN diag”/„SDO ostatni odczyt” wpisy `IDENT …` (jakie węzły i indeksy pyta panel) i przyślij je. Od v1.4 heartbeat NMT jest domyślnie włączony (`can_heartbeat`).

## Przydatne ustawienia (plik `PelletCAN.yaml`)
`sniff`, `can_debug` (loguje wszystkie ramki w logach ESPHome – tylko do diagnozy), `can_node_id`, `can_identity`, `can_heartbeat`.
