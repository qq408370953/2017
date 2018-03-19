// JavaScript Document

//ActiveX
function printFlash(src, w, h, id, vars) {
	var Flash_html = "";
	Flash_html += '<object type="application/x-shockwave-flash" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=10.0.12.36" id="'+id+'" width="'+w+'" height="'+h+'">';
	Flash_html += '<param name="movie" value="'+src+'">';
	Flash_html += '<param name="quality" value="high">';
	Flash_html += '<param name="allowScriptAccess" value="always">';
	Flash_html += '<param name="wmode" value="transparent">';
	Flash_html += '<param name="FlashVars" value="'+vars+'">';
	Flash_html += '<param name="swliveconnect" value="true">';
	Flash_html += '<embed src="'+src+'" quality=high wmode="transparent" FlashVars="'+vars+'" width="'+w+'" height="'+h+'" swliveconnect="true" allowScriptAccess="always" id="'+id+'" name="param" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer"><\/embed>';
	Flash_html += '</object>';
	document.write(Flash_html);
}

// bg changeBgStory(); changeBgBrand(); changeBgThinking();
function changeBgStory() {
	document.body.style.backgroundImage='url(/Images/Common/bg_story.gif)'
}
function changeBgBrand() {
	document.body.style.backgroundImage='url(/Images/Common/bg_brand.gif)'
}
function changeBgThinking() {
	document.body.style.backgroundImage='url(/Images/Common/bg_thinking.gif)'
}
function changeBgEtc() {
	document.body.style.backgroundImage='url(/Images/Common/bg_etc.gif)'
}

function openSubIndex(){
	document.getElementById('gnb').style.height = "442px";
	document.getElementById('gnb').style.zIndex = "3";
}

//
var nowtab = 1;
function Change5depthTab(n) {
	document.getElementById('tab5depth'+nowtab).style.display = "none";
	document.getElementById('contentTab'+nowtab).style.display = "none";
	document.getElementById('tab5depth'+n).style.display = "block";
	document.getElementById('contentTab'+n).style.display = "block";
	
	nowtab = n;
}

// 
var nowtab = 1;
function ChangeNewsTab(n) {
	document.getElementById('tab'+nowtab).style.display = "none";
	document.getElementById('tab'+n).style.display = "block";
	
	nowtab = n;
}

//
function onBoardList(tr){
	tr.style.backgroundColor = "f6f6f6";
}
function outBoardList(tr){
	tr.style.backgroundColor = "ffffff";
}

// 
function showPop(id){
	document.getElementById('laypop_event'+id).style.display="block";
}
function hidePop(id){
	document.getElementById('laypop_event'+id).style.display="none";
}


// 
function initMoving(target, position, topLimit, btmLimit) {
	if (!target)
		return false;

	var obj = target;
	obj.initTop = position;
	obj.topLimit = topLimit;
	obj.bottomLimit = document.documentElement.scrollHeight - btmLimit;

	obj.style.position = "absolute";
	obj.top = obj.initTop;
	obj.left = obj.initLeft;

	if (typeof(window.pageYOffset) == "number") {
		obj.getTop = function() {
			return window.pageYOffset;
		}
	} else if (typeof(document.documentElement.scrollTop) == "number") {
		obj.getTop = function() {
			return document.documentElement.scrollTop;
		}
	} else {
		obj.getTop = function() {
			return 0;
		}
	}

	if (self.innerHeight) {
		obj.getHeight = function() {
			return self.innerHeight;
		}
	} else if(document.documentElement.clientHeight) {
		obj.getHeight = function() {
			return document.documentElement.clientHeight;
		}
	} else {
		obj.getHeight = function() {
			return 500;
		}
	}

	obj.move = setInterval(function() {
		if (obj.initTop > 0) {
			pos = obj.getTop() + obj.initTop;
		} else {
			pos = obj.getTop() + obj.getHeight() + obj.initTop;
			//pos = obj.getTop() + obj.getHeight() / 2 - 15;
		}

		if (pos > obj.bottomLimit)
			pos = obj.bottomLimit;
		if (pos < obj.topLimit)
			pos = obj.topLimit;

		interval = obj.top - pos;
		obj.top = obj.top - interval / 3;
		obj.style.top = obj.top + "px";
	}, 30)
}

