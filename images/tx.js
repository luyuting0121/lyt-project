//ta
;
(function (global) {
    global.Ta = global.Ta || {};
    Ta.hack = function () {
        return {
            params: '',
            conf: {
                sid: 22726661,
                pf: 1,
                logo: 255,
                hot: {
                    "url": "ac.qq.com/|ac.qq.com/Comic/comicInfo/id/17114|ac.qq.com/Comic/comicInfo/id/505432|ac.qq.com/Comic/comicInfo/id/511915|ac.qq.com/Comic/comicInfo/id/519855|ac.qq.com/Rank|ac.qq.com/VIP|ac.qq.com/cf|ac.qq.com/cf/|ac.qq.com/tps|ac.qq.com/tps/|ac.qq.com/Jump|ac.qq.com/area/plot/|ac.qq.com/Comic/comicInfo/id/529460",
                    "isValid": true
                }
            }
        };
    };
})(this);

(function (g, n) {
    function v(c) {
        c += "";
        var a, b, d, e, h, f;
        d = c.length;
        b = 0;
        for (a = ""; b < d;) {
            e = c.charCodeAt(b++) & 255;
            if (b == d) {
                a += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e >> 2);
                a += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt((e & 3) << 4);
                a += "==";
                break
            }
            h = c.charCodeAt(b++);
            if (b == d) {
                a += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e >> 2);
                a += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt((e & 3) << 4 | (h & 240) >>
                    4);
                a += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt((h & 15) << 2);
                a += "=";
                break
            }
            f = c.charCodeAt(b++);
            a += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e >> 2);
            a += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt((e & 3) << 4 | (h & 240) >> 4);
            a += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt((h & 15) << 2 | (f & 192) >> 6);
            a += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(f & 63)
        }
        return a
    }

    function p(c) {
        return (c =
            document.cookie.match(new RegExp("(?:^|;\\s)" + c + "=(.*?)(?:;\\s|$)"))) ? c[1] : ""
    }

    function q(c, a, b) {
        c = c + "=" + a + ";path=/;domain=";
        a = window.location.host;
        var d = {
            "com.cn": 1,
            "net.cn": 1,
            "gov.cn": 1,
            "com.hk": 1,
            "co.nz": 1,
            "org.cn": 1,
            "edu.cn": 1
        }, e = a.split(".");
        2 < e.length && (a = (d[e.slice(-2).join(".")] ? e.slice(-3) : e.slice(-2)).join("."));
        document.cookie = c + a + (b ? ";expires=" + b : "")
    }

    function l(c) {
        var a, b, d, e = {};
        void 0 === c ? (d = window.location, c = d.host, a = d.pathname, b = d.search.substr(1), d = d.hash) : (d = c.match(/\w+:\/\/((?:[\w-]+\.)+\w+)(?:\:\d+)?(\/[^\?\\\"\'\|\:<>]*)?(?:\?([^\'\"\\<>#]*))?(?:#(\w+))?/i) ||
            [], c = d[1], a = d[2], b = d[3], d = d[4]);
        if (b)for (var h = b.split("&"), f = 0, g = h.length; f < g; f++)if (-1 != h[f].indexOf("=")) {
            var m = h[f].indexOf("="), k = h[f].slice(0, m), m = h[f].slice(m + 1);
            e[k] = m
        }
        return {host: c, path: a, search: b, hash: d, param: e}
    }

    function r(c) {
        return (c || "") + Math.round(2147483647 * (Math.random() || .5)) * +new Date % 1E10
    }

    function s(c, a) {
        var b = document.createElement("script"), d = document.getElementsByTagName("script")[0];
        b.src = c;
        b.type = "text/javascript";
        b.onload = b.onerror = b.onreadystatechange = function () {
            /loaded|complete|undefined/.test(b.readyState) &&
            (b.onload = b.onerror = b.onreadystatechange = null, b.parentNode.removeChild(b), b = void 0, a())
        };
        d.parentNode.insertBefore(b, d)
    }

    function w() {
        var c = l(), a = {dm: c.host, pvi: "", si: "", url: c.path, arg: encodeURIComponent(c.search || ""), ty: 1};
        a.pvi = function () {
            var b = p("pgv_pvi");
            b || (a.ty = 0, b = r(), q("pgv_pvi", b, "Sun, 18 Jan 2038 00:00:00 GMT;"));
            return b
        }();
        a.si = function () {
            var a = p("pgv_si");
            a || (a = r("s"), q("pgv_si", a));
            return a
        }();
        return a
    }

    function x() {
        var c = l(document.referrer), a = l();
        return {
            rdm: c.host, rurl: c.path, rarg: encodeURIComponent(c.search ||
                ""), adt: a.param.ADTAG || a.param.adtag
        }
    }

    function y() {
        try {
            var c = navigator, a = screen || {
                    width: "",
                    height: "",
                    colorDepth: ""
                }, b = document.body, d = a.width + "x" + a.height, e = a.colorDepth + "-bit", h = (c.language || c.userLanguage).toLowerCase(), f = c.javaEnabled() ? 1 : 0, g = (new Date).getTimezoneOffset() / 60, a = "";
            b && b.addBehavior && (b.addBehavior("#default#clientCaps"), a = b.connectionType);
            var b = {fl: "", scr: d, scl: e, lg: h, jv: f, tz: g, ct: a}, m, k, l, n;
            if ((m = c.plugins) && (k = m.length))for (c = 0; c < k; c++) {
                if (l = m[c].description.match(/Shockwave Flash ([\d\.]+) \w*/))b.fl =
                    l[1]
            } else n = (new ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version"), b.fl = n.replace(/^.*\s+(\d+)\,(\d+).*$/, "$1.$2")
        } catch (p) {
            return {}
        }
        return b
    }

    function z() {
        var c = {};
        if ("undefined" != typeof _taadHolders && 0 < _taadHolders.length)for (var a = 0, b = _taadHolders, d = b.length; a < d; a++)c[b[a]] = c[b[a]] ? c[b[a]] + 1 : 1;
        var a = [], e;
        for (e in c)c.hasOwnProperty(e) && a.push(e + "*" + c[e]);
        return {ext: "adid=" + a.join(":")}
    }

    function A() {
        var c = [], a;
        for (a in k) {
            var b = p(k[a].c_id), d;
            "afs" == a ? d = (d = /ssid=([^&]*)/i.exec(l().hash)) &&
            d[1] ? d[1] : "" : (d = l().param, d = d[k[a].id] ? d[k[a].id] : "");
            d ? (c.push("ty=" + k[a].key + ";ck=0;id=" + d), b = new Date, b.setTime(b.getTime() + 2592E6), q(k[a].c_id, d, b.toGMTString())) : b && c.push("ty=" + k[a].key + ";ck=1;id=" + b)
        }
        return {pf: c.join("|")}
    }

    function t(c) {
        c = c || {};
        c.conf && function () {
            var a = c.conf, b;
            for (b in a)a.hasOwnProperty(b) && (g[b] = a[b])
        }();
        if (g.sid && !Ta[g.sid]) {
            for (var a = [], b = 0, d = [w(), x(), {
                r2: g.sid,
                r3: "undefined" == typeof _speedMark ? "-1" : new Date - _speedMark,
                r4: g.pf || 1
            }, y(), z(), A(), {random: +new Date}], e = d.length; b <
                 e; b++)for (var h in d[b])d[b].hasOwnProperty(h) && a.push(h + "=" + (d[b][h] || ""));
            c.params && a.push(c.params);
            var a = Ta.src = ("https:" == document.location.protocol ? "https://pingtas" : "http://pingtcss") + ".qq.com/pingd?" + a.join("&"), f = new Image;
            Ta[g.sid] = f;
            f.onload = f.onerror = f.onabort = function () {
                f = f.onload = f.onerror = f.onabort = null;
                Ta[g.sid] = !0
            };
            f.src = a;
            (1 * !g.pf || g.hot.isValid) && B(a);
            g.logo && 255 != g.logo && C(g.logo)
        }
    }

    function u(c, a) {
        var b = Ta.src.replace(/ext=[^&]*/, function () {
            return "ext=" + ("evtid" == a ? "ty=0;evtid=" :
                    "clickid" == a ? "ty=1;clickid=" : "adid=") + c
        }).replace(/r2=([^&]*)/, function (b, c) {
            return "r2=" + ("clickid" == a ? "b" : "a") + c
        });
        (new Image(1, 1)).src = b
    }

    function B(c) {
        var a = window.location, b = a.host + a.pathname, d = a.pathname, e = function () {
            s(("https:" == document.location.protocol ? "https://" : "http://") + "tajs.qq.com/ping_hotclick_min.js", function () {
                window.hotclick && (new hotclick(c)).watchClick()
            })
        };
        1 * g.pf ? (new RegExp(b)).test(g.hot.url) && e() : (a = g.sid, s("http://tcss.qq.com/heatmap/" + a % 100 + "/" + v(a) + ".js?random=" + +new Date,
            function () {
                var a;
                if (window._Cnf && (a = window._Cnf.url)) {
                    a = a.split("|");
                    for (var b = 0; b < a.length; b++)if (a[b] == d) {
                        e();
                        break
                    }
                }
            }))
    }

    function C(c) {
        var a = {
            9: "\u817e\u8baf\u5206\u6790",
            10: "\u7f51\u7ad9\u7edf\u8ba1",
            df: '<img src="' + (("https:" == document.location.protocol ? "https:" : "http:") + "//tajs.qq.com/icon/toss_" + c + ".gif") + '" border="0" />'
        };
        document.write(['<a href="http://ta.qq.com?ADTAG=FROUM.FOOTER.CLICK.ICON" title="\u817e\u8baf\u5206\u6790" target="_blank">', a[c] || a.df, "</a>"].join(""))
    }

    var k = {
        afs: {
            key: 1,
            id: "ssid", c_id: "pgv_afsid", fr: "hash"
        },
        afc: {key: 2, id: "__tacid", c_id: "pgv_afcid", fr: "param"},
        gdt: {key: 11, id: "qz_gdt", c_id: "pgv_gdtid", fr: "param"}
    };
    n.pgvSendClick = u;
    n.taClick = u;
    n.Ta = n.Ta || {};
    Ta.pgv = t;
    !Ta.async && t(Ta.hack ? Ta.hack() : "")
})({sid: "", pf: "", hot: {url: "", isValid: !1}}, this);

/**
 * 外部js文件 http://pingjs.qq.com/tcss.ping.js
 */
(function () {
    function tcss(e) {
        this.url = [], this.init(e)
    }

    function loadScript(e) {
        var t = document.createElement("script"), n = document.getElementsByTagName("script")[0];
        t.src = e, t.type = "text/javascript", t.async = !0, n.parentNode.insertBefore(t, n)
    }

    var _d, _l, _b, _n = "-", _params, _curDomain, _curUrl, _domainToSet, _refDomain, _refUrl, _image, _ext, _hurlcn, _tt, _ch = 0, _crossDomain = 0;
    _ver = "tcss.3.1.5", _speedTestUrl = "http://jsqmt.qq.com/cdn_djl.js", window.Tcss = {};
    var _pgvVersion = typeof tracert == "function" && typeof pgvGetColumn == "function" && typeof pgvGetTopic == "function" && typeof pgvGetDomainInfo == "function" && typeof pgvGetRefInfo == "function";
    if (typeof _rep == "undefined")var _rep = 1;
    tcss.prototype = {
        init: function (e) {
            e ? _params = e : _params = {}, _d = document;
            if (!_params.statIframe && window != top)try {
                _d = top.document
            } catch (t) {
            }
            typeof _d == "undefined" && (_d = document), _l = _d.location, _b = _d.body, _pgvVersion && (Tcss.d = _d, Tcss.l = _l), _ext = [], _hurlcn = [], _tt = []
        }, run: function () {
            var e, t, n;
            e = (new Date).getTime(), _cookie.init(), this.url.push(this.getDomainInfo()), this.coverCookie(), _cookie.setCookie("ssid"), _cookie.save(), this.url.unshift("http://pingfore." + this.getCookieSetDomain(_curDomain) + "/pingd?"), this.url.push(this.getRefInfo(_params));
            try {
                navigator.cookieEnabled ? this.url.push("&pvid=" + _cookie.setCookie("pgv_pvid", !0)) : this.url.push("&pvid=NoCookie")
            } catch (r) {
                this.url.push("&pvid=NoCookie")
            }
            this.url.push(this.getMainEnvInfo()), this.url.push(this.getExtendEnvInfo()), Tcss.pgUserType = "";
            if (_params.pgUserType || _params.reserved2) {
                var i = _params.pgUserType || _params.reserved2;
                i = escape(i.substring(0, 256)), Tcss.pgUserType = i, _tt.push("pu=" + Tcss.pgUserType)
            }
            _pgvVersion && (pgvGetColumn(), pgvGetTopic(), this.url.push("&column=" + Tcss.column + "&subject=" + Tcss.subject), tracert()), this.url.push("&vs=" + _ver), _cookie.setCookie("ts_uid", !0), t = (new Date).getTime(), _ext.push("tm=" + (t - e)), _ch && _ext.push("ch=" + _ch), _params.extParam ? n = _params.extParam + "|" : n = "", this.url.push("&ext=" + escape(n + _ext.join(";"))), this.url.push("&hurlcn=" + escape(_hurlcn.join(";"))), this.url.push("&rand=" + Math.round(Math.random() * 1e5)), typeof _speedMark == "undefined" ? this.url.push("&reserved1=-1") : this.url.push("&reserved1=" + (new Date - _speedMark));
            var s = this.getSud();
            s && _tt.push("su=" + escape(s.substring(0, 256))), this.url.push("&tt=" + escape(_tt.join(";"))), this.sendInfo(this.url.join(""));
            if (_crossDomain == 1) {
                var o = this.getParameter("tcss_rp_dm", _d.URL);
                if (o != Tcss.dm) {
                    var u = this.url.join("").replace(/\?dm=(.*?)\&/, "?dm=" + o + "&");
                    this.sendInfo(u)
                }
            }
            _params.hot && (document.attachEvent ? document.attachEvent("onclick", function (e) {
                pgvWatchClick(e)
            }) : document.addEventListener("click", function (e) {
                pgvWatchClick(e)
            }, !1)), _params.repeatApplay && _params.repeatApplay == "true" && typeof _rep != "undefined" && (_rep = 1)
        }, getSud: function () {
            if (_params.sessionUserType)return _params.sessionUserType;
            var e = _params.sudParamName || "sessionUserType", t = this.getParameter(e, _d.URL);
            return t
        }, coverCookie: function () {
            if (_params.crossDomain && _params.crossDomain == "on") {
                var e = this.getParameter("tcss_uid", _d.URL), t = this.getParameter("tcss_sid", _d.URL), n = this.getParameter("tcss_refer", _d.URL), r = this.getParameter("tcss_last", _d.URL);
                t && e && (_crossDomain = 1, _cookie.setCookie("ssid", !1, t), _cookie.save(), _cookie.setCookie("ts_refer", !0, n), _cookie.setCookie("ts_last", !0, r), _cookie.setCookie("pgv_pvid", !0, e))
            }
        }, getDomainInfo: function (e) {
            var t, n;
            return t = _l.hostname.toLowerCase(), _params.virtualDomain && (_hurlcn.push("ad=" + t), t = _params.virtualDomain), n = this.getCurrentUrl(), Tcss.dm = t, _pgvVersion && pgvGetDomainInfo(), _curDomain = Tcss.dm, _domainToSet || (_domainToSet = this.getCookieSetDomain(_l.hostname.toLowerCase()), _pgvVersion && (Tcss.domainToSet = _domainToSet)), e && (Tcss.dm += ".hot"), "dm=" + Tcss.dm + "&url=" + Tcss.url
        }, getCurrentUrl: function () {
            var e = "", t = _n;
            e = _curUrl = escape(_l.pathname), _l.search != "" && (t = escape(_l.search.substr(1)));
            if (_params.senseParam) {
                var n = this.getParameter(_params.senseParam, _d.URL);
                n && (e += "_" + n)
            }
            _params.virtualURL && (_hurlcn.push("au=" + e), e = _params.virtualURL), Tcss.url = e, Tcss.arg = t
        }, getRefInfo: function (e) {
            var t = _n, n = _n, r = _n, i = _d.referrer, s, o, u;
            s = e.tagParamName || "ADTAG", o = this.getParameter(s, _d.URL), u = i.indexOf("://");
            if (u > -1) {
                var a = /(\w+):\/\/([^\:|\/]+)(\:\d*)?(.*\/)([^#|\?|\n]+)?(#.*)?(\?.*)?/i, f = i.match(a);
                f && (t = f[2], n = f[4] + (f[5] ? f[5] : ""))
            }
            if (i.indexOf("?") != -1) {
                var u = i.indexOf("?") + 1;
                r = i.substr(u)
            }
            var l = t;
            _params.virtualRefDomain && (t != _n && _hurlcn.push("ard=" + t), t = _params.virtualRefDomain), _params.virtualRefURL && (n != _n && _hurlcn.push("aru=" + escape(n)), n = _params.virtualRefURL);
            var c;
            o && (c = t + n, t = "ADTAG", n = o), _refDomain = t, _refUrl = escape(n);
            if (_refDomain == _n || _refDomain == "ADTAG" && l == _n) {
                var h = _cookie.get("ts_last=", !0);
                h != _n && _ext.push("ls=" + h)
            }
            _cookie.setCookie("ts_last", !0, escape((_l.hostname + _l.pathname).substring(0, 128)));
            var p = _cookie.get("ts_refer=", !0);
            p != _n && _ext.push("rf=" + p);
            var d = _l.hostname;
            _params.inner && (d = "," + d + "," + _params.inner + ",");
            if (!(_refDomain == _n || ("," + d + ",").indexOf(_refDomain) > -1 || _crossDomain == 1)) {
                var v = escape((_refDomain + n).substring(0, 128));
                v != p && (_ch = 2), _cookie.setCookie("ts_refer", !0, v)
            }
            return Tcss.rdm = _refDomain, Tcss.rurl = _refUrl, Tcss.rarg = escape(r), _pgvVersion && pgvGetRefInfo(), c ? "&rdm=" + Tcss.rdm + "&rurl=" + Tcss.rurl + "&rarg=" + Tcss.rarg + "&or=" + c : "&rdm=" + Tcss.rdm + "&rurl=" + Tcss.rurl + "&rarg=" + Tcss.rarg
        }, getMainEnvInfo: function () {
            var e = "";
            try {
                var t = _n, n = _n, r = _n, i = _n, s = _n, o = 0, u = navigator;
                self.screen && (t = screen.width + "x" + screen.height, n = screen.colorDepth + "-bit"), u.language ? r = u.language.toLowerCase() : u.browserLanguage && (r = u.browserLanguage.toLowerCase()), o = u.javaEnabled() ? 1 : 0, i = u.platform, s = (new Date).getTimezoneOffset() / 60, e = "&scr=" + t + "&scl=" + n + "&lang=" + r + "&java=" + o + "&pf=" + i + "&tz=" + s
            } catch (a) {
            } finally {
                return e
            }
        }, getExtendEnvInfo: function () {
            var e = "";
            try {
                var t, n = _l.href, r = _n;
                e += "&flash=" + this.getFlashInfo(), _b.addBehavior && (_b.addBehavior("#default#homePage"), _b.isHomePage(n) && (e += "&hp=Y")), _b.addBehavior && (_b.addBehavior("#default#clientCaps"), r = _b.connectionType), e += "&ct=" + r
            } catch (i) {
            } finally {
                return e
            }
        }, getFlashInfo: function () {
            var f = _n, n = navigator;
            try {
                if (n.plugins && n.plugins.length) {
                    for (var i = 0; i < n.plugins.length; i++)if (n.plugins[i].name.indexOf("Shockwave Flash") > -1) {
                        f = n.plugins[i].description.split("Shockwave Flash ")[1];
                        break
                    }
                } else if (window.ActiveXObject)for (var i = 12; i >= 5; i--)try {
                    var fl = eval("new ActiveXObject('ShockwaveFlash.ShockwaveFlash." + i + "');");
                    if (fl) {
                        f = i + ".0";
                        break
                    }
                } catch (e) {
                }
            } catch (e) {
            }
            return f
        }, getParameter: function (e, t) {
            if (e && t) {
                var n = new RegExp("(\\?|#|&)" + e + "=([^&^#]*)(#|&|$)"), r = t.match(n);
                return r ? r[2] : ""
            }
            return ""
        }, getCookieSetDomain: function (e) {
            var t, n, r, i = [], s = 0;
            for (var o = 0; o < e.length; o++)e.charAt(o) == "." && (i[s] = o, s++);
            return t = i.length, n = e.indexOf(".cn"), n > -1 && t--, r = "qq.com", t == 1 ? r = e : t > 1 && (r = e.substring(i[t - 2] + 1)), r
        }, watchClick: function (e) {
            try {
                var t = !0, n = "", r;
                r = window.event ? window.event.srcElement : e.target;
                switch (r.tagName) {
                    case"A":
                        n = "<A href=" + r.href + ">" + r.innerHTML + "</a>";
                        break;
                    case"IMG":
                        n = "<IMG src=" + r.src + ">";
                        break;
                    case"INPUT":
                        n = "<INPUT type=" + r.type + " value=" + r.value + ">";
                        break;
                    case"BUTTON":
                        n = "<BUTTON>" + r.innerText + "</BUTTON>";
                        break;
                    case"SELECT":
                        n = "SELECT";
                        break;
                    default:
                        t = !1
                }
                if (t) {
                    var i = new tcss(_params), s = i.getElementPos(r);
                    if (_params.coordinateId) {
                        var o = i.getElementPos(document.getElementById(_params.coordinateId));
                        s.x -= o.x
                    }
                    i.url.push(i.getDomainInfo(!0)), i.url.push("&hottag=" + escape(n)), i.url.push("&hotx=" + s.x), i.url.push("&hoty=" + s.y), i.url.push("&rand=" + Math.round(Math.random() * 1e5)), i.url.unshift("http://pinghot." + this.getCookieSetDomain(_curDomain) + "/pingd?"), i.sendInfo(i.url.join(""))
                }
            } catch (u) {
            }
        }, getElementPos: function (e) {
            if (e.parentNode === null || e.style.display == "none")return !1;
            var t = navigator.userAgent.toLowerCase(), n = null, r = [], i;
            if (e.getBoundingClientRect) {
                var s, o, u, a;
                return i = e.getBoundingClientRect(), s = Math.max(document.documentElement.scrollTop, document.body.scrollTop), o = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft), u = document.body.clientTop, a = document.body.clientLeft, {
                    x: i.left + o - a,
                    y: i.top + s - u
                }
            }
            if (document.getBoxObjectFor) {
                i = document.getBoxObjectFor(e);
                var f = e.style.borderLeftWidth ? Math.floor(e.style.borderLeftWidth) : 0, l = e.style.borderTopWidth ? Math.floor(e.style.borderTopWidth) : 0;
                r = [i.x - f, i.y - l]
            } else {
                r = [e.offsetLeft, e.offsetTop], n = e.offsetParent;
                if (n != e)while (n)r[0] += n.offsetLeft, r[1] += n.offsetTop, n = n.offsetParent;
                if (t.indexOf("opera") > -1 || t.indexOf("safari") > -1 && e.style.position == "absolute")r[0] -= document.body.offsetLeft, r[1] -= document.body.offsetTop
            }
            e.parentNode ? n = e.parentNode : n = null;
            while (n && n.tagName != "BODY" && n.tagName != "HTML")r[0] -= n.scrollLeft, r[1] -= n.scrollTop, n.parentNode ? n = n.parentNode : n = null;
            return {x: r[0], y: r[1]}
        }, sendClick: function () {
            _params.hottag && (this.url.push(this.getDomainInfo(!0)), this.url.push("&hottag=" + escape(_params.hottag)), this.url.push("&hotx=9999&hoty=9999"), this.url.push("&rand=" + Math.round(Math.random() * 1e5)), this.url.unshift("http://pinghot." + this.getCookieSetDomain(_curDomain) + "/pingd?"), this.sendInfo(this.url.join("")))
        }, pgvGetArgs: function () {
            this.getDomainInfo();
            var e = [];
            return e.push("tcss_rp_dm=" + Tcss.dm), e.push("tcss_uid=" + _cookie.get("pgv_pvid=", !0)), e.push("tcss_sid=" + _cookie.get("ssid=", !0)), e.push("tcss_refer=" + _cookie.get("ts_refer=", !0)), e.push("tcss_last=" + _cookie.get("ts_last=", !0)), e.join("&")
        }, sendInfo: function (e) {
            _image = new Image(1, 1), Tcss.img = _image, _image.onload = _image.onerror = _image.onabort = function () {
                _image.onload = _image.onerror = _image.onabort = null, Tcss.img = null
            }, _image.src = e
        }
    };
    var _cookie = {
        sck: [], sco: {}, init: function () {
            var e = this.get("pgv_info=", !0);
            if (e != _n) {
                var t = e.split("&");
                for (var n = 0; n < t.length; n++) {
                    var r = t[n].split("=");
                    this.set(r[0], unescape(r[1]))
                }
            }
        }, get: function (e, t) {
            var n = t ? _d.cookie : this.get("pgv_info=", !0), r = _n, i, s;
            i = n.indexOf(e);
            if (i > -1) {
                i += e.length, s = n.indexOf(";", i), s == -1 && (s = n.length);
                if (!t) {
                    var o = n.indexOf("&", i);
                    o > -1 && (s = Math.min(s, o))
                }
                r = n.substring(i, s)
            }
            return r
        }, set: function (e, t) {
            this.sco[e] = t;
            var n = !1, r = this.sck.length;
            for (var i = 0; i < r; i++)if (e == this.sck[i]) {
                n = !0;
                break
            }
            n || this.sck.push(e)
        }, setCookie: function (e, t, n) {
            var r = _l.hostname, i = _cookie.get(e + "=", t);
            if (i == _n && !n) {
                switch (e) {
                    case"ts_uid":
                        _ext.push("nw=1");
                        break;
                    case"ssid":
                        _ch = 1
                }
                t ? i = "" : i = "s";
                var s = (new Date).getUTCMilliseconds();
                i += Math.round(Math.abs(Math.random() - 1) * 2147483647) * s % 1e10
            } else i = n ? n : i;
            if (t)switch (e) {
                case"ts_uid":
                    this.saveCookie(e + "=" + i, r, this.getExpires(1051200));
                    break;
                case"ts_refer":
                    this.saveCookie(e + "=" + i, r, this.getExpires(259200));
                    break;
                case"ts_last":
                    this.saveCookie(e + "=" + i, r, this.getExpires(30));
                    break;
                default:
                    this.saveCookie(e + "=" + i, _domainToSet, "expires=Sun, 18 Jan 2038 00:00:00 GMT;")
            } else this.set(e, i);
            return i
        }, getExpires: function (e) {
            var t = new Date;
            return t.setTime(t.getTime() + e * 60 * 1e3), "expires=" + t.toGMTString()
        }, save: function () {
            if (_params.sessionSpan) {
                var e = new Date;
                e.setTime(e.getTime() + _params.sessionSpan * 60 * 1e3)
            }
            var t = "", n = this.sck.length;
            for (var r = 0; r < n; r++)t += this.sck[r] + "=" + this.sco[this.sck[r]] + "&";
            t = "pgv_info=" + t.substr(0, t.length - 1);
            var i = "";
            e && (i = "expires=" + e.toGMTString()), this.saveCookie(t, _domainToSet, i)
        }, saveCookie: function (e, t, n) {
            _d.cookie = e + ";path=/;domain=" + t + ";" + n
        }
    };
    window.pgvMain = function (e, t) {
        var n = "";
        t ? (n = t, _ver = "tcsso.3.1.5") : (n = e, _ver = "tcss.3.1.5");
        try {
            _pgvVersion && (typeof pvRepeatCount != "undefined" && pvRepeatCount == 1 ? (_rep = 1, pvRepeatCount = 2) : _rep = 2);
            if (_rep != 1)return;
            _rep = 2, (new tcss(n)).run()
        } catch (r) {
        }
    }, window.pgvSendClick = function (e) {
        (new tcss(e)).sendClick()
    }, window.pgvWatchClick = function (e) {
        (new tcss(e)).watchClick(e)
    }, window.pgvGetArgs = function (e) {
        return (new tcss(e)).pgvGetArgs()
    }, loadScript(_speedTestUrl)
})()
//点击流统计
if (typeof(pgvMain) == 'function') {
    pgvMain({statIframe: true, repeatApplay: "true"});
}

//logout js
var pt_logout = {
    ret: 0,
    appDomain: "",
    mainDomain: "",
    httpWhiteDomain: {
        "qq.com": 1,
        "soso.com": 1,
        "paipai.com": 1,
        "tenpay.com": 1,
        "taotao.com": 1,
        "tencent.com": 1,
        "oa.com": 1,
        "webdev.com": 1,
        "3366.com": 1,
        "imqq.com": 1,
        "pengyou.com": 1,
        "qplus.com": 1,
        "qzone.com": 1,
        "server.com": 1,
        "kuyoo.cn": 1,
        "weiyun.com": 1,
        "wechatapp.com": 1,
        "51buy.com": 1,
        "yixun.com": 1,
        "qcloud.com": 1,
        "wechat.com": 1,
        "weishi.com": 1
    },
    getCookie: function (b) {
        var a = document.cookie.match(new RegExp("(^| )" + b + "=([^;]*)(;|$)"));
        return !a ? "" : decodeURIComponent(a[2])
    },
    delCookie: function (a, b, c) {
        document.cookie = a + "=; expires=Mon, 26 Jul 1997 05:00:00 GMT; path=" + (c ? c : "/") + "; " + (b ? ("domain=" + b + ";") : "")
    },
    jsonp: function (b) {
        var a = document.createElement("script");
        a.setAttribute("src", b);
        document.getElementsByTagName("head")[0].appendChild(a);
        a.onerror = function () {
            a.onerror = null;
            pt_logout.set_ret(0, "")
        }
    },
    nlog: function (h, d, g) {
        if (Math.random() <= (g || 1)) {
            var a = "http://badjs.qq.com/cgi-bin/js_report?";
            if (location.protocol == "https:") {
                a = "https://ssl.qq.com//badjs/cgi-bin/js_report?"
            }
            var e = location.href;
            var f = encodeURIComponent(h + "|_|" + e + "|_|" + window.navigator.userAgent);
            var c = a + "bid=110&level=2&mid=" + d + "&msg=" + f + "&v=" + Math.random();
            var b = new Image();
            b.src = c
        }
    },
    init: function () {
        var a = location.hostname.match(/\w*\.(com|cn)$/);
        pt_logout.mainDomain = a ? a[0] : "";
        if (!pt_logout.httpWhiteDomain[pt_logout.mainDomain]) {
            pt_logout.nlog("公司外部域名引用logout", "350448")
        }
        var b = location.hostname.match(/\w+(\.\w+){2}$/);
        pt_logout.appDomain = b ? b[0] : "";
        if (pt_logout.mainDomain != "qq.com") {
            pt_logout.appDomain = pt_logout.mainDomain
        }
        pt_logout.nlog("logout pv", "365716", 0.05)
    },
    getLogoutUrl: function () {
        var f = pt_logout.getCookie("pt4_token");
        var a = pt_logout.getCookie("skey");
        var c = pt_logout.time33(a);
        var b = pt_logout.getCookie("ptcz");
        var e = pt_logout.hash33(b);
        var d = "";
        d = ((location.protocol == "https:") ? "https://ssl." : "http://") + "ptlogin2." + pt_logout.mainDomain + "/logout?";
        d += ("pt4_token=" + f + "&pt4_hkey=" + c + "&pt4_ptcz=" + e + "&deep_logout=1");
        return d
    },
    time33: function (d) {
        var c = 0;
        for (var a = 0, b = d.length; a < b; a++) {
            c = c * 33 + d.charCodeAt(a)
        }
        return c % 4294967296
    },
    hash33: function (d) {
        var c = 0;
        for (var a = 0, b = d.length; a < b; ++a) {
            c += (c << 5) + d.charCodeAt(a)
        }
        return c & 2147483647
    },
    clearCookie: function (a) {
        a = a || pt_logout.appDomain;
        pt_logout.delCookie("p_uin", a);
        pt_logout.delCookie("p_skey", a);
        pt_logout.delCookie("p_luin", a);
        pt_logout.delCookie("p_lskey", a);
        pt_logout.delCookie("pt4_token", a);
        pt_logout.delCookie("pt_mbkey", pt_logout.mainDomain || "qq.com");
        if (pt_logout.appDomain != "" && pt_logout.getCookie("skey_m") != "") {
            pt_logout.delCookie("uin_m", pt_logout.appDomain);
            pt_logout.delCookie("skey_m", pt_logout.appDomain)
        }
    },
    set_ret: function (d, b) {
        try {
            var a = pt_logout.getCookie("pt4_token");
            pt_logout.clearCookie(b);
            if (d > 0) {
            } else {
                pt_logout.delCookie("uin", pt_logout.mainDomain);
                pt_logout.delCookie("skey", pt_logout.mainDomain);
                pt_logout.nlog("logout fail", "285851", 0.1)
            }
            if (typeof pt_logout.callback == "function") {
                pt_logout.callback(2)
            }
            if (b != "" && b != pt_logout.appDomain) {
                pt_logout.nlog("domain unsame:n=" + d + ":pt4_token=" + a + ":cgi_domain=" + b + ":js_domain=" + pt_logout.appDomain, "285852", 0.1)
            }
        } catch (c) {
            return
        }
    },
    logout: function (e) {
        pt_logout.init();
        var d = pt_logout.getCookie("pt4_token");
        var a = pt_logout.getCookie("skey");
        var b = pt_logout.getCookie("ptcz");
        if (typeof e == "function") {
            pt_logout.callback = e
        }
        var c = pt_logout.getLogoutUrl();
        if (!d && !a && !b) {
            if (typeof e == "function") {
                e(2)
            }
            pt_logout.nlog("logout without cookie", 365715)
        } else {
            pt_logout.jsonp(c)
        }
    }
};