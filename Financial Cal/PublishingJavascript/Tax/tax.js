var A=0, B=0, C=0, D=0, Z1=0, Z2=0, Z3=0, Z4=0, Z5=0, Z6=0, Z7=0, Z8=0, Z9=0, Z10=0, Z11=0;
var reduce1=0, reduce2=0, netincome=0, income=0, tax=0, first_TAX=0, second_TAX=0, third_TAX=0, inputRMF=0, inputLTF=0;
var var_Home=0, var_HealthMother=0, var_Health=0, var_Insurance60=0, var_Others=0, var_Donation=0, var_RMF=0;
var netincomeReduce=0, netincomeReduceAfterLTFRMF=0, netincomeReduceBeforeZ8=0;
var var_MaxRMF=0; var_MaxLTF=0;
var var_MaxPension=0; var_InputPension=0;
var x=0;
var temp_Income = 0;
var currentSon=0;
var sonSum=0;
var currentParent=0;
var currentParent2=0;
var parentSum=0;
var currentFund=0;
var currentRetire=0;
var currentSaving=0;
var currentChild1=0;
var currentChild2=0;
var currentChild3=0;
var Z8Original=0;
var Z7Original=0;
var taxMax=[];
var taxRate=[];
var inflationRate;
var afterRetireRate;
var referenceRate;
var termRate;
var Total_Income;
var flagDefaultLTF = 0;
var flagDefaultRMF = 0;
var intPension = 0;
var Total_Reduce = 0;
var netincome_with_LTF_RMF=0;
var TaxLTF_RMF=0;
var intRMF_Pension =0;
var PVD;

var $Calculator = jQuery.noConflict();

$Calculator(document).ready(function() {
	
$Calculator('#divButtonDisc').fadeIn('slow');
//$Calculator('#divButtonDisc').offset().top;

$Calculator('#divButtonDisc').hover(function(){
	$Calculator('#divDiscContent').show();
});

$Calculator('#divDiscContent, #divButtonDisc').mouseout(function(){
	$Calculator('#divDiscContent').hide();
});

/* Comment
var URLContentPages =  sURLVariables[3] + '/' + sURLVariables[4] + '/' + sURLVariables[5];
	if (sURLVariables[3] == 'BangkokBankThai'){
		siteLanguage = 'Thai';		
	}else{
		siteLanguage = 'Eng';		
	}
*/
siteLanguage = 'Thai';		

//  Production
	LoadTaxFromList();

	$Calculator('#divChild1 input').focusout(function(){
		calChild(1);
	});

	$Calculator('#divChild2 input').focusout(function(){
		calChild(2);
	});

	$Calculator('#divChild3 input').focusout(function(){
		calChild(3);
	});

/*/ Retirement Function ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	$Calculator('#divRetirement1 input').focusout(function(){
		fn_Retirement();
	});
	$Calculator('#divRetirement2 input').focusout(function(){
		fn_Retirement();
	});
	$Calculator('#divRetirement3 input').focusout(function(){
		fn_Retirement();
	});	
	$Calculator('#divRetirement4 input').focusout(function(){
		fn_Retirement();
	});			
/*/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	$Calculator('#divSavingHome input').focusout(function(){
		fn_Saving();
	});

	$Calculator('#divTaxCalculator input').focusout(function(){
		calMainNewTax();
	});

	$Calculator('#divHomeLoan input').focusout(function(){	
		calHomeLoan();
	});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	$Calculator('#divHealthy_Input_1 input').focusout(function(){	
		calHealthy();
	});
	
	$Calculator('#divHealthy_Input_2 input').focusout(function(){
		calHealthy();
	});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	$Calculator('#div_Input_Income').css('visibility','visible');
	$Calculator('#divChild1').css('visibility','visible');		
	// อย่าลือเอา Comment ออก ตอนเอาลง QA
	/*
	
	$Calculator('input').keyup(function(){
		if(!($Calculator.isNumeric($Calculator(this).val()))){
			$Calculator(this).css('background-color','#dddddd');
		}else{
			$Calculator(this).css('background','none');
		}
	});
	
	$Calculator('input').keyup(function(){
   		this.value = this.value.replace(/[^0-9]/g, '');
   		$Calculator(this).css('background','none');
    });  	
	*/
	$Calculator('input').keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($Calculator.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
             // Allow: Ctrl+A, Command+A
            (e.keyCode == 65 && ( e.ctrlKey === true || e.metaKey === true ) ) || 
             // Allow: home, end, left, right, down, up
            (e.keyCode >= 35 && e.keyCode <= 40)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
        	$Calculator(this).css('background','none');
            e.preventDefault();
        }
    }); 	

	$Calculator('input').focusin(function(){
			temp_Income = $Calculator(this).val().replace(/,/g, '');
			$Calculator(this).val($Calculator(this).val().replace(/,/g, ''));	
	});

	$Calculator('input').focusout(function(){
	//		if(!($Calculator.isNumeric($Calculator(this).val()))){
	//			$Calculator(this).val();
	//			$Calculator(this).css('background','none');
	//		}
			
			temp_Income = $Calculator(this).val()*1;
			
			$Calculator(this).val(addCommas($Calculator(this).val()*1));
			if(temp_Income == '' || isNaN(temp_Income)){
				$Calculator(this).val(0);
			}
	});

//################################## Tax Submenu ########################
		$Calculator('#ulMenu li').click(function(){
			if(this.id != 'li_bullet'){
				//$Calculator('.divPanel1').css('visibility','hidden');
				switch (this.id){
					case 'li_Income':{
						//$Calculator('#div_Input_Income').css('visibility','visible');
						if (siteLanguage == 'Thai'){
							$Calculator('#divTaxCursor').css('left','215px');							
						}else{
							$Calculator('#divTaxCursor').css('left','123px');		
						}
					}
					break;
					case 'li_Allowances':{
						//$Calculator('#div_Input_Allowances').css('visibility','visible');
						if (siteLanguage == 'Thai'){
							$Calculator('#divTaxCursor').css('left','345px');							
						}else{
							$Calculator('#divTaxCursor').css('left','295px');		
						}
					}
					break;
					case 'li_Max_TAX':{
						//$Calculator('#div_Output_TAX_Max').css('visibility','visible');
						if (siteLanguage == 'Thai'){
							$Calculator('#divTaxCursor').css('left','520px');							
						}else{
							$Calculator('#divTaxCursor').css('left','530px');		
						}
					}
					break;
					case 'li_Your_Prefered_TAX':{
						//$Calculator('#div_Output_TAX_Amount').css('visibility','visible');

						var maxAmountLTF = Math.min(50000, var_MaxLTF);
						var maxAmountRMF = Math.min(50000, var_MaxRMF);
						
						$Calculator('#input_LTF').val(addCommas(maxAmountLTF));
						$Calculator('#input_RMF').val(addCommas(maxAmountRMF));
						
						calTAX_Amount();

						if (siteLanguage == 'Thai'){
							$Calculator('#divTaxCursor').css('left','698px');							
						}else{
							$Calculator('#divTaxCursor').css('left','780px');		
						}
					}
					break;				
				}
			}
		});
