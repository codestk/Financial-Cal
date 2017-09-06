//###############################################################
//###############################################################
//###################### Function Healthy Money ######################
//###############################################################
//###############################################################
var idChartOld = 0;
var $Healthy = jQuery.noConflict();
var Global_strID_Hide = 1;
var varRad_Child = 0;
var var_Check_Result;

$Healthy(document).ready(function (e) {
    $Calculator('#divButtonDisc').fadeIn('slow');
    //$Calculator('#divButtonDisc').offset().top;
    $Calculator('#divButtonDisc').hover(function () {
        $Calculator('#divDiscContent').show();
    });

    $Calculator('#divDiscContent, #divButtonDisc').mouseout(function () {
        $Calculator('#divDiscContent').hide();
    });

    checkKeyboard();
    $Healthy('#txt_hl_Result_11').hide;

    $Healthy('#divHealthy_Input_1 input').focusout(function () {
        checkRange('txt_hl_Age_Now', 120, 20);
        checkRange('txt_hl_Age_Start', 120, 20);

        var varAge_Now = parseInt($Healthy('#txt_hl_Age_Now').val());
        var varAge_Start = parseInt($Healthy('#txt_hl_Age_Start').val());

        if (varAge_Now < varAge_Start) {
            $Healthy('#txt_hl_Age_Now').val(varAge_Start);
        }
    });

    $Healthy('#divHealthy_Input_2 input').focusout(function () {
        var hl_asset = parseInt($Healthy('#txt_hl_asset').val().replace(/,/g, ''));
        var hl_quick_assets = parseInt($Healthy('#txt_hl_quick_assets').val().replace(/,/g, ''));

        if (hl_quick_assets > hl_asset) {
            $Healthy('#txt_hl_quick_assets').val(fn_addCommas(hl_asset));
        }
    });

    resetTextbox();
});

//##################### เช็ค Min-Max #####################
function checkRange(varID, varMax, varMin) {
    var varX = $Healthy('#' + varID).val().replace(/,/g, '');
    if (varX > varMax) {
        varX = varMax;
        $Healthy('#' + varID).val(varX);
    }
    if (varX < varMin) {
        varX = varMin;
        $Healthy('#' + varID).val(varX);
    }
}
//######################################################

function resetTextbox() {
    $Healthy('#txt_hl_Age_Now').val(20);
    $Healthy('#txt_hl_Age_Start').val(20);

    $Healthy('#txt_hl_income').val('0');
    $Healthy('#txt_hl_expenses').val('0');
    $Healthy('#txt_hl_mortgage').val('0');
    $Healthy('#txt_hl_car').val('0');
    $Healthy('#txt_hl_saving').val('0');

    $Healthy('#txt_hl_start').val('0');
    $Healthy('#txt_hl_asset').val('0');
    $Healthy('#txt_hl_quick_assets').val('0');
    $Healthy('#txt_hl_debit').val('0');
}

var hl_income_public;
var hl_car_public;

