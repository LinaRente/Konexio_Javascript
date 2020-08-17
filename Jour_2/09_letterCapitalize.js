function titleCase(str) {
    
   var string = str.toLowerCase().split(' ');

   for (var i = 0; i < string.length; i++) {

       string[i] = string[i].charAt(0).toUpperCase() + string[i].substring(1);     
   }

   return string.join(' '); 
}

console.log(titleCase("LINA RENTERIA MEJIA")); 