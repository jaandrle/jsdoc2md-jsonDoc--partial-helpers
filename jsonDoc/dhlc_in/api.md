# Dokumentace API

Dotazy jsou volány z [**JavaScript**ové části](./javascript.md).

## Struktura
- **Zpětná vazba** <a name="nav_zpětná-vazba"></a>

    - **[get_feedbacks](#nav_zpětná-vazba-get_feedbacks)** *(statické)*

        Vrací pole všech záznamů z tabulky `$__DB__feedbacks` — tj. jednotlivé položky feedbacků pro danou např. eventu/agendu.

    - **[get_feedbacks_answers](#nav_zpětná-vazba-get_feedbacks_answers)** *(statické)*

        Vrací pole všech záznamů z tabulky `$__DB__feedbacks_answers` pro daného uživatele (dle `hash`e).

    - **[get_feedbacks_results](#nav_zpětná-vazba-get_feedbacks_results)** *(statické)*

        Vrací pole výsledků pro danou zpětnou vazbu (viz `parent_type` a `paremt_id`).

    - **[set_feedbacks_answers](#nav_zpětná-vazba-set_feedbacks_answers)** *(statické)*

        Zapíše odpovědi na daný feedback.

- **Uživatelé** <a name="nav_uživatelé"></a>

    - **[get_note_user](#nav_uživatelé-get_note_user)** *(statické)*

        Vrací moji poznámku k jinému uživateli.

    - **[get_user](#nav_uživatelé-get_user)** *(statické)*

        Vrací detail uživatele.

    - **[get_users](#nav_uživatelé-get_users)** *(statické)*

        Vrací pole uživatelů. Některé sloupce se dodávají později, viz: [get_users_projects_info](#nav_staffing---projects-get_users_projects_info):

    - **[set_note_user](#nav_uživatelé-set_note_user)** *(statické)*

        Zapsání poznámku k uživateli.

    - **[set_user](#nav_uživatelé-set_user)** *(statické)*

        Editace profilu uživatele.

- **Staffing & Projects** <a name="nav_staffing---projects"></a>

    - **[get_projects](#nav_staffing---projects-get_projects)** *(dynamické)*

        Vrací pole projektů.

    - **[get_projects_notes](#nav_staffing---projects-get_projects_notes)** *(statické)*

        Vrací poznámky k projektům.

    - **[get_projects_staffing_pipeline](#nav_staffing---projects-get_projects_staffing_pipeline)** *(dynamické)*

        Vrací pole pipeline projektů a souvisejících staffingů bez *'Project Number'*.

    - **[get_staffing](#nav_staffing---projects-get_staffing)** *(dynamické)*

        Vrací pole staffingů.

    - **[get_users_projects_info](#nav_staffing---projects-get_users_projects_info)** *(dynamické)*

        Vrací pole uživatelů (resp. jejich `appFlashPosition`).

    - **[projects](#nav_staffing---projects-projects)** *(statické)*

        Společná část pro projekty.

    - **[set_projects_notes](#nav_staffing---projects-set_projects_notes)** *(statické)*

        Ukládání poznámky.

- **Přihlašování** <a name="nav_přihlašování"></a>

    - **[forget_password](#nav_přihlašování-forget_password)** *(statické)*

        Nastavení nového hesla a odeslání emailu.

    - **[get_login_token](#nav_přihlašování-get_login_token)** *(dynamické)*

        Vygenruje dočasný token pro pozdější příhlášení pomocí `login_token`.

    - **[login](#nav_přihlašování-login)** *(dynamické)*

        Přihlášení uživatele. Výstup záleží na úspěchu => zatím neuplná dokumentace.

    - **[login_token](#nav_přihlašování-login_token)** *(dynamické)*

        Příhlášení pomocí  tokenu z `get_login_token`.

    - **[login-touch](#nav_přihlašování-login-touch)** *(statické)*

        Společná část pro login/touch.

    - **[touch](#nav_přihlašování-touch)** *(dynamické)*

        Přihlášení uživatele. Výstup záleží na úspěchu => zatím neuplná dokumentace.

- **Obecné** <a name="nav_obecné"></a>

    - **[get_charts](#nav_obecné-get_charts)** *(statické)*

        Jen export z `$__DB__charts`.

    - **[get_search](#nav_obecné-get_search)** *(statické)*

        Vrací pole výsledků vyhledávání.

    - **[set_app_feedback](#nav_obecné-set_app_feedback)** *(statické)*

        Přida feedback na celou aplikaci.

    - **[set_notification](#nav_obecné-set_notification)** *(statické)*

        Přidává položky k deaktivaci (pro notifikace).

    - **[set_open_rates](#nav_obecné-set_open_rates)** *(statické)*

        Část sloužící pro ukládání _open rates_.

    - **[upload_photo](#nav_obecné-upload_photo)** *(statické)*

        Společný kód pro upload všech fotek.

- **KPI Wall** <a name="nav_kpi-wall"></a>

    - **[get_kpi_wall](#nav_kpi-wall-get_kpi_wall)** *(statické)*

        Vrací pole výsledků KPI. __zastaralé__

    - **[get_kpi_wall_results](#nav_kpi-wall-get_kpi_wall_results)** *(statické)*

        Vrací pole výsledků KPI.

    - **[get_kpi_wall_sections](#nav_kpi-wall-get_kpi_wall_sections)** *(statické)*

        Vrací hodnoty pro sekce v KPI modulu.

- **Konference** <a name="nav_konference"></a>

    - **[get_agenda](#nav_konference-get_agenda)** *(statické)*

        Vrací pole položek v agendě pro všechny konference.

    - **[get_attendance](#nav_konference-get_attendance)** *(statické)*

        Vrací pole lidí jdoucích na konferenci.

    - **[get_conference](#nav_konference-get_conference)** *(statické)*

        Vrací pole konferencí.

    - **[get_feedback_agenda](#nav_konference-get_feedback_agenda)** *(statické)*

        Vrací můj feedback k agendě.

    - **[get_note_agenda](#nav_konference-get_note_agenda)** *(statické)*

        Vrací moji poznámku k agendě.

    - **[set_conference_signup](#nav_konference-set_conference_signup)** *(statické)*

        Přihlášení na 'SignUp' eventu.

    - **[set_feedback_agenda](#nav_konference-set_feedback_agenda)** *(statické)*

        Zapíše moji zpětnou vazbu pro položku v agendě.

    - **[set_note_agenda](#nav_konference-set_note_agenda)** *(statické)*

        Zapíše moji poznámku pro položku v agendě.

- **Ideje a Iniciativy** <a name="nav_ideje-a-iniciativy"></a>

    - **[get_idea](#nav_ideje-a-iniciativy-get_idea)** *(statické)*

        Vrací řádek konkretné ideji z tabulky `$__DB__ideas`.

    - **[get_idea_reactions](#nav_ideje-a-iniciativy-get_idea_reactions)** *(statické)*

        Vrací 'reakce' k idejím (kometáře, týmy, sponzoři, …).

    - **[get_ideas](#nav_ideje-a-iniciativy-get_ideas)** *(statické)*

        Vrací pole všech nesmazaných idejí z `$__DB__ideas`. __V aplikaci se musí tabulka přemazávat.__

    - **[set_comment_ideas](#nav_ideje-a-iniciativy-set_comment_ideas)** *(statické)*

        Přidá komentař k idei.

    - **[set_idea](#nav_ideje-a-iniciativy-set_idea)** *(statické)*

        Vytvoření/aktualizace dané idee. Při poslání `status`u jej přejímá ⇢ lze tak vytvořit a rovnou publikovat ideu.

    - **[set_idea_delete](#nav_ideje-a-iniciativy-set_idea_delete)** *(statické)*

        Smazání idei (tj. `deleted=1`).

    - **[set_idea_dismiss](#nav_ideje-a-iniciativy-set_idea_dismiss)** *(statické)*

        Zamítnutí (`project_status=30`).

    - **[set_idea_sponsor_request](#nav_ideje-a-iniciativy-set_idea_sponsor_request)** *(statické)*

        Stare ke smazani viz #351

    - **[set_idea_status](#nav_ideje-a-iniciativy-set_idea_status)** *(statické)*

        Nastavení statusu a příslušný timestamt (viz `$date_col`).

    - **[set_idea_team_request](#nav_ideje-a-iniciativy-set_idea_team_request)** *(statické)*

        Stare ke smazani viz #351

    - **[set_initiative](#nav_ideje-a-iniciativy-set_initiative)** *(statické)*

        Updatuje iniciativu, nebo ji konvertuje z ideje (dle `type`).  Pri poslani statusu v `data` (viz dale) jej prejima => umoznuje tak vytvorit a rovnou publikovat iniciativu.  Pokud `data.status=3` (viz dale) a nastaven `data.project_sponsor` (pozustatek starych verzi) posila se notifikace.

    - **[set_like_ideas](#nav_ideje-a-iniciativy-set_like_ideas)** *(statické)*

        Změní stav srdíčka pro ideu

- **Flash Reporty** <a name="nav_flash-reporty"></a>

    - **[get_flash_project_timeline](#nav_flash-reporty-get_flash_project_timeline)** *(statické)*

        Vrací výsledky daného projektu dle jeho `id_unique` (projekt nebo typ specialniho projektu) a `date`.

    - **[get_flash_reports](#nav_flash-reporty-get_flash_reports)** *(statické)*

        Vrací výsledky flash reportů

    - **[get_flash_surveys](#nav_flash-reporty-get_flash_surveys)** *(statické)*

        Vrací surveys v aktuálním týdnu (vyplněné/k vyplnění)

    - **[get_flash_surveys_history](#nav_flash-reporty-get_flash_surveys_history)** *(statické)*

        Vrací vyplněné surveys pro daného uživatele (tj. které historicky vyplnil)

    - **[set_flash_survey](#nav_flash-reporty-set_flash_survey)** *(statické)*

        Ukládá výsledky daného projektu dle jeho `id`.

- **FAQ** <a name="nav_faq"></a>

    - **[get_faqs](#nav_faq-get_faqs)** *(statické)*

        Vrací pole všech FAQ z tabulek `$__DB__faq` (a `$__DB__faq_sections`).

    - **[get_faqs_reactions](#nav_faq-get_faqs_reactions)** *(statické)*

        Stare ke smazani viz #352

    - **[remove_comment_faq](#nav_faq-remove_comment_faq)** *(statické)*

        Stare ke smazani viz #352

    - **[set_comment_faq](#nav_faq-set_comment_faq)** *(statické)*

        Stare ke smazani viz #352

    - **[set_like_faq](#nav_faq-set_like_faq)** *(statické)*

        Stare ke smazani viz #352

    - **[set_mark_faq](#nav_faq-set_mark_faq)** *(statické)*

        Zaškrtnutí FAQ položky.



___

## Jednotlivé komponenty

Dle pořadí souborů.

### **forget_password** <a name="nav_přihlašování-forget_password"></a>
> Nastavení nového hesla a odeslání emailu.

**Kategorie:**
 Přihlašování

**Druh:**
 *veřejně přístupné přes **POST** jako `action="forget_password"`.* ([defined@forget_password.php:2](../../web/api/forget_password.php#L2))
  
**Parametry** (použít jako **POST** klíče):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `email` | `String` | Email uživatele |   
 
___

### **get_charts** <a name="nav_obecné-get_charts"></a>
> Jen export z `$__DB__charts`.

**Kategorie:**
 Obecné

**Druh:**
 *veřejně přístupné přes **POST** jako `action="get_charts"`.* ([defined@get_charts.php:3](../../web/api/get_charts.php#L3))
  
**Parametry** (použít jako **POST** klíče):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `hash` | ``String`` | Identifikátor uživatele |  
 

**Vrací** (`JSON` objekt s klíči):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `success` | ``Number`` | Vrací `0` (neúspěch), `1` (**úspěch**), `2` (neúspěch s hláškou). |  
| `charts` | `Array.<Object>` |  |   
___

### **get_feedbacks** <a name="nav_zpětná-vazba-get_feedbacks"></a>
> Vrací pole všech záznamů z tabulky `$__DB__feedbacks` — tj. jednotlivé položky feedbacků pro danou např. eventu/agendu.

**Kategorie:**
 Zpětná vazba

**Druh:**
 *veřejně přístupné přes **POST** jako `action="get_feedbacks"`.* ([defined@get_feedbacks.php:3](../../web/api/get_feedbacks.php#L3))
  
**Parametry** (použít jako **POST** klíče):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `hash` | ``String`` | Identifikátor uživatele |  
| `last_sync` | `SQL TIMESTAMP` | Poslední synchronizace |   

**Vrací** (`JSON` objekt s klíči):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `success` | ``Number`` | Vrací `0` (neúspěch), `1` (**úspěch**), `2` (neúspěch s hláškou). |  
| `feedbacks` | `Array.<Object>` | Objekty s klíči dle `$_DB_feedbacks_cols` |   
___

### **get_feedbacks_answers** <a name="nav_zpětná-vazba-get_feedbacks_answers"></a>
> Vrací pole všech záznamů z tabulky `$__DB__feedbacks_answers` pro daného uživatele (dle `hash`e).

**Kategorie:**
 Zpětná vazba

**Druh:**
 *veřejně přístupné přes **POST** jako `action="get_feedbacks_answers"`.* ([defined@get_feedbacks_answers.php:3](../../web/api/get_feedbacks_answers.php#L3))
  
**Parametry** (použít jako **POST** klíče):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `hash` | ``String`` | Identifikátor uživatele |  
| `last_sync` | `SQL TIMESTAMP` | Poslední synchronizace |   

**Vrací** (`JSON` objekt s klíči):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `success` | ``Number`` | Vrací `0` (neúspěch), `1` (**úspěch**), `2` (neúspěch s hláškou). |  
| `feedbacks` | `Array.<Object>` | Objekty s klíči viz `$_DB_feedbacks_cols` |   
___

### **get_feedbacks_results** <a name="nav_zpětná-vazba-get_feedbacks_results"></a>
> Vrací pole výsledků pro danou zpětnou vazbu (viz `parent_type` a `paremt_id`).

**Kategorie:**
 Zpětná vazba

**Druh:**
 *veřejně přístupné přes **POST** jako `action="get_feedbacks_results"`.* ([defined@get_feedbacks_results.php:3](../../web/api/get_feedbacks_results.php#L3))
  
**Parametry** (použít jako **POST** klíče):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `hash` | ``String`` | Identifikátor uživatele |  
| `parent_type` | `Number` | Rozlišení, zda se jedná o (zatím) feedback pro celou eventu, nebo konkrétní položku v agendě |  
| `parent_id` | `Number` | IDčko daného feedbacku |   

**Vrací** (`JSON` objekt s klíči):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `success` | ``Number`` | Vrací `0` (neúspěch), `1` (**úspěch**), `2` (neúspěch s hláškou). |  
| `feedbacks_results` | `Array.<Object>` | Pole polí (asociované pole) `array('type'<string>, 'title'<string>, ...)` dle typu:<br>&nbsp;&nbsp;... wordcloud (jen pouzita slova): `'answers'=> array( 'word'=> slovo<string>, 'count'=> pocet_odpovedi<number>, 'percent'=> vuci_vsem_co_odpovedeli<number> )`<br>&nbsp;&nbsp;... rating (i prazdne): `'median'=><number>, 'average'=><number>, 'answers'=> array( 'rating'=> pocet_hvezd<string>, 'count'=> <number>, 'percent'=> <number> )`<br>&nbsp;&nbsp;... yes_no (i prazdne): `'answers'=> array( 'rating'=> '0'=Yes/'1'=No<string>, 'count'=> <number>, 'percent'=> <number> )`<br>&nbsp;&nbsp;... free_text: 'answers'=> pole odpovedi array<string> |   
___

### **get_search** <a name="nav_obecné-get_search"></a>
> Vrací pole výsledků vyhledávání.

**Kategorie:**
 Obecné

**Druh:**
 *veřejně přístupné přes **POST** jako `action="get_search"`.* ([defined@get_search.php:3](../../web/api/get_search.php#L3))
  
**Parametry** (použít jako **POST** klíče):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `hash` | ``String`` | Identifikátor uživatele |  
| `last_sync` | `SQL TIMESTAMP` | Poslední synchronizace |  
| `search` | `String` | Hledaný výraz |   

**Vrací** (`JSON` objekt s klíči):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `success` | ``Number`` | Vrací `0` (neúspěch), `1` (**úspěch**), `2` (neúspěch s hláškou). |  
| `results` | `Array.<Object>` | Pole výsledků |  
| `update_needed` | `Object` | Boolean asociované pole, pro jednotlivé sekce, zda je nutné updatovat jednotlivé tabulky |   
___

### **set_app_feedback** <a name="nav_obecné-set_app_feedback"></a>
> Přida feedback na celou aplikaci.

**Kategorie:**
 Obecné

**Druh:**
 *veřejně přístupné přes **POST** jako `action="set_app_feedback"`.* ([defined@set_app_feedback.php:3](../../web/api/set_app_feedback.php#L3))
  
**Parametry** (použít jako **POST** klíče):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `hash` | ``String`` | Identifikátor uživatele |  
| `content` | `String` | Text příspěvku |  
| `photos` | `String` | JSON pole relativních cest k obrázkům |   
 
___

### **set_feedbacks_answers** <a name="nav_zpětná-vazba-set_feedbacks_answers"></a>
> Zapíše odpovědi na daný feedback.

**Kategorie:**
 Zpětná vazba

**Druh:**
 *veřejně přístupné přes **POST** jako `action="set_feedbacks_answers"`.* ([defined@set_feedbacks_answers.php:3](../../web/api/set_feedbacks_answers.php#L3))
  
**Parametry** (použít jako **POST** klíče):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `hash` | ``String`` | Identifikátor uživatele |  
| `id` | `Number` | IDčko feedbacku |  
| `answer` | `String` | JSON pole odpovědí |   
 
___

### **set_notification** <a name="nav_obecné-set_notification"></a>
> Přidává položky k deaktivaci (pro notifikace).

**Kategorie:**
 Obecné

**Druh:**
 *veřejně přístupné přes **POST** jako `action="set_notification"`.* ([defined@set_notification.php:3](../../web/api/set_notification.php#L3))
  
**Parametry** (použít jako **POST** klíče):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `hash` | ``String`` | Identifikátor uživatele |  
| `type` | `Number` | IDčko/typ notifikace: 0=Announcement, 1=GM Schedule, 2=Flash Report, … |  
| `active` | `Boolean` | `0`|`1` |   
 
___

### **set_open_rates** <a name="nav_obecné-set_open_rates"></a>
> Část sloužící pro ukládání _open rates_.

**Kategorie:**
 Obecné

**Druh:**
 *veřejně přístupné přes **POST** jako `action="set_open_rates"`.* ([defined@set_open_rates.php:3](../../web/api/set_open_rates.php#L3))
  
**Parametry** (použít jako **POST** klíče):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `hash` | ``String`` | Identifikátor uživatele |  
| `list` | `String` | JSON pole |   
 
___

### **upload_photo** <a name="nav_obecné-upload_photo"></a>
> Společný kód pro upload všech fotek.

**Kategorie:**
 Obecné

**Druh:**
 *veřejně přístupné přes **POST** jako `action="upload_photo"`.* ([defined@upload_photo.php:3](../../web/api/upload_photo.php#L3))
  
**Parametry** (použít jako **POST** klíče):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `hash` | ``String`` | Identifikátor uživatele |  
| `file` | `FILE` | Fotografie |  
| `type` | `Number` | Typ ukládané fotografie:<br>&nbsp;&nbsp;- `1`: aktivita<br>&nbsp;&nbsp;- `2`: clanek<br>&nbsp;&nbsp;- `3`: poznamka k agende<br>&nbsp;&nbsp;- `4`: poznamka k uzivateli<br>&nbsp;&nbsp;- `5`: profilova fotka uzivatele<br>&nbsp;&nbsp;- `6`: app feedback<br>&nbsp;&nbsp;- `7`: Ideas & Iniciatives |   
 
___

### **get_agenda** <a name="nav_konference-get_agenda"></a>
> Vrací pole položek v agendě pro všechny konference.

**Kategorie:**
 Konference

**Druh:**
 *veřejně přístupné přes **POST** jako `action="get_agenda"`.* ([defined@get_agenda.php:3](../../web/api/Events/get_agenda.php#L3))
  
**Parametry** (použít jako **POST** klíče):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `hash` | ``String`` | Identifikátor uživatele |  
| `last_sync` | `SQL TIMESTAMP` | Poslední synchronizace |   

**Vrací** (`JSON` objekt s klíči):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `success` | ``Number`` | Vrací `0` (neúspěch), `1` (**úspěch**), `2` (neúspěch s hláškou). |  
| `agenda` | `Array.<Object>` | Objekty s klíči (výběr):<br>&nbsp;&nbsp;  `title`: tbd<br>&nbsp;&nbsp;  `attachment`: `0`|`1` - je priloha?<br>&nbsp;&nbsp;  `activity`: `0`|`1` - je dokoncena aktivita?<br>&nbsp;&nbsp;  `feedback`: `0`|`1` - je dokoncen feedback?<br>&nbsp;&nbsp;  `note`: `0`|`1` - je poznamka? |   
___

### **get_attendance** <a name="nav_konference-get_attendance"></a>
> Vrací pole lidí jdoucích na konferenci.

**Kategorie:**
 Konference

**Druh:**
 *veřejně přístupné přes **POST** jako `action="get_attendance"`.* ([defined@get_attendance.php:3](../../web/api/Events/get_attendance.php#L3))
  
**Parametry** (použít jako **POST** klíče):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `hash` | ``String`` | Identifikátor uživatele |  
| `last_sync` | `SQL TIMESTAMP` | Poslední synchronizace |   

**Vrací** (`JSON` objekt s klíči):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `success` | ``Number`` | Vrací `0` (neúspěch), `1` (**úspěch**), `2` (neúspěch s hláškou). |  
| `attendance` | `Array.<Object>` | Objekty s klíči (výběr):<br>&nbsp;&nbsp;  `id`<br>&nbsp;&nbsp;  `id_user`<br>&nbsp;&nbsp;  `id_conference`<br>&nbsp;&nbsp;  `deleted` |   
___

### **get_conference** <a name="nav_konference-get_conference"></a>
> Vrací pole konferencí.

**Kategorie:**
 Konference

**Druh:**
 *veřejně přístupné přes **POST** jako `action="get_conference"`.* ([defined@get_conference.php:3](../../web/api/Events/get_conference.php#L3))
  
**Parametry** (použít jako **POST** klíče):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `hash` | ``String`` | Identifikátor uživatele |  
| `last_sync` | `SQL TIMESTAMP` | Poslední synchronizace |   

**Vrací** (`JSON` objekt s klíči):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `success` | ``Number`` | Vrací `0` (neúspěch), `1` (**úspěch**), `2` (neúspěch s hláškou). |  
| `conference` | `Array.<Object>` | Konkrétní položka závisí na typu konference, ale typicky obsahuje jméno, data, … |   
___

### **get_feedback_agenda** <a name="nav_konference-get_feedback_agenda"></a>
> Vrací můj feedback k agendě.

**Kategorie:**
 Konference

**Druh:**
 *veřejně přístupné přes **POST** jako `action="get_feedback_agenda"`.* ([defined@get_feedback_agenda.php:3](../../web/api/Events/get_feedback_agenda.php#L3))
  
**Parametry** (použít jako **POST** klíče):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `hash` | ``String`` | Identifikátor uživatele |  
| `last_sync` | `SQL TIMESTAMP` | Poslední synchronizace |  
| `id` | `Number` | IDčko položky v agendě |   

**Vrací** (`JSON` objekt s klíči):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `success` | ``Number`` | Vrací `0` (neúspěch), `1` (**úspěch**), `2` (neúspěch s hláškou). |  
| `words` | `Array.<String>` | Pole vybraných slov |  
| `questions` | `Array.<String>` | Pole 'hvězdiček' |   
___

### **get_note_agenda** <a name="nav_konference-get_note_agenda"></a>
> Vrací moji poznámku k agendě.

**Kategorie:**
 Konference

**Druh:**
 *veřejně přístupné přes **POST** jako `action="get_note_agenda"`.* ([defined@get_note_agenda.php:3](../../web/api/Events/get_note_agenda.php#L3))
  
**Parametry** (použít jako **POST** klíče):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `hash` | ``String`` | Identifikátor uživatele |  
| `last_sync` | `SQL TIMESTAMP` | Poslední synchronizace |  
| `id` | `Number` | IDčko položky v agendě |   

**Vrací** (`JSON` objekt s klíči):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `success` | ``Number`` | Vrací `0` (neúspěch), `1` (**úspěch**), `2` (neúspěch s hláškou). |  
| `note` | `String` | Text poznámky |  
| `photos` | `Array.<String>` | Pole relativních cest k fotografiím |   
___

### **set_conference_signup** <a name="nav_konference-set_conference_signup"></a>
> Přihlášení na 'SignUp' eventu.

**Kategorie:**
 Konference

**Druh:**
 *veřejně přístupné přes **POST** jako `action="set_conference_signup"`.* ([defined@set_conference_signup.php:3](../../web/api/Events/set_conference_signup.php#L3))
  
**Parametry** (použít jako **POST** klíče):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `hash` | ``String`` | Identifikátor uživatele |  
| `id_eventy` | `Number` | IDčko konference |  
| `i_signed` | `Boolean` | Zda se přihlašuji |   

**Vrací** (`JSON` objekt s klíči):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `success` | ``Number`` | Vrací `0` (neúspěch), `1` (**úspěch**), `2` (neúspěch s hláškou). |  
| `capacity` | `Array` | Tří prvkové pole: _volná kapacita_, _počet čekajících_, _celková kapacita_ |  
| `i_signed` | `Number` | `0`|`1`|`2`|`3`: typ 'jak'/zda jsem přihlášen |   
___

### **set_feedback_agenda** <a name="nav_konference-set_feedback_agenda"></a>
> Zapíše moji zpětnou vazbu pro položku v agendě.

**Kategorie:**
 Konference

**Druh:**
 *veřejně přístupné přes **POST** jako `action="set_feedback_agenda"`.* ([defined@set_feedback_agenda.php:3](../../web/api/Events/set_feedback_agenda.php#L3))
  
**Parametry** (použít jako **POST** klíče):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `hash` | ``String`` | Identifikátor uživatele |  
| `id` | `Number` | IDčko položky v agendě |  
| `words` | `String` | JSON pole hodnot |  
| `questions` | `String` | JSON pole hodnot |   
 
___

### **set_note_agenda** <a name="nav_konference-set_note_agenda"></a>
> Zapíše moji poznámku pro položku v agendě.

**Kategorie:**
 Konference

**Druh:**
 *veřejně přístupné přes **POST** jako `action="set_note_agenda"`.* ([defined@set_note_agenda.php:3](../../web/api/Events/set_note_agenda.php#L3))
  
**Parametry** (použít jako **POST** klíče):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `hash` | ``String`` | Identifikátor uživatele |  
| `id` | `Number` | IDčko položky v agendě |  
| `note` | `String` | Text poznámky |  
| `photos` | `String` | JSON pole názvů fotek |   
 
___

### **get_faqs** <a name="nav_faq-get_faqs"></a>
> Vrací pole všech FAQ z tabulek `$__DB__faq` (a `$__DB__faq_sections`).

**Kategorie:**
 FAQ

**Druh:**
 *veřejně přístupné přes **POST** jako `action="get_faqs"`.* ([defined@get_faqs.php:3](../../web/api/Faq/get_faqs.php#L3))
  
**Parametry** (použít jako **POST** klíče):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `hash` | ``String`` | Identifikátor uživatele |  
| `last_sync` | `SQL TIMESTAMP` | Poslední synchronizace |   

**Vrací** (`JSON` objekt s klíči):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `success` | ``Number`` | Vrací `0` (neúspěch), `1` (**úspěch**), `2` (neúspěch s hláškou). |  
| `faqs` | `Array.<Object>` | Pole všech FAQ |   
___

### **get_faqs_reactions** <a name="nav_faq-get_faqs_reactions"></a>
> Stare ke smazani viz #352

**Kategorie:**
 FAQ

**Druh:**
 *veřejně přístupné přes **POST** jako `action="get_faqs_reactions"`.* ([defined@get_faqs_reactions.php:3](../../web/api/Faq/get_faqs_reactions.php#L3))
  
**Parametry** (použít jako **POST** klíče):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `hash` | ``String`` | Identifikátor uživatele |  
 

**Vrací** (`JSON` objekt s klíči):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `success` | ``Number`` | Vrací `0` (neúspěch), `1` (**úspěch**), `2` (neúspěch s hláškou). |  
| `comments` | `Array.<Object>` | Komentáře: každá položka obsahuje `id`, `user`, `content` |  
| `likes` | `Array.<Number>` | Pole srdíček |   
___

### **remove_comment_faq** <a name="nav_faq-remove_comment_faq"></a>
> Stare ke smazani viz #352

**Kategorie:**
 FAQ

**Druh:**
 *veřejně přístupné přes **POST** jako `action="remove_comment_faq"`.* ([defined@remove_comment_faq.php:3](../../web/api/Faq/remove_comment_faq.php#L3))
  
**Parametry** (použít jako **POST** klíče):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `hash` | ``String`` | Identifikátor uživatele |  
 
 
___

### **set_comment_faq** <a name="nav_faq-set_comment_faq"></a>
> Stare ke smazani viz #352

**Kategorie:**
 FAQ

**Druh:**
 *veřejně přístupné přes **POST** jako `action="set_comment_faq"`.* ([defined@set_comment_faq.php:3](../../web/api/Faq/set_comment_faq.php#L3))
  
**Parametry** (použít jako **POST** klíče):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `hash` | ``String`` | Identifikátor uživatele |  
 
 
___

### **set_like_faq** <a name="nav_faq-set_like_faq"></a>
> Stare ke smazani viz #352

**Kategorie:**
 FAQ

**Druh:**
 *veřejně přístupné přes **POST** jako `action="set_like_faq"`.* ([defined@set_like_faq.php:3](../../web/api/Faq/set_like_faq.php#L3))
  
**Parametry** (použít jako **POST** klíče):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `hash` | ``String`` | Identifikátor uživatele |  
 
 
___

### **set_mark_faq** <a name="nav_faq-set_mark_faq"></a>
> Zaškrtnutí FAQ položky.

**Kategorie:**
 FAQ

**Druh:**
 *veřejně přístupné přes **POST** jako `action="set_mark_faq"`.* ([defined@set_mark_faq.php:3](../../web/api/Faq/set_mark_faq.php#L3))
  
**Parametry** (použít jako **POST** klíče):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `hash` | ``String`` | Identifikátor uživatele |  
| `id` | `Number` | IDčko FAQ |  
| `status` | `Number` | zda jsem zaškrtl 'todo' FAQ |   
 
___

### **get_flash_project_timeline** <a name="nav_flash-reporty-get_flash_project_timeline"></a>
> Vrací výsledky daného projektu dle jeho `id_unique` (projekt nebo typ specialniho projektu) a `date`.

**Kategorie:**
 Flash Reporty

**Druh:**
 *veřejně přístupné přes **POST** jako `action="get_flash_project_timeline"`.* ([defined@get_flash_project_timeline.php:2](../../web/api/Flash/get_flash_project_timeline.php#L2))
  
**Parametry** (použít jako **POST** klíče):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `hash` | ``String`` | Identifikátor uživatele |  
| `project_unique` | `NUMBER` | IDčko projektu. |  
| `date` | `SQL_DATE_TIMESTAMP` | Datum ke kterému chceme výsledky daného projektu. |   

**Vrací** (`JSON` objekt s klíči):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `success` | ``Number`` | Vrací `0` (neúspěch), `1` (**úspěch**), `2` (neúspěch s hláškou). |  
| `timeline` | `Array.<OBJECT>` | Viz pole `$timeline` |   
___

### **get_flash_reports** <a name="nav_flash-reporty-get_flash_reports"></a>
> Vrací výsledky flash reportů

**Kategorie:**
 Flash Reporty

**Druh:**
 *veřejně přístupné přes **POST** jako `action="get_flash_reports"`.* ([defined@get_flash_reports.php:2](../../web/api/Flash/get_flash_reports.php#L2))
  
**Parametry** (použít jako **POST** klíče):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `hash` | ``String`` | Identifikátor uživatele |  
| `date` | `SQL_DATE` | Pokud nedefinováno použije se `new_flash_survey_date` (resp. `new_flash_survey_test_date`). |  
| `limit` | `INTEGER` | Defaultne 1. Specifikuje kolik reportů (datumů) se má poslat. |   

**Vrací** (`JSON` objekt s klíči):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `success` | ``Number`` | Vrací `0` (neúspěch), `1` (**úspěch**), `2` (neúspěch s hláškou). |  
| `team_results` | `OBJECT` | Viz pole `$team_results`<br>&nbsp;&nbsp;struktura (orientační) { date: [ { otázky, průměry_odpovědi, průmer, projekt_id, projekt_name, teplota_průměr } ], … } |  
| `dhlc_results` | `OBJECT` | Viz pole `$dhlc_results`<br>&nbsp;&nbsp;pokud projekty struktura (orientační): { date: { průměr_teploty, průměry_otázek: [] } } |   
___

### **get_flash_surveys** <a name="nav_flash-reporty-get_flash_surveys"></a>
> Vrací surveys v aktuálním týdnu (vyplněné/k vyplnění)

**Kategorie:**
 Flash Reporty

**Druh:**
 *veřejně přístupné přes **POST** jako `action="get_flash_surveys"`.* ([defined@get_flash_surveys.php:2](../../web/api/Flash/get_flash_surveys.php#L2))
  
**Parametry** (použít jako **POST** klíče):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `hash` | ``String`` | Identifikátor uživatele |  
 

**Vrací** (`JSON` objekt s klíči):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `success` | ``Number`` | Vrací `0` (neúspěch), `1` (**úspěch**), `2` (neúspěch s hláškou). |  
| `surveys` | `OBJECT` | Viz pole `$surveys` |   
___

### **get_flash_surveys_history** <a name="nav_flash-reporty-get_flash_surveys_history"></a>
> Vrací vyplněné surveys pro daného uživatele (tj. které historicky vyplnil)

**Kategorie:**
 Flash Reporty

**Druh:**
 *veřejně přístupné přes **POST** jako `action="get_flash_surveys_history"`.* ([defined@get_flash_surveys_history.php:2](../../web/api/Flash/get_flash_surveys_history.php#L2))
  
**Parametry** (použít jako **POST** klíče):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `hash` | ``String`` | Identifikátor uživatele |  
| `date` | `SQL_DATE` | Pokud nedefinováno použije se `new_flash_survey_date` (resp. `new_flash_survey_test_date`). |  
| `limit` | `INTEGER` | Defaultne 1. Specifikuje kolik reportů (datumů) se má poslat. |  
| `skip` | `INTEGER` | Defaultne 0. Specifikuje kolik reportů (datumů) se má přeskočit. |   

**Vrací** (`JSON` objekt s klíči):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `success` | ``Number`` | Vrací `0` (neúspěch), `1` (**úspěch**), `2` (neúspěch s hláškou). |  
| `my_results` | `OBJECT` | Viz pole `$my_results`<br>&nbsp;&nbsp;struktura (orientační) { date: [ { period, projects: ...{ type, project_unique, project_name, questions, answers, temperature } } ], … } |   
___

### **set_flash_survey** <a name="nav_flash-reporty-set_flash_survey"></a>
> Ukládá výsledky daného projektu dle jeho `id`.

**Kategorie:**
 Flash Reporty

**Druh:**
 *veřejně přístupné přes **POST** jako `action="set_flash_survey"`.* ([defined@set_flash_survey.php:2](../../web/api/Flash/set_flash_survey.php#L2))
  
**Parametry** (použít jako **POST** klíče):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `hash` | ``String`` | Identifikátor uživatele |  
| `id` | `NUMBER` | IDčko projektu. |   
 
___

### **get_idea** <a name="nav_ideje-a-iniciativy-get_idea"></a>
> Vrací řádek konkretné ideji z tabulky `$__DB__ideas`.

**Kategorie:**
 Ideje a Iniciativy

**Druh:**
 *veřejně přístupné přes **POST** jako `action="get_idea"`.* ([defined@get_idea.php:3](../../web/api/Ideas/get_idea.php#L3))
  
**Parametry** (použít jako **POST** klíče):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `hash` | ``String`` | Identifikátor uživatele |  
| `id` | `Number` | IDčko idei |  
| `last_sync` | `SQL TIMESTAMP` | Poslední synchronizace |   

**Vrací** (`JSON` objekt s klíči):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `success` | ``Number`` | Vrací `0` (neúspěch), `1` (**úspěch**), `2` (neúspěch s hláškou). |  
| `idea` | `Object` | Idea s klíči: _tbd_ |   
___

### **get_ideas** <a name="nav_ideje-a-iniciativy-get_ideas"></a>
> Vrací pole všech nesmazaných idejí z `$__DB__ideas`. __V aplikaci se musí tabulka přemazávat.__

**Kategorie:**
 Ideje a Iniciativy

**Druh:**
 *veřejně přístupné přes **POST** jako `action="get_ideas"`.* ([defined@get_ideas.php:3](../../web/api/Ideas/get_ideas.php#L3))
  
**Parametry** (použít jako **POST** klíče):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `hash` | ``String`` | Identifikátor uživatele |  
| `last_sync` | `SQL TIMESTAMP` | Poslední synchronizace |   

**Vrací** (`JSON` objekt s klíči):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `success` | ``Number`` | Vrací `0` (neúspěch), `1` (**úspěch**), `2` (neúspěch s hláškou). |  
| `idea` | `Array.<Object>` | Ideje s klíči dle `$_DB_ideas_cols`. |   
___

### **get_idea_reactions** <a name="nav_ideje-a-iniciativy-get_idea_reactions"></a>
> Vrací 'reakce' k idejím (kometáře, týmy, sponzoři, …).

**Kategorie:**
 Ideje a Iniciativy

**Druh:**
 *veřejně přístupné přes **POST** jako `action="get_idea_reactions"`.* ([defined@get_idea_reactions.php:3](../../web/api/Ideas/get_idea_reactions.php#L3))
  
**Parametry** (použít jako **POST** klíče):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `hash` | ``String`` | Identifikátor uživatele |  
| `id` | `Number` | IDčko idei |  
| `is_owner` | `Boolean` | Zda jsem vlastník |   

**Vrací** (`JSON` objekt s klíči):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `success` | ``Number`` | Vrací `0` (neúspěch), `1` (**úspěch**), `2` (neúspěch s hláškou). |  
| `comments` | `Array.<Object>` | komentáře k idejím |  
| `team_requests` | `Array.<Object>` | 'členové' týmu dané idee (zavísí na `status`u) |   
___

### **set_comment_ideas** <a name="nav_ideje-a-iniciativy-set_comment_ideas"></a>
> Přidá komentař k idei.

**Kategorie:**
 Ideje a Iniciativy

**Druh:**
 *veřejně přístupné přes **POST** jako `action="set_comment_ideas"`.* ([defined@set_comment_ideas.php:3](../../web/api/Ideas/set_comment_ideas.php#L3))
  
**Parametry** (použít jako **POST** klíče):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `hash` | ``String`` | Identifikátor uživatele |  
| `id` | `Number` | IDčko idei |  
| `comment` | `String` | Text komentáře |   
 
___

### **set_idea** <a name="nav_ideje-a-iniciativy-set_idea"></a>
> Vytvoření/aktualizace dané idee. Při poslání `status`u jej přejímá ⇢ lze tak vytvořit a rovnou publikovat ideu.

**Kategorie:**
 Ideje a Iniciativy

**Druh:**
 *veřejně přístupné přes **POST** jako `action="set_idea"`.* ([defined@set_idea.php:3](../../web/api/Ideas/set_idea.php#L3))
  
**Parametry** (použít jako **POST** klíče):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `hash` | ``String`` | Identifikátor uživatele |  
| `id` | `Number|String` | IDčko ideje, nebo __`new`__ |  
| `status` | `Number` | pokud vyplnen, pouzije se (resp. vola se 'makeIdeaPublic'), pokud se idea teprve vytvari je defaultne 0 |  
| `title` | `String` | titulek ideje … viz `$for_saving` |  
| `content` | `String` | popisek (tj. v DB jako 'description') … viz `$for_saving` |  
| `photo` | `String` | relativni cesta k obrazku, nebo prazdny string … viz `$for_saving` |   
 
___

### **set_idea_delete** <a name="nav_ideje-a-iniciativy-set_idea_delete"></a>
> Smazání idei (tj. `deleted=1`).

**Kategorie:**
 Ideje a Iniciativy

**Druh:**
 *veřejně přístupné přes **POST** jako `action="set_idea_delete"`.* ([defined@set_idea_delete.php:3](../../web/api/Ideas/set_idea_delete.php#L3))
  
**Parametry** (použít jako **POST** klíče):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `hash` | ``String`` | Identifikátor uživatele |  
| `id` | `Number` | IDčko idei |   
 
___

### **set_idea_dismiss** <a name="nav_ideje-a-iniciativy-set_idea_dismiss"></a>
> Zamítnutí (`project_status=30`).

**Kategorie:**
 Ideje a Iniciativy

**Druh:**
 *veřejně přístupné přes **POST** jako `action="set_idea_dismiss"`.* ([defined@set_idea_dismiss.php:3](../../web/api/Ideas/set_idea_dismiss.php#L3))
  
**Parametry** (použít jako **POST** klíče):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `hash` | ``String`` | Identifikátor uživatele |  
| `id` | `Number` | IDčko idei |  
| `dismiss_comment` | `String` | Důvod zamítnutí |   
 
___

### **set_idea_sponsor_request** <a name="nav_ideje-a-iniciativy-set_idea_sponsor_request"></a>
> Stare ke smazani viz #351

**Kategorie:**
 Ideje a Iniciativy

**Druh:**
 *veřejně přístupné přes **POST** jako `action="set_idea_sponsor_request"`.* ([defined@set_idea_sponsor_request.php:3](../../web/api/Ideas/set_idea_sponsor_request.php#L3))
  
**Parametry** (použít jako **POST** klíče):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `hash` | ``String`` | Identifikátor uživatele |  
 
 
___

### **set_idea_status** <a name="nav_ideje-a-iniciativy-set_idea_status"></a>
> Nastavení statusu a příslušný timestamt (viz `$date_col`).

**Kategorie:**
 Ideje a Iniciativy

**Druh:**
 *veřejně přístupné přes **POST** jako `action="set_idea_status"`.* ([defined@set_idea_status.php:3](../../web/api/Ideas/set_idea_status.php#L3))
  
**Parametry** (použít jako **POST** klíče):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `hash` | ``String`` | Identifikátor uživatele |  
| `id` | `Number` | IDčko idei |  
| `status` | `Number` | Typ dle `$date_col` |   
 
___

### **set_idea_team_request** <a name="nav_ideje-a-iniciativy-set_idea_team_request"></a>
> Stare ke smazani viz #351

**Kategorie:**
 Ideje a Iniciativy

**Druh:**
 *veřejně přístupné přes **POST** jako `action="set_idea_team_request"`.* ([defined@set_idea_team_request.php:3](../../web/api/Ideas/set_idea_team_request.php#L3))
  
**Parametry** (použít jako **POST** klíče):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `hash` | ``String`` | Identifikátor uživatele |  
 
 
___

### **set_initiative** <a name="nav_ideje-a-iniciativy-set_initiative"></a>
> Updatuje iniciativu, nebo ji konvertuje z ideje (dle `type`).
> 
> Pri poslani statusu v `data` (viz dale) jej prejima => umoznuje tak vytvorit a rovnou publikovat iniciativu.
> 
> Pokud `data.status=3` (viz dale) a nastaven `data.project_sponsor` (pozustatek starych verzi) posila se notifikace.

**Kategorie:**
 Ideje a Iniciativy

**Druh:**
 *veřejně přístupné přes **POST** jako `action="set_initiative"`.* ([defined@set_initiative.php:3](../../web/api/Ideas/set_initiative.php#L3))
  
**Parametry** (použít jako **POST** klíče):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `hash` | ``String`` | Identifikátor uživatele |  
| `id` | `Number` | IDčko ideje |  
| `data` | `String` | JSON associovane pole pole z appky (primarne posila hodnoty formulare, ale)<br>&nbsp;&nbsp;`data.status`= pokud existuje vola se 'makePublic', primarne kvuli 'status=3' - tj. konverzi ideji rovnou jako verejnou iniciativu, pokud neexistuje je defautlne rovno 2 (draft iniciative) |  
| `type` | `String` | 'edit' (jen ulozi data), nebo 'convert' (konvertuje ideu = vola 'makeConvert', pripadne 'makePublic') |   
 
___

### **set_like_ideas** <a name="nav_ideje-a-iniciativy-set_like_ideas"></a>
> Změní stav srdíčka pro ideu

**Kategorie:**
 Ideje a Iniciativy

**Druh:**
 *veřejně přístupné přes **POST** jako `action="set_like_ideas"`.* ([defined@set_like_ideas.php:3](../../web/api/Ideas/set_like_ideas.php#L3))
  
**Parametry** (použít jako **POST** klíče):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `hash` | ``String`` | Identifikátor uživatele |  
| `id` | `Number` | IDčko ideje |  
| `status` | `Number` | `0`|`1` |   
 
___

### **get_kpi_wall** <a name="nav_kpi-wall-get_kpi_wall"></a>
> Vrací pole výsledků KPI. __zastaralé__

**Kategorie:**
 KPI Wall

**Druh:**
 *veřejně přístupné přes **POST** jako `action="get_kpi_wall"`.* ([defined@get_kpi_wall.php:3](../../web/api/KPI/get_kpi_wall.php#L3))
  
**Parametry** (použít jako **POST** klíče):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `hash` | ``String`` | Identifikátor uživatele |  
| `last_sync` | `SQL TIMESTAMP` | Poslední synchronizace |   

**Vrací** (`JSON` objekt s klíči):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `success` | ``Number`` | Vrací `0` (neúspěch), `1` (**úspěch**), `2` (neúspěch s hláškou). |  
| `kpi_wall` | `Array.<Object>` | KPI Wall |   
___

### **get_kpi_wall_results** <a name="nav_kpi-wall-get_kpi_wall_results"></a>
> Vrací pole výsledků KPI.

**Kategorie:**
 KPI Wall

**Druh:**
 *veřejně přístupné přes **POST** jako `action="get_kpi_wall_results"`.* ([defined@get_kpi_wall_results.php:3](../../web/api/KPI/get_kpi_wall_results.php#L3))
  
**Parametry** (použít jako **POST** klíče):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `hash` | ``String`` | Identifikátor uživatele |  
| `last_sync` | `SQL TIMESTAMP` | Poslední synchronizace |   

**Vrací** (`JSON` objekt s klíči):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `success` | ``Number`` | Vrací `0` (neúspěch), `1` (**úspěch**), `2` (neúspěch s hláškou). |  
| `kpi_wall` | `Array.<Object>` | KPI Wall |   
___

### **get_kpi_wall_sections** <a name="nav_kpi-wall-get_kpi_wall_sections"></a>
> Vrací hodnoty pro sekce v KPI modulu.

**Kategorie:**
 KPI Wall

**Druh:**
 *veřejně přístupné přes **POST** jako `action="get_kpi_wall_sections"`.* ([defined@get_kpi_wall_sections.php:3](../../web/api/KPI/get_kpi_wall_sections.php#L3))
  
**Parametry** (použít jako **POST** klíče):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `hash` | ``String`` | Identifikátor uživatele |  
| `last_sync` | `SQL TIMESTAMP` | Poslední synchronizace |   

**Vrací** (`JSON` objekt s klíči):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `success` | ``Number`` | Vrací `0` (neúspěch), `1` (**úspěch**), `2` (neúspěch s hláškou). |  
| `provider` | `Object` | Asociované pole: `value`, `color`, `text`. |  
| `investment` | `Object` | Asociované pole: `value`, `color`, `text`. |  
| `employer` | `Object` | Asociované pole: `people`, `temperature`, `trend` a `date`. |   
___

### **get_login_token** <a name="nav_přihlašování-get_login_token"></a>
> Vygenruje dočasný token pro pozdější příhlášení pomocí `login_token`.

**Kategorie:**
 Přihlašování

**Druh:**
 *veřejně přístupné přes **POST** jako `action="get_login_token"`.* ([defined@get_login_token.php:2](../../web/api/Login_touch/get_login_token.php#L2))

**Využívá:**
 - [Přihlašování/inc.login-touch](#nav_přihlašování-inc-login-touch)
 
**Parametry** (použít jako **POST** klíče):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `hash` | ``String`` | Identifikátor uživatele |  
 
 
___

### **login-touch** <a name="nav_přihlašování-login-touch"></a>
> Společná část pro login/touch.

**Kategorie:**
 Přihlašování

**Druh:**
 *pomocný script* ([defined@inc.login-touch.php:2](../../web/api/Login_touch/inc.login-touch.php#L2))
  
 

**Vrací** (`JSON` objekt s klíči):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `success` | ``Number`` | Vrací `0` (neúspěch), `1` (**úspěch**), `2` (neúspěch s hláškou). |  
| `user` | `Object` | Záznam z tabulky `dhlc_users` |  
| `user_settings` | `Object` | TBD |  
| `global_settings` | `Object` | TBD |   
___

### **login** <a name="nav_přihlašování-login"></a>
> Přihlášení uživatele. Výstup záleží na úspěchu => zatím neuplná dokumentace.

**Kategorie:**
 Přihlašování

**Druh:**
 *veřejně přístupné přes **POST** jako `action="login"`.* ([defined@login.php:2](../../web/api/Login_touch/login.php#L2))

**Využívá:**
 - [Přihlašování/inc.login-touch](#nav_přihlašování-inc-login-touch)
 
**Parametry** (použít jako **POST** klíče):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `email` | `String` | email uzivatele |  
| `password` | `String` | SHA256 zahashovane heslo |   
 
___

### **login_token** <a name="nav_přihlašování-login_token"></a>
> Příhlášení pomocí  tokenu z `get_login_token`.

**Kategorie:**
 Přihlašování

**Druh:**
 *veřejně přístupné přes **POST** jako `action="login_token"`.* ([defined@login_token.php:2](../../web/api/Login_touch/login_token.php#L2))

**Využívá:**
 - [Přihlašování/inc.login-touch](#nav_přihlašování-inc-login-touch)
 
**Parametry** (použít jako **POST** klíče):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `hash` | ``String`` | Identifikátor uživatele |  
 
 
___

### **touch** <a name="nav_přihlašování-touch"></a>
> Přihlášení uživatele. Výstup záleží na úspěchu => zatím neuplná dokumentace.

**Kategorie:**
 Přihlašování

**Druh:**
 *veřejně přístupné přes **POST** jako `action="touch"`.* ([defined@touch.php:2](../../web/api/Login_touch/touch.php#L2))

**Využívá:**
 - [Přihlašování/inc.login-touch](#nav_přihlašování-inc-login-touch)
 
**Parametry** (použít jako **POST** klíče):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `hash` | ``String`` | Identifikátor uživatele |  
 
 
___

### **get_projects** <a name="nav_staffing---projects-get_projects"></a>
> Vrací pole projektů.

**Kategorie:**
 Staffing & Projects

**Druh:**
 *veřejně přístupné přes **POST** jako `action="get_projects"`.* ([defined@get_projects.php:2](../../web/api/Projects/get_projects.php#L2))

**Využívá:**
 - [Staffing & Projects/projects](#nav_staffing---projects-projects)
 
**Parametry** (použít jako **POST** klíče):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `hash` | ``String`` | Identifikátor uživatele |  
| `last_sync` | `SQL TIMESTAMP` | Poslední synchronizace |   

**Vrací** (`JSON` objekt s klíči):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `success` | ``Number`` | Vrací `0` (neúspěch), `1` (**úspěch**), `2` (neúspěch s hláškou). |  
| `projects` | `Array.<OBJECT>` | Viz pole `$projects`<br>&nbsp;&nbsp;Pole projektů |   
___

### **get_projects_notes** <a name="nav_staffing---projects-get_projects_notes"></a>
> Vrací poznámky k projektům.

**Kategorie:**
 Staffing & Projects

**Druh:**
 *veřejně přístupné přes **POST** jako `action="get_projects_notes"`.* ([defined@get_projects_notes.php:2](../../web/api/Projects/get_projects_notes.php#L2))
  
**Parametry** (použít jako **POST** klíče):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `hash` | ``String`` | Identifikátor uživatele |  
| `last_sync` | `SQL TIMESTAMP` | Poslední synchronizace |   

**Vrací** (`JSON` objekt s klíči):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `success` | ``Number`` | Vrací `0` (neúspěch), `1` (**úspěch**), `2` (neúspěch s hláškou). |  
| `projects_notes` | `Array.<OBJECT>` | Viz pole `$projects_notes`<br>&nbsp;&nbsp;Pole poznámek |   
___

### **get_projects_staffing_pipeline** <a name="nav_staffing---projects-get_projects_staffing_pipeline"></a>
> Vrací pole pipeline projektů a souvisejících staffingů bez *'Project Number'*.

**Kategorie:**
 Staffing & Projects

**Druh:**
 *veřejně přístupné přes **POST** jako `action="get_projects_staffing_pipeline"`.* ([defined@get_projects_staffing_pipeline.php:2](../../web/api/Projects/get_projects_staffing_pipeline.php#L2))

**Využívá:**
 - [Staffing & Projects/projects](#nav_staffing---projects-projects)
 
**Parametry** (použít jako **POST** klíče):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `hash` | ``String`` | Identifikátor uživatele |  
| `last_sync` | `SQL TIMESTAMP` | Poslední synchronizace |   

**Vrací** (`JSON` objekt s klíči):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `success` | ``Number`` | Vrací `0` (neúspěch), `1` (**úspěch**), `2` (neúspěch s hláškou). |  
| `staffing` | `Array.<OBJECT>` | Viz pole `$staffing`<br>&nbsp;&nbsp;Pole přiřazení pracovníků a projektů |  
| `projects` | `Array.<OBJECT>` | Viz pole `$projects`<br>&nbsp;&nbsp;Pole projektů |   
___

### **get_staffing** <a name="nav_staffing---projects-get_staffing"></a>
> Vrací pole staffingů.

**Kategorie:**
 Staffing & Projects

**Druh:**
 *veřejně přístupné přes **POST** jako `action="get_staffing"`.* ([defined@get_staffing.php:2](../../web/api/Projects/get_staffing.php#L2))

**Využívá:**
 - [Staffing & Projects/projects](#nav_staffing---projects-projects)
 
**Parametry** (použít jako **POST** klíče):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `hash` | ``String`` | Identifikátor uživatele |  
| `last_sync` | `SQL TIMESTAMP` | Poslední synchronizace |   

**Vrací** (`JSON` objekt s klíči):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `success` | ``Number`` | Vrací `0` (neúspěch), `1` (**úspěch**), `2` (neúspěch s hláškou). |  
| `staffing` | `Array.<OBJECT>` | Viz pole `$staffing`<br>&nbsp;&nbsp;Pole přiřazení pracovníků a projektů |   
___

### **get_users_projects_info** <a name="nav_staffing---projects-get_users_projects_info"></a>
> Vrací pole uživatelů (resp. jejich `appFlashPosition`).

**Kategorie:**
 Staffing & Projects

**Druh:**
 *veřejně přístupné přes **POST** jako `action="get_users_projects_info"`.* ([defined@get_users_projects_info.php:2](../../web/api/Projects/get_users_projects_info.php#L2))

**Využívá:**
 - [Staffing & Projects/projects](#nav_staffing---projects-projects)
 
**Parametry** (použít jako **POST** klíče):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `hash` | ``String`` | Identifikátor uživatele |  
 

**Vrací** (`JSON` objekt s klíči):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `success` | ``Number`` | Vrací `0` (neúspěch), `1` (**úspěch**), `2` (neúspěch s hláškou). |  
| `users` | `Array.<OBJECT>` | Viz pole `$users`<br>&nbsp;&nbsp;Pole uživatelů: [ { 'id', 'is_visible_staffing': (0\|1) }, … ] |   
___

### **projects** <a name="nav_staffing---projects-projects"></a>
> Společná část pro projekty.

**Kategorie:**
 Staffing & Projects

**Druh:**
 *pomocný script* ([defined@inc.projects.php:2](../../web/api/Projects/inc.projects.php#L2))
  
**Parametry** (dospupné veřejné proměnné/funkce/… v tomto scriptu):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `$projects_main_query` | `db_utils::query` | Dotaz na projekty |  
| `getProjects` | `Function` | Funkce beroucí jako argument `db_utils::query` (typicky variaci `$projects_main_query`) a vracející pole 'projektů'. |  
| `$staffing_main_query` | `db_utils::query` | Dotaz na staffing |  
| `getStaffing` | `Function` | Funkce beroucí jako argument `db_utils::query` (typicky variaci `$staffing_main_query`) a vracející pole 'staffing'ů. |   
 
___

### **set_projects_notes** <a name="nav_staffing---projects-set_projects_notes"></a>
> Ukládání poznámky.

**Kategorie:**
 Staffing & Projects

**Druh:**
 *veřejně přístupné přes **POST** jako `action="set_projects_notes"`.* ([defined@set_projects_notes.php:2](../../web/api/Projects/set_projects_notes.php#L2))
  
**Parametry** (použít jako **POST** klíče):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `hash` | ``String`` | Identifikátor uživatele |  
| `id_project` | `STRING` | Identifikátor projektu (např. EU_1234) |  
| `note` | `STRING` | Text poznámky |   
 
___

### **get_note_user** <a name="nav_uživatelé-get_note_user"></a>
> Vrací moji poznámku k jinému uživateli.

**Kategorie:**
 Uživatelé

**Druh:**
 *veřejně přístupné přes **POST** jako `action="get_note_user"`.* ([defined@get_note_user.php:3](../../web/api/Users/get_note_user.php#L3))
  
**Parametry** (použít jako **POST** klíče):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `hash` | ``String`` | Identifikátor uživatele |  
| `id` | `Number` | IDčko člověka, kněmuž je poznámka udělána |   

**Vrací** (`JSON` objekt s klíči):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `success` | ``Number`` | Vrací `0` (neúspěch), `1` (**úspěch**), `2` (neúspěch s hláškou). |  
| `note` | `String` | Text poznámky |  
| `photos` | `Array.<String>` | Pole relativních cest |   
___

### **get_user** <a name="nav_uživatelé-get_user"></a>
> Vrací detail uživatele.

**Kategorie:**
 Uživatelé

**Druh:**
 *veřejně přístupné přes **POST** jako `action="get_user"`.* ([defined@get_user.php:3](../../web/api/Users/get_user.php#L3))
  
**Parametry** (použít jako **POST** klíče):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `hash` | ``String`` | Identifikátor uživatele |  
| `id` | `Number` | IDčko člověka |  
| `last_sync` | `SQL TIMESTAMP` | Poslední synchronizace |   

**Vrací** (`JSON` objekt s klíči):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `success` | ``Number`` | Vrací `0` (neúspěch), `1` (**úspěch**), `2` (neúspěch s hláškou). |  
| `user` | `Object` | Kompletnější řádek uživatele. Zahrnuté informace:<br>&nbsp;&nbsp; Viz `$_DB_user_cols` a `$phone` |   
___

### **get_users** <a name="nav_uživatelé-get_users"></a>
> Vrací pole uživatelů. Některé sloupce se dodávají později, viz: [get_users_projects_info](#nav_staffing---projects-get_users_projects_info):

**Kategorie:**
 Uživatelé

**Druh:**
 *veřejně přístupné přes **POST** jako `action="get_users"`.* ([defined@get_users.php:3](../../web/api/Users/get_users.php#L3))
  
**Parametry** (použít jako **POST** klíče):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `hash` | ``String`` | Identifikátor uživatele |  
| `last_sync` | `SQL TIMESTAMP` | Poslední synchronizace |   

**Vrací** (`JSON` objekt s klíči):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `success` | ``Number`` | Vrací `0` (neúspěch), `1` (**úspěch**), `2` (neúspěch s hláškou). |  
| `users` | `Array.<Object>` | Zkrácený řádek uživatele. Zahrnuté informace:<br>&nbsp;&nbsp; - `id`<br>&nbsp;&nbsp; - `name`<br>&nbsp;&nbsp; - `surname`<br>&nbsp;&nbsp; - `photo`<br>&nbsp;&nbsp; - `email`<br>&nbsp;&nbsp; - `thumb`<br>&nbsp;&nbsp; - `dev`<br>&nbsp;&nbsp; - `deleted` |   
___

### **set_note_user** <a name="nav_uživatelé-set_note_user"></a>
> Zapsání poznámku k uživateli.

**Kategorie:**
 Uživatelé

**Druh:**
 *veřejně přístupné přes **POST** jako `action="set_note_user"`.* ([defined@set_note_user.php:3](../../web/api/Users/set_note_user.php#L3))
  
**Parametry** (použít jako **POST** klíče):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `hash` | ``String`` | Identifikátor uživatele |  
| `id` | `Number` | IDčko člověka |  
| `note` | `String` | Text poznámky |  
| `photos` | `String` | JSON pole fotek |   
 
___

### **set_user** <a name="nav_uživatelé-set_user"></a>
> Editace profilu uživatele.

**Kategorie:**
 Uživatelé

**Druh:**
 *veřejně přístupné přes **POST** jako `action="set_user"`.* ([defined@set_user.php:3](../../web/api/Users/set_user.php#L3))
  
**Parametry** (použít jako **POST** klíče):

|  Jméno  |   Typ   | Popisek |
| ------- | ------- | ------- |
| `hash` | ``String`` | Identifikátor uživatele |  
| `list` | `String` | JSON pole s nastavením |  
| `answers` | `String` | JSON pole odpovědí na otázky |  
| `previous_passwords` | `String` | JSON pole předchozích hesel |  
| `last_device_info` | `String` | JSON pole s informacemi o zařízeních |   
 
___