GLITCH.EXE v1.3 – Graffiti archive covers

Új illusztrált borítók mind a hét részleghez, hero graffiti, finom hover.
A képek eredeti SVG illusztrációk, nem ingame fotók.
Minden meglévő funkció és név nélküli megjelenés megmaradt.

Telepítés: a ZIP teljes tartalmát töltsd fel a GLITCH.exe GitHub repository gyökerébe.


v1.6: Kiemelt Diary kép, három képes friss akta, lapozható öt Glitch üzenet.

V1.7: Kiemelt akta teljes magasságú borítókép (csak CSS javítás).


## Glitch Diary (v1.9)
- `diary.html`: naplóarchívum és külön megnyitható bejegyzések.
- `diary-data.json`: itt adhatók hozzá az új bejegyzések. A `number` mező legyen egyedi, a `date` YYYY-MM-DD formátumú; a `id` is legyen egyedi (pl. akta-002).
- `cover`: kép elérési útja, pl. `assets/diary-poster.svg`; `gallery`: további képek és képaláírások.
- A főoldali Kiemelt akta ugyanebből a fájlból olvassa a legfrissebb bejegyzést.
- A 001-es akta minta, nem valódi RP-esemény.


## v2.0 – URBEX FILES
- `urbex.html` – önálló helyszínarchívum és megnyitható akták.
- `urbex-data.json` – új helyszínek szerkeszthető adatai, képek és történetek.
- `urbex.js`, `urbex.css` – megjelenítés és stílus.
- A kezdőoldali Urbex hivatkozások az új oldalra mutatnak.
- A `helyszin-001` csak mintatartalom, nem valódi RP-esemény.
- A JSON-fájlok `fetch` használata miatt helyben egyszerű HTTP-szerverrel tesztelendők; Vercelen működnek.


## v2.1 – GARAGE FILES
- garage.html: járműarchívum és megnyitható akták.
- garage-data.json: négy minta járműadatlap (Elegy Retro Custom, Arbiter GT Custom, Jogger, Maibatsu Manchez Scout C).
- garage.js / garage.css: megjelenítés, galéria és stílus.
- A járművek története és fotói szándékosan minták; cseréld őket saját RP-tartalomra.
- A főoldali garázslinkek már az új részlegre vezetnek.
