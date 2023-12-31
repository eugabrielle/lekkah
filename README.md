# Lekkah - Recepten zoekapplicatie

![Homepage picture](src/assets/Homepage.png)

Lekkah is een eenvoudige website waarmee gebruikers recepten kunnen zoeken en ontdekken. Het is bedoeld om personen 
te helpen bij het vinden van inspirerende recepten en maaltijdideeën.

## Inhoudsopgave
- [Inleiding](#inleiding)
- [Functies](#functies)
- [Installatie](#installatie)
- [Gebruik](#gebruik)
- [Standaard gebruikers](#standaard-gebruikers)

## Inleiding

Weet jij ook nooit wat je moet koken? Lijkt het alsof jouw creativiteit en besluitvaardigheid rond etenstijd ook 
ineens verdwenen is? Lekkah is de oplossing hiervoor. De website is gemaakt om personen 
te helpen bij het vinden van recepten en maaltijdideeën. De app maakt gebruik van een receptendatabase genaamd Spoonacular
en biedt handige zoek- en filtermogelijkheden om snel het gewenste recept te vinden. 

## Functies

- Blader door een uitgebreide verzameling van recepten.
- Zoek specifieke recept door gebruik te maken van de zoekbalk.
- Filter recepten op ingrediënten.
- Filter recepten op keuken.
- Bekijk gedetailleerde receptinformatie, inclusief ingrediëntenlijst en bereidingsinstructies.
- Login en maak een boodschappenlijst met de nodige ingrediënten.
- Eenvoudig te gebruiken met een vrolijke gebruikersinterface.

## Installatie

### Vereisten

- [Node.js](https://nodejs.org/) - Laatste versie
- [npm](https://www.npmjs.com/) - Wordt geïnstalleerd met Node.js
- [Spoonacular](https://spoonacular.com/) - Receptendatabase
- [Firebase](https://console.firebase.google.com/) - Voor de boodschappenlijst en Authenticatie
- [IDE](https://code.visualstudio.com/Download) - Visual Studio Code (voorbeeld)

### Stappen

#### Eerste manier

1. Ga naar het GitHub-project:
   ```bash
   https://github.com/eugabrielle/lekkah
   ```
2. Download de projectbestanden: <br>
Bij Code kun je de zipfile van het project downloaden. 
3. Pak de zipfile uit op bij een gekozen locatie
4. Open de uitgepakte files in de IDE
5. Vul de .env file: <br />
   In de hoofdmap moet een bestand worden aangemaakt genaamd '.env'. In dit bestand kan de content van '.env.dist'
   worden gekopieerd. Voor de docent die mijn werk gaat nakijken, zijn de waardes
   te vinden in mijn verantwoordingsdocument. Als je geen docent bent kun je je persoonlijke waardes invullen.
6. Installeer de afhankelijkheden:
   ```bash
   npm install
7. Starten van applicatie:
   ```bash
   npm run dev
8. De app zal beschikbaar zijn op `http://localhost:5173`in je webbrowser.

#### Tweede manier


1. Clone het GitHub-project:
   ```bash
   git clone https://github.com/eugabrielle/lekkah.git
2. Navigeer naar het projectdirectory:
   ```bash
   cd lekkah
   ```
3. Installeer de afhankelijkheden:
   ```bash
   npm install
   ```
4. Vul de .env file: <br />
   In de hoofdmap moet een bestand worden aangemaakt genaamd '.env'. In dit bestand kan de content van '.env.dist' 
   worden gekopieerd. Voor de docent die mijn werk gaat nakijken, zijn de waardes
   te vinden in mijn verantwoordingsdocument. Als je geen docent bent kun je je persoonlijke waardes invullen.
5. Starten van applicatie:
   ```bash
   npm run dev
   ```
6. De app zal beschikbaar zijn op `http://localhost:5173`in je webbrowser.
   
### Gebruik
1. Open de app in je webbrowser en browse door alle beschikbare recepten dat de website aanbied.
2. Gebruik de zoekbalk om een specifiek recept te vinden.
3. Druk op een beschikbaar keuken en bekijk  recepten die hierbij horen.
4. Om het volledige recept te zien, druk op de receptkaart.
5. Druk op de koelkast icoon in de navigatiebalk en zoek recepten op basis van ingrediënten die je over hebt in de koelkast.
6. Login of maak een account aan om jouw boodschappenlijst samen te stellen. Ingrediënten kan worden toegevoegd, 
goed gecheckt en verwijdert indien nodig.
7. De ingrediënten in de boodschappenlijst worden opgeslagen je kan deze dus altijd benaderen.

### Standaard gebruikers
Om bij voorbeeld boodschappenlijst te komen kan je deze inloggegevens gebruiken. 

**Email:** user1@email.com <br />
**Wachtwoord:** Password1 

**Email:** user2@email.com <br />
**Wachtwoord:** Password2 



