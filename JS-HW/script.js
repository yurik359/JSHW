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
 
var euroGrn= euro*29;
var dollarGrn = dollar*27;
var euro_dollars = 29/27;


alert( euro+ ' euros are equal ' +euroGrn+ ' grns, '+ dollar+' dollars are equal '+ dollarGrn +' grn,one euro is equal '+ euro_dollars +' dollars.');

 