window.onload = function () {
    var loadTime = window.performance.timing.domContentLoadedEventEnd-window.performance.timing.navigationStart;
    document.getElementById("page-load").innerHTML = ('Page load time is '+ loadTime + 'ms');
}