function calHealthy() {
    var hl_Age_Now = $Healthy('#txt_hl_Age_Now').val().replace(/,/g, '');
    var hl_Age_Start = $Healthy('#txt_hl_Age_Start').val().replace(/,/g, '');

    var hl_income = $Healthy('#txt_hl_income').val().replace(/,/g, '');
    hl_income_public = hl_income;

    var hl_expenses = $Healthy('#txt_hl_expenses').val().replace(/,/g, '');
    var hl_mortgage = $Healthy('#txt_hl_mortgage').val().replace(/,/g, '');
    var hl_car = $Healthy('#txt_hl_car').val().replace(/,/g, '');
    hl_car_public = hl_car;

    var hl_saving = $Healthy('#txt_hl_saving').val().replace(/,/g, '');

    var hl_start = $Healthy('#txt_hl_start').val().replace(/,/g, '');
    var hl_asset = $Healthy('#txt_hl_asset').val().replace(/,/g, '');
    var hl_quick_assets = $Healthy('#txt_hl_quick_assets').val().replace(/,/g, '');

    var hl_debit = $Healthy('#txt_hl_debit').val().replace(/,/g, '');

    var allSum = parseFloat(hl_expenses) + parseFloat(hl_car) + parseFloat(hl_mortgage);
    if (allSum < 1) {
        allSum = 1;
    }

    var var_Result_1 = (hl_quick_assets / allSum).toFixed(2);
    var var_Selected_1;

    $Healthy('.classSon').hide();
    $Healthy('.classGraph').hide();
    var varMark = $Healthy('input[name=rad_Child]:checked').val();
    $Healthy('#healthy_bg_3_1_' + varMark).show();
    $Healthy('#healthy_bg_3_1_graph_' + varMark).show();
    var child_Checked = 0;
    if ($Healthy("#rad_Child").is(":checked")) {
        $Healthy('#divChild').css('display', 'block');
        child_Checked = 0;
    }
    else {
        $Healthy('#divChild').css('display', 'none');
        child_Checked = 1;
    }

    var var_Result_Value;
    var zz;
    var yy;
    var minX, maxX;

    if (child_Checked == 1) {
        zz = parseInt((3 * (parseInt(hl_expenses) + parseInt(hl_mortgage) + parseInt(hl_car))) - parseInt(hl_quick_assets));
        yy = parseInt(parseInt(hl_quick_assets) - (6 * (parseInt(hl_expenses) + parseInt(hl_mortgage) + parseInt(hl_car))));
        minX = 3;
        maxX = 6;
    } else {
        zz = parseInt((6 * (parseInt(hl_expenses) + parseInt(hl_mortgage) + parseInt(hl_car))) - parseInt(hl_quick_assets));
        yy = parseInt(parseInt(hl_quick_assets) - (12 * (parseInt(hl_expenses) + parseInt(hl_mortgage) + parseInt(hl_car))));
        minX = 6;
        maxX = 12;
    }

    var var_Result_Value = Math.abs(zz - yy);
    $Healthy('#txt_hl_Result_1').show();
    //$Healthy('#divHealthy_Output_1 #divEmo').css('left','500px');
    //$Healthy('#divHealthy_Output_1 #divEmo').css('top','55px');

    if ((hl_expenses == 0) && (hl_quick_assets > 0)) {
        var_Selected_1 = 2;
        $Healthy('#txt_hl_Result_1').hide();
        $Healthy('#txt_Result_Value').hide();
        //$Healthy('#divHealthy_Output_1 #divEmo').css('background-image','url(/PublishingImages/Tax/emo2.png)');
        //$Healthy('#divHealthy_Output_1 #divEmo').css('left','320px');
        //$Healthy('#divHealthy_Output_1 #divEmo').css('top','105px');
        //$Healthy('#divHealthy_Output_1 #divResultContent').css('background-image','url(/PublishingImages/Tax/Thai/bg_title/result1/content2_noval.png)');
        //ไม่มีค่าใช้จ่าย
        $Healthy('#divHealthy_Output_1 #divEmo').css('background-image', 'url(/PublishingImages/Tax/emo' + var_Selected_1 + '.png)');
        $Healthy('#divEmo').addClass('iconCenter');
        $Healthy('#divEmo').removeClass('iconCorner');

        // $Healthy('#divHealthy_Output_1 #msg').text('คุณมีสินทรัพย์สภาพคล่องมากเกินไป ทำให้คุณเสียโอกาสที่จะได้รับผลตอบแทนจากเงินส่วนเกินดังกล่าว แนะนำให้นำสภาพคล่องส่วนเกินไปลงทุนเพื่อสร้างโอกาสในการรับผลตอบแทนที่สูงขึ้น');
    } else {
        if (var_Result_1 < minX) {
            //$Healthy('#divHealthy_Output_1 #divLine').css('top', '255px');
            //Low
            $Healthy('#divHealthy_Output_1 #divLine').css('top', '170px');
            if (var_Result_1 == 0) {
                var_Selected_1 = 4;
                $Healthy('#txt_Result_Value').hide();
                fn_Infinity(1);
            } else {
                var_Selected_1 = 3;
                $Healthy('#txt_Result_Value').show();
                $Healthy('#txt_Result_Value').val(fn_addCommas(parseInt(zz)));
            }
        } else if (minX <= var_Result_1 && var_Result_1 <= maxX) {
            //Mid
            var_Selected_1 = 1;
            //$Healthy('#divHealthy_Output_1 #divLine').css('top', '185px');
            $Healthy('#divHealthy_Output_1 #divLine').css('top', '104');
            $Healthy('#txt_Result_Value').hide();
        } else if (maxX < var_Result_1) {
            var_Selected_1 = 2;
            //$Healthy('#divHealthy_Output_1 #divLine').css('top', '115px');
            //High
            $Healthy('#divHealthy_Output_1 #divLine').css('top', '33px');

            $Healthy('#txt_Result_Value').show();
            $Healthy('#txt_Result_Value').val(fn_addCommas(parseInt(yy)));
        }

        $Healthy('#divHealthy_Output_1 #divEmo').css('display', 'none');
        $Healthy('#divHealthy_Output_1 #divResultContent').css('display', 'none');

        $Healthy('#divHealthy_Output_1 #divEmo').stop().fadeIn(800);
        $Healthy('#divHealthy_Output_1 #divResultContent').stop().fadeIn(800);

        //$Healthy('#divHealthy_Output_1 #divResultContent').css('background-image','url(/PublishingImages/Tax/Thai/bg_title/result1/content' + var_Selected_1 + '.png)');

        //$Healthy('#divHealthy_Output_1 #divResultContent').css('background-image','url(/PublishingImages/Tax/Thai/bg_title/result1/content' + var_Selected_1 + '.png)');

        //Set Error

        var _msg = ''
        var _advice = '';

        if ((var_Selected_1 == 4) || (var_Selected_1 == 3)) {
            _msg = 'คุณมีสินทรัพย์สภาพคล่องน้อยกว่ามาตรฐาน ซึ่งอาจจะไม่เพียงพอในการใช้จ่ายกรณีฉุกเฉินครวรีบสำรองสินทรัพย์สภาพคล่องเพิ่มเติม';
            _advice = 'ข้อแนะนำ: ควรเพิ่มสินทรัพย์สภาพคล่องอีกประมาณ';
        } else if (var_Selected_1 == 2) {
            _msg = 'คุณมีสินทรัพย์สภาพคล่องมากเกินไป ทำให้คุณเสียโอกาศที่จะได้รับผลตอบแทนากเงินส่วนเกินดังกล่าว แนะนำให้นำสภาพคล่องส่วนเกินไปลงทุนเพื่อสร้างโอกาศในการรับผลตอบแทนที่สูงขึ้น';
            _advice = 'ข้อแนะนำ: ควรลดสินทรัพย์สภาพคล่องอีกประมาณ';
        } else {
            _msg = 'คุณมีสินทรัพย์สภาพคล่องอยู่ในเกณฑ์เหมาะสมแล้ว';
            _advice = '';
        }

        //if ((var_Selected_1 == 3) || (var_Selected_1 == 2)) {
        //4 คือไม่มี
        if ((var_Selected_1 != 4)) {
            //แนะนำ
            $Healthy('#divHealthy_Output_1 #lbladvice').text(_advice);

            //Move Top icon
            $Healthy('#divEmo').removeClass('iconCenter');
            $Healthy('#divEmo').addClass('iconCorner');
        }

        $Healthy('#divHealthy_Output_1 #lblmsg').text(_msg);

        if (var_Selected_1 == 4) {
            $Healthy('#divHealthy_Output_1 #divEmo').css('background-image', 'url(/PublishingImages/Tax/emo3.png)');
        } else {
            $Healthy('#divHealthy_Output_1 #divEmo').css('background-image', 'url(/PublishingImages/Tax/emo' + var_Selected_1 + '.png)');
        }

        fn_Counter1('1', var_Result_1);

        // Tab 2---------------------------------------------------------------------------

        var var_Result_2 = ((parseInt(hl_debit) / parseInt(hl_asset)) * 100).toFixed(2);
        $Healthy('#txt_hl_Result_2').show();
        if (isNaN(var_Result_2)) {
            var_Result_2 = 0;
        } else if (!$Healthy.isNumeric(var_Result_2)) {
            var_Result_2 = 999;
        }
         
        gen_HL_Graph(var_Result_2, '2', 50);
        //----------------------------------------------------------------------------------

        var var_Result_3 = (((parseInt(hl_mortgage) + parseInt(hl_car)) / parseInt(hl_income)) * 100).toFixed(2);
        $Healthy('#txt_hl_Result_3').show();
        if (isNaN(var_Result_3)) {
            var_Result_3 = 0;
        } else if (!$Healthy.isNumeric(var_Result_3)) {
            var_Result_3 = 999;
        }
        gen_HL_Graph(var_Result_3, '3', 40);

        var var_Result_4 = ((parseInt(hl_car) / parseInt(hl_income)) * 100).toFixed(2);
        //if (isNaN(var_Result_4)) {
        //	var_Result_4 = 0;
        //}
        $Healthy('#txt_hl_Result_4').show();
        if (isNaN(var_Result_4)) {
            var_Result_4 = 0;
        } else if (!$Healthy.isNumeric(var_Result_4)) {
            var_Result_4 = 999;
        }

        gen_HL_Graph(var_Result_4, '4', 15);

        var var_Result_5 = ((parseInt(hl_saving) / parseInt(hl_income)) * 100).toFixed(2);
        //if (isNaN(var_Result_5)) {
        //	var_Result_5 = 0;
        //}

        $Healthy('#txt_hl_Result_5').show();
        if (isNaN(var_Result_5)) {
            var_Result_5 = 0;
        } else if (!$Healthy.isNumeric(var_Result_5)) {
            var_Result_5 = 999;
        }

        gen_HL_Graph(var_Result_5, '5', 10);

        var var_diff_age = parseInt(hl_Age_Now) - parseInt(hl_Age_Start);
        var var_sum_income = ((parseInt(hl_income) + parseInt(hl_start)) / 2) * 12;
        var var_Result_6 = (var_diff_age * var_sum_income) * (1 / 3);
        fn_Counter1('6', var_Result_6);

        var_Check_Result = var_Result_1;

        $Healthy('#txt_hl_Result_1').val(fn_addCommas(var_Result_1));
        $Healthy('#txt_hl_Result_6').val(fn_addCommas(parseInt(var_Result_6)));
    }
}

