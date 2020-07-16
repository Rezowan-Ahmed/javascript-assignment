// Question number -4:
function tinyFriend(Name){
    var min = Name[0].length;
    Name.map(v => min = Math.min(min, v.length));
    var result = Name.filter(v => v.length == min);
    return result;
}
var smallFriendName = tinyFriend(["Shohanur", "Mustak", "SheponAli", "ShajjadurIslam"]);
console.log(smallFriendName);