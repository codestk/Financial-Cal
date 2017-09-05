<%@ Page language="C#"   Inherits="Microsoft.SharePoint.Publishing.PublishingLayoutPage,Microsoft.SharePoint.Publishing,Version=12.0.0.0,Culture=neutral,PublicKeyToken=71e9bce111e9429c" meta:progid="SharePoint.WebPartPage.Document" %>
<%@ register Tagprefix="SharePointWebControls" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=12.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> <%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=12.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> <%@ Register Tagprefix="PublishingWebControls" Namespace="Microsoft.SharePoint.Publishing.WebControls" Assembly="Microsoft.SharePoint.Publishing, Version=12.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> <%@ Register Tagprefix="PublishingNavigation" Namespace="Microsoft.SharePoint.Publishing.Navigation" Assembly="Microsoft.SharePoint.Publishing, Version=12.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<asp:Content ContentPlaceholderID="PlaceHolderMain" runat="server">
<WebPartPages:SPProxyWebPartManager runat="server" id="ProxyWebPartManager"></WebPartPages:SPProxyWebPartManager>
<script language="javascript" type="text/javascript" src="/PublishingJavascript/jquery.SPServices-0.7.1a.min.js"></script>
<script language="javascript" type="text/javascript" src="/PublishingJavascript/SME_Functions.js"></script>

<div id="divMainContent" style="width:980px;height:auto;padding-bottom:20px;">
		<table width="990px" cellpadding="0" cellspacing="0">
<PublishingWebControls:EditModePanel runat="server" PageDisplayMode="Display">			
		<tr>
			<td colspan="6">							
				<div style="overflow:hidden;width:990px;height:270px;">
					<div id="divSlideShow_SME" style="height:270px;position:relative;"></div>
				</div>
				<div style="position:absolute;right:0px;top:240px;">
					<div id="divBullet_SlideShow_SME_Default"></div>
					<div id="divBullet_SlideShow_SME"></div>
				</div>
			</td>
		</tr>
</PublishingWebControls:EditModePanel>			
		<tr>
			<script language="javascript" type="text/javascript">
				if (sURLVariables[3] == 'BangkokBankThai'){
					siteLanguage = 'Thai';		
				}else{
					siteLanguage = 'Eng';		
				}
				
				document.write('<td><a href="#" id="clickContent1">');
				document.write('<img src="/PublishingImages/SMEs/'+siteLanguage+'/Menu/menu1.jpg" border="0" /></a></td>');
				document.write('<td><a href="#" id="clickContent2">');
				document.write('<img src="/PublishingImages/SMEs/'+siteLanguage+'/Menu/menu2.jpg" border="0" /></a></td>');
				document.write('<td><a href="#" id="clickContent3">');
				document.write('<img src="/PublishingImages/SMEs/'+siteLanguage+'/Menu/menu3.jpg" border="0" /></a></td>');
				document.write('<td><a href="#" id="clickContent4">');
				document.write('<img src="/PublishingImages/SMEs/'+siteLanguage+'/Menu/menu4.jpg" border="0" /></a></td>');
				document.write('<td><a href="#" id="clickContent5">');
				document.write('<img src="/PublishingImages/SMEs/'+siteLanguage+'/Menu/menu5.jpg" border="0" /></a></td>');
				document.write('<td style="width:366px;height:70px;border:none;">');
			
			</script>									
			<PublishingWebControls:RichHtmlField FieldName="ContentBody11" ID="ContentBody11" runat="server"></PublishingWebControls:RichHtmlField></td>
		</tr>
		<tr>
			<td colspan="6"><div id="divShowContent"></div></td>
		</tr>
		<tr><td colspan="6" id="tdContent">	
		
<div id="divContent" style="width:990px;height:auto;color:gray;font-size:small;">
	<table style="width:100%;height:auto;padding-top:15px;" border="0" cellpadding="0" cellspacing="0">
		<tr>
			<td style="width:100%;padding-left:15px;padding-right:15px;" colspan="5">
			<PublishingWebControls:RichHtmlField FieldName="ContentBody08" ID="ContentBody08" runat="server">
			</PublishingWebControls:RichHtmlField>
			</td>
		</tr>
		<tr>
			<td style="width:225px;padding-left:15px;">
			<PublishingWebControls:RichHtmlField FieldName="ContentBody14" ID="ContentBody14" runat="server">
			</PublishingWebControls:RichHtmlField>
			</td>
			<td style="width:225px;padding-left:15px;">
			<PublishingWebControls:RichHtmlField FieldName="ContentBody15" ID="ContentBody15" runat="server">
			</PublishingWebControls:RichHtmlField>
			</td>
			<td style="width:225px;padding-left:15px;">
			<PublishingWebControls:RichHtmlField FieldName="ContentBody16" ID="ContentBody16" runat="server">
			</PublishingWebControls:RichHtmlField>
			</td>
			<td style="width:225px;padding-left:15px;">
			<PublishingWebControls:RichHtmlField FieldName="ContentBody17" ID="ContentBody17" runat="server">
			</PublishingWebControls:RichHtmlField>
			</td>
			<td style="width:15px;"></td>
		</tr>
		<tr>
			<td style="width:225px;padding-left:15px;">
			<PublishingWebControls:RichHtmlField FieldName="ContentBody18" ID="ContentBody18" runat="server">
			</PublishingWebControls:RichHtmlField>
			</td>
			<td style="width:225px;padding-left:15px;">
			<PublishingWebControls:RichHtmlField FieldName="ContentBody19" ID="ContentBody19" runat="server">
			</PublishingWebControls:RichHtmlField>
			</td>
			<td style="width:225px;padding-left:15px;">
			<PublishingWebControls:RichHtmlField FieldName="ContentBody20" ID="ContentBody20" runat="server">
			</PublishingWebControls:RichHtmlField>
			</td>
			<td style="width:225px;padding-left:15px;">
			<PublishingWebControls:RichHtmlField FieldName="ContentBody21" ID="ContentBody21" runat="server">
			</PublishingWebControls:RichHtmlField>
			</td>
			<td style="width:15px;"></td>
		</tr>
	</table>
</div>
</td></tr>
</table>
</div>
</asp:Content>