import React, { useState } from 'react'
import {useDispatch , useSelector} from 'react-redux';
import {login} from '../../action/authAction';
import { Redirect} from "react-router-dom"
export default function Signin(props) {
    const [values, setValue] = useState({
        taiKhoan: "",
        matKhau: ""
    });
    const handleOnchange =  (evt) =>{
        const {name , value } = evt.target;

        setValue({
            ...values,
            [name] : value,
        })
    };
    const dispatch = useDispatch();
    const {userInfo} = useSelector((state) => state.authReducer)
    const handleSubmit = () =>{
        // Gọi API đăng nhập
        dispatch(login(values))
    };

     if(userInfo.taiKhoan === "hihihihi"){
     return <Redirect to="/courses-management" />}

    //  if(userInfo.maLoaiNguoiDung === "HV"){
    //     return <Redirect to="/" />}
    return (
        <div>
            <div className="form-group">
            <label htmlFor="">Tài Khoản</label>
                <input type="text" name="taiKhoan" value={values.taiKhoan} className="form-control" 
                onChange={handleOnchange}/>
               
            </div>
            <div className="form-group">
            <label htmlFor="">Tài Khoản</label>
                <input type="password" name="matKhau" value={values.matKhau} className="form-control" onChange={handleOnchange} />
               
            </div>
            <button className="btn btn-success" 
            onClick={handleSubmit}
            >
                Đăng Nhập</button>
        </div>
    )
}

//import Usestate 