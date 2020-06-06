var varKey = 'list3';
var imgKey = 's_i_jjillqa2020';
console.log('varKey', varKey);
console.log('imgKey', imgKey);

var opt_accountId = 'jjillqa2020';
var opt_delimiter = '_';
var opt_linkTrackEvents;

// translate array of objects into array of strings
var xr = [];
for (var i = 0, len = campaigns.length; i < len; i++) {
    var campaign = campaigns[i];
    console.log('campaign', campaign);
    xr.push(campaign.key + ':' + campaign.split);
}

var pollingFunction = function(interval, timeout, isReady, onReady, opt_onTimeout) {
    console.group('pollingFunction');
    (function() {
        if (isReady()) {
            onReady();
        } else {
            if (timeout > 0) {
                timeout -= interval;
                setTimeout(/** @type {function()} */ (arguments.callee), interval);
            } else {
                if (opt_onTimeout) {
                    opt_onTimeout();
                }
            }
        }
    })();
    console.groupEnd();
};

var submitToSiteCat = function(accountId, varKey, opt_linkTrackEvents, opt_delimiter) {
    console.group('submitToSiteCat');
    console.log('accountId', accountId);
    console.log('varKey', varKey);
    console.log('opt_linkTrackEvents', opt_linkTrackEvents);
    console.log('opt_delimiter', opt_delimiter);

    var s = window.s_gi(accountId);
    console.log('s', s);
    if (s && s.tl) {
        var reportTxt = opt_delimiter ? xr.join(opt_delimiter) : xr.join('|');
        s.linkTrackVars = varKey + (opt_linkTrackEvents ? ',events' : '');
        if (opt_linkTrackEvents) {
            s.linkTrackEvents = opt_linkTrackEvents;
            s.events = s.linkTrackEvents;
        }
        console.log('reportTxt', reportTxt);
        s[varKey] = reportTxt;

        s.tl(true, 'o', 'Monetate');
    }
    console.groupEnd();
};

var pollForSiteCat = function(successHandler, imgKey, opt_accountId) {
    console.group('pollForSiteCat');
    var pageViewComplete = function() {
        console.log('imgKey', imgKey);
        var pageViewPixel = window[imgKey];
        console.log('pageViewPixel', pageViewPixel);
        return pageViewPixel && pageViewPixel.src && pageViewPixel.complete;
    };

    pollingFunction(50, 10000, function() { // every 50ms for 10s
        console.log('window.s_gi', window.s_gi);
        console.log('window.Image', window.Image);
        console.log('account', (opt_accountId) ? true : window.s_account);
        console.log('pageViewComplete', typeof pageViewComplete());

        console.log('isReady', window.s_gi && window.Image && ((opt_accountId) ? true : window.s_account) && pageViewComplete());
        return window.s_gi && window.Image && ((opt_accountId) ? true : window.s_account) && pageViewComplete();
    }, function() {
        console.log('onReady');
        successHandler(opt_accountId || window.s_account);
    });
    console.groupEnd();
};

pollForSiteCat(function(accountId) {
    submitToSiteCat(accountId, varKey, opt_linkTrackEvents, opt_delimiter);
}, imgKey, opt_accountId);
