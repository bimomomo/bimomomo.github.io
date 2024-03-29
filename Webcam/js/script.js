
var stop = function() {
  var stream = video.srcObject;
  var tracks = stream.getTracks();

  for (var i = 0; i < tracks.length; i++) {
    var track = tracks[i];
    track.stop();
  }

  video.srcObject = null;
}

var start = function(){
	var video = document.getElementById('video'),
		vendorUrl = window.URL || window.webkitURL;
		
		if (navigator.mediaDevices.getUserMedia) {
			navigator.mediaDevices.getUserMedia({
					audio: false,
					video: {
						facingMode: "user",
						video: {
							frameRate: {
								ideal: 10,
								max: 15
							}
						}
					}
				}).then(function(stream) {
					video.srcObject = stream;
					video.playsInline = true;
				}).catch(function(error) {
					console.log("Something went wrong");
					console.log(error)
					alert(error)
				});
		}
}
$(function() {
    start();
});