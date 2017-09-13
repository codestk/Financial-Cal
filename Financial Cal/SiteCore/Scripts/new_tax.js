var A=0, B=0, C=0, D=0, Z2=0, Z3=0, Z4=0, Z5=0, Z6=0, Z7=0, Z8=0, Z9=0, Z10=0, Z11=0;
var reduce1=0, reduce2=0, netincome=0, income=0, tax=0, first_TAX=0, second_TAX=0, third_TAX=0, inputRMF=0, inputLTF=0;
var var_Home=0, var_HealthMother=0, var_Health=0, var_Insurance60=0, var_Others=0, var_Donation=0, var_RMF=0;
var netincomeReduce=0, netincomeReduceAfterLTFRMF=0, netincomeReduceBeforeZ8=0;
var var_MaxRMF=0, var_MaxLTF=0;
var var_MaxPension=0, var_InputPension=0;
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
var Z7_Old = 0;
var varHealth=0;
var varInsure60=0;

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
	checkCalTaxInput();
	calMainTax();	
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	$Calculator('#divTaxNewCalculator input').focusout(function(){
		checkCalTaxInput();
		calMainTax();
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
	checkKeyboard();

	$Calculator('#divPages5 input').focusout(function(){	

		checkAmount();
		return;

		var max_Insure60 = $Calculator('#output_MaxPension').val().replace(/,/g, '');	
		var result_Z7 = $Calculator('#output_New_Z7').val().replace(/,/g, '');
		var old_RMF = $Calculator('#output_old_RMF').val().replace(/,/g, '');
		var plus_z7_RMF = parseInt(result_Z7) + parseInt(old_RMF);
		var max_Z7_RMF = $Calculator('#output_RMF_Pension').val().replace(/,/g, '');
		
		
		var result_output_old_Z7 = $Calculator('#output_old_Z7').val().replace(/,/g, '');
		
		var varInputZ7 = parseInt(max_Z7_RMF)-parseInt($Calculator('#output_New_RMF').val().replace(/,/g, ''));
		
		varInputZ7 = Math.min(max_Insure60, varInputZ7);
		varInputZ7 = $Calculator('#output_MaxPension').val().replace(/,/g, '');		
		varInputRMF = $Calculator('#output_MaxRMF').val().replace(/,/g, '');		
		varInputLTF = $Calculator('#output_MaxLTF').val().replace(/,/g, '');	
		varInputInsure = $Calculator('#output_Insure').val().replace(/,/g, '');
	});
	onClickMenu();
	$Calculator('#divTaxCursor').css('left','215px');
	
});

