Podajnik palnika, NASTAWY i nowy podział plików
## Co nowego
- **Karta v1.3:** ikona „2” (podajnik palnika) na ekranie Palnik, ikona zaworu na ekranie Kocioł, NASTAWY Kocioł / Ogrzewanie 1 / Woda przebudowane według panelu (pozycje bez rejestru przyciemnione, „-”), edytor odzwierciedla wykryte encje w YAML.
- **Firmware v1.3:** diagnostyka magistrali w HA („CAN diag”, „CAN ID ramek”), tożsamość węzła dla zakładki Sieć (nazwa PelletCAN, wersja), instrukcja: docs/DIAGNOSTYKA.md.
- **Firmware v1.2:** Podajnik palnika w Teście wyjść i jako encja, stany mieszaczy, CWU Źródło / Zwiększenie / Delta z zapisem, histerezy na poziomie 0.
- **Nowy podział plików:** plik użytkownika `PelletCAN.yaml` (ustawienia + esphome/esp32/logger/web_server/captive_portal/api + packages) i niezmienny rdzeń z GitHuba. **Wymień swój plik `PelletCAN.yaml` na nowy.**

Szczegóły: [CHANGELOG.md](CHANGELOG.md) i [CHANGELOG-firmware.md](CHANGELOG-firmware.md).
