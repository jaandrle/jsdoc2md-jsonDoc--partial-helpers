# Dokumentace **`JavaScript`ové** části aplikace

HTML část je k nalezení v [Dokumentace HTML template souborů](./html.md).

___

## Kategorizace

<dl>
<dt><a href="#module_Atom">Atom</a></dt>
<dd><p>Jedná se o <strong>&quot;malou&quot;/často používanou utilitu</strong>, která se volá v <a href="#module_Molekula">molekulách</a> a <a href="#module_Organismus">organismech</a>.</p>
<ul>
<li>Všechny atomy jsou v podsložce <strong><code>atoms/</code></strong>.</li>
<li>Důležitý rozdíl oproti <a href="#module_Molekula">molekulách</a> je, že se importují globálně na konci ale před <a href="#module_Organismus">organismy</a></li>
</ul>
</dd>
<dt><a href="#module_Molekula">Molekula</a></dt>
<dd><p>Jedná se již o <strong>&quot;větší&quot; utilitu</strong>, která se používá v <a href="#module_Organismus">organismech</a> (<strong>vyjímečně</strong> v jiných <a href="#module_Molekula">molekulách</a>).</p>
<ul>
<li>Všechny molekuly jsou v podsložce <strong><code>molecules/</code></strong>.</li>
<li>Molekuly se musí importovat ručně v kódu pomocí <code>gulp_place</code>.</li>
</ul>
</dd>
<dt><a href="#module_Organismus">Organismus</a></dt>
<dd><p>Jedná se již o <strong>&quot;velkou&quot; část kódu</strong>, která používá <a href="#module_Atom">atomy</a> a <a href="#module_Organismus">molekuly</a>, ale sama v nich volána není.</p>
<ul>
<li>Typicky se jedná o <a href="#module_Str%C3%A1nka">stránky</a>.</li>
<li>Všechny molekuly jsou v podsložce <strong><code>organisms/</code></strong>.</li>
<li>Organismy se importují najednou úplně nakonec.</li>
</ul>
</dd>
<dt><a href="#module_Stránka">Stránka</a></dt>
<dd><p>Reprezentuje statickou/dynamickou část nějaké stránky.</p>
<ul>
<li>Dynamické části v <a href="#_onPagesReadyFunctions">_onPagesReadyFunctions</a>.</li>
<li>Statické HTML části v <a href="./html.md#nav_str%C3%A1nky">Dokumentace HTML template souborů</a>.</li>
</ul>
</dd>
<dt><a href="#module_Link">Link</a></dt>
<dd><p>Reprezentuje funkci, která se typicky (ne samozřejmě výhradně) volá při kliknutí na nějaký HTML prvek.</p>
</dd><dt><a href="#module_DOM">DOM</a></dt>
<dd><p>Reprezentuje dynamické HTML komponenty generující se až za běhu programu. Pokud se týkají společné &quot;věci&quot; jsou sdružované do jmenných prostorů a <a href="Molekula">molekul</a>.</p>
<p>Jsou reprezentované <a href="#Komponenta">Komponenta</a>.</p>
</dd>
</dl>

## Funkcionální třídy

<dl>
<dt><a href="#FeedbacksForms">FeedbacksForms</a></dt>
<dd><p>Feedbacks form helper class (generation/results).</p>
</dd>
<dt><a href="#SetRead">SetRead</a></dt>
<dd><p>Class is providing storiging &quot;global&quot; data but avoiding messing up global scope.</p>
</dd>
</dl>

## Proměnné

<dl>
<dt><a href="#update_loop">update_loop</a></dt>
<dd><p>Obsahuje identifikátor <code>setInterval</code>u, který řeší cyklický dotaz <code>touch</code>.
Inicializuje se při loginu viz <a href="#loginFunctionSuccess">loginFunctionSuccess</a>.</p>
</dd>
<dt><a href="#popup">popup</a></dt>
<dd><p>Spravuje malé popupy, inicializuje se v <a href="#_onDeviceReadyFunction..initPopupSmall">initPopupSmall</a>.</p>
</dd>
<dt><a href="#note_photos">note_photos</a></dt>
<dd><p>Obsahuje instanci třídy pro přidávání fotografií k poznámkám, inicializuje se v <a href="#_onDeviceReadyFunction..initPhotosClasses">initPhotosClasses</a>.</p>
</dd>
<dt><a href="#user_photo">user_photo</a></dt>
<dd><p>Obsahuje instanci třídy pro přidávání fotografií k uživatli aplikace, inicializuje se v <a href="#_onDeviceReadyFunction..initPhotosClasses">initPhotosClasses</a>.</p>
</dd>
<dt><a href="#footer_el">footer_el</a></dt>
<dd></dd>
<dt><a href="#footer_pages">footer_pages</a></dt>
<dd></dd>
<dt><a href="#note_photos">note_photos</a></dt>
<dd><p>Instance třídy <strong><em>CoreJS — Pictures</em></strong> spravující výběr fotografie pro poznámky. Souvisí s <a href="#_onDeviceReadyFunction..initPhotosClasses">initPhotosClasses</a>.</p>
</dd>
<dt><a href="#user_photo">user_photo</a></dt>
<dd><p>Instance třídy <strong><em>CoreJS — Pictures</em></strong> spravující výběr fotografie pro uživatele. Souvisí s <a href="#_onDeviceReadyFunction..initPhotosClasses">initPhotosClasses</a>.</p>
</dd>
</dl>

## Jmenné prostory (objekty)

<dl>
<dt><a href="#components_userLists">components_userLists</a> : <code>object</code><br/>&nbsp;&nbsp;<small>Kategotie:&nbsp;<i><a href="#module_Atom">Atom</a></i></small></dt>
<dd><p>Sdružuje komponenty pro generování seznamu kontaktů</p>
</dd>
<dt><a href="#components_article">components_article</a> : <code>object</code><br/>&nbsp;&nbsp;<small>Kategotie:&nbsp;<i><a href="#module_Molekula">Molekula</a></i></small></dt>
<dd><p>Sdružuje komponenty pro generování článků (hl. pro <a href="#_onPagesReadyFunctions.pp_Announcements">pp_Announcements</a>).</p>
</dd>
<dt><a href="#fingerprint">fingerprint</a> : <code>object</code><br/>&nbsp;&nbsp;<small>Kategotie:&nbsp;<i><a href="#module_Molekula">Molekula</a></i></small></dt>
<dd><p>Utility pro fingerprint, texty načítá z <code>texty</code>, klíč pro ukládání načítá z <code>localStorage</code> (klíč dle <code>local_storage</code>).</p>
</dd>
<dt><a href="#people_db_utils">people_db_utils</a> : <code>object</code><br/>&nbsp;&nbsp;<small>Kategotie:&nbsp;<i><a href="#module_Molekula">Molekula</a></i></small></dt>
<dd><p>Tento jmenný prostor sdružuje utility pro filtrování záznamů ze sloučených tabulek <code>attendance</code> a <code>users</code></p>
</dd>
<dt><a href="#_session">_session</a> : <code>object</code></dt>
<dd><p>Sdružuje informace k právě spuštěne instanci aplikace.</p>
</dd>
<dt><a href="#sync">sync</a> : <code>object</code></dt>
<dd><p>Aliasy pro &quot;rychlejší&quot; synchronizaci, inicializuje se v <a href="#_onDeviceReadyFunction..initSyncNamespace">initSyncNamespace</a>.</p>
</dd>
<dt><a href="#consts">consts</a> : <code>object</code></dt>
<dd><p>Sdružuje konstanty v aplikaci.</p>
</dd>
<dt><a href="#string_templates">string_templates</a> : <code>object</code></dt>
<dd><p>Sdružuje předpřipravené texty.</p>
</dd>
<dt><a href="#_onPagesPreparing">_onPagesPreparing</a> : <code>object</code><br/>&nbsp;&nbsp;<small>Kategotie:&nbsp;<i><a href="#module_Interní">Interní</a></i></small></dt>
<dd><p>Deklarativní definice textů (html element se značkuje <code>data-cmd=&quot;text-jméno&quot;</code>).</p>
</dd>
<dt><a href="#_onPopupPagesFunctions">_onPopupPagesFunctions</a> : <code>object</code><br/>&nbsp;&nbsp;<small>Kategotie:&nbsp;<i><a href="#module_Interní">Interní</a></i></small></dt>
<dd><p>Funkcionnální část pro jednotlivé popup stránky</p>
</dd>
<dt><a href="#_onPagesReadyFunctions">_onPagesReadyFunctions</a> : <code>object</code><br/>&nbsp;&nbsp;<small>Kategotie:&nbsp;<i><a href="#module_Stránky">Stránky</a></i></small></dt>
<dd><p>Funkcionnální část pro jednotlivé stránky</p>
</dd>
</dl>

## Konstanty

<dl>
<dt><a href="#app_version_name">app_version_name</a></dt>
<dd><p>Identifikace verze aplikace. Řeší se při updatu (viz <a href="_onDeviceReadyFunction~update">_onDeviceReadyFunction~update</a>) a aplikace se takto také identifikuje s API.</p>
</dd>
<dt><a href="#warningIcon">warningIcon</a></dt>
<dd><p>Jméno CSS třídy ikony <strong>varování</strong>.</p>
</dd>
<dt><a href="#mxLoading_name">mxLoading_name</a></dt>
<dd><p>Identifikátor &quot;loading&quot; popupu v <code>mx</code>, který se používá v <a href="https://github.com/jaandrle/indigo_cordovaCore/blob/master/docs/core_regular.md#Internet..instance.post_"><strong><em>CoreJS — Internet</em></strong></a>.</p>
</dd>
<dt><a href="#mxInternetAnimation_name">mxInternetAnimation_name</a></dt>
<dd><p>Identifikátor &quot;loading&quot; popupu v <code>mx</code>, který se používá v <a href="https://github.com/jaandrle/indigo_cordovaCore/blob/master/docs/core_regular.md#Internet..instance.post_"><strong><em>CoreJS — Internet</em></strong></a>.</p>
</dd>
<dt><a href="#agenda_buttons">agenda_buttons</a> : <code>Object</code></dt>
<dd><p>Parametry tlačítek v agendě</p>
</dd>
</dl>

## Funkce

