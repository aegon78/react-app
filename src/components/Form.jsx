import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const Form = () => {
    const { register, handleSubmit, formState: {errors} }= useForm()

    return (
        <form onSubmit={handleSubmit( data =>{console.log(data)})}>
            
            <div className="mb-3">
                <label htmlFor="name" className="form-label">
                    Name
                </label>
                <input { ...register('name', {required: true, minLength: 3})} id="name" type="text" className="form-control" />
                {errors.name?.type === 'required' && <p className='text-danger'>Name field is required</p>}
                {errors.name?.type === 'minLength' && <p className='text-danger'>Name must be over 3 characters</p>}
            </div>

            <div className="mb-3">
                <label htmlFor="age" className="form-label">
                    Age
                </label>
                <input { ...register('age') } id="age" type="number" className="form-control" />
            
            </div>
            <button className="btn btn-primary" type='submit'>Submit</button>
        </form>
    )
}

export default Form