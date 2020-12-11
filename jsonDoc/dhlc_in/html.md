# Dokumentace HTML template souborů

Některé jsou v průběhu buildu statické, jiné se dívají do `app._BUILD_` pomocí `gulp_place` (viz `package.json` též `_BUILD_` klíč a `gulpfile.js`).

Dynamická část je zahrnuta v [**JavaScript**ové části](./javascript.md).

## Struktura
- **[Stránky](#nav_stránky-index)**<a name="nav_stránky"></a> *(statické)*

    Zde jsou zahrnuty HTML části stránek, dynamická část je v [**JavaScript**ové části](./javascript.md#stránka).

    - **[pp_Flash](#nav_stránky-pp_flash)** *(dynamické)*

        Stránka reportů pro __Flash Reports__

    - **[pp_FlashProjectResults](#nav_stránky-pp_flashprojectresults)** *(dynamické)*

        Stránka reportů pro konkrétní projekt v __Flash Reports__

    - **[pp_FlashProjectTimeline](#nav_stránky-pp_flashprojecttimeline)** *(dynamické)*

        Stránka grafů pro konkrétní projekt v __Flash Reports__

    - **[pp_FlashSurvey](#nav_stránky-pp_flashsurvey)** *(dynamické)*

        Stránka reportů pro __Flash Reports__

    - **[pp_FlashSurveyForm](#nav_stránky-pp_flashsurveyform)** *(dynamické)*

        Stránka pro vyplnění __Flash Reports__

    - **[pp_FlashSurveyResults](#nav_stránky-pp_flashsurveyresults)** *(dynamické)*

        Stránka pro zobrazení minulých vyplněných __Flash Reports__

    - **[pp_FlashSurveysList](#nav_stránky-pp_flashsurveyslist)** *(dynamické)*

        Stránka vyplněných __Flash Reports__

    - **[pp_Home](#nav_stránky-pp_home)** *(dynamické)*

        Úvodní stránka/rozcestník

    - **[pp_SettingsFeedback](#nav_stránky-pp_settingsfeedback)** *(dynamické)*

        Stránka s formulářem pro podání feedbacku na aplikace

    - **[pp_SettingsProfile](#nav_stránky-pp_settingsprofile)** *(statické)*

        Stránka pro profil uživatele aplikace

    - **FAQ** <a name="nav_stránky-faq"></a>

        - **[pp_FAQ](#nav_stránky-faq-pp_faq)** *(dynamické)*

            Stránka se seznamem FAQ

        - **[pp_FAQ_Detail](#nav_stránky-faq-pp_faq_detail)** *(dynamické)*

            Stránka detailu FAQ

    - **Ideje** <a name="nav_stránky-ideje"></a>

        - **[pp_Ideas](#nav_stránky-ideje-pp_ideas)** *(dynamické)*

            Stránka se seznamem idejí

        - **[pp_IdeasDetail](#nav_stránky-ideje-pp_ideasdetail)** *(dynamické)*

            Stránka detailu ideje

        - **[pp_IdeasDraft](#nav_stránky-ideje-pp_ideasdraft)** *(dynamické)*

            Stránka rozepsané ideje

        - **[pp_IdeasEdit](#nav_stránky-ideje-pp_ideasedit)** *(dynamické)*

            Stránka formuláře pro editaci ideje

        - **[pp_IdeasMy](#nav_stránky-ideje-pp_ideasmy)** *(dynamické)*

            Stránka se seznamem idejí

    - **Konference** <a name="nav_stránky-konference"></a>

        - **[pp_Conference](#nav_stránky-konference-pp_conference)** *(dynamické)*

            Stránka se seznamem všech konferencí

        - **[pp_Conference_Agenda](#nav_stránky-konference-pp_conference_agenda)** *(dynamické)*

            Stránka s agendou pro konkrétní konferenci

        - **[pp_Conference_Contacts](#nav_stránky-konference-pp_conference_contacts)** *(dynamické)*

            Stránka se seznamem lidí pro konkrétní konferenci

        - **[pp_Conference_FAQ](#nav_stránky-konference-pp_conference_faq)** *(dynamické)*

            Stránka s FAQ pro konkrétní konferenci

        - **[pp_Conference_Feedback](#nav_stránky-konference-pp_conference_feedback)** *(dynamické)*

            Stránka se zpětnou vazbou pro konkrétní konferenci

        - **[pp_Conference_Files](#nav_stránky-konference-pp_conference_files)** *(dynamické)*

            Stránka se seznamem souborů pro konkrétní konferenci

        - **[pp_Conference_Information](#nav_stránky-konference-pp_conference_information)** *(dynamické)*

            Informační stránka pro konkrétní konferenci

        - **[pp_Conference_InformationVenueMap](#nav_stránky-konference-pp_conference_informationvenuemap)** *(dynamické)*

            Stránka s mapou pro konkrétní konferenci (podstránka [pp_Conference_Information](#nav_stránky-konference-pp_conference_information)).

        - **[pp_Conference_SignUp](#nav_stránky-konference-pp_conference_signup)** *(dynamické)*

            Stránka pro konkrétní tzv. 'SignUp' konferenci

        - **Popup Stránky** <a name="nav_stránky-konference-popup-stránky"></a>

            - **[agendaFeedback](#nav_stránky-konference-popup-stránky-agendafeedback)** *(statické)*

                Feedback k položce v agendě viz [pp_Conference_Agenda](#nav_stránky-konference-pp_conference_agenda)

            - **[agendaNotes](#nav_stránky-konference-popup-stránky-agendanotes)** *(dynamické)*

                Poznámka k položce v agendě viz [pp_Conference_Agenda](#nav_stránky-konference-pp_conference_agenda)

    - **KPI** <a name="nav_stránky-kpi"></a>

        - **[pp_KPIWall](#nav_stránky-kpi-pp_kpiwall)** *(dynamické)*

            Stránka/rozcestník pro __KPI__ modul

        - **[pp_KPIWallDetail](#nav_stránky-kpi-pp_kpiwalldetail)** *(dynamické)*

            Stránka konkrétní sekce __KPI__ modulu

        - **[pp_KPIWallDetailFullscreen](#nav_stránky-kpi-pp_kpiwalldetailfullscreen)** *(dynamické)*

            Stránka 'timeline' grafu pro vybranou kombinaci [pp_KPIWallDetail](#nav_stránky-kpi-pp_kpiwalldetail).

    - **Lidé** <a name="nav_stránky-lidé"></a>

        - **[pp_DHLC_Profiles](#nav_stránky-lidé-pp_dhlc_profiles)** *(dynamické)*

            Stránka se seznamem lidí

        - **[pp_DHLC_Profiles_profile](#nav_stránky-lidé-pp_dhlc_profiles_profile)** *(dynamické)*

            Stránka detailu konkrétního člověka

    - **Nastavení** <a name="nav_stránky-nastavení"></a>

        - **[pp_Settings](#nav_stránky-nastavení-pp_settings)** *(statické)*

            Stránka/rozcestník pro nastavení aplikace. Zobrazuje také verzi aplikace dle `app.version`.

        - **[pp_SettingsNotifications](#nav_stránky-nastavení-pp_settingsnotifications)** *(statické)*

            Stránka s formulářem pro volbu notifikací

    - **Přihlašování apod.** <a name="nav_stránky-přihlašování-apod-"></a>

        - **[pp_Login](#nav_stránky-přihlašování-apod--pp_login)** *(dynamické)*

            Statická část přihlašovací stránky

        - **[pp_Welcome](#nav_stránky-přihlašování-apod--pp_welcome)** *(statické)*

            Jen pomocná pro lepší pocit ze spouštění

    - **Speciální** <a name="nav_stránky-speciální"></a>

        - **[pp_ArticlePhoto](#nav_stránky-speciální-pp_articlephoto)** *(dynamické)*

            Stránka pro "fullstreen" obrázek

        - **[pp_Search](#nav_stránky-speciální-pp_search)** *(dynamické)*

            Stránka pro vyhledávání

        - **Popup Stránky** <a name="nav_stránky-speciální-popup-stránky"></a>

            - **[searchPopUp](#nav_stránky-speciální-popup-stránky-searchpopup)** *(dynamické)*

                Začátek vyhledávání — poté přechází do [pp_Search](#nav_stránky-speciální-pp_search)

    - **Staffing & Projects** <a name="nav_stránky-staffing---projects"></a>

        - **[pp_Staffing_PeopleList](#nav_stránky-staffing---projects-pp_staffing_peoplelist)** *(dynamické)*

            Seznam lidí pro modul __S&P__

        - **[pp_Staffing_Profile](#nav_stránky-staffing---projects-pp_staffing_profile)** *(dynamické)*

            Detail zaměstnance v __S&P__

        - **[pp_Staffing_Project](#nav_stránky-staffing---projects-pp_staffing_project)** *(dynamické)*

            Detail projektu v __S&P__

        - **[pp_Staffing_ProjectsList](#nav_stránky-staffing---projects-pp_staffing_projectslist)** *(dynamické)*

            Seznam projektů pro modul __S&P__

    - **Utility** <a name="nav_stránky-utility"></a>

        - **[PopupBox](#nav_stránky-utility-popupbox)** *(statické)*

            Vyskakovací okno primárně pro push notifikace

        - **[popupInternet](#nav_stránky-utility-popupinternet)** *(statické)*

            Vyskakovací okno primárně pro 'internetové' notifikace

        - **[popupPictureSelector](#nav_stránky-utility-popuppictureselector)** *(statické)*

            Vyskakovací okno pro výběr fotografií

        - **[popupSmall](#nav_stránky-utility-popupsmall)** *(statické)*

            Vyskakovací okno primárně pro 'malé' notifikace

- **Molekuly** <a name="nav_molekuly"></a>

    - **[homelist_item](#nav_molekuly-homelist_item)** *(dynamické)*

        Sekce pro `pp_Home`

    - **[kpiWall_section](#nav_molekuly-kpiwall_section)** *(dynamické)*

        Sekce pro `pp_KPIWalll`

    - **Abeceda** <a name="nav_molekuly-abeceda"></a>

        - **[alphabet](#nav_molekuly-abeceda-alphabet)** *(statické)*

            A-Z abeceda stylovaná pomocí třídy 'alphabet' a využívající funkci `link_AlphabetLetter`.

    - **Formulář poznámky** <a name="nav_molekuly-formulář-poznámky"></a>

        - **[form_page_article](#nav_molekuly-formulář-poznámky-form_page_article)** *(dynamické)*

            Komponenta vypisující formulář nadpis/obsah + fotky (typicky formulář pro tvorbu idejí)

        - **[form_page_note](#nav_molekuly-formulář-poznámky-form_page_note)** *(dynamické)*

            Komponenta vypisující formulář nadpis/obsah + fotky (typicky formulář pro tvorbu poznámek)

    - **Header** <a name="nav_molekuly-header"></a>

        - **[header](#nav_molekuly-header-header)** *(dynamické)*

            Hlavička pro stránky bez vyhledávání

        - **[header_popups](#nav_molekuly-header-header_popups)** *(dynamické)*

            Hlavička pro PopUp stránky

        - **[header_with_search](#nav_molekuly-header-header_with_search)** *(dynamické)*

            Hlavička pro stránky obsahující tlačítko pro vyhledávání

- **Atomy** <a name="nav_atomy"></a>

    - **[events_subheader](#nav_atomy-events_subheader)** *(statické)*

        Přepínač pro pod-stránky v konferenčním modulu

    - **[ideas_subheader](#nav_atomy-ideas_subheader)** *(statické)*

        Přepínač pro pod-stránky v modulu Ideje a Iniciaitivy

    - **[kpi_arrows](#nav_atomy-kpi_arrows)** *(statické)*

        Šipka v __`pp_KPIWalll`__

    - **[kpi_circle](#nav_atomy-kpi_circle)** *(statické)*

        Kolečko v __`pp_KPIWalll`__

    - **[login_version](#nav_atomy-login_version)** *(statické)*

        Přidá `div.login_version` s verzí aplikace dle `app.version`.

    - **[searchFrom](#nav_atomy-searchfrom)** *(dynamické)*

        Společný formulář pro vyhledávání (popup+stránka pro vyhledáváni)

    - **[staffing_subheader](#nav_atomy-staffing_subheader)** *(statické)*

        Přepínač pro pod-stránky ve staffing modulu

    - **Header** <a name="nav_atomy-header"></a>

        - **[back_function](#nav_atomy-header-back_function)** *(dynamické)*

            Komponenta — 'Back' tlačítko volající funkci

        - **[back_regular](#nav_atomy-header-back_regular)** *(dynamické)*

            Komponenta — 'Back' tlačítko jen pro změnu stránek

        - **[back_with_id](#nav_atomy-header-back_with_id)** *(dynamické)*

            Komponenta — `Back` tlačítko pro změnu stránek s IDčkem (typicky pro změnu 'backu' pomocí JS)

        - **[popup_title_dynamic](#nav_atomy-header-popup_title_dynamic)** *(statické)*

            Část nadpisu, který bude doplněn dynmicky pomocí JS (viz **data-cmd="text-section"**).

        - **[popup_title_undefined](#nav_atomy-header-popup_title_undefined)** *(dynamické)*

            Část nadpisu, který je doplněn při buildu.

    - **pp_Home — Položka seznamu** <a name="nav_atomy-pp_home---položka-seznamu"></a>

        - **[label_empty](#nav_atomy-pp_home---položka-seznamu-label_empty)** *(statické)*

            Prázdný štítek po pravé straně.

        - **[label_toggle](#nav_atomy-pp_home---položka-seznamu-label_toggle)** *(dynamické)*

            Přepínací štítek po pravé straně (nyní _Open_/_Closed_).

        - **[label_value](#nav_atomy-pp_home---položka-seznamu-label_value)** *(dynamické)*

            Číselný štítek po pravé straně.

        - **[subtitle_date](#nav_atomy-pp_home---položka-seznamu-subtitle_date)** *(dynamické)*

            Řádek pod nadpisem — datum tvaru TEXT DAY MONTH. IDčka pro den/měsíč: __id="`date_id`\_`date_type`\_day"__ a __id="`date_id`\_`date_type`\_day"__.

        - **[subtitle_date_from](#nav_atomy-pp_home---položka-seznamu-subtitle_date_from)** *(dynamické)*

            Řádek pod nadpisem — datum tvaru _"Prev/Next"_ DAY MONTH

        - **[subtitle_empty](#nav_atomy-pp_home---položka-seznamu-subtitle_empty)** *(statické)*

            Prázdný řádek pod nadpisem.

        - **[subtitle_next_date](#nav_atomy-pp_home---položka-seznamu-subtitle_next_date)** *(dynamické)*

            Řádek pod nadpisem — datum tvaru _"Results as of"_ DAY MONTH

        - **[subtitle_photos](#nav_atomy-pp_home---položka-seznamu-subtitle_photos)** *(statické)*

            Část pro fotografie



___

## Jednotlivé komponenty

Dle pořadí souborů.

### **Stránky** <a name="nav_stránky-index"></a>
> Zde jsou zahrnuty HTML části stránek, dynamická část je v [**JavaScript**ové části](./javascript.md#stránka).

**Kategorie:**
 Stránky

**Druh:**
 *HTML template — v průběhu buildu **statické*** ([defined@index.html:17](../html/index.html#L17))
  
  
___

### **events_subheader** <a name="nav_atomy-events_subheader"></a>
> Přepínač pro pod-stránky v konferenčním modulu

**Kategorie:**
 Atomy

**Druh:**
 *HTML template — v průběhu buildu **statické*** ([defined@events_subheader.sub.html:1](../html/atoms/events_subheader.sub.html#L1))
  
  
___

### **ideas_subheader** <a name="nav_atomy-ideas_subheader"></a>
> Přepínač pro pod-stránky v modulu Ideje a Iniciaitivy

**Kategorie:**
 Atomy

**Druh:**
 *HTML template — v průběhu buildu **statické*** ([defined@ideas_subheader.sub.html:1](../html/atoms/ideas_subheader.sub.html#L1))
  
  
___

### **kpi_arrows** <a name="nav_atomy-kpi_arrows"></a>
> Šipka v __`pp_KPIWalll`__

**Kategorie:**
 Atomy

**Druh:**
 *HTML template — v průběhu buildu **statické*** ([defined@kpi_arrows.sub.html:1](../html/atoms/kpi_arrows.sub.html#L1))
  
  
___

### **kpi_circle** <a name="nav_atomy-kpi_circle"></a>
> Kolečko v __`pp_KPIWalll`__

**Kategorie:**
 Atomy

**Druh:**
 *HTML template — v průběhu buildu **statické*** ([defined@kpi_circle.sub.html:1](../html/atoms/kpi_circle.sub.html#L1))
  
  
___

### **login_version** <a name="nav_atomy-login_version"></a>
> Přidá `div.login_version` s verzí aplikace dle `app.version`.

**Kategorie:**
 Atomy

**Druh:**
 *HTML template — v průběhu buildu **statické*** ([defined@login_version.sub.html:1](../html/atoms/login_version.sub.html#L1))
  
  
___

### **searchFrom** <a name="nav_atomy-searchfrom"></a>
> Společný formulář pro vyhledávání (popup+stránka pro vyhledáváni)

**Kategorie:**
 Atomy

**Druh:**
 *HTML template — v průběhu buildu **dynamické*** ([defined@searchFrom.sub.html:1](../html/atoms/searchFrom.sub.html#L1))
  
**Parametry** (při buildu je potřeba specifikovat tyto klíče v `app._BUILD_`):

|  Jméno  | Popisek |
| ------- | ------- |
 | `search_name` | Slouží jako identifikátor formuláře (mimo jiné `name`!)<br>&nbsp;&nbsp;- generuje se tak také jméno inputu přidáním '_search'<br>&nbsp;&nbsp;- jméno parametru pro reset/submit přidáním '_search' |
| `submit` | Jméno funkce pro zachycení submit události |
| `reset` | Jméno funkce pro zachycení reset události | 
___

### **staffing_subheader** <a name="nav_atomy-staffing_subheader"></a>
> Přepínač pro pod-stránky ve staffing modulu

**Kategorie:**
 Atomy

**Druh:**
 *HTML template — v průběhu buildu **statické*** ([defined@staffing_subheader.sub.html:1](../html/atoms/staffing_subheader.sub.html#L1))
  
  
___

### **alphabet** <a name="nav_molekuly-abeceda-alphabet"></a>
> A-Z abeceda stylovaná pomocí třídy 'alphabet' a využívající funkci `link_AlphabetLetter`.

**Kategorie:**
 Molekuly/Abeceda

**Druh:**
 *HTML template — v průběhu buildu **statické*** ([defined@alphabet.sub.html:1](../html/molecules/alphabet.sub.html#L1))
  
  
___

### **form_page_article** <a name="nav_molekuly-formulář-poznámky-form_page_article"></a>
> Komponenta vypisující formulář nadpis/obsah + fotky (typicky formulář pro tvorbu idejí)

**Kategorie:**
 Molekuly/Formulář poznámky

**Druh:**
 *HTML template — v průběhu buildu **dynamické*** ([defined@form_page_article.sub.html:1](../html/molecules/form_page_article.sub.html#L1))
  
**Parametry** (při buildu je potřeba specifikovat tyto klíče v `app._BUILD_`):

|  Jméno  | Popisek |
| ------- | ------- |
 | `FPA_form_id` | Identifikátor který se přidává u `id`/`name` (v `textarea`ch) před 'Title'/'Content' |
| `FPA_placeholder_title` | Text placehoderu pro 'title' |
| `FPA_placeholder_content` | Text placehoderu pro 'content' |
| `FPA_photo_fce` | `data-fce` ktera se zavola po kliknuti na 'Add Photo' | 
___

### **form_page_note** <a name="nav_molekuly-formulář-poznámky-form_page_note"></a>
> Komponenta vypisující formulář nadpis/obsah + fotky (typicky formulář pro tvorbu poznámek)

**Kategorie:**
 Molekuly/Formulář poznámky

**Druh:**
 *HTML template — v průběhu buildu **dynamické*** ([defined@form_page_note.sub.html:1](../html/molecules/form_page_note.sub.html#L1))
  
**Parametry** (při buildu je potřeba specifikovat tyto klíče v `app._BUILD_`):

|  Jméno  | Popisek |
| ------- | ------- |
 | `FPN_form_id` | Identifikátor který se přidává u `id`/`name` (v `textarea`ře) před 'Note' |
| `FPN_photo_fce` | `data-fce` ktera se zavola po kliknuti na 'Add Photo' | 
___

### **header** <a name="nav_molekuly-header-header"></a>
> Hlavička pro stránky bez vyhledávání

**Kategorie:**
 Molekuly/Header

**Druh:**
 *HTML template — v průběhu buildu **dynamické*** ([defined@header.sub.html:1](../html/molecules/header.sub.html#L1))

**Využívá:**
 - [Atomy/Header](#nav_atomy-header)
 
**Parametry** (při buildu je potřeba specifikovat tyto klíče v `app._BUILD_`):

|  Jméno  | Popisek |
| ------- | ------- |
 | `back_type` | jmeno 'atomu' pro 'back' tlacitko viz 'Atomy/Header' |
| `name` | Text titulku stránky |
| … | Dále dle použité komponenty viz `back_type` | 
___

### **header_popups** <a name="nav_molekuly-header-header_popups"></a>
> Hlavička pro PopUp stránky

**Kategorie:**
 Molekuly/Header

**Druh:**
 *HTML template — v průběhu buildu **dynamické*** ([defined@header_popups.sub.html:1](../html/molecules/header_popups.sub.html#L1))
  
**Parametry** (při buildu je potřeba specifikovat tyto klíče v `app._BUILD_`):

|  Jméno  | Popisek |
| ------- | ------- |
 | `popup_function` | `data-fce` která se zavolá po kliknutí na 'Cancel'/'Submit' |
| `popup_name_type` | Jméno 'atomu' pro titulek stranky viz _'Atomy/Header'_ | 
___

### **header_with_search** <a name="nav_molekuly-header-header_with_search"></a>
> Hlavička pro stránky obsahující tlačítko pro vyhledávání

**Kategorie:**
 Molekuly/Header

**Druh:**
 *HTML template — v průběhu buildu **dynamické*** ([defined@header_with_search.sub.html:1](../html/molecules/header_with_search.sub.html#L1))

**Využívá:**
 - [Atomy/Header](#nav_atomy-header)
 
**Parametry** (při buildu je potřeba specifikovat tyto klíče v `app._BUILD_`):

|  Jméno  | Popisek |
| ------- | ------- |
 | `back_type` | jmeno 'atomu' pro 'back' tlacitko viz 'Atomy/Header' |
| `name` | Text titulku stránky |
| `search_where` | `data-where` parametr pro funkci `link_gotoPreSearch` |
| … | Dále dle použité komponenty viz `back_type` | 
___

### **homelist_item** <a name="nav_molekuly-homelist_item"></a>
> Sekce pro `pp_Home`

**Kategorie:**
 Molekuly

**Druh:**
 *HTML template — v průběhu buildu **dynamické*** ([defined@homelist_item.sub.html:1](../html/molecules/homelist_item.sub.html#L1))

**Využívá:**
 - [Atomy/pp_Home — Položka seznamu](#nav_atomy-pp_home---položka-seznamu)
 
**Parametry** (při buildu je potřeba specifikovat tyto klíče v `app._BUILD_`):

|  Jméno  | Popisek |
| ------- | ------- |
 | `goto` | Jméno stránky kam přejít |
| `icon` | Jméno css ikony ('icon-ZDE') |
| `name` | Jméno sekce |
| `label_type` | __[defaultně 'empty']__<br>&nbsp;&nbsp;jméno 'atomu' ('homelist_item/label_ZDE.sub.html') pro 'label' část (typicky číslo, _Open_/_Close_) |
| `subtitle` | __[defaultně 'empty']__<br>&nbsp;&nbsp;- jmeno 'atomu' ('homelist_item/subtitle_ZDE.sub.html') pro 'subtitle' část<br>&nbsp;&nbsp;- pokud 'empty' přidává se třídá __`paddingB__1d25`__ pro prostřední část (jinak __`paddingB__0d5`__) viz `app._BUILD_.paddingB` níže | 
___

### **kpiWall_section** <a name="nav_molekuly-kpiwall_section"></a>
> Sekce pro `pp_KPIWalll`

**Kategorie:**
 Molekuly

**Druh:**
 *HTML template — v průběhu buildu **dynamické*** ([defined@kpiWall_section.sub.html:1](../html/molecules/kpiWall_section.sub.html#L1))
  
**Parametry** (při buildu je potřeba specifikovat tyto klíče v `app._BUILD_`):

|  Jméno  | Popisek |
| ------- | ------- |
 | `KWS_name` | Jméno sekce |
| `KWS_icon` | Celé jméno ikony v 'img/ZDE' |
| `KWS_param` | Jméno parametru `data-param` (pro javascript) |
| `KWS_first` | vl. specifikuje zda přidat `borderT__H_1` |
| `KWS_arrow_align_class` | možnost modifikování tříd u šipky |
| `KWS_trend_part` | celá cesta k 'atomu' … viz např. 'kpi_arrow'/'kpi_circle' | 
___

### **back_function** <a name="nav_atomy-header-back_function"></a>
> Komponenta — 'Back' tlačítko volající funkci

**Kategorie:**
 Atomy/Header

**Druh:**
 *HTML template — v průběhu buildu **dynamické*** ([defined@back_function.sub.html:1](../html/atoms/headers_atoms/back_function.sub.html#L1))
  
**Parametry** (při buildu je potřeba specifikovat tyto klíče v `app._BUILD_`):

|  Jméno  | Popisek |
| ------- | ------- |
 | `back` | pokud definováno -> jméno stránky, resp. hodnota pro `data-goto` |
| `back_fce` | Jméno funkce pro 'back' (`data-fce`) | 
___

### **back_regular** <a name="nav_atomy-header-back_regular"></a>
> Komponenta — 'Back' tlačítko jen pro změnu stránek

**Kategorie:**
 Atomy/Header

**Druh:**
 *HTML template — v průběhu buildu **dynamické*** ([defined@back_regular.sub.html:1](../html/atoms/headers_atoms/back_regular.sub.html#L1))
  
**Parametry** (při buildu je potřeba specifikovat tyto klíče v `app._BUILD_`):

|  Jméno  | Popisek |
| ------- | ------- |
 | `back` | jméno stránky, resp. hodnota pro `data-goto` | 
___

### **back_with_id** <a name="nav_atomy-header-back_with_id"></a>
> Komponenta — `Back` tlačítko pro změnu stránek s IDčkem (typicky pro změnu 'backu' pomocí JS)

**Kategorie:**
 Atomy/Header

**Druh:**
 *HTML template — v průběhu buildu **dynamické*** ([defined@back_with_id.sub.html:1](../html/atoms/headers_atoms/back_with_id.sub.html#L1))
  
**Parametry** (při buildu je potřeba specifikovat tyto klíče v `app._BUILD_`):

|  Jméno  | Popisek |
| ------- | ------- |
 | `back` | jméno stránky, resp. hodnota pro `data-goto` |
| `back_id` | Nastavení ID linku | 
___

### **popup_title_dynamic** <a name="nav_atomy-header-popup_title_dynamic"></a>
> Část nadpisu, který bude doplněn dynmicky pomocí JS (viz **data-cmd="text-section"**).

**Kategorie:**
 Atomy/Header

**Druh:**
 *HTML template — v průběhu buildu **statické*** ([defined@popup_title_dynamic.sub.html:1](../html/atoms/headers_atoms/popup_title_dynamic.sub.html#L1))
  
  
___

### **popup_title_undefined** <a name="nav_atomy-header-popup_title_undefined"></a>
> Část nadpisu, který je doplněn při buildu.

**Kategorie:**
 Atomy/Header

**Druh:**
 *HTML template — v průběhu buildu **dynamické*** ([defined@popup_title_undefined.sub.html:1](../html/atoms/headers_atoms/popup_title_undefined.sub.html#L1))
  
**Parametry** (při buildu je potřeba specifikovat tyto klíče v `app._BUILD_`):

|  Jméno  | Popisek |
| ------- | ------- |
 | `name` | Vlastně jméno stránky. | 
___

### **label_empty** <a name="nav_atomy-pp_home---položka-seznamu-label_empty"></a>
> Prázdný štítek po pravé straně.

**Kategorie:**
 Atomy/pp_Home — Položka seznamu

**Druh:**
 *HTML template — v průběhu buildu **statické*** ([defined@label_empty.sub.html:1](../html/atoms/homelist_item/label_empty.sub.html#L1))
  
  
___

### **label_toggle** <a name="nav_atomy-pp_home---položka-seznamu-label_toggle"></a>
> Přepínací štítek po pravé straně (nyní _Open_/_Closed_).

**Kategorie:**
 Atomy/pp_Home — Položka seznamu

**Druh:**
 *HTML template — v průběhu buildu **dynamické*** ([defined@label_toggle.sub.html:1](../html/atoms/homelist_item/label_toggle.sub.html#L1))
  
**Parametry** (při buildu je potřeba specifikovat tyto klíče v `app._BUILD_`):

|  Jméno  | Popisek |
| ------- | ------- |
 | `label_id` | Bude použito jako část IDčka elementu: __id="num\_\*\_open\_status"__. | 
___

### **label_value** <a name="nav_atomy-pp_home---položka-seznamu-label_value"></a>
> Číselný štítek po pravé straně.

**Kategorie:**
 Atomy/pp_Home — Položka seznamu

**Druh:**
 *HTML template — v průběhu buildu **dynamické*** ([defined@label_value.sub.html:1](../html/atoms/homelist_item/label_value.sub.html#L1))
  
**Parametry** (při buildu je potřeba specifikovat tyto klíče v `app._BUILD_`):

|  Jméno  | Popisek |
| ------- | ------- |
 | `label_id` | Bude použito jako část IDčka elementu: __id="num\_\*"__. | 
___

### **subtitle_date** <a name="nav_atomy-pp_home---položka-seznamu-subtitle_date"></a>
> Řádek pod nadpisem — datum tvaru TEXT DAY MONTH. IDčka pro den/měsíč: __id="`date_id`\_`date_type`\_day"__ a __id="`date_id`\_`date_type`\_day"__.

**Kategorie:**
 Atomy/pp_Home — Položka seznamu

**Druh:**
 *HTML template — v průběhu buildu **dynamické*** ([defined@subtitle_date.sub.html:1](../html/atoms/homelist_item/subtitle_date.sub.html#L1))
  
**Parametry** (při buildu je potřeba specifikovat tyto klíče v `app._BUILD_`):

|  Jméno  | Popisek |
| ------- | ------- |
 | `date_text` | Textová část |
| `date_id` | Bude použito jako část IDček …. |
| `date_type` | Bude použito jako část IDček …. | 
___

### **subtitle_date_from** <a name="nav_atomy-pp_home---položka-seznamu-subtitle_date_from"></a>
> Řádek pod nadpisem — datum tvaru _"Prev/Next"_ DAY MONTH

**Kategorie:**
 Atomy/pp_Home — Položka seznamu

**Druh:**
 *HTML template — v průběhu buildu **dynamické*** ([defined@subtitle_date_from.sub.html:1](../html/atoms/homelist_item/subtitle_date_from.sub.html#L1))
  
**Parametry** (při buildu je potřeba specifikovat tyto klíče v `app._BUILD_`):

|  Jméno  | Popisek |
| ------- | ------- |
 | `date_id` | Bude použito jako část IDček pro jednotlivé části: __id="\*\_date\_from\_text"__, __id="\*\_date\_from\_day"__ a __id="\*\_date\_from\_month"__. | 
___

### **subtitle_empty** <a name="nav_atomy-pp_home---položka-seznamu-subtitle_empty"></a>
> Prázdný řádek pod nadpisem.

**Kategorie:**
 Atomy/pp_Home — Položka seznamu

**Druh:**
 *HTML template — v průběhu buildu **statické*** ([defined@subtitle_empty.sub.html:1](../html/atoms/homelist_item/subtitle_empty.sub.html#L1))
  
  
___

### **subtitle_next_date** <a name="nav_atomy-pp_home---položka-seznamu-subtitle_next_date"></a>
> Řádek pod nadpisem — datum tvaru _"Results as of"_ DAY MONTH

**Kategorie:**
 Atomy/pp_Home — Položka seznamu

**Druh:**
 *HTML template — v průběhu buildu **dynamické*** ([defined@subtitle_next_date.sub.html:1](../html/atoms/homelist_item/subtitle_next_date.sub.html#L1))
  
**Parametry** (při buildu je potřeba specifikovat tyto klíče v `app._BUILD_`):

|  Jméno  | Popisek |
| ------- | ------- |
 | `date_id` | Bude použito jako část IDček pro jednotlivé části: __id="\*\_date\_next\_day"__ a __id="\*\_date\_next\_month"__. | 
___

### **subtitle_photos** <a name="nav_atomy-pp_home---položka-seznamu-subtitle_photos"></a>
> Část pro fotografie

**Kategorie:**
 Atomy/pp_Home — Položka seznamu

**Druh:**
 *HTML template — v průběhu buildu **statické*** ([defined@subtitle_photos.sub.html:1](../html/atoms/homelist_item/subtitle_photos.sub.html#L1))
  
  
___

### **pp_Login** <a name="nav_stránky-přihlašování-apod--pp_login"></a>
> Statická část přihlašovací stránky

**Kategorie:**
 Stránky/Přihlašování apod.

**Druh:**
 *HTML template — v průběhu buildu **dynamické*** ([defined@pp_Login.sub.html:1](../html/organisms/ao_Login/pp_Login.sub.html#L1))

**Využívá:**
 - [Atomy/login_version](#nav_atomy-login_version)
 
  
___

### **pp_Welcome** <a name="nav_stránky-přihlašování-apod--pp_welcome"></a>
> Jen pomocná pro lepší pocit ze spouštění

**Kategorie:**
 Stránky/Přihlašování apod.

**Druh:**
 *HTML template — v průběhu buildu **statické*** ([defined@pp_Welcome.sub.html:1](../html/organisms/ao_Login/pp_Welcome.sub.html#L1))
  
  
___

### **pp_Home** <a name="nav_stránky-pp_home"></a>
> Úvodní stránka/rozcestník

**Kategorie:**
 Stránky

**Druh:**
 *HTML template — v průběhu buildu **dynamické*** ([defined@pp_Home.sub.html:1](../html/organisms/bo_Home/pp_Home.sub.html#L1))

**Využívá:**
 - [Molekuly/homelist_item](#nav_molekuly-homelist_item)
 
  
___

### **pp_ArticlePhoto** <a name="nav_stránky-speciální-pp_articlephoto"></a>
> Stránka pro "fullstreen" obrázek

**Kategorie:**
 Stránky/Speciální

**Druh:**
 *HTML template — v průběhu buildu **dynamické*** ([defined@pp_ArticlePhoto.sub.html:1](../html/organisms/co_Specialni/pp_ArticlePhoto.sub.html#L1))

**Využívá:**
 - [Molekuly/Header/header](#nav_molekuly-header-header)
 
  
___

### **pp_Search** <a name="nav_stránky-speciální-pp_search"></a>
> Stránka pro vyhledávání

**Kategorie:**
 Stránky/Speciální

**Druh:**
 *HTML template — v průběhu buildu **dynamické*** ([defined@pp_Search.sub.html:1](../html/organisms/co_Specialni/pp_Search.sub.html#L1))

**Využívá:**
 - [Molekuly/Header/header](#nav_molekuly-header-header)
- [Atomy/searchFrom](#nav_atomy-searchfrom)
 
  
___

### **pp_Ideas** <a name="nav_stránky-ideje-pp_ideas"></a>
> Stránka se seznamem idejí

**Kategorie:**
 Stránky/Ideje

**Druh:**
 *HTML template — v průběhu buildu **dynamické*** ([defined@pp_Ideas.sub.html:1](../html/organisms/eo_Ideas_Initiatives/pp_Ideas.sub.html#L1))

**Využívá:**
 - [Molekuly/Header/header_with_search](#nav_molekuly-header-header_with_search)
- [Atomy/ideas_subheader](#nav_atomy-ideas_subheader)
 
  
___

### **pp_IdeasDetail** <a name="nav_stránky-ideje-pp_ideasdetail"></a>
> Stránka detailu ideje

**Kategorie:**
 Stránky/Ideje

**Druh:**
 *HTML template — v průběhu buildu **dynamické*** ([defined@pp_IdeasDetail.sub.html:1](../html/organisms/eo_Ideas_Initiatives/pp_IdeasDetail.sub.html#L1))

**Využívá:**
 - [Molekuly/Header/header](#nav_molekuly-header-header)
- [Atomy/ideas_subheader](#nav_atomy-ideas_subheader)
 
  
___

### **pp_IdeasDraft** <a name="nav_stránky-ideje-pp_ideasdraft"></a>
> Stránka rozepsané ideje

**Kategorie:**
 Stránky/Ideje

**Druh:**
 *HTML template — v průběhu buildu **dynamické*** ([defined@pp_IdeasDraft.sub.html:1](../html/organisms/eo_Ideas_Initiatives/pp_IdeasDraft.sub.html#L1))

**Využívá:**
 - [Molekuly/Header/header](#nav_molekuly-header-header)
- [Atomy/ideas_subheader](#nav_atomy-ideas_subheader)
 
  
___

### **pp_IdeasEdit** <a name="nav_stránky-ideje-pp_ideasedit"></a>
> Stránka formuláře pro editaci ideje

**Kategorie:**
 Stránky/Ideje

**Druh:**
 *HTML template — v průběhu buildu **dynamické*** ([defined@pp_IdeasEdit.sub.html:1](../html/organisms/eo_Ideas_Initiatives/pp_IdeasEdit.sub.html#L1))

**Využívá:**
 - [Molekuly/Header/header_popups](#nav_molekuly-header-header_popups)
- [Molekuly/Formulář poznámky/form_page_article](#nav_molekuly-formulář-poznámky-form_page_article)
 
  
___

### **pp_IdeasMy** <a name="nav_stránky-ideje-pp_ideasmy"></a>
> Stránka se seznamem idejí

**Kategorie:**
 Stránky/Ideje

**Druh:**
 *HTML template — v průběhu buildu **dynamické*** ([defined@pp_IdeasMy.sub.html:1](../html/organisms/eo_Ideas_Initiatives/pp_IdeasMy.sub.html#L1))

**Využívá:**
 - [Molekuly/Header/header_with_search](#nav_molekuly-header-header_with_search)
- [Atomy/ideas_subheader](#nav_atomy-ideas_subheader)
 
  
___

### **pp_DHLC_Profiles** <a name="nav_stránky-lidé-pp_dhlc_profiles"></a>
> Stránka se seznamem lidí

**Kategorie:**
 Stránky/Lidé

**Druh:**
 *HTML template — v průběhu buildu **dynamické*** ([defined@pp_DHLC_Profiles.sub.html:1](../html/organisms/fo_Profiles/pp_DHLC_Profiles.sub.html#L1))

**Využívá:**
 - [Molekuly/Header/header_with_search](#nav_molekuly-header-header_with_search)
- [Molekuly/Abeceda](#nav_molekuly-abeceda)
 
  
___

### **pp_DHLC_Profiles_profile** <a name="nav_stránky-lidé-pp_dhlc_profiles_profile"></a>
> Stránka detailu konkrétního člověka

**Kategorie:**
 Stránky/Lidé

**Druh:**
 *HTML template — v průběhu buildu **dynamické*** ([defined@pp_DHLC_Profiles_profile.sub.html:1](../html/organisms/fo_Profiles/pp_DHLC_Profiles_profile.sub.html#L1))

**Využívá:**
 - [Molekuly/Header/header](#nav_molekuly-header-header)
 
  
___

### **pp_Staffing_PeopleList** <a name="nav_stránky-staffing---projects-pp_staffing_peoplelist"></a>
> Seznam lidí pro modul __S&P__

**Kategorie:**
 Stránky/Staffing & Projects

**Druh:**
 *HTML template — v průběhu buildu **dynamické*** ([defined@pp_Staffing_PeopleList.sub.html:1](../html/organisms/go_staffing/pp_Staffing_PeopleList.sub.html#L1))

**Využívá:**
 - [Molekuly/Header/header](#nav_molekuly-header-header)
 
  
___

### **pp_Staffing_Profile** <a name="nav_stránky-staffing---projects-pp_staffing_profile"></a>
> Detail zaměstnance v __S&P__

**Kategorie:**
 Stránky/Staffing & Projects

**Druh:**
 *HTML template — v průběhu buildu **dynamické*** ([defined@pp_Staffing_Profile.sub.html:1](../html/organisms/go_staffing/pp_Staffing_Profile.sub.html#L1))

**Využívá:**
 - [Molekuly/Header/header](#nav_molekuly-header-header)
 
  
___

### **pp_Staffing_Project** <a name="nav_stránky-staffing---projects-pp_staffing_project"></a>
> Detail projektu v __S&P__

**Kategorie:**
 Stránky/Staffing & Projects

**Druh:**
 *HTML template — v průběhu buildu **dynamické*** ([defined@pp_Staffing_Project.sub.html:1](../html/organisms/go_staffing/pp_Staffing_Project.sub.html#L1))

**Využívá:**
 - [Molekuly/Header/header](#nav_molekuly-header-header)
 
  
___

### **pp_Staffing_ProjectsList** <a name="nav_stránky-staffing---projects-pp_staffing_projectslist"></a>
> Seznam projektů pro modul __S&P__

**Kategorie:**
 Stránky/Staffing & Projects

**Druh:**
 *HTML template — v průběhu buildu **dynamické*** ([defined@pp_Staffing_ProjectsList.sub.html:1](../html/organisms/go_staffing/pp_Staffing_ProjectsList.sub.html#L1))

**Využívá:**
 - [Molekuly/Header/header](#nav_molekuly-header-header)
 
  
___

### **pp_KPIWall** <a name="nav_stránky-kpi-pp_kpiwall"></a>
> Stránka/rozcestník pro __KPI__ modul

**Kategorie:**
 Stránky/KPI

**Druh:**
 *HTML template — v průběhu buildu **dynamické*** ([defined@pp_KPIWall.sub.html:1](../html/organisms/ho_KPIWall/pp_KPIWall.sub.html#L1))

**Využívá:**
 - [Molekuly/Header/header](#nav_molekuly-header-header)
- [Molekuly/kpiWall_section](#nav_molekuly-kpiwall_section)
- [Atomy/kpi_circle](#nav_atomy-kpi_circle)
- [Atomy/kpi_arrows](#nav_atomy-kpi_arrows)
 
  
___

### **pp_KPIWallDetail** <a name="nav_stránky-kpi-pp_kpiwalldetail"></a>
> Stránka konkrétní sekce __KPI__ modulu

**Kategorie:**
 Stránky/KPI

**Druh:**
 *HTML template — v průběhu buildu **dynamické*** ([defined@pp_KPIWallDetail.sub.html:1](../html/organisms/ho_KPIWall/pp_KPIWallDetail.sub.html#L1))

**Využívá:**
 - [Molekuly/Header/header](#nav_molekuly-header-header)
 
  
___

### **pp_KPIWallDetailFullscreen** <a name="nav_stránky-kpi-pp_kpiwalldetailfullscreen"></a>
> Stránka 'timeline' grafu pro vybranou kombinaci [pp_KPIWallDetail](#nav_stránky-kpi-pp_kpiwalldetail).

**Kategorie:**
 Stránky/KPI

**Druh:**
 *HTML template — v průběhu buildu **dynamické*** ([defined@pp_KPIWallDetailFullscreen.sub.html:1](../html/organisms/ho_KPIWall/pp_KPIWallDetailFullscreen.sub.html#L1))

**Využívá:**
 - [Molekuly/Header/header](#nav_molekuly-header-header)
 
  
___

### **pp_Flash** <a name="nav_stránky-pp_flash"></a>
> Stránka reportů pro __Flash Reports__

**Kategorie:**
 Stránky

**Druh:**
 *HTML template — v průběhu buildu **dynamické*** ([defined@pp_Flash.sub.html:1](../html/organisms/ht_Flash/pp_Flash.sub.html#L1))

**Využívá:**
 - [Molekuly/Header/header_with_search](#nav_molekuly-header-header_with_search)
 
  
___

### **pp_FlashProjectResults** <a name="nav_stránky-pp_flashprojectresults"></a>
> Stránka reportů pro konkrétní projekt v __Flash Reports__

**Kategorie:**
 Stránky

**Druh:**
 *HTML template — v průběhu buildu **dynamické*** ([defined@pp_FlashProjectResults.sub.html:1](../html/organisms/ht_Flash/pp_FlashProjectResults.sub.html#L1))

**Využívá:**
 - [Molekuly/Header/header_with_search](#nav_molekuly-header-header_with_search)
 
  
___

### **pp_FlashProjectTimeline** <a name="nav_stránky-pp_flashprojecttimeline"></a>
> Stránka grafů pro konkrétní projekt v __Flash Reports__

**Kategorie:**
 Stránky

**Druh:**
 *HTML template — v průběhu buildu **dynamické*** ([defined@pp_FlashProjectTimeline.sub.html:1](../html/organisms/ht_Flash/pp_FlashProjectTimeline.sub.html#L1))

**Využívá:**
 - [Molekuly/Header/header_with_search](#nav_molekuly-header-header_with_search)
 
  
___

### **pp_FlashSurvey** <a name="nav_stránky-pp_flashsurvey"></a>
> Stránka reportů pro __Flash Reports__

**Kategorie:**
 Stránky

**Druh:**
 *HTML template — v průběhu buildu **dynamické*** ([defined@pp_FlashSurvey.sub.html:1](../html/organisms/ht_Flash/pp_FlashSurvey.sub.html#L1))

**Využívá:**
 - [Molekuly/Header/header_with_search](#nav_molekuly-header-header_with_search)
 
  
___

### **pp_FlashSurveyForm** <a name="nav_stránky-pp_flashsurveyform"></a>
> Stránka pro vyplnění __Flash Reports__

**Kategorie:**
 Stránky

**Druh:**
 *HTML template — v průběhu buildu **dynamické*** ([defined@pp_FlashSurveyForm.sub.html:1](../html/organisms/ht_Flash/pp_FlashSurveyForm.sub.html#L1))

**Využívá:**
 - [Molekuly/Header/header_with_search](#nav_molekuly-header-header_with_search)
 
  
___

### **pp_FlashSurveyResults** <a name="nav_stránky-pp_flashsurveyresults"></a>
> Stránka pro zobrazení minulých vyplněných __Flash Reports__

**Kategorie:**
 Stránky

**Druh:**
 *HTML template — v průběhu buildu **dynamické*** ([defined@pp_FlashSurveyResults.sub.html:1](../html/organisms/ht_Flash/pp_FlashSurveyResults.sub.html#L1))

**Využívá:**
 - [Molekuly/Header/header_with_search](#nav_molekuly-header-header_with_search)
 
  
___

### **pp_FlashSurveysList** <a name="nav_stránky-pp_flashsurveyslist"></a>
> Stránka vyplněných __Flash Reports__

**Kategorie:**
 Stránky

**Druh:**
 *HTML template — v průběhu buildu **dynamické*** ([defined@pp_FlashSurveysList.sub.html:1](../html/organisms/ht_Flash/pp_FlashSurveysList.sub.html#L1))

**Využívá:**
 - [Molekuly/Header/header_with_search](#nav_molekuly-header-header_with_search)
 
  
___

### **pp_FAQ** <a name="nav_stránky-faq-pp_faq"></a>
> Stránka se seznamem FAQ

**Kategorie:**
 Stránky/FAQ

**Druh:**
 *HTML template — v průběhu buildu **dynamické*** ([defined@pp_FAQ.sub.html:1](../html/organisms/io_FAQ/pp_FAQ.sub.html#L1))

**Využívá:**
 - [Molekuly/Header/header_with_search](#nav_molekuly-header-header_with_search)
 
  
___

### **pp_FAQ_Detail** <a name="nav_stránky-faq-pp_faq_detail"></a>
> Stránka detailu FAQ

**Kategorie:**
 Stránky/FAQ

**Druh:**
 *HTML template — v průběhu buildu **dynamické*** ([defined@pp_FAQ_Detail.sub.html:1](../html/organisms/io_FAQ/pp_FAQ_Detail.sub.html#L1))

**Využívá:**
 - [Molekuly/Header/header](#nav_molekuly-header-header)
 
  
___

### **pp_Settings** <a name="nav_stránky-nastavení-pp_settings"></a>
> Stránka/rozcestník pro nastavení aplikace. Zobrazuje také verzi aplikace dle `app.version`.

**Kategorie:**
 Stránky/Nastavení

**Druh:**
 *HTML template — v průběhu buildu **statické*** ([defined@pp_Settings.sub.html:1](../html/organisms/jo_Settings/pp_Settings.sub.html#L1))
  
  
___

### **pp_SettingsFeedback** <a name="nav_stránky-pp_settingsfeedback"></a>
> Stránka s formulářem pro podání feedbacku na aplikace

**Kategorie:**
 Stránky

**Druh:**
 *HTML template — v průběhu buildu **dynamické*** ([defined@pp_SettingsFeedback.sub.html:1](../html/organisms/jo_Settings/pp_SettingsFeedback.sub.html#L1))

**Využívá:**
 - [Molekuly/Header/header_popups](#nav_molekuly-header-header_popups)
- [Molekuly/form_page_article](#nav_molekuly-form_page_article)
 
  
___

### **pp_SettingsNotifications** <a name="nav_stránky-nastavení-pp_settingsnotifications"></a>
> Stránka s formulářem pro volbu notifikací

**Kategorie:**
 Stránky/Nastavení

**Druh:**
 *HTML template — v průběhu buildu **statické*** ([defined@pp_SettingsNotifications.sub.html:1](../html/organisms/jo_Settings/pp_SettingsNotifications.sub.html#L1))
  
  
___

### **pp_SettingsProfile** <a name="nav_stránky-pp_settingsprofile"></a>
> Stránka pro profil uživatele aplikace

**Kategorie:**
 Stránky

**Druh:**
 *HTML template — v průběhu buildu **statické*** ([defined@pp_SettingsProfile.sub.html:1](../html/organisms/jo_Settings/pp_SettingsProfile.sub.html#L1))
  
  
___

### **pp_Conference** <a name="nav_stránky-konference-pp_conference"></a>
> Stránka se seznamem všech konferencí

**Kategorie:**
 Stránky/Konference

**Druh:**
 *HTML template — v průběhu buildu **dynamické*** ([defined@pp_Conference.sub.html:1](../html/organisms/ko_Events/pp_Conference.sub.html#L1))

**Využívá:**
 - [Molekuly/Header/header_with_search](#nav_molekuly-header-header_with_search)
 
  
___

### **pp_Conference_Agenda** <a name="nav_stránky-konference-pp_conference_agenda"></a>
> Stránka s agendou pro konkrétní konferenci

**Kategorie:**
 Stránky/Konference

**Druh:**
 *HTML template — v průběhu buildu **dynamické*** ([defined@pp_Conference_Agenda.sub.html:1](../html/organisms/ko_Events/pp_Conference_Agenda.sub.html#L1))

**Využívá:**
 - [Molekuly/Header/header](#nav_molekuly-header-header)
- [Atomy/events_subheader](#nav_atomy-events_subheader)
 
  
___

### **pp_Conference_Contacts** <a name="nav_stránky-konference-pp_conference_contacts"></a>
> Stránka se seznamem lidí pro konkrétní konferenci

**Kategorie:**
 Stránky/Konference

**Druh:**
 *HTML template — v průběhu buildu **dynamické*** ([defined@pp_Conference_Contacts.sub.html:1](../html/organisms/ko_Events/pp_Conference_Contacts.sub.html#L1))

**Využívá:**
 - [Molekuly/Header/header](#nav_molekuly-header-header)
- [Molekuly/Abeceda](#nav_molekuly-abeceda)
- [Atomy/events_subheader](#nav_atomy-events_subheader)
 
  
___

### **pp_Conference_FAQ** <a name="nav_stránky-konference-pp_conference_faq"></a>
> Stránka s FAQ pro konkrétní konferenci

**Kategorie:**
 Stránky/Konference

**Druh:**
 *HTML template — v průběhu buildu **dynamické*** ([defined@pp_Conference_FAQ.sub.html:1](../html/organisms/ko_Events/pp_Conference_FAQ.sub.html#L1))

**Využívá:**
 - [Molekuly/Header/header](#nav_molekuly-header-header)
- [Atomy/events_subheader](#nav_atomy-events_subheader)
 
  
___

### **pp_Conference_Feedback** <a name="nav_stránky-konference-pp_conference_feedback"></a>
> Stránka se zpětnou vazbou pro konkrétní konferenci

**Kategorie:**
 Stránky/Konference

**Druh:**
 *HTML template — v průběhu buildu **dynamické*** ([defined@pp_Conference_Feedback.sub.html:1](../html/organisms/ko_Events/pp_Conference_Feedback.sub.html#L1))

**Využívá:**
 - [Molekuly/Header/header](#nav_molekuly-header-header)
- [Atomy/events_subheader](#nav_atomy-events_subheader)
 
  
___

### **pp_Conference_Files** <a name="nav_stránky-konference-pp_conference_files"></a>
> Stránka se seznamem souborů pro konkrétní konferenci

**Kategorie:**
 Stránky/Konference

**Druh:**
 *HTML template — v průběhu buildu **dynamické*** ([defined@pp_Conference_Files.sub.html:1](../html/organisms/ko_Events/pp_Conference_Files.sub.html#L1))

**Využívá:**
 - [Molekuly/Header/header](#nav_molekuly-header-header)
- [Atomy/events_subheader](#nav_atomy-events_subheader)
 
  
___

### **pp_Conference_Information** <a name="nav_stránky-konference-pp_conference_information"></a>
> Informační stránka pro konkrétní konferenci

**Kategorie:**
 Stránky/Konference

**Druh:**
 *HTML template — v průběhu buildu **dynamické*** ([defined@pp_Conference_Information.sub.html:1](../html/organisms/ko_Events/pp_Conference_Information.sub.html#L1))

**Využívá:**
 - [Molekuly/Header/header](#nav_molekuly-header-header)
- [Atomy/events_subheader](#nav_atomy-events_subheader)
 
  
___

### **pp_Conference_InformationVenueMap** <a name="nav_stránky-konference-pp_conference_informationvenuemap"></a>
> Stránka s mapou pro konkrétní konferenci (podstránka [pp_Conference_Information](#nav_stránky-konference-pp_conference_information)).

**Kategorie:**
 Stránky/Konference

**Druh:**
 *HTML template — v průběhu buildu **dynamické*** ([defined@pp_Conference_InformationVenueMap.sub.html:1](../html/organisms/ko_Events/pp_Conference_InformationVenueMap.sub.html#L1))

**Využívá:**
 - [Molekuly/Header/header](#nav_molekuly-header-header)
- [Atomy/events_subheader](#nav_atomy-events_subheader)
 
  
___

### **pp_Conference_SignUp** <a name="nav_stránky-konference-pp_conference_signup"></a>
> Stránka pro konkrétní tzv. 'SignUp' konferenci

**Kategorie:**
 Stránky/Konference

**Druh:**
 *HTML template — v průběhu buildu **dynamické*** ([defined@pp_Conference_SignUp.sub.html:1](../html/organisms/ko_Events/pp_Conference_SignUp.sub.html#L1))

**Využívá:**
 - [Molekuly/Header/header](#nav_molekuly-header-header)
 
  
___

### **agendaFeedback** <a name="nav_stránky-konference-popup-stránky-agendafeedback"></a>
> Feedback k položce v agendě viz [pp_Conference_Agenda](#nav_stránky-konference-pp_conference_agenda)

**Kategorie:**
 Stránky/Konference/Popup Stránky

**Druh:**
 *HTML template — v průběhu buildu **statické*** ([defined@agendaFeedback.sub.html:1](../html/organisms/yo_PopUp_Stranky/agendaFeedback.sub.html#L1))
  
  
___

### **agendaNotes** <a name="nav_stránky-konference-popup-stránky-agendanotes"></a>
> Poznámka k položce v agendě viz [pp_Conference_Agenda](#nav_stránky-konference-pp_conference_agenda)

**Kategorie:**
 Stránky/Konference/Popup Stránky

**Druh:**
 *HTML template — v průběhu buildu **dynamické*** ([defined@agendaNotes.sub.html:1](../html/organisms/yo_PopUp_Stranky/agendaNotes.sub.html#L1))

**Využívá:**
 - [Molekuly/Header/header_popups](#nav_molekuly-header-header_popups)
- [Molekuly/Formulář poznámky/form_page_note](#nav_molekuly-formulář-poznámky-form_page_note)
 
  
___

### **searchPopUp** <a name="nav_stránky-speciální-popup-stránky-searchpopup"></a>
> Začátek vyhledávání — poté přechází do [pp_Search](#nav_stránky-speciální-pp_search)

**Kategorie:**
 Stránky/Speciální/Popup Stránky

**Druh:**
 *HTML template — v průběhu buildu **dynamické*** ([defined@searchPopUp.sub.html:1](../html/organisms/yo_PopUp_Stranky/searchPopUp.sub.html#L1))

**Využívá:**
 - [Atomy/searchFrom](#nav_atomy-searchfrom)
 
  
___

### **PopupBox** <a name="nav_stránky-utility-popupbox"></a>
> Vyskakovací okno primárně pro push notifikace

**Kategorie:**
 Stránky/Utility

**Druh:**
 *HTML template — v průběhu buildu **statické*** ([defined@PopupBox.sub.html:1](../html/organisms/zo_PopUp_Ostatni/PopupBox.sub.html#L1))
  
  
___

### **popupInternet** <a name="nav_stránky-utility-popupinternet"></a>
> Vyskakovací okno primárně pro 'internetové' notifikace

**Kategorie:**
 Stránky/Utility

**Druh:**
 *HTML template — v průběhu buildu **statické*** ([defined@popupInternet.sub.html:1](../html/organisms/zo_PopUp_Ostatni/popupInternet.sub.html#L1))
  
  
___

### **popupPictureSelector** <a name="nav_stránky-utility-popuppictureselector"></a>
> Vyskakovací okno pro výběr fotografií

**Kategorie:**
 Stránky/Utility

**Druh:**
 *HTML template — v průběhu buildu **statické*** ([defined@popupPictureSelector.sub.html:1](../html/organisms/zo_PopUp_Ostatni/popupPictureSelector.sub.html#L1))
  
  
___

### **popupSmall** <a name="nav_stránky-utility-popupsmall"></a>
> Vyskakovací okno primárně pro 'malé' notifikace

**Kategorie:**
 Stránky/Utility

**Druh:**
 *HTML template — v průběhu buildu **statické*** ([defined@popupSmall.sub.html:1](../html/organisms/zo_PopUp_Ostatni/popupSmall.sub.html#L1))
  
  
___