function checkAmount(){

	var am_old_Z7 = $Calculator('#txt_Tax_Z7').val().replace(/,/g,'');
	$Calculator('#output_old_Z7').val(fn_addCommas(am_old_Z7));	
	var am_old_RMF = $Calculator('#txt_Tax_Z11').val().replace(/,/g,'');
	$Calculator('#output_old_RMF').val(fn_addCommas(am_old_RMF));
	var am_old_LTF = Math.min(getMaxLTF(),$Calculator('#txt_Tax_Z10').val().replace(/,/g,''));
	$Calculator('#output_old_LTF').val(fn_addCommas(am_old_LTF));
	var am_old_Z6 = $Calculator('#txt_Tax_Z6').val().replace(/,/g,'');
	$Calculator('#output_old_Z6').val(fn_addCommas(am_old_Z6));
	
	var am_MAX_LTF = $Calculator('#output_MaxLTF').val().replace(/,/g, '');
	var am_MAX_Ins = $Calculator('#output_Insure').val().replace(/,/g, '');
	var am_MAX_RMF = $Calculator('#output_MaxRMF').val().replace(/,/g, '');
	var am_MAX_Pen = $Calculator('#output_MaxPension').val().replace(/,/g, '');
	var am_MAX_RMF_PEN = $Calculator('#output_RMF_Pension').val().replace(/,/g, '');
	var am_MAX_RMFPEN = $Calculator('#output_TAX_Invest').val().replace(/,/g, '');
	
	$Calculator('#output_RMF_Pension_Remark').val(fn_addCommas(am_MAX_RMF_PEN));	
	$Calculator('#output_RMF_Pension_MAX_Remark').val(fn_addCommas(am_MAX_RMFPEN));	
	
	var am_input_Z7 = $Calculator('#input_Z7').val().replace(/,/g, '');	
	var am_input_RMF = $Calculator('#input_RMF').val().replace(/,/g, '');
	var am_input_LTF = $Calculator('#input_LTF').val().replace(/,/g, '');
	var am_input_Z6 = $Calculator('#input_Z6').val().replace(/,/g, '');
	
	
	// check MAX
		if ((am_old_Z7*1) >= (am_MAX_Pen*1)){
			$Calculator('#input_Z7').hide();
		}else{
			$Calculator('#input_Z7').show();
		}	
		if (am_old_RMF == am_MAX_RMF){
			$Calculator('#input_RMF').hide();
		}else{
			$Calculator('#input_RMF').show();
		}		
		if (am_old_LTF == am_MAX_LTF){
			$Calculator('#input_LTF').hide();
		}else{
			$Calculator('#input_LTF').show();
		}
			
		if (am_old_Z6 == am_MAX_Ins){
			$Calculator('#input_Z6').hide();
		}else{
			$Calculator('#input_Z6').show();
		}
	//
	
		
	var show_Z7 = (am_old_Z7*1) + (am_input_Z7*1);
		if(show_Z7 > am_MAX_Pen){
			show_Z7 = am_MAX_Pen;
			$Calculator('#input_Z7').val(fn_addCommas((am_MAX_Pen*1) - (am_old_Z7*1)));
			$Calculator('#output_New_Z7').val(fn_addCommas(show_Z7));
		}else{
			$Calculator('#output_New_Z7').val(fn_addCommas(show_Z7));
		}
		
	var show_RMF = (am_old_RMF*1) + (am_input_RMF*1);
	
		if(show_RMF > am_MAX_RMF){
			show_RMF = am_MAX_RMF;
			if(((am_MAX_RMF*1) - (am_old_RMF*1)) < 0){
				$Calculator('#input_RMF').val(0);	
				$Calculator('#output_New_RMF').val(fn_addCommas(show_RMF));	
			}else{
				$Calculator('#input_RMF').val(fn_addCommas((am_MAX_RMF*1) - (am_old_RMF*1)));	
				$Calculator('#output_New_RMF').val(fn_addCommas(show_RMF));			
			}
		}else{
			$Calculator('#output_New_RMF').val(fn_addCommas(show_RMF));	
		}
		
	var show_LTF = (am_old_LTF*1) + (am_input_LTF*1);
		if(show_LTF > am_MAX_LTF){
			show_LTF = am_MAX_LTF;
			$Calculator('#input_LTF').val(fn_addCommas((am_MAX_LTF*1) - (am_old_LTF*1)));	
			$Calculator('#output_New_LTF').val(fn_addCommas(show_LTF));				
		}else{
			$Calculator('#output_New_LTF').val(fn_addCommas(show_LTF));	
		}	
		
	var show_Z6 = (am_old_Z6*1) + (am_input_Z6*1);
		if(show_Z6 > am_MAX_Ins){
			show_Z6 = am_MAX_Ins;
			$Calculator('#input_Z6').val(fn_addCommas((am_MAX_Ins*1) - (am_old_Z6*1)));		
			$Calculator('#output_New_Z6').val(fn_addCommas(show_Z6));		
		}else{
			$Calculator('#output_New_Z6').val(fn_addCommas(show_Z6));
		}
			
	var am_RMF_Pen = (show_Z7*1)+(show_RMF*1);
	if(am_RMF_Pen > am_MAX_RMF_PEN){
		show_RMF = am_MAX_RMF_PEN - (show_Z7*1);
		if(((am_MAX_RMF_PEN*1) - (show_Z7*1) - (am_old_RMF*1))<0){
			$Calculator('#input_Z7').val(fn_addCommas((am_MAX_RMF_PEN*1)-(am_old_RMF*1)-(am_old_Z7*1)));
			$Calculator('#output_New_Z7').val(fn_addCommas((am_MAX_PEN*1)-(am_old_Z7*1)-((am_MAX_RMF_PEN*1)-(am_old_RMF*1)-(am_old_Z7*1))));
			$Calculator('#input_RMF').val(0);
		}else{
			$Calculator('#input_RMF').val(fn_addCommas((am_MAX_RMF_PEN*1) - (show_Z7*1) - (am_old_RMF*1)));
			$Calculator('#output_New_RMF').val(fn_addCommas((am_MAX_RMF_PEN*1) - (show_Z7*1)));
		}
	}
			
	if ((am_old_Z7*1)+(am_old_RMF*1) >= (am_MAX_RMF_PEN*1)){
		$Calculator('#input_Z7').hide();
		$Calculator('#input_RMF').hide();
		$Calculator('#output_New_RMF').val(fn_addCommas(show_RMF));	
		$Calculator('#output_New_Z7').val(fn_addCommas(show_Z7));
	}else{
		if ((am_old_Z7*1) >= (am_MAX_Pen*1)){
			$Calculator('#input_Z7').hide();
		}else{
			$Calculator('#input_Z7').show();
		}
		$Calculator('#input_RMF').show();
	}		
	
	fn_CalAmount();
		
}

function checkKeyboard(){
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

          console.log(temp_Income);
			$Calculator(this).val($Calculator(this).val().replace(/,/g, ''));		
	});

	$Calculator('input').focusout(function(){
			
		//	if(!($Calculator.isNumeric($Calculator(this).val()))){
		//		$Calculator(this).val();
		//		$Calculator(this).css('background','none');
		//	}
	  
        
			temp_Income = $Calculator(this).val().replace(/,/g, '')*1;
			
			$Calculator(this).val(fn_addCommas(temp_Income*1));
			
			if(temp_Income == '' || isNaN(temp_Income)){				
				$Calculator(this).val(0);
			}



	});
}

function onClickMenu(){
		$Calculator('#li_Income').on("click", function(){
			if (TaxLTF_RMF != 0){
				Tax_changeSubMenu(1);
				currentPage = 0;
			}
		});
		$Calculator('#li_Allowances').on("click", function(){
			if (TaxLTF_RMF != 0){			
				Tax_changeSubMenu(2);
				currentPage = 1;
			}
		});
		$Calculator('#li_Max_TAX').on("click", function(){
			if (TaxLTF_RMF != 0){			
				Tax_changeSubMenu(4);
				currentPage = 2;
			}
		});
		$Calculator('#li_Your_Prefered_TAX').on("click", function(){
			if (TaxLTF_RMF != 0){			
				Tax_changeSubMenu(5);
				currentPage = 3;
			}
		});
}


