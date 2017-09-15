//extra code. lazy code.

var followerCount = Math.floor((Math.random() * 500) + 1);
var followingCount = 0;

function PlusOneFollower() {
    followerCount++;
    if (followerCount > 10000) {
	var thousandsPlace = followerCount.toString(10).split(""); //splits thousandths into arrays
	var thousands = thousandsPlace[0] + thousandsPlace[1] + "k"; //grabs ["n1"," n2" ] and adds a  k
	// console.log(thousands); developers eyes only!
	document.getElementById("followers").innerHTML = thousands;
	
    } else {
	document.getElementById("followers").innerHTML = followerCount;
    }
};


function FollowingRate(average)  {
    if (followerCount % average  === 0) {
	followingCount += 1;
	document.getElementById("following").innerHTML = followingCount;	
    } 
}

var PostNum = document.querySelectorAll('.ig-image').length;
document.getElementById("posts").innerHTML = PostNum;;


setInterval(function() {
    PlusOneFollower();
    FollowingRate(140);
}, 1);
