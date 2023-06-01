package org.ymw.view.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.ymw.view.bean.Result;
import org.ymw.view.mapper.ViewMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;
import java.util.Objects;
/**
 * 用来接收前端数据请求的controller
 */
//=@Controller+@ResponseBody表示该类是springboot的一个controller，且返回的数据为JSON格式

@RequestMapping("/view")
@RestController
@CrossOrigin(origins ="*",maxAge = 3600) //解决前后端分离的跨域访问问题
public class ViewController {
    @Autowired
    private ViewMapper viewMapper;

    @RequestMapping("/getAreaData")
    public Result getAreaData() {
        System.out.println("接收前端发起的JSON数据请求，后续需要查询mysql 将数据返回");
        List<Map<String, Objects>> data = viewMapper.getAreaData();
        Result result = Result.success(data);
        return result;
    }

    @RequestMapping("getSalRangeData")
    public Result getSalRangeData() {
        System.out.println("收到前端的薪资信息JSON数据请求,查取后端MySQL数 据");
        List<Map<String, Objects>> data = viewMapper.getSalRangeData();
        Result result = Result.success(data);
        return result;
    }

    @RequestMapping("getInstryData")
    public Result getInstryData() {
        System.out.println("收到前端的行业JSON信息请求，查取后端MySQL数据");
        List<Map<String, Objects>> data = viewMapper.getInstryData();
        Result result = Result.success(data);
        return result;
    }

    @RequestMapping("getJobItemData")
    public Result getJobItemData() {
        System.out.println("收到前端的热门职位JSON信息请求，查取后端MySQL数据");
        List<Map<String, Objects>> data = viewMapper.getJobItemData();
        Result result = Result.success(data);
        return result;
    }

    @RequestMapping("/getJobMChange")
    public Result getJobMChange(){
        System.out.println("接收前端发起的岗位数据JSON请求，查询mysql将数据返回");
        List<Map<String, Object>> data = viewMapper.getJobMChange();
        Result result = Result.success(data);
        return result;
    }

    @RequestMapping("/getJobSupplierDemanderData")
    public Result getJobSupplierDemanderData(){
        System.out.println("接收前端发起的年月职位数量数据JSON请求，查询mysql将数据返回");
                List<Map<String, Object>> data = viewMapper.getJobSupplierDemanderData();
        Result result = Result.success(data);
        return result;
    }
}


