import React, { useState, useEffect } from 'react'

export default function Form() {
    const [values, setValues] = useState({
        name: '',
        email: ''
    });

    const [errors, setErors] = useState({
        name: '',
        email: ''
    });
    // const [form , setForm] = useState({
    //     values :{
    //         name : '',
    //         email : ''
    //     },
    //     errors : {
    //         name : '',
    //         email : ''
    //     }
    // })
    //Xài function thì tạo hàm phải gọi biến let, const, var
    const hanleChange = (evt) => {
        const [ name, value ] = evt.target;

        setValues({
            //trong fomr là một ob, chứa ob values
            //clone từ trong ra ngoài

            ...values,
            [name]: value,


        });
    }


    const hanleBlur = (evt) => {
        const { name, value } = evt.target;
        setErors({
            ...errors,
            [name]: value ? '' : "error",
        });
    };
    useEffect(() => {
        console.log("valuesssss", values);

    }, [values]);
    return (
        <div>
            <div className="form-group">
                <label htmlFor=""> Name</label>
                <input type="text" name='name' value={values.name} onChange={hanleChange} onBlur={hanleBlur}
                    className="form-control" />
                {errors.name ? (<div className='alert alert-danger'><span>Name không được bỏ trống</span></div>) : null}
            </div>
            <div className="form-group">
                <label htmlFor=""> Email</label>
                <input type="text" name='email' value={values.email} onChange={hanleChange} onBlur={hanleBlur}
                    className="form-control" />
                {errors.email ? (<div className='alert alert-danger'><span>Email không được bỏ trống</span></div>) : null}
            </div>
        </div>

    )
}
