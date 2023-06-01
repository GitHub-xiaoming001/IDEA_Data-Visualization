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
            data: ['C', '大数据', 'Web前端', 'SQL', 'hadoop', '应用服务', '其他'],
            // 修改刻度标签 相关样式
            axisLabel: {
                color: "rgba(255,255,255,.6) ",
                fontSize: "12",
                show: true,
                interval:0,//X轴label显示全
                formatter: function (params) {
                    var newParamsName =
                        "";
                    var paramsNameNumber =
                        params.length;
                    var provideNumber = 3;//X轴文字长度
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
                            if (p == rowNumber - 1 )
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
                color: "rgba(255,255,255,.6) ",
                fontSize: 12,
            },
            // y轴的线条改为了 2像素
            axisLine: {
                lineStyle: {
                    color:
                        "rgba(0,0,0,.1)",
                    width: 2,
                },
            },
            // y轴分割线的颜色
            splitLine: {
                lineStyle: {
                    color:
                            "rgba(0,0,0,.6)",
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
        color: ["1"],
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
    //前端调用后端接口
    var xdata2 = [];//x轴
    var sData = []; // value
    $.getJSON('http://localhost:8080/view/getInstryData', function (data) {
        var arr = data.data
        for (var i = 0; i < arr.length; i++) {
            xdata2.push(arr[i].ind_name)
            sData.push(arr[i].value)
        }
        myChart.setOption({
            series:[{
                data: sData
            }],
            xAxis: {
                data: xdata2
            }
        })
    });
    //屏幕自动适应
    window.addEventListener("resize",function (){
        myChart.resize();
    });
})();
//条形图（柱状图）2
// 条形图【柱状图2】-热门岗位
(function (){
// 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".bar2 .chart"));
// 定义颜色
    var myColor = ["#FF0000", "#FF6347", "#FA8072", "#FF4500", "#FF8C00",
        "#F4A460"];
// 2. 指定配置和数据
    var option = {
// 图像框的左右上线调整
        grid: {
            top: '10%',
            left: '32%',
// right: '15%',
            bottom: '10%',
        },
        xAxis: {
            show: false,
        },
        yAxis: [{
            type: 'category',
// 数据翻转
            inverse: true,
            data: ['Brazil', 'Indonesia', 'USA', 'India', 'China', 'World'],
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
                color: "#fff"
            },
        },{
            show: true,
// 数据翻转
            inverse: true,
            data: [19325, 23438, 31000, 121594, 134141, 681807],
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
                    color: "#fff",
                    fontSize: 12,
                }
            },
        }
        ],
        series: [
            {
                name: '框',
                type: 'bar',
                barCategoryGap: 50,
                BarWidth: 15,
                data: [100, 100, 100, 100, 100, 100],
// 给series 第二个对象里面的 添加
                yAxisIndex: 1,
                itemStyle: {
                    barBorderRadius: 15,
                    color: "none",
                    borderColor: "#4791ff",
                    borderWidth: 15,
                },
            }
            ,
            {
                name: '条',
                type: 'bar',
                data: [94.19, 100.21, 93.65, 86.33, 98.21, 92.44],
// 给series 第一个对象里面的 添加
                yAxisIndex: 0,
// 修改第一组柱子的圆角
                itemStyle: {
                    barBorderRadius: 20,
                    color: function (params) {
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
// {c} 会自动的解析为 数据 data里面的数据
                    formatter: "{c}%"
                }
            },
        ]
    };
// 3. 把配置给实例对象
    myChart.setOption(option);
//前端调用后端接口
    var yAxis1 = [];//yAxis第一个对象
    var yAxis2 = [];//yAxis第二个对象
    var series1 = [];//series第二个对象
    $.getJSON('http://localhost:8080/view/getJobItemData', function (data) {
        var arr = data.data
        for (var i = 0; i < arr.length; i++) {
            yAxis1.push(arr[i].job_name);
            yAxis2.push(arr[i].count);
            series1.push(Math.round(arr[i].count/arr[i].total*100));
        }
        myChart.setOption({
            yAxis:[{
                data: yAxis1
            },
                {
                    data: yAxis2
                }
            ],
            series:[{},{
                data: series1
            }
            ]
        })
    });
//4. 让图标跟随屏幕去自动适应
    window.addEventListener("resize",function(){
        myChart.reset();
    });
})();
// 折线图1模块制作
(function (){
    // 1.初始化实例对象  echarts.init（dom容器）
    var myChart=
        echarts.init(document.querySelector(".line .chart"));
    // 指定数据
    var yearData=[
        {
            year: '2022',  //年份
            data: [ // 两个数组是因为有两条线
                [24,40,101,134,90,230,210,230,120,20,210,120],
                [40,64,191,324,290,330,310,213,180,200,180,73]
            ]
        },
        {
            year: '2023',  //年份
            data: [  // 两个数组是因为有两条线
                [123,175,112,197,121,67,98,21,43,64,76,38],
                [143,131,165,123,178,21,82,64,43,60,19,34]
            ]
        }
    ];

    // 2.指定配置项给实例对象
    option1 = {
        // 通过这个color修改两条线的颜色
        color: ["#00f2f1", "#ed3f35"],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'  // 指示器类型，'line'直线指示器、'shadow'阴影指示器、'none'无指示器、'cross'十字准指示器
            }
        },
        grid: {
            top:'20%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            show:true, // 显示边框
            borderColor:'#ff478e' ,  // 边框颜色
            containLabel: true,   // 包含刻度文字在内
            opacity:0.6,
        },
        legend: {
            //data: ['Video Ads','Search Engine'],
            textStyle: {
                color: "rgba(0,0,0,.8)",//'#4c9bfd',  // 图例文字颜色
            },
            // 这个10% 必须加引号
            right:'10%'  // 距离右边10%
        },
        xAxis: {
            type: 'category',
            boundaryGap: true,  //坐标轴两边留白策略
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisTick:{
                show:false,  // 去除刻度线
            },
            axisLabel:{
                interval: 0, //使x轴上的文字显示完全
                color: "rgba(0,0,0,.8)",//'#4c9bfd',   // 文本颜色
            },
            axisLine:{
                show: false // 去除轴线
            },
        },
        yAxis: {
            type: 'value',
            axisTick:{
                show: false // 去除刻度
            },
            splitLine:{
                lineStyle:{
                    color: "rgba(255,255,255,.8)",//'#4c9bfd',   // 分割线颜色
                    //opacity: 0.6,  // 透明度
                }
            },
            axisLabel:{
                color: "rgba(0,0,0,.8)",//'#4c9bfd',  // 文本颜色
            },
        },
        series: [
            {
                name: '国内需求数',
                type: 'line',
                //stack: 'Total',
                data: yearData[0].data[0],
                // true 可以让我们的折线显示带有弧度
                smooth: true,

            },
            {
                name: '国外需求数',
                type: 'line',
                //stack: 'Total',
                data: yearData[0].data[1],
                // true 可以让我们的折线显示带有弧度
                smooth: true,
            }
        ],
    };

    // 3.把配置项给实例对象
    myChart.setOption(option1);
    // 前端调用后端接口
    var year_2022_1=[]; //2022年第一个对象
    var year_2022_2=[]; //2022年第二个对象
    var year_2023_1=[]; //2023年第一个对象
    var year_2023_2=[]; //2023年第二个对象

    $.getJSON('http://localhost:8080/view/getJobSupplierDemanderData',function (data) {
        var arr=data.data
        for(var i=0;i<arr.length;i++){
            if(arr[i].type==0&&(arr[i].date.substr(0,4)=='2022')){
                year_2022_1.push(arr[i].count)
            }
            else if (arr[i].type==1&&(arr[i].date.substr(0,4)=='2022')) {
                year_2022_2.push(arr[i].count)
            }
            else if (arr[i].type==0&&(arr[i].date.substr(0,4)=='2023')){
                year_2023_1.push(arr[i].count)
            }
            else if(arr[i].type==1&&(arr[i].date.substr(0,4)=='2023')){
                year_2023_2.push(arr[i].count)
            }
        }
// **********mine
        yearData[0].data=[year_2022_1,year_2022_2];
        yearData[1].data=[year_2023_1,year_2023_2];
// **********mine
        myChart.setOption({
            series:[{
                data:year_2022_1
            },
                {
                    data:year_2022_2
                }]
        })

    });
    // 4.让图标跟随屏幕去自适应
    window.addEventListener("resize", function () {
        myChart.resize();
    });
    // 5.点击切换效果
    $(".line h2").on("click","a",function () {
        //alert(1);
        console.log(yearData[$(this).index()]);
        var obj = yearData[$(this).index()];
        option1.series[0].data = obj.data[0];
        option1.series[1].data = obj.data[1];
        // 需要重新渲染
        myChart.setOption(option1);
    });
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
            data: ['唱', '跳'],
            textStyle: {
                color: "rgba(255,255,255,.5)",
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
                data: [
                    "01","02","03","04","05","06","07","08","09","10","11","12","13","14",
                    "15","16","17","18","19","20","21","22","23","24","25","26","26","28","29","30"],
                //文本颜色以及文字大小
                axisLabel: {
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: 12
                    }
                },
                //X轴的颜色
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.6)"
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
                name: '唱',
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
                                color: "rgb(255,0,242)",
                                // 渐变色的起始颜色
                            },
                            {
                                offset: 0.8,
                                color: "rgba(27,27,217,0.91)",
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
                    color: "#d5013a",
                    width: 2
                },
                // 设置拐点小圆点
                symbol: "circle",
                // 拐点大小
                symbolSize: 6,
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
                name: '跳',
                type: 'line',
                //stack: 'Total',
                areaStyle: {
                    //color: 'pink',
                    // 渐变色，只需要复制即可
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {
                                offset: 0,
                                color: "rgba(255,71,142,0.69)",
                                // 渐变色的起始颜色
                            },
                            {
                                offset: 0.8,
                                color: "rgba(203,22,56,0.6)",
                                // 渐变线的结束颜色
                            }
                        ],
                        false ),
                    //影子颜色
                    shadowColor: "rgba(0, 0, 0, 0.1)"
                },
                emphasis: {
                    focus: 'series'
                },
                data: [ 130, 10, 20, 40,30, 40, 80,60,20, 40, 90, 40,20,140,30, 40, 130,20,20, 40, 80, 70, 30, 40,30, 120, 20,99,50, 20],
                //让曲线变圆滑
                smooth: true,
                // 单独修改线的样式
                lineStyle: {
                    color: "rgba(0,0,0,1)",
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
    //前端调用后端接口
    var xAxis1 = [];//xAxis第一个对象
    var series1 = [];//series第一个对象
    var series2 = [];//series第二个对象
    var llabel1 = []; //legend类别1
    var llabel2 = []; //legend类别2
    $.getJSON('http://localhost:8080/view/getJobMChange', function (data) {
        var arr = data.data
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].type =='01') {
                xAxis1.push(arr[i].date);
                series2.push(arr[i].count);
                llabel1 = arr[i].type;
            }
            else if (arr[i].type =='12') {
                series1.push(arr[i].count)
                llabel2 = arr[i].type;
            }
        }
        myChart.setOption({
            xAxis:[{
                data: xAxis1
            }
            ],
            legend: {data: [llabel1, llabel2],},
            series:[{
                name: llabel1,
                data: series1
            },
                {
                    name: llabel2,
                    data: series2
                }
            ]
        })
    });
    //图标跟随屏幕自动适应
    window.addEventListener("resize",function (){myChart.reset});
})();
//饼图1
(function() {
// 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".pie   .chart"));
// 2.指定配置
    var option = {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            //距离底部为0
            bottom:'0%',
            left: 'center',
            //小图标的宽度以及高度
            itemWidth:10,
            itemHeight:10,
            textStyle:{
                color:"rgba(255,255,255,.5)",
                fontSize:"12",
            },
        },
        series: [
            {
                name: '练习时长',
                type: 'pie',
                radius: ['40%', '70%'],
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
                    { value: 1, name: '唱' },
                    { value: 3, name: '跳' },
                    { value: 2, name: 'rap' },
                    { value: 2, name: 'music' },
                    { value: 2, name: '篮球' }
                ],
                //设置饼图位置
                center:["50%","50%"],
                //更换颜色
                color: ["rgba(71,145,255,0.73)", "rgb(255,0,0)", "#1447ff", "rgba(255,0,174,0.7)", "1447FFFF"],
                // 修改内圆半径和外圆半径为 百分比是相对于容器宽度来说的
                radius: ["40%", "60%"],
                label: {
                    // 不显示标签文字
                    show: false,
                    position: 'center'
                },
                labelLine: {
                    //不显示连接线
                    show: false,
                },
            }
        ]
    };

