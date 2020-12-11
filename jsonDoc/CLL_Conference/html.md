# Dokumentace HTML template souborů

Některé jsou v průběhu buildu statické, jiné se dívají do `app._BUILD_` pomocí `gulp_place` (viz `package.json` též `_BUILD_` klíč a `gulpfile.js`).

Dynamická část je zahrnuta v [**JavaScript**ové části](./javascript.md).

## Struktura
- **[Stránky](#nav_stránky-main)**<a name="nav_stránky"></a> *(statické)*

    Zde jsou zahrnuty HTML části stránek, dynamická část je v [**JavaScript**ové části](./javascript.md#stránka).

    - **[pp_Welcome](#nav_stránky-pp_welcome)** *(dynamické)*

        Info Stránka

    - **Announcements** <a name="nav_stránky-announcements"></a>

        - **[pp_Announcements](#nav_stránky-announcements-pp_announcements)** *(dynamické)*

            Stránka novinek.

    - **Home** <a name="nav_stránky-home"></a>

        - **[pp_AppUser](#nav_stránky-home-pp_appuser)** *(dynamické)*

            Profilová stránka uživatele aplikace

        - **[pp_AppUserEdit](#nav_stránky-home-pp_appuseredit)** *(dynamické)*

            Profilová stránka uživatele aplikace

    - **Konference** <a name="nav_stránky-konference"></a>

        - **[pp_ConferenceAgenda](#nav_stránky-konference-pp_conferenceagenda)** *(dynamické)*

            Agenda současné konference

        - **[pp_ConferenceInfo](#nav_stránky-konference-pp_conferenceinfo)** *(dynamické)*

            Infromace o současné konferenci

        - **[pp_ConferenceInfoVenueMap](#nav_stránky-konference-pp_conferenceinfovenuemap)** *(dynamické)*

            Stránka s mapou pro konkrétní konferenci (podstránka [pp_Conference_Information](#nav_stránky-konference-pp_conference_information)).

        - **Popup Stránky** <a name="nav_stránky-konference-popup-stránky"></a>

            - **[agendaColors](#nav_stránky-konference-popup-stránky-agendacolors)** *(statické)*

                Zobrazení `Colors` aktivity k dané položce v agendě viz [pp_ConferenceAgenda](#nav_stránky-konference-pp_conferenceagenda)

            - **[agendaCSA](#nav_stránky-konference-popup-stránky-agendacsa)** *(statické)*

                Zobrazení `CSA` aktivity k dané položce v agendě viz [pp_ConferenceAgenda](#nav_stránky-konference-pp_conferenceagenda)

            - **[agendaFeedback](#nav_stránky-konference-popup-stránky-agendafeedback)** *(statické)*

                Feedback k položce v agendě viz [pp_ConferenceAgenda](#nav_stránky-konference-pp_conferenceagenda)

            - **[agendaHealth](#nav_stránky-konference-popup-stránky-agendahealth)** *(statické)*

                Feedback k položce v agendě viz [pp_ConferenceAgenda](#nav_stránky-konference-pp_conferenceagenda)

            - **[agendaInfo](#nav_stránky-konference-popup-stránky-agendainfo)** *(statické)*

                Zobrazení ingormací k dané položce v agendě viz [pp_ConferenceAgenda](#nav_stránky-konference-pp_conferenceagenda)

            - **[agendaMyStory2](#nav_stránky-konference-popup-stránky-agendamystory2)** *(statické)*

                Zobrazení My Story k dané položce v agendě viz [pp_ConferenceAgenda](#nav_stránky-konference-pp_conferenceagenda)

            - **[agendaMyStory3](#nav_stránky-konference-popup-stránky-agendamystory3)** *(statické)*

                Zobrazení My Story k dané položce v agendě viz [pp_ConferenceAgenda](#nav_stránky-konference-pp_conferenceagenda)

            - **[agendaMyStory4and5](#nav_stránky-konference-popup-stránky-agendamystory4and5)** *(statické)*

                Zobrazení My Story k dané položce v agendě viz [pp_ConferenceAgenda](#nav_stránky-konference-pp_conferenceagenda)

            - **[agendaNotes](#nav_stránky-konference-popup-stránky-agendanotes)** *(statické)*

                Poznámka k položce v agendě viz [pp_ConferenceAgenda](#nav_stránky-konference-pp_conferenceagenda)

            - **[agendaNSA](#nav_stránky-konference-popup-stránky-agendansa)** *(statické)*

                Zobrazení `NSA` aktivity k dané položce v agendě viz [pp_ConferenceAgenda](#nav_stránky-konference-pp_conferenceagenda)

            - **[agendaUpward](#nav_stránky-konference-popup-stránky-agendaupward)** *(statické)*

                Zobrazení `Upward` aktivity k dané položce v agendě viz [pp_ConferenceAgenda](#nav_stránky-konference-pp_conferenceagenda)

    - **Lidi** <a name="nav_stránky-lidi"></a>

        - **[pp_People](#nav_stránky-lidi-pp_people)** *(dynamické)*

            Seznam účastníků

        - **[pp_PeopleProfile](#nav_stránky-lidi-pp_peopleprofile)** *(dynamické)*

            Profilová stránka člověka ze seznamu

    - **Menu** <a name="nav_stránky-menu"></a>

        - **[pp_Menu](#nav_stránky-menu-pp_menu)** *(dynamické)*

            Možnosti změny hesla, odhlášení, ….

        - **[pp_MenuChangePassword](#nav_stránky-menu-pp_menuchangepassword)** *(dynamické)*

            Stránka pro změnu hesla

        - **[pp_MenuFingerprint](#nav_stránky-menu-pp_menufingerprint)** *(statické)*

            Stránka pro nastavení přihlašování pomocí biometrických údajů

    - **Přihlašování apod.** <a name="nav_stránky-přihlašování-apod-"></a>

        - **[pp_ChooseConference](#nav_stránky-přihlašování-apod--pp_chooseconference)** *(statické)*

            Stránka se seznamem konferencí

        - **[pp_Login](#nav_stránky-přihlašování-apod--pp_login)** *(dynamické)*

            Přihlašovací stránka

        - **[pp_LoginForgetPassword](#nav_stránky-přihlašování-apod--pp_loginforgetpassword)** *(dynamické)*

            Přihlašovací stránka

        - **[pp_SetPassword](#nav_stránky-přihlašování-apod--pp_setpassword)** *(statické)*

            Stránka pro nastavení hesla

        - **[pp_SplashScreen](#nav_stránky-přihlašování-apod--pp_splashscreen)** *(statické)*

            Jen pomocná pro lepší pocit ze spouštění

    - **Utility** <a name="nav_stránky-utility"></a>

        - **[popupInternet](#nav_stránky-utility-popupinternet)** *(statické)*

            Vyskakovací okno primárně pro 'internetové' notifikace

        - **[popupPictureSelector](#nav_stránky-utility-popuppictureselector)** *(statické)*

            Vyskakovací okno pro výběr fotografií

        - **[popupSmall](#nav_stránky-utility-popupsmall)** *(statické)*

            Vyskakovací okno primárně pro 'malé' notifikace

- **pp_People** <a name="nav_pp_people"></a>

    - **[people_alphabetLi](#nav_pp_people-people_alphabetli)** *(statické)*

        Tlačítko abecedy v `pp_People`.

    - **[people_filterLink](#nav_pp_people-people_filterlink)** *(statické)*

        Tlačítko v `pp_People` pro filtrování lidí.

- **Molekuly** <a name="nav_molekuly-formulář-poznámky"></a>

    - **Formulář poznámky** <a name="nav_molekuly-formulář-poznámky"></a>

        - **[form_page_note](#nav_molekuly-formulář-poznámky-form_page_note)** *(dynamické)*

            Komponenta vypisující formulář nadpis/obsah + fotky (typicky formulář pro tvorbu poznámek)

    - **Navigace** <a name="nav_molekuly-navigace"></a>

        - **[footer_nav](#nav_molekuly-navigace-footer_nav)** *(dynamické)*

            Patička aplikace

        - **[page_header_nav](#nav_molekuly-navigace-page_header_nav)** *(dynamické)*

            Hlavička pro stránky

- **Atomy** <a name="nav_atomy-část-stránky"></a>

    - **Část stránky** <a name="nav_atomy-část-stránky"></a>

        - **[info_section](#nav_atomy-část-stránky-info_section)** *(dynamické)*

            Sekce s ikonou vlevo a textem vpravo

        - **[info_section_picture](#nav_atomy-část-stránky-info_section_picture)** *(dynamické)*

            Sekce s ikonou vlevo a obrázkem vpravo

    - **Formuláře** <a name="nav_atomy-formuláře"></a>

        - **[activity_radio_colors](#nav_atomy-formuláře-activity_radio_colors)** *(dynamické)*

            Barevné radio přepínače

        - **[activity_radio_emogi](#nav_atomy-formuláře-activity_radio_emogi)** *(dynamické)*

            Emodží radio přepínače

        - **[activity_textarea](#nav_atomy-formuláře-activity_textarea)** *(dynamické)*

            Textarea

        - **[basic_textarea](#nav_atomy-formuláře-basic_textarea)** *(dynamické)*

            Základní textarea

        - **[fiedset_input_required](#nav_atomy-formuláře-fiedset_input_required)** *(dynamické)*

            Obecný input

        - **[fiedset_password](#nav_atomy-formuláře-fiedset_password)** *(dynamické)*

            Inut pro heslo

        - **[fiedset_text](#nav_atomy-formuláře-fiedset_text)** *(dynamické)*

            Textový Inut se štítkem

    - **Navigace — Tlačítka** <a name="nav_atomy-navigace---tlačítka"></a>

        - **[nav_button](#nav_atomy-navigace---tlačítka-nav_button)** *(dynamické)*

            Tlačítko v patičce

        - **[nav_buttons_back](#nav_atomy-navigace---tlačítka-nav_buttons_back)** *(statické)*

            Tlačítko v hlavičce pro přechod na p stránky

        - **[nav_buttons_cancel](#nav_atomy-navigace---tlačítka-nav_buttons_cancel)** *(statické)*

            Tlačítko v 'Cancel' v hlavičce

        - **[nav_buttons_close_popup](#nav_atomy-navigace---tlačítka-nav_buttons_close_popup)** *(dynamické)*

            Tlačítko v hlavičce pro zavření popup stránky

        - **[nav_buttons_page](#nav_atomy-navigace---tlačítka-nav_buttons_page)** *(statické)*

            Tlačítko v hlavičce pro změnu stránky

        - **[nav_buttons_peopleFilter](#nav_atomy-navigace---tlačítka-nav_buttons_peoplefilter)** *(statické)*

            Tlačítko v `pp_People` pro zobrazení můžností filtrování lidí.

        - **[nav_buttons_save](#nav_atomy-navigace---tlačítka-nav_buttons_save)** *(statické)*

            Tlačítko v 'Save' v hlavičce

        - **[nav_buttons_save_form](#nav_atomy-navigace---tlačítka-nav_buttons_save_form)** *(statické)*

            Tlačítko v 'Save' v hlavičce (submit pro daný formulář)

- **Agenda** <a name="nav_agenda"></a>

    - **[popups_header_section](#nav_agenda-popups_header_section)** *(statické)*

        Komponenta přidá nadpis a podnadpis (data načítá z [_onPagesPreparing](./javascript.md#_onPagesPreparing))



___

## Jednotlivé komponenty

Dle pořadí souborů.

### **main** <a name="nav_stránky-main"></a>
> Zde jsou zahrnuty HTML části stránek, dynamická část je v [**JavaScript**ové části](./javascript.md#stránka).

**Kategorie:**
 Stránky

**Druh:**
 *HTML template — v průběhu buildu **statické*** ([defined@main.html:17](../app_src/html/main.html#L17))
  
  
___

### **activity_radio_colors** <a name="nav_atomy-formuláře-activity_radio_colors"></a>
> Barevné radio přepínače

**Kategorie:**
 Atomy/Formuláře

**Druh:**
 *HTML template — v průběhu buildu **dynamické*** ([defined@activity_radio_colors.sub.html:1](../app_src/html/atoms/activity_radio_colors.sub.html#L1))
  
**Parametry** (při buildu je potřeba specifikovat tyto klíče v `app._BUILD_`):

|  Jméno  | Popisek |
| ------- | ------- |
 | `form_name` | Jméno formuláře, používá se jako `name` (přidává se `textarea_citac`). |
| `textarea_citac` | Volitelné (jinak >=1) | 
___

### **activity_radio_emogi** <a name="nav_atomy-formuláře-activity_radio_emogi"></a>
> Emodží radio přepínače

**Kategorie:**
 Atomy/Formuláře

**Druh:**
 *HTML template — v průběhu buildu **dynamické*** ([defined@activity_radio_emogi.sub.html:1](../app_src/html/atoms/activity_radio_emogi.sub.html#L1))
  
**Parametry** (při buildu je potřeba specifikovat tyto klíče v `app._BUILD_`):

|  Jméno  | Popisek |
| ------- | ------- |
 | `form_name` | Jméno formuláře, používá se jako `name` (přidává se `textarea_citac`). |
| `textarea_citac` | Volitelné (jinak >=1) | 
___

### **activity_textarea** <a name="nav_atomy-formuláře-activity_textarea"></a>
> Textarea

**Kategorie:**
 Atomy/Formuláře

**Druh:**
 *HTML template — v průběhu buildu **dynamické*** ([defined@activity_textarea.sub.html:1](../app_src/html/atoms/activity_textarea.sub.html#L1))
  
**Parametry** (při buildu je potřeba specifikovat tyto klíče v `app._BUILD_`):

|  Jméno  | Popisek |
| ------- | ------- |
 | `form_name` | Jméno formuláře, používá se jako `name` (přidává se `textarea_citac`). |
| `textarea_citac` | Volitelné (jinak >=1) | 
___

### **basic_textarea** <a name="nav_atomy-formuláře-basic_textarea"></a>
> Základní textarea

**Kategorie:**
 Atomy/Formuláře

**Druh:**
 *HTML template — v průběhu buildu **dynamické*** ([defined@basic_textarea.sub.html:1](../app_src/html/atoms/basic_textarea.sub.html#L1))
  
**Parametry** (při buildu je potřeba specifikovat tyto klíče v `app._BUILD_`):

|  Jméno  | Popisek |
| ------- | ------- |
 | `basic_textarea` | Parametry pro textareu: `{ name, label, id }`, kde `name` slouží k identifikaci, `label` je popisek a `id` volitelně přidá IDčko (jinak použije `name`). | 
___

### **fiedset_input_required** <a name="nav_atomy-formuláře-fiedset_input_required"></a>
> Obecný input

**Kategorie:**
 Atomy/Formuláře

**Druh:**
 *HTML template — v průběhu buildu **dynamické*** ([defined@fiedset_input_required.sub.html:1](../app_src/html/atoms/fiedset_input_required.sub.html#L1))
  
**Parametry** (při buildu je potřeba specifikovat tyto klíče v `app._BUILD_`):

|  Jméno  | Popisek |
| ------- | ------- |
 | `legend` | Popisek |
| `type` | Typ inputu |
| `form` | Jméno formuláře — použije se jako začátek identifikátorů a jako dataset pro input (zprovoznění enteru) |
| `name` | Jméno inputu bez předpony (dodá se `form`) | 
___

### **fiedset_password** <a name="nav_atomy-formuláře-fiedset_password"></a>
> Inut pro heslo

**Kategorie:**
 Atomy/Formuláře

**Druh:**
 *HTML template — v průběhu buildu **dynamické*** ([defined@fiedset_password.sub.html:1](../app_src/html/atoms/fiedset_password.sub.html#L1))
  
**Parametry** (při buildu je potřeba specifikovat tyto klíče v `app._BUILD_`):

|  Jméno  | Popisek |
| ------- | ------- |
 | legend | Popisek |
| form | Jméno formuláře — použije se jako začátek identifikátorů (dodá se string '_password') a jako dataset pro input (zprovoznění enteru) | 
___

### **fiedset_text** <a name="nav_atomy-formuláře-fiedset_text"></a>
> Textový Inut se štítkem

**Kategorie:**
 Atomy/Formuláře

**Druh:**
 *HTML template — v průběhu buildu **dynamické*** ([defined@fiedset_text.sub.html:1](../app_src/html/atoms/fiedset_text.sub.html#L1))
  
**Parametry** (při buildu je potřeba specifikovat tyto klíče v `app._BUILD_`):

|  Jméno  | Popisek |
| ------- | ------- |
 | `fiedset_text` | Parametry pro input: `{ name, label, id }`, kde `name` slouží k identifikaci, `label` je popisek a `id` volitelně přidá IDčko (jinak použije `name`). | 
___

### **info_section** <a name="nav_atomy-část-stránky-info_section"></a>
> Sekce s ikonou vlevo a textem vpravo

**Kategorie:**
 Atomy/Část stránky

**Druh:**
 *HTML template — v průběhu buildu **dynamické*** ([defined@info_section.sub.html:1](../app_src/html/atoms/info_section.sub.html#L1))
  
**Parametry** (při buildu je potřeba specifikovat tyto klíče v `app._BUILD_`):

|  Jméno  | Popisek |
| ------- | ------- |
 | `icon` | Jméno CSS ikony |
| `headline` | Jméno sekce |
| `text_id` | Vlastně IDčko paragrafu pro doplnění textu pomocí JS | 
___

### **info_section_picture** <a name="nav_atomy-část-stránky-info_section_picture"></a>
> Sekce s ikonou vlevo a obrázkem vpravo

**Kategorie:**
 Atomy/Část stránky

**Druh:**
 *HTML template — v průběhu buildu **dynamické*** ([defined@info_section_picture.sub.html:1](../app_src/html/atoms/info_section_picture.sub.html#L1))
  
**Parametry** (při buildu je potřeba specifikovat tyto klíče v `app._BUILD_`):

|  Jméno  | Popisek |
| ------- | ------- |
 | `icon` | Jméno CSS ikony |
| `headline` | Jméno sekce |
| `text_id` | Vlastně IDčka (pro celý `div` se přidává **_section** a pro samotný 'obrázek' **_image**) |
| `goto` | Volitelné (změna stránky) |
| `fce` | Volitelné (volání funkce) | 
___

### **nav_button** <a name="nav_atomy-navigace---tlačítka-nav_button"></a>
> Tlačítko v patičce

**Kategorie:**
 Atomy/Navigace — Tlačítka

**Druh:**
 *HTML template — v průběhu buildu **dynamické*** ([defined@nav_button.sub.html:1](../app_src/html/atoms/nav_button.sub.html#L1))
  
**Parametry** (při buildu je potřeba specifikovat tyto klíče v `app._BUILD_`):

|  Jméno  | Popisek |
| ------- | ------- |
 | `icon` | Jméno CSS ikony |
| `target` | Jméno cílové stránky | 
___

### **nav_buttons_back** <a name="nav_atomy-navigace---tlačítka-nav_buttons_back"></a>
> Tlačítko v hlavičce pro přechod na p stránky

**Kategorie:**
 Atomy/Navigace — Tlačítka

**Druh:**
 *HTML template — v průběhu buildu **statické*** ([defined@nav_buttons_back.sub.html:1](../app_src/html/atoms/nav_buttons_back.sub.html#L1))
  
  
___

### **nav_buttons_cancel** <a name="nav_atomy-navigace---tlačítka-nav_buttons_cancel"></a>
> Tlačítko v 'Cancel' v hlavičce

**Kategorie:**
 Atomy/Navigace — Tlačítka

**Druh:**
 *HTML template — v průběhu buildu **statické*** ([defined@nav_buttons_cancel.sub.html:1](../app_src/html/atoms/nav_buttons_cancel.sub.html#L1))
  
  
___

### **nav_buttons_close_popup** <a name="nav_atomy-navigace---tlačítka-nav_buttons_close_popup"></a>
> Tlačítko v hlavičce pro zavření popup stránky

**Kategorie:**
 Atomy/Navigace — Tlačítka

**Druh:**
 *HTML template — v průběhu buildu **dynamické*** ([defined@nav_buttons_close_popup.sub.html:1](../app_src/html/atoms/nav_buttons_close_popup.sub.html#L1))
  
**Parametry** (při buildu je potřeba specifikovat tyto klíče v `app._BUILD_`):

|  Jméno  | Popisek |
| ------- | ------- |
 | `close_name` | String<br>&nbsp;&nbsp;Jéno tlačítka (defaultně *Back*). | 
___

### **nav_buttons_page** <a name="nav_atomy-navigace---tlačítka-nav_buttons_page"></a>
> Tlačítko v hlavičce pro změnu stránky

**Kategorie:**
 Atomy/Navigace — Tlačítka

**Druh:**
 *HTML template — v průběhu buildu **statické*** ([defined@nav_buttons_page.sub.html:1](../app_src/html/atoms/nav_buttons_page.sub.html#L1))
  
  
___

### **nav_buttons_peopleFilter** <a name="nav_atomy-navigace---tlačítka-nav_buttons_peoplefilter"></a>
> Tlačítko v `pp_People` pro zobrazení můžností filtrování lidí.

**Kategorie:**
 Atomy/Navigace — Tlačítka

**Druh:**
 *HTML template — v průběhu buildu **statické*** ([defined@nav_buttons_peopleFilter.sub.html:1](../app_src/html/atoms/nav_buttons_peopleFilter.sub.html#L1))
  
  
___

### **nav_buttons_save** <a name="nav_atomy-navigace---tlačítka-nav_buttons_save"></a>
> Tlačítko v 'Save' v hlavičce

**Kategorie:**
 Atomy/Navigace — Tlačítka

**Druh:**
 *HTML template — v průběhu buildu **statické*** ([defined@nav_buttons_save.sub.html:1](../app_src/html/atoms/nav_buttons_save.sub.html#L1))
  
  
___

### **nav_buttons_save_form** <a name="nav_atomy-navigace---tlačítka-nav_buttons_save_form"></a>
> Tlačítko v 'Save' v hlavičce (submit pro daný formulář)

**Kategorie:**
 Atomy/Navigace — Tlačítka

**Druh:**
 *HTML template — v průběhu buildu **statické*** ([defined@nav_buttons_save_form.sub.html:1](../app_src/html/atoms/nav_buttons_save_form.sub.html#L1))
  
  
___

### **people_alphabetLi** <a name="nav_pp_people-people_alphabetli"></a>
> Tlačítko abecedy v `pp_People`.

**Kategorie:**
 pp_People

**Druh:**
 *HTML template — v průběhu buildu **statické*** ([defined@people_alphabetLi.sub.html:1](../app_src/html/atoms/people_alphabetLi.sub.html#L1))
  
  
___

### **people_filterLink** <a name="nav_pp_people-people_filterlink"></a>
> Tlačítko v `pp_People` pro filtrování lidí.

**Kategorie:**
 pp_People

**Druh:**
 *HTML template — v průběhu buildu **statické*** ([defined@people_filterLink.sub.html:1](../app_src/html/atoms/people_filterLink.sub.html#L1))
  
  
___

### **popups_header_section** <a name="nav_agenda-popups_header_section"></a>
> Komponenta přidá nadpis a podnadpis (data načítá z [_onPagesPreparing](./javascript.md#_onPagesPreparing))

**Kategorie:**
 Agenda

**Druh:**
 *HTML template — v průběhu buildu **statické*** ([defined@popups_header_section.sub.html:1](../app_src/html/atoms/popups_header_section.sub.html#L1))
  
  
___

### **footer_nav** <a name="nav_molekuly-navigace-footer_nav"></a>
> Patička aplikace

**Kategorie:**
 Molekuly/Navigace

**Druh:**
 *HTML template — v průběhu buildu **dynamické*** ([defined@footer_nav.sub.html:1](../app_src/html/molecules/footer_nav.sub.html#L1))

**Využívá:**
 - [Atomy/nav_button](#nav_atomy-nav_button)
 
  
___

### **form_page_note** <a name="nav_molekuly-formulář-poznámky-form_page_note"></a>
> Komponenta vypisující formulář nadpis/obsah + fotky (typicky formulář pro tvorbu poznámek)

**Kategorie:**
 Molekuly/Formulář poznámky

**Druh:**
 *HTML template — v průběhu buildu **dynamické*** ([defined@form_page_note.sub.html:1](../app_src/html/molecules/form_page_note.sub.html#L1))

**Využívá:**
 - [Agenda/popups_header_section](#nav_agenda-popups_header_section)
 
**Parametry** (při buildu je potřeba specifikovat tyto klíče v `app._BUILD_`):

|  Jméno  | Popisek |
| ------- | ------- |
 | `FPN_form_id` | Identifikátor který se přidává u `id`/`name` (v `textarea`ře) před 'Note' |
| `FPN_photo_fce` | `data-fce` ktera se zavola po kliknuti na 'Add Photo' | 
___

### **page_header_nav** <a name="nav_molekuly-navigace-page_header_nav"></a>
> Hlavička pro stránky

**Kategorie:**
 Molekuly/Navigace

**Druh:**
 *HTML template — v průběhu buildu **dynamické*** ([defined@page_header_nav.sub.html:1](../app_src/html/molecules/page_header_nav.sub.html#L1))
  
**Parametry** (při buildu je potřeba specifikovat tyto klíče v `app._BUILD_`):

|  Jméno  | Popisek |
| ------- | ------- |
 | `left` | jmeno 'atomu' pro 'navigaci' tlacitko viz 'Atomy/Navigace — Tlačítka' |
| `name` | Text titulku stránky |
| `right` | jmeno 'atomu' pro 'navigaci' tlacitko viz 'Atomy/Navigace — Tlačítka' | 
___

### **pp_Announcements** <a name="nav_stránky-announcements-pp_announcements"></a>
> Stránka novinek.

**Kategorie:**
 Stránky/Announcements

**Druh:**
 *HTML template — v průběhu buildu **dynamické*** ([defined@pp_Announcements.sub.html:1](../app_src/html/organisms/Announcements/pp_Announcements.sub.html#L1))

**Využívá:**
 - [Navigace/page_header_nav](#nav_navigace-page_header_nav)
 
  
___

### **pp_ChooseConference** <a name="nav_stránky-přihlašování-apod--pp_chooseconference"></a>
> Stránka se seznamem konferencí

**Kategorie:**
 Stránky/Přihlašování apod.

**Druh:**
 *HTML template — v průběhu buildu **statické*** ([defined@pp_ChooseConference.sub.html:1](../app_src/html/organisms/AppStart/pp_ChooseConference.sub.html#L1))
  
  
___

### **pp_Login** <a name="nav_stránky-přihlašování-apod--pp_login"></a>
> Přihlašovací stránka

**Kategorie:**
 Stránky/Přihlašování apod.

**Druh:**
 *HTML template — v průběhu buildu **dynamické*** ([defined@pp_Login.sub.html:1](../app_src/html/organisms/AppStart/pp_Login.sub.html#L1))

**Využívá:**
 - [Formuláře/password_fiedset](#nav_formuláře-password_fiedset)
 
  
___

### **pp_LoginForgetPassword** <a name="nav_stránky-přihlašování-apod--pp_loginforgetpassword"></a>
> Přihlašovací stránka

**Kategorie:**
 Stránky/Přihlašování apod.

**Druh:**
 *HTML template — v průběhu buildu **dynamické*** ([defined@pp_LoginForgetPassword.sub.html:1](../app_src/html/organisms/AppStart/pp_LoginForgetPassword.sub.html#L1))

**Využívá:**
 - [Formuláře/password_fiedset](#nav_formuláře-password_fiedset)
 
  
___

### **pp_SetPassword** <a name="nav_stránky-přihlašování-apod--pp_setpassword"></a>
> Stránka pro nastavení hesla

**Kategorie:**
 Stránky/Přihlašování apod.

**Druh:**
 *HTML template — v průběhu buildu **statické*** ([defined@pp_SetPassword.sub.html:1](../app_src/html/organisms/AppStart/pp_SetPassword.sub.html#L1))
  
  
___

### **pp_SplashScreen** <a name="nav_stránky-přihlašování-apod--pp_splashscreen"></a>
> Jen pomocná pro lepší pocit ze spouštění

**Kategorie:**
 Stránky/Přihlašování apod.

**Druh:**
 *HTML template — v průběhu buildu **statické*** ([defined@pp_SplashScreen.sub.html:1](../app_src/html/organisms/AppStart/pp_SplashScreen.sub.html#L1))
  
  
___

### **agendaColors** <a name="nav_stránky-konference-popup-stránky-agendacolors"></a>
> Zobrazení `Colors` aktivity k dané položce v agendě viz [pp_ConferenceAgenda](#nav_stránky-konference-pp_conferenceagenda)

**Kategorie:**
 Stránky/Konference/Popup Stránky

**Druh:**
 *HTML template — v průběhu buildu **statické*** ([defined@agendaColors.sub.html:1](../app_src/html/organisms/Conference/agendaColors.sub.html#L1))
  
  
___

### **agendaCSA** <a name="nav_stránky-konference-popup-stránky-agendacsa"></a>
> Zobrazení `CSA` aktivity k dané položce v agendě viz [pp_ConferenceAgenda](#nav_stránky-konference-pp_conferenceagenda)

**Kategorie:**
 Stránky/Konference/Popup Stránky

**Druh:**
 *HTML template — v průběhu buildu **statické*** ([defined@agendaCSA.sub.html:1](../app_src/html/organisms/Conference/agendaCSA.sub.html#L1))
  
  
___

### **agendaFeedback** <a name="nav_stránky-konference-popup-stránky-agendafeedback"></a>
> Feedback k položce v agendě viz [pp_ConferenceAgenda](#nav_stránky-konference-pp_conferenceagenda)

**Kategorie:**
 Stránky/Konference/Popup Stránky

**Druh:**
 *HTML template — v průběhu buildu **statické*** ([defined@agendaFeedback.sub.html:1](../app_src/html/organisms/Conference/agendaFeedback.sub.html#L1))
  
  
___

### **agendaHealth** <a name="nav_stránky-konference-popup-stránky-agendahealth"></a>
> Feedback k položce v agendě viz [pp_ConferenceAgenda](#nav_stránky-konference-pp_conferenceagenda)

**Kategorie:**
 Stránky/Konference/Popup Stránky

**Druh:**
 *HTML template — v průběhu buildu **statické*** ([defined@agendaHealth.sub.html:1](../app_src/html/organisms/Conference/agendaHealth.sub.html#L1))
  
  
___

### **agendaInfo** <a name="nav_stránky-konference-popup-stránky-agendainfo"></a>
> Zobrazení ingormací k dané položce v agendě viz [pp_ConferenceAgenda](#nav_stránky-konference-pp_conferenceagenda)

**Kategorie:**
 Stránky/Konference/Popup Stránky

**Druh:**
 *HTML template — v průběhu buildu **statické*** ([defined@agendaInfo.sub.html:1](../app_src/html/organisms/Conference/agendaInfo.sub.html#L1))
  
  
___

### **agendaMyStory2** <a name="nav_stránky-konference-popup-stránky-agendamystory2"></a>
> Zobrazení My Story k dané položce v agendě viz [pp_ConferenceAgenda](#nav_stránky-konference-pp_conferenceagenda)

**Kategorie:**
 Stránky/Konference/Popup Stránky

**Druh:**
 *HTML template — v průběhu buildu **statické*** ([defined@agendaMyStory2.sub.html:1](../app_src/html/organisms/Conference/agendaMyStory2.sub.html#L1))
  
  
___

### **agendaMyStory3** <a name="nav_stránky-konference-popup-stránky-agendamystory3"></a>
> Zobrazení My Story k dané položce v agendě viz [pp_ConferenceAgenda](#nav_stránky-konference-pp_conferenceagenda)

**Kategorie:**
 Stránky/Konference/Popup Stránky

**Druh:**
 *HTML template — v průběhu buildu **statické*** ([defined@agendaMyStory3.sub.html:1](../app_src/html/organisms/Conference/agendaMyStory3.sub.html#L1))
  
  
___

### **agendaMyStory4and5** <a name="nav_stránky-konference-popup-stránky-agendamystory4and5"></a>
> Zobrazení My Story k dané položce v agendě viz [pp_ConferenceAgenda](#nav_stránky-konference-pp_conferenceagenda)

**Kategorie:**
 Stránky/Konference/Popup Stránky

**Druh:**
 *HTML template — v průběhu buildu **statické*** ([defined@agendaMyStory4and5.sub.html:1](../app_src/html/organisms/Conference/agendaMyStory4and5.sub.html#L1))
  
  
___

### **agendaNotes** <a name="nav_stránky-konference-popup-stránky-agendanotes"></a>
> Poznámka k položce v agendě viz [pp_ConferenceAgenda](#nav_stránky-konference-pp_conferenceagenda)

**Kategorie:**
 Stránky/Konference/Popup Stránky

**Druh:**
 *HTML template — v průběhu buildu **statické*** ([defined@agendaNotes.sub.html:1](../app_src/html/organisms/Conference/agendaNotes.sub.html#L1))
  
  
___

### **agendaNSA** <a name="nav_stránky-konference-popup-stránky-agendansa"></a>
> Zobrazení `NSA` aktivity k dané položce v agendě viz [pp_ConferenceAgenda](#nav_stránky-konference-pp_conferenceagenda)

**Kategorie:**
 Stránky/Konference/Popup Stránky

**Druh:**
 *HTML template — v průběhu buildu **statické*** ([defined@agendaNSA.sub.html:1](../app_src/html/organisms/Conference/agendaNSA.sub.html#L1))
  
  
___

### **agendaUpward** <a name="nav_stránky-konference-popup-stránky-agendaupward"></a>
> Zobrazení `Upward` aktivity k dané položce v agendě viz [pp_ConferenceAgenda](#nav_stránky-konference-pp_conferenceagenda)

**Kategorie:**
 Stránky/Konference/Popup Stránky

**Druh:**
 *HTML template — v průběhu buildu **statické*** ([defined@agendaUpward.sub.html:1](../app_src/html/organisms/Conference/agendaUpward.sub.html#L1))
  
  
___

### **pp_ConferenceAgenda** <a name="nav_stránky-konference-pp_conferenceagenda"></a>
> Agenda současné konference

**Kategorie:**
 Stránky/Konference

**Druh:**
 *HTML template — v průběhu buildu **dynamické*** ([defined@pp_ConferenceAgenda.sub.html:1](../app_src/html/organisms/Conference/pp_ConferenceAgenda.sub.html#L1))

**Využívá:**
 - [Navigace/page_header_nav](#nav_navigace-page_header_nav)
 
  
___

### **pp_ConferenceInfo** <a name="nav_stránky-konference-pp_conferenceinfo"></a>
> Infromace o současné konferenci

**Kategorie:**
 Stránky/Konference

**Druh:**
 *HTML template — v průběhu buildu **dynamické*** ([defined@pp_ConferenceInfo.sub.html:1](../app_src/html/organisms/Conference/pp_ConferenceInfo.sub.html#L1))

**Využívá:**
 - [Navigace/page_header_nav](#nav_navigace-page_header_nav)
 
  
___

### **pp_ConferenceInfoVenueMap** <a name="nav_stránky-konference-pp_conferenceinfovenuemap"></a>
> Stránka s mapou pro konkrétní konferenci (podstránka [pp_Conference_Information](#nav_stránky-konference-pp_conference_information)).

**Kategorie:**
 Stránky/Konference

**Druh:**
 *HTML template — v průběhu buildu **dynamické*** ([defined@pp_ConferenceInfoVenueMap.sub.html:1](../app_src/html/organisms/Conference/pp_ConferenceInfoVenueMap.sub.html#L1))

**Využívá:**
 - [Molekuly/Header/header](#nav_molekuly-header-header)
- [Atomy/events_subheader](#nav_atomy-events_subheader)
 
  
___

### **pp_AppUser** <a name="nav_stránky-home-pp_appuser"></a>
> Profilová stránka uživatele aplikace

**Kategorie:**
 Stránky/Home

**Druh:**
 *HTML template — v průběhu buildu **dynamické*** ([defined@pp_AppUser.sub.html:1](../app_src/html/organisms/Home/pp_AppUser.sub.html#L1))

**Využívá:**
 - [Navigace/page_header_nav](#nav_navigace-page_header_nav)
- [Atomy/Část stránky/info_section](#nav_atomy-část-stránky-info_section)
 
  
___

### **pp_AppUserEdit** <a name="nav_stránky-home-pp_appuseredit"></a>
> Profilová stránka uživatele aplikace

**Kategorie:**
 Stránky/Home

**Druh:**
 *HTML template — v průběhu buildu **dynamické*** ([defined@pp_AppUserEdit.sub.html:1](../app_src/html/organisms/Home/pp_AppUserEdit.sub.html#L1))

**Využívá:**
 - [Navigace/page_header_nav](#nav_navigace-page_header_nav)
- [Atomy/Formuláře/basic_textarea](#nav_atomy-formuláře-basic_textarea)
- [Atomy/Formuláře/fiedset_text](#nav_atomy-formuláře-fiedset_text)
 
  
___

### **pp_Menu** <a name="nav_stránky-menu-pp_menu"></a>
> Možnosti změny hesla, odhlášení, ….

**Kategorie:**
 Stránky/Menu

**Druh:**
 *HTML template — v průběhu buildu **dynamické*** ([defined@pp_Menu.sub.html:1](../app_src/html/organisms/Home/pp_Menu.sub.html#L1))

**Využívá:**
 - [Navigace/page_header_nav](#nav_navigace-page_header_nav)
 
  
___

### **pp_MenuChangePassword** <a name="nav_stránky-menu-pp_menuchangepassword"></a>
> Stránka pro změnu hesla

**Kategorie:**
 Stránky/Menu

**Druh:**
 *HTML template — v průběhu buildu **dynamické*** ([defined@pp_MenuChangePassword.sub.html:1](../app_src/html/organisms/Home/pp_MenuChangePassword.sub.html#L1))

**Využívá:**
 - [Navigace/page_header_nav](#nav_navigace-page_header_nav)
 
  
___

### **pp_MenuFingerprint** <a name="nav_stránky-menu-pp_menufingerprint"></a>
> Stránka pro nastavení přihlašování pomocí biometrických údajů

**Kategorie:**
 Stránky/Menu

**Druh:**
 *HTML template — v průběhu buildu **statické*** ([defined@pp_MenuFingerprint.sub.html:1](../app_src/html/organisms/Home/pp_MenuFingerprint.sub.html#L1))
  
  
___

### **pp_Welcome** <a name="nav_stránky-pp_welcome"></a>
> Info Stránka

**Kategorie:**
 Stránky

**Druh:**
 *HTML template — v průběhu buildu **dynamické*** ([defined@pp_Welcome.sub.html:1](../app_src/html/organisms/Home/pp_Welcome.sub.html#L1))

**Využívá:**
 - [Navigace/page_header_nav](#nav_navigace-page_header_nav)
 
  
___

### **pp_People** <a name="nav_stránky-lidi-pp_people"></a>
> Seznam účastníků

**Kategorie:**
 Stránky/Lidi

**Druh:**
 *HTML template — v průběhu buildu **dynamické*** ([defined@pp_People.sub.html:1](../app_src/html/organisms/People/pp_People.sub.html#L1))

**Využívá:**
 - [Navigace/page_header_nav](#nav_navigace-page_header_nav)
 
  
___

### **pp_PeopleProfile** <a name="nav_stránky-lidi-pp_peopleprofile"></a>
> Profilová stránka člověka ze seznamu

**Kategorie:**
 Stránky/Lidi

**Druh:**
 *HTML template — v průběhu buildu **dynamické*** ([defined@pp_PeopleProfile.sub.html:1](../app_src/html/organisms/People/pp_PeopleProfile.sub.html#L1))

**Využívá:**
 - [Navigace/page_header_nav](#nav_navigace-page_header_nav)
- [Atomy/Část stránky/info_section](#nav_atomy-část-stránky-info_section)
 
  
___

### **popupInternet** <a name="nav_stránky-utility-popupinternet"></a>
> Vyskakovací okno primárně pro 'internetové' notifikace

**Kategorie:**
 Stránky/Utility

**Druh:**
 *HTML template — v průběhu buildu **statické*** ([defined@popupInternet.sub.html:1](../app_src/html/organisms/PopUps/popupInternet.sub.html#L1))
  
  
___

### **popupPictureSelector** <a name="nav_stránky-utility-popuppictureselector"></a>
> Vyskakovací okno pro výběr fotografií

**Kategorie:**
 Stránky/Utility

**Druh:**
 *HTML template — v průběhu buildu **statické*** ([defined@popupPictureSelector.sub.html:1](../app_src/html/organisms/PopUps/popupPictureSelector.sub.html#L1))
  
  
___

### **popupSmall** <a name="nav_stránky-utility-popupsmall"></a>
> Vyskakovací okno primárně pro 'malé' notifikace

**Kategorie:**
 Stránky/Utility

**Druh:**
 *HTML template — v průběhu buildu **statické*** ([defined@popupSmall.sub.html:1](../app_src/html/organisms/PopUps/popupSmall.sub.html#L1))
  
  
___