var $LandingPage = jQuery.noConflict();
var varResult;
var varNewsHTML = '';
var divSlideShow_SME_Total=0;
var divSlideShow_SME_Width=0;
var divSlideShow_SME_TempHtml = '';
var Param_CurrentSlideShow = 0;
var Timer_ForSlideShow = '';
var Const_timerForSlide = 5000;
var 	varSlide = 'off';
var currentMenu = '0';

var sPageURL = window.location.href;
var sURLVariables = sPageURL.split('/');
var siteLanguage = '';

var xOld=1;
var varSwitch = 'on';

var URLContentPages =  sURLVariables[3] + '/' + sURLVariables[4] + '/' + sURLVariables[5];
	if (sURLVariables[3] == 'BangkokBankThai'){
		siteLanguage = 'Thai';		
	}else{
		siteLanguage = 'Eng';		
	}
	
var checkPageParameter = sPageURL.split('=');

if (checkPageParameter[1] == undefined) {
	checkPageParameter[1] = 0;
}

$LandingPage(document).ready(function(){
	$LandingPage('#divButtonDisc').hide();
	$LandingPage('#divDiscContent').hide();

	$LandingPage('#divContent').css('display','');	
	$LandingPage('#div_Social_Network').css('display','none');
		$LandingPage('#divShowContent').load('/' + URLContentPages + '/Pages/content0.aspx #divContent' , function() {
			$LandingPage.getScript('/PublishingJavascript/Tax/tax.js',function(){
				fn_CheckURL();
				fn_ClickContentForShow();
				$LandingPage('#clickContent'+checkPageParameter[1]).trigger('click');	
			});	
		});	

	LoadNews();		
	
	if (divSlideShow_SME_Total > 1){
		Create_BulletForChangeSlideShow();	
		$LandingPage('#img1').attr('src', '/PublishingImages/SMEs/btnNo/1_selected.png');	
		Timer_ForSlideShow = setTimeout('Start_SlideShow()',Const_timerForSlide);		
	}
	if ($LandingPage('#divSlideShow_SME').length > 0) {
		$LandingPage('#divContent').css('display','none');	
		document.getElementById('divContent').style.display = 'none';
	}		

	//if ($LandingPage.browser.msie && parseInt($LandingPage.browser.version, 10) <= 8) {
	//	$LandingPage('.ft_Quick_News_btn').addClass('ft_Quick_News_btn_IE8');
	//}	
	MainMenu_MouseOver();
	
	SubMenu_MouseClick();		
});

function SubMenu_MouseClick(){
	//$LandingPage('.subMenu').click(function(){	
	$LandingPage('.css_divSubMenu img').click(function(){
		var imgSubID = $LandingPage(this).attr('id');
		switch (imgSubID) {
		     case '11':
		     		resetTextbox();
		         	$LandingPage('#divChildCursor').css('left','235px');
		         	break;
		     case '12':
		     		resetTextbox();
		         	$LandingPage('#divChildCursor').css('left','400px');
		         	break;
		     case '13':
		     		resetTextbox();
		         	$LandingPage('#divChildCursor').css('left','555px');
		         	break;
		     case '14':
		     		resetTextbox();
		         	$LandingPage('#divChildCursor').css('left','715px');
		      	break;
		     case '21':
		         	$LandingPage('#divChildCursor').css('left','180px');
		         	Retire_changeSubMenu(1);
		         	break;
		     case '22':
		         	$LandingPage('#divChildCursor').css('left','370px');
		         	Retire_changeSubMenu(2);
		         	break;
		     case '23':
		         	$LandingPage('#divChildCursor').css('left','565px');
		         	Retire_changeSubMenu(3);
		         	break;
		     case '24':
		         	$LandingPage('#divChildCursor').css('left','740px');
		         	Retire_changeSubMenu(4);
		      	break;		      	
		     case '31':
		     		$LandingPage('.divPanelChild').css('visibility','hidden');
		     		$LandingPage('#divChild1').css('visibility','visible');
		     		$LandingPage('#divChildCursor').css('left','225px');
				break;
			case '32':
		     		$LandingPage('.divPanelChild').css('visibility','hidden');			
				$LandingPage('#divChild2').css('visibility','visible');
				$LandingPage('#divChildCursor').css('left','390px');
				break;
			case '33':
		     		$LandingPage('.divPanelChild').css('visibility','hidden');			
				$LandingPage('#divChild3').css('visibility','visible');
				$LandingPage('#divChildCursor').css('left','555px');
				break;		
			case '34':
		     		$LandingPage('.divPanelChild').css('visibility','hidden');			
				$LandingPage('#divAllSum').css('visibility','visible');
				$LandingPage('#divChildCursor').css('left','720px');
				displaySummary();
				break;	
		     case '61':
		         	$LandingPage('#divChildCursor').css('left','235px');
		         	changeSubMenu(1);
		         	break;
		     case '62':
		         	$LandingPage('#divChildCursor').css('left','400px');
		         	changeSubMenu(2);
		         	break;
		     case '63':
		         	$LandingPage('#divChildCursor').css('left','555px');
		         	changeSubMenu(3);
		         	break;
		 } 
	});
}