// 3. 把配置给实例对象
    myChart.setOption(option);
    //前端调用后端接口
    $.getJSON('http://localhost:8080/view/getSalRangeData', function
        (data) {
        myChart.setOption({
            series:[{
                data: data.data
            }]
        })
    });


    // 4. 让图表跟随屏幕自动的去适应
    window.addEventListener("resize", function() {
        myChart.resize();
    });
//南丁格尔图
    (function() {
// 1. 实例化对象
        var myChart = echarts.init(document.querySelector(".pie2   .chart"));
// 2.指定配置
        var option = {

            series: [
                {
                    name: 'Nightingale Chart',
                    type: 'pie',
                    itemStyle: {
                        borderRadius: 8
                    },
                    data: [
                        { value: 20, name: '贵阳' },
                        { value: 26, name: '毕节' },
                        { value: 24, name: '凯里' },
                        { value: 25, name: '铜仁' },
                        { value: 20, name: '遵义' },
                        { value: 25, name: '六盘水' },
                        { value: 30, name: '安顺' },
                        { value: 42, name: '黔西' },
                    ],
                    // 自定义颜色
                    color: ['rgba(255,240,71,0.6)', 'rgba(250,119,114,0.66)', '#ed8884', '#ff9f7f',
                        'rgba(255,0,0,0.71)', 'rgba(255,0,0,0.91)', 'rgba(255,0,242,0.89)','rgba(191,0,255,0.36)'],
                    // 修改饼图大小
                    radius: ['10%', '70%'],
                    // 饼图显示模式：半径模式
                    roseType: "radius",
                    // 居中显示
                    center: ['50%', '50%'],
                    // 文本标签控制饼形图文字的相关样式， 注意它是一个对象
                    label: {
                        fontSize: 15,
                    },
                    labelLine: {
                        // length 链接图形的线条
                        length: 12,
                        // length2 链接文字的线条
                        length2: 8
                    },
                }
            ]
        };
        // 3. 把配置给实例对象
        myChart.setOption(option)
        //前端调用后端接口
        $.getJSON('http://localhost:8080/view/getAreaData', function (data)
        {
            myChart.setOption({
                series:[{
                    data: data.data
                }]
            })
        });

        // 4. 让图表跟随屏幕自动的去适应

        window.addEventListener("resize", function() {
            myChart.resize();});
    })();
