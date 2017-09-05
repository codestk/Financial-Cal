function calHomeLoan(){
	var hA = $Calculator('#txt_home_A').val().replace(/,/g, '');	
	var hB = $Calculator('#txt_home_B').val().replace(/,/g, '');	

	if (hA > 10000000){
		hA = 10000000;
		$Calculator('#txt_home_A').val(hA);
	}
	if (hA < 0){
		hA = 0;
		$Calculator('#txt_home_A').val(hA);
	}
	
	if (hB > 30){
		hB = 30;
		$Calculator('#txt_home_B').val(hB);
	}
	if (hB < 1){
		hB = 1;
		$Calculator('#txt_home_B').val(hB);
	}
	LoadInflationRateFromList();
	//var hrr = 8/100;
	
	var hrr = referenceRate/100;
	$Calculator('#txt_show_rate').val(referenceRate + '%');	
	
	var hrate = hrr/12;
	var hnper = hB*12;
	var hpv = -(hA);
	var hfv = 0;
	var htype = 0;
	
	var hC = fn_pmt_from_chang(hrate, hnper, hpv, hfv, htype);

	hC = Math.ceil(hC/100)*100;

	if(hC < 20000){
		hresult1 = hC/0.4;
	}else if((hC >= 20000) && (hC < 30000)){
		hresult1 = 50000;
	}else{
		hresult1 = hC/0.6;
	}
	
	hresult2 =  hC + 10000;

	if(hresult1 > hresult2){
		hresult1 = Math.ceil(hresult1/100)*100;
		$Calculator('#txt_home_D').val(addCommas(hresult1));
	}else{
		hresult2 = Math.ceil(hresult2/100)*100;
		$Calculator('#txt_home_D').val(addCommas(hresult2));
	}

	$Calculator('#txt_home_C').val(addCommas(hC)+'*');
	
	if(hC <= 0){
		$Calculator('#divError1').show();
	}else{
		$Calculator('#divError1').hide();
	}
}