<dl>
<dt><a href="#link_AgendaAddNotePhoto">link_AgendaAddNotePhoto(_this)</a><br/>&nbsp;&nbsp;<small>Kategotie:&nbsp;<i><a href="#module_Link">Link</a></i>, <i><a href="#module_Atom">Atom</a></i></small></dt>
<dd><p>Kliknutí na tlačítko přidání fotografie k poznámce v agendě.</p>
</dd>
<dt><a href="#link_AgendaClosePopup">link_AgendaClosePopup(_this)</a><br/>&nbsp;&nbsp;<small>Kategotie:&nbsp;<i><a href="#module_Link">Link</a></i>, <i><a href="#module_Atom">Atom</a></i></small></dt>
<dd><p>Kliknutí na tlačítko zavření popup stránky otevřencých typicky z agendy.</p>
</dd>
<dt><a href="#link_AgendaOpenPopup">link_AgendaOpenPopup(_this)</a><br/>&nbsp;&nbsp;<small>Kategotie:&nbsp;<i><a href="#module_Link">Link</a></i>, <i><a href="#module_Atom">Atom</a></i></small></dt>
<dd><p>Kliknutí na tlačítko v agendě:</p>
<ul>
<li>cílový popup načítá z <code>data-popup_name</code></li>
<li>jako parametry předává popup stránce všechny <code>data-*</code>.</li>
</ul>
</dd>
<dt><a href="#link_CloseActivePopup">link_CloseActivePopup(_this)</a><br/>&nbsp;&nbsp;<small>Kategotie:&nbsp;<i><a href="#module_Link">Link</a></i>, <i><a href="#module_Atom">Atom</a></i></small></dt>
<dd><p>DUPLIKÁT <a href="#link_closeGeneralPopup">link_closeGeneralPopup</a></p>
</dd>
<dt><a href="#link_closeGeneralPopup">link_closeGeneralPopup(_this)</a><br/>&nbsp;&nbsp;<small>Kategotie:&nbsp;<i><a href="#module_Link">Link</a></i>, <i><a href="#module_Atom">Atom</a></i></small></dt>
<dd><p>Zavírání popupů dle IDčka aktuálně otevřeného popupu (dle <code>dataset</code>u).</p>
</dd>
<dt><a href="#submitFeedbackForm">submitFeedbackForm(_this)</a><br/>&nbsp;&nbsp;<small>Kategotie:&nbsp;<i><a href="#module_Atom">Atom</a></i></small></dt>
<dd><p>Obecná funkce pro ukládání feedbacků, volá se <code>set_feedbacks_answers</code>.</p>
</dd>
<dt><a href="#component_agendaList">component_agendaList(def)</a> ⇒ <code><a href="#Komponenta">Komponenta</a></code><br/>&nbsp;&nbsp;<small>Kategotie:&nbsp;<i><a href="#module_Atom">Atom</a></i></small></dt>
<dd><p>Vytváří pložku/komponentu v agendě</p>
</dd>
<dt><a href="#component_agendaListButton">component_agendaListButton(def)</a> ⇒ <code><a href="#Komponenta">Komponenta</a></code><br/>&nbsp;&nbsp;<small>Kategotie:&nbsp;<i><a href="#module_Atom">Atom</a></i></small></dt>
<dd><p>Vytváří tlačítko v pložce v agendě</p>
</dd>
<dt><a href="#component_agendaSwitch">component_agendaSwitch(def)</a> ⇒ <code><a href="#Komponenta">Komponenta</a></code><br/>&nbsp;&nbsp;<small>Kategotie:&nbsp;<i><a href="#module_Atom">Atom</a></i></small></dt>
<dd><p>Vytváří přepínač dnů pro agendu.</p>
<p>K tlačítků se do <code>data-*</code> přidávají klíče <code>jsif_val</code> (pořadí tlačítka od jedničky) a první tlačítko je automaticky předzvolené.</p>
</dd>
<dt><a href="#link_openYoutubeLink">link_openYoutubeLink(_this)</a><br/>&nbsp;&nbsp;<small>Kategotie:&nbsp;<i><a href="#module_Link">Link</a></i>, <i><a href="#module_Atom">Atom</a></i></small></dt>
<dd><p>Po kliknutí přejít na video dle <code>data-youtube_link</code>.</p>
</dd>
<dt><a href="#toggleComponentOpenStatus">toggleComponentOpenStatus(def)</a> ⇒ <code>Object</code><br/>&nbsp;&nbsp;<small>Kategotie:&nbsp;<i><a href="#module_Atom">Atom</a></i></small></dt>
<dd><p>Přepíná klíč <code>is_open</code> v daném objektu.</p>
</dd>
<dt><a href="#restartAnimationEffect">restartAnimationEffect()</a><br/>&nbsp;&nbsp;<small>Kategotie:&nbsp;<i><a href="#module_Atom">Atom</a></i></small></dt>
<dd><p>(Pře)nastavuje styl <code>animation</code> na &quot;&quot;/&quot;none&quot; pro znovu spuštění animace (s timeoutem 300ms).</p>
</dd>
<dt><a href="#gotoConference_Choose">gotoConference_Choose()</a><br/>&nbsp;&nbsp;<small>Kategotie:&nbsp;<i><a href="#module_Atom">Atom</a></i></small></dt>
<dd><p>Pomocná procedura dle počtu konferencí v <a href="#_session.conferences">conferences</a> naviguje na <code>pp_ChooseConference</code>, nebo volá <a href="#gotoConference">gotoConference</a> přímo.</p>
</dd>
<dt><a href="#gotoConference">gotoConference(conference_to_choose)</a><br/>&nbsp;&nbsp;<small>Kategotie:&nbsp;<i><a href="#module_Atom">Atom</a></i></small></dt>
<dd><p>Provádí úkony před vstupem do appky (stránka <code>pp_Welcome</code>).</p>
</dd>
<dt><a href="#loginFunctionSuccess">loginFunctionSuccess(data)</a><br/>&nbsp;&nbsp;<small>Kategotie:&nbsp;<i><a href="#module_Atom">Atom</a></i></small></dt>
<dd><p>Volá se po úspěšném připojení se serverem v <a href="#loginFunction">loginFunction</a> či lokálním přihlášením v <a href="#loginOffline">loginOffline</a>.
Dle (ne)nastaveného hesla mění stránku na <code>pp_SetPassword</code>, nebo volá <a href="#gotoConference_Choose">gotoConference_Choose</a>.
Inicializuje volání <a href="#touchFunction">touchFunction</a> každých <a href="update_loop_time">update_loop_time</a>.</p>
</dd>
<dt><a href="#loginOffline">loginOffline(def)</a> ⇒ <code><a href="#Internet_response_object">Internet_response_object</a></code><br/>&nbsp;&nbsp;<small>Kategotie:&nbsp;<i><a href="#module_Atom">Atom</a></i></small></dt>
<dd><p>Zkusí se přihlásit pomocí lokálně uloženeého hesla</p>
</dd>
<dt><a href="#touchFunction">touchFunction()</a><br/>&nbsp;&nbsp;<small>Kategotie:&nbsp;<i><a href="#module_Atom">Atom</a></i></small></dt>
<dd><p>Funkce, která se volá každých <a href="update_loop_time">update_loop_time</a></p>
</dd>
<dt><a href="#addUserThumb">addUserThumb(row_el, photo, type)</a><br/>&nbsp;&nbsp;<small>Kategotie:&nbsp;<i><a href="#module_Atom">Atom</a></i></small></dt>
<dd><p>Async přidání fotografie (primárně pro uživatele) do zadaného řádku v seznamu (kontaktů).</p>
</dd>
<dt><a href="#link_gotoProfile">link_gotoProfile(_this)</a><br/>&nbsp;&nbsp;<small>Kategotie:&nbsp;<i><a href="#module_Link">Link</a></i>, <i><a href="#module_Atom">Atom</a></i></small></dt>
<dd><p>Navigování na profil člověka v seznamu</p>
</dd>
<dt><a href="#link_peopleFilterChange">link_peopleFilterChange(_this)</a><br/>&nbsp;&nbsp;<small>Kategotie:&nbsp;<i><a href="#module_Link">Link</a></i>, <i><a href="#module_Atom">Atom</a></i></small></dt>
<dd><p>Změna filtru na stránce ``pp_People`.</p>
</dd>
<dt><a href="#link_PhotosClickEvent">link_PhotosClickEvent(_this)</a><br/>&nbsp;&nbsp;<small>Kategotie:&nbsp;<i><a href="#module_Link">Link</a></i>, <i><a href="#module_Atom">Atom</a></i></small></dt>
<dd><p>Zvětší fototgrafii na fullstreen.</p>
</dd>
<dt><a href="#link_togglePeopleFilter">link_togglePeopleFilter(_this)</a><br/>&nbsp;&nbsp;<small>Kategotie:&nbsp;<i><a href="#module_Link">Link</a></i>, <i><a href="#module_Atom">Atom</a></i></small></dt>
<dd><p>Kliknutí na tlačítko v hlavičce, zatím bez funkce.</p>
</dd>
<dt><a href="#submitAppUserEdit">submitAppUserEdit(_this)</a><br/>&nbsp;&nbsp;<small>Kategotie:&nbsp;<i><a href="#module_Atom">Atom</a></i></small></dt>
<dd><p>Ukládání formuláře pro editování některých položek uživatele</p>
</dd>
<dt><a href="#forgetPasswordFunction">forgetPasswordFunction(_this)</a><br/>&nbsp;&nbsp;<small>Kategotie:&nbsp;<i><a href="#module_Atom">Atom</a></i></small></dt>
<dd><p>Odeslání dotazu na forget password</p>
</dd>
<dt><a href="#link_togglePasswordVisibility">link_togglePasswordVisibility(_this)</a><br/>&nbsp;&nbsp;<small>Kategotie:&nbsp;<i><a href="#module_Link">Link</a></i>, <i><a href="#module_Atom">Atom</a></i></small></dt>
<dd><p>Mění skrytí hesla (měný typ inputu <code>password</code>/<code>text</code>).</p>
</dd>
<dt><a href="#passwordChangeSuccess">passwordChangeSuccess()</a><br/>&nbsp;&nbsp;<small>Kategotie:&nbsp;<i><a href="#module_Atom">Atom</a></i></small></dt>
<dd><p>Procedura, která se zavolá při změně hesla</p>
</dd>
<dt><a href="#setPasswordFunction">setPasswordFunction(_this)</a><br/>&nbsp;&nbsp;<small>Kategotie:&nbsp;<i><a href="#module_Atom">Atom</a></i></small></dt>
<dd><p>Submit funkce k formuláři pro změnu hesla. Pro načtení inputů používá jméno formuláře spojený s <code>_password_1</code> a <code>_password_2</code>. Po dokončení volá globální funkci dle <code>data-fce</code>.</p>
</dd>
<dt><a href="#notDeletedRows">notDeletedRows(obj)</a><br/>&nbsp;&nbsp;<small>Kategotie:&nbsp;<i><a href="#module_Atom">Atom</a></i></small></dt>
<dd><p>Vrátí, zda je záznam <strong>nesmazaný</strong>, pokud uživatel není <code>.dev=&quot;1&quot;</code> chápou se záznamy <code>obj.dev=&quot;1&quot;</code> jako smazané.</p>
</dd>
<dt><a href="#stopPropagate">stopPropagate(ev)</a><br/>&nbsp;&nbsp;<small>Kategotie:&nbsp;<i><a href="#module_Atom">Atom</a></i></small></dt>
<dd><p>Utilita pro blokování probublávání událostí (např. <code>onclick</code>).</p>
</dd>
<dt><a href="#deleteUserChoosedPhoto">deleteUserChoosedPhoto()</a><br/>&nbsp;&nbsp;<small>Kategotie:&nbsp;<i><a href="#module_Molekula">Molekula</a></i></small></dt>
<dd><p>Spravuje smazání fotky uživatele.</p>
</dd>
<dt><a href="#loadAppUserProfilePhoto_">loadAppUserProfilePhoto_()</a><br/>&nbsp;&nbsp;<small>Kategotie:&nbsp;<i><a href="#module_Molekula">Molekula</a></i></small></dt>
<dd><p>Stáhne profilovou fotografii aktuálního uživatele aplikace (viz <a href="#_session.user">user</a>).</p>
</dd>
<dt><a href="#photosSlider">photosSlider(name, go_to, [data])</a><br/>&nbsp;&nbsp;<small>Kategotie:&nbsp;<i><a href="#module_Molekula">Molekula</a></i></small></dt>
<dd><p>Funkcionální část pro slideshow</p>
</dd>
<dt><a href="#saveNotesChoosedPhoto">saveNotesChoosedPhoto(def)</a><br/>&nbsp;&nbsp;<small>Kategotie:&nbsp;<i><a href="#module_Molekula">Molekula</a></i></small></dt>
<dd><p>Ukládání fotek u poznámek.</p>
</dd>
<dt><a href="#saveUserChoosedPhoto">saveUserChoosedPhoto(def)</a><br/>&nbsp;&nbsp;<small>Kategotie:&nbsp;<i><a href="#module_Molekula">Molekula</a></i></small></dt>
<dd><p>Ukládá vybranou fotku uživatele</p>
</dd>
<dt><a href="#writeUserPhoto">writeUserPhoto(row_el)</a> ⇒ <code>function</code><br/>&nbsp;&nbsp;<small>Kategotie:&nbsp;<i><a href="#module_Molekula">Molekula</a></i></small></dt>
<dd><p>Pomocná utilita, která vrací funkci pro zápis fotografie do předem daného úmístění.</p>
</dd>
<dt><a href="#debugLog">debugLog()</a></dt>
<dd><p>Logující funkce — při buildu se dle <code>package.json</code> (klíč <code>external_publication</code>) rozhodne zda se jedná o <code>()=&gt;{}</code> nebo <code>console.warn</code>.</p>
</dd>
<dt><a href="#component_notePhoto">component_notePhoto(def)</a> ⇒ <code><a href="#Komponenta">Komponenta</a></code><br/>&nbsp;&nbsp;<small>Kategotie:&nbsp;<i><a href="#module_Atom">Atom</a></i>, <i><a href="#module_DOM">DOM</a></i></small></dt>
<dd><p>Přidává <code>div</code> s fotografií a tlačítkem pro smazání.</p>
</dd>
<dt><a href="#_onDeviceReadyFunction">_onDeviceReadyFunction()</a><br/>&nbsp;&nbsp;<small>Kategotie:&nbsp;<i><a href="#module_Interní">Interní</a></i></small></dt>
<dd><p>Volá se po inicializaci <a href="https://github.com/jaandrle/indigo_cordovaCore">core.js</a> — tj. když je zařízení připraveno.</p>
</dd>
<dt><a href="#_onAllPagesReadyFunction">_onAllPagesReadyFunction()</a><br/>&nbsp;&nbsp;<small>Kategotie:&nbsp;<i><a href="#module_Interní">Interní</a></i></small></dt>
<dd><p>Volá se před funkcemi v <a href="#_onPagesReadyFunctions">_onPagesReadyFunctions</a> (při návštěvě jakékoliv stránky).</p>
</dd>
<dt><a href="#link_venuePhotoInfo">link_venuePhotoInfo(_this)</a><br/>&nbsp;&nbsp;<small>Kategotie:&nbsp;<i><a href="#module_Link">Link</a></i>, <i><a href="#module_Atom">Atom</a></i>, <i><a href="#module_Link">Link</a></i></small></dt>
<dd><p>Přechod do konkrétní <em>SignUp</em> konference</p>
</dd>
<dt><a href="#loginFunction">loginFunction(_this, localStorage_password)</a><br/>&nbsp;&nbsp;<small>Kategotie:&nbsp;<i><a href="#module_Atom">Atom</a></i>, <i><a href="#module_Link">Link</a></i></small></dt>
<dd><p>Spouští proces přihlašování</p>
</dd>
<dt><a href="#link_AlphabetLetter">link_AlphabetLetter(_this)</a><br/>&nbsp;&nbsp;<small>Kategotie:&nbsp;<i><a href="#module_Link">Link</a></i>, <i><a href="#module_Atom">Atom</a></i>, <i><a href="#module_Link">Link</a></i></small></dt>
<dd><p>Klikání na písmenka v abecední navigaci u uživatelích v konferencích</p>
</dd>
<dt><a href="#link_RetakeMyPhoto">link_RetakeMyPhoto(_this)</a><br/>&nbsp;&nbsp;<small>Kategotie:&nbsp;<i><a href="#module_Link">Link</a></i>, <i><a href="#module_Atom">Atom</a></i>, <i><a href="#module_Link">Link</a></i></small></dt>
<dd><p>Tlačítko pro přefocení <a href="app_user">app_user</a></p>
</dd>
<dt><a href="#link_fingerprintLogin">link_fingerprintLogin(_this)</a><br/>&nbsp;&nbsp;<small>Kategotie:&nbsp;<i><a href="#module_Molekula">Molekula</a></i>, <i><a href="#module_Link">Link</a></i></small></dt>
<dd><p>Tlačítko vyvolávající fingerprint</p>
</dd>
</dl>

## Události

<dl>
<dt><a href="#reactionsSubComponent_*">"reactionsSubComponent:*"</a><br/>&nbsp;&nbsp;<small>Kategotie:&nbsp;<i><a href="#module_Molekula">Molekula</a></i></small></dt>
<dd><p>Události <a href="comments_count.contentSubComponent">comments_count.contentSubComponent</a>.</p>
</dd>
<dt><a href="#event_show_more">"show_more"</a><br/>&nbsp;&nbsp;<small>Kategotie:&nbsp;<i><a href="#module_Molekula">Molekula</a></i></small></dt>
<dd><p>Zda zobrazit celý text</p>
</dd>
<dt><a href="#reactionsSubComponent_*">"reactionsSubComponent:*"</a><br/>&nbsp;&nbsp;<small>Kategotie:&nbsp;<i><a href="#module_Molekula">Molekula</a></i></small></dt>
<dd><p>Události <a href="comments_count.reactionsSubComponent">comments_count.reactionsSubComponent</a>.</p>
</dd>
<dt><a href="#event_i_like">"i_like"</a><br/>&nbsp;&nbsp;<small>Kategotie:&nbsp;<i><a href="#module_Molekula">Molekula</a></i></small></dt>
<dd><p>Zda dal srdíčko uživatel appky</p>
</dd>
<dt><a href="#event_i_comment">"i_comment"</a><br/>&nbsp;&nbsp;<small>Kategotie:&nbsp;<i><a href="#module_Molekula">Molekula</a></i></small></dt>
<dd><p>Zda okomentoval uživatel appky</p>
</dd>
<dt><a href="#event_likes_count">"likes_count"</a><br/>&nbsp;&nbsp;<small>Kategotie:&nbsp;<i><a href="#module_Molekula">Molekula</a></i></small></dt>
<dd><p>Počet srdíček</p>
</dd>
<dt><a href="#event_comments_count">"comments_count"</a><br/>&nbsp;&nbsp;<small>Kategotie:&nbsp;<i><a href="#module_Molekula">Molekula</a></i></small></dt>
<dd><p>Počet komentářů</p>
</dd>
<dt><a href="#event_deleteUserChoosedPhoto">"deleteUserChoosedPhoto"</a></dt>
<dd><p>Smazat fotku uživatele</p>
</dd>
<dt><a href="#event_saveNotesChoosedPhoto">"saveNotesChoosedPhoto"</a></dt>
<dd><p>Uložit fotku k poznámce</p>
</dd>
<dt><a href="#event_saveUserChoosedPhoto">"saveUserChoosedPhoto"</a></dt>
<dd><p>Uložit fotku uživatele</p>
</dd>
<dt><a href="#event_sync_agendas">"sync_agendas"</a></dt>
<dd><p>Synchronizace tabulky &quot;agenda&quot;.</p>
</dd>
<dt><a href="#event_sync_attendances">"sync_attendances"</a></dt>
<dd><p>Synchronizace tabulky &quot;attendance&quot;. Pokud smazáno na portále (<code>*.deleted=1</code>) maže se fyzicky i v appce.</p>
</dd>
<dt><a href="#event_sync_conferences">"sync_conferences"</a></dt>
<dd><p>Synchronizace tabulky &quot;conference&quot;.</p>
</dd>
<dt><a href="#event_sync_feedbacks_answers">"sync_feedbacks_answers"</a></dt>
<dd><p>Synchronizace tabulky &quot;feedbacks_answers&quot;. Tabulka se při synchronizaci vždy <strong>přepisuje</strong> (pokud příjde prázdné pole =&gt; tabulka se jen smaže).</p>
</dd>
<dt><a href="#event_sync_users">"sync_users"</a></dt>
<dd><p>Synchronizace tabulky &quot;users&quot;.</p>
</dd>
</dl>

## Definice typů

<dl>
<dt><a href="#DB_row">DB_row</a> : <code>Object</code> ℗</dt>
<dd><p>Řádek z databáze.</p>
</dd>
<dt><a href="#LinkThis">LinkThis</a> : <code>Object</code> ℗</dt>
<dd><p>Viz <a href="https://github.com/jaandrle/indigo_cordovaCore/blob/master/docs/core_regular.md#getLinkThis">getLinkThis()</a>.</p>
</dd>
<dt><a href="#PageThis">PageThis</a> : <code>Object</code> ℗</dt>
<dd><p>Viz <a href="https://github.com/jaandrle/indigo_cordovaCore/blob/master/docs/core_regular.md#getActivePageThis">getActivePageThis(def)</a>.</p>
</dd>
<dt><a href="#FormThis">FormThis</a> : <code><a href="#LinkThis">LinkThis</a></code> ℗</dt>
<dd><p>Viz <a href="https://github.com/jaandrle/indigo_cordovaCore/blob/master/docs/core_regular.md#formHandler">formHandler()</a>. Vlastně ale <a href="#LinkThis">LinkThis</a>, kde <code>el</code> je formulář sám.</p>
</dd>
<dt><a href="#Internet_response_object">Internet_response_object</a> : <code>Object</code> ℗</dt>
<dd><p>Viz <a href="https://github.com/jaandrle/indigo_cordovaCore/blob/master/docs/core_regular.md#Internet..Internet_response_object">Internet_response_object</a>.</p>
</dd>
<dt><a href="#Komponenta">Komponenta</a> : <code>Object</code> ℗</dt>
<dd><p>Komponenta (<code>share</code> z <code>$dom.component</code>) viz <a href="https://github.com/jaandrle/jaaJSU/blob/master/docs/jaaJSU.md#module_jaaJSU..$dom..instance_component.share">jaaJSU</a>.</p>
</dd>
<dt><a href="#KomponentaTap">KomponentaTap</a> : <code>array</code> ℗</dt>
<dd><p>Registrace <code>tapEventListener</code> pro <a href="#Komponenta">Komponenta</a>. Výstup z <a href="$dom.componentTap">$dom.componentTap</a>.</p>
</dd>
</dl>

## Rozhraní

<dl>
<dt><a href="#FunctionalClass">FunctionalClass</a> ℗</dt>
<dd><p>Třídy inspirované <a href="http://shop.oreilly.com/product/9780596517748.do">Douglas Crockford</a>. Instance se <strong>nevytvářejí pomocí <code>new *</code></strong>. Toto je inteface, který potom všechny třídy sdílejí.</p>
<p>Podrobněji viz <a href="https://github.com/jaandrle/indigo_cordovaCore/blob/master/docs/core_regular.md#FunctionalClass">FunctionalClass</a>.</p>
</dd>
</dl>

<a name="module_Atom"></a>

## Atom
>Jedná se o **"malou"/často používanou utilitu**, která se volá v [molekulách](#module_Molekula) a [organismech](#module_Organismus).- Všechny atomy jsou v podsložce **`atoms/`**.- Důležitý rozdíl oproti [molekulách](#module_Molekula) je, že se importují globálně na konci ale před [organismy](#module_Organismus)


* * *

<a name="module_Molekula"></a>

## Molekula
>Jedná se již o **"větší" utilitu**, která se používá v [organismech](#module_Organismus) (**vyjímečně** v jiných [molekulách](#module_Molekula)).- Všechny molekuly jsou v podsložce **`molecules/`**.- Molekuly se musí importovat ručně v kódu pomocí `gulp_place`.


* * *

<a name="module_Organismus"></a>

## Organismus
>Jedná se již o **"velkou" část kódu**, která používá [atomy](#module_Atom) a [molekuly](#module_Organismus), ale sama v nich volána není.- Typicky se jedná o [stránky](#module_Stránka).- Všechny molekuly jsou v podsložce **`organisms/`**.- Organismy se importují najednou úplně nakonec.


* * *

<a name="module_Stránka"></a>

## Stránka
>Reprezentuje statickou/dynamickou část nějaké stránky.- Dynamické části v [_onPagesReadyFunctions](#_onPagesReadyFunctions).- Statické HTML části v [Dokumentace HTML template souborů](./html.md#nav_stránky).


* * *

<a name="module_Link"></a>

## Link
<small>&#9660;</small> **Krátký popis**
> Reprezentuje funkci, která se typicky (ne samozřejmě výhradně) volá při kliknutí na nějaký HTML prvek.
<details><summary><b>Podrobný popis</b></summary>

Používá se přiřazování z [core.js#tapEventListener](https://github.com/jaandrle/indigo_cordovaCore/blob/master/docs/core_regular.md#tapEventListener), tj. v krátkosti:- Navěšuje se pomocí zápisu `<a data-cmd="link-fce" data-fce="jmeno globalni funkce" data-done="false" …`, podrobněji viz [parseHTML](https://github.com/jaandrle/indigo_cordovaCore/blob/master/docs/core_regular.md#parseHTML).- V JavaScriptu lze používat pomocnou funkci [dataCmd](https://github.com/jaandrle/indigo_cordovaCore/blob/master/docs/core_regular.md#dataCmd).- V průběhu "linku" je naslouchání pozastaveno dokut není zavoláno `linkEnd`.

</details>


* * *

<a name="module_DOM"></a>

## DOM
>Reprezentuje dynamické HTML komponenty generující se až za běhu programu. Pokud se týkají společné "věci" jsou sdružované do jmenných prostorů a [molekul](Molekula).Jsou reprezentované [Komponenta](#Komponenta).


* * *

<a name="FunctionalClass"></a>

## FunctionalClass ℗
>Třídy inspirované [Douglas Crockford](http://shop.oreilly.com/product/9780596517748.do). Instance se **nevytvářejí pomocí `new *`**. Toto je inteface, který potom všechny třídy sdílejí.Podrobněji viz [FunctionalClass](https://github.com/jaandrle/indigo_cordovaCore/blob/master/docs/core_regular.md#FunctionalClass).

**Kind**: global interface <a href="../app_src/js/types.sub.js#L44" title="../app_src/js/types.sub.js řádek 44"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;types.sub.js:44)</small></a>  
**Access**: private  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| <code>create</code> | <code>function</code> | Konstruktor |


* * *

<a name="FeedbacksForms"></a>

## FeedbacksForms
>Feedbacks form helper class (generation/results).

**Kind**: global mixin <a href="../app_src/js/Ψ_classes/script_feedbacksforms.sub.js#L11" title="../app_src/js/Ψ_classes/script_feedbacksforms.sub.js řádek 11"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;script_feedbacksforms.sub.js:11)</small></a>  
**Mixes**: [<code>FunctionalClass</code>](#FunctionalClass)  
**Version**: 1.1  

* [FeedbacksForms](#FeedbacksForms)
    * _static_
        * [.create(def)](#FeedbacksForms.create) ⇒ [<code>instance</code>](#FeedbacksForms..instance)
    * _inner_
        * [~instance](#FeedbacksForms..instance) : <code>Object</code>
            * [.add_question](#FeedbacksForms..instance.add_question) : <code>object</code>
                * [.wordcloud(def)](#FeedbacksForms..instance.add_question.wordcloud)
                * [.rating(def)](#FeedbacksForms..instance.add_question.rating)
                * [.yes_no(def)](#FeedbacksForms..instance.add_question.yes_no)
                * [.choose_one(def)](#FeedbacksForms..instance.add_question.choose_one)
                * [.free_text(def)](#FeedbacksForms..instance.add_question.free_text)
            * [.get_result](#FeedbacksForms..instance.get_result) : <code>object</code>
                * [.wordcloud(wrapper)](#FeedbacksForms..instance.get_result.wordcloud) ⇒ <code>array</code>
                * [.rating(wrapper)](#FeedbacksForms..instance.get_result.rating) ⇒ <code>Number</code>
                * [.yes_no(wrapper)](#FeedbacksForms..instance.get_result.yes_no) ⇒ <code>Number</code>
                * [.choose_one(wrapper)](#FeedbacksForms..instance.get_result.choose_one) ⇒ <code>Number</code>
                * [.free_text(wrapper)](#FeedbacksForms..instance.get_result.free_text) ⇒ <code>String</code>
            * [.supports(type)](#FeedbacksForms..instance.supports) ⇒ <code>Boolean</code>
            * [.getResults()](#FeedbacksForms..instance.getResults) ⇒ [<code>ResultsInfos</code>](#FeedbacksForms..ResultsInfos)
        * [~ResultsInfos](#FeedbacksForms..ResultsInfos) : <code>Object</code>
        * [~Result](#FeedbacksForms..Result) : <code>Object</code>


* * *

<a name="FeedbacksForms.create"></a>

### FeedbacksForms.create(def) ⇒ [<code>instance</code>](#FeedbacksForms..instance)
>It accepts object for getting params by JavaScript's destructuring assignment syntax (DAS)

**Kind**: static method of [<code>FeedbacksForms</code>](#FeedbacksForms) <a href="../app_src/js/Ψ_classes/script_feedbacksforms.sub.js#L18" title="../app_src/js/Ψ_classes/script_feedbacksforms.sub.js řádek 18"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;script_feedbacksforms.sub.js:18)</small></a>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| <code>def</code> | <code>Object</code> |  | Parametry pro initializaci |
| &nbsp;&boxvr;&nbsp;<code>content_el</code> | <code>NodeElement</code> |  | Feedback wrapper element (usualy content_el part of page) |
| &nbsp;&boxvr;&nbsp;<code>words_for_wordcloudList</code> | <code>Array.&lt;String&gt;</code> |  | of words for wordcloud (for future it will be moved to wordcloud generator method) |
| &nbsp;&boxvr;&nbsp;<code>wrappers_class_names</code> | <code>Object</code> |  | List of css classes names for feedbacks parts wrappers |
| &nbsp;&boxvr;&nbsp;[<code>notes_class</code>] | <code>String</code> | <code>&quot;note&quot;</code> | CSS class for optional description/note paragraph under wordcloud words (default: "note", if not defined the paragraph is not generated) |


* * *

<a name="FeedbacksForms..instance"></a>

### FeedbacksForms~instance : <code>Object</code>
**Kind**: inner typedef of [<code>FeedbacksForms</code>](#FeedbacksForms) <a href="../app_src/js/Ψ_classes/script_feedbacksforms.sub.js#L12" title="../app_src/js/Ψ_classes/script_feedbacksforms.sub.js řádek 12"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;script_feedbacksforms.sub.js:12)</small></a>  
**Read only**: true  

* [~instance](#FeedbacksForms..instance) : <code>Object</code>
    * [.add_question](#FeedbacksForms..instance.add_question) : <code>object</code>
        * [.wordcloud(def)](#FeedbacksForms..instance.add_question.wordcloud)
        * [.rating(def)](#FeedbacksForms..instance.add_question.rating)
        * [.yes_no(def)](#FeedbacksForms..instance.add_question.yes_no)
        * [.choose_one(def)](#FeedbacksForms..instance.add_question.choose_one)
        * [.free_text(def)](#FeedbacksForms..instance.add_question.free_text)
    * [.get_result](#FeedbacksForms..instance.get_result) : <code>object</code>
        * [.wordcloud(wrapper)](#FeedbacksForms..instance.get_result.wordcloud) ⇒ <code>array</code>
        * [.rating(wrapper)](#FeedbacksForms..instance.get_result.rating) ⇒ <code>Number</code>
        * [.yes_no(wrapper)](#FeedbacksForms..instance.get_result.yes_no) ⇒ <code>Number</code>
        * [.choose_one(wrapper)](#FeedbacksForms..instance.get_result.choose_one) ⇒ <code>Number</code>
        * [.free_text(wrapper)](#FeedbacksForms..instance.get_result.free_text) ⇒ <code>String</code>
    * [.supports(type)](#FeedbacksForms..instance.supports) ⇒ <code>Boolean</code>
    * [.getResults()](#FeedbacksForms..instance.getResults) ⇒ [<code>ResultsInfos</code>](#FeedbacksForms..ResultsInfos)


* * *

<a name="FeedbacksForms..instance.add_question"></a>

#### instance.add\_question : <code>object</code>
>Group adding/creating methods

**Kind**: static namespace of [<code>instance</code>](#FeedbacksForms..instance) <a href="../app_src/js/Ψ_classes/script_feedbacksforms.sub.js#L42" title="../app_src/js/Ψ_classes/script_feedbacksforms.sub.js řádek 42"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;script_feedbacksforms.sub.js:42)</small></a>  

* [.add_question](#FeedbacksForms..instance.add_question) : <code>object</code>
    * [.wordcloud(def)](#FeedbacksForms..instance.add_question.wordcloud)
    * [.rating(def)](#FeedbacksForms..instance.add_question.rating)
    * [.yes_no(def)](#FeedbacksForms..instance.add_question.yes_no)
    * [.choose_one(def)](#FeedbacksForms..instance.add_question.choose_one)
    * [.free_text(def)](#FeedbacksForms..instance.add_question.free_text)


* * *

<a name="FeedbacksForms..instance.add_question.wordcloud"></a>

##### add_question.wordcloud(def)
>Create wordcloud in form (params by DAS)

**Kind**: static method of [<code>add\_question</code>](#FeedbacksForms..instance.add_question) <a href="../app_src/js/Ψ_classes/script_feedbacksforms.sub.js#L48" title="../app_src/js/Ψ_classes/script_feedbacksforms.sub.js řádek 48"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;script_feedbacksforms.sub.js:48)</small></a>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| <code>def</code> | <code>Object</code> |  | Question params |
| &nbsp;&boxvr;&nbsp;<code>id</code> | <code>Mixed</code> |  | Class holds this info (typically identificator) and returns in getResults method |
| &nbsp;&boxvr;&nbsp;<code>question</code> | <code>String</code> |  | Question text (if not passed it is generated in form "Question 1, ...") |
| &nbsp;&boxvr;&nbsp;[<code>note</code>] | <code>String</code> | <code>&quot;Please choose 3 words.&quot;</code> | Text for note/description paragraph wich will be added after wordcloud (also see [`notes_class`](#FeedbacksForms.create)) |
| &nbsp;&boxvr;&nbsp;<code>answer</code> | <code>array</code> |  | Words ids to checked |
| &nbsp;&boxvr;&nbsp;<code>max</code> | <code>array</code> |  | Sets words limit to choosing/validating |


* * *

<a name="FeedbacksForms..instance.add_question.rating"></a>

##### add_question.rating(def)
>Create rating question from 1 to x

**Kind**: static method of [<code>add\_question</code>](#FeedbacksForms..instance.add_question) <a href="../app_src/js/Ψ_classes/script_feedbacksforms.sub.js#L80" title="../app_src/js/Ψ_classes/script_feedbacksforms.sub.js řádek 80"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;script_feedbacksforms.sub.js:80)</small></a>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| <code>def</code> | <code>Object</code> |  | Question params |
| &nbsp;&boxvr;&nbsp;<code>id</code> | <code>Mixed</code> |  | Class holds this info (typically identificator) and returns in getResults method |
| &nbsp;&boxvr;&nbsp;<code>question</code> | <code>String</code> |  | Question text (if not passed it is generated in form "Question 1, ...") |
| &nbsp;&boxvr;&nbsp;[<code>max</code>] | <code>Number</code> | <code>5</code> | Rating icon class |
| &nbsp;&boxvr;&nbsp;[<code>className</code>] | <code>String</code> | <code>&quot;icon-star&quot;</code> | Rating icon class |
| &nbsp;&boxvr;&nbsp;[<code>question_after</code>] | <code>String</code> | <code>&quot;5 stars mean the best&quot;</code> | Is showed after question (default " (5 stars mean the best)") |
| &nbsp;&boxvr;&nbsp;[<code>answer</code>] | <code>Number</code> | <code>0</code> | Previous answer (number 1-max see before) - no validation! |
| &nbsp;&boxvr;&nbsp;[<code>optional</code>] | <code>Boolean</code> | <code>0</code> | Affects validation |


* * *

<a name="FeedbacksForms..instance.add_question.yes_no"></a>

##### add_question.yes\_no(def)
>Create closed question - use choose_one method

**Kind**: static method of [<code>add\_question</code>](#FeedbacksForms..instance.add_question) <a href="../app_src/js/Ψ_classes/script_feedbacksforms.sub.js#L109" title="../app_src/js/Ψ_classes/script_feedbacksforms.sub.js řádek 109"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;script_feedbacksforms.sub.js:109)</small></a>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| <code>def</code> | <code>Object</code> |  | Question params |
| &nbsp;&boxvr;&nbsp;<code>id</code> | <code>Mixed</code> |  | Class holds this info (typically identificator) and returns in getResults method |
| &nbsp;&boxvr;&nbsp;<code>question</code> | <code>String</code> |  | Question text (if not passed it is generated in form "Question 1, ...") |
| &nbsp;&boxvr;&nbsp;[<code>answer</code>] | <code>Number</code> | <code>-1</code> | Previous answer (0/1) |
| &nbsp;&boxvr;&nbsp;[<code>optional</code>] | <code>Boolean</code> | <code>0</code> | Affects validation |


* * *

<a name="FeedbacksForms..instance.add_question.choose_one"></a>

##### add_question.choose\_one(def)
>Create closed question with predefined possible answers

**Kind**: static method of [<code>add\_question</code>](#FeedbacksForms..instance.add_question) <a href="../app_src/js/Ψ_classes/script_feedbacksforms.sub.js#L124" title="../app_src/js/Ψ_classes/script_feedbacksforms.sub.js řádek 124"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;script_feedbacksforms.sub.js:124)</small></a>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| <code>def</code> | <code>Object</code> |  | Question params |
| &nbsp;&boxvr;&nbsp;<code>id</code> | <code>Mixed</code> |  | Class holds this info (typically identificator) and returns in getResults method |
| &nbsp;&boxvr;&nbsp;<code>question</code> | <code>String</code> |  | Question text (if not passed it is generated in form "Question 1, ...") |
| &nbsp;&boxvr;&nbsp;<code>choose_list</code> | <code>array</code> |  | Array with possibilities - for yes_no => ["Yes", "No"] |
| &nbsp;&boxvr;&nbsp;[<code>answer</code>] | <code>Number</code> | <code>-1</code> | Previous answer (0/1) |
| &nbsp;&boxvr;&nbsp;[<code>optional</code>] | <code>Boolean</code> | <code>0</code> | Affects validation |


* * *

<a name="FeedbacksForms..instance.add_question.free_text"></a>

##### add_question.free\_text(def)
>Create opened question with textarea

**Kind**: static method of [<code>add\_question</code>](#FeedbacksForms..instance.add_question) <a href="../app_src/js/Ψ_classes/script_feedbacksforms.sub.js#L140" title="../app_src/js/Ψ_classes/script_feedbacksforms.sub.js řádek 140"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;script_feedbacksforms.sub.js:140)</small></a>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| <code>def</code> | <code>Object</code> |  | Question params |
| &nbsp;&boxvr;&nbsp;<code>id</code> | <code>Mixed</code> |  | Class holds this info (typically identificator) and returns in getResults method |
| &nbsp;&boxvr;&nbsp;<code>question</code> | <code>String</code> |  | Question text (if not passed it is generated in form "Question 1, ...") |
| &nbsp;&boxvr;&nbsp;[<code>answer</code>] | <code>String</code> | <code>&quot;&quot;</code> | Previous answer |
| &nbsp;&boxvr;&nbsp;[<code>placeholder</code>] | <code>String</code> | <code>&quot;Write your answer here&quot;</code> |  |
| &nbsp;&boxvr;&nbsp;[<code>optional</code>] | <code>Boolean</code> | <code>1</code> | Affects validation |


* * *

<a name="FeedbacksForms..instance.get_result"></a>

#### instance.get\_result : <code>object</code>
>Group methods wich return values of form items

**Kind**: static namespace of [<code>instance</code>](#FeedbacksForms..instance) <a href="../app_src/js/Ψ_classes/script_feedbacksforms.sub.js#L168" title="../app_src/js/Ψ_classes/script_feedbacksforms.sub.js řádek 168"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;script_feedbacksforms.sub.js:168)</small></a>  

* [.get_result](#FeedbacksForms..instance.get_result) : <code>object</code>
    * [.wordcloud(wrapper)](#FeedbacksForms..instance.get_result.wordcloud) ⇒ <code>array</code>
    * [.rating(wrapper)](#FeedbacksForms..instance.get_result.rating) ⇒ <code>Number</code>
    * [.yes_no(wrapper)](#FeedbacksForms..instance.get_result.yes_no) ⇒ <code>Number</code>
    * [.choose_one(wrapper)](#FeedbacksForms..instance.get_result.choose_one) ⇒ <code>Number</code>
    * [.free_text(wrapper)](#FeedbacksForms..instance.get_result.free_text) ⇒ <code>String</code>


* * *

<a name="FeedbacksForms..instance.get_result.wordcloud"></a>

##### get_result.wordcloud(wrapper) ⇒ <code>array</code>
>Get checked words in wordcloud

**Kind**: static method of [<code>get\_result</code>](#FeedbacksForms..instance.get_result) <a href="../app_src/js/Ψ_classes/script_feedbacksforms.sub.js#L174" title="../app_src/js/Ψ_classes/script_feedbacksforms.sub.js řádek 174"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;script_feedbacksforms.sub.js:174)</small></a>  
**Returns**: <code>array</code> - words ids / empty array  

| Param | Type | Description |
| --- | --- | --- |
| <code>wrapper</code> | <code>NodeElement</code> | Wordcloud wrapper element |


* * *

<a name="FeedbacksForms..instance.get_result.rating"></a>

##### get_result.rating(wrapper) ⇒ <code>Number</code>
>Get choosed rating number

**Kind**: static method of [<code>get\_result</code>](#FeedbacksForms..instance.get_result) <a href="../app_src/js/Ψ_classes/script_feedbacksforms.sub.js#L182" title="../app_src/js/Ψ_classes/script_feedbacksforms.sub.js řádek 182"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;script_feedbacksforms.sub.js:182)</small></a>  
**Returns**: <code>Number</code> - 1-max (0 if not choosed)  

| Param | Type | Description |
| --- | --- | --- |
| <code>wrapper</code> | <code>NodeElement</code> | Rating wrapper element |


* * *

<a name="FeedbacksForms..instance.get_result.yes_no"></a>

##### get_result.yes\_no(wrapper) ⇒ <code>Number</code>
>Get choosed yes_no number

**Kind**: static method of [<code>get\_result</code>](#FeedbacksForms..instance.get_result) <a href="../app_src/js/Ψ_classes/script_feedbacksforms.sub.js#L190" title="../app_src/js/Ψ_classes/script_feedbacksforms.sub.js řádek 190"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;script_feedbacksforms.sub.js:190)</small></a>  
**Returns**: <code>Number</code> - 0-1 (-1 if not choosed)  

| Param | Type | Description |
| --- | --- | --- |
| <code>wrapper</code> | <code>NodeElement</code> | Yes_no wrapper element |


* * *

<a name="FeedbacksForms..instance.get_result.choose_one"></a>

##### get_result.choose\_one(wrapper) ⇒ <code>Number</code>
>Get choosed choose_one number

**Kind**: static method of [<code>get\_result</code>](#FeedbacksForms..instance.get_result) <a href="../app_src/js/Ψ_classes/script_feedbacksforms.sub.js#L198" title="../app_src/js/Ψ_classes/script_feedbacksforms.sub.js řádek 198"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;script_feedbacksforms.sub.js:198)</small></a>  
**Returns**: <code>Number</code> - 0-max (-1 if not choosed)  

| Param | Type | Description |
| --- | --- | --- |
| <code>wrapper</code> | <code>NodeElement</code> | Choose_one wrapper element |


* * *

<a name="FeedbacksForms..instance.get_result.free_text"></a>

##### get_result.free\_text(wrapper) ⇒ <code>String</code>
>Get choosed free_text number

**Kind**: static method of [<code>get\_result</code>](#FeedbacksForms..instance.get_result) <a href="../app_src/js/Ψ_classes/script_feedbacksforms.sub.js#L206" title="../app_src/js/Ψ_classes/script_feedbacksforms.sub.js řádek 206"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;script_feedbacksforms.sub.js:206)</small></a>  
**Returns**: <code>String</code> - Answer text ("" if not filled)  

| Param | Type | Description |
| --- | --- | --- |
| <code>wrapper</code> | <code>NodeElement</code> | Free_text wrapper element |


* * *

<a name="FeedbacksForms..instance.supports"></a>

#### instance.supports(type) ⇒ <code>Boolean</code>
>Returns bool value if class support 'type'

**Kind**: static method of [<code>instance</code>](#FeedbacksForms..instance) <a href="../app_src/js/Ψ_classes/script_feedbacksforms.sub.js#L158" title="../app_src/js/Ψ_classes/script_feedbacksforms.sub.js řádek 158"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;script_feedbacksforms.sub.js:158)</small></a>  

| Param | Type | Description |
| --- | --- | --- |
| <code>type</code> | <code>String</code> | Name of question type (infact name of function in '.add_question') |


* * *

<a name="FeedbacksForms..instance.getResults"></a>

#### instance.getResults() ⇒ [<code>ResultsInfos</code>](#FeedbacksForms..ResultsInfos)
**Kind**: static method of [<code>instance</code>](#FeedbacksForms..instance) <a href="../app_src/js/Ψ_classes/script_feedbacksforms.sub.js#L226" title="../app_src/js/Ψ_classes/script_feedbacksforms.sub.js řádek 226"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;script_feedbacksforms.sub.js:226)</small></a>  

* * *

<a name="FeedbacksForms..ResultsInfos"></a>

### FeedbacksForms~ResultsInfos : <code>Object</code>
**Kind**: inner typedef of [<code>FeedbacksForms</code>](#FeedbacksForms) <a href="../app_src/js/Ψ_classes/script_feedbacksforms.sub.js#L238" title="../app_src/js/Ψ_classes/script_feedbacksforms.sub.js řádek 238"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;script_feedbacksforms.sub.js:238)</small></a>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| <code>results</code> | <code>Array.&lt;Result&gt;</code> |  |
| <code>is_valid_each</code> | <code>Array.&lt;Boolean&gt;</code> | *Optional* or validation |
| <code>is_valid</code> | <code>Boolean</code> | Overall value |
| <code>setClassForInvalid</code> | <code>function</code> | Procedure uses given className and sets all invalid elements |
| <code>clearSettedClasses</code> | <code>function</code> | Procedure recovers original className for each element |


* * *

<a name="FeedbacksForms..Result"></a>

### FeedbacksForms~Result : <code>Object</code>
**Kind**: inner typedef of [<code>FeedbacksForms</code>](#FeedbacksForms) <a href="../app_src/js/Ψ_classes/script_feedbacksforms.sub.js#L257" title="../app_src/js/Ψ_classes/script_feedbacksforms.sub.js řádek 257"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;script_feedbacksforms.sub.js:257)</small></a>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| <code>type</code> | <code>String</code> | Keys in [add_question](#FeedbacksForms..instance.add_question) |
| <code>answer</code> | <code>Mixed</code> |  |
| <code>max</code> | <code>Number</code> |  |
| <code>optional</code> | <code>Boolean</code> |  |


* * *

<a name="SetRead"></a>

## SetRead
>Class is providing storiging "global" data but avoiding messing up global scope.

**Kind**: global mixin <a href="../app_src/js/Ψ_classes/script_setread.sub.js#L10" title="../app_src/js/Ψ_classes/script_setread.sub.js řádek 10"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;script_setread.sub.js:10)</small></a>  
**Mixes**: [<code>FunctionalClass</code>](#FunctionalClass)  
**Version**: 1.1  

* [SetRead](#SetRead)
    * _static_
        * [.create()](#SetRead.create) ⇒ [<code>instance</code>](#SetRead..instance)
    * _inner_
        * [~instance](#SetRead..instance) : <code>Object</code>
            * [.set(topic, info)](#SetRead..instance.set)
            * [.remove(topic)](#SetRead..instance.remove)
            * [.read_(topic)](#SetRead..instance.read_) ⇒ <code>Promise</code>


* * *

<a name="SetRead.create"></a>

### SetRead.create() ⇒ [<code>instance</code>](#SetRead..instance)
**Kind**: static method of [<code>SetRead</code>](#SetRead) <a href="../app_src/js/Ψ_classes/script_setread.sub.js#L17" title="../app_src/js/Ψ_classes/script_setread.sub.js řádek 17"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;script_setread.sub.js:17)</small></a>  

* * *

<a name="SetRead..instance"></a>

### SetRead~instance : <code>Object</code>
**Kind**: inner typedef of [<code>SetRead</code>](#SetRead) <a href="../app_src/js/Ψ_classes/script_setread.sub.js#L11" title="../app_src/js/Ψ_classes/script_setread.sub.js řádek 11"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;script_setread.sub.js:11)</small></a>  
**Read only**: true  

* [~instance](#SetRead..instance) : <code>Object</code>
    * [.set(topic, info)](#SetRead..instance.set)
    * [.remove(topic)](#SetRead..instance.remove)
    * [.read_(topic)](#SetRead..instance.read_) ⇒ <code>Promise</code>


* * *

<a name="SetRead..instance.set"></a>

#### instance.set(topic, info)
**Kind**: static method of [<code>instance</code>](#SetRead..instance) <a href="../app_src/js/Ψ_classes/script_setread.sub.js#L26" title="../app_src/js/Ψ_classes/script_setread.sub.js řádek 26"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;script_setread.sub.js:26)</small></a>  

| Param | Type | Description |
| --- | --- | --- |
| <code>topic</code> | <code>Mixed</code> | Key of stored data `info` |
| <code>info</code> | <code>Mixed</code> | Data for storing |


* * *

<a name="SetRead..instance.remove"></a>

#### instance.remove(topic)
**Kind**: static method of [<code>instance</code>](#SetRead..instance) <a href="../app_src/js/Ψ_classes/script_setread.sub.js#L39" title="../app_src/js/Ψ_classes/script_setread.sub.js řádek 39"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;script_setread.sub.js:39)</small></a>  

| Param | Type | Description |
| --- | --- | --- |
| <code>topic</code> | <code>Mixed</code> | Key of stored data see [set](#SetRead..instance.set) |


* * *

<a name="SetRead..instance.read_"></a>

#### instance.read\_(topic) ⇒ <code>Promise</code>
>Non-blocking function (uses requestAnimationFrame)

**Kind**: static method of [<code>instance</code>](#SetRead..instance) <a href="../app_src/js/Ψ_classes/script_setread.sub.js#L47" title="../app_src/js/Ψ_classes/script_setread.sub.js řádek 47"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;script_setread.sub.js:47)</small></a>  
**.then**: <code>Mixed</code> Add stored data `info` (see [set](#SetRead..instance.set)) as argument if stored in class  
**.catch**: If `topic` is not in class  

| Param | Type | Description |
| --- | --- | --- |
| <code>topic</code> | <code>Mixed</code> | Key of stored data see [set](#SetRead..instance.set) |


* * *

<a name="update_loop"></a>

## update\_loop
>Obsahuje identifikátor `setInterval`u, který řeší cyklický dotaz `touch`.Inicializuje se při loginu viz [loginFunctionSuccess](#loginFunctionSuccess).

**Kind**: global variable <a href="../app_src/js/Ξ_consts_variables/Ξ_35_update_loop_update_loop_time.sub.js#L6" title="../app_src/js/Ξ_consts_variables/Ξ_35_update_loop_update_loop_time.sub.js řádek 6"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;Ξ_35_update_loop_update_loop_time.sub.js:6)</small></a>  

* * *

<a name="popup"></a>

## popup
>Spravuje malé popupy, inicializuje se v [initPopupSmall](#_onDeviceReadyFunction..initPopupSmall).

**Kind**: global variable <a href="../app_src/js/Ξ_consts_variables/Ξ_50_popup_note_photos_user_photo.sub.js#L6" title="../app_src/js/Ξ_consts_variables/Ξ_50_popup_note_photos_user_photo.sub.js řádek 6"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;Ξ_50_popup_note_photos_user_photo.sub.js:6)</small></a>  

* * *

<a name="note_photos"></a>

## note\_photos
>Obsahuje instanci třídy pro přidávání fotografií k poznámkám, inicializuje se v [initPhotosClasses](#_onDeviceReadyFunction..initPhotosClasses).

**Kind**: global variable <a href="../app_src/js/Ξ_consts_variables/Ξ_50_popup_note_photos_user_photo.sub.js#L11" title="../app_src/js/Ξ_consts_variables/Ξ_50_popup_note_photos_user_photo.sub.js řádek 11"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;Ξ_50_popup_note_photos_user_photo.sub.js:11)</small></a>  

* * *

<a name="user_photo"></a>

## user\_photo
>Obsahuje instanci třídy pro přidávání fotografií k uživatli aplikace, inicializuje se v [initPhotosClasses](#_onDeviceReadyFunction..initPhotosClasses).

**Kind**: global variable <a href="../app_src/js/Ξ_consts_variables/Ξ_50_popup_note_photos_user_photo.sub.js#L16" title="../app_src/js/Ξ_consts_variables/Ξ_50_popup_note_photos_user_photo.sub.js řádek 16"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;Ξ_50_popup_note_photos_user_photo.sub.js:16)</small></a>  

* * *

<a name="footer_el"></a>

## footer\_el
**Kind**: global variable <a href="../app_src/js/Ξ_consts_variables/Ξ_85_footer_el_footer_pages.sub.js#L4" title="../app_src/js/Ξ_consts_variables/Ξ_85_footer_el_footer_pages.sub.js řádek 4"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;Ξ_85_footer_el_footer_pages.sub.js:4)</small></a>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| <code>footer_el</code> | <code>NodeElement</code> | Odkaz na patičku |


* * *

<a name="footer_pages"></a>

## footer\_pages
**Kind**: global variable <a href="../app_src/js/Ξ_consts_variables/Ξ_85_footer_el_footer_pages.sub.js#L8" title="../app_src/js/Ξ_consts_variables/Ξ_85_footer_el_footer_pages.sub.js řádek 8"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;Ξ_85_footer_el_footer_pages.sub.js:8)</small></a>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| <code>footer_pages</code> | <code>Array.&lt;String&gt;</code> | Pole jmen stránek přístupných z patičky |


* * *

<a name="note_photos"></a>

## note\_photos
>Instance třídy ***CoreJS — Pictures*** spravující výběr fotografie pro poznámky. Souvisí s [initPhotosClasses](#_onDeviceReadyFunction..initPhotosClasses).

**Kind**: global variable <a href="../app_src/js/Ϟ_deviceready_functions/Ϟ_initPhotosClasses.sub.js#L35" title="../app_src/js/Ϟ_deviceready_functions/Ϟ_initPhotosClasses.sub.js řádek 35"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;Ϟ_initPhotosClasses.sub.js:35)</small></a>  
**Fires:** [<code>saveNotesChoosedPhoto</code>](#event_saveNotesChoosedPhoto)  

* * *

<a name="user_photo"></a>

## user\_photo
>Instance třídy ***CoreJS — Pictures*** spravující výběr fotografie pro uživatele. Souvisí s [initPhotosClasses](#_onDeviceReadyFunction..initPhotosClasses).

**Kind**: global variable <a href="../app_src/js/Ϟ_deviceready_functions/Ϟ_initPhotosClasses.sub.js#L42" title="../app_src/js/Ϟ_deviceready_functions/Ϟ_initPhotosClasses.sub.js řádek 42"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;Ϟ_initPhotosClasses.sub.js:42)</small></a>  
**Fires:** [<code>deleteUserChoosedPhoto</code>](#event_deleteUserChoosedPhoto)<br/>**Fires:** [<code>saveUserChoosedPhoto</code>](#event_saveUserChoosedPhoto)  

* * *

<a name="components_userLists"></a>

## components\_userLists : <code>object</code>
>Sdružuje komponenty pro generování seznamu kontaktů

**Kind**: global namespace <a href="../app_src/js/atoms/profily/components_userLists.sub.js#L6" title="../app_src/js/atoms/profily/components_userLists.sub.js řádek 6"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;components_userLists.sub.js:6)</small></a>  
**Categories:** <i><a href="#module_Atom">Atom</a></i>  

* [components_userLists](#components_userLists) : <code>object</code>
    * [._public.letterLI(def)](#components_userLists._public.letterLI) ⇒ [<code>Komponenta</code>](#Komponenta)
    * [._public.userLI(def)](#components_userLists._public.userLI) ⇒ [<code>Komponenta</code>](#Komponenta)
    * [._public.authorComponent(def)](#components_userLists._public.authorComponent) ⇒ [<code>Komponenta</code>](#Komponenta)


* * *

<a name="components_userLists._public.letterLI"></a>

### components_userLists.\_public.letterLI(def) ⇒ [<code>Komponenta</code>](#Komponenta)
>Generuje nadpis ("A", "B", …)

**Kind**: static method of [<code>components\_userLists</code>](#components_userLists) <a href="../app_src/js/atoms/profily/components_userLists.sub.js#L21" title="../app_src/js/atoms/profily/components_userLists.sub.js řádek 21"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;components_userLists.sub.js:21)</small></a>  
**Categories:** <i><a href="#module_Atom">Atom</a></i>  

| Param | Type | Description |
| --- | --- | --- |
| <code>def</code> | <code>Object</code> |  |
| &nbsp;&boxvr;&nbsp;<code>letter_last</code> | <code>String</code> | písmeno |


* * *

<a name="components_userLists._public.userLI"></a>

### components_userLists.\_public.userLI(def) ⇒ [<code>Komponenta</code>](#Komponenta)
>Generuje samotný řádek uživatele (fotka, jméno, pozice)

**Kind**: static method of [<code>components\_userLists</code>](#components_userLists) <a href="../app_src/js/atoms/profily/components_userLists.sub.js#L43" title="../app_src/js/atoms/profily/components_userLists.sub.js řádek 43"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;components_userLists.sub.js:43)</small></a>  
**Categories:** <i><a href="#module_Atom">Atom</a></i>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| <code>def</code> | <code>Object</code> |  |  |
| &nbsp;&boxvr;&nbsp;[<code>ontap</code>] | [<code>KomponentaTap</code>](#KomponentaTap) |  | Kliknutí na řádek uživatele |
| &nbsp;&boxvr;&nbsp;<code>is_new</code> | <code>String</code> |  | zda označit `data-is_new` |
| &nbsp;&boxvr;&nbsp;<code>user_name</code> | <code>String</code> |  | celé jméno |
| &nbsp;&boxvr;&nbsp;<code>user_position</code> | <code>String</code> |  | celá pozice |
| &nbsp;&boxvr;&nbsp;<code>user_thumb</code> | <code>String</code> |  | cesta k thumb obrázku |
| &nbsp;&boxvr;&nbsp;[<code>last</code>] | <code>Boolean</code> | <code>false</code> | zda je to poslední položka v seznamu |
| &nbsp;&boxvr;&nbsp;[<code>force_thumb_update</code>] | <code>Boolean</code> | <code>false</code> | zda vynutit stažení obrázku |
| &nbsp;&boxvr;&nbsp;[<code>user_is_scanned</code>] | <code>Boolean</code> |  | zda byl uzivatel naskenovadn |


* * *

<a name="components_userLists._public.authorComponent"></a>

### components_userLists.\_public.authorComponent(def) ⇒ [<code>Komponenta</code>](#Komponenta)
>Generuje řádek uživatele („autor”) s fotkou vlevo

**Kind**: static method of [<code>components\_userLists</code>](#components_userLists) <a href="../app_src/js/atoms/profily/components_userLists.sub.js#L82" title="../app_src/js/atoms/profily/components_userLists.sub.js řádek 82"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;components_userLists.sub.js:82)</small></a>  
**Categories:** <i><a href="#module_Atom">Atom</a></i>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| <code>def</code> | <code>object</code> |  |  |
| &nbsp;&boxvr;&nbsp;<code>full_name</code> | <code>string</code> |  | Celé jméno |
| &nbsp;&boxvr;&nbsp;<code>description</code> | <code>string</code> |  | Druhý řádek |
| &nbsp;&boxvr;&nbsp;[<code>dynamic_description</code>] | <code>boolean</code> | <code>false</code> | Zda umožnit dynamické aktualizace popisku (`onupdate` s klíčem `author_description`) |
| &nbsp;&boxvr;&nbsp;[<code>thumb</code>] | <code>string</code> |  | Cesta k `thumb` obrázků |
| &nbsp;&boxvr;&nbsp;[<code>className</code>] | <code>string</code> |  | Dodatečné třídy pro celou komponentu (za 'flexem') |


* * *

<a name="components_article"></a>

## components\_article : <code>object</code>
>Sdružuje komponenty pro generování článků (hl. pro [pp_Announcements](#_onPagesReadyFunctions.pp_Announcements)).

**Kind**: global namespace <a href="../app_src/js/molecules/components_article.sub.js#L3" title="../app_src/js/molecules/components_article.sub.js řádek 3"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;components_article.sub.js:3)</small></a>  
**Categories:** <i><a href="#module_Molekula">Molekula</a></i>  

* [components_article](#components_article) : <code>object</code>
    * _static_
        * [._public.article(def)](#components_article._public.article) ⇒ [<code>Komponenta</code>](#Komponenta)
    * _inner_
        * [~tap_showMore](#components_article..tap_showMore) : [<code>KomponentaTap</code>](#KomponentaTap)
        * [~tap_toggleLike](#components_article..tap_toggleLike) : [<code>KomponentaTap</code>](#KomponentaTap)
        * [~tap_openComments](#components_article..tap_openComments) : [<code>KomponentaTap</code>](#KomponentaTap)
        * [~contentSubComponent(def)](#components_article..contentSubComponent) ⇒ [<code>Komponenta</code>](#Komponenta)
        * [~reactionsSubComponent(def)](#components_article..reactionsSubComponent) ⇒ [<code>Komponenta</code>](#Komponenta)


* * *

<a name="components_article._public.article"></a>

### components_article.\_public.article(def) ⇒ [<code>Komponenta</code>](#Komponenta)
>Vypíše komponentu článku

**Kind**: static method of [<code>components\_article</code>](#components_article) <a href="../app_src/js/molecules/components_article/public_article.sub.js#L25" title="../app_src/js/molecules/components_article/public_article.sub.js řádek 25"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;public_article.sub.js:25)</small></a>  
**Categories:** <i><a href="#module_Molekula">Molekula</a></i>  
**Listens:** [<code>reactionsSubComponent:\*</code>](#reactionsSubComponent_*)<br/>**Listens:** <code>contentSubComponent:\*</code>  

| Param | Type | Description |
| --- | --- | --- |
| <code>def</code> | <code>object</code> |  |
| &nbsp;&boxvr;&nbsp;<code>id</code> | <code>number</code> | Identifikátor článku |
| &nbsp;&boxvr;&nbsp;[<code>photo</code>] | <code>string</code> | Fotografie k článku |
| &nbsp;&boxvr;&nbsp;<code>content</code> | <code>content</code> | Text článku |
| &nbsp;&boxvr;&nbsp;<code>author</code> | <code>object</code> | Informace o autorovi (předává se [components_userLists.authorComponent](components_userLists.authorComponent)). Kde `description` se bere z `created`. |
| &nbsp;&boxvr;&nbsp;<code>created</code> | <code>string</code> | Timestamp vytvoření článku |
| &nbsp;&boxvr;&nbsp;<code>i_like</code> | <code>boolean</code> | Zda dal srdíčko uživatel aplikace |
| &nbsp;&boxvr;&nbsp;<code>likes_count</code> | <code>number</code> | Počet srdíček |
| &nbsp;&boxvr;&nbsp;<code>i_comment</code> | <code>boolean</code> | Zda okomentoval uživatel aplikace |
| &nbsp;&boxvr;&nbsp;<code>comments_count</code> | <code>number</code> | Počet komentářů |
| &nbsp;&boxvr;&nbsp;<code>ontap</code> | [<code>KomponentaTap</code>](#KomponentaTap) | Kliknutí na článek |


* * *

<a name="components_article..tap_showMore"></a>

### components_article~tap\_showMore : [<code>KomponentaTap</code>](#KomponentaTap)
>Rozbaluje/Zkracuje text

**Kind**: inner constant of [<code>components\_article</code>](#components_article) <a href="../app_src/js/molecules/components_article/consts/tap_listeners.sub.js#L13" title="../app_src/js/molecules/components_article/consts/tap_listeners.sub.js řádek 13"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;tap_listeners.sub.js:13)</small></a>  
**Categories:** <i><a href="#module_Molekula">Molekula</a></i>  
**Fires:** [<code>show\_more</code>](#event_show_more)  

* * *

<a name="components_article..tap_toggleLike"></a>

### components_article~tap\_toggleLike : [<code>KomponentaTap</code>](#KomponentaTap)
>Přidá/odebere srdíčko k článku

**Kind**: inner constant of [<code>components\_article</code>](#components_article) <a href="../app_src/js/molecules/components_article/consts/tap_listeners.sub.js#L25" title="../app_src/js/molecules/components_article/consts/tap_listeners.sub.js řádek 25"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;tap_listeners.sub.js:25)</small></a>  
**Categories:** <i><a href="#module_Molekula">Molekula</a></i>  
**Fires:** [<code>i\_like</code>](#event_i_like)<br/>**Fires:** [<code>likes\_count</code>](#event_likes_count)  

* * *

<a name="components_article..tap_openComments"></a>

### components_article~tap\_openComments : [<code>KomponentaTap</code>](#KomponentaTap)
>Otevírá komentáře

**Kind**: inner constant of [<code>components\_article</code>](#components_article) <a href="../app_src/js/molecules/components_article/consts/tap_listeners.sub.js#L42" title="../app_src/js/molecules/components_article/consts/tap_listeners.sub.js řádek 42"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;tap_listeners.sub.js:42)</small></a>  
**Categories:** <i><a href="#module_Molekula">Molekula</a></i>  

* * *

<a name="components_article..contentSubComponent"></a>

### components_article~contentSubComponent(def) ⇒ [<code>Komponenta</code>](#Komponenta)
>Část pro obsah článku

**Kind**: inner method of [<code>components\_article</code>](#components_article) <a href="../app_src/js/molecules/components_article/private_contentSubComponent.sub.js#L20" title="../app_src/js/molecules/components_article/private_contentSubComponent.sub.js řádek 20"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;private_contentSubComponent.sub.js:20)</small></a>  
**Categories:** <i><a href="#module_Molekula">Molekula</a></i>  
**Listens:** <code>contentSubComponent:\*</code>  

| Param | Type | Description |
| --- | --- | --- |
| <code>def</code> | <code>object</code> |  |
| &nbsp;&boxvr;&nbsp;<code>textContent</code> | <code>string</code> | Obsah |
| &nbsp;&boxvr;&nbsp;<code>className</code> | <code>string</code> | CSS třídy pro obsah |
| &nbsp;&boxvr;&nbsp;<code>is_more</code> | <code>boolean</code> | Zda obsah zkrácen (zobrazit `More …`) |


* * *

<a name="components_article..reactionsSubComponent"></a>

### components_article~reactionsSubComponent(def) ⇒ [<code>Komponenta</code>](#Komponenta)
>Část pro zobrazení (počtu) srdíček/komentářů

**Kind**: inner method of [<code>components\_article</code>](#components_article) <a href="../app_src/js/molecules/components_article/private_reactionsSubComponent.sub.js#L24" title="../app_src/js/molecules/components_article/private_reactionsSubComponent.sub.js řádek 24"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;private_reactionsSubComponent.sub.js:24)</small></a>  
**Categories:** <i><a href="#module_Molekula">Molekula</a></i>  
**Listens:** [<code>reactionsSubComponent:\*</code>](#reactionsSubComponent_*)  

| Param | Type | Description |
| --- | --- | --- |
| <code>def</code> | <code>object</code> |  |
| &nbsp;&boxvr;&nbsp;<code>count</code> | <code>number</code> | Počet srdíček/komentářů |
| &nbsp;&boxvr;&nbsp;<code>i_did</code> | <code>boolean</code> | Zda dal srdíčko/komnetář uživatel aplikace |
| &nbsp;&boxvr;&nbsp;<code>type</code> | <code>enum</code> | Zda srdíčka/komenáře (`hearts`|`comments`) |


* * *

<a name="fingerprint"></a>

## fingerprint : <code>object</code>
>Utility pro fingerprint, texty načítá z `texty`, klíč pro ukládání načítá z `localStorage` (klíč dle `local_storage`).

**Kind**: global namespace <a href="../app_src/js/molecules/fingerprint.sub.js#L12" title="../app_src/js/molecules/fingerprint.sub.js řádek 12"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;fingerprint.sub.js:12)</small></a>  
**Categories:** <i><a href="#module_Molekula">Molekula</a></i>  

* [fingerprint](#fingerprint) : <code>object</code>
    * [.gotoRegistrationIfNeeded_(local_storage_key, [buttons])](#fingerprint.gotoRegistrationIfNeeded_) ⇒ <code>Promise</code>
    * [.registerFingerPrint_(local_storage_key)](#fingerprint.registerFingerPrint_) ⇒ <code>Promise</code>
    * [.getFingerPrintNameID_()](#fingerprint.getFingerPrintNameID_) ⇒ <code>Promise</code>
    * [.getFingerPrintNameID()](#fingerprint.getFingerPrintNameID) ⇒ <code>string</code>
    * [.fingerprintLogin_()](#fingerprint.fingerprintLogin_) ⇒ <code>Promise</code>


* * *

<a name="fingerprint.gotoRegistrationIfNeeded_"></a>

### fingerprint.gotoRegistrationIfNeeded\_(local_storage_key, [buttons]) ⇒ <code>Promise</code>
>Zkontoluje dostupnost fingerprintu a zda jiže není nastaven.

**Kind**: static method of [<code>fingerprint</code>](#fingerprint) <a href="../app_src/js/molecules/fingerprint.sub.js#L22" title="../app_src/js/molecules/fingerprint.sub.js řádek 22"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;fingerprint.sub.js:22)</small></a>  
**Categories:** <i><a href="#module_Molekula">Molekula</a></i>  
**Access**: public  
**.then**: Fingerprint dostupný a nenastaven  
**.catch**: Jinak  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| <code>local_storage_key</code> | <code>string</code> |  | Jméno klíče v `localStorage`, kde je booleanská hodnota, zda přejít na registraci biometrických informací. |
| [<code>buttons</code>] | <code>Array.&lt;string&gt;</code> | <code>[&quot;OK&quot;]</code> | Tlačítka dialogu. |


* * *

<a name="fingerprint.registerFingerPrint_"></a>

### fingerprint.registerFingerPrint\_(local_storage_key) ⇒ <code>Promise</code>
>Vyvolá registraci fingerprintu (očekává se, že se již volala [getFingerPrintNameID_](#fingerprint.getFingerPrintNameID_)).

**Kind**: static method of [<code>fingerprint</code>](#fingerprint) <a href="../app_src/js/molecules/fingerprint.sub.js#L41" title="../app_src/js/molecules/fingerprint.sub.js řádek 41"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;fingerprint.sub.js:41)</small></a>  
**Categories:** <i><a href="#module_Molekula">Molekula</a></i>  
**Access**: public  
**.then**: <code>{ text: string </code>} Fingerprint nenastaven (vrací zprávu)  
**.catch**: <code>{ text: string </code>} Jinak vrací fail hlášku  

| Param | Type | Description |
| --- | --- | --- |
| <code>local_storage_key</code> | <code>string</code> | Jméno klíče v `localStorage`, kde je booleanská hodnota, kde kontrolovat aktivovanost fingerprintu. |


* * *

<a name="fingerprint.getFingerPrintNameID_"></a>

### fingerprint.getFingerPrintNameID\_() ⇒ <code>Promise</code>
>Zkontoluje dostupnost fingerprintu.

**Kind**: static method of [<code>fingerprint</code>](#fingerprint) <a href="../app_src/js/molecules/fingerprint.sub.js#L68" title="../app_src/js/molecules/fingerprint.sub.js řádek 68"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;fingerprint.sub.js:68)</small></a>  
**Categories:** <i><a href="#module_Molekula">Molekula</a></i>  
**Access**: public  
**.then**: <code>number</code> Vrací pokud detekován _FaceID_ (2), _TouchID_ (0) a _FingerPrint_ (1: vlastně jen detekce androidu!).  
**.catch**: Jinak  

* * *

<a name="fingerprint.getFingerPrintNameID"></a>

### fingerprint.getFingerPrintNameID() ⇒ <code>string</code>
>Vrátí typ fungerprintu (dle předchozího volání [getFingerPrintNameID_](#fingerprint.getFingerPrintNameID_)).

**Kind**: static method of [<code>fingerprint</code>](#fingerprint) <a href="../app_src/js/molecules/fingerprint.sub.js#L87" title="../app_src/js/molecules/fingerprint.sub.js řádek 87"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;fingerprint.sub.js:87)</small></a>  
**Categories:** <i><a href="#module_Molekula">Molekula</a></i>  
**Access**: public  

* * *

<a name="fingerprint.fingerprintLogin_"></a>

### fingerprint.fingerprintLogin\_() ⇒ <code>Promise</code>
>Zobrazí dialog pro přihlášení pomoci biometrických údajů. Očekává se, že se již volala [getFingerPrintNameID_](#fingerprint.getFingerPrintNameID_).

**Kind**: static method of [<code>fingerprint</code>](#fingerprint) <a href="../app_src/js/molecules/fingerprint.sub.js#L97" title="../app_src/js/molecules/fingerprint.sub.js řádek 97"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;fingerprint.sub.js:97)</small></a>  
**Categories:** <i><a href="#module_Molekula">Molekula</a></i>  
**Access**: public  
**.then**: Uživatel se úspěšně autorizoval  
**.catch**: Vrací chybovou hlášku  

* * *

<a name="people_db_utils"></a>

## people\_db\_utils : <code>object</code>
>Tento jmenný prostor sdružuje utility pro filtrování záznamů ze sloučených tabulek `attendance` a `users`

**Kind**: global namespace <a href="../app_src/js/molecules/people_db_utils.sub.js#L5" title="../app_src/js/molecules/people_db_utils.sub.js řádek 5"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;people_db_utils.sub.js:5)</small></a>  
**Categories:** <i><a href="#module_Molekula">Molekula</a></i>  

* * *

<a name="_session"></a>

## \_session : <code>object</code>
>Sdružuje informace k právě spuštěne instanci aplikace.

**Kind**: global namespace <a href="../app_src/js/Ξ_consts_variables/Ξ_30__session.sub.js#L9" title="../app_src/js/Ξ_consts_variables/Ξ_30__session.sub.js řádek 9"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;Ξ_30__session.sub.js:9)</small></a>  

* [_session](#_session) : <code>object</code>
    * _static_
        * [.current_conference](#_session.current_conference)
        * [.current_feedbacks_view](#_session.current_feedbacks_view)
        * [.user](#_session.user)
        * [.conferences](#_session.conferences)
        * [.hash](#_session.hash)
        * [.pause_timestamp](#_session.pause_timestamp)
        * [.update(new_data)](#_session.update)
        * [.subscribe(key_name, function_identificator, onUpdateFunction)](#_session.subscribe) ⇒ <code>function</code>
        * [.unsubscribe(key_name, function_identificator)](#_session.unsubscribe) ⇒ <code>number</code>
        * [.clear()](#_session.clear)
    * _inner_
        * [~_sessionOnUpdate](#_session.._sessionOnUpdate) : <code>function</code>


* * *

<a name="_session.current_conference"></a>

### _session.current\_conference
>Konference na kterou je uživatel aktuálně přihlášen*Poznámka: Není potřeba kontrola, protože víme, že musí existovat pole jsme získali při loginu (nebo jsme použili lokální data).*

**Kind**: static property of [<code>\_session</code>](#_session) <a href="../app_src/js/atoms/login&touch/gotoConference.sub.js#L18" title="../app_src/js/atoms/login&touch/gotoConference.sub.js řádek 18"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;gotoConference.sub.js:18)</small></a>  
**Categories:** <i><a href="#module_Atom">Atom</a></i>  
**Properties**

| Name | Type |
| --- | --- |
| <code>current_conference</code> | <code>Array.&lt;String&gt;</code> | 


* * *

<a name="_session.current_feedbacks_view"></a>

### _session.current\_feedbacks\_view
>Jméno dynamického náhledu pro feedbacky k aktuální konferenci (generuje se v [gotoConference](#gotoConference)).

**Kind**: static property of [<code>\_session</code>](#_session) <a href="../app_src/js/atoms/login&touch/gotoConference.sub.js#L27" title="../app_src/js/atoms/login&touch/gotoConference.sub.js řádek 27"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;gotoConference.sub.js:27)</small></a>  
**Categories:** <i><a href="#module_Atom">Atom</a></i>  
**Properties**

| Name | Type |
| --- | --- |
| <code>current_feedbacks_view</code> | <code>string</code> | 


* * *

<a name="_session.user"></a>

### _session.user
>Informace o aktuálně přihlášeném uživateli

**Kind**: static property of [<code>\_session</code>](#_session) <a href="../app_src/js/atoms/login&touch/touchFunctionSuccess.sub.js#L13" title="../app_src/js/atoms/login&touch/touchFunctionSuccess.sub.js řádek 13"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;touchFunctionSuccess.sub.js:13)</small></a>  
**Categories:** <i><a href="#module_Atom">Atom</a></i>  
**Properties**

| Name | Type |
| --- | --- |
| <code>user</code> | <code>Object</code> \| <code>DB\_ROW</code> | 


* * *

<a name="_session.conferences"></a>

### _session.conferences
>Pole konferencí pro daného uživatele

**Kind**: static property of [<code>\_session</code>](#_session) <a href="../app_src/js/atoms/login&touch/touchFunctionSuccess.sub.js#L19" title="../app_src/js/atoms/login&touch/touchFunctionSuccess.sub.js řádek 19"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;touchFunctionSuccess.sub.js:19)</small></a>  
**Categories:** <i><a href="#module_Atom">Atom</a></i>  
**Properties**

| Name | Type |
| --- | --- |
| <code>conferences</code> | <code>Array.&lt;String&gt;</code> | 


* * *

<a name="_session.hash"></a>

### _session.hash
>Random text, například pro použití při vykreslování obrázků ('session cache').

**Kind**: static property of [<code>\_session</code>](#_session) <a href="../app_src/js/atoms/login&touch/touchFunctionSuccess.sub.js#L25" title="../app_src/js/atoms/login&touch/touchFunctionSuccess.sub.js řádek 25"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;touchFunctionSuccess.sub.js:25)</small></a>  
**Categories:** <i><a href="#module_Atom">Atom</a></i>  
**Properties**

| Name | Type |
| --- | --- |
| <code>hash</code> | <code>String</code> | 


* * *

<a name="_session.pause_timestamp"></a>

### _session.pause\_timestamp
>Udržuje *timestamp*, kdy aplikace přešla do pozadí.

**Kind**: static property of [<code>\_session</code>](#_session) <a href="../app_src/js/Ϟ_deviceready_functions/Ϟ_initPauseResume.sub.js#L18" title="../app_src/js/Ϟ_deviceready_functions/Ϟ_initPauseResume.sub.js řádek 18"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;Ϟ_initPauseResume.sub.js:18)</small></a>  
**Properties**

| Name | Type |
| --- | --- |
| <code>hash</code> | <code>String</code> | 


* * *

<a name="_session.update"></a>

### _session.update(new_data)
>Aktualizuje `_session` a případně zavolá naslouchače

**Kind**: static method of [<code>\_session</code>](#_session) <a href="../app_src/js/Ξ_consts_variables/Ξ_30__session.sub.js#L20" title="../app_src/js/Ξ_consts_variables/Ξ_30__session.sub.js řádek 20"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;Ξ_30__session.sub.js:20)</small></a>  

| Param | Type | Description |
| --- | --- | --- |
| <code>new_data</code> | <code>object</code> | Nové hodnoty pro `_session` |


* * *

<a name="_session.subscribe"></a>

### _session.subscribe(key_name, function_identificator, onUpdateFunction) ⇒ <code>function</code>
>Registrace naslouchače volaného při změně nějaké hodnoty v `_session`.

**Kind**: static method of [<code>\_session</code>](#_session) <a href="../app_src/js/Ξ_consts_variables/Ξ_30__session.sub.js#L34" title="../app_src/js/Ξ_consts_variables/Ξ_30__session.sub.js řádek 34"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;Ξ_30__session.sub.js:34)</small></a>  
**Returns**: <code>function</code> - Funkce pro zrušení právě registrovaného naslouchače.  

| Param | Type | Description |
| --- | --- | --- |
| <code>key_name</code> | <code>string</code> | Jmého klíče v `_session` jehož změna se má naslouchat. |
| <code>function_identificator</code> | <code>string</code> | Jmého/identifikátor naslouchače (např. pro jeho odstranění či nahrazení). |
| <code>onUpdateFunction</code> | <code>\_sessionOnUpdate</code> | Funkce, která se má volat |


* * *

<a name="_session.unsubscribe"></a>

### _session.unsubscribe(key_name, function_identificator) ⇒ <code>number</code>
>Odebrání naslouchače volaného při změně nějaké hodnoty v `_session`.

**Kind**: static method of [<code>\_session</code>](#_session) <a href="../app_src/js/Ξ_consts_variables/Ξ_30__session.sub.js#L49" title="../app_src/js/Ξ_consts_variables/Ξ_30__session.sub.js řádek 49"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;Ξ_30__session.sub.js:49)</small></a>  
**Returns**: <code>number</code> - `0|1|2` (nenaslouchal, naslouchal, poslední naslouchač)  

| Param | Type | Description |
| --- | --- | --- |
| <code>key_name</code> | <code>string</code> | Jmého klíče v `_session` jehož změna se naslouchala |
| <code>function_identificator</code> | <code>string</code> | Jmého/identifikátor naslouchače (např. pro jeho odstranění). |


* * *

<a name="_session.clear"></a>

### _session.clear()
>Metoda vyčistí `_session`.

**Kind**: static method of [<code>\_session</code>](#_session) <a href="../app_src/js/Ξ_consts_variables/Ξ_30__session.sub.js#L66" title="../app_src/js/Ξ_consts_variables/Ξ_30__session.sub.js řádek 66"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;Ξ_30__session.sub.js:66)</small></a>  

* * *

<a name="_session.._sessionOnUpdate"></a>

### _session~\_sessionOnUpdate : <code>function</code>
**Kind**: inner typedef of [<code>\_session</code>](#_session) <a href="../app_src/js/Ξ_consts_variables/Ξ_30__session.sub.js#L13" title="../app_src/js/Ξ_consts_variables/Ξ_30__session.sub.js řádek 13"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;Ξ_30__session.sub.js:13)</small></a>  

| Param | Type | Description |
| --- | --- | --- |
| <code>data</code> | <code>any</code> | Změněná hodnota. |


* * *

<a name="sync"></a>

## sync : <code>object</code>
>Aliasy pro "rychlejší" synchronizaci, inicializuje se v [initSyncNamespace](#_onDeviceReadyFunction..initSyncNamespace).

**Kind**: global namespace <a href="../app_src/js/Ξ_consts_variables/Ξ_40_sync.sub.js#L8" title="../app_src/js/Ξ_consts_variables/Ξ_40_sync.sub.js řádek 8"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;Ξ_40_sync.sub.js:8)</small></a>  

* * *

<a name="consts"></a>

## consts : <code>object</code>
>Sdružuje konstanty v aplikaci.

**Kind**: global namespace <a href="../app_src/js/Ξ_consts_variables/Ξ_70_consts.sub.js#L7" title="../app_src/js/Ξ_consts_variables/Ξ_70_consts.sub.js řádek 7"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;Ξ_70_consts.sub.js:7)</small></a>  

* [consts](#consts) : <code>object</code>
    * [.texty](#consts.texty) : <code>Object</code>
    * [.css_partials](#consts.css_partials) : <code>Object</code>
    * [.cesty](#consts.cesty) : <code>Object</code>


* * *

<a name="consts.texty"></a>

### consts.texty : <code>Object</code>
>Sdružuje texty používané v aplikaci

**Kind**: static property of [<code>consts</code>](#consts) <a href="../app_src/js/Ξ_consts_variables/Ξ_70_consts.sub.js#L13" title="../app_src/js/Ξ_consts_variables/Ξ_70_consts.sub.js řádek 13"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;Ξ_70_consts.sub.js:13)</small></a>  

* * *

<a name="consts.css_partials"></a>

### consts.css\_partials : <code>Object</code>
>Předpřipravené "věci" používané pro stylování

**Kind**: static property of [<code>consts</code>](#consts) <a href="../app_src/js/Ξ_consts_variables/Ξ_70_consts.sub.js#L33" title="../app_src/js/Ξ_consts_variables/Ξ_70_consts.sub.js řádek 33"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;Ξ_70_consts.sub.js:33)</small></a>  

* * *

<a name="consts.cesty"></a>

### consts.cesty : <code>Object</code>
>Předpřipravené cesty používané v aplikaci

**Kind**: static property of [<code>consts</code>](#consts) <a href="../app_src/js/Ξ_consts_variables/Ξ_70_consts.sub.js#L43" title="../app_src/js/Ξ_consts_variables/Ξ_70_consts.sub.js řádek 43"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;Ξ_70_consts.sub.js:43)</small></a>  

* * *

<a name="string_templates"></a>

## string\_templates : <code>object</code>
>Sdružuje předpřipravené texty.

**Kind**: global namespace <a href="../app_src/js/Ξ_consts_variables/Ξ_80_string_templates.sub.js#L9" title="../app_src/js/Ξ_consts_variables/Ξ_80_string_templates.sub.js řádek 9"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;Ξ_80_string_templates.sub.js:9)</small></a>  

* * *

<a name="app_version_name"></a>

## app\_version\_name
>Identifikace verze aplikace. Řeší se při updatu (viz [_onDeviceReadyFunction~update](_onDeviceReadyFunction~update)) a aplikace se takto také identifikuje s API.

**Kind**: global constant <a href="../app_src/js/Ξ_consts_variables/Ξ_10_app_version_name__gp.sub.js#L9" title="../app_src/js/Ξ_consts_variables/Ξ_10_app_version_name__gp.sub.js řádek 9"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;Ξ_10_app_version_name__gp.sub.js:9)</small></a>  

* * *

<a name="warningIcon"></a>

## warningIcon
>Jméno CSS třídy ikony **varování**.

**Kind**: global constant <a href="../app_src/js/Ξ_consts_variables/Ξ_60_warningIcon_mxLoading_name_mxInternetAnimation_name.sub.js#L5" title="../app_src/js/Ξ_consts_variables/Ξ_60_warningIcon_mxLoading_name_mxInternetAnimation_name.sub.js řádek 5"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;Ξ_60_warningIcon_mxLoading_name_mxInternetAnimation_name.sub.js:5)</small></a>  

* * *

<a name="mxLoading_name"></a>

## mxLoading\_name
>Identifikátor "loading" popupu v `mx`, který se používá v [***CoreJS — Internet***](https://github.com/jaandrle/indigo_cordovaCore/blob/master/docs/core_regular.md#Internet..instance.post_).

**Kind**: global constant <a href="../app_src/js/Ξ_consts_variables/Ξ_60_warningIcon_mxLoading_name_mxInternetAnimation_name.sub.js#L11" title="../app_src/js/Ξ_consts_variables/Ξ_60_warningIcon_mxLoading_name_mxInternetAnimation_name.sub.js řádek 11"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;Ξ_60_warningIcon_mxLoading_name_mxInternetAnimation_name.sub.js:11)</small></a>  

* * *

<a name="mxInternetAnimation_name"></a>

## mxInternetAnimation\_name
>Identifikátor "loading" popupu v `mx`, který se používá v [***CoreJS — Internet***](https://github.com/jaandrle/indigo_cordovaCore/blob/master/docs/core_regular.md#Internet..instance.post_).

**Kind**: global constant <a href="../app_src/js/Ξ_consts_variables/Ξ_60_warningIcon_mxLoading_name_mxInternetAnimation_name.sub.js#L16" title="../app_src/js/Ξ_consts_variables/Ξ_60_warningIcon_mxLoading_name_mxInternetAnimation_name.sub.js řádek 16"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;Ξ_60_warningIcon_mxLoading_name_mxInternetAnimation_name.sub.js:16)</small></a>  

* * *

<a name="agenda_buttons"></a>

## agenda\_buttons : <code>Object</code>
>Parametry tlačítek v agendě

**Kind**: global constant <a href="../app_src/js/Ξ_consts_variables/Ξ_90_agenda_buttons.sub.js#L7" title="../app_src/js/Ξ_consts_variables/Ξ_90_agenda_buttons.sub.js řádek 7"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;Ξ_90_agenda_buttons.sub.js:7)</small></a>  

* * *

<a name="link_AgendaAddNotePhoto"></a>

## link\_AgendaAddNotePhoto(_this)
>Kliknutí na tlačítko přidání fotografie k poznámce v agendě.

**Kind**: global function <a href="../app_src/js/atoms/agenda_activities/link_AgendaAddNotePhoto.sub.js#L9" title="../app_src/js/atoms/agenda_activities/link_AgendaAddNotePhoto.sub.js řádek 9"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;link_AgendaAddNotePhoto.sub.js:9)</small></a>  
**Categories:** <i><a href="#module_Link">Link</a></i>, <i><a href="#module_Atom">Atom</a></i>  

| Param | Type |
| --- | --- |
| <code>_this</code> | [<code>LinkThis</code>](#LinkThis) | 


* * *

<a name="link_AgendaClosePopup"></a>

## link\_AgendaClosePopup(_this)
>Kliknutí na tlačítko zavření popup stránky otevřencých typicky z agendy.

**Kind**: global function <a href="../app_src/js/atoms/agenda_activities/link_AgendaClosePopup.sub.js#L8" title="../app_src/js/atoms/agenda_activities/link_AgendaClosePopup.sub.js řádek 8"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;link_AgendaClosePopup.sub.js:8)</small></a>  
**Categories:** <i><a href="#module_Link">Link</a></i>, <i><a href="#module_Atom">Atom</a></i>  

| Param | Type |
| --- | --- |
| <code>_this</code> | [<code>LinkThis</code>](#LinkThis) | 


* * *

<a name="link_AgendaOpenPopup"></a>

## link\_AgendaOpenPopup(_this)
>Kliknutí na tlačítko v agendě:- cílový popup načítá z `data-popup_name`- jako parametry předává popup stránce všechny `data-*`.

**Kind**: global function <a href="../app_src/js/atoms/agenda_activities/link_AgendaOpenPopup.sub.js#L11" title="../app_src/js/atoms/agenda_activities/link_AgendaOpenPopup.sub.js řádek 11"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;link_AgendaOpenPopup.sub.js:11)</small></a>  
**Categories:** <i><a href="#module_Link">Link</a></i>, <i><a href="#module_Atom">Atom</a></i>  

| Param | Type |
| --- | --- |
| <code>_this</code> | [<code>LinkThis</code>](#LinkThis) | 


* * *

<a name="link_CloseActivePopup"></a>

## link\_CloseActivePopup(_this)
>DUPLIKÁT [link_closeGeneralPopup](#link_closeGeneralPopup)

**Kind**: global function <a href="../app_src/js/atoms/agenda_activities/link_CloseActivePopup.sub.js#L8" title="../app_src/js/atoms/agenda_activities/link_CloseActivePopup.sub.js řádek 8"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;link_CloseActivePopup.sub.js:8)</small></a>  
**Categories:** <i><a href="#module_Link">Link</a></i>, <i><a href="#module_Atom">Atom</a></i>  

| Param | Type |
| --- | --- |
| <code>_this</code> | [<code>LinkThis</code>](#LinkThis) | 


* * *

<a name="link_closeGeneralPopup"></a>

## link\_closeGeneralPopup(_this)
>Zavírání popupů dle IDčka aktuálně otevřeného popupu (dle `dataset`u).

**Kind**: global function <a href="../app_src/js/atoms/agenda_activities/link_closeGeneralPopup.sub.js#L8" title="../app_src/js/atoms/agenda_activities/link_closeGeneralPopup.sub.js řádek 8"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;link_closeGeneralPopup.sub.js:8)</small></a>  
**Categories:** <i><a href="#module_Link">Link</a></i>, <i><a href="#module_Atom">Atom</a></i>  

| Param | Type |
| --- | --- |
| <code>_this</code> | [<code>LinkThis</code>](#LinkThis) | 


* * *

<a name="submitFeedbackForm"></a>

## submitFeedbackForm(_this)
>Obecná funkce pro ukládání feedbacků, volá se `set_feedbacks_answers`.

**Kind**: global function <a href="../app_src/js/atoms/agenda_activities/submitFeedbackForm.sub.js#L10" title="../app_src/js/atoms/agenda_activities/submitFeedbackForm.sub.js řádek 10"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;submitFeedbackForm.sub.js:10)</small></a>  
**Categories:** <i><a href="#module_Atom">Atom</a></i>  

| Param | Type |
| --- | --- |
| <code>_this</code> | <code>FormLogin</code> | 


* * *

<a name="component_agendaList"></a>

## component\_agendaList(def) ⇒ [<code>Komponenta</code>](#Komponenta)
>Vytváří pložku/komponentu v agendě

**Kind**: global function <a href="../app_src/js/atoms/agenda_general/component_agendaList.sub.js#L16" title="../app_src/js/atoms/agenda_general/component_agendaList.sub.js řádek 16"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;component_agendaList.sub.js:16)</small></a>  
**Categories:** <i><a href="#module_Atom">Atom</a></i>  

| Param | Type | Description |
| --- | --- | --- |
| <code>def</code> | <code>Object</code> |  |
| &nbsp;&boxvr;&nbsp;<code>title</code> | <code>String</code> | První řádek — název sessiony |
| &nbsp;&boxvr;&nbsp;<code>description</code> | <code>String</code> | Druhý řádek — popis sessiony |
| &nbsp;&boxvr;&nbsp;[<code>time_from</code>] | <code>String</code> | Čas Od, zobrazuje se jen pokud vyplněno |
| &nbsp;&boxvr;&nbsp;<code>dataset</code> | <code>Object</code> | Data pro wrapper |
| &nbsp;&boxvr;&nbsp;<code>buttons</code> | <code>Array.&lt;Object&gt;</code> | Tlačítka dle [component_agendaListButton](#component_agendaListButton). Podle existence tlačítek se rozlišují dva typy agendy (ne)přestávka. |


* * *

<a name="component_agendaListButton"></a>

## component\_agendaListButton(def) ⇒ [<code>Komponenta</code>](#Komponenta)
>Vytváří tlačítko v pložce v agendě

**Kind**: global function <a href="../app_src/js/atoms/agenda_general/component_agendaListButton.sub.js#L14" title="../app_src/js/atoms/agenda_general/component_agendaListButton.sub.js řádek 14"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;component_agendaListButton.sub.js:14)</small></a>  
**Categories:** <i><a href="#module_Atom">Atom</a></i>  

| Param | Type | Description |
| --- | --- | --- |
| <code>def</code> | <code>Object</code> |  |
| &nbsp;&boxvr;&nbsp;<code>icon</code> | <code>String</code> | Jméno CSS ikony |
| &nbsp;&boxvr;&nbsp;<code>textContent</code> | <code>String</code> | Popisek tlačítka |
| &nbsp;&boxvr;&nbsp;<code>fce</code> | <code>String</code> | Jméno funkce pro kliknutí |
| &nbsp;&boxvr;&nbsp;<code>id</code> | <code>String</code> | IDčko položky agendy ke které tlačítko "patří" |


* * *

<a name="component_agendaSwitch"></a>

## component\_agendaSwitch(def) ⇒ [<code>Komponenta</code>](#Komponenta)
>Vytváří přepínač dnů pro agendu.K tlačítků se do `data-*` přidávají klíče `jsif_val` (pořadí tlačítka od jedničky) a první tlačítko je automaticky předzvolené.

**Kind**: global function <a href="../app_src/js/atoms/agenda_general/component_agendaSwitch.sub.js#L13" title="../app_src/js/atoms/agenda_general/component_agendaSwitch.sub.js řádek 13"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;component_agendaSwitch.sub.js:13)</small></a>  
**Categories:** <i><a href="#module_Atom">Atom</a></i>  

| Param | Type | Description |
| --- | --- | --- |
| <code>def</code> | <code>Object</code> |  |
| &nbsp;&boxvr;&nbsp;<code>days</code> | <code>Array.&lt;String&gt;</code> | Pole vlastně textů tlačítek pro vypsání |
| &nbsp;&boxvr;&nbsp;<code>dataset</code> | <code>Object</code> | Společné vlastnosti `dataset` pro každé tlačítko (hl. pro podporu přepínání klíč `jsif_var`) |


* * *

<a name="link_openYoutubeLink"></a>

## link\_openYoutubeLink(_this)
>Po kliknutí přejít na video dle `data-youtube_link`.

**Kind**: global function <a href="../app_src/js/atoms/agenda_general/link_openYoutubeLink.sub.js#L8" title="../app_src/js/atoms/agenda_general/link_openYoutubeLink.sub.js řádek 8"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;link_openYoutubeLink.sub.js:8)</small></a>  
**Categories:** <i><a href="#module_Link">Link</a></i>, <i><a href="#module_Atom">Atom</a></i>  

| Param | Type |
| --- | --- |
| <code>_this</code> | [<code>LinkThis</code>](#LinkThis) | 


* * *

<a name="toggleComponentOpenStatus"></a>

## toggleComponentOpenStatus(def) ⇒ <code>Object</code>
>Přepíná klíč `is_open` v daném objektu.

**Kind**: global function <a href="../app_src/js/atoms/agenda_general/toggleComponentOpenStatus.sub.js#L9" title="../app_src/js/atoms/agenda_general/toggleComponentOpenStatus.sub.js řádek 9"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;toggleComponentOpenStatus.sub.js:9)</small></a>  
**Returns**: <code>Object</code> - `def`  
**Categories:** <i><a href="#module_Atom">Atom</a></i>  

| Param | Type |
| --- | --- |
| <code>def</code> | <code>Object</code> | 
| &nbsp;&boxvr;&nbsp;<code>is_open</code> | <code>Boolean</code> | 


* * *

<a name="restartAnimationEffect"></a>

## restartAnimationEffect()
>(Pře)nastavuje styl `animation` na ""/"none" pro znovu spuštění animace (s timeoutem 300ms).

**Kind**: global function <a href="../app_src/js/atoms/components_utils/restartAnimationEffect.sub.js#L6" title="../app_src/js/atoms/components_utils/restartAnimationEffect.sub.js řádek 6"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;restartAnimationEffect.sub.js:6)</small></a>  
**Categories:** <i><a href="#module_Atom">Atom</a></i>  

* * *

<a name="gotoConference_Choose"></a>

## gotoConference\_Choose()
>Pomocná procedura dle počtu konferencí v [conferences](#_session.conferences) naviguje na `pp_ChooseConference`, nebo volá [gotoConference](#gotoConference) přímo.

**Kind**: global function <a href="../app_src/js/atoms/login&touch/gotoConference_Choose.sub.js#L11" title="../app_src/js/atoms/login&touch/gotoConference_Choose.sub.js řádek 11"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;gotoConference_Choose.sub.js:11)</small></a>  
**Categories:** <i><a href="#module_Atom">Atom</a></i>  
**Fires:** [<code>sync\_conferences</code>](#event_sync_conferences)  

* * *

<a name="gotoConference"></a>

## gotoConference(conference_to_choose)
>Provádí úkony před vstupem do appky (stránka `pp_Welcome`).

**Kind**: global function <a href="../app_src/js/atoms/login&touch/gotoConference.sub.js#L10" title="../app_src/js/atoms/login&touch/gotoConference.sub.js řádek 10"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;gotoConference.sub.js:10)</small></a>  
**Categories:** <i><a href="#module_Atom">Atom</a></i>  

| Param | Type | Default |
| --- | --- | --- |
| <code>conference_to_choose</code> | <code>Number</code> \| <code>Undefined</code> | <code>0</code> | 


* * *

<a name="loginFunctionSuccess"></a>

## loginFunctionSuccess(data)
>Volá se po úspěšném připojení se serverem v [loginFunction](#loginFunction) či lokálním přihlášením v [loginOffline](#loginOffline).Dle (ne)nastaveného hesla mění stránku na `pp_SetPassword`, nebo volá [gotoConference_Choose](#gotoConference_Choose).Inicializuje volání [touchFunction](#touchFunction) každých [update_loop_time](update_loop_time).

**Kind**: global function <a href="../app_src/js/atoms/login&touch/loginFunctionSuccess.sub.js#L14" title="../app_src/js/atoms/login&touch/loginFunctionSuccess.sub.js řádek 14"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;loginFunctionSuccess.sub.js:14)</small></a>  
**Categories:** <i><a href="#module_Atom">Atom</a></i>  
**Todo**

- [ ] Co se stane pokud se přihlásí někdo jiný?


| Param | Type |
| --- | --- |
| <code>data</code> | [<code>Internet\_response\_object</code>](#Internet_response_object) | 


* * *

<a name="loginOffline"></a>

## loginOffline(def) ⇒ [<code>Internet\_response\_object</code>](#Internet_response_object)
>Zkusí se přihlásit pomocí lokálně uloženeého hesla

**Kind**: global function <a href="../app_src/js/atoms/login&touch/loginOffline.sub.js#L15" title="../app_src/js/atoms/login&touch/loginOffline.sub.js řádek 15"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;loginOffline.sub.js:15)</small></a>  
**Returns**: [<code>Internet\_response\_object</code>](#Internet_response_object) - out  
**Categories:** <i><a href="#module_Atom">Atom</a></i>  
**Throws**:

- [<code>Internet\_response\_object</code>](#Internet_response_object) Error objekt `{ success: 0, message: … }`

**Out.success**: <code>Number</code> `=1`  
**Out.user**: <code>DB\_ROW</code> záznam z DB  
**Out.conferences**: <code>DB\_ROW[]</code> záznamy z konferencích  

| Param | Type |
| --- | --- |
| <code>def</code> | <code>Object</code> | 
| &nbsp;&boxvr;&nbsp;<code>email</code> | <code>String</code> | 
| &nbsp;&boxvr;&nbsp;<code>password</code> | <code>String</code> | 


* * *

<a name="touchFunction"></a>

## touchFunction()
>Funkce, která se volá každých [update_loop_time](update_loop_time)

**Kind**: global function <a href="../app_src/js/atoms/login&touch/touchFunction.sub.js#L10" title="../app_src/js/atoms/login&touch/touchFunction.sub.js řádek 10"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;touchFunction.sub.js:10)</small></a>  
**Categories:** <i><a href="#module_Atom">Atom</a></i>  

* * *

<a name="addUserThumb"></a>

## addUserThumb(row_el, photo, type)
>Async přidání fotografie (primárně pro uživatele) do zadaného řádku v seznamu (kontaktů).

**Kind**: global function <a href="../app_src/js/atoms/profily/addUserThumb.sub.js#L13" title="../app_src/js/atoms/profily/addUserThumb.sub.js řádek 13"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;addUserThumb.sub.js:13)</small></a>  
**Categories:** <i><a href="#module_Atom">Atom</a></i>  

| Param | Type | Description |
| --- | --- | --- |
| <code>row_el</code> | <code>NodeElement</code> | Řádek v listu kontaktů (fotka do `div`u – prvního potomka). |
| <code>photo</code> | <code>String</code> | Jméno fotografie. |
| <code>type</code> | <code>image\_cache.consts</code> | Viz [image_cache.consts](https://github.com/jaandrle/indigo_cordovaCore/blob/master/docs/core_regular.md#image_cacheconsts--object) |


* * *

<a name="link_gotoProfile"></a>

## link\_gotoProfile(_this)
>Navigování na profil člověka v seznamu

**Kind**: global function <a href="../app_src/js/atoms/profily/link_gotoProfile.sub.js#L8" title="../app_src/js/atoms/profily/link_gotoProfile.sub.js řádek 8"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;link_gotoProfile.sub.js:8)</small></a>  
**Categories:** <i><a href="#module_Link">Link</a></i>, <i><a href="#module_Atom">Atom</a></i>  

| Param | Type |
| --- | --- |
| <code>_this</code> | [<code>LinkThis</code>](#LinkThis) | 


* * *

<a name="link_peopleFilterChange"></a>

## link\_peopleFilterChange(_this)
>Změna filtru na stránce ``pp_People`.

