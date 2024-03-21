const findTheOldest = function(people) {
    let age = people.map((person) => (person.yearOfDeath - person.yearOfBirth))

    let name = people.map((person) => (person.name));
    // both age and name arrays have the same order since they pulled from the same nest
    let oldest = (Math.max(...age));
    //... is spread syntax it expands array into individual values.
    //allowing for max to be identified.

    for (i in age){
        if (age[i] === oldest){
            return name[i];
            
        }
    }
};

// Do not edit below this line
module.exports = findTheOldest;
