# Kursprojekt - Bookster
Deadline: 2:a juni 17:00.

I denna uppgift är grupper valfria men får som mest bestå av 3 deltagare och ska registeras via omnius senaste 26:e Maj, detta gäller även för de som väljer att göra uppgiften själva.


## Avgränsningar

- Även om responsive design vore att önska är det väldigt svårt att genomföra för den tänkta designen, därav ingår **inte* responsive design i denna uppgift. 

# Beskrivning

Denna uppgift går ut på att skapa en frontendlösning till en backend som innehåller information om böcker och dess användare. API:et innehåller både administratörer och vanliga användare, men går även att använda som icke-authentiserad användare med viss begränsning.

I mappen ["wireframes"](wireframes/) så finner du ett par wireframes som dokumenterar varje sidas upplägg. Observera att samtliga synliga tjänster i wireframes ska ingå i slutresultatet även om den färdiga designen varierar i font, styling, placering m.m..

## Innan du börjar koda!

Då tester är en del av implementeringen så **måste** du börja med att definera vad som kommer att behöva testas. Du gör detta förslagsvis genom att skapa user stories för varje identiferbar tjänst från wireframes:en. User storise:n *bör* du diskutera med klasskamrat, gruppmedlem eller handledare för att undvika att du skapat user stories som är svåra att översätta till tester.

# Tekniska krav

- Sidan ska has vis styling som hjälper användare att göra intuitiva val
  - Ett medvetet UX tänk med konsekventa färger, knappar m.m.
- Minst 10 komponenter **ska** användas för att lösa implementationen
- Minst 5 av komponenterna ska innehålla tester som reflekteras av tidigare skapta user stories.
  - Medan detta innebär minst 5 tester så ska det som testas variera, dvs. det räcker **inte** att varje test endast kollar om en viss text finns på sidan.
  - Däremot så anses två tester olika om ett testar att en komponentet är renderad med hjälp av text innehåll och den andra testar om någon text finns med **efter** att någon state/fält har uppdaterats.
  - **Minst** ett test måste testa utfallet av ett knapptryck
- Varje kodfil ska innehålla en kortare beskrivning över filens syfte. Se exempel i jwtUtil i server koden [(server/src/util/jwtUtil.js)](server/src/util/jwtUtil.js) och tänkta förbättringar.
  - Abstrakta komponenter med "uppenbart" syfte behöver ej kommenteras. Vid osäkerhet, kommentera ändå.

# Förbered data

I [server/src/config](server/src/config/) så finns det två filer users och books som innehåller förbered data om API:et. Det går bra att fylla på detta vid behov, följ då det format som används i filen.

Observera att ingen data sparas om server startas om, alla förändringar sparas endast i serverns RAM minnet.

# API:et

Du installerar och startar API:et genom att ladda ner och öppna upp server mappen i detta repo och sedan skriver **"npm install & npm run dev"**

API:et använder per default port 3000, men det går att ändra i [src/server.js](server/src/server.js)

## Endpoints
Beroende på behörighet så har användare olika tillgång till API:et. 

- Gäst -> Ej authentiserad.
- Authentiserad -> Har tillgång till ett JWT access token
- Admin -> Användare med högre behörighet än authentiserad användare
<hr>

### 1. Som gäst-, authentiserad- och administratöranvändare
<details>
  <summary>GET [/library/books](server/src/controller/bookController.js)</summary>
  Responsen är en lista över böckerna och ett verisonsnummer som används vid högre betyg. Se kriterier.
</details>

<details>
  <summary>
    GET [/library/books/search](server/src/controller/bookController.js)
    { "query" }
  </summary>
  Query paramtern motsvarar en sökt boktitel.

  Responsen är en lista med matchade böcker och ett verisonsnummer som används vid högre betyg. Se kriterier.
  Vid tom titel så skickas alla böcker tillbaks som svar.
</details>

<details>
  <summary>
    POST [/auth/login](server/src/controller/authController.js)
    { "username", "password" }
  </summary>
  Username och password motsvarar giltiga inloggningsuppgifter.

  Vid lyckat inlogg så ges ett JWT token tillbaka som är giltigt i 45 minuter.

  Kan ge 403 om username eller password inte skickas med.
  Kan ge 403 om användaren inte anger giltiga uppgifter.
  Kan ge 403 om användaren inte finns i databasen.
</details>

<details>
  <summary>
    POST [/auth/register](server/src/controller/authController.js)
    { "username", "password"}
  </summary>
  Username är unikt och kan endast förekomma en gång.

  Vid lyckad registering så ges ett 201 statuskod tillbaka för att indikera att kontot är skapat.

  Kan ge 403 om username eller password inte skickas med.
  Kan ge 403 om användaruppgifterna redan finns.
</details>
<hr>

### 2. Som authentiserad- och administratöranvändare
Samtliga anrop ger:
- 403 om authorized headern inte finns
- 403 om jwt inte kan verifieras
- 
<details>
  <summary>
    GET [/library/profile](server/src/controller/profileController.js)
  </summary>

  Hämtar nuvarande profil för inloggad användare, info hämtas från jwt token:et. Här går det även att se köpta produkter
</details>

<details>
  <summary>
    POST [/library/user/books](server/src/controller/bookController.js)
    { "title", "quantity" }
  </summary>
  "title" är case sensitive.
  "quantity" godtas endast om antal böcker finns i databasen.

  Responsen är en lista över alla böcker och ett verisonsnummer som används vid högre betyg. Se kriterier.
  
  Vid avsaknad av paramterar ges 403.
