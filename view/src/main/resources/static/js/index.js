//柱形图模块1
(function (){
    //实例化对象
    var myChart=
        echarts.init(document.querySelector(".bar   .chart"));
    //配置指定项以及数据
    option = {
        tooltip:{
            trigger: 'axis',
            axisPointer:{
                type:'shadow'
                //shadow：阴影指示器、line：直线指示器、cross：十字指示器
            },
            //定义tooltip鼠标放上去后的提示显示效果
            formatter:function (params){
                return'<div>'+params[0].name+'行业<br>'+'发布'+'<span style="color: 0;">'+params[0].value+'</span>个招聘需求'+'</div>';
            }
        },

        xAxis: {
            type: 'category',
            data: ['C', '大数', 'Web前端', 'SQL', 'hadoop', '应用服务', '其他'],
            // 修改刻度标签 相关样式
            axisLabel: {
                color: "white",
                fontSize: "12",
                show: true,
                interval:0,//X轴label显示全
                formatter: function (params) {
                    var newParamsName =
                        "";
                    var paramsNameNumber =
                        params.length;
                    var provideNumber = 3;
                    var rowNumber =
                        Math.ceil(paramsNameNumber / provideNumber);
                    if (paramsNameNumber >
                        provideNumber){
                        for (var p = 0;p <
                        rowNumber; p++){
                            var tempStr =
                                "";
                            var start = p *
                                provideNumber;
                            var end = start +
                                provideNumber;
                            if ( p == rowNumber - 1 )
                            {
                                tempStr =
                                    params.substring(start, paramsNameNumber);
                            } else{
                                tempStr =
                                    params.substring(start, end) + "\n"
                            }
                            newParamsName +=
                                tempStr;
                        }
                    } else {
                        newParamsName = params;
                    }
                    return newParamsName;
                }
            },
            // 不顯示x坐標軸
            axisLine: {
                show: false
            },
        },
        yAxis: {
            type: 'value',
            // 修改刻度标签 相关样式
            axisLabel: {
                color: "white ",
                fontSize: 12,
            },
            // y轴的线条改为了 2像素
            axisLine: {
                lineStyle: {
                    color:
                        "rgba(218,211,211,0.18)",
                    width: 2,
                },
            },
            // y轴分割线的颜色
            splitLine: {
                lineStyle: {
                    color:
                        "rgba(232,226,226,0.65)",
                }
            }
        },
        series: [
            {
                data: [19778, 22307, 23067, 15062, 20279, 17072, 12026],
                type: 'bar',
                name: 'Direct',
                barWidth: '35%',
                itemStyle: {
                    barBorderRadius: 5,
                },
            },
        ],
        color: ["rgba(255,71,142,0.44)"],
        grid: {
            left: "0%",
            top: "10px",
            right: "0%",
            bottom: "4%",
            containLabel: true
        },
    }
    //将配置项给实例对象
    myChart.setOption(option);
    window.addEventListener("reset",function (){
        myChart.resize();
    })
})();


//条形图（柱状图）2
(function (){
    //实例化对象
    var myChart=echarts.init(document.querySelector(".bar2   .chart"));
    // 定义颜色
    var myColor = ["#ff0000", "rgba(255,240,71,0.68)", "rgba(255,255,255,0.56)", "rgb(200,0,255)", "blue", "#F4A460"];
    //指定配置和数据
    var option={
        grid: {
            top: '10%',
            left: '22%',
            bottom: '10%',
        },
        xAxis: {
            show: false,
        },
        yAxis: [{
            type: 'category',
            data: ['Brazil', 'Indonesia', 'USA', 'India', 'China', 'World'],
            inverse: true,
            // 不显示y轴的线
            axisLine: {
                show: false
            },
            // 不显示刻度
            axisTick: {
                show: false
            },
            // 把刻度标签里面的文字颜色设置为白色
            axisLabel: {
                color: "rgba(255,255,255,0.99)"
            },
        },{
            show: true,
            data: [1935, 2338, 3100, 1294, 13441, 6817],
            inverse: true,
            // 不显示y轴的线
            axisLine: {
                show: false
            },
            // 不显示刻度
            axisTick: {
                show: false
            },
            // 把刻度标签里面的文字颜色设置为白色
            axisLabel: {
                textStyle: {
                    color: "rgb(71,212,255)",
                    fontSize: 12,
                }
            },
        }
        ],
        series: [
            {
                name: '框'
                ,
                type: 'bar',
                barCategoryGap: 50,
                BarWidth: 15,
                data: [100, 100, 100, 100, 100, 100],

                // 给series 第二个对象里面的添加
                yAxisIndex: 1,
                itemStyle: {
                    color: "none",
                    borderColor: "0",
                    borderWidth: 18,
                    barBorderRadius: 15
                },
            }
            ,
            {
                name: '条',
                type: 'bar',
                data: [94.19, 100.21, 93.65, 86.33, 98.21, 92.44],
                // 给series 第一个对象里面的添加
                yAxisIndex: 0,
                // 修改第一组柱子的圆角
                itemStyle: {
                    barBorderRadius: 20,
                    color: function
                        (params) {
                        console.log(params);
                        return myColor[params.dataIndex];
                    },
                },
                // 柱子之间的距离
                barCategoryGap: 50,
                // 显示柱子内的文字
                barWidth: 10,
                // 显示柱子内的文字
                label: {
                    show: true,
                    position: "inside",
                    // {c} 会自动的解析为 数据data里面的数据
                    formatter: "{c}%"
                }
            },

        ]
    };
    //把配置给实例对象
    myChart.setOption(option);
    window.addEventListener("reset",function (){
        myChart.resize();
    })
})();


