# Dokumentace API

Dotazy jsou volány z [**JavaScript**ové části](./javascript.md).

## Struktura
- **Zpětná vazba** <a name="nav_zpětná-vazba"></a>

    - **[get_feedbacks_answers](#nav_zpětná-vazba-get_feedbacks_answers)** *(statické)*

        Vrací pole všech záznamů z tabulky `$__DB__feedbacks_answers` pro daného uživatele (dle `hash`e).

    - **[set_feedbacks_answers](#nav_zpětná-vazba-set_feedbacks_answers)** *(statické)*

        Zapíše odpovědi na daný feedback.

- **Uživatelé** <a name="nav_uživatelé"></a>

    - **[set_user](#nav_uživatelé-set_user)** *(statické)*

        Editace profilu uživatele.

- **Utility** <a name="nav_utility"></a>

    - **[conferencesIDsPerUser](#nav_utility-conferencesidsperuser)** *(dynamické)*

        Kontrola, zda se uživatel může přihlásit (je na nějaké konferenci).

    - **[conferencesPerUser](#nav_utility-conferencesperuser)** *(statické)*

        Vrací Query dotaz na konference k danému uživateli.

- **Přihlašování** <a name="nav_přihlašování"></a>

    - **[forget_password](#nav_přihlašování-forget_password)** *(statické)*

        Odešle email s novým heslem.

    - **[login](#nav_přihlašování-login)** *(dynamické)*

        Přihlášení uživatele. Výstup záleží na úspěchu => zatím neuplná dokumentace.

    - **[login-touch](#nav_přihlašování-login-touch)** *(statické)*

        Společná část pro login/touch.

    - **[set_password](#nav_přihlašování-set_password)** *(statické)*

        Nastavení hesla uživatele.

    - **[touch](#nav_přihlašování-touch)** *(dynamické)*

        Přihlášení uživatele. Výstup záleží na úspěchu => zatím neuplná dokumentace.

- **People** <a name="nav_people"></a>

    - **[get_attendances](#nav_people-get_attendances)** *(statické)*

        Vrací pole lidí svázaných s konferencemi svázanými s aktuálním uživatelem.

    - **[get_qr_activity](#nav_people-get_qr_activity)** *(statické)*

        Vrací pole lidí svázaných s konferencemi svázanými s aktuálním uživatelem.

    - **[get_user](#nav_people-get_user)** *(statické)*

        Vrací informace o hledanem uzivateli.

    - **[get_users](#nav_people-get_users)** *(statické)*

        Vrací pole lidí, které souvisí s aktuálním uživatelem.

- **Obecné** <a name="nav_obecné"></a>

    - **[upload_photo](#nav_obecné-upload_photo)** *(statické)*

        Společný kód pro upload všech fotek.

- **Konference** <a name="nav_konference"></a>

    - **[get_agendas](#nav_konference-get_agendas)** *(statické)*

        Vrací agendu, která souvisí s aktuálním uživatelem.

    - **[get_conferences](#nav_konference-get_conferences)** *(dynamické)*

        Vrací konference pro daného uživatele.

    - **[get_note_agenda](#nav_konference-get_note_agenda)** *(statické)*

        Vrací moji poznámku k agendě.

    - **[set_note_agenda](#nav_konference-set_note_agenda)** *(statické)*

        Zapíše moji poznámku pro položku v agendě. (pokud starší přidá se za záznam z DB, jinak se přepisuje)

- **Kernel** <a name="nav_kernel"></a>

    - **AnnouncementsReactionsInfos** <a name="nav_kernel"></a>

        - **[getReactionsCountFor](#nav_kernel-announcementsreactionsinfos)** *(statické)*

            Vrací celkový počet liků/komentářů. Zda liky/komentáře dle argumentu `$type`

        - **[getReactionsFor](#nav_kernel-announcementsreactionsinfos)** *(statické)*

            Vrací zda uživatel likoval/komentoval a celkový počet liků/komentářů. Zda liky/komentáře dle argumentu `$type`

    - **UserAsAuthorInfo** <a name="nav_kernel"></a>

        - **[fromUserID](#nav_kernel-userasauthorinfo)** *(statické)*

            Statická metoda statické třídy `UserAsAuthorInfo` pro vygenerování pole

- **Announcements** <a name="nav_announcements"></a>

    - **[get_announcement_comments](#nav_announcements-get_announcement_comments)** *(statické)*

        Vrací pole komentářů k danému článku.

    - **[get_announcements](#nav_announcements-get_announcements)** *(statické)*

        Vrací pole novinek pro stránku `pp_Announcements`.

    - **[set_announcements_comment](#nav_announcements-set_announcements_comment)** *(statické)*

        Přidává komentář daného uživatele k vybranému článku.

    - **[set_announcements_comments](#nav_announcements-set_announcements_comments)** *(statické)*

        Přidává komentář daného uživatele k vybranému článku.

    - **[set_announcements_like](#nav_announcements-set_announcements_like)** *(statické)*

        Přidává/Maže srdíčko daného uživatele k vybranému článku.



___

## Jednotlivé komponenty

Dle pořadí souborů.

### **get_feedbacks_answers** <a name="nav_zpětná-vazba-get_feedbacks_answers"></a>
> Vrací pole všech záznamů z tabulky `$__DB__feedbacks_answers` pro daného uživatele (dle `hash`e).

**Kategorie:**
 Zpětná vazba

**Druh:**
 *veřejně přístupné přes **POST** jako `action="get_feedbacks_answers"`.* ([defined@get_feedbacks_answers.php:3](../web/api/get_feedbacks_answers.php#L3))
  
**Parametry** (použít jako **POST** klíče):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `hash` | ``String`` | Identifikátor uživatele |  
| `last_sync` | `SQL TIMESTAMP` | Poslední synchronizace |  
| `form_filter` | `string` | Pokud nastaveno vyfiltruje jen odpovedi na dany formular |  
| `conference_filter` | `number` | Pokud nastaveno vyfiltruje jen odpovedi pro danou konferenci |   
 

**Vrací** (`JSON` objekt s klíči):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `success` | ``Number`` | Vrací `0` (neúspěch), `1` (**úspěch**), `2` (neúspěch s hláškou). |  
| `last_sync` | ``SQL TIMESTAMP`` | Časové razítko synchronizace. |  
| `feedbacks` | `Array.<Object>` | Objekty s klíči viz `$_DB_feedbacks_cols` |   
___

### **set_feedbacks_answers** <a name="nav_zpětná-vazba-set_feedbacks_answers"></a>
> Zapíše odpovědi na daný feedback.

**Kategorie:**
 Zpětná vazba

**Druh:**
 *veřejně přístupné přes **POST** jako `action="set_feedbacks_answers"`.* ([defined@set_feedbacks_answers.php:3](../web/api/set_feedbacks_answers.php#L3))
  
**Parametry** (použít jako **POST** klíče):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `hash` | ``String`` | Identifikátor uživatele |  
| `id_conference` | `Integer` | IDčko konference |  
| `form` | `String` | IDčko feedbacku |  
| `answer` | `String` | JSON pole odpovědí |   
 
 
___

### **upload_photo** <a name="nav_obecné-upload_photo"></a>
> Společný kód pro upload všech fotek.

**Kategorie:**
 Obecné

**Druh:**
 *veřejně přístupné přes **POST** jako `action="upload_photo"`.* ([defined@upload_photo.php:3](../web/api/upload_photo.php#L3))
  
**Parametry** (použít jako **POST** klíče):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `hash` | ``String`` | Identifikátor uživatele |  
| `file` | `FILE` | Fotografie |  
| `type` | `Number` | Typ ukládané fotografie:<br>&nbsp;&nbsp;- `3`: poznamka k agende<br>&nbsp;&nbsp;- `5`: profilova fotka uzivatele |   
 
 
___

### **get_announcements** <a name="nav_announcements-get_announcements"></a>
> Vrací pole novinek pro stránku `pp_Announcements`.

**Kategorie:**
 Announcements

**Druh:**
 *veřejně přístupné přes **POST** jako `action="get_announcements"`.* ([defined@get_announcements.php:3](../web/api/Announcements/get_announcements.php#L3))
  
**Parametry** (použít jako **POST** klíče):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `last_sync` | ``SQL TIMESTAMP`` | Poslední synchronizace |  
| `skip` | `number` | Kolik článků přeskočit od `last_sync` |   
 

**Vrací** (`JSON` objekt s klíči):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `success` | ``Number`` | Vrací `0` (neúspěch), `1` (**úspěch**), `2` (neúspěch s hláškou). |  
| `last_sync` | ``SQL TIMESTAMP`` | Časové razítko synchronizace. |  
| ``announcements`` | `Array.<DB_ROW>` | Pole článků |   
___

### **get_announcement_comments** <a name="nav_announcements-get_announcement_comments"></a>
> Vrací pole komentářů k danému článku.

**Kategorie:**
 Announcements

**Druh:**
 *veřejně přístupné přes **POST** jako `action="get_announcement_comments"`.* ([defined@get_announcement_comments.php:3](../web/api/Announcements/get_announcement_comments.php#L3))
  
**Parametry** (použít jako **POST** klíče):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `last_sync` | ``SQL TIMESTAMP`` | Poslední synchronizace |  
| `id_announcement` | `number` | IDčko článku |   
 

**Vrací** (`JSON` objekt s klíči):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `success` | ``Number`` | Vrací `0` (neúspěch), `1` (**úspěch**), `2` (neúspěch s hláškou). |  
| `last_sync` | ``SQL TIMESTAMP`` | Časové razítko synchronizace. |  
| ``comments`` | `Array.<DB_ROW>` | Pole komentářů |   
___

### **set_announcements_comment** <a name="nav_announcements-set_announcements_comment"></a>
> Přidává komentář daného uživatele k vybranému článku.

**Kategorie:**
 Announcements

**Druh:**
 *veřejně přístupné přes **POST** jako `action="set_announcements_comment"`.* ([defined@set_announcements_comment.php:3](../web/api/Announcements/set_announcements_comment.php#L3))
  
**Parametry** (použít jako **POST** klíče):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `last_sync` | ``SQL TIMESTAMP`` | Poslední synchronizace |  
| `id` | `number` | IDčko Announcementu |   
 

**Vrací** (`JSON` objekt s klíči):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `success` | ``Number`` | Vrací `0` (neúspěch), `1` (**úspěch**), `2` (neúspěch s hláškou). |  
| `last_sync` | ``SQL TIMESTAMP`` | Časové razítko synchronizace. |  
| ``i_commented`` | `Boolean` | Zda jsem právě přidal komentář. Tedy vlastně asi vždy pravda. |  
| ``commentes_count`` | `Number` | Celkový počet komentářů |   
___

### **set_announcements_comments** <a name="nav_announcements-set_announcements_comments"></a>
> Přidává komentář daného uživatele k vybranému článku.

**Kategorie:**
 Announcements

**Druh:**
 *veřejně přístupné přes **POST** jako `action="set_announcements_comments"`.* ([defined@set_announcements_comments.php:3](../web/api/Announcements/set_announcements_comments.php#L3))
  
**Parametry** (použít jako **POST** klíče):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `last_sync` | ``SQL TIMESTAMP`` | Poslední synchronizace |  
| `id` | `number` | IDčko Announcementu |   
 

**Vrací** (`JSON` objekt s klíči):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `success` | ``Number`` | Vrací `0` (neúspěch), `1` (**úspěch**), `2` (neúspěch s hláškou). |  
| `last_sync` | ``SQL TIMESTAMP`` | Časové razítko synchronizace. |  
| ``i_commented`` | `Boolean` | Zda jsem právě přidal komentář. Tedy vlastně asi vždy pravda. |  
| ``commentes_count`` | `Number` | Celkový počet komentářů |   
___

### **set_announcements_like** <a name="nav_announcements-set_announcements_like"></a>
> Přidává/Maže srdíčko daného uživatele k vybranému článku.

**Kategorie:**
 Announcements

**Druh:**
 *veřejně přístupné přes **POST** jako `action="set_announcements_like"`.* ([defined@set_announcements_like.php:3](../web/api/Announcements/set_announcements_like.php#L3))
  
**Parametry** (použít jako **POST** klíče):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `last_sync` | ``SQL TIMESTAMP`` | Poslední synchronizace |  
| `id` | `number` | IDčko Announcementu |   
 

**Vrací** (`JSON` objekt s klíči):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `success` | ``Number`` | Vrací `0` (neúspěch), `1` (**úspěch**), `2` (neúspěch s hláškou). |  
| `last_sync` | ``SQL TIMESTAMP`` | Časové razítko synchronizace. |  
| ``i_like`` | `Boolean` | Zda jsem právě přidal srdíčko |  
| ``likes_count`` | `Number` | Celkový počet srdíček |   
___

### **forget_password** <a name="nav_přihlašování-forget_password"></a>
> Odešle email s novým heslem.

**Kategorie:**
 Přihlašování

**Druh:**
 *veřejně přístupné přes **POST** jako `action="forget_password"`.* ([defined@forget_password.php:2](../web/api/AppStart/forget_password.php#L2))
  
**Parametry** (použít jako **POST** klíče):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `email` | `String` | email uzivatele |   
 
 
___

### **login-touch** <a name="nav_přihlašování-login-touch"></a>
> Společná část pro login/touch.

**Kategorie:**
 Přihlašování

**Druh:**
 *pomocný script* ([defined@inc.login-touch.php:2](../web/api/AppStart/inc.login-touch.php#L2))
  
 
 

**Vrací** (`JSON` objekt s klíči):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `success` | ``Number`` | Vrací `0` (neúspěch), `1` (**úspěch**), `2` (neúspěch s hláškou). |  
| `last_sync` | ``SQL TIMESTAMP`` | Časové razítko synchronizace. |  
| `user` | `Object` | Záznam z tabulky `_cll_users` |  
| `conferences` | `Array.<String>` | Pole IDček konferencí z `_cll_conferences` pro daného uživatele |   
___

### **login** <a name="nav_přihlašování-login"></a>
> Přihlášení uživatele. Výstup záleží na úspěchu => zatím neuplná dokumentace.

**Kategorie:**
 Přihlašování

**Druh:**
 *veřejně přístupné přes **POST** jako `action="login"`.* ([defined@login.php:2](../web/api/AppStart/login.php#L2))

**Využívá:**
 - [Přihlašování/inc.login-touch](#nav_přihlašování-inc-login-touch)
 
**Parametry** (použít jako **POST** klíče):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `email` | `String` | email uzivatele |  
| `password` | `String` | SHA256 zahashovane heslo **NEBO** prázdné (první přihlášení) |   
 
 
___

### **set_password** <a name="nav_přihlašování-set_password"></a>
> Nastavení hesla uživatele.

**Kategorie:**
 Přihlašování

**Druh:**
 *veřejně přístupné přes **POST** jako `action="set_password"`.* ([defined@set_password.php:3](../web/api/AppStart/set_password.php#L3))
  
**Parametry** (použít jako **POST** klíče):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `password` | `String` | sha256 verze hesla |   
 
 
___

### **touch** <a name="nav_přihlašování-touch"></a>
> Přihlášení uživatele. Výstup záleží na úspěchu => zatím neuplná dokumentace.

**Kategorie:**
 Přihlašování

**Druh:**
 *veřejně přístupné přes **POST** jako `action="touch"`.* ([defined@touch.php:2](../web/api/AppStart/touch.php#L2))

**Využívá:**
 - [Přihlašování/inc.login-touch](#nav_přihlašování-inc-login-touch)
 
**Parametry** (použít jako **POST** klíče):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `hash` | ``String`` | Identifikátor uživatele |  
 
 
 
___

### **get_agendas** <a name="nav_konference-get_agendas"></a>
> Vrací agendu, která souvisí s aktuálním uživatelem.

**Kategorie:**
 Konference

**Druh:**
 *veřejně přístupné přes **POST** jako `action="get_agendas"`.* ([defined@get_agendas.php:3](../web/api/Conference/get_agendas.php#L3))
  
**Parametry** (použít jako **POST** klíče):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `hash` | ``String`` | Identifikátor uživatele |  
| `last_sync` | ``SQL TIMESTAMP`` | Poslední synchronizace |  
| ``id_conference`` | `I` | D |   
 

**Vrací** (`JSON` objekt s klíči):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `success` | ``Number`` | Vrací `0` (neúspěch), `1` (**úspěch**), `2` (neúspěch s hláškou). |  
| `last_sync` | ``SQL TIMESTAMP`` | Časové razítko synchronizace. |  
| ``agendas`` | `Array.<DB_ROW>` | Agenda |   
___

### **get_conferences** <a name="nav_konference-get_conferences"></a>
> Vrací konference pro daného uživatele.

**Kategorie:**
 Konference

**Druh:**
 *veřejně přístupné přes **POST** jako `action="get_conferences"`.* ([defined@get_conferences.php:3](../web/api/Conference/get_conferences.php#L3))

**Využívá:**
 - [Utility/conferencesPerUser](#nav_utility-conferencesperuser)
 
**Parametry** (použít jako **POST** klíče):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `hash` | ``String`` | Identifikátor uživatele |  
| `last_sync` | ``SQL TIMESTAMP`` | Poslední synchronizace |  
 
 

**Vrací** (`JSON` objekt s klíči):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `success` | ``Number`` | Vrací `0` (neúspěch), `1` (**úspěch**), `2` (neúspěch s hláškou). |  
| `last_sync` | ``SQL TIMESTAMP`` | Časové razítko synchronizace. |  
| ``conferences`` | `Array.<DB_ROW>` | Pole změněných konferencích pro daného uživatele |   
___

### **get_note_agenda** <a name="nav_konference-get_note_agenda"></a>
> Vrací moji poznámku k agendě.

**Kategorie:**
 Konference

**Druh:**
 *veřejně přístupné přes **POST** jako `action="get_note_agenda"`.* ([defined@get_note_agenda.php:3](../web/api/Conference/get_note_agenda.php#L3))
  
**Parametry** (použít jako **POST** klíče):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `hash` | ``String`` | Identifikátor uživatele |  
| `last_sync` | ``SQL TIMESTAMP`` | Poslední synchronizace |  
| `last_sync` | `SQL TIMESTAMP` | Poslední synchronizace |  
| `id` | `Number` | IDčko položky v agendě |   
 

**Vrací** (`JSON` objekt s klíči):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `success` | ``Number`` | Vrací `0` (neúspěch), `1` (**úspěch**), `2` (neúspěch s hláškou). |  
| `last_sync` | ``SQL TIMESTAMP`` | Časové razítko synchronizace. |  
| `note` | `DB_ROW` | Záznam z tabulky se sloupci:<br>&nbsp;&nbsp;`id`: IDčko položky v agendě<br>&nbsp;&nbsp;`note`: Tělo poznámky<br>&nbsp;&nbsp;`photos`: JSON pole relativních cest k fotkám<br>&nbsp;&nbsp;`updated`: SQL Timestamp |   
___

### **set_note_agenda** <a name="nav_konference-set_note_agenda"></a>
> Zapíše moji poznámku pro položku v agendě. (pokud starší přidá se za záznam z DB, jinak se přepisuje)

**Kategorie:**
 Konference

**Druh:**
 *veřejně přístupné přes **POST** jako `action="set_note_agenda"`.* ([defined@set_note_agenda.php:3](../web/api/Conference/set_note_agenda.php#L3))
  
**Parametry** (použít jako **POST** klíče):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `hash` | ``String`` | Identifikátor uživatele |  
| `last_sync` | ``SQL TIMESTAMP`` | Poslední synchronizace |  
| `id` | `Number` | IDčko položky v agendě |  
| `note` | `String` | Text poznámky |  
| `photos` | `String` | JSON pole názvů fotek |  
| `updated` | `SQL TIMESTAMP` | Datup pro porovnání stáří poznámky |   
 
 
___

### **set_user** <a name="nav_uživatelé-set_user"></a>
> Editace profilu uživatele.

**Kategorie:**
 Uživatelé

**Druh:**
 *veřejně přístupné přes **POST** jako `action="set_user"`.* ([defined@set_user.php:3](../web/api/Home/set_user.php#L3))
  
**Parametry** (použít jako **POST** klíče):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `hash` | ``String`` | Identifikátor uživatele |  
| `list` | `String` | JSON pole s nastavením |   
 
 
___

### **get_attendances** <a name="nav_people-get_attendances"></a>
> Vrací pole lidí svázaných s konferencemi svázanými s aktuálním uživatelem.

**Kategorie:**
 People

**Druh:**
 *veřejně přístupné přes **POST** jako `action="get_attendances"`.* ([defined@get_attendances.php:3](../web/api/People/get_attendances.php#L3))
  
**Parametry** (použít jako **POST** klíče):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `last_sync` | ``SQL TIMESTAMP`` | Poslední synchronizace |  
 
 
 
___

### **get_qr_activity** <a name="nav_people-get_qr_activity"></a>
> Vrací pole lidí svázaných s konferencemi svázanými s aktuálním uživatelem.

**Kategorie:**
 People

**Druh:**
 *veřejně přístupné přes **POST** jako `action="get_qr_activity"`.* ([defined@get_qr_activity.php:3](../web/api/People/get_qr_activity.php#L3))
  
**Parametry** (použít jako **POST** klíče):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `last_sync` | ``SQL TIMESTAMP`` | Poslední synchronizace |  
 
 
 
___

### **get_user** <a name="nav_people-get_user"></a>
> Vrací informace o hledanem uzivateli.

**Kategorie:**
 People

**Druh:**
 *veřejně přístupné přes **POST** jako `action="get_user"`.* ([defined@get_user.php:3](../web/api/People/get_user.php#L3))
  
**Parametry** (použít jako **POST** klíče):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `last_sync` | ``SQL TIMESTAMP`` | Poslední synchronizace |  
| `id` | `Integer` | IDcko uzivatele |  
| `updated` | `SQL DATE` | Ulozeny `update` k uzivateli pri posledni synchronizaci, nebo nic |   
 

**Vrací** (`JSON` objekt s klíči):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `success` | ``Number`` | Vrací `0` (neúspěch), `1` (**úspěch**), `2` (neúspěch s hláškou). |  
| `last_sync` | ``SQL TIMESTAMP`` | Časové razítko synchronizace. |  
| ``user`` | `DB_ROW` | Dodatecne informace k uzivateli z `get_users`. |   
___

### **get_users** <a name="nav_people-get_users"></a>
> Vrací pole lidí, které souvisí s aktuálním uživatelem.

**Kategorie:**
 People

**Druh:**
 *veřejně přístupné přes **POST** jako `action="get_users"`.* ([defined@get_users.php:3](../web/api/People/get_users.php#L3))
  
**Parametry** (použít jako **POST** klíče):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `last_sync` | ``SQL TIMESTAMP`` | Poslední synchronizace |  
 
 

**Vrací** (`JSON` objekt s klíči):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `success` | ``Number`` | Vrací `0` (neúspěch), `1` (**úspěch**), `2` (neúspěch s hláškou). |  
| `last_sync` | ``SQL TIMESTAMP`` | Časové razítko synchronizace. |  
| ``users`` | `Array.<DB_ROW>` | Pole uživatelů |   
___

### **conferencesIDsPerUser** <a name="nav_utility-conferencesidsperuser"></a>
> Kontrola, zda se uživatel může přihlásit (je na nějaké konferenci).

**Kategorie:**
 Utility

**Druh:**
 *funkce/metoda* ([defined@inc.conferencesIDsPerUser.php:2](../web/api/utils/inc.conferencesIDsPerUser.php#L2))

**Využívá:**
 - [Utility/conferencesPerUser](#nav_utility-conferencesperuser)
 
**Parametry** (použít jako argumenty funkce):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| ``$user_row`` | `DB_ROW` | Řádek uživatele z `_cll_users`. |   
 
 
___

### **conferencesPerUser** <a name="nav_utility-conferencesperuser"></a>
> Vrací Query dotaz na konference k danému uživateli.

**Kategorie:**
 Utility

**Druh:**
 *funkce/metoda* ([defined@inc.conferencesPerUser.php:2](../web/api/utils/inc.conferencesPerUser.php#L2))
  
**Parametry** (použít jako argumenty funkce):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| ``$user_row`` | `DB_ROW` | Řádek uživatele z `_cll_users`. |  
| ``$cols`` | `Array.<String>` | Jména sloupců z `_cll_conferences`. |  
| ``$last_sync`` | ``SQL TIMESTAMP`` | Poslední synchronizace |   
 
 
___

### **AnnouncementsReactionsInfos/getReactionsFor** <a name="nav_kernel-announcementsreactionsinfos"></a>
> Vrací zda uživatel likoval/komentoval a celkový počet liků/komentářů. Zda liky/komentáře dle argumentu `$type`

**Kategorie:**
 Kernel

**Druh:**
 *funkce/metoda* ([defined@AnnouncementsReactionsInfos.php:20](../web/kernel/classes/AnnouncementsReactionsInfos.php#L20))
  
**Parametry** (použít jako argumenty funkce):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| ``$type`` | `String` | likes/comments |  
| ``$id_user`` | `Number` | IDčko uživatele |  
| ``$id_announcement`` | `Number` | IDčko přípsěvku |   

**Vrací**:

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `0` | `Boolean` | Uživatel reagoval (0/1) |  
| `1` | `Number` | Celkový počet reakcí (srdíčka/komentáře) |   
 
___

### **AnnouncementsReactionsInfos/getReactionsCountFor** <a name="nav_kernel-announcementsreactionsinfos"></a>
> Vrací celkový počet liků/komentářů. Zda liky/komentáře dle argumentu `$type`

**Kategorie:**
 Kernel

**Druh:**
 *funkce/metoda* ([defined@AnnouncementsReactionsInfos.php:46](../web/kernel/classes/AnnouncementsReactionsInfos.php#L46))
  
**Parametry** (použít jako argumenty funkce):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| ``$type`` | `String` | likes/comments |  
| ``$id_user`` | `Number` | IDčko uživatele |  
| ``$id_announcement`` | `Number` | IDčko přípsěvku |   

**Vrací**:

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `` | `Number` | Celkový počet reakcí (srdíčka/komentáře) |   
 
___

### **UserAsAuthorInfo/fromUserID** <a name="nav_kernel-userasauthorinfo"></a>
> Statická metoda statické třídy `UserAsAuthorInfo` pro vygenerování pole

**Kategorie:**
 Kernel

**Druh:**
 *funkce/metoda* ([defined@UserAsAuthorInfo.php:10](../web/kernel/classes/UserAsAuthorInfo.php#L10))
  
**Parametry** (použít jako argumenty funkce):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| ``$id_user`` | `String/Number` | Výstup z `cQuery`: tj. číslo -1,0?,1,2,3,… (-1= bez uživatele, nebo IDčko uživatele) |   

**Vrací**:

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| ``full_name`` | `string` | Jméno autora (jméno klíče dle `self::$full_name_key`) a vrací 'CLL News'/'Admin'/celé jméno uživatele. |  
| `[`thumb`]` | `string` | Pokud uživatel, obsahuje klíč relativní cestu k profilové fotky. |   
 
___