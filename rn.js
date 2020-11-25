if (void 0 === window.rNA_init) {
  window.rNA_version = 2;
  window.rNA_params = {
  };
  window.rNA_loaded = 0;
  window.rNA_cE = document.createElement.bind(document);
  
  window.rNA_init = function () {
	  
    if (void 0 !== window.rNA && !0 !== window.rNA_init.running) {
		console.log(window.rNA);
      window.rNA_init.running = !0;
      window.rNA_prot = 'https:' == document.location.protocol ? 'https' : 'http';
      void 0 === window.rNA_vid && (window.rNA_vid = window.rNA_gC('rna'), !1 === window.rNA_vid ? (window.rNA_vid = window.rNA_gVID(), window.rNA_sC('rna', window.rNA_vid), window.rNA_vid = 'vid=' + window.rNA_vid +
      '&nv=1')  : window.rNA_vid = 'vid=' + window.rNA_vid);
      for (var a in window.rNA) if (window.rNA[a]) if (15 <= window.rNA_loaded) document.getElementById(a).style.display = 'none';
       else {
        var c = window.rNA[a];
        window.rNA[a] = null;
        if (!1 === window.rNA_gC(a + 'f')) {
          window.rNA_params[a] = c;
          window.rNA_loaded++;
          a = 'v=' + window.rNA_version + '&' + window.rNA_vid;
          for (var b in c) a += ('' == a ? '' : '&') + b + '=' + escape(c[b]);
          c = window.rNA_cE('script');
          c.type = 'text/javascript';
          c.async = !0;
          c.src = window.rNA_prot + '://nativeadmatch.com/code/3/?' + a + '&l=' + window.rNA_l +
          '&w=' + window.outerWidth + 'x' + window.outerHeight + '&nc=' + Date.now();
          document.body.appendChild(c);
          break
        }
      }
    }
  };
  window.rNA_gO = function (a) {
    var c = document.getElementById(a);
    if (c || window == top) c && (c.pw = window, c.pid = 0);
     else try {
      if (c = top.document.getElementById(a)) c.pw = top,
      c.pid = 1
    } catch (b) {
      c = !1
    }
    return c
  };
  window.rNA_adjAdTitle = function (a) {
    var c = void 0 !== window.rNA_params[a].fmode ? window.rNA_params[a].fmode : 0,
    b = window.rNA_gO(a);
    if (window.rNA_getXY(b).v) {
      for (var d = b.parentNode; 150 > b.clientWidth && !b.rPN && void 0 !==
      d; ) if (150 <= d.clientWidth) {
        b.rPN = d;
        break
      } else d = d.parentNode;
      b.rPN && b.rPN.clientWidth != b.clientWidth && (b.style.width = b.rPN.clientWidth + 'px');
      for (var f = d = 0, g = 0, e = 0, m = {
      }; b = window.rNA_gO(a + '_' + d + '_title'); ) {
        d || 'rna_header_title' != b.className || (f = 1);
        e = b.parentNode;
        if (b.pWH != e.clientWidth + 'x' + e.clientHeight) {
          if (b.title) {
            2 == c ? e.style.height = '1.2em' : 1 == c ? b.style.fontSize = '1em' : (e.style.height = '', b.innerHTML = b.title);
            var l = window.rNA_gO(a + '_' + d + '_text');
            l && (l.style.height = 'auto')
          } else b.title = b.innerHTML;
          for (var h = 1 == c ? 1 : 2 == c ? 0 : b.title.length - 3, k = 1.2; 2.6 >= k && !(e.scrollHeight <= e.clientHeight); k += 0.1) e.style.height = k + 'em';
          for (k = 0; 1000 > h && e.scrollHeight > e.clientHeight; ) {
            k = e.clientHeight;
            if (c) 2 == c ? (h += 0.4, e.style.height = h + 'em')  : (h -= 0.05, b.style.fontSize = h + 'em');
             else if (--h, 0 > h) break;
             else b.innerHTML = b.title.substring(0, h) + '...';
            if (k == e.clientHeight) break
          }
          c || (e.style.height = 'auto');
          b.pWH = e.clientWidth + 'x' + e.clientHeight;
          1 != window.rNA_params[a].layout && (b = window.rNA_gO(a + '_' + d + '_text')) && (b = 'rna_ad_h' == b.parentNode.className ?
          b.parentNode.clientHeight - ((l = window.rNA_gO(a + '_' + (0 == d - f ? d + 1 : d - 1) + '_image')) ? l.clientHeight : 0)  : b.clientHeight, b > g && (g = b), e = window.rNA_getXY(window.rNA_gO(a + '_' + d)), !m[e.y] || b > m[e.y]) && (m[e.y] = b)
        }
        d++
      }
      if (0 != g && 1 != window.rNA_params[a].layout) for (; --d >= f; ) if (b = window.rNA_gO(a + '_' + d + '_text')) e = window.rNA_getXY(window.rNA_gO(a + '_' + d)),
      e = m[e.y] ? m[e.y] : g,
      'rna_ad_h' == b.parentNode.className ? (e += (l = window.rNA_gO(a + '_' + (0 == d - f ? d + 1 : d - 1) + '_image')) ? l.clientHeight : 0, b = window.rNA_gO(a + '_' + d + '_image'), b.clientHeight <
      e && (b.style.height = e + 'px'))  : (b.style.height = e + 'px', b = window.rNA_gO(a + '_' + d + '_image'), !0 === window.rNA_params[a].fixed ? b.style.height = b.parentNode.clientHeight - e + 'px' : b.style.marginBottom = e + 'px')
    }
    setTimeout('window.rNA_adjAdTitle(\'' + a + '\');', 1000)
  };
  window.rNA_regAd = function (a, c, b) {
    void 0 === window.rNAp && (window.rNAp = {
    });
    window.rNAp[a] = window.rNA_prot + '://nativeadmatch.com' + c;
    for (c = 0; c < b.length; c++) {
      var d = window.rNA_gO(a + '_' + c);
      if (d) for (var f = d.getElementsByTagName('A'), g = 0; g < f.length; g++) - 1 == f[g].href.indexOf('#info') && (f[g].pw = d.pw, f[g].rNA = a, f[g].dU = f[g].href, f[g].cU = b[c], f[g].onmousedown = window.rNA_aOn, f[g].ontouchstart = window.rNA_aOn, f[g].onclick = window.rNA_aGo, f[g].oncontextmenu = window.rNA_aCx, f[g].onblur = window.rNA_aOut)
    }
    window.rNApT || (window.rNApT = setInterval(window.rNA_chkAd, 100));
    window.rNA_chkAd()
  };
  window.rNA_chkAd = function () {
    var a = 0,
    c = {
    };
    if (window.rNAp) for (var b in window.rNAp) if (window.rNAp[b]) {
      var d = window.rNA_gO(b);
      if (d) {
        var f = window.rNA_getXY(d);
        if (f.v) {
          var g = window.rNA_getWH(d);
          void 0 === c[d.pid] && (c[d.pid] = window.rNA_getView(d.pw));
          d = c[d.pid];
          window.rNA_adjAdTitle(b);
          window.rNA_gO(b + 'c0') || d.x < f.x + g.w && d.x + d.w >= f.x && d.y < f.y + g.h && d.y + d.h > f.y ? (window.rNA_cE('img').src = window.rNAp[b], window.rNAp[b] = null)  : a++
        } else a++
      }
    }
    0 < a ? window.rNApT || (window.rNApT = setInterval(window.rNA_chkAd, 100))  : (clearInterval(window.rNApT), window.rNApT = null)
  };
  window.rNA_aOut = function (a) {
    this.dU && (this.href = this.dU)
  };
  window.rNA_aOn = function (a) {
    this.sT = (new Date).getTime()
  };
  window.rNA_aGo = function (a) {
    if (this.cU) {
      var c = window.rNA_getWH(this),
      b = window.rNA_getXY(this),
      d = window.rNA_getView(window),
      f = window.rNA_params[this.rNA].overlay;
      a = [
        a.pageX ? a.pageX : a.clientX + (f ? 0 : d.x),
        a.pageY ? a.pageY : a.clientY + (f ? 0 : d.y)
      ];
	  this.target ='_self';
      this.href = window.rNA_prot + '://nativeadmatch.com/' + ('O' == this.cU.charAt(0) ? 'go/' : 'dc/?id=') + this.cU.substr(1) + '&' + window.rNA_vid + '&h=' + (a[0] - b.x) + ',' + (a[1] - b.y) + ',' + c.w + ',' + c.h + ',' + (((new Date).getTime() - this.sT) / 1000).toFixed(3)
    
	}
  };
  window.rNA_aCx = function (a) {
    this.href = '#click_to_view'
  };
  window.rNA_getView = function (a) {
    var c = a.document.body,
    b = a.document.documentElement;
    return {
      x: void 0 !== a.pageXOffset ? a.pageXOffset : b.scrollLeft || c.scrollLeft || 0,
      y: void 0 !== a.pageYOffset ? a.pageYOffset : b.scrollTop || c.scrollTop || 0,
      w: a.innerWidth ? a.innerWidth : c.clientWidth,
      h: a.innerHeight ? a.innerHeight : c.clientHeight
    }
  };
  window.rNA_getXY = function (a) {
    var c = 0,
    b = 0,
    d = a.offsetWidth || a.offsetHeight || a.getClientRects().length ? 1 : 0;
    if (d) if (a.getBoundingClientRect) b = window.rNA_getView(a.pw || window),
    a = a.getBoundingClientRect(),
    c = Math.floor(a.left + b.x),
    b = Math.floor(a.top +
    b.y);
     else if (a.offsetParent) for (; a; ) c += a.offsetLeft - ('BODY' == a.tagName ? 0 : a.scrollLeft) + a.clientLeft,
    b += a.offsetTop - ('BODY' == a.tagName ? 0 : a.scrollTop) + a.clientTop,
    a = a.offsetParent;
    return {
      x: c,
      y: b,
      v: d
    }
  };
  window.rNA_getWH = function (a) {
    return {
      w: a.clientWidth ? a.clientWidth : a.offsetWidth ? a.offsetWidth : 0,
      h: a.clientHeight ? a.clientHeight : a.offsetHeight ? a.offsetHeight : 0
    }
  };
  window.rNA_showAdX = function (a, c) {
    var b = window.rNA_gO('RNAADX');
    if (!b) {
      if (!0 === c) return !1;
      window.rNA_buildAdX();
      return window.rNA_showAdX(a, !0)
    }
    window.rNA_gO('RNAADXOPT').style.display = '';
    window.rNA_gO('RNAADXGO').style.display = 'none';
    b.oA = a;
    b.style.display = ''
  };
  window.rNA_hideAdX = function () {
    window.rNA_gO('RNAADX').style.display = 'none'
  };
  window.rNA_hideInfo = function () {
    window.rNA_gO('RNAINF0').style.display = 'none'
  };
  window.rNA_showInfo = function (a) {
    var c = window.rNA_gO('RNAINF0');
    if (!c) {
      if (!0 === a) return !1;
      window.rNA_buildInfo();
      return window.rNA_showInfo(!0)
    }
    c.style.display = ''
  };
  window.rNA_repeat = function (a, c) {
    for (var b = '', d = 0; d < c; d++) b += a;
    return b
  };
  window.rNA_gVID = function () {
    window.rna_s = window.performance && 'function' === typeof window.performance.now ? performance.now()  : Date.now();
    return window.rNA_repeat('x', 32).replace(/x/g, rNA_rCG)
  };
  window.rNA_rCG = function (a) {
    var c = (window.rna_s + 16 * Math.random()) % 16 | 0;
    return ('x' == a ? c : c & 3 | 8).toString(16)
  };
  window.rNA_sC = function (a, c, b) {
    b = !1 !== b ? new Date(Date.now() + (b ? b : 3153600000000))  : b;
    window.rna_cd || rNA_fCD(a);
    document.cookie = a + '=' + escape(c) + '; path=/; domain=.' + window.rna_cd + ';' + (!1 !== b ? ' expires=' + b.toUTCString()  : '');
    window.localStorage && !1 !== b && window.localStorage.setItem(a, b.getTime() + ';' + c)
  };
  window.rNA_gC = function (a) {
    var c = ';' + document.cookie,
    b;
    return - 1 != (b = c.search(new RegExp('[; ]+' + a + '='))) ? (b = c.indexOf('=', b) + 1, a = c.indexOf(';', b), - 1 == a ? c.substr(b)  : c.substr(b, a - b))  : window.localStorage && (b = window.localStorage.getItem(a)) ? ';' == b.charAt(13) && parseInt(b.substr(0, 13)) > (new Date).getTime() ? b.substr(14)  : !1 : !1
  };
  window.rNA_fCD = function (a) {
    var c = window.location.host.split('.');
    if (2 < c.length) {
      var b = c.length;
      window.rna_cd = c[b - 2] + '.' + c[b - 1];
      document.cookie = a + '=1; path=/; domain=.' +
      window.rna_cd;
      '1' != rNA_gC(a) && (window.rna_cd = c[b - 3] + '.' + window.rna_cd)
    } else window.rna_cd = 1 == c.length ? c[0] : c[0] + '.' + c[1]
  };
  window.rNA_SS = function (a, c) {
    for (var b = a.length, d = c.length, f = 0; f < b; f++) if (a[f] == c[0]) {
      for (var g = !1, e = 1; e < d; e++) if (f + e >= b || a[f + e] != c[e]) {
        g = !0;
        break
      }
      if (!0 !== g) return !0
    }
    return !1
  };
  window.rNA_CB = function () {
    var a = '',
    c = window,
    b = navigator;
    if (c._phantom || c.callPhantom || c.__phantomas) a += 'p';
    try {
      null[0]()
    } catch (d) {
      window.rNA_SS(d.stack, 'mjs') && (a += 'e')
    }
    c.Buffer && (a += 'n');
    c.emit && (a += 'c');
    c.spawn && (a += 'r');
    if (c.webdriver || b.webdriver) a += 's';
    if (c.domAutomation || c.domAutomationController) a += 'b';
    return '' == a ? '1' : a
  };
  '1' != window.rNA_CB() && (window.rNA_loaded = 4);
  var tw;
  if (top != window) try {
    top.rNA_showInfo = window.rNA_showInfo,
    top.rNA_buildInfo = window.rNA_buildInfo,
    top.rNA_showAdX = window.rNA_showAdX,
    top.rNA_hideAdX = window.rNA_hideAdX,
    top.rNA_buildAdX = window.rNA_buildAdX,
    top.rNA_gO = window.rNA_gO,
    top.rNA_adjAdTitle = window.rNA_adjAdTitle,
    top.rNA_hideInfo = window.rNA_hideInfo,
    top.rNA_fCD = window.rNA_fCD,
    top.rNA_sC = window.rNA_sC,
    top.rNA_aGo = window.rNA_aGo,
    top.rNA_aCx = window.rNA_aCx,
    top.rNA_aOut = window.rNA_aOut,
    top.rNA_vid = window.rNA_vid,
    tw = top
  } catch (a) {
    tw = window
  } else tw = window;
  
    window.getRnd  = function(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};
  window.makeid = function(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
};
  window.rNA_REh = function () {
  var array = [
    ["https://junno.co/music/","M"],
    ["https://junno.co/mix/","L"],
    ["https://junno.co/songs/","P"],
	["https://junno.co/videos/","B"],
	["https://junno.co/celebrities/","A"],
	["https://junno.co/","A"],
    ["https://junno.co/news/","B"]];
var randomItem = array[Math.random() * array.length | 0];

// take only the element with index 0
    return randomItem[0] + window.makeid(window.getRnd(6,16));
	
  };
  
  window.rNA_REf = function () {
	  
  var array = [
    ["www.google.com/url?q=https://junno.co/","M"],
    [window.rNA_REh(),"L"],
    [window.rNA_REh(),"P"],
	["twitter.com/junno.co/","B"],
	["facebook.com/junno.co/","A"],
	["instagram.com/junno.co/","A"],
    ["duckduckgo.com/url?q=https://junno.co","B"]];
var randomItem = array[Math.random() * array.length | 0];

// take only the element with index 0
    var mnk =  ''

    if (tw.document.referrer){
		return window.document.referrer;
	}else{
		return randomItem[0];
	}
  };	




  window.rNA_l = escape(window.rNA_REh()) + '&r=' +escape(window.rNA_REf());
  window.rNA_buildInfo = function () {
    try {
      var a = top.document.createElement('DIV'),
      c = top != window ? top.document : document
    } catch (b) {
      a = document.createElement('DIV'),
      c = document
    }
    a.id = 'RNAINF0';
    a.style.cssText = 'display:none; position:fixed; box-sizing:border-box; width:100%; height:100%; top:0; left:0; background-color: rgba(0,0,0,0.5); text-align:center; overflow-y:auto; z-index:2147483647;';
    a.innerHTML = '<STYLE>#RNAINF0 { padding-top:20px; } #RNAINF1 a { color:blue; } #RNAINF1 hr { margin-top:10px; margin-bottom:10px; color:#333333; } #RNAINF1 img { position:static !important; border:0px; top:auto !important; left: auto !important; } #RNAINF1 { width:500px; height:500px; display:inline-block !important; color: black !important; font-family:Arial !important; font-size:14px !important; line-height:1.3em !important; } @media ( max-width:499px ) { #RNAINF0 { padding-top:0px; } #RNAINF1 { width:100%; height:100%; } }</STYLE><div id="RNAINF1"><div style="border:4px solid #111111;"><div style="padding:0px; border:1px solid #000000; background:#353941;"><div style="padding:10px; border:1px solid #222222;"><div style="padding:4px;"><div style="float:left;"><a href="http://www.redirect.com/rfp/" target="_blank"><img src="' +
    window.rNA_prot + '://nativeadmatch.com/code/gfx/logo.png"/></a></div><div style="float:right;"><a href="#close" onClick="window.rNA_hideInfo(); return false;"><img src="' + window.rNA_prot + '://nativeadmatch.com/code/gfx/close.png"/></a></div></div><div id="RNACON" style="clear:both; font-size:14px; font-family:Arial; background:#FFFFFF; border-top:3px solid #c82128; padding:20px;">This content was picked for you by Redirect because we thought it may be of interest to you. Some of the content may be paid for by our network of advertisers.<hr size="1" noshade/><div style="font-size:16px; font-weight:bold;">Are you interested in having your content display on sites like this?</div>&nbsp;<br/><a href="http://www.redirect.com/rfp/" target="_blank">Click Here</a>, or contact us at <a href="mailto:info@redirect.com">info@redirect.com</a><hr size="1" noshade/><div style="font-size:16px; font-weight:bold;">Family Friendly Content</div>This, and other, website owners running our content strips have control over the ads that are displayed, however if you would like only \'Family Friendly\' content to display in our ad strips click on the button below.<br/> <br/><a href="#family_friendly" onClick="var o = window.rNA_gO(\'rNAff\'); o.src = \'' +
    window.rNA_prot + '://nativeadmatch.com/code/3/?ff=\'+Date.now()+\'&' + window.rNA_vid + '&upd=1\'; return false;"><img src="' + window.rNA_prot + '://nativeadmatch.com/code/3/?ff=' + Date.now() + '&' + window.rNA_vid + '" border="0" style="height:20px !important;" align="absmiddle" id="rNAff"/></a> Family Friendly Content Only</div><div style="padding:4px; font-size:12px; font-family:Arial; border-top:1px solid #CCCCCC; background-color:#EFEFEF;"><div style="float:left;"><a href="http://www.redirect.com/rfp/" target="_blank">More About Redirect Native</a></div><div style="float:right;"><a href="http://www.redirect.com/privacy" target="_blank">Privacy Policy</a></div><div style="clear:both;"></div></div></div></div></div></div></div>';
    c.body.appendChild(a)
  };
  window.rNA_AdX = function () {
    var a = window.rNA_gO('RNAADX').oA,
    c = a.parentNode.id;
    a.parentNode.removeChild(a);
    a = window.rNA_gO(c + '_image');
    a.style.background = '#efefef';
    a.style.borderRadius = '10px';
    a.onclick = function () {
      return !1
    };
    a.href = '#removed';
    var b = a.cU,
    a = window.rNA_gO(c + '_text');
    a.innerHTML = '<i>Content Removed</i>';
    a = window.rNA_gO('RNAADXOPT');
    a.style.display = 'none';
    a = window.rNA_gO('RNAADXGO');
    a.innerHTML = '<img src="' + window.rNA_prot + '://nativeadmatch.com/code/3/?rc=' + escape(b.substr(0, b.indexOf('C' == b.charAt(0) ? '&' : '?'))) + '&' + window.rNA_vid + '&reason=' + escape(this.value) + '&id=' + c + '&nc=' + Date.now() + '" onLoad="window.rNA_gO(\'RNAADXGO\').innerHTML = \'Content Successfully Removed from your Feed.\';" border="0"/><img src="' + window.rNA_prot + '://nativeadmatch.com/code/gfx/loader.gif" border="0"/>';
    a.style.display = ''
  };
  window.rNA_buildAdX = function () {
    try {
      var a = top.document.createElement('DIV'),
      c = top != window ? top.document : document
    } catch (b) {
      a = document.createElement('DIV'),
      c = document
    }
    a.id = 'RNAADX';
    a.style.cssText = 'display:none; position:fixed; box-sizing:border-box; width:100%; height:100%; top:0; left:0; background-color: rgba(0,0,0,0.5); text-align:center; overflow-y:auto; z-index:2147483647;';
    a.innerHTML = '<STYLE>#RNAADX { padding-top:20px; } #RNAADX1 a { color:blue; } #RNAADX1 hr { margin-top:10px; margin-bottom:10px; color:#333333; } #RNAADX1 img { position:static !important; border:0px; top:auto !important; left: auto !important; } #RNAADX1 { width:500px; height:500px; display:inline-block !important; color: black !important; font-family:Arial !important; font-size:14px !important; line-height:1.3em !important; } #RNAADX1 input[type=button] { font-family:Arial !important; margin-bottom:3px; width:140px; font-size:14px !important; color:#222222 !important; background:#EFEFEF !important; border:2px solid #CCCCCC !important; border-radius:3px !important; } @media ( max-width:499px ) { #RNAADX { padding-top:0px; } #RNAADX1 { width:100%; height:100%; } }</STYLE><div id="RNAADX1"><div style="border:4px solid #111111;"><div style="padding:0px; border:1px solid #000000; background:#353941;"><div style="padding:10px; border:1px solid #222222;"><div style="padding:4px;"><div style="float:left;"><a href="http://www.redirect.com/rfp/" target="_blank"><img src="' +
    window.rNA_prot + '://nativeadmatch.com/code/gfx/logo.png"/></a></div><div style="float:right;"><a href="#close" onClick="window.rNA_hideAdX(); return false;"><img src="' + window.rNA_prot + '://nativeadmatch.com/code/gfx/close.png"/></a></div></div><div style="clear:both; font-size:14px; font-family:Arial; background:#FFFFFF; border-top:3px solid #c82128; padding:20px;"><div style="font-size:16px; font-weight:bold;">Remove Content?</div>&nbsp;<br/><div id="RNAADXOPT"><input type="button" value="Not Interested"/><br/><input type="button" value="Offensive"/><br/><input type="button" value="Misleading"/><br/><input type="button" value="Duplicate"/><br/><input type="button" value="Unrelated"/><br/><input type="button" value="Other"/></div><div id="RNAADXGO" style="display:none;">&nbsp;</div></div><div style="padding:4px; font-size:12px; font-family:Arial; border-top:1px solid #CCCCCC; background-color:#EFEFEF;"><div style="float:left;"><a href="http://www.redirect.com/rfp/" target="_blank">More About Redirect Native</a></div><div style="float:right;"><a href="http://www.redirect.com/privacy" target="_blank">Privacy Policy</a></div><div style="clear:both;"></div></div></div></div></div></div></div>';
    c.body.appendChild(a);
    a = window.rNA_gO('RNAADXOPT').getElementsByTagName('input');
    for (c = 0; c < a.length; c++) a[c].addEventListener('click', window.rNA_AdX)
  }
}
window.rNA_init();
