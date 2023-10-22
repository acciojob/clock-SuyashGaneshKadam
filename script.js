//your JS code here. If required.
function timeCount() {
	var today = new Date();

	var day = today.getDate();
	var month = today.getMonth()+1;
	var year = today.getFullYear();
	var hour = today.getHours();
	var end = "AM";
	if(hour == 24){
		hour = "00";
	}
	else if(hour > 12){
		hour = hour - 12;
		end = "PM";
	}

	var minute = today.getMinutes();
	if(minute<10)minute = "0"+minute;

	var second = today.getSeconds();
	if(second<10)second = "0"+second;

	document.getElementById("timer").innerText = 
	day+"/"+month+"/"+year+", "+hour+":"+minute+":"+second + " " + end;

	setTimeout("timeCount()", 1000);
}