function MainMenu_MouseOver(){
	$LandingPage('#divSubmenu .mainMenu').mouseover(function(){
		var imgID = $LandingPage(this).attr('id');

		if (currentMenu != imgID){	
			$LandingPage(this).attr('src', '/PublishingImages/Tax/'+siteLanguage+'/Menu/'+imgID+'_over.png');
		}
	})
	.mouseout(function(){
		var imgID = $LandingPage(this).attr('id');
		if (currentMenu != imgID){	
			$LandingPage(this).attr('src', '/PublishingImages/Tax/'+siteLanguage+'/Menu/'+imgID+'.png');
		}
	});
}

function LoadNews(){		
	//var strCAML = '<Query><OrderBy><FieldRef Name="SlideSort" Ascending="TRUE"/></OrderBy><Where><Neq><FieldRef Name="SlideSort" /><Value Type="Choice">0</Value></Neq></Where></Query>';
	//$LandingPage().SPServices({		
    //      operation: 'GetListItems',
	//	webURL: window.location.protocol + '//' + window.location.host + '/' + URLContentPages,
	//	async: false,
	//	listName: 'SMEs_SlideShow',		
	//	CAMLViewFields: '<ViewFields />',
	//	CAMLQuery: strCAML,
	//	completefunc: function(xData, Status) {
	//		 $LandingPage(xData.responseXML).find("[nodeName='z:row']").each(function() {
	//		 	var strURL = $LandingPage(this).attr('ows_SMEs_URL').split(',');
	//		 	varNewsHTML += '<div style="position:relative;float:left;"><a href="'+ strURL[0] + '"><img src=/../' + $LandingPage(this).attr('ows_RequiredField') + '  border=none /></a></div>';
	//		 	divSlideShow_SME_Total++;
	//		 	if(divSlideShow_SME_Total == 1){
	//		 		divSlideShow_SME_TempHtml = '<div style="position:relative;float:left;"><img src=/../' + $LandingPage(this).attr('ows_RequiredField') + ' /></div>';
	//		 	}
	//		});
	//	}
	//});
	//divSlideShow_SME_Width = (divSlideShow_SME_Total + 1) * 990;
	//$LandingPage('#divSlideShow_SME').width(divSlideShow_SME_Width);	
	//$LandingPage('#divSlideShow_SME').html(varNewsHTML + divSlideShow_SME_TempHtml);
	//$LandingPage('#divBullet_SlideShow_SME_Default').display= 'none';
}

function Create_BulletForChangeSlideShow(){
	var HTML_ForSlideBullet = '';
	for (var i=0; i<divSlideShow_SME_Total; i++) {
		HTML_ForSlideBullet += '<a href=# onclick=Click_ForChangeSlideShow('+ i +')><img id="img'+ (i+1) +'" src="/PublishingImages/SMEs/btnNo/' + (i+1) + '.png" border="0" /></a> ';
	}
	$LandingPage('#divBullet_SlideShow_SME').html(HTML_ForSlideBullet);
}

function Click_ForChangeSlideShow(Param_ForSelectedSlideShow){
	clearTimeout(Timer_ForSlideShow);
	$LandingPage('#img'+(Param_CurrentSlideShow+1)).attr('src', '/PublishingImages/SMEs/btnNo/' + (Param_CurrentSlideShow+1) + '.png');		
	$LandingPage('#divSlideShow_SME').animate({
		opacity: 1,
		left: -990*Param_ForSelectedSlideShow
	}, 500, function(){
			$LandingPage('#divSlideShow_SME').animate({
				opacity: 1
			}, 200);
			$LandingPage('#img'+(Param_ForSelectedSlideShow+1)).attr('src', '/PublishingImages/SMEs/btnNo/' + (Param_ForSelectedSlideShow+1) + '_selected.png');				
			Param_CurrentSlideShow = Param_ForSelectedSlideShow;
			Timer_ForSlideShow = setTimeout('Start_SlideShow()',Const_timerForSlide);		
	});	
}

