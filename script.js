function choice(arr)
{
   let index = Math.floor(Math.random() * arr.length);
   console.log(`${index} => ${arr[index]}`)

   return arr[index];
}

const shoroborno = [
   '\u0985',
   '\u0986',
   '\u0987',
   '\u0988',
   '\u0989',
   '\u098A',
   '\u098B',
   '\u098F',
   '\u0990',
   '\u0993',
   '\u0994',   
]

const banjonborno = [
   '\u0995',
   '\u0996',
   '\u0997',
   '\u0998',
   '\u0999',
   '\u099A',
   '\u099B',
   '\u099C',
   '\u099D',
   '\u099E',
   '\u099F',   
   '\u09A0',
   '\u09A1',
   '\u09A2',
   '\u09A3',
   '\u09A4',
   '\u09A5',
   '\u09A6',
   '\u09A7',
   '\u09A8',   
   '\u09AA',
   '\u09AB',
   '\u09AC',
   '\u09AD',
   '\u09AE',
   '\u09AF',
   '\u09B0',
   '\u09B2',
   '\u09B6',
   '\u09B7',
   '\u09B8',
   '\u09B9',

   '\u09DC',
   '\u09DD',
   '\u09DF',

   '\u09CE',
   '\u0983',
   '\u0982',
   '\u0981',
]

const alphabetSet = banjonborno;
let played = [];
let lastChar = '';
let lastIndex = -1;
 
const paraLetter = document.getElementById('theLetter');
const btnPrev = document.getElementById('btnPrev');
const btnNext = document.getElementById('btnNext');
const cbRandom = document.getElementById('cbRandom');


btnPrev.onclick = function(e)
{
   if(played.length > 0)
   {
      const character = played.pop();
      paraLetter.textContent = character;
   }
}


btnNext.onclick = function(e)
{
   // Push the last played character
   if (lastChar != '')
   {
      played.push(lastChar);
   }
   
   let character = '';
   if(cbRandom.checked)
   {
      character = choice(alphabetSet);       
   }
   else
   {      
      character = alphabetSet[++lastIndex];
   }
   paraLetter.textContent = character;  
   lastChar = character;
}
