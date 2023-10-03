export function setupPractice(element) {
  // följande funktioner körs i ordning
  // se output i console.log()
  // du ska i varje del arbeta med att visa vad du lärt dig
  // i slutändan ska projektet köras och inte innehålla fel och
  // du ska kunna förklara vad, hur varför PM

  // Samtliga delar finns förklarade/beskrivna https://webbutveckling.jensa.dev/tekniker/javascript/
  varsAndTypes(element)
  operators(element)
  controlStructures(element)
  arraysAndObjects(element)
  
  domAndEvents(element)

  domManipulation(element)

}

// du kan använda kontrollstrukturer och variabler etc. i 
// andra moment än där funktionen heter så såklart
function varsAndTypes(element) {
  // kod för att visa vad du lärt dig om variabler och typer
  var catName = "smulan"
  var catName2 = "nisse"
 
}

function operators(element) {
  let smulan = "8"
  let nisse = "4"
  // kod för att visa vad du lärt dig om operatorer
 
}

function controlStructures(element) {
  // kod för att visa vad du lärt dig om kontrollstrukturer
  // if och loopar

  if (smulan < 9) {
    Text = "hon är fortfarande inte jätte gamal"
  } else {
    Text = "hon kommer ju dö snart hon är så gamal"
  }
  if (nisse < 5) {
    Text = "bäbis nisse"
  } else {
    Text = "sen när blev han en riktig katt"
  }
}

function arraysAndObjects(element) {
  // kod för att visa vad du lärt dig om arrays och objekt
  console.log(['arrays', { and: 'objects' }])
  
}

function domAndEvents(element) {
  // kod för att visa vad du lärt dig om DOM och events
  // använd med html och listeners
  console.log(element, 'lyssna efter event för att ändra element')
  
}

function domManipulation(element) {
  // kod för att visa vad du lärt dig om DOM-manipulation
  // skapa element och lägga till och ta bort
  element.innerHTML = 'dom manipulation, ändra och lägg till element'
}