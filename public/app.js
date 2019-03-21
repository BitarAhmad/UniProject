

if (window.DeviceMotionEvent == undefined) {
	//No accelerometer is present. Use buttons.
	document.querySelector("#acc").textContent = "NO";
	document.querySelector("#acc").className = "no";

}
else {
	document.querySelector("#acc").textContent = "YES";
	document.querySelector("#acc").className = "yes";
	window.addEventListener("devicemotion", accelerometerUpdate, true);
}

var mark;
var x = 1;
var y;
var z;

function accelerometerUpdate(event) {
   var aX = event.accelerationIncludingGravity.x*10;
   var aY = event.accelerationIncludingGravity.y*10;
   var aZ = event.accelerationIncludingGravity.z*10;

	document.querySelector("#x").value = aX;
	document.querySelector("#y").value = aY;
	document.querySelector("#z").value = aZ;

  return mark = {x:aX, y:aY, z:aZ};
}

// const collectData = () => {
//   return mark;
// };

var socket = io();




socket.on('counterUpdated', (count) => {
  console.log("The count has been updated!", count);
});

document.querySelector('#increment').addEventListener('click', () => {
  console.log('Clicked');
  socket.emit("object", mark);
});
