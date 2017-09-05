<%@ Page language="C#"   Inherits="Microsoft.SharePoint.Publishing.PublishingLayoutPage,Microsoft.SharePoint.Publishing,Version=12.0.0.0,Culture=neutral,PublicKeyToken=71e9bce111e9429c" meta:progid="SharePoint.WebPartPage.Document" %>
<%@ register Tagprefix="SharePointWebControls" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=12.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> <%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=12.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> <%@ Register Tagprefix="PublishingWebControls" Namespace="Microsoft.SharePoint.Publishing.WebControls" Assembly="Microsoft.SharePoint.Publishing, Version=12.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> <%@ Register Tagprefix="PublishingNavigation" Namespace="Microsoft.SharePoint.Publishing.Navigation" Assembly="Microsoft.SharePoint.Publishing, Version=12.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ register tagprefix="tpPromotion" tagname="tnPromotion" src="~/_controltemplates/CustomControl/PromotionSlide.ascx" %>
<asp:Content ContentPlaceholderID="PlaceHolderSearchBlessing" runat="server">
		<div id="DivBlessing">
			<PublishingWebControls:RichHtmlField FieldName="ContentBody16" ID="TopMessage" runat="server" __designer:Preview="&lt;div id=&quot;TopMessage__ControlWrapper_RichHtmlField&quot; style=&quot;display:inline&quot;&gt;&lt;div align=&quot;left&quot; class=&quot;ms-formfieldcontainer&quot;&gt;&lt;div class=&quot;ms-formfieldlabelcontainer&quot; nowrap=&quot;nowrap&quot;&gt;&lt;span class=&quot;ms-formfieldlabel&quot; nowrap=&quot;nowrap&quot;&gt;ContentBody16&lt;/span&gt;&lt;/div&gt;&lt;div class=&quot;ms-formfieldvaluecontainer&quot;&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;" __designer:Values="&lt;P N='FieldName' T='ContentBody16' /&gt;&lt;P N='Html' R='-1' /&gt;&lt;P N='Value' R='-1' /&gt;&lt;P N='Visible' T='False' /&gt;&lt;P N='ControlMode' E='1' /&gt;&lt;P N='InDesign' T='False' /&gt;&lt;P N='ID' ID='1' T='TopMessage' /&gt;&lt;P N='Page' ID='2' /&gt;&lt;P N='TemplateControl' R='2' /&gt;&lt;P N='AppRelativeTemplateSourceDirectory' R='-1' /&gt;"></PublishingWebControls:RichHtmlField>
			<PublishingWebControls:RichHtmlField FieldName="ContentBody19" ID="TopMessageBackground" runat="server" __designer:Preview="&lt;div id=&quot;TopMessageBackground__ControlWrapper_RichHtmlField&quot; style=&quot;display:inline&quot;&gt;&lt;div align=&quot;left&quot; class=&quot;ms-formfieldcontainer&quot;&gt;&lt;div class=&quot;ms-formfieldlabelcontainer&quot; nowrap=&quot;nowrap&quot;&gt;&lt;span class=&quot;ms-formfieldlabel&quot; nowrap=&quot;nowrap&quot;&gt;ContentBody19&lt;/span&gt;&lt;/div&gt;&lt;div class=&quot;ms-formfieldvaluecontainer&quot;&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;" __designer:Values="&lt;P N='FieldName' T='ContentBody19' /&gt;&lt;P N='Html' R='-1' /&gt;&lt;P N='Value' R='-1' /&gt;&lt;P N='Visible' T='False' /&gt;&lt;P N='ControlMode' E='1' /&gt;&lt;P N='InDesign' T='False' /&gt;&lt;P N='ID' ID='1' T='TopMessageBackground' /&gt;&lt;P N='Page' ID='2' /&gt;&lt;P N='TemplateControl' R='2' /&gt;&lt;P N='AppRelativeTemplateSourceDirectory' R='-1' /&gt;"></PublishingWebControls:RichHtmlField>		
		</div>		
</asp:Content>
<asp:Content ContentPlaceholderID="PlaceHolderMain" runat="server">
<WebPartPages:SPProxyWebPartManager runat="server" id="ProxyWebPartManager"></WebPartPages:SPProxyWebPartManager>

<PublishingWebControls:EditModePanel runat="server" PageDisplayMode="Display" __designer:Preview="&lt;Regions&gt;&lt;Region Name=&quot;0&quot; Editable=&quot;True&quot; Content=&quot;&amp;#xD;&amp;#xA;	&amp;lt;!-- script language=&amp;quot;javascript&amp;quot; type=&amp;quot;text/javascript&amp;quot; src=&amp;quot;/PublishingJavascript/JSNewPromotion.js&amp;quot;&amp;gt;&amp;lt;/script --&amp;gt;&amp;#xD;&amp;#xA;&quot; /&gt;&lt;/Regions&gt;&lt;table height=&quot;&quot; width=&quot;&quot; style=&quot;color:Black; ;&quot; cellpadding=1 cellspacing=0&gt;
                &lt;tr&gt;
                    &lt;td nowrap align=center valign=middle style=&quot;color:Black; background-color:LightBlue; font-family:Tahoma; font-size:X-Small; &quot;&gt;Edit Mode Panel&lt;/td&gt;
                &lt;/tr&gt;
                &lt;tr&gt;
                    &lt;td nowrap style=&quot;vertical-align:top;;&quot; _designerRegion=0&gt;&lt;/td&gt;
                &lt;/tr&gt;
            &lt;/table&gt;" __designer:Values="&lt;P N='PageDisplayMode' E='2' /&gt;&lt;P N='Font' ID='1' /&gt;&lt;P N='ID' ID='2' T='ctl00' /&gt;&lt;P N='Page' ID='3' /&gt;&lt;P N='TemplateControl' R='3' /&gt;&lt;P N='AppRelativeTemplateSourceDirectory' R='-1' /&gt;">
	<!-- script language="javascript" type="text/javascript" src="/PublishingJavascript/JSNewPromotion.js"></script -->
</PublishingWebControls:EditModePanel>
<script language="javascript" type="text/javascript" src="/PublishingJavascript/jquery.SPServices-0.7.1a.min.js"></script>
<script language="javascript" type="text/javascript" src="/PublishingJavascript/Landing_Functions.js"></script>
<script type="text/javascript" language="javascript">
</script>

	<div id="divMainContent" style="width:980px;height:auto;padding-bottom:20px;">
		<table width="990px" cellpadding="0" cellspacing="0">
<PublishingWebControls:EditModePanel runat="server" PageDisplayMode="Display" __designer:Preview="&lt;Regions&gt;&lt;Region Name=&quot;0&quot; Editable=&quot;True&quot; Content=&quot;			&amp;#xD;&amp;#xA;		&amp;lt;tr&amp;gt;&amp;#xD;&amp;#xA;			&amp;lt;td colspan=&amp;quot;6&amp;quot;&amp;gt;							&amp;#xD;&amp;#xA;				&amp;lt;div style=&amp;quot;overflow:hidden;width:990px;height:270px;&amp;quot;&amp;gt;&amp;#xD;&amp;#xA;					&amp;lt;div id=&amp;quot;divSlideShow_SME&amp;quot; style=&amp;quot;height:270px;position:relative;&amp;quot;&amp;gt;&amp;lt;/div&amp;gt;&amp;#xD;&amp;#xA;					&amp;lt;img id=&amp;quot;imgSlideShow_SME_Blur&amp;quot; style=&amp;quot;height:270px;position:absolute;width:990px;top:0px;left:0px;&amp;quot;&amp;gt;&amp;lt;/img&amp;gt;&amp;#xD;&amp;#xA;				&amp;lt;/div&amp;gt;&amp;#xD;&amp;#xA;				&amp;lt;div style=&amp;quot;position:absolute;right:0px;top:240px;&amp;quot;&amp;gt;&amp;#xD;&amp;#xA;					&amp;lt;div id=&amp;quot;divBullet_SlideShow_SME_Default&amp;quot;&amp;gt;&amp;lt;/div&amp;gt;&amp;#xD;&amp;#xA;					&amp;lt;div id=&amp;quot;divBullet_SlideShow_SME&amp;quot;&amp;gt;&amp;lt;/div&amp;gt;&amp;#xD;&amp;#xA;				&amp;lt;/div&amp;gt;&amp;#xD;&amp;#xA;			&amp;lt;/td&amp;gt;&amp;#xD;&amp;#xA;		&amp;lt;/tr&amp;gt;&amp;#xD;&amp;#xA;&quot; /&gt;&lt;/Regions&gt;&lt;table height=&quot;&quot; width=&quot;&quot; style=&quot;color:Black; ;&quot; cellpadding=1 cellspacing=0&gt;
                &lt;tr&gt;
                    &lt;td nowrap align=center valign=middle style=&quot;color:Black; background-color:LightBlue; font-family:Tahoma; font-size:X-Small; &quot;&gt;Edit Mode Panel&lt;/td&gt;
                &lt;/tr&gt;
                &lt;tr&gt;
                    &lt;td nowrap style=&quot;vertical-align:top;;&quot; _designerRegion=0&gt;&lt;/td&gt;
                &lt;/tr&gt;
            &lt;/table&gt;" __designer:Values="&lt;P N='PageDisplayMode' E='2' /&gt;&lt;P N='Font' ID='1' /&gt;&lt;P N='ID' ID='2' T='ctl01' /&gt;&lt;P N='Page' ID='3' /&gt;&lt;P N='TemplateControl' R='3' /&gt;&lt;P N='AppRelativeTemplateSourceDirectory' R='-1' /&gt;">			
		<tr>
			<td colspan="6">							
				<div style="overflow:hidden;width:990px;height:270px;">
					<div id="divSlideShow_SME" style="height:270px;position:relative;"></div>
					<img id="imgSlideShow_SME_Blur" style="height:270px;position:absolute;width:990px;top:0px;left:0px;"></img>
				</div>
				<div style="position:absolute;right:0px;top:240px;">
					<div id="divBullet_SlideShow_SME_Default"></div>
					<div id="divBullet_SlideShow_SME"></div>
				</div>
			</td>
		</tr>
</PublishingWebControls:EditModePanel>			
		<tr>
		<td>
