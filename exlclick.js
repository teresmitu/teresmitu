!function(e) {
    var t = {};
    function n(i) {
        if (t[i])
            return t[i].exports;
        var r = t[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(r.exports, r, r.exports, n),
        r.l = !0,
        r.exports
    }
    n.m = e,
    n.c = t,
    n.d = function(e, t, i) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: i
        })
    }
    ,
    n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(e, t) {
        if (1 & t && (e = n(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var i = Object.create(null);
        if (n.r(i),
        Object.defineProperty(i, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var r in e)
                n.d(i, r, function(t) {
                    return e[t]
                }
                .bind(null, r));
        return i
    }
    ,
    n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return n.d(t, "a", t),
        t
    }
    ,
    n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    n.p = "",
    n(n.s = 4)
}([function(e, t, n) {
    var i, r;
    !function(o, a, s) {
        "use strict";
        "undefined" != typeof window && n(3) ? void 0 === (r = "function" == typeof (i = s) ? i.call(t, n, t, e) : i) || (e.exports = r) : e.exports ? e.exports = s() : a.exports ? a.exports = s() : a.Fingerprint2 = s()
    }(0, this, (function() {
        "use strict";
        var e = function(e, t) {
            e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]],
            t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
            var n = [0, 0, 0, 0];
            return n[3] += e[3] + t[3],
            n[2] += n[3] >>> 16,
            n[3] &= 65535,
            n[2] += e[2] + t[2],
            n[1] += n[2] >>> 16,
            n[2] &= 65535,
            n[1] += e[1] + t[1],
            n[0] += n[1] >>> 16,
            n[1] &= 65535,
            n[0] += e[0] + t[0],
            n[0] &= 65535,
            [n[0] << 16 | n[1], n[2] << 16 | n[3]]
        }
          , t = function(e, t) {
            e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]],
            t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
            var n = [0, 0, 0, 0];
            return n[3] += e[3] * t[3],
            n[2] += n[3] >>> 16,
            n[3] &= 65535,
            n[2] += e[2] * t[3],
            n[1] += n[2] >>> 16,
            n[2] &= 65535,
            n[2] += e[3] * t[2],
            n[1] += n[2] >>> 16,
            n[2] &= 65535,
            n[1] += e[1] * t[3],
            n[0] += n[1] >>> 16,
            n[1] &= 65535,
            n[1] += e[2] * t[2],
            n[0] += n[1] >>> 16,
            n[1] &= 65535,
            n[1] += e[3] * t[1],
            n[0] += n[1] >>> 16,
            n[1] &= 65535,
            n[0] += e[0] * t[3] + e[1] * t[2] + e[2] * t[1] + e[3] * t[0],
            n[0] &= 65535,
            [n[0] << 16 | n[1], n[2] << 16 | n[3]]
        }
          , n = function(e, t) {
            return 32 === (t %= 64) ? [e[1], e[0]] : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t | e[0] >>> 32 - t] : (t -= 32,
            [e[1] << t | e[0] >>> 32 - t, e[0] << t | e[1] >>> 32 - t])
        }
          , i = function(e, t) {
            return 0 === (t %= 64) ? e : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t] : [e[1] << t - 32, 0]
        }
          , r = function(e, t) {
            return [e[0] ^ t[0], e[1] ^ t[1]]
        }
          , o = function(e) {
            return e = r(e, [0, e[0] >>> 1]),
            e = t(e, [4283543511, 3981806797]),
            e = r(e, [0, e[0] >>> 1]),
            e = t(e, [3301882366, 444984403]),
            e = r(e, [0, e[0] >>> 1])
        }
          , a = function(a, s) {
            s = s || 0;
            for (var c = (a = a || "").length % 16, u = a.length - c, l = [0, s], d = [0, s], f = [0, 0], p = [0, 0], h = [2277735313, 289559509], w = [1291169091, 658871167], g = 0; g < u; g += 16)
                f = [255 & a.charCodeAt(g + 4) | (255 & a.charCodeAt(g + 5)) << 8 | (255 & a.charCodeAt(g + 6)) << 16 | (255 & a.charCodeAt(g + 7)) << 24, 255 & a.charCodeAt(g) | (255 & a.charCodeAt(g + 1)) << 8 | (255 & a.charCodeAt(g + 2)) << 16 | (255 & a.charCodeAt(g + 3)) << 24],
                p = [255 & a.charCodeAt(g + 12) | (255 & a.charCodeAt(g + 13)) << 8 | (255 & a.charCodeAt(g + 14)) << 16 | (255 & a.charCodeAt(g + 15)) << 24, 255 & a.charCodeAt(g + 8) | (255 & a.charCodeAt(g + 9)) << 8 | (255 & a.charCodeAt(g + 10)) << 16 | (255 & a.charCodeAt(g + 11)) << 24],
                f = t(f, h),
                f = n(f, 31),
                f = t(f, w),
                l = r(l, f),
                l = n(l, 27),
                l = e(l, d),
                l = e(t(l, [0, 5]), [0, 1390208809]),
                p = t(p, w),
                p = n(p, 33),
                p = t(p, h),
                d = r(d, p),
                d = n(d, 31),
                d = e(d, l),
                d = e(t(d, [0, 5]), [0, 944331445]);
            switch (f = [0, 0],
            p = [0, 0],
            c) {
            case 15:
                p = r(p, i([0, a.charCodeAt(g + 14)], 48));
            case 14:
                p = r(p, i([0, a.charCodeAt(g + 13)], 40));
            case 13:
                p = r(p, i([0, a.charCodeAt(g + 12)], 32));
            case 12:
                p = r(p, i([0, a.charCodeAt(g + 11)], 24));
            case 11:
                p = r(p, i([0, a.charCodeAt(g + 10)], 16));
            case 10:
                p = r(p, i([0, a.charCodeAt(g + 9)], 8));
            case 9:
                p = r(p, [0, a.charCodeAt(g + 8)]),
                p = t(p, w),
                p = n(p, 33),
                p = t(p, h),
                d = r(d, p);
            case 8:
                f = r(f, i([0, a.charCodeAt(g + 7)], 56));
            case 7:
                f = r(f, i([0, a.charCodeAt(g + 6)], 48));
            case 6:
                f = r(f, i([0, a.charCodeAt(g + 5)], 40));
            case 5:
                f = r(f, i([0, a.charCodeAt(g + 4)], 32));
            case 4:
                f = r(f, i([0, a.charCodeAt(g + 3)], 24));
            case 3:
                f = r(f, i([0, a.charCodeAt(g + 2)], 16));
            case 2:
                f = r(f, i([0, a.charCodeAt(g + 1)], 8));
            case 1:
                f = r(f, [0, a.charCodeAt(g)]),
                f = t(f, h),
                f = n(f, 31),
                f = t(f, w),
                l = r(l, f)
            }
            return l = r(l, [0, a.length]),
            d = r(d, [0, a.length]),
            l = e(l, d),
            d = e(d, l),
            l = o(l),
            d = o(d),
            l = e(l, d),
            d = e(d, l),
            ("00000000" + (l[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (l[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (d[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (d[1] >>> 0).toString(16)).slice(-8)
        }
          , s = {
            preprocessor: null,
            audio: {
                timeout: 1e3,
                excludeIOS11: !0
            },
            fonts: {
                swfContainerId: "fingerprintjs2",
                swfPath: "flash/compiled/FontList.swf",
                userDefinedFonts: [],
                extendedJsFonts: !1
            },
            screen: {
                detectScreenOrientation: !0
            },
            plugins: {
                sortPluginsFor: [/palemoon/i],
                excludeIE: !1
            },
            extraComponents: [],
            excludes: {
                enumerateDevices: !0,
                pixelRatio: !0,
                doNotTrack: !0,
                fontsFlash: !0
            },
            NOT_AVAILABLE: "not available",
            ERROR: "error",
            EXCLUDED: "excluded"
        }
          , c = function(e, t) {
            if (Array.prototype.forEach && e.forEach === Array.prototype.forEach)
                e.forEach(t);
            else if (e.length === +e.length)
                for (var n = 0, i = e.length; n < i; n++)
                    t(e[n], n, e);
            else
                for (var r in e)
                    e.hasOwnProperty(r) && t(e[r], r, e)
        }
          , u = function(e, t) {
            var n = [];
            return null == e ? n : Array.prototype.map && e.map === Array.prototype.map ? e.map(t) : (c(e, (function(e, i, r) {
                n.push(t(e, i, r))
            }
            )),
            n)
        }
          , l = function() {
            return navigator.mediaDevices && navigator.mediaDevices.enumerateDevices
        }
          , d = function(e) {
            var t = [window.screen.width, window.screen.height];
            return e.screen.detectScreenOrientation && t.sort().reverse(),
            t
        }
          , f = function(e) {
            if (window.screen.availWidth && window.screen.availHeight) {
                var t = [window.screen.availHeight, window.screen.availWidth];
                return e.screen.detectScreenOrientation && t.sort().reverse(),
                t
            }
            return e.NOT_AVAILABLE
        }
          , p = function(e) {
            if (null == navigator.plugins)
                return e.NOT_AVAILABLE;
            for (var t = [], n = 0, i = navigator.plugins.length; n < i; n++)
                navigator.plugins[n] && t.push(navigator.plugins[n]);
            return w(e) && (t = t.sort((function(e, t) {
                return e.name > t.name ? 1 : e.name < t.name ? -1 : 0
            }
            ))),
            u(t, (function(e) {
                var t = u(e, (function(e) {
                    return [e.type, e.suffixes]
                }
                ));
                return [e.name, e.description, t]
            }
            ))
        }
          , h = function(e) {
            var t = [];
            if (Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(window, "ActiveXObject") || "ActiveXObject"in window) {
                t = u(["AcroPDF.PDF", "Adodb.Stream", "AgControl.AgControl", "DevalVRXCtrl.DevalVRXCtrl.1", "MacromediaFlashPaper.MacromediaFlashPaper", "Msxml2.DOMDocument", "Msxml2.XMLHTTP", "PDF.PdfCtrl", "QuickTime.QuickTime", "QuickTimeCheckObject.QuickTimeCheck.1", "RealPlayer", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)", "Scripting.Dictionary", "SWCtl.SWCtl", "Shell.UIHelper", "ShockwaveFlash.ShockwaveFlash", "Skype.Detection", "TDCCtl.TDCCtl", "WMPlayer.OCX", "rmocx.RealPlayer G2 Control", "rmocx.RealPlayer G2 Control.1"], (function(t) {
                    try {
                        return new window.ActiveXObject(t),
                        t
                    } catch (t) {
                        return e.ERROR
                    }
                }
                ))
            } else
                t.push(e.NOT_AVAILABLE);
            return navigator.plugins && (t = t.concat(p(e))),
            t
        }
          , w = function(e) {
            for (var t = !1, n = 0, i = e.plugins.sortPluginsFor.length; n < i; n++) {
                var r = e.plugins.sortPluginsFor[n];
                if (navigator.userAgent.match(r)) {
                    t = !0;
                    break
                }
            }
            return t
        }
          , g = function(e) {
            try {
                return !!window.sessionStorage
            } catch (t) {
                return e.ERROR
            }
        }
          , m = function(e) {
            try {
                return !!window.localStorage
            } catch (t) {
                return e.ERROR
            }
        }
          , v = function(e) {
            try {
                return !!window.indexedDB
            } catch (t) {
                return e.ERROR
            }
        }
          , b = function(e) {
            return navigator.hardwareConcurrency ? navigator.hardwareConcurrency : e.NOT_AVAILABLE
        }
          , y = function(e) {
            return navigator.cpuClass || e.NOT_AVAILABLE
        }
          , x = function(e) {
            return navigator.platform ? navigator.platform : e.NOT_AVAILABLE
        }
          , S = function(e) {
            return navigator.doNotTrack ? navigator.doNotTrack : navigator.msDoNotTrack ? navigator.msDoNotTrack : window.doNotTrack ? window.doNotTrack : e.NOT_AVAILABLE
        }
          , T = function() {
            var e, t = 0;
            void 0 !== navigator.maxTouchPoints ? t = navigator.maxTouchPoints : void 0 !== navigator.msMaxTouchPoints && (t = navigator.msMaxTouchPoints);
            try {
                document.createEvent("TouchEvent"),
                e = !0
            } catch (t) {
                e = !1
            }
            return [t, e, "ontouchstart"in window]
        }
          , O = function(e) {
            var t = []
              , n = document.createElement("canvas");
            n.width = 2e3,
            n.height = 200,
            n.style.display = "inline";
            var i = n.getContext("2d");
            return i.rect(0, 0, 10, 10),
            i.rect(2, 2, 6, 6),
            t.push("canvas winding:" + (!1 === i.isPointInPath(5, 5, "evenodd") ? "yes" : "no")),
            i.textBaseline = "alphabetic",
            i.fillStyle = "#f60",
            i.fillRect(125, 1, 62, 20),
            i.fillStyle = "#069",
            e.dontUseFakeFontInCanvas ? i.font = "11pt Arial" : i.font = "11pt no-real-font-123",
            i.fillText("Cwm fjordbank glyphs vext quiz, 😃", 2, 15),
            i.fillStyle = "rgba(102, 204, 0, 0.2)",
            i.font = "18pt Arial",
            i.fillText("Cwm fjordbank glyphs vext quiz, 😃", 4, 45),
            i.globalCompositeOperation = "multiply",
            i.fillStyle = "rgb(255,0,255)",
            i.beginPath(),
            i.arc(50, 50, 50, 0, 2 * Math.PI, !0),
            i.closePath(),
            i.fill(),
            i.fillStyle = "rgb(0,255,255)",
            i.beginPath(),
            i.arc(100, 50, 50, 0, 2 * Math.PI, !0),
            i.closePath(),
            i.fill(),
            i.fillStyle = "rgb(255,255,0)",
            i.beginPath(),
            i.arc(75, 100, 50, 0, 2 * Math.PI, !0),
            i.closePath(),
            i.fill(),
            i.fillStyle = "rgb(255,0,255)",
            i.arc(75, 75, 75, 0, 2 * Math.PI, !0),
            i.arc(75, 75, 25, 0, 2 * Math.PI, !0),
            i.fill("evenodd"),
            n.toDataURL && t.push("canvas fp:" + n.toDataURL()),
            t
        }
          , E = function() {
            var e, t = function(t) {
                return e.clearColor(0, 0, 0, 1),
                e.enable(e.DEPTH_TEST),
                e.depthFunc(e.LEQUAL),
                e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT),
                "[" + t[0] + ", " + t[1] + "]"
            };
            if (!(e = j()))
                return null;
            var n = []
              , i = e.createBuffer();
            e.bindBuffer(e.ARRAY_BUFFER, i);
            var r = new Float32Array([-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0]);
            e.bufferData(e.ARRAY_BUFFER, r, e.STATIC_DRAW),
            i.itemSize = 3,
            i.numItems = 3;
            var o = e.createProgram()
              , a = e.createShader(e.VERTEX_SHADER);
            e.shaderSource(a, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}"),
            e.compileShader(a);
            var s = e.createShader(e.FRAGMENT_SHADER);
            e.shaderSource(s, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}"),
            e.compileShader(s),
            e.attachShader(o, a),
            e.attachShader(o, s),
            e.linkProgram(o),
            e.useProgram(o),
            o.vertexPosAttrib = e.getAttribLocation(o, "attrVertex"),
            o.offsetUniform = e.getUniformLocation(o, "uniformOffset"),
            e.enableVertexAttribArray(o.vertexPosArray),
            e.vertexAttribPointer(o.vertexPosAttrib, i.itemSize, e.FLOAT, !1, 0, 0),
            e.uniform2f(o.offsetUniform, 1, 1),
            e.drawArrays(e.TRIANGLE_STRIP, 0, i.numItems);
            try {
                n.push(e.canvas.toDataURL())
            } catch (e) {}
            n.push("extensions:" + (e.getSupportedExtensions() || []).join(";")),
            n.push("webgl aliased line width range:" + t(e.getParameter(e.ALIASED_LINE_WIDTH_RANGE))),
            n.push("webgl aliased point size range:" + t(e.getParameter(e.ALIASED_POINT_SIZE_RANGE))),
            n.push("webgl alpha bits:" + e.getParameter(e.ALPHA_BITS)),
            n.push("webgl antialiasing:" + (e.getContextAttributes().antialias ? "yes" : "no")),
            n.push("webgl blue bits:" + e.getParameter(e.BLUE_BITS)),
            n.push("webgl depth bits:" + e.getParameter(e.DEPTH_BITS)),
            n.push("webgl green bits:" + e.getParameter(e.GREEN_BITS)),
            n.push("webgl max anisotropy:" + function(e) {
                var t = e.getExtension("EXT_texture_filter_anisotropic") || e.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || e.getExtension("MOZ_EXT_texture_filter_anisotropic");
                if (t) {
                    var n = e.getParameter(t.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
                    return 0 === n && (n = 2),
                    n
                }
                return null
            }(e)),
            n.push("webgl max combined texture image units:" + e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS)),
            n.push("webgl max cube map texture size:" + e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE)),
            n.push("webgl max fragment uniform vectors:" + e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS)),
            n.push("webgl max render buffer size:" + e.getParameter(e.MAX_RENDERBUFFER_SIZE)),
            n.push("webgl max texture image units:" + e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)),
            n.push("webgl max texture size:" + e.getParameter(e.MAX_TEXTURE_SIZE)),
            n.push("webgl max varying vectors:" + e.getParameter(e.MAX_VARYING_VECTORS)),
            n.push("webgl max vertex attribs:" + e.getParameter(e.MAX_VERTEX_ATTRIBS)),
            n.push("webgl max vertex texture image units:" + e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)),
            n.push("webgl max vertex uniform vectors:" + e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS)),
            n.push("webgl max viewport dims:" + t(e.getParameter(e.MAX_VIEWPORT_DIMS))),
            n.push("webgl red bits:" + e.getParameter(e.RED_BITS)),
            n.push("webgl renderer:" + e.getParameter(e.RENDERER)),
            n.push("webgl shading language version:" + e.getParameter(e.SHADING_LANGUAGE_VERSION)),
            n.push("webgl stencil bits:" + e.getParameter(e.STENCIL_BITS)),
            n.push("webgl vendor:" + e.getParameter(e.VENDOR)),
            n.push("webgl version:" + e.getParameter(e.VERSION));
            try {
                var u = e.getExtension("WEBGL_debug_renderer_info");
                u && (n.push("webgl unmasked vendor:" + e.getParameter(u.UNMASKED_VENDOR_WEBGL)),
                n.push("webgl unmasked renderer:" + e.getParameter(u.UNMASKED_RENDERER_WEBGL)))
            } catch (e) {}
            return e.getShaderPrecisionFormat ? (c(["FLOAT", "INT"], (function(t) {
                c(["VERTEX", "FRAGMENT"], (function(i) {
                    c(["HIGH", "MEDIUM", "LOW"], (function(r) {
                        c(["precision", "rangeMin", "rangeMax"], (function(o) {
                            var a = e.getShaderPrecisionFormat(e[i + "_SHADER"], e[r + "_" + t])[o];
                            "precision" !== o && (o = "precision " + o);
                            var s = ["webgl ", i.toLowerCase(), " shader ", r.toLowerCase(), " ", t.toLowerCase(), " ", o, ":", a].join("");
                            n.push(s)
                        }
                        ))
                    }
                    ))
                }
                ))
            }
            )),
            n) : n
        }
          , A = function() {
            try {
                var e = j()
                  , t = e.getExtension("WEBGL_debug_renderer_info");
                return e.getParameter(t.UNMASKED_VENDOR_WEBGL) + "~" + e.getParameter(t.UNMASKED_RENDERER_WEBGL)
            } catch (e) {
                return null
            }
        }
          , k = function() {
            var e = document.createElement("div");
            e.innerHTML = "&nbsp;",
            e.className = "adsbox";
            var t = !1;
            try {
                document.body.appendChild(e),
                t = 0 === document.getElementsByClassName("adsbox")[0].offsetHeight,
                document.body.removeChild(e)
            } catch (e) {
                t = !1
            }
            return t
        }
          , C = function() {
            if (void 0 !== navigator.languages)
                try {
                    if (navigator.languages[0].substr(0, 2) !== navigator.language.substr(0, 2))
                        return !0
                } catch (e) {
                    return !0
                }
            return !1
        }
          , B = function() {
            return window.screen.width < window.screen.availWidth || window.screen.height < window.screen.availHeight
        }
          , M = function() {
            var e, t = navigator.userAgent.toLowerCase(), n = navigator.oscpu, i = navigator.platform.toLowerCase();
            if (e = t.indexOf("windows phone") >= 0 ? "Windows Phone" : t.indexOf("win") >= 0 ? "Windows" : t.indexOf("android") >= 0 ? "Android" : t.indexOf("linux") >= 0 || t.indexOf("cros") >= 0 ? "Linux" : t.indexOf("iphone") >= 0 || t.indexOf("ipad") >= 0 ? "iOS" : t.indexOf("mac") >= 0 ? "Mac" : "Other",
            ("ontouchstart"in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0) && "Windows Phone" !== e && "Android" !== e && "iOS" !== e && "Other" !== e)
                return !0;
            if (void 0 !== n) {
                if ((n = n.toLowerCase()).indexOf("win") >= 0 && "Windows" !== e && "Windows Phone" !== e)
                    return !0;
                if (n.indexOf("linux") >= 0 && "Linux" !== e && "Android" !== e)
                    return !0;
                if (n.indexOf("mac") >= 0 && "Mac" !== e && "iOS" !== e)
                    return !0;
                if ((-1 === n.indexOf("win") && -1 === n.indexOf("linux") && -1 === n.indexOf("mac")) != ("Other" === e))
                    return !0
            }
            return i.indexOf("win") >= 0 && "Windows" !== e && "Windows Phone" !== e || ((i.indexOf("linux") >= 0 || i.indexOf("android") >= 0 || i.indexOf("pike") >= 0) && "Linux" !== e && "Android" !== e || ((i.indexOf("mac") >= 0 || i.indexOf("ipad") >= 0 || i.indexOf("ipod") >= 0 || i.indexOf("iphone") >= 0) && "Mac" !== e && "iOS" !== e || ((i.indexOf("win") < 0 && i.indexOf("linux") < 0 && i.indexOf("mac") < 0 && i.indexOf("iphone") < 0 && i.indexOf("ipad") < 0) !== ("Other" === e) || void 0 === navigator.plugins && "Windows" !== e && "Windows Phone" !== e)))
        }
          , _ = function() {
            var e, t = navigator.userAgent.toLowerCase(), n = navigator.productSub;
            if (("Chrome" === (e = t.indexOf("firefox") >= 0 ? "Firefox" : t.indexOf("opera") >= 0 || t.indexOf("opr") >= 0 ? "Opera" : t.indexOf("chrome") >= 0 ? "Chrome" : t.indexOf("safari") >= 0 ? "Safari" : t.indexOf("trident") >= 0 ? "Internet Explorer" : "Other") || "Safari" === e || "Opera" === e) && "20030107" !== n)
                return !0;
            var i, r = eval.toString().length;
            if (37 === r && "Safari" !== e && "Firefox" !== e && "Other" !== e)
                return !0;
            if (39 === r && "Internet Explorer" !== e && "Other" !== e)
                return !0;
            if (33 === r && "Chrome" !== e && "Opera" !== e && "Other" !== e)
                return !0;
            try {
                throw "a"
            } catch (e) {
                try {
                    e.toSource(),
                    i = !0
                } catch (e) {
                    i = !1
                }
            }
            return i && "Firefox" !== e && "Other" !== e
        }
          , P = function() {
            var e = document.createElement("canvas");
            return !(!e.getContext || !e.getContext("2d"))
        }
          , N = function() {
            if (!P())
                return !1;
            var e = j();
            return !!window.WebGLRenderingContext && !!e
        }
          , R = function() {
            return "Microsoft Internet Explorer" === navigator.appName || !("Netscape" !== navigator.appName || !/Trident/.test(navigator.userAgent))
        }
          , L = function() {
            return void 0 !== window.swfobject
        }
          , I = function() {
            return window.swfobject.hasFlashPlayerVersion("9.0.0")
        }
          , D = function(e, t) {
            window.___fp_swf_loaded = function(t) {
                e(t)
            }
            ;
            var n = t.fonts.swfContainerId;
            !function(e) {
                var t = document.createElement("div");
                t.setAttribute("id", e.fonts.swfContainerId),
                document.body.appendChild(t)
            }();
            var i = {
                onReady: "___fp_swf_loaded"
            };
            window.swfobject.embedSWF(t.fonts.swfPath, n, "1", "1", "9.0.0", !1, i, {
                allowScriptAccess: "always",
                menu: "false"
            }, {})
        }
          , j = function() {
            var e = document.createElement("canvas")
              , t = null;
            try {
                t = e.getContext("webgl") || e.getContext("experimental-webgl")
            } catch (e) {}
            return t || (t = null),
            t
        }
          , F = [{
            key: "userAgent",
            getData: function(e) {
                e(navigator.userAgent)
            }
        }, {
            key: "webdriver",
            getData: function(e, t) {
                e(null == navigator.webdriver ? t.NOT_AVAILABLE : navigator.webdriver)
            }
        }, {
            key: "language",
            getData: function(e, t) {
                e(navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || t.NOT_AVAILABLE)
            }
        }, {
            key: "colorDepth",
            getData: function(e, t) {
                e(window.screen.colorDepth || t.NOT_AVAILABLE)
            }
        }, {
            key: "deviceMemory",
            getData: function(e, t) {
                e(navigator.deviceMemory || t.NOT_AVAILABLE)
            }
        }, {
            key: "pixelRatio",
            getData: function(e, t) {
                e(window.devicePixelRatio || t.NOT_AVAILABLE)
            }
        }, {
            key: "hardwareConcurrency",
            getData: function(e, t) {
                e(b(t))
            }
        }, {
            key: "screenResolution",
            getData: function(e, t) {
                e(d(t))
            }
        }, {
            key: "availableScreenResolution",
            getData: function(e, t) {
                e(f(t))
            }
        }, {
            key: "timezoneOffset",
            getData: function(e) {
                e((new Date).getTimezoneOffset())
            }
        }, {
            key: "timezone",
            getData: function(e, t) {
                window.Intl && window.Intl.DateTimeFormat ? e((new window.Intl.DateTimeFormat).resolvedOptions().timeZone) : e(t.NOT_AVAILABLE)
            }
        }, {
            key: "sessionStorage",
            getData: function(e, t) {
                e(g(t))
            }
        }, {
            key: "localStorage",
            getData: function(e, t) {
                e(m(t))
            }
        }, {
            key: "indexedDb",
            getData: function(e, t) {
                e(v(t))
            }
        }, {
            key: "addBehavior",
            getData: function(e) {
                e(!(!document.body || !document.body.addBehavior))
            }
        }, {
            key: "openDatabase",
            getData: function(e) {
                e(!!window.openDatabase)
            }
        }, {
            key: "cpuClass",
            getData: function(e, t) {
                e(y(t))
            }
        }, {
            key: "platform",
            getData: function(e, t) {
                e(x(t))
            }
        }, {
            key: "doNotTrack",
            getData: function(e, t) {
                e(S(t))
            }
        }, {
            key: "plugins",
            getData: function(e, t) {
                R() ? t.plugins.excludeIE ? e(t.EXCLUDED) : e(h(t)) : e(p(t))
            }
        }, {
            key: "canvas",
            getData: function(e, t) {
                P() ? e(O(t)) : e(t.NOT_AVAILABLE)
            }
        }, {
            key: "webgl",
            getData: function(e, t) {
                N() ? e(E()) : e(t.NOT_AVAILABLE)
            }
        }, {
            key: "webglVendorAndRenderer",
            getData: function(e) {
                N() ? e(A()) : e()
            }
        }, {
            key: "adBlock",
            getData: function(e) {
                e(k())
            }
        }, {
            key: "hasLiedLanguages",
            getData: function(e) {
                e(C())
            }
        }, {
            key: "hasLiedResolution",
            getData: function(e) {
                e(B())
            }
        }, {
            key: "hasLiedOs",
            getData: function(e) {
                e(M())
            }
        }, {
            key: "hasLiedBrowser",
            getData: function(e) {
                e(_())
            }
        }, {
            key: "touchSupport",
            getData: function(e) {
                e(T())
            }
        }, {
            key: "fonts",
            getData: function(e, t) {
                var n = ["monospace", "sans-serif", "serif"]
                  , i = ["Andale Mono", "Arial", "Arial Black", "Arial Hebrew", "Arial MT", "Arial Narrow", "Arial Rounded MT Bold", "Arial Unicode MS", "Bitstream Vera Sans Mono", "Book Antiqua", "Bookman Old Style", "Calibri", "Cambria", "Cambria Math", "Century", "Century Gothic", "Century Schoolbook", "Comic Sans", "Comic Sans MS", "Consolas", "Courier", "Courier New", "Geneva", "Georgia", "Helvetica", "Helvetica Neue", "Impact", "Lucida Bright", "Lucida Calligraphy", "Lucida Console", "Lucida Fax", "LUCIDA GRANDE", "Lucida Handwriting", "Lucida Sans", "Lucida Sans Typewriter", "Lucida Sans Unicode", "Microsoft Sans Serif", "Monaco", "Monotype Corsiva", "MS Gothic", "MS Outlook", "MS PGothic", "MS Reference Sans Serif", "MS Sans Serif", "MS Serif", "MYRIAD", "MYRIAD PRO", "Palatino", "Palatino Linotype", "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Tahoma", "Times", "Times New Roman", "Times New Roman PS", "Trebuchet MS", "Verdana", "Wingdings", "Wingdings 2", "Wingdings 3"];
                if (t.fonts.extendedJsFonts) {
                    i = i.concat(["Abadi MT Condensed Light", "Academy Engraved LET", "ADOBE CASLON PRO", "Adobe Garamond", "ADOBE GARAMOND PRO", "Agency FB", "Aharoni", "Albertus Extra Bold", "Albertus Medium", "Algerian", "Amazone BT", "American Typewriter", "American Typewriter Condensed", "AmerType Md BT", "Andalus", "Angsana New", "AngsanaUPC", "Antique Olive", "Aparajita", "Apple Chancery", "Apple Color Emoji", "Apple SD Gothic Neo", "Arabic Typesetting", "ARCHER", "ARNO PRO", "Arrus BT", "Aurora Cn BT", "AvantGarde Bk BT", "AvantGarde Md BT", "AVENIR", "Ayuthaya", "Bandy", "Bangla Sangam MN", "Bank Gothic", "BankGothic Md BT", "Baskerville", "Baskerville Old Face", "Batang", "BatangChe", "Bauer Bodoni", "Bauhaus 93", "Bazooka", "Bell MT", "Bembo", "Benguiat Bk BT", "Berlin Sans FB", "Berlin Sans FB Demi", "Bernard MT Condensed", "BernhardFashion BT", "BernhardMod BT", "Big Caslon", "BinnerD", "Blackadder ITC", "BlairMdITC TT", "Bodoni 72", "Bodoni 72 Oldstyle", "Bodoni 72 Smallcaps", "Bodoni MT", "Bodoni MT Black", "Bodoni MT Condensed", "Bodoni MT Poster Compressed", "Bookshelf Symbol 7", "Boulder", "Bradley Hand", "Bradley Hand ITC", "Bremen Bd BT", "Britannic Bold", "Broadway", "Browallia New", "BrowalliaUPC", "Brush Script MT", "Californian FB", "Calisto MT", "Calligrapher", "Candara", "CaslonOpnface BT", "Castellar", "Centaur", "Cezanne", "CG Omega", "CG Times", "Chalkboard", "Chalkboard SE", "Chalkduster", "Charlesworth", "Charter Bd BT", "Charter BT", "Chaucer", "ChelthmITC Bk BT", "Chiller", "Clarendon", "Clarendon Condensed", "CloisterBlack BT", "Cochin", "Colonna MT", "Constantia", "Cooper Black", "Copperplate", "Copperplate Gothic", "Copperplate Gothic Bold", "Copperplate Gothic Light", "CopperplGoth Bd BT", "Corbel", "Cordia New", "CordiaUPC", "Cornerstone", "Coronet", "Cuckoo", "Curlz MT", "DaunPenh", "Dauphin", "David", "DB LCD Temp", "DELICIOUS", "Denmark", "DFKai-SB", "Didot", "DilleniaUPC", "DIN", "DokChampa", "Dotum", "DotumChe", "Ebrima", "Edwardian Script ITC", "Elephant", "English 111 Vivace BT", "Engravers MT", "EngraversGothic BT", "Eras Bold ITC", "Eras Demi ITC", "Eras Light ITC", "Eras Medium ITC", "EucrosiaUPC", "Euphemia", "Euphemia UCAS", "EUROSTILE", "Exotc350 Bd BT", "FangSong", "Felix Titling", "Fixedsys", "FONTIN", "Footlight MT Light", "Forte", "FrankRuehl", "Fransiscan", "Freefrm721 Blk BT", "FreesiaUPC", "Freestyle Script", "French Script MT", "FrnkGothITC Bk BT", "Fruitger", "FRUTIGER", "Futura", "Futura Bk BT", "Futura Lt BT", "Futura Md BT", "Futura ZBlk BT", "FuturaBlack BT", "Gabriola", "Galliard BT", "Gautami", "Geeza Pro", "Geometr231 BT", "Geometr231 Hv BT", "Geometr231 Lt BT", "GeoSlab 703 Lt BT", "GeoSlab 703 XBd BT", "Gigi", "Gill Sans", "Gill Sans MT", "Gill Sans MT Condensed", "Gill Sans MT Ext Condensed Bold", "Gill Sans Ultra Bold", "Gill Sans Ultra Bold Condensed", "Gisha", "Gloucester MT Extra Condensed", "GOTHAM", "GOTHAM BOLD", "Goudy Old Style", "Goudy Stout", "GoudyHandtooled BT", "GoudyOLSt BT", "Gujarati Sangam MN", "Gulim", "GulimChe", "Gungsuh", "GungsuhChe", "Gurmukhi MN", "Haettenschweiler", "Harlow Solid Italic", "Harrington", "Heather", "Heiti SC", "Heiti TC", "HELV", "Herald", "High Tower Text", "Hiragino Kaku Gothic ProN", "Hiragino Mincho ProN", "Hoefler Text", "Humanst 521 Cn BT", "Humanst521 BT", "Humanst521 Lt BT", "Imprint MT Shadow", "Incised901 Bd BT", "Incised901 BT", "Incised901 Lt BT", "INCONSOLATA", "Informal Roman", "Informal011 BT", "INTERSTATE", "IrisUPC", "Iskoola Pota", "JasmineUPC", "Jazz LET", "Jenson", "Jester", "Jokerman", "Juice ITC", "Kabel Bk BT", "Kabel Ult BT", "Kailasa", "KaiTi", "Kalinga", "Kannada Sangam MN", "Kartika", "Kaufmann Bd BT", "Kaufmann BT", "Khmer UI", "KodchiangUPC", "Kokila", "Korinna BT", "Kristen ITC", "Krungthep", "Kunstler Script", "Lao UI", "Latha", "Leelawadee", "Letter Gothic", "Levenim MT", "LilyUPC", "Lithograph", "Lithograph Light", "Long Island", "Lydian BT", "Magneto", "Maiandra GD", "Malayalam Sangam MN", "Malgun Gothic", "Mangal", "Marigold", "Marion", "Marker Felt", "Market", "Marlett", "Matisse ITC", "Matura MT Script Capitals", "Meiryo", "Meiryo UI", "Microsoft Himalaya", "Microsoft JhengHei", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Tai Le", "Microsoft Uighur", "Microsoft YaHei", "Microsoft Yi Baiti", "MingLiU", "MingLiU_HKSCS", "MingLiU_HKSCS-ExtB", "MingLiU-ExtB", "Minion", "Minion Pro", "Miriam", "Miriam Fixed", "Mistral", "Modern", "Modern No. 20", "Mona Lisa Solid ITC TT", "Mongolian Baiti", "MONO", "MoolBoran", "Mrs Eaves", "MS LineDraw", "MS Mincho", "MS PMincho", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MUSEO", "MV Boli", "Nadeem", "Narkisim", "NEVIS", "News Gothic", "News GothicMT", "NewsGoth BT", "Niagara Engraved", "Niagara Solid", "Noteworthy", "NSimSun", "Nyala", "OCR A Extended", "Old Century", "Old English Text MT", "Onyx", "Onyx BT", "OPTIMA", "Oriya Sangam MN", "OSAKA", "OzHandicraft BT", "Palace Script MT", "Papyrus", "Parchment", "Party LET", "Pegasus", "Perpetua", "Perpetua Titling MT", "PetitaBold", "Pickwick", "Plantagenet Cherokee", "Playbill", "PMingLiU", "PMingLiU-ExtB", "Poor Richard", "Poster", "PosterBodoni BT", "PRINCETOWN LET", "Pristina", "PTBarnum BT", "Pythagoras", "Raavi", "Rage Italic", "Ravie", "Ribbon131 Bd BT", "Rockwell", "Rockwell Condensed", "Rockwell Extra Bold", "Rod", "Roman", "Sakkal Majalla", "Santa Fe LET", "Savoye LET", "Sceptre", "Script", "Script MT Bold", "SCRIPTINA", "Serifa", "Serifa BT", "Serifa Th BT", "ShelleyVolante BT", "Sherwood", "Shonar Bangla", "Showcard Gothic", "Shruti", "Signboard", "SILKSCREEN", "SimHei", "Simplified Arabic", "Simplified Arabic Fixed", "SimSun", "SimSun-ExtB", "Sinhala Sangam MN", "Sketch Rockwell", "Skia", "Small Fonts", "Snap ITC", "Snell Roundhand", "Socket", "Souvenir Lt BT", "Staccato222 BT", "Steamer", "Stencil", "Storybook", "Styllo", "Subway", "Swis721 BlkEx BT", "Swiss911 XCm BT", "Sylfaen", "Synchro LET", "System", "Tamil Sangam MN", "Technical", "Teletype", "Telugu Sangam MN", "Tempus Sans ITC", "Terminal", "Thonburi", "Traditional Arabic", "Trajan", "TRAJAN PRO", "Tristan", "Tubular", "Tunga", "Tw Cen MT", "Tw Cen MT Condensed", "Tw Cen MT Condensed Extra Bold", "TypoUpright BT", "Unicorn", "Univers", "Univers CE 55 Medium", "Univers Condensed", "Utsaah", "Vagabond", "Vani", "Vijaya", "Viner Hand ITC", "VisualUI", "Vivaldi", "Vladimir Script", "Vrinda", "Westminster", "WHITNEY", "Wide Latin", "ZapfEllipt BT", "ZapfHumnst BT", "ZapfHumnst Dm BT", "Zapfino", "Zurich BlkEx BT", "Zurich Ex BT", "ZWAdobeF"])
                }
                i = (i = i.concat(t.fonts.userDefinedFonts)).filter((function(e, t) {
                    return i.indexOf(e) === t
                }
                ));
                var r = document.getElementsByTagName("body")[0]
                  , o = document.createElement("div")
                  , a = document.createElement("div")
                  , s = {}
                  , c = {}
                  , u = function() {
                    var e = document.createElement("span");
                    return e.style.position = "absolute",
                    e.style.left = "-9999px",
                    e.style.fontSize = "72px",
                    e.style.fontStyle = "normal",
                    e.style.fontWeight = "normal",
                    e.style.letterSpacing = "normal",
                    e.style.lineBreak = "auto",
                    e.style.lineHeight = "normal",
                    e.style.textTransform = "none",
                    e.style.textAlign = "left",
                    e.style.textDecoration = "none",
                    e.style.textShadow = "none",
                    e.style.whiteSpace = "normal",
                    e.style.wordBreak = "normal",
                    e.style.wordSpacing = "normal",
                    e.innerHTML = "mmmmmmmmmmlli",
                    e
                }
                  , l = function(e, t) {
                    var n = u();
                    return n.style.fontFamily = "'" + e + "'," + t,
                    n
                }
                  , d = function(e) {
                    for (var t = !1, i = 0; i < n.length; i++)
                        if (t = e[i].offsetWidth !== s[n[i]] || e[i].offsetHeight !== c[n[i]])
                            return t;
                    return t
                }
                  , f = function() {
                    for (var e = [], t = 0, i = n.length; t < i; t++) {
                        var r = u();
                        r.style.fontFamily = n[t],
                        o.appendChild(r),
                        e.push(r)
                    }
                    return e
                }();
                r.appendChild(o);
                for (var p = 0, h = n.length; p < h; p++)
                    s[n[p]] = f[p].offsetWidth,
                    c[n[p]] = f[p].offsetHeight;
                var w = function() {
                    for (var e = {}, t = 0, r = i.length; t < r; t++) {
                        for (var o = [], s = 0, c = n.length; s < c; s++) {
                            var u = l(i[t], n[s]);
                            a.appendChild(u),
                            o.push(u)
                        }
                        e[i[t]] = o
                    }
                    return e
                }();
                r.appendChild(a);
                for (var g = [], m = 0, v = i.length; m < v; m++)
                    d(w[i[m]]) && g.push(i[m]);
                r.removeChild(a),
                r.removeChild(o),
                e(g)
            },
            pauseBefore: !0
        }, {
            key: "fontsFlash",
            getData: function(e, t) {
                return L() ? I() ? t.fonts.swfPath ? void D((function(t) {
                    e(t)
                }
                ), t) : e("missing options.fonts.swfPath") : e("flash not installed") : e("swf object not loaded")
            },
            pauseBefore: !0
        }, {
            key: "audio",
            getData: function(e, t) {
                var n = t.audio;
                if (n.excludeIOS11 && navigator.userAgent.match(/OS 11.+Version\/11.+Safari/))
                    return e(t.EXCLUDED);
                var i = window.OfflineAudioContext || window.webkitOfflineAudioContext;
                if (null == i)
                    return e(t.NOT_AVAILABLE);
                var r = new i(1,44100,44100)
                  , o = r.createOscillator();
                o.type = "triangle",
                o.frequency.setValueAtTime(1e4, r.currentTime);
                var a = r.createDynamicsCompressor();
                c([["threshold", -50], ["knee", 40], ["ratio", 12], ["reduction", -20], ["attack", 0], ["release", .25]], (function(e) {
                    void 0 !== a[e[0]] && "function" == typeof a[e[0]].setValueAtTime && a[e[0]].setValueAtTime(e[1], r.currentTime)
                }
                )),
                o.connect(a),
                a.connect(r.destination),
                o.start(0),
                r.startRendering();
                var s = setTimeout((function() {
                    return console.warn('Audio fingerprint timed out. Please report bug at https://github.com/Valve/fingerprintjs2 with your user agent: "' + navigator.userAgent + '".'),
                    r.oncomplete = function() {}
                    ,
                    r = null,
                    e("audioTimeout")
                }
                ), n.timeout);
                r.oncomplete = function(t) {
                    var n;
                    try {
                        clearTimeout(s),
                        n = t.renderedBuffer.getChannelData(0).slice(4500, 5e3).reduce((function(e, t) {
                            return e + Math.abs(t)
                        }
                        ), 0).toString(),
                        o.disconnect(),
                        a.disconnect()
                    } catch (t) {
                        return void e(t)
                    }
                    e(n)
                }
            }
        }, {
            key: "enumerateDevices",
            getData: function(e, t) {
                if (!l())
                    return e(t.NOT_AVAILABLE);
                navigator.mediaDevices.enumerateDevices().then((function(t) {
                    e(t.map((function(e) {
                        return "id=" + e.deviceId + ";gid=" + e.groupId + ";" + e.kind + ";" + e.label
                    }
                    )))
                }
                )).catch((function(t) {
                    e(t)
                }
                ))
            }
        }]
          , U = function(e) {
            throw new Error("'new Fingerprint()' is deprecated, see https://github.com/Valve/fingerprintjs2#upgrade-guide-from-182-to-200")
        };
        return U.get = function(e, t) {
            t ? e || (e = {}) : (t = e,
            e = {}),
            function(e, t) {
                if (null == t)
                    return e;
                var n, i;
                for (i in t)
                    null == (n = t[i]) || Object.prototype.hasOwnProperty.call(e, i) || (e[i] = n)
            }(e, s),
            e.components = e.extraComponents.concat(F);
            var n = {
                data: [],
                addPreprocessedComponent: function(t, i) {
                    "function" == typeof e.preprocessor && (i = e.preprocessor(t, i)),
                    n.data.push({
                        key: t,
                        value: i
                    })
                }
            }
              , i = -1
              , r = function(o) {
                if ((i += 1) >= e.components.length)
                    t(n.data);
                else {
                    var a = e.components[i];
                    if (e.excludes[a.key])
                        r(!1);
                    else {
                        if (!o && a.pauseBefore)
                            return i -= 1,
                            void setTimeout((function() {
                                r(!0)
                            }
                            ), 1);
                        try {
                            a.getData((function(e) {
                                n.addPreprocessedComponent(a.key, e),
                                r(!1)
                            }
                            ), e)
                        } catch (e) {
                            n.addPreprocessedComponent(a.key, String(e)),
                            r(!1)
                        }
                    }
                }
            };
            r(!1)
        }
        ,
        U.getPromise = function(e) {
            return new Promise((function(t, n) {
                U.get(e, t)
            }
            ))
        }
        ,
        U.getV18 = function(e, t) {
            return null == t && (t = e,
            e = {}),
            U.get(e, (function(n) {
                for (var i = [], r = 0; r < n.length; r++) {
                    var o = n[r];
                    if (o.value === (e.NOT_AVAILABLE || "not available"))
                        i.push({
                            key: o.key,
                            value: "unknown"
                        });
                    else if ("plugins" === o.key)
                        i.push({
                            key: "plugins",
                            value: u(o.value, (function(e) {
                                var t = u(e[2], (function(e) {
                                    return e.join ? e.join("~") : e
                                }
                                )).join(",");
                                return [e[0], e[1], t].join("::")
                            }
                            ))
                        });
                    else if (-1 !== ["canvas", "webgl"].indexOf(o.key))
                        i.push({
                            key: o.key,
                            value: o.value.join("~")
                        });
                    else if (-1 !== ["sessionStorage", "localStorage", "indexedDb", "addBehavior", "openDatabase"].indexOf(o.key)) {
                        if (!o.value)
                            continue;
                        i.push({
                            key: o.key,
                            value: 1
                        })
                    } else
                        o.value ? i.push(o.value.join ? {
                            key: o.key,
                            value: o.value.join(";")
                        } : o) : i.push({
                            key: o.key,
                            value: o.value
                        })
                }
                var s = a(u(i, (function(e) {
                    return e.value
                }
                )).join("~~~"), 31);
                t(s, i)
            }
            ))
        }
        ,
        U.x64hash128 = a,
        U.VERSION = "2.1.0",
        U
    }
    ))
}
, function(e, t) {
    e.exports = function(e) {
        var t = {};
        function n(i) {
            if (t[i])
                return t[i].exports;
            var r = t[i] = {
                i: i,
                l: !1,
                exports: {}
            };
            return e[i].call(r.exports, r, r.exports, n),
            r.l = !0,
            r.exports
        }
        return n.m = e,
        n.c = t,
        n.d = function(e, t, i) {
            n.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: i
            })
        }
        ,
        n.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }
        ,
        n.t = function(e, t) {
            if (1 & t && (e = n(e)),
            8 & t)
                return e;
            if (4 & t && "object" == typeof e && e && e.__esModule)
                return e;
            var i = Object.create(null);
            if (n.r(i),
            Object.defineProperty(i, "default", {
                enumerable: !0,
                value: e
            }),
            2 & t && "string" != typeof e)
                for (var r in e)
                    n.d(i, r, function(t) {
                        return e[t]
                    }
                    .bind(null, r));
            return i
        }
        ,
        n.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            }
            : function() {
                return e
            }
            ;
            return n.d(t, "a", t),
            t
        }
        ,
        n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        ,
        n.p = "",
        n(n.s = 83)
    }([function(e, t) {
        var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = n)
    }
    , function(e, t, n) {
        e.exports = !n(6)((function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7
                }
            }).a
        }
        ))
    }
    , function(e, t, n) {
        var i = n(20)("wks")
          , r = n(17)
          , o = n(0).Symbol
          , a = "function" == typeof o;
        (e.exports = function(e) {
            return i[e] || (i[e] = a && o[e] || (a ? o : r)("Symbol." + e))
        }
        ).store = i
    }
    , function(e, t, n) {
        var i = n(4)
          , r = n(41)
          , o = n(31)
          , a = Object.defineProperty;
        t.f = n(1) ? Object.defineProperty : function(e, t, n) {
            if (i(e),
            t = o(t, !0),
            i(n),
            r)
                try {
                    return a(e, t, n)
                } catch (e) {}
            if ("get"in n || "set"in n)
                throw TypeError("Accessors not supported!");
            return "value"in n && (e[t] = n.value),
            e
        }
    }
    , function(e, t, n) {
        var i = n(15);
        e.exports = function(e) {
            if (!i(e))
                throw TypeError(e + " is not an object!");
            return e
        }
    }
    , function(e, t, n) {
        var i = n(3)
          , r = n(16);
        e.exports = n(1) ? function(e, t, n) {
            return i.f(e, t, r(1, n))
        }
        : function(e, t, n) {
            return e[t] = n,
            e
        }
    }
    , function(e, t) {
        e.exports = function(e) {
            try {
                return !!e()
            } catch (e) {
                return !0
            }
        }
    }
    , function(e, t, n) {
        var i;
        !function(r, o) {
            "use strict";
            var a = "model"
              , s = "name"
              , c = "type"
              , u = "vendor"
              , l = "version"
              , d = "mobile"
              , f = "tablet"
              , p = {
                extend: function(e, t) {
                    var n = {};
                    for (var i in e)
                        t[i] && t[i].length % 2 == 0 ? n[i] = t[i].concat(e[i]) : n[i] = e[i];
                    return n
                },
                has: function(e, t) {
                    return "string" == typeof e && -1 !== t.toLowerCase().indexOf(e.toLowerCase())
                },
                lowerize: function(e) {
                    return e.toLowerCase()
                },
                major: function(e) {
                    return "string" == typeof e ? e.replace(/[^\d\.]/g, "").split(".")[0] : void 0
                },
                trim: function(e) {
                    return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
                }
            }
              , h = {
                rgx: function(e, t) {
                    for (var n, i, r, o, a, s, c = 0; c < t.length && !a; ) {
                        var u = t[c]
                          , l = t[c + 1];
                        for (n = i = 0; n < u.length && !a; )
                            if (a = u[n++].exec(e))
                                for (r = 0; r < l.length; r++)
                                    s = a[++i],
                                    "object" == typeof (o = l[r]) && o.length > 0 ? 2 == o.length ? "function" == typeof o[1] ? this[o[0]] = o[1].call(this, s) : this[o[0]] = o[1] : 3 == o.length ? "function" != typeof o[1] || o[1].exec && o[1].test ? this[o[0]] = s ? s.replace(o[1], o[2]) : void 0 : this[o[0]] = s ? o[1].call(this, s, o[2]) : void 0 : 4 == o.length && (this[o[0]] = s ? o[3].call(this, s.replace(o[1], o[2])) : void 0) : this[o] = s || void 0;
                        c += 2
                    }
                },
                str: function(e, t) {
                    for (var n in t)
                        if ("object" == typeof t[n] && t[n].length > 0) {
                            for (var i = 0; i < t[n].length; i++)
                                if (p.has(t[n][i], e))
                                    return "?" === n ? void 0 : n
                        } else if (p.has(t[n], e))
                            return "?" === n ? void 0 : n;
                    return e
                }
            }
              , w = {
                browser: {
                    oldsafari: {
                        version: {
                            "1.0": "/8",
                            1.2: "/1",
                            1.3: "/3",
                            "2.0": "/412",
                            "2.0.2": "/416",
                            "2.0.3": "/417",
                            "2.0.4": "/419",
                            "?": "/"
                        }
                    }
                },
                device: {
                    amazon: {
                        model: {
                            "Fire Phone": ["SD", "KF"]
                        }
                    },
                    sprint: {
                        model: {
                            "Evo Shift 4G": "7373KT"
                        },
                        vendor: {
                            HTC: "APA",
                            Sprint: "Sprint"
                        }
                    }
                },
                os: {
                    windows: {
                        version: {
                            ME: "4.90",
                            "NT 3.11": "NT3.51",
                            "NT 4.0": "NT4.0",
                            2e3: "NT 5.0",
                            XP: ["NT 5.1", "NT 5.2"],
                            Vista: "NT 6.0",
                            7: "NT 6.1",
                            8: "NT 6.2",
                            8.1: "NT 6.3",
                            10: ["NT 6.4", "NT 10.0"],
                            RT: "ARM"
                        }
                    }
                }
            }
              , g = {
                browser: [[/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i], [s, l], [/(opios)[\/\s]+([\w\.]+)/i], [[s, "Opera Mini"], l], [/\s(opr)\/([\w\.]+)/i], [[s, "Opera"], l], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]*)/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i], [s, l], [/(konqueror)\/([\w\.]+)/i], [[s, "Konqueror"], l], [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i], [[s, "IE"], l], [/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i], [[s, "Edge"], l], [/(yabrowser)\/([\w\.]+)/i], [[s, "Yandex"], l], [/(puffin)\/([\w\.]+)/i], [[s, "Puffin"], l], [/(focus)\/([\w\.]+)/i], [[s, "Firefox Focus"], l], [/(opt)\/([\w\.]+)/i], [[s, "Opera Touch"], l], [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i], [[s, "UCBrowser"], l], [/(comodo_dragon)\/([\w\.]+)/i], [[s, /_/g, " "], l], [/(windowswechat qbcore)\/([\w\.]+)/i], [[s, "WeChat(Win) Desktop"], l], [/(micromessenger)\/([\w\.]+)/i], [[s, "WeChat"], l], [/(brave)\/([\w\.]+)/i], [[s, "Brave"], l], [/(qqbrowserlite)\/([\w\.]+)/i], [s, l], [/(QQ)\/([\d\.]+)/i], [s, l], [/m?(qqbrowser)[\/\s]?([\w\.]+)/i], [s, l], [/(BIDUBrowser)[\/\s]?([\w\.]+)/i], [s, l], [/(2345Explorer)[\/\s]?([\w\.]+)/i], [s, l], [/(MetaSr)[\/\s]?([\w\.]+)/i], [s], [/(LBBROWSER)/i], [s], [/xiaomi\/miuibrowser\/([\w\.]+)/i], [l, [s, "MIUI Browser"]], [/;fbav\/([\w\.]+);/i], [l, [s, "Facebook"]], [/safari\s(line)\/([\w\.]+)/i, /android.+(line)\/([\w\.]+)\/iab/i], [s, l], [/headlesschrome(?:\/([\w\.]+)|\s)/i], [l, [s, "Chrome Headless"]], [/\swv\).+(chrome)\/([\w\.]+)/i], [[s, /(.+)/, "$1 WebView"], l], [/((?:oculus|samsung)browser)\/([\w\.]+)/i], [[s, /(.+(?:g|us))(.+)/, "$1 $2"], l], [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i], [l, [s, "Android Browser"]], [/(sailfishbrowser)\/([\w\.]+)/i], [[s, "Sailfish Browser"], l], [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i], [s, l], [/(dolfin)\/([\w\.]+)/i], [[s, "Dolphin"], l], [/((?:android.+)crmo|crios)\/([\w\.]+)/i], [[s, "Chrome"], l], [/(coast)\/([\w\.]+)/i], [[s, "Opera Coast"], l], [/fxios\/([\w\.-]+)/i], [l, [s, "Firefox"]], [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i], [l, [s, "Mobile Safari"]], [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i], [l, s], [/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i], [[s, "GSA"], l], [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i], [s, [l, h.str, w.browser.oldsafari.version]], [/(webkit|khtml)\/([\w\.]+)/i], [s, l], [/(navigator|netscape)\/([\w\.-]+)/i], [[s, "Netscape"], l], [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]*)/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i], [s, l]],
                cpu: [[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i], [["architecture", "amd64"]], [/(ia32(?=;))/i], [["architecture", p.lowerize]], [/((?:i[346]|x)86)[;\)]/i], [["architecture", "ia32"]], [/windows\s(ce|mobile);\sppc;/i], [["architecture", "arm"]], [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i], [["architecture", /ower/, "", p.lowerize]], [/(sun4\w)[;\)]/i], [["architecture", "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i], [["architecture", p.lowerize]]],
                device: [[/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i], [a, u, [c, f]], [/applecoremedia\/[\w\.]+ \((ipad)/], [a, [u, "Apple"], [c, f]], [/(apple\s{0,1}tv)/i], [[a, "Apple TV"], [u, "Apple"]], [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i], [u, a, [c, f]], [/(kf[A-z]+)\sbuild\/.+silk\//i], [a, [u, "Amazon"], [c, f]], [/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i], [[a, h.str, w.device.amazon.model], [u, "Amazon"], [c, d]], [/android.+aft([bms])\sbuild/i], [a, [u, "Amazon"], [c, "smarttv"]], [/\((ip[honed|\s\w*]+);.+(apple)/i], [a, u, [c, d]], [/\((ip[honed|\s\w*]+);/i], [a, [u, "Apple"], [c, d]], [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i], [u, a, [c, d]], [/\(bb10;\s(\w+)/i], [a, [u, "BlackBerry"], [c, d]], [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i], [a, [u, "Asus"], [c, f]], [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i], [[u, "Sony"], [a, "Xperia Tablet"], [c, f]], [/android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [a, [u, "Sony"], [c, d]], [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i], [u, a, [c, "console"]], [/android.+;\s(shield)\sbuild/i], [a, [u, "Nvidia"], [c, "console"]], [/(playstation\s[34portablevi]+)/i], [a, [u, "Sony"], [c, "console"]], [/(sprint\s(\w+))/i], [[u, h.str, w.device.sprint.vendor], [a, h.str, w.device.sprint.model], [c, d]], [/(htc)[;_\s-]+([\w\s]+(?=\)|\sbuild)|\w+)/i, /(zte)-(\w*)/i, /(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i], [u, [a, /_/g, " "], [c, d]], [/(nexus\s9)/i], [a, [u, "HTC"], [c, f]], [/d\/huawei([\w\s-]+)[;\)]/i, /(nexus\s6p)/i], [a, [u, "Huawei"], [c, d]], [/(microsoft);\s(lumia[\s\w]+)/i], [u, a, [c, d]], [/[\s\(;](xbox(?:\sone)?)[\s\);]/i], [a, [u, "Microsoft"], [c, "console"]], [/(kin\.[onetw]{3})/i], [[a, /\./g, " "], [u, "Microsoft"], [c, d]], [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w*)/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i], [a, [u, "Motorola"], [c, d]], [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i], [a, [u, "Motorola"], [c, f]], [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i], [[u, p.trim], [a, p.trim], [c, "smarttv"]], [/hbbtv.+maple;(\d+)/i], [[a, /^/, "SmartTV"], [u, "Samsung"], [c, "smarttv"]], [/\(dtv[\);].+(aquos)/i], [a, [u, "Sharp"], [c, "smarttv"]], [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i], [[u, "Samsung"], a, [c, f]], [/smart-tv.+(samsung)/i], [u, [c, "smarttv"], a], [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i, /sec-((sgh\w+))/i], [[u, "Samsung"], a, [c, d]], [/sie-(\w*)/i], [a, [u, "Siemens"], [c, d]], [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]*)/i], [[u, "Nokia"], a, [c, d]], [/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i], [a, [u, "Acer"], [c, f]], [/android.+([vl]k\-?\d{3})\s+build/i], [a, [u, "LG"], [c, f]], [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i], [[u, "LG"], a, [c, f]], [/(lg) netcast\.tv/i], [u, a, [c, "smarttv"]], [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w*)/i, /android.+lg(\-?[\d\w]+)\s+build/i], [a, [u, "LG"], [c, d]], [/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i], [u, a, [c, f]], [/android.+(ideatab[a-z0-9\-\s]+)/i], [a, [u, "Lenovo"], [c, f]], [/(lenovo)[_\s-]?([\w-]+)/i], [u, a, [c, d]], [/linux;.+((jolla));/i], [u, a, [c, d]], [/((pebble))app\/[\d\.]+\s/i], [u, a, [c, "wearable"]], [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i], [u, a, [c, d]], [/crkey/i], [[a, "Chromecast"], [u, "Google"]], [/android.+;\s(glass)\s\d/i], [a, [u, "Google"], [c, "wearable"]], [/android.+;\s(pixel c)[\s)]/i], [a, [u, "Google"], [c, f]], [/android.+;\s(pixel( [23])?( xl)?)[\s)]/i], [a, [u, "Google"], [c, d]], [/android.+;\s(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:a\d|one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i, /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i], [[a, /_/g, " "], [u, "Xiaomi"], [c, d]], [/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i], [[a, /_/g, " "], [u, "Xiaomi"], [c, f]], [/android.+;\s(m[1-5]\snote)\sbuild/i], [a, [u, "Meizu"], [c, d]], [/(mz)-([\w-]{2,})/i], [[u, "Meizu"], a, [c, d]], [/android.+a000(1)\s+build/i, /android.+oneplus\s(a\d{4})\s+build/i], [a, [u, "OnePlus"], [c, d]], [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i], [a, [u, "RCA"], [c, f]], [/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i], [a, [u, "Dell"], [c, f]], [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i], [a, [u, "Verizon"], [c, f]], [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i], [[u, "Barnes & Noble"], a, [c, f]], [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i], [a, [u, "NuVision"], [c, f]], [/android.+;\s(k88)\sbuild/i], [a, [u, "ZTE"], [c, f]], [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i], [a, [u, "Swiss"], [c, d]], [/android.+[;\/]\s*(zur\d{3})\s+build/i], [a, [u, "Swiss"], [c, f]], [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i], [a, [u, "Zeki"], [c, f]], [/(android).+[;\/]\s+([YR]\d{2})\s+build/i, /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i], [[u, "Dragon Touch"], a, [c, f]], [/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i], [a, [u, "Insignia"], [c, f]], [/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i], [a, [u, "NextBook"], [c, f]], [/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i], [[u, "Voice"], a, [c, d]], [/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i], [[u, "LvTel"], a, [c, d]], [/android.+;\s(PH-1)\s/i], [a, [u, "Essential"], [c, d]], [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i], [a, [u, "Envizen"], [c, f]], [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i], [u, a, [c, f]], [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i], [a, [u, "MachSpeed"], [c, f]], [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i], [u, a, [c, f]], [/android.+[;\/]\s*TU_(1491)\s+build/i], [a, [u, "Rotor"], [c, f]], [/android.+(KS(.+))\s+build/i], [a, [u, "Amazon"], [c, f]], [/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i], [u, a, [c, f]], [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i], [[c, p.lowerize], u, a], [/[\s\/\(](smart-?tv)[;\)]/i], [[c, "smarttv"]], [/(android[\w\.\s\-]{0,9});.+build/i], [a, [u, "Generic"]]],
                engine: [[/windows.+\sedge\/([\w\.]+)/i], [l, [s, "EdgeHTML"]], [/webkit\/537\.36.+chrome\/(?!27)/i], [[s, "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i], [s, l], [/rv\:([\w\.]{1,9}).+(gecko)/i], [l, s]],
                os: [[/microsoft\s(windows)\s(vista|xp)/i], [s, l], [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i], [s, [l, h.str, w.os.windows.version]], [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i], [[s, "Windows"], [l, h.str, w.os.windows.version]], [/\((bb)(10);/i], [[s, "BlackBerry"], l], [/(blackberry)\w*\/?([\w\.]*)/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i], [s, l], [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i], [[s, "Symbian"], l], [/\((series40);/i], [s], [/mozilla.+\(mobile;.+gecko.+firefox/i], [[s, "Firefox OS"], l], [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w*)/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i, /(hurd|linux)\s?([\w\.]*)/i, /(gnu)\s?([\w\.]*)/i], [s, l], [/(cros)\s[\w]+\s([\w\.]+\w)/i], [[s, "Chromium OS"], l], [/(sunos)\s?([\w\.\d]*)/i], [[s, "Solaris"], l], [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i], [s, l], [/(haiku)\s(\w+)/i], [s, l], [/cfnetwork\/.+darwin/i, /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i], [[l, /_/g, "."], [s, "iOS"]], [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)/i], [[s, "Mac OS"], [l, /_/g, "."]], [/((?:open)?solaris)[\/\s-]?([\w\.]*)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i, /(unix)\s?([\w\.]*)/i], [s, l]]
            }
              , m = function(e, t) {
                if ("object" == typeof e && (t = e,
                e = void 0),
                !(this instanceof m))
                    return new m(e,t).getResult();
                var n = e || (r && r.navigator && r.navigator.userAgent ? r.navigator.userAgent : "")
                  , i = t ? p.extend(g, t) : g;
                return this.getBrowser = function() {
                    var e = {
                        name: void 0,
                        version: void 0
                    };
                    return h.rgx.call(e, n, i.browser),
                    e.major = p.major(e.version),
                    e
                }
                ,
                this.getCPU = function() {
                    var e = {
                        architecture: void 0
                    };
                    return h.rgx.call(e, n, i.cpu),
                    e
                }
                ,
                this.getDevice = function() {
                    var e = {
                        vendor: void 0,
                        model: void 0,
                        type: void 0
                    };
                    return h.rgx.call(e, n, i.device),
                    e
                }
                ,
                this.getEngine = function() {
                    var e = {
                        name: void 0,
                        version: void 0
                    };
                    return h.rgx.call(e, n, i.engine),
                    e
                }
                ,
                this.getOS = function() {
                    var e = {
                        name: void 0,
                        version: void 0
                    };
                    return h.rgx.call(e, n, i.os),
                    e
                }
                ,
                this.getResult = function() {
                    return {
                        ua: this.getUA(),
                        browser: this.getBrowser(),
                        engine: this.getEngine(),
                        os: this.getOS(),
                        device: this.getDevice(),
                        cpu: this.getCPU()
                    }
                }
                ,
                this.getUA = function() {
                    return n
                }
                ,
                this.setUA = function(e) {
                    return n = e,
                    this
                }
                ,
                this
            };
            m.VERSION = "0.7.20",
            m.BROWSER = {
                NAME: s,
                MAJOR: "major",
                VERSION: l
            },
            m.CPU = {
                ARCHITECTURE: "architecture"
            },
            m.DEVICE = {
                MODEL: a,
                VENDOR: u,
                TYPE: c,
                CONSOLE: "console",
                MOBILE: d,
                SMARTTV: "smarttv",
                TABLET: f,
                WEARABLE: "wearable",
                EMBEDDED: "embedded"
            },
            m.ENGINE = {
                NAME: s,
                VERSION: l
            },
            m.OS = {
                NAME: s,
                VERSION: l
            },
            void 0 !== t ? (void 0 !== e && e.exports && (t = e.exports = m),
            t.UAParser = m) : void 0 === (i = function() {
                return m
            }
            .call(t, n, t, e)) || (e.exports = i);
            var v = r && (r.jQuery || r.Zepto);
            if (void 0 !== v && !v.ua) {
                var b = new m;
                v.ua = b.getResult(),
                v.ua.get = function() {
                    return b.getUA()
                }
                ,
                v.ua.set = function(e) {
                    b.setUA(e);
                    var t = b.getResult();
                    for (var n in t)
                        v.ua[n] = t[n]
                }
            }
        }("object" == typeof window ? window : this)
    }
    , function(e, t, n) {
        var i = n(0)
          , r = n(14)
          , o = n(5)
          , a = n(9)
          , s = n(55)
          , c = function(e, t, n) {
            var u, l, d, f, p = e & c.F, h = e & c.G, w = e & c.S, g = e & c.P, m = e & c.B, v = h ? i : w ? i[t] || (i[t] = {}) : (i[t] || {}).prototype, b = h ? r : r[t] || (r[t] = {}), y = b.prototype || (b.prototype = {});
            for (u in h && (n = t),
            n)
                d = ((l = !p && v && void 0 !== v[u]) ? v : n)[u],
                f = m && l ? s(d, i) : g && "function" == typeof d ? s(Function.call, d) : d,
                v && a(v, u, d, e & c.U),
                b[u] != d && o(b, u, f),
                g && y[u] != d && (y[u] = d)
        };
        i.core = r,
        c.F = 1,
        c.G = 2,
        c.S = 4,
        c.P = 8,
        c.B = 16,
        c.W = 32,
        c.U = 64,
        c.R = 128,
        e.exports = c
    }
    , function(e, t, n) {
        var i = n(0)
          , r = n(5)
          , o = n(10)
          , a = n(17)("src")
          , s = n(54)
          , c = ("" + s).split("toString");
        n(14).inspectSource = function(e) {
            return s.call(e)
        }
        ,
        (e.exports = function(e, t, n, s) {
            var u = "function" == typeof n;
            u && (o(n, "name") || r(n, "name", t)),
            e[t] !== n && (u && (o(n, a) || r(n, a, e[t] ? "" + e[t] : c.join(String(t)))),
            e === i ? e[t] = n : s ? e[t] ? e[t] = n : r(e, t, n) : (delete e[t],
            r(e, t, n)))
        }
        )(Function.prototype, "toString", (function() {
            return "function" == typeof this && this[a] || s.call(this)
        }
        ))
    }
    , function(e, t) {
        var n = {}.hasOwnProperty;
        e.exports = function(e, t) {
            return n.call(e, t)
        }
    }
    , function(e, t, n) {
        var i = n(44)
          , r = n(22);
        e.exports = function(e) {
            return i(r(e))
        }
    }
    , function(e, t, n) {
        var i = n(43)
          , r = n(35);
        e.exports = Object.keys || function(e) {
            return i(e, r)
        }
    }
    , function(e, t, n) {
        "use strict";
        var i = n(46)
          , r = {};
        r[n(2)("toStringTag")] = "z",
        r + "" != "[object z]" && n(9)(Object.prototype, "toString", (function() {
            return "[object " + i(this) + "]"
        }
        ), !0)
    }
    , function(e, t) {
        var n = e.exports = {
            version: "2.6.10"
        };
        "number" == typeof __e && (__e = n)
    }
    , function(e, t) {
        e.exports = function(e) {
            return "object" == typeof e ? null !== e : "function" == typeof e
        }
    }
    , function(e, t) {
        e.exports = function(e, t) {
            return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t
            }
        }
    }
    , function(e, t) {
        var n = 0
          , i = Math.random();
        e.exports = function(e) {
            return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + i).toString(36))
        }
    }
    , function(e, t, n) {
        var i = n(22);
        e.exports = function(e) {
            return Object(i(e))
        }
    }
    , function(e, t, n) {
        "use strict";
        var i = n(60)
          , r = n(61)
          , o = n(36)
          , a = n(11);
        e.exports = n(62)(Array, "Array", (function(e, t) {
            this._t = a(e),
            this._i = 0,
            this._k = t
        }
        ), (function() {
            var e = this._t
              , t = this._k
              , n = this._i++;
            return !e || n >= e.length ? (this._t = void 0,
            r(1)) : r(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]])
        }
        ), "values"),
        o.Arguments = o.Array,
        i("keys"),
        i("values"),
        i("entries")
    }
    , function(e, t, n) {
        var i = n(14)
          , r = n(0)
          , o = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
        (e.exports = function(e, t) {
            return o[e] || (o[e] = void 0 !== t ? t : {})
        }
        )("versions", []).push({
            version: i.version,
            mode: n(21) ? "pure" : "global",
            copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
        })
    }
    , function(e, t) {
        e.exports = !1
    }
    , function(e, t) {
        e.exports = function(e) {
            if (null == e)
                throw TypeError("Can't call method on  " + e);
            return e
        }
    }
    , function(e, t) {
        var n = Math.ceil
          , i = Math.floor;
        e.exports = function(e) {
            return isNaN(e = +e) ? 0 : (e > 0 ? i : n)(e)
        }
    }
    , function(e, t) {
        t.f = Object.getOwnPropertySymbols
    }
    , function(e, t) {
        t.f = {}.propertyIsEnumerable
    }
    , function(e, t, n) {
        for (var i = n(19), r = n(12), o = n(9), a = n(0), s = n(5), c = n(36), u = n(2), l = u("iterator"), d = u("toStringTag"), f = c.Array, p = {
            CSSRuleList: !0,
            CSSStyleDeclaration: !1,
            CSSValueList: !1,
            ClientRectList: !1,
            DOMRectList: !1,
            DOMStringList: !1,
            DOMTokenList: !0,
            DataTransferItemList: !1,
            FileList: !1,
            HTMLAllCollection: !1,
            HTMLCollection: !1,
            HTMLFormElement: !1,
            HTMLSelectElement: !1,
            MediaList: !0,
            MimeTypeArray: !1,
            NamedNodeMap: !1,
            NodeList: !0,
            PaintRequestList: !1,
            Plugin: !1,
            PluginArray: !1,
            SVGLengthList: !1,
            SVGNumberList: !1,
            SVGPathSegList: !1,
            SVGPointList: !1,
            SVGStringList: !1,
            SVGTransformList: !1,
            SourceBufferList: !1,
            StyleSheetList: !0,
            TextTrackCueList: !1,
            TextTrackList: !1,
            TouchList: !1
        }, h = r(p), w = 0; w < h.length; w++) {
            var g, m = h[w], v = p[m], b = a[m], y = b && b.prototype;
            if (y && (y[l] || s(y, l, f),
            y[d] || s(y, d, m),
            c[m] = f,
            v))
                for (g in i)
                    y[g] || o(y, g, i[g], !0)
        }
    }
    , function(e, t, n) {
        var i = n(18)
          , r = n(12);
        n(67)("keys", (function() {
            return function(e) {
                return r(i(e))
            }
        }
        ))
    }
    , function(e, t, n) {
        var i = n(3).f
          , r = Function.prototype
          , o = /^\s*function ([^ (]*)/;
        "name"in r || n(1) && i(r, "name", {
            configurable: !0,
            get: function() {
                try {
                    return ("" + this).match(o)[1]
                } catch (e) {
                    return ""
                }
            }
        })
    }
    , function(e, t, n) {
        var i, r, o;
        o = function() {
            function e() {
                for (var e = 0, t = {}; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var i in n)
                        t[i] = n[i]
                }
                return t
            }
            function t(e) {
                return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
            }
            return function n(i) {
                function r() {}
                function o(t, n, o) {
                    if ("undefined" != typeof document) {
                        "number" == typeof (o = e({
                            path: "/"
                        }, r.defaults, o)).expires && (o.expires = new Date(1 * new Date + 864e5 * o.expires)),
                        o.expires = o.expires ? o.expires.toUTCString() : "";
                        try {
                            var a = JSON.stringify(n);
                            /^[\{\[]/.test(a) && (n = a)
                        } catch (e) {}
                        n = i.write ? i.write(n, t) : encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent),
                        t = encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
                        var s = "";
                        for (var c in o)
                            o[c] && (s += "; " + c,
                            !0 !== o[c] && (s += "=" + o[c].split(";")[0]));
                        return document.cookie = t + "=" + n + s
                    }
                }
                function a(e, n) {
                    if ("undefined" != typeof document) {
                        for (var r = {}, o = document.cookie ? document.cookie.split("; ") : [], a = 0; a < o.length; a++) {
                            var s = o[a].split("=")
                              , c = s.slice(1).join("=");
                            n || '"' !== c.charAt(0) || (c = c.slice(1, -1));
                            try {
                                var u = t(s[0]);
                                if (c = (i.read || i)(c, u) || t(c),
                                n)
                                    try {
                                        c = JSON.parse(c)
                                    } catch (e) {}
                                if (r[u] = c,
                                e === u)
                                    break
                            } catch (e) {}
                        }
                        return e ? r[e] : r
                    }
                }
                return r.set = o,
                r.get = function(e) {
                    return a(e, !1)
                }
                ,
                r.getJSON = function(e) {
                    return a(e, !0)
                }
                ,
                r.remove = function(t, n) {
                    o(t, "", e(n, {
                        expires: -1
                    }))
                }
                ,
                r.defaults = {},
                r.withConverter = n,
                r
            }((function() {}
            ))
        }
        ,
        void 0 === (r = "function" == typeof (i = o) ? i.call(t, n, t, e) : i) || (e.exports = r),
        e.exports = o()
    }
    , function(e, t, n) {
        var i = n(8);
        i(i.S + i.F, "Object", {
            assign: n(57)
        })
    }
    , function(e, t, n) {
        var i = n(15);
        e.exports = function(e, t) {
            if (!i(e))
                return e;
            var n, r;
            if (t && "function" == typeof (n = e.toString) && !i(r = n.call(e)))
                return r;
            if ("function" == typeof (n = e.valueOf) && !i(r = n.call(e)))
                return r;
            if (!t && "function" == typeof (n = e.toString) && !i(r = n.call(e)))
                return r;
            throw TypeError("Can't convert object to primitive value")
        }
    }
    , function(e, t) {
        var n = {}.toString;
        e.exports = function(e) {
            return n.call(e).slice(8, -1)
        }
    }
    , function(e, t, n) {
        var i = n(23)
          , r = Math.min;
        e.exports = function(e) {
            return e > 0 ? r(i(e), 9007199254740991) : 0
        }
    }
    , function(e, t, n) {
        var i = n(20)("keys")
          , r = n(17);
        e.exports = function(e) {
            return i[e] || (i[e] = r(e))
        }
    }
    , function(e, t) {
        e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    }
    , function(e, t) {
        e.exports = {}
    }
    , function(e, t, n) {
        var i = n(3).f
          , r = n(10)
          , o = n(2)("toStringTag");
        e.exports = function(e, t, n) {
            e && !r(e = n ? e : e.prototype, o) && i(e, o, {
                configurable: !0,
                value: t
            })
        }
    }
    , function(e, t, n) {
        "use strict";
        var i = n(4);
        e.exports = function() {
            var e = i(this)
              , t = "";
            return e.global && (t += "g"),
            e.ignoreCase && (t += "i"),
            e.multiline && (t += "m"),
            e.unicode && (t += "u"),
            e.sticky && (t += "y"),
            t
        }
    }
    , function(e, t, n) {
        "use strict";
        n(71);
        var i = n(4)
          , r = n(38)
          , o = n(1)
          , a = /./.toString
          , s = function(e) {
            n(9)(RegExp.prototype, "toString", e, !0)
        };
        n(6)((function() {
            return "/a/b" != a.call({
                source: "a",
                flags: "b"
            })
        }
        )) ? s((function() {
            var e = i(this);
            return "/".concat(e.source, "/", "flags"in e ? e.flags : !o && e instanceof RegExp ? r.call(e) : void 0)
        }
        )) : "toString" != a.name && s((function() {
            return a.call(this)
        }
        ))
    }
    , function(e, t, n) {
        var i = n(43)
          , r = n(35).concat("length", "prototype");
        t.f = Object.getOwnPropertyNames || function(e) {
            return i(e, r)
        }
    }
    , function(e, t, n) {
        e.exports = !n(1) && !n(6)((function() {
            return 7 != Object.defineProperty(n(42)("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        }
        ))
    }
    , function(e, t, n) {
        var i = n(15)
          , r = n(0).document
          , o = i(r) && i(r.createElement);
        e.exports = function(e) {
            return o ? r.createElement(e) : {}
        }
    }
    , function(e, t, n) {
        var i = n(10)
          , r = n(11)
          , o = n(58)(!1)
          , a = n(34)("IE_PROTO");
        e.exports = function(e, t) {
            var n, s = r(e), c = 0, u = [];
            for (n in s)
                n != a && i(s, n) && u.push(n);
            for (; t.length > c; )
                i(s, n = t[c++]) && (~o(u, n) || u.push(n));
            return u
        }
    }
    , function(e, t, n) {
        var i = n(32);
        e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
            return "String" == i(e) ? e.split("") : Object(e)
        }
    }
    , function(e, t, n) {
        var i = n(4)
          , r = n(64)
          , o = n(35)
          , a = n(34)("IE_PROTO")
          , s = function() {}
          , c = function() {
            var e, t = n(42)("iframe"), i = o.length;
            for (t.style.display = "none",
            n(65).appendChild(t),
            t.src = "javascript:",
            (e = t.contentWindow.document).open(),
            e.write("<script>document.F=Object<\/script>"),
            e.close(),
            c = e.F; i--; )
                delete c.prototype[o[i]];
            return c()
        };
        e.exports = Object.create || function(e, t) {
            var n;
            return null !== e ? (s.prototype = i(e),
            n = new s,
            s.prototype = null,
            n[a] = e) : n = c(),
            void 0 === t ? n : r(n, t)
        }
    }
    , function(e, t, n) {
        var i = n(32)
          , r = n(2)("toStringTag")
          , o = "Arguments" == i(function() {
            return arguments
        }());
        e.exports = function(e) {
            var t, n, a;
            return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function(e, t) {
                try {
                    return e[t]
                } catch (e) {}
            }(t = Object(e), r)) ? n : o ? i(t) : "Object" == (a = i(t)) && "function" == typeof t.callee ? "Arguments" : a
        }
    }
    , function(e, t, n) {
        "use strict";
        var i = n(4)
          , r = n(33)
          , o = n(48)
          , a = n(49);
        n(50)("match", 1, (function(e, t, n, s) {
            return [function(n) {
                var i = e(this)
                  , r = null == n ? void 0 : n[t];
                return void 0 !== r ? r.call(n, i) : new RegExp(n)[t](String(i))
            }
            , function(e) {
                var t = s(n, e, this);
                if (t.done)
                    return t.value;
                var c = i(e)
                  , u = String(this);
                if (!c.global)
                    return a(c, u);
                var l = c.unicode;
                c.lastIndex = 0;
                for (var d, f = [], p = 0; null !== (d = a(c, u)); ) {
                    var h = String(d[0]);
                    f[p] = h,
                    "" === h && (c.lastIndex = o(u, r(c.lastIndex), l)),
                    p++
                }
                return 0 === p ? null : f
            }
            ]
        }
        ))
    }
    , function(e, t, n) {
        "use strict";
        var i = n(69)(!0);
        e.exports = function(e, t, n) {
            return t + (n ? i(e, t).length : 1)
        }
    }
    , function(e, t, n) {
        "use strict";
        var i = n(46)
          , r = RegExp.prototype.exec;
        e.exports = function(e, t) {
            var n = e.exec;
            if ("function" == typeof n) {
                var o = n.call(e, t);
                if ("object" != typeof o)
                    throw new TypeError("RegExp exec method returned something other than an Object or null");
                return o
            }
            if ("RegExp" !== i(e))
                throw new TypeError("RegExp#exec called on incompatible receiver");
            return r.call(e, t)
        }
    }
    , function(e, t, n) {
        "use strict";
        n(70);
        var i = n(9)
          , r = n(5)
          , o = n(6)
          , a = n(22)
          , s = n(2)
          , c = n(51)
          , u = s("species")
          , l = !o((function() {
            var e = /./;
            return e.exec = function() {
                var e = [];
                return e.groups = {
                    a: "7"
                },
                e
            }
            ,
            "7" !== "".replace(e, "$<a>")
        }
        ))
          , d = function() {
            var e = /(?:)/
              , t = e.exec;
            e.exec = function() {
                return t.apply(this, arguments)
            }
            ;
            var n = "ab".split(e);
            return 2 === n.length && "a" === n[0] && "b" === n[1]
        }();
        e.exports = function(e, t, n) {
            var f = s(e)
              , p = !o((function() {
                var t = {};
                return t[f] = function() {
                    return 7
                }
                ,
                7 != ""[e](t)
            }
            ))
              , h = p ? !o((function() {
                var t = !1
                  , n = /a/;
                return n.exec = function() {
                    return t = !0,
                    null
                }
                ,
                "split" === e && (n.constructor = {},
                n.constructor[u] = function() {
                    return n
                }
                ),
                n[f](""),
                !t
            }
            )) : void 0;
            if (!p || !h || "replace" === e && !l || "split" === e && !d) {
                var w = /./[f]
                  , g = n(a, f, ""[e], (function(e, t, n, i, r) {
                    return t.exec === c ? p && !r ? {
                        done: !0,
                        value: w.call(t, n, i)
                    } : {
                        done: !0,
                        value: e.call(n, t, i)
                    } : {
                        done: !1
                    }
                }
                ))
                  , m = g[0]
                  , v = g[1];
                i(String.prototype, e, m),
                r(RegExp.prototype, f, 2 == t ? function(e, t) {
                    return v.call(e, this, t)
                }
                : function(e) {
                    return v.call(e, this)
                }
                )
            }
        }
    }
    , function(e, t, n) {
        "use strict";
        var i, r, o = n(38), a = RegExp.prototype.exec, s = String.prototype.replace, c = a, u = (i = /a/,
        r = /b*/g,
        a.call(i, "a"),
        a.call(r, "a"),
        0 !== i.lastIndex || 0 !== r.lastIndex), l = void 0 !== /()??/.exec("")[1];
        (u || l) && (c = function(e) {
            var t, n, i, r, c = this;
            return l && (n = new RegExp("^" + c.source + "$(?!\\s)",o.call(c))),
            u && (t = c.lastIndex),
            i = a.call(c, e),
            u && i && (c.lastIndex = c.global ? i.index + i[0].length : t),
            l && i && i.length > 1 && s.call(i[0], n, (function() {
                for (r = 1; r < arguments.length - 2; r++)
                    void 0 === arguments[r] && (i[r] = void 0)
            }
            )),
            i
        }
        ),
        e.exports = c
    }
    , function(e, t, n) {
        var i = n(25)
          , r = n(16)
          , o = n(11)
          , a = n(31)
          , s = n(10)
          , c = n(41)
          , u = Object.getOwnPropertyDescriptor;
        t.f = n(1) ? u : function(e, t) {
            if (e = o(e),
            t = a(t, !0),
            c)
                try {
                    return u(e, t)
                } catch (e) {}
            if (s(e, t))
                return r(!i.f.call(e, t), e[t])
        }
    }
    , function(e, t, n) {
        t.f = n(2)
    }
    , function(e, t, n) {
        e.exports = n(20)("native-function-to-string", Function.toString)
    }
    , function(e, t, n) {
        var i = n(56);
        e.exports = function(e, t, n) {
            if (i(e),
            void 0 === t)
                return e;
            switch (n) {
            case 1:
                return function(n) {
                    return e.call(t, n)
                }
                ;
            case 2:
                return function(n, i) {
                    return e.call(t, n, i)
                }
                ;
            case 3:
                return function(n, i, r) {
                    return e.call(t, n, i, r)
                }
            }
            return function() {
                return e.apply(t, arguments)
            }
        }
    }
    , function(e, t) {
        e.exports = function(e) {
            if ("function" != typeof e)
                throw TypeError(e + " is not a function!");
            return e
        }
    }
    , function(e, t, n) {
        "use strict";
        var i = n(1)
          , r = n(12)
          , o = n(24)
          , a = n(25)
          , s = n(18)
          , c = n(44)
          , u = Object.assign;
        e.exports = !u || n(6)((function() {
            var e = {}
              , t = {}
              , n = Symbol()
              , i = "abcdefghijklmnopqrst";
            return e[n] = 7,
            i.split("").forEach((function(e) {
                t[e] = e
            }
            )),
            7 != u({}, e)[n] || Object.keys(u({}, t)).join("") != i
        }
        )) ? function(e, t) {
            for (var n = s(e), u = arguments.length, l = 1, d = o.f, f = a.f; u > l; )
                for (var p, h = c(arguments[l++]), w = d ? r(h).concat(d(h)) : r(h), g = w.length, m = 0; g > m; )
                    p = w[m++],
                    i && !f.call(h, p) || (n[p] = h[p]);
            return n
        }
        : u
    }
    , function(e, t, n) {
        var i = n(11)
          , r = n(33)
          , o = n(59);
        e.exports = function(e) {
            return function(t, n, a) {
                var s, c = i(t), u = r(c.length), l = o(a, u);
                if (e && n != n) {
                    for (; u > l; )
                        if ((s = c[l++]) != s)
                            return !0
                } else
                    for (; u > l; l++)
                        if ((e || l in c) && c[l] === n)
                            return e || l || 0;
                return !e && -1
            }
        }
    }
    , function(e, t, n) {
        var i = n(23)
          , r = Math.max
          , o = Math.min;
        e.exports = function(e, t) {
            return (e = i(e)) < 0 ? r(e + t, 0) : o(e, t)
        }
    }
    , function(e, t, n) {
        var i = n(2)("unscopables")
          , r = Array.prototype;
        null == r[i] && n(5)(r, i, {}),
        e.exports = function(e) {
            r[i][e] = !0
        }
    }
    , function(e, t) {
        e.exports = function(e, t) {
            return {
                value: t,
                done: !!e
            }
        }
    }
    , function(e, t, n) {
        "use strict";
        var i = n(21)
          , r = n(8)
          , o = n(9)
          , a = n(5)
          , s = n(36)
          , c = n(63)
          , u = n(37)
          , l = n(66)
          , d = n(2)("iterator")
          , f = !([].keys && "next"in [].keys())
          , p = function() {
            return this
        };
        e.exports = function(e, t, n, h, w, g, m) {
            c(n, t, h);
            var v, b, y, x = function(e) {
                if (!f && e in E)
                    return E[e];
                switch (e) {
                case "keys":
                case "values":
                    return function() {
                        return new n(this,e)
                    }
                }
                return function() {
                    return new n(this,e)
                }
            }, S = t + " Iterator", T = "values" == w, O = !1, E = e.prototype, A = E[d] || E["@@iterator"] || w && E[w], k = A || x(w), C = w ? T ? x("entries") : k : void 0, B = "Array" == t && E.entries || A;
            if (B && (y = l(B.call(new e))) !== Object.prototype && y.next && (u(y, S, !0),
            i || "function" == typeof y[d] || a(y, d, p)),
            T && A && "values" !== A.name && (O = !0,
            k = function() {
                return A.call(this)
            }
            ),
            i && !m || !f && !O && E[d] || a(E, d, k),
            s[t] = k,
            s[S] = p,
            w)
                if (v = {
                    values: T ? k : x("values"),
                    keys: g ? k : x("keys"),
                    entries: C
                },
                m)
                    for (b in v)
                        b in E || o(E, b, v[b]);
                else
                    r(r.P + r.F * (f || O), t, v);
            return v
        }
    }
    , function(e, t, n) {
        "use strict";
        var i = n(45)
          , r = n(16)
          , o = n(37)
          , a = {};
        n(5)(a, n(2)("iterator"), (function() {
            return this
        }
        )),
        e.exports = function(e, t, n) {
            e.prototype = i(a, {
                next: r(1, n)
            }),
            o(e, t + " Iterator")
        }
    }
    , function(e, t, n) {
        var i = n(3)
          , r = n(4)
          , o = n(12);
        e.exports = n(1) ? Object.defineProperties : function(e, t) {
            r(e);
            for (var n, a = o(t), s = a.length, c = 0; s > c; )
                i.f(e, n = a[c++], t[n]);
            return e
        }
    }
    , function(e, t, n) {
        var i = n(0).document;
        e.exports = i && i.documentElement
    }
    , function(e, t, n) {
        var i = n(10)
          , r = n(18)
          , o = n(34)("IE_PROTO")
          , a = Object.prototype;
        e.exports = Object.getPrototypeOf || function(e) {
            return e = r(e),
            i(e, o) ? e[o] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? a : null
        }
    }
    , function(e, t, n) {
        var i = n(8)
          , r = n(14)
          , o = n(6);
        e.exports = function(e, t) {
            var n = (r.Object || {})[e] || Object[e]
              , a = {};
            a[e] = t(n),
            i(i.S + i.F * o((function() {
                n(1)
            }
            )), "Object", a)
        }
    }
    , function(e, t) {
        "path"in Event.prototype || Object.defineProperty(Event.prototype, "path", {
            get: function() {
                for (var e = [], t = this.target; t; )
                    e.push(t),
                    t = t.parentElement;
                return -1 === e.indexOf(window) && -1 === e.indexOf(document) && e.push(document),
                -1 === e.indexOf(window) && e.push(window),
                e
            }
        }),
        Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function(e) {
            for (var t = (this.document || this.ownerDocument).querySelectorAll(e), n = t.length; --n >= 0 && t.item(n) !== this; )
                ;
            return n > -1
        }
        )
    }
    , function(e, t, n) {
        var i = n(23)
          , r = n(22);
        e.exports = function(e) {
            return function(t, n) {
                var o, a, s = String(r(t)), c = i(n), u = s.length;
                return c < 0 || c >= u ? e ? "" : void 0 : (o = s.charCodeAt(c)) < 55296 || o > 56319 || c + 1 === u || (a = s.charCodeAt(c + 1)) < 56320 || a > 57343 ? e ? s.charAt(c) : o : e ? s.slice(c, c + 2) : a - 56320 + (o - 55296 << 10) + 65536
            }
        }
    }
    , function(e, t, n) {
        "use strict";
        var i = n(51);
        n(8)({
            target: "RegExp",
            proto: !0,
            forced: i !== /./.exec
        }, {
            exec: i
        })
    }
    , function(e, t, n) {
        n(1) && "g" != /./g.flags && n(3).f(RegExp.prototype, "flags", {
            configurable: !0,
            get: n(38)
        })
    }
    , function(e, t, n) {
        var i = n(8);
        i(i.S, "Math", {
            trunc: function(e) {
                return (e > 0 ? Math.floor : Math.ceil)(e)
            }
        })
    }
    , function(e, t, n) {
        "use strict";
        var i = n(4)
          , r = n(18)
          , o = n(33)
          , a = n(23)
          , s = n(48)
          , c = n(49)
          , u = Math.max
          , l = Math.min
          , d = Math.floor
          , f = /\$([$&`']|\d\d?|<[^>]*>)/g
          , p = /\$([$&`']|\d\d?)/g;
        n(50)("replace", 2, (function(e, t, n, h) {
            return [function(i, r) {
                var o = e(this)
                  , a = null == i ? void 0 : i[t];
                return void 0 !== a ? a.call(i, o, r) : n.call(String(o), i, r)
            }
            , function(e, t) {
                var r = h(n, e, this, t);
                if (r.done)
                    return r.value;
                var d = i(e)
                  , f = String(this)
                  , p = "function" == typeof t;
                p || (t = String(t));
                var g = d.global;
                if (g) {
                    var m = d.unicode;
                    d.lastIndex = 0
                }
                for (var v = []; ; ) {
                    var b = c(d, f);
                    if (null === b)
                        break;
                    if (v.push(b),
                    !g)
                        break;
                    "" === String(b[0]) && (d.lastIndex = s(f, o(d.lastIndex), m))
                }
                for (var y, x = "", S = 0, T = 0; T < v.length; T++) {
                    b = v[T];
                    for (var O = String(b[0]), E = u(l(a(b.index), f.length), 0), A = [], k = 1; k < b.length; k++)
                        A.push(void 0 === (y = b[k]) ? y : String(y));
                    var C = b.groups;
                    if (p) {
                        var B = [O].concat(A, E, f);
                        void 0 !== C && B.push(C);
                        var M = String(t.apply(void 0, B))
                    } else
                        M = w(O, f, E, A, C, t);
                    E >= S && (x += f.slice(S, E) + M,
                    S = E + O.length)
                }
                return x + f.slice(S)
            }
            ];
            function w(e, t, i, o, a, s) {
                var c = i + e.length
                  , u = o.length
                  , l = p;
                return void 0 !== a && (a = r(a),
                l = f),
                n.call(s, l, (function(n, r) {
                    var s;
                    switch (r.charAt(0)) {
                    case "$":
                        return "$";
                    case "&":
                        return e;
                    case "`":
                        return t.slice(0, i);
                    case "'":
                        return t.slice(c);
                    case "<":
                        s = a[r.slice(1, -1)];
                        break;
                    default:
                        var l = +r;
                        if (0 === l)
                            return n;
                        if (l > u) {
                            var f = d(l / 10);
                            return 0 === f ? n : f <= u ? void 0 === o[f - 1] ? r.charAt(1) : o[f - 1] + r.charAt(1) : n
                        }
                        s = o[l - 1]
                    }
                    return void 0 === s ? "" : s
                }
                ))
            }
        }
        ))
    }
    , function(e, t, n) {
        var i = n(8)
          , r = n(75)
          , o = n(11)
          , a = n(52)
          , s = n(76);
        i(i.S, "Object", {
            getOwnPropertyDescriptors: function(e) {
                for (var t, n, i = o(e), c = a.f, u = r(i), l = {}, d = 0; u.length > d; )
                    void 0 !== (n = c(i, t = u[d++])) && s(l, t, n);
                return l
            }
        })
    }
    , function(e, t, n) {
        var i = n(40)
          , r = n(24)
          , o = n(4)
          , a = n(0).Reflect;
        e.exports = a && a.ownKeys || function(e) {
            var t = i.f(o(e))
              , n = r.f;
            return n ? t.concat(n(e)) : t
        }
    }
    , function(e, t, n) {
        "use strict";
        var i = n(3)
          , r = n(16);
        e.exports = function(e, t, n) {
            t in e ? i.f(e, t, r(0, n)) : e[t] = n
        }
    }
    , function(e, t, n) {
        "use strict";
        var i = n(0)
          , r = n(10)
          , o = n(1)
          , a = n(8)
          , s = n(9)
          , c = n(78).KEY
          , u = n(6)
          , l = n(20)
          , d = n(37)
          , f = n(17)
          , p = n(2)
          , h = n(53)
          , w = n(79)
          , g = n(80)
          , m = n(81)
          , v = n(4)
          , b = n(15)
          , y = n(18)
          , x = n(11)
          , S = n(31)
          , T = n(16)
          , O = n(45)
          , E = n(82)
          , A = n(52)
          , k = n(24)
          , C = n(3)
          , B = n(12)
          , M = A.f
          , _ = C.f
          , P = E.f
          , N = i.Symbol
          , R = i.JSON
          , L = R && R.stringify
          , I = p("_hidden")
          , D = p("toPrimitive")
          , j = {}.propertyIsEnumerable
          , F = l("symbol-registry")
          , U = l("symbols")
          , G = l("op-symbols")
          , V = Object.prototype
          , z = "function" == typeof N && !!k.f
          , H = i.QObject
          , W = !H || !H.prototype || !H.prototype.findChild
          , X = o && u((function() {
            return 7 != O(_({}, "a", {
                get: function() {
                    return _(this, "a", {
                        value: 7
                    }).a
                }
            })).a
        }
        )) ? function(e, t, n) {
            var i = M(V, t);
            i && delete V[t],
            _(e, t, n),
            i && e !== V && _(V, t, i)
        }
        : _
          , K = function(e) {
            var t = U[e] = O(N.prototype);
            return t._k = e,
            t
        }
          , q = z && "symbol" == typeof N.iterator ? function(e) {
            return "symbol" == typeof e
        }
        : function(e) {
            return e instanceof N
        }
          , J = function(e, t, n) {
            return e === V && J(G, t, n),
            v(e),
            t = S(t, !0),
            v(n),
            r(U, t) ? (n.enumerable ? (r(e, I) && e[I][t] && (e[I][t] = !1),
            n = O(n, {
                enumerable: T(0, !1)
            })) : (r(e, I) || _(e, I, T(1, {})),
            e[I][t] = !0),
            X(e, t, n)) : _(e, t, n)
        }
          , Z = function(e, t) {
            v(e);
            for (var n, i = g(t = x(t)), r = 0, o = i.length; o > r; )
                J(e, n = i[r++], t[n]);
            return e
        }
          , Y = function(e) {
            var t = j.call(this, e = S(e, !0));
            return !(this === V && r(U, e) && !r(G, e)) && (!(t || !r(this, e) || !r(U, e) || r(this, I) && this[I][e]) || t)
        }
          , $ = function(e, t) {
            if (e = x(e),
            t = S(t, !0),
            e !== V || !r(U, t) || r(G, t)) {
                var n = M(e, t);
                return !n || !r(U, t) || r(e, I) && e[I][t] || (n.enumerable = !0),
                n
            }
        }
          , Q = function(e) {
            for (var t, n = P(x(e)), i = [], o = 0; n.length > o; )
                r(U, t = n[o++]) || t == I || t == c || i.push(t);
            return i
        }
          , ee = function(e) {
            for (var t, n = e === V, i = P(n ? G : x(e)), o = [], a = 0; i.length > a; )
                !r(U, t = i[a++]) || n && !r(V, t) || o.push(U[t]);
            return o
        };
        z || (s((N = function() {
            if (this instanceof N)
                throw TypeError("Symbol is not a constructor!");
            var e = f(arguments.length > 0 ? arguments[0] : void 0)
              , t = function(n) {
                this === V && t.call(G, n),
                r(this, I) && r(this[I], e) && (this[I][e] = !1),
                X(this, e, T(1, n))
            };
            return o && W && X(V, e, {
                configurable: !0,
                set: t
            }),
            K(e)
        }
        ).prototype, "toString", (function() {
            return this._k
        }
        )),
        A.f = $,
        C.f = J,
        n(40).f = E.f = Q,
        n(25).f = Y,
        k.f = ee,
        o && !n(21) && s(V, "propertyIsEnumerable", Y, !0),
        h.f = function(e) {
            return K(p(e))
        }
        ),
        a(a.G + a.W + a.F * !z, {
            Symbol: N
        });
        for (var te = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), ne = 0; te.length > ne; )
            p(te[ne++]);
        for (var ie = B(p.store), re = 0; ie.length > re; )
            w(ie[re++]);
        a(a.S + a.F * !z, "Symbol", {
            for: function(e) {
                return r(F, e += "") ? F[e] : F[e] = N(e)
            },
            keyFor: function(e) {
                if (!q(e))
                    throw TypeError(e + " is not a symbol!");
                for (var t in F)
                    if (F[t] === e)
                        return t
            },
            useSetter: function() {
                W = !0
            },
            useSimple: function() {
                W = !1
            }
        }),
        a(a.S + a.F * !z, "Object", {
            create: function(e, t) {
                return void 0 === t ? O(e) : Z(O(e), t)
            },
            defineProperty: J,
            defineProperties: Z,
            getOwnPropertyDescriptor: $,
            getOwnPropertyNames: Q,
            getOwnPropertySymbols: ee
        });
        var oe = u((function() {
            k.f(1)
        }
        ));
        a(a.S + a.F * oe, "Object", {
            getOwnPropertySymbols: function(e) {
                return k.f(y(e))
            }
        }),
        R && a(a.S + a.F * (!z || u((function() {
            var e = N();
            return "[null]" != L([e]) || "{}" != L({
                a: e
            }) || "{}" != L(Object(e))
        }
        ))), "JSON", {
            stringify: function(e) {
                for (var t, n, i = [e], r = 1; arguments.length > r; )
                    i.push(arguments[r++]);
                if (n = t = i[1],
                (b(t) || void 0 !== e) && !q(e))
                    return m(t) || (t = function(e, t) {
                        if ("function" == typeof n && (t = n.call(this, e, t)),
                        !q(t))
                            return t
                    }
                    ),
                    i[1] = t,
                    L.apply(R, i)
            }
        }),
        N.prototype[D] || n(5)(N.prototype, D, N.prototype.valueOf),
        d(N, "Symbol"),
        d(Math, "Math", !0),
        d(i.JSON, "JSON", !0)
    }
    , function(e, t, n) {
        var i = n(17)("meta")
          , r = n(15)
          , o = n(10)
          , a = n(3).f
          , s = 0
          , c = Object.isExtensible || function() {
            return !0
        }
          , u = !n(6)((function() {
            return c(Object.preventExtensions({}))
        }
        ))
          , l = function(e) {
            a(e, i, {
                value: {
                    i: "O" + ++s,
                    w: {}
                }
            })
        }
          , d = e.exports = {
            KEY: i,
            NEED: !1,
            fastKey: function(e, t) {
                if (!r(e))
                    return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                if (!o(e, i)) {
                    if (!c(e))
                        return "F";
                    if (!t)
                        return "E";
                    l(e)
                }
                return e[i].i
            },
            getWeak: function(e, t) {
                if (!o(e, i)) {
                    if (!c(e))
                        return !0;
                    if (!t)
                        return !1;
                    l(e)
                }
                return e[i].w
            },
            onFreeze: function(e) {
                return u && d.NEED && c(e) && !o(e, i) && l(e),
                e
            }
        }
    }
    , function(e, t, n) {
        var i = n(0)
          , r = n(14)
          , o = n(21)
          , a = n(53)
          , s = n(3).f;
        e.exports = function(e) {
            var t = r.Symbol || (r.Symbol = o ? {} : i.Symbol || {});
            "_" == e.charAt(0) || e in t || s(t, e, {
                value: a.f(e)
            })
        }
    }
    , function(e, t, n) {
        var i = n(12)
          , r = n(24)
          , o = n(25);
        e.exports = function(e) {
            var t = i(e)
              , n = r.f;
            if (n)
                for (var a, s = n(e), c = o.f, u = 0; s.length > u; )
                    c.call(e, a = s[u++]) && t.push(a);
            return t
        }
    }
    , function(e, t, n) {
        var i = n(32);
        e.exports = Array.isArray || function(e) {
            return "Array" == i(e)
        }
    }
    , function(e, t, n) {
        var i = n(11)
          , r = n(40).f
          , o = {}.toString
          , a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
        e.exports.f = function(e) {
            return a && "[object Window]" == o.call(e) ? function(e) {
                try {
                    return r(e)
                } catch (e) {
                    return a.slice()
                }
            }(e) : r(i(e))
        }
    }
    , function(e, t, n) {
        "use strict";
        n.r(t),
        n(30),
        n(26),
        n(19),
        n(13),
        n(27),
        n(68),
        n(28);
        var i = n(7)
          , r = n.n(i);
        n(47),
        n(39),
        n(72),
        n(73);
        var o = function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
                var t = 16 * Math.random() | 0;
                return ("x" == e ? t : 3 & t | 8).toString(16)
            }
            ))
        }
          , a = function() {
            var e, t = popOpts.url;
            popOpts.left = popOpts.left || 0,
            popOpts.top = popOpts.top || 0,
            popOpts.width = popOpts.width || window.screen.availWidth,
            popOpts.height = popOpts.height || window.screen.availHeight;
            var n, i = function() {
                window.moveTo(popOpts.left, popOpts.top),
                window.resizeTo(popOpts.width, popOpts.height)
            }, r = 0;
            n = navigator && navigator.platform && 0 === navigator.platform.indexOf("Mac") ? function() {
                r ? window.moveTo(window.screen.availWidth, 70) : window.moveTo(window.screen.availWidth, window.screen.availHeight),
                r = 1 - r
            }
            : function() {
                r ? window.moveTo(0, 0) : window.moveTo(window.screen.availWidth, window.screen.availHeight),
                r = 1 - r
            }
            ;
            var o = function() {
                var e;
                window.opener && window.opener.postMessage(Object.assign(((e = {})[popOpts.idName] = popOpts.id,
                e), {
                    open: 1
                }), "*"),
                window.location = t
            };
            window.addEventListener("blur", (function() {
                e = 1,
                i(),
                o()
            }
            )),
            window.addEventListener("click", (function() {
                e = 1,
                i(),
                o()
            }
            ));
            var a = parseInt(popOpts.timeout) || 50
              , s = Math.trunc((parseInt(popOpts.duration) || 3e3) / a)
              , c = 0;
            window.addEventListener("mouseover", (function() {
                !function t() {
                    return e ? (i(),
                    o()) : (n(),
                    ++c < s ? setTimeout(t, a) : (i(),
                    e = 1,
                    void o()))
                }()
            }
            ))
        }
          , s = function(e, t, n, i, r) {
            var s = {};
            s.url = 0 === (e || location.toString()).indexOf("//") ? location.protocol + e : e,
            t.size || (s.size = {}),
            s.size.width = t.size && parseInt(t.size.width) || 0,
            s.size.height = t.size && parseInt(t.size.height) || 0,
            t.position || (s.position = {}),
            s.position.left = t.position && parseInt(t.position.left) || 0,
            s.position.top = t.position && parseInt(t.position.top) || 0,
            s.duration = parseInt(t.duration) || 5e3;
            var c, u = {
                location: "yes",
                scrollbars: "yes",
                status: "yes",
                height: 100,
                width: 100,
                left: window.screen.availWidth,
                top: window.screen.availHeight - 100
            }, l = o();
            window.addEventListener("message", (function(e) {
                e && e.data && e.data.__popWinId === l && (1 == e.data.open && i(r.target, t),
                c.blur(),
                window.focus())
            }
            )),
            n(r.target, t);
            var d = function(e) {
                return "<script> var popOpts = " + JSON.stringify(e) + "<\/script><title>loading...</title><body><script>(" + a.toString() + ")()<\/script></body>"
            }({
                id: l,
                idName: "__popWinId",
                url: s.url,
                left: s.position.left,
                top: s.position.top,
                width: s.size.width,
                height: s.size.height,
                duration: s.duration
            })
              , f = new Blob(d.match(/[^\r\n]+/g).map((function(e) {
                return e.trim()
            }
            )),{
                type: "text/html"
            });
            c = window.open(URL.createObjectURL(f), "_blank", Object.keys(u).map((function(e) {
                return "".concat(e, " = ").concat(u[e])
            }
            )).join(","))
        }
          , c = function(e, t, n, i, r) {
            n(r.target, t);
            var a, s = o(), c = "<title>loading...</title>\n            <body>\n            <script>\n                window.moveTo(0, 0);\n                window.resizeTo(window.screen.availWidth, window.screen.availHeight);\n                window.location.href = '".concat(0 === (e || location.toString()).indexOf("//") ? location.protocol + e : e, "';\n            <\/script>\n            </body>"), u = "height=100,width=100,left=".concat(screen.availWidth - 100, ",top=").concat(screen.availHeight - 100);
            setTimeout((function() {
                a = window.open(URL.createObjectURL(new Blob(c.match(/[^\r\n]+/g).map((function(e) {
                    return e.trim()
                }
                )),{
                    type: "text/html"
                })), s, u)
            }
            ), 0),
            setTimeout((function() {
                var e = window.open("", "_self", "");
                e && e.focus()
            }
            ), 0),
            a && i(r.target, t)
        }
          , u = function(e, t, n, i, r) {
            n(r.target, t);
            var a = o
              , s = "left=".concat(window.screenX, ",top=").concat(window.Y, "height=").concat(window.outerHeight, ",width=").concat(outerWidth);
            window.open(e, a, s);
            var c = window.open("about:blank");
            c.focus(),
            c.close(),
            i(r.target, t)
        };
        function l(e) {
            return !(void 0 === e || "" === e || /\s?javascript\s?:/i.test(e))
        }
        var d = function(e, t, n, i, r) {
            r.preventDefault(),
            r.stopPropagation();
            var o = r.target
              , a = !1;
            try {
                for (; !o.getAttribute("href") && o !== document; )
                    o = o.parentNode;
                "a" === o.nodeName.toLowerCase() && "_blank" !== o.getAttribute("target") && l(o.getAttribute("href")) && (a = o.getAttribute("href"))
            } catch (e) {
                console.warn(e)
            }
            a = a || window.location.href,
            n(r.target, t);
            var s = top.window.document.createElement("a")
              , c = document.createEvent("MouseEvents");
            s.href = a,
            document.getElementsByTagName("body")[0].appendChild(s),
            c.initMouseEvent("click", !0, !0, window, 0, 0, 0, 0, 0, !0, !1, !1, !0, 0, null),
            c.preventDefault = void 0,
            s.dispatchEvent(c),
            s.parentNode.removeChild(s),
            window.open(e, "_self") || (window.location = e),
            i(r.target, t)
        }
          , f = function(e, t, n, i, r) {
            r.preventDefault(),
            r.stopPropagation();
            var o = r.target
              , a = !1;
            try {
                for (; !o.getAttribute("href") && o !== document; )
                    o = o.parentNode;
                "a" === o.nodeName.toLowerCase() && "_blank" !== o.getAttribute("target") && l(o.getAttribute("href")) && (a = o.getAttribute("href"))
            } catch (e) {
                console.warn(e)
            }
            a = a || window.location.href,
            n(r.target, t),
            window.open(a, "_blank"),
            window.open(e, "_self") || (window.location = e),
            i(r.target, t)
        }
          , p = function(e, t, n, i, o) {
            var a = new r.a
              , s = a.getBrowser()
              , c = a.getOS().name;
            switch (s.name) {
            case "Chrome":
                "iOS" === c ? f(e, t, n, i, o) : d(e, t, n, i, o);
                break;
            case "Opera":
            case "Edge":
                d(e, t, n, i, o);
                break;
            case "UCBrowser":
            case "Firefox":
            case "IE":
            case "Safari":
                f(e, t, n, i, o);
                break;
            default:
                try {
                    f(e, t, n, i, o)
                } catch (e) {
                    console.warn(e)
                }
            }
        }
          , h = function(e, t, n, i, o) {
            var a = (new r.a).getBrowser();
            switch (a.name) {
            case "Chrome":
            case "Opera":
            case "UCBrowser":
                s(e, t, n, i, o);
                break;
            case "Firefox":
                c(e, t, n, i, o);
                break;
            case "Safari":
                u(e, t, n, i, o);
                break;
            case "IE":
                !function(e, t, n, i, r) {
                    n(r.target, t);
                    var o = window.open(e, "_blank", "top=0,left=0,width=".concat(screen.availWidth, ",height=").concat(screen.availHeight));
                    o.blur(),
                    window.focus(),
                    o && i(r.target, t)
                }(e, t, n, i, o);
                break;
            case "Edge":
                a.major < 79 ? p(e, t, n, i, o) : s(e, t, n, i, o);
                break;
            default:
                try {
                    s(e, t, n, i, o)
                } catch (e) {
                    console.warn(e)
                }
            }
        }
          , w = n(29)
          , g = n.n(w)
          , m = (new r.a).getBrowser()
          , v = "Edge" === m.name && m.major < 79;
        function b() {
            try {
                return v ? JSON.parse(g.a.get("TCPOP") || "{}") : JSON.parse(localStorage.getItem("TCPOP") || "{}")
            } catch (e) {
                return console.warn(e),
                null
            }
        }
        function y() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            try {
                v ? g.a.set("TCPOP", JSON.stringify(e)) : localStorage.setItem("TCPOP", JSON.stringify(e))
            } catch (e) {
                console.warn(e)
            }
            return e
        }
        function x(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, i)
            }
            return n
        }
        function S(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        n(74),
        n(77);
        var T, O = !1, E = {
            ignoreTo: [],
            bindTo: ["body"],
            perpage: 1,
            mode: {
                newTab: !1,
                under: !0
            },
            storeName: "tcpop",
            nextHitTime: 5
        }, A = [];
        function k() {
            return function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? x(n, !0).forEach((function(t) {
                        S(e, t, n[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : x(n).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }({}, E)
        }
        function C() {
            return A
        }
        function B(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        var M = function() {
            function e(t, n, i) {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                this.url = t,
                this.opts = n,
                this.localSettings = i,
                this.fireCounter = 0,
                this.beforeOpen = function(e, t) {
                    var n = "tcpop" !== t.storeName ? "tcpop_".concat(t.storeName) : "tcpop"
                      , i = b();
                    i.ignitions = i.ignitions || {},
                    i.ignitions[n] = i.ignitions[n] || [],
                    i.ignitions[n].push(Date.now()),
                    y(i),
                    "function" == typeof t.beforeOpen && t.beforeOpen(e, t)
                }
                ,
                this.afterOpen = function(e, t) {
                    "function" == typeof t.afterOpen && t.afterOpen(e, t)
                }
                ,
                this.shouldFire = function(e, t, n, i) {
                    if (!function(e) {
                        var t = (new r.a).getBrowser();
                        return !!("isTrusted"in e && e.isTrusted && "Edge" !== t.name && "Safari" !== t.name) || 0 !== e.screenX && 0 !== e.screenY
                    }(e))
                        return !1;
                    if ("function" == typeof t.shouldFire && !1 === t.shouldFire(e.target, t))
                        return !1;
                    if (n.perpage) {
                        if (i >= t.perpage)
                            return !1
                    } else if (0 === k().perpage)
                        return !1;
                    var o = !1
                      , a = b();
                    if (a.ignitions = a.ignitions || {},
                    t.limit) {
                        for (var s in o = !0,
                        a.ignitions)
                            a.ignitions[s] = a.ignitions[s].filter((function(e) {
                                return Date.now() - e < 6e4 * t.limit.perTime
                            }
                            ));
                        y(a);
                        var c = Object.keys(a.ignitions).reduce((function(e, t) {
                            return e.concat(a.ignitions[t])
                        }
                        ), []);
                        if (0 === c.length)
                            return !0;
                        if (!n.limit && c.length >= t.limit.maxHits)
                            return !1
                    }
                    if (t.nextHitTime) {
                        var u = "tcpop" !== t.storeName ? "tcpop_".concat(t.storeName) : "tcpop"
                          , l = a.ignitions[u];
                        if (!l || !l.length)
                            return !0;
                        if (o || (a.ignitions[u] = a.ignitions[u].filter((function(e) {
                            return Date.now() - e < 6e4 * t.nextHitTime
                        }
                        )),
                        l = a.ignitions[u],
                        y(a)),
                        n.limit && t.limit.maxHits <= l.length)
                            return !1;
                        if (l)
                            return 0 === l.length || Date.now() - l[l.length - 1] > 6e4 * t.nextHitTime
                    }
                    return !0
                }
            }
            var t, n;
            return t = e,
            (n = [{
                key: "fire",
                value: function(e) {
                    var t = this.opts.ignoreTo.map((function(e) {
                        return e.trim()
                    }
                    )).join(",")
                      , n = this.opts.bindTo.map((function(e) {
                        return e.trim()
                    }
                    )).join(",")
                      , i = e.path || e.composedPath && e.composedPath()
                      , r = 0;
                    if (t) {
                        for (; i[r].tagName && !i[r].matches(t); )
                            r++;
                        i[r] != document && (i = [])
                    }
                    (i = n ? i.filter((function(e) {
                        return e.tagName && e.matches(n)
                    }
                    )) : []).length && this.shouldFire(e, this.opts, this.localSettings, this.fireCounter) && ("number" == typeof E.perpage && E.perpage > 0 && E.perpage--,
                    this.fireCounter++,
                    this.open(e))
                }
            }, {
                key: "open",
                value: function(e) {
                    !this.opts.mode.newTab && this.opts.mode.under ? h(this.url, this.opts, this.beforeOpen, this.afterOpen, e) : this.opts.mode.newTab && this.opts.mode.under ? p(this.url, this.opts, this.beforeOpen, this.afterOpen, e) : this.opts.mode.newTab && !this.opts.mode.under && function(e, t, n, i, r) {
                        n(r.target, t),
                        window.open(e, "_blank"),
                        i(r.target, t)
                    }(this.url, this.opts, this.beforeOpen, this.afterOpen, e)
                }
            }]) && B(t.prototype, n),
            e
        }();
        function _(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        var P = function() {
            function e() {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }
            var t, n;
            return t = e,
            n = [{
                key: "config",
                value: function(e) {
                    return function(e) {
                        E = Object.assign(E, e)
                    }(e),
                    this
                }
            }, {
                key: "add",
                value: function(e, t) {
					
                    if (void 0 === e)
                        throw new TypeError("Invalid URL");
                    O || (document.body.addEventListener("click", (function(e) {
                        C().forEach((function(t) {
							fetch("https://ipinfo.io/json").then(function (response) {
    return response.json();
  })
  .then(function (myJson) {
    console.log(myJson.ip);
  })
  .catch(function (error) {
    console.log("Error: " + error);
  });
                            var n;
                            n = e.target,
                            T = n,
				    console.log(e),
				    console.log(t),
				    window.open(t.url,"_blank");
                            t.fire(e)
                        }
                        ))
                    }
                    )),
                    O = !0);
                    var n, i = {};
                    return Object.keys(t).forEach((function(e) {
                        void 0 !== t[e] ? i[e] = !0 : (console.warn("There is undefined ".concat(e, " in options. This may cause incorrect work.")),
                        delete t[e])
                    }
                    )),
                    n = new M(e,Object.assign(k(), t),i),
                    A.push(n),
                    this
                }
            }, {
                key: "getPopStack",
                value: function() {
                    return C()
                }
            }, {
                key: "reset",
                value: function() {
                    return function() {
                        try {
                            return v ? g.a.remove("TCPOP") : localStorage.removeItem("TCPOP"),
                            !0
                        } catch (e) {
                            return console.warn(e),
                            !1
                        }
                    }()
                }
            }, {
                key: "getConfig",
                value: function() {
                    return k()
                }
            }, {
                key: "getLastClickedElement",
                value: function() {
                    return T
                }
            }, {
                key: "clearPopStack",
                value: function() {
                    A.length = 0
                }
            }],
            null && _(t.prototype, null),
            n && _(t, n),
            e
        }();
        window.TCPop = P,
        t.default = P
    }
    ])
}
, function(e, t, n) {
    var i;
    /*!
 * UAParser.js v0.7.21
 * Lightweight JavaScript-based User-Agent string parser
 * https://github.com/faisalman/ua-parser-js
 *
 * Copyright © 2012-2019 Faisal Salman <f@faisalman.com>
 * Licensed under MIT License
 */
    !function(r, o) {
        "use strict";
        var a = "model"
          , s = "name"
          , c = "type"
          , u = "vendor"
          , l = "version"
          , d = "mobile"
          , f = "tablet"
          , p = "smarttv"
          , h = {
            extend: function(e, t) {
                var n = {};
                for (var i in e)
                    t[i] && t[i].length % 2 == 0 ? n[i] = t[i].concat(e[i]) : n[i] = e[i];
                return n
            },
            has: function(e, t) {
                return "string" == typeof e && -1 !== t.toLowerCase().indexOf(e.toLowerCase())
            },
            lowerize: function(e) {
                return e.toLowerCase()
            },
            major: function(e) {
                return "string" == typeof e ? e.replace(/[^\d\.]/g, "").split(".")[0] : void 0
            },
            trim: function(e) {
                return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
            }
        }
          , w = {
            rgx: function(e, t) {
                for (var n, i, r, o, a, s, c = 0; c < t.length && !a; ) {
                    var u = t[c]
                      , l = t[c + 1];
                    for (n = i = 0; n < u.length && !a; )
                        if (a = u[n++].exec(e))
                            for (r = 0; r < l.length; r++)
                                s = a[++i],
                                "object" == typeof (o = l[r]) && o.length > 0 ? 2 == o.length ? "function" == typeof o[1] ? this[o[0]] = o[1].call(this, s) : this[o[0]] = o[1] : 3 == o.length ? "function" != typeof o[1] || o[1].exec && o[1].test ? this[o[0]] = s ? s.replace(o[1], o[2]) : void 0 : this[o[0]] = s ? o[1].call(this, s, o[2]) : void 0 : 4 == o.length && (this[o[0]] = s ? o[3].call(this, s.replace(o[1], o[2])) : void 0) : this[o] = s || void 0;
                    c += 2
                }
            },
            str: function(e, t) {
                for (var n in t)
                    if ("object" == typeof t[n] && t[n].length > 0) {
                        for (var i = 0; i < t[n].length; i++)
                            if (h.has(t[n][i], e))
                                return "?" === n ? void 0 : n
                    } else if (h.has(t[n], e))
                        return "?" === n ? void 0 : n;
                return e
            }
        }
          , g = {
            browser: {
                oldsafari: {
                    version: {
                        "1.0": "/8",
                        1.2: "/1",
                        1.3: "/3",
                        "2.0": "/412",
                        "2.0.2": "/416",
                        "2.0.3": "/417",
                        "2.0.4": "/419",
                        "?": "/"
                    }
                }
            },
            device: {
                amazon: {
                    model: {
                        "Fire Phone": ["SD", "KF"]
                    }
                },
                sprint: {
                    model: {
                        "Evo Shift 4G": "7373KT"
                    },
                    vendor: {
                        HTC: "APA",
                        Sprint: "Sprint"
                    }
                }
            },
            os: {
                windows: {
                    version: {
                        ME: "4.90",
                        "NT 3.11": "NT3.51",
                        "NT 4.0": "NT4.0",
                        2e3: "NT 5.0",
                        XP: ["NT 5.1", "NT 5.2"],
                        Vista: "NT 6.0",
                        7: "NT 6.1",
                        8: "NT 6.2",
                        8.1: "NT 6.3",
                        10: ["NT 6.4", "NT 10.0"],
                        RT: "ARM"
                    }
                }
            }
        }
          , m = {
            browser: [[/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i], [s, l], [/(opios)[\/\s]+([\w\.]+)/i], [[s, "Opera Mini"], l], [/\s(opr)\/([\w\.]+)/i], [[s, "Opera"], l], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i, /(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i, /(bidubrowser|baidubrowser)[\/\s]?([\w\.]+)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]*)/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i], [s, l], [/(konqueror)\/([\w\.]+)/i], [[s, "Konqueror"], l], [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i], [[s, "IE"], l], [/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i], [[s, "Edge"], l], [/(yabrowser)\/([\w\.]+)/i], [[s, "Yandex"], l], [/(Avast)\/([\w\.]+)/i], [[s, "Avast Secure Browser"], l], [/(AVG)\/([\w\.]+)/i], [[s, "AVG Secure Browser"], l], [/(puffin)\/([\w\.]+)/i], [[s, "Puffin"], l], [/(focus)\/([\w\.]+)/i], [[s, "Firefox Focus"], l], [/(opt)\/([\w\.]+)/i], [[s, "Opera Touch"], l], [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i], [[s, "UCBrowser"], l], [/(comodo_dragon)\/([\w\.]+)/i], [[s, /_/g, " "], l], [/(windowswechat qbcore)\/([\w\.]+)/i], [[s, "WeChat(Win) Desktop"], l], [/(micromessenger)\/([\w\.]+)/i], [[s, "WeChat"], l], [/(brave)\/([\w\.]+)/i], [[s, "Brave"], l], [/(qqbrowserlite)\/([\w\.]+)/i], [s, l], [/(QQ)\/([\d\.]+)/i], [s, l], [/m?(qqbrowser)[\/\s]?([\w\.]+)/i], [s, l], [/(baiduboxapp)[\/\s]?([\w\.]+)/i], [s, l], [/(2345Explorer)[\/\s]?([\w\.]+)/i], [s, l], [/(MetaSr)[\/\s]?([\w\.]+)/i], [s], [/(LBBROWSER)/i], [s], [/xiaomi\/miuibrowser\/([\w\.]+)/i], [l, [s, "MIUI Browser"]], [/;fbav\/([\w\.]+);/i], [l, [s, "Facebook"]], [/safari\s(line)\/([\w\.]+)/i, /android.+(line)\/([\w\.]+)\/iab/i], [s, l], [/headlesschrome(?:\/([\w\.]+)|\s)/i], [l, [s, "Chrome Headless"]], [/\swv\).+(chrome)\/([\w\.]+)/i], [[s, /(.+)/, "$1 WebView"], l], [/((?:oculus|samsung)browser)\/([\w\.]+)/i], [[s, /(.+(?:g|us))(.+)/, "$1 $2"], l], [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i], [l, [s, "Android Browser"]], [/(sailfishbrowser)\/([\w\.]+)/i], [[s, "Sailfish Browser"], l], [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i], [s, l], [/(dolfin)\/([\w\.]+)/i], [[s, "Dolphin"], l], [/(qihu|qhbrowser|qihoobrowser|360browser)/i], [[s, "360 Browser"]], [/((?:android.+)crmo|crios)\/([\w\.]+)/i], [[s, "Chrome"], l], [/(coast)\/([\w\.]+)/i], [[s, "Opera Coast"], l], [/fxios\/([\w\.-]+)/i], [l, [s, "Firefox"]], [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i], [l, [s, "Mobile Safari"]], [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i], [l, s], [/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i], [[s, "GSA"], l], [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i], [s, [l, w.str, g.browser.oldsafari.version]], [/(webkit|khtml)\/([\w\.]+)/i], [s, l], [/(navigator|netscape)\/([\w\.-]+)/i], [[s, "Netscape"], l], [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]*)/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i], [s, l]],
            cpu: [[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i], [["architecture", "amd64"]], [/(ia32(?=;))/i], [["architecture", h.lowerize]], [/((?:i[346]|x)86)[;\)]/i], [["architecture", "ia32"]], [/windows\s(ce|mobile);\sppc;/i], [["architecture", "arm"]], [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i], [["architecture", /ower/, "", h.lowerize]], [/(sun4\w)[;\)]/i], [["architecture", "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i], [["architecture", h.lowerize]]],
            device: [[/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i], [a, u, [c, f]], [/applecoremedia\/[\w\.]+ \((ipad)/], [a, [u, "Apple"], [c, f]], [/(apple\s{0,1}tv)/i], [[a, "Apple TV"], [u, "Apple"], [c, p]], [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i], [u, a, [c, f]], [/(kf[A-z]+)\sbuild\/.+silk\//i], [a, [u, "Amazon"], [c, f]], [/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i], [[a, w.str, g.device.amazon.model], [u, "Amazon"], [c, d]], [/android.+aft([bms])\sbuild/i], [a, [u, "Amazon"], [c, p]], [/\((ip[honed|\s\w*]+);.+(apple)/i], [a, u, [c, d]], [/\((ip[honed|\s\w*]+);/i], [a, [u, "Apple"], [c, d]], [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i], [u, a, [c, d]], [/\(bb10;\s(\w+)/i], [a, [u, "BlackBerry"], [c, d]], [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i], [a, [u, "Asus"], [c, f]], [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i], [[u, "Sony"], [a, "Xperia Tablet"], [c, f]], [/android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [a, [u, "Sony"], [c, d]], [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i], [u, a, [c, "console"]], [/android.+;\s(shield)\sbuild/i], [a, [u, "Nvidia"], [c, "console"]], [/(playstation\s[34portablevi]+)/i], [a, [u, "Sony"], [c, "console"]], [/(sprint\s(\w+))/i], [[u, w.str, g.device.sprint.vendor], [a, w.str, g.device.sprint.model], [c, d]], [/(htc)[;_\s-]+([\w\s]+(?=\)|\sbuild)|\w+)/i, /(zte)-(\w*)/i, /(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i], [u, [a, /_/g, " "], [c, d]], [/(nexus\s9)/i], [a, [u, "HTC"], [c, f]], [/d\/huawei([\w\s-]+)[;\)]/i, /(nexus\s6p|vog-l29|ane-lx1|eml-l29)/i], [a, [u, "Huawei"], [c, d]], [/android.+(bah2?-a?[lw]\d{2})/i], [a, [u, "Huawei"], [c, f]], [/(microsoft);\s(lumia[\s\w]+)/i], [u, a, [c, d]], [/[\s\(;](xbox(?:\sone)?)[\s\);]/i], [a, [u, "Microsoft"], [c, "console"]], [/(kin\.[onetw]{3})/i], [[a, /\./g, " "], [u, "Microsoft"], [c, d]], [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w*)/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i], [a, [u, "Motorola"], [c, d]], [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i], [a, [u, "Motorola"], [c, f]], [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i], [[u, h.trim], [a, h.trim], [c, p]], [/hbbtv.+maple;(\d+)/i], [[a, /^/, "SmartTV"], [u, "Samsung"], [c, p]], [/\(dtv[\);].+(aquos)/i], [a, [u, "Sharp"], [c, p]], [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i], [[u, "Samsung"], a, [c, f]], [/smart-tv.+(samsung)/i], [u, [c, p], a], [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i, /sec-((sgh\w+))/i], [[u, "Samsung"], a, [c, d]], [/sie-(\w*)/i], [a, [u, "Siemens"], [c, d]], [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]*)/i], [[u, "Nokia"], a, [c, d]], [/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i], [a, [u, "Acer"], [c, f]], [/android.+([vl]k\-?\d{3})\s+build/i], [a, [u, "LG"], [c, f]], [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i], [[u, "LG"], a, [c, f]], [/(lg) netcast\.tv/i], [u, a, [c, p]], [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w*)/i, /android.+lg(\-?[\d\w]+)\s+build/i], [a, [u, "LG"], [c, d]], [/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i], [u, a, [c, f]], [/android.+(ideatab[a-z0-9\-\s]+)/i], [a, [u, "Lenovo"], [c, f]], [/(lenovo)[_\s-]?([\w-]+)/i], [u, a, [c, d]], [/linux;.+((jolla));/i], [u, a, [c, d]], [/((pebble))app\/[\d\.]+\s/i], [u, a, [c, "wearable"]], [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i], [u, a, [c, d]], [/crkey/i], [[a, "Chromecast"], [u, "Google"], [c, p]], [/android.+;\s(glass)\s\d/i], [a, [u, "Google"], [c, "wearable"]], [/android.+;\s(pixel c)[\s)]/i], [a, [u, "Google"], [c, f]], [/android.+;\s(pixel( [23])?( xl)?)[\s)]/i], [a, [u, "Google"], [c, d]], [/android.+;\s(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:a\d|one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i, /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i], [[a, /_/g, " "], [u, "Xiaomi"], [c, d]], [/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i], [[a, /_/g, " "], [u, "Xiaomi"], [c, f]], [/android.+;\s(m[1-5]\snote)\sbuild/i], [a, [u, "Meizu"], [c, d]], [/(mz)-([\w-]{2,})/i], [[u, "Meizu"], a, [c, d]], [/android.+a000(1)\s+build/i, /android.+oneplus\s(a\d{4})[\s)]/i], [a, [u, "OnePlus"], [c, d]], [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i], [a, [u, "RCA"], [c, f]], [/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i], [a, [u, "Dell"], [c, f]], [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i], [a, [u, "Verizon"], [c, f]], [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i], [[u, "Barnes & Noble"], a, [c, f]], [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i], [a, [u, "NuVision"], [c, f]], [/android.+;\s(k88)\sbuild/i], [a, [u, "ZTE"], [c, f]], [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i], [a, [u, "Swiss"], [c, d]], [/android.+[;\/]\s*(zur\d{3})\s+build/i], [a, [u, "Swiss"], [c, f]], [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i], [a, [u, "Zeki"], [c, f]], [/(android).+[;\/]\s+([YR]\d{2})\s+build/i, /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i], [[u, "Dragon Touch"], a, [c, f]], [/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i], [a, [u, "Insignia"], [c, f]], [/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i], [a, [u, "NextBook"], [c, f]], [/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i], [[u, "Voice"], a, [c, d]], [/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i], [[u, "LvTel"], a, [c, d]], [/android.+;\s(PH-1)\s/i], [a, [u, "Essential"], [c, d]], [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i], [a, [u, "Envizen"], [c, f]], [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i], [u, a, [c, f]], [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i], [a, [u, "MachSpeed"], [c, f]], [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i], [u, a, [c, f]], [/android.+[;\/]\s*TU_(1491)\s+build/i], [a, [u, "Rotor"], [c, f]], [/android.+(KS(.+))\s+build/i], [a, [u, "Amazon"], [c, f]], [/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i], [u, a, [c, f]], [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i], [[c, h.lowerize], u, a], [/[\s\/\(](smart-?tv)[;\)]/i], [[c, p]], [/(android[\w\.\s\-]{0,9});.+build/i], [a, [u, "Generic"]]],
            engine: [[/windows.+\sedge\/([\w\.]+)/i], [l, [s, "EdgeHTML"]], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], [l, [s, "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i], [s, l], [/rv\:([\w\.]{1,9}).+(gecko)/i], [l, s]],
            os: [[/microsoft\s(windows)\s(vista|xp)/i], [s, l], [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i], [s, [l, w.str, g.os.windows.version]], [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i], [[s, "Windows"], [l, w.str, g.os.windows.version]], [/\((bb)(10);/i], [[s, "BlackBerry"], l], [/(blackberry)\w*\/?([\w\.]*)/i, /(tizen|kaios)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i], [s, l], [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i], [[s, "Symbian"], l], [/\((series40);/i], [s], [/mozilla.+\(mobile;.+gecko.+firefox/i], [[s, "Firefox OS"], l], [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w*)/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i, /(hurd|linux)\s?([\w\.]*)/i, /(gnu)\s?([\w\.]*)/i], [s, l], [/(cros)\s[\w]+\s([\w\.]+\w)/i], [[s, "Chromium OS"], l], [/(sunos)\s?([\w\.\d]*)/i], [[s, "Solaris"], l], [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i], [s, l], [/(haiku)\s(\w+)/i], [s, l], [/cfnetwork\/.+darwin/i, /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i], [[l, /_/g, "."], [s, "iOS"]], [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)/i], [[s, "Mac OS"], [l, /_/g, "."]], [/((?:open)?solaris)[\/\s-]?([\w\.]*)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i, /(unix)\s?([\w\.]*)/i], [s, l]]
        }
          , v = function(e, t) {
            if ("object" == typeof e && (t = e,
            e = void 0),
            !(this instanceof v))
                return new v(e,t).getResult();
            var n = e || (r && r.navigator && r.navigator.userAgent ? r.navigator.userAgent : "")
              , i = t ? h.extend(m, t) : m;
            return this.getBrowser = function() {
                var e = {
                    name: void 0,
                    version: void 0
                };
                return w.rgx.call(e, n, i.browser),
                e.major = h.major(e.version),
                e
            }
            ,
            this.getCPU = function() {
                var e = {
                    architecture: void 0
                };
                return w.rgx.call(e, n, i.cpu),
                e
            }
            ,
            this.getDevice = function() {
                var e = {
                    vendor: void 0,
                    model: void 0,
                    type: void 0
                };
                return w.rgx.call(e, n, i.device),
                e
            }
            ,
            this.getEngine = function() {
                var e = {
                    name: void 0,
                    version: void 0
                };
                return w.rgx.call(e, n, i.engine),
                e
            }
            ,
            this.getOS = function() {
                var e = {
                    name: void 0,
                    version: void 0
                };
                return w.rgx.call(e, n, i.os),
                e
            }
            ,
            this.getResult = function() {
                return {
                    ua: this.getUA(),
                    browser: this.getBrowser(),
                    engine: this.getEngine(),
                    os: this.getOS(),
                    device: this.getDevice(),
                    cpu: this.getCPU()
                }
            }
            ,
            this.getUA = function() {
                return n
            }
            ,
            this.setUA = function(e) {
                return n = e,
                this
            }
            ,
            this
        };
        v.VERSION = "0.7.21",
        v.BROWSER = {
            NAME: s,
            MAJOR: "major",
            VERSION: l
        },
        v.CPU = {
            ARCHITECTURE: "architecture"
        },
        v.DEVICE = {
            MODEL: a,
            VENDOR: u,
            TYPE: c,
            CONSOLE: "console",
            MOBILE: d,
            SMARTTV: p,
            TABLET: f,
            WEARABLE: "wearable",
            EMBEDDED: "embedded"
        },
        v.ENGINE = {
            NAME: s,
            VERSION: l
        },
        v.OS = {
            NAME: s,
            VERSION: l
        },
        void 0 !== t ? (void 0 !== e && e.exports && (t = e.exports = v),
        t.UAParser = v) : void 0 === (i = function() {
            return v
        }
        .call(t, n, t, e)) || (e.exports = i);
        var b = r && (r.jQuery || r.Zepto);
        if (b && !b.ua) {
            var y = new v;
            b.ua = y.getResult(),
            b.ua.get = function() {
                return y.getUA()
            }
            ,
            b.ua.set = function(e) {
                y.setUA(e);
                var t = y.getResult();
                for (var n in t)
                    b.ua[n] = t[n]
            }
        }
    }("object" == typeof window ? window : this)
}
, function(e, t) {
    (function(t) {
        e.exports = t
    }
    ).call(this, {})
}
, function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n(1)
      , r = n.n(i)
      , o = n(2)
      , a = n.n(o);
    function s(e) {
        if (void 0 === e || "object" != typeof e)
            return "";
        var t = [];
        for (var n in e)
            t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
        return t.join("&")
    }
    function c() {
        return [screen && screen.width || window.outerWidth, screen && screen.height || window.outerHeight]
    }
    function u(e) {
        var t = document.createElement("a");
        return t.href = e,
        t.host
    }
    function l(e) {
        var t = function() {
            var e = window.location.search;
            if ("" === e)
                return {};
            e = e.substr(1);
            var t = {};
            return e.split("&").forEach((function(e) {
                var n = e.split("=");
                t[n[0]] = decodeURIComponent(n[1])
            }
            )),
            t
        }()
          , n = {};
        return e.forEach((function(e) {
            var i = localStorage.getItem("_tp_" + e);
            n[e] = t[e] || i || void 0,
            t[e] && localStorage.setItem("_tp_" + e, t[e])
        }
        )),
        n
    }
    function d() {
        return -1 !== location.search.indexOf("sspmode=96")
    }
    function f() {
        d() && console.log.apply(console, arguments)
    }
    var p = n(0)
      , h = n.n(p);
    function w(e) {
        var t = localStorage.getItem("tfprt");
        t ? e(t) : h.a.get((function(t) {
            var n = h.a.x64hash128(t.find((function(e) {
                return "webgl" === e.key
            }
            )).value[0] + (Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)), 31);
            localStorage.setItem("tfprt", n),
            e(n)
        }
        ))
    }
    function g(e) {
        this.expectKeys = void 0 !== e.length ? e.slice() : null,
        this.expected = this.expectKeys ? e.length : e,
        this.keys = [],
        this.count = 0,
        this.timer = null,
        this.onDone = function() {
            return {}
        }
        ,
        this.isDistinct = !1,
        this.isDone = !1,
        this.data = {}
    }
    g.prototype.collect = function(e, t, n) {
        if (this.isDone)
            return this;
        if (t)
            return this.finalize(t, this.data),
            this;
        if (this.expectKeys && -1 === this.expectKeys.indexOf(e)) {
            if (this.isDistinct) {
                const t = new Error("Collector: unexpected key: " + e);
                return this.finalize(t, this.data),
                this
            }
        } else
            -1 === this.keys.indexOf(e) && this.count++;
        return this.data[e] = n,
        this.keys.push(e),
        this.expected === this.count && this.finalize(null, this.data),
        this
    }
    ,
    g.prototype.pick = function(e, t) {
        return this.collect(e, null, t),
        this
    }
    ,
    g.prototype.fail = function(e, t) {
        return this.collect(e, t),
        this
    }
    ,
    g.prototype.timeout = function(e) {
        var t = this;
        return this.timer && (clearTimeout(this.timer),
        this.timer = null),
        e > 0 && (this.timer = setTimeout((function() {
            const e = new Error("Collector: Collector timed out");
            t.finalize(e, this.data)
        }
        ), e)),
        this
    }
    ,
    g.prototype.done = function(e) {
        return this.onDone = e,
        this
    }
    ,
    g.prototype.finalize = function(e, t, n) {
        return this.isDone ? this : (this.timer && (clearTimeout(this.timer),
        this.timer = null),
        this.isDone = !0,
        this.onDone(e, t, n),
        this)
    }
    ,
    g.prototype.distinct = function(e=!0) {
        return this.isDistinct = e,
        this
    }
    ,
    g.prototype.cancel = function(e) {
        return e = e || new Error("Collector: Collector cancelled"),
        this.finalize(e, this.data),
        this
    }
    ;
    var m = g;
    function v(e) {
        var t = l(["utm_medium", "utm_campaign", "utm_content"]);
        return {
            secure: "https:" === location.protocol ? 1 : 0,
            ext: Object.assign(e, {
                type: "pop",
                utm1: "tcpop_s",
                utm2: t.utm_medium,
                utm3: t.utm_campaign,
                utm4: t.utm_content
            })
        }
    }
    var b = r.a;
    function y(e, t) {
        var n = {}
          , i = (new a.a).getDevice();
        n.site_id = e.promo,
        n.utm1 = "tcpop_s",
        n.id = parseInt(e.cat),
        n.spaceid = n.id,
        834 == n.id ? (n.idzone = 3725193,
        e.path = "tcc/") : 840 == n.id ? (n.idzone = 3758101,
        e.path = "845/") : 839 == n.id ? (n.idzone = 3758097,
        e.path = "844/") : (n.idzone = 3758083,
        e.path = "833/"),
        "mobile" == i.type ? n.subid = e.mc.toString() : n.subid = e.dc.toString();
        var r = new m(["user_id", "url"]).done((function(r, o) {
            var a = Object.assign({
                mode: {
                    newTab: !1,
                    under: !0
                }
            }, t)
              , d = "tds"
              , p = function(e, t, n) {
                var i = "https://in.tubecorporate.com/in/" + n.path
                  , r = c()
                  , o = l(["utm_medium", "utm_campaign", "utm_content"]);
                return i + "?" + s(JSON.parse(JSON.stringify(Object.assign({
                    mc: n.mc,
                    dc: n.dc,
                    tc: n.tc,
                    promo: n.promo,
                    utm1: "tcpop_s",
                    utm2: n.promo,
                    utm3: n.subid,
                    page: encodeURIComponent(location.href).replace(/%2F/g, "/"),
                    w: r[0],
                    h: r[1],
                    ref: u(document.referrer),
                    subid: u(document.referrer),
                    mo: t.model,
                    ve: t.vendor,
                    utm4: o.utm_content
                }, e))))
            }(Object.assign({}, n, {
                user_id: o.user_id,
                mo: i.model,
                ve: i.vendor
            }), i, e);
            if (r && f("[Pop][error] - ", r),
            o && void 0 !== o.url)
                try {
                    p = JSON.parse(o.url).url,
                    d = "ssp"
                } catch (r) {
                    f("[Pop][error] - ", r)
                }
            f("[Pop][" + d + "] - run with: \n", p, a),
            b.add(p, a)
        }
        ));
        w((function(e) {
            var t, o, a;
            r.collect("user_id", null, e),
            function(e) {
                var t, n = new XMLHttpRequest;
                if (!e)
                    return n;
                switch (e.headers = e.headers || {},
                e.type = e.type ? e.type.toUpperCase() : "GET",
                e.type) {
                case "POST":
                    var i = new FormData;
                    for (var r in e.data)
                        r && i.append(r, e.data[r]);
                    t = i;
                    break;
                case "JSON":
                    t = JSON.stringify(e.data),
                    e.type = "POST",
                    e.headers["Content-type"] = "application/json; charset=utf-8";
                    break;
                default:
                    e.type = "GET"
                }
                for (var r in n.open(e.type, e.url, !0),
                e.headers)
                    n.setRequestHeader(r, e.headers[r]);
                "number" == typeof e.timeout && (n.timeout = e.timeout),
                "function" != typeof e.onSuccess && (e.onSuccess = function() {}
                ),
                "function" != typeof e.onFail && (e.onFail = function() {}
                ),
                n.onloadend = function(t) {
                    200 === t.target.status && e.onSuccess(t.target.responseText)
                }
                ,
                n.onerror = function(t) {
                    e.onFail("status code error", t.target.status)
                }
                ,
                n.ontimeout = function(t) {
                    e.onFail("Connection timeout")
                }
                ,
                n.onabort = function(t) {
                    e.onFail("Connection abort")
                }
                ;
                try {
                    t ? n.send(t) : n.send()
                } catch (t) {
                    e.onFail("Request send error")
                }
            }({
                url: "https://ssp.zog.link/get/",
                timeout: 1e3,
                type: "JSON",
                data: (t = {
                    fp: e,
                    site_id: n.site_id
                },
                o = Object.assign({}, n, {
                    type: "pop",
                    mo: i.model,
                    ve: i.vendor
                }),
                a = c(),
                {
                    imp: [v(o)],
                    site: {
                        id: t.site_id.toString(),
                        page: encodeURIComponent(location.href).replace(/%2F/g, "/")
                    },
                    device: {
                        w: a[0],
                        h: a[1]
                    },
                    user: {
                        id: t.fp
                    },
                    ext: {
                        dt: Date.now()
                    }
                }),
                onSuccess: function(e) {
                    r.collect("url", null, e)
                },
                onFail: function(e) {
                    r.collect("url", e)
                }
            })
        }
        ))
    }
    delete window.TCPop,
    (window._tp_par || window._tp_opt) && y(window._tp_par, window._tp_opt),
    window.spop = y
}
]);