**Kind**: global function <a href="../app_src/js/atoms/profily/link_peopleFilterChange.sub.js#L7" title="../app_src/js/atoms/profily/link_peopleFilterChange.sub.js řádek 7"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;link_peopleFilterChange.sub.js:7)</small></a>  
**Categories:** <i><a href="#module_Link">Link</a></i>, <i><a href="#module_Atom">Atom</a></i>  

| Param | Type |
| --- | --- |
| <code>_this</code> | [<code>LinkThis</code>](#LinkThis) | 


* * *

<a name="link_PhotosClickEvent"></a>

## link\_PhotosClickEvent(_this)
>Zvětší fototgrafii na fullstreen.

**Kind**: global function <a href="../app_src/js/atoms/profily/link_PhotosClickEvent.sub.js#L8" title="../app_src/js/atoms/profily/link_PhotosClickEvent.sub.js řádek 8"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;link_PhotosClickEvent.sub.js:8)</small></a>  
**Categories:** <i><a href="#module_Link">Link</a></i>, <i><a href="#module_Atom">Atom</a></i>  

| Param | Type |
| --- | --- |
| <code>_this</code> | [<code>LinkThis</code>](#LinkThis) | 


* * *

<a name="link_togglePeopleFilter"></a>

## link\_togglePeopleFilter(_this)
>Kliknutí na tlačítko v hlavičce, zatím bez funkce.

**Kind**: global function <a href="../app_src/js/atoms/profily/link_togglePeopleFilter.sub.js#L8" title="../app_src/js/atoms/profily/link_togglePeopleFilter.sub.js řádek 8"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;link_togglePeopleFilter.sub.js:8)</small></a>  
**Categories:** <i><a href="#module_Link">Link</a></i>, <i><a href="#module_Atom">Atom</a></i>  