<script language="javascript" type="text/javascript">
	if (sURLVariables[3] == 'BangkokBankThai'){
		siteLanguage = 'Thai';		
	}else{
		siteLanguage = 'Eng';		
	}
	document.write('<div id="divCrop"><div id="divSubmenu"><ul id="ulSubMenu">');
	document.write('<li><a href="#" id="clickContent6">');
	document.write('<img id="6" class="mainMenu" src="/PublishingImages/Tax/'+siteLanguage+'/Menu/6.png" border="0" /></a></li>');
	document.write('<li><a href="#" id="clickContent1">');
	document.write('<img id="1" class="mainMenu" src="/PublishingImages/Tax/'+siteLanguage+'/Menu/1.png" border="0" /></a></li>');
	document.write('<li><a href="#" id="clickContent2">');
	document.write('<img id="2" class="mainMenu" src="/PublishingImages/Tax/'+siteLanguage+'/Menu/2.png" border="0" /></a></li>');
	document.write('<li><a href="#" id="clickContent3">');
	document.write('<img id="3" class="mainMenu" src="/PublishingImages/Tax/'+siteLanguage+'/Menu/3.png" border="0" /></a></li>');
	document.write('<li><a href="#" id="clickContent4">');
	document.write('<img id="4" class="mainMenu" src="/PublishingImages/Tax/'+siteLanguage+'/Menu/4.png" border="0" /></a></li>');
	document.write('<li><a href="#" id="clickContent5">');
	document.write('<img id="5" class="mainMenu" src="/PublishingImages/Tax/'+siteLanguage+'/Menu/5.png" border="0" /></a></li>');
	document.write('<li style="width:366px;height:70px;border:none;">');
	document.write('</li></ul><div class="divBlueBG">');
		document.write('<div id="divSubMenu6" class="css_divSubMenu"><img src="/PublishingImages/Tax/'+siteLanguage+'/title6.png" border="0" />');
			document.write('<img id="61" src="/PublishingImages/Tax/'+siteLanguage+'/Menu/healthy/mnuHealthy1.png" style="left:255px;position:absolute;top:20px;cursor:pointer;"/>');
			document.write('<img id="62" src="/PublishingImages/Tax/'+siteLanguage+'/Menu/healthy/mnuHealthy2.png" style="left:449px;position:absolute;top:20px;cursor:pointer;"/>');
			document.write('<img id="63" src="/PublishingImages/Tax/'+siteLanguage+'/Menu/healthy/mnuHealthy3.png" style="left:648px;position:absolute;top:20px;cursor:pointer;"/>');
		document.write('</div>');
		document.write('<div id="divSubMenu1" class="css_divSubMenu"><img src="/PublishingImages/Tax/'+siteLanguage+'/title1.png" border="0" />');
			document.write('<img id="11" src="/PublishingImages/Tax/'+siteLanguage+'/Menu/Saving/mnuSaving1.png" class="imgSubMenu subMenu" style="cursor:pointer;" />');
			document.write('<img id="12" src="/PublishingImages/Tax/'+siteLanguage+'/Menu/Saving/mnuSaving2.png" class="imgSubMenu subMenu" style="cursor:pointer;"/>');
			document.write('<img id="13" src="/PublishingImages/Tax/'+siteLanguage+'/Menu/Saving/mnuSaving3.png" class="imgSubMenu subMenu" style="cursor:pointer;"/>');
			document.write('<img id="14" src="/PublishingImages/Tax/'+siteLanguage+'/Menu/Saving/mnuSaving4.png" class="imgSubMenu subMenu" style="cursor:pointer;"/>');
		document.write('</div>');
		document.write('<div id="divSubMenu2" class="css_divSubMenu"><img src="/PublishingImages/Tax/'+siteLanguage+'/title2.png" border="0" />');
			document.write('<img id="21" src="/PublishingImages/Tax/'+siteLanguage+'/Menu/retirement/mnuRetirement1.png" style="left:145px;position:absolute;top:42px;cursor:pointer;"/>');
			document.write('<img id="22" src="/PublishingImages/Tax/'+siteLanguage+'/Menu/retirement/mnuRetirement2.png" style="left:297px;position:absolute;top:42px;cursor:pointer;"/>');
			document.write('<img id="23" src="/PublishingImages/Tax/'+siteLanguage+'/Menu/retirement/mnuRetirement3.png" style="left:531px;position:absolute;top:42px;cursor:pointer;"/>');
			document.write('<img id="24" src="/PublishingImages/Tax/'+siteLanguage+'/Menu/retirement/mnuRetirement4.png" style="left:671px;position:absolute;top:42px;cursor:pointer;"/>');
		document.write('</div>');
		document.write('<div id="divSubMenu3" class="css_divSubMenu"><img src="/PublishingImages/Tax/'+siteLanguage+'/title3.png" border="0" />');
			document.write('<img id="31" src="/PublishingImages/Tax/'+siteLanguage+'/Menu/child/mnuChild3_1.png" class="imgSubMenu subMenu subMenu1" style="cursor:pointer;"  />');
			document.write('<img id="32" src="/PublishingImages/Tax/'+siteLanguage+'/Menu/child/mnuChild3_2.png" class="imgSubMenu subMenu subMenu1" style="cursor:pointer;"  />');
			document.write('<img id="33" src="/PublishingImages/Tax/'+siteLanguage+'/Menu/child/mnuChild3_3.png" class="imgSubMenu subMenu subMenu1" style="cursor:pointer;"  />');
			document.write('<img id="34" src="/PublishingImages/Tax/'+siteLanguage+'/Menu/child/mnuChild3_4.png" class="imgSubMenu subMenu subMenu1" style="cursor:pointer;"  />');
		document.write('</div>');
		document.write('<div id="divSubMenu4" class="css_divSubMenu"><img src="/PublishingImages/Tax/'+siteLanguage+'/title4.png" border="0" /></div>');
		document.write('<div id="divSubMenu5" class="css_divSubMenu"><img src="/PublishingImages/Tax/'+siteLanguage+'/title5.png" border="0" /></div>');
		document.write('<div id="divChildCursor" style="top:60px;left:225px;width:40px;height:40px;position:absolute;"><img src="/PublishingImages/Tax/'+siteLanguage+'/Menu/child/chiildCursor.png" /></div');
		
	document.write('</li></ul></div></div></div>');

