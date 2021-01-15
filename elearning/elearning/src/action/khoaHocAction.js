import { GET_COURSES_LIST  , GET_COURSES_DETAIL} from "../contants/khoaHocContants"

import Axios from "../utils/axiosClient.js"
export const getCoursesList = () => {
    return (dispatch) => {
        dispatch({
            type: GET_COURSES_LIST.REQUEST
        });
        Axios.get(
            `QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01`
        ).then((result) => {
            // dispatch({
            //    type: GET_COURSES_LIST.SUCCESS,
            //    data: res.result
            // })
            dispatch({
                type: GET_COURSES_LIST.SUCCESS,
                payload: {
                    data: result.data
                }
            });
        }).catch((err) => {
            dispatch({
                type: GET_COURSES_LIST.FAIL,
            });
        });
    }
}

export const getCourseDetail = (maKhoaHoc) =>{

    return(dispatch) =>{
            dispatch({
                type: GET_COURSES_DETAIL.REQUEST,
            })
            Axios.get(
                `/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`
            ).then((result) =>{
                dispatch({
                    type: GET_COURSES_DETAIL.SUCCESS , 
                    payload: {
                        data : result.data
                    }
                })
            }).catch( (err) =>{
                dispatch({
                    type  : GET_COURSES_DETAIL.FAIL
                })
            })
    }
}
// Khi gửi 1 requets lên server 