//################################## Tax Submenu ########################	

});

// ###################### Function Change Pages ##########################
function Tax_changeSubMenu(x){
	$Calculator('.cssTax_Pages').hide();
	$Calculator('#divPages' + x + '').fadeIn();
	if (x==2){
		calMainTax();	
	}
	if (x==4){
		calTAX_MAX();
	}

}	
// #######################################################################

function calMainTax(){
	
	A = $Calculator('#txt_Tax_A').val().replace(/,/g, '');
	B = $Calculator('#txt_Tax_B').val().replace(/,/g, '');	
	C = $Calculator('#txt_Tax_C').val().replace(/,/g, '');
	D = $Calculator('#txt_Tax_D').val();	
// เงินเดือน	
	if (A > 500000){
		A = 500000;
		$Calculator('#txt_Tax_A').val(A);
	}else if ((A < 0) || isNaN(A) || A == ''){
		A = 0;	
		$Calculator('#txt_Tax_A').val(A);	}
// เงินได้อื่นๆ
	if (B > 2000000){
		B = 2000000;
		$Calculator('#txt_Tax_B').val(B);
	}else if ((B < 0)|| isNaN(B) || B == ''){
		B = 0;
		$Calculator('#txt_Tax_B').val(B);
	}
//	โปนัส
	if (C > 2000000){
		C = 2000000;
		$Calculator('#txt_Tax_C').val(C)
	}
	if ((C < 0) || isNaN(C) || C == ''){
		C = 0;
		$Calculator('#txt_Tax_C').val(C);
	}
//	PVD	
	if (D > 15){
		D = 15;
		$Calculator('#txt_Tax_D').val(D);
	}
	if ((D < 0) || isNaN(D) || D == ''){
		D = 0;
		$Calculator('#txt_Tax_D').val(D);
	}
//	ดอกเบี้ยบ้าน
	Z4 = $Calculator('#txt_Tax_Z4').val().replace(/,/g, '');	
	if (Z4 > 100000){
		Z4 = 100000;
		$Calculator('#txt_Tax_Z4').val(Z4);
	}
	if (Z4 < 0){
		Z4 = 0;
		$Calculator('#txt_Tax_Z4').val(Z4);
	}
//	เบี้ยพ่อแม่	
	Z5 = $Calculator('#txt_Tax_Z5').val().replace(/,/g, '');	
	if (Z5 > 15000){
		Z5 = 15000;
		$Calculator('#txt_Tax_Z5').val(Z5);
	}
	if (Z5 < 0){
		Z5 = 0;
		$Calculator('#txt_Tax_Z5').val(Z5);
	}
// เบี้ยชีวิต
	Z6 = $Calculator('#txt_Tax_Z6').val().replace(/,/g, '');
	if (Z6 > 100000){
		Z6 = 100000;
		$Calculator('#txt_Tax_Z6').val(Z6);
	}
	if (Z6 < 0){
		Z6 = 0;
		$Calculator('#txt_Tax_Z6').val(Z6);
	}
// เบี้ยบำนาญ
	Z7 = $Calculator('#txt_Tax_Z7').val().replace(/,/g, '');
	if (Z7 >= 10000000){
		Z7 = 10000000;
		$Calculator('#txt_Tax_Z7').val(Z7);
	}
	if (Z7 <= 0){
		Z7 = 0;
		$Calculator('#txt_Tax_Z7').val(Z7);
	}
// บริจาค	
	Z8 = $Calculator('#txt_Tax_Z8').val().replace(/,/g, '');
	if (Z8 >= 1000000){
		Z8 = 1000000;
		$Calculator('#txt_Tax_Z8').val(Z8);
	}
	if (Z8 < 0){
		Z8 = 0;
		$Calculator('#txt_Tax_Z8').val(Z8);
	}
// อื่นๆ	
	Z9 = $Calculator('#txt_Tax_Z9').val().replace(/,/g, '');		
	if (Z9 > 150000){
		Z9 = 150000;
		$Calculator('#txt_Tax_Z9').val(Z9);
	}
	if (Z9 < 0){
		Z9 = 0;
		$Calculator('#txt_Tax_Z9').val(Z9);
	}
// RMF	
	Z10 = $Calculator('#txt_Tax_Z10').val().replace(/,/g, '');		
	if (Z10 > 500000){
		Z10 = 500000;
		$Calculator('#txt_Tax_Z10').val(Z10);
	}	
	if (Z10 < 0){
		Z10 = 0;
		$Calculator('#txt_Tax_Z10').val(Z10);
	}
// LTF	
	Z11 = $Calculator('#txt_Tax_Z11').val().replace(/,/g, '');		
	if (Z11 > 500000){
		Z11 = 500000;
		$Calculator('#txt_Tax_Z11').val(Z11);
	}			
	if (Z11 < 0){
		Z11 = 0;
		$Calculator('#txt_Tax_Z11').val(Z11);
	}		

	
	if(A >= 0 || B >= 0){
	income = parseInt(A*12) + parseInt(B) + parseInt(C);	
		Total_Income = income;
						
		D = parseFloat($Calculator('#txt_Tax_D').val())/100;
		$Calculator('#output_Income').val(addCommas(income));		
		
	var socialSec = Math.min(((A*12)*0.15), 9000);	
		
		//reduce1 = (income*40)/100;
	reduce1 = Math.min(60000, (income*40)/100);
		
		$Calculator('#output_Reduce1').val(addCommas(reduce1));	
		/* reduce2 */ 
	PVD = Math.min(500000, (D*A*12));
	netincome = (((income - 30000) - socialSec) - reduce1) - PVD;	
		
		Z7 = Math.min(200000, Math.min(Z7, (0.15*income)));
		
		var diffReduce2 = 500000 - reduce2;
	
		
		
		if(diffReduce2 <= 0){
			Z7=0;
		}
		
		//$Calculator('#txt_Tax_Z7').val(Math.ceil(Z7));
		
		reduce2 = ((D*A)*12)+Z7;
		reduce2 = Math.min(500000,reduce2);			

		$Calculator('#output_Reduce2').val(addCommas(reduce2));


// บุตรไม่ศึกษา		
		Z1 = parseInt($Calculator('#input_Children_Non_Studying').val());
//	บุตรศึกษา
		Z2 = parseInt($Calculator('#input_Children_Studying').val());
// บิดามารดา		
		Z3 = parseInt($Calculator('#input_Parental_Care').val());
		
		Z4 = Math.min(100000,Z4);
		Z5 = Math.min(15000,Z5);
		Z6 = Math.min(100000,Z6);
		
		var Z7_Var1 = Math.min(Z7, (15/100)*income);
		var Z7_Var2 = Math.min(500000-PVD-Z11,Z7_Var1);	
		var Z7_Var3 = Math.min(Z7_Var1,Z7_Var2);

		$Calculator('#txtZ7_Var3').val(Z7_Var3);		

		Z9 = Math.min(150000,Z9);	
		var LTF_Var1 = Math.min(500000, (15/100)*income);
		var LTF_Var2 = Math.min(Z10, LTF_Var1);
		
		var RMF_Var1 = Math.min(500000, (15/100)*income);
		var RMF_Var2 = Math.min(Z11, RMF_Var1);		
				
// IncomeReduce
		//netincomeReduce = ((((((((((netincome-(Z1*15000))-(Z2*17000))-(Z3*30000))-Z4)-Z5)-Z6)-Z9)-Z7)-Z10)-Z11);
		Total_Reduce = 30000+60000+socialSec+PVD+(Z1*15000)+(Z2*17000)+(Z3*30000)+Z4+Z5+Z6+Z9+Z7_Var3;
		netincomeReduce = income-PVD-LTF_Var2-RMF_Var2-Total_Reduce; 

		if (Z8 > 0){
			Z8_Cal = netincomeReduce*(10/100);
			if(Z8 > Z8_Cal){
				Z8 = netincomeReduce*(10/100);
			}

		}else{
			Z8 = 0;
		}		
		
		netincome = income - Total_Reduce - Z8;
		
		if (Z8Original != Z8){
			Z8Original = Z8;
			if (Z8 < 0){
				Z8 = 0;
			}
			$Calculator('#tx_Tax_Z8').val(Math.ceil(Z8Original));			
		}
		
		Z8Original = Z8;		
		
		netincome_with_LTF_RMF = netincome - LTF_Var2 - RMF_Var2;
		
	IncomeReduce = income-PVD-Total_Reduce;
	var TaxOnly = calTAX(netincome);		
	TaxLTF_RMF = calTAX(netincome_with_LTF_RMF);			
			//$Calculator('#txtDebug2').val(TaxLTF_RMF);
		netincomeReduceBeforeZ8 = netincomeReduce;
		$Calculator('#output_Netincome').val(addCommas(netincome));
		$Calculator('#inputResultFinal').val(addCommas(reduce1));
		


	if (isNaN(TaxLTF_RMF)){
		TaxLTF_RMF = 0;
	}

	if (TaxLTF_RMF == 0) {
		showTaxError('off');
	}else{
		showTaxError('on');
	}		
	
		var reduce2_Z7 = reduce2 + Z7;
	reduce2_Z7 = Math.min(Z7_Var1,Z7_Var2);
		
	$Calculator('#output_Total_Income').val(addCommas(Total_Income));
	$Calculator('#output_Total_Reduce').val(addCommas(Total_Reduce));	
	$Calculator('#output_Net_Income').val(addCommas(netincomeReduce));
	$Calculator('#output_Net_Income_After_Donation').val(addCommas(netincome));
	$Calculator('#output_TAX').val(addCommas(Math.ceil(TaxLTF_RMF)));
	$Calculator('#output_TAX_2').val(addCommas(Math.ceil(TaxLTF_RMF)));
	$Calculator('#output_TAX_3').val(addCommas(Math.ceil(TaxLTF_RMF)));
	$Calculator('#output_TAX_4').val(addCommas(Math.ceil(TaxLTF_RMF)));
	//calTAX_MAX();
	//calTAX_Amount();	
	}
}

