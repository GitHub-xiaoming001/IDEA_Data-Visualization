package org.ymw.view.mapper;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Map;
import java.util.Objects;

@Mapper
@Component // idea高版本不会警告错误，可省略
public interface ViewMapper {
    @Select("select * from  job_area")
    List<Map<String, Objects>> getAreaData();
    @Select("select * from job_sal_range_1")
    List<Map<String, Objects>> getSalRangeData();
    @Select("select ind_name, value from job_instry limit 7")
    List<Map<String, Objects>> getInstryData();
    @Select("select job_name,count,(select sum(count) from job_item) total " +
            "from job_item limit 6;")
    List<Map<String, Objects>> getJobItemData();
    @Select("select day date, count, month type from job_mchange where month in " +
            "('12','01');")
    List<Map<String, Object>> getJobMChange();
    @Select("select date,type,count from job_supplier_demander where substr(date,1,4) in('2022','2023')")
    List<Map<String, Object>> getJobSupplierDemanderData();
}

