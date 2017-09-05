function pv(rate, per, nper, pmt, fv) {
	nper = parseFloat(nper);
	pmt = parseFloat(pmt);
	fv = parseFloat(fv);
	rate = eval((rate)/(per * 100));

	if (( pmt == 0 ) || ( nper == 0 )) {
		alert("Why do you want to test me with zeros?");
		return(0);
	}

	// Interest rate is 0
	if ( rate == 0 ) {
		pv_value = -(fv + (pmt * nper));
	}else{
		x = Math.pow(1 + rate, -nper);
		y = Math.pow(1 + rate, nper);
		pv_value = - ( x * ( fv * rate - pmt + y * pmt )) / rate;
	}

	pv_value = conv_number(pv_value,2);
	return (pv_value);
}

function fv(rate, per, nper, pmt, pv) {
	nper = parseFloat(nper);
	pmt = parseFloat(pmt);
	pv = parseFloat(pv);
	rate = eval((rate)/(per * 100));
	if (( pmt == 0 ) || ( nper == 0 )) {
		alert("Why do you want to test me with zeros?");
		return(0);
	}
	
	// Interest rate is 0
	if ( rate == 0 ) {
		fv_value = -(pv + (pmt * nper));
	}else{
		x = Math.pow(1 + rate, nper);
		// y = Math.pow(1 + rate, nper);
		fv_value = - ( -pmt + x * pmt + rate * x * pv ) /rate;
	}
	fv_value = conv_number(fv_value,2);
	return (fv_value);
}

function conv_number(expr, decplaces) { // This function is from David Goodman's Javascript Bible.
	var str = "" + Math.round(eval(expr) * Math.pow(10,decplaces));
	while (str.length <= decplaces) {
		str = "0" + str;
	}
	
	var decpoint = str.length - decplaces;
	return (str.substring(0,decpoint) + "." + str.substring(decpoint,str.length));
}