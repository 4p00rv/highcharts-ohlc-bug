$(function() {
    // create the chart
    $('#container').highcharts('StockChart', {


        rangeSelector: {
            buttons: [{
                count: 1,
                type: 'minute',
                text: '1M'
            }, {
                count: 5,
                type: 'minute',
                text: '5M'
            }, {
                type: 'all',
                text: 'All'
            }],
            inputEnabled: false,
            selected: 0
        },

        title: {
            text: 'AAPL Stock Price'
        },
        exporting: {
            enabled: false
        },
        series: [{
            type: 'ohlc',
            name: 'AAPL Stock Price',
            data: (function() {
                // generate an array of random data
                var data = [],
                    time = (new Date()).getTime(),
                    i;

                for (i = -999; i <= 0; i += 1) {
                    var open = Math.round(Math.random() * 100),
                        close = open - Math.round(Math.random() * 15),
                        high = open + Math.round(Math.random() * 15),
                        low = close - Math.round(Math.random() * 15);
                    data.push([
                        time + i * 1000 * 60,
                        open, high, low, close
                    ]);
                }
                return data;
            }()),
            dataGrouping: {
                approximation: 'ohlc',
                enabled: false,
                groupPixelWidth: 5
            }
        }]
    });
});
