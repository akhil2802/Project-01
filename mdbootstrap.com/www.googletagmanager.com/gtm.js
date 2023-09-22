// Copyright 2012 Google Inc. All rights reserved.

(function(w, g) {
    w[g] = w[g] || {};
    w[g].e = function(s) {
        return eval(s);
    };
})(window, 'google_tag_manager');

(function() {

    var data = {
        "resource": {
            "version": "925",

            "macros": [{
                "function": "__e"
            }, {
                "function": "__c",
                "vtp_value": "UA-60512242-3"
            }, {
                "function": "__v",
                "vtp_name": "gtm.triggers",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ""
            }, {
                "function": "__gas",
                "vtp_cookieDomain": "auto",
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_useDebugVersion": false,
                "vtp_useHashAutoLink": false,
                "vtp_decorateFormsAutoLink": false,
                "vtp_enableLinkId": false,
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 1],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableGA4Schema": true
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoStatus",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoPercent",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 4], 8, 16], ";switch(a){case \"start\":return\"Play\";case \"pause\":return\"Pause\";case \"seek\":return\"Seeking\";case \"progress\":return+", ["escape", ["macro", 5], 8, 16], "+\"% Watched\";case \"complete\":return\"100% Watched\"}})();"]
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoTitle",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.scrollThreshold",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__u",
                "vtp_component": "PATH",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=window.innerWidth;return a=992\u003E=a?\"mobile\":\"desktop\"})();"]
            }, {
                "function": "__k",
                "vtp_decodeCookie": false,
                "vtp_name": "gdpr_fbp"
            }, {
                "function": "__k",
                "vtp_decodeCookie": false,
                "vtp_name": "gdpr_ga"
            }, {
                "function": "__u",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementId",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementUrl",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 14],
                "vtp_fullMatch": true,
                "vtp_replaceAfterMatch": true,
                "vtp_defaultValue": "Download Direct",
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", ".*directDownload.*", "value", "Download Direct"],
                    ["map", "key", ".*gitDownload.*", "value", "Download Github"],
                    ["map", "key", ".*snippet-button-save.*", "value", "Download Snippet"]
                ]
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 9],
                "vtp_fullMatch": true,
                "vtp_replaceAfterMatch": true,
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", ".*getting-started.*", "value", "MDB Free"],
                    ["map", "key", ".*freebies.*", "value", "Freebie"],
                    ["map", "key", ".*snippets.*", "value", "MDB Free"],
                    ["map", "key", ".*boilerplate.*", "value", "Boilerplate Free"]
                ]
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 9],
                "vtp_fullMatch": true,
                "vtp_replaceAfterMatch": true,
                "vtp_defaultValue": "Standard",
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", ".*jquery.*", "value", "jQuery"],
                    ["map", "key", ".*angular.*", "value", "Angular"],
                    ["map", "key", ".*react.*", "value", "React"],
                    ["map", "key", ".*vue.*", "value", "Vue"],
                    ["map", "key", ".*standard.*", "value", "Standard"]
                ]
            }, {
                "function": "__v",
                "vtp_name": "gtm.element",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 19], 8, 16], ";return a=a.closest(\".modal\").id})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){classNames=\"\";for(el=", ["escape", ["macro", 19], 8, 16], ";!classNames.includes(\"mdb-skin-custom\");)classNames+=el.className+\" \",el=el.parentElement;return classNames})();"]
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 21],
                "vtp_fullMatch": true,
                "vtp_replaceAfterMatch": true,
                "vtp_defaultValue": "",
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", ".*navbar.*", "value", "Navigation"],
                    ["map", "key", ".*page-footer.*", "value", "Navigation"],
                    ["map", "key", ".*side-nav.*", "value", "Navigation"],
                    ["map", "key", ".*menu-item.*", "value", "Navigation"],
                    ["map", "key", ".*switch-to.*", "value", "Navigation"],
                    ["map", "key", ".*logo-sn.*ps--theme_default", "value", "Navigation"],
                    ["map", "key", ".*smooth-scroll.*", "value", "Navigation"]
                ]
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 21],
                "vtp_fullMatch": true,
                "vtp_replaceAfterMatch": true,
                "vtp_ignoreCase": true,
                "vtp_defaultValue": ["template", ["macro", 22], " Click"],
                "vtp_map": ["list", ["map", "key", ".*mask.*", "value", ["template", ["macro", 22], " Image click"]],
                    ["map", "key", ".*img-fluid.*", "value", ["template", ["macro", 22], " Image click"]],
                    ["map", "key", ".*btn.*", "value", ["template", ["macro", 22], " Button click"]],
                    ["map", "key", ".*custom-select.*", "value", ["template", ["macro", 22], " Select click"]],
                    ["map", "key", ".*switch-to.*", "value", ["template", ["macro", 22], " Switch click"]],
                    ["map", "key", ".*close.*", "value", ["template", ["macro", 22], " Button click"]],
                    ["map", "key", ".*dropdown-toggle.*", "value", ["template", ["macro", 22], " Dropdown Toggle click"]],
                    ["map", "key", ".*dropdown-item.*", "value", ["template", ["macro", 22], " Dropdown Item click"]]
                ]
            }, {
                "function": "__aev",
                "vtp_setDefaultValue": false,
                "vtp_varType": "ATTRIBUTE",
                "vtp_attribute": "data-dismiss"
            }, {
                "function": "__aev",
                "vtp_varType": "TEXT"
            }, {
                "function": "__aev",
                "vtp_setDefaultValue": false,
                "vtp_varType": "ATTRIBUTE",
                "vtp_attribute": "alt"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){element=", ["escape", ["macro", 19], 8, 16], ";imgType=element.previousElementSibling.tagName;return\"PICTURE\"==imgType?pictureAlt=element.previousElementSibling.getElementsByTagName(\"img\")[0].alt:imgAlt=element.previousElementSibling.alt})();"]
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 21],
                "vtp_fullMatch": true,
                "vtp_replaceAfterMatch": true,
                "vtp_defaultValue": ["macro", 26],
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", ".*view.*", "value", ["macro", 27]]]
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 25],
                "vtp_fullMatch": true,
                "vtp_replaceAfterMatch": true,
                "vtp_defaultValue": ["macro", 25],
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", "\\s", "value", ["macro", 28]],
                    ["map", "key", "undefined", "value", ["macro", 28]]
                ]
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 24],
                "vtp_fullMatch": true,
                "vtp_replaceAfterMatch": true,
                "vtp_defaultValue": ["macro", 29],
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", "modal", "value", "x"]]
            }, {
                "function": "__u",
                "vtp_component": "URL",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__k",
                "vtp_decodeCookie": false,
                "vtp_name": "firstCampaign"
            }, {
                "function": "__k",
                "vtp_decodeCookie": false,
                "vtp_name": "lastCampaign"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){if(null!=document.querySelector(\"[id^\\x3ddpl-gtm-]\")){classNames=idNames=\"\";for(el=", ["escape", ["macro", 19], 8, 16], ";!classNames.includes(\"mdb-skin-custom\");)idNames+=el.id+\" \",classNames+=el.className+\" \",el=el.parentElement;return idArray=idNames.split(\/(\\s+)\/)}})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 9], 8, 16], ";return\"\"===a.split(\"\/\")[1]?\"\/\":a.split(\"\/\")[1]})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){if(null!=document.querySelector(\"[id^\\x3ddpl-gtm-]\")){classNames=idNames=\"\";for(el=", ["escape", ["macro", 19], 8, 16], ";!classNames.includes(\"mdb-skin-custom\");)idNames+=el.id+\" \",classNames+=el.className+\" \",el=el.parentElement;idArray=idNames.split(\/(\\s+)\/);return idArray[2]}})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=document.querySelector(\"[id^\\x3d'gtmDC-frontpage']\"),b=document.querySelector(\"[id^\\x3d'gtmDC-scroll']\");if(null!=a)return a.firstElementChild.id;if(null!=b)return b.firstElementChild.id})();"]
            }, {
                "function": "__c",
                "vtp_value": "OFF"
            }, {
                "function": "__k",
                "vtp_decodeCookie": false,
                "vtp_name": "skippedDCFrontpage"
            }, {
                "function": "__k",
                "vtp_decodeCookie": false,
                "vtp_name": "pageviewCount"
            }, {
                "function": "__k",
                "vtp_decodeCookie": false,
                "vtp_name": "firstSeen"
            }, {
                "function": "__k",
                "vtp_decodeCookie": false,
                "vtp_name": "firstDownload"
            }, {
                "function": "__k",
                "vtp_decodeCookie": false,
                "vtp_name": "firstConversion"
            }, {
                "function": "__u",
                "vtp_component": "QUERY",
                "vtp_queryKey": "utm_campaign",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__k",
                "vtp_decodeCookie": false,
                "vtp_name": "firstClickedToMdbgoAfterSale"
            }, {
                "function": "__k",
                "vtp_decodeCookie": false,
                "vtp_name": "saleTailoredHoursLeft"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var f=function(c,d,a){a*=864E5;var b=new Date,e=b.getTime();b.setTime(e+a);a=b.toUTCString();document.cookie=c+\"\\x3d\"+d+\"; expires\\x3d\"+a+\"; path\\x3d\/;\"};return f})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var f=function(c){for(var d=document.cookie.split(\";\"),e,a=0;a\u003Cd.length;a++){var b=d[a].trim();0===b.indexOf(c+\"\\x3d\")\u0026\u0026(e=b.substring((c+\"\\x3d\").length,b.length))}return e};return f})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var e=function(b){var a=document.createElement(\"div\");a.id=b.ID;a.classList=\"modal fade\";a.setAttribute(\"aria-labelledby\",b.ID+\"Label\");a.setAttribute(\"aria-hidden\",\"true\");a.setAttribute(\"tabindex\",\"-1\");a.setAttribute(\"data-mdb-backdrop\",b.BACKDROP);a.setAttribute(\"data-mdb-modal-non-invasive\",b.NONINVASIVE);a.innerHTML=b.CONTENT;a=new mdb.Modal(a);var d=b.ID.charAt(0).toUpperCase()+b.ID.slice(1);d=\"seen\"+d;var c=", ["escape", ["macro", 48], 8, 16], "(d);\"undefined\"===typeof c?(c=1,a.toggle()):c\u003Cb.MAXVIEWS\u0026\u0026\n(c++,a.toggle());document.cookie=d+\"\\x3d\"+c+\"; path\\x3d\/; expires\\x3dMon, 18 Jan 2038 03:14:07;\"};return e})();"]
            }, {
                "function": "__k",
                "vtp_decodeCookie": false,
                "vtp_name": "firstSeenInstallation"
            }, {
                "function": "__k",
                "vtp_decodeCookie": false,
                "vtp_name": "firstNewsletterConfirm"
            }, {
                "function": "__k",
                "vtp_decodeCookie": false,
                "vtp_name": "firstSeenPricing"
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 9],
                "vtp_fullMatch": true,
                "vtp_replaceAfterMatch": true,
                "vtp_defaultValue": "https:\/\/mdbootstrap.com\/docs\/standard\/getting-started\/installation\/",
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", ".*jquery.*", "value", "https:\/\/mdbootstrap.com\/docs\/standard\/getting-started\/installation\/"],
                    ["map", "key", ".*angular.*", "value", "https:\/\/mdbootstrap.com\/docs\/angular\/getting-started\/installation\/"],
                    ["map", "key", ".*react.*", "value", "https:\/\/mdbootstrap.com\/docs\/react\/getting-started\/installation\/"],
                    ["map", "key", ".*vue.*", "value", "https:\/\/mdbootstrap.com\/docs\/vue\/getting-started\/installation\/"],
                    ["map", "key", ".*standard.*", "value", "https:\/\/mdbootstrap.com\/docs\/standard\/getting-started\/installation\/"]
                ]
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 9],
                "vtp_fullMatch": true,
                "vtp_replaceAfterMatch": true,
                "vtp_defaultValue": "243.16px",
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", "\\\/support\\\/.*", "value", "177px"],
                    ["map", "key", "\\\/blog\\\/.*", "value", "176px"],
                    ["map", "key", "\\\/snippets\\\/.*", "value", "176px"],
                    ["map", "key", "\\\/user\\\/.*", "value", "176px"],
                    ["map", "key", "\\\/articles\\\/.*", "value", "176px"],
                    ["map", "key", "\\\/learn\\\/.*", "value", "190px"]
                ]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var l=function(a){var d=document.querySelector(\"[id^\\x3dgtmDC-scroll]\"),e=document.createElement(\"a\");e.id=a.ID;e.href=a.HREF;-1===a.HREF.indexOf(\"mdbootstrap.com\")\u0026\u0026e.setAttribute(\"target\",\"_blank\");var b=document.createElement(\"div\");b.style.borderColor=a.COLOR;b.style.height=\"", ["escape", ["macro", 54], 7], "\";b.style.borderRadius=\"0.5em\";b.style.border=\"1px solid \"+a.COLOR;b.style.backgroundColor=\"#FBFBFB\";b.classList=\"px-3 alert alert-light bg-white white overflow-hidden d-flex align-items-center justify-content-center ripple mb-0\";\nvar g=document.createElement(\"div\"),k=document.createElement(\"p\");k.innerHTML=a.TEXT;var c=document.createElement(\"span\");c.role=\"button\";c.classList=\"btn btn-sm btn-block\";c.style.boxShadow=\"none\";c.style.color=a.COLOR;c.innerHTML=a.CTA;var f=a.COLOR.match(\/\\d+\/g),h=f[0];f=\"hsl(\"+(h-1)+\", 56%, 93%)\";h=\"hsl(\"+h+\", 57%, 36%)\";c.style.backgroundColor=f;c.style.color=h;e.appendChild(b);b.appendChild(g);void 0!==a.COUNTER\u0026\u0026(b=document.createElement(\"p\"),b.classList=\"text-center fw-bold font-weight-bold mb-2\",\nb.style.color=a.COLOR,b.style.fontSize=\"1.1rem\",f=a.COUNTER[1],b.id=f,a=a.COUNTER[0],a(),g.appendChild(b));g.appendChild(k);g.appendChild(c);null!=d\u0026\u0026d.appendChild(e);null!=d\u0026\u0026(d.firstChild.style.transition=\"opacity 500ms ease-in\",d.firstChild.style.opacity=0,setTimeout(function(){d.firstChild.style.opacity=1},10))};return l})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var m=function(b){var h=document.createElement(\"a\");h.id=b.ID;h.href=b.HREF;var c=document.createElement(\"div\");c.style.backgroundColor=b.COLOR;c.classList=\"alert rounded-0 border-0 text-center\";var k=document.createElement(\"div\"),f=document.createElement(\"p\");f.innerHTML=b.TEXT;f.classList=\"mb-0 mt-2 text-light\";var d=document.createElement(\"span\");d.role=\"button\";d.classList=\"btn btn-rounded btn-pill btn-sm ms-2\";d.style.boxShadow=\"none\";d.style.color=b.COLOR;d.innerHTML=b.CTA;var a=\nb.COLOR.match(\/\\d+\/g),e=a[0];a=\"hsl(\"+(e-1)+\", 56%, 93%)\";e=\"hsl(\"+e+\", 57%, 36%)\";d.style.backgroundColor=a;d.style.color=e;a=document.createElement(\"button\");a.id=\"btn-close-dc\";a.type=\"button\";a.ariaLabel=\"Close\";a.classList=\"btn-close float-end p-3 btn-close-white\";a.style.position=\"relative\";a.style.zIndex=\"20\";a.style.top=\"-74px\";a.style.right=\"10px\";a.addEventListener(\"click\",function(){var g=document.querySelector('[id^\\x3d\"gtmDC-frontpage\"]'),l=g.firstElementChild;l.classList.add(\"animation\");\nl.classList.add(\"fade-out\");g=g.lastElementChild;g.classList.add(\"animation\");g.classList.add(\"fade-out\");", ["escape", ["macro", 47], 8, 16], "(\"skippedDCFrontpage\",!0,2)});h.appendChild(c);c.appendChild(k);void 0!==b.COUNTER\u0026\u0026(c=document.createElement(\"span\"),c.classList=\"text-center fw-bold font-weight-bold me-2 text-light border-end pe-2\",c.style.fontSize=\"1.1rem\",e=b.COUNTER[1],c.id=e,b=b.COUNTER[0],b(),f.prepend(c));k.appendChild(f);f.appendChild(d);null!=document.querySelector(\"[id^\\x3dgtmDC-frontpage-]\")\u0026\u0026\n(document.querySelector(\"[id^\\x3dgtmDC-frontpage-]\").appendChild(h),document.querySelector(\"[id^\\x3dgtmDC-frontpage-]\").appendChild(a));null!=document.querySelector(\"[id^\\x3dgtmDC-frontpage-]\")\u0026\u0026(document.querySelector(\"[id^\\x3dgtmDC-frontpage-]\").firstChild.style.transition=\"opacity 500ms ease-in\",document.querySelector(\"[id^\\x3dgtmDC-frontpage-]\").firstChild.style.opacity=0,setTimeout(function(){document.querySelector(\"[id^\\x3dgtmDC-frontpage-]\").firstChild.style.opacity=1},10))};return m})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=document.getElementById(\"wmd-form-editor_question\");return a.value||\"\"})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=document.getElementById(\"wmd-form-editor_title\");return a.value||\"\"})();"]
            }, {
                "function": "__k",
                "vtp_decodeCookie": false,
                "vtp_name": "seenExitIntentCheckoutNew"
            }, {
                "function": "__k",
                "vtp_decodeCookie": false,
                "vtp_name": "seenVuejsDiscountModal"
            }, {
                "function": "__k",
                "vtp_decodeCookie": false,
                "vtp_name": "seenCodingYaarDiscountModal"
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 9],
                "vtp_fullMatch": true,
                "vtp_replaceAfterMatch": true,
                "vtp_defaultValue": "https:\/\/mdbootstrap.com\/docs\/standard\/pro\/",
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", ".*jquery.*", "value", "https:\/\/mdbootstrap.com\/docs\/standard\/pro\/"],
                    ["map", "key", ".*angular.*", "value", "https:\/\/mdbootstrap.com\/docs\/b5\/angular\/pro\/"],
                    ["map", "key", ".*react.*", "value", "https:\/\/mdbootstrap.com\/docs\/b5\/react\/pro\/"],
                    ["map", "key", ".*vue.*", "value", "https:\/\/mdbootstrap.com\/docs\/vue\/pro\/"],
                    ["map", "key", ".*standard.*", "value", "https:\/\/mdbootstrap.com\/docs\/standard\/pro\/"]
                ]
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 9],
                "vtp_fullMatch": true,
                "vtp_replaceAfterMatch": true,
                "vtp_defaultValue": "https:\/\/mdbootstrap.com\/sale\/tailored\/standard\/",
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", ".+\\\/standard\\\/.+", "value", "https:\/\/mdbootstrap.com\/sale\/tailored\/standard\/"],
                    ["map", "key", ".+\\\/angular\\\/.+", "value", "https:\/\/mdbootstrap.com\/sale\/tailored\/angular\/"],
                    ["map", "key", ".+\\\/react\\\/.+", "value", "https:\/\/mdbootstrap.com\/sale\/tailored\/react\/"],
                    ["map", "key", ".+\\\/vue\\\/.+", "value", "https:\/\/mdbootstrap.com\/sale\/tailored\/vue\/"]
                ]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var d=function(a,b){var c=864E5;return new Date(parseInt(a)+b*c)};return d})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var m=function(d,e,f){var l=setInterval(function(){var a=(new Date).getTime();a=d-a;var b=Math.floor(a\/864E5),g=Math.floor(a%864E5\/36E5),h=Math.floor(a%36E5\/6E4),k=Math.floor(a%6E4\/1E3),c=document.getElementById(e);null!==c\u0026\u0026(c.innerHTML=b+\"d \"+g+\"h \"+h+\"m \"+k+\"s\");0\u003Ea\u0026\u0026(clearInterval(l),c.remove(),b=\"", ["escape", ["macro", 9], 7], "\",null!=document.getElementById(\"dpl-gtm-scroll\")?document.getElementById(\"dpl-gtm-scroll\").remove():null!=document.getElementById(\"dpl-gtm-frontpage\")?document.getElementById(\"dpl-gtm-frontpage\").remove():\nb.includes(\"\/sale\/\")\u0026\u0026(window.location.pathname=\"\/pro\/\"));a\/=36E5;", ["escape", ["macro", 47], 8, 16], "(f,a,365)},1E3)};return m})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var b=", ["escape", ["macro", 64], 8, 16], "(", ["escape", ["macro", 52], 8, 16], ",3),a=\"time-counter-sale\",c=\"saleTailoredHoursLeft\",d=function(){", ["escape", ["macro", 65], 8, 16], "(b,a,c)};return[d,a]})();"]
            }, {
                "function": "__k",
                "vtp_decodeCookie": false,
                "vtp_name": "mdbGoTrialSaleHoursLeft"
            }, {
                "function": "__k",
                "vtp_decodeCookie": false,
                "vtp_name": "MDBGoSubscriptionTier"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var b=", ["escape", ["macro", 64], 8, 16], "(", ["escape", ["macro", 45], 8, 16], ",3),a=\"mdbgo-counter-sale\",c=\"mdbGoTrialSaleHoursLeft\",d=function(){", ["escape", ["macro", 65], 8, 16], "(b,a,c)};return[d,a]})();"]
            }, {
                "function": "__k",
                "vtp_decodeCookie": false,
                "vtp_name": "firstPurchase"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=new Date,b=", ["escape", ["macro", 70], 8, 16], ";return a=Math.floor((a.getTime()-b)\/864E5)})();"]
            }, {
                "function": "__k",
                "vtp_decodeCookie": false,
                "vtp_name": "saleUpgradeHoursLeft"
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 9],
                "vtp_fullMatch": true,
                "vtp_replaceAfterMatch": true,
                "vtp_ignoreCase": true,
                "vtp_defaultValue": "https:\/\/mdbootstrap.com\/sale\/upgrade\/standard\/single-use\/",
                "vtp_map": ["list", ["map", "key", ".+\\\/standard\\\/.+", "value", "https:\/\/mdbootstrap.com\/sale\/upgrade\/standard\/single-use\/"],
                    ["map", "key", ".+\\\/jquery\\\/.+", "value", "https:\/\/mdbootstrap.com\/sale\/upgrade\/standard\/single-use\/"],
                    ["map", "key", ".+\\\/angular\\\/.+", "value", "https:\/\/mdbootstrap.com\/sale\/upgrade\/angular\/single-use\/"],
                    ["map", "key", ".+\\\/react\\\/.+", "value", "https:\/\/mdbootstrap.com\/sale\/upgrade\/react\/single-use\/"],
                    ["map", "key", ".+\\\/vue\\\/.+", "value", "https:\/\/mdbootstrap.com\/sale\/upgrade\/vue\/single-use\/"]
                ]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var b=", ["escape", ["macro", 64], 8, 16], "(", ["escape", ["macro", 70], 8, 16], ",30),a=\"time-counter-upgrade-1\",c=\"saleUpgradeHoursLeft\",d=function(){", ["escape", ["macro", 65], 8, 16], "(b,a,c)};return[d,a]})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var c=function(a){var b=Math.floor(Math.random()*a.length);return a[b]};return c})();"]
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 9],
                "vtp_fullMatch": true,
                "vtp_replaceAfterMatch": true,
                "vtp_ignoreCase": true,
                "vtp_defaultValue": "https:\/\/mdbootstrap.com\/sale\/upgrade\/standard\/essential\/",
                "vtp_map": ["list", ["map", "key", ".+\\\/standard\\\/.+", "value", "https:\/\/mdbootstrap.com\/sale\/upgrade\/standard\/essential\/"],
                    ["map", "key", ".+\\\/jquery\\\/.+", "value", "https:\/\/mdbootstrap.com\/sale\/upgrade\/standard\/essential\/"],
                    ["map", "key", ".+\\\/angular\\\/.+", "value", "https:\/\/mdbootstrap.com\/sale\/upgrade\/angular\/essential\/"],
                    ["map", "key", ".+\\\/react\\\/.+", "value", "https:\/\/mdbootstrap.com\/sale\/upgrade\/react\/essential\/"],
                    ["map", "key", ".+\\\/vue\\\/.+", "value", "https:\/\/mdbootstrap.com\/sale\/upgrade\/vue\/essential\/"]
                ]
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 9],
                "vtp_fullMatch": true,
                "vtp_replaceAfterMatch": true,
                "vtp_ignoreCase": true,
                "vtp_defaultValue": "https:\/\/mdbootstrap.com\/sale\/upgrade\/standard\/advanced\/",
                "vtp_map": ["list", ["map", "key", ".+\\\/standard\\\/.+", "value", "https:\/\/mdbootstrap.com\/sale\/upgrade\/standard\/advanced\/"],
                    ["map", "key", ".+\\\/jquery\\\/.+", "value", "https:\/\/mdbootstrap.com\/sale\/upgrade\/standard\/advanced\/"],
                    ["map", "key", ".+\\\/angular\\\/.+", "value", "https:\/\/mdbootstrap.com\/sale\/upgrade\/angular\/advanced\/"],
                    ["map", "key", ".+\\\/react\\\/.+", "value", "https:\/\/mdbootstrap.com\/sale\/upgrade\/react\/advanced\/"],
                    ["map", "key", ".+\\\/vue\\\/.+", "value", "https:\/\/mdbootstrap.com\/sale\/upgrade\/vue\/advanced\/"]
                ]
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 9],
                "vtp_fullMatch": true,
                "vtp_replaceAfterMatch": true,
                "vtp_defaultValue": "https:\/\/mdbootstrap.com\/sale\/seasonal\/standard\/",
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", ".+\\\/standard\\\/.+", "value", "https:\/\/mdbootstrap.com\/sale\/seasonal\/standard\/"],
                    ["map", "key", ".+\\\/angular\\\/.+", "value", "https:\/\/mdbootstrap.com\/sale\/seasonal\/angular\/"],
                    ["map", "key", ".+\\\/react\\\/.+", "value", "https:\/\/mdbootstrap.com\/sale\/seasonal\/react\/"],
                    ["map", "key", ".+\\\/vue\\\/.+", "value", "https:\/\/mdbootstrap.com\/sale\/seasonal\/vue\/"]
                ]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var b=new Date(Date.UTC(2023,3,21,16,0,0)),a=\"time-counter-april-sale\",c=\"aprilSaleHoursLeft\",d=function(){", ["escape", ["macro", 65], 8, 16], "(b,a,c)};return[d,a]})();"]
            }, {
                "function": "__d",
                "vtp_elementId": "mdb-gdpr-modal-cookies",
                "vtp_attributeName": "name",
                "vtp_selectorType": "ID"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){try{if(", ["escape", ["macro", 42], 8, 16], "){var a=(new Date).getTime();return a-=", ["escape", ["macro", 42], 8, 16], "}}catch(b){}})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){try{if(", ["escape", ["macro", 41], 8, 16], "){var a=(new Date).getTime();return a-=", ["escape", ["macro", 41], 8, 16], "}}catch(b){}})();"]
            }, {
                "function": "__k",
                "vtp_decodeCookie": false,
                "vtp_name": "firstDownloadTechnology"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return(new Date).getTime()+\".\"+Math.random().toString(36).substring(5)})();"]
            }, {
                "function": "__k",
                "vtp_decodeCookie": false,
                "vtp_name": "gdpr_country"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 9], 8, 16], ";return\"\/\"+a.split(\"\/\")[1]+\"\/\"+a.split(\"\/\")[3]+\"\/\"+a.split(\"\/\")[4]+\"\/\"+a.split(\"\/\")[5]})();"]
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 85],
                "vtp_fullMatch": true,
                "vtp_replaceAfterMatch": true,
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", "ZA", "value", "South Africa"],
                    ["map", "key", "TH", "value", "Thailand"],
                    ["map", "key", "AF", "value", "Afghanistan"],
                    ["map", "key", "AL", "value", "Albania"],
                    ["map", "key", "BY", "value", "Belarus"],
                    ["map", "key", "EG", "value", "Egypt"],
                    ["map", "key", "CL", "value", "Chile"],
                    ["map", "key", "AR", "value", "Argentina"],
                    ["map", "key", "ID", "value", "Indonesia"],
                    ["map", "key", "VN", "value", "Vietnam"],
                    ["map", "key", "PK", "value", "Pakistan"],
                    ["map", "key", "BD", "value", "Bangladesh"],
                    ["map", "key", "EG", "value", "Egypt"],
                    ["map", "key", "IR", "value", "Iran"]
                ]
            }, {
                "function": "__k",
                "vtp_decodeCookie": false,
                "vtp_name": "skippedDCGodfinger"
            }, {
                "function": "__k",
                "vtp_decodeCookie": false,
                "vtp_name": "exitCountdownDate"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "userLicense"
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 9],
                "vtp_fullMatch": true,
                "vtp_replaceAfterMatch": true,
                "vtp_defaultValue": "https:\/\/mdbootstrap.com\/sale\/seasonal\/standard\/",
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", ".+\\\/angular\\\/.+", "value", "https:\/\/mdbootstrap.com\/sale\/seasonal\/angular\/"],
                    ["map", "key", ".+\\\/react\\\/.+", "value", "https:\/\/mdbootstrap.com\/sale\/seasonal\/react\/"],
                    ["map", "key", ".+\\\/vue\\\/.+", "value", "https:\/\/mdbootstrap.com\/sale\/seasonal\/vue\/"]
                ]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var b=new Date(Date.UTC(2023,3,21,16,0,0)),a=\"time-counter-mdbgo-trial\",c=\"mdbgoTrialGodfingerHoursLeft\",d=function(){", ["escape", ["macro", 65], 8, 16], "(b,a,c)};return[d,a]})();"]
            }, {
                "function": "__k",
                "vtp_decodeCookie": false,
                "vtp_name": "seenFeatureRequest"
            }, {
                "function": "__u",
                "vtp_component": "HOST",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__f",
                "vtp_component": "URL"
            }, {
                "function": "__e"
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementClasses",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementTarget",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.element",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementClasses",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementId",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementTarget",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementUrl",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__aev",
                "vtp_varType": "TEXT"
            }, {
                "function": "__r"
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoProvider",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoUrl",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoDuration",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoVisible",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoCurrentTime",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.scrollUnits",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.scrollDirection",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.visibleTime",
                "vtp_dataLayerVersion": 1
            }],
            "tags": [{
                "function": "__html",
                "priority": 1000,
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript\u003Evar now=(new Date).getTime();", ["escape", ["macro", 47], 8, 16], "(\"firstSeenPricing\",now,365);\u003C\/script\u003E\n\n"],
                "vtp_supportDocumentWrite": true,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "vtp_usePostscribe": true,
                "tag_id": 2120
            }, {
                "function": "__html",
                "priority": 1000,
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript\u003Evar now=(new Date).getTime();", ["escape", ["macro", 47], 8, 16], "(\"firstPurchase\",now,365);\u003C\/script\u003E\n\n"],
                "vtp_supportDocumentWrite": true,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "vtp_usePostscribe": true,
                "tag_id": 2558
            }, {
                "function": "__html",
                "priority": 10,
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\n\n\u003Cscript type=\"text\/gtmscript\"\u003Efunction getCookie(c){for(var d=document.cookie.split(\";\"),e,a=0;a\u003Cd.length;a++){var b=d[a].trim();0===b.indexOf(c+\"\\x3d\")\u0026\u0026(e=b.substring((c+\"\\x3d\").length,b.length))}return e};\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 2500
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_overrideGaSettings": true,
                "vtp_doubleClick": true,
                "vtp_setTrackerName": false,
                "vtp_useDebugVersion": false,
                "vtp_useHashAutoLink": false,
                "vtp_trackType": "TRACK_PAGEVIEW",
                "vtp_decorateFormsAutoLink": false,
                "vtp_enableLinkId": false,
                "vtp_trackingId": ["macro", 1],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 1
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "YouTube Videos",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 3],
                "vtp_eventAction": ["macro", 6],
                "vtp_eventLabel": ["macro", 7],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 525
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_nonInteraction": true,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Scroll Depth",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 3],
                "vtp_eventAction": ["template", ["macro", 8], "%"],
                "vtp_eventLabel": ["macro", 9],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 526
            }, {
                "function": "__sp",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableConversionLinker": true,
                "vtp_enableDynamicRemarketing": false,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_conversionId": "979879318",
                "vtp_customParamsFormat": "NONE",
                "vtp_conversionLabel": "uIBJCPv423AQlouf0wM",
                "vtp_rdp": false,
                "vtp_enableOgtRmktParams": true,
                "vtp_enableUserId": true,
                "vtp_url": ["macro", 13],
                "vtp_enableRdpCheckbox": true,
                "vtp_enableConversionLinkingSettings": true,
                "tag_id": 815
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_eventCategory": "Goals",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 3],
                "vtp_eventAction": ["macro", 16],
                "vtp_eventLabel": ["template", ["macro", 17], " ", ["macro", 18]],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 833
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_eventCategory": "Modals",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 3],
                "vtp_eventAction": ["template", "Clicked ", ["macro", 30]],
                "vtp_eventLabel": ["macro", 20],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 851
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_eventCategory": "Outbound links",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 3],
                "vtp_eventAction": ["macro", 15],
                "vtp_eventLabel": ["macro", 31],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 855
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "First Campaign",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 3],
                "vtp_eventAction": "Purchase",
                "vtp_eventLabel": ["macro", 32],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 901
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Last Campaign",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 3],
                "vtp_eventAction": "Purchase",
                "vtp_eventLabel": ["macro", 33],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 902
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "First Campaign",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 3],
                "vtp_eventAction": "Download",
                "vtp_eventLabel": ["macro", 32],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 903
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Last Campaign",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 3],
                "vtp_eventAction": "Download",
                "vtp_eventLabel": ["macro", 33],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 904
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Modals",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 3],
                "vtp_eventAction": "Viewed",
                "vtp_eventLabel": ["macro", 20],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 905
            }, {
                "function": "__paused",
                "vtp_originalTagType": "bzi",
                "tag_id": 909
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_eventCategory": "Goals",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 3],
                "vtp_eventAction": "Mobile",
                "vtp_eventLabel": "Angular Download",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 1337
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_eventCategory": ["template", "Dynamic Content ", ["macro", 35]],
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 3],
                "vtp_eventAction": "Clicked",
                "vtp_eventLabel": ["macro", 36],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 1870
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Dynamic Content (new)",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 3],
                "vtp_eventAction": "Viewed",
                "vtp_eventLabel": ["macro", 37],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 1873
            }, {
                "function": "__gclidw",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableCrossDomain": false,
                "vtp_enableUrlPassthrough": false,
                "vtp_enableCookieOverrides": false,
                "vtp_enableCrossDomainFeature": true,
                "tag_id": 2209
            }, {
                "function": "__awct",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableNewCustomerReporting": false,
                "vtp_enableConversionLinker": true,
                "vtp_enableProductReporting": false,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_enableShippingData": false,
                "vtp_conversionId": "979879318",
                "vtp_conversionLabel": "pugtCJ3TvesBEJaLn9MD",
                "vtp_rdp": false,
                "vtp_url": ["macro", 13],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 2252
            }, {
                "function": "__awct",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableNewCustomerReporting": false,
                "vtp_enableConversionLinker": true,
                "vtp_enableProductReporting": false,
                "vtp_enableEnhancedConversion": false,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_enableShippingData": false,
                "vtp_conversionId": "979879318",
                "vtp_conversionLabel": "R3wxCIvirKIBEJaLn9MD",
                "vtp_rdp": false,
                "vtp_url": ["macro", 13],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 2430
            }, {
                "function": "__gaawc",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendPageView": true,
                "vtp_enableSendToServerContainer": false,
                "vtp_measurementId": "G-E9PS2EVWYS",
                "vtp_enableUserProperties": true,
                "vtp_enableEuid": false,
                "tag_id": 2475
            }, {
                "function": "__paused",
                "vtp_originalTagType": "html",
                "tag_id": 2540
            }, {
                "function": "__paused",
                "vtp_originalTagType": "html",
                "tag_id": 2543
            }, {
                "function": "__paused",
                "vtp_originalTagType": "html",
                "tag_id": 2544
            }, {
                "function": "__paused",
                "vtp_originalTagType": "html",
                "tag_id": 2598
            }, {
                "function": "__ytl",
                "vtp_progressThresholdsPercent": "25,50,75",
                "vtp_captureComplete": true,
                "vtp_captureStart": true,
                "vtp_fixMissingApi": true,
                "vtp_radioButtonGroup1": "PERCENTAGE",
                "vtp_capturePause": true,
                "vtp_captureProgress": true,
                "vtp_uniqueTriggerId": "2340190_699",
                "vtp_enableTriggerStartOption": true,
                "tag_id": 2626
            }, {
                "function": "__sdl",
                "vtp_verticalThresholdUnits": "PERCENT",
                "vtp_verticalThresholdsPercent": "25,50,75,100",
                "vtp_verticalThresholdOn": true,
                "vtp_triggerStartOption": "WINDOW_LOAD",
                "vtp_horizontalThresholdOn": false,
                "vtp_uniqueTriggerId": "2340190_702",
                "vtp_enableTriggerStartOption": true,
                "tag_id": 2627
            }, {
                "function": "__cl",
                "tag_id": 2628
            }, {
                "function": "__cl",
                "tag_id": 2629
            }, {
                "function": "__cl",
                "tag_id": 2630
            }, {
                "function": "__cl",
                "tag_id": 2631
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "2340190_1203",
                "tag_id": 2632
            }, {
                "function": "__cl",
                "tag_id": 2633
            }, {
                "function": "__tg",
                "vtp_triggerIds": ["list", "2340190_1264_1182"],
                "vtp_uniqueTriggerId": "2340190_1264",
                "tag_id": 2634
            }, {
                "function": "__tg",
                "vtp_isListeningTag": true,
                "vtp_firingId": "2340190_1264_1182",
                "tag_id": 2635
            }, {
                "function": "__evl",
                "vtp_useOnScreenDuration": false,
                "vtp_useDomChangeListener": true,
                "vtp_elementSelector": ".modal",
                "vtp_firingFrequency": "ONCE_PER_ELEMENT",
                "vtp_selectorType": "CSS",
                "vtp_onScreenRatio": "50",
                "vtp_uniqueTriggerId": "2340190_1302",
                "tag_id": 2636
            }, {
                "function": "__cl",
                "tag_id": 2637
            }, {
                "function": "__cl",
                "tag_id": 2638
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "2340190_1369",
                "tag_id": 2639
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "2340190_1871",
                "tag_id": 2640
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "2340190_1939",
                "tag_id": 2641
            }, {
                "function": "__evl",
                "vtp_useOnScreenDuration": false,
                "vtp_useDomChangeListener": true,
                "vtp_elementSelector": "[id^='gtmDC-']:not([id$='-sub'])",
                "vtp_firingFrequency": "ONCE",
                "vtp_selectorType": "CSS",
                "vtp_onScreenRatio": "50",
                "vtp_uniqueTriggerId": "2340190_2000",
                "tag_id": 2642
            }, {
                "function": "__evl",
                "vtp_useOnScreenDuration": false,
                "vtp_useDomChangeListener": true,
                "vtp_firingFrequency": "ONCE",
                "vtp_elementSelector": "[id^='gtmDC-']",
                "vtp_selectorType": "CSS",
                "vtp_onScreenRatio": "50",
                "vtp_uniqueTriggerId": "2340190_2038",
                "tag_id": 2643
            }, {
                "function": "__evl",
                "vtp_elementId": "section-pricing",
                "vtp_useOnScreenDuration": false,
                "vtp_useDomChangeListener": true,
                "vtp_firingFrequency": "ONCE",
                "vtp_selectorType": "ID",
                "vtp_onScreenRatio": "20",
                "vtp_uniqueTriggerId": "2340190_2121",
                "tag_id": 2644
            }, {
                "function": "__evl",
                "vtp_useOnScreenDuration": false,
                "vtp_useDomChangeListener": true,
                "vtp_elementSelector": "[id^='gtmDC-']:not([id$='-sub'])",
                "vtp_firingFrequency": "ONCE",
                "vtp_selectorType": "CSS",
                "vtp_onScreenRatio": "50",
                "vtp_uniqueTriggerId": "2340190_2123",
                "tag_id": 2645
            }, {
                "function": "__evl",
                "vtp_useOnScreenDuration": false,
                "vtp_useDomChangeListener": true,
                "vtp_elementSelector": "[id^='gtmDC-'][id$='-essential-sub']",
                "vtp_firingFrequency": "ONCE",
                "vtp_selectorType": "CSS",
                "vtp_onScreenRatio": "50",
                "vtp_uniqueTriggerId": "2340190_2147",
                "tag_id": 2646
            }, {
                "function": "__evl",
                "vtp_useOnScreenDuration": false,
                "vtp_useDomChangeListener": true,
                "vtp_elementSelector": "[id^='gtmDC-'][id$='-advanced-sub']",
                "vtp_firingFrequency": "ONCE",
                "vtp_selectorType": "CSS",
                "vtp_onScreenRatio": "50",
                "vtp_uniqueTriggerId": "2340190_2148",
                "tag_id": 2647
            }, {
                "function": "__cl",
                "tag_id": 2648
            }, {
                "function": "__cl",
                "tag_id": 2649
            }, {
                "function": "__sdl",
                "vtp_verticalThresholdUnits": "PERCENT",
                "vtp_verticalThresholdsPercent": "30",
                "vtp_verticalThresholdOn": true,
                "vtp_triggerStartOption": "WINDOW_LOAD",
                "vtp_horizontalThresholdOn": false,
                "vtp_uniqueTriggerId": "2340190_2469",
                "vtp_enableTriggerStartOption": true,
                "tag_id": 2650
            }, {
                "function": "__evl",
                "vtp_useOnScreenDuration": false,
                "vtp_useDomChangeListener": true,
                "vtp_firingFrequency": "ONCE",
                "vtp_elementSelector": "[id^='gtmDC-']",
                "vtp_selectorType": "CSS",
                "vtp_onScreenRatio": "50",
                "vtp_uniqueTriggerId": "2340190_2477",
                "tag_id": 2651
            }, {
                "function": "__evl",
                "vtp_useOnScreenDuration": false,
                "vtp_useDomChangeListener": true,
                "vtp_firingFrequency": "ONCE",
                "vtp_elementSelector": "[id^='gtmDC-']",
                "vtp_selectorType": "CSS",
                "vtp_onScreenRatio": "50",
                "vtp_uniqueTriggerId": "2340190_2481",
                "tag_id": 2652
            }, {
                "function": "__evl",
                "vtp_useOnScreenDuration": false,
                "vtp_useDomChangeListener": true,
                "vtp_firingFrequency": "ONCE",
                "vtp_elementSelector": "[id^='gtmDC-']",
                "vtp_selectorType": "CSS",
                "vtp_onScreenRatio": "50",
                "vtp_uniqueTriggerId": "2340190_2482",
                "tag_id": 2653
            }, {
                "function": "__evl",
                "vtp_useOnScreenDuration": false,
                "vtp_useDomChangeListener": true,
                "vtp_firingFrequency": "ONCE",
                "vtp_elementSelector": "[id^='gtmDC-']",
                "vtp_selectorType": "CSS",
                "vtp_onScreenRatio": "50",
                "vtp_uniqueTriggerId": "2340190_2483",
                "tag_id": 2654
            }, {
                "function": "__sdl",
                "vtp_verticalThresholdUnits": "PERCENT",
                "vtp_verticalThresholdsPercent": "30",
                "vtp_verticalThresholdOn": true,
                "vtp_triggerStartOption": "WINDOW_LOAD",
                "vtp_horizontalThresholdOn": false,
                "vtp_uniqueTriggerId": "2340190_2487",
                "vtp_enableTriggerStartOption": true,
                "tag_id": 2655
            }, {
                "function": "__tg",
                "vtp_triggerIds": ["list", "2340190_2497_2499", "2340190_2497_2494", "2340190_2497_2495", "2340190_2497_2498"],
                "vtp_uniqueTriggerId": "2340190_2497",
                "tag_id": 2656
            }, {
                "function": "__tg",
                "vtp_isListeningTag": true,
                "vtp_firingId": "2340190_2497_2499",
                "tag_id": 2657
            }, {
                "function": "__tg",
                "vtp_isListeningTag": true,
                "vtp_firingId": "2340190_2497_2494",
                "tag_id": 2659
            }, {
                "function": "__tg",
                "vtp_isListeningTag": true,
                "vtp_firingId": "2340190_2497_2495",
                "tag_id": 2661
            }, {
                "function": "__tg",
                "vtp_isListeningTag": true,
                "vtp_firingId": "2340190_2497_2498",
                "tag_id": 2663
            }, {
                "function": "__sdl",
                "vtp_verticalThresholdUnits": "PERCENT",
                "vtp_verticalThresholdsPercent": "30",
                "vtp_verticalThresholdOn": true,
                "vtp_triggerStartOption": "WINDOW_LOAD",
                "vtp_horizontalThresholdOn": false,
                "vtp_uniqueTriggerId": "2340190_2499",
                "vtp_enableTriggerStartOption": true,
                "tag_id": 2664
            }, {
                "function": "__tg",
                "vtp_triggerIds": ["list", "2340190_2501_2499", "2340190_2501_2494", "2340190_2501_2502", "2340190_2501_2498"],
                "vtp_uniqueTriggerId": "2340190_2501",
                "tag_id": 2665
            }, {
                "function": "__tg",
                "vtp_isListeningTag": true,
                "vtp_firingId": "2340190_2501_2499",
                "tag_id": 2666
            }, {
                "function": "__tg",
                "vtp_isListeningTag": true,
                "vtp_firingId": "2340190_2501_2494",
                "tag_id": 2668
            }, {
                "function": "__tg",
                "vtp_isListeningTag": true,
                "vtp_firingId": "2340190_2501_2502",
                "tag_id": 2670
            }, {
                "function": "__tg",
                "vtp_isListeningTag": true,
                "vtp_firingId": "2340190_2501_2498",
                "tag_id": 2672
            }, {
                "function": "__evl",
                "vtp_useOnScreenDuration": false,
                "vtp_useDomChangeListener": true,
                "vtp_elementSelector": "[id^='gtmDC-']:not([id$='-sub'])",
                "vtp_firingFrequency": "ONCE",
                "vtp_selectorType": "CSS",
                "vtp_onScreenRatio": "50",
                "vtp_uniqueTriggerId": "2340190_2510",
                "tag_id": 2673
            }, {
                "function": "__evl",
                "vtp_useOnScreenDuration": false,
                "vtp_useDomChangeListener": true,
                "vtp_elementSelector": "[id^='gtmDC-']:not([id$='-sub'])",
                "vtp_firingFrequency": "ONCE",
                "vtp_selectorType": "CSS",
                "vtp_onScreenRatio": "50",
                "vtp_uniqueTriggerId": "2340190_2518",
                "tag_id": 2674
            }, {
                "function": "__evl",
                "vtp_useOnScreenDuration": false,
                "vtp_useDomChangeListener": true,
                "vtp_elementSelector": "[id^='gtmDC-']:not([id$='-sub'])",
                "vtp_firingFrequency": "ONCE",
                "vtp_selectorType": "CSS",
                "vtp_onScreenRatio": "50",
                "vtp_uniqueTriggerId": "2340190_2527",
                "tag_id": 2675
            }, {
                "function": "__evl",
                "vtp_useOnScreenDuration": false,
                "vtp_useDomChangeListener": true,
                "vtp_elementSelector": "[id^='gtmDC-']:not([id$='-sub'])",
                "vtp_firingFrequency": "ONCE",
                "vtp_selectorType": "CSS",
                "vtp_onScreenRatio": "50",
                "vtp_uniqueTriggerId": "2340190_2530",
                "tag_id": 2676
            }, {
                "function": "__evl",
                "vtp_useOnScreenDuration": false,
                "vtp_useDomChangeListener": true,
                "vtp_elementSelector": "[id^='gtmDC-']:not([id$='-sub'])",
                "vtp_firingFrequency": "ONCE",
                "vtp_selectorType": "CSS",
                "vtp_onScreenRatio": "50",
                "vtp_uniqueTriggerId": "2340190_2532",
                "tag_id": 2677
            }, {
                "function": "__evl",
                "vtp_useOnScreenDuration": false,
                "vtp_useDomChangeListener": true,
                "vtp_elementSelector": "[id^='gtmDC-'][id$='-single-sub']",
                "vtp_firingFrequency": "ONCE",
                "vtp_selectorType": "CSS",
                "vtp_onScreenRatio": "50",
                "vtp_uniqueTriggerId": "2340190_2535",
                "tag_id": 2678
            }, {
                "function": "__evl",
                "vtp_useOnScreenDuration": true,
                "vtp_useDomChangeListener": true,
                "vtp_elementSelector": "[id^='gtmDC-']:not([id^='gtmDC-nav'])",
                "vtp_firingFrequency": "ONCE",
                "vtp_selectorType": "CSS",
                "vtp_onScreenRatio": "50",
                "vtp_onScreenDuration": "1000",
                "vtp_uniqueTriggerId": "2340190_2546",
                "tag_id": 2679
            }, {
                "function": "__evl",
                "vtp_useOnScreenDuration": false,
                "vtp_useDomChangeListener": true,
                "vtp_elementSelector": "[id^='gtmDC-']:not([id$='-sub'])",
                "vtp_firingFrequency": "ONCE",
                "vtp_selectorType": "CSS",
                "vtp_onScreenRatio": "50",
                "vtp_uniqueTriggerId": "2340190_2549",
                "tag_id": 2680
            }, {
                "function": "__evl",
                "vtp_useOnScreenDuration": false,
                "vtp_useDomChangeListener": true,
                "vtp_elementSelector": "[id^='gtmDC-'][id$='-sub']",
                "vtp_firingFrequency": "ONCE",
                "vtp_selectorType": "CSS",
                "vtp_onScreenRatio": "50",
                "vtp_uniqueTriggerId": "2340190_2562",
                "tag_id": 2681
            }, {
                "function": "__evl",
                "vtp_useOnScreenDuration": false,
                "vtp_useDomChangeListener": true,
                "vtp_elementSelector": "[id^='gtmDC-'][id$='-sub']",
                "vtp_firingFrequency": "ONCE",
                "vtp_selectorType": "CSS",
                "vtp_onScreenRatio": "50",
                "vtp_uniqueTriggerId": "2340190_2563",
                "tag_id": 2682
            }, {
                "function": "__evl",
                "vtp_useOnScreenDuration": false,
                "vtp_useDomChangeListener": true,
                "vtp_elementSelector": "[id^='gtmDC-'][id$='-sub']",
                "vtp_firingFrequency": "ONCE",
                "vtp_selectorType": "CSS",
                "vtp_onScreenRatio": "50",
                "vtp_uniqueTriggerId": "2340190_2567",
                "tag_id": 2683
            }, {
                "function": "__evl",
                "vtp_useOnScreenDuration": false,
                "vtp_useDomChangeListener": true,
                "vtp_elementSelector": "[id^='gtmDC-'][id$='-sub']",
                "vtp_firingFrequency": "ONCE",
                "vtp_selectorType": "CSS",
                "vtp_onScreenRatio": "50",
                "vtp_uniqueTriggerId": "2340190_2568",
                "tag_id": 2684
            }, {
                "function": "__evl",
                "vtp_useOnScreenDuration": false,
                "vtp_useDomChangeListener": true,
                "vtp_elementSelector": "[id^='gtmDC-'][id$='-sub']",
                "vtp_firingFrequency": "ONCE",
                "vtp_selectorType": "CSS",
                "vtp_onScreenRatio": "50",
                "vtp_uniqueTriggerId": "2340190_2569",
                "tag_id": 2685
            }, {
                "function": "__evl",
                "vtp_useOnScreenDuration": false,
                "vtp_useDomChangeListener": true,
                "vtp_elementSelector": "[id^='gtmDC-'][id$='-sub']",
                "vtp_firingFrequency": "ONCE",
                "vtp_selectorType": "CSS",
                "vtp_onScreenRatio": "50",
                "vtp_uniqueTriggerId": "2340190_2570",
                "tag_id": 2686
            }, {
                "function": "__evl",
                "vtp_useOnScreenDuration": false,
                "vtp_useDomChangeListener": true,
                "vtp_elementSelector": "[id^='gtmDC-'][id$='-sub']",
                "vtp_firingFrequency": "ONCE",
                "vtp_selectorType": "CSS",
                "vtp_onScreenRatio": "50",
                "vtp_uniqueTriggerId": "2340190_2571",
                "tag_id": 2687
            }, {
                "function": "__evl",
                "vtp_useOnScreenDuration": false,
                "vtp_useDomChangeListener": true,
                "vtp_elementSelector": "[id^='gtmDC-'][id$='-sub']",
                "vtp_firingFrequency": "ONCE",
                "vtp_selectorType": "CSS",
                "vtp_onScreenRatio": "50",
                "vtp_uniqueTriggerId": "2340190_2572",
                "tag_id": 2688
            }, {
                "function": "__evl",
                "vtp_useOnScreenDuration": false,
                "vtp_useDomChangeListener": true,
                "vtp_elementSelector": "[id^='gtmDC-'][id$='-sub']",
                "vtp_firingFrequency": "ONCE",
                "vtp_selectorType": "CSS",
                "vtp_onScreenRatio": "50",
                "vtp_uniqueTriggerId": "2340190_2577",
                "tag_id": 2689
            }, {
                "function": "__evl",
                "vtp_useOnScreenDuration": false,
                "vtp_useDomChangeListener": true,
                "vtp_elementSelector": "[id^='gtmDC-'][id$='-sub']",
                "vtp_firingFrequency": "ONCE",
                "vtp_selectorType": "CSS",
                "vtp_onScreenRatio": "50",
                "vtp_uniqueTriggerId": "2340190_2578",
                "tag_id": 2690
            }, {
                "function": "__evl",
                "vtp_useOnScreenDuration": false,
                "vtp_useDomChangeListener": true,
                "vtp_elementSelector": "[id^='gtmDC-'][id$='-sub']",
                "vtp_firingFrequency": "ONCE",
                "vtp_selectorType": "CSS",
                "vtp_onScreenRatio": "50",
                "vtp_uniqueTriggerId": "2340190_2579",
                "tag_id": 2691
            }, {
                "function": "__evl",
                "vtp_useOnScreenDuration": false,
                "vtp_useDomChangeListener": true,
                "vtp_elementSelector": "[id^='gtmDC-'][id$='-sub']",
                "vtp_firingFrequency": "ONCE",
                "vtp_selectorType": "CSS",
                "vtp_onScreenRatio": "50",
                "vtp_uniqueTriggerId": "2340190_2580",
                "tag_id": 2692
            }, {
                "function": "__evl",
                "vtp_useOnScreenDuration": false,
                "vtp_useDomChangeListener": true,
                "vtp_elementSelector": "[id^='gtmDC-'][id$='-bundle-sub']",
                "vtp_firingFrequency": "ONCE",
                "vtp_selectorType": "CSS",
                "vtp_onScreenRatio": "50",
                "vtp_uniqueTriggerId": "2340190_2581",
                "tag_id": 2693
            }, {
                "function": "__evl",
                "vtp_useOnScreenDuration": false,
                "vtp_useDomChangeListener": true,
                "vtp_firingFrequency": "ONCE",
                "vtp_elementSelector": "[id^='gtmDC-']:not([id$='-sub'])",
                "vtp_selectorType": "CSS",
                "vtp_onScreenRatio": "50",
                "vtp_uniqueTriggerId": "2340190_2594",
                "tag_id": 2694
            }, {
                "function": "__evl",
                "vtp_useOnScreenDuration": false,
                "vtp_useDomChangeListener": true,
                "vtp_elementSelector": "[id^='gtmDC-']",
                "vtp_firingFrequency": "ONCE",
                "vtp_selectorType": "CSS",
                "vtp_onScreenRatio": "10",
                "vtp_uniqueTriggerId": "2340190_2604",
                "tag_id": 2695
            }, {
                "function": "__sdl",
                "vtp_verticalThresholdUnits": "PERCENT",
                "vtp_verticalThresholdsPercent": "30",
                "vtp_verticalThresholdOn": true,
                "vtp_triggerStartOption": "WINDOW_LOAD",
                "vtp_horizontalThresholdOn": false,
                "vtp_uniqueTriggerId": "2340190_2605",
                "vtp_enableTriggerStartOption": true,
                "tag_id": 2696
            }, {
                "function": "__evl",
                "vtp_useOnScreenDuration": false,
                "vtp_useDomChangeListener": true,
                "vtp_firingFrequency": "ONCE",
                "vtp_elementSelector": "[id^='gtmDC-']",
                "vtp_selectorType": "CSS",
                "vtp_onScreenRatio": "50",
                "vtp_uniqueTriggerId": "2340190_2606",
                "tag_id": 2697
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"289867067833087\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=289867067833087\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 836
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"trackCustom\",\"mdbFreeDownload\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=289867067833087\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 837
            }, {
                "function": "__html",
                "metadata": ["map"],
                "teardown_tags": ["list", ["tag", 140, 0]],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Efunction setCookie(b,c,d){var a=new Date;a.setTime(a.getTime()+864E5*d);document.cookie=b+\"\\x3d\"+c+\";path\\x3d\/;expires\\x3d\"+a.toGMTString()}var now=(new Date).getTime();setCookie(\"firstSeen\",now,365);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 877
            }, {
                "function": "__html",
                "metadata": ["map"],
                "teardown_tags": ["list", ["tag", 138, 0]],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Efunction setCookie(b,c,d){var a=new Date;a.setTime(a.getTime()+864E5*d);document.cookie=b+\"\\x3d\"+c+\";path\\x3d\/;expires\\x3d\"+a.toGMTString()}var now=(new Date).getTime();setCookie(\"firstDownload\",now,365);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 878
            }, {
                "function": "__html",
                "metadata": ["map"],
                "teardown_tags": ["list", ["tag", 142, 0]],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Efunction setCookie(b,c,d){var a=new Date;a.setTime(a.getTime()+864E5*d);document.cookie=b+\"\\x3d\"+c+\";path\\x3d\/;expires\\x3d\"+a.toGMTString()}var now=(new Date).getTime();setCookie(\"firstConversion\",now,365);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 879
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003Efunction setCookie(b,c,d){var a=new Date;a.setTime(a.getTime()+864E5*d);document.cookie=b+\"\\x3d\"+c+\";path\\x3d\/;expires\\x3d\"+a.toGMTString()}setCookie(\"firstDownloadTechnology\",", ["escape", ["macro", 18], 8, 16], ",365);\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 883
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript\u003Evar stb_exitintent=!1;document.addEventListener(\"mousemove\",function(a){var b=window.pageYOffset||document.documentElement.scrollTop;10\u003Ea.pageY-b\u0026\u00260==stb_exitintent\u0026\u0026(dataLayer.push({event:\"exit_intent\"}),stb_exitintent=!0)});\u003C\/script\u003E",
                "vtp_supportDocumentWrite": true,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "vtp_usePostscribe": true,
                "tag_id": 890
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003Efunction createCookie(c,d,b){var a=\"\";b\u0026\u0026(a=new Date,a.setTime(a.getTime()+864E5*b),a=\"; expires\\x3d\"+a.toUTCString());document.cookie=c+\"\\x3d\"+d+a+\"; path\\x3d\/\"}createCookie(\"firstCampaign\",\"", ["escape", ["macro", 44], 7], "\",365);\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 897
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003Efunction createCookie(c,d,b){var a=\"\";b\u0026\u0026(a=new Date,a.setTime(a.getTime()+864E5*b),a=\"; expires\\x3d\"+a.toUTCString());document.cookie=c+\"\\x3d\"+d+a+\"; path\\x3d\/\"}createCookie(\"lastCampaign\",\"", ["escape", ["macro", 44], 7], "\",365);\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 900
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Efunction setCookie(a,b){var c=\"Mon, 18 Jan 2038 03:14:07\";document.cookie=a+\"\\x3d\"+b+\";path\\x3d\/;expires\\x3d\"+c}function getCookie(a){for(var b=document.cookie.split(\";\"),c,d=0;d\u003Cb.length;d++){var e=b[d].trim();0===e.indexOf(a+\"\\x3d\")\u0026\u0026(c=e.substring((a+\"\\x3d\").length,e.length))}return c}(function(){var a=getCookie(\"pageviewCount\");\"undefined\"===typeof a?a=1:a++;setCookie(\"pageviewCount\",a)})();\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 1356
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript\u003Evar now=(new Date).getTime();", ["escape", ["macro", 47], 8, 16], "(\"firstClickedToMdbgoAfterSale\",now,365);\u003C\/script\u003E\n"],
                "vtp_supportDocumentWrite": true,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "vtp_usePostscribe": true,
                "tag_id": 1368
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript\u003Evar options={ID:\"startModalMDB\",MAXVIEWS:1,BACKDROP:\"true\",NONINVASIVE:\"false\",CONTENT:'\\x3cdiv class\\x3d\"modal-dialog\"\\x3e \\x3cdiv class\\x3d\"modal-content\"\\x3e \\x3cdiv class\\x3d\"modal-header\"\\x3e \\x3ch5 class\\x3d\"modal-title\"\\x3eFirst time on mdbootstrap?\\x3c\/h5\\x3e\\x3cbutton type\\x3d\"button\" class\\x3d\"btn-close\" data-mdb-dismiss\\x3d\"modal\" aria-label\\x3d\"Close\"\\x3e\\x3c\/button\\x3e \\x3c\/div\\x3e\\x3cdiv class\\x3d\"modal-body text-center\"\\x3e \\x3ci class\\x3d\"far fa-smile fa-5x text-info my-4\"\\x3e\\x3c\/i\\x3e \\x3cp\\x3e\\x3cstrong\\x3eDo you want us to help you get started?\\x3c\/strong\\x3e\\x3c\/p\\x3e\\x3c\/div\\x3e\\x3cdiv class\\x3d\"modal-footer\"\\x3e \\x3cbutton type\\x3d\"button\" class\\x3d\"btn btn-outline-primary\" data-mdb-dismiss\\x3d\"modal\"\\x3e No, thanks \\x3c\/button\\x3e \\x3ca class\\x3d\"btn btn-primary\" href\\x3d\"https:\/\/mdbootstrap.com\/learn\/mdb-foundations\/basics\/quick-start\/\" role\\x3d\"button\"\\x3eYes, do it \\x3ci class\\x3d\"fas fa-arrow-alt-circle-right ms-2\"\\x3e\\x3c\/i\\x3e\\x3c\/a\\x3e \\x3c\/div\\x3e\\x3c\/div\\x3e\\x3c\/div\\x3e'};\n", ["escape", ["macro", 49], 8, 16], "(options);\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": true,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "vtp_usePostscribe": true,
                "tag_id": 1490
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript\u003Evar now=(new Date).getTime();", ["escape", ["macro", 47], 8, 16], "(\"firstSeenInstallation\",now,365);\u003C\/script\u003E\n\n"],
                "vtp_supportDocumentWrite": true,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "vtp_usePostscribe": true,
                "tag_id": 1792
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript\u003Evar now=(new Date).getTime();", ["escape", ["macro", 47], 8, 16], "(\"firstNewsletterConfirm\",now,365);\u003C\/script\u003E\n\n"],
                "vtp_supportDocumentWrite": true,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "vtp_usePostscribe": true,
                "tag_id": 1797
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript\u003Evar options={ID:\"newDC-free1-download\",HREF:\"", ["escape", ["macro", 53], 7], "\",COLOR:\"hsl(144, 78%, 36%)\",TEXT:\"\\x3cstrong\\x3e700+\\x3c\/strong\\x3e beautiful elements \\x26 themes. \\x3cstrong\\x3eMIT license\\x3c\/strong\\x3e, no registration or email required.\",CTA:\"Free download\"};", ["escape", ["macro", 55], 8, 16], "(options);", ["escape", ["macro", 56], 8, 16], "(options);\u003C\/script\u003E\n\n"],
                "vtp_supportDocumentWrite": true,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "vtp_usePostscribe": true,
                "tag_id": 2007
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_html": ["template", "\n\u003Cstyle\u003E\n  .btn-support-modal{\n      background-color: #3b71ca;\n    color: #fff;\n    box-shadow: 0 4px 9px -4px #3b71ca;\n}\n.btn-support-modal-secondary{\n  background-color: #e3ebf7;\n    color: #285192;\n   box-shadow: none;\n}\n.btn-support-modal-secondary:hover{\n  box-shadow: none !important;\n}\n  .btn-support-modal:hover{\n    color:white!important;\n  }\n\u003C\/style\u003E\n\n\u003Cdiv class=\"modal fade\" id=\"ticketWarningModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"ticketWarningModalLabel\" aria-hidden=\"true\" data-backdrop=\"static\"\u003E\n  \u003Cdiv class=\"modal-dialog\" role=\"document\"\u003E\n    \u003Cdiv class=\"modal-content\"\u003E\n      \u003Cdiv class=\"modal-header\"\u003E\n        \u003Ch5 class=\"modal-title\" id=\"ticketWarningModalLabel\"\u003E\u003Cstrong\u003EAre you sure that this is a technical  question?\u003C\/strong\u003E\u003C\/h5\u003E\n        \u003Cbutton type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"\u003E\n          \u003Cspan aria-hidden=\"true\"\u003E×\u003C\/span\u003E\n        \u003C\/button\u003E\n      \u003C\/div\u003E\n      \u003Cdiv class=\"modal-body\"\u003E\n        \n        \u003Cp\u003ESupport forum is dedicated to \u003Cstrong\u003Eissues related to MDB UI Kits\u003C\/strong\u003E.\u003C\/p\u003E\n        \u003Cp\u003EIf your question regards:\u003C\/p\u003E\n        \u003Cul\u003E\n          \u003Cli\u003E- Licensing, pricing, products, promotions\u003C\/li\u003E\n          \u003Cli\u003E- Refunds, product swaps, upgrades\u003C\/li\u003E\n          \u003Cli\u003E- MDB account (password, email address etc.)\u003C\/li\u003E\n          \u003Cli\u003E- Issues with GitLab access\u003C\/li\u003E\n          \u003Cli\u003E...or other non-technical queries\u003C\/li\u003E\n        \u003C\/ul\u003E\n        \u003Cp\u003EThen it should be asked directly to \u003Ca href=\"mailto:contact@mdbootstrap.com?subject=Question%20from%20support%20forum\u0026amp;body=", ["escape", ["macro", 57], 12], "\" class=\"font-weight-bold\"\u003Econtact@mdbootstrap.com\u003C\/a\u003E.\u003C\/p\u003E\n      \u003C\/div\u003E\n      \u003Cdiv class=\"modal-footer\"\u003E        \n        \u003Cbutton type=\"button\" class=\"btn btn-sm btn-support-modal-secondary\" data-dismiss=\"modal\"\u003EYes, I\u0026#39;m sure - I want to continue\u003C\/button\u003E\n        \u003Ca href=\"https:\/\/mdbootstrap.com\/general\/contact\/\" class=\"text-white btn btn-sm btn-support-modal\"\u003ENo, take me to the contact page\u003C\/a\u003E\n      \u003C\/div\u003E\n    \u003C\/div\u003E\n  \u003C\/div\u003E\n\u003C\/div\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003E$(\"#ticketWarningModal\").modal(\"show\");$(\"#ticketWarningModal\").parent().css(\"display\",\"block\");$(\"#ticketWarningModal\").parent().css(\"visibility\",\"visible\");\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 2159
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "  \n  \u003Cstyle\u003E\n    #wheel-app {\n      width: 400px;\n      height: 400px;\n      margin: 0 auto;\n      position: relative;\n    }\n\n    #discount-wheel-button-wrapper {\n      width: 470px;\n      min-height: 148px;\n      margin: 0 auto;\n    }\n\n    .marker {\n      position: absolute;\n      width: 60px;\n      left: 172px;\n      top: -20px;\n      z-index: 2;\n    }\n\n    .wheel {\n      width: 100%;\n      height: 100%;\n    }\n\n    .blur-wheel {\n      animation: blur-wheel 10s;\n    }\n\n    .bg-theme-standard {\n      background-color: #7446ac !important;\n      box-shadow: 0 4px 9px -4px #7446ac;\n    }\n\n    .btn-primary-theme {\n      background-color: hsl(0, 100%, 30%);\n      color: white;\n    }\n\n\n    .btn-primary-theme:hover {\n      background-color: hsl(0, 100%, 40%);\n      color: white;\n    }\n\n    @keyframes blur-wheel {\n      0% {\n        filter: blur(1.5px);\n      }\n\n      80% {\n        filter: blur(1.5px);\n      }\n\n      100% {\n        filter: blur(0px);\n      }\n    }\n  \u003C\/style\u003E\n\n\n  \n  \u003Cdiv class=\"modal top fade\" id=\"discountWheelModal\" tabindex=\"-1\" aria-labelledby=\"discountWheelModalLabel\" aria-hidden=\"true\" data-mdb-backdrop=\"true\" data-mdb-keyboard=\"true\"\u003E\n    \u003Cdiv class=\"modal-dialog modal-fullscreen \"\u003E\n      \u003Cdiv class=\"modal-content bg-black text-center text-white justify-content-center\"\u003E\n        \u003Cdiv class=\"modal-header\"\u003E\n          \u003Ch5 class=\"modal-title\" id=\"discountWheelModalLabel\"\u003EWow! You have a chance for an even better discount\u003C\/h5\u003E\n          \u003Ca href=\"\" type=\"button\" class=\"btn-close btn-close-white close-discount-wheel-modal\" aria-label=\"Close\"\u003E\u003C\/a\u003E\n        \u003C\/div\u003E\n        \u003Cdiv class=\"modal-body d-flex align-items-center\"\u003E\n\n\n          \n          \u003Csection class=\"w-100\"\u003E\n            \u003Cp class=\"mb-0 fw-bold\"\u003ESpin the wheel \u0026amp; win even better first order discount!\u003C\/p\u003E\n            \u003Cp class=\"mb-5\"\u003E\u003Cem\u003E(Forever discouts remain unchanged, but renewal is optional)\u003C\/em\u003E\u003C\/p\u003E\n\n            \u003Cdiv id=\"wheel-app\"\u003E\n              \u003Cimg class=\"marker\" src=\"https:\/\/mdbootstrap.com\/\/img\/Marketing\/campaigns\/bf2022\/marker.png\"\u003E\n              \u003Cimg class=\"wheel\" src=\"https:\/\/mdbootstrap.com\/\/img\/Marketing\/campaigns\/bf2022\/wheel.png\"\u003E\n            \u003C\/div\u003E\n\n            \u003Cdiv id=\"discount-wheel-button-wrapper\" class=\"my-5\"\u003E\n              \u003Cbutton class=\"btn btn-primary-theme btn-block btn-lg\" id=\"discount-wheel-button\"\u003Espin the wheel\u003C\/button\u003E\n            \u003C\/div\u003E\n          \u003C\/section\u003E\n          \n\n\n\n        \u003C\/div\u003E\n        \u003Cdiv class=\"modal-footer\"\u003E\n          \u003Ca href=\"\" role=\"button\" class=\"btn btn-tertiary text-light close-discount-wheel-modal\"\u003E\n            No, thanks. I prefer to pay more.\n          \u003C\/a\u003E\n        \u003C\/div\u003E\n      \u003C\/div\u003E\n    \u003C\/div\u003E\n  \u003C\/div\u003E\n\n\u003Cscript\u003Evar myModalEl=document.getElementById(\"discountWheelModal\"),modal=new mdb.Modal(myModalEl);modal.toggle();myModalEl.parentElement.style.display=\"block\";myModalEl.parentElement.style.visibility=\"visible\";startDiscountWheel();document.cookie=\"seenDiscountWheelModal\\x3dtrue; max-age\\x3d43200;\";\u003C\/script\u003E",
                "vtp_supportDocumentWrite": true,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "vtp_usePostscribe": true,
                "tag_id": 2432
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript async data-gtmsrc=\"https:\/\/js.sparkloop.app\/team_36cee40e2923.js\" data-sparkloop type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 2436
            }, {
                "function": "__html",
                "metadata": ["map"],
                "teardown_tags": ["list", ["tag", 137, 0]],
                "once_per_event": true,
                "vtp_html": "\n\n\n\u003Cdiv class=\"modal top fade\" id=\"exitIntentCheckoutNew\" tabindex=\"-1\" aria-labelledby=\"exitIntentCheckoutNewLabel\" aria-hidden=\"true\" data-mdb-keyboard=\"false\"\u003E\n  \u003Cdiv class=\"modal-dialog modal-lg modal-dialog-scrollable\"\u003E\n    \u003Cdiv class=\"modal-content\"\u003E\n      \u003Cdiv class=\"modal-body d-flex align-items-center\"\u003E\n\n        \n        \u003Cul class=\"stepper pt-lg-4\" id=\"stepper-buttons\"\u003E\n\n          \n          \u003Cli class=\"stepper-step stepper-active\"\u003E\n            \u003Cdiv class=\"stepper-head\"\u003E\n              \u003Cspan class=\"stepper-head-icon\"\u003E1\u003C\/span\u003E\n              \u003Cspan class=\"stepper-head-text\"\u003Estep1\u003C\/span\u003E\n            \u003C\/div\u003E\n\n\n            \u003Cdiv class=\"stepper-content\"\u003E\n\n              \u003Ch5 class=\"mb-4 mb-lg-5 fw-bold text-black\"\u003EBefore you go, let me know... why?\u003C\/h5\u003E\n\n              \n              \u003Cdiv role=\"button\" id=\"step-2\" class=\"border shadow-2-strong rounded-6 w-100 p-3 mb-3\"\u003E\n                \u003Cdiv class=\"d-flex justify-content-between align-items-center\"\u003E\n                  \u003Cdiv class=\"d-flex align-items-center\"\u003E\n                    \u003Cdiv class=\"me-3\"\u003E\n                      \u003Ci class=\"fas fa-credit-card fa-3x\"\u003E\u003C\/i\u003E\n                    \u003C\/div\u003E\n                    \u003Cdiv class=\"d-flex flex-column\"\u003E\n                      \u003Ch5 class=\"mb-0\"\u003EI had an issue with payment\u003C\/h5\u003E\n                      \u003Cp class=\"mb-0 small text-muted\"\u003EI encountered errors \/ I want to use a different payment\n                        method.\u003C\/p\u003E\n                    \u003C\/div\u003E\n                  \u003C\/div\u003E\n                  \u003Ci class=\"fas fa-chevron-right\"\u003E\u003C\/i\u003E\n                \u003C\/div\u003E\n\n              \u003C\/div\u003E\n\n              \n              \u003Cdiv role=\"button\" id=\"step-3\" class=\"border shadow-2-strong rounded-6 w-100 p-3 mb-3\"\u003E\n                \u003Cdiv class=\"d-flex justify-content-between align-items-center\"\u003E\n                  \u003Cdiv class=\"d-flex align-items-center\"\u003E\n                    \u003Cdiv class=\"me-3\"\u003E\n                      \u003Ci class=\"fas fa-question-circle fa-3x\"\u003E\u003C\/i\u003E\n                    \u003C\/div\u003E\n                    \u003Cdiv class=\"d-flex flex-column\"\u003E\n                      \u003Ch5 class=\"mb-0\"\u003EI\u0026#39;m not sure if that\u0026#39;s what I need\u003C\/h5\u003E\n                      \u003Cp class=\"mb-0 small text-muted\"\u003EI\u0026#39;m not sure if MDB will work well with my project. I\n                        would\n                        like to test it out.\u003C\/p\u003E\n                    \u003C\/div\u003E\n                  \u003C\/div\u003E\n                  \u003Ci class=\"fas fa-chevron-right\"\u003E\u003C\/i\u003E\n                \u003C\/div\u003E\n\n              \u003C\/div\u003E\n\n              \n              \u003Cdiv role=\"button\" id=\"step-4\" class=\"border shadow-2-strong rounded-6 w-100 p-3 mb-3\"\u003E\n                \u003Cdiv class=\"d-flex justify-content-between align-items-center\"\u003E\n                  \u003Cdiv class=\"d-flex align-items-center\"\u003E\n                    \u003Cdiv class=\"me-3\"\u003E\n                      \u003Ci class=\"fas fa-money-bill fa-3x\"\u003E\u003C\/i\u003E\n                    \u003C\/div\u003E\n                    \u003Cdiv class=\"d-flex flex-column\"\u003E\n                      \u003Ch5 class=\"mb-0\"\u003EThe price is too high\u003C\/h5\u003E\n                      \u003Cp class=\"mb-0 small text-muted\"\u003EEven with all the discounts, the price is still too high\n                        for\n                        me.\u003C\/p\u003E\n                    \u003C\/div\u003E\n                  \u003C\/div\u003E\n                  \u003Ci class=\"fas fa-chevron-right\"\u003E\u003C\/i\u003E\n                \u003C\/div\u003E\n\n              \u003C\/div\u003E\n\n\n              \n              \u003Cdiv role=\"button\" id=\"step-5\" class=\"border shadow-2-strong rounded-6 w-100 p-3 mb-3\"\u003E\n                \u003Cdiv class=\"d-flex justify-content-between align-items-center\"\u003E\n                  \u003Cdiv class=\"d-flex align-items-center\"\u003E\n                    \u003Cdiv class=\"me-3\"\u003E\n                      \u003Ci class=\"fas fa-user-circle fa-3x\"\u003E\u003C\/i\u003E\n                    \u003C\/div\u003E\n                    \u003Cdiv class=\"d-flex flex-column\"\u003E\n                      \u003Ch5 class=\"mb-0\"\u003EIt\u0026#39;s something else\u003C\/h5\u003E\n                      \u003Cp class=\"mb-0 small text-muted\"\u003ENone of the cases above describe my doubts.\u003C\/p\u003E\n                    \u003C\/div\u003E\n                  \u003C\/div\u003E\n                  \u003Ci class=\"fas fa-chevron-right\"\u003E\u003C\/i\u003E\n                \u003C\/div\u003E\n\n              \u003C\/div\u003E\n\n\n\n            \u003C\/div\u003E\n          \u003C\/li\u003E\n\n          \n          \u003Cli class=\"stepper-step\"\u003E\n            \u003Cdiv class=\"stepper-head\"\u003E\n              \u003Cspan class=\"stepper-head-icon\"\u003E2\u003C\/span\u003E\n              \u003Cspan class=\"stepper-head-text\"\u003Estep2\u003C\/span\u003E\n            \u003C\/div\u003E\n\n            \u003Cdiv class=\"stepper-content\"\u003E\n              \u003Ch5 class=\"mb-4 fw-bold text-black d-none d-lg-block\"\u003EContact us directly. Please do!\u003C\/h5\u003E\n\n              \u003Cdiv class=\"small\"\u003E\n                \u003Cp class=\"fw-bold mb-1\"\u003EIf you encountered any errors during payment process:\u003C\/p\u003E\n                \u003Cp\u003EPlease take a screenshot of the issue \u0026amp; let us now by sending an email directly to\n                  \u003Ca target=\"_blank\" href=\"mailto:contact@mdbootstrap.com\"\u003Econtact@mdbootstrap.com\u003C\/a\u003E. Include\n                  the description of\n                  the\n                  issue. We\u0026#39;ll make sure to reward your effort :)\u003C\/p\u003E\n\n                \u003Cp class=\"fw-bold mb-1\"\u003EIf need a different payment method:\u003C\/p\u003E\n                \u003Cp\u003EIf you would like to pay via bank transfer, please transfer the amount you see on the checkout\n                  page to one of the bank accounts listed below:\u003C\/p\u003E\n                \u003Cp class=\"border-start ps-3\"\u003E\n                  \u003Cstrong\u003ETranfer recipient\u003C\/strong\u003E: StartupFlow s.c.\u003Cbr\u003E\n                  \u003Cstrong\u003ESWIFT\u003C\/strong\u003E: BREXPLPWMBK\u003Cbr\u003E\n                  \u003Cstrong\u003ETransfer title\u003C\/strong\u003E: product + users \u003Cem\u003E(i.e. Angular Advanced 3 users)\u003C\/em\u003E\u003Cbr\u003E\n                  \u003Cstrong\u003EAccount for EUR\u003C\/strong\u003E: PL55 1140 2004 0000 3112 0475 9694\u003Cbr\u003E\n                  \u003Cstrong\u003EAccount for USD\u003C\/strong\u003E: PL55 1140 2004 0000 3112 0475 9694\u003Cbr\u003E\n                  \u003Cstrong\u003EAccount for GBP\u003C\/strong\u003E: PL55 1140 2004 0000 3112 0475 9694\u003Cbr\u003E\n\n                \u003C\/p\u003E\n                \u003Cp\u003ESend us a transfer confirmation document \u0026amp; we will grant you access manually, after the payment\n                  is accounted for on our side.\n                  Keep in mind that this method of purchase may take 2-4 business days to be fully processed. \u003C\/p\u003E\n              \u003C\/div\u003E\n              \u003Ca target=\"_blank\" href=\"mailto:contact@mdbootstrap.com\" type=\"button\" class=\"btn btn-primary btn-block mt-3\"\u003E\n                Send an email now\n              \u003C\/a\u003E\n              \u003Cbutton data-mdb-dismiss=\"modal\" type=\"button\" class=\"btn btn-secondary btn-block mt-3\"\u003E\n                Dissmiss modal\n              \u003C\/button\u003E\n            \u003C\/div\u003E\n          \u003C\/li\u003E\n\n          \n          \u003Cli class=\"stepper-step\"\u003E\n            \u003Cdiv class=\"stepper-head\"\u003E\n              \u003Cspan class=\"stepper-head-icon\"\u003E2\u003C\/span\u003E\n              \u003Cspan class=\"stepper-head-text\"\u003Estep2\u003C\/span\u003E\n            \u003C\/div\u003E\n\n\n            \u003Cdiv class=\"stepper-content\"\u003E\n              \u003Ch5 class=\"mb-4 fw-bold text-black\"\u003EGive MDB a chance with a \u003Cu\u003E30 DAY REFUND GUARANTEE\u003C\/u\u003E\u003C\/h5\u003E\n\n              \n              \u003Csection class=\"rounded-3 p-2\" style=\"border: 4px double !important;\"\u003E\n                \u003Cdiv class=\"row\"\u003E\n                  \u003Cdiv class=\"col-lg-4 mb-4 mb-lg-0 d-flex align-items-center d-none d-lg-block\"\u003E\n                    \u003Cdiv class=\"w-100 text-center\"\u003E\n                      \u003Cimg src=\"https:\/\/mdbootstrap.com\/img\/Marketing\/refund-badge.webp\" class=\"img-fluid\"\u003E\n                    \u003C\/div\u003E\n                  \u003C\/div\u003E\n                  \u003Cdiv class=\"col-lg-8 d-flex align-items-center\"\u003E\n                    \u003Cdiv\u003E\n                      \u003Cp class=\"mb-3  fw-bold\"\u003EGUARANTEE #007GF4\u003C\/p\u003E\n                      \u003Cp class=\"mb-0\"\u003E\n                        We understand that sometimes you are unsure if MDB will work for you.\n                        That\u0026#39;s why we offer a 30-day refund guarantee.\n                        Just take a screenshot or reference your \u003Cstrong\u003Epersonal gurantee number\u003C\/strong\u003E\n                        (\u003Cstrong\u003E#007GF4\u003C\/strong\u003E) if you decide to ask us\n                        us for a refund later.\n                      \u003C\/p\u003E\n                    \u003C\/div\u003E\n                  \u003C\/div\u003E\n                \u003C\/div\u003E\n              \u003C\/section\u003E\n              \u003Cbutton type=\"button\" class=\"btn btn-primary btn-block mt-4\" data-mdb-dismiss=\"modal\"\u003E\n                Done! Go back to purchase now\n              \u003C\/button\u003E\n              \u003Cbutton id=\"no-thanks-refund\" type=\"button\" class=\"btn btn-secondary btn-block mt-3\"\u003E\n                No, thanks\n              \u003C\/button\u003E\n\n            \u003C\/div\u003E\n\n\n          \u003C\/li\u003E\n\n          \n          \u003Cli class=\"stepper-step\"\u003E\n            \u003Cdiv class=\"stepper-head\"\u003E\n              \u003Cspan class=\"stepper-head-icon\"\u003E2\u003C\/span\u003E\n              \u003Cspan class=\"stepper-head-text\"\u003Estep2\u003C\/span\u003E\n            \u003C\/div\u003E\n\n\n            \u003Cdiv class=\"stepper-content \"\u003E\n              \u003Ch5 class=\"mb-4 fw-bold text-black\"\u003EWhat about an ADDITIONAL $30 DISCOUNT?\u003C\/h5\u003E\n\n              \n              \u003Csection class=\"rounded-3 p-3 mt-lg-5\" style=\"border: 4px double !important;\"\u003E\n                \u003Cdiv class=\"row\"\u003E\n                  \u003Cdiv class=\"col-lg-5 mb-4 mb-lg-0\"\u003E\n\n                    \u003Cdiv class=\"h-100 d-flex align-items-center justify-content-center\"\u003E\n\n                      \u003Cp class=\"display-4 fw-bold text-danger text-center\" id=\"countdown-10-percent\"\u003E\n                      \u003C\/p\u003E\n\n                    \u003C\/div\u003E\n\n\n                  \u003C\/div\u003E\n                  \u003Cdiv class=\"col-lg-7 d-flex align-items-center\"\u003E\n                    \u003Cdiv\u003E\n                      \u003Cp class=\"mb-3  fw-bold lead\"\u003ECLAIM $30 OFF NOW\u003C\/p\u003E\n                      \u003Cp class=\"mb-0 lead\"\u003E \n                        Claim the offer now \u0026amp; complete your purchase before the timer runs out to cut $30 off the price of your order.\n                      \u003C\/p\u003E\n                    \u003C\/div\u003E\n                  \u003C\/div\u003E\n                \u003C\/div\u003E\n              \u003C\/section\u003E\n              \u003Ca href=\"https:\/\/mdbootstrap.com\/checkout\/?coupon_code=VTZCDYAC\" type=\"button\" class=\"btn btn-primary btn-block mt-3\"\u003E\n                CLAIM THE DISCOUNT \u0026amp; COMPLETE PURCHASE\n              \u003C\/a\u003E\n              \u003Cbutton id=\"no-thanks-discount\" type=\"button\" class=\"btn btn-secondary btn-block mt-3\"\u003E\n                No, thanks\n              \u003C\/button\u003E\n\n\n\n            \u003C\/div\u003E\n\n\n          \u003C\/li\u003E\n\n\n          \n          \u003Cli class=\"stepper-step\"\u003E\n            \u003Cdiv class=\"stepper-head\"\u003E\n              \u003Cspan class=\"stepper-head-icon\"\u003E2\u003C\/span\u003E\n              \u003Cspan class=\"stepper-head-text\"\u003Estep2\u003C\/span\u003E\n            \u003C\/div\u003E\n\n\n            \u003Cdiv class=\"stepper-content \"\u003E\n              \u003Ch5 class=\"mb-4 fw-bold text-black\"\u003ESure, don\u0026#39;t buy. But would you help me out?\u003C\/h5\u003E\n\n              \n              \u003Csection class=\"rounded-3 p-3 \" style=\"border: 4px double !important;\"\u003E\n                \u003Cdiv class=\"row\"\u003E\n                  \u003Cdiv class=\"col-lg-4 mb-4 mb-lg-0 d-none d-lg-block\"\u003E\n\n                    \u003Cdiv class=\"h-100 d-flex align-items-center\"\u003E\n                      \u003Cdiv class=\"fw-bold text-danger\"\u003E\n\n                        \u003Cimg src=\"https:\/\/mdbcdn.b-cdn.net\/img\/Photos\/Avatars\/f_kapusta.webp\" class=\"rounded-circle \" width=\"200px\" height=\"200px\"\u003E\n\n                      \u003C\/div\u003E\n                    \u003C\/div\u003E\n\n\n                  \u003C\/div\u003E\n                  \u003Cdiv class=\"col-lg-8 d-flex align-items-center\"\u003E\n                    \u003Cdiv\u003E\n                      \u003Cp class=\"mb-2  fw-bold\"\u003EMy name is Filip \u0026amp; my job is understanding MDB users.\u003C\/p\u003E\n                      \u003Cp class=\"mb-0\"\u003E\n                        It seems, that our offer is not suited for you. I get that you\u0026#39;re not going to buy\n                        anything. That\u0026#39;s alright.\n                        But could you help me out to understand \u003Cem class=\"fw-bold\"\u003Ewhy?\u003C\/em\u003E\n                        \u003Cbr\u003E\n                        Do you think that a competitor offers better value than MDB?\n                        \u003Cbr\u003E\n                        Is the cost out of reach in your country \/ life situation?\n                        \u003Cbr\u003E\n                        Something else entirely?\n                        \u003Cbr\u003E\n                        \u003Cstrong\u003EShoot me a personal message:\n                          \u003Ca target=\"_blank\" href=\"mailto:f.kapusta@mdbootstrap.com\"\u003Ef.kapusta@mdbootstrap.com\u003C\/a\u003E\u003C\/strong\u003E\u003Cbr\u003E\n                        Or reach out to me on \u003Ca target=\"_blank\" href=\"https:\/\/www.linkedin.com\/in\/filip-kapusta-937236153\/\"\u003ELinkedIn\u003C\/a\u003E if you prefer.\n                        \u003Cbr\u003E\n                        \u003Cstrong\u003EI will try to return the favor if I will be able to.\u003C\/strong\u003E\n\n\n                      \u003C\/p\u003E\n                    \u003C\/div\u003E\n                  \u003C\/div\u003E\n                \u003C\/div\u003E\n              \u003C\/section\u003E\n              \u003Ca target=\"_blank\" href=\"mailto:f.kapusta@mdbootstrap.com\" type=\"button\" class=\"btn btn-primary btn-block mt-3\"\u003E\n                Send an email now\n              \u003C\/a\u003E\n              \u003Cbutton type=\"button\" class=\"btn btn-secondary btn-block mt-3\" data-mdb-dismiss=\"modal\"\u003E\n                No, thanks\n              \u003C\/button\u003E\n\n\n\n            \u003C\/div\u003E\n\n\n          \u003C\/li\u003E\n\n        \u003C\/ul\u003E\n        \n\n      \u003C\/div\u003E\n\n    \u003C\/div\u003E\n  \u003C\/div\u003E\n\u003C\/div\u003E\n\n\n\u003Cstyle\u003E\n  #exitIntentCheckoutNew .stepper {\n    height: 100% !important;\n  }\n\n  #exitIntentCheckoutNew .modal-body {\n    height: 600px !important;\n  }\n\n  #exitIntentCheckoutNew .stepper-head {\n    display: none;\n  }\n\n  #exitIntentCheckoutNew .btn-secondary {\n    background-color: #e3ebf7;\n    color: #285192;\n    box-shadow: none;\n  }\n\u003C\/style\u003E\n\n\n\n\u003Cscript\u003Evar myModalEl=document.getElementById(\"exitIntentCheckoutNew\"),modal=new mdb.Modal(myModalEl);modal.toggle();myModalEl.parentElement.style.display=\"block\";myModalEl.parentElement.style.visibility=\"visible\";\u003C\/script\u003E\n\n\n\u003Cscript\u003Evar stepper=new mdb.Stepper(document.getElementById(\"stepper-buttons\"));function changeStep1(){stepper.changeStep(1)}document.getElementById(\"step-2\").addEventListener(\"click\",changeStep1);function changeStep2(){stepper.changeStep(2)}document.getElementById(\"step-3\").addEventListener(\"click\",changeStep2);function changeStep3(){stepper.changeStep(3)}document.getElementById(\"step-4\").addEventListener(\"click\",changeStep3);function changeStep4(){stepper.changeStep(4)}\ndocument.getElementById(\"step-5\").addEventListener(\"click\",changeStep4);document.getElementById(\"no-thanks-discount\").addEventListener(\"click\",changeStep4);document.getElementById(\"no-thanks-refund\").addEventListener(\"click\",changeStep4);\u003C\/script\u003E\n\n\n\n\u003Cscript\u003Evar startDate=(new Date).getTime(),countDownDate=new Date;countDownDate.setMinutes(countDownDate.getMinutes()+11);document.cookie=\"exitCountdownDate\\x3d\"+countDownDate;var counterElement=document.getElementById(\"countdown-10-percent\");\nfunction startCounter(){if(null!=counterElement)var d=setInterval(function(){var a=(new Date).getTime();a=countDownDate-a;var b=Math.floor(a%36E5\/6E4),c=Math.floor(a%6E4\/1E3);counterElement.innerHTML=b+\"m \"+c+\"s\";0\u003E=a\u0026\u0026(clearInterval(d),a=document.getElementById(\"exitIntentCheckoutNew\"),a=mdb.Modal.getInstance(a),a.hide())},1E3)}startCounter();\u003C\/script\u003E",
                "vtp_supportDocumentWrite": true,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "vtp_usePostscribe": true,
                "tag_id": 2438
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\n\u003Cdiv id=\"complete-order-prompt\" class=\"card mt-4 text-white bg-danger fw-bold d-none\"\u003E\n  \u003Cdiv class=\"card-body\"\u003E\n    \u003Cp class=\"card-text\"\u003E\n      \u003Ci class=\"fas fa-hourglass-half fa-lg me-2\"\u003E\u003C\/i\u003E Complete your order in \u003Cspan id=\"countdown-10-percent-v2\"\u003E\u003C\/span\u003E\n    \u003C\/p\u003E                \n\n  \u003C\/div\u003E\n\u003C\/div\u003E\n\n\n\n\u003Cscript type=\"text\/gtmscript\"\u003Evar startDate=(new Date).getTime(),exitCountdownDate=getCookie(\"exitCountdownDate\"),countDownDate=new Date(exitCountdownDate),counterElement=document.getElementById(\"countdown-10-percent-v2\");\nfunction startCounter(){var b=document.getElementById(\"complete-order-prompt\"),c=document.getElementsByClassName(\"col-md-4\")[0];c.appendChild(b);b.classList.remove(\"d-none\");b.classList.add(\"animation\");b.classList.add(\"fade-in-up\");if(null!=counterElement)var f=setInterval(function(){var a=(new Date).getTime();a=countDownDate-a;var d=Math.floor(a%36E5\/6E4),e=Math.floor(a%6E4\/1E3);counterElement.innerHTML=d+\"m \"+e+\"s\";0\u003E=a\u0026\u0026(clearInterval(f),window.location.href=\"https:\/\/mdbootstrap.com\/sale\/november\/\")},\n1E3)}startCounter();\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 2443
            }, {
                "function": "__html",
                "metadata": ["map"],
                "teardown_tags": ["list", ["tag", 139, 0]],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript\u003Evar options={ID:\"vuejsDiscountModal\",MAXVIEWS:1,BACKDROP:\"false\",NONINVASIVE:\"true\",CONTENT:'\\x3cdiv class\\x3d\"modal-dialog modal-side modal-bottom-right\"\\x3e \\x3cdiv class\\x3d\"modal-content\"\\x3e \\x3cdiv class\\x3d\"modal-header bg-success text-white\"\\x3e \\x3ch5 class\\x3d\"modal-title\" id\\x3d\"vuejsDiscountModal\"\\x3eHey there!\\x3c\/h5\\x3e \\x3cbutton type\\x3d\"button\" class\\x3d\"btn-close btn-close-white\" data-mdb-dismiss\\x3d\"modal\" aria-label\\x3d\"Close\"\\x3e\\x3c\/button\\x3e \\x3c\/div\\x3e \\x3cdiv class\\x3d\"modal-body\"\\x3e \\x3cp\\x3eWe noticed you are coming from our partner VueJs.org \\x3c\/p\\x3e \\x3cp\\x3eWe have a special gift for you. For Vue fans MDB Advanced (all plugins + components + templates) is only\\x3c\/p\\x3e \\x3cp class\\x3d\"text-center h3\"\\x3e\\x3cs class\\x3d\"text-danger\"\\x3e$549\\x3c\/s\\x3e $199\\x3c\/p\\x3e \\x3c\/div\\x3e \\x3cdiv class\\x3d\"modal-footer\"\\x3e \\x3cbutton type\\x3d\"button\" class\\x3d\"btn btn-outline-success\" data-mdb-dismiss\\x3d\"modal\"\\x3eclose\\x3c\/button\\x3e \\x3ca href\\x3d\"https:\/\/mdbootstrap.com\/?add-to-cart\\x3d125345\\x26coupon_code\\x3dVUE\" class\\x3d\"btn btn-success\"\\x3eGet offer\\x3c\/a\\x3e \\x3c\/div\\x3e \\x3c\/div\\x3e \\x3c\/div\\x3e'};\n", ["escape", ["macro", 49], 8, 16], "(options);\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": true,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "vtp_usePostscribe": true,
                "tag_id": 2468
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,e,b,f,g,c,d){a[b]=a[b]||function(){(a[b].q=a[b].q||[]).push(arguments)};c=e.createElement(f);c.async=1;c.src=\"https:\/\/www.clarity.ms\/tag\/\"+g;d=e.getElementsByTagName(f)[0];d.parentNode.insertBefore(c,d)})(window,document,\"clarity\",\"script\",\"f1su1ssihh\");\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 2484
            }, {
                "function": "__html",
                "metadata": ["map"],
                "teardown_tags": ["list", ["tag", 141, 0]],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003Evar options={ID:\"codingyaarDiscountModal\",MAXVIEWS:1,BACKDROP:\"false\",NONINVASIVE:\"true\",CONTENT:'\\x3cdiv class\\x3d\"modal-dialog modal-side modal-bottom-right\"\\x3e \\x3cdiv class\\x3d\"modal-content\"\\x3e \\x3cdiv class\\x3d\"modal-header bg-primary text-white\"\\x3e \\x3ch5 class\\x3d\"modal-title\" id\\x3d\"codingyaarDiscountModal\"\\x3eHey there!\\x3c\/h5\\x3e \\x3cbutton type\\x3d\"button\" class\\x3d\"btn-close btn-close-white me-2\" data-mdb-dismiss\\x3d\"modal\" aria-label\\x3d\"Close\"\\x3e\\x3c\/button\\x3e \\x3c\/div\\x3e \\x3cdiv class\\x3d\"modal-body\"\\x3e \\x3cp\\x3eWe noticed you are coming from our friend Coding Yaar\\x3c\/p\\x3e \\x3cp\\x3eWe have a special gift for you. You can take advantage of a 50% discount code on our entire offer!\\x3c\/p\\x3e \\x3cul class\\x3d\"text-start\"\\x3e \\x3cli\\x3eCopy the code below\\x3c\/li\\x3e \\x3cli\\x3eClick the get offer button\\x3c\/li\\x3e \\x3cli\\x3eChoose the technology \\x26 product\\x3c\/li\\x3e \\x3cli\\x3ePaste the code at checkout\\x3c\/li\\x3e \\x3c\/ul\\x3e \\x3cp\\x3eThe amount of discounts is limited!\\x3c\/p\\x3e \\x3cdiv\\x3e \\x3cdiv class\\x3d\"text-center\"\\x3e \\x3cdiv id\\x3d\"copiedMessage\" class\\x3d\"alert me-2\" role\\x3d\"alert\" data-mdb-color\\x3d\"success\" style\\x3d\"display:none;background-color: #d6f0e0;color: #0d6832;\"\\x3e Copied \\x3c\/div\\x3e \\x3c!--Copy coupon wrapper--\\x3e \\x3cdiv class\\x3d\"d-inline-flex inline mt-2 flex-wrap justify-content-center\"\\x3e \\x3c!--Coupon code--\\x3e \\x3ccode class\\x3d\"h2 border rounded py-1 px-5 flex-item me-2 w-100 text-center text-danger\"\\x3ecodingyaar\\x3c\/code\\x3e \\x3cbr\\x3e \\x3c!--Copy to clipboard--\\x3e \\x3ca id\\x3d\"Copy\" href\\x3d\"#\" data-mdb-clipboard-target\\x3d\"codingyaar\" type\\x3d\"button\" class\\x3d\"btn btn-primary mt-2 mb-4 ripple-surface text-center\"\\x3eCOPY TO CLIPBOARD \\x3ci class\\x3d\"far fa-copy ml-2\"\\x3e\\x3c\/i\\x3e\\x3c\/a\\x3e \\x3c\/div\\x3e \\x3c\/div\\x3e \\x3c\/div\\x3e \\x3cdiv class\\x3d\"modal-footer\"\\x3e \\x3cbutton type\\x3d\"button\" class\\x3d\"btn btn-outline-primary\" data-mdb-dismiss\\x3d\"modal\"\\x3eclose\\x3c\/button\\x3e \\x3ca href\\x3d\"https:\/\/mdbootstrap.com\/pro\/\" class\\x3d\"btn btn-primary\"\\x3eGet offer\\x3c\/a\\x3e \\x3c\/div\\x3e \\x3c\/div\\x3e \\x3c\/div\\x3e\\x3c\/div\\x3e'};\n", ["escape", ["macro", 49], 8, 16], "(options);function Clipboard_CopyTo(b){var a=document.createElement(\"input\");a.value=b;document.body.appendChild(a);a.select();document.execCommand(\"copy\");document.body.removeChild(a);document.getElementById(\"copiedMessage\").style.display=\"block\";setTimeout(function(){document.getElementById(\"copiedMessage\").style.display=\"none\"},3E3)}document.querySelector(\"#Copy\").onclick=function(){Clipboard_CopyTo(\"codingyaar\")};\u003C\/script\u003E\n"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 2485
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript\u003Evar ID=\"startModalMDB\",BACKDROP=\"true\",NONINVASIVE=\"false\",MAXVIEWS=1,CONTENT='\\x3cdiv class\\x3d\"modal-dialog\" role\\x3d\"document\"\\x3e \\x3cdiv class\\x3d\"modal-content\"\\x3e \\x3cdiv class\\x3d\"modal-header\"\\x3e \\x3ch5 class\\x3d\"modal-title\" id\\x3d\"startModalLabel\"\\x3e\\x3cb\\x3eFirst time on mdbootstrap?\\x3c\/b\\x3e\\x3c\/h5\\x3e\\x3cbutton type\\x3d\"button\" class\\x3d\"close\" aria-label\\x3d\"Close\"\\x3e \\x3cspan aria-hidden\\x3d\"true\"\\x3e\\u00d7\\x3c\/span\\x3e\\x3c\/button\\x3e \\x3c\/div\\x3e\\x3cdiv class\\x3d\"modal-body text-center\"\\x3e \\x3ci class\\x3d\"far fa-smile fa-5x text-info my-4\" \\x3e\\x3c\/i\\x3e \\x3cp\\x3e\\x3cstrong\\x3eDo you want us to help you get started?\\x3c\/strong\\x3e\\x3c\/p\\x3e\\x3chr class\\x3d\"my-2\"\\x3e \\x3ca class\\x3d\"btn btn-primary btn-sm float-right\" href\\x3d\"https:\/\/mdbootstrap.com\/docs\/standard\/getting-started\/\" role\\x3d\"button\"\\x3eYes, do it\\x3ci class\\x3d\"fas fa-arrow-alt-circle-right ml-2\"\\x3e\\x3c\/i\\x3e\\x3c\/a\\x3e \\x3cbutton type\\x3d\"button\" class\\x3d\"btn btn-outline-primary btn-sm float-right\" data-dismiss\\x3d\"modal\"\\x3e No, thanks \\x3c\/button\\x3e \\x3c\/div\\x3e\\x3c\/div\\x3e\\x3c\/div\\x3e',\ndcModal=document.createElement(\"div\");dcModal.id=ID;dcModal.classList=\"modal fade\";dcModal.setAttribute(\"aria-labelledby\",ID+\"Label\");dcModal.setAttribute(\"aria-hidden\",\"true\");dcModal.setAttribute(\"role\",\"dialog\");dcModal.setAttribute(\"tabindex\",\"-1\");dcModal.setAttribute(\"data-backdrop\",BACKDROP);dcModal.innerHTML=CONTENT;var idToUpperCase=ID.charAt(0).toUpperCase()+ID.slice(1),cookieName=\"seen\"+idToUpperCase,modalViewsCount=", ["escape", ["macro", 48], 8, 16], "(cookieName);\n\"undefined\"===typeof modalViewsCount?(modalViewsCount=1,$(dcModal).appendTo(\"body\"),$(dcModal).modal(\"show\"),$(dcModal).parent().css(\"display\",\"block\"),$(dcModal).parent().css(\"visibility\",\"visible\")):modalViewsCount\u003CMAXVIEWS\u0026\u0026(modalViewsCount++,$(dcModal).appendTo(\"body\"),$(dcModal).modal(\"show\"),$(dcModal).parent().css(\"display\",\"block\"),$(dcModal).parent().css(\"visibility\",\"visible\"));document.cookie=cookieName+\"\\x3d\"+modalViewsCount+\"; path\\x3d\/; expires\\x3dMon, 18 Jan 2038 03:14:07;\";\u003C\/script\u003E\n\n\n\n\n\n"],
                "vtp_supportDocumentWrite": true,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "vtp_usePostscribe": true,
                "tag_id": 2492
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript\u003Evar options={ID:\"newDC-free2-exploreMDBPRO\",HREF:\"", ["escape", ["macro", 62], 7], "\",COLOR:\"hsl(350, 57%, 36%)\",TEXT:\"\\x3cstrong\\x3e5000\\x3c\/strong\\x3e elements, plugins, themes, sections \\x26 more. Learn how MDB PRO \\x3cstrong\\x3emakes work easier\\x3c\/strong\\x3e.\",CTA:\"explore now\"};", ["escape", ["macro", 55], 8, 16], "(options);", ["escape", ["macro", 56], 8, 16], "(options);\u003C\/script\u003E\n\n\n"],
                "vtp_supportDocumentWrite": true,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "vtp_usePostscribe": true,
                "tag_id": 2509
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript\u003Evar options={ID:\"newDC-free3-saleTailored\",HREF:\"", ["escape", ["macro", 63], 7], "\",COLOR:\"hsl(350, 57%, 36%)\",TEXT:\"Get \\x3cstrong\\x3eup to 98% OFF\\x3c\/strong\\x3e before it is \\x3cstrong\\x3etoo late\\x3c\/strong\\x3e.\",CTA:\"claim offer\",COUNTER:", ["escape", ["macro", 66], 8, 16], "};", ["escape", ["macro", 55], 8, 16], "(options);", ["escape", ["macro", 56], 8, 16], "(options);\u003C\/script\u003E\n\n"],
                "vtp_supportDocumentWrite": true,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "vtp_usePostscribe": true,
                "tag_id": 2511
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript\u003Evar options={ID:\"newDC-free6-newsletter\",HREF:\"https:\/\/mdbootstrap.com\/newsletter\/\",COLOR:\"hsl(217, 57%, 51%)\",TEXT:\"Get stuff from \\x3cstrong\\x3ebehind the paywall\\x3c\/strong\\x3e, useful tools, tutorials, awesome \\x3cstrong\\x3efreebies\\x3c\/strong\\x3e \\x26 more!\",CTA:\"get free acces\"};", ["escape", ["macro", 55], 8, 16], "(options);", ["escape", ["macro", 56], 8, 16], "(options);\u003C\/script\u003E\n\n\n"],
                "vtp_supportDocumentWrite": true,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "vtp_usePostscribe": true,
                "tag_id": 2517
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript\u003Evar options={ID:\"newDC-free4-exploreMDBGO\",HREF:\"https:\/\/mdbgo.com\/\",COLOR:\"hsl(217, 57%, 51%)\",TEXT:\"Create \\x26 \\x3cstrong\\x3ehost anything\\x3c\/strong\\x3e with a single command via MDB GO. \\x3cstrong\\x3eFor free\\x3c\/strong\\x3e.\",CTA:\"get free hosting\"};", ["escape", ["macro", 55], 8, 16], "(options);", ["escape", ["macro", 56], 8, 16], "(options);\u003C\/script\u003E\n\n\n"],
                "vtp_supportDocumentWrite": true,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "vtp_usePostscribe": true,
                "tag_id": 2525
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript\u003Evar options={ID:\"newDC-free5-MDBGoTrial\",HREF:\"https:\/\/mdbgo.com\/login\/?redirectTo\\x3dhttps:\/\/dashboard.mdbgo.com\/?trial\\x3d30\\x26mdb_dc_offer\\x3dyes\\x26mdb_counter\\x3d", ["escape", ["macro", 45], 7], "\",COLOR:\"hsl(40, 79%, 50%)\",TEXT:\"\\x3cstrong\\x3e100% OFF\\x3c\/strong\\x3e first month of Professional hosting.\",CTA:\"claim access\",COUNTER:", ["escape", ["macro", 69], 8, 16], "};", ["escape", ["macro", 55], 8, 16], "(options);", ["escape", ["macro", 56], 8, 16], "(options);\u003C\/script\u003E\n\n"],
                "vtp_supportDocumentWrite": true,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "vtp_usePostscribe": true,
                "tag_id": 2526
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript\u003Evar options={ID:\"newDC-free7-endPro\",HREF:\"", ["escape", ["macro", 62], 7], "\",COLOR:\"hsl(217, 57%, 51%)\",TEXT:\"Make your work \\x3cstrong\\x3efaster\\x3c\/strong\\x3e \\x26 more \\x3cstrong\\x3eefficient\\x3c\/strong\\x3e with \\x3cstrong\\x3e5000+\\x3c\/strong\\x3e professional components.\",CTA:\"buy now\"};", ["escape", ["macro", 55], 8, 16], "(options);", ["escape", ["macro", 56], 8, 16], "(options);\u003C\/script\u003E\n\n\n"],
                "vtp_supportDocumentWrite": true,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "vtp_usePostscribe": true,
                "tag_id": 2531
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript\u003Evar options={ID:\"newDC-singleUse-upgrade\",HREF:", ["escape", ["macro", 73], 8, 16], ",COLOR:\"hsl(217, 57%, 51%)\",TEXT:\"Get \\x3cstrong\\x3eUnlimited\\x3c\/strong\\x3e projects, Design Blocks \\x26 \\x3cstrong\\x3ePremium Support\\x3c\/strong\\x3e.\",CTA:\"UPGRADE NOW\",COUNTER:", ["escape", ["macro", 74], 8, 16], "};", ["escape", ["macro", 55], 8, 16], "(options);", ["escape", ["macro", 56], 8, 16], "(options);\u003C\/script\u003E\n\n"],
                "vtp_supportDocumentWrite": true,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "vtp_usePostscribe": true,
                "tag_id": 2537
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript\u003Evar content1={ID:\"newDC-subscriptions-optimization\",HREF:\"https:\/\/mdbootstrap.com\/docs\/standard\/getting-started\/optimization\/\",COLOR:\"hsl(217, 57%, 51%)\",TEXT:'Make your projects \\x3cspan class\\x3d\"fw-bold font-weight-bold\"\\x3elighter\\x3c\/span\\x3e \\x26 \\x3cspan class\\x3d\"fw-bold font-weight-bold\"\\x3efaster\\x3c\/span\\x3e with our \\x3cspan class\\x3d\"fw-bold font-weight-bold\"\\x3eoptimization\\x3c\/span\\x3e guide.',CTA:\"learn more\"},content2={ID:\"newDC-subscriptions-material-minimal\",HREF:\"https:\/\/material-minimal.com\/\",\nCOLOR:\"hsl(218, 11%, 66%)\",TEXT:\"Learn about \\x3cstrong\\x3eMaterial Minimal\\x3c\/strong\\x3e design system \\x26 claim \\x3cstrong\\x3eearly access\\x3c\/strong\\x3e to Figma Design Kit\",CTA:\"CLAIM NOW\"},replacementContents=[content1,content2];", ["escape", ["macro", 55], 8, 16], "(", ["escape", ["macro", 75], 8, 16], "(replacementContents));", ["escape", ["macro", 56], 8, 16], "(", ["escape", ["macro", 75], 8, 16], "(replacementContents));\u003C\/script\u003E\n\n"],
                "vtp_supportDocumentWrite": true,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "vtp_usePostscribe": true,
                "tag_id": 2538
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript\u003Evar options={ID:\"newDC-essential-upgrade\",HREF:", ["escape", ["macro", 76], 8, 16], ",COLOR:\"hsl(217, 57%, 51%)\",TEXT:\"Get powerful \\x3cstrong\\x3eplugins\\x3c\/strong\\x3e, gorgeous \\x3cstrong\\x3etemplates\\x3c\/strong\\x3e \\x26 more. Upgrade with discount.\",CTA:\"CLAIM OFFER\",COUNTER:", ["escape", ["macro", 74], 8, 16], "};", ["escape", ["macro", 55], 8, 16], "(options);", ["escape", ["macro", 56], 8, 16], "(options);\u003C\/script\u003E\n\n"],
                "vtp_supportDocumentWrite": true,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "vtp_usePostscribe": true,
                "tag_id": 2553
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003Evar content1={ID:\"newDC-subscriptions-angular-approach\",HREF:\"https:\/\/mdbootstrap.com\/docs\/angular\/getting-started\/approach\/\",COLOR:\"hsl(217, 57%, 51%)\",TEXT:\"Learn about the guiding principles, strategies, and techniques used to build and maintain Angular Bootstrap projects\",CTA:\"learn more\"},content2={ID:\"newDC-subscriptions-angular-material-minimal\",HREF:\"https:\/\/material-minimal.com\/\",COLOR:\"hsl(218, 11%, 66%)\",TEXT:\"Learn about \\x3cstrong\\x3eMaterial Minimal\\x3c\/strong\\x3e design system \\x26 claim \\x3cstrong\\x3eearly access\\x3c\/strong\\x3e to Figma Design Kit\",\nCTA:\"CLAIM NOW\"},replacementContents=[content1,content2];", ["escape", ["macro", 55], 8, 16], "(", ["escape", ["macro", 75], 8, 16], "(replacementContents));", ["escape", ["macro", 56], 8, 16], "(", ["escape", ["macro", 75], 8, 16], "(replacementContents));\u003C\/script\u003E\n\n"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 2573
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003Evar content1={ID:\"newDC-subscriptions-react-optimization\",HREF:\"https:\/\/mdbootstrap.com\/docs\/react\/getting-started\/optimization\/\",COLOR:\"hsl(217, 57%, 51%)\",TEXT:\"Learn how to make your MDB React apps \\x3cstrong\\x3elighter\\x3c\/strong\\x3e \\x26 \\x3cstrong\\x3efaster\\x3c\/strong\\x3e with our \\x3cstrong\\x3eoptimization\\x3c\/strong\\x3e guide.\",CTA:\"learn more\"},content2={ID:\"newDC-subscriptions-react-mdbgo\",HREF:\"https:\/\/mdbgo.com\/docs\/tutorials\/react\/\",COLOR:\"hsl(218, 11%, 66%)\",TEXT:\"Learn how to create \\x26 deploy your React app via MDB CLI.\",\nCTA:\"learn more\"},content3={ID:\"newDC-subscriptions-react-material-minimal\",HREF:\"https:\/\/material-minimal.com\/\",COLOR:\"hsl(218, 11%, 66%)\",TEXT:\"Learn about \\x3cstrong\\x3eMaterial Minimal\\x3c\/strong\\x3e design system \\x26 claim \\x3cstrong\\x3eearly access\\x3c\/strong\\x3e to Figma Design Kit\",CTA:\"CLAIM NOW\"},replacementContents=[content1,content2,content3];", ["escape", ["macro", 55], 8, 16], "(", ["escape", ["macro", 75], 8, 16], "(replacementContents));", ["escape", ["macro", 56], 8, 16], "(", ["escape", ["macro", 75], 8, 16], "(replacementContents));\u003C\/script\u003E\n\n"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 2574
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003Evar content1={ID:\"newDC-subscriptions-vue-material-minimal\",HREF:\"https:\/\/material-minimal.com\/\",COLOR:\"hsl(218, 11%, 66%)\",TEXT:\"Learn about \\x3cstrong\\x3eMaterial Minimal\\x3c\/strong\\x3e design system \\x26 claim \\x3cstrong\\x3eearly access\\x3c\/strong\\x3e to Figma Design Kit\",CTA:\"CLAIM NOW\"},content2={ID:\"newDC-subscriptions-vue-veevalidate\",HREF:\"https:\/\/mdbootstrap.com\/docs\/vue\/getting-started\/veevalidate\/\",COLOR:\"hsl(144, 78%, 36%)\",TEXT:'Make \\x3cspan class\\x3d\"fw-bold font-weight-bold\"\\x3eforms easily \\x26 quickly\\x3c\/span\\x3e with our new  \\x3cspan class\\x3d\"fw-bold font-weight-bold\"\\x3eVeeValidate integration\\x3c\/span\\x3e guide.',\nCTA:\"learn more\"},content3={ID:\"newDC-subscriptions-vue-pwa\",HREF:\"https:\/\/mdbootstrap.com\/docs\/vue\/getting-started\/pwa\/\",COLOR:\"hsl(217, 57%, 51%)\",TEXT:'Turn your MDB Vue website into an app with our new \\x3cspan class\\x3d\"fw-bold font-weight-bold\"\\x3ePWA integration guide\\x3c\/span\\x3e.',CTA:\"learn more\"},content4={ID:\"newDC-subscriptions-vue-pinia\",HREF:\"https:\/\/mdbootstrap.com\/docs\/vue\/getting-started\/pinia\/\",COLOR:\"hsl(40, 79%, 50%)\",TEXT:'Use \\x3cspan class\\x3d\"fw-bold font-weight-bold\"\\x3eintuitive store management\\x3c\/span\\x3e in your MDB Vue apps with our new \\x3cspan class\\x3d\"fw-bold font-weight-bold\"\\x3ePinia integration\\x3c\/span\\x3e guide.',\nCTA:\"learn more\"},content5={ID:\"newDC-subscriptions-vue-nuxt\",HREF:\"https:\/\/mdbootstrap.com\/docs\/vue\/getting-started\/nuxt\/\",COLOR:\"\\thsl(0, 6%, 19%)\",TEXT:'Make your MDB Vue apps \\x3cspan class\\x3d\"fw-bold font-weight-bold\"\\x3eSEO friendly\\x3c\/span\\x3e with our latest \\x3cspan class\\x3d\"fw-bold font-weight-bold\"\\x3eNuxt integration\\x3c\/span\\x3e guide.',CTA:\"learn more\"},replacementContents=[content1,content2,content3,content4,content5];", ["escape", ["macro", 55], 8, 16], "(", ["escape", ["macro", 75], 8, 16], "(replacementContents));\n", ["escape", ["macro", 56], 8, 16], "(", ["escape", ["macro", 75], 8, 16], "(replacementContents));\u003C\/script\u003E\n\n"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 2575
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript\u003Evar options={ID:\"newDC-advanced-upgrade\",HREF:", ["escape", ["macro", 77], 8, 16], ",COLOR:\"hsl(217, 57%, 51%)\",TEXT:\"Need \\x3cstrong\\x3emore technologies?\\x3c\/strong\\x3e Or maybe a \\x3cstrong\\x3eteam license\\x3c\/strong\\x3e?\",CTA:\"Upgrade now\",COUNTER:", ["escape", ["macro", 74], 8, 16], "};", ["escape", ["macro", 55], 8, 16], "(options);", ["escape", ["macro", 56], 8, 16], "(options);\u003C\/script\u003E\n\n"],
                "vtp_supportDocumentWrite": true,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "vtp_usePostscribe": true,
                "tag_id": 2576
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript\u003Evar options={ID:\"newDC-bundle-mdbgo\",HREF:\"https:\/\/mdbgo.com\/\",COLOR:\"hsl(217, 57%, 51%)\",TEXT:\"Create \\x26 \\x3cstrong\\x3ehost anything\\x3c\/strong\\x3e with a single command via MDB GO. \\x3cstrong\\x3eFor free\\x3c\/strong\\x3e.\",CTA:\"learn more\"};", ["escape", ["macro", 55], 8, 16], "(options);", ["escape", ["macro", 56], 8, 16], "(options);\u003C\/script\u003E\n\n"],
                "vtp_supportDocumentWrite": true,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "vtp_usePostscribe": true,
                "tag_id": 2582
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003Evar now=new Date;", ["escape", ["macro", 47], 8, 16], "(\"firstSeenPricing\",now-2E3,1);\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 2593
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript\u003Evar options={ID:\"newDC-tutorials\",HREF:\"https:\/\/twitter.com\/share?url\\x3dLooking%20for%20a%20beginner%20%F0%9F%8E%93%20web%20development%20course%3F%20%20%0A%0AThis%20is%20my%20recommendation.%20%F0%9F%92%AA%0A%20%0AYou%20will%20learn%20%23Bootstrap%2C%20%23MaterialDesign%2C%20%23UI%2C%20%23UX%2C%20%23webdesign%20best%20practices%20%26%20much%20more.%20%0A%0ALearn%20directly%20from%20%40ascensus_mdb%20the%20founder%20%F0%9F%8C%B1%20of%20%40MDBootstrap.%0A%0Ahttps%3A%2F%2Ft.ly%2FpZyh\",COLOR:\"hsl(217, 78%, 36%)\",\nTEXT:'Ping me on \\x3ci class\\x3d\"fab fa-twitter mx-1\"\\x3e\\x3c\/i\\x3e Twitter! Let me know if you like the tutrial \\x26 \\x3cstrong\\x3eshare it\\x3c\/strong\\x3e with your friends.',CTA:\"Tweet now\"};", ["escape", ["macro", 55], 8, 16], "(options);\u003C\/script\u003E\n\n"],
                "vtp_supportDocumentWrite": true,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "vtp_usePostscribe": true,
                "tag_id": 2603
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript\u003Evar options={ID:\"newDC-godfinger-sale-april\",HREF:", ["escape", ["macro", 78], 8, 16], ",COLOR:\"hsl(144, 57%, 36%)\",TEXT:\"Up to \\x3cstrong\\x3e98% OFF\\x3c\/strong\\x3e in our Limited Sale. Claim your offer before it's \\x3cstrong\\x3etoo late\\x3c\/strong\\x3e.\",CTA:\"CLAIM OFFERS\",COUNTER:", ["escape", ["macro", 79], 8, 16], "};", ["escape", ["macro", 55], 8, 16], "(options);", ["escape", ["macro", 56], 8, 16], "(options);\u003C\/script\u003E\n\n"],
                "vtp_supportDocumentWrite": true,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "vtp_usePostscribe": true,
                "tag_id": 2610
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cdiv data-mdb-modal-non-invasive=\"true\" class=\"modal right fade\" id=\"gdpr_basic\"\u003E\n  \u003Cdiv class=\"modal-dialog modal-sm modal-side modal-bottom-right\"\u003E\n    \u003Cdiv class=\"modal-content\"\u003E\n      \u003Cdiv class=\"modal-body small\"\u003E\n         We use cookies to enhance your browsing experience, analyze trafic, serve ads and personalized content. click \u0026quot;Accept\u0026quot; to consent to our use of cookies.\n      \u003C\/div\u003E\n      \u003Cdiv class=\"modal-footer\"\u003E\n         \u003Cbutton class=\"btn btn-secondary\" id=\"gdpr_btn_adjust\"\u003ESettings\u003C\/button\u003E\n         \u003Cbutton class=\"btn btn-primary ms-1\" id=\"gdpr_btn_full_agree\"\u003EACCEPT COOKIES\u003C\/button\u003E\n      \u003C\/div\u003E\n    \u003C\/div\u003E\n  \u003C\/div\u003E\n\u003C\/div\u003E\n\n\n\n\u003Cdiv class=\"modal fade\" id=\"gdpr_adjust\"\u003E\n  \u003Cdiv class=\"modal-dialog modal-lg\"\u003E\n    \u003Cdiv class=\"modal-content\"\u003E\n      \u003Cdiv class=\"modal-header\"\u003E\n        \u003Ch5 class=\"modal-title\"\u003EPrivacy Preferences\u003C\/h5\u003E\n        \u003Cbutton type=\"button\" class=\"btn-close\" data-mdb-dismiss=\"modal\" aria-label=\"Close\"\u003E\u003C\/button\u003E\n      \u003C\/div\u003E\n      \u003Cdiv class=\"modal-body\"\u003E\n\n        \u003Cp\u003E\u003Cstrong\u003EAdjust your cookies preferences.\u003C\/strong\u003E\u003C\/p\u003E\n\n        \u003Cform action=\"#\" id=\"gdpr_adjust_form\"\u003E\n          \u003Ctable class=\"table\"\u003E\n            \u003Cthead\u003E\n            \u003Ctr\u003E\n              \u003Cth\u003EService\u003C\/th\u003E\n              \u003Cth\u003EWhy?\u003C\/th\u003E\n              \u003Cth\u003EAgreement\u003C\/th\u003E\n            \u003C\/tr\u003E\n            \u003C\/thead\u003E\n            \u003Ctbody\u003E\n            \u003Ctr\u003E\n              \u003Ctd\u003EEssential cookies\u003C\/td\u003E\n              \u003Ctd\u003EThese cookies are strictly necessary to provide you with services available through our websites and\n                to use some of its features, such as access to secure areas. Because these cookies are strictly\n                necessary to deliver the websites, you cannot refuse them without impacting how our websites function.\n                You can block or delete them by changing your browser settings.\n              \u003C\/td\u003E\n              \u003Ctd\u003E\n                \u003Cdiv class=\"d-flex flex-row\"\u003E\n                  \u003Cdiv class=\"pt-1 pe-1\"\u003ENo\u003C\/div\u003E\n                  \u003Cdiv class=\"form-check form-switch\"\u003E\n                    \u003Cinput class=\"form-check-input\" type=\"checkbox\" name=\"gdpr_mandatory\" disabled checked\u003E\n                  \u003C\/div\u003E\n                  \u003Cdiv class=\"pt-1\"\u003EYes\u003C\/div\u003E\n                \u003C\/div\u003E\n              \u003C\/td\u003E\n            \u003C\/tr\u003E\n            \u003Ctr\u003E\n              \u003Ctd\u003EFunctional\u003C\/td\u003E\n              \u003Ctd\u003EThese cookies are used to enhance the performance and functionality of our websites but are\n                non-essential to their use. However, without these cookies, certain functionality may become\n                unavailable. These cookies are served by \u003Ca href=\"https:\/\/brandflow.net\" target=\"_blank\" rel=\"nofollow\"\u003Ebrandflow.net\u003C\/a\u003E.\n              \u003C\/td\u003E\n              \u003Ctd\u003E\n                \u003Cdiv class=\"d-flex flex-row\"\u003E\n                  \u003Cdiv class=\"pt-1 pe-1\"\u003ENo\u003C\/div\u003E\n                  \u003Cdiv class=\"form-check form-switch\"\u003E\n                    \u003Cinput class=\"form-check-input\" type=\"checkbox\" name=\"gdpr_functional\" disabled checked\u003E\n                  \u003C\/div\u003E\n                  \u003Cdiv class=\"pt-1\"\u003EYes\u003C\/div\u003E\n                \u003C\/div\u003E\n              \u003C\/td\u003E\n            \u003C\/tr\u003E\n            \u003Ctr\u003E\n              \u003Ctd\u003EGoogle AdWords\u003C\/td\u003E\n              \u003Ctd\u003EThese cookies are used to make advertising via Google AdWords messages more relevant to you and your\n                interests. They also perform functions like preventing the same ad from continuously reappearing,\n                ensuring that ads are properly displayed, and in some cases selecting advertisements that are based on\n                your interests.\n              \u003C\/td\u003E\n              \u003Ctd\u003E\n                \u003Cdiv class=\"d-flex flex-row\"\u003E\n                  \u003Cdiv class=\"pt-1 pe-1\"\u003ENo\u003C\/div\u003E\n                  \u003Cdiv class=\"form-check form-switch\"\u003E\n                    \u003Cinput class=\"form-check-input\" type=\"checkbox\" name=\"gdpr_ga\" checked\u003E\n                  \u003C\/div\u003E\n                  \u003Cdiv class=\"pt-1\"\u003EYes\u003C\/div\u003E\n                \u003C\/div\u003E\n              \u003C\/td\u003E\n            \u003C\/tr\u003E\n            \u003Ctr\u003E\n              \u003Ctd\u003EFacebook Pixel\u003C\/td\u003E\n              \u003Ctd\u003EThese cookies are used to make advertising Facebook messages more relevant to you and your interests.\n                They also perform functions like preventing the same ad from continuously reappearing, ensuring that ads\n                are properly displayed, and in some cases selecting advertisements that are based on your interests.\n              \u003C\/td\u003E\n              \u003Ctd\u003E\n                \u003Cdiv class=\"d-flex flex-row\"\u003E\n                  \u003Cdiv class=\"pt-1 pe-1\"\u003ENo\u003C\/div\u003E\n                  \u003Cdiv class=\"form-check form-switch\"\u003E\n                    \u003Cinput class=\"form-check-input\" type=\"checkbox\" name=\"gdpr_fbp\" checked\u003E\n                  \u003C\/div\u003E\n                  \u003Cdiv class=\"pt-1\"\u003EYes\u003C\/div\u003E\n                \u003C\/div\u003E\n              \u003C\/td\u003E\n            \u003C\/tr\u003E\n            \u003C\/tbody\u003E\n          \u003C\/table\u003E\n        \u003C\/form\u003E\n\n      \u003C\/div\u003E\n      \u003Cdiv class=\"modal-footer\"\u003E\n        \u003Cbutton class=\"btn btn-primary\" id=\"gdpr_btn_save\" type=\"submit\"\u003ESave\u003C\/button\u003E\n      \u003C\/div\u003E\n    \u003C\/div\u003E\n  \u003C\/div\u003E\n\u003C\/div\u003E\n\n\u003Cdiv class=\"toast text-white fade mx-auto\" id=\"gdpr_toast\" role=\"alert\" aria-live=\"assertive\" aria-atomic=\"true\" data-mdb-autohide=\"true\" data-mdb-delay=\"2000\" data-mdb-position=\"top-right\" data-mdb-color=\"success\"\u003E\n  \u003Cdiv class=\"toast-header\"\u003E\n    \u003Cstrong class=\"me-auto\"\u003EMDBootstrap\u003C\/strong\u003E\n    \u003Cbutton type=\"button\" class=\"btn-close btn-close-white\" data-mdb-dismiss=\"toast\" aria-label=\"Close\"\u003E\u003C\/button\u003E\n  \u003C\/div\u003E\n  \u003Cdiv class=\"toast-body\"\u003E\n    Saved\n  \u003C\/div\u003E\n\u003C\/div\u003E\n\n\n\u003Cscript type=\"text\/gtmscript\"\u003Evar selectedModal=document.getElementById(\"gdpr_basic\"),gdprToastSuccessEl=document.getElementById(\"gdpr_toast\"),gdprToastSuccess=new mdb.Toast(gdprToastSuccessEl),gdprAdjustModal=new mdb.Modal(document.getElementById(\"gdpr_adjust\")),gdprBasicModal=new mdb.Modal(document.getElementById(\"gdpr_basic\"),{modalNonInvasive:!0});-1===document.cookie.indexOf(\"gdpr_mandatory\\x3d\")\u0026\u0026gdprBasicModal.show();\ndocument.getElementById(\"gdpr_btn_full_agree\").addEventListener(\"click\",function(a){a.preventDefault();a=new Date(Date.now()+31536E6);document.cookie=\"gdpr_mandatory\\x3d1; expires\\x3d\"+a.toGMTString()+\"; path\\x3d\/\";document.cookie=\"gdpr_functional\\x3d1; expires\\x3d\"+a.toGMTString()+\"; path\\x3d\/\";document.cookie=\"gdpr_ga\\x3d1; expires\\x3d\"+a.toGMTString()+\"; path\\x3d\/\";document.cookie=\"gdpr_fbp\\x3d1; expires\\x3d\"+a.toGMTString()+\"; path\\x3d\/\";selectedModal.style.display=\"none\"});\ndocument.getElementById(\"gdpr_btn_adjust\").addEventListener(\"click\",function(a){a.preventDefault();mdb.Modal.getInstance(document.getElementById(\"gdpr_basic\"));selectedModal.style.display=\"none\";gdprAdjustModal.show()});\ndocument.getElementById(\"gdpr_btn_save\").addEventListener(\"click\",function(a){a.preventDefault();document.getElementById(\"gdpr_adjust_form\").querySelectorAll('input[type\\x3d\"checkbox\"]').forEach(function(b){var c=b.getAttribute(\"name\");b=\"on\"===b.value?1:0;var d=new Date(Date.now()+31536E6);document.cookie=c+\"\\x3d\"+b+\"; expires\\x3d\"+d.toGMTString()+\"; path\\x3d\/;\"});gdprToastSuccess.show();gdprAdjustModal.hide()});\u003C\/script\u003E\n\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 2614
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cdiv class=\"modal bottom modal-content-clickable\" id=\"gdpr_basic\"\u003E\n  \u003Cdiv class=\"modal-dialog modal-sm modal-side modal-bottom-right\"\u003E\n    \u003Cdiv class=\"modal-content\"\u003E\n      \u003Cdiv class=\"modal-body small\"\u003E\n        We use cookies to enhance your browsing experience, analyze trafic, serve ads and personalized content.\n        Click \u0026quot;Accept\u0026quot; to consent to our use of cookies.\n      \u003C\/div\u003E\n      \u003Cdiv class=\"modal-footer\"\u003E\n            \u003Cbutton class=\"btn btn-md btn-secondary\" style=\"background-color: #e3ebf7 !important; color: #285192 !important; box-shadow: none !important;\" id=\"gdpr_btn_adjust\"\u003ESettings\u003C\/button\u003E\n            \u003Cbutton class=\"btn btn-md btn-primary\" style=\"background-color: #3b71ca !important; color: #fff !important; box-shadow: 0 4px 9px -4px #3b71ca !important\" id=\"gdpr_btn_full_agree\"\u003EACCEPT COOKIES\u003C\/button\u003E\n      \u003C\/div\u003E\n    \u003C\/div\u003E\n  \u003C\/div\u003E\n\u003C\/div\u003E\n\n\u003Cdiv class=\"modal\" id=\"gdpr_adjust\"\u003E\n  \u003Cdiv class=\"modal-dialog modal-lg\"\u003E\n    \u003Cdiv class=\"modal-content\"\u003E\n      \u003Cdiv class=\"modal-header\"\u003E\n        \u003Ch5 class=\"modal-title\"\u003EPrivacy Preferences\u003C\/h5\u003E\n        \u003Cbutton type=\"button\" class=\"close\" data-mdb-dismiss=\"modal\" aria-label=\"Close\"\u003E\n          \u003Cspan aria-hidden=\"true\"\u003E×\u003C\/span\u003E\n        \u003C\/button\u003E\n      \u003C\/div\u003E\n      \u003Cdiv class=\"modal-body\"\u003E\n\n        \u003Cp\u003E\u003Cstrong\u003EAdjust your cookies preferences.\u003C\/strong\u003E\u003C\/p\u003E\n\n        \u003Cform action=\"#\" id=\"gdpr_adjust_form\"\u003E\n          \u003Ctable class=\"table\"\u003E\n            \u003Cthead\u003E\n            \u003Ctr\u003E\n              \u003Cth\u003EService\u003C\/th\u003E\n              \u003Cth\u003EWhy?\u003C\/th\u003E\n              \u003Cth\u003EAgreement\u003C\/th\u003E\n            \u003C\/tr\u003E\n            \u003C\/thead\u003E\n            \u003Ctbody\u003E\n            \u003Ctr\u003E\n              \u003Ctd\u003EEssential cookies\u003C\/td\u003E\n              \u003Ctd\u003EThese cookies are strictly necessary to provide you with services available through our websites and\n                to use some of its features, such as access to secure areas. Because these cookies are strictly\n                necessary to deliver the websites, you cannot refuse them without impacting how our websites function.\n                You can block or delete them by changing your browser settings.\n              \u003C\/td\u003E\n              \u003Ctd\u003E\n                \u003Cdiv class=\"switch\" style=\"min-width: 123px;\"\u003E\n                  \u003Clabel\u003E\n                    No\n                    \u003Cinput type=\"checkbox\" name=\"gdpr_mandatory\" checked disabled\u003E\n                    \u003Cspan class=\"lever\"\u003E\u003C\/span\u003E\n                    Yes\n                  \u003C\/label\u003E\n                \u003C\/div\u003E\n              \u003C\/td\u003E\n            \u003C\/tr\u003E\n            \u003Ctr\u003E\n              \u003Ctd\u003EFunctional\u003C\/td\u003E\n              \u003Ctd\u003EThese cookies are used to enhance the performance and functionality of our websites but are\n                non-essential to their use. However, without these cookies, certain functionality may become\n                unavailable. These cookies are served by \u003Ca href=\"https:\/\/brandflow.net\" target=\"_blank\" rel=\"nofollow\"\u003Ebrandflow.net\u003C\/a\u003E.\n              \u003C\/td\u003E\n              \u003Ctd\u003E\n                \u003Cdiv class=\"switch\" style=\"min-width: 123px;\"\u003E\n                  \u003Clabel\u003E\n                    No\n                    \u003Cinput type=\"checkbox\" name=\"gdpr_functional\" checked disabled\u003E\n                    \u003Cspan class=\"lever\"\u003E\u003C\/span\u003E\n                    Yes\n                  \u003C\/label\u003E\n                \u003C\/div\u003E\n              \u003C\/td\u003E\n            \u003C\/tr\u003E\n            \u003Ctr\u003E\n              \u003Ctd\u003EGoogle AdWords\u003C\/td\u003E\n              \u003Ctd\u003EThese cookies are used to make advertising via Google AdWords messages more relevant to you and your\n                interests. They also perform functions like preventing the same ad from continuously reappearing,\n                ensuring that ads are properly displayed, and in some cases selecting advertisements that are based on\n                your interests.\n              \u003C\/td\u003E\n              \u003Ctd\u003E\n                \u003Cdiv class=\"switch\" style=\"min-width: 123px;\"\u003E\n                  \u003Clabel\u003E\n                    No\n                    \u003Cinput type=\"checkbox\" checked name=\"gdpr_ga\"\u003E\n                    \u003Cspan class=\"lever\"\u003E\u003C\/span\u003E\n                    Yes\n                  \u003C\/label\u003E\n                \u003C\/div\u003E\n              \u003C\/td\u003E\n            \u003C\/tr\u003E\n            \u003Ctr\u003E\n              \u003Ctd\u003EFacebook Pixel\u003C\/td\u003E\n              \u003Ctd\u003EThese cookies are used to make advertising Facebook messages more relevant to you and your interests.\n                They also perform functions like preventing the same ad from continuously reappearing, ensuring that ads\n                are properly displayed, and in some cases selecting advertisements that are based on your interests.\n              \u003C\/td\u003E\n              \u003Ctd\u003E\n                \u003Cdiv class=\"switch\" style=\"min-width: 123px;\"\u003E\n                  \u003Clabel\u003E\n                    No\n                    \u003Cinput type=\"checkbox\" checked name=\"gdpr_fbp\"\u003E\n                    \u003Cspan class=\"lever\"\u003E\u003C\/span\u003E\n                    Yes\n                  \u003C\/label\u003E\n                \u003C\/div\u003E\n              \u003C\/td\u003E\n            \u003C\/tr\u003E\n            \u003C\/tbody\u003E\n          \u003C\/table\u003E\n        \u003C\/form\u003E\n\n      \u003C\/div\u003E\n      \u003Cdiv class=\"modal-footer\"\u003E\n        \u003Cbutton class=\"btn btn-ptc\" id=\"gdpr_btn_save\" type=\"submit\"\u003ESave\u003C\/button\u003E\n      \u003C\/div\u003E\n    \u003C\/div\u003E\n  \u003C\/div\u003E\n\u003C\/div\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003E-1===document.cookie.indexOf(\"gdpr_mandatory\\x3d\")\u0026\u0026window.addEventListener(\"scroll\",function(){var a=window.scrollY,b=document.body.offsetHeight,c=window.innerHeight;a\/=b-c;a=Math.round(100*a);30===a\u0026\u0026-1===document.cookie.indexOf(\"gdpr_mandatory\\x3d\")\u0026\u0026$(\"#gdpr_basic\").modal({backdrop:!1})});\n$(\"#gdpr_btn_full_agree\").click(function(a){a.preventDefault();a=new Date;a=new Date(a.getTime()+31536E6);document.cookie=\"gdpr_mandatory\\x3d1; expires\\x3d\"+a.toGMTString()+\"; path\\x3d\/\";document.cookie=\"gdpr_functional\\x3d1; expires\\x3d\"+a.toGMTString()+\"; path\\x3d\/\";document.cookie=\"gdpr_ga\\x3d1; expires\\x3d\"+a.toGMTString()+\"; path\\x3d\/\";document.cookie=\"gdpr_fbp\\x3d1; expires\\x3d\"+a.toGMTString()+\"; path\\x3d\/\";$(\"#gdpr_basic\").modal(\"hide\")});\n$(\"#gdpr_btn_adjust\").click(function(a){a.preventDefault();$(\"#gdpr_basic\").modal(\"hide\");$(\"#gdpr_adjust\").modal()});$(\"#gdpr_btn_save\").click(function(a){a.preventDefault();$(\"#gdpr_adjust_form\").submit()});\n$(\"#gdpr_adjust_form\").on(\"submit\",function(a){a.preventDefault();$(this).find('input[type\\x3d\"checkbox\"]').each(function(b){b=$(this).attr(\"name\");var c=$(this).is(\":checked\")?1:0,d=new Date;d=new Date(d.getTime()+31536E6);document.cookie=b+\"\\x3d\"+c+\"; expires\\x3d\"+d.toGMTString()+\"; path\\x3d\/;\"});toastr.info(\"Saved\");$(\"#gdpr_adjust\").modal(\"hide\")});\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 2617
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript\u003Efunction changeLinkToTwitter(){for(var b=document.querySelectorAll(\".navbar a[href\\x3d'\/user\/ascensus\/']\"),a=0;a\u003Cb.length;a++){var c=b[a];c.parentElement.innerHTML='\\x3ca class\\x3d\"text-white fw-bold\" href\\x3d\"https:\/\/twitter.com\/intent\/user?screen_name\\x3dascensus_mdb\" rel\\x3d\"nofollow\"\\x3eMichal Szymanski\\x3c\/a\\x3e'}}changeLinkToTwitter();\u003C\/script\u003E",
                "vtp_supportDocumentWrite": true,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "vtp_usePostscribe": true,
                "tag_id": 2625
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript\u003Efunction setCookie(b,c){var a=new Date;a.setTime(a.getTime()+864E5);a=\"Mon, 18 Jan 2038 03:14:07\";document.cookie=b+\"\\x3d\"+c+\";path\\x3d\/;expires\\x3d\"+a}var now=(new Date).getTime();setCookie(\"seenExitIntentCheckoutNew\",!0);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": true,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "vtp_usePostscribe": true,
                "tag_id": 2441
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": true,
                "vtp_overrideGaSettings": false,
                "vtp_eventValue": ["macro", 81],
                "vtp_eventCategory": ["template", "First conversions ", ["macro", 18]],
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 3],
                "vtp_eventAction": "First Download",
                "vtp_eventLabel": ["macro", 82],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 881
            }, {
                "function": "__paused",
                "vtp_originalTagType": "html",
                "tag_id": 2471
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": true,
                "vtp_overrideGaSettings": false,
                "vtp_eventValue": "0",
                "vtp_eventCategory": ["template", "First conversions ", ["macro", 18]],
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 3],
                "vtp_eventAction": "First Seen",
                "vtp_eventLabel": "0",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 880
            }, {
                "function": "__paused",
                "vtp_originalTagType": "html",
                "tag_id": 2489
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": true,
                "vtp_overrideGaSettings": false,
                "vtp_eventValue": ["macro", 81],
                "vtp_eventCategory": ["template", "First conversions ", ["macro", 83]],
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 3],
                "vtp_eventAction": "First Conversion",
                "vtp_eventLabel": ["macro", 81],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 882
            }],
            "predicates": [{
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.js"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.video"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": "(^$|((^|,)2340190_699($|,)))"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.scrollDepth"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": "(^$|((^|,)2340190_702($|,)))"
            }, {
                "function": "_eq",
                "arg0": ["macro", 10],
                "arg1": "mobile"
            }, {
                "function": "_eq",
                "arg0": ["macro", 11],
                "arg1": "0"
            }, {
                "function": "_eq",
                "arg0": ["macro", 12],
                "arg1": "0"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.load"
            }, {
                "function": "_cn",
                "arg0": ["macro", 14],
                "arg1": "directDownload"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.click"
            }, {
                "function": "_cn",
                "arg0": ["macro", 14],
                "arg1": "gitDownload"
            }, {
                "function": "_cn",
                "arg0": ["macro", 14],
                "arg1": "snippet-button-save"
            }, {
                "function": "_cn",
                "arg0": ["macro", 15],
                "arg1": "\/archive\/main.zip"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.linkClick"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": "(^$|((^|,)2340190_1939($|,)))"
            }, {
                "function": "_eq",
                "arg0": ["macro", 20],
                "arg1": "undefined"
            }, {
                "function": "_re",
                "arg0": ["macro", 23],
                "arg1": ".+ click"
            }, {
                "function": "_cn",
                "arg0": ["macro", 15],
                "arg1": "mdbootstrap.com"
            }, {
                "function": "_sw",
                "arg0": ["macro", 15],
                "arg1": "http"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": "(^$|((^|,)2340190_1203($|,)))"
            }, {
                "function": "_cn",
                "arg0": ["macro", 9],
                "arg1": "thank-you"
            }, {
                "function": "_cn",
                "arg0": ["macro", 14],
                "arg1": "download"
            }, {
                "function": "_cn",
                "arg0": ["macro", 9],
                "arg1": "freebies"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.elementVisibility"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": "(^$|((^|,)2340190_1302($|,)))"
            }, {
                "function": "_eq",
                "arg0": ["macro", 14],
                "arg1": "angular-mobile-download"
            }, {
                "function": "_eq",
                "arg0": ["macro", 14],
                "arg1": "vue-mobile-download"
            }, {
                "function": "_re",
                "arg0": ["macro", 34],
                "arg1": "gtmDC-"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": "(^$|((^|,)2340190_1871($|,)))"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": "(^$|((^|,)2340190_2546($|,)))"
            }, {
                "function": "_cn",
                "arg0": ["macro", 9],
                "arg1": "\/checkout\/"
            }, {
                "function": "_eq",
                "arg0": ["macro", 38],
                "arg1": "ON"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": "(^$|((^|,)2340190_2594($|,)))"
            }, {
                "function": "_eq",
                "arg0": ["macro", 39],
                "arg1": "true"
            }, {
                "function": "_eq",
                "arg0": ["macro", 9],
                "arg1": "\/"
            }, {
                "function": "_re",
                "arg0": ["macro", 0],
                "arg1": ".*"
            }, {
                "function": "_cn",
                "arg0": ["macro", 9],
                "arg1": "\/vue\/"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": "(^$|((^|,)2340190_2483($|,)))"
            }, {
                "function": "_cn",
                "arg0": ["macro", 9],
                "arg1": "\/angular\/"
            }, {
                "function": "_cn",
                "arg0": ["macro", 9],
                "arg1": "\/react\/"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": "(^$|((^|,)2340190_2477($|,)))"
            }, {
                "function": "_cn",
                "arg0": ["macro", 31],
                "arg1": "support"
            }, {
                "function": "_cn",
                "arg0": ["macro", 31],
                "arg1": "type=feature-request"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": "(^$|((^|,)2340190_2605($|,)))"
            }, {
                "function": "_re",
                "arg0": ["macro", 9],
                "arg1": ".*getting-started.*"
            }, {
                "function": "_re",
                "arg0": ["macro", 9],
                "arg1": ".*pricing.*"
            }, {
                "function": "_re",
                "arg0": ["macro", 9],
                "arg1": ".*checkout.*"
            }, {
                "function": "_re",
                "arg0": ["macro", 9],
                "arg1": ".*cart.*"
            }, {
                "function": "_re",
                "arg0": ["macro", 9],
                "arg1": ".*pro.*"
            }, {
                "function": "_re",
                "arg0": ["macro", 9],
                "arg1": "\\\/docs\\\/standard\\\/$"
            }, {
                "function": "_re",
                "arg0": ["macro", 9],
                "arg1": "\\\/docs\\\/jquery\\\/$"
            }, {
                "function": "_re",
                "arg0": ["macro", 9],
                "arg1": "\\\/docs\\\/angular\\\/$"
            }, {
                "function": "_re",
                "arg0": ["macro", 9],
                "arg1": "\\\/docs\\\/react\\\/$"
            }, {
                "function": "_re",
                "arg0": ["macro", 9],
                "arg1": "\\\/docs\\\/vue\\\/$"
            }, {
                "function": "_re",
                "arg0": ["macro", 9],
                "arg1": ".*thank-you.*"
            }, {
                "function": "_re",
                "arg0": ["macro", 9],
                "arg1": "^\\\/$"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": "(^$|((^|,)2340190_2499($|,)))"
            }, {
                "function": "_cn",
                "arg0": ["macro", 9],
                "arg1": "\/docs\/"
            }, {
                "function": "_cn",
                "arg0": ["macro", 9],
                "arg1": "\/b4\/"
            }, {
                "function": "_ge",
                "arg0": ["macro", 40],
                "arg1": "2"
            }, {
                "function": "_le",
                "arg0": ["macro", 40],
                "arg1": "20"
            }, {
                "function": "_eq",
                "arg0": ["macro", 41],
                "arg1": "undefined"
            }, {
                "function": "_eq",
                "arg0": ["macro", 42],
                "arg1": "undefined"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.triggerGroup"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": "(^$|((^|,)2340190_1264($|,)))"
            }, {
                "function": "_eq",
                "arg0": ["macro", 43],
                "arg1": "undefined"
            }, {
                "function": "_eq",
                "arg0": ["macro", 32],
                "arg1": "undefined"
            }, {
                "function": "_eq",
                "arg0": ["macro", 44],
                "arg1": "undefined"
            }, {
                "function": "_cn",
                "arg0": ["macro", 15],
                "arg1": "mdbgo.com"
            }, {
                "function": "_eq",
                "arg0": ["macro", 45],
                "arg1": "undefined"
            }, {
                "function": "_lt",
                "arg0": ["macro", 46],
                "arg1": "0"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": "(^$|((^|,)2340190_1369($|,)))"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": "(^$|((^|,)2340190_2501($|,)))"
            }, {
                "function": "_cn",
                "arg0": ["macro", 9],
                "arg1": "\/getting-started\/installation\/"
            }, {
                "function": "_eq",
                "arg0": ["macro", 50],
                "arg1": "undefined"
            }, {
                "function": "_cn",
                "arg0": ["macro", 9],
                "arg1": "\/confirm\/"
            }, {
                "function": "_eq",
                "arg0": ["macro", 51],
                "arg1": "undefined"
            }, {
                "function": "_eq",
                "arg0": ["macro", 52],
                "arg1": "undefined"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": "(^$|((^|,)2340190_2123($|,)))"
            }, {
                "function": "_cn",
                "arg0": ["macro", 31],
                "arg1": "dc_step=1"
            }, {
                "function": "_eq",
                "arg0": ["macro", 38],
                "arg1": "OFF"
            }, {
                "function": "_cn",
                "arg0": ["macro", 31],
                "arg1": "dc_step="
            }, {
                "function": "_cn",
                "arg0": ["macro", 9],
                "arg1": "\/learn\/"
            }, {
                "function": "_cn",
                "arg0": ["macro", 9],
                "arg1": "\/pro\/"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": "(^$|((^|,)2340190_2121($|,)))"
            }, {
                "function": "_cn",
                "arg0": ["macro", 31],
                "arg1": "dc_step=4"
            }, {
                "function": "_re",
                "arg0": ["macro", 57],
                "arg1": ".*refund.*|.*license.*|.*purchase.*|.*token.*|.*access.*|.*gitlab.*|.*product.*|.*upgrade.*",
                "ignore_case": true
            }, {
                "function": "_cn",
                "arg0": ["macro", 9],
                "arg1": "\/support\/ask-question\/"
            }, {
                "function": "_re",
                "arg0": ["macro", 58],
                "arg1": ".*refund.*|.*license.*|.*purchase.*|.*token.*|.*access.*|.*gitlab.*|.*product.*|.*upgrade.*",
                "ignore_case": true
            }, {
                "function": "_cn",
                "arg0": ["macro", 9],
                "arg1": "support\/ask-question\/"
            }, {
                "function": "_cn",
                "arg0": ["macro", 31],
                "arg1": "dc_modal=discountWheelModal"
            }, {
                "function": "_eq",
                "arg0": ["macro", 59],
                "arg1": "true"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "exit_intent"
            }, {
                "function": "_cn",
                "arg0": ["macro", 31],
                "arg1": "?coupon_code=VTZCDYAC"
            }, {
                "function": "_eq",
                "arg0": ["macro", 60],
                "arg1": "true"
            }, {
                "function": "_re",
                "arg0": ["macro", 9],
                "arg1": "(vue)\\\/(pro|templates|plugins|admin-dashboard)?"
            }, {
                "function": "_cn",
                "arg0": ["macro", 31],
                "arg1": "?utm_ref_id=82665"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": "(^$|((^|,)2340190_2469($|,)))"
            }, {
                "function": "_eq",
                "arg0": ["macro", 61],
                "arg1": "true"
            }, {
                "function": "_cn",
                "arg0": ["macro", 31],
                "arg1": "?utm_ref_id=299319"
            }, {
                "function": "_cn",
                "arg0": ["macro", 31],
                "arg1": "checkout"
            }, {
                "function": "_cn",
                "arg0": ["macro", 31],
                "arg1": "docs"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": "(^$|((^|,)2340190_2487($|,)))"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": "(^$|((^|,)2340190_2497($|,)))"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": "(^$|((^|,)2340190_2510($|,)))"
            }, {
                "function": "_cn",
                "arg0": ["macro", 31],
                "arg1": "dc_step=2"
            }, {
                "function": "_sw",
                "arg0": ["macro", 46],
                "arg1": "-"
            }, {
                "function": "_eq",
                "arg0": ["macro", 46],
                "arg1": "0"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": "(^$|((^|,)2340190_2000($|,)))"
            }, {
                "function": "_cn",
                "arg0": ["macro", 9],
                "arg1": "\/sale\/tailored\/"
            }, {
                "function": "_cn",
                "arg0": ["macro", 31],
                "arg1": "dc_step=3"
            }, {
                "function": "_le",
                "arg0": ["macro", 67],
                "arg1": "0"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": "(^$|((^|,)2340190_2530($|,)))"
            }, {
                "function": "_cn",
                "arg0": ["macro", 31],
                "arg1": "dc_step=6"
            }, {
                "function": "_le",
                "arg0": ["macro", 46],
                "arg1": "0"
            }, {
                "function": "_eq",
                "arg0": ["macro", 68],
                "arg1": "undefined"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": "(^$|((^|,)2340190_2518($|,)))"
            }, {
                "function": "_eq",
                "arg0": ["macro", 67],
                "arg1": "0"
            }, {
                "function": "_sw",
                "arg0": ["macro", 67],
                "arg1": "-"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": "(^$|((^|,)2340190_2527($|,)))"
            }, {
                "function": "_cn",
                "arg0": ["macro", 31],
                "arg1": "dc_step=5"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": "(^$|((^|,)2340190_2532($|,)))"
            }, {
                "function": "_cn",
                "arg0": ["macro", 31],
                "arg1": "dc_step=7"
            }, {
                "function": "_ge",
                "arg0": ["macro", 71],
                "arg1": "7"
            }, {
                "function": "_sw",
                "arg0": ["macro", 72],
                "arg1": "-"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": "(^$|((^|,)2340190_2535($|,)))"
            }, {
                "function": "_cn",
                "arg0": ["macro", 9],
                "arg1": "\/sale\/upgrade\/"
            }, {
                "function": "_lt",
                "arg0": ["macro", 71],
                "arg1": "7"
            }, {
                "function": "_cn",
                "arg0": ["macro", 9],
                "arg1": "angular"
            }, {
                "function": "_cn",
                "arg0": ["macro", 9],
                "arg1": "react"
            }, {
                "function": "_cn",
                "arg0": ["macro", 9],
                "arg1": "vue"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": "(^$|((^|,)2340190_2562($|,)))"
            }, {
                "function": "_eq",
                "arg0": ["macro", 70],
                "arg1": "undefined"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": "(^$|((^|,)2340190_2563($|,)))"
            }, {
                "function": "_gt",
                "arg0": ["macro", 71],
                "arg1": "7"
            }, {
                "function": "_lt",
                "arg0": ["macro", 72],
                "arg1": "0"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": "(^$|((^|,)2340190_2577($|,)))"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": "(^$|((^|,)2340190_2147($|,)))"
            }, {
                "function": "_cn",
                "arg0": ["macro", 9],
                "arg1": "\/thank-you\/"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": "(^$|((^|,)2340190_2567($|,)))"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": "(^$|((^|,)2340190_2570($|,)))"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": "(^$|((^|,)2340190_2578($|,)))"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": "(^$|((^|,)2340190_2568($|,)))"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": "(^$|((^|,)2340190_2571($|,)))"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": "(^$|((^|,)2340190_2579($|,)))"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": "(^$|((^|,)2340190_2569($|,)))"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": "(^$|((^|,)2340190_2572($|,)))"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": "(^$|((^|,)2340190_2580($|,)))"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": "(^$|((^|,)2340190_2148($|,)))"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": "(^$|((^|,)2340190_2581($|,)))"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": "(^$|((^|,)2340190_2604($|,)))"
            }, {
                "function": "_eq",
                "arg0": ["macro", 80],
                "arg1": "gdpr-modal-cookies"
            }, {
                "function": "_cn",
                "arg0": ["macro", 9],
                "arg1": "\/support\/"
            }, {
                "function": "_cn",
                "arg0": ["macro", 9],
                "arg1": "\/snippets\/"
            }, {
                "function": "_cn",
                "arg0": ["macro", 9],
                "arg1": "\/ascensus\/"
            }],
            "rules": [
                [
                    ["if", 0],
                    ["add", 3, 19, 22, 99, 102, 27, 29, 30, 31, 32, 33, 34, 35, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 52, 53, 54, 55, 57, 63, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 92]
                ],
                [
                    ["if", 1, 2],
                    ["add", 4]
                ],
                [
                    ["if", 3, 4],
                    ["add", 5]
                ],
                [
                    ["if", 8],
                    ["unless", 5, 6, 7],
                    ["add", 6, 15, 93, 114]
                ],
                [
                    ["if", 9, 10],
                    ["add", 7, 12, 13, 21, 36, 94]
                ],
                [
                    ["if", 10, 11],
                    ["add", 7, 12, 13, 94]
                ],
                [
                    ["if", 10, 12],
                    ["add", 7, 12, 13]
                ],
                [
                    ["if", 13, 14, 15],
                    ["add", 7]
                ],
                [
                    ["if", 10, 17],
                    ["unless", 16],
                    ["add", 8]
                ],
                [
                    ["if", 14, 19, 20],
                    ["unless", 18],
                    ["add", 9]
                ],
                [
                    ["if", 0, 21],
                    ["add", 10, 11]
                ],
                [
                    ["if", 10, 22, 23],
                    ["add", 12, 13, 94]
                ],
                [
                    ["if", 24, 25],
                    ["add", 14]
                ],
                [
                    ["if", 10, 26],
                    ["add", 16]
                ],
                [
                    ["if", 10, 27],
                    ["add", 16]
                ],
                [
                    ["if", 14, 28, 29],
                    ["add", 17]
                ],
                [
                    ["if", 24, 30],
                    ["add", 18]
                ],
                [
                    ["if", 0, 31],
                    ["add", 20]
                ],
                [
                    ["if", 24, 32, 33],
                    ["add", 23, 133]
                ],
                [
                    ["if", 24, 32, 37, 38],
                    ["add", 24]
                ],
                [
                    ["if", 24, 32, 41],
                    ["unless", 37, 39, 40],
                    ["add", 25]
                ],
                [
                    ["if", 3, 42, 43, 44],
                    ["add", 26]
                ],
                [
                    ["if", 8],
                    ["add", 28, 51, 56, 62, 91]
                ],
                [
                    ["if", 3, 57],
                    ["unless", 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56],
                    ["add", 58, 64, 2]
                ],
                [
                    ["if", 0, 58],
                    ["add", 59, 65]
                ],
                [
                    ["if", 0, 59],
                    ["add", 60]
                ],
                [
                    ["if", 0, 60, 61],
                    ["add", 61, 67]
                ],
                [
                    ["if", 0],
                    ["unless", 59],
                    ["add", 66]
                ],
                [
                    ["if", 0, 62],
                    ["add", 95]
                ],
                [
                    ["if", 63, 64, 65],
                    ["add", 96, 98]
                ],
                [
                    ["if", 0, 21, 66],
                    ["unless", 63],
                    ["add", 97]
                ],
                [
                    ["if", 0, 67],
                    ["add", 100]
                ],
                [
                    ["if", 0],
                    ["unless", 68],
                    ["add", 101]
                ],
                [
                    ["if", 14, 69, 70, 71, 72],
                    ["add", 103]
                ],
                [
                    ["if", 64, 73],
                    ["add", 104]
                ],
                [
                    ["if", 0, 74, 75],
                    ["add", 105]
                ],
                [
                    ["if", 0, 76, 77],
                    ["add", 106]
                ],
                [
                    ["if", 24, 75, 78, 79],
                    ["unless", 35],
                    ["add", 107]
                ],
                [
                    ["if", 8, 80],
                    ["add", 107]
                ],
                [
                    ["if", 24, 78, 84, 85],
                    ["add", 0]
                ],
                [
                    ["if", 8, 86],
                    ["add", 0, 120]
                ],
                [
                    ["if", 10, 87, 88],
                    ["add", 108]
                ],
                [
                    ["if", 10, 89, 90],
                    ["add", 108]
                ],
                [
                    ["if", 0, 91],
                    ["add", 109]
                ],
                [
                    ["if", 8, 74],
                    ["add", 110]
                ],
                [
                    ["if", 31, 93],
                    ["unless", 92],
                    ["add", 111]
                ],
                [
                    ["if", 8, 94],
                    ["add", 112]
                ],
                [
                    ["if", 3, 96, 97, 98],
                    ["unless", 95],
                    ["add", 113]
                ],
                [
                    ["if", 3, 100, 102, 103],
                    ["unless", 99, 101],
                    ["add", 115]
                ],
                [
                    ["if", 64, 104],
                    ["add", 116]
                ],
                [
                    ["if", 24, 78, 105],
                    ["unless", 75],
                    ["add", 117]
                ],
                [
                    ["if", 8, 106],
                    ["add", 117]
                ],
                [
                    ["if", 24, 109],
                    ["unless", 78, 107, 108],
                    ["add", 118]
                ],
                [
                    ["if", 0, 110],
                    ["add", 118]
                ],
                [
                    ["if", 8, 111],
                    ["add", 118, 131]
                ],
                [
                    ["if", 24, 77, 112, 113],
                    ["add", 119]
                ],
                [
                    ["if", 8, 114],
                    ["add", 119]
                ],
                [
                    ["if", 36, 82],
                    ["unless", 114],
                    ["add", 119],
                    ["block", 119]
                ],
                [
                    ["if", 24, 70, 115, 116, 117],
                    ["add", 120]
                ],
                [
                    ["if", 24, 115, 116, 120],
                    ["unless", 70, 118, 119],
                    ["add", 121]
                ],
                [
                    ["if", 8, 121],
                    ["add", 121]
                ],
                [
                    ["if", 24, 112, 122],
                    ["unless", 77, 78],
                    ["add", 122]
                ],
                [
                    ["if", 8, 123],
                    ["add", 122]
                ],
                [
                    ["if", 24, 124, 126],
                    ["unless", 125],
                    ["add", 123]
                ],
                [
                    ["if", 0, 127],
                    ["add", 123, 125, 129]
                ],
                [
                    ["if", 24, 128, 132],
                    ["unless", 129, 130, 131],
                    ["add", 124]
                ],
                [
                    ["if", 24, 133, 134],
                    ["unless", 129, 130, 131],
                    ["add", 124]
                ],
                [
                    ["if", 24, 135, 136, 137],
                    ["unless", 129, 130, 131],
                    ["add", 124]
                ],
                [
                    ["if", 24, 124, 138],
                    ["unless", 125],
                    ["add", 125]
                ],
                [
                    ["if", 0, 133, 139],
                    ["add", 1]
                ],
                [
                    ["if", 24, 129, 133, 140],
                    ["add", 126]
                ],
                [
                    ["if", 24, 128, 129, 141],
                    ["add", 126]
                ],
                [
                    ["if", 24, 129, 135, 136, 142],
                    ["add", 126]
                ],
                [
                    ["if", 24, 130, 133, 143],
                    ["add", 127]
                ],
                [
                    ["if", 24, 128, 130, 144],
                    ["add", 127]
                ],
                [
                    ["if", 24, 130, 135, 136, 145],
                    ["add", 127]
                ],
                [
                    ["if", 24, 131, 133, 146],
                    ["add", 128]
                ],
                [
                    ["if", 24, 128, 131, 147],
                    ["add", 128]
                ],
                [
                    ["if", 24, 131, 135, 136, 148],
                    ["add", 128]
                ],
                [
                    ["if", 24, 124, 149],
                    ["unless", 125],
                    ["add", 129]
                ],
                [
                    ["if", 24, 124, 150],
                    ["unless", 125],
                    ["add", 130]
                ],
                [
                    ["if", 24, 83, 151],
                    ["add", 132]
                ],
                [
                    ["if", 8, 152],
                    ["unless", 59, 153],
                    ["add", 134]
                ],
                [
                    ["if", 8, 59, 152],
                    ["add", 135]
                ],
                [
                    ["if", 8, 152, 153],
                    ["add", 135]
                ],
                [
                    ["if", 0, 154, 155],
                    ["add", 136]
                ],
                [
                    ["if", 34, 35, 36],
                    ["block", 23, 107, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 133]
                ],
                [
                    ["if", 6, 36],
                    ["block", 93, 94]
                ],
                [
                    ["if", 36],
                    ["unless", 81],
                    ["block", 107, 117, 118, 119, 120, 121, 122]
                ],
                [
                    ["if", 36, 82],
                    ["unless", 80],
                    ["block", 107]
                ],
                [
                    ["if", 36, 83],
                    ["block", 107, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130]
                ],
                [
                    ["if", 36, 82],
                    ["unless", 106],
                    ["block", 117]
                ],
                [
                    ["if", 36, 82],
                    ["unless", 111],
                    ["block", 118]
                ],
                [
                    ["if", 36, 82],
                    ["unless", 86],
                    ["block", 120]
                ],
                [
                    ["if", 36, 82],
                    ["unless", 121],
                    ["block", 121]
                ],
                [
                    ["if", 36, 82],
                    ["unless", 123],
                    ["block", 122]
                ]
            ]
        },
        "runtime": []










    };

    (function() {
        /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */
        var C = this || self,
            D = function(n, v) {
                var w = n.split("."),
                    q = C;
                w[0] in q || "undefined" == typeof q.execScript || q.execScript("var " + w[0]);
                for (var t; w.length && (t = w.shift());) w.length || void 0 === v ? q = q[t] && q[t] !== Object.prototype[t] ? q[t] : q[t] = {} : q[t] = v
            };
        /*
         Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
        var E, F = function() {};
        (function() {
            function n(h, m) {
                h = h || "";
                m = m || {};
                for (var y in v) v.hasOwnProperty(y) && (m.N && (m["fix_" + y] = !0), m.G = m.G || m["fix_" + y]);
                var z = {
                        comment: /^\x3c!--/,
                        endTag: /^<\//,
                        atomicTag: /^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,
                        startTag: /^</,
                        chars: /^[^<]/
                    },
                    e = {
                        comment: function() {
                            var a = h.indexOf("--\x3e");
                            if (0 <= a) return {
                                content: h.substr(4, a),
                                length: a + 3
                            }
                        },
                        endTag: function() {
                            var a = h.match(q);
                            if (a) return {
                                tagName: a[1],
                                length: a[0].length
                            }
                        },
                        atomicTag: function() {
                            var a = e.startTag();
                            if (a) {
                                var b = h.slice(a.length);
                                if (b.match(new RegExp("</\\s*" + a.tagName + "\\s*>", "i"))) {
                                    var c = b.match(new RegExp("([\\s\\S]*?)</\\s*" + a.tagName + "\\s*>", "i"));
                                    if (c) return {
                                        tagName: a.tagName,
                                        g: a.g,
                                        content: c[1],
                                        length: c[0].length + a.length
                                    }
                                }
                            }
                        },
                        startTag: function() {
                            var a = h.match(w);
                            if (a) {
                                var b = {};
                                a[2].replace(t, function(c, d, k, g, r) {
                                    var u = k || g || r || B.test(d) && d || null,
                                        l = document.createElement("div");
                                    l.innerHTML = u;
                                    b[d] = l.textContent || l.innerText || u
                                });
                                return {
                                    tagName: a[1],
                                    g: b,
                                    s: !!a[3],
                                    length: a[0].length
                                }
                            }
                        },
                        chars: function() {
                            var a = h.indexOf("<");
                            return {
                                length: 0 <= a ? a : h.length
                            }
                        }
                    },
                    f = function() {
                        for (var a in z)
                            if (z[a].test(h)) {
                                var b = e[a]();
                                return b ? (b.type = b.type || a, b.text = h.substr(0, b.length), h = h.slice(b.length), b) : null
                            }
                    };
                m.G && function() {
                    var a = /^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,
                        b = /^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,
                        c = [];
                    c.H = function() {
                        return this[this.length - 1]
                    };
                    c.v = function(l) {
                        var p = this.H();
                        return p && p.tagName && p.tagName.toUpperCase() === l.toUpperCase()
                    };
                    c.V = function(l) {
                        for (var p =
                                0, x; x = this[p]; p++)
                            if (x.tagName === l) return !0;
                        return !1
                    };
                    var d = function(l) {
                            l && "startTag" === l.type && (l.s = a.test(l.tagName) || l.s);
                            return l
                        },
                        k = f,
                        g = function() {
                            h = "</" + c.pop().tagName + ">" + h
                        },
                        r = {
                            startTag: function(l) {
                                var p = l.tagName;
                                "TR" === p.toUpperCase() && c.v("TABLE") ? (h = "<TBODY>" + h, u()) : m.oa && b.test(p) && c.V(p) ? c.v(p) ? g() : (h = "</" + l.tagName + ">" + h, u()) : l.s || c.push(l)
                            },
                            endTag: function(l) {
                                c.H() ? m.W && !c.v(l.tagName) ? g() : c.pop() : m.W && (k(), u())
                            }
                        },
                        u = function() {
                            var l = h,
                                p = d(k());
                            h = l;
                            if (p && r[p.type]) r[p.type](p)
                        };
                    f = function() {
                        u();
                        return d(k())
                    }
                }();
                return {
                    append: function(a) {
                        h += a
                    },
                    ea: f,
                    sa: function(a) {
                        for (var b;
                            (b = f()) && (!a[b.type] || !1 !== a[b.type](b)););
                    },
                    clear: function() {
                        var a = h;
                        h = "";
                        return a
                    },
                    ta: function() {
                        return h
                    },
                    stack: []
                }
            }
            var v = function() {
                    var h = {},
                        m = this.document.createElement("div");
                    m.innerHTML = "<P><I></P></I>";
                    h.va = "<P><I></P></I>" !== m.innerHTML;
                    m.innerHTML = "<P><i><P></P></i></P>";
                    h.ua = 2 === m.childNodes.length;
                    return h
                }(),
                w = /^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
                q = /^<\/([\-A-Za-z0-9_]+)[^>]*>/,
                t = /([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,
                B = /^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;
            n.supports = v;
            for (var A in v);
            E = n
        })();
        (function() {
            function n() {}

            function v(e) {
                return void 0 !== e && null !== e
            }

            function w(e, f, a) {
                var b, c = e && e.length || 0;
                for (b = 0; b < c; b++) f.call(a, e[b], b)
            }

            function q(e, f, a) {
                for (var b in e) e.hasOwnProperty(b) && f.call(a, b, e[b])
            }

            function t(e, f) {
                q(f, function(a, b) {
                    e[a] = b
                });
                return e
            }

            function B(e, f) {
                e = e || {};
                q(f, function(a, b) {
                    v(e[a]) || (e[a] = b)
                });
                return e
            }

            function A(e) {
                try {
                    return y.call(e)
                } catch (a) {
                    var f = [];
                    w(e, function(b) {
                        f.push(b)
                    });
                    return f
                }
            }
            var h = {
                    J: n,
                    K: n,
                    L: n,
                    M: n,
                    O: n,
                    P: function(e) {
                        return e
                    },
                    done: n,
                    error: function(e) {
                        throw e;
                    },
                    fa: !1
                },
                m = this;
            if (!m.postscribe) {
                var y = Array.prototype.slice,
                    z = function() {
                        function e(a, b, c) {
                            var d = "data-ps-" + b;
                            if (2 === arguments.length) {
                                var k = a.getAttribute(d);
                                return v(k) ? String(k) : k
                            }
                            v(c) && "" !== c ? a.setAttribute(d, c) : a.removeAttribute(d)
                        }

                        function f(a, b) {
                            var c = a.ownerDocument;
                            t(this, {
                                root: a,
                                options: b,
                                l: c.defaultView || c.parentWindow,
                                i: c,
                                o: E("", {
                                    N: !0
                                }),
                                u: [a],
                                B: "",
                                C: c.createElement(a.nodeName),
                                j: [],
                                h: []
                            });
                            e(this.C, "proxyof", 0)
                        }
                        f.prototype.write = function() {
                            [].push.apply(this.h, arguments);
                            for (var a; !this.m &&
                                this.h.length;) a = this.h.shift(), "function" === typeof a ? this.U(a) : this.D(a)
                        };
                        f.prototype.U = function(a) {
                            var b = {
                                type: "function",
                                value: a.name || a.toString()
                            };
                            this.A(b);
                            a.call(this.l, this.i);
                            this.I(b)
                        };
                        f.prototype.D = function(a) {
                            this.o.append(a);
                            for (var b, c = [], d, k;
                                (b = this.o.ea()) && !(d = b && "tagName" in b ? !!~b.tagName.toLowerCase().indexOf("script") : !1) && !(k = b && "tagName" in b ? !!~b.tagName.toLowerCase().indexOf("style") : !1);) c.push(b);
                            this.ka(c);
                            d && this.X(b);
                            k && this.Y(b)
                        };
                        f.prototype.ka = function(a) {
                            var b = this.R(a);
                            b.F && (b.Z = this.B + b.F, this.B += b.proxy, this.C.innerHTML = b.Z, this.ia())
                        };
                        f.prototype.R = function(a) {
                            var b = this.u.length,
                                c = [],
                                d = [],
                                k = [];
                            w(a, function(g) {
                                c.push(g.text);
                                if (g.g) {
                                    if (!/^noscript$/i.test(g.tagName)) {
                                        var r = b++;
                                        d.push(g.text.replace(/(\/?>)/, " data-ps-id=" + r + " $1"));
                                        "ps-script" !== g.g.id && "ps-style" !== g.g.id && k.push("atomicTag" === g.type ? "" : "<" + g.tagName + " data-ps-proxyof=" + r + (g.s ? " />" : ">"))
                                    }
                                } else d.push(g.text), k.push("endTag" === g.type ? g.text : "")
                            });
                            return {
                                wa: a,
                                raw: c.join(""),
                                F: d.join(""),
                                proxy: k.join("")
                            }
                        };
                        f.prototype.ia = function() {
                            for (var a, b = [this.C]; v(a = b.shift());) {
                                var c = 1 === a.nodeType;
                                if (!c || !e(a, "proxyof")) {
                                    c && (this.u[e(a, "id")] = a, e(a, "id", null));
                                    var d = a.parentNode && e(a.parentNode, "proxyof");
                                    d && this.u[d].appendChild(a)
                                }
                                b.unshift.apply(b, A(a.childNodes))
                            }
                        };
                        f.prototype.X = function(a) {
                            var b = this.o.clear();
                            b && this.h.unshift(b);
                            a.src = a.g.src || a.g.ma;
                            a.src && this.j.length ? this.m = a : this.A(a);
                            var c = this;
                            this.ja(a, function() {
                                c.I(a)
                            })
                        };
                        f.prototype.Y = function(a) {
                            var b = this.o.clear();
                            b && this.h.unshift(b);
                            a.type =
                                a.g.type || a.g.TYPE || "text/css";
                            this.la(a);
                            b && this.write()
                        };
                        f.prototype.la = function(a) {
                            var b = this.T(a);
                            this.ba(b);
                            a.content && (b.styleSheet && !b.sheet ? b.styleSheet.cssText = a.content : b.appendChild(this.i.createTextNode(a.content)))
                        };
                        f.prototype.T = function(a) {
                            var b = this.i.createElement(a.tagName);
                            b.setAttribute("type", a.type);
                            q(a.g, function(c, d) {
                                b.setAttribute(c, d)
                            });
                            return b
                        };
                        f.prototype.ba = function(a) {
                            this.D('<span id="ps-style"/>');
                            var b = this.i.getElementById("ps-style");
                            b.parentNode.replaceChild(a,
                                b)
                        };
                        f.prototype.A = function(a) {
                            a.ca = this.h;
                            this.h = [];
                            this.j.unshift(a)
                        };
                        f.prototype.I = function(a) {
                            a !== this.j[0] ? this.options.error({
                                message: "Bad script nesting or script finished twice"
                            }) : (this.j.shift(), this.write.apply(this, a.ca), !this.j.length && this.m && (this.A(this.m), this.m = null))
                        };
                        f.prototype.ja = function(a, b) {
                            var c = this.S(a),
                                d = this.ha(c),
                                k = this.options.J;
                            a.src && (c.src = a.src, this.ga(c, d ? k : function() {
                                b();
                                k()
                            }));
                            try {
                                this.aa(c), a.src && !d || b()
                            } catch (g) {
                                this.options.error(g), b()
                            }
                        };
                        f.prototype.S = function(a) {
                            var b =
                                this.i.createElement(a.tagName);
                            q(a.g, function(c, d) {
                                b.setAttribute(c, d)
                            });
                            a.content && (b.text = a.content);
                            return b
                        };
                        f.prototype.aa = function(a) {
                            this.D('<span id="ps-script"/>');
                            var b = this.i.getElementById("ps-script");
                            b.parentNode.replaceChild(a, b)
                        };
                        f.prototype.ga = function(a, b) {
                            function c() {
                                a = a.onload = a.onreadystatechange = a.onerror = null
                            }
                            var d = this.options.error;
                            t(a, {
                                onload: function() {
                                    c();
                                    b()
                                },
                                onreadystatechange: function() {
                                    /^(loaded|complete)$/.test(a.readyState) && (c(), b())
                                },
                                onerror: function() {
                                    var k = {
                                        message: "remote script failed " + a.src
                                    };
                                    c();
                                    d(k);
                                    b()
                                }
                            })
                        };
                        f.prototype.ha = function(a) {
                            return !/^script$/i.test(a.nodeName) || !!(this.options.fa && a.src && a.hasAttribute("async"))
                        };
                        return f
                    }();
                m.postscribe = function() {
                    function e() {
                        var d = b.shift(),
                            k;
                        d && (k = d[d.length - 1], k.K(), d.stream = f.apply(null, d), k.L())
                    }

                    function f(d, k, g) {
                        function r(x) {
                            x = g.P(x);
                            c.write(x);
                            g.M(x)
                        }
                        c = new z(d, g);
                        c.id = a++;
                        c.name = g.name || c.id;
                        var u = d.ownerDocument,
                            l = {
                                close: u.close,
                                open: u.open,
                                write: u.write,
                                writeln: u.writeln
                            };
                        t(u, {
                            close: n,
                            open: n,
                            write: function() {
                                return r(A(arguments).join(""))
                            },
                            writeln: function() {
                                return r(A(arguments).join("") + "\n")
                            }
                        });
                        var p = c.l.onerror || n;
                        c.l.onerror = function(x, G, H) {
                            g.error({
                                qa: x + " - " + G + ":" + H
                            });
                            p.apply(c.l, arguments)
                        };
                        c.write(k, function() {
                            t(u, l);
                            c.l.onerror = p;
                            g.done();
                            c = null;
                            e()
                        });
                        return c
                    }
                    var a = 0,
                        b = [],
                        c = null;
                    return t(function(d, k, g) {
                        "function" === typeof g && (g = {
                            done: g
                        });
                        g = B(g, h);
                        d = /^#/.test(d) ? m.document.getElementById(d.substr(1)) : d.pa ? d[0] : d;
                        var r = [d, k, g];
                        d.da = {
                            cancel: function() {
                                r.stream ? r.stream.abort() :
                                    r[1] = n
                            }
                        };
                        g.O(r);
                        b.push(r);
                        c || e();
                        return d.da
                    }, {
                        streams: {},
                        ra: b,
                        na: z
                    })
                }();
                F = m.postscribe
            }
        })();
        D("google_tag_manager_external.postscribe.installPostscribe", function() {
            var n = window.google_tag_manager;
            n && (n.postscribe || (n.postscribe = window.postscribe || F))
        });
        D("google_tag_manager_external.postscribe.getPostscribe", function() {
            return window.google_tag_manager.postscribe
        });
    }).call(this);
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var ba, ca = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        fa = function(a) {
            var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
            if (b) return b.call(a);
            if ("number" == typeof a.length) return {
                next: ca(a)
            };
            throw Error(String(a) + " is not an iterable or ArrayLike");
        },
        ha = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        ia;
    if ("function" == typeof Object.setPrototypeOf) ia = Object.setPrototypeOf;
    else {
        var ja;
        a: {
            var ka = {
                    a: !0
                },
                la = {};
            try {
                la.__proto__ = ka;
                ja = la.a;
                break a
            } catch (a) {}
            ja = !1
        }
        ia = ja ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var ma = ia,
        na = function(a, b) {
            a.prototype = ha(b.prototype);
            a.prototype.constructor = a;
            if (ma) ma(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.jm = b.prototype
        },
        oa = this || self,
        pa = function(a) {
            return a
        };
    var qa = function() {},
        ra = function(a) {
            return "function" === typeof a
        },
        h = function(a) {
            return "string" === typeof a
        },
        ta = function(a) {
            return "number" === typeof a && !isNaN(a)
        },
        ua = Array.isArray,
        va = function(a, b) {
            if (a && ua(a))
                for (var c = 0; c < a.length; c++)
                    if (a[c] && b(a[c])) return a[c]
        },
        wa = function(a, b) {
            if (!ta(a) || !ta(b) || a > b) a = 0, b = 2147483647;
            return Math.floor(Math.random() * (b - a + 1) + a)
        },
        za = function(a, b) {
            for (var c = new xa, d = 0; d < a.length; d++) c.set(a[d], !0);
            for (var e = 0; e < b.length; e++)
                if (c.get(b[e])) return !0;
            return !1
        },
        k = function(a,
            b) {
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
        },
        Aa = function(a) {
            return !!a && ("[object Arguments]" === Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, "callee"))
        },
        Ba = function(a) {
            return Math.round(Number(a)) || 0
        },
        Ca = function(a) {
            return "false" === String(a).toLowerCase() ? !1 : !!a
        },
        Ea = function(a) {
            var b = [];
            if (ua(a))
                for (var c = 0; c < a.length; c++) b.push(String(a[c]));
            return b
        },
        Fa = function(a) {
            return a ? a.replace(/^\s+|\s+$/g, "") : ""
        },
        Ga = function() {
            return new Date(Date.now())
        },
        Ha = function() {
            return Ga().getTime()
        },
        xa = function() {
            this.prefix = "gtm.";
            this.values = {}
        };
    xa.prototype.set = function(a, b) {
        this.values[this.prefix + a] = b
    };
    xa.prototype.get = function(a) {
        return this.values[this.prefix + a]
    };
    var Ia = function(a, b, c) {
            return a && a.hasOwnProperty(b) ? a[b] : c
        },
        Ja = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = void 0;
                    try {
                        c()
                    } catch (d) {}
                }
            }
        },
        Ka = function(a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
        },
        La = function(a) {
            for (var b in a)
                if (a.hasOwnProperty(b)) return !0;
            return !1
        },
        Ma = function(a, b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
            return c
        },
        Na = function(a, b) {
            for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
            d[e[e.length - 1]] = b;
            return c
        },
        Oa = /^\w{1,9}$/,
        Qa = function(a, b) {
            a = a || {};
            b = b || ",";
            var c = [];
            k(a, function(d, e) {
                Oa.test(d) && e && c.push(d)
            });
            return c.join(b)
        },
        Ra = function(a, b) {
            function c() {
                ++d === b && (e(), e = null, c.done = !0)
            }
            var d = 0,
                e = a;
            c.done = !1;
            return c
        };

    function Sa() {
        for (var a = Ta, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
        return b
    }

    function Va() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }
    var Ta, Wa;

    function Xa(a) {
        Ta = Ta || Va();
        Wa = Wa || Sa();
        for (var b = [], c = 0; c < a.length; c += 3) {
            var d = c + 1 < a.length,
                e = c + 2 < a.length,
                f = a.charCodeAt(c),
                g = d ? a.charCodeAt(c + 1) : 0,
                l = e ? a.charCodeAt(c + 2) : 0,
                m = f >> 2,
                n = (f & 3) << 4 | g >> 4,
                p = (g & 15) << 2 | l >> 6,
                q = l & 63;
            e || (q = 64, d || (p = 64));
            b.push(Ta[m], Ta[n], Ta[p], Ta[q])
        }
        return b.join("")
    }

    function Ya(a) {
        function b(m) {
            for (; d < a.length;) {
                var n = a.charAt(d++),
                    p = Wa[n];
                if (null != p) return p;
                if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n);
            }
            return m
        }
        Ta = Ta || Va();
        Wa = Wa || Sa();
        for (var c = "", d = 0;;) {
            var e = b(-1),
                f = b(0),
                g = b(64),
                l = b(64);
            if (64 === l && -1 === e) return c;
            c += String.fromCharCode(e << 2 | f >> 4);
            64 != g && (c += String.fromCharCode(f << 4 & 240 | g >> 2), 64 != l && (c += String.fromCharCode(g << 6 & 192 | l)))
        }
    };
    var Za = {},
        $a = function(a, b) {
            Za[a] = Za[a] || [];
            Za[a][b] = !0
        },
        ab = function() {
            delete Za.GA4_EVENT
        },
        bb = function(a) {
            var b = Za[a];
            if (!b || 0 === b.length) return "";
            for (var c = [], d = 0, e = 0; e < b.length; e++) 0 === e % 8 && 0 < e && (c.push(String.fromCharCode(d)), d = 0), b[e] && (d |= 1 << e % 8);
            0 < d && c.push(String.fromCharCode(d));
            return Xa(c.join("")).replace(/\.+$/, "")
        };
    var cb = Array.prototype.indexOf ? function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    } : function(a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    };
    var db, eb = function() {
        if (void 0 === db) {
            var a = null,
                b = oa.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: pa,
                        createScript: pa,
                        createScriptURL: pa
                    })
                } catch (c) {
                    oa.console && oa.console.error(c.message)
                }
                db = a
            } else db = a
        }
        return db
    };
    var fb = function(a) {
        this.h = a
    };
    fb.prototype.toString = function() {
        return this.h + ""
    };
    var gb = {};
    var hb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    var ib, jb;
    a: {
        for (var kb = ["CLOSURE_FLAGS"], lb = oa, mb = 0; mb < kb.length; mb++)
            if (lb = lb[kb[mb]], null == lb) {
                jb = null;
                break a
            }
        jb = lb
    }
    var nb = jb && jb[610401301];
    ib = null != nb ? nb : !1;

    function ob() {
        var a = oa.navigator;
        if (a) {
            var b = a.userAgent;
            if (b) return b
        }
        return ""
    }
    var pb, qb = oa.navigator;
    pb = qb ? qb.userAgentData || null : null;

    function rb(a) {
        return ib ? pb ? pb.brands.some(function(b) {
            var c = b.brand;
            return c && -1 != c.indexOf(a)
        }) : !1 : !1
    }

    function sb(a) {
        return -1 != ob().indexOf(a)
    };

    function tb() {
        return ib ? !!pb && 0 < pb.brands.length : !1
    }

    function ub() {
        return tb() ? !1 : sb("Opera")
    }

    function vb() {
        return sb("Firefox") || sb("FxiOS")
    }

    function wb() {
        return tb() ? rb("Chromium") : (sb("Chrome") || sb("CriOS")) && !(tb() ? 0 : sb("Edge")) || sb("Silk")
    };
    var xb = {},
        yb = function(a) {
            this.h = a
        };
    yb.prototype.toString = function() {
        return this.h.toString()
    };
    var zb = function(a) {
        return a instanceof yb && a.constructor === yb ? a.h : "type_error:SafeHtml"
    };
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    function Ab(a) {
        var b = a.tagName;
        if ("SCRIPT" === b || "STYLE" === b) throw Error("");
    };
    (function() {
        return ""
    }).toString().indexOf("`");

    function Bb(a) {
        var b = a = Cb(a),
            c = eb(),
            d = c ? c.createHTML(b) : b;
        return new yb(d, xb)
    }

    function Cb(a) {
        return null === a ? "null" : void 0 === a ? "undefined" : a
    };
    var z = window,
        C = document,
        Db = navigator,
        Eb = C.currentScript && C.currentScript.src,
        Fb = function(a, b) {
            var c = z[a];
            z[a] = void 0 === c ? b : c;
            return z[a]
        },
        Gb = function(a, b) {
            b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() {
                a.readyState in {
                    loaded: 1,
                    complete: 1
                } && (a.onreadystatechange = null, b())
            })
        },
        Hb = {
            async: 1,
            nonce: 1,
            onerror: 1,
            onload: 1,
            src: 1,
            type: 1
        },
        Ib = {
            onload: 1,
            src: 1,
            width: 1,
            height: 1,
            style: 1
        };

    function Jb(a, b, c) {
        b && k(b, function(d, e) {
            d = d.toLowerCase();
            c.hasOwnProperty(d) || a.setAttribute(d, e)
        })
    }
    var Kb = function(a, b, c, d, e) {
            var f = C.createElement("script");
            Jb(f, d, Hb);
            f.type = "text/javascript";
            f.async = !0;
            var g, l = Cb(a),
                m = eb(),
                n = m ? m.createScriptURL(l) : l;
            g = new fb(n, gb);
            f.src = g instanceof fb && g.constructor === fb ? g.h : "type_error:TrustedResourceUrl";
            var p, q, t, r = null == (t = (q = (f.ownerDocument && f.ownerDocument.defaultView || window).document).querySelector) ? void 0 : t.call(q, "script[nonce]");
            (p = r ? r.nonce || r.getAttribute("nonce") || "" : "") && f.setAttribute("nonce", p);
            Gb(f, b);
            c && (f.onerror = c);
            if (e) e.appendChild(f);
            else {
                var u = C.getElementsByTagName("script")[0] || C.body || C.head;
                u.parentNode.insertBefore(f, u)
            }
            return f
        },
        Lb = function() {
            if (Eb) {
                var a = Eb.toLowerCase();
                if (0 === a.indexOf("https://")) return 2;
                if (0 === a.indexOf("http://")) return 3
            }
            return 1
        },
        Mb = function(a, b, c, d, e) {
            var f;
            f = void 0 === f ? !0 : f;
            var g = e,
                l = !1;
            g || (g = C.createElement("iframe"), l = !0);
            Jb(g, c, Ib);
            d && k(d, function(n, p) {
                g.dataset[n] = p
            });
            f && (g.height = "0", g.width = "0", g.style.display = "none", g.style.visibility = "hidden");
            if (l) {
                var m = C.body && C.body.lastChild || C.body ||
                    C.head;
                m.parentNode.insertBefore(g, m)
            }
            Gb(g, b);
            void 0 !== a && (g.src = a);
            return g
        },
        Nb = function(a, b, c, d) {
            var e = new Image(1, 1);
            Jb(e, d, {});
            e.onload = function() {
                e.onload = null;
                b && b()
            };
            e.onerror = function() {
                e.onerror = null;
                c && c()
            };
            e.src = a
        },
        Ob = function(a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
        },
        Pb = function(a, b, c) {
            a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
        },
        F = function(a) {
            z.setTimeout(a, 0)
        },
        Qb = function(a, b) {
            return a &&
                b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
        },
        Rb = function(a) {
            var b = a.innerText || a.textContent || "";
            b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
            b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
            return b
        },
        Sb = function(a) {
            var b = C.createElement("div"),
                c = b,
                d = Bb("A<div>" + a + "</div>");
            1 === c.nodeType && Ab(c);
            c.innerHTML = zb(d);
            b = b.lastChild;
            for (var e = []; b.firstChild;) e.push(b.removeChild(b.firstChild));
            return e
        },
        Tb = function(a, b, c) {
            c = c || 100;
            for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
            for (var f =
                    a, g = 0; f && g <= c; g++) {
                if (d[String(f.tagName).toLowerCase()]) return f;
                f = f.parentElement
            }
            return null
        },
        Ub = function(a) {
            var b;
            try {
                b = Db.sendBeacon && Db.sendBeacon(a)
            } catch (c) {
                $a("TAGGING", 15)
            }
            b || Nb(a)
        },
        Vb = function(a, b) {
            var c = a[b];
            c && "string" === typeof c.animVal && (c = c.animVal);
            return c
        },
        Wb = function(a, b) {
            try {
                z.fetch(a, b)
            } catch (c) {}
        },
        Xb = function() {
            var a = z.performance;
            if (a && ra(a.now)) return a.now()
        },
        Yb = function() {
            return z.performance || void 0
        };
    /*
     jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var Zb = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
        $b = function(a) {
            if (null == a) return String(a);
            var b = Zb.exec(Object.prototype.toString.call(Object(a)));
            return b ? b[1].toLowerCase() : "object"
        },
        ac = function(a, b) {
            return Object.prototype.hasOwnProperty.call(Object(a), b)
        },
        G = function(a) {
            if (!a || "object" != $b(a) || a.nodeType || a == a.window) return !1;
            try {
                if (a.constructor && !ac(a, "constructor") && !ac(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            for (var b in a);
            return void 0 ===
                b || ac(a, b)
        },
        K = function(a, b) {
            var c = b || ("array" == $b(a) ? [] : {}),
                d;
            for (d in a)
                if (ac(a, d)) {
                    var e = a[d];
                    "array" == $b(e) ? ("array" != $b(c[d]) && (c[d] = []), c[d] = K(e, c[d])) : G(e) ? (G(c[d]) || (c[d] = {}), c[d] = K(e, c[d])) : c[d] = e
                }
            return c
        };
    var bc = function(a) {
        if (void 0 === a || ua(a) || G(a)) return !0;
        switch (typeof a) {
            case "boolean":
            case "number":
            case "string":
            case "function":
                return !0
        }
        return !1
    };
    var cc = function() {
        var a = function(b) {
            return {
                toString: function() {
                    return b
                }
            }
        };
        return {
            Gi: a("consent"),
            Cg: a("convert_case_to"),
            Dg: a("convert_false_to"),
            Eg: a("convert_null_to"),
            Fg: a("convert_true_to"),
            Gg: a("convert_undefined_to"),
            Kl: a("debug_mode_metadata"),
            Bb: a("function"),
            Gf: a("instance_name"),
            Ij: a("live_only"),
            Jj: a("malware_disabled"),
            Kj: a("metadata"),
            Nj: a("original_activity_id"),
            Sl: a("original_vendor_template_id"),
            Rl: a("once_on_load"),
            Mj: a("once_per_event"),
            Hh: a("once_per_load"),
            Wl: a("priority_override"),
            Xl: a("respected_consent_types"),
            Lh: a("setup_tags"),
            vd: a("tag_id"),
            Qh: a("teardown_tags")
        }
    }();
    var dc = [],
        ec = {
            "\x00": "&#0;",
            '"': "&quot;",
            "&": "&amp;",
            "'": "&#39;",
            "<": "&lt;",
            ">": "&gt;",
            "\t": "&#9;",
            "\n": "&#10;",
            "\v": "&#11;",
            "\f": "&#12;",
            "\r": "&#13;",
            " ": "&#32;",
            "-": "&#45;",
            "/": "&#47;",
            "=": "&#61;",
            "`": "&#96;",
            "\u0085": "&#133;",
            "\u00a0": "&#160;",
            "\u2028": "&#8232;",
            "\u2029": "&#8233;"
        },
        fc = function(a) {
            return ec[a]
        },
        gc = /[\x00\x22\x26\x27\x3c\x3e]/g;
    var kc = /[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,
        lc = {
            "\x00": "\\x00",
            "\b": "\\x08",
            "\t": "\\t",
            "\n": "\\n",
            "\v": "\\x0b",
            "\f": "\\f",
            "\r": "\\r",
            '"': "\\x22",
            "&": "\\x26",
            "'": "\\x27",
            "/": "\\/",
            "<": "\\x3c",
            "=": "\\x3d",
            ">": "\\x3e",
            "\\": "\\\\",
            "\u0085": "\\x85",
            "\u2028": "\\u2028",
            "\u2029": "\\u2029",
            $: "\\x24",
            "(": "\\x28",
            ")": "\\x29",
            "*": "\\x2a",
            "+": "\\x2b",
            ",": "\\x2c",
            "-": "\\x2d",
            ".": "\\x2e",
            ":": "\\x3a",
            "?": "\\x3f",
            "[": "\\x5b",
            "]": "\\x5d",
            "^": "\\x5e",
            "{": "\\x7b",
            "|": "\\x7c",
            "}": "\\x7d"
        },
        mc = function(a) {
            return lc[a]
        };
    dc[7] = function(a) {
        return String(a).replace(kc, mc)
    };
    dc[8] = function(a) {
        if (null == a) return " null ";
        switch (typeof a) {
            case "boolean":
            case "number":
                return " " + a + " ";
            default:
                return "'" + String(String(a)).replace(kc, mc) + "'"
        }
    };
    var sc = /['()]/g,
        tc = function(a) {
            return "%" + a.charCodeAt(0).toString(16)
        };
    dc[12] = function(a) {
        var b =
            encodeURIComponent(String(a));
        sc.lastIndex = 0;
        return sc.test(b) ? b.replace(sc, tc) : b
    };
    var uc = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
        vc = {
            "\x00": "%00",
            "\u0001": "%01",
            "\u0002": "%02",
            "\u0003": "%03",
            "\u0004": "%04",
            "\u0005": "%05",
            "\u0006": "%06",
            "\u0007": "%07",
            "\b": "%08",
            "\t": "%09",
            "\n": "%0A",
            "\v": "%0B",
            "\f": "%0C",
            "\r": "%0D",
            "\u000e": "%0E",
            "\u000f": "%0F",
            "\u0010": "%10",
            "\u0011": "%11",
            "\u0012": "%12",
            "\u0013": "%13",
            "\u0014": "%14",
            "\u0015": "%15",
            "\u0016": "%16",
            "\u0017": "%17",
            "\u0018": "%18",
            "\u0019": "%19",
            "\u001a": "%1A",
            "\u001b": "%1B",
            "\u001c": "%1C",
            "\u001d": "%1D",
            "\u001e": "%1E",
            "\u001f": "%1F",
            " ": "%20",
            '"': "%22",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "<": "%3C",
            ">": "%3E",
            "\\": "%5C",
            "{": "%7B",
            "}": "%7D",
            "\u007f": "%7F",
            "\u0085": "%C2%85",
            "\u00a0": "%C2%A0",
            "\u2028": "%E2%80%A8",
            "\u2029": "%E2%80%A9",
            "\uff01": "%EF%BC%81",
            "\uff03": "%EF%BC%83",
            "\uff04": "%EF%BC%84",
            "\uff06": "%EF%BC%86",
            "\uff07": "%EF%BC%87",
            "\uff08": "%EF%BC%88",
            "\uff09": "%EF%BC%89",
            "\uff0a": "%EF%BC%8A",
            "\uff0b": "%EF%BC%8B",
            "\uff0c": "%EF%BC%8C",
            "\uff0f": "%EF%BC%8F",
            "\uff1a": "%EF%BC%9A",
            "\uff1b": "%EF%BC%9B",
            "\uff1d": "%EF%BC%9D",
            "\uff1f": "%EF%BC%9F",
            "\uff20": "%EF%BC%A0",
            "\uff3b": "%EF%BC%BB",
            "\uff3d": "%EF%BC%BD"
        },
        wc = function(a) {
            return vc[a]
        };
    dc[16] = function(a) {
        return a
    };
    var yc;
    var zc = [],
        Bc = [],
        Cc = [],
        Dc = [],
        Ec = [],
        Fc = {},
        Gc, Hc, Jc = function() {
            var a = Ic;
            Hc = Hc || a
        },
        Kc, Lc = function(a, b) {
            var c = a["function"],
                d = b && b.event;
            if (!c) throw Error("Error: No function name given for function call.");
            var e = Fc[c],
                f = {},
                g;
            for (g in a) a.hasOwnProperty(g) && 0 === g.indexOf("vtp_") && (e && d && d.Vh && d.Vh(a[g]), f[void 0 !== e ? g : g.substr(4)] = a[g]);
            e && d && d.Uh && (f.vtp_gtmCachedValues = d.Uh);
            if (b) {
                if (null == b.name) {
                    var l;
                    a: {
                        var m = b.index;
                        if (null == m) l = "";
                        else {
                            var n;
                            switch (b.type) {
                                case 2:
                                    n = zc[m];
                                    break;
                                case 1:
                                    n = Dc[m];
                                    break;
                                default:
                                    l = "";
                                    break a
                            }
                            var p = n && n[cc.Gf];
                            l = p ? String(p) : ""
                        }
                    }
                    b.name = l
                }
                e && (f.vtp_gtmEntityIndex = b.index, f.vtp_gtmEntityName = b.name)
            }
            return void 0 !== e ? e(f) : yc(c, f, b)
        },
        Nc = function(a, b, c) {
            c = c || [];
            var d = {},
                e;
            for (e in a) a.hasOwnProperty(e) && (d[e] = Mc(a[e], b, c));
            return d
        },
        Mc = function(a, b, c) {
            if (ua(a)) {
                var d;
                switch (a[0]) {
                    case "function_id":
                        return a[1];
                    case "list":
                        d = [];
                        for (var e = 1; e < a.length; e++) d.push(Mc(a[e], b, c));
                        return d;
                    case "macro":
                        var f = a[1];
                        if (c[f]) return;
                        var g = zc[f];
                        if (!g || b.Wf(g)) return;
                        c[f] = !0;
                        var l =
                            String(g[cc.Gf]);
                        try {
                            var m = Nc(g, b, c);
                            m.vtp_gtmEventId = b.id;
                            b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
                            d = Lc(m, {
                                event: b,
                                index: f,
                                type: 2,
                                name: l
                            });
                            Kc && (d = Kc.bk(d, m))
                        } catch (y) {
                            b.hi && b.hi(y, Number(f), l), d = !1
                        }
                        c[f] = !1;
                        return d;
                    case "map":
                        d = {};
                        for (var n = 1; n < a.length; n += 2) d[Mc(a[n], b, c)] = Mc(a[n + 1], b, c);
                        return d;
                    case "template":
                        d = [];
                        for (var p = !1, q = 1; q < a.length; q++) {
                            var t = Mc(a[q], b, c);
                            Hc && (p = p || t === Hc.Ae);
                            d.push(t)
                        }
                        return Hc && p ? Hc.dk(d) : d.join("");
                    case "escape":
                        d = Mc(a[1], b, c);
                        if (Hc && ua(a[1]) && "macro" ===
                            a[1][0] && Hc.Gk(a)) return Hc.bl(d);
                        d = String(d);
                        for (var r = 2; r < a.length; r++) dc[a[r]] && (d = dc[a[r]](d));
                        return d;
                    case "tag":
                        var u = a[1];
                        if (!Dc[u]) throw Error("Unable to resolve tag reference " + u + ".");
                        return d = {
                            ai: a[2],
                            index: u
                        };
                    case "zb":
                        var v = {
                            arg0: a[2],
                            arg1: a[3],
                            ignore_case: a[5]
                        };
                        v["function"] = a[1];
                        var w = Oc(v, b, c),
                            x = !!a[4];
                        return x || 2 !== w ? x !== (1 === w) : null;
                    default:
                        throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
                }
            }
            return a
        },
        Oc = function(a, b, c) {
            try {
                return Gc(Nc(a, b, c))
            } catch (d) {
                JSON.stringify(a)
            }
            return 2
        };
    var Rc = function(a) {
            function b(t) {
                for (var r = 0; r < t.length; r++) d[t[r]] = !0
            }
            for (var c = [], d = [], e = Pc(a), f = 0; f < Bc.length; f++) {
                var g = Bc[f],
                    l = Qc(g, e);
                if (l) {
                    for (var m = g.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
                    b(g.block || [])
                } else null === l && b(g.block || []);
            }
            for (var p = [], q = 0; q < Dc.length; q++) c[q] && !d[q] && (p[q] = !0);
            return p
        },
        Qc = function(a, b) {
            for (var c = a["if"] || [], d = 0; d < c.length; d++) {
                var e = b(c[d]);
                if (0 === e) return !1;
                if (2 === e) return null
            }
            for (var f =
                    a.unless || [], g = 0; g < f.length; g++) {
                var l = b(f[g]);
                if (2 === l) return null;
                if (1 === l) return !1
            }
            return !0
        },
        Pc = function(a) {
            var b = [];
            return function(c) {
                void 0 === b[c] && (b[c] = Oc(Cc[c], a));
                return b[c]
            }
        };
    var Sc = {
        bk: function(a, b) {
            b[cc.Cg] && "string" === typeof a && (a = 1 == b[cc.Cg] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(cc.Eg) && null === a && (a = b[cc.Eg]);
            b.hasOwnProperty(cc.Gg) && void 0 === a && (a = b[cc.Gg]);
            b.hasOwnProperty(cc.Fg) && !0 === a && (a = b[cc.Fg]);
            b.hasOwnProperty(cc.Dg) && !1 === a && (a = b[cc.Dg]);
            return a
        }
    };
    var jd = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];

    function kd(a, b) {
        a = String(a);
        b = String(b);
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) === c
    }
    var ld = new xa;

    function md(a, b, c) {
        var d = c ? "i" : void 0;
        try {
            var e = String(b) + d,
                f = ld.get(e);
            f || (f = new RegExp(b, d), ld.set(e, f));
            return f.test(a)
        } catch (g) {
            return !1
        }
    };
    var td = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;

    function ud(a, b) {
        return "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [a << 2 | b]
    };
    var wd = function(a) {
            return vd ? C.querySelectorAll(a) : null
        },
        xd = function(a, b) {
            if (!vd) return null;
            if (Element.prototype.closest) try {
                return a.closest(b)
            } catch (e) {
                return null
            }
            var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
                d = a;
            if (!C.documentElement.contains(d)) return null;
            do {
                try {
                    if (c.call(d, b)) return d
                } catch (e) {
                    break
                }
                d = d.parentElement || d.parentNode
            } while (null !== d && 1 === d.nodeType);
            return null
        },
        yd = !1;
    if (C.querySelectorAll) try {
        var zd = C.querySelectorAll(":root");
        zd && 1 == zd.length && zd[0] == C.documentElement && (yd = !0)
    } catch (a) {}
    var vd = yd;
    var L = function(a) {
        $a("GTM", a)
    };
    var Ad = function(a) {
            return null == a ? "" : h(a) ? Fa(String(a)) : "e0"
        },
        Ed = function(a) {
            return a.replace(Bd, "")
        },
        Gd = function(a) {
            return Fd(a.replace(/\s/g, ""))
        },
        Fd = function(a) {
            return Fa(a.replace(Hd, "").toLowerCase())
        },
        Jd = function(a) {
            a = a.replace(/[\s-()/.]/g, "");
            "+" !== a.charAt(0) && (a = "+" + a);
            return Id.test(a) ? a : "e0"
        },
        Ld = function(a) {
            var b = a.toLowerCase().split("@");
            if (2 == b.length) {
                var c = b[0];
                /^(gmail|googlemail)\./.test(b[1]) && (c = c.replace(/\./g, ""));
                c = c + "@" + b[1];
                if (Kd.test(c)) return c
            }
            return "e0"
        },
        Od = function(a,
            b) {
            window.Promise || b([]);
            Promise.all(a.map(function(c) {
                return c.value && -1 !== Md.indexOf(c.name) ? Nd(c.value).then(function(d) {
                    c.value = d
                }) : Promise.resolve()
            })).then(function() {
                b(a)
            }).catch(function() {
                b([])
            })
        },
        Nd = function(a) {
            if ("" === a || "e0" === a) return Promise.resolve(a);
            if (z.crypto && z.crypto.subtle) {
                if (Pd.test(a)) return Promise.resolve(a);
                try {
                    var b = Qd(a);
                    return z.crypto.subtle.digest("SHA-256", b).then(function(c) {
                        var d = Array.from(new Uint8Array(c)).map(function(e) {
                            return String.fromCharCode(e)
                        }).join("");
                        return z.btoa(d).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
                    }).catch(function() {
                        return "e2"
                    })
                } catch (c) {
                    return Promise.resolve("e2")
                }
            } else return Promise.resolve("e1")
        },
        Qd = function(a) {
            var b;
            if (z.TextEncoder) b = (new TextEncoder("utf-8")).encode(a);
            else {
                for (var c = [], d = 0; d < a.length; d++) {
                    var e = a.charCodeAt(d);
                    128 > e ? c.push(e) : 2048 > e ? c.push(192 | e >> 6, 128 | e & 63) : 55296 > e || 57344 <= e ? c.push(224 | e >> 12, 128 | e >> 6 & 63, 128 | e & 63) : (e = 65536 + ((e & 1023) << 10 | a.charCodeAt(++d) & 1023), c.push(240 | e >> 18, 128 | e >> 12 & 63, 128 |
                        e >> 6 & 63, 128 | e & 63))
                }
                b = new Uint8Array(c)
            }
            return b
        },
        Hd = /[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g,
        Kd = /^\S+@\S+\.\S+$/,
        Id = /^\+\d{10,15}$/,
        Bd = /[.~]/g,
        Rd = /^[0-9A-Za-z_-]{43}$/,
        Pd = /^[0-9A-Fa-f]{64}$/,
        Sd = {},
        Td = (Sd.email = "em", Sd.phone_number = "pn", Sd.first_name = "fn", Sd.last_name = "ln", Sd.street = "sa", Sd.city = "ct", Sd.region = "rg", Sd.country = "co", Sd.postal_code = "pc", Sd.error_code = "ec", Sd),
        Ud = {},
        Vd = (Ud.email = "sha256_email_address", Ud.phone_number = "sha256_phone_number", Ud.first_name = "sha256_first_name", Ud.last_name =
            "sha256_last_name", Ud.street = "sha256_street", Ud),
        Wd = function(a, b) {
            function c(r, u, v, w) {
                var x = Ad(r);
                "" !== x && (Pd.test(x) ? m.push({
                    name: u,
                    value: x,
                    index: w
                }) : m.push({
                    name: u,
                    value: v(x),
                    index: w
                }))
            }

            function d(r, u) {
                var v = r;
                if (h(v) || ua(v)) {
                    v = ua(r) ? r : [r];
                    for (var w = 0; w < v.length; ++w) {
                        var x = Ad(v[w]),
                            y = Pd.test(x);
                        u && !y && L(89);
                        !u && y && L(88)
                    }
                }
            }

            function e(r, u) {
                var v = r[u];
                d(v, !1);
                var w = Vd[u];
                r.hasOwnProperty(w) && (r.hasOwnProperty(u) && L(90), v = r[w], d(v, !0));
                return v
            }

            function f(r, u, v) {
                var w = e(r, u);
                w = ua(w) ? w : [w];
                for (var x =
                        0; x < w.length; ++x) c(w[x], u, v)
            }

            function g(r, u, v, w) {
                var x = e(r, u);
                c(x, u, v, w)
            }

            function l(r) {
                return function(u) {
                    L(64);
                    return r(u)
                }
            }
            var m = [];
            if ("https:" === z.location.protocol) {
                f(a, "email", Ld);
                f(a, "phone_number", Jd);
                f(a, "first_name", l(Gd));
                f(a, "last_name", l(Gd));
                var n = a.home_address || {};
                f(n, "street", l(Fd));
                f(n, "city", l(Fd));
                f(n, "postal_code", l(Ed));
                f(n, "region", l(Fd));
                f(n, "country", l(Ed));
                var p = a.address || {};
                p = ua(p) ? p : [p];
                for (var q = 0; q < p.length; q++) {
                    var t = p[q];
                    g(t, "first_name", Gd, q);
                    g(t, "last_name", Gd, q);
                    g(t, "street", Fd, q);
                    g(t, "city", Fd, q);
                    g(t, "postal_code", Ed, q);
                    g(t, "region", Fd, q);
                    g(t, "country", Ed, q)
                }
                Od(m, b)
            } else m.push({
                name: "error_code",
                value: "e3",
                index: void 0
            }), b(m)
        },
        Xd = function(a, b) {
            Wd(a, function(c) {
                for (var d = ["tv.1"], e = 0, f = 0; f < c.length; ++f) {
                    var g = c[f].name,
                        l = c[f].value,
                        m = c[f].index,
                        n = Td[g];
                    n && l && (-1 === Md.indexOf(g) || /^e\d+$/.test(l) || Rd.test(l) || Pd.test(l)) && (void 0 !== m && (n += m), d.push(n + "." + l), e++)
                }
                1 === c.length && "error_code" === c[0].name && (e = 0);
                b(encodeURIComponent(d.join("~")), e)
            })
        },
        Yd = function(a) {
            if (z.Promise) try {
                return new Promise(function(b) {
                    Xd(a,
                        function(c, d) {
                            b({
                                Re: c,
                                Yk: d
                            })
                        })
                })
            } catch (b) {}
        },
        Md = Object.freeze(["email", "phone_number", "first_name", "last_name", "street"]);
    var N = {
            g: {
                xg: "ad_data_sharing",
                H: "ad_storage",
                af: "ad_user_data",
                N: "analytics_storage",
                Yb: "region",
                Wd: "consent_updated",
                yg: "wait_for_update",
                Ki: "ads",
                Jl: "all",
                Li: "play",
                Mi: "search",
                Ni: "youtube",
                Oi: "app_remove",
                Pi: "app_store_refund",
                Qi: "app_store_subscription_cancel",
                Ri: "app_store_subscription_convert",
                Si: "app_store_subscription_renew",
                Hg: "add_payment_info",
                Ig: "add_shipping_info",
                Zb: "add_to_cart",
                ac: "remove_from_cart",
                Jg: "view_cart",
                Eb: "begin_checkout",
                bc: "select_item",
                Wa: "view_item_list",
                sb: "select_promotion",
                Xa: "view_promotion",
                Ea: "purchase",
                fc: "refund",
                Fa: "view_item",
                Kg: "add_to_wishlist",
                Ti: "exception",
                Ui: "first_open",
                Vi: "first_visit",
                qa: "gtag.config",
                Ga: "gtag.get",
                Wi: "in_app_purchase",
                hc: "page_view",
                Xi: "screen_view",
                Yi: "session_start",
                Zi: "timing_complete",
                aj: "track_social",
                Yd: "user_engagement",
                tb: "gclid",
                la: "ads_data_redaction",
                V: "allow_ad_personalization_signals",
                Zd: "allow_custom_scripts",
                ff: "allow_display_features",
                ae: "allow_enhanced_conversions",
                ub: "allow_google_signals",
                Aa: "allow_interest_groups",
                bj: "app_id",
                cj: "app_installer_id",
                dj: "app_name",
                ej: "app_version",
                ic: "auid",
                fj: "auto_detection_enabled",
                Fb: "aw_remarketing",
                hf: "aw_remarketing_only",
                be: "discount",
                ce: "aw_feed_country",
                de: "aw_feed_language",
                W: "items",
                ee: "aw_merchant_id",
                Lg: "aw_basket_type",
                Mc: "campaign_content",
                Nc: "campaign_id",
                Oc: "campaign_medium",
                Pc: "campaign_name",
                Qc: "campaign",
                Rc: "campaign_source",
                Sc: "campaign_term",
                Ya: "client_id",
                gj: "content_group",
                ij: "content_type",
                Ha: "conversion_cookie_prefix",
                Tc: "conversion_id",
                wa: "conversion_linker",
                Gb: "conversion_api",
                La: "cookie_domain",
                Ba: "cookie_expires",
                Ma: "cookie_flags",
                jc: "cookie_name",
                Uc: "cookie_path",
                Ia: "cookie_prefix",
                ab: "cookie_update",
                vb: "country",
                ra: "currency",
                fe: "customer_lifetime_value",
                kc: "custom_map",
                Mg: "gcldc",
                jj: "debug_mode",
                X: "developer_id",
                kj: "disable_merchant_reported_purchases",
                mc: "dc_custom_params",
                Ng: "dc_natural_search",
                jf: "dynamic_event_settings",
                Og: "affiliation",
                he: "checkout_option",
                kf: "checkout_step",
                Pg: "coupon",
                Vc: "item_list_name",
                lf: "list_name",
                lj: "promotions",
                Wc: "shipping",
                nf: "tax",
                ie: "engagement_time_msec",
                Xc: "enhanced_client_id",
                Yc: "enhanced_conversions",
                Qg: "enhanced_conversions_automatic_settings",
                je: "estimated_delivery_date",
                pf: "euid_logged_in_state",
                nc: "event_callback",
                mj: "event_category",
                wb: "event_developer_id_string",
                nj: "event_label",
                Rg: "event",
                ke: "event_settings",
                me: "event_timeout",
                oj: "description",
                pj: "fatal",
                qj: "experiments",
                qf: "firebase_id",
                ne: "first_party_collection",
                oe: "_x_20",
                Hb: "_x_19",
                Sg: "fledge",
                Tg: "flight_error_code",
                Ug: "flight_error_message",
                Vg: "fl_activity_category",
                Wg: "fl_activity_group",
                rf: "fl_advertiser_id",
                Xg: "fl_ar_dedupe",
                Yg: "fl_random_number",
                Zg: "tran",
                ah: "u",
                pe: "gac_gclid",
                oc: "gac_wbraid",
                bh: "gac_wbraid_multiple_conversions",
                eh: "ga_restrict_domain",
                tf: "ga_temp_client_id",
                qe: "gdpr_applies",
                fh: "geo_granularity",
                cb: "value_callback",
                Na: "value_key",
                Ml: "google_ono",
                eb: "google_signals",
                gh: "google_tld",
                se: "groups",
                hh: "gsa_experiment_id",
                ih: "iframe_state",
                te: "ignore_referrer",
                uf: "internal_traffic_results",
                Ib: "is_legacy_converted",
                fb: "is_legacy_loaded",
                ue: "is_passthrough",
                xa: "language",
                vf: "legacy_developer_id_string",
                ya: "linker",
                qc: "accept_incoming",
                yb: "decorate_forms",
                O: "domains",
                Jb: "url_position",
                jh: "method",
                rj: "name",
                Zc: "new_customer",
                kh: "non_interaction",
                sj: "optimize_id",
                wf: "page_hostname",
                Kb: "page_path",
                Ca: "page_referrer",
                zb: "page_title",
                lh: "passengers",
                mh: "phone_conversion_callback",
                tj: "phone_conversion_country_code",
                nh: "phone_conversion_css_class",
                uj: "phone_conversion_ids",
                oh: "phone_conversion_number",
                ph: "phone_conversion_options",
                sc: "quantity",
                ad: "redact_device_info",
                xf: "redact_enhanced_user_id",
                vj: "redact_ga_client_id",
                wj: "redact_user_id",
                ve: "referral_exclusion_definition",
                Lb: "restricted_data_processing",
                xj: "retoken",
                yj: "sample_rate",
                yf: "screen_name",
                Ab: "screen_resolution",
                zj: "search_term",
                Oa: "send_page_view",
                Mb: "send_to",
                we: "server_container_url",
                bd: "session_duration",
                xe: "session_engaged",
                zf: "session_engaged_time",
                hb: "session_id",
                ye: "session_number",
                dd: "delivery_postal_code",
                qh: "temporary_client_id",
                Af: "topmost_url",
                Aj: "tracking_id",
                Bf: "traffic_type",
                ma: "transaction_id",
                uc: "transport_url",
                rh: "trip_type",
                ed: "update",
                ib: "url_passthrough",
                fd: "_user_agent_architecture",
                gd: "_user_agent_bitness",
                hd: "_user_agent_full_version_list",
                jd: "_user_agent_mobile",
                kd: "_user_agent_model",
                ld: "_user_agent_platform",
                md: "_user_agent_platform_version",
                nd: "_user_agent_wow64",
                na: "user_data",
                sh: "user_data_auto_latency",
                th: "user_data_auto_meta",
                uh: "user_data_auto_multi",
                vh: "user_data_auto_selectors",
                wh: "user_data_auto_status",
                Cf: "user_data_mode",
                Df: "user_data_settings",
                za: "user_id",
                Pa: "user_properties",
                xh: "us_privacy_string",
                ba: "value",
                vc: "wbraid",
                yh: "wbraid_multiple_conversions",
                Eh: "_host_name",
                Fh: "_in_page_command",
                Gh: "_is_passthrough_cid",
                Ce: "non_personalized_ads",
                ud: "_sst_parameters",
                Za: "conversion_label",
                ja: "page_location",
                xb: "global_developer_id_string",
                ze: "tc_privacy_string"
            }
        },
        Zd = {},
        $d = Object.freeze((Zd[N.g.V] = 1, Zd[N.g.ff] = 1, Zd[N.g.ae] = 1, Zd[N.g.ub] = 1, Zd[N.g.W] = 1, Zd[N.g.La] = 1, Zd[N.g.Ba] = 1, Zd[N.g.Ma] = 1, Zd[N.g.jc] = 1, Zd[N.g.Uc] = 1, Zd[N.g.Ia] = 1, Zd[N.g.ab] = 1, Zd[N.g.kc] = 1, Zd[N.g.X] = 1, Zd[N.g.jf] =
            1, Zd[N.g.nc] = 1, Zd[N.g.ke] = 1, Zd[N.g.me] = 1, Zd[N.g.ne] = 1, Zd[N.g.eh] = 1, Zd[N.g.eb] = 1, Zd[N.g.gh] = 1, Zd[N.g.se] = 1, Zd[N.g.uf] = 1, Zd[N.g.Ib] = 1, Zd[N.g.fb] = 1, Zd[N.g.ya] = 1, Zd[N.g.xf] = 1, Zd[N.g.ve] = 1, Zd[N.g.Lb] = 1, Zd[N.g.Oa] = 1, Zd[N.g.Mb] = 1, Zd[N.g.we] = 1, Zd[N.g.bd] = 1, Zd[N.g.zf] = 1, Zd[N.g.dd] = 1, Zd[N.g.uc] = 1, Zd[N.g.ed] = 1, Zd[N.g.Df] = 1, Zd[N.g.Pa] = 1, Zd[N.g.ud] = 1, Zd));
    Object.freeze([N.g.ja, N.g.Ca, N.g.zb, N.g.xa, N.g.yf, N.g.za, N.g.qf, N.g.gj]);
    var ae = {},
        be = Object.freeze((ae[N.g.Oi] = 1, ae[N.g.Pi] = 1, ae[N.g.Qi] = 1, ae[N.g.Ri] = 1, ae[N.g.Si] = 1, ae[N.g.Ui] = 1, ae[N.g.Vi] = 1, ae[N.g.Wi] = 1, ae[N.g.Yi] = 1, ae[N.g.Yd] = 1, ae)),
        ce = {},
        de = Object.freeze((ce[N.g.Hg] = 1, ce[N.g.Ig] = 1, ce[N.g.Zb] = 1, ce[N.g.ac] = 1, ce[N.g.Jg] = 1, ce[N.g.Eb] = 1, ce[N.g.bc] = 1, ce[N.g.Wa] = 1, ce[N.g.sb] = 1, ce[N.g.Xa] = 1, ce[N.g.Ea] = 1, ce[N.g.fc] = 1, ce[N.g.Fa] = 1, ce[N.g.Kg] = 1, ce)),
        ee = Object.freeze([N.g.V, N.g.ub, N.g.ab]),
        fe = Object.freeze([].concat(ee)),
        ge = Object.freeze([N.g.Ba, N.g.me, N.g.bd, N.g.zf, N.g.ie]),
        he = Object.freeze([].concat(ge)),
        ie = {},
        je = (ie[N.g.H] = "1", ie[N.g.N] = "2", ie),
        ke = {},
        le = Object.freeze((ke[N.g.V] = 1, ke[N.g.ae] = 1, ke[N.g.Aa] = 1, ke[N.g.Fb] = 1, ke[N.g.hf] = 1, ke[N.g.be] = 1, ke[N.g.ce] = 1, ke[N.g.de] = 1, ke[N.g.W] = 1, ke[N.g.ee] = 1, ke[N.g.Ha] = 1, ke[N.g.wa] = 1, ke[N.g.La] = 1, ke[N.g.Ba] = 1, ke[N.g.Ma] = 1, ke[N.g.Ia] = 1, ke[N.g.ra] = 1, ke[N.g.fe] = 1, ke[N.g.X] = 1, ke[N.g.kj] = 1, ke[N.g.Yc] = 1, ke[N.g.je] = 1, ke[N.g.qf] = 1, ke[N.g.ne] = 1, ke[N.g.fb] = 1, ke[N.g.xa] = 1, ke[N.g.Zc] = 1, ke[N.g.ja] = 1, ke[N.g.Ca] = 1, ke[N.g.mh] = 1, ke[N.g.nh] = 1, ke[N.g.oh] =
            1, ke[N.g.ph] = 1, ke[N.g.Lb] = 1, ke[N.g.Oa] = 1, ke[N.g.Mb] = 1, ke[N.g.we] = 1, ke[N.g.dd] = 1, ke[N.g.ma] = 1, ke[N.g.uc] = 1, ke[N.g.ed] = 1, ke[N.g.ib] = 1, ke[N.g.na] = 1, ke[N.g.za] = 1, ke[N.g.ba] = 1, ke));
    Object.freeze(N.g);
    var me = {},
        ne = z.google_tag_manager = z.google_tag_manager || {},
        oe = Math.random();
    me.If = "35a0";
    me.sd = Number("0") || 0;
    me.ia = "dataLayer";
    me.Ii = "ChAI8Mf3ogYQssqnldqE9+ECEiMA30kqkZWjZ7cpu1c73otEOrTU1CNTxM7LpSw7YgNM7jvtnhoCoDg\x3d";
    var pe = {
            __cl: 1,
            __ecl: 1,
            __ehl: 1,
            __evl: 1,
            __fal: 1,
            __fil: 1,
            __fsl: 1,
            __hl: 1,
            __jel: 1,
            __lcl: 1,
            __sdl: 1,
            __tl: 1,
            __ytl: 1
        },
        qe = {
            __paused: 1,
            __tg: 1
        },
        re;
    for (re in pe) pe.hasOwnProperty(re) && (qe[re] = 1);
    var se = Ca(""),
        te, ue = !1;
    te = ue;
    var ve, we = !1;
    ve = we;
    var xe, ye = !1;
    xe = ye;
    var ze, Ae = !1;
    ze = Ae;
    me.Xd = "www.googletagmanager.com";
    var Be = "" + me.Xd + (te ? "/gtag/js" : "/gtm.js"),
        Ce = null,
        De = null,
        Ee = {},
        Fe = {},
        Ge = {},
        He = function() {
            var a = ne.sequence || 1;
            ne.sequence = a + 1;
            return a
        };
    me.Hi = "";
    var Ie = "";
    me.Ge = Ie;
    var Je = new xa,
        Ke = {},
        Le = {},
        Oe = {
            name: me.ia,
            set: function(a, b) {
                K(Na(a, b), Ke);
                Me()
            },
            get: function(a) {
                return Ne(a, 2)
            },
            reset: function() {
                Je = new xa;
                Ke = {};
                Me()
            }
        },
        Ne = function(a, b) {
            return 2 != b ? Je.get(a) : Pe(a)
        },
        Pe = function(a) {
            var b, c = a.split(".");
            b = b || [];
            for (var d = Ke, e = 0; e < c.length; e++) {
                if (null === d) return !1;
                if (void 0 === d) break;
                d = d[c[e]];
                if (-1 !== b.indexOf(d)) return
            }
            return d
        },
        Qe = function(a, b) {
            Le.hasOwnProperty(a) || (Je.set(a, b), K(Na(a, b), Ke), Me())
        },
        Me = function(a) {
            k(Le, function(b, c) {
                Je.set(b, c);
                K(Na(b), Ke);
                K(Na(b,
                    c), Ke);
                a && delete Le[b]
            })
        },
        Re = function(a, b) {
            var c, d = 1 !== (void 0 === b ? 2 : b) ? Pe(a) : Je.get(a);
            "array" === $b(d) || "object" === $b(d) ? c = K(d) : c = d;
            return c
        };
    var Se = [],
        Te = function(a) {
            return void 0 == Se[a] ? !1 : Se[a]
        };
    var O = [];
    O[7] = !0;
    O[9] = !0;
    O[27] = !0;
    O[28] = !0;
    O[11] = !0;
    O[13] = !0;
    O[15] = !0;
    O[16] = !0;
    O[25] = !0;
    O[26] = !0;
    O[34] = !0;
    O[36] = !0;
    O[38] = !0;
    O[82] = !0;
    O[43] = !0;
    O[52] = !0;
    O[57] = !0;
    O[59] = !0;
    O[61] = !0;
    O[68] = !0;
    O[69] = !0;
    O[72] = !0;
    O[75] = !0;
    Se[2] = !0;
    O[76] = !0;
    O[77] = !0;
    O[79] = !0;
    O[80] = !0;
    O[83] = !0;
    O[88] = !0;
    O[89] = !0;
    O[92] = !0;
    O[93] = !0;
    O[94] = !0;
    O[96] = !0;
    O[97] = !0;
    O[101] = !0;
    O[113] = !0;
    var S = function(a) {
        return !!O[a]
    };
    var Ue;
    try {
        Ue = JSON.parse(Ya("eyIwIjoiSU4iLCIxIjoiSU4tS0EiLCIyIjpmYWxzZSwiMyI6Imdvb2dsZS5jby5pbiIsIjQiOiIiLCI1Ijp0cnVlLCI2IjpmYWxzZSwiNyI6IiJ9"))
    } catch (a) {
        L(123), $a("HEALTH", 2), Ue = {}
    }
    var Ve = function() {
            var a = !1;
            return a
        },
        We = function() {
            return !!Ue["6"]
        },
        Xe = function() {
            var a = "";
            return a
        },
        Ye = function() {
            var a = !1;
            a = !!Ue["5"];
            return a
        },
        Ze = function() {
            var a = "";
            return a
        };
    var $e, af = !1,
        bf = function(a) {
            if (!af) {
                af = !0;
                $e = $e || {}
            }
            return $e[a]
        };
    var cf = function() {
            var a = z.screen;
            return {
                width: a ? a.width : 0,
                height: a ? a.height : 0
            }
        },
        df = function(a) {
            if (C.hidden) return !0;
            var b = a.getBoundingClientRect();
            if (b.top == b.bottom || b.left == b.right || !z.getComputedStyle) return !0;
            var c = z.getComputedStyle(a, null);
            if ("hidden" === c.visibility) return !0;
            for (var d = a, e = c; d;) {
                if ("none" === e.display) return !0;
                var f = e.opacity,
                    g = e.filter;
                if (g) {
                    var l = g.indexOf("opacity(");
                    0 <= l && (g = g.substring(l + 8, g.indexOf(")", l)), "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)), f = Math.min(g,
                        f))
                }
                if (void 0 !== f && 0 >= f) return !0;
                (d = d.parentElement) && (e = z.getComputedStyle(d, null))
            }
            return !1
        };
    var ef = function() {
            var a = C.body,
                b = C.documentElement || a && a.parentElement,
                c, d;
            if (C.compatMode && "BackCompat" !== C.compatMode) c = b ? b.clientHeight : 0, d = b ? b.clientWidth : 0;
            else {
                var e = function(f, g) {
                    return f && g ? Math.min(f, g) : Math.max(f, g)
                };
                c = e(b ? b.clientHeight : 0, a ? a.clientHeight : 0);
                d = e(b ? b.clientWidth : 0, a ? a.clientWidth : 0)
            }
            return {
                width: d,
                height: c
            }
        },
        ff = function(a) {
            var b = ef(),
                c = b.height,
                d = b.width,
                e = a.getBoundingClientRect(),
                f = e.bottom - e.top,
                g = e.right - e.left;
            return f && g ? (1 - Math.min((Math.max(0 - e.left, 0) + Math.max(e.right -
                d, 0)) / g, 1)) * (1 - Math.min((Math.max(0 - e.top, 0) + Math.max(e.bottom - c, 0)) / f, 1)) : 0
        };
    var gf = [],
        hf = !(!z.IntersectionObserver || !z.IntersectionObserverEntry),
        jf = function(a, b, c) {
            for (var d = new z.IntersectionObserver(a, {
                    threshold: c
                }), e = 0; e < b.length; e++) d.observe(b[e]);
            for (var f = 0; f < gf.length; f++)
                if (!gf[f]) return gf[f] = d, f;
            return gf.push(d) - 1
        },
        kf = function(a, b, c) {
            function d(l, m) {
                var n = {
                        top: 0,
                        bottom: 0,
                        right: 0,
                        left: 0,
                        width: 0,
                        height: 0
                    },
                    p = {
                        boundingClientRect: l.getBoundingClientRect(),
                        intersectionRatio: m,
                        intersectionRect: n,
                        isIntersecting: 0 < m,
                        rootBounds: n,
                        target: l,
                        time: Ha()
                    };
                F(function() {
                    return a(p)
                })
            }
            for (var e = [], f = [], g = 0; g < b.length; g++) e.push(0), f.push(-1);
            c.sort(function(l, m) {
                return l - m
            });
            return function() {
                for (var l = 0; l < b.length; l++) {
                    var m = ff(b[l]);
                    if (m > e[l])
                        for (; f[l] < c.length - 1 && m >= c[f[l] + 1];) d(b[l], m), f[l]++;
                    else if (m < e[l])
                        for (; 0 <= f[l] && m <= c[f[l]];) d(b[l], m), f[l]--;
                    e[l] = m
                }
            }
        },
        lf = function(a, b, c) {
            for (var d = 0; d < c.length; d++) 1 < c[d] ? c[d] = 1 : 0 > c[d] && (c[d] = 0);
            if (hf) {
                var e = !1;
                F(function() {
                    e ||
                        kf(a, b, c)()
                });
                return jf(function(f) {
                    e = !0;
                    for (var g = {
                            Fc: 0
                        }; g.Fc < f.length; g = {
                            Fc: g.Fc
                        }, g.Fc++) F(function(l) {
                        return function() {
                            return a(f[l.Fc])
                        }
                    }(g))
                }, b, c)
            }
            return z.setInterval(kf(a, b, c), 1E3)
        },
        mf = function(a) {
            hf ? 0 <= a && a < gf.length && gf[a] && (gf[a].disconnect(), gf[a] = void 0) : z.clearInterval(a)
        };
    var nf = /:[0-9]+$/,
        of = /^\d+\.fls\.doubleclick\.net$/,
        pf = function(a, b, c) {
            for (var d = a.split("&"), e = 0; e < d.length; e++) {
                var f = d[e].split("=");
                if (decodeURIComponent(f[0]).replace(/\+/g, " ") === b) {
                    var g = f.slice(1).join("=");
                    return c ? g : decodeURIComponent(g).replace(/\+/g, " ")
                }
            }
        },
        uf = function(a, b, c, d, e) {
            b && (b = String(b).toLowerCase());
            if ("protocol" === b || "port" === b) a.protocol = qf(a.protocol) || qf(z.location.protocol);
            "port" === b ? a.port = String(Number(a.hostname ? a.port : z.location.port) || ("http" === a.protocol ? 80 : "https" ===
                a.protocol ? 443 : "")) : "host" === b && (a.hostname = (a.hostname || z.location.hostname).replace(nf, "").toLowerCase());
            return rf(a, b, c, d, e)
        },
        rf = function(a, b, c, d, e) {
            var f, g = qf(a.protocol);
            b && (b = String(b).toLowerCase());
            switch (b) {
                case "url_no_fragment":
                    f = vf(a);
                    break;
                case "protocol":
                    f = g;
                    break;
                case "host":
                    f = a.hostname.replace(nf, "").toLowerCase();
                    if (c) {
                        var l = /^www\d*\./.exec(f);
                        l && l[0] && (f = f.substr(l[0].length))
                    }
                    break;
                case "port":
                    f = String(Number(a.port) || ("http" === g ? 80 : "https" === g ? 443 : ""));
                    break;
                case "path":
                    a.pathname ||
                        a.hostname || $a("TAGGING", 1);
                    f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
                    var m = f.split("/");
                    0 <= (d || []).indexOf(m[m.length - 1]) && (m[m.length - 1] = "");
                    f = m.join("/");
                    break;
                case "query":
                    f = a.search.replace("?", "");
                    e && (f = pf(f, e));
                    break;
                case "extension":
                    var n = a.pathname.split(".");
                    f = 1 < n.length ? n[n.length - 1] : "";
                    f = f.split("/")[0];
                    break;
                case "fragment":
                    f = a.hash.replace("#", "");
                    break;
                default:
                    f = a && a.href
            }
            return f
        },
        qf = function(a) {
            return a ? a.replace(":", "").toLowerCase() : ""
        },
        vf = function(a) {
            var b = "";
            if (a &&
                a.href) {
                var c = a.href.indexOf("#");
                b = 0 > c ? a.href : a.href.substr(0, c)
            }
            return b
        },
        wf = function(a) {
            var b = C.createElement("a");
            a && (b.href = a);
            var c = b.pathname;
            "/" !== c[0] && (a || $a("TAGGING", 1), c = "/" + c);
            var d = b.hostname.replace(nf, "");
            return {
                href: b.href,
                protocol: b.protocol,
                host: b.host,
                hostname: d,
                pathname: c,
                search: b.search,
                hash: b.hash,
                port: b.port
            }
        },
        xf = function(a) {
            function b(n) {
                var p = n.split("=")[0];
                return 0 > d.indexOf(p) ? n : p + "=0"
            }

            function c(n) {
                return n.split("&").map(b).filter(function(p) {
                    return void 0 !== p
                }).join("&")
            }
            var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),
                e = wf(a),
                f = a.split(/[?#]/)[0],
                g = e.search,
                l = e.hash;
            "?" === g[0] && (g = g.substring(1));
            "#" === l[0] && (l = l.substring(1));
            g = c(g);
            l = c(l);
            "" !== g && (g = "?" + g);
            "" !== l && (l = "#" + l);
            var m = "" + f + g + l;
            "/" === m[m.length - 1] && (m = m.substring(0, m.length - 1));
            return m
        },
        yf = function(a) {
            var b = wf(z.location.href),
                c = uf(b, "host", !1);
            if (c && c.match( of )) {
                var d = uf(b, "path").split(a + "=");
                if (1 < d.length) return d[1].split(";")[0].split("?")[0]
            }
        };
    var Af = function(a, b, c) {
            var d = a.element,
                e = {
                    R: a.R,
                    type: a.fa,
                    tagName: d.tagName
                };
            b && (e.querySelector = zf(d));
            c && (e.isVisible = !df(d));
            return e
        },
        Bf = function(a, b, c) {
            return Af({
                element: a.element,
                R: a.R,
                fa: "1"
            }, b, c)
        },
        Cf = function(a) {
            var b = !!a.Ac + "." + !!a.Bc;
            a && a.zd && a.zd.length && (b += "." + a.zd.join("."));
            a && a.Ta && (b += "." + a.Ta.email + "." + a.Ta.phone + "." + a.Ta.address);
            return b
        },
        Ff = function(a) {
            if (0 != a.length) {
                var b;
                b = Df(a, function(c) {
                    return !Ef.test(c.R)
                });
                b = Df(b, function(c) {
                    return "INPUT" === c.element.tagName.toUpperCase()
                });
                b = Df(b, function(c) {
                    return !df(c.element)
                });
                return b[0]
            }
        },
        Gf = function(a, b) {
            if (!b || 0 === b.length) return a;
            for (var c = [], d = 0; d < a.length; d++) {
                for (var e = !0, f = 0; f < b.length; f++) {
                    var g = b[f];
                    if (g && xd(a[d].element, g)) {
                        e = !1;
                        break
                    }
                }
                e && c.push(a[d])
            }
            return c
        },
        Df = function(a, b) {
            if (1 >= a.length) return a;
            var c = a.filter(b);
            return 0 == c.length ? a : c
        },
        zf = function(a) {
            var b;
            if (a === C.body) b = "body";
            else {
                var c;
                if (a.id) c = "#" + a.id;
                else {
                    var d;
                    if (a.parentElement) {
                        var e;
                        a: {
                            var f = a.parentElement;
                            if (f) {
                                for (var g = 0; g < f.childElementCount; g++)
                                    if (f.children[g] ===
                                        a) {
                                        e = g + 1;
                                        break a
                                    }
                                e = -1
                            } else e = 1
                        }
                        d = zf(a.parentElement) + ">:nth-child(" + e + ")"
                    } else d = "";
                    c = d
                }
                b = c
            }
            return b
        },
        If = function(a) {
            for (var b = [], c = 0; c < a.length; c++) {
                var d = a[c],
                    e = d.textContent;
                "INPUT" === d.tagName.toUpperCase() && d.value && (e = d.value);
                if (e) {
                    var f = e.match(Hf);
                    if (f) {
                        var g = f[0],
                            l;
                        if (z.location) {
                            var m = rf(z.location, "host", !0);
                            l = 0 <= g.toLowerCase().indexOf(m)
                        } else l = !1;
                        l || b.push({
                            element: d,
                            R: g
                        })
                    }
                }
            }
            return b
        },
        Mf = function() {
            var a = [],
                b = C.body;
            if (!b) return {
                elements: a,
                status: "4"
            };
            for (var c = b.querySelectorAll("*"),
                    d = 0; d < c.length && 1E4 > d; d++) {
                var e = c[d];
                if (!(0 <= Jf.indexOf(e.tagName.toUpperCase())) && e.children instanceof HTMLCollection) {
                    for (var f = !1, g = 0; g < e.childElementCount && 1E4 > g; g++)
                        if (!(0 <= Kf.indexOf(e.children[g].tagName.toUpperCase()))) {
                            f = !0;
                            break
                        }(!f || S(114) && -1 !== Lf.indexOf(e.tagName)) && a.push(e)
                }
            }
            return {
                elements: a,
                status: 1E4 < c.length ? "2" : "1"
            }
        },
        Nf = !0,
        Of = !1;
    var Hf = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i,
        Pf = /@(gmail|googlemail)\./i,
        Ef = /support|noreply/i,
        Jf = "SCRIPT STYLE IMG SVG PATH BR NOSCRIPT TEXTAREA".split(" "),
        Kf = ["BR"],
        Qf = {
            Ll: "1",
            Ul: "2",
            Nl: "3",
            Pl: "4",
            Il: "5",
            Vl: "6",
            Ql: "7"
        },
        Rf = {},
        Lf = ["INPUT", "SELECT"];
    var jg = function(a) {
            a = a || {
                Ac: !0,
                Bc: !0
            };
            a.Ta = a.Ta || {
                email: !0,
                phone: !1,
                address: !1
            };
            var b = Cf(a),
                c = Rf[b];
            if (c && 200 > Ha() - c.timestamp) return c.result;
            var d = Mf(),
                e = d.status,
                f = [],
                g, l, m = [];
            if (!S(114)) {
                if (a.Ta && a.Ta.email) {
                    var n = If(d.elements);
                    f = Gf(n, a && a.zd);
                    g = Ff(f);
                    10 < n.length && (e = "3")
                }!a.ui && g && (f = [g]);
                for (var p = 0; p < f.length; p++) m.push(Bf(f[p], a.Ac, a.Bc));
                m = m.slice(0, 10)
            } else if (a.Ta) {}
            g && (l = Bf(g, a.Ac, a.Bc));
            var D = {
                elements: m,
                al: l,
                status: e
            };
            Rf[b] = {
                timestamp: Ha(),
                result: D
            };
            return D
        },
        kg = function(a) {
            return a.tagName + ":" + a.isVisible + ":" + a.R.length + ":" + Pf.test(a.R)
        };
    var lg = function(a, b, c) {
            if (!c) return !1;
            var d = c.selector_type,
                e = String(c.value),
                f;
            if ("js_variable" === d) {
                e = e.replace(/\["?'?/g, ".").replace(/"?'?\]/g, "");
                for (var g = e.split(","), l = 0; l < g.length; l++) {
                    var m = g[l].trim();
                    if (m) {
                        if (0 === m.indexOf("dataLayer.")) f = Ne(m.substring(10));
                        else {
                            var n = m.split(".");
                            f = z[n.shift()];
                            for (var p = 0; p < n.length; p++) f = f && f[n[p]]
                        }
                        if (void 0 !== f) break
                    }
                }
            } else if ("css_selector" === d && vd) {
                var q = wd(e);
                if (q && 0 < q.length) {
                    f = [];
                    for (var t = 0; t < q.length && t < ("email" === b || "phone_number" === b ? 5 : 1); t++) f.push(Rb(q[t]) ||
                        Fa(q[t].value));
                    f = 1 === f.length ? f[0] : f
                }
            }
            return f ? (a[b] = f, !0) : !1
        },
        mg = function(a) {
            if (a) {
                var b = {},
                    c = !1;
                c = lg(b, "email", a.email) || c;
                c = lg(b, "phone_number", a.phone) || c;
                b.address = [];
                for (var d = a.name_and_address || [], e = 0; e < d.length; e++) {
                    var f = {};
                    c = lg(f, "first_name", d[e].first_name) || c;
                    c = lg(f, "last_name", d[e].last_name) || c;
                    c = lg(f, "street", d[e].street) || c;
                    c = lg(f, "city", d[e].city) || c;
                    c = lg(f, "region", d[e].region) || c;
                    c = lg(f, "country", d[e].country) || c;
                    c = lg(f, "postal_code", d[e].postal_code) || c;
                    b.address.push(f)
                }
                return c ?
                    b : void 0
            }
        },
        ng = function(a) {
            return a.B[N.g.Df]
        },
        og = function(a) {
            var b = T(a, N.g.Yc) || {},
                c = !1;
            k(b, function(d, e) {
                var f = e.enhanced_conversions_mode;
                if ("automatic" === f || "manual" === f) c = !0
            });
            return c
        },
        pg = function(a) {
            if (!G(a)) return !1;
            var b = a.mode;
            return "auto_detect" === b || "selectors" === b || "code" === b || !!a.enable_code
        },
        qg = function(a) {
            if (a) {
                if ("selectors" === a.mode || G(a.selectors)) return mg(a.selectors);
                if ("auto_detect" === a.mode || G(a.auto_detect)) {
                    var b;
                    var c = a.auto_detect;
                    if (c) {
                        var d = jg({
                                Ac: !1,
                                Bc: !1,
                                zd: c.exclude_element_selectors,
                                Ta: {
                                    email: !!c.email,
                                    phone: !!c.phone,
                                    address: !!c.address
                                }
                            }).elements,
                            e = {};
                        if (0 < d.length)
                            for (var f = 0; f < d.length; f++) {
                                var g = d[f];
                                if ("1" === g.type) {
                                    e.email = g.R;
                                    break
                                }
                            }
                        b = e
                    } else b = void 0;
                    return b
                }
            }
        };
    var rg = function(a) {
            var b = a && a[N.g.Qg];
            return b && b[N.g.fj]
        },
        sg = function() {
            return -1 !== Db.userAgent.toLowerCase().indexOf("firefox")
        },
        tg = function(a) {
            if (a && a.length) {
                for (var b = [], c = 0; c < a.length; ++c) {
                    var d = a[c];
                    d && d.estimated_delivery_date ? b.push("" + d.estimated_delivery_date) :
                        b.push("")
                }
                return b.join(",")
            }
        };
    var ug = new function(a, b) {
        this.h = a;
        this.defaultValue = void 0 === b ? !1 : b
    }(1933);
    var vg = function(a) {
        vg[" "](a);
        return a
    };
    vg[" "] = function() {};
    var xg = function() {
        var a = wg,
            b = "Uf";
        if (a.Uf && a.hasOwnProperty(b)) return a.Uf;
        var c = new a;
        return a.Uf = c
    };
    var wg = function() {
        var a = {};
        this.h = function() {
            var b = ug.h,
                c = ug.defaultValue;
            return null != a[b] ? a[b] : c
        };
        this.m = function() {
            a[ug.h] = !0
        }
    };
    var yg = !1,
        zg = !1,
        Ag = [],
        Bg = {},
        Cg = {},
        Dg = {
            ad_storage: !1,
            ad_user_data: !1,
            ad_data_sharing: !1
        };

    function Eg() {
        var a = Fb("google_tag_data", {});
        a.ics || (a.ics = {
            entries: {},
            cps: {},
            set: Fg,
            default: Fg,
            update: Gg,
            declare: Hg,
            implicit: Ig,
            addListener: Jg,
            notifyListeners: Kg,
            setCps: Lg,
            active: !1,
            usedDeclare: !1,
            usedDefault: !1,
            usedUpdate: !1,
            usedImplicit: !1,
            usedSetCps: !1,
            accessedDefault: !1,
            accessedAny: !1,
            wasSetLate: !1
        });
        return a.ics
    }

    function Mg(a, b, c, d) {
        return "" === c || a === d ? !0 : a === c ? b !== d : !a && !b
    }

    function Hg(a, b, c, d, e) {
        var f = Eg();
        f.active = !0;
        f.usedDeclare = !0;
        var g = f.entries,
            l = g[a] || {},
            m = l.declare_region,
            n = c && h(c) ? c.toUpperCase() : void 0;
        d = d.toUpperCase();
        e = e.toUpperCase();
        if (Mg(n, m, d, e)) {
            var p = {
                region: l.region,
                declare_region: n,
                declare: "granted" === b,
                implicit: l.implicit,
                initial: l.initial,
                default: l.default,
                update: l.update,
                quiet: l.quiet
            };
            if ("" !== d || !1 !== l.declare) g[a] = p
        }
    }

    function Ig(a, b) {
        var c = Eg();
        c.active = !0;
        c.usedImplicit = !0;
        var d = c.entries,
            e = d[a] = d[a] || {};
        !1 !== e.implicit && (e.implicit = "granted" === b)
    }

    function Fg(a, b, c, d, e, f) {
        var g = Eg();
        g.usedDefault || !g.accessedDefault && !g.accessedAny || (g.wasSetLate = !0);
        g.active = !0;
        g.usedDefault = !0;
        $a("TAGGING", 19);
        if (void 0 == b) $a("TAGGING", 18);
        else {
            var l = g.entries,
                m = l[a] || {},
                n = m.region,
                p = c && h(c) ? c.toUpperCase() : void 0;
            d = d.toUpperCase();
            e = e.toUpperCase();
            var q = "granted" === b;
            if (Mg(p, n, d, e)) {
                var t = !!(f && 0 < f && void 0 === m.update),
                    r = {
                        region: p,
                        declare_region: m.declare_region,
                        implicit: m.implicit,
                        initial: q,
                        default: q,
                        declare: m.declare,
                        update: m.update,
                        quiet: t
                    };
                if ("" !== d ||
                    !1 !== m.default) l[a] = r;
                t && z.setTimeout(function() {
                    if (l[a] === r && r.quiet) {
                        r.quiet = !1;
                        var u = [a];
                        if (Te(4))
                            for (var v in Bg) Bg.hasOwnProperty(v) && Bg[v] === a && u.push(v);
                        for (var w = 0; w < u.length; w++) Ng(u[w]);
                        Kg();
                        $a("TAGGING", 2)
                    }
                }, f)
            }
        }
    }

    function Gg(a, b) {
        var c = Eg();
        c.usedDefault || c.usedUpdate || !c.accessedAny || (c.wasSetLate = !0);
        c.active = !0;
        c.usedUpdate = !0;
        if (void 0 != b) {
            var d = Og(c, a),
                e = c.entries,
                f = e[a] = e[a] || {};
            f.update = "granted" === b;
            var g = Og(c, a),
                l = [a];
            if (Te(4))
                for (var m in Bg) Bg.hasOwnProperty(m) && Bg[m] === a && l.push(m);
            if (f.quiet) {
                f.quiet = !1;
                for (var n = 0; n < l.length; n++) Ng(l[n])
            } else if (g !== d)
                for (var p = 0; p < l.length; p++) Ng(l[p])
        }
    }

    function Lg(a, b, c, d, e) {
        var f = Eg(),
            g;
        a: {
            var l = f.cps,
                m, n = l[a] || {},
                p = n.region,
                q = c && h(c) ? c.toUpperCase() : void 0;m = d.toUpperCase();
            if (Mg(q, p, m, e.toUpperCase())) {
                var t = {
                    enabled: "granted" === b,
                    region: q
                };
                if ("" !== m || !1 !== n.enabled) {
                    l[a] = t;
                    g = !0;
                    break a
                }
            }
            g = !1
        }
        g && (f.usedSetCps = !0)
    }

    function Jg(a, b) {
        Ag.push({
            consentTypes: a,
            kk: b
        })
    }

    function Ng(a) {
        for (var b = 0; b < Ag.length; ++b) {
            var c = Ag[b];
            ua(c.consentTypes) && -1 !== c.consentTypes.indexOf(a) && (c.li = !0)
        }
    }

    function Kg(a, b) {
        for (var c = 0; c < Ag.length; ++c) {
            var d = Ag[c];
            if (d.li) {
                d.li = !1;
                try {
                    d.kk({
                        consentEventId: a,
                        consentPriorityId: b
                    })
                } catch (e) {}
            }
        }
    }

    function Og(a, b) {
        var c = a.entries,
            d = c[b] || {},
            e = d.update;
        if (void 0 !== e) return e ? 1 : 2;
        e = d.default;
        if (void 0 !== e) return e ? 1 : 2;
        if (Te(4) && Bg.hasOwnProperty(b)) {
            var f = c[Bg[b]] || {};
            e = f.update;
            if (void 0 !== e) return e ? 1 : 2;
            e = f.default;
            if (void 0 !== e) return e ? 1 : 2
        }
        e = d.declare;
        return void 0 !== e ? e ? 1 : 2 : Te(4) && (e = d.implicit, void 0 !== e) ? e ? 3 : 4 : Te(3) && Dg.hasOwnProperty(b) ? Dg[b] ? 3 : 4 : 0
    }
    var Pg = function(a) {
            var b = Eg();
            b.accessedAny = !0;
            switch (Og(b, a)) {
                case 1:
                case 3:
                    return !0;
                case 2:
                case 4:
                    return !1;
                default:
                    return !0
            }
        },
        Qg = function(a) {
            var b = Eg();
            b.accessedAny = !0;
            return Og(b, a)
        },
        Rg = function(a) {
            var b = Eg();
            b.accessedAny = !0;
            switch (Og(b, a)) {
                case 1:
                case 3:
                    return !0;
                case 2:
                case 4:
                    return !1
            }
        },
        Sg = function(a) {
            var b = Eg();
            b.accessedAny = !0;
            return !(b.entries[a] || {}).quiet
        },
        Tg = function() {
            if (!xg().h()) return !1;
            var a = Eg();
            a.accessedAny = !0;
            return a.active
        },
        Ug = function() {
            var a = Eg();
            a.accessedDefault = !0;
            return a.usedDefault
        },
        Vg = function(a, b) {
            Eg().addListener(a, b)
        },
        Wg = function(a, b) {
            Eg().notifyListeners(a, b)
        },
        Xg = function(a, b) {
            function c() {
                for (var e = 0; e < b.length; e++)
                    if (!Sg(b[e])) return !0;
                return !1
            }
            if (c()) {
                var d = !1;
                Vg(b, function(e) {
                    d || c() || (d = !0, a(e))
                })
            } else a({})
        },
        Yg = function(a, b) {
            function c() {
                for (var f = [], g = 0; g < d.length; g++) {
                    var l = d[g];
                    !1 === Rg(l) || e[l] || (f.push(l), e[l] = !0)
                }
                return f
            }
            var d = h(b) ? [b] : b,
                e = {};
            c().length !== d.length && Vg(d, function(f) {
                var g = c();
                0 < g.length && (f.consentTypes = g, a(f))
            })
        };

    function Zg() {}

    function ih() {};
    var jh = [N.g.H, N.g.N],
        kh = [N.g.H, N.g.N, N.g.af, N.g.xg],
        lh = {},
        mh = (lh[N.g.Ki] = "a", lh[N.g.Mi] = "s", lh[N.g.Ni] = "y", lh[N.g.Li] = "p", lh),
        nh = function(a) {
            for (var b = a[N.g.Yb], c = Array.isArray(b) ? b : [b], d = {
                    Gc: 0
                }; d.Gc < c.length; d = {
                    Gc: d.Gc
                }, ++d.Gc) k(a, function(e) {
                return function(f, g) {
                    if (f !== N.g.Yb) {
                        var l = c[e.Gc],
                            m = Ue["0"] || "",
                            n = Ue["1"] || "";
                        zg = !0;
                        yg && $a("TAGGING", 20);
                        Eg().declare(f, g, l, m, n)
                    }
                }
            }(d))
        },
        oh = function(a) {
            var b = a[N.g.Yb];
            b && L(40);
            var c = a[N.g.yg];
            c && L(41);
            for (var d = ua(b) ? b : [b], e = {
                    Hc: 0
                }; e.Hc < d.length; e = {
                    Hc: e.Hc
                },
                ++e.Hc) k(a, function(f) {
                return function(g, l) {
                    if (g !== N.g.Yb && g !== N.g.yg) {
                        var m = d[f.Hc],
                            n = Number(c),
                            p = Ue["0"] || "",
                            q = Ue["1"] || "";
                        yg = !0;
                        zg && $a("TAGGING", 20);
                        Eg().default(g, l, m, p, q, n)
                    }
                }
            }(e))
        },
        ph = function(a, b) {
            k(a, function(c, d) {
                yg = !0;
                zg && $a("TAGGING", 20);
                Eg().update(c, d)
            });
            Wg(b.eventId, b.priorityId)
        },
        qh = function(a) {
            for (var b = a[N.g.Yb], c = Array.isArray(b) ? b : [b], d = {
                    Ic: 0
                }; d.Ic < c.length; d = {
                    Ic: d.Ic
                }, ++d.Ic) k(a, function(e) {
                return function(f, g) {
                    if (f !== N.g.Yb) {
                        var l = c[e.Ic],
                            m = Ue["0"] || "",
                            n = Ue["1"] || "";
                        Eg().setCps(f,
                            g, l, m, n)
                    }
                }
            }(d))
        },
        rh = function(a) {
            var b = Rg(a);
            return void 0 != b ? b : !0
        },
        sh = function() {
            if (S(104)) {
                for (var a = "G2", b = 0; b < kh.length; b++) switch (Qg(kh[b])) {
                    case 1:
                        a += "G";
                        break;
                    case 2:
                        a += "D";
                        break;
                    case 3:
                        a += "g";
                        break;
                    case 4:
                        a += "d";
                        break;
                    case 0:
                        a += "g"
                }
                return a
            }
            var c = S(111) && jh.every(Pg),
                d = S(112);
            if (c || d) {
                for (var e = "G2", f = 0; f < jh.length; f++) switch (Qg(jh[f])) {
                    case 1:
                        e += "G";
                        break;
                    case 2:
                        e += "D";
                        break;
                    case 3:
                        e += "g";
                        break;
                    case 4:
                        e += "d";
                        break;
                    case 0:
                        e += "g"
                }
                return e
            }
            for (var g = "G1", l = 0; l < jh.length; l++) switch (Qg(jh[l])) {
                case 1:
                case 3:
                    g +=
                        "1";
                    break;
                case 2:
                case 4:
                    g += "0";
                    break;
                case 0:
                    g += "-"
            }
            return g
        },
        th = {},
        uh = (th[N.g.H] = 0, th[N.g.N] = 1, th[N.g.af] = 2, th[N.g.xg] = 3, th);

    function vh(a) {
        switch (a) {
            case void 0:
                return 1;
            case !0:
                return 3;
            case !1:
                return 2;
            default:
                return 0
        }
    }
    var wh = function() {
            if (S(106)) {
                for (var a = "1", b = 0; b < kh.length; b++) {
                    var c = a,
                        d, e = kh[b],
                        f = Bg[e];
                    d = void 0 === f ? 0 : uh.hasOwnProperty(f) ? 12 | uh[f] : 8;
                    var g = Eg();
                    g.accessedAny = !0;
                    var l = g.entries[e] || {};
                    d = d << 2 | vh(l.implicit);
                    a = c + ("" + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [d] + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [vh(l.declare) << 4 | vh(l.default) << 2 | vh(l.update)])
                }
                return a
            }
            for (var m = "G1", n = 0; n < jh.length; n++) {
                var p;
                a: {
                    var q = jh[n],
                        t = Eg();t.accessedDefault = !0;
                    switch ((t.entries[q] || {}).default) {
                        case !0:
                            p = 3;
                            break a;
                        case !1:
                            p = 2;
                            break a;
                        default:
                            p = 1
                    }
                }
                switch (p) {
                    case 3:
                        m += "1";
                        break;
                    case 2:
                        m += "0";
                        break;
                    case 1:
                        m += "-"
                }
            }
            return m
        },
        xh = function() {
            var a = Eg(),
                b = a.cps,
                c = [],
                d;
            for (d in Cg) Cg.hasOwnProperty(d) && Cg[d].enabled && (a.usedSetCps ? b.hasOwnProperty(d) && b[d].enabled && c.push(d) : c.push(d));
            for (var e = "", f = 0; f < c.length; f++) {
                var g = mh[c[f]];
                g && (e += g)
            }
            return "" === e ? "-" : e
        },
        yh = function() {
            return rh(N.g.af) ? We() || Eg().usedSetCps : !1
        },
        zh = function(a, b) {
            Yg(a, b)
        },
        Ah = function(a, b) {
            Xg(a, b)
        };
    var Bh = function(a) {
        var b = 1,
            c, d, e;
        if (a)
            for (b = 0, d = a.length - 1; 0 <= d; d--) e = a.charCodeAt(d), b = (b << 6 & 268435455) + e + (e << 14), c = b & 266338304, b = 0 !== c ? b ^ c >> 21 : b;
        return b
    };
    var Ch = function(a, b, c) {
        for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
            var g = e[f].split("="),
                l = g[0].replace(/^\s*|\s*$/g, "");
            if (l && l == a) {
                var m = g.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                m && c && (m = decodeURIComponent(m));
                d.push(m)
            }
        }
        return d
    };
    var Dh = function(a, b) {
            var c = function() {};
            c.prototype = a.prototype;
            var d = new c;
            a.apply(d, Array.prototype.slice.call(arguments, 1));
            return d
        },
        Eh = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = null;
                    c()
                }
            }
        };

    function Fh(a) {
        return "null" !== a.origin
    };
    var Ih = function(a, b, c, d) {
            return Gh(d) ? Ch(a, String(b || Hh()), c) : []
        },
        Lh = function(a, b, c, d, e) {
            if (Gh(e)) {
                var f = Jh(a, d, e);
                if (1 === f.length) return f[0].id;
                if (0 !== f.length) {
                    f = Kh(f, function(g) {
                        return g.Le
                    }, b);
                    if (1 === f.length) return f[0].id;
                    f = Kh(f, function(g) {
                        return g.Id
                    }, c);
                    return f[0] ? f[0].id : void 0
                }
            }
        };

    function Mh(a, b, c, d) {
        var e = Hh(),
            f = window;
        Fh(f) && (f.document.cookie = a);
        var g = Hh();
        return e != g || void 0 != c && 0 <= Ih(b, g, !1, d).indexOf(c)
    }
    var Qh = function(a, b, c) {
            function d(r, u, v) {
                if (null == v) return delete g[u], r;
                g[u] = v;
                return r + "; " + u + "=" + v
            }

            function e(r, u) {
                if (null == u) return delete g[u], r;
                g[u] = !0;
                return r + "; " + u
            }
            if (!Gh(c.nb)) return 2;
            var f;
            void 0 == b ? f = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = Nh(b), f = a + "=" + b);
            var g = {};
            f = d(f, "path", c.path);
            var l;
            c.expires instanceof Date ? l = c.expires.toUTCString() : null != c.expires && (l = "" + c.expires);
            f = d(f, "expires", l);
            f = d(f, "max-age", c.gm);
            f = d(f, "samesite",
                c.hm);
            c.im && (f = e(f, "secure"));
            var m = c.domain;
            if (m && "auto" === m.toLowerCase()) {
                for (var n = Oh(), p = 0; p < n.length; ++p) {
                    var q = "none" !== n[p] ? n[p] : void 0,
                        t = d(f, "domain", q);
                    t = e(t, c.flags);
                    if (!Ph(q, c.path) && Mh(t, a, b, c.nb)) return 0
                }
                return 1
            }
            m && "none" !== m.toLowerCase() && (f = d(f, "domain", m));
            f = e(f, c.flags);
            return Ph(m, c.path) ? 1 : Mh(f, a, b, c.nb) ? 0 : 1
        },
        Rh = function(a, b, c) {
            null == c.path && (c.path = "/");
            c.domain || (c.domain = "auto");
            return Qh(a, b, c)
        };

    function Kh(a, b, c) {
        for (var d = [], e = [], f, g = 0; g < a.length; g++) {
            var l = a[g],
                m = b(l);
            m === c ? d.push(l) : void 0 === f || m < f ? (e = [l], f = m) : m === f && e.push(l)
        }
        return 0 < d.length ? d : e
    }

    function Jh(a, b, c) {
        for (var d = [], e = Ih(a, void 0, void 0, c), f = 0; f < e.length; f++) {
            var g = e[f].split("."),
                l = g.shift();
            if (!b || -1 !== b.indexOf(l)) {
                var m = g.shift();
                m && (m = m.split("-"), d.push({
                    id: g.join("."),
                    Le: 1 * m[0] || 1,
                    Id: 1 * m[1] || 1
                }))
            }
        }
        return d
    }
    var Nh = function(a) {
            a && 1200 < a.length && (a = a.substring(0, 1200));
            return a
        },
        Sh = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        Th = /(^|\.)doubleclick\.net$/i,
        Ph = function(a, b) {
            return Th.test(window.document.location.hostname) || "/" === b && Sh.test(a)
        },
        Hh = function() {
            return Fh(window) ? window.document.cookie : ""
        },
        Oh = function() {
            var a = [],
                b = window.document.location.hostname.split(".");
            if (4 === b.length) {
                var c = b[b.length - 1];
                if (parseInt(c, 10).toString() === c) return ["none"]
            }
            for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
            var e = window.document.location.hostname;
            Th.test(e) || Sh.test(e) || a.push("none");
            return a
        },
        Gh = function(a) {
            if (!xg().h() || !a || !Tg()) return !0;
            if (!Sg(a)) return !1;
            var b = Rg(a);
            return null == b ? !0 : !!b
        };
    var Uh = function(a) {
            var b = Math.round(2147483647 * Math.random());
            return a ? String(b ^ Bh(a) & 2147483647) : String(b)
        },
        Vh = function(a) {
            return [Uh(a), Math.round(Ha() / 1E3)].join(".")
        },
        Yh = function(a, b, c, d, e) {
            var f = Wh(b);
            return Lh(a, f, Xh(c), d, e)
        },
        Zh = function(a, b, c, d) {
            var e = "" + Wh(c),
                f = Xh(d);
            1 < f && (e += "-" + f);
            return [b, e, a].join(".")
        },
        Wh = function(a) {
            if (!a) return 1;
            a = 0 === a.indexOf(".") ? a.substr(1) : a;
            return a.split(".").length
        },
        Xh = function(a) {
            if (!a || "/" === a) return 1;
            "/" !== a[0] && (a = "/" + a);
            "/" !== a[a.length - 1] && (a += "/");
            return a.split("/").length -
                1
        };
    var $h = function() {
        ne.dedupe_gclid || (ne.dedupe_gclid = "" + Vh());
        return ne.dedupe_gclid
    };
    var ai = function() {
        var a = !1;
        return a
    };
    var bi = function() {
            this.container = {};
            this.destination = {};
            this.canonical = {}
        },
        ci = function() {
            var a = Fb("google_tag_data", {}),
                b = a.tidr;
            b || (b = new bi, a.tidr = b);
            return b
        };
    var U = {
            C: "GTM-W7MBMN",
            rb: "2340190"
        },
        di = {
            ji: "GTM-W7MBMN",
            ki: "GTM-W7MBMN"
        };
    U.Be = Ca("");
    var ei = function() {
            return di.ji ? di.ji.split("|") : [U.C]
        },
        fi = function() {
            return di.ki ? di.ki.split("|") : []
        },
        gi = function(a) {
            var b = ci();
            return a.isDestination ? b.destination[a.ctid] : b.container[a.ctid]
        },
        hi = function() {
            for (var a = ci(), b = ei(), c = 0; c < b.length; c++) {
                var d = a.container[b[c]];
                d ? (d.state = 2, d.containers = ei(), d.destinations = fi()) : a.container[b[c]] = {
                    state: 2,
                    containers: ei(),
                    destinations: fi()
                }
            }
            for (var e = fi(), f = 0; f < e.length; f++) {
                var g = a.destination[e[f]];
                g && 0 === g.state && L(93);
                g ? (g.state = 2, g.containers = ei(),
                    g.destinations = fi()) : a.destination[e[f]] = {
                    state: 2,
                    containers: ei(),
                    destinations: fi()
                }
            }
            a.canonical[U.rb] = 2
        },
        ii = function(a) {
            return !!ci().container[a]
        },
        ji = function() {
            return {
                ctid: U.C,
                isDestination: U.Be
            }
        },
        ki = function() {
            var a = ci().container,
                b;
            for (b in a)
                if (a.hasOwnProperty(b) && 1 === a[b].state) return !0;
            return !1
        },
        li = function() {
            var a = {};
            k(ci().destination, function(b, c) {
                0 === c.state && (a[b] = c)
            });
            return a
        };
    var mi = {
            UA: 1,
            AW: 2,
            DC: 3,
            G: 4,
            GF: 5,
            GT: 12,
            GTM: 14,
            HA: 6,
            MC: 7
        },
        ni = function(a) {
            var b = U.C.split("-")[0].toUpperCase(),
                c = {};
            c.ctid = U.C;
            c.rl = me.sd;
            c.wl = me.If;
            c.Qk = U.Be ? 2 : 1;
            te ? (c.Ve = mi[b], c.Ve || (c.Ve = 0)) : c.Ve = ze ? 13 : 10;
            xe ? c.gg = 1 : ai() ? c.gg = 2 : c.gg = 3;
            var d;
            var e = c.Ve,
                f = c.gg;
            void 0 === e ? d = "" : (f || (f = 0), d = "" + ud(1, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [e << 2 | f]);
            var g = c.Yl,
                l = 4 + d + (g ? "" + ud(2, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [g] : ""),
                m, n = c.wl;
            m = n && td.test(n) ?
                "" + ud(3, 2) + n : "";
            var p, q = c.rl;
            p = q ? "" + ud(4, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [q] : "";
            var t;
            var r = c.ctid;
            if (r && a) {
                var u = r.split("-"),
                    v = u[0].toUpperCase();
                if ("GTM" !== v && "OPT" !== v) t = "";
                else {
                    var w = u[1];
                    t = "" + ud(5, 3) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [1 + w.length] + (c.Qk || 0) + w
                }
            } else t = "";
            return l + m + p + t
        };

    function oi(a, b) {
        if ("" === a) return b;
        var c = Number(a);
        return isNaN(c) ? b : c
    };
    var pi = function(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    };

    function qi() {
        return ib ? !!pb && !!pb.platform : !1
    }

    function ri() {
        return sb("iPhone") && !sb("iPod") && !sb("iPad")
    }

    function si() {
        ri() || sb("iPad") || sb("iPod")
    };
    ub();
    tb() || sb("Trident") || sb("MSIE");
    sb("Edge");
    !sb("Gecko") || -1 != ob().toLowerCase().indexOf("webkit") && !sb("Edge") || sb("Trident") || sb("MSIE") || sb("Edge"); - 1 != ob().toLowerCase().indexOf("webkit") && !sb("Edge") && sb("Mobile");
    qi() || sb("Macintosh");
    qi() || sb("Windows");
    (qi() ? "Linux" === pb.platform : sb("Linux")) || qi() || sb("CrOS");
    var ti = oa.navigator || null;
    ti && (ti.appVersion || "").indexOf("X11");
    qi() || sb("Android");
    ri();
    sb("iPad");
    sb("iPod");
    si();
    ob().toLowerCase().indexOf("kaios");
    var ui = function(a, b, c, d) {
            for (var e = b, f = c.length; 0 <= (e = a.indexOf(c, e)) && e < d;) {
                var g = a.charCodeAt(e - 1);
                if (38 == g || 63 == g) {
                    var l = a.charCodeAt(e + f);
                    if (!l || 61 == l || 38 == l || 35 == l) return e
                }
                e += f + 1
            }
            return -1
        },
        vi = /#|$/,
        wi = function(a, b) {
            var c = a.search(vi),
                d = ui(a, 0, b, c);
            if (0 > d) return null;
            var e = a.indexOf("&", d);
            if (0 > e || e > c) e = c;
            d += b.length + 1;
            return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
        },
        xi = /[?&]($|#)/,
        yi = function(a, b, c) {
            for (var d, e = a.search(vi), f = 0, g, l = []; 0 <= (g = ui(a, f, b, e));) l.push(a.substring(f,
                g)), f = Math.min(a.indexOf("&", g) + 1 || e, e);
            l.push(a.slice(f));
            d = l.join("").replace(xi, "$1");
            var m, n = null != c ? "=" + encodeURIComponent(String(c)) : "";
            var p = b + n;
            if (p) {
                var q, t = d.indexOf("#");
                0 > t && (t = d.length);
                var r = d.indexOf("?"),
                    u;
                0 > r || r > t ? (r = t, u = "") : u = d.substring(r + 1, t);
                q = [d.slice(0, r), u, d.slice(t)];
                var v = q[1];
                q[1] = p ? v ? v + "&" + p : p : v;
                m = q[0] + (q[1] ? "?" + q[1] : "") + q[2]
            } else m = d;
            return m
        };
    var zi = function(a) {
            try {
                var b;
                if (b = !!a && null != a.location.href) a: {
                    try {
                        vg(a.foo);
                        b = !0;
                        break a
                    } catch (c) {}
                    b = !1
                }
                return b
            } catch (c) {
                return !1
            }
        },
        Ai = function(a, b) {
            if (a)
                for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
        };

    function Bi() {
        if (!C.head) return null;
        var a = Ci("META");
        C.head.appendChild(a);
        a.httpEquiv = "origin-trial";
        a.content = 'A727AcAeLCei/ZogJHBlJUS63SxP6AeIROo7qXrkjrxkoxBu0eSSmypAHmGYwk4HjBMQp5nxCFODzfVnUIe31AQAAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjg4MDgzMTk5LCJpc1RoaXJkUGFydHkiOnRydWV9';
        return a
    }
    var Di = function() {
            if (z.top == z) return 0;
            var a = z.location.ancestorOrigins;
            return a ? a[a.length - 1] == z.location.origin ? 1 : 2 : zi(z.top) ? 1 : 2
        },
        Ci = function(a, b) {
            b = void 0 === b ? document : b;
            return b.createElement(String(a).toLowerCase())
        };

    function Ei(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        a.google_image_requests || (a.google_image_requests = []);
        var e = Ci("IMG", a.document);
        if (c) {
            var f = function() {
                if (c) {
                    var g = a.google_image_requests,
                        l = cb(g, e);
                    0 <= l && Array.prototype.splice.call(g, l, 1)
                }
                e.removeEventListener && e.removeEventListener("load", f, !1);
                e.removeEventListener && e.removeEventListener("error", f, !1)
            };
            pi(e, "load", f);
            pi(e, "error", f)
        }
        d && (e.attributionSrc = "");
        e.src = b;
        a.google_image_requests.push(e)
    }
    var Gi = function(a) {
            var b;
            b = void 0 === b ? !1 : b;
            var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
            Ai(a, function(d, e) {
                if (d || 0 === d) c += "&" + e + "=" + encodeURIComponent("" + d)
            });
            Fi(c, b)
        },
        Fi = function(a, b) {
            var c = window,
                d;
            b = void 0 === b ? !1 : b;
            d = void 0 === d ? !1 : d;
            if (c.fetch) {
                var e = {
                    keepalive: !0,
                    credentials: "include",
                    redirect: "follow",
                    method: "get",
                    mode: "no-cors"
                };
                d && (e.mode = "cors", e.headers = {
                    "Attribution-Reporting-Eligible": "event-source"
                });
                c.fetch(a, e)
            } else Ei(c, a, void 0 === b ? !1 : b, void 0 === d ? !1 : d)
        };
    var Hi = function() {};
    var Ii = function(a) {
            void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
            void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
            return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
        },
        Ji = function(a, b) {
            b = void 0 === b ? {} : b;
            this.m = a;
            this.h = null;
            this.K = {};
            this.Db = 0;
            var c;
            this.Z = null != (c = b.Dl) ? c : 500;
            var d;
            this.I = null != (d = b.Zl) ? d : !1;
            this.B = null
        };
    na(Ji, Hi);
    Ji.prototype.addEventListener = function(a) {
        var b = this,
            c = {
                internalBlockOnErrors: this.I
            },
            d = Eh(function() {
                return a(c)
            }),
            e = 0; - 1 !== this.Z && (e = setTimeout(function() {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, this.Z));
        var f = function(g, l) {
            clearTimeout(e);
            g ? (c = g, c.internalErrorState = Ii(c), c.internalBlockOnErrors = b.I, l && 0 === c.internalErrorState || (c.tcString = "tcunavailable", l || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable", c.internalErrorState = 3);
            a(c)
        };
        try {
            Ki(this, "addEventListener", f)
        } catch (g) {
            c.tcString =
                "tcunavailable", c.internalErrorState = 3, e && (clearTimeout(e), e = 0), d()
        }
    };
    Ji.prototype.removeEventListener = function(a) {
        a && a.listenerId && Ki(this, "removeEventListener", null, a.listenerId)
    };
    var Mi = function(a, b, c) {
            var d;
            d = void 0 === d ? "755" : d;
            var e;
            a: {
                if (a.publisher && a.publisher.restrictions) {
                    var f = a.publisher.restrictions[b];
                    if (void 0 !== f) {
                        e = f[void 0 === d ? "755" : d];
                        break a
                    }
                }
                e = void 0
            }
            var g = e;
            if (0 === g) return !1;
            var l = c;
            2 === c ? (l = 0, 2 === g && (l = 1)) : 3 === c && (l = 1, 1 === g && (l = 0));
            var m;
            if (0 === l)
                if (a.purpose && a.vendor) {
                    var n = Li(a.vendor.consents, void 0 === d ? "755" : d);
                    m = n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? !0 : n && Li(a.purpose.consents, b)
                } else m = !0;
            else m = 1 === l ? a.purpose && a.vendor ? Li(a.purpose.legitimateInterests,
                b) && Li(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
            return m
        },
        Li = function(a, b) {
            return !(!a || !a[b])
        },
        Ki = function(a, b, c, d) {
            c || (c = function() {});
            if ("function" === typeof a.m.__tcfapi) {
                var e = a.m.__tcfapi;
                e(b, 2, c, d)
            } else if (Ni(a)) {
                Oi(a);
                var f = ++a.Db;
                a.K[f] = c;
                if (a.h) {
                    var g = {};
                    a.h.postMessage((g.__tcfapiCall = {
                        command: b,
                        version: 2,
                        callId: f,
                        parameter: d
                    }, g), "*")
                }
            } else c({}, !1)
        },
        Ni = function(a) {
            if (a.h) return a.h;
            var b;
            a: {
                for (var c = a.m, d = 0; 50 > d; ++d) {
                    var e;
                    try {
                        e = !(!c.frames || !c.frames.__tcfapiLocator)
                    } catch (l) {
                        e = !1
                    }
                    if (e) {
                        b = c;
                        break a
                    }
                    var f;
                    b: {
                        try {
                            var g = c.parent;
                            if (g && g != c) {
                                f = g;
                                break b
                            }
                        } catch (l) {}
                        f = null
                    }
                    if (!(c = f)) break
                }
                b = null
            }
            a.h = b;
            return a.h
        },
        Oi = function(a) {
            a.B || (a.B = function(b) {
                try {
                    var c;
                    c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                    a.K[c.callId](c.returnValue, c.success)
                } catch (d) {}
            }, pi(a.m, "message", a.B))
        },
        Pi = function(a) {
            if (!1 === a.gdprApplies) return !0;
            void 0 === a.internalErrorState && (a.internalErrorState = Ii(a));
            return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ?
                (Gi({
                    e: String(a.internalErrorState)
                }), !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0
        };
    var Qi = {
            1: 0,
            3: 0,
            4: 0,
            7: 3,
            9: 3,
            10: 3
        },
        Ri = oi('', 500);

    function Si() {
        var a = ne.tcf || {};
        return ne.tcf = a
    }
    var Yi = function() {
        var a = Si(),
            b = new Ji(z, {
                Dl: -1
            });
        Ti(b) && Ui() && L(124);
        if (!Ui() && !a.active && Ti(b)) {
            a.active = !0;
            a.Se = {};
            Vi();
            a.tcString = "tcunavailable";
            try {
                b.addEventListener(function(c) {
                    if (0 !== c.internalErrorState) Wi(a), Xi(a);
                    else {
                        var d;
                        a.gdprApplies = c.gdprApplies;
                        if (!1 === c.gdprApplies) {
                            var e = {},
                                f;
                            for (f in Qi) Qi.hasOwnProperty(f) && (e[f] = !0);
                            d = e;
                            b.removeEventListener(c)
                        } else if ("tcloaded" === c.eventStatus || "useractioncomplete" === c.eventStatus || "cmpuishown" === c.eventStatus) {
                            var g = {},
                                l;
                            for (l in Qi)
                                if (Qi.hasOwnProperty(l))
                                    if ("1" ===
                                        l) {
                                        var m, n = c,
                                            p = !0;
                                        p = void 0 === p ? !1 : p;
                                        m = Pi(n) ? !1 === n.gdprApplies || "tcunavailable" === n.tcString || void 0 === n.gdprApplies && !p || "string" !== typeof n.tcString || !n.tcString.length ? !0 : Mi(n, "1", 0) : !1;
                                        g["1"] = m
                                    } else g[l] = Mi(c, l, Qi[l]);
                            d = g
                        }
                        d && (a.tcString = c.tcString || "tcempty", a.Se = d, Xi(a))
                    }
                })
            } catch (c) {
                Wi(a), Xi(a)
            }
        }
    };

    function Wi(a) {
        a.type = "e";
        a.tcString = "tcunavailable"
    }

    function Vi() {
        var a = {},
            b = (a.ad_storage = "denied", a.wait_for_update = Ri, a);
        oh(b)
    }

    function Ti(a) {
        return "function" === typeof z.__tcfapi || "function" === typeof a.m.__tcfapi || null != Ni(a) ? !0 : !1
    }
    var Ui = function() {
        return !0 !== z.gtag_enable_tcf_support
    };

    function Xi(a) {
        var b = {},
            c = (b.ad_storage = a.Se["1"] ? "granted" : "denied", b);
        ph(c, {
            eventId: 0
        }, {
            gdprApplies: a ? a.gdprApplies : void 0,
            tcString: Zi()
        })
    }
    var Zi = function() {
            var a = Si();
            return a.active ? a.tcString || "" : ""
        },
        $i = function() {
            var a = Si();
            return a.active && void 0 !== a.gdprApplies ? a.gdprApplies ? "1" : "0" : ""
        },
        aj = function(a) {
            if (!Qi.hasOwnProperty(String(a))) return !0;
            var b = Si();
            return b.active && b.Se ? !!b.Se[String(a)] : !0
        };
    var bj = function(a) {
            var b = String(a[cc.Bb] || "").replace(/_/g, "");
            0 === b.indexOf("cvt") && (b = "cvt");
            return b
        },
        cj = 0 <= z.location.search.indexOf("?gtm_latency=") || 0 <= z.location.search.indexOf("&gtm_latency=");
    var dj = {
            sampleRate: "0.005000",
            Di: "",
            Ci: Number("5"),
            km: Number("")
        },
        ej;
    if (!(ej = cj)) {
        var fj = Math.random(),
            gj = dj.sampleRate;
        ej = fj < gj
    }
    var hj = ej,
        ij = "https://www.googletagmanager.com/a?id=" + U.C + "&cv=925";

    function jj() {
        return [ij, "&v=3&t=t", "&pid=" + wa(), "&rv=" + me.If].join("")
    }
    var kj = jj();

    function lj() {
        kj = jj()
    }
    var mj = {},
        nj = "",
        oj = "",
        pj = "",
        qj = "",
        rj = [],
        sj = "",
        tj = "",
        uj = void 0,
        vj = {},
        wj = {},
        xj = void 0,
        yj = 5;
    0 < dj.Ci && (yj = dj.Ci);
    var zj = function(a, b) {
            for (var c = 0, d = [], e = 0; e < a; ++e) d.push(0);
            return {
                Hk: function() {
                    return c < a ? !1 : Ha() - d[c % a] < b
                },
                nl: function() {
                    var f = c++ % a;
                    d[f] = Ha()
                }
            }
        }(yj, 1E3),
        Aj = 1E3;

    function Bj(a) {
        var b = uj;
        if (void 0 === b) return "";
        var c = bb("GTM"),
            d = bb("TAGGING"),
            e = bb("HEALTH"),
            f = kj,
            g = mj[b] ? "" : "&es=1",
            l = vj[b],
            m = Cj(),
            n = nj,
            p = oj,
            q = tj,
            t = pj,
            r = qj,
            u;
        return [f, g, l, c ? "&u=" + c : "", d ? "&ut=" + d : "", e ? "&h=" + e : "", m, n, p, q, t, r, u, sj ? "&dl=" + encodeURIComponent(sj) : "", 0 < rj.length ? "&tdp=" + rj.join(".") : "", me.sd ? "&x=" + me.sd : "",
            "&z=0"
        ].join("")
    }

    function Ej() {
        xj && (z.clearTimeout(xj), xj = void 0);
        if (void 0 !== uj && (!mj[uj] || nj || oj))
            if (wj[uj] || zj.Hk() || 0 >= Aj--) L(1), wj[uj] = !0;
            else {
                zj.nl();
                var a = Bj(!0);
                Nb(a);
                if (qj || sj && 0 < rj.length) {
                    var b = a.replace("/a?", "/td?");
                    Nb(b)
                }
                mj[uj] = !0;
                sj = qj = pj = tj = oj = nj = "";
                rj = []
            }
    }

    function Fj() {
        xj || (xj = z.setTimeout(Ej, 500))
    }

    function Gj() {
        2022 <= Bj().length && Ej()
    }

    function Cj() {
        return "&tc=" + Dc.filter(function(a) {
            return a
        }).length
    }
    var Hj = function(a, b) {
            if (hj && !wj[a] && uj !== a) {
                Ej();
                uj = a;
                pj = nj = "";
                var c;
                c = b.match(/^(gtm|gtag)\./) ? encodeURIComponent(b) : "*";
                vj[a] = "&e=" + c + "&eid=" + a;
                Fj()
            }
        },
        Ij = function(a, b, c) {
            if (hj && b) {
                var d = bj(b),
                    e = c + d;
                if (!wj[a]) {
                    a !== uj && (Ej(), uj = a);
                    nj = nj ? nj + "." + e : "&tr=" + e;
                    var f = b["function"];
                    if (!f) throw Error("Error: No function name given for function call.");
                    var g = (Fc[f] ? "1" : "2") + d;
                    pj = pj ? pj + "." + g : "&ti=" + g;
                    Fj();
                    Gj()
                }
            }
        },
        Jj = function(a, b, c) {
            if (hj && void 0 !== a && !wj[a]) {
                a !== uj && (Ej(), uj = a);
                var d = c + b;
                oj = oj ? oj + "." + d : "&epr=" +
                    d;
                Fj();
                Gj()
            }
        },
        Kj = function(a, b, c) {},
        Dj = void 0;
    vb();
    ri() || sb("iPod");
    sb("iPad");
    !sb("Android") || wb() || vb() || ub() || sb("Silk");
    wb();
    !sb("Safari") || wb() || (tb() ? 0 : sb("Coast")) || ub() || (tb() ? 0 : sb("Edge")) || (tb() ? rb("Microsoft Edge") : sb("Edg/")) || (tb() ? rb("Opera") : sb("OPR")) || vb() || sb("Silk") || sb("Android") || si();
    var Lj = {},
        Mj = null,
        Nj = function(a) {
            for (var b = [], c = 0, d = 0; d < a.length; d++) {
                var e = a.charCodeAt(d);
                255 < e && (b[c++] = e & 255, e >>= 8);
                b[c++] = e
            }
            var f = 4;
            void 0 === f && (f = 0);
            if (!Mj) {
                Mj = {};
                for (var g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), l = ["+/=", "+/", "-_=", "-_.", "-_"], m = 0; 5 > m; m++) {
                    var n = g.concat(l[m].split(""));
                    Lj[m] = n;
                    for (var p = 0; p < n.length; p++) {
                        var q = n[p];
                        void 0 === Mj[q] && (Mj[q] = p)
                    }
                }
            }
            for (var t = Lj[f], r = Array(Math.floor(b.length / 3)), u = t[64] || "", v = 0, w = 0; v < b.length - 2; v += 3) {
                var x = b[v],
                    y = b[v + 1],
                    A = b[v + 2],
                    B = t[x >> 2],
                    D = t[(x & 3) << 4 | y >> 4],
                    I = t[(y & 15) << 2 | A >> 6],
                    H = t[A & 63];
                r[w++] = "" + B + D + I + H
            }
            var E = 0,
                J = u;
            switch (b.length - v) {
                case 2:
                    E = b[v + 1], J = t[(E & 15) << 2] || u;
                case 1:
                    var M = b[v];
                    r[w] = "" + t[M >> 2] + t[(M & 3) << 4 | E >> 4] + J + u
            }
            return r.join("")
        };
    var Oj = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function Pj() {
        var a;
        return null != (a = z.google_tag_data) ? a : z.google_tag_data = {}
    }

    function Qj() {
        var a = z.google_tag_data,
            b;
        if (null != a && a.uach) {
            var c = a.uach,
                d = Object.assign({}, c);
            c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
            b = d
        } else b = null;
        return b
    }

    function Rj() {
        var a, b;
        return null != (b = null == (a = z.google_tag_data) ? void 0 : a.uach_promise) ? b : null
    }

    function Sj() {
        var a, b;
        return "function" === typeof(null == (a = z.navigator) ? void 0 : null == (b = a.userAgentData) ? void 0 : b.getHighEntropyValues)
    }

    function Tj() {
        if (!Sj()) return null;
        var a = Pj();
        if (a.uach_promise) return a.uach_promise;
        var b = z.navigator.userAgentData.getHighEntropyValues(Oj).then(function(c) {
            null != a.uach || (a.uach = c);
            return c
        });
        return a.uach_promise = b
    };
    var Uj, Vj = function() {
            if (Sj() && (Uj = Ha(), !Rj())) {
                var a = Tj();
                a && (a.then(function() {
                    L(95);
                }), a.catch(function() {
                    L(96)
                }))
            }
        },
        Xj = function(a) {
            var b = Wj.Hl,
                c = function(g, l) {
                    try {
                        a(g, l)
                    } catch (m) {}
                },
                d = Qj();
            if (d) c(d);
            else {
                var e = Rj();
                if (e) {
                    b =
                        Math.min(Math.max(isFinite(b) ? b : 0, 0), 1E3);
                    var f = z.setTimeout(function() {
                        c.Fd || (c.Fd = !0, L(106), c(null, Error("Timeout")))
                    }, b);
                    e.then(function(g) {
                        c.Fd || (c.Fd = !0, L(104), z.clearTimeout(f), c(g))
                    }).catch(function(g) {
                        c.Fd || (c.Fd = !0, L(105), z.clearTimeout(f), c(null, g))
                    })
                } else c(null)
            }
        },
        Yj = function(a, b) {
            a && (b.m[N.g.fd] = a.architecture, b.m[N.g.gd] = a.bitness, a.fullVersionList && (b.m[N.g.hd] = a.fullVersionList.map(function(c) {
                    return encodeURIComponent(c.brand || "") + ";" + encodeURIComponent(c.version || "")
                }).join("|")),
                b.m[N.g.jd] = a.mobile ? "1" : "0", b.m[N.g.kd] = a.model, b.m[N.g.ld] = a.platform, b.m[N.g.md] = a.platformVersion, b.m[N.g.nd] = a.wow64 ? "1" : "0")
        };

    function qk(a, b, c, d) {
        var e, f = Number(null != a.kb ? a.kb : void 0);
        0 !== f && (e = new Date((b || Ha()) + 1E3 * (f || 7776E3)));
        return {
            path: a.path,
            domain: a.domain,
            flags: a.flags,
            encode: !!c,
            expires: e,
            nb: d
        }
    };
    var rk;
    var vk = function() {
            var a = sk,
                b = tk,
                c = uk(),
                d = function(g) {
                    a(g.target || g.srcElement || {})
                },
                e = function(g) {
                    b(g.target || g.srcElement || {})
                };
            if (!c.init) {
                Ob(C, "mousedown", d);
                Ob(C, "keyup", d);
                Ob(C, "submit", e);
                var f = HTMLFormElement.prototype.submit;
                HTMLFormElement.prototype.submit = function() {
                    b(this);
                    f.call(this)
                };
                c.init = !0
            }
        },
        wk = function(a, b, c, d, e) {
            var f = {
                callback: a,
                domains: b,
                fragment: 2 === c,
                placement: c,
                forms: d,
                sameHost: e
            };
            uk().decorators.push(f)
        },
        xk = function(a, b, c) {
            for (var d = uk().decorators, e = {}, f = 0; f < d.length; ++f) {
                var g =
                    d[f],
                    l;
                if (l = !c || g.forms) a: {
                    var m = g.domains,
                        n = a,
                        p = !!g.sameHost;
                    if (m && (p || n !== C.location.hostname))
                        for (var q = 0; q < m.length; q++)
                            if (m[q] instanceof RegExp) {
                                if (m[q].test(n)) {
                                    l = !0;
                                    break a
                                }
                            } else if (0 <= n.indexOf(m[q]) || p && 0 <= m[q].indexOf(n)) {
                        l = !0;
                        break a
                    }
                    l = !1
                }
                if (l) {
                    var t = g.placement;
                    void 0 == t && (t = g.fragment ? 2 : 1);
                    t === b && Ka(e, g.callback())
                }
            }
            return e
        };

    function uk() {
        var a = Fb("google_tag_data", {}),
            b = a.gl;
        b && b.decorators || (b = {
            decorators: []
        }, a.gl = b);
        return b
    };
    var yk = /(.*?)\*(.*?)\*(.*)/,
        zk = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
        Ak = /^(?:www\.|m\.|amp\.)+/,
        Bk = /([^?#]+)(\?[^#]*)?(#.*)?/;

    function Ck(a) {
        return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")
    }
    var Ek = function(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString() && (b.push(c), b.push(Xa(String(d))))
            }
        var e = b.join("*");
        return ["1", Dk(e), e].join("*")
    };

    function Dk(a, b) {
        var c = [Db.userAgent, (new Date).getTimezoneOffset(), Db.userLanguage || Db.language, Math.floor(Ha() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"),
            d;
        if (!(d = rk)) {
            for (var e = Array(256), f = 0; 256 > f; f++) {
                for (var g = f, l = 0; 8 > l; l++) g = g & 1 ? g >>> 1 ^ 3988292384 : g >>> 1;
                e[f] = g
            }
            d = e
        }
        rk = d;
        for (var m = 4294967295, n = 0; n < c.length; n++) m = m >>> 8 ^ rk[(m ^ c.charCodeAt(n)) & 255];
        return ((m ^ -1) >>> 0).toString(36)
    }

    function Fk() {
        return function(a) {
            var b = wf(z.location.href),
                c = b.search.replace("?", ""),
                d = pf(c, "_gl", !0) || "";
            a.query = Gk(d) || {};
            var e = uf(b, "fragment").match(Ck("_gl"));
            a.fragment = Gk(e && e[3] || "") || {}
        }
    }

    function Hk(a, b) {
        var c = Ck(a).exec(b),
            d = b;
        if (c) {
            var e = c[2],
                f = c[4];
            d = c[1];
            f && (d = d + e + f)
        }
        return d
    }
    var Ik = function(a, b) {
            b || (b = "_gl");
            var c = Bk.exec(a);
            if (!c) return "";
            var d = c[1],
                e = Hk(b, (c[2] || "").slice(1)),
                f = Hk(b, (c[3] || "").slice(1));
            e.length && (e = "?" + e);
            f.length && (f = "#" + f);
            return "" + d + e + f
        },
        Jk = function(a) {
            var b = Fk(),
                c = uk();
            c.data || (c.data = {
                query: {},
                fragment: {}
            }, b(c.data));
            var d = {},
                e = c.data;
            e && (Ka(d, e.query), a && Ka(d, e.fragment));
            return d
        },
        Gk = function(a) {
            try {
                var b = Kk(a, 3);
                if (void 0 !== b) {
                    for (var c = {}, d = b ? b.split("*") : [], e = 0; e + 1 < d.length; e += 2) {
                        var f = d[e],
                            g = Ya(d[e + 1]);
                        c[f] = g
                    }
                    $a("TAGGING", 6);
                    return c
                }
            } catch (l) {
                $a("TAGGING",
                    8)
            }
        };

    function Kk(a, b) {
        if (a) {
            var c;
            a: {
                for (var d = a, e = 0; 3 > e; ++e) {
                    var f = yk.exec(d);
                    if (f) {
                        c = f;
                        break a
                    }
                    d = decodeURIComponent(d)
                }
                c = void 0
            }
            var g = c;
            if (g && "1" === g[1]) {
                var l = g[3],
                    m;
                a: {
                    for (var n = g[2], p = 0; p < b; ++p)
                        if (n === Dk(l, p)) {
                            m = !0;
                            break a
                        }
                    m = !1
                }
                if (m) return l;
                $a("TAGGING", 7)
            }
        }
    }

    function Lk(a, b, c, d) {
        function e(p) {
            p = Hk(a, p);
            var q = p.charAt(p.length - 1);
            p && "&" !== q && (p += "&");
            return p + n
        }
        d = void 0 === d ? !1 : d;
        var f = Bk.exec(c);
        if (!f) return "";
        var g = f[1],
            l = f[2] || "",
            m = f[3] || "",
            n = a + "=" + b;
        d ? m = "#" + e(m.substring(1)) : l = "?" + e(l.substring(1));
        return "" + g + l + m
    }

    function Mk(a, b) {
        var c = "FORM" === (a.tagName || "").toUpperCase(),
            d = xk(b, 1, c),
            e = xk(b, 2, c),
            f = xk(b, 3, c);
        if (La(d)) {
            var g = Ek(d);
            c ? Nk("_gl", g, a) : Ok("_gl", g, a, !1)
        }
        if (!c && La(e)) {
            var l = Ek(e);
            Ok("_gl", l, a, !0)
        }
        for (var m in f)
            if (f.hasOwnProperty(m)) a: {
                var n = m,
                    p = f[m],
                    q = a;
                if (q.tagName) {
                    if ("a" === q.tagName.toLowerCase()) {
                        Ok(n, p, q);
                        break a
                    }
                    if ("form" === q.tagName.toLowerCase()) {
                        Nk(n, p, q);
                        break a
                    }
                }
                "string" == typeof q && Lk(n, p, q)
            }
    }

    function Ok(a, b, c, d) {
        if (c.href) {
            var e = Lk(a, b, c.href, void 0 === d ? !1 : d);
            hb.test(e) && (c.href = e)
        }
    }

    function Nk(a, b, c) {
        if (c && c.action) {
            var d = (c.method || "").toLowerCase();
            if ("get" === d) {
                for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
                    var l = e[g];
                    if (l.name === a) {
                        l.setAttribute("value", b);
                        f = !0;
                        break
                    }
                }
                if (!f) {
                    var m = C.createElement("input");
                    m.setAttribute("type", "hidden");
                    m.setAttribute("name", a);
                    m.setAttribute("value", b);
                    c.appendChild(m)
                }
            } else if ("post" === d) {
                var n = Lk(a, b, c.action);
                hb.test(n) && (c.action = n)
            }
        }
    }

    function sk(a) {
        try {
            var b;
            a: {
                for (var c = a, d = 100; c && 0 < d;) {
                    if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                        b = c;
                        break a
                    }
                    c = c.parentNode;
                    d--
                }
                b = null
            }
            var e = b;
            if (e) {
                var f = e.protocol;
                "http:" !== f && "https:" !== f || Mk(e, e.hostname)
            }
        } catch (g) {}
    }

    function tk(a) {
        try {
            if (a.action) {
                var b = uf(wf(a.action), "host");
                Mk(a, b)
            }
        } catch (c) {}
    }
    var Pk = function(a, b, c, d) {
            vk();
            wk(a, b, "fragment" === c ? 2 : 1, !!d, !1)
        },
        Qk = function(a, b) {
            vk();
            wk(a, [rf(z.location, "host", !0)], b, !0, !0)
        },
        Rk = function() {
            var a = C.location.hostname,
                b = zk.exec(C.referrer);
            if (!b) return !1;
            var c = b[2],
                d = b[1],
                e = "";
            if (c) {
                var f = c.split("/"),
                    g = f[1];
                e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g)
            } else if (d) {
                if (0 === d.indexOf("xn--")) return !1;
                e = d.replace(/-/g, ".").replace(/\.\./g, "-")
            }
            var l = a.replace(Ak, ""),
                m = e.replace(Ak, ""),
                n;
            if (!(n = l === m)) {
                var p = "." + m;
                n = l.substring(l.length - p.length,
                    l.length) === p
            }
            return n
        },
        Sk = function(a, b) {
            return !1 === a ? !1 : a || b || Rk()
        };
    var Tk = ["1"],
        Uk = {},
        Vk = {},
        Xk = function(a) {
            return Uk[Wk(a)]
        },
        al = function(a, b) {
            b = void 0 === b ? !0 : b;
            var c = Wk(a.prefix);
            if (!Uk[c])
                if (Yk(c, a.path, a.domain)) {
                    if (Te(1)) {
                        var d = Vk[Wk(a.prefix)];
                        Zk(a, d ? d.id : void 0, d ? d.dg : void 0)
                    }
                } else {
                    if (Te(2)) {
                        var e = yf("auiddc");
                        if (e) {
                            $a("TAGGING", 17);
                            Uk[c] = e;
                            return
                        }
                    }
                    if (b) {
                        var f = Wk(a.prefix),
                            g = Vh();
                        if (0 === $k(f, g, a)) {
                            var l = Fb("google_tag_data", {});
                            l._gcl_au || (l._gcl_au = g)
                        }
                        Yk(c, a.path, a.domain)
                    }
                }
        };

    function Zk(a, b, c) {
        var d = Wk(a.prefix),
            e = Uk[d];
        if (e) {
            var f = e.split(".");
            if (2 === f.length) {
                var g = Number(f[1]) || 0;
                if (g) {
                    var l = e;
                    b && (l = e + "." + b + "." + (c ? c : Math.floor(Ha() / 1E3)));
                    $k(d, l, a, 1E3 * g)
                }
            }
        }
    }

    function $k(a, b, c, d) {
        var e = Zh(b, "1", c.domain, c.path),
            f = qk(c, d);
        f.nb = "ad_storage";
        return Rh(a, e, f)
    }

    function Yk(a, b, c) {
        var d = Yh(a, b, c, Tk, "ad_storage");
        if (!d) return !1;
        bl(a, d);
        return !0
    }

    function bl(a, b) {
        var c = b.split(".");
        5 === c.length ? (Uk[a] = c.slice(0, 2).join("."), Vk[a] = {
            id: c.slice(2, 4).join("."),
            dg: Number(c[4]) || 0
        }) : 3 === c.length ? Vk[a] = {
            id: c.slice(0, 2).join("."),
            dg: Number(c[2]) || 0
        } : Uk[a] = b
    }

    function Wk(a) {
        return (a || "_gcl") + "_au"
    }

    function cl(a) {
        Tg() ? Xg(function() {
            Pg("ad_storage") ? a() : Yg(a, "ad_storage")
        }, ["ad_storage"]) : a()
    }

    function dl(a) {
        var b = Jk(!0),
            c = Wk(a.prefix);
        cl(function() {
            var d = b[c];
            if (d) {
                bl(c, d);
                var e = 1E3 * Number(Uk[c].split(".")[1]);
                if (e) {
                    $a("TAGGING", 16);
                    var f = qk(a, e);
                    f.nb = "ad_storage";
                    var g = Zh(d, "1", a.domain, a.path);
                    Rh(c, g, f)
                }
            }
        })
    }

    function el(a, b, c, d, e) {
        e = e || {};
        var f = function() {
            var g = {},
                l = Yh(a, e.path, e.domain, Tk, "ad_storage");
            l && (g[a] = l);
            return g
        };
        cl(function() {
            Pk(f, b, c, d)
        })
    };
    var fl = function(a) {
        for (var b = [], c = C.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
            var f = c[e].match(d);
            f && b.push({
                rg: f[1],
                value: f[2],
                timestamp: Number(f[2].split(".")[1]) || 0
            })
        }
        b.sort(function(g, l) {
            return l.timestamp - g.timestamp
        });
        return b
    };

    function gl(a, b) {
        var c = fl(a),
            d = {};
        if (!c || !c.length) return d;
        for (var e = 0; e < c.length; e++) {
            var f = c[e].value.split(".");
            if (!("1" !== f[0] || b && 3 > f.length || !b && 3 !== f.length) && Number(f[1])) {
                d[c[e].rg] || (d[c[e].rg] = []);
                var g = {
                    version: f[0],
                    timestamp: 1E3 * Number(f[1]),
                    da: f[2]
                };
                b && 3 < f.length && (g.labels = f.slice(3));
                d[c[e].rg].push(g)
            }
        }
        return d
    };
    var hl = /^\w+$/,
        il = /^[\w-]+$/,
        jl = {
            aw: "_aw",
            dc: "_dc",
            gf: "_gf",
            ha: "_ha",
            gp: "_gp",
            gb: "_gb"
        },
        kl = function() {
            if (!xg().h() || !Tg()) return !0;
            var a = Rg("ad_storage");
            return null == a ? !0 : !!a
        },
        ll = function(a, b) {
            Sg("ad_storage") ? kl() ? a() : Yg(a, "ad_storage") : b ? $a("TAGGING", 3) : Xg(function() {
                ll(a, !0)
            }, ["ad_storage"])
        },
        nl = function(a) {
            return ml(a).map(function(b) {
                return b.da
            })
        },
        ml = function(a) {
            var b = [];
            if (!Fh(z) || !C.cookie) return b;
            var c = Ih(a, C.cookie, void 0, "ad_storage");
            if (!c || 0 == c.length) return b;
            for (var d = {}, e = 0; e < c.length; d = {
                    Qd: d.Qd
                }, e++) {
                var f = ol(c[e]);
                if (null != f) {
                    var g = f,
                        l = g.version;
                    d.Qd = g.da;
                    var m = g.timestamp,
                        n = g.labels,
                        p = va(b, function(q) {
                            return function(t) {
                                return t.da === q.Qd
                            }
                        }(d));
                    p ? (p.timestamp = Math.max(p.timestamp, m), p.labels = pl(p.labels, n || [])) : b.push({
                        version: l,
                        da: d.Qd,
                        timestamp: m,
                        labels: n
                    })
                }
            }
            b.sort(function(q, t) {
                return t.timestamp - q.timestamp
            });
            return ql(b)
        };

    function pl(a, b) {
        for (var c = {}, d = [], e = 0; e < a.length; e++) c[a[e]] = !0, d.push(a[e]);
        for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
        return d
    }

    function rl(a) {
        return a && "string" == typeof a && a.match(hl) ? a : "_gcl"
    }
    var tl = function() {
            var a = wf(z.location.href),
                b = uf(a, "query", !1, void 0, "gclid"),
                c = uf(a, "query", !1, void 0, "gclsrc"),
                d = uf(a, "query", !1, void 0, "wbraid"),
                e = uf(a, "query", !1, void 0, "dclid");
            if (!b || !c || !d) {
                var f = a.hash.replace("#", "");
                b = b || pf(f, "gclid");
                c = c || pf(f, "gclsrc");
                d = d || pf(f, "wbraid")
            }
            return sl(b, c, e, d)
        },
        sl = function(a, b, c, d) {
            var e = {},
                f = function(g, l) {
                    e[l] || (e[l] = []);
                    e[l].push(g)
                };
            e.gclid = a;
            e.gclsrc = b;
            e.dclid = c;
            void 0 !== d && il.test(d) && (e.gbraid = d, f(d, "gb"));
            if (void 0 !== a && a.match(il)) switch (b) {
                case void 0:
                    f(a,
                        "aw");
                    break;
                case "aw.ds":
                    f(a, "aw");
                    f(a, "dc");
                    break;
                case "ds":
                    f(a, "dc");
                    break;
                case "3p.ds":
                    f(a, "dc");
                    break;
                case "gf":
                    f(a, "gf");
                    break;
                case "ha":
                    f(a, "ha")
            }
            c && f(c, "dc");
            return e
        },
        vl = function(a) {
            var b = tl();
            ll(function() {
                ul(b, !1, a)
            })
        };

    function ul(a, b, c, d, e) {
        function f(w, x) {
            var y = wl(w, g);
            y && (Rh(y, x, l), m = !0)
        }
        c = c || {};
        e = e || [];
        var g = rl(c.prefix);
        d = d || Ha();
        var l = qk(c, d, !0);
        l.nb = "ad_storage";
        var m = !1,
            n = Math.round(d / 1E3),
            p = function(w) {
                var x = ["GCL", n, w];
                0 < e.length && x.push(e.join("."));
                return x.join(".")
            };
        a.aw && f("aw", p(a.aw[0]));
        a.dc && f("dc", p(a.dc[0]));
        a.gf && f("gf", p(a.gf[0]));
        a.ha && f("ha", p(a.ha[0]));
        a.gp && f("gp", p(a.gp[0]));
        if (!m && a.gb) {
            var q = a.gb[0],
                t = wl("gb", g),
                r = !1;
            if (!b)
                for (var u = ml(t), v = 0; v < u.length; v++) u[v].da === q && u[v].labels &&
                    0 < u[v].labels.length && (r = !0);
            r || f("gb", p(q))
        }
    }
    var yl = function(a, b) {
            var c = Jk(!0);
            ll(function() {
                for (var d = rl(b.prefix), e = 0; e < a.length; ++e) {
                    var f = a[e];
                    if (void 0 !== jl[f]) {
                        var g = wl(f, d),
                            l = c[g];
                        if (l) {
                            var m = Math.min(xl(l), Ha()),
                                n;
                            b: {
                                var p = m;
                                if (Fh(z))
                                    for (var q = Ih(g, C.cookie, void 0, "ad_storage"), t = 0; t < q.length; ++t)
                                        if (xl(q[t]) > p) {
                                            n = !0;
                                            break b
                                        }
                                n = !1
                            }
                            if (!n) {
                                var r = qk(b, m, !0);
                                r.nb = "ad_storage";
                                Rh(g, l, r)
                            }
                        }
                    }
                }
                ul(sl(c.gclid, c.gclsrc), !1, b)
            })
        },
        wl = function(a, b) {
            var c = jl[a];
            if (void 0 !== c) return b + c
        },
        xl = function(a) {
            return 0 !== zl(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) ||
                0) : 0
        };

    function ol(a) {
        var b = zl(a.split("."));
        return 0 === b.length ? null : {
            version: b[0],
            da: b[2],
            timestamp: 1E3 * (Number(b[1]) || 0),
            labels: b.slice(3)
        }
    }

    function zl(a) {
        return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !il.test(a[2]) ? [] : a
    }
    var Al = function(a, b, c, d, e) {
            if (ua(b) && Fh(z)) {
                var f = rl(e),
                    g = function() {
                        for (var l = {}, m = 0; m < a.length; ++m) {
                            var n = wl(a[m], f);
                            if (n) {
                                var p = Ih(n, C.cookie, void 0, "ad_storage");
                                p.length && (l[n] = p.sort()[p.length - 1])
                            }
                        }
                        return l
                    };
                ll(function() {
                    Pk(g, b, c, d)
                })
            }
        },
        ql = function(a) {
            return a.filter(function(b) {
                return il.test(b.da)
            })
        },
        Bl = function(a, b) {
            if (Fh(z)) {
                for (var c = rl(b.prefix), d = {}, e = 0; e < a.length; e++) jl[a[e]] && (d[a[e]] = jl[a[e]]);
                ll(function() {
                    k(d, function(f, g) {
                        var l = Ih(c + g, C.cookie, void 0, "ad_storage");
                        l.sort(function(r,
                            u) {
                            return xl(u) - xl(r)
                        });
                        if (l.length) {
                            var m = l[0],
                                n = xl(m),
                                p = 0 !== zl(m.split(".")).length ? m.split(".").slice(3) : [],
                                q = {},
                                t;
                            t = 0 !== zl(m.split(".")).length ? m.split(".")[2] : void 0;
                            q[f] = [t];
                            ul(q, !0, b, n, p)
                        }
                    })
                })
            }
        };

    function Cl(a, b) {
        for (var c = 0; c < b.length; ++c)
            if (a[b[c]]) return !0;
        return !1
    }
    var Dl = function(a) {
            function b(e, f, g) {
                g && (e[f] = g)
            }
            if (Tg()) {
                var c = tl();
                if (Cl(c, a)) {
                    var d = {};
                    b(d, "gclid", c.gclid);
                    b(d, "dclid", c.dclid);
                    b(d, "gclsrc", c.gclsrc);
                    b(d, "wbraid", c.gbraid);
                    Qk(function() {
                        return d
                    }, 3);
                    Qk(function() {
                        var e = {};
                        return e._up = "1", e
                    }, 1)
                }
            }
        },
        El = function(a, b, c, d) {
            var e = [];
            c = c || {};
            if (!kl()) return e;
            var f = ml(a);
            if (!f.length) return e;
            for (var g = 0; g < f.length; g++) - 1 === (f[g].labels || []).indexOf(b) ? e.push(0) : e.push(1);
            if (d) return e;
            if (1 !== e[0]) {
                var l = f[0],
                    m = f[0].timestamp,
                    n = [l.version, Math.round(m /
                        1E3), l.da].concat(l.labels || [], [b]).join("."),
                    p = qk(c, m, !0);
                p.nb = "ad_storage";
                Rh(a, n, p)
            }
            return e
        };

    function Fl(a, b) {
        var c = rl(b),
            d = wl(a, c);
        if (!d) return 0;
        for (var e = ml(d), f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
        return f
    }

    function Gl(a) {
        var b = 0,
            c;
        for (c in a)
            for (var d = a[c], e = 0; e < d.length; e++) b = Math.max(b, Number(d[e].timestamp));
        return b
    }
    var Hl = function(a) {
        var b = Math.max(Fl("aw", a), Gl(kl() ? gl() : {}));
        return Math.max(Fl("gb", a), Gl(kl() ? gl("_gac_gb", !0) : {})) > b
    };
    var Il = function(a, b) {
            var c = a && !rh(N.g.H);
            return b && c ? "0" : b
        },
        Ll = function(a) {
            function b(u) {
                var v;
                ne.reported_gclid || (ne.reported_gclid = {});
                v = ne.reported_gclid;
                var w, x = g;
                w = !g || Tg() && !rh(N.g.H) ? m + (u ? "gcu" : "gcs") : m + "." + (f.prefix || "_gcl") + (u ? "gcu" : "gcs");
                if (!v[w]) {
                    v[w] = !0;
                    var y = [],
                        A = {},
                        B = function(aa, R) {
                            R && (y.push(aa + "=" + encodeURIComponent(R)), A[aa] = !0)
                        },
                        D = "https://www.google.com";
                    if (Tg()) {
                        var I = rh(N.g.H);
                        B("gcs", sh());
                        u && B("gcu", "1");
                        (S(106) || Ug()) && B("gcd", wh());
                        B("rnd", $h());
                        if ((!m || n && "aw.ds" !== n) && rh(N.g.H)) {
                            var H = nl("_gcl_aw");
                            B("gclaw", H.join("."))
                        }
                        B("url", String(z.location).split(/[?#]/)[0]);
                        B("dclid", Il(d, p));
                        I || (D = "https://pagead2.googlesyndication.com")
                    }
                    S(109) && (yh() && B("dma_cps", xh()), We() && B("dma", "1"));
                    B("gdpr_consent", Zi());
                    B("gdpr", $i());
                    "1" === Jk(!1)._up && B("gtm_up", "1");
                    B("gclid", Il(d, m));
                    B("gclsrc", n);
                    if (!(A.gclid || A.dclid || A.gclaw) && (B("gbraid", Il(d, q)), !A.gbraid && Tg() && rh(N.g.H))) {
                        var E =
                            nl("_gcl_gb");
                        0 < E.length && B("gclgb", E.join("."))
                    }
                    B("gtm", ni(!e));
                    g && rh(N.g.H) && (al(f || {}), x && B("auid", Xk(f.prefix) || ""));
                    Kl || a.Yh && B("did", a.Yh);
                    a.Pe && B("gdid", a.Pe);
                    a.Me && B("edid", a.Me);
                    var J = S(64) ? Qj() : null;
                    if (J) {
                        var M = function(aa, R) {
                            y.push(aa + "=" + encodeURIComponent(R));
                            A[aa] = !0
                        };
                        M("uaa", J.architecture);
                        M("uab", J.bitness);
                        J.fullVersionList && M("uafvl", J.fullVersionList.map(function(aa) {
                            return encodeURIComponent(aa.brand || "") + ";" + encodeURIComponent(aa.version || "")
                        }).join("|"));
                        M("uam", J.model);
                        M("uap",
                            J.platform);
                        M("uapv", J.platformVersion);
                        M("uaw", J.wow64 ? "1" : "0")
                    }
                    var Y = D + "/pagead/landing?" + y.join("&");
                    Ub(Y)
                }
            }
            var c = !!a.Ke,
                d = !!a.Kd,
                e = a.aa,
                f = void 0 === a.Ob ? {} : a.Ob,
                g = void 0 === a.Ed ? !0 : a.Ed,
                l = tl(),
                m = l.gclid || "",
                n = l.gclsrc,
                p = l.dclid || "",
                q = l.gbraid || "",
                t = !c && ((!m || n && "aw.ds" !== n ? !1 : !0) || q),
                r = Tg();
            if (t || r) r ? Ah(function() {
                b();
                rh(N.g.H) || zh(function(u) {
                    return b(!0, u.consentEventId, u.consentPriorityId)
                }, N.g.H)
            }, [N.g.H]) : b()
        },
        Jl = function(a) {
            var b = String(z.location).split(/[?#]/)[0],
                c = me.Ii || z._CONSENT_MODE_SALT;
            return a ? c ? String(Bh(b + a + c)) : "0" : ""
        },
        Kl = !1;
    var Ml = /[A-Z]+/,
        Nl = /\s/,
        Ol = function(a) {
            if (h(a)) {
                a = Fa(a);
                var b = a.indexOf("-");
                if (!(0 > b)) {
                    var c = a.substring(0, b);
                    if (Ml.test(c)) {
                        for (var d = a.substring(b + 1).split("/"), e = 0; e < d.length; e++)
                            if (!d[e] || Nl.test(d[e]) && ("AW" !== c || 1 !== e)) return;
                        return {
                            id: a,
                            prefix: c,
                            U: c + "-" + d[0],
                            J: d
                        }
                    }
                }
            }
        },
        Ql = function(a) {
            for (var b = {}, c = 0; c < a.length; ++c) {
                var d = Ol(a[c]);
                d && (b[d.id] = d)
            }
            Pl(b);
            var e = [];
            k(b, function(f, g) {
                e.push(g)
            });
            return e
        };

    function Pl(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                "AW" === d.prefix && d.J[1] && b.push(d.U)
            }
        for (var e = 0; e < b.length; ++e) delete a[b[e]]
    };
    var Rl = function(a, b, c, d) {
        var e = Lb(),
            f;
        if (1 === e) a: {
            var g = Be;g = g.toLowerCase();
            for (var l = "https://" + g, m = "http://" + g, n = 1, p = C.getElementsByTagName("script"), q = 0; q < p.length && 100 > q; q++) {
                var t = p[q].src;
                if (t) {
                    t = t.toLowerCase();
                    if (0 === t.indexOf(m)) {
                        f = 3;
                        break a
                    }
                    1 === n && 0 === t.indexOf(l) && (n = 2)
                }
            }
            f = n
        }
        else f = e;
        return (2 === f || d || "http:" != z.location.protocol ? a : b) + c
    };
    var Tl = function(a, b, c) {
            if (z[a.functionName]) return b.jg && F(b.jg), z[a.functionName];
            var d = Sl();
            z[a.functionName] = d;
            if (a.Ie)
                for (var e = 0; e < a.Ie.length; e++) z[a.Ie[e]] = z[a.Ie[e]] || Sl();
            a.Qe && void 0 === z[a.Qe] && (z[a.Qe] = c);
            Kb(Rl("https://", "http://", a.qg), b.jg, b.Vk);
            return d
        },
        Sl = function() {
            var a = function() {
                a.q = a.q || [];
                a.q.push(arguments)
            };
            return a
        },
        Ul = {
            functionName: "_googWcmImpl",
            Qe: "_googWcmAk",
            qg: "www.gstatic.com/wcm/loader.js"
        },
        Vl = {
            functionName: "_gaPhoneImpl",
            Qe: "ga_wpid",
            qg: "www.gstatic.com/gaphone/loader.js"
        },
        Wl = {
            Fi: "",
            Pj: "5"
        },
        Xl = {
            functionName: "_googCallTrackingImpl",
            Ie: [Vl.functionName, Ul.functionName],
            qg: "www.gstatic.com/call-tracking/call-tracking_" + (Wl.Fi || Wl.Pj) + ".js"
        },
        Yl = {},
        Zl = function(a, b, c, d) {
            L(22);
            if (c) {
                d = d || {};
                var e = Tl(Ul, d, a),
                    f = {
                        ak: a,
                        cl: b
                    };
                void 0 === d.lb && (f.autoreplace = c);
                e(2, d.lb, f, c, 0, Ga(), d.options)
            }
        },
        $l = function(a, b, c, d) {
            L(21);
            if (b && c) {
                d = d || {};
                for (var e = {
                        countryNameCode: c,
                        destinationNumber: b,
                        retrievalTime: Ga()
                    }, f = 0; f < a.length; f++) {
                    var g = a[f];
                    Yl[g.id] ||
                        (g && "AW" === g.prefix && !e.adData && 2 <= g.J.length ? (e.adData = {
                            ak: g.J[0],
                            cl: g.J[1]
                        }, Yl[g.id] = !0) : g && "UA" === g.prefix && !e.gaData && (e.gaData = {
                            gaWpid: g.U
                        }, Yl[g.id] = !0))
                }(e.gaData || e.adData) && Tl(Xl, d)(d.lb, e, d.options)
            }
        },
        am = function() {
            var a = !1;
            return a
        },
        bm = function(a, b) {
            if (a)
                if (ai()) {} else {
                    if (h(a)) {
                        var c =
                            Ol(a);
                        if (!c) return;
                        a = c
                    }
                    var d = void 0,
                        e = !1,
                        f = T(b, N.g.uj);
                    if (f && ua(f)) {
                        d = [];
                        for (var g = 0; g < f.length; g++) {
                            var l = Ol(f[g]);
                            l && (d.push(l), (a.id === l.id || a.id === a.U && a.U === l.U) && (e = !0))
                        }
                    }
                    if (!d || e) {
                        var m = T(b, N.g.oh),
                            n;
                        if (m) {
                            ua(m) ? n = m : n = [m];
                            var p = T(b, N.g.mh),
                                q = T(b, N.g.nh),
                                t = T(b, N.g.ph),
                                r = T(b, N.g.tj),
                                u = p || q,
                                v = 1;
                            "UA" !== a.prefix || d || (v = 5);
                            for (var w = 0; w < n.length; w++)
                                if (w < v)
                                    if (d) $l(d, n[w], r, {
                                        lb: u,
                                        options: t
                                    });
                                    else if ("AW" === a.prefix && a.J[1]) am() ? $l([a], n[w], r || "US", {
                                lb: u,
                                options: t
                            }) : Zl(a.J[0], a.J[1], n[w], {
                                lb: u,
                                options: t
                            });
                            else if ("UA" === a.prefix)
                                if (am()) $l([a], n[w], r || "US", {
                                    lb: u
                                });
                                else {
                                    var x = a.U,
                                        y = n[w],
                                        A = {
                                            lb: u
                                        };
                                    L(23);
                                    if (y) {
                                        A = A || {};
                                        var B = Tl(Vl, A, x),
                                            D = {};
                                        void 0 !== A.lb ? D.receiver = A.lb : D.replace = y;
                                        D.ga_wpid = x;
                                        D.destination = y;
                                        B(2, Ga(), D)
                                    }
                                }
                        }
                    }
                }
        };
    var cm = function(a, b, c) {
        this.target = a;
        this.eventName = b;
        this.h = c;
        this.m = {};
        this.metadata = K(c.eventMetadata || {});
        this.isAborted = !1
    };
    cm.prototype.copyToHitData = function(a, b) {
        var c = T(this.h, a);
        void 0 !== c ? this.m[a] = c : void 0 !== b && (this.m[a] = b)
    };
    var dm = function(a, b, c) {
        var d = bf(a.target.U);
        return d && d.hasOwnProperty(b) ? d[b] : c
    };

    function em(a) {
        return {
            getDestinationId: function() {
                return a.target.U
            },
            getEventName: function() {
                return a.eventName
            },
            setEventName: function(b) {
                a.eventName = b
            },
            getHitData: function(b) {
                return a.m[b]
            },
            setHitData: function(b, c) {
                a.m[b] = c
            },
            setHitDataIfNotDefined: function(b, c) {
                void 0 === a.m[b] && (a.m[b] = c)
            },
            copyToHitData: function(b, c) {
                a.copyToHitData(b, c)
            },
            getMetadata: function(b) {
                return a.metadata[b]
            },
            setMetadata: function(b, c) {
                a.metadata[b] = c
            },
            isAborted: function() {
                return a.isAborted
            },
            abort: function() {
                a.isAborted = !0
            },
            getFromEventContext: function(b) {
                return T(a.h, b)
            },
            fm: function() {
                return a
            },
            getHitKeys: function() {
                return Object.keys(a.m)
            }
        }
    };
    var gm = function(a) {
            var b = fm[a.target.U];
            if (!a.isAborted && b)
                for (var c = em(a), d = 0; d < b.length; ++d) {
                    try {
                        b[d](c)
                    } catch (e) {
                        a.isAborted = !0
                    }
                    if (a.isAborted) break
                }
        },
        fm = {};
    var jm = function(a) {
            a = a || {};
            var b;
            if (S(110)) {
                if (Tg() && !0 !== Rg(hm) && void 0 !== Rg(hm)) return;
                b = im(a)
            } else if (!Tg() || Rg(hm)) b = im(a);
            else return;
            b || (b = Vh());
            var c = a,
                d = Wk(c.prefix);
            Zk(c, b);
            delete Uk[d];
            delete Vk[d];
            Yk(d, c.path, c.domain);
            return im(a)
        },
        im = function(a) {
            if (S(110)) {
                if (Tg() && !1 === Rg(hm)) return
            } else if (Tg() && !Rg(hm)) return;
            a = a || {};
            al(a, !1);
            var b = Vk[Wk(rl(a.prefix))];
            if (b && !(18E5 < Ha() - 1E3 * b.dg)) {
                var c = b.id,
                    d = c.split(".");
                if (2 === d.length && !(864E5 < Ha() - 1E3 * (Number(d[1]) || 0))) return c
            }
        },
        hm = N.g.H;
    var km = function(a, b) {
            var c = ne.joined_auid = ne.joined_auid || {},
                d = (a || "_gcl") + "." + b;
            if (c[d]) return !0;
            c[d] = !0;
            return !1
        },
        lm = function() {
            var a = wf(z.location.href).search.replace("?", "");
            return "1" === pf(a, "gad", !0)
        },
        mm = function(a) {
            var b = [];
            k(a, function(c, d) {
                d = ql(d);
                for (var e = [], f = 0; f < d.length; f++) e.push(d[f].da);
                e.length && b.push(c + ":" + e.join(","))
            });
            return b.join(";")
        },
        om = function(a, b, c) {
            if ("aw" === a || "dc" === a || "gb" === a) {
                var d = yf("gcl" + a);
                if (d) return d.split(".")
            }
            var e = rl(b);
            if ("_gcl" == e) {
                c = void 0 === c ? !0 : c;
                var f = !rh(nm) && c,
                    g;
                g = tl()[a] || [];
                if (0 < g.length) return f ? ["0"] : g
            }
            var l = wl(a, e);
            return l ? nl(l) : []
        },
        pm = function(a, b) {
            Sg(nm) ? rh(nm) ? a() : Yg(a, nm) : b ? L(42) : Ah(function() {
                pm(a, !0)
            }, [nm])
        },
        nm = N.g.H,
        qm = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,
        rm = /^www.googleadservices.com$/,
        sm = function(a, b) {
            return om("aw", a, b)
        },
        tm = function(a, b) {
            return om("dc", a, b)
        },
        um = function(a) {
            var b = yf("gac");
            return b ? !rh(nm) && a ? "0" : decodeURIComponent(b) : mm(kl() ? gl() : {})
        },
        vm = function(a) {
            var b = yf("gacgb");
            return b ? !rh(nm) && a ? "0" : decodeURIComponent(b) :
                mm(kl() ? gl("_gac_gb", !0) : {})
        },
        wm = function(a) {
            var b = tl(),
                c = [],
                d = b.gclid,
                e = b.dclid,
                f = b.gclsrc || "aw",
                g = S(93) && lm();
            !d || "aw.ds" !== f && "aw" !== f && "ds" !== f || c.push({
                da: d,
                Bd: f
            });
            e && c.push({
                da: e,
                Bd: "ds"
            });
            0 === c.length && b.gbraid && c.push({
                da: b.gbraid,
                Bd: "gb"
            });
            S(77) && 0 === c.length && "aw.ds" === f && c.push({
                da: "",
                Bd: "aw.ds"
            });
            pm(function() {
                al(a);
                var l = Xk(a.prefix);
                if (l) {
                    var m = ["auid=" + l];
                    if (S(15)) {
                        var n = C.referrer ? uf(wf(C.referrer), "host") : "";
                        0 === c.length && (S(88) ? qm.test(n) || rm.test(n) : qm.test(n)) && c.push({
                            da: "",
                            Bd: ""
                        });
                        if (0 === c.length && !g) return;
                        n && m.push("ref=" + encodeURIComponent(n));
                        var p = 1 === Di() ? z.top.location.href : z.location.href;
                        p = p.replace(/[\?#].*$/, "");
                        m.push("url=" + encodeURIComponent(p));
                        m.push("tft=" + Ha());
                        var q = Xb();
                        void 0 !== q && m.push("tfd=" + Math.round(q));
                        if (S(76)) {
                            var t = Di();
                            m.push("frm=" + t)
                        }
                        g && m.push("gad=1")
                    }
                    if (0 < c.length)
                        for (var r = 0; r < c.length; r++) {
                            var u = c[r],
                                v = u.da,
                                w = u.Bd;
                            if (!km(a.prefix, w + "." + v)) {
                                var x = "https://adservice.google.com/pagead/regclk?" + m.join("&");
                                "" !== v ? x = "gb" === w ? x + "&wbraid=" + v : x + "&gclid=" + v + "&gclsrc=" +
                                    w : "aw.ds" === w && (x += "&gclsrc=aw.ds");
                                Ub(x)
                            }
                        } else if (g && !km(a.prefix, "gad")) {
                            var y = "https://adservice.google.com/pagead/regclk?" + m.join("&");
                            Ub(y)
                        }
                }
            })
        },
        xm = function(a) {
            return yf("gclaw") || yf("gac") || 0 < (tl().aw || []).length ? !1 : 0 < (tl().gb || []).length ? !0 : Hl(a)
        };
    var ym = function(a, b, c, d, e, f, g, l, m, n, p, q) {
            this.eventId = a;
            this.priorityId = b;
            this.h = c;
            this.K = d;
            this.m = e;
            this.I = f;
            this.Z = g;
            this.B = l;
            this.eventMetadata = m;
            this.M = n;
            this.P = p;
            this.D = q
        },
        T = function(a, b, c) {
            if (void 0 !== a.h[b]) return a.h[b];
            if (void 0 !== a.K[b]) return a.K[b];
            if (void 0 !== a.m[b]) return a.m[b];
            hj && zm(a, a.I[b], a.Z[b]) && (L(71), L(79));
            return void 0 !== a.I[b] ? a.I[b] : void 0 !== a.B[b] ? a.B[b] : c
        },
        Am = function(a) {
            function b(g) {
                for (var l = Object.keys(g), m = 0; m < l.length; ++m) c[l[m]] = 1
            }
            var c = {};
            b(a.h);
            b(a.K);
            b(a.m);
            b(a.I);
            if (hj)
                for (var d = Object.keys(a.Z), e = 0; e < d.length; e++) {
                    var f = d[e];
                    if ("event" !== f && "gtm" !== f && "tagTypeBlacklist" !== f && !c.hasOwnProperty(f)) {
                        L(71);
                        L(80);
                        break
                    }
                }
            return Object.keys(c)
        },
        Bm = function(a, b, c) {
            function d(m) {
                G(m) && k(m, function(n, p) {
                    f = !0;
                    e[n] = p
                })
            }
            var e = {},
                f = !1;
            c && 1 !== c || (d(a.B[b]), d(a.I[b]), d(a.m[b]), d(a.K[b]));
            c && 2 !== c || d(a.h[b]);
            if (hj) {
                var g = f,
                    l = e;
                e = {};
                f = !1;
                c && 1 !== c || (d(a.B[b]), d(a.Z[b]), d(a.m[b]), d(a.K[b]));
                c && 2 !== c || d(a.h[b]);
                if (f !== g || zm(a, e, l)) L(71), L(81);
                f = g;
                e = l
            }
            return f ? e : void 0
        },
        Cm = function(a) {
            var b = [N.g.Qc, N.g.Mc, N.g.Nc, N.g.Oc, N.g.Pc, N.g.Rc, N.g.Sc],
                c = {},
                d = !1,
                e = function(l) {
                    for (var m = 0; m < b.length; m++) void 0 !== l[b[m]] && (c[b[m]] = l[b[m]], d = !0);
                    return d
                };
            if (e(a.h) || e(a.K) || e(a.m)) return c;
            e(a.I);
            if (hj) {
                var f = c,
                    g = d;
                c = {};
                d = !1;
                e(a.Z);
                zm(a, c, f) && (L(71), L(82));
                c = f;
                d = g
            }
            if (d) return c;
            e(a.B);
            return c
        },
        zm = function(a, b, c) {
            if (!hj) return !1;
            try {
                if (b === c) return !1;
                var d = $b(b);
                if (d !== $b(c) || !(G(b) && G(c) || "array" === d)) return !0;
                if ("array" === d) {
                    if (b.length !== c.length) return !0;
                    for (var e = 0; e < b.length; e++)
                        if (zm(a,
                                b[e], c[e])) return !0
                } else {
                    for (var f in c)
                        if (!b.hasOwnProperty(f)) return !0;
                    for (var g in b)
                        if (!c.hasOwnProperty(g) || zm(a, b[g], c[g])) return !0
                }
            } catch (l) {
                L(72)
            }
            return !1
        },
        Dm = function(a, b) {
            this.Dj = a;
            this.Ej = b;
            this.I = {};
            this.Ch = {};
            this.h = {};
            this.K = {};
            this.m = {};
            this.pd = {};
            this.B = {};
            this.Lc = function() {};
            this.Db = function() {};
            this.Z = !1
        },
        Em = function(a, b) {
            a.I = b;
            return a
        },
        Fm = function(a, b) {
            a.Ch = b;
            return a
        },
        Gm = function(a, b) {
            a.h = b;
            return a
        },
        Hm = function(a, b) {
            a.K = b;
            return a
        },
        Im = function(a, b) {
            a.m = b;
            return a
        },
        Jm = function(a,
            b) {
            a.pd = b;
            return a
        },
        Km = function(a, b) {
            a.B = b || {};
            return a
        },
        Lm = function(a, b) {
            a.Lc = b;
            return a
        },
        Mm = function(a, b) {
            a.Db = b;
            return a
        },
        Nm = function(a) {
            a.Z = !0;
            return a
        },
        Om = function(a) {
            return new ym(a.Dj, a.Ej, a.I, a.Ch, a.h, a.K, a.m, a.pd, a.B, a.Lc, a.Db, a.Z)
        };
    var Qm = function(a, b) {
            var c = a.fg,
                d = a.ug;
            a.Of && (Sk(c[N.g.qc], !!c[N.g.O]) && (yl(Pm, b), S(73) && dl(b)), vl(b), Bl(Pm, b), wm(b));
            c[N.g.O] && (Al(Pm, c[N.g.O], c[N.g.Jb], !!c[N.g.yb], b.prefix), S(73) && (el(Wk(b.prefix), c[N.g.O], c[N.g.Jb], !!c[N.g.yb], b), el("FPAU", c[N.g.O], c[N.g.Jb], !!c[N.g.yb], b)));
            d && Dl(Pm)
        },
        Rm = function(a, b, c, d) {
            var e = a.vg,
                f = a.callback,
                g = a.hg;
            if ("function" === typeof f)
                if (e === N.g.tb && void 0 === g) {
                    var l = d(b.prefix, c);
                    0 === l.length ? f(void 0) : 1 === l.length ? f(l[0]) : f(l)
                } else e === N.g.ic ? (L(65), al(b, !1), f(Xk(b.prefix))) :
                    f(g)
        },
        Pm = ["aw", "dc", "gb"];
    var Sm = function() {
        var a = Db && Db.userAgent || "";
        if (0 > a.indexOf("Safari") || /Chrome|Coast|Opera|Edg|Silk|Android/.test(a)) return !1;
        var b = (/Version\/([\d\.]+)/.exec(a) || [])[1] || "";
        if ("" === b) return !1;
        for (var c = ["14", "1", "1"], d = b.split("."), e = 0; e < d.length; e++) {
            if (void 0 === c[e]) return !0;
            if (d[e] != c[e]) return Number(d[e]) > Number(c[e])
        }
        return d.length >= c.length
    };

    function Tm() {
        return "attribution-reporting"
    }

    function Um(a) {
        var b;
        b = void 0 === b ? document : b;
        var c;
        return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a))
    };
    var Vm = !1;

    function Wm() {
        if (Um("join-ad-interest-group") && ra(Db.joinAdInterestGroup)) return !0;
        Vm || (Bi(), Vm = !0);
        return Um("join-ad-interest-group") && ra(Db.joinAdInterestGroup)
    }

    function Xm(a, b) {
        var c = void 0;
        try {
            c = C.querySelector('iframe[data-tagging-id="' + b + '"]')
        } catch (e) {}
        if (c) {
            var d = Number(c.dataset.loadTime);
            if (d && 6E4 > Ha() - d) {
                $a("TAGGING", 9);
                return
            }
        } else try {
            if (50 <= C.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]').length) {
                $a("TAGGING", 10);
                return
            }
        } catch (e) {}
        Mb(a, void 0, {
            allow: "join-ad-interest-group"
        }, {
            taggingId: b,
            loadTime: Ha()
        }, c)
    }

    function Ym() {
        return "https://td.doubleclick.net"
    };
    var Zm = RegExp("^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"),
        $m = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
        an = /^\d+\.fls\.doubleclick\.net$/,
        bn = /;gac=([^;?]+)/,
        cn = /;gacgb=([^;?]+)/,
        dn = /;gclaw=([^;?]+)/,
        en = /;gclgb=([^;?]+)/;

    function fn(a, b) {
        if (an.test(C.location.host)) {
            var c = C.location.href.match(b);
            return c && 2 == c.length && c[1].match(Zm) ? decodeURIComponent(c[1]) : ""
        }
        var d = [],
            e;
        for (e in a) {
            for (var f = [], g = a[e], l = 0; l < g.length; l++) f.push(g[l].da);
            d.push(e + ":" + f.join(","))
        }
        return 0 < d.length ? d.join(";") : ""
    }
    var gn = function(a, b, c) {
        var d = kl() ? gl("_gac_gb", !0) : {},
            e = [],
            f = !1,
            g;
        for (g in d) {
            var l = El("_gac_gb_" + g, a, b, c);
            f = f || 0 !== l.length && l.some(function(m) {
                return 1 === m
            });
            e.push(g + ":" + l.join(","))
        }
        return {
            nk: f ? e.join(";") : "",
            mk: fn(d, cn)
        }
    };

    function hn(a, b, c) {
        if (an.test(C.location.host)) {
            var d = C.location.href.match(c);
            if (d && 2 == d.length && d[1].match($m)) return [{
                da: d[1]
            }]
        } else return ml((a || "_gcl") + b);
        return []
    }
    var jn = function(a) {
            return hn(a, "_aw", dn).map(function(b) {
                return b.da
            }).join(".")
        },
        kn = function(a) {
            return hn(a, "_gb", en).map(function(b) {
                return b.da
            }).join(".")
        },
        ln = function(a, b) {
            var c = El((b && b.prefix || "_gcl") + "_gb", a, b);
            return 0 === c.length || c.every(function(d) {
                return 0 === d
            }) ? "" : c.join(".")
        };
    var mn = function() {
        if (ra(z.__uspapi)) {
            var a = "";
            try {
                z.__uspapi("getUSPData", 1, function(b, c) {
                    if (c && b) {
                        var d = b.uspString;
                        d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d)
                    }
                })
            } catch (b) {}
            return a
        }
    };
    var nn = function(a) {
            if (null != a) {
                var b = String(a).substring(0, 512),
                    c = b.indexOf("#");
                return -1 == c ? b : b.substring(0, c)
            }
            return ""
        },
        on = function() {
            var a = C.title;
            if (void 0 == a || "" == a) return "";
            var b = function(d) {
                try {
                    return decodeURIComponent(d), !0
                } catch (e) {
                    return !1
                }
            };
            a = encodeURIComponent(a);
            for (var c = 256; !b(a.substr(0, c));) c--;
            return decodeURIComponent(a.substr(0, c))
        },
        pn = function(a) {
            a.metadata.speculative_in_message || (a.metadata.speculative = !1)
        },
        qn = function(a, b) {
            ua(b) || (b = [b]);
            return 0 <= b.indexOf(a.metadata.hit_type)
        },
        rn = function(a) {
            var b = a.target.J[0];
            if (b) {
                a.m[N.g.Tc] = b;
                var c = a.target.J[1];
                c && (a.m[N.g.Za] = c)
            } else a.isAborted = !0
        },
        sn = function(a) {
            if (qn(a, ["conversion", "remarketing", "user_data_lead", "user_data_web"])) {
                var b = a.m[N.g.Za],
                    c = !0 === T(a.h, N.g.hf);
                c && (a.metadata.remarketing_only = !0);
                switch (a.metadata.hit_type) {
                    case "conversion":
                        !c && b && pn(a);
                        sg() && (a.metadata.is_gcp_conversion = !0);
                        break;
                    case "user_data_lead":
                    case "user_data_web":
                        !c && b && (a.isAborted = !0);
                        break;
                    case "remarketing":
                        !c && b || pn(a)
                }
                a.m[N.g.Eh] = a.metadata.is_gcp_conversion ?
                    "www.google.com" : "www.googleadservices.com"
            }
        },
        tn = function(a) {
            qn(a, ["conversion", "remarketing"])
        },
        un = function(a) {
            if (qn(a, ["conversion", "remarketing"])) {
                var b = Di();
                a.m[N.g.ih] = b;
                var c = T(a.h, N.g.ja);
                c || (c = 1 === b ? z.top.location.href : z.location.href);
                a.m[N.g.ja] = nn(c);
                a.copyToHitData(N.g.Ca, C.referrer);
                a.m[N.g.zb] = on();
                a.copyToHitData(N.g.xa);
                var d = cf();
                a.m[N.g.Ab] = d.width + "x" + d.height;
                if (S(86)) {
                    for (var e, f = z, g = f; f && f != f.parent;) f = f.parent, zi(f) && (g = f);
                    e = g;
                    var l;
                    var m = e.location.href;
                    if (e === e.top) l = {
                        url: m,
                        Ik: !0
                    };
                    else {
                        var n = !1,
                            p = e.document;
                        p && p.referrer && (m = p.referrer, e.parent === e.top && (n = !0));
                        var q = e.location.ancestorOrigins;
                        if (q) {
                            var t = q[q.length - 1];
                            t && -1 === m.indexOf(t) && (n = !1, m = t)
                        }
                        l = {
                            url: m,
                            Ik: n
                        }
                    }
                    var r = l;
                    r.url && c !== r.url && (a.m[N.g.Af] = nn(r.url))
                }
            }
        },
        vn = function(a) {
            qn(a, ["conversion", "remarketing"]) && (a.copyToHitData(N.g.ma), a.copyToHitData(N.g.ba), a.copyToHitData(N.g.ra), "remarketing" === a.metadata.hit_type && a.copyToHitData(N.g.za))
        },
        wn = function(a) {
            if (S(13))
                if (!Sj()) L(87);
                else if (void 0 !== Uj) {
                L(85);
                var b = Qj();
                b ? Yj(b, a) : L(86)
            }
        },
        yn = function(a) {
            qn(a, ["conversion"]) && (!0 === z._gtmpcm || Sm() ? a.m[N.g.Gb] = "2" : S(7) && (xn || Um(Tm()) || (Bi(), xn = !0), Um(Tm()) && (a.m[N.g.Gb] = "1")))
        },
        zn = function(a) {
            qn(a, ["conversion", "remarketing"]) && S(9) && rh(N.g.H) && !1 !== T(a.h, N.g.Aa) && !1 !== T(a.h, N.g.V) && !1 !== T(a.h, N.g.Fb) && !1 !== T(a.h, N.g.Oa) && Wm() && (a.m[N.g.Sg] = "1", a.metadata.send_fledge_experiment = !0)
        },
        An = function(a) {
            var b = function(d) {
                return T(a.h, d)
            };
            a.metadata.conversion_linker_enabled = !1 !== b(N.g.wa);
            var c = {
                prefix: b(N.g.Ha) ||
                    b(N.g.Ia),
                domain: b(N.g.La),
                kb: b(N.g.Ba),
                flags: b(N.g.Ma)
            };
            a.metadata.cookie_options = c;
            a.metadata.redact_ads_data = null != b(N.g.la) && !1 !== b(N.g.la);
            a.metadata.allow_ad_personalization = !1 !== b(N.g.V)
        },
        Bn = function(a) {
            if (dm(a, "ccd_add_1p_data", !1) && rh(N.g.H)) {
                var b = ng(a.h);
                if (pg(b)) {
                    var c = T(a.h, N.g.na);
                    null === c ? a.metadata.user_data_from_code = null : (b.enable_code && G(c) && (a.metadata.user_data_from_code = c), G(b.selectors) && (a.metadata.user_data_from_manual = mg(b.selectors)))
                }
            }
        },
        Cn = function(a) {
            var b = !a.metadata.send_user_data_hit &&
                qn(a, ["conversion", "user_data_web"]),
                c = !dm(a, "ccd_add_1p_data", !1) && qn(a, "user_data_lead");
            if ((b || c) && rh(N.g.H)) {
                var d = "conversion" === a.metadata.hit_type,
                    e = a.h,
                    f = void 0,
                    g = T(e, N.g.na);
                if (d) {
                    var l = (T(e, N.g.Yc) || {})[a.m[N.g.Za]];
                    if (!0 === T(e, N.g.ae) || l) {
                        var m;
                        var n;
                        if (l) b: {
                            switch (l.enhanced_conversions_mode) {
                                case "manual":
                                    if (g && G(g)) {
                                        n = g;
                                        break b
                                    }
                                    var p = l.enhanced_conversions_manual_var;
                                    n = void 0 !== p ? p : z.enhanced_conversion_data;
                                    break b;
                                case "automatic":
                                    n = mg(l[N.g.Qg]);
                                    break b
                            }
                            n = void 0
                        }
                        else n = z.enhanced_conversion_data;
                        var q = n,
                            t = (l || {}).enhanced_conversions_mode,
                            r;
                        if (q) {
                            if ("manual" === t) switch (q._tag_mode) {
                                case "CODE":
                                    r = "c";
                                    break;
                                case "AUTO":
                                    r = "a";
                                    break;
                                case "MANUAL":
                                    r = "m";
                                    break;
                                default:
                                    r = "c"
                            } else r = "automatic" === t ? rg(l) ? "a" : "m" : "c";
                            m = {
                                R: q,
                                Bi: r
                            }
                        } else m = {
                            R: q,
                            Bi: void 0
                        };
                        var u = m,
                            v = u.Bi;
                        f = u.R;
                        a.m[N.g.Cf] = v
                    }
                } else {
                    if (a.metadata.is_config_command || !a.h.D && !og(a.h)) return;
                    pg(ng(a.h)) && null !== g && (G(g) ? f = g : f = qg(ng(a.h)), f && pn(a))
                }
                a.metadata.user_data = f
            }
        },
        Dn = function(a) {
            qn(a, ["conversion", "remarketing"]) && (a.h.D ? "conversion" !==
                a.metadata.hit_type && a.eventName && (a.m[N.g.Rg] = a.eventName) : a.m[N.g.Rg] = a.eventName, k(a.h.h, function(b, c) {
                    le[b.split(".")[0]] || (a.m[b] = c)
                }))
        },
        En = function(a) {
            if (a.eventName === N.g.qa && (a.metadata.is_config_command = !0, qn(a, "conversion") && (a.metadata.speculative = !0), !qn(a, "remarketing") || !1 !== T(a.h, N.g.Fb) && !1 !== T(a.h, N.g.Oa) || (a.metadata.speculative = !0), qn(a, "landing_page"))) {
                var b = T(a.h, N.g.ab),
                    c = T(a.h, N.g.ya) || {},
                    d = T(a.h, N.g.ib),
                    e = a.metadata.conversion_linker_enabled,
                    f = a.metadata.cookie_options;
                Qm({
                    Of: e,
                    Wh: b,
                    fg: c,
                    ug: d
                }, f);
                bm(a.target, a.h);
                Ll({
                    Ke: !1,
                    Kd: a.metadata.redact_ads_data,
                    aa: a.target.id,
                    eventId: a.h.eventId,
                    priorityId: a.h.priorityId,
                    Ob: e ? f : void 0,
                    Ed: e,
                    Yh: a.m[N.g.vf],
                    Pe: a.m[N.g.xb],
                    Me: a.m[N.g.wb]
                });
                a.isAborted = !0
            }
        },
        Fn = function(a) {
            if (!dm(a, "hasPreAutoPiiCcdRule", !1)) {
                var b = S(50);
                if ((!S(49) || b || a.h.D) && qn(a, "conversion") && rh(N.g.H)) {
                    var c = (T(a.h, N.g.Yc) || {})[a.m[N.g.Za]],
                        d = a.m[N.g.Tc],
                        e;
                    if (!(e = rg(c)))
                        if (Ye() && Nf)
                            if (Of) e = !0;
                            else {
                                var f = bf("AW-" + d);
                                e = !!f && !!f.preAutoPii
                            }
                    else e = !1;
                    if (e) {
                        var g = Ha(),
                            l = jg({
                                Ac: !0,
                                Bc: !0,
                                ui: !0
                            });
                        if (0 !== l.elements.length) {
                            for (var m = [], n = 0; n < l.elements.length; ++n) {
                                var p = l.elements[n];
                                m.push(p.querySelector + "*" + kg(p) + "*" + p.type)
                            }
                            a.m[N.g.uh] = m.join("~");
                            var q = l.al;
                            q && (a.m[N.g.vh] = q.querySelector, a.m[N.g.th] = kg(q));
                            a.m[N.g.sh] = String(Ha() - g);
                            a.m[N.g.wh] = l.status
                        }
                    }
                }
            }
        },
        Gn = function(a) {
            if (a.eventName === N.g.Ga && !a.h.D) {
                if (!a.metadata.consent_updated && qn(a, "conversion")) {
                    var b = T(a.h, N.g.cb);
                    if ("function" !== typeof b) return;
                    var c = String(T(a.h, N.g.Na)),
                        d = a.m[c],
                        e = T(a.h, c);
                    c ===
                        N.g.tb || c === N.g.ic ? Rm({
                            vg: c,
                            callback: b,
                            hg: e
                        }, a.metadata.cookie_options, a.metadata.redact_ads_data, sm) : b(d || e)
                }
                a.isAborted = !0
            }
        },
        Hn = function(a) {
            if (qn(a, "conversion") && rh(N.g.H) && (a.m[N.g.vc] || a.m[N.g.oc])) {
                var b = a.m[N.g.Za],
                    c = K(a.metadata.cookie_options),
                    d = rl(c.prefix);
                c.prefix = "_gcl" === d ? "" : d;
                if (a.m[N.g.vc]) {
                    var e = ln(b, c);
                    e && (a.m[N.g.yh] = e)
                }
                if (a.m[N.g.oc]) {
                    var f = gn(b, c).nk;
                    f && (a.m[N.g.bh] = f)
                }
            }
        },
        In = function(a) {
            var b = S(4),
                c = a.h,
                d, e, f;
            if (!b) {
                var g = Bm(c, N.g.X);
                d = Qa(G(g) ? g : {})
            }
            var l = Bm(c, N.g.X, 1),
                m = Bm(c,
                    N.g.X, 2);
            e = Qa(G(l) ? l : {}, ".");
            f = Qa(G(m) ? m : {}, ".");
            b || (a.m[N.g.vf] = d);
            a.m[N.g.xb] = e;
            a.m[N.g.wb] = f
        },
        Jn = function(a) {
            if (qn(a, ["conversion", "remarketing"])) {
                var b = "conversion" === a.metadata.hit_type;
                b && a.eventName !== N.g.Ea || (a.copyToHitData(N.g.W), b && (a.copyToHitData(N.g.ee), a.copyToHitData(N.g.ce), a.copyToHitData(N.g.de), a.copyToHitData(N.g.be), a.m[N.g.Lg] = a.eventName))
            }
        },
        Kn = function(a) {
            if (qn(a, ["conversion", "remarketing"])) {
                var b = a.h,
                    c = T(b, N.g.Lb);
                if (!0 === c || !1 === c) a.m[N.g.Lb] = c;
                var d = T(b, N.g.V);
                if (!0 ===
                    d || !1 === d) a.m[N.g.Ce] = !d;
                !1 === d && qn(a, "remarketing") && (a.isAborted = !0)
            }
        },
        Ln = function(a) {
            qn(a, "conversion") && (a.copyToHitData(N.g.Zc), a.copyToHitData(N.g.fe), a.copyToHitData(N.g.dd), a.copyToHitData(N.g.je), a.copyToHitData(N.g.vb), a.copyToHitData(N.g.Wc))
        },
        Mn = function(a) {
            gm(a);
        },
        Nn = function(a) {
            if (qn(a, ["conversion", "remarketing"]) && z.__gsaExp && z.__gsaExp.id) {
                var b = z.__gsaExp.id;
                if (ra(b)) try {
                    var c = Number(b());
                    isNaN(c) || (a.m[N.g.hh] =
                        c)
                } catch (d) {}
            }
        },
        On = function(a) {
            if (qn(a, ["conversion", "remarketing"])) {
                var b = mn();
                void 0 !== b && (a.m[N.g.xh] = b || "error");
                var c = $i();
                c && (a.m[N.g.qe] = c);
                var d = Zi();
                d && (a.m[N.g.ze] = d)
            }
        },
        Pn = function(a) {
            qn(a, ["conversion"]) && "1" === Jk(!1)._up && (a.m[N.g.ue] = !0)
        },
        Qn = function(a) {
            qn(a, ["conversion"]) && (a.metadata.redact_click_ids = !!a.metadata.redact_ads_data && !rh(N.g.H))
        },
        Rn = function(a) {
            if (qn(a, ["conversion", "user_data_lead", "user_data_web"]) && rh(N.g.H) && a.metadata.conversion_linker_enabled) {
                var b = a.metadata.cookie_options,
                    c = rl(b.prefix);
                "_gcl" === c && (c = "");
                var d = c;
                if (an.test(C.location.host) ? dn.test(C.location.href) || bn.test(C.location.href) : !Hl(d)) {
                    var e = jn(c);
                    e && (a.m[N.g.tb] = e);
                    if (!c) {
                        var f = fn(kl() ? gl() : {}, bn);
                        f && (a.m[N.g.pe] = f)
                    }
                } else {
                    var g = kn(c);
                    g && (a.m[N.g.vc] = g);
                    if (!c) {
                        var l = a.m[N.g.Za];
                        b = K(b);
                        b.prefix = c;
                        var m = gn(l, b, !0).mk;
                        m && (a.m[N.g.oc] = m)
                    }
                }
            }
        },
        Sn = function(a) {
            if (qn(a, ["conversion", "remarketing", "user_data_lead", "user_data_web"]) && a.metadata.conversion_linker_enabled && rh(N.g.H)) {
                var b = !S(3);
                if ("remarketing" !==
                    a.metadata.hit_type || b) {
                    var c = a.metadata.cookie_options;
                    al(c, "conversion" === a.metadata.hit_type && a.eventName !== N.g.Ga);
                    a.m[N.g.ic] = Xk(c.prefix)
                }
            }
        },
        Tn = function(a) {
            if (qn(a, ["conversion"])) {
                var b = im(a.metadata.cookie_options);
                if (b && !a.m[N.g.ma]) {
                    var c = Vh(a.m[N.g.Za]);
                    a.m[N.g.ma] = c
                }
                b && (a.m[N.g.hb] = b, a.metadata.send_ccm_parallel_ping = !0)
            }
        },
        Un = function(a) {
            var b = !rh(N.g.H);
            switch (a.metadata.hit_type) {
                case "user_data_lead":
                case "user_data_web":
                    a.isAborted = !(!b && !a.metadata.consent_updated);
                    break;
                case "remarketing":
                    a.isAborted =
                        b;
                    break;
                case "conversion":
                    a.metadata.consent_updated && (a.m[N.g.Wd] = !0)
            }
        },
        Vn = function(a) {
            qn(a, ["conversion"]) && a.h.eventMetadata.is_external_event && (a.m[N.g.Fh] = !0)
        },
        Wn = function(a) {
            var b;
            if ("gtag.config" !== a.eventName && a.metadata.send_user_data_hit) switch (a.metadata.hit_type) {
                case "user_data_web":
                    b = 97;
                    pn(a);
                    break;
                case "user_data_lead":
                    b = 98;
                    pn(a);
                    break;
                case "conversion":
                    b = 99
            }!a.metadata.speculative && b && L(b);
            !0 === a.metadata.speculative && (a.isAborted = !0)
        },
        xn = !1;
    var Xn = {
        F: {
            wg: "ads_conversion_hit",
            bf: "container_execute_start",
            Ag: "container_setup_end",
            cf: "container_setup_start",
            zg: "container_execute_end",
            Bg: "container_yield_end",
            df: "container_yield_start",
            zh: "event_execute_end",
            Ah: "event_setup_end",
            od: "event_setup_start",
            Bh: "ga4_conversion_hit",
            qd: "page_load",
            Tl: "pageview",
            Cb: "snippet_load",
            Mh: "tag_callback_error",
            Nh: "tag_callback_failure",
            Oh: "tag_callback_success",
            Ph: "tag_execute_end",
            xc: "tag_execute_start"
        }
    };
    var Yn = !1,
        Zn = "L S Y E TC HTC".split(" "),
        $n = ["S", "E"],
        ao = ["TS", "TE"];
    var Co = function(a) {},
        Do = function(a) {},
        bo = function(a, b, c, d, e, f) {
            var g;
            g = void 0 === g ? !1 : g;
            var l = {};
            return l
        },
        co = function(a) {
            var b = !1;
            return b
        },
        eo = function(a, b) {},
        Eo = function() {
            var a = {};
            return a
        },
        vo = function(a) {
            a = void 0 === a ? !0 : a;
            var b = {};
            return b
        },
        Fo = function() {},
        Go = function(a, b, c) {};
    var Ho = function(a, b) {
        var c, d = z.GooglebQhCsO;
        d || (d = {}, z.GooglebQhCsO = d);
        c = d;
        if (c[a]) return !1;
        c[a] = [];
        c[a][0] = b;
        return !0
    };
    var Io = function(a, b, c) {
        var d = wi(a, "fmt");
        if (b) {
            var e = wi(a, "random"),
                f = wi(a, "label") || "";
            if (!e) return !1;
            var g = Nj(decodeURIComponent(f.replace(/\+/g, " ")) + ":" + decodeURIComponent(e.replace(/\+/g, " ")));
            if (!Ho(g, b)) return !1
        }
        d && 4 != d && (a = yi(a, "rfmt", d));
        var l = yi(a, "fmt", 4);
        Kb(l, function() {
            z.google_noFurtherRedirects && b && b.call && (z.google_noFurtherRedirects = null, b())
        }, void 0, c, C.getElementsByTagName("script")[0].parentElement || void 0);
        return !0
    };
    var Jo = function(a) {
            for (var b = {}, c = 0; c < a.length; c++) {
                var d = a[c],
                    e = void 0;
                if (d.hasOwnProperty("google_business_vertical")) {
                    e = d.google_business_vertical;
                    var f = {};
                    b[e] = b[e] || (f.google_business_vertical = e, f)
                } else e = "", b.hasOwnProperty(e) || (b[e] = {});
                var g = b[e],
                    l;
                for (l in d) "google_business_vertical" !== l && (l in g || (g[l] = []), g[l].push(d[l]))
            }
            return Object.keys(b).map(function(m) {
                return b[m]
            })
        },
        Ko = function(a) {
            if (!a || !a.length) return [];
            for (var b = [], c = 0; c < a.length; ++c) {
                var d = a[c];
                if (d) {
                    var e = {};
                    b.push((e.id =
                        d.id, e.origin = d.origin, e.destination = d.destination, e.start_date = d.start_date, e.end_date = d.end_date, e.location_id = d.location_id, e.google_business_vertical = d.google_business_vertical, e))
                }
            }
            return b
        },
        Lo = function(a) {
            if (!a || !a.length) return [];
            for (var b = [], c = 0; c < a.length; ++c) {
                var d = a[c];
                d && b.push({
                    item_id: d.id,
                    quantity: d.quantity,
                    value: d.price,
                    start_date: d.start_date,
                    end_date: d.end_date
                })
            }
            return b
        },
        No = function(a) {
            if (!a) return "";
            for (var b = [], c = 0; c < a.length; c++) {
                var d = a[c],
                    e = [];
                d && (e.push(Mo(d.value)), e.push(Mo(d.quantity)),
                    e.push(Mo(d.item_id)), e.push(Mo(d.start_date)), e.push(Mo(d.end_date)), b.push("(" + e.join("*") + ")"))
            }
            return 0 < b.length ? b.join("") : ""
        },
        Mo = function(a) {
            return "number" !== typeof a && "string" !== typeof a ? "" : a.toString()
        },
        Po = function(a, b) {
            var c = Oo(b);
            return "" + a + (a && c ? ";" : "") + c
        },
        Oo = function(a) {
            if (!a || "object" !== typeof a || "function" === typeof a.join) return "";
            var b = [];
            k(a, function(c, d) {
                var e, f;
                if (ua(d)) {
                    for (var g = [], l = 0; l < d.length; ++l) {
                        var m = Qo(d[l]);
                        void 0 != m && g.push(m)
                    }
                    f = 0 !== g.length ? g.join(",") : void 0
                } else f =
                    Qo(d);
                e = f;
                var n = Qo(c);
                n && void 0 != e && b.push(n + "=" + e)
            });
            return b.join(";")
        },
        Qo = function(a) {
            var b = typeof a;
            if (null != a && "object" !== b && "function" !== b) return String(a).replace(/,/g, "\\,").replace(/;/g, "\\;").replace(/=/g, "\\=")
        },
        Ro = function(a, b) {
            var c = [],
                d = function(f, g) {
                    null != g && "" !== g && (!0 === g && (g = 1), !1 === g && (g = 0), c.push(f + "=" + encodeURIComponent(g)))
                },
                e = a.metadata.hit_type;
            "conversion" !== e && "remarketing" !== e || d("random", a.metadata.event_start_timestamp_ms);
            k(b, d);
            return c.join("&")
        },
        So = function(a, b) {
            var c =
                a.metadata.hit_type,
                d = a.m[N.g.Tc],
                e = rh(N.g.H),
                f = [],
                g, l = a.h.M,
                m, n = ai() ? 2 : 3,
                p = 0,
                q = function(w) {
                    f.push(w);
                    w.Ua && p++
                };
            switch (c) {
                case "conversion":
                    m = "pagead/conversion";
                    var t = "";
                    e ? a.metadata.is_gcp_conversion ? (g = "https://www.google.com/", m = "pagead/1p-conversion") : g = "https://www.googleadservices.com/" : g = "https://pagead2.googlesyndication.com/";
                    a.metadata.is_gcp_conversion && (t = "&gcp=1&sscte=1&ct_cookie_present=1");
                    q({
                        jb: "" + g + m + "/" + d + "/?" + Ro(a, b) + t,
                        format: n,
                        Ua: !0,
                        attributes: S(89) ? {
                            attributionsrc: ""
                        } : void 0
                    });
                    a.metadata.send_ccm_parallel_ping && q({
                        jb: "" + g + "ccm/conversion/" + d + "/?" + Ro(a, b) + t,
                        format: 2,
                        Ua: !0
                    });
                    a.metadata.is_gcp_conversion && (t = "&gcp=1&ct_cookie_present=1", q({
                        jb: "" + (e ? "https://googleads.g.doubleclick.net/" : g) + "pagead/viewthroughconversion/" + d + "/?" + Ro(a, b) + t,
                        format: n,
                        Ua: !0
                    }));
                    break;
                case "remarketing":
                    var r = b.data || "",
                        u = Jo(Ko(a.m[N.g.W]));
                    if (u.length) {
                        for (var v = 0; v < u.length; v++) b.data = Po(r, u[v]), q({
                                jb: "https://googleads.g.doubleclick.net/pagead/viewthroughconversion/" + d + "/?" + Ro(a, b),
                                format: n,
                                Ua: !0
                            }),
                            a.metadata.send_fledge_experiment && q({
                                jb: Ym() + "/td/rul/" + d + "?" + Ro(a, b),
                                format: 4,
                                Ua: !1
                            }), a.metadata.event_start_timestamp_ms += 1;
                        a.metadata.send_fledge_experiment = !1
                    } else q({
                        jb: "https://googleads.g.doubleclick.net/pagead/viewthroughconversion/" + d + "/?" + Ro(a, b),
                        format: n,
                        Ua: !0
                    });
                    break;
                case "user_data_lead":
                    q({
                        jb: "https://google.com/pagead/form-data/" + d + "?" + Ro(a, b),
                        format: 1,
                        Ua: !0
                    });
                    break;
                case "user_data_web":
                    q({
                        jb: "https://google.com/ccm/form-data/" + d + "?" + Ro(a, b),
                        format: 1,
                        Ua: !0
                    })
            }
            1 < f.length && ra(a.h.M) &&
                (l = Ra(a.h.M, p));
            ai() || "conversion" !== c && "remarketing" !== c || !a.metadata.send_fledge_experiment || q({
                jb: Ym() + "/td/rul/" + d + "?" + Ro(a, b),
                format: 4,
                Ua: !1
            });
            return {
                M: l,
                zk: f
            }
        },
        To = function(a, b, c, d, e, f) {
            Do(c);
            var g = function() {
                e && e()
            };
            switch (b) {
                case 1:
                    Ub(a);
                    e && e();
                    break;
                case 2:
                    Nb(a, g, void 0, f);
                    break;
                case 3:
                    var l = !1;
                    try {
                        l = Io(a, g, f)
                    } catch (p) {
                        l = !1
                    }
                    l || To(a, 2, c, d, g, f);
                    break;
                case 4:
                    var m = "AW-" + c.m[N.g.Tc],
                        n = c.m[N.g.Za];
                    n && (m = m + "/" + n);
                    Xm(a, m)
            }
        },
        Uo = {},
        Vo = (Uo[N.g.Wd] = "gcu", Uo[N.g.tb] = "gclaw", Uo[N.g.ic] = "auid", Uo[N.g.be] =
            "dscnt", Uo[N.g.ce] = "fcntr", Uo[N.g.de] = "flng", Uo[N.g.ee] = "mid", Uo[N.g.Lg] = "bttype", Uo[N.g.Za] = "label", Uo[N.g.Gb] = "capi", Uo[N.g.ra] = "currency_code", Uo[N.g.fe] = "vdltv", Uo[N.g.jj] = "_dbg", Uo[N.g.je] = "oedeld", Uo[N.g.wb] = "edid", Uo[N.g.Sg] = "fledge", Uo[N.g.pe] = "gac", Uo[N.g.oc] = "gacgb", Uo[N.g.bh] = "gacmcov", Uo[N.g.qe] = "gdpr", Uo[N.g.xb] = "gdid", Uo[N.g.hh] = "gsaexp", Uo[N.g.ih] = "frm", Uo[N.g.ue] = "gtm_up", Uo[N.g.vf] = "did", Uo[N.g.Zc] = void 0, Uo[N.g.zb] = "tiba", Uo[N.g.Lb] = "rdp", Uo[N.g.hb] = "ecsid", Uo[N.g.dd] = "delopc", Uo[N.g.ze] =
            "gdpr_consent", Uo[N.g.ma] = "oid", Uo[N.g.sh] = "ec_lat", Uo[N.g.th] = "ec_meta", Uo[N.g.uh] = "ec_m", Uo[N.g.vh] = "ec_sel", Uo[N.g.wh] = "ec_s", Uo[N.g.Cf] = "ec_mode", Uo[N.g.za] = "userId", Uo[N.g.xh] = "us_privacy", Uo[N.g.ba] = "value", Uo[N.g.vc] = "gclgb", Uo[N.g.yh] = "mcov", Uo[N.g.Eh] = "hn", Uo[N.g.Fh] = "gtm_ee", Uo[N.g.Ce] = "npa", Uo[N.g.Tc] = null, Uo[N.g.Ab] = null, Uo[N.g.xa] = null, Uo[N.g.W] = null, Uo[N.g.ja] = null, Uo[N.g.Ca] = null, Uo[N.g.Af] = null, Uo),
        Xo = function(a) {
            Wo(a, function(b) {
                for (var c = So(a, b), d = c.M, e = c.zk, f = 0; f < e.length; f++) {
                    var g =
                        e[f];
                    To(g.jb, g.format, a, b, g.Ua ? d : void 0, g.attributes)
                }
            })
        },
        Wo = function(a, b) {
            var c = a.metadata.hit_type,
                d = {},
                e = {},
                f = [],
                g = a.metadata.event_start_timestamp_ms;
            if ("conversion" === c || "remarketing" === c) d.cv = "11", d.fst = g, d.fmt = 3, d.bg = "ffffff", d.guid = "ON", d.async = "1";
            d.gtm = ni();
            Tg() && (S(112) || S(104) || "remarketing" !== c) && (d.gcs = sh(), S(106) || "remarketing" !== c && Ug()) && (d.gcd = wh());
            S(109) && (yh() && (d.dma_cps = xh()), We() && (d.dma = "1"));
            if (a.m[N.g.Ab]) {
                var l = a.m[N.g.Ab].split("x");
                2 === l.length && (d.u_w = l[0], d.u_h = l[1])
            }
            if (a.m[N.g.xa]) {
                var m =
                    a.m[N.g.xa];
                2 === m.length ? d.hl = m : 5 === m.length && (d.hl = m.substring(0, 2), d.gl = m.substring(3, 5))
            }
            var n = a.metadata.redact_click_ids,
                p = function(w, x) {
                    var y = a.m[x];
                    y && (d[w] = n ? xf(y) : y)
                };
            p("url", N.g.ja);
            p("ref", N.g.Ca);
            p("top", N.g.Af);
            S(13) && (Vo[N.g.fd] = "uaa", Vo[N.g.gd] = "uab", Vo[N.g.hd] = "uafvl", Vo[N.g.jd] = "uamb", Vo[N.g.kd] = "uam", Vo[N.g.ld] = "uap", Vo[N.g.md] = "uapv", Vo[N.g.nd] = "uaw");
            k(a.m, function(w, x) {
                if (Vo.hasOwnProperty(w)) {
                    var y = Vo[w];
                    y && (d[y] = x)
                } else e[w] = x
            });
            var q = a.m[N.g.Zc];
            void 0 != q && "" !== q && (d.vdnc =
                String(q));
            var t = a.m[N.g.Wc];
            void 0 !== t && (d.shf = t);
            var r = a.m[N.g.vb];
            void 0 !== r && (d.delc = r);
            d.data = Oo(e);
            var u = a.m[N.g.W];
            u && "conversion" === c && (d.iedeld = tg(u), d.item = No(Lo(u)));
            if (("conversion" === c || "user_data_lead" === c || "user_data_web" === c) && a.metadata.user_data && (!S(68) || rh(N.g.H))) {
                var v = Yd(a.metadata.user_data);
                v && f.push(v.then(function(w) {
                    d.em = w.Re;
                    if ("user_data_web" === c && 0 < w.Yk) {
                        var x = jm(a.metadata.cookie_options);
                        d.ecsid = x
                    }
                }))
            }
            if (f.length) try {
                Promise.all(f).then(function() {
                    b(d)
                });
                return
            } catch (w) {}
            b(d)
        };
    var Yo = function() {
            this.h = {}
        },
        Zo = function(a, b, c) {
            null != c && (a.h[b] = c)
        },
        $o = function(a) {
            return Object.keys(a.h).map(function(b) {
                return encodeURIComponent(b) + "=" + encodeURIComponent(a.h[b])
            }).join("&")
        },
        bp = function(a, b, c, d) {
            if (!Tg()) {
                ap(a, b, c, d);
                return
            }
            Ah(function() {
                rh(N.g.H) ? ap(a, b, c, d) : d && d()
            }, [N.g.H]);
        };
    var cp = function(a, b, c) {
            c = void 0 === c ? !0 : c;
            var d = {
                    gclgb: function() {
                        return om("gb", b, c).join(".")
                    },
                    gacgb: function() {
                        return vm(c)
                    },
                    gclaw: function() {
                        return sm(b, c).join(".")
                    },
                    gac: function() {
                        return um(c)
                    }
                },
                e = xm(b),
                f = e ? "gclgb" : "gclaw",
                g = e ? "gacgb" : "gac",
                l = d[g],
                m = (0, d[f])(),
                n = "_gcl" !== b ? "" : l();
            m && Zo(a, f, m);
            n && Zo(a, g, n)
        },
        ap = function(a, b, c, d) {
            c = c || {};
            var e = c.Ob || {},
                f = new Yo;
            Xd(b, function(g, l) {
                Zo(f, "em", g);
                Zo(f, "gtm", ni());
                Tg() && (Zo(f, "gcs", sh()), Zo(f, "gcd", wh()));
                S(109) && (yh() && Zo(f, "dma_cps", xh()), We() && Zo(f,
                    "dma", "1"));
                cp(f, rl(e.prefix), c.Kd);
                Zo(f, "auid", Xk(e.prefix));
                if (0 < l) {
                    var m = jm(e);
                    Zo(f, "ecsid", m)
                }
                var n = $o(f);
                Ub("https://google.com/pagead/form-data/" + a + "?" + n);
                Ub("https://google.com/ccm/form-data/" + a + "?" + n);
                d && d()
            })
        };

    function dp(a, b) {
        if (a) {
            var c = "" + a;
            0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
            "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
            return wf("" + c + b).href
        }
    }

    function ep() {
        return !!me.Ge && "SGTM_TOKEN" !== me.Ge.split("@@").join("")
    }

    function fp(a) {
        for (var b = gp(), c = fa(b), d = c.next(); !d.done; d = c.next()) {
            var e = T(a, d.value);
            if (e) return e
        }
    }

    function gp() {
        var a = [];
        S(113) && a.push(N.g.we);
        a.push(N.g.uc);
        return a
    };
    var ip = function(a, b, c, d) {
            if (!hp() && !ii(a)) {
                var e = c ? "/gtag/js" : "/gtm.js",
                    f = "?id=" + encodeURIComponent(a) + "&l=" + me.ia,
                    g = 0 === a.indexOf("GTM-");
                g || (f += "&cx=c");
                var l = ep();
                l && (f += "&sign=" + me.Ge);
                var m = ve || xe ? dp(b, e + f) : void 0;
                if (!m) {
                    var n = me.Xd + e;
                    l && Eb && g && (n = Eb.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
                    m = Rl("https://", "http://", n + f)
                }
                var p = ji();
                ci().container[a] = {
                    state: 1,
                    context: d,
                    parent: p
                };
                Kb(m)
            }
        },
        jp = function(a, b, c) {
            var d;
            if (d = !hp()) {
                var e = ci().destination[a];
                d = !(e && e.state)
            }
            if (d)
                if (ki()) ci().destination[a] = {
                    state: 0,
                    transportUrl: b,
                    context: c,
                    parent: ji()
                }, L(91);
                else {
                    var f = "/gtag/destination?id=" + encodeURIComponent(a) + "&l=" + me.ia + "&cx=c";
                    ep() && (f += "&sign=" + me.Ge);
                    var g = ve || xe ? dp(b, f) : void 0;
                    g || (g = Rl("https://", "http://", me.Xd + f));
                    ci().destination[a] = {
                        state: 1,
                        context: c,
                        parent: ji()
                    };
                    Kb(g)
                }
        };

    function hp() {
        if (ai()) {
            return !0
        }
        return !1
    };
    var kp = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
        lp = {
            cl: ["ecl"],
            customPixels: ["nonGooglePixels"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            nonGooglePixels: [],
            nonGoogleScripts: ["nonGooglePixels"],
            nonGoogleIframes: ["nonGooglePixels"]
        },
        mp = {
            cl: ["ecl"],
            customPixels: ["customScripts", "html"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts"],
            customScripts: ["html"],
            nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
            nonGoogleScripts: ["customScripts", "html"],
            nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
        },
        np = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" "),
        qp = function(a) {
            var b = Ne("gtm.allowlist") || Ne("gtm.whitelist");
            b && L(9);
            te && (b = ["google", "gtagfl", "lcl", "zone"]);
            op() && (te ?
                L(116) : L(117), pp && (b = [], window.console && window.console.log && window.console.log("GTM blocked. See go/13687728.")));
            var c = b && Ma(Ea(b), lp),
                d = Ne("gtm.blocklist") || Ne("gtm.blacklist");
            d || (d = Ne("tagTypeBlacklist")) && L(3);
            d ? L(8) : d = [];
            op() && (d = Ea(d), d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
            0 <= Ea(d).indexOf("google") && L(2);
            var e = d && Ma(Ea(d), mp),
                f = {};
            return function(g) {
                var l = g && g[cc.Bb];
                if (!l || "string" != typeof l) return !0;
                l = l.replace(/^_*/, "");
                if (void 0 !== f[l]) return f[l];
                var m = Fe[l] || [],
                    n = a(l, m);
                if (b) {
                    var p;
                    if (p = n) a: {
                        if (0 > c.indexOf(l))
                            if (m && 0 < m.length)
                                for (var q = 0; q < m.length; q++) {
                                    if (0 > c.indexOf(m[q])) {
                                        L(11);
                                        p = !1;
                                        break a
                                    }
                                } else {
                                    p = !1;
                                    break a
                                }
                        p = !0
                    }
                    n = p
                }
                var t = !1;
                if (d) {
                    var r = 0 <= e.indexOf(l);
                    if (r) t = r;
                    else {
                        var u = za(e, m || []);
                        u && L(10);
                        t = u
                    }
                }
                var v = !n || t;
                v || !(0 <= m.indexOf("sandboxedScripts")) || c && -1 !== c.indexOf("sandboxedScripts") || (v = za(e, np));
                return f[l] = v
            }
        },
        pp = !1;
    var op = function() {
        return kp.test(z.location && z.location.hostname)
    };
    var rp = {
            initialized: 11,
            complete: 12,
            interactive: 13
        },
        sp = {},
        tp = Object.freeze((sp[N.g.Oa] = !0, sp)),
        up = 0 <= C.location.search.indexOf("?gtm_diagnostics=") || 0 <= C.location.search.indexOf("&gtm_diagnostics="),
        wp = function(a, b, c) {
            if (hj && "config" === a && !(1 < Ol(b).J.length)) {
                var d, e = Fb("google_tag_data", {});
                e.td || (e.td = {});
                d = e.td;
                var f = K(c.I);
                K(c.h, f);
                var g = [],
                    l;
                for (l in d) {
                    var m = vp(d[l], f);
                    m.length && (up && console.log(m), g.push(l))
                }
                if (g.length) {
                    if (g.length) {
                        var n = b + "*" + g.join(".");
                        qj = qj ? qj + "!" + n : "&tdc=" + n
                    }
                    $a("TAGGING",
                        rp[C.readyState] || 14)
                }
                d[b] = f
            }
        };

    function xp(a, b) {
        var c = {},
            d;
        for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
        for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
        return c
    }

    function vp(a, b, c, d) {
        c = void 0 === c ? {} : c;
        d = void 0 === d ? "" : d;
        if (a === b) return [];
        var e = function(q, t) {
                var r = t[q];
                return void 0 === r ? tp[q] : r
            },
            f;
        for (f in xp(a, b)) {
            var g = (d ? d + "." : "") + f,
                l = e(f, a),
                m = e(f, b),
                n = "object" === $b(l) || "array" === $b(l),
                p = "object" === $b(m) || "array" === $b(m);
            if (n && p) vp(l, m, c, g);
            else if (n || p || l !== m) c[g] = !0
        }
        return Object.keys(c)
    };
    var yp = !1,
        zp = 0,
        Ap = [];

    function Bp(a) {
        if (!yp) {
            var b = C.createEventObject,
                c = "complete" == C.readyState,
                d = "interactive" == C.readyState;
            if (!a || "readystatechange" != a.type || c || !b && d) {
                yp = !0;
                for (var e = 0; e < Ap.length; e++) F(Ap[e])
            }
            Ap.push = function() {
                for (var f = 0; f < arguments.length; f++) F(arguments[f]);
                return 0
            }
        }
    }

    function Cp() {
        if (!yp && 140 > zp) {
            zp++;
            try {
                C.documentElement.doScroll("left"), Bp()
            } catch (a) {
                z.setTimeout(Cp, 50)
            }
        }
    }
    var Dp = function(a) {
        yp ? a() : Ap.push(a)
    };
    var Ep = function(a, b) {
        return {
            entityType: 1,
            indexInOriginContainer: a,
            nameInOriginContainer: b,
            originContainerId: U.C
        }
    };

    function Fp(a, b) {
        if (data.entities && data.entities[a]) return data.entities[a][b]
    };
    var Hp = function(a, b) {
            this.h = !1;
            this.I = [];
            this.K = {
                tags: []
            };
            this.Z = !1;
            this.m = this.B = 0;
            Gp(this, a, b)
        },
        Ip = function(a, b, c, d) {
            if (qe.hasOwnProperty(b) || "__zone" === b) return -1;
            var e = {};
            G(d) && (e = K(d, e));
            e.id = c;
            e.status = "timeout";
            return a.K.tags.push(e) - 1
        },
        Jp = function(a, b, c, d) {
            var e = a.K.tags[b];
            e && (e.status = c, e.executionTime = d)
        },
        Kp = function(a) {
            if (!a.h) {
                for (var b = a.I, c = 0; c < b.length; c++) b[c]();
                a.h = !0;
                a.I.length = 0
            }
        },
        Gp = function(a, b, c) {
            void 0 !== b && Lp(a, b);
            c && z.setTimeout(function() {
                return Kp(a)
            }, Number(c))
        },
        Lp = function(a,
            b) {
            var c = Ja(function() {
                return F(function() {
                    b(U.C, a.K)
                })
            });
            a.h ? c() : a.I.push(c)
        },
        Mp = function(a) {
            a.B++;
            return Ja(function() {
                a.m++;
                a.Z && a.m >= a.B && Kp(a)
            })
        },
        Np = function(a) {
            a.Z = !0;
            a.m >= a.B && Kp(a)
        };
    var Op = {},
        Qp = function() {
            return z[Pp()]
        },
        Rp = !1;
    var Sp = function(a) {
            z.GoogleAnalyticsObject || (z.GoogleAnalyticsObject = a || "ga");
            var b = z.GoogleAnalyticsObject;
            if (z[b]) z.hasOwnProperty(b);
            else {
                var c = function() {
                    c.q = c.q || [];
                    c.q.push(arguments)
                };
                c.l = Number(Ga());
                z[b] = c
            }
            return z[b]
        },
        Tp = function(a) {
            if (Tg()) {
                var b = Qp();
                b(a + "require", "linker");
                b(a + "linker:passthrough", !0)
            }
        };

    function Pp() {
        return z.GoogleAnalyticsObject || "ga"
    }
    var kq = function(a) {},
        yq = function(a, b) {
            return function() {
                var c = Qp(),
                    d = c && c.getByName && c.getByName(a);
                if (d) {
                    var e = d.get("sendHitTask");
                    d.set("sendHitTask", function(f) {
                        var g = f.get("hitPayload"),
                            l = f.get("hitCallback"),
                            m = 0 > g.indexOf("&tid=" + b);
                        m && (f.set("hitPayload", g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0), f.set("hitCallback", void 0, !0));
                        e(f);
                        m && (f.set("hitPayload",
                            g, !0), f.set("hitCallback", l, !0), f.set("_x_19", void 0, !0), e(f))
                    })
                }
            }
        };

    function Dq(a, b, c, d) {
        var e = Dc[a],
            f = Eq(a, b, c, d);
        if (!f) return null;
        var g = Mc(e[cc.Lh], c, []);
        if (g && g.length) {
            var l = g[0];
            f = Dq(l.index, {
                M: f,
                P: 1 === l.ai ? b.terminate : f,
                terminate: b.terminate
            }, c, d)
        }
        return f
    }

    function Eq(a, b, c, d) {
        function e() {
            if (f[cc.Jj]) l();
            else {
                var w = Nc(f, c, []),
                    x = w[cc.Gi];
                if (null != x)
                    for (var y = 0; y < x.length; y++)
                        if (!rh(x[y])) {
                            l();
                            return
                        }
                var A = Ip(c.Nb, String(f[cc.Bb]), Number(f[cc.vd]), w[cc.Kj]),
                    B = !1;
                w.vtp_gtmOnSuccess = function() {
                    if (!B) {
                        B = !0;
                        var E = Ha() - H;
                        Ij(c.id, Dc[a], "5");
                        Jp(c.Nb, A, "success", E);
                        S(70) && Go(c, f, Xn.F.Oh);
                        g()
                    }
                };
                w.vtp_gtmOnFailure = function() {
                    if (!B) {
                        B = !0;
                        var E = Ha() - H;
                        Ij(c.id, Dc[a], "6");
                        Jp(c.Nb, A, "failure", E);
                        S(70) && Go(c, f, Xn.F.Nh);
                        l()
                    }
                };
                w.vtp_gtmTagId = f.tag_id;
                w.vtp_gtmEventId =
                    c.id;
                c.priorityId && (w.vtp_gtmPriorityId = c.priorityId);
                Ij(c.id, f, "1");
                var D = function() {
                    var E = Ha() - H;
                    Ij(c.id, f, "7");
                    Jp(c.Nb, A, "exception", E);
                    S(70) && Go(c, f, Xn.F.Mh);
                    B || (B = !0, l())
                };
                if (S(70)) {
                    var I = bo(Xn.F.xc, U.C, c.id, Number(f[cc.vd]), c.name, bj(f));
                    co(I)
                }
                var H = Ha();
                try {
                    Lc(w, {
                        event: c,
                        index: a,
                        type: 1
                    })
                } catch (E) {
                    D(E)
                }
                S(70) && Go(c, f, Xn.F.Ph)
            }
        }
        var f = Dc[a],
            g = b.M,
            l = b.P,
            m = b.terminate;
        if (c.Wf(f)) return null;
        var n = Mc(f[cc.Qh], c, []);
        if (n && n.length) {
            var p = n[0],
                q = Dq(p.index, {
                    M: g,
                    P: l,
                    terminate: m
                }, c, d);
            if (!q) return null;
            g = q;
            l = 2 === p.ai ? m : q
        }
        if (f[cc.Hh] || f[cc.Mj]) {
            var t = f[cc.Hh] ? Ec : c.Bl,
                r = g,
                u = l;
            if (!t[a]) {
                e = Ja(e);
                var v = Fq(a, t, e);
                g = v.M;
                l = v.P
            }
            return function() {
                t[a](r, u)
            }
        }
        return e
    }

    function Fq(a, b, c) {
        var d = [],
            e = [];
        b[a] = Gq(d, e, c);
        return {
            M: function() {
                b[a] = Hq;
                for (var f = 0; f < d.length; f++) d[f]()
            },
            P: function() {
                b[a] = Iq;
                for (var f = 0; f < e.length; f++) e[f]()
            }
        }
    }

    function Gq(a, b, c) {
        return function(d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }

    function Hq(a) {
        a()
    }

    function Iq(a, b) {
        b()
    };
    var Kq = function(a, b) {
            return 1 === arguments.length ? Jq("config", a) : Jq("config", a, b)
        },
        Lq = function(a, b, c) {
            c = c || {};
            c[N.g.Mb] = a;
            return Jq("event", b, c)
        };

    function Jq(a) {
        return arguments
    }
    var Mq = function() {
        this.h = [];
        this.m = []
    };
    Mq.prototype.enqueue = function(a, b, c) {
        var d = this.h.length + 1;
        a["gtm.uniqueEventId"] = b;
        a["gtm.priorityId"] = d;
        c.eventId = b;
        c.fromContainerExecution = !0;
        c.priorityId = d;
        var e = {
            message: a,
            notBeforeEventId: b,
            priorityId: d,
            messageContext: c
        };
        this.h.push(e);
        for (var f = 0; f < this.m.length; f++) try {
            this.m[f](e)
        } catch (g) {}
    };
    Mq.prototype.listen = function(a) {
        this.m.push(a)
    };
    Mq.prototype.get = function() {
        for (var a = {}, b = 0; b < this.h.length; b++) {
            var c = this.h[b],
                d = a[c.notBeforeEventId];
            d || (d = [], a[c.notBeforeEventId] = d);
            d.push(c)
        }
        return a
    };
    Mq.prototype.prune = function(a) {
        for (var b = [], c = [], d = 0; d < this.h.length; d++) {
            var e = this.h[d];
            e.notBeforeEventId === a ? b.push(e) : c.push(e)
        }
        this.h = c;
        return b
    };
    var Oq = function(a, b, c) {
            Nq().enqueue(a, b, c)
        },
        Qq = function() {
            var a = Pq;
            Nq().listen(a)
        };

    function Nq() {
        var a = ne.mb;
        a || (a = new Mq, ne.mb = a);
        return a
    }
    var Yq = function(a) {
            var b = ne.zones;
            return b ? b.getIsAllowedFn(ei(), a) : function() {
                return !0
            }
        },
        Zq = function(a) {
            var b = ne.zones;
            return b ? b.isActive(ei(), a) : !0
        };
    var br = function(a, b) {
        for (var c = [], d = 0; d < Dc.length; d++)
            if (a[d]) {
                var e = Dc[d];
                var f = Mp(b.Nb);
                try {
                    var g = Dq(d, {
                        M: f,
                        P: f,
                        terminate: f
                    }, b, d);
                    if (g) {
                        var l = e["function"];
                        if (!l) throw "Error: No function name given for function call.";
                        var m = Fc[l];
                        c.push({
                            yi: d,
                            mi: (m ? m.priorityOverride || 0 : 0) || Fp(e[cc.Bb], 1) || 0,
                            execute: g
                        })
                    } else $q(d, b), f()
                } catch (p) {
                    f()
                }
            }
        c.sort(ar);
        for (var n = 0; n < c.length; n++) c[n].execute();
        return 0 < c.length
    };

    function ar(a, b) {
        var c, d = b.mi,
            e = a.mi;
        c = d > e ? 1 : d < e ? -1 : 0;
        var f;
        if (0 !== c) f = c;
        else {
            var g = a.yi,
                l = b.yi;
            f = g > l ? 1 : g < l ? -1 : 0
        }
        return f
    }

    function $q(a, b) {
        if (hj) {
            var c = function(d) {
                var e = b.Wf(Dc[d]) ? "3" : "4",
                    f = Mc(Dc[d][cc.Lh], b, []);
                f && f.length && c(f[0].index);
                Ij(b.id, Dc[d], e);
                var g = Mc(Dc[d][cc.Qh], b, []);
                g && g.length && c(g[0].index)
            };
            c(a)
        }
    }
    var er = !1,
        cr;
    var jr = function(a) {
        var b = a["gtm.uniqueEventId"],
            c = a["gtm.priorityId"],
            d = a.event;
        if (S(70)) {
            var e = bo(Xn.F.od, U.C, b, void 0, d);
            co(e)
        }
        if ("gtm.js" === d) {
            if (er) return !1;
            er = !0
        }
        var f, g = !1;
        if (Zq(b)) f = Yq(b);
        else {
            if ("gtm.js" !== d && "gtm.init" !== d && "gtm.init_consent" !== d) return !1;
            g = !0;
            f = Yq(Number.MAX_SAFE_INTEGER)
        }
        Hj(b, d);
        var l = a.eventCallback,
            m = a.eventTimeout,
            n = {
                id: b,
                priorityId: c,
                name: d,
                Wf: qp(f),
                Bl: [],
                hi: function() {
                    L(6);
                    $a("HEALTH", 0)
                },
                Uh: fr(),
                Vh: gr(b),
                Nb: new Hp(function() {
                    if (S(70)) {
                        var v = bo(Xn.F.zh, U.C, b, void 0,
                            d);
                        if (co(v)) {
                            var w = bo(Xn.F.od, U.C, b, void 0, d);
                            eo(v, w)
                        }
                        if ("gtm.load" === d) {
                            var x = bo(Xn.F.zg, U.C);
                            if (co(x)) {
                                var y = bo(Xn.F.bf, U.C);
                                eo(x, y)
                            }
                            Fo();
                        }
                    }
                    l && l.apply(l, [].slice.call(arguments, 0))
                }, m)
            },
            p = Rc(n);
        g && (p = hr(p));
        if (S(70)) {
            var q = bo(Xn.F.Ah, U.C, b, void 0, d);
            if (co(q)) {
                var t =
                    bo(Xn.F.od, U.C, b, void 0, d);
                eo(q, t)
            }
        }
        var r = br(p, n),
            u = !1;
        Np(n.Nb);
        "gtm.js" !== d && "gtm.sync" !== d || kq(U.C);
        return ir(p, r) || u
    };

    function gr(a) {
        return function(b) {
            hj && (bc(b) || Kj(a, "input", b))
        }
    }

    function fr() {
        var a = {};
        a.event = Re("event", 1);
        a.ecommerce = Re("ecommerce", 1);
        a.gtm = Re("gtm");
        a.eventModel = Re("eventModel");
        return a
    }

    function hr(a) {
        for (var b = [], c = 0; c < a.length; c++)
            if (a[c]) {
                var d = String(Dc[c][cc.Bb]);
                if (pe[d] || void 0 !== Dc[c][cc.Nj] || Ge[d] || Fp(d, 2)) b[c] = !0
            }
        return b
    }

    function ir(a, b) {
        if (!b) return b;
        for (var c = 0; c < a.length; c++)
            if (a[c] && Dc[c] && !qe[String(Dc[c][cc.Bb])]) return !0;
        return !1
    }
    var lr = function(a, b, c, d) {
            kr.push("event", [b, a], c, d)
        },
        mr = function(a, b, c, d) {
            kr.push("get", [a, b], c, d)
        },
        nr = function() {
            this.status = 1;
            this.I = {};
            this.h = {};
            this.K = {};
            this.Z = null;
            this.B = {};
            this.m = !1
        },
        or = function(a, b, c, d) {
            var e = Ha();
            this.type = a;
            this.m = e;
            this.aa = b || "";
            this.h = c;
            this.messageContext = d
        },
        pr = function() {
            this.m = {};
            this.B = {};
            this.h = []
        },
        qr = function(a, b) {
            var c = Ol(b);
            return a.m[c.U] = a.m[c.U] || new nr
        },
        rr = function(a, b, c, d) {
            if (d.aa) {
                var e = qr(a, d.aa),
                    f = e.Z;
                if (f) {
                    var g = K(c),
                        l = K(e.I[d.aa]),
                        m = K(e.B),
                        n = K(e.h),
                        p = K(a.B),
                        q = {};
                    if (hj) try {
                        q = K(Ke)
                    } catch (v) {
                        L(72)
                    }
                    var t = Ol(d.aa).prefix,
                        r = function(v) {
                            Jj(d.messageContext.eventId, t, v);
                            var w = g[N.g.nc];
                            w && F(w)
                        },
                        u = Om(Mm(Lm(Km(Im(Hm(Jm(Gm(Fm(Em(new Dm(d.messageContext.eventId, d.messageContext.priorityId), g), l), m), n), p), q), d.messageContext.eventMetadata), function() {
                            if (r) {
                                var v = r;
                                r = void 0;
                                v("2")
                            }
                        }), function() {
                            if (r) {
                                var v = r;
                                r = void 0;
                                v("3")
                            }
                        }));
                    try {
                        Jj(d.messageContext.eventId, t, "1"), wp(d.type, d.aa, u), f(d.aa, b, d.m, u)
                    } catch (v) {
                        Jj(d.messageContext.eventId, t, "4")
                    }
                }
            }
        };
    pr.prototype.register = function(a, b, c) {
        var d = qr(this, a);
        3 !== d.status && (d.Z = b, d.status = 3, c && (K(d.h, c), d.h = c), this.flush())
    };
    pr.prototype.push = function(a, b, c, d) {
        if (void 0 !== c) {
            if (!Ol(c)) return;
            if (c) {
                var e = Ol(c);
                e && 1 === qr(this, c).status && (qr(this, c).status = 2, this.push("require", [{}], e.U, {}))
            }
            qr(this, c).m && (d.deferrable = !1)
        }
        this.h.push(new or(a, c, b, d));
        d.deferrable || this.flush()
    };
    pr.prototype.flush = function(a) {
        for (var b = this, c = [], d = !1, e = {}; this.h.length;) {
            var f = this.h[0];
            if (f.messageContext.deferrable) !f.aa || qr(this, f.aa).m ? (f.messageContext.deferrable = !1, this.h.push(f)) : c.push(f), this.h.shift();
            else {
                var g = void 0;
                switch (f.type) {
                    case "require":
                        g = qr(this, f.aa);
                        if (3 !== g.status && !a) {
                            this.h.push.apply(this.h, c);
                            return
                        }
                        break;
                    case "set":
                        k(f.h[0], function(t, r) {
                            K(Na(t, r), b.B)
                        });
                        break;
                    case "config":
                        g = qr(this, f.aa);
                        e.ob = {};
                        k(f.h[0], function(t) {
                            return function(r, u) {
                                K(Na(r, u), t.ob)
                            }
                        }(e));
                        var l = !!e.ob[N.g.ed];
                        delete e.ob[N.g.ed];
                        var m = Ol(f.aa),
                            n = m.U === m.id;
                        l || (n ? g.B = {} : g.I[f.aa] = {});
                        g.m && l || rr(this, N.g.qa, e.ob, f);
                        g.m = !0;
                        n ? K(e.ob, g.B) : (K(e.ob, g.I[f.aa]), L(70));
                        d = !0;
                        break;
                    case "event":
                        g = qr(this, f.aa);
                        e.Pd = {};
                        k(f.h[0], function(t) {
                            return function(r, u) {
                                K(Na(r, u), t.Pd)
                            }
                        }(e));
                        rr(this, f.h[1], e.Pd, f);
                        break;
                    case "get":
                        g = qr(this, f.aa);
                        var p = {},
                            q = (p[N.g.Na] = f.h[0], p[N.g.cb] = f.h[1], p);
                        rr(this, N.g.Ga, q, f)
                }
                this.h.shift();
                sr(this, f)
            }
            e = {
                ob: e.ob,
                Pd: e.Pd
            }
        }
        this.h.push.apply(this.h, c);
        d && this.flush()
    };
    var sr = function(a, b) {
            if ("require" !== b.type)
                if (b.aa)
                    for (var c = qr(a, b.aa).K[b.type] || [], d = 0; d < c.length; d++) c[d]();
                else
                    for (var e in a.m)
                        if (a.m.hasOwnProperty(e)) {
                            var f = a.m[e];
                            if (f && f.K)
                                for (var g = f.K[b.type] || [], l = 0; l < g.length; l++) g[l]()
                        }
        },
        tr = function(a, b) {
            var c = kr,
                d = K(b);
            K(qr(c, a).h, d);
            qr(c, a).h = d
        },
        kr = new pr;
    var ur = {},
        vr = {},
        wr = function(a) {
            for (var b = [], c = [], d = {}, e = 0; e < a.length; d = {
                    Ud: d.Ud,
                    Rd: d.Rd
                }, e++) {
                var f = a[e];
                if (0 <= f.indexOf("-")) d.Ud = Ol(f), d.Ud && (va(fi(), function(p) {
                    return function(q) {
                        return p.Ud.U === q
                    }
                }(d)) ? b.push(f) : c.push(f));
                else {
                    var g = ur[f] || [];
                    d.Rd = {};
                    g.forEach(function(p) {
                        return function(q) {
                            return p.Rd[q] = !0
                        }
                    }(d));
                    for (var l = ei(), m = 0; m < l.length; m++)
                        if (d.Rd[l[m]]) {
                            b = b.concat(fi());
                            break
                        }
                    var n = vr[f] || [];
                    n.length && (b = b.concat(n))
                }
            }
            return {
                Sk: b,
                Uk: c
            }
        },
        xr = function(a) {
            k(ur, function(b, c) {
                var d = c.indexOf(a);
                0 <= d && c.splice(d, 1)
            })
        },
        yr = function(a) {
            k(vr, function(b, c) {
                var d = c.indexOf(a);
                0 <= d && c.splice(d, 1)
            })
        };
    var zr = "HA GF G UA AW DC MC".split(" "),
        Ar = !1,
        Br = !1;

    function Cr(a, b) {
        a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", {
            value: He()
        });
        b.eventId = a["gtm.uniqueEventId"];
        b.priorityId = a["gtm.priorityId"];
        return {
            eventId: b.eventId,
            priorityId: b.priorityId
        }
    }

    function Dr(a) {
        return !!(a && a.parent && a.context && 1 === a.context.source && 0 !== a.parent.ctid.indexOf("GTM-"))
    }
    var Er = void 0,
        Fr = void 0,
        Gr = !1;

    function Hr(a) {
        for (var b = gp(), c = fa(b), d = c.next(); !d.done; d = c.next()) {
            var e = d.value,
                f = a && a[e] || kr.B[e];
            if (f) return f
        }
    }
    var Ir = {
            config: function(a, b) {
                var c = Cr(a, b);
                if (!(2 > a.length) && h(a[1])) {
                    var d = {};
                    if (2 < a.length) {
                        if (void 0 != a[2] && !G(a[2]) || 3 < a.length) return;
                        d = a[2]
                    }
                    var e = Ol(a[1]);
                    if (e) {
                        if (!Gr) {
                            var f;
                            a: {
                                if (!U.Be) {
                                    var g = gi(ji()),
                                        l;
                                    if (Dr(g))
                                        for (var m = g.parent; m;) {
                                            l = m.isDestination;
                                            var n = gi(m);
                                            if (!Dr(n)) {
                                                f = {
                                                    ql: n,
                                                    Rk: l
                                                };
                                                break a
                                            }
                                            m = n.parent
                                        }
                                }
                                f = void 0
                            }
                            var p = f;
                            p && (Er = p.ql, Fr = p.Rk);
                            Gr = !0
                        }
                        Hj(c.eventId, "gtag.config");
                        var q = e.U,
                            t = e.id !== q;
                        if (t ? -1 === fi().indexOf(q) : -1 === ei().indexOf(q)) {
                            if (!S(61) || !d[N.g.fb]) {
                                var r = Hr(d);
                                t ? jp(q,
                                    r, {
                                        source: 2,
                                        fromContainerExecution: b.fromContainerExecution
                                    }) : (void 0 !== Er && -1 !== Er.containers.indexOf(q) && L(129), ip(q, r, !0, {
                                    source: 2,
                                    fromContainerExecution: b.fromContainerExecution
                                }))
                            }
                        } else {
                            if (se && !t && !d[N.g.ed]) {
                                var u = Br;
                                Br = !0;
                                if (u) return
                            }
                            Ar || L(43);
                            if (!b.noTargetGroup)
                                if (t) {
                                    yr(e.id);
                                    var v = e.id,
                                        w = d[N.g.se] || "default";
                                    w = String(w).split(",");
                                    for (var x = 0; x < w.length; x++) {
                                        var y = vr[w[x]] || [];
                                        vr[w[x]] = y;
                                        0 > y.indexOf(v) && y.push(v)
                                    }
                                } else {
                                    xr(e.id);
                                    var A = e.id,
                                        B = d[N.g.se] || "default";
                                    B = B.toString().split(",");
                                    for (var D = 0; D < B.length; D++) {
                                        var I = ur[B[D]] || [];
                                        ur[B[D]] = I;
                                        0 > I.indexOf(A) && I.push(A)
                                    }
                                }
                            delete d[N.g.se];
                            var H = b.eventMetadata || {};
                            H.hasOwnProperty("is_external_event") || (H.is_external_event = !b.fromContainerExecution);
                            b.eventMetadata = H;
                            delete d[N.g.nc];
                            var E = t ? [e.id] : fi();
                            Er && (L(128), Fr && L(130));
                            for (var J = 0; J < E.length; J++) {
                                var M = K(b);
                                kr.push("config", [d], E[J], M)
                            }
                        }
                    }
                }
            },
            consent: function(a, b) {
                if (3 === a.length) {
                    L(39);
                    var c = Cr(a, b),
                        d = a[1];
                    "default" === d ? oh(a[2]) : "update" === d ? ph(a[2], c) : "declare" === d ? b.fromContainerExecution &&
                        nh(a[2]) : "core_platform_services" === d && qh(a[2])
                }
            },
            event: function(a, b) {
                var c = a[1];
                if (!(2 > a.length) && h(c)) {
                    var d;
                    if (2 < a.length) {
                        if (!G(a[2]) && void 0 != a[2] || 3 < a.length) return;
                        d = a[2]
                    }
                    var e = d,
                        f = {},
                        g = (f.event = c, f);
                    e && (g.eventModel = K(e), e[N.g.nc] && (g.eventCallback = e[N.g.nc]), e[N.g.me] && (g.eventTimeout = e[N.g.me]));
                    var l = Cr(a, b),
                        m = l.eventId,
                        n = l.priorityId;
                    g["gtm.uniqueEventId"] = m;
                    n && (g["gtm.priorityId"] = n);
                    if ("optimize.callback" === c) return g.eventModel = g.eventModel || {}, g;
                    var p;
                    var q = d,
                        t = q && q[N.g.Mb];
                    void 0 ===
                        t && (t = Ne(N.g.Mb, 2), void 0 === t && (t = "default"));
                    if (h(t) || ua(t)) {
                        var r = t.toString().replace(/\s+/g, "").split(","),
                            u = wr(r),
                            v = u.Sk,
                            w = u.Uk;
                        if (w.length)
                            for (var x = Hr(q), y = 0; y < w.length; y++) {
                                var A = Ol(w[y]);
                                A && jp(A.U, x, {
                                    source: 3,
                                    fromContainerExecution: b.fromContainerExecution
                                })
                            }
                        p = Ql(v)
                    } else p = void 0;
                    var B = p;
                    if (B) {
                        Hj(m, c);
                        for (var D = [], I = 0; I < B.length; I++) {
                            var H = B[I],
                                E = K(b);
                            if (-1 !== zr.indexOf(H.prefix)) {
                                var J = K(d),
                                    M = E.eventMetadata || {};
                                M.hasOwnProperty("is_external_event") || (M.is_external_event = !E.fromContainerExecution);
                                E.eventMetadata = M;
                                delete J[N.g.nc];
                                lr(c, J, H.id, E)
                            }
                            D.push(H.id)
                        }
                        g.eventModel = g.eventModel || {};
                        0 < B.length ? g.eventModel[N.g.Mb] = D.join() : delete g.eventModel[N.g.Mb];
                        Ar || L(43);
                        S(101) && void 0 === b.noGtmEvent && b.eventMetadata && b.eventMetadata.syn_or_mod && (b.noGtmEvent = !0);
                        return b.noGtmEvent ? void 0 : g
                    }
                }
            },
            get: function(a, b) {
                L(53);
                if (4 === a.length && h(a[1]) && h(a[2]) && ra(a[3])) {
                    var c = Ol(a[1]),
                        d = String(a[2]),
                        e = a[3];
                    if (c) {
                        Ar || L(43);
                        var f = Hr();
                        if (!va(fi(), function(l) {
                                return c.U === l
                            })) jp(c.U, f, {
                            source: 4,
                            fromContainerExecution: b.fromContainerExecution
                        });
                        else if (-1 !== zr.indexOf(c.prefix)) {
                            Cr(a, b);
                            var g = {};
                            Zg(K((g[N.g.Na] = d, g[N.g.cb] = e, g)));
                            mr(d, function(l) {
                                F(function() {
                                    return e(l)
                                })
                            }, c.id, b)
                        }
                    }
                }
            },
            js: function(a, b) {
                if (2 == a.length && a[1].getTime) {
                    Ar = !0;
                    var c = Cr(a, b),
                        d = c.eventId,
                        e = c.priorityId,
                        f = {};
                    return f.event = "gtm.js", f["gtm.start"] = a[1].getTime(), f["gtm.uniqueEventId"] = d, f["gtm.priorityId"] = e, f
                }
            },
            policy: function() {},
            set: function(a, b) {
                var c;
                2 == a.length && G(a[1]) ? c = K(a[1]) : 3 == a.length && h(a[1]) && (c = {}, G(a[2]) || ua(a[2]) ? c[a[1]] = K(a[2]) : c[a[1]] = a[2]);
                if (c) {
                    var d =
                        Cr(a, b),
                        e = d.eventId,
                        f = d.priorityId;
                    K(c);
                    var g = K(c);
                    kr.push("set", [g], void 0, b);
                    c["gtm.uniqueEventId"] = e;
                    f && (c["gtm.priorityId"] = f);
                    S(30) && delete c.event;
                    b.overwriteModelFields = !0;
                    return c
                }
            }
        },
        Jr = {
            policy: !0
        };
    var Kr = function(a) {
            var b = z[me.ia].hide;
            if (b && void 0 !== b[a] && b.end) {
                b[a] = !1;
                var c = !0,
                    d;
                for (d in b)
                    if (b.hasOwnProperty(d) && !0 === b[d]) {
                        c = !1;
                        break
                    }
                c && (b.end(), b.end = null)
            }
        },
        Lr = function(a) {
            var b = z[me.ia],
                c = b && b.hide;
            c && c.end && (c[a] = !0)
        };
    var Mr = !1,
        Nr = [];

    function Or() {
        if (!Mr) {
            Mr = !0;
            for (var a = 0; a < Nr.length; a++) F(Nr[a])
        }
    }
    var Pr = function(a) {
        Mr ? F(a) : Nr.push(a)
    };
    var fs = function(a) {
        if (es(a)) return a;
        this.h = a
    };
    fs.prototype.getUntrustedMessageValue = function() {
        return this.h
    };
    var es = function(a) {
        return !a || "object" !== $b(a) || G(a) ? !1 : "getUntrustedMessageValue" in a
    };
    fs.prototype.getUntrustedMessageValue = fs.prototype.getUntrustedMessageValue;
    var gs = 0,
        hs = {},
        is = [],
        js = [],
        ks = !1,
        ls = !1;

    function ms(a, b) {
        return a.messageContext.eventId - b.messageContext.eventId || a.messageContext.priorityId - b.messageContext.priorityId
    }
    var ns = function(a) {
            return z[me.ia].push(a)
        },
        os = function(a, b) {
            var c = ne[me.ia],
                d = c ? c.subscribers : 1,
                e = 0,
                f = !1,
                g = void 0;
            b && (g = z.setTimeout(function() {
                f || (f = !0, a());
                g = void 0
            }, b));
            return function() {
                ++e === d && (g && (z.clearTimeout(g), g = void 0), f || (a(), f = !0))
            }
        };

    function ps(a, b) {
        var c = a._clear || b.overwriteModelFields;
        k(a, function(e, f) {
            "_clear" !== e && (c && Qe(e), Qe(e, f))
        });
        Ce || (Ce = a["gtm.start"]);
        var d = a["gtm.uniqueEventId"];
        if (!a.event) return !1;
        "number" !== typeof d && (d = He(), a["gtm.uniqueEventId"] = d, Qe("gtm.uniqueEventId", d));
        return jr(a)
    }

    function qs(a) {
        if (null == a || "object" !== typeof a) return !1;
        if (a.event) return !0;
        if (Aa(a)) {
            var b = a[0];
            if ("config" === b || "event" === b || "js" === b || "get" === b) return !0
        }
        return !1
    }

    function rs() {
        var a;
        if (js.length) a = js.shift();
        else if (is.length) a = is.shift();
        else return;
        var b;
        var c = a;
        if (ks || !qs(c.message)) b = c;
        else {
            ks = !0;
            var d = c.message["gtm.uniqueEventId"];
            "number" !== typeof d && (d = c.message["gtm.uniqueEventId"] = He());
            var e = {},
                f = {
                    message: (e.event = "gtm.init_consent", e["gtm.uniqueEventId"] = d - 2, e),
                    messageContext: {
                        eventId: d - 2
                    }
                },
                g = {},
                l = {
                    message: (g.event = "gtm.init", g["gtm.uniqueEventId"] = d - 1, g),
                    messageContext: {
                        eventId: d - 1
                    }
                };
            is.unshift(l, c);
            if (hj && U.C) {
                var m, n = gi(ji());
                m = n && n.context;
                var p, q = wf(z.location.href);
                p = q.hostname + q.pathname;
                var t = m && m.fromContainerExecution,
                    r = m && m.source,
                    u = U.C,
                    v = U.rb,
                    w = U.Be;
                sj || (sj = p);
                rj.push(u + ";" + v + ";" + (t ? 1 : 0) + ";" + (r || 0) + ";" + (w ? 1 : 0))
            }
            b = f
        }
        return b
    }

    function ss() {
        for (var a = !1, b; !ls && (b = rs());) {
            ls = !0;
            delete Ke.eventModel;
            Me();
            var c = b,
                d = c.message,
                e = c.messageContext;
            if (null == d) ls = !1;
            else {
                if (e.fromContainerExecution)
                    for (var f = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], g = 0; g < f.length; g++) {
                        var l = f[g],
                            m = Ne(l, 1);
                        if (ua(m) || G(m)) m = K(m);
                        Le[l] = m
                    }
                try {
                    if (ra(d)) try {
                        d.call(Oe)
                    } catch (D) {} else if (ua(d)) {
                        var n = d;
                        if (h(n[0])) {
                            var p = n[0].split("."),
                                q = p.pop(),
                                t = n.slice(1),
                                r = Ne(p.join("."), 2);
                            if (null != r) try {
                                r[q].apply(r, t)
                            } catch (D) {}
                        }
                    } else {
                        var u =
                            void 0,
                            v = !1;
                        if (Aa(d)) {
                            a: {
                                if (d.length && h(d[0])) {
                                    var w = Ir[d[0]];
                                    if (w && (!e.fromContainerExecution || !Jr[d[0]])) {
                                        u = w(d, e);
                                        break a
                                    }
                                }
                                u = void 0
                            }(v = u && "set" === d[0] && !!u.event) && L(101)
                        }
                        else u = d;
                        if (u) {
                            var x = ps(u, e);
                            a = x || a;
                            v && x && L(113)
                        }
                    }
                } finally {
                    e.fromContainerExecution && Me(!0);
                    var y = d["gtm.uniqueEventId"];
                    if ("number" === typeof y) {
                        for (var A = hs[String(y)] || [], B = 0; B < A.length; B++) js.push(ts(A[B]));
                        A.length && js.sort(ms);
                        delete hs[String(y)];
                        y > gs && (gs = y)
                    }
                    ls = !1
                }
            }
        }
        return !a
    }

    function us() {
        if (S(70)) {
            var a = bo(Xn.F.bf, U.C);
            co(a);
            if (vs()) {
                var b = bo(Xn.F.Bg, U.C);
                if (co(b)) {
                    var c = bo(Xn.F.df, U.C);
                    eo(b, c)
                }
            }
        }
        var d = ss();
        try {
            Kr(U.C)
        } catch (e) {}
        return d
    }

    function Pq(a) {
        if (gs < a.notBeforeEventId) {
            var b = String(a.notBeforeEventId);
            hs[b] = hs[b] || [];
            hs[b].push(a)
        } else js.push(ts(a)), js.sort(ms), F(function() {
            ls || ss()
        })
    }

    function ts(a) {
        return {
            message: a.message,
            messageContext: a.messageContext
        }
    }
    var ws = function() {
            function a(g) {
                var l = {};
                if (es(g)) {
                    var m = g;
                    g = es(m) ? m.getUntrustedMessageValue() : void 0;
                    l.fromContainerExecution = !0
                }
                return {
                    message: g,
                    messageContext: l
                }
            }
            var b = Fb(me.ia, []),
                c = ne[me.ia] = ne[me.ia] || {};
            !0 === c.pruned && L(83);
            hs = Nq().get();
            Qq();
            Dp(function() {
                if (!c.gtmDom) {
                    c.gtmDom = !0;
                    var g = {};
                    b.push((g.event = "gtm.dom", g))
                }
            });
            Pr(function() {
                if (!c.gtmLoad) {
                    c.gtmLoad = !0;
                    var g = {};
                    b.push((g.event = "gtm.load", g))
                }
            });
            c.subscribers = (c.subscribers || 0) + 1;
            var d = b.push;
            b.push = function() {
                var g;
                if (0 < ne.SANDBOXED_JS_SEMAPHORE) {
                    g = [];
                    for (var l = 0; l < arguments.length; l++) g[l] = new fs(arguments[l])
                } else g = [].slice.call(arguments, 0);
                var m = g.map(function(t) {
                    return a(t)
                });
                is.push.apply(is, m);
                var n = d.apply(b, g),
                    p = Math.max(100, Number("1000") || 300);
                if (this.length > p)
                    for (L(4), c.pruned = !0; this.length > p;) this.shift();
                var q = "boolean" !== typeof n || n;
                return ss() && q
            };
            var e = b.slice(0).map(function(g) {
                return a(g)
            });
            is.push.apply(is, e);
            if (vs()) {
                if (S(70)) {
                    var f = bo(Xn.F.df, U.C);
                    co(f)
                }
                F(us)
            }
        },
        vs = function() {
            var a = !0;
            return a
        };

    function xs(a) {
        if (null == a || 0 === a.length) return !1;
        var b = Number(a),
            c = Ha();
        return b < c + 3E5 && b > c - 9E5
    }

    function ys(a) {
        return a && 0 === a.indexOf("pending:") ? xs(a.substr(8)) : !1
    };
    var Ic = {};
    Ic.Ae = new String("undefined");
    var Us = function(a) {
        this.h = function(b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d] === Ic.Ae ? b : a[d]);
            return c.join("")
        }
    };
    Us.prototype.toString = function() {
        return this.h("undefined")
    };
    Us.prototype.valueOf = Us.prototype.toString;
    Ic.Qj = Us;
    Ic.Hf = {};
    Ic.dk = function(a) {
        return new Us(a)
    };
    var Vs = {};
    Ic.ol = function(a, b) {
        var c = He();
        Vs[c] = [a, b];
        return c
    };
    Ic.Xh = function(a) {
        var b = a ? 0 : 1;
        return function(c) {
            var d = Vs[c];
            if (d && "function" === typeof d[b]) d[b]();
            Vs[c] = void 0
        }
    };
    Ic.Gk = function(a) {
        for (var b = !1, c = !1, d = 2; d < a.length; d++) b =
            b || 8 === a[d], c = c || 16 === a[d];
        return b && c
    };
    Ic.bl = function(a) {
        if (a === Ic.Ae) return a;
        var b = He();
        Ic.Hf[b] = a;
        return 'google_tag_manager["' + U.C + '"].macro(' + b + ")"
    };
    Ic.Tk = function(a, b, c) {
        a instanceof Ic.Qj && (a = a.h(Ic.ol(b, c)), b = qa);
        return {
            Ak: a,
            M: b
        }
    };
    var Ws = function(a, b, c) {
            var d = {
                event: b,
                "gtm.element": a,
                "gtm.elementClasses": Vb(a, "className"),
                "gtm.elementId": a["for"] || Qb(a, "id") || "",
                "gtm.elementTarget": a.formTarget || Vb(a, "target") || ""
            };
            c && (d["gtm.triggers"] = c.join(","));
            d["gtm.elementUrl"] = (a.attributes && a.attributes.formaction ? a.formAction : "") || a.action || Vb(a, "href") || a.src || a.code || a.codebase || "";
            return d
        },
        Xs = function(a) {
            ne.hasOwnProperty("autoEventsSettings") || (ne.autoEventsSettings = {});
            var b = ne.autoEventsSettings;
            b.hasOwnProperty(a) || (b[a] = {});
            return b[a]
        },
        Ys = function(a, b, c) {
            Xs(a)[b] = c
        },
        Zs = function(a, b, c, d) {
            var e = Xs(a),
                f = Ia(e, b, d);
            e[b] = c(f)
        },
        $s = function(a, b, c) {
            var d = Xs(a);
            return Ia(d, b, c)
        };
    var ft = !!z.MutationObserver,
        gt = void 0,
        ht = function(a) {
            if (!gt) {
                var b = function() {
                    var c = C.body;
                    if (c)
                        if (ft)(new MutationObserver(function() {
                            for (var e = 0; e < gt.length; e++) F(gt[e])
                        })).observe(c, {
                            childList: !0,
                            subtree: !0
                        });
                        else {
                            var d = !1;
                            Ob(c, "DOMNodeInserted", function() {
                                d || (d = !0, F(function() {
                                    d = !1;
                                    for (var e = 0; e < gt.length; e++) F(gt[e])
                                }))
                            })
                        }
                };
                gt = [];
                C.body ? b() : F(b)
            }
            gt.push(a)
        };
    var st = function(a, b, c) {
        function d() {
            var g = a();
            f += e ? (Ha() - e) * g.playbackRate / 1E3 : 0;
            e = Ha()
        }
        var e = 0,
            f = 0;
        return {
            createEvent: function(g, l, m) {
                var n = a(),
                    p = n.Zh,
                    q = void 0 !== m ? Math.round(m) : void 0 !== l ? Math.round(n.Zh * l) : Math.round(n.ek),
                    t = void 0 !== l ? Math.round(100 * l) : 0 >= p ? 0 : Math.round(q / p * 100),
                    r = C.hidden ? !1 : .5 <= ff(c);
                d();
                var u = void 0;
                void 0 !== b && (u = [b]);
                var v = Ws(c, "gtm.video", u);
                v["gtm.videoProvider"] = "youtube";
                v["gtm.videoStatus"] = g;
                v["gtm.videoUrl"] = n.url;
                v["gtm.videoTitle"] = n.title;
                v["gtm.videoDuration"] =
                    Math.round(p);
                v["gtm.videoCurrentTime"] = Math.round(q);
                v["gtm.videoElapsedTime"] = Math.round(f);
                v["gtm.videoPercent"] = t;
                v["gtm.videoVisible"] = r;
                return v
            },
            sl: function() {
                e = Ha()
            },
            Kf: function() {
                d()
            }
        }
    };
    var tt = z.clearTimeout,
        ut = z.setTimeout,
        V = function(a, b, c, d) {
            if (ai()) {
                b && F(b)
            } else return Kb(a, b, c, d)
        },
        vt = function() {
            return new Date
        },
        wt = function() {
            return z.location.href
        },
        xt = function(a) {
            return uf(wf(a), "fragment")
        },
        zt = function(a) {
            return vf(wf(a))
        },
        At = function(a, b) {
            return Ne(a, b || 2)
        },
        Bt = function(a, b, c) {
            var d;
            b ? (a.eventCallback = b, c && (a.eventTimeout = c), d = ns(a)) : d = ns(a);
            return d
        },
        Ct = function(a, b) {
            z[a] = b
        },
        W = function(a, b, c) {
            b &&
                (void 0 === z[a] || c && !z[a]) && (z[a] = b);
            return z[a]
        },
        Dt = function(a, b, c) {
            return Ih(a, b, void 0 === c ? !0 : !!c)
        },
        Et = function(a, b, c) {
            return 0 === Rh(a, b, c)
        },
        Ft = function(a, b) {
            if (ai()) {
                b && F(b)
            } else Mb(a, b)
        },
        Gt = function(a) {
            return !!$s(a, "init", !1)
        },
        Ht = function(a) {
            Ys(a, "init", !0)
        },
        It = function(a, b, c) {
            hj && (bc(a) || Kj(c, b, a))
        };
    var Jt = Ic.Tk;

    function fu(a, b) {
        function c(g) {
            var l = wf(g),
                m = uf(l, "protocol"),
                n = uf(l, "host", !0),
                p = uf(l, "port"),
                q = uf(l, "path").toLowerCase().replace(/\/$/, "");
            if (void 0 === m || "http" === m && "80" === p || "https" === m && "443" === p) m = "web", p = "default";
            return [m, n, p, q]
        }
        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
            if (d[f] !== e[f]) return !1;
        return !0
    }

    function gu(a) {
        return hu(a) ? 1 : 0
    }

    function hu(a) {
        var b = a.arg0,
            c = a.arg1;
        if (a.any_of && Array.isArray(c)) {
            for (var d = 0; d < c.length; d++) {
                var e = K(a, {});
                K({
                    arg1: c[d],
                    any_of: void 0
                }, e);
                if (gu(e)) return !0
            }
            return !1
        }
        switch (a["function"]) {
            case "_cn":
                return 0 <= String(b).indexOf(String(c));
            case "_css":
                var f;
                a: {
                    if (b) try {
                        for (var g = 0; g < jd.length; g++) {
                            var l = jd[g];
                            if (b[l]) {
                                f = b[l](c);
                                break a
                            }
                        }
                    } catch (m) {}
                    f = !1
                }
                return f;
            case "_ew":
                return kd(b, c);
            case "_eq":
                return String(b) === String(c);
            case "_ge":
                return Number(b) >= Number(c);
            case "_gt":
                return Number(b) > Number(c);
            case "_lc":
                return 0 <= String(b).split(",").indexOf(String(c));
            case "_le":
                return Number(b) <= Number(c);
            case "_lt":
                return Number(b) < Number(c);
            case "_re":
                return md(b, c, a.ignore_case);
            case "_sw":
                return 0 === String(b).indexOf(String(c));
            case "_um":
                return fu(b, c)
        }
        return !1
    };
    Ye();

    function Du() {
        return z.gaGlobal = z.gaGlobal || {}
    }
    var Eu = function() {
            var a = Du();
            a.hid = a.hid || wa();
            return a.hid
        },
        Fu = function(a, b) {
            var c = Du();
            if (void 0 == c.vid || b && !c.from_cookie) c.vid = a, c.from_cookie = b
        };
    var bv = function() {
            var a = !0;
            aj(7) && aj(9) && aj(10) || (a = !1);
            return a
        },
        cv = function() {
            var a = !0;
            aj(3) && aj(4) || (a = !1);
            return a
        };
    var Dv = window,
        Ev = document,
        Fv = function(a) {
            var b = Dv._gaUserPrefs;
            if (b && b.ioo && b.ioo() || Ev.documentElement.hasAttribute("data-google-analytics-opt-out") || a && !0 === Dv["ga-disable-" + a]) return !0;
            try {
                var c = Dv.external;
                if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0
            } catch (f) {}
            for (var d = Ch("AMP_TOKEN", String(Ev.cookie), !0), e = 0; e < d.length; e++)
                if ("$OPT_OUT" == d[e]) return !0;
            return Ev.getElementById("__gaOptOutExtension") ? !0 : !1
        };

    function Lv(a) {
        k(a, function(c) {
            "_" === c.charAt(0) && delete a[c]
        });
        var b = a[N.g.Pa] || {};
        k(b, function(c) {
            "_" === c.charAt(0) && delete b[c]
        })
    };
    var Uv = function(a, b) {};

    function Tv(a, b) {
        var c = function() {};
        return c
    }

    function Vv(a, b, c) {};
    var Wv = function(a, b) {
            var c;
            c = b ? [On, Pn, Rn, Bn, Fn, Tn, Gn, Sn, Mn, Cn, Wn, Hn, Qn, zn, Un, wn] : [An, rn, Dn, sn, tn, un, vn, In, Jn, Ln, Nn, En, Kn, yn, Vn];
            for (var d = 0; d < c.length && (c[d](a), !a.isAborted); d++);
        },
        Xv = function(a, b, c, d) {
            var e = new cm(b, c, d);
            e.metadata.hit_type = a;
            e.metadata.speculative = !0;
            e.metadata.event_start_timestamp_ms = Ha();
            e.metadata.speculative_in_message = d.eventMetadata.speculative;
            return e
        },
        Yv = function(a) {
            var b = a.indexOf("/"),
                c = 3 <= b,
                d = a.substring(3, c ? b : a.length);
            return {
                id: a,
                prefix: "AW",
                U: "AW-" + d,
                J: [d, c ? a.substring(b +
                    1) : void 0]
            }
        },
        Zv = function(a, b, c, d) {
            function e() {
                for (var q = 0; q < g.length; q++) {
                    var t = g[q];
                    t.isAborted || (Wv(g[q], !0), t.metadata.speculative || t.isAborted || Xo(t))
                }
            }
            var f = Ol(a);
            !f && d.D && (f = Yv(a));
            if (f) {
                var g = [];
                if (d.eventMetadata.hit_type_override) {
                    var l = d.eventMetadata.hit_type_override;
                    Array.isArray(l) || (l = [l]);
                    for (var m = 0; m < l.length; m++) {
                        var n = Xv(l[m], f, b, d);
                        n.metadata.speculative = !1;
                        g.push(n)
                    }
                } else b === N.g.qa && g.push(Xv("landing_page", f, b, d)), g.push(Xv("conversion", f, b, d)), g.push(Xv("user_data_lead",
                    f, b, d)), g.push(Xv("user_data_web", f, b, d)), g.push(Xv("remarketing", f, b, d));
                for (var p = 0; p < g.length; p++) Wv(g[p], !1);
                Xg(function() {
                    for (var q = [], t = [], r = 0; r < g.length; r++) {
                        var u = g[r];
                        q.push(u.isAborted);
                        t.push(u.metadata.speculative)
                    }
                    e();
                    Pg(N.g.H) || Yg(function(v) {
                        for (var w = v.consentEventId, x = v.consentPriorityId, y = 0; y < g.length; y++) {
                            var A = g[y];
                            A.metadata.consent_updated = !0;
                            A.metadata.speculative = t[y];
                            A.metadata.event_start_timestamp_ms = Ha();
                            A.isAborted = q[y];
                            A.metadata.consent_event_id = w;
                            A.metadata.consent_priority_id =
                                x
                        }
                        e()
                    }, [N.g.H])
                }, [N.g.H])
            }
        };
    var Ow = function(a, b) {
            if (!b.D) {
                var c = T(b, N.g.Na),
                    d = T(b, N.g.cb),
                    e = T(b, c);
                if (void 0 === e) {
                    var f = void 0;
                    Lw.hasOwnProperty(c) ? f = Lw[c] : Mw.hasOwnProperty(c) && (f = Mw[c]);
                    1 === f && (f = Nw(c));
                    h(f) ? Qp()(function() {
                        var g = Qp().getByName(a).get(f);
                        d(g)
                    }) : d(void 0)
                } else d(e)
            }
        },
        Pw = function(a, b) {
            var c = a[N.g.Jb],
                d = b + ".",
                e = a[N.g.O] || "",
                f = void 0 === c ? !!a.use_anchor : "fragment" === c,
                g = !!a[N.g.yb];
            e = String(e).replace(/\s+/g, "").split(",");
            var l = Qp();
            l(d + "require", "linker");
            l(d + "linker:autoLink", e, f, g)
        },
        Tw = function(a, b, c) {
            if (Tg() &&
                (!c.D || !Qw[a])) {
                var d = !rh(N.g.N),
                    e = function(f) {
                        var g, l, m = Qp(),
                            n = Rw(b, "", c),
                            p, q = n.createOnlyFields._useUp;
                        if (c.D || Sw(b, n.createOnlyFields)) {
                            c.D && (g = "gtm" + He(), l = n.createOnlyFields, n.gtmTrackerName && (l.name = g));
                            m(function() {
                                var r = m.getByName(b);
                                r && (p = r.get("clientId"));
                                c.D || m.remove(b)
                            });
                            m("create", a, c.D ? l : n.createOnlyFields);
                            d &&
                                rh(N.g.N) && (d = !1, m(function() {
                                    var r = Qp().getByName(c.D ? g : b);
                                    !r || r.get("clientId") == p && q || (c.D ? (n.fieldsToSet["&gcu"] = "1", n.fieldsToSet["&sst.gcut"] = je[f]) : (n.fieldsToSend["&gcu"] = "1", n.fieldsToSend["&sst.gcut"] = je[f]), r.set(n.fieldsToSet), c.D ? r.send("pageview") : r.send("pageview", n.fieldsToSend))
                                }));
                            c.D && m(function() {
                                m.remove(g)
                            })
                        }
                    };
                zh(function() {
                    return e(N.g.N)
                }, N.g.N);
                zh(function() {
                    return e(N.g.H)
                }, N.g.H);
                c.D && (Qw[a] = !0)
            }
        },
        Uw = function(a, b) {
            ep() && b && (a[N.g.Hb] = b)
        },
        cx = function(a, b, c) {
            function d() {
                var E =
                    T(c, N.g.kc);
                l(function() {
                    if (!c.D && G(E)) {
                        var J = u.fieldsToSend,
                            M = m().getByName(n),
                            Y;
                        for (Y in E)
                            if (E.hasOwnProperty(Y) && /^(dimension|metric)\d+$/.test(Y) && void 0 != E[Y]) {
                                var aa = M.get(Nw(E[Y]));
                                Vw(J, Y, aa)
                            }
                    }
                })
            }

            function e() {
                if (u.displayfeatures) {
                    var E = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
                    p("require", "displayfeatures", void 0, {
                        cookieName: E
                    })
                }
            }
            var f = a,
                g = "https://www.google-analytics.com/analytics.js",
                l = c.D ? Sp(T(c, "gaFunctionName")) : Sp();
            if (ra(l)) {
                var m = Qp,
                    n;
                c.D ? n = T(c, "name") || T(c, "gtmTrackerName") : n = "gtag_" +
                    f.split("-").join("_");
                var p = function(E) {
                        var J = [].slice.call(arguments, 0);
                        J[0] = n ? n + "." + J[0] : "" + J[0];
                        l.apply(window, J)
                    },
                    q = function(E) {
                        var J = function(da, ea) {
                                for (var Q = 0; ea && Q < ea.length; Q++) p(da, ea[Q])
                            },
                            M = c.D,
                            Y = M ? Ww(u) : Xw(b, c);
                        if (Y) {
                            var aa = {};
                            Uw(aa, E);
                            p("require", "ec", "ec.js", aa);
                            M && Y.Pf && p("set", "&cu", Y.Pf);
                            var R = Y.action;
                            if (M || "impressions" === R)
                                if (J("ec:addImpression", Y.gi), !M) return;
                            if ("promo_click" === R || "promo_view" === R || M && Y.Jd) {
                                var P = Y.Jd;
                                J("ec:addPromo", P);
                                if (P && 0 < P.length && "promo_click" === R) {
                                    M ?
                                        p("ec:setAction", R, Y.Sa) : p("ec:setAction", R);
                                    return
                                }
                                if (!M) return
                            }
                            "promo_view" !== R && "impressions" !== R && (J("ec:addProduct", Y.Sb), p("ec:setAction", R, Y.Sa))
                        }
                    },
                    t = function(E) {
                        if (E) {
                            var J = {};
                            if (G(E))
                                for (var M in Yw) Yw.hasOwnProperty(M) && Zw(Yw[M], M, E[M], J);
                            Uw(J, x);
                            p("require", "linkid", J)
                        }
                    },
                    r = function() {
                        if (ai()) {} else {
                            var E = T(c, N.g.sj);
                            E && (p("require", E, {
                                dataLayer: me.ia
                            }), p("require", "render"))
                        }
                    },
                    u = Rw(n, b, c),
                    v = function(E, J, M) {
                        M &&
                            (J = "" + J);
                        u.fieldsToSend[E] = J
                    };
                !c.D && Sw(n, u.createOnlyFields) && (l(function() {
                    m() && m().remove(n)
                }), $w[n] = !1);
                l("create", f, u.createOnlyFields);
                if (u.createOnlyFields[N.g.Hb] && !c.D) {
                    var w = ve || xe ? dp(u.createOnlyFields[N.g.Hb], "/analytics.js") : void 0;
                    w && (g = w)
                }
                var x = c.D ? u.fieldsToSet[N.g.Hb] : u.createOnlyFields[N.g.Hb];
                if (x) {
                    var y = c.D ? u.fieldsToSet[N.g.oe] : u.createOnlyFields[N.g.oe];
                    y && !$w[n] && ($w[n] = !0, l(yq(n, y)))
                }
                c.D ? u.enableRecaptcha && p("require", "recaptcha", "recaptcha.js") : (d(), t(u.linkAttribution));
                var A =
                    u[N.g.ya];
                A && A[N.g.O] && Pw(A, n);
                p("set", u.fieldsToSet);
                if (c.D) {
                    if (u.enableLinkId) {
                        var B = {};
                        Uw(B, x);
                        p("require", "linkid", "linkid.js", B)
                    }
                    Tg() && Tw(f, n, c)
                }
                if (b === N.g.hc)
                    if (c.D) {
                        e();
                        if (u.remarketingLists) {
                            var D = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
                            p("require", "adfeatures", {
                                cookieName: D
                            })
                        }
                        q(x);
                        p("send", "pageview");
                        u.createOnlyFields._useUp && Tp(n + ".")
                    } else r(), p("send", "pageview", u.fieldsToSend);
                else b === N.g.qa ? (r(), bm(f, c), T(c, N.g.ib) && (Dl(["aw", "dc"]), Tp(n + ".")), 0 != u.sendPageView && p("send", "pageview",
                    u.fieldsToSend), Tw(f, n, c)) : b === N.g.Ga ? Ow(n, c) : "screen_view" === b ? p("send", "screenview", u.fieldsToSend) : "timing_complete" === b ? (u.fieldsToSend.hitType = "timing", v("timingCategory", u.eventCategory, !0), c.D ? v("timingVar", u.timingVar, !0) : v("timingVar", u.name, !0), v("timingValue", Ba(u.value)), void 0 !== u.eventLabel && v("timingLabel", u.eventLabel, !0), p("send", u.fieldsToSend)) : "exception" === b ? p("send", "exception", u.fieldsToSend) : "" === b && c.D || ("track_social" === b && c.D ? (u.fieldsToSend.hitType = "social", v("socialNetwork",
                    u.socialNetwork, !0), v("socialAction", u.socialAction, !0), v("socialTarget", u.socialTarget, !0)) : ((c.D || ax[b]) && q(x), c.D && e(), u.fieldsToSend.hitType = "event", v("eventCategory", u.eventCategory, !0), v("eventAction", u.eventAction || b, !0), void 0 !== u.eventLabel && v("eventLabel", u.eventLabel, !0), void 0 !== u.value && v("eventValue", Ba(u.value))), p("send", u.fieldsToSend));
                if (!bx && !c.D) {
                    bx = !0;
                    var I = function() {
                            c.P()
                        },
                        H = function() {
                            m().loaded || I()
                        };
                    ai() ? F(H) : Kb(g, H, I)
                }
            } else F(c.P)
        },
        dx = function(a, b, c, d) {
            Ah(function() {
                cx(a,
                    b, d)
            }, [N.g.N, N.g.H])
        },
        fx = function(a) {
            function b(e) {
                function f(l, m) {
                    for (var n = 0; n < m.length; n++) {
                        var p = m[n];
                        if (e[p]) {
                            g[l] = e[p];
                            break
                        }
                    }
                }
                var g = K(e);
                f("id", ["id", "item_id", "promotion_id"]);
                f("name", ["name", "item_name", "promotion_name"]);
                f("brand", ["brand", "item_brand"]);
                f("variant", ["variant", "item_variant"]);
                f("list", ["list_name", "item_list_name"]);
                f("position", ["list_position", "creative_slot", "index"]);
                (function() {
                    if (e.category) g.category = e.category;
                    else {
                        for (var l = "", m = 0; m < ex.length; m++) void 0 !== e[ex[m]] &&
                            (l && (l += "/"), l += e[ex[m]]);
                        l && (g.category = l)
                    }
                })();
                f("listPosition", ["list_position"]);
                f("creative", ["creative_name"]);
                f("list", ["list_name"]);
                f("position", ["list_position", "creative_slot"]);
                return g
            }
            for (var c = [], d = 0; a && d < a.length; d++) a[d] && G(a[d]) && c.push(b(a[d]));
            return c.length ? c : void 0
        },
        gx = function(a) {
            return rh(a)
        },
        hx = !1;
    var bx, $w = {},
        Qw = {},
        ix = {},
        jx = Object.freeze((ix.page_hostname = 1, ix[N.g.V] =
            1, ix[N.g.ub] = 1, ix[N.g.La] = 1, ix[N.g.Ba] = 1, ix[N.g.Ma] = 1, ix[N.g.jc] = 1, ix[N.g.Uc] = 1, ix[N.g.Ia] = 1, ix[N.g.ab] = 1, ix[N.g.ja] = 1, ix[N.g.Kb] = 1, ix[N.g.Ca] = 1, ix[N.g.zb] = 1, ix)),
        kx = {},
        Lw = Object.freeze((kx.client_storage = "storage", kx.sample_rate = 1, kx.site_speed_sample_rate = 1, kx.store_gac = 1, kx.use_amp_client_id = 1, kx[N.g.Ya] = 1, kx[N.g.wa] = "storeGac", kx[N.g.La] = 1, kx[N.g.Ba] = 1, kx[N.g.Ma] = 1, kx[N.g.jc] = 1, kx[N.g.Uc] = 1, kx[N.g.ab] = 1, kx)),
        lx = {},
        mx = Object.freeze((lx._cs = 1, lx._useUp = 1, lx.allowAnchor = 1, lx.allowLinker = 1, lx.alwaysSendReferrer =
            1, lx.clientId = 1, lx.cookieDomain = 1, lx.cookieExpires = 1, lx.cookieFlags = 1, lx.cookieName = 1, lx.cookiePath = 1, lx.cookieUpdate = 1, lx.legacyCookieDomain = 1, lx.legacyHistoryImport = 1, lx.name = 1, lx.sampleRate = 1, lx.siteSpeedSampleRate = 1, lx.storage = 1, lx.storeGac = 1, lx.useAmpClientId = 1, lx._cd2l = 1, lx)),
        nx = Object.freeze({
            anonymize_ip: 1
        }),
        ox = {},
        Mw = Object.freeze((ox.campaign = {
                content: "campaignContent",
                id: "campaignId",
                medium: "campaignMedium",
                name: "campaignName",
                source: "campaignSource",
                term: "campaignKeyword"
            }, ox.app_id = 1,
            ox.app_installer_id = 1, ox.app_name = 1, ox.app_version = 1, ox.description = "exDescription", ox.fatal = "exFatal", ox.language = 1, ox.page_hostname = "hostname", ox.transport_type = "transport", ox[N.g.ra] = "currencyCode", ox[N.g.kh] = 1, ox[N.g.ja] = "location", ox[N.g.Kb] = "page", ox[N.g.Ca] = "referrer", ox[N.g.zb] = "title", ox[N.g.yf] = 1, ox[N.g.za] = 1, ox)),
        px = {},
        qx = Object.freeze((px.content_id = 1, px.event_action = 1, px.event_category = 1, px.event_label = 1, px.link_attribution = 1, px.name = 1, px[N.g.ya] = 1, px[N.g.jh] = 1, px[N.g.Oa] = 1, px[N.g.ba] =
            1, px)),
        rx = Object.freeze({
            displayfeatures: 1,
            enableLinkId: 1,
            enableRecaptcha: 1,
            eventAction: 1,
            eventCategory: 1,
            eventLabel: 1,
            gaFunctionName: 1,
            gtmEcommerceData: 1,
            gtmTrackerName: 1,
            linker: 1,
            remarketingLists: 1,
            socialAction: 1,
            socialNetwork: 1,
            socialTarget: 1,
            timingVar: 1,
            value: 1
        }),
        ex = Object.freeze(["item_category", "item_category2", "item_category3", "item_category4", "item_category5"]),
        sx = {},
        Yw = Object.freeze((sx.levels = 1, sx[N.g.Ba] = "duration", sx[N.g.jc] = 1, sx)),
        tx = {},
        ux = Object.freeze((tx.anonymize_ip = 1, tx.fatal = 1,
            tx.send_page_view = 1, tx.store_gac = 1, tx.use_amp_client_id = 1, tx[N.g.wa] = 1, tx[N.g.kh] = 1, tx)),
        Zw = function(a, b, c, d) {
            if (void 0 !== c)
                if (ux[b] && (c = Ca(c)), "anonymize_ip" !== b || c || (c = void 0), 1 === a) d[Nw(b)] = c;
                else if (h(a)) d[a] = c;
            else
                for (var e in a) a.hasOwnProperty(e) && void 0 !== c[e] && (d[a[e]] = c[e])
        },
        Nw = function(a) {
            return a && h(a) ? a.replace(/(_[a-z])/g, function(b) {
                return b[1].toUpperCase()
            }) : a
        },
        vx = {},
        ax = Object.freeze((vx.checkout_progress = 1, vx.select_content = 1, vx.set_checkout_option = 1, vx[N.g.Zb] = 1, vx[N.g.ac] = 1, vx[N.g.Eb] =
            1, vx[N.g.bc] = 1, vx[N.g.Wa] = 1, vx[N.g.sb] = 1, vx[N.g.Xa] = 1, vx[N.g.Ea] = 1, vx[N.g.fc] = 1, vx[N.g.Fa] = 1, vx)),
        wx = {},
        xx = Object.freeze((wx.checkout_progress = 1, wx.set_checkout_option = 1, wx[N.g.Hg] = 1, wx[N.g.Ig] = 1, wx[N.g.Zb] = 1, wx[N.g.ac] = 1, wx[N.g.Jg] = 1, wx[N.g.Eb] = 1, wx[N.g.Ea] = 1, wx[N.g.fc] = 1, wx[N.g.Kg] = 1, wx)),
        yx = {},
        zx = Object.freeze((yx.generate_lead = 1, yx.login = 1, yx.search = 1, yx.select_content = 1, yx.share = 1, yx.sign_up = 1, yx.view_search_results = 1, yx[N.g.bc] = 1, yx[N.g.Wa] = 1, yx[N.g.sb] = 1, yx[N.g.Xa] = 1, yx[N.g.Fa] = 1, yx)),
        Ax = function(a) {
            var b =
                "general";
            xx[a] ? b = "ecommerce" : zx[a] ? b = "engagement" : "exception" === a && (b = "error");
            return b
        },
        Bx = {},
        Cx = Object.freeze((Bx.view_search_results = 1, Bx[N.g.Wa] = 1, Bx[N.g.Xa] = 1, Bx[N.g.Fa] = 1, Bx)),
        Vw = function(a, b, c) {
            a.hasOwnProperty(b) || (a[b] = c)
        },
        Dx = function(a) {
            if (ua(a)) {
                for (var b = [], c = 0; c < a.length; c++) {
                    var d = a[c];
                    if (void 0 != d) {
                        var e = d.id,
                            f = d.variant;
                        void 0 != e && void 0 != f && b.push(String(e) + "." + String(f))
                    }
                }
                return 0 < b.length ? b.join("!") : void 0
            }
        },
        Rw = function(a, b, c) {
            var d = function(M) {
                    return T(c, M)
                },
                e = {},
                f = {},
                g = {},
                l = {},
                m = Dx(d(N.g.qj));
            !c.D && m && Vw(f, "exp", m);
            g["&gtm"] = ni(!0);
            S(69) && !c.D && (g._no_slc = !0);
            Tg() && (l._cs = gx);
            var n = d(N.g.kc);
            if (!c.D && G(n))
                for (var p in n)
                    if (n.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) && void 0 != n[p]) {
                        var q = d(String(n[p]));
                        void 0 !== q && Vw(f, p, q)
                    }
            for (var t = !c.D, r = Am(c), u = 0; u < r.length; ++u) {
                var v = r[u];
                if (c.D) {
                    var w = d(v);
                    rx.hasOwnProperty(v) ? e[v] = w : mx.hasOwnProperty(v) ? l[v] = w : g[v] = w
                } else {
                    var x = void 0;
                    x = v !== N.g.X ? d(v) : Bm(c, v);
                    if (qx.hasOwnProperty(v)) Zw(qx[v], v, x, e);
                    else if (nx.hasOwnProperty(v)) Zw(nx[v],
                        v, x, g);
                    else if (Mw.hasOwnProperty(v)) Zw(Mw[v], v, x, f);
                    else if (Lw.hasOwnProperty(v)) Zw(Lw[v], v, x, l);
                    else if (/^(dimension|metric|content_group)\d+$/.test(v)) Zw(1, v, x, f);
                    else if (v === N.g.X) {
                        if (!hx) {
                            var y = Qa(x);
                            y && (f["&did"] = y)
                        }
                        var A = void 0,
                            B = void 0;
                        b === N.g.qa ? A = Qa(Bm(c, v), ".") : (A = Qa(Bm(c, v, 1), "."), B = Qa(Bm(c, v, 2), "."));
                        A && (f["&gdid"] = A);
                        B && (f["&edid"] = B)
                    } else v === N.g.Ia && 0 > r.indexOf(N.g.jc) && (l.cookieName = x + "_ga");
                    S(96) && jx[v] && (c.m.hasOwnProperty(v) || b === N.g.qa && c.h.hasOwnProperty(v)) && (t = !1)
                }
            }
            S(96) && t &&
                (f["&jsscut"] = "1");
            !1 !== d(N.g.ff) && !1 !== d(N.g.ub) && bv() || (g.allowAdFeatures = !1);
            !1 !== d(N.g.V) && cv() || (g.allowAdPersonalizationSignals = !1);
            !c.D && d(N.g.ib) && (l._useUp = !0);
            if (c.D) {
                l.name = l.name || e.gtmTrackerName;
                var D = g.hitCallback;
                g.hitCallback = function() {
                    ra(D) && D();
                    c.M()
                }
            } else {
                Vw(l, "cookieDomain", "auto");
                Vw(g, "forceSSL", !0);
                Vw(e, "eventCategory", Ax(b));
                Cx[b] && Vw(f, "nonInteraction", !0);
                "login" === b || "sign_up" === b || "share" === b ? Vw(e, "eventLabel", d(N.g.jh)) : "search" === b || "view_search_results" === b ? Vw(e, "eventLabel",
                    d(N.g.zj)) : "select_content" === b && Vw(e, "eventLabel", d(N.g.ij));
                var I = e[N.g.ya] || {},
                    H = I[N.g.qc];
                H || 0 != H && I[N.g.O] ? l.allowLinker = !0 : !1 === H && Vw(l, "useAmpClientId", !1);
                f.hitCallback = c.M;
                l.name = a
            }
            Tg() && (g["&gcs"] = sh(), S(106) && (g["&gcd"] = wh()), rh(N.g.N) || (l.storage = "none"), rh(N.g.H) || (g.allowAdFeatures = !1, l.storeGac = !1));
            S(109) && (yh() && (g["&dma_cps"] = xh()), We() && (g["&dma"] = "1"));
            var E = fp(c) || d(N.g.Hb),
                J = d(N.g.oe);
            E && (c.D || (l[N.g.Hb] = E), l._cd2l = !0);
            J && !c.D && (l[N.g.oe] = J);
            e.fieldsToSend = f;
            e.fieldsToSet = g;
            e.createOnlyFields = l;
            return e
        },
        Ww = function(a) {
            var b = a.gtmEcommerceData;
            if (!b) return null;
            var c = {};
            b.currencyCode && (c.Pf = b.currencyCode);
            if (b.impressions) {
                c.action = "impressions";
                var d = b.impressions;
                c.gi = "impressions" === b.translateIfKeyEquals ? fx(d) : d
            }
            if (b.promoView) {
                c.action = "promo_view";
                var e = b.promoView.promotions;
                c.Jd = "promoView" === b.translateIfKeyEquals ? fx(e) : e
            }
            if (b.promoClick) {
                c.action = "promo_click";
                var f = b.promoClick.promotions;
                c.Jd = "promoClick" === b.translateIfKeyEquals ? fx(f) : f;
                c.Sa = b.promoClick.actionField;
                return c
            }
            for (var g in b)
                if (b.hasOwnProperty(g) && "translateIfKeyEquals" !== g && "impressions" !== g && "promoView" !== g && "promoClick" !== g && "currencyCode" !== g) {
                    c.action = g;
                    var l = b[g].products;
                    c.Sb = "products" === b.translateIfKeyEquals ? fx(l) : l;
                    c.Sa = b[g].actionField;
                    break
                }
            return Object.keys(c).length ? c : null
        },
        Xw = function(a, b) {
            function c(u) {
                return {
                    id: d(N.g.ma),
                    affiliation: d(N.g.Og),
                    revenue: d(N.g.ba),
                    tax: d(N.g.nf),
                    shipping: d(N.g.Wc),
                    coupon: d(N.g.Pg),
                    list: d(N.g.lf) || d(N.g.Vc) || u
                }
            }
            for (var d = function(u) {
                        return T(b, u)
                    },
                    e = d(N.g.W), f, g = 0; e && g < e.length && !(f = e[g][N.g.lf] || e[g][N.g.Vc]); g++);
            var l = d(N.g.kc);
            if (G(l))
                for (var m = 0; e && m < e.length; ++m) {
                    var n = e[m],
                        p;
                    for (p in l) l.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) && void 0 != l[p] && Vw(n, p, n[l[p]])
                }
            var q = null,
                t = d(N.g.lj);
            if (a === N.g.Ea || a === N.g.fc) q = {
                action: a,
                Sa: c(),
                Sb: fx(e)
            };
            else if (a === N.g.Zb) q = {
                action: "add",
                Sa: c(),
                Sb: fx(e)
            };
            else if (a === N.g.ac) q = {
                action: "remove",
                Sa: c(),
                Sb: fx(e)
            };
            else if (a === N.g.Fa) q = {
                action: "detail",
                Sa: c(f),
                Sb: fx(e)
            };
            else if (a === N.g.Wa) q = {
                action: "impressions",
                gi: fx(e)
            };
            else if (a === N.g.Xa) q = {
                action: "promo_view",
                Jd: fx(t) || fx(e)
            };
            else if ("select_content" === a && t && 0 < t.length || a === N.g.sb) q = {
                action: "promo_click",
                Jd: fx(t) || fx(e)
            };
            else if ("select_content" === a || a === N.g.bc) q = {
                action: "click",
                Sa: {
                    list: d(N.g.lf) || d(N.g.Vc) || f
                },
                Sb: fx(e)
            };
            else if (a === N.g.Eb || "checkout_progress" === a) {
                var r = {
                    step: a === N.g.Eb ? 1 : d(N.g.kf),
                    option: d(N.g.he)
                };
                q = {
                    action: "checkout",
                    Sb: fx(e),
                    Sa: K(c(), r)
                }
            } else "set_checkout_option" === a && (q = {
                action: "checkout_option",
                Sa: {
                    step: d(N.g.kf),
                    option: d(N.g.he)
                }
            });
            q && (q.Pf = d(N.g.ra));
            return q
        },
        Ex = {},
        Sw = function(a, b) {
            var c = Ex[a];
            Ex[a] = K(b);
            if (!c) return !1;
            for (var d in b)
                if (b.hasOwnProperty(d) && b[d] !== c[d]) return !0;
            for (var e in c)
                if (c.hasOwnProperty(e) && c[e] !== b[e]) return !0;
            return !1
        };
    var Fx = Tv;
    var Gx = function(a, b, c) {
        for (var d = 0; d < b.length; d++) a.hasOwnProperty(b[d]) && (a[b[d]] = c(a[b[d]]))
    };
    Object.freeze({
        dl: 1,
        id: 1
    });
    Object.freeze(["config", "event", "get", "set"]);
    var Hx = encodeURI,
        X = encodeURIComponent,
        Ix = function(a, b, c) {
            Nb(a, b, c)
        },
        Jx = function(a, b) {
            if (!a) return !1;
            var c = uf(wf(a), "host");
            if (!c) return !1;
            for (var d = 0; b && d < b.length; d++) {
                var e = b[d] && b[d].toLowerCase();
                if (e) {
                    var f =
                        c.length - e.length;
                    0 < f && "." != e.charAt(0) && (f--, e = "." + e);
                    if (0 <= f && c.indexOf(e, f) == f) return !0
                }
            }
            return !1
        },
        Kx = function(a, b, c) {
            for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0);
            return e ? d : null
        };
    var Z = {
        o: {}
    };

    Z.o.sdl = ["google"],
        function() {
            function a() {
                return !!(Object.keys(m("horiz.pix")).length || Object.keys(m("horiz.pct")).length || Object.keys(m("vert.pix")).length || Object.keys(m("vert.pct")).length)
            }

            function b(y) {
                for (var A = [], B = y.split(","), D = 0; D < B.length; D++) {
                    var I = Number(B[D]);
                    if (isNaN(I)) return [];
                    p.test(B[D]) || A.push(I)
                }
                return A
            }

            function c() {
                var y = 0,
                    A = 0;
                return function() {
                    var B = ef(),
                        D = B.height;
                    y = Math.max(v.scrollLeft + B.width, y);
                    A = Math.max(v.scrollTop + D, A);
                    return {
                        fk: y,
                        gk: A
                    }
                }
            }

            function d() {
                r = W("self");
                u = r.document;
                v = u.scrollingElement || u.body && u.body.parentNode;
                x = c()
            }

            function e(y, A, B, D) {
                var I = m(A),
                    H = {},
                    E;
                for (E in I) {
                    H.Xb = E;
                    if (I.hasOwnProperty(H.Xb)) {
                        var J = Number(H.Xb);
                        y < J || (Bt({
                            event: "gtm.scrollDepth",
                            "gtm.scrollThreshold": J,
                            "gtm.scrollUnits": B.toLowerCase(),
                            "gtm.scrollDirection": D,
                            "gtm.triggers": I[H.Xb].join(",")
                        }), Zs("sdl", A, function(M) {
                            return function(Y) {
                                delete Y[M.Xb];
                                return Y
                            }
                        }(H), {}))
                    }
                    H = {
                        Xb: H.Xb
                    }
                }
            }

            function f() {
                var y = x(),
                    A = y.fk,
                    B = y.gk,
                    D = A / v.scrollWidth * 100,
                    I = B / v.scrollHeight * 100;
                e(A, "horiz.pix",
                    q.Ee, t.Dh);
                e(D, "horiz.pct", q.De, t.Dh);
                e(B, "vert.pix", q.Ee, t.Rh);
                e(I, "vert.pct", q.De, t.Rh);
                Ys("sdl", "pending", !1)
            }

            function g() {
                var y = 250,
                    A = !1;
                u.scrollingElement && u.documentElement && r.addEventListener && (y = 50, A = !0);
                var B = 0,
                    D = !1,
                    I = function() {
                        D ? B = ut(I, y) : (B = 0, f(), Gt("sdl") && !a() && (Pb(r, "scroll", H), Pb(r, "resize", H), Ys("sdl", "init", !1)));
                        D = !1
                    },
                    H = function() {
                        A && x();
                        B ? D = !0 : (B = ut(I, y), Ys("sdl", "pending", !0))
                    };
                return H
            }

            function l(y, A, B) {
                if (A) {
                    var D = b(String(y));
                    Zs("sdl", B, function(I) {
                        for (var H = 0; H < D.length; H++) {
                            var E =
                                String(D[H]);
                            I.hasOwnProperty(E) || (I[E] = []);
                            I[E].push(A)
                        }
                        return I
                    }, {})
                }
            }

            function m(y) {
                return $s("sdl", y, {})
            }

            function n(y) {
                F(y.vtp_gtmOnSuccess);
                var A = y.vtp_uniqueTriggerId,
                    B = y.vtp_horizontalThresholdsPixels,
                    D = y.vtp_horizontalThresholdsPercent,
                    I = y.vtp_verticalThresholdUnits,
                    H = y.vtp_verticalThresholdsPixels,
                    E = y.vtp_verticalThresholdsPercent;
                switch (y.vtp_horizontalThresholdUnits) {
                    case q.Ee:
                        l(B, A, "horiz.pix");
                        break;
                    case q.De:
                        l(D, A, "horiz.pct")
                }
                switch (I) {
                    case q.Ee:
                        l(H, A, "vert.pix");
                        break;
                    case q.De:
                        l(E,
                            A, "vert.pct")
                }
                Gt("sdl") ? $s("sdl", "pending") || (w || (d(), w = !0), F(function() {
                    return f()
                })) : (d(), w = !0, v && (Ht("sdl"), Ys("sdl", "pending", !0), F(function() {
                    f();
                    if (a()) {
                        var J = g();
                        Ob(r, "scroll", J);
                        Ob(r, "resize", J)
                    } else Ys("sdl", "init", !1)
                })))
            }
            var p = /^\s*$/,
                q = {
                    De: "PERCENT",
                    Ee: "PIXELS"
                },
                t = {
                    Rh: "vertical",
                    Dh: "horizontal"
                },
                r, u, v, w = !1,
                x;
            (function(y) {
                Z.__sdl = y;
                Z.__sdl.s = "sdl";
                Z.__sdl.isVendorTemplate = !0;
                Z.__sdl.priorityOverride = 0;
                Z.__sdl.isInfrastructure = !1
            })(function(y) {
                y.vtp_triggerStartOption ? n(y) : Pr(function() {
                    n(y)
                })
            })
        }();

    Z.o.jsm = ["customScripts"],
        function() {
            (function(a) {
                Z.__jsm = a;
                Z.__jsm.s = "jsm";
                Z.__jsm.isVendorTemplate = !0;
                Z.__jsm.priorityOverride = 0;
                Z.__jsm.isInfrastructure = !1
            })(function(a) {
                if (void 0 !== a.vtp_javascript) {
                    var b = a.vtp_javascript;
                    try {
                        var c = W("google_tag_manager");
                        var d = c && c.e && c.e(b);
                        It(d, "jsm", a.vtp_gtmEventId);
                        return d
                    } catch (e) {}
                }
            })
        }();
    Z.o.c = ["google"],
        function() {
            (function(a) {
                Z.__c = a;
                Z.__c.s = "c";
                Z.__c.isVendorTemplate = !0;
                Z.__c.priorityOverride = 0;
                Z.__c.isInfrastructure = !1
            })(function(a) {
                It(a.vtp_value, "c", a.vtp_gtmEventId);
                return a.vtp_value
            })
        }();

    Z.o.d = ["google"],
        function() {
            (function(a) {
                Z.__d = a;
                Z.__d.s = "d";
                Z.__d.isVendorTemplate = !0;
                Z.__d.priorityOverride = 0;
                Z.__d.isInfrastructure = !1
            })(function(a) {
                var b = null,
                    c = null,
                    d = a.vtp_attributeName;
                if ("CSS" == a.vtp_selectorType) try {
                    var e = wd(a.vtp_elementSelector);
                    e && 0 < e.length && (b = e[0])
                } catch (f) {
                    b = null
                } else b = C.getElementById(a.vtp_elementId);
                b && (d ? c = function() {
                    if (b instanceof HTMLInputElement) {
                        var f = b;
                        if ("value" === d) return f.value;
                        if ("checked" === d && ("radio" === f.type || "checkbox" === f.type)) return f.checked
                    }
                    return Qb(b,
                        d)
                }() : c = Rb(b));
                return Fa(String(b && c))
            })
        }();
    Z.o.e = ["google"],
        function() {
            (function(a) {
                Z.__e = a;
                Z.__e.s = "e";
                Z.__e.isVendorTemplate = !0;
                Z.__e.priorityOverride = 0;
                Z.__e.isInfrastructure = !1
            })(function(a) {
                return String(a.vtp_gtmCachedValues.event)
            })
        }();
    Z.o.f = ["google"],
        function() {
            (function(a) {
                Z.__f = a;
                Z.__f.s = "f";
                Z.__f.isVendorTemplate = !0;
                Z.__f.priorityOverride = 0;
                Z.__f.isInfrastructure = !1
            })(function(a) {
                var b = At("gtm.referrer", 1) || C.referrer;
                return b ? a.vtp_component && "URL" != a.vtp_component ? uf(wf(String(b)), a.vtp_component, a.vtp_stripWww, a.vtp_defaultPages, a.vtp_queryKey) : zt(String(b)) : String(b)
            })
        }();
    Z.o.cl = ["google"],
        function() {
            function a(b) {
                var c = b.target;
                if (c) {
                    var d = Ws(c, "gtm.click");
                    Bt(d)
                }
            }(function(b) {
                Z.__cl = b;
                Z.__cl.s = "cl";
                Z.__cl.isVendorTemplate = !0;
                Z.__cl.priorityOverride = 0;
                Z.__cl.isInfrastructure = !1
            })(function(b) {
                if (!Gt("cl")) {
                    var c = W("document");
                    Ob(c, "click", a, !0);
                    Ht("cl")
                }
                F(b.vtp_gtmOnSuccess)
            })
        }();
    Z.o.k = ["google"],
        function() {
            (function(a) {
                Z.__k = a;
                Z.__k.s = "k";
                Z.__k.isVendorTemplate = !0;
                Z.__k.priorityOverride = 0;
                Z.__k.isInfrastructure = !1
            })(function(a) {
                return Dt(a.vtp_name, At("gtm.cookie", 1), !!a.vtp_decodeCookie)[0]
            })
        }();
    Z.o.r = ["google"],
        function() {
            (function(a) {
                Z.__r = a;
                Z.__r.s = "r";
                Z.__r.isVendorTemplate = !0;
                Z.__r.priorityOverride = 0;
                Z.__r.isInfrastructure = !1
            })(function(a) {
                return wa(a.vtp_min, a.vtp_max)
            })
        }();
    Z.o.u = ["google"],
        function() {
            var a = function(b) {
                return {
                    toString: function() {
                        return b
                    }
                }
            };
            (function(b) {
                Z.__u = b;
                Z.__u.s = "u";
                Z.__u.isVendorTemplate = !0;
                Z.__u.priorityOverride = 0;
                Z.__u.isInfrastructure = !1
            })(function(b) {
                var c;
                c = (c = b.vtp_customUrlSource ? b.vtp_customUrlSource : At("gtm.url", 1)) || wt();
                var d = b[a("vtp_component")];
                if (!d || "URL" == d) return zt(String(c));
                var e = wf(String(c)),
                    f;
                if ("QUERY" === d) a: {
                    var g = b[a("vtp_multiQueryKeys").toString()],
                        l = b[a("vtp_queryKey").toString()] || "",
                        m = b[a("vtp_ignoreEmptyQueryParam").toString()],
                        n;g ? ua(l) ? n = l : n = String(l).replace(/\s+/g, "").split(",") : n = [String(l)];
                    for (var p = 0; p < n.length; p++) {
                        var q = uf(e, "QUERY", void 0, void 0, n[p]);
                        if (void 0 != q && (!m || "" !== q)) {
                            f = q;
                            break a
                        }
                    }
                    f = void 0
                }
                else f = uf(e, d, "HOST" == d ? b[a("vtp_stripWww")] : void 0, "PATH" == d ? b[a("vtp_defaultPages")] : void 0);
                return f
            })
        }();
    Z.o.v = ["google"],
        function() {
            (function(a) {
                Z.__v = a;
                Z.__v.s = "v";
                Z.__v.isVendorTemplate = !0;
                Z.__v.priorityOverride = 0;
                Z.__v.isInfrastructure = !1
            })(function(a) {
                var b = a.vtp_name;
                if (!b || !b.replace) return !1;
                var c = At(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1),
                    d = void 0 !== c ? c : a.vtp_defaultValue;
                It(d, "v", a.vtp_gtmEventId);
                return d
            })
        }();

    Z.o.ytl = ["google"],
        function() {
            function a() {
                var u = Math.round(1E9 * Math.random()) + "";
                return C.getElementById(u) ? a() : u
            }

            function b(u, v) {
                if (!u) return !1;
                for (var w = 0; w < p.length; w++)
                    if (0 <= u.indexOf("//" + p[w] + "/" + v)) return !0;
                return !1
            }

            function c(u, v) {
                var w = u.getAttribute("src");
                if (b(w, "embed/")) {
                    if (0 < w.indexOf("enablejsapi=1")) return !0;
                    if (v) {
                        var x = u.setAttribute,
                            y;
                        var A = -1 !== w.indexOf("?") ? "&" : "?";
                        if (-1 < w.indexOf("origin=")) y = w + A + "enablejsapi=1";
                        else {
                            if (!t) {
                                var B = W("document");
                                t = B.location.protocol + "//" + B.location.hostname;
                                B.location.port && (t += ":" + B.location.port)
                            }
                            y = w + A + "enablejsapi=1&origin=" + encodeURIComponent(t)
                        }
                        x.call(u, "src", y);
                        return !0
                    }
                }
                return !1
            }

            function d(u, v) {
                if (!u.getAttribute("data-gtm-yt-inspected-" + v.sg) && (u.setAttribute("data-gtm-yt-inspected-" + v.sg, "true"), c(u, v.di))) {
                    u.id || (u.id = a());
                    var w = W("YT"),
                        x = w.get(u.id);
                    x || (x = new w.Player(u.id));
                    var y = f(x, v),
                        A = {},
                        B;
                    for (B in y) A.Kc = B, y.hasOwnProperty(A.Kc) && x.addEventListener(A.Kc, function(D) {
                        return function(I) {
                            return y[D.Kc](I.data)
                        }
                    }(A)), A = {
                        Kc: A.Kc
                    }
                }
            }

            function e(u) {
                F(function() {
                    function v() {
                        for (var x =
                                w.getElementsByTagName("iframe"), y = x.length, A = 0; A < y; A++) d(x[A], u)
                    }
                    var w = W("document");
                    v();
                    ht(v)
                })
            }

            function f(u, v) {
                var w, x;

                function y() {
                    Y = st(function() {
                        return {
                            url: P,
                            title: da,
                            Zh: R,
                            ek: u.getCurrentTime(),
                            playbackRate: ea
                        }
                    }, v.sg, u.getIframe());
                    R = 0;
                    da = P = "";
                    ea = 1;
                    return A
                }

                function A(sa) {
                    switch (sa) {
                        case q.PLAYING:
                            R = Math.round(u.getDuration());
                            P = u.getVideoUrl();
                            if (u.getVideoData) {
                                var Da = u.getVideoData();
                                da = Da ? Da.title : ""
                            }
                            ea = u.getPlaybackRate();
                            v.Zj ? Bt(Y.createEvent("start")) : Y.Kf();
                            aa = m(v.kl, v.jl, u.getDuration());
                            return B(sa);
                        default:
                            return A
                    }
                }

                function B() {
                    Q = u.getCurrentTime();
                    ya = vt().getTime();
                    Y.sl();
                    M();
                    return D
                }

                function D(sa) {
                    var Da;
                    switch (sa) {
                        case q.ENDED:
                            return H(sa);
                        case q.PAUSED:
                            Da = "pause";
                        case q.BUFFERING:
                            var Ua = u.getCurrentTime() - Q;
                            Da = 1 < Math.abs((vt().getTime() - ya) / 1E3 * ea - Ua) ? "seek" : Da || "buffering";
                            u.getCurrentTime() && (v.Yj ? Bt(Y.createEvent(Da)) : Y.Kf());
                            J();
                            return I;
                        case q.UNSTARTED:
                            return y(sa);
                        default:
                            return D
                    }
                }

                function I(sa) {
                    switch (sa) {
                        case q.ENDED:
                            return H(sa);
                        case q.PLAYING:
                            return B(sa);
                        case q.UNSTARTED:
                            return y(sa);
                        default:
                            return I
                    }
                }

                function H() {
                    for (; x;) {
                        var sa = w;
                        tt(x);
                        sa()
                    }
                    v.Xj && Bt(Y.createEvent("complete", 1));
                    return y(q.UNSTARTED)
                }

                function E() {}

                function J() {
                    x && (tt(x), x = 0, w = E)
                }

                function M() {
                    if (aa.length && 0 !== ea) {
                        var sa = -1,
                            Da;
                        do {
                            Da = aa[0];
                            if (Da.Tb > u.getDuration()) return;
                            sa = (Da.Tb - u.getCurrentTime()) / ea;
                            if (0 > sa && (aa.shift(), 0 === aa.length)) return
                        } while (0 > sa);
                        w = function() {
                            x = 0;
                            w = E;
                            0 < aa.length && aa[0].Tb === Da.Tb && (aa.shift(), Bt(Y.createEvent("progress", Da.ii, Da.si)));
                            M()
                        };
                        x = ut(w, 1E3 * sa)
                    }
                }
                var Y, aa = [],
                    R, P, da, ea, Q, ya,
                    Pa = y(q.UNSTARTED);
                x = 0;
                w = E;
                return {
                    onStateChange: function(sa) {
                        Pa = Pa(sa)
                    },
                    onPlaybackRateChange: function(sa) {
                        Q = u.getCurrentTime();
                        ya = vt().getTime();
                        Y.Kf();
                        ea = sa;
                        J();
                        M()
                    }
                }
            }

            function g(u) {
                for (var v = u.split(","), w = v.length, x = [], y = 0; y < w; y++) {
                    var A = parseInt(v[y], 10);
                    isNaN(A) || 100 < A || 0 > A || x.push(A / 100)
                }
                x.sort(function(B, D) {
                    return B - D
                });
                return x
            }

            function l(u) {
                for (var v = u.split(","), w = v.length, x = [], y = 0; y < w; y++) {
                    var A = parseInt(v[y], 10);
                    isNaN(A) || 0 > A || x.push(A)
                }
                x.sort(function(B, D) {
                    return B - D
                });
                return x
            }

            function m(u,
                v, w) {
                var x = u.map(function(B) {
                    return {
                        Tb: B,
                        si: B,
                        ii: void 0
                    }
                });
                if (!v.length) return x;
                var y = v.map(function(B) {
                    return {
                        Tb: B * w,
                        si: void 0,
                        ii: B
                    }
                });
                if (!x.length) return y;
                var A = x.concat(y);
                A.sort(function(B, D) {
                    return B.Tb - D.Tb
                });
                return A
            }

            function n(u) {
                var v = !!u.vtp_captureStart,
                    w = !!u.vtp_captureComplete,
                    x = !!u.vtp_capturePause,
                    y = g(u.vtp_progressThresholdsPercent + ""),
                    A = l(u.vtp_progressThresholdsTimeInSeconds + ""),
                    B = !!u.vtp_fixMissingApi;
                if (v || w || x || y.length || A.length) {
                    var D = {
                            Zj: v,
                            Xj: w,
                            Yj: x,
                            jl: y,
                            kl: A,
                            di: B,
                            sg: void 0 ===
                                u.vtp_uniqueTriggerId ? "" : u.vtp_uniqueTriggerId
                        },
                        I = W("YT"),
                        H = function() {
                            e(D)
                        };
                    F(u.vtp_gtmOnSuccess);
                    if (I) I.ready && I.ready(H);
                    else {
                        var E = W("onYouTubeIframeAPIReady");
                        Ct("onYouTubeIframeAPIReady", function() {
                            E && E();
                            H()
                        });
                        F(function() {
                            for (var J = W("document"), M = J.getElementsByTagName("script"), Y = M.length, aa = 0; aa < Y; aa++) {
                                var R = M[aa].getAttribute("src");
                                if (b(R, "iframe_api") || b(R, "player_api")) return
                            }
                            for (var P = J.getElementsByTagName("iframe"), da = P.length, ea = 0; ea < da; ea++)
                                if (!r && c(P[ea], D.di)) {
                                    V("https://www.youtube.com/iframe_api");
                                    r = !0;
                                    break
                                }
                        })
                    }
                } else F(u.vtp_gtmOnSuccess)
            }
            var p = ["www.youtube.com", "www.youtube-nocookie.com"],
                q = {
                    UNSTARTED: -1,
                    ENDED: 0,
                    PLAYING: 1,
                    PAUSED: 2,
                    BUFFERING: 3,
                    CUED: 5
                },
                t, r = !1;
            (function(u) {
                Z.__ytl = u;
                Z.__ytl.s = "ytl";
                Z.__ytl.isVendorTemplate = !0;
                Z.__ytl.priorityOverride = 0;
                Z.__ytl.isInfrastructure = !1
            })(function(u) {
                u.vtp_triggerStartOption ? n(u) : Dp(function() {
                    n(u)
                })
            })
        }();
    Z.o.gclidw = ["google"],
        function() {
            var a = ["aw", "dc", "gf", "ha", "gb"];
            (function(b) {
                Z.__gclidw = b;
                Z.__gclidw.s = "gclidw";
                Z.__gclidw.isVendorTemplate = !0;
                Z.__gclidw.priorityOverride = 100;
                Z.__gclidw.isInfrastructure = !1
            })(function(b) {
                F(b.vtp_gtmOnSuccess);
                var c, d, e, f;
                b.vtp_enableCookieOverrides && (e = b.vtp_cookiePrefix, c = b.vtp_path, d = b.vtp_domain, f = b.vtp_cookieFlags);
                var g = {
                    prefix: e,
                    path: c,
                    domain: d,
                    flags: f
                };
                !b.vtp_enableCrossDomainFeature || b.vtp_enableCrossDomain && !1 === b.vtp_acceptIncoming || !b.vtp_enableCrossDomain &&
                    !Rk() || (yl(a, g), S(73) && dl(g));
                vl(g);
                Bl(["aw", "dc"], g);
                wm(g);
                if (b.vtp_enableCrossDomainFeature && b.vtp_enableCrossDomain && b.vtp_linkerDomains) {
                    var l = b.vtp_linkerDomains.toString().replace(/\s+/g, "").split(",");
                    Al(a, l, b.vtp_urlPosition, !!b.vtp_formDecoration, g.prefix);
                    S(73) && (el(Wk(g.prefix), l, b.vtp_urlPosition, !!b.vtp_formDecoration, g), el("FPAU", l, b.vtp_urlPosition, !!b.vtp_formDecoration, g))
                }
                var m = At(N.g.la);
                Ll({
                    eventId: b.vtp_gtmEventId,
                    priorityId: b.vtp_gtmPriorityId,
                    Ke: !1,
                    Kd: void 0 != m && !1 !== m,
                    Ob: g,
                    Ed: !0
                });
                b.vtp_enableUrlPassthrough && Dl(["aw", "dc", "gb"])
            })
        }();

    Z.o.aev = ["google"],
        function() {
            function a(t, r, u, v, w) {
                w || (w = "element");
                var x = r + "." + u,
                    y;
                if (n.hasOwnProperty(x)) y = n[x];
                else {
                    var A = t[w];
                    if (A && (y = v(A), n[x] = y, p.push(x), 35 < p.length)) {
                        var B = p.shift();
                        delete n[B]
                    }
                }
                return y
            }

            function b(t, r, u) {
                var v = t[q[r]];
                return void 0 !== v ? v : u
            }

            function c(t, r) {
                if (!t) return !1;
                var u = d(wt());
                ua(r) || (r = String(r || "").replace(/\s+/g, "").split(","));
                for (var v = [u], w = 0; w < r.length; w++) {
                    var x = r[w];
                    if (x.hasOwnProperty("is_regex"))
                        if (x.is_regex) try {
                            x = new RegExp(x.domain)
                        } catch (B) {
                            continue
                        } else x =
                            x.domain;
                    var y = d(t);
                    if (x instanceof RegExp) {
                        if (x.test(y)) return !1
                    } else {
                        var A = x;
                        if (0 != A.length) {
                            if (0 <= y.indexOf(A)) return !1;
                            v.push(d(A))
                        }
                    }
                }
                return !Jx(t, v)
            }

            function d(t) {
                m.test(t) || (t = "http://" + t);
                return uf(wf(t), "HOST", !0)
            }

            function e(t, r, u, v) {
                switch (t) {
                    case "SUBMIT_TEXT":
                        return a(r, u, "FORM." + t, f, "formSubmitElement") || v;
                    case "LENGTH":
                        var w = a(r, u, "FORM." + t, g);
                        return void 0 === w ? v : w;
                    case "INTERACTED_FIELD_ID":
                        return l(r, "id", v);
                    case "INTERACTED_FIELD_NAME":
                        return l(r, "name", v);
                    case "INTERACTED_FIELD_TYPE":
                        return l(r,
                            "type", v);
                    case "INTERACTED_FIELD_POSITION":
                        var x = r.interactedFormFieldPosition;
                        return void 0 === x ? v : x;
                    case "INTERACT_SEQUENCE_NUMBER":
                        var y = r.interactSequenceNumber;
                        return void 0 === y ? v : y;
                    default:
                        return v
                }
            }

            function f(t) {
                switch (t.tagName.toLowerCase()) {
                    case "input":
                        return Qb(t, "value");
                    case "button":
                        return Rb(t);
                    default:
                        return null
                }
            }

            function g(t) {
                if ("form" === t.tagName.toLowerCase() && t.elements) {
                    for (var r = 0, u = 0; u < t.elements.length; u++) ct(t.elements[u]) && r++;
                    return r
                }
            }

            function l(t, r, u) {
                var v = t.interactedFormField;
                return v && Qb(v, r) || u
            }
            var m = /^https?:\/\//i,
                n = {},
                p = [],
                q = {
                    ATTRIBUTE: "elementAttribute",
                    CLASSES: "elementClasses",
                    ELEMENT: "element",
                    ID: "elementId",
                    HISTORY_CHANGE_SOURCE: "historyChangeSource",
                    HISTORY_NEW_STATE: "newHistoryState",
                    HISTORY_NEW_URL_FRAGMENT: "newUrlFragment",
                    HISTORY_OLD_STATE: "oldHistoryState",
                    HISTORY_OLD_URL_FRAGMENT: "oldUrlFragment",
                    TARGET: "elementTarget"
                };
            (function(t) {
                Z.__aev = t;
                Z.__aev.s = "aev";
                Z.__aev.isVendorTemplate = !0;
                Z.__aev.priorityOverride = 0;
                Z.__aev.isInfrastructure = !1
            })(function(t) {
                var r =
                    t.vtp_gtmEventId,
                    u = t.vtp_defaultValue,
                    v = t.vtp_varType,
                    w = t.vtp_gtmCachedValues.gtm;
                switch (v) {
                    case "TAG_NAME":
                        var x = w.element;
                        return x && x.tagName || u;
                    case "TEXT":
                        return a(w, r, v, Rb) || u;
                    case "URL":
                        var y;
                        a: {
                            var A = String(w.elementUrl || u || ""),
                                B = wf(A),
                                D = String(t.vtp_component || "URL");
                            switch (D) {
                                case "URL":
                                    y = A;
                                    break a;
                                case "IS_OUTBOUND":
                                    y = c(A, t.vtp_affiliatedDomains);
                                    break a;
                                default:
                                    y = uf(B, D, t.vtp_stripWww, t.vtp_defaultPages, t.vtp_queryKey)
                            }
                        }
                        return y;
                    case "ATTRIBUTE":
                        var I;
                        if (void 0 === t.vtp_attribute) I = b(w,
                            v, u);
                        else {
                            var H = w.element;
                            I = H && Qb(H, t.vtp_attribute) || u || ""
                        }
                        return I;
                    case "MD":
                        var E = t.vtp_mdValue,
                            J = a(w, r, "MD", ot);
                        return E && J ? rt(J, E) || u : J || u;
                    case "FORM":
                        return e(String(t.vtp_component || "SUBMIT_TEXT"), w, r, u);
                    default:
                        var M = b(w, v, u);
                        It(M, "aev", t.vtp_gtmEventId);
                        return M
                }
            })
        }();
    Z.o.paused = [],
        function() {
            (function(a) {
                Z.__paused = a;
                Z.__paused.s = "paused";
                Z.__paused.isVendorTemplate = !0;
                Z.__paused.priorityOverride = 0;
                Z.__paused.isInfrastructure = !1
            })(function(a) {
                F(a.vtp_gtmOnFailure)
            })
        }();


    Z.o.lcl = [],
        function() {
            function a() {
                var c = W("document"),
                    d = 0,
                    e = function(f) {
                        var g = f.target;
                        if (g && 3 !== f.which && !(f.Fk || f.timeStamp && f.timeStamp === d)) {
                            d = f.timeStamp;
                            g = Tb(g, ["a", "area"], 100);
                            if (!g) return f.returnValue;
                            var l = f.defaultPrevented || !1 === f.returnValue,
                                m = $s("lcl", l ? "nv.mwt" : "mwt", 0),
                                n;
                            n = l ? $s("lcl", "nv.ids", []) : $s("lcl", "ids", []);
                            if (n.length) {
                                var p = Ws(g, "gtm.linkClick", n);
                                if (b(f, g, c) && !l && m && g.href) {
                                    var q = !!va(String(Vb(g, "rel") || "").split(" "), function(v) {
                                            return "noreferrer" === v.toLowerCase()
                                        }),
                                        t = W((Vb(g, "target") || "_self").substring(1)),
                                        r = !0,
                                        u = os(function() {
                                            var v;
                                            if (v = r && t) {
                                                var w;
                                                a: if (q) {
                                                    var x;
                                                    try {
                                                        x = new MouseEvent(f.type, {
                                                            bubbles: !0
                                                        })
                                                    } catch (y) {
                                                        if (!c.createEvent) {
                                                            w = !1;
                                                            break a
                                                        }
                                                        x = c.createEvent("MouseEvents");
                                                        x.initEvent(f.type, !0, !0)
                                                    }
                                                    x.Fk = !0;
                                                    f.target.dispatchEvent(x);
                                                    w = !0
                                                } else w = !1;
                                                v = !w
                                            }
                                            v && (t.location.href = Vb(g, "href"))
                                        }, m);
                                    if (Bt(p, u, m)) r = !1;
                                    else return f.preventDefault && f.preventDefault(), f.returnValue = !1
                                } else Bt(p, function() {}, m || 2E3);
                                return !0
                            }
                        }
                    };
                Ob(c, "click", e, !1);
                Ob(c, "auxclick", e, !1)
            }

            function b(c, d, e) {
                if (2 === c.which || c.ctrlKey || c.shiftKey || c.altKey || c.metaKey) return !1;
                var f = Vb(d, "href"),
                    g = f.indexOf("#"),
                    l = Vb(d, "target");
                if (l && "_self" !== l && "_parent" !== l && "_top" !== l || 0 === g) return !1;
                if (0 < g) {
                    var m = zt(f),
                        n = zt(e.location);
                    return m !== n
                }
                return !0
            }(function(c) {
                Z.__lcl = c;
                Z.__lcl.s = "lcl";
                Z.__lcl.isVendorTemplate = !0;
                Z.__lcl.priorityOverride = 0;
                Z.__lcl.isInfrastructure = !1
            })(function(c) {
                var d = void 0 === c.vtp_waitForTags ? !0 : c.vtp_waitForTags,
                    e = void 0 === c.vtp_checkValidation ? !0 : c.vtp_checkValidation,
                    f = Number(c.vtp_waitForTagsTimeout);
                if (!f || 0 >= f) f = 2E3;
                var g = c.vtp_uniqueTriggerId || "0";
                if (d) {
                    var l = function(n) {
                        return Math.max(f, n)
                    };
                    Zs("lcl", "mwt", l, 0);
                    e || Zs("lcl", "nv.mwt", l, 0)
                }
                var m = function(n) {
                    n.push(g);
                    return n
                };
                Zs("lcl", "ids", m, []);
                e || Zs("lcl", "nv.ids", m, []);
                Gt("lcl") || (a(), Ht("lcl"));
                F(c.vtp_gtmOnSuccess)
            })
        }();
    Z.o.evl = ["google"],
        function() {
            function a() {
                var f = Number(At("gtm.start")) || 0;
                return vt().getTime() - f
            }

            function b(f, g, l, m) {
                function n() {
                    if (!df(f.target)) {
                        g.has(d.Fe) || g.set(d.Fe, "" + a());
                        g.has(d.Ef) || g.set(d.Ef, "" + a());
                        var q = 0;
                        g.has(d.He) && (q = Number(g.get(d.He)));
                        q += 100;
                        g.set(d.He, "" + q);
                        if (q >= l) {
                            var t = Ws(f.target, "gtm.elementVisibility", [g.h]),
                                r = ff(f.target);
                            t["gtm.visibleRatio"] = Math.round(1E3 * r) / 10;
                            t["gtm.visibleTime"] = l;
                            t["gtm.visibleFirstTime"] = Number(g.get(d.Ef));
                            t["gtm.visibleLastTime"] = Number(g.get(d.Fe));
                            Bt(t);
                            m()
                        }
                    }
                }
                if (!g.has(d.rd) && (0 == l && n(), !g.has(d.wc))) {
                    var p = W("self").setInterval(n, 100);
                    g.set(d.rd, p)
                }
            }

            function c(f) {
                f.has(d.rd) && (W("self").clearInterval(Number(f.get(d.rd))), f.m(d.rd))
            }
            var d = {
                    rd: "polling-id-",
                    Ef: "first-on-screen-",
                    Fe: "recent-on-screen-",
                    He: "total-visible-time-",
                    wc: "has-fired-"
                },
                e = function(f, g) {
                    this.element = f;
                    this.h = g
                };
            e.prototype.has = function(f) {
                return !!this.element.getAttribute("data-gtm-vis-" + f + this.h)
            };
            e.prototype.get = function(f) {
                return this.element.getAttribute("data-gtm-vis-" +
                    f + this.h)
            };
            e.prototype.set = function(f, g) {
                this.element.setAttribute("data-gtm-vis-" + f + this.h, g)
            };
            e.prototype.m = function(f) {
                this.element.removeAttribute("data-gtm-vis-" + f + this.h)
            };
            (function(f) {
                Z.__evl = f;
                Z.__evl.s = "evl";
                Z.__evl.isVendorTemplate = !0;
                Z.__evl.priorityOverride = 0;
                Z.__evl.isInfrastructure = !1
            })(function(f) {
                function g() {
                    var x = !1,
                        y = null;
                    if ("CSS" === m) {
                        try {
                            y = wd(n)
                        } catch (H) {}
                        x = !!y && v.length != y.length
                    } else if ("ID" === m) {
                        var A = C.getElementById(n);
                        A && (y = [A], x = 1 != v.length || v[0] !== A)
                    }
                    y || (y = [], x = 0 < v.length);
                    if (x) {
                        for (var B = 0; B < v.length; B++) {
                            var D = new e(v[B], r);
                            c(D)
                        }
                        v = [];
                        for (var I = 0; I < y.length; I++) v.push(y[I]);
                        0 <= w && mf(w);
                        0 < v.length && (w = lf(l, v, [t]))
                    }
                }

                function l(x) {
                    var y = new e(x.target, r);
                    x.intersectionRatio >= t ? y.has(d.wc) || b(x, y, q, "ONCE" === u ? function() {
                        for (var A = 0; A < v.length; A++) {
                            var B = new e(v[A], r);
                            B.set(d.wc, "1");
                            c(B)
                        }
                        mf(w);
                        if (p && gt)
                            for (var D = 0; D < gt.length; D++) gt[D] === g && gt.splice(D, 1)
                    } : function() {
                        y.set(d.wc, "1");
                        c(y)
                    }) : (c(y), "MANY_PER_ELEMENT" === u && y.has(d.wc) && (y.m(d.wc), y.m(d.He)), y.m(d.Fe))
                }
                var m =
                    f.vtp_selectorType,
                    n;
                "ID" === m ? n = String(f.vtp_elementId) : "CSS" === m && (n = String(f.vtp_elementSelector));
                var p = !!f.vtp_useDomChangeListener,
                    q = f.vtp_useOnScreenDuration && Number(f.vtp_onScreenDuration) || 0,
                    t = (Number(f.vtp_onScreenRatio) || 50) / 100,
                    r = f.vtp_uniqueTriggerId,
                    u = f.vtp_firingFrequency,
                    v = [],
                    w = -1;
                g();
                p && ht(g);
                F(f.vtp_gtmOnSuccess)
            })
        }();

    Z.o.gaawc = ["google"],
        function() {
            (function(a) {
                Z.__gaawc = a;
                Z.__gaawc.s = "gaawc";
                Z.__gaawc.isVendorTemplate = !0;
                Z.__gaawc.priorityOverride = 10;
                Z.__gaawc.isInfrastructure = !1
            })(function(a) {
                var b = String(a.vtp_measurementId);
                if (!h(b) || 0 >= b.indexOf("-")) F(a.vtp_gtmOnFailure);
                else {
                    var c = Kx(a.vtp_fieldsToSet, "name", "value") || {};
                    if (c.hasOwnProperty(N.g.Pa) || a.vtp_userProperties) {
                        var d = c[N.g.Pa] || {};
                        K(Kx(a.vtp_userProperties, "name", "value"), d);
                        c[N.g.Pa] = d
                    }
                    a.vtp_enableSendToServerContainer && a.vtp_serverContainerUrl &&
                        (c[N.g.uc] = a.vtp_serverContainerUrl, c[N.g.ne] = !0);
                    var e = a.vtp_userDataVariable;
                    e && (c[N.g.na] = e);
                    Gx(c, ee, function(f) {
                        return Ca(f)
                    });
                    Gx(c, ge, function(f) {
                        return Number(f)
                    });
                    c.send_page_view = a.vtp_sendPageView;
                    Oq(Kq(b, c), a.vtp_gtmEventId, {
                        noTargetGroup: !0,
                        originatingEntity: Ep(a.vtp_gtmEntityIndex, a.vtp_gtmEntityName)
                    });
                    F(a.vtp_gtmOnSuccess)
                }
            })
        }();




    Z.o.sp = ["google"],
        function() {
            (function(a) {
                Z.__sp = a;
                Z.__sp.s = "sp";
                Z.__sp.isVendorTemplate = !0;
                Z.__sp.priorityOverride = 0;
                Z.__sp.isInfrastructure = !1
            })(function(a) {
                var b, c = {};
                "DATA_LAYER" == a.vtp_customParamsFormat ? c = a.vtp_dataLayerVariable : "USER_SPECIFIED" == a.vtp_customParamsFormat && (c = Kx(a.vtp_customParams, "key", "value"));
                b = G(c) ? c : {};
                b[N.g.hf] = !0;
                if (a.vtp_enableConversionLinkingSettings) {
                    var d = !a.hasOwnProperty("vtp_enableConversionLinker") || !!a.vtp_enableConversionLinker;
                    b[N.g.Ha] = a.vtp_conversionCookiePrefix;
                    b[N.g.wa] = d
                }
                a.vtp_enableDynamicRemarketing && (a.vtp_eventValue && (b[N.g.ba] = a.vtp_eventValue), a.vtp_eventItems && (b[N.g.W] = a.vtp_eventItems));
                a.vtp_rdp && (b[N.g.Lb] = !0);
                a.vtp_userId && (b[N.g.za] = a.vtp_userId);
                b[N.g.Aa] = At(N.g.Aa), b[N.g.V] = At(N.g.V), b[N.g.Fb] = At(N.g.Fb), b[N.g.Oa] = At(N.g.Oa);
                var e = Om(Nm(Mm(Lm(Em(new Dm(a.vtp_gtmEventId, a.vtp_gtmPriorityId), b), a.vtp_gtmOnSuccess), a.vtp_gtmOnFailure))),
                    f = "AW-" + a.vtp_conversionId;
                a.vtp_conversionLabel && (f += "/" + a.vtp_conversionLabel);
                e.eventMetadata.hit_type_override = "remarketing";
                Zv(f, a.vtp_eventName || "", Date.now(), e)
            })
        }();

    Z.o.tg = ["google"],
        function() {
            function a(g) {
                f.push(g);
                1 < f.length || F(function() {
                    var l = f.join(",");
                    f = [];
                    Bt({
                        event: "gtm.triggerGroup",
                        "gtm.triggers": l
                    })
                })
            }

            function b(g, l) {
                var m = c[l],
                    n = m.indexOf(g); - 1 !== n && (m.splice(n, 1), m.length || a(l))
            }
            var c = {},
                d = {},
                e = [],
                f = [];
            (function(g) {
                Z.__tg = g;
                Z.__tg.s = "tg";
                Z.__tg.isVendorTemplate = !0;
                Z.__tg.priorityOverride = 0;
                Z.__tg.isInfrastructure = !1
            })(function(g) {
                F(g.vtp_gtmOnSuccess);
                var l = g.vtp_uniqueTriggerId,
                    m = g.vtp_triggerIds,
                    n = g.vtp_firingId;
                if (g.vtp_isListeningTag) {
                    var p = d[n];
                    p ? b(n, p) : e.push(n)
                } else {
                    c[l] = m;
                    for (var q = 0, t; t = m[q]; q++) d[t] = l;
                    for (var r = 0; r < e.length; r++) b(e[r], l)
                }
            })
        }();

    Z.o.ua = ["google"],
        function() {
            function a(m, n) {
                for (var p in m)
                    if (!l[p] && m.hasOwnProperty(p)) {
                        var q = g[p] ? Ca(m[p]) : m[p];
                        "anonymizeIp" != p || q || (q = void 0);
                        n[p] = q
                    }
            }

            function b(m) {
                var n = {};
                m.vtp_gaSettings && K(Kx(m.vtp_gaSettings.vtp_fieldsToSet, "fieldName", "value"), n);
                K(Kx(m.vtp_fieldsToSet, "fieldName", "value"), n);
                Ca(n.urlPassthrough) && (n._useUp = !0);
                m.vtp_transportUrl && (n._x_19 = m.vtp_transportUrl);
                return n
            }

            function c(m, n) {
                return void 0 === n ? n : m(n)
            }

            function d(m, n, p) {}

            function e(m, n) {
                if (!f) {
                    var p = m.vtp_useDebugVersion ? "u/analytics_debug.js" : "analytics.js";
                    m.vtp_useInternalVersion && !m.vtp_useDebugVersion && (p = "internal/" + p);
                    f = !0;
                    var q = m.vtp_gtmOnFailure,
                        t = ve || xe ? dp(n._x_19, "/analytics.js") : void 0,
                        r = Rl("https:", "http:", "//www.google-analytics.com/" + p, n && !!n.forceSSL);
                    V("analytics.js" === p && t ? t : r, function() {
                        var u = Qp();
                        u && u.loaded || q();
                    }, q)
                }
            }
            var f, g = {
                    allowAnchor: !0,
                    allowLinker: !0,
                    alwaysSendReferrer: !0,
                    anonymizeIp: !0,
                    cookieUpdate: !0,
                    exFatal: !0,
                    forceSSL: !0,
                    javaEnabled: !0,
                    legacyHistoryImport: !0,
                    nonInteraction: !0,
                    useAmpClientId: !0,
                    useBeacon: !0,
                    storeGac: !0,
                    allowAdFeatures: !0,
                    allowAdPersonalizationSignals: !0,
                    _cd2l: !0
                },
                l = {
                    urlPassthrough: !0
                };
            (function(m) {
                Z.__ua = m;
                Z.__ua.s = "ua";
                Z.__ua.isVendorTemplate = !0;
                Z.__ua.priorityOverride = 0;
                Z.__ua.isInfrastructure = !1
            })(function(m) {
                function n() {
                    if (m.vtp_doubleClick || "DISPLAY_FEATURES" == m.vtp_advertisingFeaturesType) v.displayfeatures = !0
                }
                var p = {},
                    q = {},
                    t = {};
                if (m.vtp_gaSettings) {
                    var r = m.vtp_gaSettings;
                    K(Kx(r.vtp_contentGroup, "index", "group"), p);
                    K(Kx(r.vtp_dimension, "index", "dimension"), q);
                    K(Kx(r.vtp_metric, "index", "metric"), t);
                    var u = K(r);
                    u.vtp_fieldsToSet = void 0;
                    u.vtp_contentGroup = void 0;
                    u.vtp_dimension = void 0;
                    u.vtp_metric = void 0;
                    m = K(m, u)
                }
                K(Kx(m.vtp_contentGroup, "index", "group"), p);
                K(Kx(m.vtp_dimension, "index", "dimension"), q);
                K(Kx(m.vtp_metric, "index", "metric"), t);
                var v = b(m),
                    w = String(m.vtp_trackingId || ""),
                    x = "",
                    y = "",
                    A = "";
                m.vtp_setTrackerName &&
                    "string" == typeof m.vtp_trackerName ? "" !== m.vtp_trackerName && (A = m.vtp_trackerName, y = A + ".") : (A = "gtm" + He(), y = A + ".");
                var B = function(ea, Q) {
                    for (var ya in Q) Q.hasOwnProperty(ya) && (v[ea + ya] = Q[ya])
                };
                B("contentGroup", p);
                B("dimension", q);
                B("metric", t);
                m.vtp_enableEcommerce && (x = m.vtp_gtmCachedValues.event, v.gtmEcommerceData = d(m, v, x));
                if ("TRACK_EVENT" === m.vtp_trackType) x = "track_event", n(), v.eventCategory = String(m.vtp_eventCategory), v.eventAction = String(m.vtp_eventAction), v.eventLabel = c(String, m.vtp_eventLabel),
                    v.value = c(Ba, m.vtp_eventValue);
                else if ("TRACK_PAGEVIEW" == m.vtp_trackType) {
                    if (x = N.g.hc, n(), "DISPLAY_FEATURES_WITH_REMARKETING_LISTS" == m.vtp_advertisingFeaturesType && (v.remarketingLists = !0), m.vtp_autoLinkDomains) {
                        var D = {};
                        D[N.g.O] = m.vtp_autoLinkDomains;
                        D.use_anchor = m.vtp_useHashAutoLink;
                        D[N.g.yb] = m.vtp_decorateFormsAutoLink;
                        v[N.g.ya] = D
                    }
                } else "TRACK_SOCIAL" === m.vtp_trackType ? (x = "track_social", v.socialNetwork = String(m.vtp_socialNetwork), v.socialAction = String(m.vtp_socialAction), v.socialTarget = String(m.vtp_socialActionTarget)) :
                    "TRACK_TIMING" == m.vtp_trackType && (x = "timing_complete", v.eventCategory = String(m.vtp_timingCategory), v.timingVar = String(m.vtp_timingVar), v.value = Ba(m.vtp_timingValue), v.eventLabel = c(String, m.vtp_timingLabel));
                m.vtp_enableRecaptcha && (v.enableRecaptcha = !0);
                m.vtp_enableLinkId && (v.enableLinkId = !0);
                var I = {};
                a(v, I);
                v.name || (I.gtmTrackerName = A);
                I.gaFunctionName = m.vtp_functionName;
                void 0 !== m.vtp_nonInteraction && (I.nonInteraction = m.vtp_nonInteraction);
                var H = Om(Nm(Mm(Lm(Em(new Dm(m.vtp_gtmEventId, m.vtp_gtmPriorityId),
                    I), m.vtp_gtmOnSuccess), m.vtp_gtmOnFailure)));
                dx(w, x, Date.now(), H);
                var E = Sp(m.vtp_functionName);
                if (ra(E)) {
                    var J = function(ea) {
                        var Q = [].slice.call(arguments, 0);
                        Q[0] = y + Q[0];
                        E.apply(window, Q)
                    };
                    if ("TRACK_TRANSACTION" == m.vtp_trackType) {} else if ("DECORATE_LINK" == m.vtp_trackType) {} else if ("DECORATE_FORM" == m.vtp_trackType) {} else if ("TRACK_DATA" == m.vtp_trackType) {}
                    e(m, v)
                } else F(m.vtp_gtmOnFailure)
            })
        }();
    Z.o.gas = ["google"],
        function() {
            (function(a) {
                Z.__gas = a;
                Z.__gas.s = "gas";
                Z.__gas.isVendorTemplate = !0;
                Z.__gas.priorityOverride = 0;
                Z.__gas.isInfrastructure = !1
            })(function(a) {
                var b = K(a),
                    c = b;
                c[cc.Bb] = null;
                c[cc.Gf] = null;
                var d = b = c;
                d.vtp_fieldsToSet = d.vtp_fieldsToSet || [];
                var e = d.vtp_cookieDomain;
                void 0 !== e && (d.vtp_fieldsToSet.push({
                    fieldName: "cookieDomain",
                    value: e
                }), delete d.vtp_cookieDomain);
                return b
            })
        }();
    Z.o.awct = ["google"],
        function() {
            function a(b, c, d) {
                return function(e, f, g) {
                    c[e] = "DATA_LAYER" === d ? At(g) : b[f]
                }
            }(function(b) {
                Z.__awct = b;
                Z.__awct.s = "awct";
                Z.__awct.isVendorTemplate = !0;
                Z.__awct.priorityOverride = 0;
                Z.__awct.isInfrastructure = !1
            })(function(b) {
                var c = !b.hasOwnProperty("vtp_enableConversionLinker") || !!b.vtp_enableConversionLinker,
                    d = !!b.vtp_enableEnhancedConversions || !!b.vtp_enableEnhancedConversion,
                    e = Kx(b.vtp_customVariables, "varName", "value") || {},
                    f = {},
                    g = (f[N.g.ba] = b.vtp_conversionValue || 0, f[N.g.ra] =
                        b.vtp_currencyCode, f[N.g.ma] = b.vtp_orderId, f[N.g.Ha] = b.vtp_conversionCookiePrefix, f[N.g.wa] = c, f[N.g.ae] = d, f[N.g.la] = At(N.g.la), f[N.g.X] = At("developer_id"), f);
                g[N.g.Aa] = At(N.g.Aa), g[N.g.V] = At(N.g.V), g[N.g.Fb] = At(N.g.Fb), g[N.g.Oa] = At(N.g.Oa);
                b.vtp_rdp && (g[N.g.Lb] = !0);
                if (b.vtp_enableCustomParams)
                    for (var l in e) le.hasOwnProperty(l) || (g[l] = e[l]);
                if (b.vtp_enableProductReporting) {
                    var m = a(b, g, b.vtp_productReportingDataSource);
                    m(N.g.ee, "vtp_awMerchantId", "aw_merchant_id");
                    m(N.g.ce, "vtp_awFeedCountry", "aw_feed_country");
                    m(N.g.de, "vtp_awFeedLanguage", "aw_feed_language");
                    m(N.g.be, "vtp_discount", "discount");
                    m(N.g.W, "vtp_items", "items")
                }
                b.vtp_enableShippingData && (g[N.g.dd] = b.vtp_deliveryPostalCode, g[N.g.je] = b.vtp_estimatedDeliveryDate, g[N.g.vb] = b.vtp_deliveryCountry, g[N.g.Wc] = b.vtp_shippingFee);
                b.vtp_transportUrl && (g[N.g.uc] = b.vtp_transportUrl);
                if (b.vtp_enableNewCustomerReporting) {
                    var n = a(b, g, b.vtp_newCustomerReportingDataSource);
                    n(N.g.Zc, "vtp_awNewCustomer", "new_customer");
                    n(N.g.fe, "vtp_awCustomerLTV", "customer_lifetime_value")
                }
                var p;
                a: {
                    if (b.vtp_enableEnhancedConversion) {
                        var q = b.vtp_cssProvidedEnhancedConversionValue || b.vtp_enhancedConversionObject;
                        if (q) {
                            p = {
                                enhanced_conversions_mode: "manual",
                                enhanced_conversions_manual_var: q
                            };
                            break a
                        }
                    }
                    p = void 0
                }
                var t = p;
                if (t) {
                    var r = {};
                    g[N.g.Yc] = (r[b.vtp_conversionLabel] = t, r)
                }
                var u = Om(Nm(Mm(Lm(Em(new Dm(b.vtp_gtmEventId, b.vtp_gtmPriorityId), g), b.vtp_gtmOnSuccess), b.vtp_gtmOnFailure))),
                    v = "AW-" +
                    b.vtp_conversionId + "/" + b.vtp_conversionLabel;
                u.eventMetadata.hit_type_override = "conversion";
                Zv(v, N.g.Ea, Date.now(), u)
            })
        }();
    Z.o.remm = ["google"],
        function() {
            (function(a) {
                Z.__remm = a;
                Z.__remm.s = "remm";
                Z.__remm.isVendorTemplate = !0;
                Z.__remm.priorityOverride = 0;
                Z.__remm.isInfrastructure = !1
            })(function(a) {
                for (var b = a.vtp_input, c = a.vtp_map || [], d = a.vtp_fullMatch, e = a.vtp_ignoreCase ? "gi" : "g", f = a.vtp_defaultValue, g = 0; g < c.length; g++) {
                    var l = c[g].key || "";
                    d && (l = "^" + l + "$");
                    var m = new RegExp(l, e);
                    if (m.test(b)) {
                        var n = c[g].value;
                        a.vtp_replaceAfterMatch && (n = String(b).replace(m, n));
                        f = n;
                        break
                    }
                }
                It(f, "remm", a.vtp_gtmEventId);
                return f
            })
        }();





    Z.o.html = ["customScripts"],
        function() {
            function a(d, e, f, g) {
                return function() {
                    try {
                        if (0 < e.length) {
                            var l = e.shift(),
                                m = a(d, e, f, g);
                            if ("SCRIPT" == String(l.nodeName).toUpperCase() && "text/gtmscript" == l.type) {
                                var n = C.createElement("script");
                                n.async = !1;
                                n.type = "text/javascript";
                                n.id = l.id;
                                n.text = l.text || l.textContent || l.innerHTML || "";
                                l.charset && (n.charset = l.charset);
                                var p = l.getAttribute("data-gtmsrc");
                                p && (n.src = p, Gb(n, m));
                                d.insertBefore(n, null);
                                p || m()
                            } else if (l.innerHTML && 0 <= l.innerHTML.toLowerCase().indexOf("<script")) {
                                for (var q = []; l.firstChild;) q.push(l.removeChild(l.firstChild));
                                d.insertBefore(l, null);
                                a(l, q, m, g)()
                            } else d.insertBefore(l, null), m()
                        } else f()
                    } catch (t) {
                        F(g)
                    }
                }
            }

            function b(d) {
                if (C.body) {
                    var e = d.vtp_gtmOnFailure,
                        f = Jt(d.vtp_html, d.vtp_gtmOnSuccess, e),
                        g = f.Ak,
                        l = f.M;
                    if (d.vtp_useIframe) {} else d.vtp_supportDocumentWrite ? c(g, l, e) : a(C.body, Sb(g), l, e)()
                } else ut(function() {
                    b(d)
                }, 200)
            }
            var c = function(d, e, f) {
                Dp(function() {
                    var g = google_tag_manager_external.postscribe.getPostscribe(),
                        l = {
                            done: e
                        },
                        m = C.createElement("div");
                    m.style.display = "none";
                    m.style.visibility = "hidden";
                    C.body.appendChild(m);
                    try {
                        g(m, d, l)
                    } catch (n) {
                        F(f)
                    }
                })
            };
            Z.__html = b;
            Z.__html.s =
                "html";
            Z.__html.isVendorTemplate = !0;
            Z.__html.priorityOverride = 0;
            Z.__html.isInfrastructure = !1
        }();


    var dz = {};
    dz.macro = function(a) {
        if (Ic.Hf.hasOwnProperty(a)) return Ic.Hf[a]
    }, dz.onHtmlSuccess = Ic.Xh(!0), dz.onHtmlFailure = Ic.Xh(!1);
    dz.dataLayer = Oe;
    dz.callback = function(a) {
        Ee.hasOwnProperty(a) && ra(Ee[a]) && Ee[a]();
        delete Ee[a]
    };
    dz.bootstrap = 0;
    dz._spx = !1;

    function ez() {
        ne[U.C] = ne[U.C] || dz;
        U.rb && (ne["ctid_" + U.rb] = dz);
        hi();
        ki() || k(li(), function(a, b) {
            jp(a, b.transportUrl, b.context);
            L(92)
        });
        Ka(Fe, Z.o);
        Jc();
        Kc = Sc
    }
    (function(a) {
        function b() {
            m = C.documentElement.getAttribute("data-tag-assistant-present");
            xs(m) && (l = g.Bj)
        }
        if (!z["__TAGGY_INSTALLED"]) {
            var c = !1;
            if (C.referrer) {
                var d = wf(C.referrer);
                c = "cct.google" === rf(d, "host")
            }
            if (!c) {
                var e = Ih("googTaggyReferrer");
                c = e.length && e[0].length
            }
            c && (z["__TAGGY_INSTALLED"] = !0, Kb("https://cct.google/taggy/agent.js"))
        }
        if (ze) a();
        else {
            var f = function(u) {
                    var v = "GTM",
                        w = "GTM";
                    te ? (v = "OGT", w = "GTAG") : ze && (w = v = "OPT");
                    var x = z["google.tagmanager.debugui2.queue"];
                    x || (x = [],
                        z["google.tagmanager.debugui2.queue"] = x, Kb("https://" + me.Xd + "/debug/bootstrap?id=" + U.C + "&src=" + w + "&cond=" + u + "&gtm=" + ni()));
                    var y = {
                        messageType: "CONTAINER_STARTING",
                        data: {
                            scriptSource: Eb,
                            containerProduct: v,
                            debug: !1,
                            id: U.C,
                            destinations: fi()
                        }
                    };
                    y.data.resume = function() {
                        a()
                    };
                    me.Hi && (y.data.initialPublish = !0);
                    x.push(y)
                },
                g = {
                    Ol: 1,
                    Cj: 2,
                    Oj: 3,
                    Ji: 4,
                    Bj: 5
                },
                l = void 0,
                m = void 0,
                n = uf(z.location, "query", !1, void 0, "gtm_debug");
            xs(n) && (l = g.Cj);
            if (!l && C.referrer) {
                var p = wf(C.referrer);
                "tagassistant.google.com" === rf(p, "host") && (l = g.Oj)
            }
            if (!l) {
                var q =
                    Ih("__TAG_ASSISTANT");
                q.length && q[0].length && (l = g.Ji)
            }
            l || b();
            if (!l && ys(m)) {
                var t = function() {
                        if (r) return !0;
                        r = !0;
                        b();
                        l && Eb ? f(l) : a()
                    },
                    r = !1;
                Ob(C, "TADebugSignal", function() {
                    t()
                }, !1);
                z.setTimeout(function() {
                    t()
                }, 200)
            } else l && Eb ? f(l) : a()
        }
    })(function() {
        if (S(70)) {
            var a = bo(Xn.F.cf, U.C);
            co(a)
        }
        xg().m();
        Yi();
        if (U.rb ? ne["ctid_" + U.rb] : ne[U.C]) {
            var b = ne.zones;
            b && b.unregisterChild(ei());
        } else {
            (S(11) || S(13) || S(55) || S(48)) && Vj();
            for (var c = data.resource || {}, d = c.macros || [], e = 0; e < d.length; e++) zc.push(d[e]);
            for (var f = c.tags || [], g = 0; g < f.length; g++) Dc.push(f[g]);
            for (var l = c.predicates || [], m = 0; m < l.length; m++) Cc.push(l[m]);
            for (var n = c.rules || [], p = 0; p < n.length; p++) {
                for (var q = n[p], t = {}, r = 0; r < q.length; r++) t[q[r][0]] = Array.prototype.slice.call(q[r], 1);
                Bc.push(t)
            }
            Fc = Z;
            Gc = gu;
            ez();
            if (S(102)) {
                for (var u = Ue["7"], v = u ? u.split("|") : [], w = {}, x = 0; x < v.length; x++) w[v[x]] = !0;
                for (var y = 0; y < kh.length; y++) {
                    var A = kh[y],
                        B = w[A] ? "granted" : "denied";
                    Eg().implicit(A, B)
                }
            }
            ws();
            yp = !1;
            zp = 0;
            if ("interactive" == C.readyState && !C.createEventObject || "complete" == C.readyState) Bp();
            else {
                Ob(C, "DOMContentLoaded", Bp);
                Ob(C, "readystatechange", Bp);
                if (C.createEventObject && C.documentElement.doScroll) {
                    var D = !0;
                    try {
                        D = !z.frameElement
                    } catch (Y) {}
                    D && Cp()
                }
                Ob(z, "load", Bp)
            }
            Mr = !1;
            "complete" === C.readyState ? Or() : Ob(z, "load", Or);
            hj && z.setInterval(lj, 864E5);
            google_tag_manager_external.postscribe.installPostscribe();
            $a("HEALTH", 1);
            De = Ha();
            dz.bootstrap = De;
            if (S(70)) {
                var J = bo(Xn.F.Ag, U.C);
                if (co(J)) {
                    var M = bo(Xn.F.cf, U.C);
                    eo(J, M)
                }
            }
        }
    });

})()