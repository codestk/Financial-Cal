var $Retirement = jQuery.noConflict();
var showError=0;
var inflationRate = 0;
var afterRetireRate = 0;
var referenceRate  = 0;
var termRate = 0;

$Retirement(document).ready(function(e) {
$Calculator('#divButtonDisc').fadeIn('slow');
//$Calculator('#divButtonDisc').offset().top;
$Calculator('#divButtonDisc').hover(function(){	
	$Calculator('#divDiscContent').show();
});

$Calculator('#divDiscContent, #divButtonDisc').mouseout(function(){
	$Calculator('#divDiscContent').hide();
});	
	$Retirement('input').focusout(function(){
		fn_Retirement();
	});
	
	$Retirement('input').keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($Retirement.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
             // Allow: Ctrl+A, Command+A
            (e.keyCode == 65 && ( e.ctrlKey === true || e.metaKey === true ) ) || 
             // Allow: home, end, left, right, down, up
            (e.keyCode >= 35 && e.keyCode <= 40)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
        	$Retirement(this).css('background','none');
            e.preventDefault();
        }
    }); 	

	$Retirement('input').focusin(function(){
			temp_Income = $Retirement(this).val().replace(/,/g, '');
			$Retirement(this).val($Retirement(this).val().replace(/,/g, ''));	
	});

	$Retirement('input').focusout(function(){
			//if(!($Retirement.isNumeric($Retirement(this).val()))){
			//	$Retirement(this).val();
			//	$Retirement(this).css('background','none');
			//}
			
			temp_Income = $Retirement(this).val()*1;
			
			$Retirement(this).val(fn_addCommas($Retirement(this).val()*1));
			if(temp_Income == '' || isNaN(temp_Income)){
				$Retirement(this).val(0);
			}
	});	
	
	fn_init();
	
});

function fn_init(){
	$Retirement('#divContent input').val(0);
	
	$Retirement('#txt_RT_A').val(30); //อายุของคุณ
	$Retirement('#txt_RT_B').val(60); //อายุตอนเกษียณ
	$Retirement('#txt_RT_C').val(80); //อยู่จนถึงอายุ
	$Retirement('#txt_RT_D').val('20,000'); //หลังเกษียณอยากใช้เงินเดือนละ
	$Retirement('#txt_RT_F').val(0); //มีเงินออมไว้แล้ว
	$Retirement('#txt_RT_E').val(3); //ผลตอบแทนต่อปี
	$Retirement('#txt_RT_U').val(0); //ต้องการออมเพิ่มขึ้นปีละ	
	
    fn_Retirement();	
}

function Retire_changeSubMenu(x){
	$Retirement('.css_DivRetire').hide();
	if(x == 0){
		fn_init();		
		x = 1;
	}
	$Retirement('#divRetirement' + x + '').fadeIn();		
	switch(x) {
	    case 1:
			$Retirement('#divChildCursor').css('left','180px');
	       break;
	    case 2:
			$Retirement('#divChildCursor').css('left','368px');
	       break;
	    case 3:
			$Retirement('#divChildCursor').css('left','565px');
	       break;
	    case 4:
			$Retirement('#divChildCursor').css('left','740px');
	       break;
	} 	
}

