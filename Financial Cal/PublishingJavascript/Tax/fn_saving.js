//###############################################################
//###############################################################
//###################### Function Saving Calculator ######################
//###############################################################
//###############################################################

var $Saving = jQuery.noConflict();

$Saving(document).ready(function(e) {

$Calculator('#divButtonDisc').fadeIn('slow');
//$Calculator('#divButtonDisc').offset().top;
$Calculator('#divButtonDisc').hover(function(){	
	$Calculator('#divDiscContent').show();
});

$Calculator('#divDiscContent, #divButtonDisc').mouseout(function(){
	$Calculator('#divDiscContent').hide();
});	
	
	resetTextbox();

	checkKeyboard();
	
	$Saving('#divSavingHome input').focusout(function(){
		checkRange('txt_A',9999999999,0);
		checkRange('txt_B',120,0);
		checkRange('txt_C',9999999999,0);
		checkRange('txt_D',100,0.5);		
		checkRange('txt_P',100,0);				
    });		
	
	$Saving('#divSavingHome input').focusout(function(){
		fn_Saving();
	});	
	
	fn_Saving();
});

function checkKeyboard(){
	$Saving('input').keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($Saving.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
             // Allow: Ctrl+A, Command+A
            (e.keyCode == 65 && ( e.ctrlKey === true || e.metaKey === true ) ) || 
             // Allow: home, end, left, right, down, up
            (e.keyCode >= 35 && e.keyCode <= 40)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
        	$Saving(this).css('background','none');
            e.preventDefault();
        }
    }); 	

	$Saving('input').focusin(function(){
			temp_Income = $Saving(this).val().replace(/,/g, '');
			$Saving(this).val($Saving(this).val().replace(/,/g, ''));		
	});

	$Saving('input').focusout(function(){
			
			//if(!$Saving.isNumeric($Saving(this).val())){
			//	$Saving(this).val();
			//	$Saving(this).css('background','none');
			//}
			
			temp_Income = $Saving(this).val()*1;
			
			$Saving(this).val(fn_addCommas($Saving(this).val()*1));
			if(temp_Income == '' || isNaN(temp_Income)){
				$Saving(this).val(0);
			}
	});
}

//##################### เช็ค Min-Max #####################	
function checkRange(varID,varMax,varMin){	
		var varX = $Saving('#'+varID).val().replace(/,/g, '');	
		if (varX > varMax){
			varX = varMax;
			$Saving('#'+varID).val(fn_addCommas(varX));
		}
		if (varX < varMin){
			varX = varMin;
			$Saving('#'+varID).val(fn_addCommas(varX));
		}
}
//######################################################

function resetTextbox(){
	$Saving('#txt_A').val(fn_addCommas('500,000'));
	$Saving('#txt_B').val(5);
	$Saving('#txt_C').val(0);	
	$Saving('#txt_D').val('0.'+'5');
	$Saving('#txt_P').val(0);

	fn_Saving();
}

function fn_Saving(){
//######################## รับค่า #########################
	//var inflationRate = 3;
	LoadInflationRateFromList();
	
	var varE = parseFloat(inflationRate)/100;
	var sA = $Saving('#txt_A').val().replace(/,/g, '');
	var sB = $Saving('#txt_B').val().replace(/,/g, '');
	var sC = $Saving('#txt_C').val().replace(/,/g, '');	
	var sD = $Saving('#txt_D').val();	
	var sP = $Saving('#txt_P').val();	
//#######################################################	
// Ver 2.0	
	var sArray1 = [];
	var sArray2 = [];
	var sT = 0; 
//	
	for (i = 0; i < sB; i++) {
		sArray1[i+1] = Math.pow(1+(sD/100)/12, (sB-(i+1))*12);
	}

	for (i = 0; i < sB; i++) {
		sArray2[i+1] = Math.pow(1+(sP/100), (i+1)-1);
	}
	
	for (i = 0; i < sB; i++) {
		sT += (sArray1[i+1]*sArray2[i+1]);
	}
		
	$Saving('#txt_E').val(parseFloat(inflationRate) + '%');

//##################### เช็ค Min-Max #####################	
	if (sA > 9999999999){sA=9999999999;$Saving('#txt_A').val(sA);}
	if (sA < 0){sA=0;$Saving('#txt_A').val(sA);}
	
	if (sB > 120){sB=120;$Saving('#txt_B').val(sB);}
	if (sB < 0){sB=0;$Saving('#txt_B').val(sB);}
	
	if (sC > 9999999999){sC=9999999999;$Saving('#txt_C').val(sC);}
	if (sC < 0){sC=0;$Saving('#txt_C').val(sC);}
	
	if (sD > 100){sD=100;$Saving('#txt_D').val(sD);}
	if (sD < 0){sD=0;$Saving('#txt_D').val(sD);}
	
	if (sP > 20){sP=20;$Saving('#txt_P').val(sP);}
	if (sP < 0){sP=0;$Saving('#txt_P').val(sP);}
//######################################################
	
	var sR1 = parseFloat(sA*Math.pow(1+varE, sB));
	if (isNaN(sR1)){$Saving('#txt_FV').val('0 *');}
//	else{$Saving('#txt_FV').val(fn_addCommas(sR1).toString() +'*');}
	else{$Saving('#txt_FV').val(fn_addCommas(sR1.toFixed(0)).toString() +'*');}
	
		 sD = $Saving('#txt_D').val()/100;	
		 sP = $Saving('#txt_P').val()/100;
		
	var srate = sD/12;
	var snper = sB*12;
	var spv = 0;

	$Saving('#txt_P_Output').val(sP*100);

	$Saving('#txt_B_Output').val(sB);	

	//var sfv = -(sR1-(sC*Math.pow(1+sD, sB)));
	
	var sfv = -(sR1+(fn_fv_future(srate, snper, 0,sC,0)));
	
	var cal1 = -sfv/sT;
	var cal2 = sD/12;
	var cal3 = 1+cal2;
	var cal4 = Math.pow(cal3, 12)-1;	
		
	var stype = 1;
	var sR2 = parseFloat(cal1*cal2/cal3/cal4);
	
	if (isNaN(sR2)){
		$Saving('#txt_PMT').val(0);
	}else{
		$Saving('#txt_PMT').val(fn_addCommas(parseInt(Math.abs(sR2.toFixed(0)))));
		if (sR2 >= 1){
			$Saving('#divSavingHome_Congrat').hide();
		}else{
			$Saving('#divSavingHome_Congrat').show();
		}
	}
}

function fn_fv_future(rate, nper, pmt, pv, type) {
  var pow = Math.pow(1 + rate, nper);
  if (rate) {
   fv = (pmt*(1+rate*type)*(1-pow)/rate)-pv*pow;
  } else {
   fv = -1 * (pv + pmt * nper);
  }
  return fv;
}

function fn_addCommas(nStr){
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}