</script>	
			</td>	
			<td>					
			<PublishingWebControls:RichHtmlField FieldName="ContentBody11" ID="ContentBody11" runat="server" __designer:Preview="&lt;div id=&quot;ContentBody11__ControlWrapper_RichHtmlField&quot; style=&quot;display:inline&quot;&gt;&lt;div align=&quot;left&quot; class=&quot;ms-formfieldcontainer&quot;&gt;&lt;div class=&quot;ms-formfieldlabelcontainer&quot; nowrap=&quot;nowrap&quot;&gt;&lt;span class=&quot;ms-formfieldlabel&quot; nowrap=&quot;nowrap&quot;&gt;ContentBody11&lt;/span&gt;&lt;/div&gt;&lt;div class=&quot;ms-formfieldvaluecontainer&quot;&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;" __designer:Values="&lt;P N='FieldName' ID='1' T='ContentBody11' /&gt;&lt;P N='Html' R='-1' /&gt;&lt;P N='Value' R='-1' /&gt;&lt;P N='Visible' T='False' /&gt;&lt;P N='ControlMode' E='1' /&gt;&lt;P N='InDesign' T='False' /&gt;&lt;P N='ID' R='1' /&gt;&lt;P N='Page' ID='2' /&gt;&lt;P N='TemplateControl' R='2' /&gt;&lt;P N='AppRelativeTemplateSourceDirectory' R='-1' /&gt;"></PublishingWebControls:RichHtmlField></td>
		</tr>
		<tr>
			<td colspan="2"><div id="divShowContent"></div></td>
		</tr>		
		<tr>
			<td colspan="2" style="padding-top:15px;">
				<table style="width:990px;">
					<tr style="vertical-align:top;font-size:12px;color:gray;">
						<td style="width:225px;vertical-align:top;padding-left:15px;text-align:justify;">
							<PublishingWebControls:RichHtmlField FieldName="ContentBody02" ID="ContentBody02" runat="server" __designer:Preview="&lt;div id=&quot;ContentBody02__ControlWrapper_RichHtmlField&quot; style=&quot;display:inline&quot;&gt;&lt;div align=&quot;left&quot; class=&quot;ms-formfieldcontainer&quot;&gt;&lt;div class=&quot;ms-formfieldlabelcontainer&quot; nowrap=&quot;nowrap&quot;&gt;&lt;span class=&quot;ms-formfieldlabel&quot; nowrap=&quot;nowrap&quot;&gt;ContentBody02&lt;/span&gt;&lt;/div&gt;&lt;div class=&quot;ms-formfieldvaluecontainer&quot;&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;" __designer:Values="&lt;P N='FieldName' ID='1' T='ContentBody02' /&gt;&lt;P N='Html' R='-1' /&gt;&lt;P N='Value' R='-1' /&gt;&lt;P N='Visible' T='False' /&gt;&lt;P N='ControlMode' E='1' /&gt;&lt;P N='InDesign' T='False' /&gt;&lt;P N='ID' R='1' /&gt;&lt;P N='Page' ID='2' /&gt;&lt;P N='TemplateControl' R='2' /&gt;&lt;P N='AppRelativeTemplateSourceDirectory' R='-1' /&gt;"></PublishingWebControls:RichHtmlField></td>						
						<td style="width:225px;vertical-align:top;padding-left:15px;text-align:justify;">
							<PublishingWebControls:RichHtmlField FieldName="ContentBody03" ID="ContentBody03" runat="server" __designer:Preview="&lt;div id=&quot;ContentBody03__ControlWrapper_RichHtmlField&quot; style=&quot;display:inline&quot;&gt;&lt;div align=&quot;left&quot; class=&quot;ms-formfieldcontainer&quot;&gt;&lt;div class=&quot;ms-formfieldlabelcontainer&quot; nowrap=&quot;nowrap&quot;&gt;&lt;span class=&quot;ms-formfieldlabel&quot; nowrap=&quot;nowrap&quot;&gt;ContentBody03&lt;/span&gt;&lt;/div&gt;&lt;div class=&quot;ms-formfieldvaluecontainer&quot;&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;" __designer:Values="&lt;P N='FieldName' ID='1' T='ContentBody03' /&gt;&lt;P N='Html' R='-1' /&gt;&lt;P N='Value' R='-1' /&gt;&lt;P N='Visible' T='False' /&gt;&lt;P N='ControlMode' E='1' /&gt;&lt;P N='InDesign' T='False' /&gt;&lt;P N='ID' R='1' /&gt;&lt;P N='Page' ID='2' /&gt;&lt;P N='TemplateControl' R='2' /&gt;&lt;P N='AppRelativeTemplateSourceDirectory' R='-1' /&gt;"></PublishingWebControls:RichHtmlField></td>						
						<td style="width:225px;vertical-align:top;padding-left:15px;text-align:justify;">
							<PublishingWebControls:RichHtmlField FieldName="ContentBody04" ID="ContentBody04" runat="server" __designer:Preview="&lt;div id=&quot;ContentBody04__ControlWrapper_RichHtmlField&quot; style=&quot;display:inline&quot;&gt;&lt;div align=&quot;left&quot; class=&quot;ms-formfieldcontainer&quot;&gt;&lt;div class=&quot;ms-formfieldlabelcontainer&quot; nowrap=&quot;nowrap&quot;&gt;&lt;span class=&quot;ms-formfieldlabel&quot; nowrap=&quot;nowrap&quot;&gt;ContentBody04&lt;/span&gt;&lt;/div&gt;&lt;div class=&quot;ms-formfieldvaluecontainer&quot;&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;" __designer:Values="&lt;P N='FieldName' ID='1' T='ContentBody04' /&gt;&lt;P N='Html' R='-1' /&gt;&lt;P N='Value' R='-1' /&gt;&lt;P N='Visible' T='False' /&gt;&lt;P N='ControlMode' E='1' /&gt;&lt;P N='InDesign' T='False' /&gt;&lt;P N='ID' R='1' /&gt;&lt;P N='Page' ID='2' /&gt;&lt;P N='TemplateControl' R='2' /&gt;&lt;P N='AppRelativeTemplateSourceDirectory' R='-1' /&gt;"></PublishingWebControls:RichHtmlField></td>												
						<td style="width:225px;vertical-align:top;padding-left:15px;text-align:justify;">
							<PublishingWebControls:RichHtmlField FieldName="ContentBody05" ID="ContentBody05" runat="server" __designer:Preview="&lt;div id=&quot;ContentBody05__ControlWrapper_RichHtmlField&quot; style=&quot;display:inline&quot;&gt;&lt;div align=&quot;left&quot; class=&quot;ms-formfieldcontainer&quot;&gt;&lt;div class=&quot;ms-formfieldlabelcontainer&quot; nowrap=&quot;nowrap&quot;&gt;&lt;span class=&quot;ms-formfieldlabel&quot; nowrap=&quot;nowrap&quot;&gt;ContentBody05&lt;/span&gt;&lt;/div&gt;&lt;div class=&quot;ms-formfieldvaluecontainer&quot;&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;" __designer:Values="&lt;P N='FieldName' ID='1' T='ContentBody05' /&gt;&lt;P N='Html' R='-1' /&gt;&lt;P N='Value' R='-1' /&gt;&lt;P N='Visible' T='False' /&gt;&lt;P N='ControlMode' E='1' /&gt;&lt;P N='InDesign' T='False' /&gt;&lt;P N='ID' R='1' /&gt;&lt;P N='Page' ID='2' /&gt;&lt;P N='TemplateControl' R='2' /&gt;&lt;P N='AppRelativeTemplateSourceDirectory' R='-1' /&gt;"></PublishingWebControls:RichHtmlField></td>																		
						<td style="width:15px;"></td>								
					</tr>
					<tr style="vertical-align:top;font-size:12px;color:gray;">
						<td style="width:225px;vertical-align:top;text-align:justify;">
							<PublishingWebControls:RichHtmlField FieldName="ContentBody07" ID="ContentBody07" runat="server" __designer:Preview="&lt;div id=&quot;ContentBody07__ControlWrapper_RichHtmlField&quot; style=&quot;display:inline&quot;&gt;&lt;div align=&quot;left&quot; class=&quot;ms-formfieldcontainer&quot;&gt;&lt;div class=&quot;ms-formfieldlabelcontainer&quot; nowrap=&quot;nowrap&quot;&gt;&lt;span class=&quot;ms-formfieldlabel&quot; nowrap=&quot;nowrap&quot;&gt;ContentBody07&lt;/span&gt;&lt;/div&gt;&lt;div class=&quot;ms-formfieldvaluecontainer&quot;&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;" __designer:Values="&lt;P N='FieldName' ID='1' T='ContentBody07' /&gt;&lt;P N='Html' R='-1' /&gt;&lt;P N='Value' R='-1' /&gt;&lt;P N='Visible' T='False' /&gt;&lt;P N='ControlMode' E='1' /&gt;&lt;P N='InDesign' T='False' /&gt;&lt;P N='ID' R='1' /&gt;&lt;P N='Page' ID='2' /&gt;&lt;P N='TemplateControl' R='2' /&gt;&lt;P N='AppRelativeTemplateSourceDirectory' R='-1' /&gt;"></PublishingWebControls:RichHtmlField></td>
						<td style="width:225px;vertical-align:top;text-align:justify;">
							<PublishingWebControls:RichHtmlField FieldName="ContentBody08" ID="ContentBody08" runat="server" __designer:Preview="&lt;div id=&quot;ContentBody08__ControlWrapper_RichHtmlField&quot; style=&quot;display:inline&quot;&gt;&lt;div align=&quot;left&quot; class=&quot;ms-formfieldcontainer&quot;&gt;&lt;div class=&quot;ms-formfieldlabelcontainer&quot; nowrap=&quot;nowrap&quot;&gt;&lt;span class=&quot;ms-formfieldlabel&quot; nowrap=&quot;nowrap&quot;&gt;ContentBody08&lt;/span&gt;&lt;/div&gt;&lt;div class=&quot;ms-formfieldvaluecontainer&quot;&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;" __designer:Values="&lt;P N='FieldName' ID='1' T='ContentBody08' /&gt;&lt;P N='Html' R='-1' /&gt;&lt;P N='Value' R='-1' /&gt;&lt;P N='Visible' T='False' /&gt;&lt;P N='ControlMode' E='1' /&gt;&lt;P N='InDesign' T='False' /&gt;&lt;P N='ID' R='1' /&gt;&lt;P N='Page' ID='2' /&gt;&lt;P N='TemplateControl' R='2' /&gt;&lt;P N='AppRelativeTemplateSourceDirectory' R='-1' /&gt;"></PublishingWebControls:RichHtmlField></td>						
						<td style="width:225px;vertical-align:top;text-align:justify;">
							<PublishingWebControls:RichHtmlField FieldName="ContentBody09" ID="ContentBody09" runat="server" __designer:Preview="&lt;div id=&quot;ContentBody09__ControlWrapper_RichHtmlField&quot; style=&quot;display:inline&quot;&gt;&lt;div align=&quot;left&quot; class=&quot;ms-formfieldcontainer&quot;&gt;&lt;div class=&quot;ms-formfieldlabelcontainer&quot; nowrap=&quot;nowrap&quot;&gt;&lt;span class=&quot;ms-formfieldlabel&quot; nowrap=&quot;nowrap&quot;&gt;ContentBody09&lt;/span&gt;&lt;/div&gt;&lt;div class=&quot;ms-formfieldvaluecontainer&quot;&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;" __designer:Values="&lt;P N='FieldName' ID='1' T='ContentBody09' /&gt;&lt;P N='Html' R='-1' /&gt;&lt;P N='Value' R='-1' /&gt;&lt;P N='Visible' T='False' /&gt;&lt;P N='ControlMode' E='1' /&gt;&lt;P N='InDesign' T='False' /&gt;&lt;P N='ID' R='1' /&gt;&lt;P N='Page' ID='2' /&gt;&lt;P N='TemplateControl' R='2' /&gt;&lt;P N='AppRelativeTemplateSourceDirectory' R='-1' /&gt;"></PublishingWebControls:RichHtmlField></td>						
						<td style="width:225px;vertical-align:top;text-align:justify;">
							<PublishingWebControls:RichHtmlField FieldName="ContentBody10" ID="ContentBody10" runat="server" __designer:Preview="&lt;div id=&quot;ContentBody10__ControlWrapper_RichHtmlField&quot; style=&quot;display:inline&quot;&gt;&lt;div align=&quot;left&quot; class=&quot;ms-formfieldcontainer&quot;&gt;&lt;div class=&quot;ms-formfieldlabelcontainer&quot; nowrap=&quot;nowrap&quot;&gt;&lt;span class=&quot;ms-formfieldlabel&quot; nowrap=&quot;nowrap&quot;&gt;ContentBody10&lt;/span&gt;&lt;/div&gt;&lt;div class=&quot;ms-formfieldvaluecontainer&quot;&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;" __designer:Values="&lt;P N='FieldName' ID='1' T='ContentBody10' /&gt;&lt;P N='Html' R='-1' /&gt;&lt;P N='Value' R='-1' /&gt;&lt;P N='Visible' T='False' /&gt;&lt;P N='ControlMode' E='1' /&gt;&lt;P N='InDesign' T='False' /&gt;&lt;P N='ID' R='1' /&gt;&lt;P N='Page' ID='2' /&gt;&lt;P N='TemplateControl' R='2' /&gt;&lt;P N='AppRelativeTemplateSourceDirectory' R='-1' /&gt;"></PublishingWebControls:RichHtmlField></td>												
						<td style="width:15px;"></td>	
					</tr>					
				</table>
			</td>
		</tr>
		</table>
	</div>
