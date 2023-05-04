const fetchBrother = function () {
    $('#brother').load('/api/brother');
};

setInterval(fetchBrother, 2000); // polling

const fetchTime = function () {
    $.ajax('/api/time').done(function (time) {
        $('#time').text(time);
    });
};

setInterval(fetchTime, 1000); // polling

const fetchUptime = function () {
    $.ajax('/api/uptime').done(function (uptime) {
        $('#uptime').text(uptime);
    });
};

setInterval(fetchUptime, 4000); // polling

const fetchCalls = function () {
    $.ajax('/api/calls').done(function (calls) {
        $('#calls').text(calls);
    });
};

setInterval(fetchCalls, 6000); // polling