/* scroll */
function getPosition(){
	var start, end, term;
	
	start = parseInt(document.getElementById('quick_nav').style.top, 10);
	end = document.documentElement.scrollTop + 20;
	term = 3;

	if ( start != end ) {
		var scale = Math.ceil( Math.abs( end - start ) / 20 );
		
		if ( end < start )	scale = -scale;
		document.getElementById('quick_nav').style.top = parseInt (document.getElementById('quick_nav').style.top, 10) + scale + "px";
		term = 1;
	}
	setTimeout ("getPosition()", term);
}
function moveBanner() {
	document.getElementById('quick_nav').style.top = document.documentElement.scrollTop + "px";
	getPosition();
	return true;
}
/* scroll anchor */
function getPositionA(){
	var start, end, term;
	
	start = parseInt(document.getElementById('anchor_top').style.top, 10);
	end = document.documentElement.scrollTop + 20;
	term = 3;

	if ( start != end ) {
		var scale = Math.ceil( Math.abs( end - start ) / 20 );
		
		if ( end < start )	scale = -scale;
		document.getElementById('anchor_top').style.top = parseInt (document.getElementById('anchor_top').style.top, 10) + scale + "px";
		term = 1;
	}
	setTimeout ("getPositionA()", term);
}
function moveBannerA() {
	document.getElementById('anchor_top').style.top = document.documentElement.scrollTop + "px";
	getPositionA();
	return true;
}


function goTop(){
 scrollTo(0,0);
}

//
function widthCheck(){
	var xwidth = document.documentElement.clientWidth; 
	if ( xwidth < 1000 )
	{
		document.body.style.overflowX='auto';
		document.getElementById('quick_nav').style.display = "none";
		document.getElementById('anchor_top').style.display = "block";
		moveBannerA();
	}
	else
	{
		document.body.style.overflowX='hidden';
		document.getElementById('quick_nav').style.display = "block";
		document.getElementById('anchor_top').style.display = "none";
	}
}

// 扑诀 				
function openPopup(name, url, left, top, width, height, toolbar, menubar, statusbar, scrollbar, resizable) 	{
  
  toolbar_str 	= 	toolbar 	? 'yes' : 'no';	
  menubar_str 	= 	menubar 	? 'yes' : 'no';	
  statusbar_str = 	statusbar   ? 'yes' : 'no';	
  scrollbar_str = 	scrollbar   ? 'yes' : 'no';	
  resizable_str = 	resizable   ? 'yes' : 'no';		
  window.open(url, name, 'left='+left+',top='+top+',width='+width+',height='+height+',toolbar='+toolbar_str+',menubar='+menubar_str+',status='+statusbar_str+',scrollbars='+scrollbar_str+',resizable='+resizable_str);
  
}



// 
function closeViewPop () {
		document.getElementById('pop_view_large').style.display = "none";
}
function openViewPop () {
		document.getElementById('pop_view_large').style.display = "block";
}

//
function popClose () {
	window.close();	
}

//
function setCookie(name, value, expire, path) { 
    document.cookie = name + "=" + escape(value) + "; path=" + path + ( (expire) ? "; expires=" + expire.toGMTString() : "")
}

//
function getCookie(uName) { 
    var flag = document.cookie.indexOf(uName+'='); 
    if (flag != -1) { 
	    flag += uName.length + 1 
	    end = document.cookie.indexOf(';', flag) 
	    if (end == -1) end = document.cookie.length 
	    return unescape(document.cookie.substring(flag, end)) 
    }
}


function closeLoginPop(id){
	document.getElementById(id).style.display = "none";
	setCookie('loginbox', 'false', 0, '/') ;
}
function openLoginPop(id){
	document.getElementById(id).style.display = "block";
	setCookie('loginbox', 'true', 0, '/') ;
}

// 
function closePop(id){
	document.getElementById(id).style.display = "none";
}
function openPop(id){
	document.getElementById(id).style.display = "block";
}

//
function openPopAgreement(){
	openPopup("agreement" , "/Common/Menu/agreement.aspx" , 10, 10 , 760 , 590, 0, 0, 0, 0, 0); 	
}
//
function openPopPrivacy(){
	openPopup("policy" , "/Common/Menu/policy.aspx" , 10, 10 , 760 , 670, 0, 0, 0, 0, 0); 	
}

