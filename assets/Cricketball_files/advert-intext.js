/**
 * Copyright: CADENAS GmbH
 * Authors: Manuel Ritz, Stefan Greiner
 * Date: 16.12.2014
 */

(function ($) {
    "use strict";
    function CnsInTextAds() {
        this.serviceUri = 'cadenasadverts/service/gettoolboxes';
        if ($(location).attr('pathname').match('/community/admin/cadenasadverts/toolbox')) {
            this.serviceUri += '?admin=true';
        }
        this.toolboxes = {};
    }

    CnsInTextAds.prototype.init = function () {
        var cnsInTextAds = this;
        var def = new $.Deferred();
        $.ajax({
            url: this.serviceUri,
            dataType: 'json',
            type: 'post'
        }).done(function (toolboxes) {
            cnsInTextAds.toolboxes = toolboxes;
            def.resolve();
        }).fail(function () {
            def.reject();
        });
        return def;
    };

    CnsInTextAds.prototype.populateWithInTextAds = function () {
        var cnsInTextAds = this;
        var selectors = this.toolboxes.selectors;
        for (var selector in selectors) {
            if (selectors.hasOwnProperty(selector)) {
                $(selectors[selector]).each(function (i, n) {
                    cnsInTextAds.recursiveReplaceKeywordsWithAds(n);
                });
            }
        }
    };

    CnsInTextAds.prototype.recursiveReplaceKeywordsWithAds = function (node) {
        var cnsInTextAds = this;
        if (node.nodeType === 3) { // text node
            cnsInTextAds.replaceKeywordsWithAds(node);
            return;
        }
        if (node.nodeType === 1) { // element
            $(node).contents().each(function (i, n) {
                cnsInTextAds.recursiveReplaceKeywordsWithAds(n);
            });
        }
    };

    CnsInTextAds.prototype.nodeIsLink = function (node) {
        while (node) {
            if (node.tagName && node.tagName.toUpperCase() === 'A') {
                return true;
            } else {
                node = node.parentNode;
            }
        }
        return false;
    };

    CnsInTextAds.prototype.replaceKeywordsWithAds = function (node) {
        if (this.nodeIsLink(node)) {
            return;
        }
        var cnsInTextAds = this;
        var keywords = cnsInTextAds.toolboxes.keywords;
        var newText = false;
        for (var keyword in keywords) {
            if (keywords.hasOwnProperty(keyword)) {
                var currentKeyword = keywords[keyword];
                var regex = new RegExp('\\b' + currentKeyword.keyword + '\\b', 'gi');
                if (regex.test(node.nodeValue)) {
                    if (newText === false) {
                        newText = node.nodeValue.replace(regex, currentKeyword.link);
                    } else {
                        newText = newText.replace(regex, currentKeyword.link);
                    }
                }
            }
        }
        if (newText !== false) {
            node.nodeValue = "";
            $(node).replaceWith(newText);
        }
    };

    CnsInTextAds.prototype.showInTextAd = function (text, width, height, inTextAdId, event) {
        this.hideInTextAd();
        var intextadvertbox = $("#InTextAdBox" + inTextAdId);
        if (intextadvertbox.length === 0) {
            $(document.body).append($("<div>").attr("id", "InTextAdBox" + inTextAdId).attr("class", "InTextAdBox"));
            intextadvertbox = $("#InTextAdBox" + inTextAdId);
            intextadvertbox.css("height", height + "px");
            intextadvertbox.css("width", width + "px");
            intextadvertbox.html(text);
            intextadvertbox.on("mouseleave", this.hideInTextAd);
        }
        intextadvertbox.show();
        var offsetX = 0;
        var offsetY = -20;
        var epx = event.pageX || event.clientX;
        var epy = event.pageY || event.clientY;
        var positionX = epx + offsetX;
        var positionY = epy + offsetY;
        intextadvertbox.css("left", positionX + "px");
        intextadvertbox.css("top", positionY + "px");
    };

    CnsInTextAds.prototype.hideInTextAd = function () {
        $(".InTextAdBox").hide();
    };

    window.CnsInTextAds = window.CnsInTextAds || new CnsInTextAds();

    $(document).ready(function ($) {
        window.CnsInTextAds.init().done(function () {
            window.CnsInTextAds.populateWithInTextAds();
        });
    });
}(jQuery));



