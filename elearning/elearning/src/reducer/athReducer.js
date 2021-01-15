//Reducer xử lý đnăg nhâp đnăg ks, đnăg xuất
// Sau khi đăng nhập mình sẽ lưu thông tin user trong reducer này
import { LOGIN } from "../contants/authContans"

const userInfo = localStorage.getItem("userInfo");
const initialState = {
    userInfo : userInfo ? JSON.parse(userInfo) : {},
    loading : false,
    error : false
}
const authReducer= (state = initialState, action) => {
    switch (action.type) {
        case LOGIN.REQUEST : {
            return {
                ...state, loading : true, error : false
            }
        }
         case  LOGIN.SUCCESS :{ 
             return{
                 ...state , userInfo : action.payload.data , loading : false , error : false
             }
         }
         case  LOGIN.FAIL:{ 
            return{
                ...state , loading : false , error : true
            }
        }
    default:
        return {...state }
    }
}
 export default authReducer
