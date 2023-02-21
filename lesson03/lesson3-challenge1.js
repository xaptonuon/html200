const citiesWA = ['Seattle', 'Tacoma', 'Spokane', 'Vancouver', 'Olympia'];
console.log(citiesWA);

citiesWA.push('Bellingham');
console.log(citiesWA);

citiesWA.splice(2, 1);
console.log(citiesWA);

let str = citiesWA.join(', ');
console.log(str);