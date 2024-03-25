console.log('java is running');

/* Write a function named planetHasWater as a function expression.

It will have one parameter, planet, that accepts a string argument.

Return true if the planet argument is either ‘Earth’ or ‘Mars’, otherwise return false.

Bonus: Make the function work regardless of the casing of the planet string being passed in (‘earth’, ‘MARS’, etc.).

*/

const planetHasWater = function (planet) {
    const lowercasedPlanet = planet.toLowerCase();

    return lowercasedPlanet === 'earth' || lowercasedPlanet === 'mars';
};

console.log(planetHasWater('Earth'));