<div id="divContent">
	<PublishingWebControls:editmodepanel runat="server" __designer:Preview="&lt;Regions&gt;&lt;Region Name=&quot;0&quot; Editable=&quot;True&quot; Content=&quot;&amp;#xD;&amp;#xA;		&amp;lt;PublishingWebControls:RichHtmlField FieldName=&amp;quot;MetaOGDesc&amp;quot; ID=&amp;quot;MetaOGDesc&amp;quot; runat=&amp;quot;server&amp;quot; __designer:Preview=&amp;quot;&amp;amp;lt;div id=&amp;amp;quot;ctl02_MetaOGDesc__ControlWrapper_RichHtmlField&amp;amp;quot; style=&amp;amp;quot;display:inline&amp;amp;quot;&amp;amp;gt;&amp;amp;lt;div align=&amp;amp;quot;left&amp;amp;quot; class=&amp;amp;quot;ms-formfieldcontainer&amp;amp;quot;&amp;amp;gt;&amp;amp;lt;div class=&amp;amp;quot;ms-formfieldlabelcontainer&amp;amp;quot; nowrap=&amp;amp;quot;nowrap&amp;amp;quot;&amp;amp;gt;&amp;amp;lt;span class=&amp;amp;quot;ms-formfieldlabel&amp;amp;quot; nowrap=&amp;amp;quot;nowrap&amp;amp;quot;&amp;amp;gt;MetaOGDesc&amp;amp;lt;/span&amp;amp;gt;&amp;amp;lt;/div&amp;amp;gt;&amp;amp;lt;div class=&amp;amp;quot;ms-formfieldvaluecontainer&amp;amp;quot;&amp;amp;gt;&amp;amp;lt;/div&amp;amp;gt;&amp;amp;lt;/div&amp;amp;gt;&amp;amp;lt;/div&amp;amp;gt;&amp;quot; __designer:Values=&amp;quot;&amp;amp;lt;P N='FieldName' ID='1' T='MetaOGDesc' /&amp;amp;gt;&amp;amp;lt;P N='Html' R='-1' /&amp;amp;gt;&amp;amp;lt;P N='Value' R='-1' /&amp;amp;gt;&amp;amp;lt;P N='Visible' T='False' /&amp;amp;gt;&amp;amp;lt;P N='ControlMode' E='1' /&amp;amp;gt;&amp;amp;lt;P N='InDesign' T='False' /&amp;amp;gt;&amp;amp;lt;P N='ID' R='1' /&amp;amp;gt;&amp;amp;lt;P N='Page' ID='2' /&amp;amp;gt;&amp;amp;lt;P N='TemplateControl' R='2' /&amp;amp;gt;&amp;amp;lt;P N='AppRelativeTemplateSourceDirectory' R='-1' /&amp;amp;gt;&amp;quot;&amp;gt;&amp;#xD;&amp;#xA;		&amp;lt;/PublishingWebControls:RichHtmlField&amp;gt;&amp;#xD;&amp;#xA;		&amp;lt;PublishingWebControls:RichHtmlField FieldName=&amp;quot;MetaOGImages&amp;quot; ID=&amp;quot;MetaOGImages&amp;quot; runat=&amp;quot;server&amp;quot; __designer:Preview=&amp;quot;&amp;amp;lt;div id=&amp;amp;quot;ctl02_MetaOGImages__ControlWrapper_RichHtmlField&amp;amp;quot; style=&amp;amp;quot;display:inline&amp;amp;quot;&amp;amp;gt;&amp;amp;lt;div align=&amp;amp;quot;left&amp;amp;quot; class=&amp;amp;quot;ms-formfieldcontainer&amp;amp;quot;&amp;amp;gt;&amp;amp;lt;div class=&amp;amp;quot;ms-formfieldlabelcontainer&amp;amp;quot; nowrap=&amp;amp;quot;nowrap&amp;amp;quot;&amp;amp;gt;&amp;amp;lt;span class=&amp;amp;quot;ms-formfieldlabel&amp;amp;quot; nowrap=&amp;amp;quot;nowrap&amp;amp;quot;&amp;amp;gt;MetaOGImages&amp;amp;lt;/span&amp;amp;gt;&amp;amp;lt;/div&amp;amp;gt;&amp;amp;lt;div class=&amp;amp;quot;ms-formfieldvaluecontainer&amp;amp;quot;&amp;amp;gt;&amp;amp;lt;/div&amp;amp;gt;&amp;amp;lt;/div&amp;amp;gt;&amp;amp;lt;/div&amp;amp;gt;&amp;quot; __designer:Values=&amp;quot;&amp;amp;lt;P N='FieldName' ID='1' T='MetaOGImages' /&amp;amp;gt;&amp;amp;lt;P N='Html' R='-1' /&amp;amp;gt;&amp;amp;lt;P N='Value' R='-1' /&amp;amp;gt;&amp;amp;lt;P N='Visible' T='False' /&amp;amp;gt;&amp;amp;lt;P N='ControlMode' E='1' /&amp;amp;gt;&amp;amp;lt;P N='InDesign' T='False' /&amp;amp;gt;&amp;amp;lt;P N='ID' R='1' /&amp;amp;gt;&amp;amp;lt;P N='Page' ID='2' /&amp;amp;gt;&amp;amp;lt;P N='TemplateControl' R='2' /&amp;amp;gt;&amp;amp;lt;P N='AppRelativeTemplateSourceDirectory' R='-1' /&amp;amp;gt;&amp;quot;&amp;gt;&amp;#xD;&amp;#xA;		&amp;lt;/PublishingWebControls:RichHtmlField&amp;gt;&amp;#xD;&amp;#xA;	&quot; /&gt;&lt;/Regions&gt;&lt;table height=&quot;&quot; width=&quot;&quot; style=&quot;color:Black; ;&quot; cellpadding=1 cellspacing=0&gt;
                &lt;tr&gt;
                    &lt;td nowrap align=center valign=middle style=&quot;color:Black; background-color:LightBlue; font-family:Tahoma; font-size:X-Small; &quot;&gt;Edit Mode Panel&lt;/td&gt;
                &lt;/tr&gt;
                &lt;tr&gt;
                    &lt;td nowrap style=&quot;vertical-align:top;;&quot; _designerRegion=0&gt;&lt;/td&gt;
                &lt;/tr&gt;
            &lt;/table&gt;" __designer:Values="&lt;P N='Font' ID='1' /&gt;&lt;P N='ID' ID='2' T='ctl02' /&gt;&lt;P N='Page' ID='3' /&gt;&lt;P N='TemplateControl' R='3' /&gt;&lt;P N='AppRelativeTemplateSourceDirectory' R='-1' /&gt;&lt;P N='Visible' T='False' /&gt;">
		<PublishingWebControls:RichHtmlField FieldName="MetaOGDesc" ID="MetaOGDesc" runat="server">
		</PublishingWebControls:RichHtmlField>
		<PublishingWebControls:RichHtmlField FieldName="MetaOGImages" ID="MetaOGImages" runat="server">
		</PublishingWebControls:RichHtmlField>
	</PublishingWebControls:EditModePanel>	
</div>

<div style="display:none;">
<div id="divContent1">
	<div id="DivHomePageLeftPanel">
		<div id="divHomePagePromotion">
			<WebPartPages:WebPartZone id="webzoneBigBanner" EnableViewState="false" runat="server" title="Big Banner" __designer:Preview="&lt;Regions&gt;&lt;Region Name=&quot;0&quot; Editable=&quot;True&quot; Content=&quot;&quot; NamingContainer=&quot;True&quot; /&gt;&lt;/Regions&gt;&lt;table cellspacing=&quot;0&quot; cellpadding=&quot;0&quot; border=&quot;0&quot; id=&quot;webzoneBigBanner&quot;&gt;
	&lt;tr&gt;
		&lt;td style=&quot;white-space:nowrap;&quot;&gt;&lt;table cellspacing=&quot;0&quot; cellpadding=&quot;2&quot; border=&quot;0&quot; style=&quot;width:100%;&quot;&gt;
			&lt;tr&gt;
				&lt;td style=&quot;white-space:nowrap;&quot;&gt;Big Banner&lt;/td&gt;
			&lt;/tr&gt;
		&lt;/table&gt;&lt;/td&gt;
	&lt;/tr&gt;&lt;tr&gt;
		&lt;td style=&quot;height:100%;&quot;&gt;&lt;table cellspacing=&quot;0&quot; cellpadding=&quot;2&quot; border=&quot;0&quot; style=&quot;border-color:Gray;border-width:1px;border-style:Solid;width:100%;height:100%;&quot;&gt;
			&lt;tr valign=&quot;top&quot;&gt;
				&lt;td _designerRegion=&quot;0&quot;&gt;&lt;table cellspacing=&quot;0&quot; cellpadding=&quot;2&quot; border=&quot;0&quot; style=&quot;width:100%;&quot;&gt;
					&lt;tr&gt;
						&lt;td style=&quot;height:100%;&quot;&gt;&lt;/td&gt;
					&lt;/tr&gt;
				&lt;/table&gt;&lt;/td&gt;
			&lt;/tr&gt;
		&lt;/table&gt;&lt;/td&gt;
	&lt;/tr&gt;
&lt;/table&gt;" __designer:Values="&lt;P N='ID' ID='1' T='webzoneBigBanner' /&gt;&lt;P N='Title' ID='2' T='Big Banner' /&gt;&lt;P N='HeaderText' R='2' /&gt;&lt;P N='DisplayTitle' R='2' /&gt;&lt;P N='MenuPopupStyle'&gt;&lt;P N='CellPadding' T='1' /&gt;&lt;P N='CellSpacing' T='0' /&gt;&lt;/P&gt;&lt;P N='ControlStyle'&gt;&lt;P N='BorderColor' T='Gray' /&gt;&lt;P N='BorderWidth' T='1px' /&gt;&lt;P N='BorderStyle' E='4' /&gt;&lt;P N='Font' ID='3' /&gt;&lt;/P&gt;&lt;P N='Font' R='3' /&gt;&lt;P N='EnableViewState' T='False' /&gt;&lt;P N='Page' ID='4' /&gt;&lt;P N='TemplateControl' R='4' /&gt;&lt;P N='AppRelativeTemplateSourceDirectory' R='-1' /&gt;" __designer:Templates="&lt;Group Name=&quot;ZoneTemplate&quot;&gt;&lt;Template Name=&quot;ZoneTemplate&quot; Content=&quot;&quot; /&gt;&lt;/Group&gt;"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
		</div>
		<div id="divSlideShow"></div>
		<div id="divHomePageWhatsNews">
				<WebPartPages:WebPartZone id="webzoneBanner" EnableViewState="false" runat="server" title="Banner" __designer:Preview="&lt;Regions&gt;&lt;Region Name=&quot;0&quot; Editable=&quot;True&quot; Content=&quot;&quot; NamingContainer=&quot;True&quot; /&gt;&lt;/Regions&gt;&lt;table cellspacing=&quot;0&quot; cellpadding=&quot;0&quot; border=&quot;0&quot; id=&quot;webzoneBanner&quot;&gt;
	&lt;tr&gt;
		&lt;td style=&quot;white-space:nowrap;&quot;&gt;&lt;table cellspacing=&quot;0&quot; cellpadding=&quot;2&quot; border=&quot;0&quot; style=&quot;width:100%;&quot;&gt;
			&lt;tr&gt;
				&lt;td style=&quot;white-space:nowrap;&quot;&gt;Banner&lt;/td&gt;
			&lt;/tr&gt;
		&lt;/table&gt;&lt;/td&gt;
	&lt;/tr&gt;&lt;tr&gt;
		&lt;td style=&quot;height:100%;&quot;&gt;&lt;table cellspacing=&quot;0&quot; cellpadding=&quot;2&quot; border=&quot;0&quot; style=&quot;border-color:Gray;border-width:1px;border-style:Solid;width:100%;height:100%;&quot;&gt;
			&lt;tr valign=&quot;top&quot;&gt;
				&lt;td _designerRegion=&quot;0&quot;&gt;&lt;table cellspacing=&quot;0&quot; cellpadding=&quot;2&quot; border=&quot;0&quot; style=&quot;width:100%;&quot;&gt;
					&lt;tr&gt;
						&lt;td style=&quot;height:100%;&quot;&gt;&lt;/td&gt;
					&lt;/tr&gt;
				&lt;/table&gt;&lt;/td&gt;
			&lt;/tr&gt;
		&lt;/table&gt;&lt;/td&gt;
	&lt;/tr&gt;
