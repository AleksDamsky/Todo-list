function greet(language) {
  let obj = {english: 'Welcome',
  czech: 'Vitejte',
  danish: 'Velkomst',
  dutch: 'Welkom',
  estonian: 'Tere tulemast',
  finnish: 'Tervetuloa',
  flemish: 'Welgekomen',
  french: 'Bienvenue',
  german: 'Willkommen',
  irish: 'Failte',
  italian: 'Benvenuto',
  latvian: 'Gaidits',
  lithuanian: 'Laukiamas',
  polish: 'Witamy',
  spanish: 'Bienvenido',
  swedish: 'Valkommen',
  welsh: 'Croeso'};
    for(let i = 0; i <= obj.length; i++){
      if(obj[i] == language){
        let vari = obj[i].key;
        let message = `${vari}, Your function should have returned ${vari}. Try again.`;
        // console.log(message);
      }
    }
    return message;
  }
  
  greet('english');