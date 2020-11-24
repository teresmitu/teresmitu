$(document).ready(function(){$(".share").click(function() {
        var gettitle = $(document).attr("title").replace(/[ ]/g, "+");
        switch ($(this).attr("data")) {
        case 'google':
            window.open('https://plus.google.com/share?url=' + encodeURIComponent(String(window.location.href)) + '&t=' + gettitle);
            break;
        case 'facebook':
            window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(String(window.location.href)));
            break;
        case 'twitter':
            window.open('https://twitter.com/intent/tweet?url=' + encodeURIComponent(String(window.location.href)) + '&text=' + gettitle);
            break;
        case 'linkedin':
            window.open('https://www.linkedin.com/shareArticle?ro=false&mini=true&url=' + encodeURIComponent(String(window.location.href)));
            break;
        case 'stumbleupon':
            window.open('http://www.stumbleupon.com/submit?url=' + encodeURIComponent(String(window.location.href)) + '&title=' + gettitle);
            break;
        case 'whatsapp':
            window.open('whatsapp://send?text=' + encodeURIComponent(String(window.location.href)));
            break;
		}
    }),$(".hmenu").click(function(){$("div.leftMenuBlock").addClass("ToggleLmenu"),$("div.leftMenu-close").fadeIn(200)}),$("div.leftMenu-close").click(function(){$("div.leftMenuBlock").removeClass("ToggleLmenu"),$(this).fadeOut(200)}),$(".becomeAnonymous").prepend("<span>WARNING!</span><p>We recommend you to use ExpressVPN while downloading files for safety, it is paid service.</p><p>Hide your IP with a VPN. Governments, hackers and corporations can record your activity whenever you\u2019re online.<br>A VPN gives back your privacy!</p>"),$(".darr").append('<i class="fas fa-long-arrow-alt-down sorticon"></i>'),$(".uarr").append('<i class="fas fa-long-arrow-alt-up sorticon"></i>'),$(".Slide1Btn").click(function(){$(this).parent().removeClass("Slide1"),$(this).parent().addClass("Slide2")}),$(".Slide2Btn").click(function(){$(this).parent().removeClass("Slide2"),$(this).parent().addClass("Slide1")}),$(".sp").click(function(){return $(this).next(".spcont").toggleClass("spContentShow"),$(this).toggleClass("spUP"),!1}),$(".smartsp").click(function(){return $(this).next(".smartspcont").toggleClass("SmartSpContentShow"),$(this).toggleClass("SmartSpUP"),!1}),$(".spFTD").click(function(){return $(".spFTDcont").toggleClass("spFTDcontVis"),$(this).toggleClass("spFTDHide"),$(".spFTDClose").toggleClass("spFTDUnvis"),!1}),$(".spFTDClose").click(function(){return $(".spFTD").toggleClass("spFTDHide"),$(".spFTDcont").toggleClass("spFTDcontVis"),$(this).toggleClass("spFTDUnvis"),!1}),$(".bsp").click(function(){return $(this).next(".bspcont").toggleClass("bspcontshow"),$(this).toggleClass("spUP"),!1}),$(".hsReset").click(function(){$(".hsField").val(""),$(".hsField").focus()}),$(".lsReset").click(function(){$(".lsField").val(""),$(".lsField").focus()})});
	