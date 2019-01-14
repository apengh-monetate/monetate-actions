(function() {

    var open = window.XMLHttpRequest.prototype.open,
    send = window.XMLHttpRequest.prototype.send,
    onReadyStateChange;

    function openReplacement(url) {
        this._url = url;
        return open.apply(this, arguments);
    }


    function sendReplacement(data) {
        if(this.onreadystatechange) {
            this._onreadystatechange = this.onreadystatechange;
        }

        this.onreadystatechange = onReadyStateChangeReplacement;
        return send.apply(this, arguments);
    }


    function onReadyStateChangeReplacement() {
        if (this.readyState == 4 && this.status == 200) {
            hideMoreColorsAvailText();
        }

        if(this._onreadystatechange) {
            return this._onreadystatechange.apply(this, arguments);
        }
    }


    function hideMoreColorsAvailText() {
        var productCells = document.querySelectorAll('.productCell');

        // Loop through products (.productCells)
        for(var i = 0; i < productCells.length; i++) {

            // If there are less than 10 swatches (.productSwatches > li)
            var colorSwatches = productCells[i].querySelectorAll('.productswatches > li');
            if( colorSwatches.length > 10 ) {

                // Hide '.productInfo .moreColors'
                var moreColors = productCells[i].querySelector('.productInfo .moreColors');
                if(moreColors) {
                    moreColors.style.display = 'block';
                }
            }
        }
    }

    window.XMLHttpRequest.prototype.open = openReplacement;
    window.XMLHttpRequest.prototype.send = sendReplacement;

})();
