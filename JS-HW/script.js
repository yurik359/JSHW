var  event = prompt('What meeting?', 'a walk');
var name = 'John';
var time = '19:00';

var place = 'Paris';
console.log(name+' has '+event+' today at '+ time+ ' somewhere in '+place);
  


 var euro;
 do {
   euro = prompt("Please, enter your euro","1");
 } while (euro.trim() === "" || isNaN(euro)); 

 var dollar;
 do {
   dollar = prompt("Please, enter your dollar","1");
 } while (dollar.trim() === "" || isNaN(dollar)); 
 var kursEuro = 29;
var kursDollar= 27;
var euroGrn= euro*kursEuro;
var dollarGrn = dollar*kursDollar;
var euroDollars = kursEuro/kursDollar;


alert( euro+ ' euros are equal ' +euroGrn.toFixed(2)+ ' grns, '+ dollar+' dollars are equal '+ dollarGrn.toFixed(2) +' grn,one euro is equal '+ euroDollars.toFixed(2) +' dollars.');

 