| Param | Type |
| --- | --- |
| <code>_this</code> | [<code>LinkThis</code>](#LinkThis) | 


* * *

<a name="submitAppUserEdit"></a>

## submitAppUserEdit(_this)
>Ukládání formuláře pro editování některých položek uživatele

**Kind**: global function <a href="../app_src/js/atoms/profily/submitAppUserEdit.sub.js#L9" title="../app_src/js/atoms/profily/submitAppUserEdit.sub.js řádek 9"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;submitAppUserEdit.sub.js:9)</small></a>  
**Categories:** <i><a href="#module_Atom">Atom</a></i>  

| Param | Type |
| --- | --- |
| <code>_this</code> | [<code>FormThis</code>](#FormThis) | 


* * *

<a name="forgetPasswordFunction"></a>

## forgetPasswordFunction(_this)
>Odeslání dotazu na forget password

**Kind**: global function <a href="../app_src/js/atoms/settings&menu&password/forgetPasswordFunction.sub.js#L9" title="../app_src/js/atoms/settings&menu&password/forgetPasswordFunction.sub.js řádek 9"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;forgetPasswordFunction.sub.js:9)</small></a>  
**Categories:** <i><a href="#module_Atom">Atom</a></i>  

| Param | Type |
| --- | --- |
| <code>_this</code> | [<code>FormThis</code>](#FormThis) | 


* * *

<a name="link_togglePasswordVisibility"></a>

## link\_togglePasswordVisibility(_this)
>Mění skrytí hesla (měný typ inputu `password`/`text`).

**Kind**: global function <a href="../app_src/js/atoms/settings&menu&password/link_togglePasswordVisibility.sub.js#L7" title="../app_src/js/atoms/settings&menu&password/link_togglePasswordVisibility.sub.js řádek 7"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;link_togglePasswordVisibility.sub.js:7)</small></a>  
**Categories:** <i><a href="#module_Link">Link</a></i>, <i><a href="#module_Atom">Atom</a></i>  

