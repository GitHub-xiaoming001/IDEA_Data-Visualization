package org.ymw.view.bean;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
/*** 封装响应给前端数据的Javabean（@RestController）会自动将其转换为JSON，前
        * 端要求改JSON必须要有data字段
        */
@Data
@AllArgsConstructor
@NoArgsConstructor
    public class Result {

        private Object data;
        private Integer code;
        private String message;

        public static Result success(Object data) {
            Result result = new Result();
            result.setCode(200);
            result.setMessage("success");
            result.setData(data);
            return result;
        }

        public static Result fail() {
            Result result = new Result();
            result.setCode(500);
            result.setMessage("fail");
            result.setData(null);
            return result;

        }


    }