</details>
<hr>

### 3. Som administratöranvändare

Samtliga anrop ger:
- 401 om användaren inte har behörighet

<details>
  <summary>
  POST [/admin/books](server/src/controller/adminController.js) { "Author", "Title", "Quantity"}
  </summary>

  Ger statuskod 201 när en bok har lagts till.
</details>

<details>
  <summary>
  PUT [/admin/books](server/src/controller/adminController.js) { "previous", "current" }
  </summary>
  Previous är en bok representerad med titel { "title" } 
  Current är den nya boken representerad med den data som önskas uppdateras {"?title", "?author", "?quantity"}
  ? = optional.

  Ger statuskod 201 när en bok har uppdaterats.
</details>

<details>
  <summary>
  DELETE [/admin/books](server/src/controller/adminController.js) { "Title" }
  </summary>

  Ger statuskod 200 när en bok har tagits bort
</details>

<details>
  <summary>
  GET [/admin/users]((server/src/controller/adminController.js)
  </summary>

  Ger en lista över alla användare
</details>

<details>
  <summary>
  PATCH [/admin/users](server/src/controller/adminController.js) {"username"}
  </summary>
  Tilldelar administratör status till användaren med angivet username 
  Username är case sensitive.

  Ger status 200 om användare gick att uppdatera

  Ger 403 om användarnamnet inte går att hitta
</details>

<details>
  <summary>
  DELETE [/admin/users](server/src/controller/adminController.js) {"username"}
  </summary>
  Username är case sensitive

  Ger status 200 om användare gick att ta bort

  Ger 403 om användarnamnet inte går att hitta
</details>
<hr>

## Bedömning

Innan deadline ska en individuell videopresentation skickas in via omnius. Videon måste uppfylla följande tekniska krav:
1. Studerande måste vara synlig i minst 15 sekunder under videoinspelningen.
2. Videon får **inte** överstiga 4 minuter (240 sekunder totalt).
3. Ljudkvaliteten ska vara accepterbar och det ska gå att höra den inspelades röst under hela inspelningen.
   
Följande ska presenteras under inspelningen.

### Introduktion (under 1 minut)

- Namn på individ
- Kort redovisning för hur projektet fördelades under arbetet. Om deltagare jobbade själv ska det redovisas hur framstegen dokumenterades i ex. en trello board eller git commits.
  
### API - Redovisning av två tjänster (under 2 minuter)

De tjänster som redovisas måste omfatta två user stories och två tester.

Redovisa för två user stories de tjänster och tester som användes i implementeringen. För "förklarar kod med en user story" så följer samma process för testet. Förklarar vad varför testet behövs och vad den löser, försök utgå från ett skalbarhetsperspektiv.

### Realtidsdialog (För högre betyg)

För VG måste du även redovisa för hur realtidskommunikationen löstes i projektarbetet. Detta inkluderar motivation till val av metod och en kortare förklaring (med kod) som en user story där implementationen för realtids kommunikationen ingår.

**Förklara kod som en user story**

När du förklarar flödet i koden så ska detta göras utifrån problemet som den löser. Detta bör göras liknande till en user story.

*Case*: Yves mobil anropar http://.../api/cart/ med PUT metoden för att lägga till en ny vara i varukorgen.
1. Först så kollar vi i api:et så att användaren har ett giltigt JWT access token i authorization headern.
2. "Om access token inte är giltigt så avbryts anropet och felkoden 400 skickas tillbaka för att meddela att JWT token:et saknades"
3. "Om jwt:en är giltig så fortsätter vi till huvudroutern i api:et".

4. "I koden så plockar vi ut varans namn och kvantiteten för att sedan placera informationen i databasen. Denna information skickades via ett json objekt i HTTP-body:n."
5. "Om databasen inte är tillgänglig så skickas det tillbaka statuskod 503 så att Yves mobil kan meddela att tjänsten är nere."
6. "Om datan kan sparas så skickas istället statuskod 201 tillbaka för att meddela att datan har lagts till i databasen."

## Inlämning
Via omnius skicka in följande
- Videoinspelning
- Länk till github repo med fullständig källkod

## Betygskriterier
För ett högre betyg krävs det att lämplig metod tillämpas för att få realtids uppdateringar från API:et. **Observera**, API-koden får ej modifieras utan att först konsultera ansvarig lärare. Vidare så ligger koden **inte** under open source distrubition så om du vill vidarutveckla på koden erhålls tillstånd från publiceraren av koden.

### Godkänt
För betyget godkänt så ska de tekniska kraven i uppgiften uppfyllas och den implementerad designen ska till större del motsvara de wireframes:en som ingick i uppgiften.

### Väl godkänt
För betyget väl godkänt så ska realtidsdialog skapas och erhållas med REST API:et. Då någon data uppdateras så ska även frontended reflektera uppdateringen. Använd verisonsnumret som följer med i anropen för att "upptäcka" om innehållet är nytt. Data som inte har uppdateras bör ej skriva över befintlig data.

## Återkoppling
Sker via ominus senast 3 veckor efter avslutad kurs i samband med kursbetyget.

--- 
<small>Varför inte börja med en kopp kaffe? </small> :coffee:



