import ApexCharts from 'apexcharts'

export default function renderAllCharts(){

  var options0 = {
    series: [{
            name: "Desktops",
            data: [90, 40, 10, 41, 35, 51, 49, 120, 62, 69, 91, 148]
    }],
    chart: {
      type: 'area',
  	  width: "100%",
      height: "100%",
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      axisBorder: {
          show: false,
      },
      axisTicks: {
         show: false,
      },
      labels: {
        show: false,
      },
    },
    yaxis: {
      show: false
    },
    fill: {
      gradient: {
        shade: 'dark',
        type: "vertical",
        shadeIntensity: 0.25,
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 0.25,
        stops: [10, 90, 120],
        colorStops: [
                      {
                        offset: 0.2,
                        color: 'black',
                        opacity: 0.4
                      },
                      {
                        offset: 50,
                        color: 'red',
                        opacity: 0.5
                      },
                      {
                        offset: 100,
                        color: '#3D4055',
                        opacity: 0.65
                      }
        ],
      }
    },
    colors:['#F44336'],
    grid: {
      xaxis: {
        lines: {
          show: false
        }
      },
      yaxis: {
        lines: {
          show: false
        }
      }
    },
    tooltip: {
      enable: false,
    },
  }

  var options1 = {
    chart: {
      type: 'donut',
  	  width: "100%",
      height: "100%",
    },
    dataLabels: {
      enabled: false,
    },
    series: [44, 270, 55, 41, 17, 15, 99, 12, 32, 5 ],
    labels: ["Android spynote", "apt rancor", "sinkhole response", "sinkhole securitysecorecard", "android xhelper", "android clickfraud", "patchbrowse", "generic", "predatory", "apt naikon"],
    stroke: {
          show: false,
          width: 0,
          curve: 'smooth',
          colors: ['black']
    },
    legend:{
      labels: {
          colors: "white",
          useSeriesColors: false
      },
      fontSize: '10px',
      fontFamily: 'Helvetica, Arial',
      itemMargin: {
            horizontal: 0,
            vertical: 0
      },
    }
  }

  var options2 = {
    series: [{
            name: "Desktops",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 60]
        }],
    chart: {
        type: 'bar',
        width: "100%",
        height: "100%",
    },
    plotOptions: {
          bar: {
            barHeight: '35%',
            distributed: true,
            horizontal: true,
            startingShape: 'rounded',
            endingShape: 'rounded',
            dataLabels: {
              position: 'center'
            },
          }
    },
    dataLabels: {
          enabled: true,
          textAnchor: 'start',
          style: {
            colors: ['white'],
            fontSize: '10px',
          },

          offsetX: 500,

          dropShadow: {
            enabled: true
          }
    },
    legend: {
      show: false,
    },
    xaxis: {
      show: false,
      categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
      'United States', 'China', 'India'],
      axisBorder: {
          show: false,
      },
      axisTicks: {
         show: false,
      },
      labels: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: true,
        style: {
              colors: "white",
              fontSize: '9px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              cssClass: 'apexcharts-xaxis-label',
        },
      },
    },
    grid: {
      xaxis: {
        lines: {
          show: false
        }
      },
      yaxis: {
        lines: {
          show: false
        }
      }
    },
  }

  var options3 = {
    series: [{
            name: "Desktops",
            data: [10, 41, 35, 12, 49, 2, 10, 69, 91, 148]
        }],
    chart: {
      type: 'bar',
  	width: "100%",
    height: "100%",
    },
    plotOptions: {
          bar: {
            barHeight: '35%',
            distributed: true,
            horizontal: true,
            startingShape: 'rounded',
            endingShape: 'rounded',
            dataLabels: {
              position: 'bottom'
            },
          }
    },
    dataLabels: {
          enabled: true,
          textAnchor: 'start',
          style: {
            colors: ['#fff']
          },

          offsetX: 1000,
          dropShadow: {
            enabled: true
          }
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
      'United States', 'China', 'India'],
      axisBorder: {
          show: false,
      },
      axisTicks: {
         show: false,
      },
      labels: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: true,
        style: {
              colors: "white",
              fontSize: '11px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 400,
              cssClass: 'apexcharts-xaxis-label',
        },
      },
    },
    grid: {
      show: true,
      xaxis: {
        lines: {
          show: false
        }
      },
      yaxis: {
        lines: {
          show: false
        }
      }
    },
  }

  var options4 = {
    series: [{
            name: "Desktops",
            data: [10, 41, 35, 51, 4, 20, 62, 69, 91, 118]
        }],
    chart: {
      type: 'bar',
  	   width: "100%",
       height: "100%",
    },
    plotOptions: {
          bar: {
            barHeight: '35%',
            distributed: true,
            horizontal: true,
            startingShape: 'rounded',
            endingShape: 'rounded',
            dataLabels: {
              position: 'bottom',
            },
          },
    },
    dataLabels: {
          enabled: true,
          textAnchor: 'left',
          style: {
            colors: ['#fff']
          },

          offsetX: 1000,
          dropShadow: {
            enabled: true
          }
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
      'United States', 'China', 'India'],
      axisBorder: {
          show: false,
      },
      axisTicks: {
         show: false,
      },
      labels: {
        show: false,
      },
    },
    yaxis: {
      labels:{
        show: true,
        style: {
                colors: "white",
              fontSize: '11px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 400,
              cssClass: 'apexcharts-xaxis-label',
        },
      },
      axisTicks: {
         show: false,
     },
    },
    grid: {
      xaxis: {
        lines: {
          show: false
        }
      },
      yaxis: {
        lines: {
          show: false
        }
      },
    },
  }
  /////////////////////////////////////////////

  var options = {
          series: [{
          data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
        }],
          chart: {
          type: 'bar',
          height: "100%"
        },
        plotOptions: {
          bar: {
            horizontal: true,
          }
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
            'United States', 'China', 'Germany'
          ],
        }
        };

  /////////////////////////////////////////////

  var chart0 = new ApexCharts(document.querySelector("#chart0"), options0);
  chart0.render();
  var chart1 = new ApexCharts(document.querySelector("#chart1"), options1);
  chart1.render();
  var chart2 = new ApexCharts(document.querySelector("#chart2"), options2);
  chart2.render();
  var chart3 = new ApexCharts(document.querySelector("#chart3"), options3);
  chart3.render();
  var chart4 = new ApexCharts(document.querySelector("#chart4"), options4);
  chart4.render();
}


/*
var options = {
          series: [{
          data: data.slice()
        }],
          chart: {
          id: 'realtime',
          height: 350,
          type: 'line',
          animations: {
            enabled: true,
            easing: 'linear',
            dynamicAnimation: {
              speed: 1000
            }
          },
          toolbar: {
            show: false
          },
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        title: {
          text: 'Dynamic Updating Chart',
          align: 'left'
        },
        markers: {
          size: 0
        },
        xaxis: {
          type: 'datetime',
          range: XAXISRANGE,
        },
        yaxis: {
          max: 100
        },
        legend: {
          show: false
        },
        };

        var chart = new ApexCharts(document.querySelector("#chart"), options);
        chart.render();


        window.setInterval(function () {
        getNewSeries(lastDate, {
          min: 10,
          max: 90
        })

        chart.updateSeries([{
          data: data
        }])
      }, 1000)
*/