function Start_SlideShow(){	
	clearTimeout(Timer_ForSlideShow);
	Param_CurrentSlideShow++;	
	$LandingPage('#divSlideShow_SME').animate({
		opacity: 1,    
		left: -990*Param_CurrentSlideShow
	}, 500,function(){
			$LandingPage('#divSlideShow_SME').animate({
				opacity: 1
			}, 200);
			$LandingPage('#img'+(Param_CurrentSlideShow)).attr('src', '/PublishingImages/SMEs/btnNo/' + (Param_CurrentSlideShow) + '.png');			
			$LandingPage('#img'+(Param_CurrentSlideShow+1)).attr('src', '/PublishingImages/SMEs/btnNo/' + (Param_CurrentSlideShow+1) + '_selected.png');
			
			if(Param_CurrentSlideShow == divSlideShow_SME_Total){
				$LandingPage('#divSlideShow_SME').css('left','0px');
				Param_CurrentSlideShow = 0;
				$LandingPage('#img'+(Param_CurrentSlideShow)).attr('src', '/PublishingImages/SMEs/btnNo/' + (Param_CurrentSlideShow) + '.png');			
				$LandingPage('#img'+(Param_CurrentSlideShow+1)).attr('src', '/PublishingImages/SMEs/btnNo/' + (Param_CurrentSlideShow+1) + '_selected.png');				
			}		
			Timer_ForSlideShow = setTimeout('Start_SlideShow()',Const_timerForSlide);			
	});	
}

function fn_ClickContentForShow(){
	$LandingPage('#clickContent6').click(function(){	
		$LandingPage('#divButtonDisc').hide();
		$LandingPage('#divDiscContent').hide();
		$LandingPage('#divShowContent').fadeOut(function(){
			$LandingPage('#divShowContent').load('/' + URLContentPages + '/Pages/content6.aspx #divContent', function(){
				$LandingPage.getScript('/PublishingJavascript/Tax/fn_healthy.js',function(){
					$LandingPage('#'+currentMenu).attr('src', '/PublishingImages/Tax/'+siteLanguage+'/Menu/'+currentMenu+'.png');				
					$LandingPage('#6').attr('src', '/PublishingImages/Tax/'+siteLanguage+'/Menu/6_selected.png');
					currentMenu = 6;
					slideTop();
					showSubmenu(6);
					$LandingPage('#divShowContent').fadeIn(100);
					$LandingPage('#divChildCursor').show();
					$LandingPage('#divChildCursor').css('left','290px');		
					$LandingPage('#divHealthy_Input_1 #txt_hl_Result_11').hide;
				});				
			});
		});			
	});

	$LandingPage('#clickContent1').click(function(){	
		$LandingPage('#divButtonDisc').hide();
		$LandingPage('#divDiscContent').hide();
		$LandingPage('#divShowContent').fadeOut(function(){
			$LandingPage('#divShowContent').load('/' + URLContentPages + '/Pages/content1.aspx #divContent', function(){
				$LandingPage.getScript('/PublishingJavascript/Tax/fn_saving.js',function(){
				//$LandingPage.getScript('/PublishingJavascript/Tax/fn_saving.js');				
					$LandingPage('#'+currentMenu).attr('src', '/PublishingImages/Tax/'+siteLanguage+'/Menu/'+currentMenu+'.png');				
					$LandingPage('#1').attr('src', '/PublishingImages/Tax/'+siteLanguage+'/Menu/1_selected.png');
					currentMenu = 1;
					slideTop();
					showSubmenu(1);
					$LandingPage('#divShowContent').fadeIn(100);
					$LandingPage('#divChildCursor').show();
					$LandingPage('#divChildCursor').css('left','235px');		
				});				
			});
		});			
	});
	$LandingPage('#clickContent2').click(function(){
		$LandingPage('#divButtonDisc').hide();
		$LandingPage('#divDiscContent').hide();
		$LandingPage('#divShowContent').fadeOut(function(){
			$LandingPage('#divShowContent').load('/' + URLContentPages + '/Pages/content2.aspx #divContent', function(){
				$LandingPage.getScript('/PublishingJavascript/Tax/fn_retirement.js',function(){
				//$LandingPage.getScript('/PublishingJavascript/Tax/fn_retirement.js');
					$LandingPage('#'+currentMenu).attr('src', '/PublishingImages/Tax/'+siteLanguage+'/Menu/'+currentMenu+'.png');
					$LandingPage('#2').attr('src', '/PublishingImages/Tax/'+siteLanguage+'/Menu/2_selected.png');		
					currentMenu = 2;							
					slideTop();
					showSubmenu(2);
					$LandingPage('#divShowContent').fadeIn(100);
					$LandingPage('#divChildCursor').show();					
					$LandingPage('#divChildCursor').css('left','180px');
					//calRetirement();
					//fn_Retirement();
				});	
			});				
		});
	});
	$LandingPage('#clickContent3').click(function(){
		$LandingPage('#divButtonDisc').hide();
		$LandingPage('#divDiscContent').hide();
		$LandingPage('#divShowContent').fadeOut(function(){
			$LandingPage('#divShowContent').load('/' + URLContentPages + '/Pages/content3.aspx #divContent', function(){
				$LandingPage.getScript('/PublishingJavascript/Tax/tax.js',function(){
					$LandingPage('#'+currentMenu).attr('src', '/PublishingImages/Tax/'+siteLanguage+'/Menu/'+currentMenu+'.png');				
					$LandingPage('#3').attr('src', '/PublishingImages/Tax/'+siteLanguage+'/Menu/3_selected.png');		
					currentMenu = 3;							
					slideTop();
					showSubmenu(3);
					$LandingPage('#divShowContent').fadeIn(100);
					$LandingPage('#divChildCursor').show();	
					$LandingPage('#divChildCursor').css('left','225px');
					calChild(1);
				});	
			});				
		});	
	});
	$LandingPage('#clickContent4').click(function(){
		$LandingPage('#divButtonDisc').hide();
		$LandingPage('#divDiscContent').hide();
		$LandingPage('#divShowContent').fadeOut(function(){
			$LandingPage('#divShowContent').load('/' + URLContentPages + '/Pages/content4.aspx #divContent', function(){
				$LandingPage.getScript('/PublishingJavascript/Tax/new_tax.js',function(){
				//$LandingPage.getScript('/PublishingJavascript/Tax/new_tax.js');
					$LandingPage('#'+currentMenu).attr('src', '/PublishingImages/Tax/'+siteLanguage+'/Menu/'+currentMenu+'.png');				
					$LandingPage('#4').attr('src', '/PublishingImages/Tax/'+siteLanguage+'/Menu/4_selected.png');				
					currentMenu = 4;					
					slideTop();
					showSubmenu(4);
					$LandingPage('#divShowContent').fadeIn(100);
					$LandingPage('#divChildCursor').show();	
					$LandingPage('#divChildCursor').css('left','-235px');
					//fn_MainTax();
//					calMainTax();
				});				
			});				
		});
	});
	$LandingPage('#clickContent5').click(function(){
		$LandingPage('#divButtonDisc').hide();
		$LandingPage('#divDiscContent').hide();
		$LandingPage('#divShowContent').fadeOut(function(){
			$LandingPage('#divShowContent').load('/' + URLContentPages + '/Pages/content5.aspx #divContent', function(){
				$LandingPage.getScript('/PublishingJavascript/Tax/tax.js',function(){				
					$LandingPage('#'+currentMenu).attr('src', '/PublishingImages/Tax/'+siteLanguage+'/Menu/'+currentMenu+'.png');				
					$LandingPage('#5').attr('src', '/PublishingImages/Tax/'+siteLanguage+'/Menu/5_selected.png');		
					currentMenu = 5;							
					slideTop();
					showSubmenu(5);
					$LandingPage('#divShowContent').fadeIn(100);
					$LandingPage('#divChildCursor').show();	
					$LandingPage('#divChildCursor').css('left','-235px');
					calHomeLoan();
				});	
			});				
		});
	});
}