// 模拟飞行路线模块地图模块
    (function() {
// 1. 实例化对象
        var myChart = echarts.init(document.querySelector(".map .echart"));
// 2.指定配置
        var geoCoordMap = {
            上海: [121.4648, 31.2891],
            东莞: [113.8953, 22.901],
            东营: [118.7073, 37.5513],
            中山: [113.4229, 22.478],
            临汾: [111.4783, 36.1615],
            临沂: [118.3118, 35.2936],
            丹东: [124.541, 40.4242],
            丽水: [119.5642, 28.1854],
            乌鲁木齐: [87.9236, 43.5883],
            佛山: [112.8955, 23.1097],
            保定: [115.0488, 39.0948],
            兰州: [103.5901, 36.3043],
            包头: [110.3467, 41.4899],
            北京: [116.4551, 40.2539],
            北海: [109.314, 21.6211],
            南京: [118.8062, 31.9208],
            南宁: [108.479, 23.1152],
            南昌: [116.0046, 28.6633],
            南通: [121.1023, 32.1625],
            厦门: [118.1689, 24.6478],
            台州: [121.1353, 28.6688],
            合肥: [117.29, 32.0581],
            呼和浩特: [111.4124, 40.4901],
            咸阳: [108.4131, 34.8706],
            哈尔滨: [127.9688, 45.368],
            唐山: [118.4766, 39.6826],
            嘉兴: [120.9155, 30.6354],
            大同: [113.7854, 39.8035],
            大连: [122.2229, 39.4409],
            天津: [117.4219, 39.4189],
            太原: [112.3352, 37.9413],
            威海: [121.9482, 37.1393],
            宁波: [121.5967, 29.6466],
            宝鸡: [107.1826, 34.3433],
            宿迁: [118.5535, 33.7775],
            常州: [119.4543, 31.5582],
            广州: [113.5107, 23.2196],
            廊坊: [116.521, 39.0509],
            延安: [109.1052, 36.4252],

            张家口: [115.1477, 40.8527],
            徐州: [117.5208, 34.3268],
            德州: [116.6858, 37.2107],
            惠州: [114.6204, 23.1647],
            成都: [103.9526, 30.7617],
            扬州: [119.4653, 32.8162],
            承德: [117.5757, 41.4075],
            拉萨: [91.1865, 30.1465],
            无锡: [120.3442, 31.5527],
            日照: [119.2786, 35.5023],
            昆明: [102.9199, 25.4663],
            杭州: [119.5313, 29.8773],
            枣庄: [117.323, 34.8926],
            柳州: [109.3799, 24.9774],
            株洲: [113.5327, 27.0319],
            武汉: [114.3896, 30.6628],
            汕头: [117.1692, 23.3405],
            江门: [112.6318, 22.1484],
            沈阳: [123.1238, 42.1216],
            沧州: [116.8286, 38.2104],

            河源: [114.917, 23.9722],
            泉州: [118.3228, 25.1147],
            泰安: [117.0264, 36.0516],
            泰州: [120.0586, 32.5525],
            济南: [117.1582, 36.8701],
            济宁: [116.8286, 35.3375],
            海口: [110.3893, 19.8516],
            淄博: [118.0371, 36.6064],
            淮安: [118.927, 33.4039],
            深圳: [114.5435, 22.5439],
            清远: [112.9175, 24.3292],
            温州: [120.498, 27.8119],
            渭南: [109.7864, 35.0299],
            湖州: [119.8608, 30.7782],
            湘潭: [112.5439, 27.7075],
            滨州: [117.8174, 37.4963],
            潍坊: [119.0918, 36.524],
            烟台: [120.7397, 37.5128],
            玉溪: [101.9312, 23.8898],
            珠海: [113.7305, 22.1155],

            盐城: [120.2234, 33.5577],
            盘锦: [121.9482, 41.0449],
            石家庄: [114.4995, 38.1006],
            福州: [119.4543, 25.9222],
            秦皇岛: [119.2126, 40.0232],
            绍兴: [120.564, 29.7565],
            聊城: [115.9167, 36.4032],
            肇庆: [112.1265, 23.5822],
            舟山: [122.2559, 30.2234],
            苏州: [120.6519, 31.3989],
            莱芜: [117.6526, 36.2714],
            菏泽: [115.6201, 35.2057],
            营口: [122.4316, 40.4297],
            葫芦岛: [120.1575, 40.578],
            衡水: [115.8838, 37.7161],
            衢州: [118.6853, 28.8666],
            西宁: [101.4038, 36.8207],
            西安: [109.1162, 34.2004],
            贵阳: [106.6992, 26.7682],
            连云港: [119.1248, 34.552],

            邢台: [114.8071, 37.2821],
            邯郸: [114.4775, 36.535],
            郑州: [113.4668, 34.6234],
            鄂尔多斯: [108.9734, 39.2487],
            重庆: [107.7539, 30.1904],
            金华: [120.0037, 29.1028],
            铜川: [109.0393, 35.1947],
            银川: [106.3586, 38.1775],
            镇江: [119.4763, 31.9702],
            长春: [125.8154, 44.2584],
            长沙: [113.0823, 28.2568],
            长治: [112.8625, 36.4746],
            阳泉: [113.4778, 38.0951],
            青岛: [120.4651, 36.3373],
            韶关: [113.7964, 24.7028]
        };
        //飞机路线：起点-终点
        var XAData = [
            [{ name: "北京" }, { name: "拉萨"
                , value: 100 }],
            [{ name: "北京" }, { name: "上海"
                , value: 100 }],
            [{ name: "北京" }, { name: "广州"
                , value: 100 }],
            [{ name: "北京" }, { name: "西宁"
                , value: 100 }],
            [{ name: "北京" }, { name: "银川"
                , value: 100 }]
        ];

        var XNData = [
            [{ name: "贵阳" }, { name: "北京"
                , value: 100 }],
            [{ name: "贵阳" }, { name: "上海"
                , value: 100 }],
            [{ name: "贵阳" }, { name: "广州"
                , value: 100 }],
            [{ name: "安顺" }, { name: "西安"
                , value: 100 }],
            [{ name: "安顺" }, { name: "银川"
                , value: 100 }]
        ];

        var YCData = [
            [{ name: "杭州" }, { name: "潍坊"
                , value: 100 }],
            [{ name: "上海" }, { name: "哈尔滨"
                , value: 100 }],
            [{ name: "深圳" }, { name: "上海"
                , value: 100 }],
            [{ name: "上海" }, { name: "西安"
                , value: 100 }],
            [{ name: "上海" }, { name: "西宁"
                , value: 100 }]
        ];

        //飞机图片样式
        var planePath = "path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l319.9,221.799v89.254l330.343-157.288l12.238,241.308l134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z";
        //var planePath = 'arrow';

        // 飞机出发地到目的地的数据转化
        var convertData = function(data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var dataItem = data[i];

                var fromCoord = geoCoordMap[dataItem[0].name];
                var toCoord = geoCoordMap[dataItem[1].name];
                if (fromCoord && toCoord) {
                    res.push({
                        fromName: dataItem[0].name,
                        toName: dataItem[1].name,
                        coords: [fromCoord, toCoord],
                        value: dataItem[1].value
                    });
                }
            }
            return res;
        };

        var color = ["#a6c84c", "#ffa022", "#46bee9"]; //航线的颜色
        var series = [];
        [
            ["北京"
                , XAData],
            ["贵阳"
                , XNData],
            ["上海"
                , YCData]
        ].forEach(function(item, i) {
            //第一个series 设置飞机路线的特效
            //第二个series 设置地图点的特效
            series.push(
                {
                    name: item[0] + " Top3",
                    type: "lines",
                    zlevel: 1,
                    effect: {
                        show: true,
                        period: 6,
                        trailLength: 0.7,
                        color: "red", //arrow箭头的颜色
                        symbolSize: 3
                    },
                    lineStyle: {
                        normal: {
                            color: color[i],
                            width: 0,
                            curveness: 0.2
                        }
                    },
                    data: convertData(item[1])
                },
                {
                    name: item[0] + " Top3",
                    type: "lines",
                    zlevel: 2,
                    //线两端的标记类型，none,arrow等
                    symbol: ["none", "arrow"],
                    symbolSize: 10,
                    effect: {
                        show: true,
                        period: 6,
                        trailLength: 0,
                        //选择样式
                        symbol: planePath,
                        // 飞行线路宽度
                        symbolSize: 15
                    },
                    lineStyle: {
                        normal: {
                            color: color[i],
                            //飞行路线宽度

                            width: 1,
                            opacity: 0.6,
                            curveness: 0.2
                        }
                    },
                    data: convertData(item[1])
                },
                {
                    name: item[0] + " Top3",
                    //带有涟漪特效动画的散点（气泡）图
                    type: "effectScatter",
                    coordinateSystem: "geo",
                    zlevel: 2,
                    //涟漪特效相关配置
                    rippleEffect: {
                        brushType: "stroke"
                    },
                    label: {
                        normal: {
                            show: true,
                            position: "right",
                            formatter: "{b}"
                        }
                    },
                    symbolSize: function(val) {
                        return val[2] / 8;
                    },
                    itemStyle: {
                        normal: {
                            color: color[i]
                        },
                        emphasis: {
                            areaColor: "#2B91B7"
                        }
                    },
                    data: item[1].map(function(dataItem) {
                        return {
                            name: dataItem[1].name,
                            value:
                                geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                        };
                    })
                }
            );
        });

        var option = {
            tooltip: {
                trigger: "item",
                formatter: function(params, ticket, callback) {
                    if (params.seriesType == "effectScatter") {
                        return "线路：" + params.data.name + "" +
                            params.data.value[2];
                    } else if (params.seriesType == "lines") {
                        return (
                            params.data.fromName +
                            ">" +
                            params.data.toName +
                            "<br />" +
                            params.data.value
                        );
                    } else {
                        return params.name;
                    }
                }
            },
            legend: {
                orient: "vertical",
                top: "bottom",
                left: "right",
                data: ["北京 Top3",
                    "贵阳 Top3",
                    "上海 Top3"],
                textStyle: {
                    color: "#fff"
                },
                selectedMode: "multiple"
            },
            geo: {
                map: "china",
                label: {
                    emphasis: {
                        show: true,
                        color: "#fff"
                    }
                },
                // 把中国地图放大了1.2倍
                zoom: 1.2,
                roam: true,
                itemStyle: {
                    normal: {
                        // 地图省份的背景颜色
                        areaColor: "rgba(20, 41, 87,0.6)",
                        borderColor: "rgba(255,0,0,0.62)",
                        borderWidth: 1
                    },
                    emphasis: {
                        areaColor: "#ff00ae"
                    }
                }
            },

            series: series
        };

// 3. 把配置给实例对象
        myChart.setOption(option);

        //4. 监听浏览器缩放，图表对象调用缩放resize函数
        window.addEventListener("resize", function() {
            myChart.resize();
        });
    })();
})();