function fn_CalAmount(){
	var var_output_New_Z7 = parseInt($Calculator('#output_New_Z7').val().replace(/,/g,''));
	var var_output_New_RMF = parseInt($Calculator('#output_New_RMF').val().replace(/,/g,''));
	var var_output_New_LTF = parseInt($Calculator('#output_New_LTF').val().replace(/,/g,''));
	var var_output_New_Z6 = parseInt($Calculator('#output_New_Z6').val().replace(/,/g,''));	
	
	var amount_Total_Reduce = 60000+getReduce1()+9000+getPVD()+(Z2*30000)+(Z3*30000)+getHome()+getHealthMother()+var_output_New_Z6+getOthers()+var_output_New_Z7;	

	var gAmountDonate = Math.min((getIncome()-amount_Total_Reduce-var_output_New_RMF-var_output_New_LTF)*0.1,Z8);
	
	var amount_Net = getIncome()-amount_Total_Reduce-var_output_New_RMF-var_output_New_LTF-gAmountDonate;	

	var var_TAX_Amount = calTAX(amount_Net);
	var var_output_TAX_4 = $Calculator('#output_TAX_4').val().replace(/,/g,'');
	
	// 2.0.0.3 $Calculator('#output_TAX_Amount').val(fn_addCommas(Math.ceil((var_output_TAX_4 - var_TAX_Amount).toFixed(2))));
	$Calculator('#output_TAX_Amount').val(fn_addCommas(parseInt((var_output_TAX_4 - var_TAX_Amount))));
	$Calculator('#output_TAX_Save_Amount').val(fn_addCommas(Math.ceil(var_TAX_Amount)));
	
	$Calculator('#output_TAX_Save_Amount_Rate').val(Amount_Rate);
}

//##################### เช็ค Min-Max #####################	

function checkRange(varID, varMax, varMin, varOld, varNew){	
		var varX = parseInt($Calculator('#'+varID).val().replace(/,/g, ''));	
		var oldX = parseInt($Calculator('#'+varOld).val().replace(/,/g, ''));
		
		varMax = varMax - oldX;
		if (varX > varMax ){
			varX = varMax;
			$Calculator('#'+varID).val(fn_addCommas(varX.toFixed(0)));
		}
		if (varX < varMin){
			varX = varMin;
			$Calculator('#'+varID).val(fn_addCommas(varX.toFixed(0)));
		}
		
		$Calculator('#'+varNew).val(parseInt(varX)+parseInt(oldX));
	
	    var varResult_Z7 = parseInt($Calculator('#output_New_Z7').val());
    
	    //    
	    
	//checkRangeRMF_Pension(varID,varX);
}
//######################################################

function checkRangeRMF_Pension(idName,valueX){
	var maxAll = parseInt($Calculator('#output_TAX_Invest').val().replace(/,/g, ''));	
	var finalZ7 = parseInt($Calculator('#output_New_Z7').val().replace(/,/g, ''));	
	var finalRMF = parseInt($Calculator('#output_New_RMF').val().replace(/,/g, ''));	
	var finalLTF = parseInt($Calculator('#output_New_LTF').val().replace(/,/g, ''));	
	var finalZ6 = parseInt($Calculator('#output_New_Z6').val().replace(/,/g, ''));	
	
	var finalAll = finalZ7 + finalRMF + finalLTF + finalZ6;
	
	//$Calculator('#output_TAX_4').val(finalAll);
	
	if (finalAll > maxAll){
		$Calculator('#'+idName).val(fn_addCommas(parseInt(valueX - (finalAll - maxAll))));	
	}else{	
		$Calculator('#'+idName).val(fn_addCommas(parseInt(valueX)));
	}
}

// ###################### Function Change Pages ##########################
var currentPage = 0;
function Tax_changeSubMenu(x){
	currentPage = x;
	var initVar = x;
	if (x==0) {
		x = 1;
	}
	$Calculator('.cssTax_Pages').hide();
	$Calculator('#divPages' + x + '').fadeIn();
	if (x==1){
		if (initVar==0){
			initVar = 1;
			$Calculator('#txt_Tax_A' ).val(fn_addCommas(50000)); 	// เงินเดือน
			$Calculator('#txt_Tax_B' ).val(0); 	// เงินได้อื่นๆ
			$Calculator('#txt_Tax_C' ).val(fn_addCommas(100000)); 	// โบนัส
			$Calculator('#txt_Tax_D' ).val(0); 	// PVD	
			$Calculator('#txt_Tax_Z4').val(0); 	// ดอกเบี้ยบ้าน	
			$Calculator('#txt_Tax_Z5').val(0);	// เบี้ยพ่อแม่
			$Calculator('#txt_Tax_Z6').val(0);	// เบี้ยชีวิต
			$Calculator('#txt_Tax_Z7').val(0);	// เบี้ยบำนาญ
			$Calculator('#txt_Tax_Z8').val(0);	// บริจาค
			$Calculator('#txt_Tax_Z9').val(0);	// อื่นๆ
			$Calculator('#txt_Tax_Z10').val(0);	// LTF
			$Calculator('#txt_Tax_Z11').val(0);	// RMF	
			$Calculator('#input_Children_Studying').val(0);
			$Calculator('#input_Parental_Care').val(0);
			
			currentSon=0;
			currentParent=0;
			$Calculator('#input_Children_StudyingShowOnly').val(0);
			$Calculator('#input_Parental_CareSum').val(0);

			checkCalTaxInput();			
			calMainTax();
		}
		$Calculator('#divTaxCursor').css('left','215px');	
	}
	if (x==2 || x==3){
		//checkCalTaxInput();
		if (TaxLTF_RMF == 0){
			Tax_changeSubMenu(0);	
		}else{
			calMainTax();
			$Calculator('#divTaxCursor').css('left','340px');	
		}
	}
	if (x==4){
		if (TaxLTF_RMF == 0){
			Tax_changeSubMenu(0);
		}else{
			$Calculator('#divTaxCursor').css('left','530px');
			calTAX_MAX();
			checkAmount();
			//initCalAmount();
		}
	}
	if (x==5){
		$Calculator('#divTaxCursor').css('left','698px');
		calTAX_MAX();
		checkAmount();
		//initCalAmount();	
		//initCalAmount_New();		
	}
}	
// #######################################################################

function fn_MinMax(xVal, xMin, xMax, xID){
	if (xVal > xMax){
		xVal = xMax;
		$Calculator(xID).val(xVal);
	}else if ((xVal < xMin) || isNaN(xVal) || xVal == ''){
		xVal = xMin;	
		$Calculator(xID).val(xVal);	
	}
	return xVal;
}

