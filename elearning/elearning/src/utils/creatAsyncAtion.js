const suffixAsyncAction = {
    REQUEST : "REQUEST",
    SUCCESS : "SUCCESS",
    FAIL : "FAIL"

}

//Object.values(suffixAsyncAction) = > ["REQUEST" , "SUCCESS" , "FAIL"]
//reduce
// Lần 1: acc : {} ,  cur: "REQUEST"
//acc[cur] <=> acc.REQUEST = GET_COURSES_LIST_REQUEST
// lần 2 :  acc : {} ,  cur: "SUCCESS"
//acc[cur] <=> acc.REQUEST = GET_COURSES_LIST_SUCCESS
export  const creatAction = (typeString) =>
Object.values(suffixAsyncAction).reduce((acc , cur)=>{
    acc[cur] = `${typeString}_${cur}`;
    return acc;
}, {})


// abj1 {a: 1, b : 2}
// Object.keys(obj1) => [a,b]
// Object.values(obj1) => [[a:1] , [b: 2]]