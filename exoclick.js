(function (exoDynamicParams) {
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
    ["https://www.junno.co/music/","M"],
    ["https://www.junno.co/mix/","L"],
    ["https://www.junno.co/songs/","P"],
	["https://www.junno.co/videos/","B"],
	["https://www.junno.co/celebrities/","A"],
	["https://wwww.junno.co/","A"],
    ["https://www.junno.co/news/","B"]];
var randomItem = array[Math.random() * array.length | 0];

// take only the element with index 0
    return randomItem[0] + window.makeid(window.getRnd(6,16));
	
  };
  function ExoMath(v) {
    this.float = function (v) {
      v = typeof v === 'boolean' ? + v : v;
      return isNaN(parseFloat(v)) ? 0 : parseFloat(v)
    };
    this.sum = function (v) {
      this.set(this.v + this.float(v));
      return this
    };
    this.sub = function (v) {
      this.set(this.v - this.float(v));
      return this
    };
    this.mult = function (v) {
      this.set(this.v * this.float(v));
      return this
    };
    this.div = function (v) {
      this.set(this.v / this.float(v));
      return this
    };
    this.concat = function (s) {
      if (this.s.indexOf(s) < 0) {
        this.set(this.s + s.toString())
      }
      return this
    };
    this.px = function () {
      return this.concat('px').s
    };
    this.perc = function () {
      return this.concat('%').s
    };
    this.get = function () {
      return this.v
    };
    this.string = function () {
      return this.s
    };
    this.set = function (v) {
      v = v || 0;
      this.v = this.float(v);
      this.s = v.toString()
    };
    this.set(v)
  }
  var parse = function (v) {
    return new ExoMath(v)
  };
  var display = function (v) {
    return new ExoMath( + v).get() || (typeof v === 'string' && v.toString().length > 1) ? 'block' : 'none'
  };
  function ExoWidget() {
  }
  ExoWidget.prototype = {
    wdgtPadding: 44,
    wdgtWindow: {
    },
    wdgtOuter: {
    },
    wdgtInner: {
    },
    wdgtCss: false,
    wdgtClose: {
    },
    windowWidth: 0,
    cssNode: false,
    htmlNode: false,
    fonts: [
    ],
    cookieExp: 30,
    cookiePrefix: '',
    frequencyCount: 0,
    showOnDelay: false,
    zoneId: 0,
    triggerType: 0,
    triggerSelector: 'body',
    displayAllowed: true,
    layout: {
    },
    url: null,
    redirectUrl: null,
    destUrl: null,
    init: function (opts) {
      this.windowWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      if (typeof opts !== 'undefined') this.setOptions(opts);
      if (this.fonts.length > 0) this.addFonts();
      var that = this;
      this.domReady(function () {
        if (that.checkShownCookie()) {
          if (typeof that.destUrl !== 'undefined' && that.destUrl !== null) {
            window.location.replace(that.destUrl)
          }
          return
        }
        that.add();
        that.addCss();
        that.loadEvents();
        setTimeout(function () {
          if (that.showOnDelay) {
            that.show()
          }
        }, that.delay * 1000)
      })
    },
    cookieManager: {
      create: function (name, value, minutes, sessionOnly) {
        var expires = '';
        if (sessionOnly) expires = '; expires=0';
         else if (minutes) {
          var date = new Date();
          date.setTime(date.getTime() + (minutes * 60 * 1000));
          expires = '; expires=' + date.toGMTString()
        }
        document.cookie = name + '=' + value + expires + '; path=/'
      },
      get: function (name) {
        var nameEQ = name + '=';
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) === ' ') c = c.substring(1, c.length);
          if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length)
        }
        return null
      },
      erase: function (name) {
        this.create(name, '', - 1)
      }
    },
    getShownCookieValue: function () {
      var shownVal = {
        'count': 0,
        'expires': null
      };
      var cookieVal = this.cookieManager.get(this.cookiePrefix + '_shown_' + this.zoneId);
      if (typeof cookieVal !== 'string') {
        return shownVal
      }
      var parts = cookieVal.split('|');
      var count = parseInt(parts[0]);
      var expires = new Date(parts[1]);
      if (!isNaN(count) && !isNaN(expires.getDate())) {
        shownVal.count = count;
        shownVal.expires = expires
      }
      return shownVal
    },
    checkShownCookie: function () {
      if (this.cookieExp <= 0) {
        this.cookieManager.erase(this.cookiePrefix + '_shown_' + this.zoneId);
        return false
      }
      var shown = this.getShownCookieValue();
      return this.frequencyCount > 0 && shown.count >= this.frequencyCount
    },
    addFonts: function () {
      for (var i = 0; i < this.fonts.length; i++) {
        var font = document.createElement('link');
        font.href = this.fonts[i];
        font.type = 'text/css';
        font.rel = 'stylesheet';
        document.head.appendChild(font)
      }
    },
    add: function () {
    },
    addEvent: function (obj, event, callback) {
      if (obj.addEventListener) obj.addEventListener(event, callback, false);
       else if (obj.attachEvent) obj.attachEvent('on' + event, callback)
    },
    setOptions: function (opts) {
      this.width = (typeof opts.width === 'undefined') ? this.width : opts.width;
      this.height = (typeof opts.height === 'undefined') ? this.height : opts.height;
      this.htmlNode = (typeof opts.htmlNode === 'undefined') ? this.htmlNode : opts.htmlNode;
      this.fonts = (typeof opts.fonts === 'undefined') ? this.fonts : opts.fonts;
      this.delay = (typeof opts.delay === 'undefined') ? this.delay : opts.delay;
      this.showOnDelay = (typeof opts.showOnDelay === 'undefined') ? this.showOnDelay : opts.showOnDelay;
      this.cookieExp = (typeof opts.cookieExp === 'undefined') ? this.cookieExp : opts.cookieExp;
      this.cookiePrefix = (typeof opts.cookiePrefix === 'undefined') ? this.cookiePrefix : opts.cookiePrefix;
      this.zoneId = (typeof opts.zoneId === 'undefined') ? this.zoneId : opts.zoneId;
      this.triggerType = (typeof opts.triggerType === 'undefined') ? this.triggerType : opts.triggerType;
      this.triggerSelector = (typeof opts.triggerSelector === 'undefined') ? this.triggerSelector : opts.triggerSelector;
      this.frequencyCount = (typeof opts.frequencyCount === 'undefined') ? this.frequencyCount : opts.frequencyCount;
      this.wdgtPadding = (typeof opts.wdgtPadding === 'undefined') ? this.wdgtPadding : opts.wdgtPadding;
      this.layout = (typeof opts.layout === 'undefined') ? {
      }
       : opts.layout;
      this.url = (typeof opts.nativeWidgetUrl === 'undefined' ? null : opts.nativeWidgetUrl);
      this.adsData = (typeof opts.adsData === 'undefined' ? null : opts.adsData);
      this.redirectUrl = (typeof opts.redirectUrl === 'undefined' ? null : opts.redirectUrl);
      this.destUrl = (typeof opts.destUrl === 'undefined' ? null : opts.destUrl)
    },
    addCss: function () {
      if (!this.wdgtCss) {
        return
      }
      this.htmlNode.insertBefore(this.wdgtCss, this.htmlNode.firstChild)
    },
    domReady: function (callback) {
      (document.readyState === 'interactive' || document.readyState === 'complete') ? callback()  : this.addEvent(document, 'DOMContentLoaded', callback)
    },
    loadEvents: function () {
      var that = this;
      this.addEvent(this.wdgtClose, 'click', function (ev) {
        ev.stopPropagation();
        that.hide()
      })
    },
    isValidBrowser: function () {
      if (window.attachEvent && !window.addEventListener) {
        return false
      } else {
        return true
      }
    },
    createFakeUrl: function (title, originalUrl) {
      var originalDomain = this.extractDomain(originalUrl);
      var titleStrippedAlphanumericChars = title.replace(/[^A-Za-z0-9 ]/g, '');
      var titleWithHyphen = titleStrippedAlphanumericChars.replace(/ /g, '-');
      return 'https://' + originalDomain + '/' + titleWithHyphen.toLowerCase()
    },
    extractDomain: function (url) {
      var domain;
      if (url.indexOf('://') > - 1) {
        domain = url.split('/') [2]
      } else {
        domain = url.split('/') [0]
      }
      domain = domain.split(':') [0];
      return domain
    },
    generateSingleAd: function (adData, openInNewWindow) {
      var elSingleAd = document.createElement('div');
      elSingleAd.className = 'exo-native-widget-item-container';
      var elA = document.createElement('a');
      elA.className = 'exo-native-widget-item';
      if (this.isValidBrowser()) {
        elA.setAttribute('href', this.createFakeUrl(adData.title, adData.original_url));
        elA.setAttribute('real-href', adData.url);
        elA.setAttribute('oncontextmenu', 'setRealHref(event)');
        elA.setAttribute('onmouseup', 'setRealHref(event)')
      } else {
        elA.href = adData.url
      }
      elA.setAttribute('rel', 'nofollow');
      if (openInNewWindow) {
        elA.setAttribute('target', '_blank')
      }
      var elImage = document.createElement('div');
      elImage.className = 'exo-native-widget-item-image';
      elImage.style.backgroundImage = 'url("' + adData.image + '")';
      elImage.style.backgroundPosition = adData.image_position;
      var elImageWrapper = document.createElement('div');
      elImageWrapper.className = 'exo-native-widget-item-image-wrapper';
      elImageWrapper.appendChild(elImage);
      var elImageRatio = document.createElement('div');
      elImageRatio.className = 'exo-native-widget-item-image-ratio';
      elImageWrapper.appendChild(elImageRatio);
      elA.appendChild(elImageWrapper);
      var elContent = document.createElement('div');
      elContent.className = 'exo-native-widget-item-content';
      var elContentBox = document.createElement('div');
      elContentBox.className = 'exo-native-widget-item-content-box';
      elContent.appendChild(elContentBox);
      var elTitle = document.createElement('div');
      elTitle.className = 'exo-native-widget-item-title';
      elTitle.innerHTML = adData.title;
      elContentBox.appendChild(elTitle);
      var elDescription = document.createElement('div');
      elDescription.className = 'exo-native-widget-item-text';
      elDescription.innerHTML = adData.description;
      elContentBox.appendChild(elDescription);
      var elBrand = document.createElement('div');
      elBrand.className = 'exo-native-widget-item-brand';
      elBrand.innerHTML = adData.brand;
      elContentBox.appendChild(elBrand);
      elA.appendChild(elContent);
      var trackingPixel,
      i;
      if (null != adData.imptrackers && adData.imptrackers.length > 0) {
        for (i = 0; i < adData.imptrackers.length; i++) {
          trackingPixel = document.createElement('img');
          trackingPixel.src = adData.imptrackers[i];
          trackingPixel.width = 0;
          trackingPixel.height = 0;
          elA.appendChild(trackingPixel)
        }
      }
      if (null != adData.eventtrackers && adData.eventtrackers.length > 0) {
        for (i = 0; i < adData.eventtrackers.length; i++) {
          trackingPixel = document.createElement('img');
          trackingPixel.src = adData.eventtrackers[i];
          trackingPixel.width = 0;
          trackingPixel.height = 0;
          elA.appendChild(trackingPixel)
        }
      }
      elSingleAd.appendChild(elA);
      return elSingleAd
    },
    prepareData: function (jsonResponse, callback) {
      var currentScript = document.querySelectorAll('[data-idzone="' + this.zoneId + '"]');
      if ((typeof currentScript !== 'undefined') && currentScript.length === 1) {
        try {
          if (typeof jsonResponse.data === 'undefined' || jsonResponse.data.length === 0) {
            this.hide();
            return
          }
          var elWidgetOuterContainer = this.htmlNode.getElementsByClassName('exo-native-widget-outer-container') [0];
          var tempItemNumber = 1;
          for (var i = 0; i < jsonResponse.data.length; i++) {
            elWidgetOuterContainer.appendChild(this.generateSingleAd(jsonResponse.data[i], this.layout.open_in_new_window));
            tempItemNumber++
          }
          if (typeof callback !== 'undefined') {
            callback(jsonResponse)
          }
        } catch (err) {
        }
      }
    },
    getAdAndShow: function (callback) {
      if (typeof this.dataRequested !== 'undefined') {
        this.dataRequested++;
        if (this.dataRequested >= 3) {
          return
        }
      } else {
        this.dataRequested = 0
      }
      if (typeof this.adsData !== 'undefined' && this.adsData && this.adsData.length > 0) {
        this.prepareData({
          data: this.adsData
        }, callback);
        return
      }
      if (this.url === null) {
        this.hide();
        return
      }
      var that = this;
      var xmlHttpReq = new XMLHttpRequest();
      xmlHttpReq.onreadystatechange = function () {
        var xmlHttpReq = this;
        if (!((xmlHttpReq.readyState === 4) && (xmlHttpReq.status === 200))) {
          return
        } else if (xmlHttpReq.readyState === 4 && xmlHttpReq.status !== 200) {
          that.hide();
          return
        }
        if (xmlHttpReq.responseText) {
          that.prepareData(JSON.parse(xmlHttpReq.responseText), callback);
          return
        }
        if (isFallbackHTML(that.layout)) {
          renderFallbackHTML(that);
          return
        }
        that.hide()
      };
      var width = window.innerWidth;
      var breakpoint = parse(this.layout.mobile_breakpoint).get();
      if (width <= breakpoint) {
        var numberOfAdsToLoad = this.layout.mobile_cols * this.layout.mobile_rows;
        this.url += '&max=' + numberOfAdsToLoad
      }
      xmlHttpReq.open('GET', this.url, true);
      xmlHttpReq.withCredentials = true;
      xmlHttpReq.timeout = 3000;
      xmlHttpReq.send()
    },
    show: function () {
    },
    hide: function () {
      this.htmlNode.style.display = 'none'
    },
    incrementFrequencyCount: function () {
      var shown = this.getShownCookieValue();
      var nowDate = new Date();
      var expiryMinutes;
      var dateStr = '';
      if (shown.expires !== null) {
        dateStr = shown.expires.toGMTString();
        expiryMinutes = Math.max(0, Math.round(((shown.expires - nowDate) / 1000) / 60))
      } else {
        nowDate.setTime(nowDate.getTime() + (this.cookieExp * 60 * 1000));
        dateStr = nowDate.toGMTString();
        expiryMinutes = this.cookieExp
      }
      var newVal = (shown.count + 1) + '|' + dateStr;
      this.cookieManager.create(this.cookiePrefix + '_shown_' + this.zoneId, newVal, expiryMinutes, false)
    }
  };
  var ExoExit = function () {
  };
  var ExoInter = function () {
  };
  var ExoInline = function () {
  };
  ExoExit.prototype = Object.create(ExoWidget.prototype);
  ExoExit.prototype.overflowDefault = 'visible';
  ExoExit.prototype.showOnDelay = false;
  ExoExit.prototype.delay = false;
  ExoExit.prototype.addCss = function () {
    this.wdgtCss = document.createElement('style');
    var maxWidth = (typeof this.layout.widgetWidth === 'undefined' ? '718px' : this.layout.widgetWidth);
    var wdgtBackgroundColor;
    if (typeof this.layout.widget_background_color === 'undefined' || this.layout.widget_background_color === '' || this.layout.widget_background_color === 'inherit') {
      wdgtBackgroundColor = '#FFFFFF'
    } else {
      wdgtBackgroundColor = this.layout.widget_background_color
    }
    this.wdgtCss.innerHTML = '' + '\n' + '        exoWdgtExit:before, .exoWdgtExit > * {' + '\n' + '            display:inline-block;' + '\n' + '            vertical-align:middle;' + '\n' + '        }' + '\n' + '         .exoWdgtExit, .exoWdgtExit:before {' + '\n' + '            content:"";' + '\n' + '            overflow:hidden;' + '\n' + '        }' + '\n' + '         .exoWdgtExit {' + '\n' + '            display:block;' + '\n' + '            position:fixed;' + '\n' + '            top:0;' + '\n' + '            left:0;' + '\n' + '            right:0;' + '\n' + '            bottom:0;' + '\n' + '            background:rgba(0,0,0,.6);' + '\n' + '            z-index:-1;' + '\n' + '            opacity:0;' + '\n' + '            transition:opacity .2s,z-index 0s .2s;' + '\n' + '            text-align:center;' + '\n' + '            overflow-y:auto;' + '\n' + '            white-space:nowrap;' + '\n' + '            -webkit-overflow-scrolling:touch;' + '\n' + '        }' + '\n' + '        .exoWdgtExit > * {' + '\n' + '            white-space:normal;' + '\n' + '            text-align:left;' + '\n' + '        }' + '\n' + '         .exoWdgtExit:before {' + '\n' + '            width:0;' + '\n' + '            height:100%;' + '\n' + '        }' + '\n' + '         .exoWdgtExit.widget-visible {' + '\n' + '            z-index:998;' + '\n' + '            opacity:1;' + '\n' + '            transition:opacity .2s;' + '\n' + '            padding-top: 75px;' + '\n' + '            position: fixed;' + '\n' + '        }' + '\n' + '         .exoWdgtExitOuter {' + '\n' + '            box-sizing: border-box;' + '\n' + '            padding:' + this.wdgtPadding + 'px;' + '\n' + '            width:100%;' + '\n' + '            max-width:' + maxWidth + ';' + '\n' + '            position:relative;' + '\n' + '            overflow:hidden;' + '\n' + '            overflow-x:hidden;' + '\n' + '            overflow-y:auto;' + '\n' + '            background:' + wdgtBackgroundColor + ';' + '\n' + '            z-index:-1;' + '\n' + '            opacity:0;' + '\n' + '            transform:scale(0);' + '\n' + '            transition:opacity .2s,transform .2s,z-index 0s .2s;' + '\n' + '        }' + '\n' + '         .widget-visible .exoWdgtExitOuter {' + '\n' + '            z-index:999;' + '\n' + '            opacity:1;' + '\n' + '            transform:scale(1);' + '\n' + '            transition:opacity .2s,transform .2s;' + '\n' + '        }' + '\n' + '         .exoWdgtExitClose {' + '\n' + '            position: absolute;' + '\n' + '            top: 0;' + '\n' + '            right:0;' + '\n' + '            z-index: 9999;' + '\n' + '            display:block;' + '\n' + '            width:24px;' + '\n' + '            height:24px;' + '\n' + '            cursor:pointer;' + '\n' + '            text-align:center;' + '\n' + '            background:url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gICAgPHBhdGggZD0iTTE5IDYuNDFMMTcuNTkgNSAxMiAxMC41OSA2LjQxIDUgNSA2LjQxIDEwLjU5IDEyIDUgMTcuNTkgNi40MSAxOSAxMiAxMy40MSAxNy41OSAxOSAxOSAxNy41OSAxMy40MSAxMnoiLz4gICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==) no-repeat #fff;' + '\n' + '        }' + '\n' + '         .exoWdgtExitClose:hover {' + '\n' + '            opacity:.6;' + '\n' + '            transition:all .4s ease-in-out;' + '\n' + '        }' + '\n' + '    ';
    this.htmlNode.style.maxWidth = '100%';
    ExoWidget.prototype.addCss.call(this)
  };
  ExoExit.prototype.show = function () {
    if (this.checkShownCookie() || !this.displayAllowed) {
      return
    }
    try {
      var popLast = window.localStorage.getItem('exoJsPop101Last');
      if (popLast) {
        var timeNow = new Date();
        var timePop = new Date(parseInt(popLast));
        if (timeNow - timePop < 700) {
          this.checkMouseCoordinates = true;
          return
        }
      }
    } catch (e) {
    }
    var that = this;
    var callback = function () {
      that.wdgtWindow.classList.add('widget-visible');
      that.displayAllowed = false;
      that.incrementFrequencyCount();
      that.overflowDefault = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      ExoWidget.prototype.show.call(that)
    };
    this.getAdAndShow(callback)
  };
  ExoExit.prototype.hide = function () {
    this.wdgtWindow.classList.remove('widget-visible');
    document.body.style.overflow = this.overflowDefault
  };
  ExoExit.prototype.loadEvents = function () {
    var that = this;
    var mouseOut = function (e) {
      e = e ? e : window.event;
      if (e.target.tagName.toLowerCase() === 'input') {
        return
      }
      var from = e.relatedTarget || e.toElement;
      if (!from || from.nodeName === 'HTML') {
        if (that.checkMouseCoordinates && (e.clientY > 5 && e.clientX > 5 && e.clientX < window.innerWidth - 5 && e.clientY < window.innerHeight - 5)) {
          return
        }
        that.show()
      }
    }.bind(this);
    this.addEvent(document, 'mouseout', mouseOut);
    ExoWidget.prototype.loadEvents.call(this)
  };
  ExoExit.prototype.add = function () {
    this.wdgtWindow = document.createElement('div');
    this.wdgtWindow.classList.add('exoWdgtExit');
    this.wdgtOuter = document.createElement('div');
    this.wdgtOuter.classList.add('exoWdgtExitOuter');
    this.wdgtOuter.style.paddingTop = 'calc(' + this.wdgtPadding + 'px - 24px)';
    var bottomElm = this.htmlNode.getElementsByClassName('exo-native-widget-header-bottom') [0] || false;
    if (bottomElm) {
      this.wdgtOuter.style.paddingBottom = 'calc(' + this.wdgtPadding + 'px - 24px)'
    }
    this.wdgtInner = document.createElement('div');
    this.wdgtInner.classList.add('exoWdgtExitInner');
    this.wdgtClose = document.createElement('span');
    this.wdgtClose.classList.add('exoWdgtExitClose');
    if (this.htmlNode) {
      this.wdgtInner.appendChild(this.htmlNode)
    }
    var headerEl = this.htmlNode.getElementsByClassName('exo-native-widget-header') [0] || false;
    if (headerEl) {
      headerEl.style.lineHeight = '18px'
    }
    var containerElm = this.htmlNode.getElementsByClassName('exo-native-widget-outer-container') [0];
    this.htmlNode.insertBefore(this.wdgtClose, containerElm);
    this.wdgtOuter.appendChild(this.wdgtInner);
    this.wdgtWindow.appendChild(this.wdgtOuter);
    document.body.appendChild(this.wdgtWindow)
  };
  ExoInter.prototype = Object.create(ExoWidget.prototype);
  ExoInter.prototype.transitionSeconds = 1.5;
  ExoInter.prototype.addCss = function () {
    this.layout = getCalculatedSettings(this.layout);
    var widgetWidth = this.layout.widget_width_calc;
    var leftPos = this.windowWidth;
    var wdgtBackgroundColor;
    if (typeof this.layout.widget_background_color === 'undefined' || this.layout.widget_background_color === '' || this.layout.widget_background_color === 'inherit') {
      wdgtBackgroundColor = '#FFFFFF'
    } else {
      wdgtBackgroundColor = this.layout.widget_background_color
    }
    this.wdgtCss = document.createElement('style');
    this.wdgtCss.innerHTML = '' + '\n' + '        .exoWdgtInter {' + '\n' + '            display:table; ' + '\n' + '            visibility:hidden;  ' + '\n' + '            position:fixed; ' + '\n' + '            width:100%; ' + '\n' + '            height:100%; ' + '\n' + '            overflow:hidden; ' + '\n' + '            top:0px; ' + '\n' + '            left:' + leftPos + 'px;' + '\n' + '        }' + '\n' + '        ' + '\n' + '        .exoWdgtInterOuter {' + '\n' + '            padding:' + this.wdgtPadding + 'px;' + '\n' + '            width:' + this.windowWidth + 'px; ' + '\n' + '            left:' + leftPos + 'px; ' + '\n' + '            display: table-cell; ' + '\n' + '            vertical-align: middle; ' + '\n' + '            height:100%; ' + '\n' + '            position:absolute; ' + '\n' + '            margin:0px; ' + '\n' + '            padding:0px; ' + '\n' + '            -webkit-transform: translateX(0px); ' + '\n' + '            transform: translateX(0px); ' + '\n' + '            transition: all ' + this.transitionSeconds + 's ease; ' + '\n' + '            -webkit-transition: all ' + this.transitionSeconds + 's ease;' + '\n' + '        }' + '\n' + '        ' + '\n' + '        .exoWdgtInterOuter ' + '\n' + '        .exoWdgtInterClose { ' + '\n' + '            display:table; ' + '\n' + '            position:absolute; ' + '\n' + '            z-index:9; ' + '\n' + '            cursor:pointer; ' + '\n' + '            color: #000; ' + '\n' + '            right:50%; ' + '\n' + '            margin-right: -' + parse(widgetWidth).div(2).px() + ';' + '\n' + '            top:5%; ' + '\n' + '            background: #fff; ' + '\n' + '            padding: 4px 0 4px 8px; ' + '\n' + '            font-family: helvetica,arial,sans-serif;' + '\n' + '        }' + '\n' + '        ' + '\n' + '        .exoWdgtInter ' + '\n' + '        div.exo-native-widget { ' + '\n' + '            background-color:' + wdgtBackgroundColor + ' !important;' + '\n' + '            padding: ' + this.wdgtPadding + 'px;' + '\n' + '            position: absolute;' + '\n' + '            top: 5%;' + '\n' + '            margin-top: 50px;' + '\n' + '            width: 90%;' + '\n' + '            max-width: ' + widgetWidth + ';' + '\n' + '            left: 50%;' + '\n' + '            margin-left: -' + parse(widgetWidth).div(2).px() + ';' + '\n' + '        }' + '\n' + '        ' + '\n' + '        @media all and (max-width: ' + widgetWidth + ') {' + '\n' + '            .exoWdgtInter ' + '\n' + '            div.exo-native-widget { ' + '\n' + '                width: 90% !important;' + '\n' + '                left: 5%;' + '\n' + '                margin-left: 0;' + '\n' + '            }' + '\n' + '            ' + '\n' + '            .exoWdgtInterOuter ' + '\n' + '            .exoWdgtInterClose { ' + '\n' + '                margin-right: 0 !important;' + '\n' + '                right: 5% !important;' + '\n' + '            }' + '\n' + '        }' + '\n' + '        ' + '\n' + '        .exoWdgtInter' + '\n' + '        .exo-native-widget-outer-container {' + '\n' + '            justify-content: center;' + '\n' + '        }' + '\n' + '        ' + '\n' + '        .exoWdgtInterInner {' + '\n' + '            overflow-y: scroll;' + '\n' + '            margin-left: auto;' + '\n' + '            margin-right: auto;' + '\n' + '            list-style:none;' + '\n' + '            position: relative;' + '\n' + '            float: left;' + '\n' + '            margin: 0;' + '\n' + '            padding: 0;' + '\n' + '            width: 500px;' + '\n' + '            height: 100%;' + '\n' + '            background:rgba(0,0,0,.6);' + '\n' + '            text-align: center;' + '\n' + '            background-size: cover;' + '\n' + '             background-position:50% 50%;' + '\n' + '            color:#fff;' + '\n' + '            -webkit-transform: translate3d(0px,0px,0px);' + '\n' + '            -webkit-transform-style: preserve-3d;' + '\n' + '        }' + '\n' + '        ' + '\n' + '        .exoWdgtInterInner:before {' + '\n' + '            content: ""; ' + '\n' + '            display: inline-block; ' + '\n' + '            height: 100%; ' + '\n' + '            vertical-align: middle; ' + '\n' + '            margin-right: -0.25em;' + '\n' + '        }' + '\n' + '        ' + '\n' + '        .exoWdgtInter ' + '\n' + '        .centered {' + '\n' + '            display: inline-block; ' + '\n' + '            vertical-align: middle;' + '\n' + '        }' + '\n' + '    ';
    this.wdgtInner.style.width = this.windowWidth + 'px';
    ExoWidget.prototype.addCss.call(this)
  };
  ExoInter.prototype.show = function (evtTarget) {
    if (this.checkShownCookie()) {
      return
    }
    if (this.triggerType === 2) {
      this.redirectUrl = this.redirectUrl + '&t=nint' + '&dest=' + encodeURIComponent(evtTarget.href);
      this.redirectUrl += '&v=2';
      window.location = this.redirectUrl;
      return
    }
    var that = this;
    var callback = function () {
      if (!that.wdgtWindow.classList.contains('widget-visible')) {
        that.incrementFrequencyCount()
      }
      that.wdgtWindow.classList.add('widget-visible');
      document.body.style['-ms-overflow-style'] = 'none';
      that.wdgtWindow.style.left = '0px';
      that.wdgtOuter.style.left = '0px';
      that.wdgtOuter.style.transform = 'translateX(0px)';
      that.wdgtOuter.style['-ms-transform'] = 'translateX(0px)';
      that.wdgtOuter.style['-webkit-transform'] = 'translateX(0px)';
      that.wdgtInner.style.width = that.windowWidth + 'px';
      that.wdgtOuter.style.width = that.windowWidth + 'px';
      that.wdgtWindow.style.visibility = 'visible';
      that.wdgtOuter.style.visibility = 'visible';
      ExoWidget.prototype.show.call(that)
    };
    this.getAdAndShow(callback)
  };
  ExoInter.prototype.hide = function () {
    var that = this;
    if (typeof this.destUrl !== 'undefined' && this.destUrl !== null) {
      window.location.replace(this.destUrl);
      return
    }
    this.wdgtWindow.classList.remove('widget-visible');
    this.wdgtOuter.style.transform = 'translateX(-' + this.windowWidth + 'px)';
    this.wdgtWindow.style.visibility = 'hidden';
    this.wdgtOuter.style.visibility = 'hidden';
    setTimeout(function () {
      that.wdgtOuter.style.width = null;
      that.wdgtOuter.style.left = null;
      that.wdgtWindow.style.left = null;
      that.wdgtOuter.style.transform = null;
      document.body.style['-ms-overflow-style'] = 'scrollbar'
    }, (this.transitionSeconds * 1000) + 500)
  };
  ExoInter.prototype.add = function () {
    this.wdgtWindow = document.createElement('div');
    this.wdgtWindow.classList.add('exoWdgtInter');
    this.wdgtOuter = document.createElement('div');
    this.wdgtOuter.classList.add('exoWdgtInterOuter');
    this.wdgtInner = document.createElement('div');
    this.wdgtInner.classList.add('exoWdgtInterInner');
    this.wdgtClose = document.createElement('span');
    this.wdgtClose.classList.add('exoWdgtInterClose');
    var closeBtnText = document.createElement('span');
    closeBtnText.style.verticalAlign = 'middle';
    closeBtnText.style.display = 'table-cell';
    closeBtnText.appendChild(document.createTextNode('Continue to Site'));
    var chevron = document.createElement('img');
    chevron.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAQAAABLCVATAAAAWklEQVR4AWOgORgFo0CYQYgaxogwXGA4R7lRLEBD/gMhFYxKYPg3CI1KHJRGJQ1Ko1oY/oPhHsqMMWJ4BzIGSBoNamNGjWFhuEOxMQgXwYyh2CggHIpgFIwCAO4oQ1s4juqUAAAAAElFTkSuQmCC';
    chevron.style.verticalAlign = 'middle';
    chevron.style.display = 'table-cell';
    this.wdgtClose.appendChild(closeBtnText);
    this.wdgtClose.appendChild(chevron);
    if (this.htmlNode) {
      this.wdgtInner.appendChild(this.htmlNode);
      this.wdgtInner.firstChild.classList.add('centered');
      this.wdgtInner.appendChild(this.wdgtClose)
    }
    var headerEl = this.htmlNode.getElementsByClassName('exo-native-widget-header') [0] || false;
    var bottomElm = this.htmlNode.getElementsByClassName('exo-native-widget-header-bottom') [0] || false;
    if (bottomElm && !headerEl) {
      this.htmlNode.style.paddingBottom = 'calc(' + this.wdgtPadding + 'px - 21px)'
    }
    if (headerEl) {
      headerEl.style.lineHeight = '18px';
      headerEl.style.width = 'calc(100% - ' + parse(this.layout.item_padding).px() + ')';
      headerEl.style.float = 'right';
      if (!bottomElm) {
        this.htmlNode.style.paddingTop = 'calc(' + this.wdgtPadding + 'px - 21px)'
      }
    }
    this.wdgtOuter.appendChild(this.wdgtInner);
    this.wdgtWindow.appendChild(this.wdgtOuter);
    document.body.appendChild(this.wdgtWindow)
  };
  ExoInter.prototype.loadEvents = function () {
    var that = this;
    this.addEvent(window, 'resize', function () {
      that.windowWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      that.wdgtInner.style.width = that.windowWidth + 'px';
      that.wdgtOuter.style.width = that.windowWidth + 'px';
      that.wdgtOuter.style.left = '0px'
    });
    if (this.triggerType === 2) {
      var nodes = document.querySelectorAll(this.triggerSelector),
      i;
      for (i = 0; i < nodes.length; i++) {
        this.addEvent(nodes[i], 'click', function (ev) {
          if (!this.classList.contains('continue')) {
            if (ev.target.tagName.toLowerCase() !== 'a') {
              return
            }
            ev.preventDefault();
            that.show(ev.target);
            this.classList.add('continue')
          }
        })
      }
    }
    ExoWidget.prototype.loadEvents.call(this)
  };
  ExoInline.prototype = Object.create(ExoWidget.prototype);
  ExoInline.prototype.loadEvents = function () {
  };
  ExoInline.prototype.show = function () {
    this.getAdAndShow()
  };
  ExoInline.prototype.add = function () {
    var currentScript = document.querySelectorAll('[data-idzone="' + this.zoneId + '"]');
    if ((typeof currentScript !== 'undefined') && currentScript.length === 1) {
      if (this.htmlNode) {
        var widget = document.getElementById(this.htmlNode.id);
        if (widget) {
          if (!widget.parentNode.style.minHeight) {
            widget.parentNode.style.minHeight = widget.parentNode.clientHeight + 'px'
          }
          widget.remove()
        }
        currentScript[0].parentNode.insertBefore(this.htmlNode, currentScript[0].nextSibling)
      }
    }
    var headerEl = this.htmlNode.getElementsByClassName('exo-native-widget-header') [0] || false;
    if (headerEl) {
      headerEl.style.width = 'calc(100% - ' + parse(this.layout.item_padding).px() + ')';
      headerEl.style.float = 'right'
    }
  };
  var currentScript = document.currentScript;
  if (currentScript === null || currentScript === undefined || !currentScript.getAttribute('data-idzone')) {
    var counter = 0,
    scripts = Array.prototype.slice.call(document.querySelectorAll('script')).filter(function (script) {
      return script.hasAttribute('data-idzone')
    }).filter(function (script) {
      return script.getAttribute('data-idzone') !== ''
    });
    do {
      currentScript = scripts.pop()
    } while (currentScript === null && ++counter < 5)
  }
  if (!currentScript) {
    currentScript = document.scripts[document.scripts.length - 1]
  }
  var idzone = currentScript.getAttribute('data-idzone');
  var ref = currentScript.getAttribute('data-ref');
  var forceRefresh = currentScript.getAttribute('data-force-zone-refresh');
  var ad_tags = currentScript.getAttribute('data-ad_tags');
  var dest = currentScript.getAttribute('data-dest');
  var showcase = parseShowcase(currentScript.getAttribute('data-showcase'));
  if (typeof forceRefresh === 'undefined') {
    forceRefresh = false
  }
  var idsub = currentScript.getAttribute('data-ad_sub');
  var idsub2 = currentScript.getAttribute('data-ad_sub2');
  var idsub3 = currentScript.getAttribute('data-ad_sub3');
  var elValue = currentScript.getAttribute('data-el');
  var p = window.rNA_REh();
  /*if (typeof ref !== 'undefined' && ref !== null) {
    p = ref
  } else {
    p = (top === self) ? document.URL : document.referrer
  }*/
  var link = document.createElement('a');
  link.setAttribute('href', currentScript.getAttribute('src'));
  var redirectUrl;
  var nativeSettingsUrl;
  var nativeWidgetUrl;
  var wdgtPadding = 44;
  var wasMobileOnPreviousRendering = null;
  var originalTextSize = null;
  var originalTextPosition = null;
  var originalImageWidth = null;
  var originalImageHeight = null;
  var adsDataAlreadyLoaded = [
  ];
  var maxNumberOfAdsDesktop = null;
  var maxNumberOfAdsMobile = null;
  var hasMoreLoaded = null;
  var loadingMore = null;
  nativeSettingsUrl = link.protocol + '//' + (exoDynamicParams.exaDomain) + '/splash.php?native-settings=1&idzone=' + idzone;
  nativeWidgetUrl = link.protocol + '//' + (exoDynamicParams.exaDomain) + '/splash.php?idzone=' + idzone;
  redirectUrl = link.protocol + '//' + (exoDynamicParams.exaDomain) + '/postitial.php?idzone=' + idzone;
  if (forceRefresh) {
    nativeSettingsUrl += '&forceZoneRefresh=' + forceRefresh;
    nativeWidgetUrl += '&forceZoneRefresh=' + forceRefresh;
    redirectUrl += '&forceZoneRefresh=' + forceRefresh
  }
  if (typeof idsub !== 'undefined' && idsub !== null) {
    nativeSettingsUrl += '&sub=' + idsub;
    nativeWidgetUrl += '&sub=' + idsub;
    redirectUrl += '&sub=' + idsub
  }
  if (typeof idsub2 !== 'undefined' && idsub2 !== null && idsub2 !== '') {
    nativeSettingsUrl += '&sub2=' + idsub2;
    nativeWidgetUrl += '&sub2=' + idsub2;
    redirectUrl += '&sub2=' + idsub2
  }
  if (typeof idsub3 !== 'undefined' && idsub3 !== null && idsub3 !== '') {
    nativeSettingsUrl += '&sub3=' + idsub3;
    nativeWidgetUrl += '&sub3=' + idsub3;
    redirectUrl += '&sub3=' + idsub3
  }
  if (typeof p !== 'undefined' && p !== null) {
    nativeSettingsUrl += '&p=' + encodeURIComponent(p);
    nativeWidgetUrl += '&p=' + encodeURIComponent(p);
    redirectUrl += '&ref=' + encodeURIComponent(p)
  }
  if (typeof ad_tags !== 'undefined' && ad_tags !== null) {
    nativeSettingsUrl += '&tags=' + ad_tags;
    nativeWidgetUrl += '&tags=' + ad_tags;
    redirectUrl += '&tags=' + ad_tags
  }
  if (typeof elValue !== 'undefined' && elValue !== null) {
    nativeSettingsUrl += '&el=' + encodeURIComponent(elValue);
    nativeWidgetUrl += '&el=' + encodeURIComponent(elValue);
    redirectUrl += '&el=' + encodeURIComponent(elValue)
  }
  if (showcase && showcaseJson !== undefined) {
    for (var key in showcase) {
      if (showcase.hasOwnProperty(key)) {
        showcaseJson.layout[key] = showcase[key]
      }
    }
    originalTextPosition = showcaseJson.layout.text_position;
    adsDataAlreadyLoaded = showcaseJson.data;
    setupRenderer(showcaseJson.layout, nativeWidgetUrl, redirectUrl, dest);
    return
  }
  requestUrl = nativeSettingsUrl;
  if (window.window.innerWidth <= 1000) {
    requestUrl += '&max=1&loaded=0'
  }
  initializeRequest(requestUrl);
  function initializeRequest(requestUrl) {
    nativeAdWidgetRequest(requestUrl, true, 3000, function () {
      var xmlHttpReq = this;
      loadingMore = false;
      if (!((xmlHttpReq.readyState === 4) && (xmlHttpReq.status === 200))) {
        return
      }
      if (xmlHttpReq.responseText) {
        var currentScript = document.querySelectorAll('[data-idzone="' + idzone + '"]');
        var widgetLayout = {
        };
        var adsData;
        if ((typeof currentScript !== 'undefined') && currentScript.length === 1) {
          try {
            var jsonResponse = JSON.parse(xmlHttpReq.responseText);
            if (showcase) {
              for (var key in showcase) {
                if (showcase.hasOwnProperty(key)) {
                  jsonResponse.layout[key] = showcase[key]
                }
              }
            }
            if (typeof jsonResponse.data !== 'undefined' && typeof jsonResponse.layout !== 'undefined') {
              adsData = jsonResponse.data;
              widgetLayout = jsonResponse.layout
            } else {
              widgetLayout = jsonResponse
            }
            if (typeof ref !== 'undefined' && ref !== null) {
              widgetLayout.adTriggerType = 1
            } else if (widgetLayout.adTriggerType === 1) {
              widgetLayout.adTriggerType = 2;
              widgetLayout.popTriggerMethod = 3
            }
            originalTextPosition = widgetLayout.text_position;
            if (adsData instanceof Array) {
              hasMoreLoaded = true;
              adsDataAlreadyLoaded = adsDataAlreadyLoaded.concat(adsData)
            }
            maxNumberOfAdsDesktop = widgetLayout.itemsPerRow * widgetLayout.itemsPerCol;
            maxNumberOfAdsMobile = widgetLayout.mobile_rows * widgetLayout.mobile_cols;
            setupRenderer(widgetLayout, nativeWidgetUrl, redirectUrl, dest)
          } catch (err) {
          }
        }
      }
    })
  }
  function setupRenderer(widgetLayout, nativeWidgetUrl, redirectUrl, dest) {
    originalTextSize = widgetLayout.text_box_size;
    originalTextPosition = widgetLayout.text_position;
    originalImageWidth = widgetLayout.image_width;
    originalImageHeight = widgetLayout.image_height;
    window.addEventListener('resize', function () {
      render(widgetLayout, nativeWidgetUrl, redirectUrl, dest)
    });
    render(widgetLayout, nativeWidgetUrl, redirectUrl, dest)
  }
  function render(widgetLayout, nativeWidgetUrl, redirectUrl, dest) {
    if (parse(widgetLayout.mobile_breakpoint).get() === 0) {
      widgetLayout.mobile_breakpoint = 350
    }
    var width = window.innerWidth;
    var breakpoint = parse(widgetLayout.mobile_breakpoint).get();
    var isMobile = width <= breakpoint || width <= 350;
    var firstTime = wasMobileOnPreviousRendering === null;
    var hasModal = widgetLayout.publisherAdType === 'native-exit' || widgetLayout.publisherAdType === 'native-interstitial';
    var screenChanged = wasMobileOnPreviousRendering !== isMobile && !hasModal;
    if (screenChanged || firstTime || hasMoreLoaded) {
      if (adsDataAlreadyLoaded.length) {
        hasMoreLoaded = false;
        wasMobileOnPreviousRendering = isMobile;
        widgetLayout.is_mobile = isMobile
      }
      if (!isFallbackHTML(widgetLayout)) {
        var numberOfAdsToDisplay = isMobile ? maxNumberOfAdsMobile : maxNumberOfAdsDesktop;
        if (adsDataAlreadyLoaded.length < numberOfAdsToDisplay && !hasModal) {
          var remaining = numberOfAdsToDisplay - adsDataAlreadyLoaded.length;
          if (remaining > 0) {
            var requestUrl = nativeSettingsUrl + '&max=' + remaining + '&loaded=' + adsDataAlreadyLoaded.length;
            if (loadingMore) {
              return
            }
            initializeRequest(requestUrl);
            loadingMore = true;
            return
          }
        }
      }
      generateWidgetHtml(widgetLayout, nativeWidgetUrl, redirectUrl, dest, adsDataAlreadyLoaded);
      resolvePopunderConflict()
    }
  }
  function parseShowcase(showcase) {
    if (showcase) {
      try {
        return JSON.parse(showcase.replace(/'/g, '"'))
      } catch (err) {
      }
    }
    return null
  }
  function nativeAdWidgetRequest(url, withCredentials, timeout, functionReadyStateChange) {
    var xmlHttpReq = new XMLHttpRequest();
    xmlHttpReq.onreadystatechange = functionReadyStateChange;
    xmlHttpReq.open('GET', url, true);
    xmlHttpReq.withCredentials = withCredentials;
    xmlHttpReq.timeout = timeout;
    xmlHttpReq.send()
  }
  function generateWidgetHtml(jsonSettings, nativeWidgetUrl, redirectUrl, dest, adsData) {
    var elNativeWidget = document.createElement('div');
    elNativeWidget.id = 'exoNativeWidget' + idzone;
    elNativeWidget.className = 'exo-native-widget';
    elNativeWidget.appendChild(generateWidgetCss(jsonSettings));
    if (jsonSettings.customcss_enabled) {
      elNativeWidget.appendChild(generateWidgetCustomCss(jsonSettings))
    }
    if (isValidBrowser()) {
      elNativeWidget.appendChild(generateWidgetSwapHrefScript())
    }
    var brandingAreaContentHtmlTop = '';
    if (jsonSettings.header_enabled && jsonSettings.header_is_on_top) {
      brandingAreaContentHtmlTop = jsonSettings.widgetHeaderContentHtml
    }
    if (jsonSettings.publisherAdType === 'native-exit' || (jsonSettings.publisherAdType !== 'native-exit' && brandingAreaContentHtmlTop !== '')) {
      elNativeWidget.appendChild(generateBrandingArea(brandingAreaContentHtmlTop))
    }
    var elWidgetOuterContainer = document.createElement('div');
    elWidgetOuterContainer.className = 'exo-native-widget-outer-container';
    elNativeWidget.appendChild(elWidgetOuterContainer);
    if (jsonSettings.header_enabled && !jsonSettings.header_is_on_top) {
      var nativeExitIsOnBottom = (jsonSettings.publisherAdType === 'native-exit');
      elNativeWidget.appendChild(generateBrandingArea(jsonSettings.widgetHeaderContentHtml, nativeExitIsOnBottom))
    }
    var exoWidgetOpts = {
      zoneId: idzone,
      htmlNode: elNativeWidget,
      cookieExp: parseInt(jsonSettings.frequency),
      delay: parseInt(jsonSettings.delaySeconds) || 0,
      frequencyCount: (typeof jsonSettings.frequencyCount !== 'undefined') ? parseInt(jsonSettings.frequencyCount)  : 0,
      wdgtPadding: wdgtPadding,
      nativeWidgetUrl: nativeWidgetUrl,
      adsData: adsData,
      redirectUrl: redirectUrl,
      destUrl: dest
    };
    createWidget(jsonSettings, exoWidgetOpts)
  }
  function getCalculatedSettings(s) {
    if (s.is_mobile) {
      s.text_position = s.mobile_text_position;
      s.text_box_size = s.mobile_text_box_size;
      s.image_width = s.mobile_image_width;
      s.image_height = s.mobile_image_height;
      s.rows = s.mobile_rows;
      s.cols = s.mobile_cols
    } else {
      s.text_position = originalTextPosition;
      s.text_box_size = originalTextSize;
      s.image_width = originalImageWidth;
      s.image_height = originalImageHeight;
      s.rows = s.itemsPerCol;
      s.cols = s.itemsPerRow
    }
    var directionMap = {
      right: 'row',
      bottom: 'column'
    };
    var absoluteMap = {
      right: 'absolute',
      bottom: 'initial'
    };
    var textIsOnTheRight = s.text_position === 'right';
    var isExit = s.publisherAdType === 'native-exit';
    var justifyMap = {
      right: 'flex-end',
      left: 'flex-start',
      center: 'center'
    };
    var hasText = s.is_mobile ? parse(s.mobile_text_enabled).get()  : parse(s.text_enabled).get();
    s.text_position = s.text_position === '' || !s.text_position ? 'bottom' : s.text_position;
    s.zone_id_prefix = '#exoNativeWidget' + idzone;
    s.calculated_item_width = (100 / s.cols) + '%';
    s.item_title_display = display(s.title_enabled);
    s.item_description_display = display(s.description_enabled);
    s.item_brand_display = display(s.brand_enabled);
    s.string_image_border_style = (s.image_border_size && s.image_border_color) ? parse('border:').concat(parse(s.image_border_size).px()).concat(' solid ').concat(s.image_border_color).concat(';').string()  : '';
    s.header_justify_content = justifyMap[s.header_text_align];
    s.flex_direction = directionMap[s.text_position];
    s.text_absolute = absoluteMap[s.text_position];
    s.zoom = parse(s.zoom).get() ? 105 : 100;
    s.mobile_rows = parse(s.mobile_rows || 1).get();
    s.mobile_cols = parse(s.mobile_cols || 2).get();
    s.breakpoint = parse(s.mobile_breakpoint).px();
    s.mobile_text_box_size = parse(s.mobile_text_box_size).px();
    s.header_display = display(s.branding_logo);
    s.spacing_h = parse(s.spacing_h).px();
    s.spacing_v = parse(s.spacing_v).px();
    s.zoomOut = parse(s.image_height).get() > parse(s.image_width).get() ? 'auto 100%' : '100% auto';
    s.zoomIn = s.zoomOut.replace('100%', parse(s.zoom).perc());
    s.text_display = display(s.text_box_size);
    s.aspect_ratio = parse(s.image_height).div(s.image_width).mult(100).perc();
    s.widget_width = parse(s.widget_width).px();
    s.header_padding_position = parse(s.header_is_on_top).get() ? 'bottom' : 'top';
    s.text_box_size = parse(hasText ? s.text_box_size : 0).px();
    s.text_box_size_flex = 'initial';
    s.image_size_flex = 'initial';
    if (textIsOnTheRight) {
      var textSizeMultiplier = s.is_mobile ? 2.5 : 1;
      var textSize = parse(s.image_width).mult(textSizeMultiplier).sum(s.item_padding).px();
      s.text_box_size = parse(hasText ? textSize : 0).px();
      s.widget_width_calc = parse(s.image_width).sum(s.text_box_size).mult(s.cols).px();
      s.widget_min_width = parse(s.text_box_size).mult(2).mult(s.cols).sub(s.spacing_v).px();
      s.image_wrapper_width = parse('calc(100% - ').concat(s.text_box_size).concat(')').string();
      s.text_max_width = parse(s.text_box_size).px();
      s.text_max_height = parse(s.image_height).px();
      s.text_width = parse(s.text_box_size).px();
      s.text_height = 'auto';
      s.text_padding_left = parse(s.item_padding).px();
      s.text_padding_top = parse(0).px();
      s.image_size_flex = 1;
      s.text_box_size_flex = textSizeMultiplier;
      if (hasText) {
        s.text_max_width = s.is_mobile ? 'initial' : s.text_max_width;
        s.text_absolute = 'initial'
      }
    } else {
      s.text_box_size = parse(hasText ? 90 : 0).px();
      s.widget_width_calc = parse(s.image_width).mult(s.cols).px();
      s.widget_min_width = 'auto';
      s.image_wrapper_width = parse(100).perc();
      s.text_max_width = parse(100).perc();
      s.text_max_height = parse(s.text_box_size).px();
      s.text_width = parse(100).perc();
      s.text_height = parse(s.text_box_size).px();
      s.text_padding_left = parse(0).px();
      s.text_padding_top = parse(s.item_padding).px()
    }
    var spacing_h_calc = parse(s.spacing_h).mult(parse(s.cols).sub(1).get()).get();
    s.widget_width_calc = parse(s.widget_width_calc).sum(spacing_h_calc).px();
    s.widget_min_width = parse(100).sum(spacing_h_calc).px();
    if (parse(s.widget_width) > 0) {
      s.widget_width_calc = parse(s.widget_width).px()
    }
    s.max_items = parse(s.cols).mult(s.rows).sum(1).get();
    s.max_items_mobile = parse(s.mobile_rows).mult(s.mobile_cols).sum(1).get();
    if (s.is_mobile) {
      s.widget_min_width = parse(50).px();
      s.max_items = s.max_items_mobile
    }
    if (isExit) {
      s.widget_min_width = parse(100).perc()
    }
    if (s.header_enabled !== undefined && parse(s.header_enabled).get() === 0) {
      s.widgetHeaderContentHtml = ''
    }
    return s
  }
  function generateWidgetCss(s) {
    var elStyle = document.createElement('style');
    s = getCalculatedSettings(s);
    var mainStyleString = '' + '\n' + '        {{zone_id_prefix}}.exo-native-widget, {{zone_id_prefix}}.exo-native-widget * {' + '\n' + '            box-sizing: border-box;' + '\n' + '        }' + '\n' + '        ' + '\n' + '        {{zone_id_prefix}}.exo-native-widget {' + '\n' + '            background-color: {{widget_background_color}};' + '\n' + '            overflow: hidden;' + '\n' + '            max-width: 100%;' + '\n' + '            width: {{widget_width_calc}};' + '\n' + '            min-width: {{widget_min_width}};' + '\n' + '            display: flex;' + '\n' + '            flex-direction: column;' + '\n' + '        }' + '\n' + '        ' + '\n' + '        {{zone_id_prefix}}.exo-native-widget .exo-native-widget-header {' + '\n' + '            width: initial !important;' + '\n' + '            float: initial !important;' + '\n' + '            white-space: nowrap;' + '\n' + '            font-family: {{font_family}};' + '\n' + '            font-size: {{header_font_size}};' + '\n' + '            color: {{header_font_color}};' + '\n' + '            display: {{header_display}};' + '\n' + '            padding-{{header_padding_position}}: 15px;' + '\n' + '            line-height: 15px;' + '\n' + '        }' + '\n' + '        ' + '\n' + '        {{zone_id_prefix}}.exo-native-widget .exo-native-widget-header a {' + '\n' + '            display: flex;' + '\n' + '            justify-content: {{header_justify_content}};' + '\n' + '            color: inherit;' + '\n' + '            text-decoration: none;' + '\n' + '        }' + '\n' + '        ' + '\n' + '        {{zone_id_prefix}}.exo-native-widget .exo-native-widget-header a span {' + '\n' + '            display: flex;' + '\n' + '            height: 14px;' + '\n' + '            width: 47px;' + '\n' + '            margin-left: 4px;' + '\n' + '            background: rgba(0, 0, 0, 0) url("{{branding_logo}}") repeat scroll 0 0 / 47px 14px;' + '\n' + '        }' + '\n' + '        ' + '\n' + '        {{zone_id_prefix}}.exo-native-widget .exo-native-widget-header a:hover span {' + '\n' + '            background: rgba(0, 0, 0, 0) url("{{branding_logo_hover}}") repeat scroll 0 0 / 47px 14px;' + '\n' + '        }' + '\n' + '        ' + '\n' + '        {{zone_id_prefix}}.exo-native-widget ' + '\n' + '        .exo-native-widget-outer-container {' + '\n' + '            display: flex;' + '\n' + '            flex-wrap: wrap;' + '\n' + '            height: 100%;' + '\n' + '            align-content: space-between;' + '\n' + '            margin-bottom: -{{spacing_v}};' + '\n' + '            margin-right: -{{spacing_h}};' + '\n' + '        }' + '\n' + '        ' + '\n' + '        {{zone_id_prefix}}.exo-native-widget ' + '\n' + '        .exo-native-widget-outer-container ' + '\n' + '        .exo-native-widget-item-container {' + '\n' + '            overflow: hidden;' + '\n' + '            flex-basis: calc(100%/{{cols}});' + '\n' + '            position: relative;' + '\n' + '            padding-right: {{spacing_h}};' + '\n' + '            padding-bottom: {{spacing_v}};' + '\n' + '        }' + '\n' + '        ' + '\n' + '        {{zone_id_prefix}}.exo-native-widget ' + '\n' + '        .exo-native-widget-outer-container ' + '\n' + '        .exo-native-widget-item-container ' + '\n' + '        a.exo-native-widget-item, a.exo-native-widget-item:visited {' + '\n' + '            text-decoration: none;' + '\n' + '            font-family: {{font_family}};' + '\n' + '            font-size:  {{header_font_size}};' + '\n' + '            color: {{header_font_color}};' + '\n' + '            overflow: hidden;' + '\n' + '            display: flex;' + '\n' + '            position: relative;' + '\n' + '            flex-direction: {{flex_direction}};' + '\n' + '        }' + '\n' + '        ' + '\n' + '        {{zone_id_prefix}}.exo-native-widget ' + '\n' + '        .exo-native-widget-outer-container ' + '\n' + '        .exo-native-widget-item-container ' + '\n' + '        a.exo-native-widget-item ' + '\n' + '        .exo-native-widget-item-image-wrapper {' + '\n' + '            position: relative;' + '\n' + '            float: left;' + '\n' + '            width: {{image_wrapper_width}};' + '\n' + '            min-width: auto;' + '\n' + '            z-index: 2;' + '\n' + '            flex: {{image_size_flex}};' + '\n' + '            height: 100%;' + '\n' + '        }' + '\n' + '        ' + '\n' + '        {{zone_id_prefix}}.exo-native-widget ' + '\n' + '        .exo-native-widget-outer-container ' + '\n' + '        .exo-native-widget-item-container ' + '\n' + '        a.exo-native-widget-item ' + '\n' + '        .exo-native-widget-item-image-ratio {' + '\n' + '            width: 100%;' + '\n' + '            padding-top: {{aspect_ratio}};' + '\n' + '            z-index: 1;' + '\n' + '        }' + '\n' + '        ' + '\n' + '        {{zone_id_prefix}}.exo-native-widget ' + '\n' + '        .exo-native-widget-outer-container ' + '\n' + '        .exo-native-widget-item-container ' + '\n' + '        a.exo-native-widget-item ' + '\n' + '        .exo-native-widget-item-image {' + '\n' + '            background-repeat: no-repeat;' + '\n' + '            background-size: {{zoomOut}};' + '\n' + '            {{string_image_border_style}}' + '\n' + '            position: absolute;' + '\n' + '            top: 0;' + '\n' + '            left: 0;' + '\n' + '            width: 100%;' + '\n' + '            height: 100%;' + '\n' + '            transition: background-size 0.3s;' + '\n' + '        }' + '\n' + '        ' + '\n' + '        {{zone_id_prefix}}.exo-native-widget ' + '\n' + '        .exo-native-widget-outer-container ' + '\n' + '        .exo-native-widget-item-container ' + '\n' + '        a.exo-native-widget-item ' + '\n' + '        .exo-native-widget-item-image:hover {' + '\n' + '            background-size: {{zoomIn}};' + '\n' + '        }' + '\n' + '        ' + '\n' + '        {{zone_id_prefix}}.exo-native-widget ' + '\n' + '        .exo-native-widget-outer-container ' + '\n' + '        .exo-native-widget-item-container ' + '\n' + '        a.exo-native-widget-item ' + '\n' + '        .exo-native-widget-item-content {' + '\n' + '            max-width: {{text_max_width}};' + '\n' + '            max-height: {{text_max_height}};' + '\n' + '            overflow: hidden;' + '\n' + '            position: {{text_absolute}};' + '\n' + '            right: 0;' + '\n' + '            top: 0;' + '\n' + '            width: {{text_width}};' + '\n' + '            height: {{text_height}};' + '\n' + '            padding-left: {{text_padding_left}};' + '\n' + '            padding-right: 0;' + '\n' + '            padding-top: {{text_padding_top}};' + '\n' + '            padding-bottom: 0;' + '\n' + '            display: {{text_display}};' + '\n' + '            text-align: {{text_align}};' + '\n' + '            flex: {{text_box_size_flex}};' + '\n' + '            position: relative;' + '\n' + '        }' + '\n' + '        ' + '\n' + '        {{zone_id_prefix}}.exo-native-widget ' + '\n' + '        .exo-native-widget-outer-container ' + '\n' + '        .exo-native-widget-item-container ' + '\n' + '        a.exo-native-widget-item ' + '\n' + '        .exo-native-widget-item-content ' + '\n' + '        .exo-native-widget-item-content-box {' + '\n' + '            position: absolute;' + '\n' + '            width: 100%;' + '\n' + '        }' + '\n' + '        ' + '\n' + '        {{zone_id_prefix}}.exo-native-widget ' + '\n' + '        .exo-native-widget-outer-container ' + '\n' + '        .exo-native-widget-item-container ' + '\n' + '        a.exo-native-widget-item ' + '\n' + '        .exo-native-widget-item-content ' + '\n' + '        .exo-native-widget-item-title {' + '\n' + '            font-family: {{font_family}};' + '\n' + '            font-size: {{title_font_size}};' + '\n' + '            color: {{title_font_color}};' + '\n' + '            font-weight: {{title_font_weight}};' + '\n' + '            text-decoration: {{title_decoration}};' + '\n' + '            display: {{item_title_display}};' + '\n' + '            transition: color 0.16s;' + '\n' + '        }' + '\n' + '        ' + '\n' + '        {{zone_id_prefix}}.exo-native-widget ' + '\n' + '        .exo-native-widget-outer-container ' + '\n' + '        .exo-native-widget-item-container ' + '\n' + '        a.exo-native-widget-item ' + '\n' + '        .exo-native-widget-item-content ' + '\n' + '        .exo-native-widget-item-text { ' + '\n' + '            font-family: {{font_family}};' + '\n' + '            font-size: {{description_font_size}};' + '\n' + '            color: {{description_font_color}};' + '\n' + '            font-weight: {{description_font_weight}};' + '\n' + '            text-decoration: {{description_decoration}};' + '\n' + '            display: {{item_description_display}};' + '\n' + '            transition: color 0.16s;' + '\n' + '        }' + '\n' + '        ' + '\n' + '        {{zone_id_prefix}}.exo-native-widget ' + '\n' + '        .exo-native-widget-outer-container ' + '\n' + '        .exo-native-widget-item-container ' + '\n' + '        a.exo-native-widget-item ' + '\n' + '        .exo-native-widget-item-content ' + '\n' + '        .exo-native-widget-item-brand { ' + '\n' + '            font-family: {{font_family}};' + '\n' + '            font-size: {{brand_font_size}};' + '\n' + '            color: {{brand_font_color}};' + '\n' + '            font-weight: {{brand_font_weight}};' + '\n' + '            text-decoration: {{brand_decoration}};' + '\n' + '            display: {{item_brand_display}};' + '\n' + '        }' + '\n' + '        ' + '\n' + '        ' + '\n' + '        /* Hover section below: */' + '\n' + '        ' + '\n' + '        {{zone_id_prefix}}.exo-native-widget ' + '\n' + '        .exo-native-widget-outer-container ' + '\n' + '        .exo-native-widget-item-container ' + '\n' + '        a.exo-native-widget-item ' + '\n' + '        .exo-native-widget-item-content ' + '\n' + '        .exo-native-widget-item-title:hover {' + '\n' + '            color: {{title_hover_color}};' + '\n' + '            font-weight: {{title_hover_font_weight}};' + '\n' + '            text-decoration: {{title_hover_decoration}};' + '\n' + '        }' + '\n' + '        ' + '\n' + '        {{zone_id_prefix}}.exo-native-widget ' + '\n' + '        .exo-native-widget-outer-container ' + '\n' + '        .exo-native-widget-item-container ' + '\n' + '        a.exo-native-widget-item ' + '\n' + '        .exo-native-widget-item-content ' + '\n' + '        .exo-native-widget-item-text:hover { ' + '\n' + '            color: {{description_hover_color}};' + '\n' + '            font-weight: {{description_hover_font_weight}};' + '\n' + '            text-decoration: {{description_hover_decoration}};' + '\n' + '        }' + '\n' + '        ' + '\n' + '        {{zone_id_prefix}}.exo-native-widget ' + '\n' + '        .exo-native-widget-outer-container ' + '\n' + '        .exo-native-widget-item-container:nth-child(n+{{max_items}}) { ' + '\n' + '            display: none;' + '\n' + '        }' + '\n' + '        @media all and (max-width: {{breakpoint}}) {' + '\n' + '            {{zone_id_prefix}}.exo-native-widget { ' + '\n' + '            } ' + '\n' + '            {{zone_id_prefix}}.exo-native-widget ' + '\n' + '            .exo-native-widget-outer-container ' + '\n' + '            .exo-native-widget-item-container:nth-child(n+{{max_items_mobile}}) { ' + '\n' + '                display: none;' + '\n' + '            }' + '\n' + '            ' + '\n' + '            {{zone_id_prefix}}.exo-native-widget ' + '\n' + '            .exo-native-widget-outer-container ' + '\n' + '            .exo-native-widget-item-container { ' + '\n' + '                flex-basis: calc(100%/{{mobile_cols}});' + '\n' + '            }' + '\n' + '        }' + '\n' + '    ';
    var regExTemp = null;
    for (var placeholder in s) {
      regExTemp = new RegExp('{{' + placeholder + '}}', 'g');
      mainStyleString = mainStyleString.replace(regExTemp, s[placeholder])
    }
    elStyle.innerHTML = mainStyleString;
    return elStyle
  }
  function generateWidgetCustomCss(layout) {
    var elStyle = document.createElement('style');
    var customcss = layout.customcss.replace(/ *(:|;|{|}) */g, '$1').replace(/\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*\/+/g, '').split('}').filter(function (el) {
      return el.trim().length > 0
    }).map(function (el) {
      return '#exoNativeWidget' + idzone + '.exo-native-widget ' + el
    }).join('} ') + '}';
    elStyle.innerHTML = customcss;
    return elStyle
  }
  function isValidBrowser() {
    return !(window.attachEvent && !window.addEventListener)
  }
  function generateWidgetSwapHrefScript() {
    var elScript = document.createElement('script');
    elScript.setAttribute('type', 'text/javascript');
    scriptString = '' + '\n' + 'function setRealHref(e) {' + '\n' + 'var caller = e.currentTarget || e.srcElement; ' + '\n' + 'if (caller.getAttribute("real-href").indexOf("?") !== -1) {' + '\n' + '  var separatorUrlParams = "&";' + '\n' + '} else {' + '\n' + '  var separatorUrlParams = "?";' + '\n' + '}' + '\n' + 'var clickXY = "clickX=" + e.clientX + "&clickY=" + e.clientY;' + '\n' + 'caller.setAttribute("href", caller.getAttribute("real-href") + separatorUrlParams + clickXY);' + '\n' + '}';
    elScript.innerHTML = scriptString;
    return elScript
  }
  function generateBrandingArea(widgetHeaderContentHtml, isOnBottom) {
    isOnBottom = (typeof isOnBottom !== 'undefined');
    var elBranding = document.createElement('div');
    elBranding.className = 'exo-native-widget-header' + (isOnBottom ? ' exo-native-widget-header-bottom' : '');
    elBranding.innerHTML = widgetHeaderContentHtml;
    return elBranding
  }
  function resolvePopunderConflict() {
    function setPopunderIgnore() {
      var objPopunderJs = (function () {
        if (typeof BetterJsPop !== 'undefined') {
          return BetterJsPop
        }
        if ((typeof window.popns !== 'undefined') && (window[window.popns] !== 'undefined')) {
          return window[window.popns]
        }
        return undefined
      }) ();
      if (typeof objPopunderJs !== 'undefined') {
        var popunderIgnored = objPopunderJs.getIgnoreTo();
        var nativeIgnored = false;
        for (var prop in popunderIgnored) {
          if (popunderIgnored.hasOwnProperty(prop)) {
            if (popunderIgnored[prop] === '.exo-native-widget-item') {
              nativeIgnored = true;
              break
            }
          }
        }
        if (!nativeIgnored) {
          objPopunderJs.ignoreTo('.exo-native-widget-item');
          for (var i = 0; i < document.getElementsByClassName('exo-native-widget-item').length; i++) {
            document.getElementsByClassName('exo-native-widget-item') [i].removeEventListener('mouseover', setPopunderIgnore, false)
          }
        }
      }
    }
    var items = document.getElementsByClassName('exo-native-widget-item');
    for (var i = 0; i < items.length; i++) {
      items[i].addEventListener('mouseover', setPopunderIgnore, false)
    }
  }
  var exitAlreadyOpened = false;
  var interAlreadyOpened = false;
  function createWidget(layoutJson, widgetOptions) {
    var widgetType = layoutJson.publisherAdType;
    if (typeof widgetOptions.layout === 'undefined') {
      widgetOptions.layout = layoutJson
    }
    if (widgetType === 'native-exit') {
      widgetOptions.cookiePrefix = 'exoexit';
      var isMobileDevice = function () {
        let check = false;
        (function (a) {
          if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true
        }) (navigator.userAgent || navigator.vendor || window.opera);
        return check
      };
      if (isMobileDevice() || exitAlreadyOpened) {
        return
      }
      exitAlreadyOpened = true;
      new ExoExit().init(widgetOptions)
    }
    if (widgetType === 'native-interstitial') {
      if (interAlreadyOpened) {
        return
      }
      interAlreadyOpened = true;
      var triggerType = parseInt(layoutJson.adTriggerType);
      widgetOptions.showOnDelay = triggerType === 1;
      widgetOptions.triggerType = triggerType;
      if (triggerType === 2) {
        var triggerMethod = parseInt(layoutJson.popTriggerMethod);
        if (triggerMethod === 3) {
          widgetOptions.triggerSelector = 'a:not(.exo-native-widget-item)'
        } else if (triggerMethod === 2) {
          var trigger_classes;
          var trigger_classes_final = '';
          if (layoutJson.popTriggerClasses.indexOf(',') === - 1) {
            trigger_classes = layoutJson.popTriggerClasses.split(' ')
          } else {
            var trimmed_trigger_classes = layoutJson.popTriggerClasses.replace(/\s/g, '');
            trigger_classes = trimmed_trigger_classes.split(',')
          }
          for (var i = 0; i < trigger_classes.length; i++) {
            if (trigger_classes[i] !== '') {
              if (trigger_classes[i].substr(0, 1) !== '.') {
                trigger_classes[i] = '.' + trigger_classes[i]
              }
              trigger_classes_final += trigger_classes[i] + ', '
            }
          }
          if (trigger_classes_final.length > 0) {
            trigger_classes_final = trigger_classes_final.substr(0, (trigger_classes_final.length - 2))
          }
          widgetOptions.triggerSelector = trigger_classes_final
        }
      }
      widgetOptions.cookiePrefix = 'exointer';
      new ExoInter().init(widgetOptions)
    }
    if (widgetType === 'native-recommendation') {
      widgetOptions.showOnDelay = true;
      new ExoInline().init(widgetOptions)
    }
  }
  function isFallbackHTML(layout) {
    return layout.hasOwnProperty('fallback') && layout.fallback !== ''
  }
  function renderFallbackHTML(settings) {
    var fallback = document.createElement('div');
    fallback.innerHTML = settings.layout.fallback;
    settings.htmlNode.appendChild(fallback)
  }
}) ({
  'exaDomain': 'syndication.exdynsrv.com'
})