// 折线图1模块制作
(function() {
// 1. 实例化对象
    var myChart =
        echarts.init(document.querySelector(".line   .chart"));

// 2.指定配置
    var option = {
        //通过color修改俩条线的颜色
        color:[ "#00f2f1", "#ed3f35"],
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            //data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
            textStyle: {
                color:"#FFF"//图例文字颜色
            },
            //距离右边10%
            right:'25%' // 距离右边25%
        },

        grid: {
            top:"20%",
            left: '3%',
            right: '4%',
            bottom: '3%',
            show:true,//显示边框
            borderColor: 'red',
            containLabel: true//包含刻度文字在内
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['1月', '2月', '3月',
                '4月', '5月', '6月', '7月', '8月', '9月', '10月'
                , '11月', '12月'],
            axisTick:{
                show:false //去除刻度线
            },
            axisLabel:{
                color:'rgba(255,255,255,0.98)' //文本颜色
            },
            axisLine:{
                show:false //去除轴线
            },
        },
        yAxis: {
            type: 'value',
            axisTick:{
                show:false //去除刻度线
            },
            splitLine: {
                lineStyle:{
                    color:'#012f4a' //分割线颜色
                }
            },
            axisLabel:{
                color:'#ffffff' //文本颜色
            },
        },
        series: [
            {
                name: '校招需求人数',
                type: 'line',
                stack: 'Total',
                data: [24, 40, 101, 134, 90, 230, 210, 230, 120,
                230, 210, 120],
                //true 可以让我们的折线显示带有弧度
                smooth:true,
            },
            {
                name: '社招需求人数',
                type: 'line',
                data: [40, 64, 191, 324, 290, 330, 310
                , 213, 180, 200, 180, 79],
                smooth: true,
            }
        ]
    };

// 3. 把配置给实例对象
    myChart.setOption(option);
    //让图标跟随屏幕去自动适应
    window.addEventListener("resize",function (){
        myChart.resize();
    })
})();
// 折线图2模块制作
(function() {
// 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".line2  .chart"));
// 2.指定配置
    var option = {
        tooltip: {
            trigger: 'axis',
        },
        legend: {
            top:"0%",
            data: ['泰库辣', '太酷了'],
            textStyle: {
                color: "rgb(255,255,255)",
                fontSize: "12"
            },
        },
        grid: {
            left: '5%',
            top: "30",
            right: "10",
            bottom: "10",
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                // x轴更换数据
                data: ["01","02","03","04","05","06","07","08","09","10","11","12","13","14",
                    "15","16","17","18","19","20","21","22","23","24","25","26","26","28","29","30"],
                //文本颜色以及文字大小
                axisLabel: {
                    textStyle: {
                        color: "rgba(255,255,255,0.8)",
                        fontSize: 12
                    }
                },
                //X轴的颜色
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,0.82)"
                    }
                }
            },
        ],
        yAxis: [
            {
                type: 'value',
                //不显示刻度标签
                axisTick: { show: false },
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: 12
                    }
                },
                // 修改分割线的颜色
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                    }
                }
            }
        ],
        series: [
            {
                name: '泰库辣',
                type: 'line',
                //stack: 'Total',
                emphasis: {
                    focus: 'series'
                },
                // 填充区为渐变色
                areaStyle: {
                    //color: 'pink',
                    // 渐变色，只需要复制即可
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {
                                offset: 0,
                                color: "rgba(1, 132, 213, 0.4)",
                                // 渐变色的起始颜色
                            },
                            {
                                offset: 0.8,
                                color: "rgba(1, 132, 213, 0.1)",
                                // 渐变线的结束颜色
                            }
                        ],
                        false ),
                    //影子颜色
                    shadowColor: "rgba(0, 0, 0, 0.1)"
                },
                data: [
                    "16","17","18","19","20","06","07","08","09","10","16","17","18","19",
                    "20","16","17","18","19","20","21","22","23","24","25","26","26","28","29","30"],
                //让曲线变圆滑
                smooth: true,
                // 单独修改线的样式
                lineStyle: {
                    color: "#bf00ff",
                    width: 2
                },
                // 设置拐点小圆点
                symbol: "circle",
                // 拐点大小
                symbolSize: 8,
                // 开始不显示拐点， 鼠标经过显示
                showSymbol: false,
                // 设置拐点颜色以及边框
                itemStyle: {
                    color: "black",
                    borderColor: "rgba(221, 220, 107, .1)",
                    borderWidth: 12
                },
            },
            {
                name: '太酷了',
                type: 'line',
                //stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [ 130, 10, 20, 40,30, 40, 80,60,20, 40, 90, 40,20,
                    140,30, 40, 130,20,20, 40, 80, 70, 30, 40,30, 120, 20,99,50, 20],
                //让曲线变圆滑
                smooth: true,
                // 单独修改线的样式
                lineStyle: {
                    color: "black",
                    width: 2
                },
                // 设置拐点小圆点
                symbol: "circle",
