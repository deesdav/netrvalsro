# Webový projekt: Firma NETRVAL s.r.o.

Tento projekt je zaměřen na prezentaci služeb a referencí společnosti, která se zabývá projekcí elektrických zařízení a řídících systémů. Cílem webové aplikace je poskytovat přehledné informace o oblastech činnosti, spolupracujících firmách, a dosavadních úspěších.

## Obsah

- [Technologie](#technologie)
- [Struktura projektu](#struktura-projektu)
- [Instalace a spuštění](#instalace-a-spuštění)
- [Hlavní funkce](#hlavní-funkce)
- [Struktura komponent](#struktura-komponent)
- [Styling](#styling)
- [Přispívání](#přispívání)
- [Licence](#licence)
- [Odkaz na zdarma webovou doménu](#odkaz-na-zdarma-webovou-doménu)

## Technologie

- **React**: JavaScriptová knihovna pro tvorbu uživatelských rozhraní.
- **React Router**: Knihovna pro správu navigace mezi stránkami.
- **CSS**: Pro stylování webové aplikace.

## Struktura projektu

```plaintext
src/
│
├── components/
│   ├── MainPage/
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   └── Navigation.js
│
├── images/
│   ├── ateliertsunami.png
│   ├── bilfidenteobodin.png
│   └── ... (další obrázky)
│
├── pages/
│   └── MainPage/
│       ├── MainPage.js
│       └── MainPage.css
│
└── App.js
```

## Instalace a spuštění

Naklonujte tento repozitář do vašeho místního počítače:

```bash
git clone https://github.com/deesdav/netrvalsro.git
```

Přesuňte se do adresáře projektu:

```bash
cd netrvalsro
```

Nainstalujte závislosti:

```bash
npm install react-router-dom
```

Spusťte aplikaci:

```bash
npm run dev
```

## Hlavní funkce

- **Automatická rotace obrázků a textů**: Na hlavní stránce se v sekci spolupráce automaticky mění obrázky a texty, které reprezentují partnerské společnosti.
- **Navigace mezi různými oblastmi činnosti**: Uživatelé mohou procházet různé sekce, jako jsou Zdravotnictví, Průmysl, Infrastruktura, atd.
- **Responsivní design**: Webová aplikace je optimalizovaná pro různé velikosti obrazovek.

## Struktura komponent

- **Header**: Obsahuje logo a navigační odkazy.
- **Footer**: Obsahuje kontaktní informace a další odkazy.
- **Navigation**: Přepíná mezi aktivním a neaktivním stavem mobilního menu.

## Styling

Styling je definován v souboru **`MainPage.css`**, který obsahuje specifické styly pro hlavní stránku, včetně layoutu, barevných schémat a animací.

## Přispívání

Pokud máte zájem přispět k tomuto projektu, prosím, postupujte podle těchto kroků:

1. Forkněte tento repozitář.
2. Vytvořte novou větev pro vaši funkci nebo opravu: `git checkout -b nazev-vetve`.
3. Proveďte potřebné změny a commitujte: `git commit -m 'Přidání nové funkce'`.
4. Pushněte do své větve: `git push origin nazev-vetve`.
5. Vytvořte Pull Request.

## Licence

Tento projekt je licencován pod [MIT licencí](#).

```css
MIT Licence umožňuje volné použití, kopírování, úpravy a distribuci tohoto projektu. Další podmínky jsou uvedeny v textu licence.
```

## Odkaz na zdarma webovou doménu

Webová doména: [didntlastsro.g6.cz](https://didntlastsro.g6.cz/)