function gen_HL_Graph(varPercent, varID, varBase) {
    var pos_Line;
    var varResult = varPercent;
    var var_Selected_1;

    if (varPercent > 100) {
        varPercent = 100;
    } else if (varPercent < 0) {
        varPercent = 0;
    }

       
    //pos_Line = 290 - ((varPercent / 100) * 211);
    if (varPercent == 0) {
        pos_Line = 200;
    } else {
        pos_Line = 200 - ((varPercent / 100) * (200));
    }
    //$Healthy('#divHealthy_Output_' + varID + ' #divEmo').css('left', '500px');
    //$Healthy('#divHealthy_Output_' + varID + ' #divEmo').css('top', '55px');

    //$Healthy('#divHealthy_Output_' + varID + ' #divEmo').css('top', '55px');
    $Healthy('#divHealthy_Output_' + varID + ' #divEmo').removeClass('iconCenter');
    $Healthy('#divHealthy_Output_' + varID + ' #divEmo').addClass('iconCorner');
 
   

    if (varPercent < varBase) {
        if (varID == 5) {
            $Healthy('#divHealthy_Output_' + varID + ' #divEmo').css('background-image', 'url(/PublishingImages/Tax/emo3.png)');
            var_Selected_1 = 1;
        } else {
            if (varID == 4 || varID == 2 || varID == 3) {
                $Healthy('#divHealthy_Output_' + varID + ' #divEmo').css('background-image', 'url(/PublishingImages/Tax/emo1.png)');
                if (varID == 3) {
                    if (varPercent == 0) {
                        var_Selected_1 = 4;
                    } else {
                        var_Selected_1 = 1;
                    }
                } else if (varID == 2) {
                    if (varPercent == 0) {
                        var_Selected_1 = 4;
                    } else {
                        var_Selected_1 = 1;
                    }
                } else if (varID == 4) {
                    if (varPercent == 0) {
                        var_Selected_1 = 4;
                    } else {
                        var_Selected_1 = 1;
                    }
                } else {
                    var_Selected_1 = 4;
                }
            } else {
                $Healthy('#divHealthy_Output_' + varID + ' #divEmo').css('background-image', 'url(/PublishingImages/Tax/emo1.png)');
                var_Selected_1 = 1;
            }
        }
    } else if (varPercent == varBase) {
        $Healthy('#divHealthy_Output_' + varID + ' #divEmo').css('background-image', 'url(/PublishingImages/Tax/emo2.png)');
        var_Selected_1 = 2;
    } else if (varBase < varPercent) {
        if (varID == 5) {
            $Healthy('#divHealthy_Output_' + varID + ' #divEmo').css('background-image', 'url(/PublishingImages/Tax/emo1.png)');
            var_Selected_1 = 3;
        } else {
            $Healthy('#divHealthy_Output_' + varID + ' #divEmo').css('background-image', 'url(/PublishingImages/Tax/emo3.png)');
            var_Selected_1 = 3;
        }
    }
    //$Healthy('#divHealthy_Output_' + varID + ' #divResultContent').css('background-image', 'url(/PublishingImages/Tax/Thai/bg_title/result' + varID + '/content' + var_Selected_1 + '.png)');
   
    //    var arr = [[],[]];
    //arr[0][2] = 'Hi Mr.A';
    //arr[1][3] = 'Hi Mr.B';
    //alert(arr[0][2]);
    //alert(arr[1][3]);
     
 
    var arr = [[],[],[],[],[]];   
  
    arr[1][1] = 'คุณมีหนี้สินอยู่ในระดับมาตรฐาน และมีความสามารถในการชำระหนี้เป็นอย่างดี';
    arr[1][2] = 'คุณมีหนี้สินอยู่ในระดับมาตรฐาน และมีความสามารถในการชำระหนี้เป็นอย่างดี';
    arr[1][3] = 'คุณมีโอกาสที่จะผิดนัดชำระหนี้ได้ เพราะมีหนี้สินค่อนข้างสูงเมื่อเทียบกับสินทรัพย์ที่มีอยู่ แนะนำให้ชำระหนี้อย่างสม่ำเสมอและไม่ควรก่อหนี้เพิ่มเติม';
    arr[1][4] = 'คุณไม่มีภาระหนี้ต้องชำระ และมีความสามารถในการก่อหนี้เพิ่มเติมได้';

    arr[2][1] = 'คุณมีหนี้สินอยู่ในระดับมาตรฐาน และมีความสามารถในการชำระหนี้เป็นอย่างดี';
    arr[2][2] = 'คุณมีหนี้สินอยู่ในระดับมาตรฐาน และมีความสามารถในการชำระหนี้เป็นอย่างดี';
    arr[2][3] = 'คุณมีโอกาสที่จะผิดนัดชำระหนี้ได้ เพราะมีหนี้สินค่อนข้างสูงเมื่อเทียบกับสินทรัพย์ที่มีอยู่ แนะนำให้ชำระหนี้อย่างสม่ำเสมอและไม่ควรก่อหนี้เพิ่มเติม';
    arr[2][4] = 'คุณไม่มีภาระหนี้ต้องชำระ และมีความสามารถในการก่อหนี้เพิ่มเติมได้';

    arr[3][1] = 'คุณมีหนี้สินอยู่ในระดับมาตรฐาน และมีความสามารถในการชำระหนี้เป็นอย่างดี';
    arr[3][2] = 'คุณมีหนี้สินอยู่ในระดับมาตรฐาน และมีความสามารถในการชำระหนี้เป็นอย่างดี';
    arr[3][3] = 'คุณมีโอกาสที่จะผิดนัดชำระหนี้ได้ เพราะมีหนี้สินค่อนข้างสูงเมื่อเทียบกับสินทรัพย์ที่มีอยู่ แนะนำให้ชำระหนี้อย่างสม่ำเสมอและไม่ควรก่อหนี้เพิ่มเติม';
    arr[3][4] = 'คุณไม่มีภาระหนี้ต้องชำระ และมีความสามารถในการก่อหนี้เพิ่มเติมได้';

    arr[4][1] = 'คุณมีหนี้สินอยู่ในระดับมาตรฐาน และมีความสามารถในการชำระหนี้เป็นอย่างดี';
    arr[4][2] = 'คุณมีหนี้สินอยู่ในระดับมาตรฐาน และมีความสามารถในการชำระหนี้เป็นอย่างดี';
    arr[4][3] = 'คุณมีโอกาสที่จะผิดนัดชำระหนี้ได้ เพราะมีหนี้สินค่อนข้างสูงเมื่อเทียบกับสินทรัพย์ที่มีอยู่ แนะนำให้ชำระหนี้อย่างสม่ำเสมอและไม่ควรก่อหนี้เพิ่มเติม';
    arr[4][4] = 'คุณไม่มีภาระหนี้ต้องชำระ และมีความสามารถในการก่อหนี้เพิ่มเติมได้';

    arr[5][1] = 'คุณมีหนี้สินอยู่ในระดับมาตรฐาน และมีความสามารถในการชำระหนี้เป็นอย่างดี';
    arr[5][2] = 'คุณมีหนี้สินอยู่ในระดับมาตรฐาน และมีความสามารถในการชำระหนี้เป็นอย่างดี';
    arr[5][3] = 'คุณมีโอกาสที่จะผิดนัดชำระหนี้ได้ เพราะมีหนี้สินค่อนข้างสูงเมื่อเทียบกับสินทรัพย์ที่มีอยู่ แนะนำให้ชำระหนี้อย่างสม่ำเสมอและไม่ควรก่อหนี้เพิ่มเติม';
    arr[5][4] = 'คุณไม่มีภาระหนี้ต้องชำระ และมีความสามารถในการก่อหนี้เพิ่มเติมได้';
     
    if ((var_Selected_1 != undefined)&& (varID==2)) {
        $Healthy('#divHealthy_Output_' + varID + ' #lblmsg').text(arr[varID][var_Selected_1]);
        $Healthy('#txt_hl_Result_' + varID + '').val(parseFloat(varPercent) + ' %');
    }
    if (varResult == 999 || varResult == 0) {
        fn_Infinity(varID);
    } else {
        fn_Counter(varID, varResult);
    }
    fn_Scale(varID, pos_Line);
}