function checkCalTaxInput(){
	A  = fn_MinMax($Calculator('#txt_Tax_A' ).val().replace(/,/g, ''), 0, 99999999999	, '#txt_Tax_A'); 	// เงินเดือน
	B  = fn_MinMax($Calculator('#txt_Tax_B' ).val().replace(/,/g, ''), 0, 99999999999	, '#txt_Tax_B'); 	// เงินได้อื่นๆ
	C  = fn_MinMax($Calculator('#txt_Tax_C' ).val().replace(/,/g, ''), 0, 99999999999	, '#txt_Tax_C'); 	// โบนัส
	D  = fn_MinMax($Calculator('#txt_Tax_D' ).val().replace(/,/g, ''), 0, 15			, '#txt_Tax_D'); 	// PVD	
	Z4 = fn_MinMax($Calculator('#txt_Tax_Z4').val().replace(/,/g, ''), 0, 100000		, '#txt_Tax_Z4'); 	// ดอกเบี้ยบ้าน	
	Z5 = fn_MinMax($Calculator('#txt_Tax_Z5').val().replace(/,/g, ''), 0, 15000			, '#txt_Tax_Z5');	// เบี้ยพ่อแม่
	Z6 = fn_MinMax($Calculator('#txt_Tax_Z6').val().replace(/,/g, ''), 0, 100000		, '#txt_Tax_Z6');	// เบี้ยชีวิต
	Z7 = fn_MinMax($Calculator('#txt_Tax_Z7').val().replace(/,/g, ''), 0, 200000		, '#txt_Tax_Z7');	// เบี้ยบำนาญ
	Z8 = fn_MinMax($Calculator('#txt_Tax_Z8').val().replace(/,/g, ''), 0, 99999999999	, '#txt_Tax_Z8');	// บริจาค
	Z9 = fn_MinMax($Calculator('#txt_Tax_Z9').val().replace(/,/g, ''), 0, 500000		, '#txt_Tax_Z9');	// อื่นๆ
	Z10 = fn_MinMax($Calculator('#txt_Tax_Z10').val().replace(/,/g, ''), 0, 500000		, '#txt_Tax_Z10');	// LTF
	Z11 = fn_MinMax($Calculator('#txt_Tax_Z11').val().replace(/,/g, ''), 0, 500000		, '#txt_Tax_Z11');	// RMF	
}

var socialSec = 0;