| Param | Type |
| --- | --- |
| <code>_this</code> | [<code>LinkThis</code>](#LinkThis) | 


* * *

<a name="passwordChangeSuccess"></a>

## passwordChangeSuccess()
>Procedura, která se zavolá při změně hesla

**Kind**: global function <a href="../app_src/js/atoms/settings&menu&password/passwordChangeSuccess.sub.js#L8" title="../app_src/js/atoms/settings&menu&password/passwordChangeSuccess.sub.js řádek 8"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;passwordChangeSuccess.sub.js:8)</small></a>  
**Categories:** <i><a href="#module_Atom">Atom</a></i>  

* * *

<a name="setPasswordFunction"></a>

## setPasswordFunction(_this)
>Submit funkce k formuláři pro změnu hesla. Pro načtení inputů používá jméno formuláře spojený s `_password_1` a `_password_2`. Po dokončení volá globální funkci dle `data-fce`.

**Kind**: global function <a href="../app_src/js/atoms/settings&menu&password/setPasswordFunction.sub.js#L11" title="../app_src/js/atoms/settings&menu&password/setPasswordFunction.sub.js řádek 11"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;setPasswordFunction.sub.js:11)</small></a>  
**Categories:** <i><a href="#module_Atom">Atom</a></i>  

| Param | Type |
| --- | --- |
| <code>_this</code> | [<code>FormThis</code>](#FormThis) | 


* * *

<a name="notDeletedRows"></a>

## notDeletedRows(obj)
>Vrátí, zda je záznam **nesmazaný**, pokud uživatel není `.dev="1"` chápou se záznamy `obj.dev="1"` jako smazané.

**Kind**: global function <a href="../app_src/js/atoms/utils/notDeletedRows.sub.js#L9" title="../app_src/js/atoms/utils/notDeletedRows.sub.js řádek 9"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;notDeletedRows.sub.js:9)</small></a>  
**Categories:** <i><a href="#module_Atom">Atom</a></i>  
**Todo**

