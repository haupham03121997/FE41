import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getCoursesList } from '../../action/khoaHocAction.js'
// import khoaHocReducer from '../../reducer/khoaHocReducer.js'
export default function CoursesList(props) {
    const {history} = props;
    const dispatch = useDispatch();
    useEffect(() => {
        // Call action gọi api lấy danh sách khóa học
        dispatch(getCoursesList());
        // Muốn dispatch cái action nào thì chỉ cần dispatch(functioAction)
    }, []);
    const { danhSachKhoaHoc, loading, erros } = useSelector((state) => state.khoaHocReducer);
    console.log("danhsachkhoahoc", danhSachKhoaHoc);
    if(loading){
        return(
           <div className="loading">
               <span>loading...ádasdasdas</span>
           </div>
        )
    }
    return (
        <div className="container">
            <div className="row">
                {danhSachKhoaHoc.map((item) => (
                    <div className="col-3">
                        <div className="card">
                            <img className="card-img-top" src={item.hinhAnh} alt />
                            <div className="card-body">
                                <h4 className="card-title">{item.tenKhoaHoc}</h4>
                                <p className="card-text">{item.moTa}</p>
                                <button 
                                onClick={()=>{history.push(`/courses/${item.maKhoaHoc}`)}} 
                                className="btn btn-success">
                                    Chi Tiết
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

//Hooks không sử dụng được trong class, nên xóa render đi