//
function openQuick(){
	document.getElementById('quick_nav').style.width = "155px";
}
function closeQuick(){
	document.getElementById('quick_nav').style.width = "80px";
}

		
//
function goQna(){
	self.location.href = 'Consultation/list.aspx';
}

function goAdmissions(){
	self.location.href = 'admissions/applyEntranceExam.aspx';
}
	
	
//
function getObject(objectId) {
	// cross-browser function to get an object's style object given its
	if(document.getElementById && document.getElementById(objectId)) {
	// W3C DOM
	return document.getElementById(objectId);
	} else if (document.all && document.all(objectId)) {
	// MSIE 4 DOM
	return document.all(objectId);
	} else if (document.layers && document.layers[objectId]) {
	// NN 4 DOM.. note: this won't find nested layers
	return document.layers[objectId];
	} else {
	return false;
	}
} // getObject

	
function getStyleObject(objectId) {
	// cross-browser function to get an object's style object given its
	if(document.getElementById && document.getElementById(objectId)) {
	// W3C DOM
	return document.getElementById(objectId).style;
	} else if (document.all && document.all(objectId)) {
	// MSIE 4 DOM
	return document.all(objectId).style;
	} else if (document.layers && document.layers[objectId]) {
	// NN 4 DOM.. note: this won't find nested layers
	return document.layers[objectId];
	} else {
	return false;
	}
} // getStyleObject

function showKateAuthenticationHandler() {
	openPopup("kateAuthentication" , "/cdi/kateAuthentication.html" , 10, 10 , 710 , 735 ); 	
}
	
	
function showQcTrainingSupportSystemHandler(typ)	
{
	for(var i=1 ; i <=2 ; ++i)	
	{
		getObject("btn_showQcTrainingSupportSystem" + i).src = "/images/qc/trainingSupportSystem/btn_show"+i+".gif";
		getStyleObject("qcTrainingSupportSystem" + i).display = 'none';
	}
	
	getObject("btn_showQcTrainingSupportSystem" + typ).src = "/images/qc/trainingSupportSystem/btn_show"+typ+"_on.gif";
	getStyleObject("qcTrainingSupportSystem" + typ).display = '';
	
	
}
	
	
function showAprilAboutTheProgramHandler(typ)
{
	for(var i=1 ; i <=2 ; ++i)	
	{
		getObject("btn_showAprilAboutTheProgram" + i).src = "/images/april/aboutTheProgram/btn_show"+i+".gif";
		getStyleObject("aprilAboutTheProgram" + i).display = 'none';
	}
	
	getObject("btn_showAprilAboutTheProgram" + typ).src = "/images/april/aboutTheProgram/btn_show"+typ+"_on.gif";
	getStyleObject("aprilAboutTheProgram" + typ).display = '';
	
}
	

function showTextBookHandler(typ)
{
	for(var i=1 ; i <=2 ; ++i)	
	{
		getObject("btn_showTextBook" + i).src = "/Images/Brand/cdi/textbook/btn_showTextBook"+i+".gif";
		getStyleObject("textBook" + i).display = 'none';
	}
	
	getObject("btn_showTextBook" + typ).src = "/Images/Brand/cdi/textbook/btn_showTextBook"+typ+"_on.gif";
	getStyleObject("textBook" + typ).display = '';
}
	
function showTextBookHandlerA(typ)
{
	for(var i=1 ; i <=2 ; ++i)	
	{
		getObject("btn_showTextBook" + i).src = "/Images/Brand/april/textbook/btn_showTextBook"+i+".gif";
		getStyleObject("textBookA" + i).display = 'none';
	}
	
	getObject("btn_showTextBook" + typ).src = "/Images/Brand/april/textbook/btn_showTextBook"+typ+"_on.gif";
	getStyleObject("textBookA" + typ).display = '';
}

