function cookieControl(a){if(typeof(a)=="undefined"){a={pollPeriod:25,pollIncrement:1.25}}a.pollPeriod=a.pollPeriod||25;a.pollIncrement=a.pollIncrement||1.25;a.jQueryUrl=a.jQueryUrl||"http://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.min.js";if(typeof(jQuery)=="undefined"||parseInt(jQuery.fn.jquery.replace(/\./g,""))<144){document.write('<script type="text/javascript" src="'+a.jQueryUrl+'"><\/script>')}_cookieControlPoll(a)}function _cookieControlPoll(a){if(typeof(jQuery)=="undefined"){setTimeout(function(){_cookieControlPoll(a)},a.pollPeriod);a.pollPeriod*=a.pollIncrement}else{jQuery(function(){CookieControl.init(a)})}}var CookieControl={options:{countries:"United Kingdom",shape:"triangle",position:"left",theme:"light",introText:"~introduction_text",fullText:"~full_text",cookieOnText:"Cookies are on",cookieOffText:"Cookies are off",cookieName:"civicAllowCookies",protectedCookies:[],iconStatusCookieName:"civicShowCookieIcon",cookiePath:"/",clickFadeSpeed:1000,acceptDelay:400,startOpen:false,autoHide:60000,autoDelete:60000,domain:"",subdomains:true,css:"div#cccwr div{font:11px/16px sans-serif;margin:0;text-align:left}div#cccwr #ccc-icon{cursor:pointer;display:none;z-index:9999;bottom:0;left:0;position:fixed}div#ccc-icon button{background:transparent url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATYAAAB8CAMAAADU1mwlAAAAAXNSR0IArs4c6QAAAGBQTFRFAAAAqNZt////lMxM0Omw+KdG+a1S/vXp+8uR/Ner95kp+rlsrNh0ut6L+bBY+J815/TX/fv2/ebK/uzXl85RxOOc2e2/stt+4PDL+KE6oNJf9Prt7vfi+sJ+/eC995YjExvIaAAAAAF0Uk5TAEDm2GYAAAABYktHRACIBR1IAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3AUJDzImKOEgvwAACwNJREFUeNrNnOmCojAMgDkEERS88MAR3v8tt+WyVwhns/yYcXYxTT/SNE1THAe4KnY56DXilq2uivICdUrCIMHBVRUhtTCddbGvhUxt/vW5EoBeV+y/giBIU4xKlRJxYw1XSRbPuoJvrXT1DeNqzvezxNzpKgzjuGIiwxChUiUJCTfebhXOwxZ0j7pKg1kCMjOVKgziZgjHAcKNAaawNzbAwrnYgp/CM7mZsf2ocW5BNaz/O7DPjXU3m4tNUnceNyM2PkJ/UwbCjatunRvvrI6tBfCeQG0Et7ckHMYm2ho+TmvVLXOru6pjKw/cwR/KKdRwbiapBmwqNcTeGtWtcms6qmHL9t41C67efhI1jJtRqo5NpzZsb63qFrm13VSwsWjE87zb3vMuaTWF2iA3QKqGzURtkFunujVuXSclbDzKPHjtdXizIHY8NZgbKFXFZqY2NE571S1x67soYbsxc7h0HeSfrhOogdxAqQo2iNqAvf1Ut8Lt10ERW/X1lOtbTaAGcIOlythgarC9Cf7FAjehe5K1Bfu6W9dvcqg/7bNJ1ABuoFQJ2xA10N5Et7w5N7FzEraq5N2K4iyo3jfuiKpp1MzcQKkiNolanMTNL8zepCBgY25S1yRsEbeGG48WvjF34vtoIjUjN1CqgE22tcAr2V/BbR8j9ibHTptykzsmYEuvzVzHo4XOh1/TadR0bgNSf9iUEcq84S1IGe0U8W/qAmc7bkq3BGxlGyJIPrycrJbSwIDUHpvq12qb5IgjxL+py+nNuKnGIA7SqDaGktvFoR5Z3uU7QymlCVhqh02kFiZJmO47vLcwTZIAtjctC7ERN831SAFIyD02C+QjtoDkY+saVnNUkhuBpbbYpJyHFq14XgKPUz15swk33WHLi6vaD+0T1nrZmMg8hZRmIKkNNnmEvi8qtdvAvGDIeW3AzTDNSdjCVtP9vlH+Es5UR2oIlFpjq9JQ82vNcqIFqPi3tBrGtj43U1AlYTuoTzqaq4zYFCi1xSZHuUk7hQRV/K19XCjHvSi2tbkZQ3gJW3m7lb073pfXWzlbFaExUCrHxu6TsGSH1sSCKG1GbCRjDeSlRRZvzM280FbzbT+fLK5HZygiNWeWWmMLM9GWkoYvi3Nv3j5t/rqlElcc25rcgPSElqYM2RM+HBb4NbN/M0g1YOvG87XKLtLaXyA7Att63KBkmJ4U3/OwKmIT2FIlpCZ1qR22tzgCyw5bIGA7vONp1rYaNzD1qmOLEjaOqiRaroLYqCa1nxKkibSdBm5VzH5fr5zdXhqjVYhOCetxgxPW+IbfAgWQfZl2Jn3H+kyaMm94rXMnF2nKiLN0HLY1uA2oj2Jb1DyyL9OEu2kmcouaGDfolwxfaUJIsXB3PW5DymPYFjY+yK1fXAmzAk+h19Fu+Y1urZ8TbC3EFlf2VKd8ZH3nlWhXvPp4N45DbClvcaBQOghH5fYtD1HUz6L7KCrLpKeWYokjm26ZcjpyFG5x/evahx7ibBCHWJrSahBAGfwI/Zezu14USTkjk61p2KyGnJShtgSgR5R6e/aEv97lDYS5Zmx2FziUCzvHyC0u6/gjLeOhEapis7ycpkwjOAA3bZ80RbaX7SdvKJNW8j0ZtLkco8UM9lOFlClSDYIRWxZipTMEiWnKhLxGwWRrGVqoRbENQrn9Y8AweoSK2Ag23Sg3Gw0cJlBzKLd4Kbe2jSDG+TURG0VBAWUhhYNwi+MUK7CnKl+hLNtxhrkNjlBpSrBfLEVZJOYMcosz9PAQXWkeZUkicE/DDaXmUBaCUhbAgvdwlfBjaJRlx5Tl1tA9/OheOOIYLmGRO2VxP3zTuEPfhEcqKI+SLJVEeICH8uDSithsHxejPCa3Kja7hxMpD2Wui83qUVjKI8DrYrN68JrywDkJtnWO+VO+3oAG2yovlaB8mcZiEXSvMKF8dctyiyV7YQ7li4IWC/j/3s9kgxv4Pz678O/7dKr7lBeo07Eojjg43yek5h7dedfRZWov/LpRJ5dRKwrXxaj4RyJurGH/eZ9nKsWpVto/FfO+f3/6ADW3baBAqPjPJwk33q7vzsNWdI+ajah52MzWxGn547gxs6SwN//Imp2JrfgpPJObGZvvCsIQbkz1wj431l2m+jxskrrzuBmxCbaGc+OqW+fGO6tja7W+T6A2gptJqgmbQg3hVqtumVvdVR3ba8d/Ph5TqOHcTFIN2KQRinNrVLfKremohu3+8V734uV9JlHDuBml6tgM1Aa5tapb5NZ2U8P29Dzv78N+HCdRQ7gZpWrYtBGKcetUt8at66SE7Xh0i123UbMr+Ow+mhrMDZSqYgOoDXDrVbfEre+ihO3secJ5RPbxPIEayA2UqmAzjtBhbj/VrXD7dVDClqub0Kcp1CBuoFQZ2wA1kJvgXyxwE7onYSs+dbfO+WlXf/rcJ1EDuIFSJWyD1CBuolvenJvYOXlKeNXuh/2Lf/9jnx4TqQHcIKkiNpnaU/oFc5Nms425SV0Tsd1zbg1/PFo4+Q9uF/lEaiZusFQBmzwb3L0Xb+v8wexNDgI25SZ3TMB2PNeD6eGffgUj5+M0ajq3Aak/bMocym79K9yPEgQZuKkLnO24Kd0SsL28Xwf76zVZLaWBAak9NtWv1TbJEeeIf1OX05txU41BHKT5pekSi00fu786WshnKKU0AUvtsIm25p6e7vGvw3t23aeQzdO4aVmIjbhprkeaElw+oC5HP3/U0RbTepZKSiOg1BabZGu5fnr5CdubnrzZhJvBYUszae2HPiyuKh7zRqixGUhqg00eoXftjVp/A+PUkPPagJshPJCtrdX082kjenemOlJDoNQam6rTQyxebCMXkYoSIt/9zbmZgioJ20590ru5yohNgVIbbK6+6K/XrmxCrX2cojOKbW1uxlBUwvY6n1+frnMf9tdjtipCY6BUjk1bHDxaskV+bNYXu4GUsDkxvSo384JRSxzlpvXoDEXk5oxSG2xSx08N3w93iJ9jY25/R9DcgHz+ityA9ISGjXuiHX/k7kI1NP+mSm2xidp04/ns++LUkE/Eth43KBmmJ8U/XMtcnMBmKiE1qUttsRXS8ujVhcOFgG13nzZI1+MGpl71pHhej6NTvlwFMdGiSQWmhGaUnjln73Xm7P6eE6eE9bjBCWt8w2+BAsi+TIvtbphJWXB8OTcrs8kz6WrcBtRHsS1qHtmXacPdu57U/Cv6zyeY2hC25dyGlMewLWx8kFu/uBL/sV2PXh55ftaTCS62uLKnOuUjc1RuT31N6oLUHMqBQukgHJXb6fXId7/gOM8frydIzaF0y5TTkaNxE3J06grBRdKUdoMAyuDHMXLjU0G+U6cDF0uK2w05KUNtx8jt6H2eXNPLfZiaQ7nAoVzYOWZuj/qP4wOh5lAupynTCA7ATbtcZHvZfvKGMmnljOTmYsUM9lOFlClSZxw3FyudIUhMUybknVHcXKxQi2IbhHL7xxnDzcXKAkk23Sg3G50R3FysCJVmi5dya9vBublYyTNRQQFlIYWDcnOxAnuq8hXKsh0H4+ZixznIiqUoi8QchJuLHR6iK82jLElEbAg74kdZCEpZAAvRKMZpQ1l2TFluDd3j8/OmI47hEha5Uxb3wzf5ow59Ex6poDxKslQS4QEeyoNLq2Kze1yM8pjcqtjsHk6kPJS5LjarR2EpjwCvi23ktc7Ba8oD5yTY1jnmT/l6Axpsq7xUgvJlGotF0L3ChPLVLYutje6FOZQvClosgPByyC7/H4Cps6roTd8fAAAAAElFTkSuQmCC) no-repeat 0 0;*background-image:url(http://www.civicuk.com/cookie-law/images/ccc-icons.gif);border:0;height:62px;width:62px}div#ccc-icon button span{visibility:hidden}.ccc-left #ccc-icon.ccc-triangle button{background-position:-62px 0!important}.ccc-left .ccc-go #ccc-icon.ccc-triangle button{background-position:-62px -62px!important}.ccc-right #ccc-icon.ccc-triangle button{background-position:-124px 0!important}.ccc-right .ccc-go #ccc-icon.ccc-triangle button{background-position:-124px -62px!important}div#cccwr #ccc-icon.ccc-diamond button{background-position:10px 0!important}div#cccwr .ccc-go #ccc-icon.ccc-diamond button{background-position:10px -62px!important}div#cccwr.ccc-right{left:auto;right:0}div#cccwr.ccc-right .ccc-go #ccc-icon.ccc-diamond button{background-position:0 -62px!important}div#cccwr.ccc-right #ccc-icon.ccc-diamond button{background-position:10px 0!important}div#cccwr.ccc-right #ccc-icon{left:auto;right:0}.ccc-widget{position:fixed;bottom:35px;left:70px;z-index:9999;display:none}div#cccwr.ccc-right .ccc-widget{left:auto;right:70px}.ccc-outer{background:#fff;border:1px solid #f0942b;border-radius:5px;box-shadow:0 0 5px rgba(0,0,0,0.3);color:#888;left:70px;width:200px;bottom:30px}.ccc-expand,.ccc-close,.ccc-inner h2{background:transparent url(data:image/png;base64,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) no-repeat 0 0;*background-image:url(http://www.civicuk.com/cookie-law/images/widget-x.gif);border:0}.ccc-inner{background:#fff;border-radius:5px 5px 5px 0;position:relative;z-index:2}.ccc-content{padding:5px 10px 10px 10px}.ccc-icon{background-position:0 -18px;height:34px;left:0;position:absolute;text-indent:-999em;top:0;width:40px}.ccc-close{background-position:0 -40px;border:0;height:13px;position:absolute;right:11px;text-indent:-999em;top:11px;width:13px}.ccc-inner h2{background-color:#f0942b;background-position:9px 6px;border-radius:3px 3px 0 0;color:#fff;font-size:1.3em;font-weight:bold;margin:0;padding:10px 9px 8px 44px}.ccc-inner p{margin:5px 0 8px;padding:0}.ccc-inner ul{margin:8px 0;padding:0 0 0 12px}.ccc-inner a{color:#f0942b}.ccc-inner a,.ccc-inner a:hover{text-decoration:none}#cccwr button{cursor:pointer}.ccc-inner .ccc-button{background-color:#666;border:1px solid #666;border-radius:3px;box-shadow:inset 0 0 2px #fff;color:#fff;display:block;font-size:1em;font-weight:bold;padding:3px;text-align:center;text-decoration:none;text-shadow:none}.ccc-inner .ccc-browser{background-color:#f0942b;border-color:#f0942b;width:100%}.ccc-expanded{display:none}.ccc-expand{background:#f0942b;border:0;border-radius:0 0 5px 5px;box-shadow:0 0 5px rgba(0,0,0,0.3);color:#fff;bottom:-25px;cursor:pointer;font-size:1em;left:50%;line-height:25px;margin-left:-40px;position:absolute;text-align:center;text-indent:0;width:80px;z-index:1}.ccc-inner .ccc-about{margin:0;position:relative;text-align:right;top:5px}.ccc-about small{font-size:10px}#cccwr.ccc-left .ccc-outer,#cccwr.ccc-left .ccc-inner{border-radius:5px 5px 5px 0}#cccwr.ccc-left .ccc-expand{left:0;margin-left:0;right:auto}#cccwr.ccc-right .ccc-outer,#cccwr.ccc-right .ccc-inner{border-radius:5px 5px 0 5px}#cccwr.ccc-right .ccc-expand{left:auto;right:0}#cccwr.ccc-dark .ccc-outer{background:#333;background-color:rgba(20,20,20,0.9);*background-color:#141414;border-radius:5px 5px 5px 0;border-color:#000;color:#fff}#cccwr.ccc-dark.ccc-right .ccc-outer{border-radius:5px 5px 0 5px}#cccwr.ccc-dark .ccc-inner{background:transparent}#cccwr.ccc-dark .ccc-inner p{color:#fff}#cccwr.ccc-dark .ccc-inner h2{background-color:transparent;background-position:9px -54px;background-repeat:no-repeat}#cccwr.ccc-dark .ccc-content{padding-top:0}#cccwr.ccc-dark .ccc-expand{height:27px;border:1px solid #000;border-top:0;padding-top:0;background:#333;background-color:rgba(20,20,20,0.9);*background-color:#141414}#cccwr.ccc-dark .ccc-close{background-position:0 -100px}#cccwr #ccc-cookies-switch{width:180px;height:30px;overflow:hidden;display:none}#cccwr #cctoggle{display:inline-block;width:180px;height:30px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUQAAAAcCAYAAAAZQMboAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAABJVJREFUeNrsnT1vI0UYgJ93dm3HyV0+SFJEKa498SGh+I4KGiSk+wFATUUdQQlCQqJCQqK8jp9AR4GuSYU4dEJ0QJCuQ0e+Ds5xYu/uzFDYjh1n7eSSdeJdv08ROV57PZ5559l3dsc7sl3bAFgAvgTeBd5AUQB7Zw3/1WeY0hI29rn+LiaEyDzncf0h9fhvbVylyx/AFvD55v1Hu7Jd21gHfp5/8+56aXkRABfFYB3eZ9gJRu1LRJulv54moD6O1xY4/uBjbOILVb0mMDyb+YGm39NYm1JEBCOG0JQB4bB1wF/7v+0C78h2beO7hXuvf1ReWaK1s4+tN3BRjHd+tMQuK8PuQ1EpTvLB4vDrL/B2vpgdotLiSfPbogZTSudSTgcAGAyBKVEt3WKxukojesHvO4+/D4EH5dVXaP2zR7RzQFJv4JOkIy7fE9i4Ovy0S/EidXMD9SIs4nHFrPNohhet/YLKcKDnK0Pi2xCYgMgeA7A8twbwIASq9riJrTewhw1s4whvXXbZoVJcUef2q3kCZjlK9rWdp1aIgojBA6Wgwq14gdCUqyGAj2JcnOASqzJUFKX4x3s83lusS0hcTOwiwGMAvOtIUEWoKMq0qdF7nG+fHjJnhkgqRUVRpkaHpzFaJYqiKD7/QpRKhWA+ZWqICJiCuF4EgkDjNbfNZ8jyaq9gMBKkbhG9qnxlwlw7PY6xcZyyoUDnQ70HazVSc9t82U5d8ji8l9QterJrGoUo0pOdc9nN0evuZ1Ckafvvf83g+zqZqYj0LlYpyhiGd1nkm8P21c42pU+2/uR5n2kZLlaeYgmxX2JZZEyj/r/KfofJddRnDMrRuV646E8SlZyKtS1Af8156M0nD3pR5TzxvYxwxyVrRVEKJETNlBRFUSF2fGhMfqWoMlcUFWKmI9EkQUqlHNSGudhziqKoELOQogTB8Kyrf/7gdWVmIiPn+gkgYdguV7dM55XtZco+6rWanSqTN2Qav5Tk5ubdXt+0G+fa01BGWtNf/08Iu58zZK6fT3v+vLJd5ULMZfejKNfTYcavCn9z8251PKgoiqJCVBRFOX0qQIWoKMqUa3AgQxRjehcN9ES+oihTpMTuolM9IZZCJAyRIMj3nEFFUZSLaRAjAYEEhFI6WYEvBKJgdobw9hyu2QToLDLlmfjbZ+Rp8Sp/8icXBxxb4GOiiGA5ohJWJzOsTxZ3G34bBblgtx98saSF5cCj3m3EJOMOMDlBJQjGhFTDOarl21TDWRIXRSGwFe0evF9eXQI8ZqaCj5POnVpyEN1nfj+c0paTIqAcrRAZmSOwVYqIlFvMu+XJDekzQkxfTU8Gwmromnt98S+jjtenthd7lCgivWVIZ1b4t7kHsNVdqP7X+dprq5WVJVwctxeqdz7bherHLcW0O+ro0P/SNO/eofHehzhbsIXqjWGn+iNH/tmkB3XfwMKnZnvDckJ/JtNTBivJSEBo2kPleuuAP3ef/Afck+3aBsA68A3wduexomDfehU++RRcFWfzvUazCQQbNPjl8CHPo6fauEqXXeAnYHPz/qOn/wMAAP//AwAsi6y4Al7X2gAAAABJRU5ErkJggg==) no-repeat;*background-image:url(http://www.civicuk.com/cookie-law/images/switch.png);*background-repeat:no-repeat;line-height:28px;font-size:13px;color:white}.cctoggle-on{background-position:100% 0!important}#cccwr #ccc-implicit-warning{display:none}#cccwr #ccc-explicit-checkbox{display:none}#cccwr .cctoggle-text-off{padding-left:20px}#cccwr .cctoggle-text-on{padding-left:70px}",html:'<div id="cccwr"><div id="ccc-state" class="ccc-pause"><div id="ccc-icon"><button><span>Cookie Control</span></button></div><div class="ccc-widget"><div class="ccc-outer"><div class="ccc-inner"><h2>Cookie Control</h2><div class="ccc-content"><p class="ccc-intro"></p><div class="ccc-expanded"></div><div id="ccc-cookies-switch" style="background-position-x: 0;"><a id="cctoggle" href="#" style="background-position-x: 0;"><span id="cctoggle-text">Cookies test</span></a></div><div id="ccc-implicit-warning">(One cookie will be set to store your preference)</div><div id="ccc-explicit-checkbox"><label><input id="cchide-popup" type="checkbox" name="ccc-hide-popup" value="Y" /> Do not ask me again <br /></label>(Ticking this sets a cookie to hide this popup if you then hit close. This will not store any personal information)</div><p class="ccc-about"><small><a href="http://www.civicuk.com/cookie-law" target="_blank" >about this tool</a></small></p><a class="ccc-icon" href="http://www.civicuk.com/cookie-law" target="_blank" title="About Cookie Control">About Cookie Control</a><button class="ccc-close">Close</button></div></div></div><button class="ccc-expand">read more</button></div></div></div>',onReady:null,onCookiesAllowed:null,onCookiesNotAllowed:null,onAccept:null,consentModel:"information_only"},init:function(a){this._jc=false;this.options=jQuery.extend(this.options,a);this.initWidget();this.readyEvent();if(this.maySendCookies()){this.cookiesAllowedEvent()}else{this.cookiesNotAllowedEvent()}},cookieLawApplies:function(){if(this.countryHasCookieLaw()){return true}return false},maySendCookies:function(){if(!this.cookieLawApplies()){return true}if(this.consented()){return true}return false},consented:function(){return this._jc||(this.getCookie(this.options.cookieName)==="yes")},reset:function(){this.setCookie(this.options.cookieName,"",true);this.setCookie(this.options.iconStatusCookieName,"",true);this.setCookie("ccNoPopup","",true)},initWidget:function(){if(!this.cookieLawApplies()){return}if(this.getCookie(this.options.iconStatusCookieName)==="no"){return}this.initShowCookieWidget()},initShowCookieWidget:function(){var e=this.consented();if(jQuery("#cccwr .ccc-outer").length){return}jQuery("head").append('<style type="text/css">'+this.options.css+"</style>");jQuery("body").prepend(this.options.html);var a=jQuery("#ccc-icon");var c=jQuery("#ccc-state");jQuery("#cccwr").addClass("ccc-"+this.options.position);a.addClass("ccc-"+this.options.shape);jQuery("#cccwr .ccc-intro").append(this.options.introText);jQuery("#cccwr .ccc-expanded").prepend(this.options.fullText);jQuery("#cccwr").addClass("ccc-"+this.options.theme);a.show();c.addClass(e?"ccc-go":"ccc-pause");var d=this.getCookie(this.options.cookieName);switch(this.options.consentModel){case"information_only":c.removeClass("ccc-pause").addClass("ccc-go");jQuery("#cctoggle-text").addClass("cctoggle-text-on");jQuery("#cctoggle-text").html(CookieControl.options.cookieOnText);break;case"implicit":jQuery("#cccwr #ccc-cookies-switch").show();if(!d){c.removeClass("ccc-pause").addClass("ccc-go");jQuery("#cctoggle-text").addClass("cctoggle-text-on");jQuery("#cctoggle-text").html(CookieControl.options.cookieOnText);CookieControl._jc=true;CookieControl.acceptEvent();CookieControl.setCookie(CookieControl.options.cookieName,"yes");CookieControl.cookiesAllowedEvent()}CookieControl.options.protectedCookies.push(CookieControl.options.cookieName);break;case"explicit":var b=this.getCookie("ccNoPopup");if(b=="no"){jQuery("#cccwr #cchide-popup").attr("checked",true)}else{jQuery("#cccwr #cchide-popup").removeAttr("checked")}jQuery("#cccwr #ccc-cookies-switch").show();jQuery("#cctoggle-text").addClass("cctoggle-text-off");jQuery("#cctoggle-text").val(CookieControl.options.cookieOffText);break}if(this.options.consentModel!="information_only"){if(d=="yes"){jQuery("#cccwr #ccc-cookies-switch #ccc-cookies-checkbox").attr("checked",true);jQuery("#cctoggle").addClass("cctoggle-on");jQuery("#cctoggle-text").removeClass("cctoggle-text-off").addClass("cctoggle-text-on");jQuery("#cctoggle-text").html(CookieControl.options.cookieOnText)}else{if(!d&&this.options.consentModel=="implicit"){jQuery("#cccwr #ccc-cookies-switch #ccc-cookies-checkbox").attr("checked",true);jQuery("#cctoggle").addClass("cctoggle-on");jQuery("#cctoggle-text").removeClass("cctoggle-text-off").addClass("cctoggle-text-on");jQuery("#cctoggle-text").html(CookieControl.options.cookieOnText)}else{jQuery("#cccwr #ccc-cookies-switch #ccc-cookies-checkbox").removeAttr("checked");jQuery("#cctoggle").removeClass("cctoggle-on");jQuery("#cctoggle-text").removeClass("cctoggle-text-on").addClass("cctoggle-text-off");jQuery("#cctoggle-text").html(CookieControl.options.cookieOffText);if(CookieControl.options.consentModel=="implicit"){jQuery("#cccwr #ccc-implicit-warning").show()}else{if(CookieControl.options.consentModel=="explicit"){jQuery("#cccwr #ccc-explicit-checkbox").show()}}}}}else{if(d==false){c.removeClass("ccc-pause").addClass("ccc-go");jQuery("#cctoggle-text").removeClass("cctoggle-text-off").addClass("cctoggle-text-on");jQuery("#cctoggle-text").html(CookieControl.options.cookieOnText);CookieControl._jc=true;CookieControl.acceptEvent();CookieControl.setCookie(CookieControl.options.cookieName,"yes");CookieControl.cookiesAllowedEvent()}}a.click(function(f){f.preventDefault();jQuery("#cccwr .ccc-widget").clearQueue().fadeToggle(CookieControl.options.clickFadeSpeed)});jQuery("#cccwr #cchide-popup").click(function(g){var f=jQuery(this).attr("checked");var h=CookieControl;if(f==true){h.setCookie("ccNoPopup","no");jQuery("#cccwr .ccc-widget").fadeOut(CookieControl.options.clickFadeSpeed)}else{h.setCookie("ccNoPopup","",true)}});jQuery("#cccwr .ccc-close").click(function(f){f.preventDefault();jQuery("#cccwr .ccc-widget").clearQueue().fadeOut(CookieControl.options.clickFadeSpeed)});jQuery("#cccwr .ccc-expand").click(function(){var f=jQuery(this);if(jQuery(".ccc-expanded").css("display")==="none"){jQuery(".ccc-expanded").slideDown(200,function(){f.text("read less")});jQuery(this).css({backgroundPosition:"center 0"})}else{jQuery(".ccc-expanded").slideUp(200,function(){f.text("read more")});jQuery(this).css({backgroundPosition:"center -9px"})}});jQuery("#cctoggle").click(function(){if(jQuery(this).hasClass("cctoggle-on")){jQuery("#cctoggle-text").html("");jQuery("#cctoggle-text").removeClass("cctoggle-text-on");jQuery(this).animate({"background-position-x":"0"},250,function(){jQuery(this).removeClass("cctoggle-on");c.removeClass("ccc-go").addClass("ccc-pause");CookieControl._jc=false;if(CookieControl.options.consentModel!="explicit"){CookieControl.setCookie(CookieControl.options.cookieName,"no")}else{CookieControl.setCookie(CookieControl.options.cookieName,"",true)}CookieControl.cookiesNotAllowedEvent();if(CookieControl.options.consentModel=="implicit"){jQuery("#cccwr #ccc-implicit-warning").slideDown();jQuery("#cccwr .ccc-widget").fadeOut(5000)}else{if(CookieControl.options.consentModel=="explicit"){if(jQuery.browser.msie&&parseInt(jQuery.browser.version,10)===7){jQuery("#cccwr #ccc-explicit-checkbox").show()}else{jQuery("#cccwr #ccc-explicit-checkbox").slideDown()}}}jQuery("#cctoggle-text").addClass("cctoggle-text-off");jQuery("#cctoggle-text").html(CookieControl.options.cookieOffText);CookieControl.delAllCookies(CookieControl.options.protectedCookies)})}else{jQuery("#cctoggle-text").html("");jQuery("#cctoggle-text").removeClass("cctoggle-text-off");jQuery(this).animate({"background-position-x":"100%"},250,function(){jQuery(this).addClass("cctoggle-on");c.removeClass("ccc-pause").addClass("ccc-go");CookieControl._jc=true;CookieControl.acceptEvent();CookieControl.setCookie(CookieControl.options.cookieName,"yes");CookieControl.cookiesAllowedEvent();if(CookieControl.options.consentModel=="implicit"){jQuery("#cccwr #ccc-implicit-warning").slideUp()}else{if(CookieControl.options.consentModel=="explicit"){jQuery("#cccwr #ccc-explicit-checkbox").slideUp()}}jQuery("#cctoggle-text").addClass("cctoggle-text-on");jQuery("#cctoggle-text").html(CookieControl.options.cookieOnText);jQuery("#cccwr .ccc-widget").fadeOut(2000)})}});var b=this.getCookie("ccNoPopup");if(this.options.startOpen&&d!="yes"&&d!="no"&&b!="no"){jQuery("#cccwr .ccc-widget").fadeIn(this.options.clickFadeSpeed).delay(this.options.autoHide).fadeOut(this.options.clickFadeSpeed,function(){if(!CookieControl.getCookie(CookieControl.options.cookieName)&&CookieControl.options.consentModel!="explicit"){CookieControl._jc=false;CookieControl.setCookie(CookieControl.options.cookieName,"no");CookieControl.cookiesNotAllowedEvent()}});jQuery("#cccwr .ccc-widget").mouseover(function(){jQuery("#cccwr .ccc-widget").clearQueue();if(!CookieControl.getCookie(CookieControl.options.cookieName)&&CookieControl.options.consentModel!="explicit"){CookieControl._jc=false;CookieControl.setCookie(CookieControl.options.cookieName,"no");CookieControl.cookiesNotAllowedEvent()}})}},countryHasCookieLaw:function(){if(this.options.countries&&typeof(geoplugin_countryName)==="function"){var a=geoplugin_countryName().replace(/^\s+|\s+$/g,"");if(typeof(this.options.countries)==="string"){this.options.countries=this.options.countries.split(/\s*,\s*/)}return jQuery.inArray(geoplugin_countryName().replace(/^\s+|\s+$/g,""),this.options.countries)>=0}return true},checkShowIconState:function(){var a=CookieControl;if(jQuery(".ccc-widget input[name=showicon]:checked").val()==="N"){this.setCookie(a.options.iconStatusCookieName,"no");return true}else{this.setCookie(a.options.iconStatusCookieName,"yes");return false}},setCookie:function(a,k,b,l){var e="Thursday, 01-Jan-1970 00:00:01 GMT";if(!b){var g=new Date();var d=1000*60*60*24*90;var c=new Date(g.getTime()+d);var e=c.toGMTString()}var f=this.options.domain;if(f.length===0){var i=window.location.hostname;var h=2;if(i.match(/\.(gov|police|org|co|uk|ltd|me|plc|ac|net)\.\w{2}/)){h=3}var j=i.split(".").reverse();j.length=h;f=j.reverse().toString().replace(/,/g,".")}if(this.options.subdomains===true){domainString=";domain="+f}else{domainString=";domain="+i}document.cookie=a+"="+k+";expires="+e+";path="+this.options.cookiePath+domainString},getCookie:function(a){var b=false;jQuery.each(document.cookie.split(";"),function(e,f){var d=f.split("=");if(d[0].replace(/^\s+|\s+$/g,"")===a){b=unescape(d[1]);return false}});if("undefined"===typeof b){b=false}return b},delCookie:function(a,c,d){var c=c||document.domain;var d=d||"/";var b=a+"=;expires=Thursday, 01-Jan-1970 00:00:01 GMT;; domain="+c+"; path="+d;document.cookie=b},delAllCookies:function(d){if(!this.options.autoDelete){return}var e=document.cookie.split(/;\s*/);var c;for(c=0;c<e.length;c++){var b=e[c];var f=b.indexOf("=");var a=f>-1?b.substr(0,f):b;if(jQuery.inArray(a,d)<0){this.setCookie(a,"",true);this.delCookie(a)}}},acceptEvent:function(a){if(this.firedAcceptEvent||this.getCookie(this.options.cookieName)==="yes"){return}this.firedAcceptEvent=true;if(typeof(this.options.onAccept)=="function"){this.options.onAccept(this)}return a},readyEvent:function(a){if(typeof(this.options.onReady)=="function"){this.options.onReady(this)}return a},cookiesNotAllowedEvent:function(a){if(typeof(this.options.onCookiesNotAllowed)=="function"){this.options.onCookiesNotAllowed(this)}return a},cookiesAllowedEvent:function(a){if(typeof(this.options.onCookiesAllowed)=="function"){this.options.onCookiesAllowed(this)}return a}};;
(function($) {

Drupal.admin = Drupal.admin || {};
Drupal.admin.behaviors = Drupal.admin.behaviors || {};
Drupal.admin.hashes = Drupal.admin.hashes || {};

/**
 * Core behavior for Administration menu.
 *
 * Test whether there is an administration menu is in the output and execute all
 * registered behaviors.
 */
Drupal.behaviors.adminMenu = {
  attach: function (context, settings) {
    // Initialize settings.
    settings.admin_menu = $.extend({
      suppress: false,
      margin_top: false,
      position_fixed: false,
      tweak_modules: false,
      tweak_permissions: false,
      tweak_tabs: false,
      destination: '',
      basePath: settings.basePath,
      hash: 0,
      replacements: {}
    }, settings.admin_menu || {});
    // Check whether administration menu should be suppressed.
    if (settings.admin_menu.suppress) {
      return;
    }
    var $adminMenu = $('#admin-menu:not(.admin-menu-processed)', context);
    // Client-side caching; if administration menu is not in the output, it is
    // fetched from the server and cached in the browser.
    if (!$adminMenu.length && settings.admin_menu.hash) {
      Drupal.admin.getCache(settings.admin_menu.hash, function (response) {
          if (typeof response == 'string' && response.length > 0) {
            $('body', context).append(response);
          }
          var $adminMenu = $('#admin-menu:not(.admin-menu-processed)', context);
          // Apply our behaviors.
          Drupal.admin.attachBehaviors(context, settings, $adminMenu);
          // Allow resize event handlers to recalculate sizes/positions.
          $(window).triggerHandler('resize');
      });
    }
    // If the menu is in the output already, this means there is a new version.
    else {
      // Apply our behaviors.
      Drupal.admin.attachBehaviors(context, settings, $adminMenu);
    }
  }
};

/**
 * Collapse fieldsets on Modules page.
 */
Drupal.behaviors.adminMenuCollapseModules = {
  attach: function (context, settings) {
    if (settings.admin_menu.tweak_modules) {
      $('#system-modules fieldset:not(.collapsed)', context).addClass('collapsed');
    }
  }
};

/**
 * Collapse modules on Permissions page.
 */
Drupal.behaviors.adminMenuCollapsePermissions = {
  attach: function (context, settings) {
    if (settings.admin_menu.tweak_permissions) {
      // Freeze width of first column to prevent jumping.
      $('#permissions th:first', context).css({ width: $('#permissions th:first', context).width() });
      // Attach click handler.
      $modules = $('#permissions tr:has(td.module)', context).once('admin-menu-tweak-permissions', function () {
        var $module = $(this);
        $module.bind('click.admin-menu', function () {
          // @todo Replace with .nextUntil() in jQuery 1.4.
          $module.nextAll().each(function () {
            var $row = $(this);
            if ($row.is(':has(td.module)')) {
              return false;
            }
            $row.toggleClass('element-hidden');
          });
        });
      });
      // Collapse all but the targeted permission rows set.
      if (window.location.hash.length) {
        $modules = $modules.not(':has(' + window.location.hash + ')');
      }
      $modules.trigger('click.admin-menu');
    }
  }
};

/**
 * Apply margin to page.
 *
 * Note that directly applying marginTop does not work in IE. To prevent
 * flickering/jumping page content with client-side caching, this is a regular
 * Drupal behavior.
 */
Drupal.behaviors.adminMenuMarginTop = {
  attach: function (context, settings) {
    if (!settings.admin_menu.suppress && settings.admin_menu.margin_top) {
      $('body:not(.admin-menu)', context).addClass('admin-menu');
    }
  }
};

/**
 * Retrieve content from client-side cache.
 *
 * @param hash
 *   The md5 hash of the content to retrieve.
 * @param onSuccess
 *   A callback function invoked when the cache request was successful.
 */
Drupal.admin.getCache = function (hash, onSuccess) {
  if (Drupal.admin.hashes.hash !== undefined) {
    return Drupal.admin.hashes.hash;
  }
  $.ajax({
    cache: true,
    type: 'GET',
    dataType: 'text', // Prevent auto-evaluation of response.
    global: false, // Do not trigger global AJAX events.
    url: Drupal.settings.admin_menu.basePath.replace(/admin_menu/, 'js/admin_menu/cache/' + hash),
    success: onSuccess,
    complete: function (XMLHttpRequest, status) {
      Drupal.admin.hashes.hash = status;
    }
  });
};

/**
 * TableHeader callback to determine top viewport offset.
 *
 * @see toolbar.js
 */
Drupal.admin.height = function() {
  var $adminMenu = $('#admin-menu');
  var height = $adminMenu.outerHeight();
  // In IE, Shadow filter adds some extra height, so we need to remove it from
  // the returned height.
  if ($adminMenu.css('filter') && $adminMenu.css('filter').match(/DXImageTransform\.Microsoft\.Shadow/)) {
    height -= $adminMenu.get(0).filters.item("DXImageTransform.Microsoft.Shadow").strength;
  }
  return height;
};

/**
 * @defgroup admin_behaviors Administration behaviors.
 * @{
 */

/**
 * Attach administrative behaviors.
 */
Drupal.admin.attachBehaviors = function (context, settings, $adminMenu) {
  if ($adminMenu.length) {
    $adminMenu.addClass('admin-menu-processed');
    $.each(Drupal.admin.behaviors, function() {
      this(context, settings, $adminMenu);
    });
  }
};

/**
 * Apply 'position: fixed'.
 */
Drupal.admin.behaviors.positionFixed = function (context, settings, $adminMenu) {
  if (settings.admin_menu.position_fixed) {
    $adminMenu.addClass('admin-menu-position-fixed');
    $adminMenu.css('position', 'fixed');
  }
};

/**
 * Move page tabs into administration menu.
 */
Drupal.admin.behaviors.pageTabs = function (context, settings, $adminMenu) {
  if (settings.admin_menu.tweak_tabs) {
    var $tabs = $(context).find('ul.tabs.primary');
    $adminMenu.find('#admin-menu-wrapper > ul').eq(1)
      .append($tabs.find('li').addClass('admin-menu-tab'));
    $(context).find('ul.tabs.secondary')
      .appendTo('#admin-menu-wrapper > ul > li.admin-menu-tab.active')
      .removeClass('secondary');
    $tabs.remove();
  }
};

/**
 * Perform dynamic replacements in cached menu.
 */
Drupal.admin.behaviors.replacements = function (context, settings, $adminMenu) {
  for (var item in settings.admin_menu.replacements) {
    $(item, $adminMenu).html(settings.admin_menu.replacements[item]);
  }
};

/**
 * Inject destination query strings for current page.
 */
Drupal.admin.behaviors.destination = function (context, settings, $adminMenu) {
  if (settings.admin_menu.destination) {
    $('a.admin-menu-destination', $adminMenu).each(function() {
      this.search += (!this.search.length ? '?' : '&') + Drupal.settings.admin_menu.destination;
    });
  }
};

/**
 * Apply JavaScript-based hovering behaviors.
 *
 * @todo This has to run last.  If another script registers additional behaviors
 *   it will not run last.
 */
Drupal.admin.behaviors.hover = function (context, settings, $adminMenu) {
  // Hover emulation for IE 6.
  if ($.browser.msie && parseInt(jQuery.browser.version) == 6) {
    $('li', $adminMenu).hover(
      function () {
        $(this).addClass('iehover');
      },
      function () {
        $(this).removeClass('iehover');
      }
    );
  }

  // Delayed mouseout.
  $('li.expandable', $adminMenu).hover(
    function () {
      // Stop the timer.
      clearTimeout(this.sfTimer);
      // Display child lists.
      $('> ul', this)
        .css({left: 'auto', display: 'block'})
        // Immediately hide nephew lists.
        .parent().siblings('li').children('ul').css({left: '-999em', display: 'none'});
    },
    function () {
      // Start the timer.
      var uls = $('> ul', this);
      this.sfTimer = setTimeout(function () {
        uls.css({left: '-999em', display: 'none'});
      }, 400);
    }
  );
};

/**
 * Apply the search bar functionality.
 */
Drupal.admin.behaviors.search = function (context, settings, $adminMenu) {
  // @todo Add a HTML ID.
  var $input = $('input.admin-menu-search', $adminMenu);
  // Initialize the current search needle.
  var needle = $input.val();
  // Cache of all links that can be matched in the menu.
  var links;
  // Minimum search needle length.
  var needleMinLength = 2;
  // Append the results container.
  var $results = $('<div />').insertAfter($input);

  /**
   * Executes the search upon user input.
   */
  function keyupHandler() {
    var matches, $html, value = $(this).val();
    // Only proceed if the search needle has changed.
    if (value !== needle) {
      needle = value;
      // Initialize the cache of menu links upon first search.
      if (!links && needle.length >= needleMinLength) {
        // @todo Limit to links in dropdown menus; i.e., skip menu additions.
        links = buildSearchIndex($adminMenu.find('li:not(.admin-menu-action, .admin-menu-action li) > a'));
      }
      // Empty results container when deleting search text.
      if (needle.length < needleMinLength) {
        $results.empty();
      }
      // Only search if the needle is long enough.
      if (needle.length >= needleMinLength && links) {
        matches = findMatches(needle, links);
        // Build the list in a detached DOM node.
        $html = buildResultsList(matches);
        // Display results.
        $results.empty().append($html);
      }
    }
  }

  /**
   * Builds the search index.
   */
  function buildSearchIndex($links) {
    return $links
      .map(function () {
        var text = (this.textContent || this.innerText);
        // Skip menu entries that do not contain any text (e.g., the icon).
        if (typeof text === 'undefined') {
          return;
        }
        return {
          text: text,
          textMatch: text.toLowerCase(),
          element: this
        };
      });
  }

  /**
   * Searches the index for a given needle and returns matching entries.
   */
  function findMatches(needle, links) {
    var needleMatch = needle.toLowerCase();
    // Select matching links from the cache.
    return $.grep(links, function (link) {
      return link.textMatch.indexOf(needleMatch) !== -1;
    });
  }

  /**
   * Builds the search result list in a detached DOM node.
   */
  function buildResultsList(matches) {
    var $html = $('<ul class="dropdown admin-menu-search-results" />');
    $.each(matches, function () {
      var result = this.text;
      var $element = $(this.element);

      // Check whether there is a top-level category that can be prepended.
      var $category = $element.closest('#admin-menu-wrapper > ul > li');
      var categoryText = $category.find('> a').text()
      if ($category.length && categoryText) {
        result = categoryText + ': ' + result;
      }

      var $result = $('<li><a href="' + $element.attr('href') + '">' + result + '</a></li>');
      $result.data('original-link', $(this.element).parent());
      $html.append($result);
    });
    return $html;
  }

  /**
   * Highlights selected result.
   */
  function resultsHandler(e) {
    var $this = $(this);
    var show = e.type === 'mouseenter' || e.type === 'focusin';
    $this.trigger(show ? 'showPath' : 'hidePath', [this]);
  }

  /**
   * Closes the search results and clears the search input.
   */
  function resultsClickHandler(e, link) {
    var $original = $(this).data('original-link');
    $original.trigger('mouseleave');
    $input.val('').trigger('keyup');
  }

  /**
   * Shows the link in the menu that corresponds to a search result.
   */
  function highlightPathHandler(e, link) {
    if (link) {
      var $original = $(link).data('original-link');
      var show = e.type === 'showPath';
      // Toggle an additional CSS class to visually highlight the matching link.
      // @todo Consider using same visual appearance as regular hover.
      $original.toggleClass('highlight', show);
      $original.trigger(show ? 'mouseenter' : 'mouseleave');
    }
  }

  // Attach showPath/hidePath handler to search result entries.
  $results.delegate('li', 'mouseenter mouseleave focus blur', resultsHandler);
  // Hide the result list after a link has been clicked, useful for overlay.
  $results.delegate('li', 'click', resultsClickHandler);
  // Attach hover/active highlight behavior to search result entries.
  $adminMenu.delegate('.admin-menu-search-results li', 'showPath hidePath', highlightPathHandler);
  // Attach the search input event handler.
  $input.bind('keyup search', keyupHandler);
};

/**
 * @} End of "defgroup admin_behaviors".
 */

})(jQuery);
;