// 拐点大小
                symbolSize: 8,
                // 开始不显示拐点， 鼠标经过显示
                showSymbol: false,
                // 设置拐点颜色以及边框
                itemStyle: {
                    color: "red",
                    borderColor: "rgba(221, 220, 107, .1)",
                    borderWidth: 12
                },
            },
        ]
    };
// 3. 把配置给实例对象
    myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.reset();
    })
})();
// 饼形图1
(function() {
// 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".pie .chart"));

// 2.指定配置
    var option = {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            // 距离底部为0
            bottom: '0%',
            left: 'center',
            // 小图标的宽度和高度
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: "12"
            },
        },
        series: [
            {
                name: '工龄分布',
                type: 'pie',
                radius: ['40%', '60%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: 40,
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: 1, name: "0年以下" },
                    { value: 4, name: "1-3年" },
                    { value: 2, name: "3-5年" },
                    { value: 2, name: "5-10年" },
                    { value: 1, name: "10年以上" }
                ],
                // 设置饼形图在容器中的位置
                center: ["50%", "50%"],
                // 更换颜色
                color: ["#065aab", "#066eab", "#0682ab", "#0696ab", "#06a0ab"],
            }
        ]
    };
// 3. 把配置给实例对象
    myChart.setOption(option);
    // 4. 让图表跟随屏幕自动的去适应
    window.addEventListener("resize", function() {
        myChart.resize();
    });
})();

// 饼形图2-南丁格尔玫瑰图
(function() {
// 1. 实例化对象
        var myChart = echarts.init(document.querySelector(".pie2 .chart"));
// 2.指定配置
        var option = {
            toolbox: {
                show: true,
                feature: {
                    mark: { show: true },
                    dataView: { show: true, readOnly: false },
                    restore: { show: true },
                    saveAsImage: { show: true }
                }
            },
            series: [
                {
                    name: 'Nightingale Chart',
                    type: 'pie',
                    radius: [50, 250],
                    center: ['50%', '50%'],
                    roseType: 'area',
                    itemStyle: {
                        borderRadius: 8
                    },
                    data: [
                        { value: 20, name: '云南' },
                        { value: 26, name: '北京' },
                        { value: 24, name: '山东' },
                        { value: 25, name: '河北' },
                        { value: 20, name: '江苏' },
                        { value: 25, name: '浙江' },
                        { value: 30, name: '四川' },
                        { value: 42, name: '湖北' }
                    ],
                    // 自定义颜色
                    color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f',
                        '#0096ff', '#9fe6b8', '#32c5e9','#1d9dff'],
                    // 修改饼图大小
                    radius: ['10%', '70%'],
                    // 饼图显示模式：半径模式
                    roseType: "radius",
                    // 居中显示
                    center: ['50%', '50%'],
                }
            ]
        };
        // 3. 把配置给实例对象
        myChart.setOption(option)
    })();