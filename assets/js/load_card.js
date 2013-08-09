$(document).ready(function(){
	var startDate = '2013-07-13';
	startDate = new Date(startDate.replace(/-/g,"/"));
	var start_date_UTC_time = startDate.getTime() - startDate.getTimezoneOffset() * 60 * 1000;
	chart12 = new Highcharts.Chart({
		chart: {
			renderTo: 'chart_3',
			type: 'area',
			marginLeft: 15,
    		height: 223,
    		spacingTop: 10,
    		spacingBottom: 0,
    		overflow: false,
    		zIndex: 5
		},
		credits: {
			enabled: false
		},
		title: {
			text: ' '
		},
		colors: ['#31B6AD'],
		xAxis: {
			type: 'datetime',
			dateTimeLabelFormats: {
				day: '%e/%m'  
			},
			lineColor: '#CECECE',
        	gridLineColor: '#EFECEF',
        	gridLineWidth: 1,
        	tickWidth: 0,
			labels:{
				step: 2,
				maxStaggerLines: 1
			},
			tickInterval: (4 * 24 * 3600 * 1000),
			tickColor: '#FFFFFF'
		},
		yAxis: {
			title: {
            	text: ''
          	},
          	allowDecimals: false,
          	endOnTick: false,
          	tickInterval: 1,
          	lineColor: '#CECECE',
          	lineWidth: 2,
          	gridLineColor: '#EFECEF',
          	gridLineWidth: 1,
          	minPadding: 0.3,
          	maxPadding: 1.2
		},
		legend: {
			enabled: false
		},
		tooltip: {
			formatter: function() {
				return '<span style="color:#969696;font-weight:bold;">' + Highcharts.dateFormat('%b %e', this.x) + '</span>' +'<br />' + '<span style="color:#464646;font-weight:bold;">' + this.y + 'mmol/L' + '</span>' + '<br />' + 'click for more info';
			},
//			positioner: function (boxWidth, boxHeight, point) {
//            	return { x: point.plotX+80, y: point.plotY-20 };
//            },
			style: {
				padding: '7px'
			},
			borderColor: '#EAEAEA'
		},
		plotOptions: {
			series: {
				marker: {
					enabled: true, //false false的时候就不会突出显示点 
					lineColor: '#31B6AD',  
					lineWidth: 1,
					radius: 3,  // 点的大小  
					fillColor: '#FFFFFF' // 设置点中间填充的颜色 
				},
				fillOpacity: 0.12,
                lineWidth: 1,
                threshold: null,
                shadow: false
			}
		},
		series: [{
			data: [6.0, 5.9, 5.5, 4.5, 6.2, 6.5, 5.2, 6.0, 5.9, 5.5, 4.5, 6.2, 6.5, 5.2, 6.0, 5.9, 5.5, 4.5, 6.2, 6.5],
			pointStart: start_date_UTC_time,
            pointInterval:1 * 24 * 3600 * 1000
		}]
	});
});