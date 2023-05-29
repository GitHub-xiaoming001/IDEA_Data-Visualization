package org.ymw.view.controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * 用来接收前端数据请求的controller
 */
//=@Controller+@ResponseBody表示该类是springboot的一个controller，且返回的数据为JSON格式

@RequestMapping("/view")
    public class ViewController {

        @RequestMapping("/getAreaData")
        public void getAreaData(){
            System.out.println("接收前端发起的JSON数据请求，后续需要查询mysql 将数据返回");
        }

    }


