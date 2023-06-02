function timeClock() {
	const getTime = (offset) => {
		var d = new Date();
		var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    	var nd = new Date(utc + (3600000*offset));
    	return nd.toLocaleString();
	};
	var timeNow = document.getElementById("timeNow");
	timeNow.innerHTML = getTime("-4").replace(",", "");
}