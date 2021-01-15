import React, { useEffect, memo } from 'react'

function Hello() {

    useEffect(() => {
        console.log("component mounted");

        //Callback này chỉ được chạy khi component bị hủy
        //Tương đương với componentWillUnmount
        return () => {
            console.log('component unmount');
        }
    }, []);

    useEffect(() => {
        console.log("change");
        //Không có tham số thì chạy sau khi render
    });
    return (
        <div>
            <p>HELLO  123</p>
        </div>
    )
}

//memo tương tự PureComponet
// Giúp mình so sáng props cũ và mới
//nếu khác nhau sẽ render lại
//Điểm khác là chỉ so sánh là được peops chứ không state được
export default Hello;