function fn_CheckURL(){

	var checkContent = sURLVariables[4].substr(0, 7);

	if (checkContent == 'content' || checkContent == 'Content'){
		var varContentNumber = sURLVariables[8].substr(7, 1);
		$LandingPage('#divShowContent').fadeOut(function(){		
			$LandingPage('#divShowContent').load('/' + URLContentPages + '/Pages/content' + varContentNumber + '.aspx #divContent', function(){
				$LandingPage('#divShowContent').fadeIn(0);
			});		
		});
	}
}

function slideTop(){
	if (varSlide == 'off'){
		$LandingPage('#imgSlideShow_SME_Blur').animate({
			opacity:0
		},0,function(){
			$LandingPage('#imgSlideShow_SME_Blur').attr('src', '/PublishingImages/Tax/banner_blur.jpg');	
			$LandingPage('#imgSlideShow_SME_Blur').animate({
				opacity:1
			},500);
			varSlide = 'on';
		});
	}
	
	$LandingPage('#divSubmenu').animate({
		top:80
	}, 300, function() {
		// Animation complete.
	});
}

function showSubmenu(x){
	if (varSwitch == 'on'){
		varSwitch = 'off';
		$LandingPage('#divSubMenu'+xOld).animate({
			opacity: 0
		}, 100, function(){
		$LandingPage('#divSubMenu'+x).animate({
			opacity: 1
		}, 100); 
			$LandingPage('#divSubMenu'+xOld).hide();
			xOld = x;
			$LandingPage('#divSubMenu'+xOld).show();
			varSwitch = 'on';			
		});
	}
}