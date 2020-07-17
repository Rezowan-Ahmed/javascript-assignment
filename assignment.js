// Question number -1

function feetToMile(feet){
    if(feet > 0){
        var mile = feet / 5280;
    }
    else {
        console.log("Given Number is Negative")
    }
    return mile;
}
var result = feetToMile(12000);
console.log(result);


// Question number -2

function woodCalculator(chair, table, bed){
    if(chair < 0 || table < 0 || bed < 0){
        var totalWood = console.log(" This three things Length , Width & Height can't be Negative "); 
    }
    else{
        totalWood = chair + 3 * table + 5 * bed;
    }
    return totalWood;
}
var result = woodCalculator(10, 50, 70);
console.log(result);


// Question number -3

function brickCalculator(numberOfBrick){
    var PartsOfFloor = numberOfBrick;
    if(PartsOfFloor <= 10){
        var totalNumberOfBrick = PartsOfFloor * 15 * 1000;
    }
    else if( PartsOfFloor > 10 && PartsOfFloor <=20){
        totalNumberOfBrick = (PartsOfFloor - 10) * 12 * 1000 + 10 * 15 * 1000;
    }
    else if(PartsOfFloor > 20){
        totalNumberOfBrick = 10 * 12 * 1000 + 10 * 15 * 1000 + (PartsOfFloor - 20) * 10 * 1000;
    }
    else{
        console.log("Given Number is Negative");
    }
    return totalNumberOfBrick;
}
var result = brickCalculator(9);
console.log(result);


// Question number -4:

function tinyFriend(Name){
    var min = Name[0];
    for(var i = 0; i < Name.length; i++){
        var element = Name[i];
        if(element < min){
            min = element;
        }
    }
    return min;
}
var shortFriendName = tinyFriend(["Shohanur", "Mustak", "SheponAli", "ShajjadurIslam"]);
console.log(shortFriendName);