function fn_Scale(varID, pos_Line) {
    $Healthy('#divHealthy_Output_' + varID + ' #divLine').css('top', '290px');
    $Healthy('#divHealthy_Output_' + varID + ' #divEmo').css('display', 'none');
    $Healthy('#divHealthy_Output_' + varID + ' #divResultContent').css('display', 'none');
    $Healthy('#divHealthy_Output_' + varID + ' #divLine').stop().animate({
        top: pos_Line
    }, 1000, function () {
        $Healthy('#divHealthy_Output_' + varID + ' #divEmo').stop().fadeIn(800);
        $Healthy('#divHealthy_Output_' + varID + ' #divResultContent').stop().fadeIn(800);
    });
    //$Healthy('#divHealthy_Output_' + varID + ' #divLine').css('top',pos_Line);
}

function changeSubMenu(idMenu) {
    switch (idMenu) {
        case 1:
            $Healthy('#divShowOutput').hide();
            $Healthy('#divHealthy_Input_1').fadeIn();
            $Healthy('#divHealthy_Input_2').hide();
            $Healthy('#divHealthy_Output_' + Global_strID_Hide).hide();
            $Healthy('#divChildCursor').css('left', '290px');
            break;
        case 2:

            $Healthy('#divShowOutput').hide();
            $Healthy('#divHealthy_Input_2').fadeIn();
            $Healthy('#divHealthy_Input_1').hide();
            $Healthy('#divHealthy_Output_' + Global_strID_Hide).hide();
            $Healthy('#divChildCursor').css('left', '490px');
            break;
        case 3:
            $Healthy('#divShowOutput').show();
            $Healthy('#divHealthy_Input_1').hide();
            $Healthy('#divHealthy_Input_2').hide();
            $Healthy('#divChildCursor').css('left', '685px');
            changeGraph(1);
            break;
        case 0:
            $Healthy('#divShowOutput').hide();
            $Healthy('#divHealthy_Input_1').fadeIn();
            $Healthy('#divHealthy_Input_2').hide();
            $Healthy('#divHealthy_Output_' + Global_strID_Hide).hide();
            $Healthy('#divChildCursor').css('left', '290px');
            resetTextbox();
            break;
    }
}

