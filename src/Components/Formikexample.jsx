import { ErrorMessage, Field, Form, Formik, validateYupSchema } from 'formik';
import React from 'react';
import * as Yup from 'yup'
const Formikexample = () => {
    const initialValues ={
        name:'',
        email:'',
        password:'',
        phonenumber:''
    }
    const validationschma=Yup.object().shape({
        name:Yup.string().required('Name should not be empty'),
        email:Yup.string().matches(/^[a-zA-Z0–9._-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,4}$/,'Invalid email format').required('Email should not be empty'),
        password:Yup.string().required('password should not be empty'),
        phonenumber:Yup.string().required('Phonenumber should not be empty')

    })
    const handlesubmit =(values)=>{
        console.log(values);
    }
    return (

        <div>
            <h1>Formike Example</h1>
            <Formik initialValues={initialValues} validationSchema={validationschma} onSubmit={handlesubmit}>
                <Form>
                    <div>
                        <p>
                        <label>Name : </label>
                        <Field type="text" name="name"/>
                        <ErrorMessage name='name' component='h5' className='color' />
                        </p>
                    </div>
                    <br />
                    <div>
                        <p> 
                        <label>Email : </label>
                        <Field type="email" name="email" />
                        <ErrorMessage name='email' component='h5' className='color' />
                        </p>
                    </div>
                    <br />
                    <div>
                        <p> 
                        <label>Password : </label>
                        <Field type="password" name="password"/>
                        <ErrorMessage name='password' component='h5' className='color' />
                        </p>
                    </div>
                    <br />
                    <div>
                        <p> 
                        <label>PhoneNumber : </label>
                        <Field type="text" name="phonenumber"/>
                        <ErrorMessage name='phonenumber' component='h5' className='color' />
                        </p>
                    </div>
                    <br />
                    <br />
                    <button type='submit'>Submit</button>


                </Form>
            </Formik>
        </div>
    );
};

export default Formikexample;