function calMainTax(){
	if(A >= 0 || B >= 0){
		
		income = getIncome();
		Total_Income = income;
		socialSec = getSSO();
		D = parseFloat($Calculator('#txt_Tax_D').val())/100;
		reduce1 = getReduce1();
		PVD = getPVD();
		
		$Calculator('#output_Income').val(fn_addCommas(income));		
		$Calculator('#output_Reduce1').val(fn_addCommas(reduce1));	
		
		netincome = (((income - 60000) - socialSec) - reduce1) - PVD;		
		Z7 = Math.min(200000, Math.min(Z7, (0.15*income)));		
		var diffReduce2 = 500000 - reduce2;	
		if(diffReduce2 <= 0){
			Z7=0;
		}
		
		reduce2 = ((D*A)*12)+Z7;
		reduce2 = Math.min(500000,reduce2);			

		$Calculator('#output_Reduce2').val(fn_addCommas(reduce2));

//	บุตรศึกษา
		Z2 = parseInt($Calculator('#input_Children_Studying').val());
// บิดามารดา		
		Z3 = parseInt($Calculator('#input_Parental_Care').val());
		
		Z4 = getHome();
		Z5 = getHealthMother();
		Z6 = getHealth();
	
		var LTF_Var2 = getLTF();
		var RMF_Var2 = getRMF();	
		
		var Z7_Var1 = Math.min(Z7, (15/100)*income);
		var Z7_Var2 = Math.min(500000-PVD-LTF_Var2,Z7_Var1);	
		var Z7_Var3 = Math.min(Z7_Var1,Z7_Var2);
		Z7_Old = Z7_Var3;		
		
		Z9 = getOthers();	
		
		$Calculator('#txtZ7_Var3').val(Z7_Var3);		

		Total_Reduce = 60000+socialSec+PVD+reduce1+(Z2*30000)+(Z3*30000)+Z4+Z5+Z6+Z7_Var3+Z9;


		netincomeReduce = income-LTF_Var2-RMF_Var2-Total_Reduce; 

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

		$Calculator('#txt_Tax_Z8').val(parseInt(Z8));

		
		netincome_with_LTF_RMF = netincome - LTF_Var2 - RMF_Var2;

	IncomeReduce = income-Total_Reduce;
	var TaxOnly = calTAX(netincome);
		netincomeReduceBeforeZ8 = netincomeReduce;
		$Calculator('#output_Netincome').val(fn_addCommas(netincome));
		$Calculator('#inputResultFinal').val(fn_addCommas(reduce1));

	if (isNaN(TaxLTF_RMF)){
		TaxLTF_RMF = 0;
	}		

	Total_Reduce = 60000+getReduce1()+9000+getPVD()+(Z2*30000)+(Z3*30000)+getHome()+getHealthMother()+getHealth()+getOthers()+getPension();	
	netincome_with_LTF_RMF = getIncome()-getTotalReduce()-getDonate()-getRMF()-getLTF();	
		
//	TaxLTF_RMF = calTAX(netincome_with_LTF_RMF);
	

	// MAX RMF //
	RMF_A = income*(15/100);
	RMF_A = Math.min(500000, RMF_A);
	
	RMF_B = 500000 - (Math.min(A * D *12 ,200000));
	RMF_Result = Math.min(RMF_A, RMF_B);	
	// --------------------- //
	
	// MAX Pension //
	Pension_A = income*(15/100);
	Pension_A = Math.min(200000, Pension_A);
	Pension_B = 500000 - (Math.min(A * D *12,200000));
	Pension_Result = Math.min(Pension_A, Pension_B);
	// --------------------- //
	
	// MAX RMF - Pension //
	RMF_Pension_A = 500000 - (Math.min(A * D *12,500000));
	RMF_Pension_B = RMF_Result + Pension_Result;
	RMF_Pension_B = Math.max(RMF_Pension_B, 0);
	RMF_Pension_Result = Math.min(RMF_Pension_A, RMF_Pension_B);		
		
	var var_Normal_RMF_Pension_Final = Math.min(getRMF()+getPension(), RMF_Pension_B);	
	var var_Normal_NetincomeReduce = income - 60000 - getReduce1() - socialSec - (Math.min(A*D*12, 500000)) - (Z2*30000) - (Z3*30000)  - Z4 - Z5 - getHealth() - getOthers() - getLTF() - var_Normal_RMF_Pension_Final;
	var reduce2_Result = 60000 + getReduce1() + socialSec + (Math.min(A*D*12, 500000)) + (Z2*30000) + (Z3*30000) + Z4 + Z5 + getHealth() + getOthers() + getLTF() + var_Normal_RMF_Pension_Final;

	var var_Normal_Z8 = $Calculator('#txt_Tax_Z8').val().replace(/,/g, '');
	var_Normal_Z8 = Math.min(var_Normal_NetincomeReduce * 0.1, var_Normal_Z8);	
	var var_Normal_Netincome = var_Normal_NetincomeReduce - var_Normal_Z8;
	var reduce2_Result = reduce2_Result + var_Normal_Z8;
		
	TaxLTF_RMF = calTAX(var_Normal_Netincome);
		
	var Amount_Rate_2_tax = Amount_Rate_2;

	if (TaxLTF_RMF == 0) {
		showTaxError('off');
		if (currentPage == 0){
			$Calculator('#li_Allowances img').attr('src', '/PublishingImages/Tax/Thai/bg_title/sub2_gray.png');
		}
			$Calculator('#li_Max_TAX img').attr('src', '/PublishingImages/Tax/Thai/bg_title/sub3_gray.png');
			$Calculator('#li_Your_Prefered_TAX img').attr('src', '/PublishingImages/Tax/Thai/bg_title/sub4_gray.png');
	}else{
		showTaxError('on');
		$Calculator('#li_Allowances img').attr('src', '/PublishingImages/Tax/Thai/bg_title/sub2.png');
		$Calculator('#li_Max_TAX img').attr('src', '/PublishingImages/Tax/Thai/bg_title/sub3.png');
		$Calculator('#li_Your_Prefered_TAX img').attr('src', '/PublishingImages/Tax/Thai/bg_title/sub4.png');		
	}	
		
	var Tax_inCome_Only = getIncome() - (60000+getReduce1()+getSSO());
				
	Tax_inCome_Only = calTAX(Tax_inCome_Only);
		
	$Calculator('#output_Total_Income1, #output_Total_Income2').val(fn_addCommas(Total_Income));
	$Calculator('#output_Total_Reduce1').val(fn_addCommas(parseInt(60000+getReduce1()+getSSO())));			
	//$Calculator('#output_Total_Reduce2').val(fn_addCommas(parseInt(reduce2_Result())));	
	$Calculator('#output_Total_Reduce2').val(fn_addCommas(parseInt(reduce2_Result)));		
	$Calculator('#output_Net_Income').val(fn_addCommas(netincomeReduce));
	$Calculator('#output_Net_Income_After_Donation').val(fn_addCommas(netincome));
	$Calculator('#output_TAX1').val(fn_addCommas(Math.ceil(Tax_inCome_Only)));
	$Calculator('#output_TAX_Save_Amount_Rate_1').val(Amount_Rate);
	$Calculator('#output_TAX2').val(fn_addCommas(Math.ceil(TaxLTF_RMF)));
	//$Calculator('#output_TAX2').val(fn_addCommas(Math.ceil(getLTF())));
	$Calculator('#output_TAX_Save_Amount_Rate_2').val(Amount_Rate_2_tax);
	$Calculator('#output_TAX_2').val(fn_addCommas(Math.ceil(TaxLTF_RMF)));
	$Calculator('#output_TAX_3').val(fn_addCommas(Math.ceil(TaxLTF_RMF)));
	$Calculator('#output_TAX_4').val(fn_addCommas(Math.ceil(TaxLTF_RMF)));

	// ver. .5
	if($Calculator('#txt_Tax_Z11').val()>0){
	
	var_MaxRMF_A = income*(15/100);
	var_MaxRMF_A = Math.min(500000, var_MaxRMF_A);
	
	var_MaxRMF_B = 500000 - (Math.min(A * D *12 ,500000));
	var_MaxRMF = Math.min(var_MaxRMF_A, var_MaxRMF_B);		
	
//	$Calculator('#txt_Tax_Z11').val(getRMF());
	}
	
	}	
}

function showTaxError(x){
	if(x == 'off'){
		$Calculator('#divTaxError1').show();
		$Calculator('#divTaxError2').show();
		$Calculator('#divHideSubmenu').show();
		$Calculator('#divPages2').css('background-image', 'url(/PublishingImages/Tax/Thai/bg_title/tax2_notax.png)'); 
		$Calculator('#divPages1').css('background-image', 'url(/PublishingImages/Tax/Thai/bg_title/tax1_notax.png)'); 
	
		//onClickMenu();		
	}else{	
		$Calculator('#divTaxError1').hide();
		$Calculator('#divTaxError2').hide();
		$Calculator('#divHideSubmenu').hide();		
		$Calculator('#divPages2').css('background-image', 'url(/PublishingImages/Tax/Thai/bg_title/tax2.png)'); 
		$Calculator('#divPages1').css('background-image', 'url(/PublishingImages/Tax/Thai/bg_title/tax1.png)'); 
		
		//onClickMenu();
	}
}

