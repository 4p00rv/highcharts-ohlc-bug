$(function() {
    // create the chart
    $('#container').highcharts('StockChart', {

        chart: {
            events: {
                load: function() {

                    /* // set up the updating of the chart each second
                     var series = this.series[0];
                     var isNew = true;
                     setInterval(function() {
                         var open, high, low, close,
                             last = series.data[series.data.length - 1],
                             time = (new Date()).getTime();
                         if (isNew) {
                             open = Math.round(Math.random() * 100),
                                 close = open - Math.round(Math.random() * 15),
                                 high = open + Math.round(Math.random() * 15),
                                 low = close - Math.round(Math.random() * 15);
                             series.addPoint([time, open, high, low, close], true, true, false);
                             isNew = false;
                         } else {
                             if (Math.round((last.x - time) / 1000) % 15 == 0) {
                                 isNew = true;
                             }
                             open = last.open,
                                 close = open - Math.round(Math.random() * 15),
                                 high = Math.max(open + Math.round(Math.random() * 15), last.high),
                                 low = Math.min(close - Math.round(Math.random() * 15), last.low);
                             last.update({
                                 open: open,
                                 high: high,
                                 low: low,
                                 close: close
                             });
                         }

                     }, 1000);*/
                }
            }
        },

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
    }, function(chart) {
        $('#update').click(function() {
            var len = chart.series[0].options.data.length - 1;
            console.log(chart.series[0].options.data[len][4]);
            chart.series[0].options.data[4] = 50;
        });
    });
});