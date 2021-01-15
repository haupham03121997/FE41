import { LOGIN } from "../contants/authContans"

import Axios ,{ setToken } from "../utils/axiosClient"
 
export const login = (values ) =>{
    return(dispatch) =>{
        dispatch({
            type : LOGIN.REQUEST
        });
        Axios.post("/QuanLyNguoiDung/DangNhap" , values)
        .then((result)=>{
            // Lưu thôn tin user xuống localStorage

            localStorage.setItem("userInfo" , JSON.stringify(result.data));
            //setToken Authorization lên headers
          
            dispatch({
                type: LOGIN.SUCCESS,
                payload : {
                    data : result.data
                }
            })
            setToken(result.data.accessToken);
           
        }).catch((err)=>{
            dispatch({
                type : LOGIN.FAIL
              
            })
            console.log("Lỗi" , err);
        })
    }
}