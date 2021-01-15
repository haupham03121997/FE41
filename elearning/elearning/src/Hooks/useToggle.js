import React, { useState, useEffect } from 'react'

export default function useToggle(initialValue) {
    const [toggle, setToogle] = useState(initialValue);
    const handleSetToggle = () => {
        setToogle(!toggle)
    }

    //  return [toggle , ()=> setToogle(!toggle)]

    //   return {toggle , handleSetTogglean};
    //  const  {toggle , handleSetTogglean}= useTogle(fasle)  reurn về cái object thì phải đúng tên, không cần đúng vị trị

    return [toggle, handleSetToggle];
    // return cái mảng thì k cần đúng tên mà cần đúng vị trí
}
