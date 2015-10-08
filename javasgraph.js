/**
 * Created by session1 on 10/7/15.
 */
google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawBasic);

function drawBasic() {

    var data = google.visualization.arrayToDataTable([
        ['Year', 'Population',],
        ['2000-01', 6296],
        ['2001-02', 6407],
        ['2002-03', 6523],
        ['2003-04', 6634],
        ['2004-05', 6720],
        ['2005-06', 6718],
        ['2006-07', 6687],
        ['2007-08', 6597],
        ['2008-09', 6483],
        ['2009-10', 6481],
        ['2010-11', 6436],
        ['2011-12', 6401],
    ]);

    var options = {
        title: 'Population of People with Disabilities',
        chartArea: {width: '50%'},
        hAxis: {
            title: 'Total Population',
            minValue: 0
        },
        vAxis: {
            title: 'Year'
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

    chart.draw(data, options);
}