- [ ] Optimalizace?


| Param | Type |
| --- | --- |
| <code>obj</code> | <code>db\_row</code> | 


* * *

<a name="stopPropagate"></a>

## stopPropagate(ev)
>Utilita pro blokování probublávání událostí (např. `onclick`).

**Kind**: global function <a href="../app_src/js/atoms/utils/stopPropagate.sub.js#L6" title="../app_src/js/atoms/utils/stopPropagate.sub.js řádek 6"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;stopPropagate.sub.js:6)</small></a>  
**Categories:** <i><a href="#module_Atom">Atom</a></i>  

| Param | Type |
| --- | --- |
| <code>ev</code> | <code>Event</code> | 


* * *

<a name="deleteUserChoosedPhoto"></a>

## deleteUserChoosedPhoto()
>Spravuje smazání fotky uživatele.

**Kind**: global function <a href="../app_src/js/molecules/deleteUserChoosedPhoto.sub.js#L8" title="../app_src/js/molecules/deleteUserChoosedPhoto.sub.js řádek 8"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;deleteUserChoosedPhoto.sub.js:8)</small></a>  
**Categories:** <i><a href="#module_Molekula">Molekula</a></i>  
**Listens:** [<code>deleteUserChoosedPhoto</code>](#event_deleteUserChoosedPhoto)  

* * *

<a name="loadAppUserProfilePhoto_"></a>

## loadAppUserProfilePhoto\_()
>Stáhne profilovou fotografii aktuálního uživatele aplikace (viz [user](#_session.user)).

**Kind**: global function <a href="../app_src/js/molecules/loadAppUserProfilePhoto_.sub.js#L7" title="../app_src/js/molecules/loadAppUserProfilePhoto_.sub.js řádek 7"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;loadAppUserProfilePhoto_.sub.js:7)</small></a>  
**Categories:** <i><a href="#module_Molekula">Molekula</a></i>  

* * *

<a name="photosSlider"></a>

## photosSlider(name, go_to, [data])
>Funkcionální část pro slideshow

**Kind**: global function <a href="../app_src/js/molecules/photosSlider.sub.js#L16" title="../app_src/js/molecules/photosSlider.sub.js řádek 16"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;photosSlider.sub.js:16)</small></a>  
**Categories:** <i><a href="#module_Molekula">Molekula</a></i>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| <code>name</code> | <code>String</code> |  | Jméno slideshow, používá se také identifikátor pro ukládání pomocí [pages_setread](pages_setread) |
| <code>go_to</code> | <code>Number</code> | <code>0</code> | Posun (je ošetřen pomocí fce `$array.arrayIndex` z jaaJSU) |
| [<code>data</code>] | <code>Object</code> | <code>false</code> | Pokud zadáno (= initializace slideru) je slider přegenerován dle dat, jinak se použijí předchozí initializační data |
| &nbsp;&boxvr;&nbsp;<code>photos</code> | <code>Array.&lt;String&gt;</code> |  | Cesty k fotkám |
| &nbsp;&boxvr;&nbsp;[<code>actual</code>] | <code>Number</code> | <code>0</code> | Index právě aktivní fotografie |
| &nbsp;&boxvr;&nbsp;<code>wrapper</code> | <code>NodeElement</code> |  | Slider wrapper element |
| &nbsp;&boxvr;&nbsp;[<code>no_indicators</code>] | <code>Boolean</code> | <code>false</code> | Hodnota udáva zda generovat indikátory |


* * *

<a name="saveNotesChoosedPhoto"></a>

## saveNotesChoosedPhoto(def)
>Ukládání fotek u poznámek.

**Kind**: global function <a href="../app_src/js/molecules/saveNotesChoosedPhoto.sub.js#L12" title="../app_src/js/molecules/saveNotesChoosedPhoto.sub.js řádek 12"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;saveNotesChoosedPhoto.sub.js:12)</small></a>  
**Categories:** <i><a href="#module_Molekula">Molekula</a></i>  
**Listens:** [<code>saveNotesChoosedPhoto</code>](#event_saveNotesChoosedPhoto)  

| Param | Type | Description |
| --- | --- | --- |
| <code>def</code> | <code>Object</code> |  |
| &nbsp;&boxvr;&nbsp;<code>group</code> | <code>String</code> | Ve tvaru **`[a-z]_[a-z]+`**, kde přípona je vlastně *id* záznamu v tabulce dané předponou **"a_"**, **"u_"** odlišující poznámku v *agendě* resp. *u uživatelích*. |
| &nbsp;&boxvr;&nbsp;<code>photos</code> | <code>Array.&lt;String&gt;</code> | Fotky |


* * *

<a name="saveUserChoosedPhoto"></a>

## saveUserChoosedPhoto(def)
>Ukládá vybranou fotku uživatele

**Kind**: global function <a href="../app_src/js/molecules/saveUserChoosedPhoto.sub.js#L12" title="../app_src/js/molecules/saveUserChoosedPhoto.sub.js řádek 12"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;saveUserChoosedPhoto.sub.js:12)</small></a>  
**Categories:** <i><a href="#module_Molekula">Molekula</a></i>  
**Listens:** [<code>saveUserChoosedPhoto</code>](#event_saveUserChoosedPhoto)  

| Param | Type | Description |
| --- | --- | --- |
| <code>def</code> | <code>Object</code> |  |
| &nbsp;&boxvr;&nbsp;<code>photos</code> | <code>Array.&lt;String&gt;</code> | Cesty k souborům |


* * *

<a name="writeUserPhoto"></a>

## writeUserPhoto(row_el) ⇒ <code>function</code>
>Pomocná utilita, která vrací funkci pro zápis fotografie do předem daného úmístění.

**Kind**: global function <a href="../app_src/js/molecules/writeUserPhoto.sub.js#L11" title="../app_src/js/molecules/writeUserPhoto.sub.js řádek 11"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;writeUserPhoto.sub.js:11)</small></a>  
**Returns**: <code>function</code> - Procedura tvaru `file_url=> `*zápis fotografie pomocí* [string_templates](#string_templates).  
**Categories:** <i><a href="#module_Molekula">Molekula</a></i>  

| Param | Type | Description |
| --- | --- | --- |
| <code>row_el</code> | <code>NodeElement</code> | Wrapper, kde první `div` je fotka |


* * *

<a name="debugLog"></a>

## debugLog()
>Logující funkce — při buildu se dle `package.json` (klíč `external_publication`) rozhodne zda se jedná o `()=>{}` nebo `console.warn`.

**Kind**: global function <a href="../app_src/js/Ξ_consts_variables/Ξ_20_debugLog.sub.js#L7" title="../app_src/js/Ξ_consts_variables/Ξ_20_debugLog.sub.js řádek 7"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;Ξ_20_debugLog.sub.js:7)</small></a>  

* * *

<a name="reactionsSubComponent_*"></a>

## "reactionsSubComponent:*"
>Události [comments_count.contentSubComponent](comments_count.contentSubComponent).

**Kind**: event emitted <a href="../app_src/js/molecules/components_article/private_contentSubComponent.sub.js#L4" title="../app_src/js/molecules/components_article/private_contentSubComponent.sub.js řádek 4"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;private_contentSubComponent.sub.js:4)</small></a>  
- Pro vyhledání naslouchačů/spouštěčů použijte workaround — hledejte dle `Fires: reactionsSubComponent:*` resp. `Listens: reactionsSubComponent:*`.
- Pokud je naslouchač vnitřní (`inner`), volá se pouze pokud je volána vnější funkce (typicky u stránek je naslouchač zavolán pokud je uživatel na dané stránce).  

**Categories:** <i><a href="#module_Molekula">Molekula</a></i>  
**Listens:** [<code>show\_more</code>](#event_show_more)  

* * *

<a name="event_show_more"></a>

## "show_more"
>Zda zobrazit celý text

**Kind**: event emitted <a href="../app_src/js/molecules/components_article/private_contentSubComponent.sub.js#L26" title="../app_src/js/molecules/components_article/private_contentSubComponent.sub.js řádek 26"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;private_contentSubComponent.sub.js:26)</small></a>  
- Pro vyhledání naslouchačů/spouštěčů použijte workaround — hledejte dle `Fires: show_more` resp. `Listens: show_more`.
- Pokud je naslouchač vnitřní (`inner`), volá se pouze pokud je volána vnější funkce (typicky u stránek je naslouchač zavolán pokud je uživatel na dané stránce).  

**Categories:** <i><a href="#module_Molekula">Molekula</a></i>  

* * *

<a name="reactionsSubComponent_*"></a>

## "reactionsSubComponent:*"
>Události [comments_count.reactionsSubComponent](comments_count.reactionsSubComponent).

**Kind**: event emitted <a href="../app_src/js/molecules/components_article/private_reactionsSubComponent.sub.js#L5" title="../app_src/js/molecules/components_article/private_reactionsSubComponent.sub.js řádek 5"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;private_reactionsSubComponent.sub.js:5)</small></a>  
- Pro vyhledání naslouchačů/spouštěčů použijte workaround — hledejte dle `Fires: reactionsSubComponent:*` resp. `Listens: reactionsSubComponent:*`.
- Pokud je naslouchač vnitřní (`inner`), volá se pouze pokud je volána vnější funkce (typicky u stránek je naslouchač zavolán pokud je uživatel na dané stránce).  

**Categories:** <i><a href="#module_Molekula">Molekula</a></i>  
**Listens:** [<code>i\_like</code>](#event_i_like)<br/>**Listens:** [<code>i\_comment</code>](#event_i_comment)<br/>**Listens:** [<code>likes\_count</code>](#event_likes_count)<br/>**Listens:** [<code>comments\_count</code>](#event_comments_count)  

* * *

<a name="event_i_like"></a>

## "i_like"
>Zda dal srdíčko uživatel appky

**Kind**: event emitted <a href="../app_src/js/molecules/components_article/private_reactionsSubComponent.sub.js#L25" title="../app_src/js/molecules/components_article/private_reactionsSubComponent.sub.js řádek 25"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;private_reactionsSubComponent.sub.js:25)</small></a>  
- Pro vyhledání naslouchačů/spouštěčů použijte workaround — hledejte dle `Fires: i_like` resp. `Listens: i_like`.
- Pokud je naslouchač vnitřní (`inner`), volá se pouze pokud je volána vnější funkce (typicky u stránek je naslouchač zavolán pokud je uživatel na dané stránce).  

**Categories:** <i><a href="#module_Molekula">Molekula</a></i>  

* * *

<a name="event_i_comment"></a>

## "i_comment"
>Zda okomentoval uživatel appky

**Kind**: event emitted <a href="../app_src/js/molecules/components_article/private_reactionsSubComponent.sub.js#L29" title="../app_src/js/molecules/components_article/private_reactionsSubComponent.sub.js řádek 29"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;private_reactionsSubComponent.sub.js:29)</small></a>  
- Pro vyhledání naslouchačů/spouštěčů použijte workaround — hledejte dle `Fires: i_comment` resp. `Listens: i_comment`.
- Pokud je naslouchač vnitřní (`inner`), volá se pouze pokud je volána vnější funkce (typicky u stránek je naslouchač zavolán pokud je uživatel na dané stránce).  

**Categories:** <i><a href="#module_Molekula">Molekula</a></i>  

* * *

<a name="event_likes_count"></a>

## "likes_count"
>Počet srdíček

**Kind**: event emitted <a href="../app_src/js/molecules/components_article/private_reactionsSubComponent.sub.js#L35" title="../app_src/js/molecules/components_article/private_reactionsSubComponent.sub.js řádek 35"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;private_reactionsSubComponent.sub.js:35)</small></a>  
- Pro vyhledání naslouchačů/spouštěčů použijte workaround — hledejte dle `Fires: likes_count` resp. `Listens: likes_count`.
- Pokud je naslouchač vnitřní (`inner`), volá se pouze pokud je volána vnější funkce (typicky u stránek je naslouchač zavolán pokud je uživatel na dané stránce).  

**Categories:** <i><a href="#module_Molekula">Molekula</a></i>  

* * *

<a name="event_comments_count"></a>

## "comments_count"
>Počet komentářů

**Kind**: event emitted <a href="../app_src/js/molecules/components_article/private_reactionsSubComponent.sub.js#L39" title="../app_src/js/molecules/components_article/private_reactionsSubComponent.sub.js řádek 39"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;private_reactionsSubComponent.sub.js:39)</small></a>  
- Pro vyhledání naslouchačů/spouštěčů použijte workaround — hledejte dle `Fires: comments_count` resp. `Listens: comments_count`.
- Pokud je naslouchač vnitřní (`inner`), volá se pouze pokud je volána vnější funkce (typicky u stránek je naslouchač zavolán pokud je uživatel na dané stránce).  

**Categories:** <i><a href="#module_Molekula">Molekula</a></i>  

* * *

<a name="event_deleteUserChoosedPhoto"></a>

## "deleteUserChoosedPhoto"
>Smazat fotku uživatele

**Kind**: event emitted <a href="../app_src/js/Ϟ_deviceready_functions/Ϟ_initPhotosClasses.sub.js#L15" title="../app_src/js/Ϟ_deviceready_functions/Ϟ_initPhotosClasses.sub.js řádek 15"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;Ϟ_initPhotosClasses.sub.js:15)</small></a>  
- Pro vyhledání naslouchačů/spouštěčů použijte workaround — hledejte dle `Fires: deleteUserChoosedPhoto` resp. `Listens: deleteUserChoosedPhoto`.
- Pokud je naslouchač vnitřní (`inner`), volá se pouze pokud je volána vnější funkce (typicky u stránek je naslouchač zavolán pokud je uživatel na dané stránce).  


* * *

<a name="event_saveNotesChoosedPhoto"></a>

## "saveNotesChoosedPhoto"
>Uložit fotku k poznámce

**Kind**: event emitted <a href="../app_src/js/Ϟ_deviceready_functions/Ϟ_initPhotosClasses.sub.js#L20" title="../app_src/js/Ϟ_deviceready_functions/Ϟ_initPhotosClasses.sub.js řádek 20"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;Ϟ_initPhotosClasses.sub.js:20)</small></a>  
- Pro vyhledání naslouchačů/spouštěčů použijte workaround — hledejte dle `Fires: saveNotesChoosedPhoto` resp. `Listens: saveNotesChoosedPhoto`.
- Pokud je naslouchač vnitřní (`inner`), volá se pouze pokud je volána vnější funkce (typicky u stránek je naslouchač zavolán pokud je uživatel na dané stránce).  


* * *

<a name="event_saveUserChoosedPhoto"></a>

## "saveUserChoosedPhoto"
>Uložit fotku uživatele

**Kind**: event emitted <a href="../app_src/js/Ϟ_deviceready_functions/Ϟ_initPhotosClasses.sub.js#L25" title="../app_src/js/Ϟ_deviceready_functions/Ϟ_initPhotosClasses.sub.js řádek 25"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;Ϟ_initPhotosClasses.sub.js:25)</small></a>  
- Pro vyhledání naslouchačů/spouštěčů použijte workaround — hledejte dle `Fires: saveUserChoosedPhoto` resp. `Listens: saveUserChoosedPhoto`.
- Pokud je naslouchač vnitřní (`inner`), volá se pouze pokud je volána vnější funkce (typicky u stránek je naslouchač zavolán pokud je uživatel na dané stránce).  


* * *

<a name="event_sync_agendas"></a>

## "sync_agendas"
>Synchronizace tabulky "agenda".

