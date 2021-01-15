import React, {useEffect} from 'react';
import {useDispatch , useSelector} from 'react-redux';
import {getCourseDetail } from "../../action/khoaHocAction";
export default function CourseDetail(props) {
    // bốc tách 
    const {location , match} = props;
    const dispacth = useDispatch();
    const {chiTietKhoaHoc} = useSelector(state=>state.khoaHocReducer);
    console.log( "macth" ,match);
    useEffect(() => {
        //sử dụng match để lấy params từ trên url
        const maKhoaHoc = match.params.id;
        // Gọi API lấy chi tiết khóa học
        dispacth(getCourseDetail(maKhoaHoc));

    }, []);

    console.log("Chi tiết khóa học" , chiTietKhoaHoc);
    
    return (
        <div>
           <p>Tên Khóa học {chiTietKhoaHoc.tenKhoaHoc}</p>
        </div>
    )
}