function showTextBookHandler_B3_1(num , typ)
{
	for(var i=1 ; i <=num ; ++i)	
	{
		getObject("btn_showTextBook" + i).src = "/Images/Brand/cdi/textbook/btn_showLv"+i+".gif";
		getStyleObject("textBook" + i).display = 'none';
	}
	
	getObject("btn_showTextBook" + typ).src = "/Images/Brand/cdi/textbook/btn_showLv"+typ+"_on.gif";
	getStyleObject("textBook" + typ).display = '';
}
	
	
function createXMLHttpRequest() {
	
	try {		
		return new ActiveXObject("Msxml2.XMLHTTP");
	} catch (e) {	
	}
		
	try {		
		return new ActiveXObject("Microsoft.XMLHTTP");
	} catch (e) {	
	}
		
	try {		
		return new XMLHttpRequest(); 
	} catch (e) {		
	}
		
	alert("XMLHttpRequest not supported");
	return null;

}


// 
function fnLayerShow(){
	var objLayer = document.getElementById("Layer");
	var objLayerContents = document.getElementById("Layer-Contents");
	objLayer.style.display = "block";

	//ie6
	if(navigator.userAgent.indexOf("MSIE 6")>-1 && navigator.userAgent.indexOf("MSIE 7")<0){
		if (!document.getElementById("IE6Iframe")){
			var ie6_ifm = document.createElement("iframe");
			ie6_ifm.setAttribute("id","IE6Iframe");
			ie6_ifm.style.position = "absolute";
			ie6_ifm.style.opacity = "0";
			ie6_ifm.style.filter = "alpha(opacity=0)";
			ie6_ifm.style.zindex = "-1";
			ie6_ifm.style.left = "0";
			ie6_ifm.style.top = "0";
			ie6_ifm.style.width = objLayerContents.offsetWidth;
			ie6_ifm.style.height = objLayerContents.offsetHeight;
			objLayer.appendChild(ie6_ifm);
		}
	}
}

function fnLayerClose(){
	var objLayer = document.getElementById("Layer");
	objLayer.style.display = "none";
}

// 
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}



// print
function printFlash2(fid,src,wid,hei,wmd,fvs) {
    this.fPrint = '';
    this.Src = src;
    this.Width = wid;
    this.Height = hei;
    this.Wmod = (wmd != undefined)? wmd :'';
    this.FlashVars = (fvs != undefined)? fvs :'';
    fPrint = '<object id="' + fid + '" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=10.0.12.36"';
    fPrint += ' width="'+Width+'"';
    fPrint += ' height="'+Height+'">';
    fPrint += '<param name="allowScriptAccess" value="always">';
    fPrint += '<param name="movie" value="'+Src+'">';
    fPrint += '<param name="quality" value="high">';
    fPrint += '<param name="bgcolor" value="#FFFFFF">';
    fPrint += (Wmod != null) ? '<param name="wmode" value="'+Wmod+'">' : '';
    fPrint += (FlashVars != null) ? '<param name="FlashVars" value="'+FlashVars+'">' : '';
    fPrint += '<embed';
    fPrint += fPrint + ' src="'+Src+'"';
	fPrint += ' wmode="transparent"';
    fPrint += (FlashVars != null) ? ' FlashVars="'+FlashVars+'"' : '';
    fPrint += ' quality="high"';
    fPrint += ' allowScriptAccess="always"';
    fPrint += ' pluginspage="http://www.macromedia.com/go/getflashplayer"';
    fPrint += ' type="application/x-shockwave-flash"';
    fPrint += ' width="'+Width+'"';
    fPrint += ' height="'+Height+'"';
	fPrint += ' bgcolor="#FFFFFF"';
    fPrint += '></embed>';
    fPrint += '</object>';
    
	document.write(fPrint);
}

// 
var ns4=document.layers
var ie4=document.all
var ns6=document.getElementById&&!document.all

// onfocus 
function removeLinkLine() {
 if (!ns6) {
  document.onfocusin = function(){
   var el = event.srcElement;
   if(el.tagName == "A" || el.tagName == "IMG") {
    el.blur();
   }
  }
 } else {
  function focoActivo (evt) {
   var el = evt.target;
   if(el.tagName == "A" || el.tagName == "IMG") {
    el.blur();
   }
  }
  function focoPerdido (evt) {
   if(el.tagName == "A" || el.tagName == "IMG") {
    el.blur();
   }
  }
//  document.addEventListener('DOMFocusIn', focoActivo, false);
//  document.addEventListener('DOMFocusOut', focoPerdido, false);
  document.addEventListener('focus', focoActivo, true);
  document.addEventListener('blur', focoPerdido, true);
 }
}
 
removeLinkLine();