function changeGraph(idChart) {
    $Healthy('#divHealthy_Output_' + idChartOld + '').hide();
    if (idChart == 1) {
        $Healthy('#divHealthy_Output_' + idChart + '').stop().fadeIn();
    } else {
        $Healthy('#divHealthy_Output_' + idChart + '').show();
    }
    Global_strID_Hide = idChart;
    idChartOld = idChart;
    calHealthy();
}

function fn_Counter(varID, varPercent) {
    $Healthy('#txt_hl_Result_' + varID + '').val(parseFloat(varPercent).toFixed(2));
    $Healthy('#txt_hl_Result_' + varID + '').css('color', 'red');

    $Healthy('#txt_hl_Result_' + varID + '').prop('Counter', 0).stop().animate({
        Counter: $Healthy('#txt_hl_Result_' + varID + '').val()
    }, {
        duration: 1000,
        easing: 'swing',
        step: function (now) {
            $Healthy('#txt_hl_Result_' + varID + '').val(now.toFixed(2) + ' %');
        }
    });
}

function fn_Infinity(varID) {
    $Healthy('#txt_hl_Result_' + varID + '').hide();

    //$Healthy('#divHealthy_Output_' + varID + ' #divEmo').css('left','320px');
    //$Healthy('#divHealthy_Output_' + varID + ' #divEmo').css('top','105px');

    //$Healthy('#divHealthy_Output_' + varID + ' #divEmo').css('left','320px');
    //$Healthy('#divHealthy_Output_' + varID + ' #divEmo').css('top','105px');
    $Healthy('#divHealthy_Output_' + varID + ' #divEmo').removeClass('iconCorner');
    $Healthy('#divHealthy_Output_' + varID + ' #divEmo').addClass('iconCenter');
}

