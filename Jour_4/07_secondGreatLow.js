// creer une fonction avec parametre un tableau.
    //creer une variable arr pour stocker le tableau ?
    //creer une boucle qui va parcourir le tableau.
    // comment suivre les chiffres trouver ? 
    // stocker les chiffres trouver
    // faire une conditions pour comparer les chiffres du tableau.

    function secondGreatLow(arr) {
    
        var great = 0;
        var secondGreat = 0;
    
        var lower = 0;
        var secondLower = 0;
    
        var arr = [1,42, 42, 180];
            // console.log(arr);
        for(var i = 0; i < arr.length; i++){
            // console.log(arr[i]);
            if(arr[i] > great){
                secondGreat = great;
                great = arr[i];
            } else if(arr[i] > secondGreat) {
                secondGreat = arr[i];
            }
            return secondGreat
        } 
    //     function 
    //     for(var i = 0; i < arr.length; i++) {
    //         if(arr[i] > lower) {
    //             secondLower = lower;
    //             lower = arr[i];
    //         } else if(arr[i] > secondLower) {
    //             secondLower = arr[i]
    //         }
    //     }
    
    //     return secondLower;
    // }
    }console.log(secondGreatLow());
    
    
    
    
    