**Kind**: event emitted <a href="../app_src/js/Ϟ_deviceready_functions/Ϟ_initSyncNamespace.sub.js#L12" title="../app_src/js/Ϟ_deviceready_functions/Ϟ_initSyncNamespace.sub.js řádek 12"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;Ϟ_initSyncNamespace.sub.js:12)</small></a>  
- Pro vyhledání naslouchačů/spouštěčů použijte workaround — hledejte dle `Fires: sync_agendas` resp. `Listens: sync_agendas`.
- Pokud je naslouchač vnitřní (`inner`), volá se pouze pokud je volána vnější funkce (typicky u stránek je naslouchač zavolán pokud je uživatel na dané stránce).  


* * *

<a name="event_sync_attendances"></a>

## "sync_attendances"
>Synchronizace tabulky "attendance". Pokud smazáno na portále (`*.deleted=1`) maže se fyzicky i v appce.

**Kind**: event emitted <a href="../app_src/js/Ϟ_deviceready_functions/Ϟ_initSyncNamespace.sub.js#L17" title="../app_src/js/Ϟ_deviceready_functions/Ϟ_initSyncNamespace.sub.js řádek 17"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;Ϟ_initSyncNamespace.sub.js:17)</small></a>  
- Pro vyhledání naslouchačů/spouštěčů použijte workaround — hledejte dle `Fires: sync_attendances` resp. `Listens: sync_attendances`.
- Pokud je naslouchač vnitřní (`inner`), volá se pouze pokud je volána vnější funkce (typicky u stránek je naslouchač zavolán pokud je uživatel na dané stránce).  


* * *

<a name="event_sync_conferences"></a>

## "sync_conferences"
>Synchronizace tabulky "conference".

**Kind**: event emitted <a href="../app_src/js/Ϟ_deviceready_functions/Ϟ_initSyncNamespace.sub.js#L23" title="../app_src/js/Ϟ_deviceready_functions/Ϟ_initSyncNamespace.sub.js řádek 23"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;Ϟ_initSyncNamespace.sub.js:23)</small></a>  
- Pro vyhledání naslouchačů/spouštěčů použijte workaround — hledejte dle `Fires: sync_conferences` resp. `Listens: sync_conferences`.
- Pokud je naslouchač vnitřní (`inner`), volá se pouze pokud je volána vnější funkce (typicky u stránek je naslouchač zavolán pokud je uživatel na dané stránce).  


* * *

<a name="event_sync_feedbacks_answers"></a>

## "sync_feedbacks_answers"
>Synchronizace tabulky "feedbacks_answers". Tabulka se při synchronizaci vždy **přepisuje** (pokud příjde prázdné pole => tabulka se jen smaže).

**Kind**: event emitted <a href="../app_src/js/Ϟ_deviceready_functions/Ϟ_initSyncNamespace.sub.js#L29" title="../app_src/js/Ϟ_deviceready_functions/Ϟ_initSyncNamespace.sub.js řádek 29"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;Ϟ_initSyncNamespace.sub.js:29)</small></a>  
- Pro vyhledání naslouchačů/spouštěčů použijte workaround — hledejte dle `Fires: sync_feedbacks_answers` resp. `Listens: sync_feedbacks_answers`.
- Pokud je naslouchač vnitřní (`inner`), volá se pouze pokud je volána vnější funkce (typicky u stránek je naslouchač zavolán pokud je uživatel na dané stránce).  


* * *

<a name="event_sync_users"></a>

## "sync_users"
>Synchronizace tabulky "users".

**Kind**: event emitted <a href="../app_src/js/Ϟ_deviceready_functions/Ϟ_initSyncNamespace.sub.js#L35" title="../app_src/js/Ϟ_deviceready_functions/Ϟ_initSyncNamespace.sub.js řádek 35"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;Ϟ_initSyncNamespace.sub.js:35)</small></a>  
- Pro vyhledání naslouchačů/spouštěčů použijte workaround — hledejte dle `Fires: sync_users` resp. `Listens: sync_users`.
- Pokud je naslouchač vnitřní (`inner`), volá se pouze pokud je volána vnější funkce (typicky u stránek je naslouchač zavolán pokud je uživatel na dané stránce).  


* * *

<a name="DB_row"></a>

## DB\_row : <code>Object</code> ℗
>Řádek z databáze.

**Kind**: global typedef <a href="../app_src/js/types.sub.js#L2" title="../app_src/js/types.sub.js řádek 2"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;types.sub.js:2)</small></a>  
**Access**: private  

* * *

<a name="LinkThis"></a>

## LinkThis : <code>Object</code> ℗
>Viz [getLinkThis()](https://github.com/jaandrle/indigo_cordovaCore/blob/master/docs/core_regular.md#getLinkThis).

**Kind**: global typedef <a href="../app_src/js/types.sub.js#L8" title="../app_src/js/types.sub.js řádek 8"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;types.sub.js:8)</small></a>  
**Access**: private  

* * *

<a name="PageThis"></a>

## PageThis : <code>Object</code> ℗
>Viz [getActivePageThis(def)](https://github.com/jaandrle/indigo_cordovaCore/blob/master/docs/core_regular.md#getActivePageThis).

**Kind**: global typedef <a href="../app_src/js/types.sub.js#L14" title="../app_src/js/types.sub.js řádek 14"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;types.sub.js:14)</small></a>  
**Access**: private  

* * *

<a name="FormThis"></a>

## FormThis : [<code>LinkThis</code>](#LinkThis) ℗
>Viz [formHandler()](https://github.com/jaandrle/indigo_cordovaCore/blob/master/docs/core_regular.md#formHandler). Vlastně ale [LinkThis](#LinkThis), kde `el` je formulář sám.

**Kind**: global typedef <a href="../app_src/js/types.sub.js#L20" title="../app_src/js/types.sub.js řádek 20"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;types.sub.js:20)</small></a>  
**Access**: private  

* * *

<a name="Internet_response_object"></a>

## Internet\_response\_object : <code>Object</code> ℗
>Viz [Internet_response_object](https://github.com/jaandrle/indigo_cordovaCore/blob/master/docs/core_regular.md#Internet..Internet_response_object).

**Kind**: global typedef <a href="../app_src/js/types.sub.js#L26" title="../app_src/js/types.sub.js řádek 26"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;types.sub.js:26)</small></a>  
**Access**: private  

* * *

<a name="Komponenta"></a>

## Komponenta : <code>Object</code> ℗
>Komponenta (`share` z `$dom.component`) viz [jaaJSU](https://github.com/jaandrle/jaaJSU/blob/master/docs/jaaJSU.md#module_jaaJSU..$dom..instance_component.share).

**Kind**: global typedef <a href="../app_src/js/types.sub.js#L32" title="../app_src/js/types.sub.js řádek 32"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;types.sub.js:32)</small></a>  
**Access**: private  

* * *

<a name="KomponentaTap"></a>

## KomponentaTap : <code>array</code> ℗
>Registrace `tapEventListener` pro [Komponenta](#Komponenta). Výstup z [$dom.componentTap]($dom.componentTap).

**Kind**: global typedef <a href="../app_src/js/types.sub.js#L38" title="../app_src/js/types.sub.js řádek 38"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;types.sub.js:38)</small></a>  
**Access**: private  

* * *

<a name="component_notePhoto"></a>

## component\_notePhoto(def) ⇒ [<code>Komponenta</code>](#Komponenta)
>Přidává `div` s fotografií a tlačítkem pro smazání.

**Kind**: global function <a href="../app_src/js/atoms/agenda_activities/component_notePhoto.sub.js#L14" title="../app_src/js/atoms/agenda_activities/component_notePhoto.sub.js řádek 14"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;component_notePhoto.sub.js:14)</small></a>  
**Categories:** <i><a href="#module_Atom">Atom</a></i>, <i><a href="#module_DOM">DOM</a></i>  
**Onclick**: <code>Function</code> [link_PhotosClickEvent](#link_PhotosClickEvent)  

| Param | Type | Description |
| --- | --- | --- |
| <code>def</code> | <code>Object</code> |  |
| &nbsp;&boxvr;&nbsp;<code>filesrc</code> | <code>String</code> | Cesta k souboru |


* * *

<a name="_onPagesPreparing"></a>

## \_onPagesPreparing : <code>object</code>
>Deklarativní definice textů (html element se značkuje `data-cmd="text-jméno"`).

**Kind**: global namespace <a href="../app_src/js/main.js#L42" title="../app_src/js/main.js řádek 42"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;main.js:42)</small></a>  
**Categories:** <i><a href="#module_Interní">Interní</a></i>  

* * *

<a name="_onPopupPagesFunctions"></a>

## \_onPopupPagesFunctions : <code>object</code>
>Funkcionnální část pro jednotlivé popup stránky

**Kind**: global namespace <a href="../app_src/js/main.js#L49" title="../app_src/js/main.js řádek 49"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;main.js:49)</small></a>  
**Categories:** <i><a href="#module_Interní">Interní</a></i>  