function showTaxError(x){
	if(x == 'off'){
		$Calculator('#divTaxError1').show();
		$Calculator('#divTaxError2').show();
		$Calculator('#divHideSubmenu').show();
	}else{
		$Calculator('#divTaxError1').hide();
		$Calculator('#divTaxError2').hide();
		$Calculator('#divHideSubmenu').hide();		
	}
}

function calTAX(para_netincome){
		if (para_netincome <= taxMax[0]){
			tax = taxRate[0];
		}else if ((para_netincome > taxMax[0]) && (para_netincome <= taxMax[1])) {
			tax = ((para_netincome - taxMax[0])*taxRate[1])/100;
		}else if ((para_netincome > taxMax[1]) && (para_netincome <= taxMax[2])) {
			tax = ((taxMax[0]*taxRate[1])/100) + (((para_netincome - taxMax[1])*taxRate[2])/100);
		}else if ((para_netincome > taxMax[2]) && (para_netincome <= taxMax[3])) {
			tax = ((taxMax[0]*taxRate[1])/100) + ((200000*taxRate[2])/100) + (((para_netincome - taxMax[2])*taxRate[3])/100);
		}else if ((para_netincome > taxMax[3]) && (para_netincome <= taxMax[4])) {
			 tax = ((taxMax[0]*taxRate[1])/100) + ((200000*taxRate[2])/100) + ((250000*taxRate[3])/100) + (((para_netincome - taxMax[3])*taxRate[4])/100);
		}else if ((para_netincome > taxMax[4]) && (para_netincome <= taxMax[5])) {
			 tax = ((taxMax[0]*taxRate[1])/100) + ((200000*taxRate[2])/100) + ((250000*taxRate[3])/100) + ((250000*taxRate[4])/100) + (((para_netincome - taxMax[4])*taxRate[5])/100);
		}else if ((para_netincome > 2000000) && (para_netincome <= taxMax[6])) {
			 tax = ((taxMax[0]*taxRate[1])/100) + ((200000*taxRate[2])/100) + ((250000*taxRate[3])/100) + ((250000*taxRate[4])/100) + ((taxMax[4]*taxRate[5])/100) + (((para_netincome-taxMax[5])*taxRate[6])/100);
		}else{
			 tax = ((taxMax[0]*taxRate[1])/100) + ((200000*taxRate[2])/100) + ((250000*taxRate[3])/100) + ((250000*taxRate[4])/100) + ((taxMax[4]*taxRate[5])/100)+ ((taxMax[5]*taxRate[6])/100) + (((para_netincome-taxMax[6])*taxRate[7])/100);
		}
		return tax;
}

