function filterByAge([minAge,nameA,ageA,nameB,ageB]) {
    let personA = {name:nameA,age:Number(ageA)};
    let personB = {name:nameB,age:Number(ageB)};

    if(personA.age>=Number(minAge)) {
        console.log(personA);
    }
    if(personB.age>=Number(minAge)) {
        console.log(personB);
    }
}

filterByAge(['12','Ivan','15','Asen','9']);