* [_onPopupPagesFunctions](#_onPopupPagesFunctions) : <code>object</code>
    * [.agendaActivities()](#_onPopupPagesFunctions.agendaActivities)
    * [.agendaMyStory2()](#_onPopupPagesFunctions.agendaMyStory2)
    * [.agendaMyStory3()](#_onPopupPagesFunctions.agendaMyStory3)
    * [.agendaMyStory4and5()](#_onPopupPagesFunctions.agendaMyStory4and5)
    * [.agendaColors()](#_onPopupPagesFunctions.agendaColors)
    * [.agendaUpward()](#_onPopupPagesFunctions.agendaUpward)
    * [.agendaCSA()](#_onPopupPagesFunctions.agendaCSA)
    * [.agendaNSA()](#_onPopupPagesFunctions.agendaNSA)
    * [.agendaFeedback()](#_onPopupPagesFunctions.agendaFeedback)
    * [.agendaHealth()](#_onPopupPagesFunctions.agendaHealth)
    * [.agendaInfo()](#_onPopupPagesFunctions.agendaInfo)
    * [.agendaNotes()](#_onPopupPagesFunctions.agendaNotes)


* * *

<a name="_onPopupPagesFunctions.agendaActivities"></a>

### _onPopupPagesFunctions.agendaActivities()
>Popup okna My Story apod. k položce v agendě

**Kind**: static method of [<code>\_onPopupPagesFunctions</code>](#_onPopupPagesFunctions) <a href="../app_src/js/organisms/Conference/agendaActivities.sub.js#L5" title="../app_src/js/organisms/Conference/agendaActivities.sub.js řádek 5"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;agendaActivities.sub.js:5)</small></a>  
**Categories:** <i><a href="#module_Organismus">Organismus</a></i>  
**Fires:** [<code>sync\_feedbacks\_answers</code>](#event_sync_feedbacks_answers)  

* * *

<a name="_onPopupPagesFunctions.agendaMyStory2"></a>

### _onPopupPagesFunctions.agendaMyStory2()
>Viz [agendaActivities](#_onPopupPagesFunctions.agendaActivities)

**Kind**: static method of [<code>\_onPopupPagesFunctions</code>](#_onPopupPagesFunctions) <a href="../app_src/js/organisms/Conference/agendaActivities.sub.js#L40" title="../app_src/js/organisms/Conference/agendaActivities.sub.js řádek 40"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;agendaActivities.sub.js:40)</small></a>  
**Categories:** <i><a href="#module_Organismus">Organismus</a></i>  

* * *

<a name="_onPopupPagesFunctions.agendaMyStory3"></a>

### _onPopupPagesFunctions.agendaMyStory3()
>Viz [agendaActivities](#_onPopupPagesFunctions.agendaActivities)

**Kind**: static method of [<code>\_onPopupPagesFunctions</code>](#_onPopupPagesFunctions) <a href="../app_src/js/organisms/Conference/agendaActivities.sub.js#L46" title="../app_src/js/organisms/Conference/agendaActivities.sub.js řádek 46"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;agendaActivities.sub.js:46)</small></a>  
**Categories:** <i><a href="#module_Organismus">Organismus</a></i>  

* * *

<a name="_onPopupPagesFunctions.agendaMyStory4and5"></a>

### _onPopupPagesFunctions.agendaMyStory4and5()
>Viz [agendaActivities](#_onPopupPagesFunctions.agendaActivities)

**Kind**: static method of [<code>\_onPopupPagesFunctions</code>](#_onPopupPagesFunctions) <a href="../app_src/js/organisms/Conference/agendaActivities.sub.js#L52" title="../app_src/js/organisms/Conference/agendaActivities.sub.js řádek 52"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;agendaActivities.sub.js:52)</small></a>  
**Categories:** <i><a href="#module_Organismus">Organismus</a></i>  

* * *

<a name="_onPopupPagesFunctions.agendaColors"></a>

### _onPopupPagesFunctions.agendaColors()
>Viz [agendaActivities](#_onPopupPagesFunctions.agendaActivities)

**Kind**: static method of [<code>\_onPopupPagesFunctions</code>](#_onPopupPagesFunctions) <a href="../app_src/js/organisms/Conference/agendaActivities.sub.js#L58" title="../app_src/js/organisms/Conference/agendaActivities.sub.js řádek 58"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;agendaActivities.sub.js:58)</small></a>  
**Categories:** <i><a href="#module_Organismus">Organismus</a></i>  

* * *

<a name="_onPopupPagesFunctions.agendaUpward"></a>

### _onPopupPagesFunctions.agendaUpward()
>Viz [agendaActivities](#_onPopupPagesFunctions.agendaActivities)

**Kind**: static method of [<code>\_onPopupPagesFunctions</code>](#_onPopupPagesFunctions) <a href="../app_src/js/organisms/Conference/agendaActivities.sub.js#L64" title="../app_src/js/organisms/Conference/agendaActivities.sub.js řádek 64"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;agendaActivities.sub.js:64)</small></a>  
**Categories:** <i><a href="#module_Organismus">Organismus</a></i>  

* * *

<a name="_onPopupPagesFunctions.agendaCSA"></a>

### _onPopupPagesFunctions.agendaCSA()
>Viz [agendaActivities](#_onPopupPagesFunctions.agendaActivities)

**Kind**: static method of [<code>\_onPopupPagesFunctions</code>](#_onPopupPagesFunctions) <a href="../app_src/js/organisms/Conference/agendaActivities.sub.js#L70" title="../app_src/js/organisms/Conference/agendaActivities.sub.js řádek 70"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;agendaActivities.sub.js:70)</small></a>  
**Categories:** <i><a href="#module_Organismus">Organismus</a></i>  

* * *

<a name="_onPopupPagesFunctions.agendaNSA"></a>

### _onPopupPagesFunctions.agendaNSA()
>Viz [agendaActivities](#_onPopupPagesFunctions.agendaActivities)

**Kind**: static method of [<code>\_onPopupPagesFunctions</code>](#_onPopupPagesFunctions) <a href="../app_src/js/organisms/Conference/agendaActivities.sub.js#L76" title="../app_src/js/organisms/Conference/agendaActivities.sub.js řádek 76"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;agendaActivities.sub.js:76)</small></a>  
**Categories:** <i><a href="#module_Organismus">Organismus</a></i>  

* * *

<a name="_onPopupPagesFunctions.agendaFeedback"></a>

### _onPopupPagesFunctions.agendaFeedback()
>Popup okna My Story apod. k položce v agendě

**Kind**: static method of [<code>\_onPopupPagesFunctions</code>](#_onPopupPagesFunctions) <a href="../app_src/js/organisms/Conference/agendaFeedback.sub.js#L6" title="../app_src/js/organisms/Conference/agendaFeedback.sub.js řádek 6"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;agendaFeedback.sub.js:6)</small></a>  
**Categories:** <i><a href="#module_Organismus">Organismus</a></i>  
**Fires:** [<code>sync\_feedbacks\_answers</code>](#event_sync_feedbacks_answers)  

* * *

<a name="_onPopupPagesFunctions.agendaHealth"></a>

### _onPopupPagesFunctions.agendaHealth()
>Popup okna My Story apod. k položce v agendě

**Kind**: static method of [<code>\_onPopupPagesFunctions</code>](#_onPopupPagesFunctions) <a href="../app_src/js/organisms/Conference/agendaHealth.sub.js#L6" title="../app_src/js/organisms/Conference/agendaHealth.sub.js řádek 6"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;agendaHealth.sub.js:6)</small></a>  
**Categories:** <i><a href="#module_Organismus">Organismus</a></i>  
**Fires:** [<code>sync\_feedbacks\_answers</code>](#event_sync_feedbacks_answers)  

* * *

<a name="_onPopupPagesFunctions.agendaInfo"></a>

### _onPopupPagesFunctions.agendaInfo()
>Popup okno pro zobrazení informací k položce v agendě

**Kind**: static method of [<code>\_onPopupPagesFunctions</code>](#_onPopupPagesFunctions) <a href="../app_src/js/organisms/Conference/agendaInfo.sub.js#L4" title="../app_src/js/organisms/Conference/agendaInfo.sub.js řádek 4"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;agendaInfo.sub.js:4)</small></a>  
**Categories:** <i><a href="#module_Organismus">Organismus</a></i>  

* * *

<a name="_onPopupPagesFunctions.agendaNotes"></a>

### _onPopupPagesFunctions.agendaNotes()
>Popup okno pro poznámky k položce v agendě

**Kind**: static method of [<code>\_onPopupPagesFunctions</code>](#_onPopupPagesFunctions) <a href="../app_src/js/organisms/Conference/agendaNotes.sub.js#L6" title="../app_src/js/organisms/Conference/agendaNotes.sub.js řádek 6"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;agendaNotes.sub.js:6)</small></a>  
**Categories:** <i><a href="#module_Organismus">Organismus</a></i>  

* * *

<a name="_onDeviceReadyFunction"></a>

## \_onDeviceReadyFunction()
>Volá se po inicializaci [core.js](https://github.com/jaandrle/indigo_cordovaCore) — tj. když je zařízení připraveno.

**Kind**: global function <a href="../app_src/js/main.js#L17" title="../app_src/js/main.js řádek 17"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;main.js:17)</small></a>  
**Categories:** <i><a href="#module_Interní">Interní</a></i>  

* [_onDeviceReadyFunction()](#_onDeviceReadyFunction)
    * [~installed_app_version_name](#_onDeviceReadyFunction..installed_app_version_name)
    * [~prev_version](#_onDeviceReadyFunction..prev_version)
    * [~appUpdate()](#_onDeviceReadyFunction..appUpdate)
    * [~initPauseResume()](#_onDeviceReadyFunction..initPauseResume)
    * [~initPhotosClasses()](#_onDeviceReadyFunction..initPhotosClasses)
    * [~initPopupInternet()](#_onDeviceReadyFunction..initPopupInternet)
    * [~initPopupSmall()](#_onDeviceReadyFunction..initPopupSmall)
    * [~initSyncNamespace()](#_onDeviceReadyFunction..initSyncNamespace)
    * [~setSyncItem(table, attribute)](#_onDeviceReadyFunction..setSyncItem)


* * *

<a name="_onDeviceReadyFunction..installed_app_version_name"></a>

### _onDeviceReadyFunction~installed\_app\_version\_name
>Zde se načítá aktuální verze, kterou uživatel používá (načítá se klíč `app_version_name` z `localStorage`) viz [_onDeviceReadyFunction~update](_onDeviceReadyFunction~update)

**Kind**: inner constant of [<code>\_onDeviceReadyFunction</code>](#_onDeviceReadyFunction) <a href="../app_src/js/Ϟ_deviceready_functions/Ϟ_appUpdate.sub.js#L10" title="../app_src/js/Ϟ_deviceready_functions/Ϟ_appUpdate.sub.js řádek 10"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;Ϟ_appUpdate.sub.js:10)</small></a>  

* * *

<a name="_onDeviceReadyFunction..prev_version"></a>

### _onDeviceReadyFunction~prev\_version
>Zde změnit jméno předchozí verze pro identifikaci "update o jednu generaci" události viz [_onDeviceReadyFunction~update](_onDeviceReadyFunction~update)

**Kind**: inner constant of [<code>\_onDeviceReadyFunction</code>](#_onDeviceReadyFunction) <a href="../app_src/js/Ϟ_deviceready_functions/Ϟ_appUpdate.sub.js#L16" title="../app_src/js/Ϟ_deviceready_functions/Ϟ_appUpdate.sub.js řádek 16"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;Ϟ_appUpdate.sub.js:16)</small></a>  

* * *

<a name="_onDeviceReadyFunction..appUpdate"></a>

### _onDeviceReadyFunction~appUpdate()
>Zde se řeší update databáze při (prvním) spuštění. Jako update se bere situace kdy [installed_app_version_name](#_onDeviceReadyFunction..installed_app_version_name)≠[app_version_name](#app_version_name).Po konci updatu se samozřejmě `app_version_name` přenastaví na nový.Ještě se rozlišuje obecný update a update ze předchozí verze (porovnává se s [prev_version](#_onDeviceReadyFunction..prev_version))

**Kind**: inner method of [<code>\_onDeviceReadyFunction</code>](#_onDeviceReadyFunction) <a href="../app_src/js/Ϟ_deviceready_functions/Ϟ_appUpdate.sub.js#L24" title="../app_src/js/Ϟ_deviceready_functions/Ϟ_appUpdate.sub.js řádek 24"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;Ϟ_appUpdate.sub.js:24)</small></a>  

* * *

<a name="_onDeviceReadyFunction..initPauseResume"></a>

### _onDeviceReadyFunction~initPauseResume()
>Funkce řeší situaci, kdy je appka v pozadí. Po překročení **30 minut** se volá [logoutFunction](logoutFunction), jinak se volá [setApplicationIconBadgeNumber](setApplicationIconBadgeNumber).

**Kind**: inner method of [<code>\_onDeviceReadyFunction</code>](#_onDeviceReadyFunction) <a href="../app_src/js/Ϟ_deviceready_functions/Ϟ_initPauseResume.sub.js#L9" title="../app_src/js/Ϟ_deviceready_functions/Ϟ_initPauseResume.sub.js řádek 9"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;Ϟ_initPauseResume.sub.js:9)</small></a>  

* * *

<a name="_onDeviceReadyFunction..initPhotosClasses"></a>

### _onDeviceReadyFunction~initPhotosClasses()
>Inicializuje instance třídy ***CoreJS — Pictures*** pro vybírání obrázků v poznámkách, idejích a uživatelksé profilovky.

**Kind**: inner method of [<code>\_onDeviceReadyFunction</code>](#_onDeviceReadyFunction) <a href="../app_src/js/Ϟ_deviceready_functions/Ϟ_initPhotosClasses.sub.js#L12" title="../app_src/js/Ϟ_deviceready_functions/Ϟ_initPhotosClasses.sub.js řádek 12"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;Ϟ_initPhotosClasses.sub.js:12)</small></a>  

* * *

<a name="_onDeviceReadyFunction..initPopupInternet"></a>

### _onDeviceReadyFunction~initPopupInternet()
>Inicializuje popup instanci pro používání v `mx.internet`. Inicializuje se do [`mx[mxInternetAnimation_name]`](#mxInternetAnimation_name).

**Kind**: inner method of [<code>\_onDeviceReadyFunction</code>](#_onDeviceReadyFunction) <a href="../app_src/js/Ϟ_deviceready_functions/Ϟ_initPopupInternet.sub.js#L10" title="../app_src/js/Ϟ_deviceready_functions/Ϟ_initPopupInternet.sub.js řádek 10"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;Ϟ_initPopupInternet.sub.js:10)</small></a>  

* * *

<a name="_onDeviceReadyFunction..initPopupSmall"></a>

### _onDeviceReadyFunction~initPopupSmall()
>Funkce inicializuje popup [popup](#popup) (instance třídy ***CoreJS — Popups***).Parametry:- Timeout je nastaven na **4sec**.- metoda `.show` podporuje objekt s klíčem **text** (text zprávy) a volitelně **icon** (jméno třídy ikony, je zvolit [warningIcon](#warningIcon)).

**Kind**: inner method of [<code>\_onDeviceReadyFunction</code>](#_onDeviceReadyFunction) <a href="../app_src/js/Ϟ_deviceready_functions/Ϟ_initPopupSmall.sub.js#L14" title="../app_src/js/Ϟ_deviceready_functions/Ϟ_initPopupSmall.sub.js řádek 14"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;Ϟ_initPopupSmall.sub.js:14)</small></a>  

* * *

<a name="_onDeviceReadyFunction..initSyncNamespace"></a>

### _onDeviceReadyFunction~initSyncNamespace()
>Inicializuje instance třídy ***CoreJS — Synchronizers*** pro synchronizaci jednotlivých tabulek.

**Kind**: inner method of [<code>\_onDeviceReadyFunction</code>](#_onDeviceReadyFunction) <a href="../app_src/js/Ϟ_deviceready_functions/Ϟ_initSyncNamespace.sub.js#L10" title="../app_src/js/Ϟ_deviceready_functions/Ϟ_initSyncNamespace.sub.js řádek 10"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;Ϟ_initSyncNamespace.sub.js:10)</small></a>  

* * *

<a name="_onDeviceReadyFunction..setSyncItem"></a>

### _onDeviceReadyFunction~setSyncItem(table, attribute)
>Utilita pro vytváření instancí v [sync](#sync).

**Kind**: inner method of [<code>\_onDeviceReadyFunction</code>](#_onDeviceReadyFunction) <a href="../app_src/js/Ϟ_deviceready_functions/Ϟ_setSyncItem.sub.js#L10" title="../app_src/js/Ϟ_deviceready_functions/Ϟ_setSyncItem.sub.js řádek 10"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;Ϟ_setSyncItem.sub.js:10)</small></a>  

| Param | Type | Description |
| --- | --- | --- |
| <code>table</code> | <code>String</code> | Jméno tabulky a vlastně i jméno POST requesty (před jméno tabulky se přidává **get_**) |
| <code>attribute</code> | <code>Object</code> | Dodatečné parametry pro třídu **CoreJS — Synchronizers**. |


* * *

<a name="_onAllPagesReadyFunction"></a>

## \_onAllPagesReadyFunction()
>Volá se před funkcemi v [_onPagesReadyFunctions](#_onPagesReadyFunctions) (při návštěvě jakékoliv stránky).

**Kind**: global function <a href="../app_src/js/main.js#L28" title="../app_src/js/main.js řádek 28"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;main.js:28)</small></a>  
**Categories:** <i><a href="#module_Interní">Interní</a></i>  

* * *

<a name="link_venuePhotoInfo"></a>

## link\_venuePhotoInfo(_this)
>Přechod do konkrétní *SignUp* konference

**Kind**: global function <a href="../app_src/js/atoms/agenda_general/link_venuePhotoInfo.sub.js#L8" title="../app_src/js/atoms/agenda_general/link_venuePhotoInfo.sub.js řádek 8"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;link_venuePhotoInfo.sub.js:8)</small></a>  
**Categories:** <i><a href="#module_Link">Link</a></i>, <i><a href="#module_Atom">Atom</a></i>, <i><a href="#module_Link">Link</a></i>  

| Param | Type |
| --- | --- |
| <code>_this</code> | [<code>LinkThis</code>](#LinkThis) | 


* * *

<a name="loginFunction"></a>

## loginFunction(_this, localStorage_password)
>Spouští proces přihlašování

**Kind**: global function <a href="../app_src/js/atoms/login&touch/loginFunction.sub.js#L16" title="../app_src/js/atoms/login&touch/loginFunction.sub.js řádek 16"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;loginFunction.sub.js:16)</small></a>  
**Categories:** <i><a href="#module_Atom">Atom</a></i>, <i><a href="#module_Link">Link</a></i>  

| Param | Type | Description |
| --- | --- | --- |
| <code>_this</code> | [<code>LinkThis</code>](#LinkThis) |  |
| <code>localStorage_password</code> | <code>boolean</code> | Načtení hesla z `localStorage` (pokud se uživatel identifikoval jinak, např. pomocí otisku prstu). |


* * *

<a name="link_AlphabetLetter"></a>

## link\_AlphabetLetter(_this)
>Klikání na písmenka v abecední navigaci u uživatelích v konferencích

**Kind**: global function <a href="../app_src/js/atoms/profily/link_AlphabetLetter.sub.js#L9" title="../app_src/js/atoms/profily/link_AlphabetLetter.sub.js řádek 9"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;link_AlphabetLetter.sub.js:9)</small></a>  
**Categories:** <i><a href="#module_Link">Link</a></i>, <i><a href="#module_Atom">Atom</a></i>, <i><a href="#module_Link">Link</a></i>  

| Param | Type |
| --- | --- |
| <code>_this</code> | [<code>LinkThis</code>](#LinkThis) | 


* * *

<a name="link_RetakeMyPhoto"></a>

## link\_RetakeMyPhoto(_this)
>Tlačítko pro přefocení [app_user](app_user)

**Kind**: global function <a href="../app_src/js/atoms/profily/link_RetakeMyPhoto.sub.js#L9" title="../app_src/js/atoms/profily/link_RetakeMyPhoto.sub.js řádek 9"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;link_RetakeMyPhoto.sub.js:9)</small></a>  
**Categories:** <i><a href="#module_Link">Link</a></i>, <i><a href="#module_Atom">Atom</a></i>, <i><a href="#module_Link">Link</a></i>  

| Param | Type |
| --- | --- |
| <code>_this</code> | [<code>LinkThis</code>](#LinkThis) | 


* * *

<a name="link_fingerprintLogin"></a>

## link\_fingerprintLogin(_this)
>Tlačítko vyvolávající fingerprint

**Kind**: global function <a href="../app_src/js/molecules/fingerprint.sub.js#L125" title="../app_src/js/molecules/fingerprint.sub.js řádek 125"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;fingerprint.sub.js:125)</small></a>  
**Categories:** <i><a href="#module_Molekula">Molekula</a></i>, <i><a href="#module_Link">Link</a></i>  

| Param | Type |
| --- | --- |
| <code>_this</code> | [<code>LinkThis</code>](#LinkThis) | 


* * *

<a name="_onPagesReadyFunctions"></a>

## \_onPagesReadyFunctions : <code>object</code>
>Funkcionnální část pro jednotlivé stránky

**Kind**: global namespace <a href="../app_src/js/main.js#L56" title="../app_src/js/main.js řádek 56"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;main.js:56)</small></a>  
**Categories:** <i><a href="#module_Stránky">Stránky</a></i>  

* [_onPagesReadyFunctions](#_onPagesReadyFunctions) : <code>object</code>
    * [.pp_Announcements(_this)](#_onPagesReadyFunctions.pp_Announcements)
    * [.pp_ChooseConference(_this)](#_onPagesReadyFunctions.pp_ChooseConference)
        * [~getFromTillText(date_from, num_days)](#_onPagesReadyFunctions.pp_ChooseConference..getFromTillText) ⇒ <code>String</code>
    * [.pp_Login(_this)](#_onPagesReadyFunctions.pp_Login)
    * [.pp_ConferenceAgenda(_this)](#_onPagesReadyFunctions.pp_ConferenceAgenda)
        * [~preWorkLink()](#_onPagesReadyFunctions.pp_ConferenceAgenda..preWorkLink) ⇒ [<code>Komponenta</code>](#Komponenta)
    * [.pp_ConferenceInfo(_this)](#_onPagesReadyFunctions.pp_ConferenceInfo)
    * [.pp_ConferenceInfoVenueMap(_this)](#_onPagesReadyFunctions.pp_ConferenceInfoVenueMap)
    * [.pp_AppUser(_this)](#_onPagesReadyFunctions.pp_AppUser)
    * [.pp_AppUserEdit(_this)](#_onPagesReadyFunctions.pp_AppUserEdit)
    * [.pp_Menu(_this)](#_onPagesReadyFunctions.pp_Menu)
    * [.pp_MenuFingerprint(_this)](#_onPagesReadyFunctions.pp_MenuFingerprint)
    * [.pp_Welcome(_this)](#_onPagesReadyFunctions.pp_Welcome)
    * [.pp_People(_this)](#_onPagesReadyFunctions.pp_People)
    * [.pp_PeopleProfile(_this)](#_onPagesReadyFunctions.pp_PeopleProfile)
        * [~updateUserRecord(def)](#_onPagesReadyFunctions.pp_PeopleProfile..updateUserRecord) ⇒ [<code>DB\_row</code>](#DB_row)


* * *

<a name="_onPagesReadyFunctions.pp_Announcements"></a>

### _onPagesReadyFunctions.pp\_Announcements(_this)
>Přehled agendy ke konferenci

**Kind**: static method of [<code>\_onPagesReadyFunctions</code>](#_onPagesReadyFunctions) <a href="../app_src/js/organisms/Announcements/pp_Announcements.sub.js#L12" title="../app_src/js/organisms/Announcements/pp_Announcements.sub.js řádek 12"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;pp_Announcements.sub.js:12)</small></a>  
**Categories:** <i><a href="#module_Organismus">Organismus</a></i>, <i><a href="#module_Stránka">Stránka</a></i>  

| Param | Type |
| --- | --- |
| <code>_this</code> | [<code>PageThis</code>](#PageThis) | 


* * *

<a name="_onPagesReadyFunctions.pp_ChooseConference"></a>

### _onPagesReadyFunctions.pp\_ChooseConference(_this)
>Stránka pro výběr konference po přihlášení uživatele aplikace

**Kind**: static method of [<code>\_onPagesReadyFunctions</code>](#_onPagesReadyFunctions) <a href="../app_src/js/organisms/AppStart/pp_ChooseConference.sub.js#L11" title="../app_src/js/organisms/AppStart/pp_ChooseConference.sub.js řádek 11"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;pp_ChooseConference.sub.js:11)</small></a>  
**Categories:** <i><a href="#module_Organismus">Organismus</a></i>, <i><a href="#module_Stránka">Stránka</a></i>  

| Param | Type |
| --- | --- |
| <code>_this</code> | [<code>PageThis</code>](#PageThis) | 


* * *

<a name="_onPagesReadyFunctions.pp_ChooseConference..getFromTillText"></a>

#### pp_ChooseConference~getFromTillText(date_from, num_days) ⇒ <code>String</code>
>Pomocná utilita pro generování _Od-Do_ textu. Jen zjednodušená kontrola na počet dní a (ne)stejný měsíc.

**Kind**: inner method of [<code>pp\_ChooseConference</code>](#_onPagesReadyFunctions.pp_ChooseConference) <a href="../app_src/js/molecules/getFromTillText.sub.js#L11" title="../app_src/js/molecules/getFromTillText.sub.js řádek 11"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;getFromTillText.sub.js:11)</small></a>  
**Returns**: <code>String</code> - Od-Do  
**Categories:** <i><a href="#module_Molekula">Molekula</a></i>  

| Param | Type | Description |
| --- | --- | --- |
| <code>date_from</code> | <code>String</code> | Argument pro `$time.fromString` |
| <code>num_days</code> | <code>String</code> \| <code>Number</code> | Počet dnů, kdy událost probíhá |


* * *

<a name="_onPagesReadyFunctions.pp_Login"></a>

### _onPagesReadyFunctions.pp\_Login(_this)
>Stránka pro přihlášení uživatele aplikace

**Kind**: static method of [<code>\_onPagesReadyFunctions</code>](#_onPagesReadyFunctions) <a href="../app_src/js/organisms/AppStart/pp_Login.sub.js#L12" title="../app_src/js/organisms/AppStart/pp_Login.sub.js řádek 12"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;pp_Login.sub.js:12)</small></a>  
**Categories:** <i><a href="#module_Organismus">Organismus</a></i>, <i><a href="#module_Stránka">Stránka</a></i>  

| Param | Type |
| --- | --- |
| <code>_this</code> | [<code>PageThis</code>](#PageThis) | 


* * *

<a name="_onPagesReadyFunctions.pp_ConferenceAgenda"></a>

### _onPagesReadyFunctions.pp\_ConferenceAgenda(_this)
>Přehled agendy ke konferenci

**Kind**: static method of [<code>\_onPagesReadyFunctions</code>](#_onPagesReadyFunctions) <a href="../app_src/js/organisms/Conference/pp_ConferenceAgenda.sub.js#L14" title="../app_src/js/organisms/Conference/pp_ConferenceAgenda.sub.js řádek 14"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;pp_ConferenceAgenda.sub.js:14)</small></a>  
**Categories:** <i><a href="#module_Organismus">Organismus</a></i>, <i><a href="#module_Stránka">Stránka</a></i>  
**Fires:** [<code>sync\_agendas</code>](#event_sync_agendas)  

| Param | Type |
| --- | --- |
| <code>_this</code> | [<code>PageThis</code>](#PageThis) | 


* * *

<a name="_onPagesReadyFunctions.pp_ConferenceAgenda..preWorkLink"></a>

#### pp_ConferenceAgenda~preWorkLink() ⇒ [<code>Komponenta</code>](#Komponenta)
>Link na prework. Naslouchá změnu uživatele (konkrétně tedy spíše změnu `hash`e).

**Kind**: inner method of [<code>pp\_ConferenceAgenda</code>](#_onPagesReadyFunctions.pp_ConferenceAgenda) <a href="../app_src/js/organisms/Conference/pp_ConferenceAgenda.sub.js#L60" title="../app_src/js/organisms/Conference/pp_ConferenceAgenda.sub.js řádek 60"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;pp_ConferenceAgenda.sub.js:60)</small></a>  
**Categories:** <i><a href="#module_Organismus">Organismus</a></i>  

* * *

<a name="_onPagesReadyFunctions.pp_ConferenceInfo"></a>

### _onPagesReadyFunctions.pp\_ConferenceInfo(_this)
>Aktuální konference

**Kind**: static method of [<code>\_onPagesReadyFunctions</code>](#_onPagesReadyFunctions) <a href="../app_src/js/organisms/Conference/pp_ConferenceInfo.sub.js#L15" title="../app_src/js/organisms/Conference/pp_ConferenceInfo.sub.js řádek 15"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;pp_ConferenceInfo.sub.js:15)</small></a>  
**Categories:** <i><a href="#module_Organismus">Organismus</a></i>, <i><a href="#module_Stránka">Stránka</a></i>  

| Param | Type |
| --- | --- |
| <code>_this</code> | [<code>PageThis</code>](#PageThis) | 


* * *

<a name="_onPagesReadyFunctions.pp_ConferenceInfoVenueMap"></a>

### _onPagesReadyFunctions.pp\_ConferenceInfoVenueMap(_this)
>Informační stránka (podstránka mapy) v konferencích

**Kind**: static method of [<code>\_onPagesReadyFunctions</code>](#_onPagesReadyFunctions) <a href="../app_src/js/organisms/Conference/pp_ConferenceInfoVenueMap.sub.js#L9" title="../app_src/js/organisms/Conference/pp_ConferenceInfoVenueMap.sub.js řádek 9"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;pp_ConferenceInfoVenueMap.sub.js:9)</small></a>  
**Categories:** <i><a href="#module_Organismus">Organismus</a></i>, <i><a href="#module_Stránka">Stránka</a></i>  

| Param | Type |
| --- | --- |
| <code>_this</code> | [<code>PageThis</code>](#PageThis) | 


* * *

<a name="_onPagesReadyFunctions.pp_AppUser"></a>

### _onPagesReadyFunctions.pp\_AppUser(_this)
>Stránka uživatele aplikace

**Kind**: static method of [<code>\_onPagesReadyFunctions</code>](#_onPagesReadyFunctions) <a href="../app_src/js/organisms/Home/pp_AppUser.sub.js#L14" title="../app_src/js/organisms/Home/pp_AppUser.sub.js řádek 14"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;pp_AppUser.sub.js:14)</small></a>  
**Categories:** <i><a href="#module_Organismus">Organismus</a></i>, <i><a href="#module_Stránka">Stránka</a></i>  

| Param | Type |
| --- | --- |
| <code>_this</code> | [<code>PageThis</code>](#PageThis) | 


* * *

<a name="_onPagesReadyFunctions.pp_AppUserEdit"></a>

### _onPagesReadyFunctions.pp\_AppUserEdit(_this)
>Stránka pro editaci uživatele aplikace

**Kind**: static method of [<code>\_onPagesReadyFunctions</code>](#_onPagesReadyFunctions) <a href="../app_src/js/organisms/Home/pp_AppUserEdit.sub.js#L11" title="../app_src/js/organisms/Home/pp_AppUserEdit.sub.js řádek 11"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;pp_AppUserEdit.sub.js:11)</small></a>  
**Categories:** <i><a href="#module_Organismus">Organismus</a></i>, <i><a href="#module_Stránka">Stránka</a></i>  

| Param | Type |
| --- | --- |
| <code>_this</code> | [<code>PageThis</code>](#PageThis) | 


* * *

<a name="_onPagesReadyFunctions.pp_Menu"></a>

### _onPagesReadyFunctions.pp\_Menu(_this)
>Stránka Menu

**Kind**: static method of [<code>\_onPagesReadyFunctions</code>](#_onPagesReadyFunctions) <a href="../app_src/js/organisms/Home/pp_Menu.sub.js#L12" title="../app_src/js/organisms/Home/pp_Menu.sub.js řádek 12"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;pp_Menu.sub.js:12)</small></a>  
**Categories:** <i><a href="#module_Organismus">Organismus</a></i>, <i><a href="#module_Stránka">Stránka</a></i>  

| Param | Type |
| --- | --- |
| <code>_this</code> | [<code>PageThis</code>](#PageThis) | 


* * *

<a name="_onPagesReadyFunctions.pp_MenuFingerprint"></a>

### _onPagesReadyFunctions.pp\_MenuFingerprint(_this)
>Stránka pro nastavení biometrického přihlášení

**Kind**: static method of [<code>\_onPagesReadyFunctions</code>](#_onPagesReadyFunctions) <a href="../app_src/js/organisms/Home/pp_MenuFingerprint.sub.js#L12" title="../app_src/js/organisms/Home/pp_MenuFingerprint.sub.js řádek 12"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;pp_MenuFingerprint.sub.js:12)</small></a>  
**Categories:** <i><a href="#module_Organismus">Organismus</a></i>, <i><a href="#module_Stránka">Stránka</a></i>  

| Param | Type |
| --- | --- |
| <code>_this</code> | [<code>PageThis</code>](#PageThis) | 


* * *

<a name="_onPagesReadyFunctions.pp_Welcome"></a>

### _onPagesReadyFunctions.pp\_Welcome(_this)
>Uvítací stránka, obsah načítá z konference

**Kind**: static method of [<code>\_onPagesReadyFunctions</code>](#_onPagesReadyFunctions) <a href="../app_src/js/organisms/Home/pp_Welcome.sub.js#L11" title="../app_src/js/organisms/Home/pp_Welcome.sub.js řádek 11"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;pp_Welcome.sub.js:11)</small></a>  
**Categories:** <i><a href="#module_Organismus">Organismus</a></i>, <i><a href="#module_Stránka">Stránka</a></i>  

| Param | Type |
| --- | --- |
| <code>_this</code> | [<code>PageThis</code>](#PageThis) | 


* * *

<a name="_onPagesReadyFunctions.pp_People"></a>

### _onPagesReadyFunctions.pp\_People(_this)
>Přehled účastníků konference

**Kind**: static method of [<code>\_onPagesReadyFunctions</code>](#_onPagesReadyFunctions) <a href="../app_src/js/organisms/People/pp_People.sub.js#L18" title="../app_src/js/organisms/People/pp_People.sub.js řádek 18"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;pp_People.sub.js:18)</small></a>  
**Categories:** <i><a href="#module_Organismus">Organismus</a></i>, <i><a href="#module_Stránka">Stránka</a></i>  
**Fires:** [<code>sync\_users</code>](#event_sync_users)<br/>**Fires:** <code>event:sync\_attendance</code>  

| Param | Type |
| --- | --- |
| <code>_this</code> | [<code>PageThis</code>](#PageThis) | 


* * *

<a name="_onPagesReadyFunctions.pp_PeopleProfile"></a>

### _onPagesReadyFunctions.pp\_PeopleProfile(_this)
>Stránka člověka ze seznamu

**Kind**: static method of [<code>\_onPagesReadyFunctions</code>](#_onPagesReadyFunctions) <a href="../app_src/js/organisms/People/pp_PeopleProfile.sub.js#L13" title="../app_src/js/organisms/People/pp_PeopleProfile.sub.js řádek 13"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;pp_PeopleProfile.sub.js:13)</small></a>  
**Categories:** <i><a href="#module_Organismus">Organismus</a></i>, <i><a href="#module_Stránka">Stránka</a></i>  

| Param | Type |
| --- | --- |
| <code>_this</code> | [<code>PageThis</code>](#PageThis) | 


* * *

<a name="_onPagesReadyFunctions.pp_PeopleProfile..updateUserRecord"></a>

#### pp_PeopleProfile~updateUserRecord(def) ⇒ [<code>DB\_row</code>](#DB_row)
>Aktualizuje zaznam v DB dle API.

**Kind**: inner method of [<code>pp\_PeopleProfile</code>](#_onPagesReadyFunctions.pp_PeopleProfile) <a href="../app_src/js/organisms/People/pp_PeopleProfile.sub.js#L54" title="../app_src/js/organisms/People/pp_PeopleProfile.sub.js řádek 54"><small>(defined&ZeroWidthSpace;&commat;&ZeroWidthSpace;pp_PeopleProfile.sub.js:54)</small></a>  
**Returns**: [<code>DB\_row</code>](#DB_row) - záznam o uživateli  
**Categories:** <i><a href="#module_Organismus">Organismus</a></i>  

| Param | Type | Description |
| --- | --- | --- |
| <code>def</code> | <code>object</code> | Vysledek dotazu na API |


* * *