&lt;/table&gt;" __designer:Values="&lt;P N='ID' ID='1' T='webzoneBanner' /&gt;&lt;P N='Title' ID='2' T='Banner' /&gt;&lt;P N='HeaderText' R='2' /&gt;&lt;P N='DisplayTitle' R='2' /&gt;&lt;P N='MenuPopupStyle'&gt;&lt;P N='CellPadding' T='1' /&gt;&lt;P N='CellSpacing' T='0' /&gt;&lt;/P&gt;&lt;P N='ControlStyle'&gt;&lt;P N='BorderColor' T='Gray' /&gt;&lt;P N='BorderWidth' T='1px' /&gt;&lt;P N='BorderStyle' E='4' /&gt;&lt;P N='Font' ID='3' /&gt;&lt;/P&gt;&lt;P N='Font' R='3' /&gt;&lt;P N='EnableViewState' T='False' /&gt;&lt;P N='Page' ID='4' /&gt;&lt;P N='TemplateControl' R='4' /&gt;&lt;P N='AppRelativeTemplateSourceDirectory' R='-1' /&gt;" __designer:Templates="&lt;Group Name=&quot;ZoneTemplate&quot;&gt;&lt;Template Name=&quot;ZoneTemplate&quot; Content=&quot;&quot; /&gt;&lt;/Group&gt;"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>		
		</div>
		<div style="clear:both;"></div>
		<div id="divHomePageContent">
				<PublishingWebControls:EditModePanel runat="server" __designer:Preview="&lt;Regions&gt;&lt;Region Name=&quot;0&quot; Editable=&quot;True&quot; Content=&quot;&amp;#xD;&amp;#xA;					&amp;lt;div class=&amp;quot;WideBox bodycopy&amp;quot; style=&amp;quot;background-color:#CCFFFF&amp;quot;&amp;gt;&amp;#xD;&amp;#xA;						Bank News&amp;lt;br&amp;gt;&amp;#xD;&amp;#xA;						&amp;lt;PublishingWebControls:RichHtmlField FieldName=&amp;quot;ContentBody17&amp;quot; ID=&amp;quot;BankNews&amp;quot; runat=&amp;quot;server&amp;quot; __designer:Preview=&amp;quot;&amp;amp;lt;div id=&amp;amp;quot;ctl03_BankNews__ControlWrapper_RichHtmlField&amp;amp;quot; style=&amp;amp;quot;display:inline&amp;amp;quot;&amp;amp;gt;&amp;amp;lt;div align=&amp;amp;quot;left&amp;amp;quot; class=&amp;amp;quot;ms-formfieldcontainer&amp;amp;quot;&amp;amp;gt;&amp;amp;lt;div class=&amp;amp;quot;ms-formfieldlabelcontainer&amp;amp;quot; nowrap=&amp;amp;quot;nowrap&amp;amp;quot;&amp;amp;gt;&amp;amp;lt;span class=&amp;amp;quot;ms-formfieldlabel&amp;amp;quot; nowrap=&amp;amp;quot;nowrap&amp;amp;quot;&amp;amp;gt;ContentBody17&amp;amp;lt;/span&amp;amp;gt;&amp;amp;lt;/div&amp;amp;gt;&amp;amp;lt;div class=&amp;amp;quot;ms-formfieldvaluecontainer&amp;amp;quot;&amp;amp;gt;&amp;amp;lt;/div&amp;amp;gt;&amp;amp;lt;/div&amp;amp;gt;&amp;amp;lt;/div&amp;amp;gt;&amp;quot; __designer:Values=&amp;quot;&amp;amp;lt;P N='FieldName' T='ContentBody17' /&amp;amp;gt;&amp;amp;lt;P N='Html' R='-1' /&amp;amp;gt;&amp;amp;lt;P N='Value' R='-1' /&amp;amp;gt;&amp;amp;lt;P N='Visible' T='False' /&amp;amp;gt;&amp;amp;lt;P N='ControlMode' E='1' /&amp;amp;gt;&amp;amp;lt;P N='InDesign' T='False' /&amp;amp;gt;&amp;amp;lt;P N='ID' T='BankNews' /&amp;amp;gt;&amp;amp;lt;P N='Page' ID='1' /&amp;amp;gt;&amp;amp;lt;P N='TemplateControl' R='1' /&amp;amp;gt;&amp;amp;lt;P N='AppRelativeTemplateSourceDirectory' R='-1' /&amp;amp;gt;&amp;quot;&amp;gt;&amp;#xD;&amp;#xA;						&amp;lt;/PublishingWebControls:RichHtmlField&amp;gt;&amp;#xD;&amp;#xA;						&amp;lt;/br&amp;gt;&amp;lt;/div&amp;gt;&amp;#xD;&amp;#xA;				&quot; /&gt;&lt;/Regions&gt;&lt;table height=&quot;&quot; width=&quot;&quot; style=&quot;color:Black; ;&quot; cellpadding=1 cellspacing=0&gt;
                &lt;tr&gt;
                    &lt;td nowrap align=center valign=middle style=&quot;color:Black; background-color:LightBlue; font-family:Tahoma; font-size:X-Small; &quot;&gt;Edit Mode Panel&lt;/td&gt;
                &lt;/tr&gt;
                &lt;tr&gt;
                    &lt;td nowrap style=&quot;vertical-align:top;;&quot; _designerRegion=0&gt;&lt;/td&gt;
                &lt;/tr&gt;
            &lt;/table&gt;" __designer:Values="&lt;P N='Font' ID='1' /&gt;&lt;P N='ID' ID='2' T='ctl03' /&gt;&lt;P N='Page' ID='3' /&gt;&lt;P N='TemplateControl' R='3' /&gt;&lt;P N='AppRelativeTemplateSourceDirectory' R='-1' /&gt;&lt;P N='Visible' T='False' /&gt;">
					<div class="WideBox bodycopy" style="background-color:#CCFFFF">
						Bank News<br>
						<PublishingWebControls:RichHtmlField FieldName="ContentBody17" ID="BankNews" runat="server">
						</PublishingWebControls:RichHtmlField>
						</br></div>
				</PublishingWebControls:EditModePanel>
				<div class="WideBox bodycopy">
					</div>
				<div class="WideBox" style="clear:both;">
					<WebPartPages:WebPartZone id="ContentWP1" runat="server" title="Zone 9" __designer:Preview="&lt;Regions&gt;&lt;Region Name=&quot;0&quot; Editable=&quot;True&quot; Content=&quot;&quot; NamingContainer=&quot;True&quot; /&gt;&lt;/Regions&gt;&lt;table cellspacing=&quot;0&quot; cellpadding=&quot;0&quot; border=&quot;0&quot; id=&quot;ContentWP1&quot;&gt;
	&lt;tr&gt;
		&lt;td style=&quot;white-space:nowrap;&quot;&gt;&lt;table cellspacing=&quot;0&quot; cellpadding=&quot;2&quot; border=&quot;0&quot; style=&quot;width:100%;&quot;&gt;
			&lt;tr&gt;
				&lt;td style=&quot;white-space:nowrap;&quot;&gt;Zone 9&lt;/td&gt;
			&lt;/tr&gt;
		&lt;/table&gt;&lt;/td&gt;
	&lt;/tr&gt;&lt;tr&gt;
		&lt;td style=&quot;height:100%;&quot;&gt;&lt;table cellspacing=&quot;0&quot; cellpadding=&quot;2&quot; border=&quot;0&quot; style=&quot;border-color:Gray;border-width:1px;border-style:Solid;width:100%;height:100%;&quot;&gt;
			&lt;tr valign=&quot;top&quot;&gt;
				&lt;td _designerRegion=&quot;0&quot;&gt;&lt;table cellspacing=&quot;0&quot; cellpadding=&quot;2&quot; border=&quot;0&quot; style=&quot;width:100%;&quot;&gt;
					&lt;tr&gt;
						&lt;td style=&quot;height:100%;&quot;&gt;&lt;/td&gt;
					&lt;/tr&gt;
				&lt;/table&gt;&lt;/td&gt;
			&lt;/tr&gt;
		&lt;/table&gt;&lt;/td&gt;
	&lt;/tr&gt;
&lt;/table&gt;" __designer:Values="&lt;P N='ID' ID='1' T='ContentWP1' /&gt;&lt;P N='Title' ID='2' T='Zone 9' /&gt;&lt;P N='HeaderText' R='2' /&gt;&lt;P N='DisplayTitle' R='2' /&gt;&lt;P N='MenuPopupStyle'&gt;&lt;P N='CellPadding' T='1' /&gt;&lt;P N='CellSpacing' T='0' /&gt;&lt;/P&gt;&lt;P N='ControlStyle'&gt;&lt;P N='BorderColor' T='Gray' /&gt;&lt;P N='BorderWidth' T='1px' /&gt;&lt;P N='BorderStyle' E='4' /&gt;&lt;P N='Font' ID='3' /&gt;&lt;/P&gt;&lt;P N='Font' R='3' /&gt;&lt;P N='Page' ID='4' /&gt;&lt;P N='TemplateControl' R='4' /&gt;&lt;P N='AppRelativeTemplateSourceDirectory' R='-1' /&gt;" __designer:Templates="&lt;Group Name=&quot;ZoneTemplate&quot;&gt;&lt;Template Name=&quot;ZoneTemplate&quot; Content=&quot;&quot; /&gt;&lt;/Group&gt;"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone></div>	
				<div class="LeftBox bodycopy">
					</div>
				<div class="WideBox" style="clear:both;">
					<WebPartPages:WebPartZone id="ContentWP2" runat="server" title="Zone 10" __designer:Preview="&lt;Regions&gt;&lt;Region Name=&quot;0&quot; Editable=&quot;True&quot; Content=&quot;&quot; NamingContainer=&quot;True&quot; /&gt;&lt;/Regions&gt;&lt;table cellspacing=&quot;0&quot; cellpadding=&quot;0&quot; border=&quot;0&quot; id=&quot;ContentWP2&quot;&gt;
	&lt;tr&gt;
		&lt;td style=&quot;white-space:nowrap;&quot;&gt;&lt;table cellspacing=&quot;0&quot; cellpadding=&quot;2&quot; border=&quot;0&quot; style=&quot;width:100%;&quot;&gt;
			&lt;tr&gt;
				&lt;td style=&quot;white-space:nowrap;&quot;&gt;Zone 10&lt;/td&gt;
			&lt;/tr&gt;
		&lt;/table&gt;&lt;/td&gt;
	&lt;/tr&gt;&lt;tr&gt;
		&lt;td style=&quot;height:100%;&quot;&gt;&lt;table cellspacing=&quot;0&quot; cellpadding=&quot;2&quot; border=&quot;0&quot; style=&quot;border-color:Gray;border-width:1px;border-style:Solid;width:100%;height:100%;&quot;&gt;
			&lt;tr valign=&quot;top&quot;&gt;
				&lt;td _designerRegion=&quot;0&quot;&gt;&lt;table cellspacing=&quot;0&quot; cellpadding=&quot;2&quot; border=&quot;0&quot; style=&quot;width:100%;&quot;&gt;
					&lt;tr&gt;
						&lt;td style=&quot;height:100%;&quot;&gt;&lt;/td&gt;
					&lt;/tr&gt;
				&lt;/table&gt;&lt;/td&gt;
			&lt;/tr&gt;
		&lt;/table&gt;&lt;/td&gt;
	&lt;/tr&gt;
&lt;/table&gt;" __designer:Values="&lt;P N='ID' ID='1' T='ContentWP2' /&gt;&lt;P N='Title' ID='2' T='Zone 10' /&gt;&lt;P N='HeaderText' R='2' /&gt;&lt;P N='DisplayTitle' R='2' /&gt;&lt;P N='MenuPopupStyle'&gt;&lt;P N='CellPadding' T='1' /&gt;&lt;P N='CellSpacing' T='0' /&gt;&lt;/P&gt;&lt;P N='ControlStyle'&gt;&lt;P N='BorderColor' T='Gray' /&gt;&lt;P N='BorderWidth' T='1px' /&gt;&lt;P N='BorderStyle' E='4' /&gt;&lt;P N='Font' ID='3' /&gt;&lt;/P&gt;&lt;P N='Font' R='3' /&gt;&lt;P N='Page' ID='4' /&gt;&lt;P N='TemplateControl' R='4' /&gt;&lt;P N='AppRelativeTemplateSourceDirectory' R='-1' /&gt;" __designer:Templates="&lt;Group Name=&quot;ZoneTemplate&quot;&gt;&lt;Template Name=&quot;ZoneTemplate&quot; Content=&quot;&quot; /&gt;&lt;/Group&gt;"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone></div>			
				<div class="WideBox" style="clear:both;">
					<WebPartPages:WebPartZone id="ContentWP3" runat="server" title="Zone 11" __designer:Preview="&lt;Regions&gt;&lt;Region Name=&quot;0&quot; Editable=&quot;True&quot; Content=&quot;&quot; NamingContainer=&quot;True&quot; /&gt;&lt;/Regions&gt;&lt;table cellspacing=&quot;0&quot; cellpadding=&quot;0&quot; border=&quot;0&quot; id=&quot;ContentWP3&quot;&gt;
	&lt;tr&gt;
		&lt;td style=&quot;white-space:nowrap;&quot;&gt;&lt;table cellspacing=&quot;0&quot; cellpadding=&quot;2&quot; border=&quot;0&quot; style=&quot;width:100%;&quot;&gt;
			&lt;tr&gt;
				&lt;td style=&quot;white-space:nowrap;&quot;&gt;Zone 11&lt;/td&gt;
			&lt;/tr&gt;
		&lt;/table&gt;&lt;/td&gt;
	&lt;/tr&gt;&lt;tr&gt;
		&lt;td style=&quot;height:100%;&quot;&gt;&lt;table cellspacing=&quot;0&quot; cellpadding=&quot;2&quot; border=&quot;0&quot; style=&quot;border-color:Gray;border-width:1px;border-style:Solid;width:100%;height:100%;&quot;&gt;
			&lt;tr valign=&quot;top&quot;&gt;
				&lt;td _designerRegion=&quot;0&quot;&gt;&lt;table cellspacing=&quot;0&quot; cellpadding=&quot;2&quot; border=&quot;0&quot; style=&quot;width:100%;&quot;&gt;
					&lt;tr&gt;
						&lt;td style=&quot;height:100%;&quot;&gt;&lt;/td&gt;
					&lt;/tr&gt;
				&lt;/table&gt;&lt;/td&gt;
			&lt;/tr&gt;
		&lt;/table&gt;&lt;/td&gt;
	&lt;/tr&gt;
