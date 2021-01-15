import React, { useState, useEffect, useMemo, useCallback } from "react";
import Hello from "./Hello";
import useCounter from "./useCounter.js";
import useToggle from "./useToggle.js";
import useWindowDimension from "./useWindowDimension.js";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [toggle, setTogle] = useState(false);
  // Sử dụng custom hooks counter
  const [count1, increase, decrease] = useCounter(0);
  // Sử dụng custom hooks couer
  const [toggle1, handleToggle] = useToggle(false);
  // Nếu useToggle return về object
  // count{ toggle = toggle1 , handleToggle : handleToggle1} = useToggle(false)

  const { width, height } = useWindowDimension();
  // console.log("width", width ,"Heigh" , height);

  // console.log('pow', count * count);
  //sử sụng useMemo là để cache lại giá trị tính toán
  //pow chỉ được tính lại khi count thay đổi
  // khi count khong thay đổi mà component bị render lại
  // nó sẽ lấy giá trị cũ được cache lại và gán cho pow
  const pow = useMemo(() => {
    console.log("pow", count * count);
    return count * count;
  }, [count]);

  useEffect(() => {
    //Nếu [] để rỗng sẽ hạy một lần duy nhất sau khi render
    //tưng đương với componentDisMount
    // Nhận vào 2 tham số : 1 callback funion , 2 là mảng
    console.log("Mounted", count);
  }, []);

  useEffect(() => {
    //Nếu [count] sẽ chạy lần đầu tiên và  mỗi khi biến count thay đổi và chay sau render
    //tưng đương với componentDisUpdate

    console.log("Update", count);
  }, [count]);
  // useEffect(() => {
  //     //Nếu không có tham số thứ thì 2 nó sẽ tự động chạy lại mỗi khi props hoặc state thay đổi
  //     //=> không nên sài

  //     console.log('change', count);
  // });

  useEffect(() => {
    //useEffect này sẽ chạy lần đầu tiên và chạy mỗi khi toggle thay đổi
    console.log("Change", toggle);
  }, [toggle]);

  const [message, setMessage] = useState("");
  // const handleShowMsg = ()=>{
  //     console.log("showmessage");
  // }

  // dùng memo ở component con không thể so sánh props là function
  // khi component bi render lịa hàm handlShowMsg sẽ bị chạy lại
  // => component Hello sẽ bị render lại
  //  dùng useCAllback để đảm bảm khi state message thay đổi thì
  // hàm handleShowMsg mới chayh lại
  // => các hàm khác thay đổi sẽ không làm render lại component
  const handleShowMsg = useCallback(() => {
    console.log("message");
  }, [message]);
  //componentDisUpdate chỉ so sáng được number , boolen.....
  // không so sáng được array và ob => sử dụng useEffect
  const [count2, setCount2] = useState(0);
//   const loggingStatus  = () => {
//     console.log("Run from ChildComponent");
//   };
const loggingStatus = useCallback(()=>{
    console.log("Run from ChildComponent");
} , [])
  const addMore = () => {
    setCount2((prev) => prev + 1);
  };

  return (
    <div>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Giảm{" "}
      </button>
      {/* muốn xét giá trị thì gọi hàm setCount */}
      <span className="mx-4">{count}</span>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Tăng
      </button>
      <br />
      <button onClick={() => setTogle(!toggle)}>Toggle123123</button>
      <span>{toggle ? <Hello /> : null}</span>

      <br />
      <br />
      <h1>useCounter</h1>
      <button onClick={decrease}>Giảm </button>
      {/* muốn xét giá trị thì gọi hàm setCount */}
      <span className="mx-4">{count1}</span>
      <button onClick={increase}>Tăng</button>
      <br />
      <br />
      <br />
      <h1>useToggle</h1>
      <button onClick={handleToggle}>Toggle</button>
      <span>{toggle1 ? <Hello showMessage={handleShowMsg} /> : null}</span>

      <br />
      <br />
      {width > 400 ? <p>OK</p> : ""}
      <br />
      <div>
        <p>Current: {count2}</p>
        <ChildComponent loggingStatus={loggingStatus} />
        <button onClick={addMore}>Click</button>
      </div>
    </div>
  );
}
const ChildComponent = ({ loggingStatus }) => {
    useEffect(() => {
      loggingStatus();
    }, [loggingStatus]);
    return <div />;
  };
// class CounterClass extends React.Component {
//     state = {
//         count: 0
//     }
//     render() {
//         return (
//             <button></button>
//         )
//     }
// }