var Amount_Rate = 0;
var Amount_Rate_2 = 0;
var Amount_Rate_3 = 0;

function calTAX(para_netincome){
		if (para_netincome <= taxMax[0]){
			tax = taxRate[0];
			Amount_Rate = taxRate[0];
			Amount_Rate_2 = taxRate[0];
			Amount_Rate_3 = taxRate[0];
		}else if ((para_netincome > taxMax[0]) && (para_netincome <= taxMax[1])) {
			tax = ((para_netincome - taxMax[0])*taxRate[1])/100;
			Amount_Rate = taxRate[1];
			Amount_Rate_2 = taxRate[1];
			Amount_Rate_3 = taxRate[1];
		}else if ((para_netincome > taxMax[1]) && (para_netincome <= taxMax[2])) {
			tax = ((taxMax[0]*taxRate[1])/100) + (((para_netincome - taxMax[1])*taxRate[2])/100);
			Amount_Rate = taxRate[2];
			Amount_Rate_2 = taxRate[2];
			Amount_Rate_3 = taxRate[2];
		}else if ((para_netincome > taxMax[2]) && (para_netincome <= taxMax[3])) {
			tax = ((taxMax[0]*taxRate[1])/100) + (((taxMax[2]-taxMax[1])*taxRate[2])/100) + (((para_netincome - taxMax[2])*taxRate[3])/100);
			Amount_Rate = taxRate[3];
			Amount_Rate_2 = taxRate[3];
			Amount_Rate_3 = taxRate[3];
		}else if ((para_netincome > taxMax[3]) && (para_netincome <= taxMax[4])) {
			tax = ((taxMax[0]*taxRate[1])/100) + (((taxMax[2]-taxMax[1])*taxRate[2])/100) + (((taxMax[3]-taxMax[2])*taxRate[3])/100) + (((para_netincome - taxMax[3])*taxRate[4])/100);
			Amount_Rate = taxRate[4];
			Amount_Rate_2 = taxRate[4];
			Amount_Rate_3 = taxRate[4];
		}else if ((para_netincome > taxMax[4]) && (para_netincome <= taxMax[5])) {
			tax = ((taxMax[0]*taxRate[1])/100) + (((taxMax[2]-taxMax[1])*taxRate[2])/100) + (((taxMax[3]-taxMax[2])*taxRate[3])/100) + (((taxMax[4]-taxMax[3])*taxRate[4])/100) + (((para_netincome - taxMax[4])*taxRate[5])/100);
			Amount_Rate = taxRate[5];
			Amount_Rate_2 = taxRate[5];
			Amount_Rate_3 = taxRate[5];
		}else if ((para_netincome > taxMax[5]) && (para_netincome <= taxMax[6])) {
			tax = ((taxMax[0]*taxRate[1])/100) + (((taxMax[2]-taxMax[1])*taxRate[2])/100) + (((taxMax[3]-taxMax[2])*taxRate[3])/100) + (((taxMax[4]-taxMax[3])*taxRate[4])/100) + (((taxMax[5]-taxMax[4])*taxRate[5])/100) + (((para_netincome-taxMax[5])*taxRate[6])/100);
			Amount_Rate = taxRate[6];
			Amount_Rate_2 = taxRate[6];
			Amount_Rate_3 = taxRate[6];
		}else{
			tax = ((taxMax[0]*taxRate[1])/100) + (((taxMax[2]-taxMax[1])*taxRate[2])/100) + (((taxMax[3]-taxMax[2])*taxRate[3])/100) + (((taxMax[4]-taxMax[3])*taxRate[4])/100) + (((taxMax[5]-taxMax[4])*taxRate[5])/100)+ (((taxMax[6]-taxMax[5])*taxRate[6])/100) + (((para_netincome-taxMax[6])*taxRate[7])/100);
			Amount_Rate = taxRate[7];
			Amount_Rate_2 = taxRate[7];
			Amount_Rate_3 = taxRate[7];
		}
		return tax;	
}

