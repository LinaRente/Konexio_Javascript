// rechercher et remplacer les lettres demander par les lettres 13 places plus loin.

// une fonction rot13 qui a comme parametre str.
    //une variable pour contenir mon string 'result"
    //un boucle pour parcourir mon parametre.
            // console.log
        // une variable number (code ascii ?)
            //console.log
        //une condition 
        //diviser mon tableau Ascii en deux ! 26 lettres dans l'alphabet
        //+13 et -13
        // si mon number et superieur ou egal a 65(ascii) et que mon number est inferieur ou égale a 90
            //alors afficher result.
    //un return


	function rot13(str) {
		var result = " ";
		for(var i = 0; i < str.length; i++) {
			// console.log(str[i].charCodeAt())
			var number = str[i].charCodeAt();
			// console.log(number);
			if(number >= 65 && number <= 77 || number >= 97 && number <= 109) {
				result += String.fromCharCode(number + 13);
			} else if(number >= 78 && number <= 90 || number >= 110 && number <= 122 ) { 
				result += String.fromCharCode(number - 13)
			} else {
				result += str[i];
			}
		}
		return result;
	}
	console.log(rot13("bravo tu as reussi"));