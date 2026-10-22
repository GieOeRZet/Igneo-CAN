# Polowanie na brakujące rejestry – plan i lista

## Zasada
Węzeł 4 jest już przeskanowany w całości (0x0000–0xFFFF, sub 1; istnieje 593 rejestrów). Brakujące pozycje menu są więc w katalogu – trzeba tylko **przypisać** je do rejestru. Najszybciej: zmienić wartość na panelu i odczytać, który rejestr panel zapisał.

## Metoda A – podsłuch zapisów panelu (główna)
1. Odblokuj na panelu odpowiedni poziom (klucz 1: PIN 0900, klucz 2: PIN 0999).
2. Wejdź w pozycję, zmień wartość o jeden krok, zatwierdź (OK / wyjście z pola), wróć do starej wartości. Zapisz godzinę (z dokładnością do minuty) i nazwę pozycji.
3. ESP loguje zapisy panelu do encji „Tekla CAN diag” jako `ZAPIS NOWY/ZMIANA id=0x604 0xXXXX.1 dane=...` (index = rejestr, dane = wartość). Historię encji odczytuje się z HA, więc nie trzeba niczego kopiować na bieżąco.
4. Jedna pozycja na raz, odstęp ≥ 30 s między pozycjami (żeby wpisy nie nakładały się na PDO).

## Metoda B – migawka różnicowa (gdy panel niczego nie zapisał)
Dla ustawień czytanych, a nie zapisywanych (np. wartość zmienia się dopiero po wyjściu z menu): `sdo_snapshot_cat` przed i po zmianie, porównanie plików. Tylko dla rejestrów NIEZNANYCH (kolumna „do migawki”).

## Skan węzłów
Panel sam skanuje węzły 1–127 (zapytania 0x1018 sub 2); odpowiada tylko węzeł 86 (i ESP jako 90). Innych urządzeń na magistrali nie ma. Węzeł 86 (CAN IO BIG): zostały 0x6200 / 0x6411 (wyjścia) – to już Test wyjść.

## Lista do znalezienia (stan 22.10)
| Menu | Pozycja | Poziom | Uwagi |
|---|---|---|---|
| Kocioł – ustawienia | Minimalna temp. pomp [°C] | 1 | |
| Kocioł – ustawienia | Wybieg pompy [min] | 1 | |
| Kocioł – ustawienia | Minimalna temp. powrotu [°C] | 1 | |
| Kocioł – ustawienia | Czas mieszacza [s] | 1 | |
| Kocioł – ustawienia | Rezerwa paliwa stop [kg] | 1 | |
| Ogrzewanie 1 | Czujnik pokojowy | 1 | |
| Ogrzewanie 1 | Czujnik CO | 1 | |
| Ogrzewanie 1 | Wsp. korekcji t. CO [°C/°C] | 1 | |
| Ogrzewanie 1 | MAX Tzew pomp komf. / ekon. [°C] | 1 | 2 pozycje |
| Ogrzewanie 1 | Obniżenie temperatury CO [°C] | 1 | |
| Ogrzewanie 1 | MIN temperatura CO pomp [°C] | 1 | |
| Ogrzewanie 1 | Czas mieszacza [s] | 1 | |
| Ogrzewanie 1 | Stała pompa | 1 | |
| Ogrzewanie 1 | Obniżenie Tco dla ochrony powrotu | 1 | |
| Woda | Temp. maksymalna [°C] | 1 | zakres 40–89; po zmianie nie zmienił się żaden rejestr z katalogu |
| Woda | Antylegionella (czas/dzień?) | 0/1 | 0x216F to NIE antylegionella |
| Palnik | Wentylator wspomagający – krzywa | 1 | kandydaci 0x2268, 0x226E, 0x226F, 0x2275, 0x227A |
| Menu | Alarm dźwiękowy | 1 | prawdopodobnie lokalne w panelu |
