var  event = prompt('What meeting?', 'a walk');
var name = 'John';
var time = '19:00';

var place = 'Paris';
console.log(name+' has '+event+' today at '+ time+ ' somewhere in '+place);
  


 var Euro;
 do {
   Euro = prompt("Please, enter your euro","1");
 } while (Euro.trim() === "" || isNaN(Euro)); 

 var Dollar;
 do {
   Dollar = prompt("Please, enter your dollar","1");
 } while (Dollar.trim() === "" || isNaN(Dollar)); 
 




alert( Euro+ ' euros are equal ' +Euro*29+ ' grns, '+ Dollar+ ' dollars are equal '+ Dollar*27 +', one euro is equal'+Euro/Dollar +' dollars.');

 