&lt;/table&gt;" __designer:Values="&lt;P N='ID' ID='1' T='ContentWP3' /&gt;&lt;P N='Title' ID='2' T='Zone 11' /&gt;&lt;P N='HeaderText' R='2' /&gt;&lt;P N='DisplayTitle' R='2' /&gt;&lt;P N='MenuPopupStyle'&gt;&lt;P N='CellPadding' T='1' /&gt;&lt;P N='CellSpacing' T='0' /&gt;&lt;/P&gt;&lt;P N='ControlStyle'&gt;&lt;P N='BorderColor' T='Gray' /&gt;&lt;P N='BorderWidth' T='1px' /&gt;&lt;P N='BorderStyle' E='4' /&gt;&lt;P N='Font' ID='3' /&gt;&lt;/P&gt;&lt;P N='Font' R='3' /&gt;&lt;P N='Page' ID='4' /&gt;&lt;P N='TemplateControl' R='4' /&gt;&lt;P N='AppRelativeTemplateSourceDirectory' R='-1' /&gt;" __designer:Templates="&lt;Group Name=&quot;ZoneTemplate&quot;&gt;&lt;Template Name=&quot;ZoneTemplate&quot; Content=&quot;&quot; /&gt;&lt;/Group&gt;"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone></div>
				<div class="LeftBox bodycopy">
					</div>
				<div class="RightBox bodycopy">
					<PublishingWebControls:RichHtmlField FieldName="ContentBody12" ID="ContentBody12" runat="server" __designer:Preview="&lt;div id=&quot;ContentBody12__ControlWrapper_RichHtmlField&quot; style=&quot;display:inline&quot;&gt;&lt;div align=&quot;left&quot; class=&quot;ms-formfieldcontainer&quot;&gt;&lt;div class=&quot;ms-formfieldlabelcontainer&quot; nowrap=&quot;nowrap&quot;&gt;&lt;span class=&quot;ms-formfieldlabel&quot; nowrap=&quot;nowrap&quot;&gt;ContentBody12&lt;/span&gt;&lt;/div&gt;&lt;div class=&quot;ms-formfieldvaluecontainer&quot;&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;" __designer:Values="&lt;P N='FieldName' ID='1' T='ContentBody12' /&gt;&lt;P N='Html' R='-1' /&gt;&lt;P N='Value' R='-1' /&gt;&lt;P N='Visible' T='False' /&gt;&lt;P N='ControlMode' E='1' /&gt;&lt;P N='InDesign' T='False' /&gt;&lt;P N='ID' R='1' /&gt;&lt;P N='Page' ID='2' /&gt;&lt;P N='TemplateControl' R='2' /&gt;&lt;P N='AppRelativeTemplateSourceDirectory' R='-1' /&gt;"></PublishingWebControls:RichHtmlField></div>
				<div class="WideBox" style="clear:both;">
					<WebPartPages:WebPartZone id="ContentWP4" runat="server" title="Zone 12" __designer:Preview="&lt;Regions&gt;&lt;Region Name=&quot;0&quot; Editable=&quot;True&quot; Content=&quot;&quot; NamingContainer=&quot;True&quot; /&gt;&lt;/Regions&gt;&lt;table cellspacing=&quot;0&quot; cellpadding=&quot;0&quot; border=&quot;0&quot; id=&quot;ContentWP4&quot;&gt;
	&lt;tr&gt;
		&lt;td style=&quot;white-space:nowrap;&quot;&gt;&lt;table cellspacing=&quot;0&quot; cellpadding=&quot;2&quot; border=&quot;0&quot; style=&quot;width:100%;&quot;&gt;
			&lt;tr&gt;
				&lt;td style=&quot;white-space:nowrap;&quot;&gt;Zone 12&lt;/td&gt;
			&lt;/tr&gt;
		&lt;/table&gt;&lt;/td&gt;
	&lt;/tr&gt;&lt;tr&gt;
		&lt;td style=&quot;height:100%;&quot;&gt;&lt;table cellspacing=&quot;0&quot; cellpadding=&quot;2&quot; border=&quot;0&quot; style=&quot;border-color:Gray;border-width:1px;border-style:Solid;width:100%;height:100%;&quot;&gt;
			&lt;tr valign=&quot;top&quot;&gt;
				&lt;td _designerRegion=&quot;0&quot;&gt;&lt;table cellspacing=&quot;0&quot; cellpadding=&quot;2&quot; border=&quot;0&quot; style=&quot;width:100%;&quot;&gt;
					&lt;tr&gt;
						&lt;td style=&quot;height:100%;&quot;&gt;&lt;/td&gt;
					&lt;/tr&gt;
				&lt;/table&gt;&lt;/td&gt;
			&lt;/tr&gt;
		&lt;/table&gt;&lt;/td&gt;
	&lt;/tr&gt;
&lt;/table&gt;" __designer:Values="&lt;P N='ID' ID='1' T='ContentWP4' /&gt;&lt;P N='Title' ID='2' T='Zone 12' /&gt;&lt;P N='HeaderText' R='2' /&gt;&lt;P N='DisplayTitle' R='2' /&gt;&lt;P N='MenuPopupStyle'&gt;&lt;P N='CellPadding' T='1' /&gt;&lt;P N='CellSpacing' T='0' /&gt;&lt;/P&gt;&lt;P N='ControlStyle'&gt;&lt;P N='BorderColor' T='Gray' /&gt;&lt;P N='BorderWidth' T='1px' /&gt;&lt;P N='BorderStyle' E='4' /&gt;&lt;P N='Font' ID='3' /&gt;&lt;/P&gt;&lt;P N='Font' R='3' /&gt;&lt;P N='Page' ID='4' /&gt;&lt;P N='TemplateControl' R='4' /&gt;&lt;P N='AppRelativeTemplateSourceDirectory' R='-1' /&gt;" __designer:Templates="&lt;Group Name=&quot;ZoneTemplate&quot;&gt;&lt;Template Name=&quot;ZoneTemplate&quot; Content=&quot;&quot; /&gt;&lt;/Group&gt;"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone></div>
				<div class="WideBox">
					<PublishingWebControls:RichHtmlField FieldName="ContentBody01" ID="ContentBody13" runat="server" __designer:Preview="&lt;div id=&quot;ContentBody13__ControlWrapper_RichHtmlField&quot; style=&quot;display:inline&quot;&gt;&lt;div align=&quot;left&quot; class=&quot;ms-formfieldcontainer&quot;&gt;&lt;div class=&quot;ms-formfieldlabelcontainer&quot; nowrap=&quot;nowrap&quot;&gt;&lt;span class=&quot;ms-formfieldlabel&quot; nowrap=&quot;nowrap&quot;&gt;ContentBody01&lt;/span&gt;&lt;/div&gt;&lt;div class=&quot;ms-formfieldvaluecontainer&quot;&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;" __designer:Values="&lt;P N='FieldName' T='ContentBody01' /&gt;&lt;P N='Html' R='-1' /&gt;&lt;P N='Value' R='-1' /&gt;&lt;P N='Visible' T='False' /&gt;&lt;P N='ControlMode' E='1' /&gt;&lt;P N='InDesign' T='False' /&gt;&lt;P N='ID' ID='1' T='ContentBody13' /&gt;&lt;P N='Page' ID='2' /&gt;&lt;P N='TemplateControl' R='2' /&gt;&lt;P N='AppRelativeTemplateSourceDirectory' R='-1' /&gt;"></PublishingWebControls:RichHtmlField></div>
				<div class="LeftBox bodycopy">
					<PublishingWebControls:RichHtmlField FieldName="ContentBody14" ID="ContentBody14" runat="server" __designer:Preview="&lt;div id=&quot;ContentBody14__ControlWrapper_RichHtmlField&quot; style=&quot;display:inline&quot;&gt;&lt;div align=&quot;left&quot; class=&quot;ms-formfieldcontainer&quot;&gt;&lt;div class=&quot;ms-formfieldlabelcontainer&quot; nowrap=&quot;nowrap&quot;&gt;&lt;span class=&quot;ms-formfieldlabel&quot; nowrap=&quot;nowrap&quot;&gt;ContentBody14&lt;/span&gt;&lt;/div&gt;&lt;div class=&quot;ms-formfieldvaluecontainer&quot;&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;" __designer:Values="&lt;P N='FieldName' ID='1' T='ContentBody14' /&gt;&lt;P N='Html' R='-1' /&gt;&lt;P N='Value' R='-1' /&gt;&lt;P N='Visible' T='False' /&gt;&lt;P N='ControlMode' E='1' /&gt;&lt;P N='InDesign' T='False' /&gt;&lt;P N='ID' R='1' /&gt;&lt;P N='Page' ID='2' /&gt;&lt;P N='TemplateControl' R='2' /&gt;&lt;P N='AppRelativeTemplateSourceDirectory' R='-1' /&gt;"></PublishingWebControls:RichHtmlField></div>
				<div class="RightBox bodycopy">
					<PublishingWebControls:RichHtmlField FieldName="ContentBody15" ID="ContentBody15" runat="server" __designer:Preview="&lt;div id=&quot;ContentBody15__ControlWrapper_RichHtmlField&quot; style=&quot;display:inline&quot;&gt;&lt;div align=&quot;left&quot; class=&quot;ms-formfieldcontainer&quot;&gt;&lt;div class=&quot;ms-formfieldlabelcontainer&quot; nowrap=&quot;nowrap&quot;&gt;&lt;span class=&quot;ms-formfieldlabel&quot; nowrap=&quot;nowrap&quot;&gt;ContentBody15&lt;/span&gt;&lt;/div&gt;&lt;div class=&quot;ms-formfieldvaluecontainer&quot;&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;" __designer:Values="&lt;P N='FieldName' ID='1' T='ContentBody15' /&gt;&lt;P N='Html' R='-1' /&gt;&lt;P N='Value' R='-1' /&gt;&lt;P N='Visible' T='False' /&gt;&lt;P N='ControlMode' E='1' /&gt;&lt;P N='InDesign' T='False' /&gt;&lt;P N='ID' R='1' /&gt;&lt;P N='Page' ID='2' /&gt;&lt;P N='TemplateControl' R='2' /&gt;&lt;P N='AppRelativeTemplateSourceDirectory' R='-1' /&gt;"></PublishingWebControls:RichHtmlField></div>
				<div class="WideBox" style="clear:both;">
					<WebPartPages:WebPartZone id="ContentWP5" runat="server" title="Zone 13" __designer:Preview="&lt;Regions&gt;&lt;Region Name=&quot;0&quot; Editable=&quot;True&quot; Content=&quot;&quot; NamingContainer=&quot;True&quot; /&gt;&lt;/Regions&gt;&lt;table cellspacing=&quot;0&quot; cellpadding=&quot;0&quot; border=&quot;0&quot; id=&quot;ContentWP5&quot;&gt;
	&lt;tr&gt;
		&lt;td style=&quot;white-space:nowrap;&quot;&gt;&lt;table cellspacing=&quot;0&quot; cellpadding=&quot;2&quot; border=&quot;0&quot; style=&quot;width:100%;&quot;&gt;
			&lt;tr&gt;
				&lt;td style=&quot;white-space:nowrap;&quot;&gt;Zone 13&lt;/td&gt;
			&lt;/tr&gt;
		&lt;/table&gt;&lt;/td&gt;
	&lt;/tr&gt;&lt;tr&gt;
		&lt;td style=&quot;height:100%;&quot;&gt;&lt;table cellspacing=&quot;0&quot; cellpadding=&quot;2&quot; border=&quot;0&quot; style=&quot;border-color:Gray;border-width:1px;border-style:Solid;width:100%;height:100%;&quot;&gt;
			&lt;tr valign=&quot;top&quot;&gt;
				&lt;td _designerRegion=&quot;0&quot;&gt;&lt;table cellspacing=&quot;0&quot; cellpadding=&quot;2&quot; border=&quot;0&quot; style=&quot;width:100%;&quot;&gt;
					&lt;tr&gt;
						&lt;td style=&quot;height:100%;&quot;&gt;&lt;/td&gt;
					&lt;/tr&gt;
				&lt;/table&gt;&lt;/td&gt;
			&lt;/tr&gt;
		&lt;/table&gt;&lt;/td&gt;
	&lt;/tr&gt;
