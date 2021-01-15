import { GET_COURSES_LIST, GET_COURSES_DETAIL } from "../contants/khoaHocContants"

const initialState = {
    danhSachKhoaHoc: [],
    chiTietKhoaHoc : {},
    loading: false,
    erros: false,
}

const khoaHocReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COURSES_LIST.REQUEST: {
            return {
                ...state,
                loading: true,
                erros: false
            }
        }
        case GET_COURSES_LIST.SUCCESS: {
            return {

                ...state,
                danhSachKhoaHoc: action.payload.data,
                loading: false,
                erros: false
            }
        }
        case GET_COURSES_LIST.FAIL: {
            return {
                ...state,
                loading: false,
                erros: false
            }
        }

        case GET_COURSES_DETAIL.REQUEST: {
            return {
                ...state,
                loading: true,
                erros: false
            }
        }
        case GET_COURSES_DETAIL.SUCCESS: {
            return {

                ...state,
                chiTietKhoaHoc: action.payload.data,
                loading: false,
                erros: false
            }
        }
        case GET_COURSES_DETAIL.FAIL: {
            return {
                ...state,
                loading: false,
                erros: false
            }
        }
        default:
            return { ...state }
    }
}

export default khoaHocReducer