function calTAX_MAX(){
	// MAX LTF //
	var_MaxLTF = income*(15/100);
	var_MaxLTF = Math.min(500000, var_MaxLTF);
	var_MaxLTF = getMaxLTF();
	$Calculator('#output_MaxLTF').val(fn_addCommas(Math.ceil(var_MaxLTF)));	
	// --------------------- //

	// MAX RMF //
	var_MaxRMF_A = income*(15/100);
	var_MaxRMF_A = Math.min(500000, var_MaxRMF_A);
	
	var_MaxRMF_B = 500000 - (Math.min(A * D *12 ,500000));
	var_MaxRMF = Math.min(var_MaxRMF_A, var_MaxRMF_B);	
	//var_MaxRMF = getMaxRMF();
	$Calculator('#output_MaxRMF').val(fn_addCommas(Math.ceil(var_MaxRMF)));
	// --------------------- //
	
	// MAX Pension //
	var_Max_Pension_A = income*(15/100);
	var_Max_Pension_A = Math.min(200000, var_Max_Pension_A);
	var_Max_Pension_B = 500000 - (Math.min(A * D *12,500000));
	var_Max_Pension = Math.min(var_Max_Pension_A, var_Max_Pension_B);
	$Calculator('#output_MaxPension').val(fn_addCommas(Math.ceil(var_Max_Pension)));
	// --------------------- //
	
	// MAX RMF - Pension //
	var_Max_RMF_Pension_A = 500000 - (Math.min(A * D *12,500000));
	var_Max_RMF_Pension_B = var_MaxRMF + var_Max_Pension;
	var_Max_RMF_Pension_B = Math.max(var_Max_RMF_Pension_B, 0);
	var_Max_RMF_Pension = Math.min(var_Max_RMF_Pension_A, var_Max_RMF_Pension_B);
	$Calculator('#output_RMF_Pension').val(fn_addCommas((var_Max_RMF_Pension).toFixed(0)));
	
	// ----------------------- //
	
	var var_Max_NetincomeReduce = income - 60000 - 100000 - socialSec - (Math.min(A*D*12, 500000)) - (Z2*30000) - (Z3*30000)  - Z4 - Z5 - 100000 - getOthers() - var_MaxLTF - var_Max_RMF_Pension;
	var var_Max_Z8 = $Calculator('#txt_Tax_Z8').val().replace(/,/g, '');	
	var var_Real_Z8 = var_Max_Z8;

	var var_Max_Z8_New = var_Max_NetincomeReduce * 0.1;
	if(var_Max_Z8_New > var_Max_Z8){
		var_Max_Z8 = var_Max_Z8;
	}else{
		var_Max_Z8 = var_Max_Z8_New;
	}

	var var_Max_Netincome = var_Max_NetincomeReduce - var_Max_Z8;

	var var_output_TAX_3 = parseInt($Calculator('#output_TAX_3').val().replace(/,/g,''));
	if (var_output_TAX_3 == 0){
		$Calculator('#output_TAX_Invest').val(0);
	}
	
	$Calculator('#output_TAX_Save_Max').val(fn_addCommas(Math.abs(Math.ceil(var_output_TAX_3 - calTAX(var_Max_Netincome)))));	
	$Calculator('#output_TAX_Result').val(fn_addCommas(parseInt(calTAX(var_Max_Netincome))));
	$Calculator('#output_TAX_Save_Amount_Rate_3').val(Amount_Rate_3);	
	
	_X = var_MaxLTF + 100000 + var_Max_RMF_Pension;
	_Reduce = socialSec + 60000 + 100000 + (Z2*30000) + (Z3*30000) + Z4 + Z5 + getOthers();
	_IncomeReduce = income - (Math.min(A*D*12, 500000)) - _Reduce;
	
	var _MaxDonation = (_IncomeReduce-_X) * 0.1;
	if(var_Real_Z8 <= _MaxDonation){
		_MaxDonation = var_Real_Z8;
	}else{
		_MaxDonation = _MaxDonation;
	}
	
	_NetIncome = _IncomeReduce - _X - _MaxDonation;
	
	if(_IncomeReduce > 150000){
		if(_NetIncome < 150000){
			_NewX = _X - (150000 - _NetIncome);
			
			var _NewMaxDonation = (_IncomeReduce - _NewX) * 0.1;
			if(var_Real_Z8 <= _NewMaxDonation){
				_NewMaxDonation = var_Real_Z8;
			}else{
				_NewMaxDonation = _NewMaxDonation;
			}
			_NewNetIncome = _IncomeReduce - _NewX - _NewMaxDonation;
			while(_NewNetIncome < 150000){
				_NewX = _NewX - 1;
				_NewMaxDonation = (_IncomeReduce - _NewX) * 0.1;
				if(var_Real_Z8 <= _NewMaxDonation){
					_NewMaxDonation = var_Real_Z8;
				}else{
					_NewMaxDonation = _NewMaxDonation;
				}
				_NewNetIncome = _IncomeReduce - _NewX - _NewMaxDonation;
			}
			$Calculator('#output_TAX_Invest').val(fn_addCommas(Math.ceil(_NewX)));
			return;
		}else{
			$Calculator('#output_TAX_Invest').val(fn_addCommas(Math.ceil(_X)));
			return;
		}
	}else{
		$Calculator('#output_TAX_Invest').val(0);
	}
	return;
}
	
function fn_keepMAX_LTF_RMF(){		
	var_MaxLTF = income*(15/100);
	var_MaxLTF = Math.min(500000, var_MaxLTF);
	
	var_MaxRMF = income*(15/100);
	var var_New_RMF = 500000-reduce2;
	var_New_RMF = Math.max(var_New_RMF, 0);

	if(var_MaxRMF > var_New_RMF){
		var_MaxRMF = var_New_RMF;
	}
}

function fn_sel_plus(objName, varStep, varMax, varCal, varGroup){
	switch(varGroup) {
		 case 'group_Studying':
				if(currentSon < varMax){
					currentSon++;		
					x = parseInt($Calculator('#'+objName).val());
					$Calculator('#'+objName).val(x+1);				
					fn_calSon(objName, $Calculator('#'+objName).val(), varCal, varGroup);		
				}
			break;
		 case 'Group2':
				if(currentParent < varMax){
					currentParent++;
					x = parseInt($Calculator('#'+objName).val());
					$Calculator('#'+objName).val(x+1);
					fn_calSon(objName, $Calculator('#'+objName).val(), varCal, varGroup);		
				}
			break;
		 case 'Group3':
				if(currentParent2 < varMax){
					currentParent2++;
					x = parseInt($Calculator('#'+objName).val());
					$Calculator('#'+objName).val(x+1);
					fn_calSon(objName, $Calculator('#'+objName).val(), varCal, varGroup);		
				}
			break;
		 case 'Group4':
				if(currentFund < varMax){
					currentFund++;
					x = parseFloat($Calculator('#'+objName).val());
					$Calculator('#'+objName).val(x+varStep);
					fn_calSon(objName, $Calculator('#'+objName).val(), currentFund, varGroup);
					calMainTax();
				}		
			break;	
	}
}