function fn_Counter1(varID, varValue) {
    $Healthy('#txt_hl_Result_' + varID + '').val(varValue);
    $Healthy('#txt_hl_Result_' + varID + '').prop('Counter', 0).stop().animate({
        Counter: $Healthy('#txt_hl_Result_' + varID + '').val()
    }, {
        duration: 1000,
        easing: 'swing',
        step: function (now) {
            $Healthy('#txt_hl_Result_' + varID + '').val(fn_addCommas(now.toFixed(2)));
        }
    });
}

function fn_addCommas(nStr) {
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

function checkKeyboard() {
    $Healthy('input').keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($Healthy.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
            // Allow: Ctrl+A, Command+A
            (e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true)) ||
            // Allow: home, end, left, right, down, up
            (e.keyCode >= 35 && e.keyCode <= 40)) {
            // let it happen, don't do anything
            return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            $Healthy(this).css('background', 'none');
            e.preventDefault();
        }
    });

    $Healthy('input').focusin(function () {
        //temp_Income = $Healthy(this).val().replace(/,/g, '');
        //$Healthy(this).val($Healthy(this).val().replace(/,/g, ''));

        temp_Income = $Healthy(this).val().replace(/,/g, '');

        console.log(temp_Income);
        $Healthy(this).val(temp_Income);
        //console.log(	$Healthy(this).val());
    });

    $Healthy('input').focusout(function () {
        if (!($Healthy.isNumeric($Healthy(this).val()))) {
            $Healthy(this).val();
            $Healthy(this).css('background', 'none');
        }

        //temp_Income = $Healthy(this).val()*1;
        temp_Income = $Healthy(this).val().replace(/,/g, '') * 1;
        //console.log(temp_Income);

        //$Healthy(this).val(fn_addCommas($Healthy(this).val()*1));
        //$Healthy(this).val(temp_Income);
        //	if(temp_Income == '' || isNaN(temp_Income)){
        //		$Healthy(this).val(0);
        //	}
    });
}