function fn_Retirement(){
fn_LoadInflationRateFromList();
//##################### รับค่า #####################
	
	var a = $Retirement('#txt_RT_A').val(); //อายุของคุณ
	var b = $Retirement('#txt_RT_B').val(); //อายุตอนเกษียณ
	var c = $Retirement('#txt_RT_C').val(); //อยู่จนถึงอายุ
	var d = $Retirement('#txt_RT_D').val().replace(/,/g, ''); //หลังเกษียณอยากใช้เงินเดือนละ
	var f = $Retirement('#txt_RT_F').val().replace(/,/g, ''); //มีเงินออมไว้แล้ว
	var e = $Retirement('#txt_RT_E').val().replace(/,/g, ''); //ผลตอบแทนต่อปี
	var u = $Retirement('#txt_RT_U').val().replace(/,/g, ''); //ต้องการออมเพิ่มขึ้นปีละ
	
	var j1 = $Retirement('#txt_J1').val().replace(/,/g, ''); //ยอดสะสม ณ ปุจจุบัน
	var j2 = $Retirement('#txt_J2').val().replace(/,/g, ''); //เงินเดือน	
	var j3 = $Retirement('#txt_J3').val().replace(/,/g, ''); //อัตราสะสมกองทุนสำรองเลี้ยงชีพ
	var j4 = $Retirement('#txt_J4').val().replace(/,/g, ''); //อัตราเพิ่มขึ้นของเงินเดือน
	var j5 = $Retirement('#txt_J5').val().replace(/,/g, ''); //ผลตอบแทนต่อปีที่คาดหวัง
	
	var m1 = $Retirement('#txt_M1').val().replace(/,/g, ''); //ยอดสะสม ณ ปุจจุบัน
	var m2 = $Retirement('#txt_M2').val().replace(/,/g, ''); //คาดว่าจะสะสมทุกปี ปีละ
	var m3 = $Retirement('#txt_M3').val().replace(/,/g, ''); //ผลตอบแทนต่อปีที่คาดหวัง
	
	var k1 = $Retirement('#txt_K1').val().replace(/,/g, ''); //คาดว่าจะสะสมทุกปี
	var k2 = $Retirement('#txt_K2').val().replace(/,/g, ''); //ผลตอบแทนต่อปีที่คาดหวัง
	var k3 = $Retirement('#txt_K3').val().replace(/,/g, ''); //เงินที่คาดว่าจะได้
	
//##################### เช็ค Min-Max #####################
	if (a > 120){a=120;$Retirement('#txt_RT_A').val(a);}
	if (a < 0){a=0;$Retirement('#txt_RT_A').val(a);}

	if (b > 120){b=120;$Retirement('#txt_RT_B').val(b);}
	if (b < 0){b=0;$Retirement('#txt_RT_B').val(b);}
	
	if (a > b){a=b;$Retirement('#txt_RT_A').val(b);}
	
	if (c > 120){c=120;$Retirement('#txt_RT_C').val(c);}
	if (c < 0){c=0;$Retirement('#txt_RT_C').val(c);}

	if (d > 99999999999){d=99999999999;$Retirement('#txt_RT_D').val(d);}
	if (d < 0){d=0;$Retirement('#txt_RT_D').val(d);}
	
	if (f > 99999999999){f=99999999999;$Retirement('#txt_RT_F').val(f);}
	if (f < 0){f=0;$Retirement('#txt_RT_F').val(f);}
	
	if (e > 100){e=100;$Retirement('#txt_RT_E').val(e);}
	if (e < 0){e=0;$Retirement('#txt_RT_E').val(e);}
	
	if (u > 100){u=100;$Retirement('#txt_RT_U').val(u);}
	if (u < 0){u=0;$Retirement('#txt_RT_U').val(u);}
	
	if (j1 > 99999999999){j1=99999999999;$Retirement('#txt_J1').val(j1);}
	if (j1 < 0){j1=0;$Retirement('#txt_J1').val(j1);}	

	if (j2 > 99999999999){j2=99999999999;$Retirement('#txt_J2').val(j2);}
	if (j2 < 0){j2=0;$Retirement('#txt_J2').val(j2);}		
	
	if (j3 > 15){j3=15;$Retirement('#txt_J3').val(j3);}
	if (j3 < 0){j3=0;$Retirement('#txt_J3').val(j3);}		
	
	if (j4 > 100){j4=100;$Retirement('#txt_J4').val(j4);}
	if (j4 < 0){j4=0;$Retirement('#txt_J4').val(j4);}		
	
	if (j5 > 100){j5=100;$Retirement('#txt_J5').val(j5);}
	if (j5 < 0){j5=0;$Retirement('#txt_J5').val(j5);}					

	if (m1 > 50000000){m1=50000000;$Retirement('#txt_M1').val(m1);}
	if (m1 < 0){m1=0;$Retirement('#txt_M1').val(m1);}	

	if (m2 > 500000){m2=500000;$Retirement('#txt_M2').val(m2);}
	if (m2 < 0){m2=0;$Retirement('#txt_M2').val(m2);}		
	
	if (m3 > 30){m3=30;$Retirement('#txt_M3').val(m3);}
	if (m3 < 0){m3=0;$Retirement('#txt_M3').val(m3);}	

	if (k1 > 99999999999){k1=99999999999;$Retirement('#txt_K1').val(k1);}
	if (k1 < 0){k1=0;$Retirement('#txt_K1').val(k1);}	

	if (k2 > 100){k2=100;$Retirement('#txt_K2').val(k2);}
	if (k2 < 0){k2=0;$Retirement('#txt_K2').val(k2);}		
	
	if (k3 > 99999999999){k3=99999999999;$Retirement('#txt_K3').val(k3);}
	if (k3 < 0){k3=0;$Retirement('#txt_K3').val(k3);}	
	
	
	
// Ver 2.0	
	var rArray1 = [];
	var rArray2 = [];
	var rY = 0; 
	var rZ = b-a;
//	

	for (i = 0; i < rZ; i++) {
		rArray1[i+1] = Math.pow(1+(e/100)/12, (rZ-(i+1))*12);
	}

	for (i = 0; i < rZ; i++) {
		rArray2[i+1] = Math.pow(1+(u/100), ((i+1)-1));
	}
	
	for (i = 0; i < rZ; i++) {
		rY += (rArray1[i+1]*rArray2[i+1]);
	}

e=e/100;

//var afterRetireRate = 3;
//var inflationRate = 3;

var rr = parseFloat(afterRetireRate/100);
var ri = parseFloat(inflationRate/100);

	$Retirement('#txt_show_rate1, #txt_show_rate2, #txt_show_rate3, #txt_show_rate4').val(parseFloat(inflationRate) + '%');
	$Retirement('#txt_show_rate_retirement1, #txt_show_rate_retirement2, #txt_show_rate_retirement3, #txt_show_rate_retirement4').val(parseFloat(afterRetireRate) + '%');
// Result
var rate = ri;
var nper = (b-a);
var pvx = -(d);
var pmt = 0;
var type = 0;
var v2_G = fn_fv_Change_Retire(rate, nper, pvx, pmt, type);

var rate = e;
var nper = (b-a);
var pvx = (f);
var n = fn_fv_Retire(rate, nper, pvx);
	
var rate = ((1+(parseFloat(rr)/12))/(1+(parseFloat(ri)/12)))-1;
var nper = (parseFloat(c) - parseFloat(b))*12;
var pmt = -(parseFloat(v2_G));
var fvx = 0;
var type = 0;
var v2_H = fn_pv_Change_Retire(rate, nper, pmt, fvx, type);

$Retirement('.cssOutCB').val(c-b);

var rate = e/12;
var nper = parseInt((b-a)*12);
//var pvx = 0;
var pvx = f;
var fvx = -(v2_H-n);
//var fvx = -f;
var type= 0;
//var i = fn_pmt_from_chang(rate, nper, pvx, fvx, type);
var i = fn_fv_Retire(rate, nper, pvx);	
	
var YY = (Math.pow(1+(j4/100),1/12)-1)*12;
var rM = (b-a)*12;

// สูตร PMT
j5 = j5/100;
var rFV = fn_fv_Change_Retire(j5, b-a, -j1, 0, 0);
var rFVPMT = (j2*(j3/100))*(1+(j5/12));
rFVPMT = rFVPMT *(Math.pow(1+(j5/12),rM) - Math.pow(1+(YY/12),rM));
rFVPMT = rFVPMT / ((j5/12)-(YY/12));
if (isNaN(rFVPMT)) {
	rFVPMT = 0;
}

// สูตร RMF
m3 = m3/100;
// fn_fv_Change_Retire(rate, nper, pv, pmt, type){
var rFVRMF = fn_fv_Change_Retire(m3, b-a, -m1, -m2, 0);
if (isNaN(rFVRMF)) {
	rFVRMF = 0;
}

// สูตร เงินสะสมเพื่อเกษียณ
k2 = k2/100;
var rFVSSK = parseFloat(fn_fv_Change_Retire(k2, b-a, 0, -k1, 0)) + parseFloat(k3);

if (isNaN(rFVSSK)) {
	rFVSSK = 0;
}
	
var rPMT = ((v2_H-(parseFloat(i)+rFV+rFVPMT+rFVRMF+rFVSSK))/rY) * (rate) /(1+rate)/ ((Math.pow(1+(rate),12))-1);
	var result_i = rPMT;


$Retirement('.cssOutI').val(fn_addCommas(parseFloat(Math.ceil(result_i)).toFixed(0)));
$Retirement('.cssOutG').val(fn_addCommas(parseFloat(Math.ceil(v2_G)).toFixed(0)).toString()+'*');
$Retirement('.cssOutH').val(fn_addCommas(parseFloat(Math.ceil(v2_H)).toFixed(0)));
showError = 0;
	
// x < 0
	if (result_i <= 0){
			$Retirement('#txtError').val(result_i);
			showError = 1;
			$Retirement('.cssError').show();
			$Retirement('.cssErrorH').val(fn_addCommas(Math.abs(Math.ceil(v2_H))));		
			$Retirement('.cssErrorG').val(fn_addCommas(Math.abs(Math.ceil(v2_G))).toString()+'*');				
	}else{
			$Retirement('.cssError').hide();	
	}

// x = infinity
	if (result_i == 'Infinity'){
		$Retirement('#txtError').val(result_i);		
		showError = 1;				
		$Retirement('.cssInfinity').show();
		$Retirement('.cssInifG').val(fn_addCommas(parseFloat(Math.ceil(v2_G)).toFixed(0)).toString()+'*');
		$Retirement('.cssInifError').val(fn_addCommas(Math.abs(Math.ceil(v2_H))));	
	}else{
		$Retirement('.cssInfinity').hide();	
	}
	
	if (e == 0){
		$Retirement('#txtError').val('0');				
		showError = 1;				
		$Retirement('.cssNan').show();
		$Retirement('.cssNanG').val(fn_addCommas(parseFloat(Math.ceil(v2_G)).toFixed(0)).toString()+'*');
		$Retirement('.cssNanH').val(fn_addCommas(parseFloat(Math.ceil(v2_H)).toFixed(0)));
		$Retirement('.cssNanCB').val(c-b);
	}else{
		$Retirement('.cssNan').hide();	
	}

/*	
	if ((v2_H <= 0) || (i <= 0) || (isNaN(i)) || (isNaN(v2_H))){
		$Retirement('#divError').show();
	}else{
		$Retirement('#divError').hide();
	}	
*/
}