function fn_sel_erease(objName, varStep, varMin, varCal, varGroup){
	switch(varGroup) {
		 case 'group_Studying':	
				if(currentSon > varMin && $Calculator('#'+objName).val() != 0){
					currentSon--;
					x = parseInt($Calculator('#'+objName).val());
					$Calculator('#'+objName).val(x-1);
					fn_calSon(objName, $Calculator('#'+objName).val(), varCal, varGroup);
				}
			break;
		 case 'Group2':
				if(currentParent > varMin && $Calculator('#'+objName).val() != 0){
					currentParent--;
					x = parseInt($Calculator('#'+objName).val());
					$Calculator('#'+objName).val(x-1);
					fn_calSon(objName, $Calculator('#'+objName).val(), varCal, varGroup);
				}
			break;
		 case 'Group3':
				if(currentParent2 > varMin && $Calculator('#'+objName).val() != 0){
					currentParent2--;
					x = parseInt($Calculator('#'+objName).val());
					$Calculator('#'+objName).val(x-1);
					fn_calSon(objName, $Calculator('#'+objName).val(), varCal, varGroup);
				}
			break;
		 case 'Group4':
				if(currentFund > varMin && $Calculator('#'+objName).val() != 0){
					currentFund--;
					x = parseFloat($Calculator('#'+objName).val());
					$Calculator('#'+objName).val(x-varStep);
					fn_calSon(objName, $Calculator('#'+objName).val(), currentFund, varGroup);
					calMainTax();
				}
			break;		
	} 		
}

function fn_calSon(objName, x, rate, varGroup){	
	if(varGroup == 'group_Studying'){
		sonSum = (parseInt($Calculator('#input_Children_StudyingShowOnly').val()) + parseInt($Calculator('#input_Children_Non_StudyingShowOnly').val()));
		$Calculator('#input_Children_StudyingSum').val(sonSum);
		$Calculator('#'+objName+'ShowOnly').val(fn_addCommas(x * rate));
	}
	
	if(varGroup == 'Group2' || varGroup == 'Group3'){
		parentSum = (currentParent + currentParent2) * rate;
		$Calculator('#input_Parental_CareSum').val(fn_addCommas(parentSum));

		$Calculator('#txt_Tax_DShowOnly').val(fn_addCommas(parentSum * (currentFund/100)));
	}
	
	if(varGroup == 'Group4'){
		x = parentSum;
		$Calculator('#'+objName+'ShowOnly').val(fn_addCommas(x * (currentFund/100)));
	}
	calMainTax();
}

/* 
################################################################################################################################################
################################################################################################################################################
*/
function getIncome(){
	return parseInt(A*12) + parseInt(B) + parseInt(C);
}

function getSSO(){
	if (A > 0) {
		return Math.min(((A*12)*0.05), 9000);
	}else{
		return 0;
	}
}

function getReduce1(){
	return Math.min(100000, (getIncome() * 0.5));
}

function getPVD(){
	return Math.min(500000, (D*A*12));
}

function getHome(){
	return Math.min(100000,Z4);
}

function getHealthMother(){
	return Math.min(15000,Z5);
}

function getHealth(){
	return Math.min(100000,Z6);
}

function getPension(){
	Z7 = parseInt($Calculator('#txt_Tax_Z7').val().replace(/,/g,''));
	
	Z7_0 = Math.min(Z7, (0.15*getIncome()));
	Z7_1 = Math.min(200000, Z7_0);
	Z7_2 = Math.min(500000-PVD-Z11, Z7_1);
	Z7_3 = Math.min(Z7_1,Z7_2);

	ins1 = Z7;
	ins2 = Math.min(getIncome()*0.15, Z7);
	ins3 = 500000-getPVD()-getRMF();
	ins4 = Math.min(Math.min(ins1, ins2),ins3);
	
	$Calculator('#txt_Tax_Z7').val(fn_addCommas(parseInt(ins4)));
	$Calculator('#txt_Tax_Z11').val(fn_addCommas(parseInt(getRMF()))); 
	
	return ins4;	
}

function getMaxInsure60(){
	return Math.min(Math.min(getIncome()*0.15, 500000-getPVD()),200000);
}

function getOthers(){
	return Math.min(500000,Z9);
}

function getDonate(){
	var gDonate = Math.min((getIncome()-getTotalReduce()-getRMF()-getLTF())*0.1,Z8);
	return gDonate;
}

function getMaxDonate(){
	var var_output_RMF_Pension = parseInt($Calculator('#output_RMF_Pension').val().replace(/,/g,''));
	var var_output_MaxPension = parseInt($Calculator('#output_MaxPension').val().replace(/,/g,''));
	var gMaxDonate = Math.min((getIncome()-getTotalReduce()-(getMaxRMF()-var_output_MaxPension)-getMaxLTF())*0.1,Z8);
	return gMaxDonate;
}
	
function getTotalReduce(){
	return 60000+getReduce1()+9000+getPVD()+(Z2*30000)+(Z3*30000)+getHome()+getHealthMother()+getHealth()+getOthers()+getPension()+getLTF();getRMF();	
}

function getLTF(){
	LTF1 = Math.min(getMaxLTF(), getIncome()*0.15);
	
	// Ver .5
	$Calculator('#txt_Tax_Z10').val(fn_addCommas(parseInt(Math.min(Z10, LTF1))));
	return Math.min(Z10, LTF1);
}

function getMaxLTF(){	
	return Math.min(500000, getIncome()*0.15);	 
}

function getRMF(){
	if ((getIncome()*0.15)>Z11){
		RMF1 = Z11;
	}else{
		RMF1 = getIncome()*0.15
	}
	
	RMF2 = Math.min(getIncome()*0.15,500000-getPVD());
	// MAX RMF //
			
	return Math.min(RMF2, RMF1);	
}

function getMaxRMF(){

	return Math.min(getIncome()*0.15,500000-getPVD());
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

//###############################################################

function LoadTaxFromList(){		

taxMax[0] = 150000;
taxMax[1] = 300000;
taxMax[2] = 500000;
taxMax[3] = 750000;	
taxMax[4] = 1000000;
taxMax[5] = 2000000;
taxMax[6] = 5000000;

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
