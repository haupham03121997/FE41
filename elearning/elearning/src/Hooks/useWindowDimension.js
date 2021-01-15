import React, { useState, useEffect } from 'react'
// Dùng để responsive 
export default function useWindowDimension() {

    const getWindowdimension = () => {
        const { innerWidth: width, innerHeight: height } = window;
        return { width, height }; //return object 
    }

    //Tuyền initialValue là 1 funcion 
    // => function này return vê 1 object {width , height}


    const [dimensions, setDimension] = useState(getWindowdimension); //getWindowdimension là callback funcion


    const handlResize = () => {
        const { width, height } = getWindowdimension();
        setDimension({ width, height });
    };

    useEffect(() => {
        window.addEventListener('resize', handlResize);
        return () => {
            //Chạy trước khi component bị hủy
            window.removeEventListener("resize", handlResize);
        }

    }, []);
    return {...dimensions };
}