function fn_fv_Retire(rate, nper, pv){
	return parseFloat((pv*Math.pow(1+rate,nper))).toFixed(2);
}

function fn_fv_Change_Retire(rate, nper, pv, pmt, type){
	if (rate == 0){
		return (-1*(pv+pmt*nper));
	}else{
		return ((pmt*(1+rate*type)*(1-Math.pow((1+rate),nper))/rate)-pv*Math.pow((1+rate),nper));
	}
}

function fn_pv_Change_Retire(rate, nper, pmt, fv, type){
	if (rate==0){
		return (-fv -(pmt*nper));
	}else{
		return ((pmt*(1.0+rate*type)*(1- Math.pow((1+rate),nper))/rate-fv)/Math.pow((1+rate),nper));
    }
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

function fn_LoadInflationRateFromList(){		
/*	inflationRate = parseFloat(3);
	afterRetireRate = parseFloat(3);
	referenceRate  = parseFloat(3);
	termRate = parseFloat(3);
*/
	var index = 0;
	var strCAML = '<Query></Query>';
	$LandingPage().SPServices({		
        operation: 'GetListItems',
		webURL: window.location.protocol + '//' + window.location.host + '/' + 'Emquartier/Surface/',
		//webURL: 'http://www.bangkokbank.com/Emquartier/Surface/',
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