function calTAX_MAX(){
	var_MaxLTF = income*(15/100);
	var_MaxLTF = Math.min(500000, var_MaxLTF);
	$Calculator('#output_MaxLTF').val(addCommas(Math.ceil(var_MaxLTF)));	

	var_MaxRMF = income*(15/100);
	var var_New_RMF = 500000-reduce2;
	var_New_RMF = Math.max(var_New_RMF, 0);

	if(var_MaxRMF > var_New_RMF){
		var_MaxRMF = var_New_RMF;
	}
	
	$Calculator('#output_MaxRMF').val(addCommas(Math.ceil(var_MaxRMF)));
	
	var Tax_MaxSave = netincome - var_MaxLTF + 100000 + intPension;
	var Tax_MaxSave_Final = calTAX(Tax_MaxSave);
	$Calculator('#output_TAX_Save_Max').val(addCommas(Math.ceil(TaxLTF_RMF)));	
	$Calculator('#output_TAX_Max').val(addCommas(Math.ceil(Tax_MaxSave_Final)));	
	calTAX_Amount();	
	calTAX_Max_New2(income-Total_Reduce);	
}

function calTAX_Max_New2(para_NewIncome){
	if(para_NewIncome > 150000){
		calTAX_Max_New3B(para_NewIncome);
	}else{
		alert('ลงทุนเพียง 0 บาท');
	}
}

var New_Donation;
var X ;
function calTAX_Max_New3B(para_NewIncome_Again){
	// New Net Income = 84,395
	// X = 392,773
	// Donation = 9,377
	X = var_MaxLTF + 100000 + intRMF_Pension

	var MaxDonation = 0.1*(para_NewIncome_Again - X);
	if (Z8 <= MaxDonation){
		New_Donation = Z8;
	}else{
		New_Donation = MaxDonation;
	}
	var New_Net_Income = Math.ceil(para_NewIncome_Again) - X - New_Donation;
	calTAX_Max_New4(Math.ceil(New_Net_Income));
}

function calTAX_Max_New4(para_NewIncome_Again){
	if (para_NewIncome_Again < 150000){
		cal_NewX_5A(para_NewIncome_Again);

	}else{
		alert('ใช้เงินลงทัน ' + para_NewIncome_Again);
	}
}

function cal_NewX_5A(para_NewIncome_Again){
	var NewX = Math.ceil(X) - (150000 - para_NewIncome_Again);
	var NewMaxDonation = 0.1*(IncomeReduce+PVD-NewX);
	var NewNetIncome = (IncomeReduce+PVD) - NewX - NewMaxDonation;
	cal_NewX_7(NewNetIncome, NewX);
}

function cal_NewX_7(para_NewIncome_Again, para_NewX){
	if(para_NewIncome_Again < 150000){
		alert(para_NewX);
	}else{
		cal_NewX_5A(para_NewIncome_Again);
	}
}






	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	



function calTAX_MAX_Ori(){
	
	var_MaxLTF = income*(15/100);
	var_MaxLTF = Math.min(500000, var_MaxLTF);
	
	$Calculator('#output_MaxLTF').val(addCommas(Math.ceil(var_MaxLTF)));
	
	var_MaxRMF = income*(15/100);
	var var_New_RMF = 500000-reduce2;
	
	var_New_RMF = Math.max(var_New_RMF, 0);

	if(var_MaxRMF > var_New_RMF){
		var_MaxRMF = var_New_RMF;
	}
	
	$Calculator('#output_MaxRMF').val(addCommas(Math.ceil(var_MaxRMF)));	

	netincome = netincomeReduceBeforeZ8;

	var var_Net_Income_Max = (netincome-var_MaxLTF)-var_MaxRMF;
	Z8 = Z8Original;
	
		if (Z8 > 0){
			Z8_Cal = var_Net_Income_Max*(10/100);
			if(Z8 > Z8_Cal){
				Z8 = var_Net_Income_Max*(10/100);
			}
		}else{
			Z8 = 0;
		}
		
	var_Net_Income_Max = var_Net_Income_Max - Z8;
	
	$Calculator('#output_Net_Income_Max').val(addCommas(Math.ceil(var_Net_Income_Max)));

	second_TAX = Math.ceil(calTAX(var_Net_Income_Max));
	
	$Calculator('#output_TAX_Save_Max').val(addCommas(Math.ceil(first_TAX)-second_TAX));
	$Calculator('#output_TAX_Max').val(addCommas(second_TAX));
}