&lt;/table&gt;" __designer:Values="&lt;P N='ID' ID='1' T='ContentWP5' /&gt;&lt;P N='Title' ID='2' T='Zone 13' /&gt;&lt;P N='HeaderText' R='2' /&gt;&lt;P N='DisplayTitle' R='2' /&gt;&lt;P N='MenuPopupStyle'&gt;&lt;P N='CellPadding' T='1' /&gt;&lt;P N='CellSpacing' T='0' /&gt;&lt;/P&gt;&lt;P N='ControlStyle'&gt;&lt;P N='BorderColor' T='Gray' /&gt;&lt;P N='BorderWidth' T='1px' /&gt;&lt;P N='BorderStyle' E='4' /&gt;&lt;P N='Font' ID='3' /&gt;&lt;/P&gt;&lt;P N='Font' R='3' /&gt;&lt;P N='Page' ID='4' /&gt;&lt;P N='TemplateControl' R='4' /&gt;&lt;P N='AppRelativeTemplateSourceDirectory' R='-1' /&gt;" __designer:Templates="&lt;Group Name=&quot;ZoneTemplate&quot;&gt;&lt;Template Name=&quot;ZoneTemplate&quot; Content=&quot;&quot; /&gt;&lt;/Group&gt;"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone></div>						
			</div>	
	
	</div>		     	

	<div id="DivHomePageRightPanel">
		<div id="LogonHomePage">
			<WebPartPages:WebPartZone id="g_02C624F7155149BB9722ABC03D3040B8" runat="server" title="Zone 1" __designer:Preview="&lt;Regions&gt;&lt;Region Name=&quot;0&quot; Editable=&quot;True&quot; Content=&quot;&quot; NamingContainer=&quot;True&quot; /&gt;&lt;/Regions&gt;&lt;table cellspacing=&quot;0&quot; cellpadding=&quot;0&quot; border=&quot;0&quot; id=&quot;g_02C624F7155149BB9722ABC03D3040B8&quot;&gt;
	&lt;tr&gt;
		&lt;td style=&quot;white-space:nowrap;&quot;&gt;&lt;table cellspacing=&quot;0&quot; cellpadding=&quot;2&quot; border=&quot;0&quot; style=&quot;width:100%;&quot;&gt;
			&lt;tr&gt;
				&lt;td style=&quot;white-space:nowrap;&quot;&gt;Zone 1&lt;/td&gt;
			&lt;/tr&gt;
		&lt;/table&gt;&lt;/td&gt;
	&lt;/tr&gt;&lt;tr&gt;
		&lt;td style=&quot;height:100%;&quot;&gt;&lt;table cellspacing=&quot;0&quot; cellpadding=&quot;2&quot; border=&quot;0&quot; style=&quot;border-color:Gray;border-width:1px;border-style:Solid;width:100%;height:100%;&quot;&gt;
			&lt;tr valign=&quot;top&quot;&gt;
				&lt;td _designerRegion=&quot;0&quot;&gt;&lt;table cellspacing=&quot;0&quot; cellpadding=&quot;2&quot; border=&quot;0&quot; style=&quot;width:100%;&quot;&gt;
					&lt;tr&gt;
						&lt;td style=&quot;height:100%;&quot;&gt;&lt;/td&gt;
					&lt;/tr&gt;
				&lt;/table&gt;&lt;/td&gt;
			&lt;/tr&gt;
		&lt;/table&gt;&lt;/td&gt;
	&lt;/tr&gt;
&lt;/table&gt;" __designer:Values="&lt;P N='ID' ID='1' T='g_02C624F7155149BB9722ABC03D3040B8' /&gt;&lt;P N='Title' ID='2' T='Zone 1' /&gt;&lt;P N='HeaderText' R='2' /&gt;&lt;P N='DisplayTitle' R='2' /&gt;&lt;P N='MenuPopupStyle'&gt;&lt;P N='CellPadding' T='1' /&gt;&lt;P N='CellSpacing' T='0' /&gt;&lt;/P&gt;&lt;P N='ControlStyle'&gt;&lt;P N='BorderColor' T='Gray' /&gt;&lt;P N='BorderWidth' T='1px' /&gt;&lt;P N='BorderStyle' E='4' /&gt;&lt;P N='Font' ID='3' /&gt;&lt;/P&gt;&lt;P N='Font' R='3' /&gt;&lt;P N='Page' ID='4' /&gt;&lt;P N='TemplateControl' R='4' /&gt;&lt;P N='AppRelativeTemplateSourceDirectory' R='-1' /&gt;" __designer:Templates="&lt;Group Name=&quot;ZoneTemplate&quot;&gt;&lt;Template Name=&quot;ZoneTemplate&quot; Content=&quot;&quot; /&gt;&lt;/Group&gt;"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
		</div>
				<div id="DivHomepageBanner">
	
					<div id="divOnlineService_Switch" style="position:relative;height:auto;cursor:hand;cursor:pointer;"><img src="/PublishingImages/Eng/rateBanner/OnlineServices_Header_Up.png" /></div><img id="imgOnlineServicesMore" src="/PublishingImages/Eng/rateBanner/more.png" style="cursor:hand;cursor:pointer;position:absolute;clear:both;left:160px;top:2px;cursor:hand;" />
					<div id="divOnlineService_Content" style="position:relative;height:auto;background-color:white;margin-bottom:7px;top:-3px;margin-top:2px;">
						<WebPartPages:WebPartZone id="webzoneOnlineServices" EnableViewState="false" runat="server" title="Online Services" __designer:Preview="&lt;Regions&gt;&lt;Region Name=&quot;0&quot; Editable=&quot;True&quot; Content=&quot;&quot; NamingContainer=&quot;True&quot; /&gt;&lt;/Regions&gt;&lt;table cellspacing=&quot;0&quot; cellpadding=&quot;0&quot; border=&quot;0&quot; id=&quot;webzoneOnlineServices&quot;&gt;
	&lt;tr&gt;
		&lt;td style=&quot;white-space:nowrap;&quot;&gt;&lt;table cellspacing=&quot;0&quot; cellpadding=&quot;2&quot; border=&quot;0&quot; style=&quot;width:100%;&quot;&gt;
			&lt;tr&gt;
				&lt;td style=&quot;white-space:nowrap;&quot;&gt;Online Services&lt;/td&gt;
			&lt;/tr&gt;
		&lt;/table&gt;&lt;/td&gt;
	&lt;/tr&gt;&lt;tr&gt;
		&lt;td style=&quot;height:100%;&quot;&gt;&lt;table cellspacing=&quot;0&quot; cellpadding=&quot;2&quot; border=&quot;0&quot; style=&quot;border-color:Gray;border-width:1px;border-style:Solid;width:100%;height:100%;&quot;&gt;
			&lt;tr valign=&quot;top&quot;&gt;
				&lt;td _designerRegion=&quot;0&quot;&gt;&lt;table cellspacing=&quot;0&quot; cellpadding=&quot;2&quot; border=&quot;0&quot; style=&quot;width:100%;&quot;&gt;
					&lt;tr&gt;
						&lt;td style=&quot;height:100%;&quot;&gt;&lt;/td&gt;
					&lt;/tr&gt;
				&lt;/table&gt;&lt;/td&gt;
			&lt;/tr&gt;
		&lt;/table&gt;&lt;/td&gt;
	&lt;/tr&gt;
