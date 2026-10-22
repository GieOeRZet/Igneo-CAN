#!/usr/bin/env python3
"""Generuje dist/pelletcan-lang.js ze zrodla docs/lang/pelletcan-lang.txt (kolumny: pl | en | da | de | sv | lt | sk | cs | es | ro | et).
Uzycie: python3 tools/gen_lang.py   (z katalogu glownego repo)"""
import json, pathlib
root = pathlib.Path(__file__).resolve().parent.parent
LANGS = ['pl', 'en', 'da', 'de', 'sv', 'lt', 'sk', 'cs', 'es', 'ro', 'et']
NAMES = {'pl': 'PL – Polski', 'en': 'EN – English', 'da': 'DK – Dansk', 'de': 'DE – Deutsch', 'sv': 'SE – Svenska', 'lt': 'LT – Lietuvių',
         'sk': 'SK – Slovenčina', 'cs': 'CZ – Čeština', 'es': 'ES – Español', 'ro': 'RO – Română', 'et': 'EST – Eesti'}
dic = {l: {} for l in LANGS[1:]}
for n, line in enumerate((root / 'docs/lang/pelletcan-lang.txt').read_text(encoding='utf-8').splitlines(), 1):
    if not line.strip() or line.startswith('#'): continue
    p = [x.strip() for x in line.split(' | ')]
    assert len(p) == 11, f'linia {n}: {len(p)} kolumn'
    for l, t in zip(LANGS[1:], p[1:]): dic[l][p[0]] = t
out = ('/* PelletCAN-card: tlumaczenia (generowane z docs/lang/pelletcan-lang.txt przez tools/gen_lang.py - nie edytuj recznie).\n'
       '   Klucz = tekst polski (zrodlo), {n} = dowolny fragment. Brak tlumaczenia = zostaje tekst polski. */\n'
       'export default ' + json.dumps({'names': NAMES, 'dict': dic}, ensure_ascii=False, indent=1) + ';\n')
(root / 'dist/pelletcan-lang.js').write_text(out, encoding='utf-8')
print('ok', len(dic['en']), 'wpisow x', len(dic), 'jezykow')