function addCommas(nStr){
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

function sel_plus(objName, varStep, varMax, varCal, varGroup){
	switch(varGroup) {
		 case 'group_Studying':
				if(currentSon < varMax){
					currentSon++;		
					x = parseInt($Calculator('#'+objName).val());
					$Calculator('#'+objName).val(x+1);				
					calSon(objName, $Calculator('#'+objName).val(), varCal, varGroup);		
				}
			break;
		 case 'Group2':
				if(currentParent < varMax){
					currentParent++;
					x = parseInt($Calculator('#'+objName).val());
					$Calculator('#'+objName).val(x+1);
					calSon(objName, $Calculator('#'+objName).val(), varCal, varGroup);		
				}
			break;
		 case 'Group3':
				if(currentParent2 < varMax){
					currentParent2++;
					x = parseInt($Calculator('#'+objName).val());
					$Calculator('#'+objName).val(x+1);
					calSon(objName, $Calculator('#'+objName).val(), varCal, varGroup);		
				}
			break;
		 case 'Group4':
				if(currentFund < varMax){
					currentFund++;
					x = parseFloat($Calculator('#'+objName).val());
					$Calculator('#'+objName).val(x+varStep);
					calSon(objName, $Calculator('#'+objName).val(), currentFund, varGroup);
					calMainTax();
				}		
			break;	
		case 'SavingGroup':
				if(currentSaving < varMax){
					currentSaving++;
					x = parseFloat($Calculator('#'+objName).val());
					$Calculator('#'+objName).val(x+varStep);
					fn_Saving();
				}
			break;
		case 'retireGroup':
				if(currentRetire < varMax){
					currentRetire++;
					x = parseFloat($Calculator('#'+objName).val());
					$Calculator('#'+objName).val(x+varStep);
					fn_Retirement();
				}
			break;
		case 'childGroup1':
				if(currentChild1 < varMax){
					currentChild1++;
					x = parseFloat($Calculator('#'+objName).val());
					$Calculator('#'+objName).val(x+varStep);
					calChild(1);
				}
			break;											
		case 'childGroup2':
				if(currentChild2 < varMax){
					currentChild2++;
					x = parseFloat($Calculator('#'+objName).val());
					$Calculator('#'+objName).val(x+varStep);
					calChild(2);
				}
			break;
		case 'childGroup3':
				if(currentChild1 < varMax){
					currentChild1++;
					x = parseFloat($Calculator('#'+objName).val());
					$Calculator('#'+objName).val(x+varStep);
					calChild(3);
				}
			break;					
		}		 		
}

function sel_erease(objName, varStep, varMin, varCal, varGroup){
	switch(varGroup) {
		 case 'group_Studying':	
				if(currentSon > varMin && $Calculator('#'+objName).val() != 0){
					currentSon--;
					x = parseInt($Calculator('#'+objName).val());
					$Calculator('#'+objName).val(x-1);
					calSon(objName, $Calculator('#'+objName).val(), varCal, varGroup);
				}
			break;
		 case 'Group2':
				if(currentParent > varMin && $Calculator('#'+objName).val() != 0){
					currentParent--;
					x = parseInt($Calculator('#'+objName).val());
					$Calculator('#'+objName).val(x-1);
					calSon(objName, $Calculator('#'+objName).val(), varCal, varGroup);
				}
			break;
		 case 'Group3':
				if(currentParent2 > varMin && $Calculator('#'+objName).val() != 0){
					currentParent2--;
					x = parseInt($Calculator('#'+objName).val());
					$Calculator('#'+objName).val(x-1);
					calSon(objName, $Calculator('#'+objName).val(), varCal, varGroup);
				}
			break;
		 case 'Group4':
				if(currentFund > varMin && $Calculator('#'+objName).val() != 0){
					currentFund--;
					x = parseFloat($Calculator('#'+objName).val());
					$Calculator('#'+objName).val(x-varStep);
					calSon(objName, $Calculator('#'+objName).val(), currentFund, varGroup);
					calMainTax();
				}
			break;		
		case 'SavingGroup':
				if(currentSaving > varMin && $Calculator('#'+objName).val() != 0){
					currentSaving--;
					x = parseFloat($Calculator('#'+objName).val());
					$Calculator('#'+objName).val(x-varStep);
					fn_Saving();
				}
			break;		
		case 'retireGroup':
				if(currentRetire > varMin && $Calculator('#'+objName).val() != 0){
					currentRetire--;
					x = parseFloat($Calculator('#'+objName).val());
					$Calculator('#'+objName).val(x-varStep);
					fn_Retirement();
				}
			break;	
		case 'childGroup1':
				if(currentChild1 > varMin && $Calculator('#'+objName).val() != 0){
					currentChild1--;
					x = parseFloat($Calculator('#'+objName).val());
					$Calculator('#'+objName).val(x-varStep);
					calChild(1);
				}
			break;
		case 'childGroup2':
				if(currentChild2 > varMin && $Calculator('#'+objName).val() != 0){
					currentChild2--;
					x = parseFloat($Calculator('#'+objName).val());
					$Calculator('#'+objName).val(x-varStep);
					calChild(2);
				}
			break;	
		case 'childGroup3':
				if(currentChild3 > varMin && $Calculator('#'+objName).val() != 0){
					currentChild3--;
					x = parseFloat($Calculator('#'+objName).val());
					$Calculator('#'+objName).val(x-varStep);
					calChild(3);
				}
			break;
	} 		
}

function skipPercent(x, objName, callFunction){
	switch(callFunction){
		 case 'Retirement':
				$Calculator('#'+objName).val(x);		 
				currentRetire = (x*2)-6;
				fn_Retirement();
				break;
		 case 'Saving':
				$Calculator('#'+objName).val(x);
				currentSaving = (x*2)-6;
				fn_Saving();			
				break;
	 	 case 'Child1':
				$Calculator('#'+objName).val(x);
				currentChild1 = (x*2)-10;
				calChild(1);			
				break;
 	 	case 'Child2':
				$Calculator('#'+objName).val(x);
				currentChild2 = (x*2);
				calChild(2);			
				break;
 	 	case 'Child3':
				$Calculator('#'+objName).val(x);
				currentChild3 = (x*2);
				calChild(3);			
				break;												
	}
}

function calSon(objName, x, rate, varGroup){	
	if(varGroup == 'group_Studying'){
		sonSum = (parseInt($Calculator('#input_Children_StudyingShowOnly').val()) + parseInt($Calculator('#input_Children_Non_StudyingShowOnly').val()));
		$Calculator('#input_Children_StudyingSum').val(sonSum);
		$Calculator('#'+objName+'ShowOnly').val(addCommas(x * rate));
	}
	
	if(varGroup == 'Group2' || varGroup == 'Group3'){
		parentSum = (currentParent + currentParent2) * rate;
		$Calculator('#input_Parental_CareSum').val(addCommas(parentSum));

		$Calculator('#txt_Tax_DShowOnly').val(addCommas(parentSum * (currentFund/100)));
	}
	
	if(varGroup == 'Group4'){
		x = parentSum;
		$Calculator('#'+objName+'ShowOnly').val(addCommas(x * (currentFund/100)));
	}
	calMainTax();
}

/*/###############################################################
//###############################################################
//###################### Function Saving Calculator ######################
//###############################################################
//###############################################################

function resetTextbox(){
	$Calculator('#txt_A').val(addCommas('500,000'));
	$Calculator('#txt_Years').val(5);
	$Calculator('#input_Annual').val('3'+'.0');
	$Calculator('#txt_Saving').val(0);

	fn_Saving();
}

function fn_Saving(){
//##################### รับค่า #####################
	var inflationRate = 3;
	LoadInflationRateFromList();
	
	var varE = parseFloat(inflationRate)/100;
	var sA = $Calculator('#txt_A').val().replace(/,/g, '');
	var sB = $Calculator('#txt_Years').val().replace(/,/g, '');
	var sD = $Calculator('#input_Annual').val();	
	$Calculator('#txt_show_rate').val(parseFloat(inflationRate) + '%');

//##################### เช็ค Min-Max #####################	
	if (sA > 10000000){sA=10000000;$Calculator('#txt_A').val(sA);}
	if (sA < 10000){sA=10000;$Calculator('#txt_A').val(sA);}
	
	if (sB > 30){sB=30;$Calculator('#txt_Years').val(sB);}
	if (sB < 1){sB=1;$Calculator('#txt_Years').val(sB);}
	
	if (sD > 20){sD=20;$Calculator('#input_Annual').val(sD);}
	if (sD < 0){sD=0;$Calculator('#input_Annual').val(sD);}
	
	var sR1 = Math.ceil(sA*Math.pow(1+varE, sB));
	if (isNaN(sR1)){$Calculator('#txt_Target').val('0 *');}
	else{$Calculator('#txt_Target').val(addCommas(sR1).toString() +'*');}
	
	var sD = $Calculator('#input_Annual').val()/100;	
	var srate = sD/12;
	var snper = sB*12;
	var spv = 0;
	var sC = $Calculator('#txt_Saving').val().replace(/,/g, '');

	if (sC > 10000000){
		sC = 10000000;
		$Calculator('#txt_Saving').val(sC);
	}

	$Calculator('#txt_Years_Output').val(sB);	

	var sfv = -(sR1-(sC*Math.pow(1+sD, sB)));
	//fv = fv*-1;
	var stype = 1;
	var sR2 = Math.ceil(fn_pmt_from_chang(srate, snper, spv, sfv, stype));
	
	if (isNaN(sR2)){
		$Calculator('#txt_PerMonth').val(0);
	}else{
		$Calculator('#txt_PerMonth').val(addCommas(Math.abs(sR2)));
		if (sR2 >= 1){
			$Calculator('#divSavingHome_Congrat').hide();
		}else{
			$Calculator('#divSavingHome_Congrat').show();
		}
	}
}

//###############################################################
//###############################################################
//#################### Retirement Calculator ####################
//###############################################################
//###############################################################
function calRetirement(){
// Input

LoadInflationRateFromList();

//##################### รับค่า #####################
	var a = $Calculator('#txt_RT_A').val(); //อายุของคุณ
	var b = $Calculator('#txt_RT_B').val(); //อายุตอนเกษียณ
	var c = $Calculator('#txt_RT_C').val(); //อยู่จนถึงอายุ
	var d = $Calculator('#txt_RT_D').val().replace(/,/g, ''); //หลังเกษียณอยากใช้เงินเดือนละ
	var f = $Calculator('#txt_RT_F').val().replace(/,/g, ''); //มีเงินออมไว้แล้ว
	var e = $Calculator('#txt_RT_E').val(); //ผลตอบแทนต่อปี

//##################### เช็ค Min-Max #####################
	if (a > 60){a=60;$Calculator('#txt_RT_A').val(a);}
	if (a < 10){a=10;$Calculator('#txt_RT_A').val(a);}

	if (b > 70){b=70;$Calculator('#txt_RT_B').val(b);}
	if (b < 35){b=35;$Calculator('#txt_RT_B').val(b);}
	
	if (c > 120){c=120;$Calculator('#txt_RT_C').val(c);}
	if (c < 60){c=60;$Calculator('#txt_RT_C').val(c);}

	if (d > 200000){d=200000;$Calculator('#txt_RT_D').val(d);}
	if (d < 5000){d=5000;$Calculator('#txt_RT_D').val(d);}
	
	if (f > 50000000){f=50000000;$Calculator('#txt_RT_F').val(f);}
	if (f < 0){f=0;$Calculator('#txt_RT_F').val(f);}
	
	if (e > 30){e=30;$Calculator('#txt_RT_E').val(e);}
	if (e < 0){e=0;$Calculator('#txt_RT_E').val(e);}
//	
e=e/100;
var rr = parseFloat(afterRetireRate/100);
var ri = parseFloat(inflationRate/100);

	$Calculator('#txt_show_rate').val(parseFloat(inflationRate) + '%');
	$Calculator('#txt_show_rate_retirement').val(parseFloat(afterRetireRate) + '%');

// Result
var rate = ri;
var nper = (b-a);
var pvx = -(d);
var pmt = 0;
var type = 0;
var g = fn_fv_from_chang(rate, nper, pvx, pmt, type);

var rate = e;
var nper = (b-a);
var pvx = (f);
var n = fn_fv(rate, nper, pvx);

var rate = ((1+(parseFloat(rr)/12))/(1+(parseFloat(ri)/12)))-1;
var nper = (parseFloat(c) - parseFloat(b))*12;
var pmt = -(parseFloat(g));
var fvx = 0;
var type = 0;

var h = fn_pv_from_chang(rate, nper, pmt, fvx, type);

$Calculator('#txt_RT_CB').val(c-b);

var rate = e/12;
var nper = (b-a)*12+(0*1);
var pvx = 0;
//var pvx = f;
var fvx = -(h-n);
var type= 0;
var i = fn_pmt_from_chang(rate, nper, pvx, fvx, type);

$Calculator('#txt_RT_I').val(addCommas(parseFloat(Math.ceil(i)).toFixed(0)));
$Calculator('#txt_RT_G').val(addCommas(parseFloat(Math.ceil(g)).toFixed(0)).toString()+'*');
$Calculator('#txt_RT_H').val(addCommas(parseFloat(Math.ceil(h)).toFixed(0)));

	if (i == 'Infinity'){
		$Calculator('#divInfinity').show();
		$Calculator('#txt_RT_error').val(addCommas(Math.abs(Math.ceil(h))));	
	}else{
		$Calculator('#divInfinity').hide();	
	}
	
	if ((h <= 0) || (i <= 0) || (isNaN(i)) || (isNaN(h))){
		$Calculator('#divError').show();
	}else{
		$Calculator('#divError').hide();
	}	
}
*/
//###############################################################
//###############################################################
//######################## Child Cal ############################
//###############################################################
//###############################################################
var totalChild = 0;
var gTemp = [];

function calChild(child){
//##################### รับค่า ###########################
	var cA = parseInt($Calculator('#txt_Ch'+child+'_A').val().replace(/,/g, ''));
	var cB = parseInt($Calculator('#txt_Ch'+child+'_B').val());
	var cD = parseInt($Calculator('#txt_Ch'+child+'_D').val().replace(/,/g, ''));
	var cC = $Calculator('#txt_Ch'+child+'_C').val();	

//##################### เช็ค Min-Max #####################
	if (cA > 10000000){cA=10000000;$Calculator('#txt_Ch'+child+'_A').val(cA);}
	if (cA < 0 || isNaN(cA) || cA == ''){cA=0;$Calculator('#txt_Ch'+child+'_A').val(cA);}

	if (cB > 30){cB=30;$Calculator('#txt_Ch'+child+'_B').val(cB);}
	if (cB < 0 || isNaN(cB) || cB == ''){cB=0;$Calculator('#txt_Ch'+child+'_B').val(cB);}
	
	if (cD > 10000000){cD=10000000;$Calculator('#txt_Ch'+child+'_D').val(cD);}
	if (cD < 0 || isNaN(cD) || cD == ''){cD=0;$Calculator('#txt_Ch'+child+'_D').val(cD);}

	if (cC > 30){cC=30;$Calculator('#txt_Ch'+child+'_C').val(cC);}
	if (cC < 0 || isNaN(cC) || cC == ''){cC=0;$Calculator('#txt_Ch'+child+'_C').val(cC);}

// #####################################################
//	Production	
	LoadInflationRateFromList();
	$Calculator('#txt_show_rate').val(parseFloat(termRate) + '%');	

	var cRI = termRate/100;
		
//	var cRI = 10/100;	
	var cX=0;
	
	var cF = (cA * Math.pow((1+cRI), (cB+(cX/12)))).toFixed(4);	
	
	var cRate = (cC/100)/12;
	var cNper = (cB*12)+(cX*1);
	var cPv = 0;
	
	var cFv = -(cF- (cD*(Math.pow((1+(cRate*12)), cB))));
	var cType = 1;
		
	var cG = fn_pmt_from_chang(cRate, cNper, cPv, cFv, cType);

	if((cG == 'Infinity') || isNaN(cG)){
		cG = 0;
	}

	if((cF == 'Infinity') || isNaN(cF)){
		cF = 0;
	}

	if(cG < 0){
		$Calculator('#divChildError'+child).show();
		cG = 0;
	}else{
		$Calculator('#divChildError'+child).hide();
	}

	$Calculator('#txt_Ch'+child+'_G').val(addCommas(Math.ceil(cG)));	
	$Calculator('#txt_Ch'+child+'_B1').val($Calculator('#txt_Ch'+child+'_B').val());
	$Calculator('#txt_Ch'+child+'_F').val(addCommas(Math.ceil(cF)).toString() + '*');
			
	gTemp[child] = cG;
}

var myArray=[];
var newArray=[];

function displaySummary(){

	myArray=[];
	newArray=[];
	
	var B1 = $Calculator('#txt_Ch1_B').val();
	var B2 = $Calculator('#txt_Ch2_B').val();
	var B3 = $Calculator('#txt_Ch3_B').val();		

	var G1 = $Calculator('#txt_Ch1_G').val().replace(/,/g, '');
	var G2 = $Calculator('#txt_Ch2_G').val().replace(/,/g, '');
	var G3 = $Calculator('#txt_Ch3_G').val().replace(/,/g, '');			

	if(G1 == 0){
		B1 = 0;
	}
	if(G2 == 0){
		B2 = 0;
	}
	if(G3 == 0){
		B3 = 0;
	}

	myArray=[
		[B1, G1],
		[B2, G2],
		[B3, G3]
		];
		
	myArray.sort(function(a,b){
			return a[0]-b[0];
		});	
	var index, xData, tabNo=0, xDataPreYear, xDataPreTotal, xDataVar=0;
	for(index = 0;index<myArray.length;++index){
		xData = myArray[index];
		if (xData[0] != 0){
			if(xData[0] == xDataPreYear){
				xDataVar = parseInt(xDataPreTotal) + parseInt(xData[1]);
				newArray.pop();
			}else{
				xDataVar = xData[1];
			}
			newArray.push([xData[0], xDataVar]);			
			xDataPreYear = xData[0];
			xDataPreTotal = xDataVar;

		}
	}
	displayOutput();	
}

/*#################################################*/
function displayOutput(){
$Calculator('#divSum1').hide();
$Calculator('#divSum2').hide();
$Calculator('#divSum3').hide();

var changeBG = false;
	if(newArray.length >= 1){	
		var x = newArray[0];
		var firstYear = x[0];
		var sum = x[1];

		if ((firstYear > 1) && (firstYear !=0)){
			var f1 = 1;
			var t1 = firstYear;
			var str1 = ' ถึงปีที่ ' +  t1;
			var changeBG = true;
		}else{
			var f1 = 1;
			var t1 = firstYear;
			var str1 = '';
			var changeBG = false;
		}
		var s1 = parseInt(sum);
		//var strAll = 'ปีที่ ' + f1 +  str1 + ' ยอดออมต่อเดือนรวมเป็นจำนวน ' + s1 + ' บาท\n';
		if (changeBG) {			
			displayFormat(2,1,f1,t1,s1);
		}else{
			displayFormat(1,1,f1,1,s1);		
		}
	}
	
	if(newArray.length >= 2){	
		var x = newArray[1];
		var firstYear = x[0];
		var sum = x[1];

		if ((firstYear > 1) && (firstYear !=0)){
			var f2 = parseInt(t1) + 1;
			var t2 = firstYear;
			var str2 = ' ถึงปีที่ ' +  t2;
			var changeBG = true;
		}

		if (t2 == t1){
			var s2 = parseInt(sum);
			//strAll = strAll;
			$Calculator('#divSum2').hide();
			$Calculator('#divSum1 #txt_Total').val(addCommas(parseInt(s2)+parseInt(s1)));
		}else{
			var s2 = parseInt(sum);	
			$Calculator('#divSum1 #txt_Total').val(addCommas(parseInt(s2)+parseInt(s1)));
			$Calculator('#divSum2').show();
			$Calculator('#divSum2 #txt_From_Year').val(f2)		
			if (f2 == t2){
				//strAll += 'ปีที่ ' + f2 + ' ยอดออมต่อเดือนรวมเป็นจำนวน ' + s2 + ' บาท\n';
				$Calculator('#divSum2 #txt_To_Year').hide();
				$Calculator('#divSum2 #divTxt_Total').css('left','400px');
				$Calculator('#divSum2').css('background-image','url(/PublishingImages/Tax/'+siteLanguage+'/bg_title/bg_child_sum_2.png)');		
				$Calculator('#divSum2 #txt_Total').val(addCommas(s2));
			}else{
				//strAll += 'ปีที่ ' + f2 + str2 + ' ยอดออมต่อเดือนรวมเป็นจำนวน ' + s2 + ' บาท\n';
				$Calculator('#divSum2 #txt_To_Year').show();
				$Calculator('#divSum2 #txt_To_Year').val(t2);
				$Calculator('#divSum2 #divTxt_Total').css('left','528px');
				$Calculator('#divSum2').css('background-image','url(/PublishingImages/Tax/'+siteLanguage+'/bg_title/bg_child_sum_1.png)');		
				$Calculator('#divSum2 #txt_Total').val(addCommas(s2));			
			}			
		}	
	}

	if(newArray.length >= 3){	
		var x = newArray[2];
		var firstYear = x[0];
		var sum = x[1];
		
		if ((firstYear > 1) && (firstYear !=0)){
			var f3 = parseInt(t2) + 1;
			var t3 = firstYear;
			var str3 = ' ถึงปีที่ ' +  t3;
			var changeBG = true;			
		}
		
		if(t3 == t2 || t3 == t1){
			var s3 = parseInt(sum);
			//strAll = strAll ;
			if(t3 == t1){
				$Calculator('#divSum3').hide();
				$Calculator('#divSum1 #txt_Total').val(addCommas(parseInt(s3)+parseInt(s2)+parseInt(s1)));		
			}			
			if(t3 == t2){
				$Calculator('#divSum3').hide();
				$Calculator('#divSum2 #txt_Total').val(addCommas(parseInt(s3)+parseInt(s2)));
			}
			if(t3 == t2 == t1){
				$Calculator('#divSum3').hide();
				$Calculator('#divSum2').hide();
				$Calculator('#divSum1 #txt_Total').val(addCommas(parseInt(s3)+parseInt(s2)+parseInt(s1)));
			}			
		}else{
			var s3 = parseInt(sum);
			//var s2 = s2 + s3;			
			//var s1 = s1 + s2 + s3;
			$Calculator('#divSum1 #txt_Total').val(addCommas(parseInt(s3)+parseInt(s2)+parseInt(s1)));
			$Calculator('#divSum2 #txt_Total').val(addCommas(parseInt(s3)+parseInt(s2)));					
			if (f3 == t3){
				displayFormat(1,3,f3,1,s3);				
			}else{
				displayFormat(2,3,f3,t3,s3);			
			}
		}
	}
}

function displayFormat(vType, vDiv, vFrom, vTo, vSum){
	$Calculator('#divSum' + vDiv).show();		
	$Calculator('#divSum' + vDiv + ' #txt_From_Year').val(vFrom);	
	
	if (vType == 1){	
		$Calculator('#divSum' + vDiv + ' #txt_To_Year').hide();
		$Calculator('#divSum' + vDiv + ' #divTxt_Total').css('left','400px');
		$Calculator('#divSum' + vDiv).css('background-image','url(/PublishingImages/Tax/'+siteLanguage+'/bg_title/bg_child_sum_2.png)');
	}else if(vType == 2){
		$Calculator('#divSum' + vDiv + ' #txt_To_Year').show();
		$Calculator('#divSum' + vDiv + ' #txt_To_Year').val(vTo);
		$Calculator('#divSum' + vDiv + ' #divTxt_Total').css('left','528px');
		$Calculator('#divSum' + vDiv).css('background-image','url(/PublishingImages/Tax/'+siteLanguage+'/bg_title/bg_child_sum_1.png)');	
	}

	$Calculator('#divSum' + vDiv + ' #txt_Total').val(addCommas(vSum));		
}

// Saving, HomeLoan
function fn_pmt_from_chang(rate, nper, pv, fv, type){
	if(rate == 0){
		return -(pv + fv)/nper;                              
	}
	var pmt = rate/(Math.pow(1+rate,nper)-1)* -(pv*Math.pow(1+rate, nper)+fv);
	//var	pvif = Math.pow(1 + rate, nper);
    //var	pmt = - rate * pv * (pvif + fv) / (pvif - 1);
	
	if (type == 1){
		return pmt /= (1+rate);
	}else{	
		return pmt;
	}
}

function fn_pv_from_chang(rate, nper, pmt, fv, type){
	if (rate==0){
		return (-fv -(pmt*nper));
	}else{
		return ((pmt*(1.0+rate*type)*(1- Math.pow((1+rate),nper))/rate-fv)/Math.pow((1+rate),nper));
    }
}

function fn_fv_from_chang(rate, nper, pv, pmt, type){
	if (rate == 0){
		return (-1*(pv+pmt*nper));
	}else{
		return ((pmt*(1+rate*type)*(1-Math.pow((1+rate),nper))/rate)-pv*Math.pow((1+rate),nper));
	}
}

/*#################################################*/
/*################ PMT, PV, FV ####################*/

function fn_fv(rate, nper, pv){
	return parseFloat((pv*Math.pow(1+rate,nper))).toFixed(2);
}

function LoadTaxFromList(){		

taxMax[0] = 150000;
taxMax[1] = 300000;
taxMax[2] = 500000;
taxMax[3] = 750000;	
taxMax[4] = 1000000;
taxMax[5] = 2000000;
taxMax[6] = 4000000;
taxMax[7] = 8000000;

taxRate[0] = 0;
taxRate[1] = 5;
taxRate[2] = 10;
taxRate[3] = 15;
taxRate[4] = 20;
taxRate[5] = 25;
taxRate[6] = 30;
taxRate[7] = 35;

/*	

	var index = 0;
	var strCAML = '<Query><OrderBy><FieldRef Name="OrderNo" Ascending="TRUE"/></OrderBy></Query>';
	$LandingPage().SPServices({		
        operation: 'GetListItems',
        operation: 'GetListItems',
		webURL: window.location.protocol + '//' + window.location.host + '/' + 'Emquartier/Surface/',
//		webURL: 'http://www.bangkokbank.com/Emquartier/Surface/',
		async: false,
		listName: 'TaxTable',		
		CAMLViewFields: '<ViewFields />',
		CAMLQuery: strCAML,
		completefunc: function(xData, Status) {
			$LandingPage(xData.responseXML).find("[nodeName='z:row']").each(function() {
				taxMax[index]= parseInt($LandingPage(this).attr('ows_MaxValue'));
				taxRate[index] = parseInt($LandingPage(this).attr('ows_TaxRate'));
				index++;
			});
		}
	});
*/
}

function LoadInflationRateFromList(){		
/*				inflationRate = parseFloat(0.03);
				afterRetireRate = parseFloat(0.3);
				referenceRate  = parseFloat(0.3);
				termRate = parseFloat(0.3);
*/
	var index = 0;
	var strCAML = '<Query></Query>';
	$LandingPage().SPServices({		
        operation: 'GetListItems',
		webURL: window.location.protocol + '//' + window.location.host + '/' + 'Emquartier/Surface/',
		//webURL: 'http://backend.bangkokbank.com/Emquartier/Surface/',
		async: false,
		listName: 'MaintainCalculateRate',		
		CAMLViewFields: '<ViewFields />',
		CAMLQuery: strCAML,
		completefunc: function(xData, Status) {
			$LandingPage(xData.responseXML).find("[nodeName='z:row']").each(function() {
				inflationRate = parseFloat($LandingPage(this).attr('ows_InflationRate'));
				afterRetireRate = parseFloat($LandingPage(this).attr('ows_AfterRetireRate'));
				referenceRate  = parseFloat($LandingPage(this).attr('ows_ReferenceRate'));
				termRate = parseFloat($LandingPage(this).attr('ows_TermRate'));

				index++;
			});
		}
	});
}

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