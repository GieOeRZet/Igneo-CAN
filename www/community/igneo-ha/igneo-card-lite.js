/* igneo-card-lite v1.3 - wersja "tylko podglad" karty custom:tekla-panel-card_lite. Wymaga igneo-card.js (ladowanego jako zasob).
   Ekrany poziomu uzytkownika (bez PIN-u): Kociol, Palnik, Ogrzewanie 1, CWU (ustawienia), Historia alarmow, Informacje, harmonogramy, Paliwo.
   Brak menu "Poziom menu (PIN)", Konfiguracji, Testu wyjsc, Statystyk, Sieci. Nic nie jest edytowalne.
   Klikane tylko: nawigacja, strzalki historii alarmow, Potwierdz alarm i wlacz/wylacz kociol. Konfiguracja encji jak w tekla-panel-card.
   (Na razie nierozwijana - patrz changelog.) */
(async () => {
  try {
    await customElements.whenDefined('tekla-panel-card');
    const C = customElements.get('tekla-panel-card');
    for (let i = 0; i < 100 && !C.prototype.__v86; i++) await new Promise(r => setTimeout(r, 100));
    if (customElements.get('tekla-panel-card_lite')) return;
    const GO_BLOCK = ['level', 'test', 'stats', 'net'];
    const ACT_OK = ['quick', 'fuel', 'ok', 'cancel', 'toggle', 'confirm', 'prog', 'alup', 'aldn', 'alnone'];
    class Lite extends C {
      _lvl() { return 0; }
      _unl() { return false; }
      _build() {
        super._build();
        this.shadowRoot.addEventListener('click', e => {
          const a = e.target.closest && e.target.closest('[data-go],[data-act]'); if (!a) return;
          const block = a.dataset.go ? GO_BLOCK.includes(a.dataset.go) : !ACT_OK.includes(a.dataset.act);
          if (block) { e.stopPropagation(); e.preventDefault(); }
        }, true);
      }
      _menu() { return super._menu().replace(/<div class="row go mi" data-go="level"[\s\S]*?<\/div>/, ''); }
    }
    customElements.define('tekla-panel-card_lite', Lite);
    window.customCards = window.customCards || [];
    window.customCards.push({ type: 'tekla-panel-card_lite', name: 'Tekla panel (lite, tylko odczyt)', description: 'Replika panelu Igneo Touch - tylko podglad, bez PIN-u' });
  } catch (e) { console.error('igneo-card-lite', e); }
})();
