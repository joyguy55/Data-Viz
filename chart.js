//angular.module('createChart',[]{ 
//                         
//        directive('chart',function(){
//            var directiveChart = {
//                restric:'E',
//                link:function(scope,element,attrs){
//                    
//                    var data = attrs.chartData.split(',');
//                    var chart = d3.select(element[0]);
//                    var scale = d3.scale.linear()
//                            .domain([0, 100])
//                            .range([0, 500]);
//
//                    var container = d3.select('body')
//
//                    var content = container        
//                            .selectAll('div')
//                            .data(dataset, function(yearData) {
//                            return yearData.YearA;
//                            });
//
//                            content.enter()
//                            .append('div')
//                            .attr('class','bar')
//                            .text(function(yearData){
//                            return yearData.YearA;
//                            })
//                            .style('width', function(yearData) {
//                                return scale(yearData.PTO) + 'px' ;
//                            });
//                };
//        return directiveChart;
//        }); 


    var dataset = [
{YearA:1789,PTO:11.6,Year:1790,MTO:21.6},
{YearA:1792,PTO:6.3,Year:1794,MTO:25},
{YearA:1796,PTO:20.1,Year:1798,MTO:36},
{YearA:1800,PTO:32.3,Year:1802,MTO:42},
{YearA:1804,PTO:23.8,Year:1806,MTO:45.8},
{YearA:1808,PTO:36.8,Year:1810,MTO:49.8},
{YearA:1812,PTO:40.4,Year:1814,MTO:52.8},
{YearA:1816,PTO:16.9,Year:1818,MTO:41.1},
{YearA:1820,PTO:10.1,Year:1822,MTO:44.7},
{YearA:1824,PTO:26.9,Year:1826,MTO:50.1},
{YearA:1828,PTO:57.3,Year:1830,MTO:55.7},
{YearA:1832,PTO:57,Year:1834,MTO:63},
{YearA:1836,PTO:56.5,Year:1838,MTO:70.8},
{YearA:1840,PTO:80.3,Year:1842,MTO:61.8},
{YearA:1844,PTO:79.2,Year:1846,MTO:60.3},
{YearA:1848,PTO:72.8,Year:1850,MTO:60.5},
{YearA:1852,PTO:69.5,Year:1854,MTO:66.1},
{YearA:1856,PTO:79.4,Year:1858,MTO:69.1},
{YearA:1860,PTO:81.8,Year:1862,MTO:65.1},
{YearA:1864,PTO:76.3,Year:1866,MTO:71.4},
{YearA:1868,PTO:80.9,Year:1870,MTO:67},
{YearA:1872,PTO:72.1,Year:1874,MTO:65},
{YearA:1876,PTO:82.6,Year:1878,MTO:65.2},
{YearA:1880,PTO:80.5,Year:1882,MTO:65.7},
{YearA:1884,PTO:78.2,Year:1886,MTO:63.9},
{YearA:1888,PTO:80.5,Year:1890,MTO:64.6},
{YearA:1892,PTO:75.8,Year:1894,MTO:67.4},
{YearA:1896,PTO:79.6,Year:1898,MTO:60.1},
{YearA:1900,PTO:73.7,Year:1902,MTO:55.6},
{YearA:1904,PTO:65.5,Year:1906,MTO:51.3},
{YearA:1908,PTO:65.7,Year:1910,MTO:52},
{YearA:1912,PTO:59,Year:1914,MTO:50.4},
{YearA:1916,PTO:61.8,Year:1918,MTO:39.9},
{YearA:1920,PTO:49.2,Year:1922,MTO:35.7},
{YearA:1924,PTO:48.9,Year:1926,MTO:32.9},
{YearA:1928,PTO:56.9,Year:1930,MTO:36.7},
{YearA:1932,PTO:56.9,Year:1934,MTO:44.5},
{YearA:1936,PTO:61,Year:1938,MTO:46.6},
{YearA:1940,PTO:62.4,Year:1942,MTO:33.9},
{YearA:1944,PTO:55.9,Year:1946,MTO:38.8},
{YearA:1948,PTO:52.2,Year:1950,MTO:43.6},
{YearA:1952,PTO:62.3,Year:1954,MTO:43.5},
{YearA:1956,PTO:60.2,Year:1958,MTO:45},
{YearA:1960,PTO:63.8,Year:1962,MTO:47.7},
{YearA:1964,PTO:62.8,Year:1966,MTO:48.7},
{YearA:1968,PTO:62.5,Year:1970,MTO:47.3},
{YearA:1972,PTO:56.2,Year:1974,MTO:39.1},
{YearA:1976,PTO:54.8,Year:1978,MTO:39},
{YearA:1980,PTO:54.2,Year:1982,MTO:42},
{YearA:1984,PTO:55.2,Year:1986,MTO:38.1},
{YearA:1988,PTO:52.8,Year:1990,MTO:38.4},
{YearA:1992,PTO:58.1,Year:1994,MTO:41.1},
{YearA:1996,PTO:51.7,Year:1998,MTO:38.1},
{YearA:2000,PTO:54.2,Year:2002,MTO:39.5},
{YearA:2004,PTO:60.1,Year:2006,MTO:40.4},
{YearA:2008,PTO:61.6,Year:2010,MTO:41},
{YearA:2012,PTO:58.2,Year:2014,MTO:35.9}
        ];

var scale = d3.scale.linear()
	.domain([0, 100])
	.range([0, 350]);

var container = d3.select('body')

var content = container.selectAll('div')
                        .data(dataset, function(yearData) {
                        return yearData.YearA;
                        })
                        .enter().append("div")
                        .attr("class", function(d) { return d.YearA; })
                        .attr("diplay","inline")
                        .attr('float','left');

          content.append('text')
                    .text(function(yearData){return yearData.YearA;})// This adds our text from our data
                    .attr('font-size','1px') 
                    .attr('font-color','black')

        content.append('svg')
                    .attr('class','bar')
                    .style('width', function(yearData) {
                        return scale(yearData.PTO) + 'px' ;
                        });

    container.insert("text",":first-child");//not useful yet

                    