&lt;/table&gt;" __designer:Values="&lt;P N='ID' ID='1' T='webzoneOnlineServices' /&gt;&lt;P N='Title' ID='2' T='Online Services' /&gt;&lt;P N='HeaderText' R='2' /&gt;&lt;P N='DisplayTitle' R='2' /&gt;&lt;P N='MenuPopupStyle'&gt;&lt;P N='CellPadding' T='1' /&gt;&lt;P N='CellSpacing' T='0' /&gt;&lt;/P&gt;&lt;P N='ControlStyle'&gt;&lt;P N='BorderColor' T='Gray' /&gt;&lt;P N='BorderWidth' T='1px' /&gt;&lt;P N='BorderStyle' E='4' /&gt;&lt;P N='Font' ID='3' /&gt;&lt;/P&gt;&lt;P N='Font' R='3' /&gt;&lt;P N='EnableViewState' T='False' /&gt;&lt;P N='Page' ID='4' /&gt;&lt;P N='TemplateControl' R='4' /&gt;&lt;P N='AppRelativeTemplateSourceDirectory' R='-1' /&gt;" __designer:Templates="&lt;Group Name=&quot;ZoneTemplate&quot;&gt;&lt;Template Name=&quot;ZoneTemplate&quot; Content=&quot;&quot; /&gt;&lt;/Group&gt;"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone></div>

					<div id="divBankRates_Switch" style="position:relative;height:auto;"><img src="/PublishingImages/Eng/rateBanner/BankRates_Header_Up.png" /></div>			
					<div id="divBankRates_Content" style="position:relative;height:auto;background-color:white;margin-bottom:7px;top:-3px;margin-top:2px;">
						<WebPartPages:WebPartZone id="webzoneBankRate" EnableViewState="false" runat="server" title="Bank Rate" __designer:Preview="&lt;Regions&gt;&lt;Region Name=&quot;0&quot; Editable=&quot;True&quot; Content=&quot;&quot; NamingContainer=&quot;True&quot; /&gt;&lt;/Regions&gt;&lt;table cellspacing=&quot;0&quot; cellpadding=&quot;0&quot; border=&quot;0&quot; id=&quot;webzoneBankRate&quot;&gt;
	&lt;tr&gt;
		&lt;td style=&quot;white-space:nowrap;&quot;&gt;&lt;table cellspacing=&quot;0&quot; cellpadding=&quot;2&quot; border=&quot;0&quot; style=&quot;width:100%;&quot;&gt;
			&lt;tr&gt;
				&lt;td style=&quot;white-space:nowrap;&quot;&gt;Bank Rate&lt;/td&gt;
			&lt;/tr&gt;
		&lt;/table&gt;&lt;/td&gt;
	&lt;/tr&gt;&lt;tr&gt;
		&lt;td style=&quot;height:100%;&quot;&gt;&lt;table cellspacing=&quot;0&quot; cellpadding=&quot;2&quot; border=&quot;0&quot; style=&quot;border-color:Gray;border-width:1px;border-style:Solid;width:100%;height:100%;&quot;&gt;
			&lt;tr valign=&quot;top&quot;&gt;
				&lt;td _designerRegion=&quot;0&quot;&gt;&lt;table cellspacing=&quot;0&quot; cellpadding=&quot;2&quot; border=&quot;0&quot; style=&quot;width:100%;&quot;&gt;
					&lt;tr&gt;
						&lt;td style=&quot;height:100%;&quot;&gt;&lt;/td&gt;
					&lt;/tr&gt;
				&lt;/table&gt;&lt;/td&gt;
			&lt;/tr&gt;
		&lt;/table&gt;&lt;/td&gt;
	&lt;/tr&gt;
&lt;/table&gt;" __designer:Values="&lt;P N='ID' ID='1' T='webzoneBankRate' /&gt;&lt;P N='Title' ID='2' T='Bank Rate' /&gt;&lt;P N='HeaderText' R='2' /&gt;&lt;P N='DisplayTitle' R='2' /&gt;&lt;P N='MenuPopupStyle'&gt;&lt;P N='CellPadding' T='1' /&gt;&lt;P N='CellSpacing' T='0' /&gt;&lt;/P&gt;&lt;P N='ControlStyle'&gt;&lt;P N='BorderColor' T='Gray' /&gt;&lt;P N='BorderWidth' T='1px' /&gt;&lt;P N='BorderStyle' E='4' /&gt;&lt;P N='Font' ID='3' /&gt;&lt;/P&gt;&lt;P N='Font' R='3' /&gt;&lt;P N='EnableViewState' T='False' /&gt;&lt;P N='Page' ID='4' /&gt;&lt;P N='TemplateControl' R='4' /&gt;&lt;P N='AppRelativeTemplateSourceDirectory' R='-1' /&gt;" __designer:Templates="&lt;Group Name=&quot;ZoneTemplate&quot;&gt;&lt;Template Name=&quot;ZoneTemplate&quot; Content=&quot;&quot; /&gt;&lt;/Group&gt;"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone></div>
			
					<PublishingWebControls:EditModePanel runat="server" __designer:Preview="&lt;Regions&gt;&lt;Region Name=&quot;0&quot; Editable=&quot;True&quot; Content=&quot;&amp;#xD;&amp;#xA;						&amp;lt;div id=&amp;quot;divSharePrices_Switch&amp;quot; style=&amp;quot;position:relative;height:auto;cursor:hand;cursor:pointer;&amp;quot;&amp;gt;&amp;lt;img src=&amp;quot;/PublishingImages/Eng/rateBanner/Share_Prices_Header_Up.png&amp;quot; /&amp;gt;&amp;lt;/div&amp;gt;&amp;#xD;&amp;#xA;					&quot; /&gt;&lt;/Regions&gt;&lt;table height=&quot;&quot; width=&quot;&quot; style=&quot;color:Black; ;&quot; cellpadding=1 cellspacing=0&gt;
                &lt;tr&gt;
                    &lt;td nowrap align=center valign=middle style=&quot;color:Black; background-color:LightBlue; font-family:Tahoma; font-size:X-Small; &quot;&gt;Edit Mode Panel&lt;/td&gt;
                &lt;/tr&gt;
                &lt;tr&gt;
                    &lt;td nowrap style=&quot;vertical-align:top;;&quot; _designerRegion=0&gt;&lt;/td&gt;
                &lt;/tr&gt;
            &lt;/table&gt;" __designer:Values="&lt;P N='Font' ID='1' /&gt;&lt;P N='ID' ID='2' T='ctl04' /&gt;&lt;P N='Page' ID='3' /&gt;&lt;P N='TemplateControl' R='3' /&gt;&lt;P N='AppRelativeTemplateSourceDirectory' R='-1' /&gt;&lt;P N='Visible' T='False' /&gt;">
						<div id="divSharePrices_Switch" style="position:relative;height:auto;cursor:hand;cursor:pointer;"><img src="/PublishingImages/Eng/rateBanner/Share_Prices_Header_Up.png" /></div>
					</PublishingWebControls:EditModePanel>
					<PublishingWebControls:EditModePanel SuppressTag="false" PageDisplayMode="Display" runat="server" id="editMode_MainMenu" ScrollBars="none" __designer:Preview="&lt;Regions&gt;&lt;Region Name=&quot;0&quot; Editable=&quot;True&quot; Content=&quot;      	&amp;#xD;&amp;#xA;						&amp;lt;div id=&amp;quot;divSharePrices_Switch&amp;quot; style=&amp;quot;display:none;position:relative;height:auto;cursor:hand;cursor:pointer;&amp;quot;&amp;gt;&amp;lt;img src=&amp;quot;/PublishingImages/Eng/rateBanner/Share_Prices_Header_Up.png&amp;quot; /&amp;gt;&amp;lt;/div&amp;gt;			&amp;#xD;&amp;#xA;					&quot; /&gt;&lt;/Regions&gt;&lt;table height=&quot;&quot; width=&quot;&quot; style=&quot;color:Black; ;&quot; cellpadding=1 cellspacing=0&gt;
                &lt;tr&gt;
                    &lt;td nowrap align=center valign=middle style=&quot;color:Black; background-color:LightBlue; font-family:Tahoma; font-size:X-Small; &quot;&gt;Edit Mode Panel&lt;/td&gt;
                &lt;/tr&gt;
                &lt;tr&gt;
                    &lt;td nowrap style=&quot;vertical-align:top;;&quot; _designerRegion=0&gt;&lt;/td&gt;
                &lt;/tr&gt;
            &lt;/table&gt;" __designer:Values="&lt;P N='PageDisplayMode' E='2' /&gt;&lt;P N='Font' ID='1' /&gt;&lt;P N='ID' ID='2' T='editMode_MainMenu' /&gt;&lt;P N='Page' ID='3' /&gt;&lt;P N='TemplateControl' R='3' /&gt;&lt;P N='AppRelativeTemplateSourceDirectory' R='-1' /&gt;">      	
						<div id="divSharePrices_Switch" style="display:none;position:relative;height:auto;cursor:hand;cursor:pointer;"><img src="/PublishingImages/Eng/rateBanner/Share_Prices_Header_Up.png" /></div>			
					</PublishingWebControls:EditModePanel>
					<div id="divSharePrices_Content" style="position:relative;height:70px;background-color:white;margin-bottom:7px;top:-3px;margin-top:2px;">
						<WebPartPages:WebPartZone id="webzoneSharePrice" EnableViewState="false" runat="server" title="Share Price" __designer:Preview="&lt;Regions&gt;&lt;Region Name=&quot;0&quot; Editable=&quot;True&quot; Content=&quot;&quot; NamingContainer=&quot;True&quot; /&gt;&lt;/Regions&gt;&lt;table cellspacing=&quot;0&quot; cellpadding=&quot;0&quot; border=&quot;0&quot; id=&quot;webzoneSharePrice&quot;&gt;
	&lt;tr&gt;
		&lt;td style=&quot;white-space:nowrap;&quot;&gt;&lt;table cellspacing=&quot;0&quot; cellpadding=&quot;2&quot; border=&quot;0&quot; style=&quot;width:100%;&quot;&gt;
			&lt;tr&gt;
				&lt;td style=&quot;white-space:nowrap;&quot;&gt;Share Price&lt;/td&gt;
			&lt;/tr&gt;
		&lt;/table&gt;&lt;/td&gt;
	&lt;/tr&gt;&lt;tr&gt;
		&lt;td style=&quot;height:100%;&quot;&gt;&lt;table cellspacing=&quot;0&quot; cellpadding=&quot;2&quot; border=&quot;0&quot; style=&quot;border-color:Gray;border-width:1px;border-style:Solid;width:100%;height:100%;&quot;&gt;
			&lt;tr valign=&quot;top&quot;&gt;
				&lt;td _designerRegion=&quot;0&quot;&gt;&lt;table cellspacing=&quot;0&quot; cellpadding=&quot;2&quot; border=&quot;0&quot; style=&quot;width:100%;&quot;&gt;
					&lt;tr&gt;
						&lt;td style=&quot;height:100%;&quot;&gt;&lt;/td&gt;
					&lt;/tr&gt;
				&lt;/table&gt;&lt;/td&gt;
			&lt;/tr&gt;
		&lt;/table&gt;&lt;/td&gt;
	&lt;/tr&gt;
&lt;/table&gt;" __designer:Values="&lt;P N='ID' ID='1' T='webzoneSharePrice' /&gt;&lt;P N='Title' ID='2' T='Share Price' /&gt;&lt;P N='HeaderText' R='2' /&gt;&lt;P N='DisplayTitle' R='2' /&gt;&lt;P N='MenuPopupStyle'&gt;&lt;P N='CellPadding' T='1' /&gt;&lt;P N='CellSpacing' T='0' /&gt;&lt;/P&gt;&lt;P N='ControlStyle'&gt;&lt;P N='BorderColor' T='Gray' /&gt;&lt;P N='BorderWidth' T='1px' /&gt;&lt;P N='BorderStyle' E='4' /&gt;&lt;P N='Font' ID='3' /&gt;&lt;/P&gt;&lt;P N='Font' R='3' /&gt;&lt;P N='EnableViewState' T='False' /&gt;&lt;P N='Page' ID='4' /&gt;&lt;P N='TemplateControl' R='4' /&gt;&lt;P N='AppRelativeTemplateSourceDirectory' R='-1' /&gt;" __designer:Templates="&lt;Group Name=&quot;ZoneTemplate&quot;&gt;&lt;Template Name=&quot;ZoneTemplate&quot; Content=&quot;&quot; /&gt;&lt;/Group&gt;"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone></div>

				</div>
		</div>
</div>
</div>
</asp:Content>
