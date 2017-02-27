function toggleRTLPresence(on){
	if(document.body.classList.contains("rtl") && !on){
		document.body.classList.remove("rtl");
		return "";
	} else {
		document.body.classList.add("rtl");
		return "rtl";
	}	
}