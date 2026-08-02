import React from 'react'
import { categories } from '../App'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
    description: z.string().min(3).max(50),
    amount: z.number().min(0.01).max(100_000),
    category: z.enum([...categories])
})


const ExpenseForm = () => {
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: zodResolver(schema)
    })
  return (
    <form>
        <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <input id="descriptionf" type="text" className="form-control" />
        </div>
        <div className="mb-3">
            <label htmlFor="amount" className="form-label">Amount</label>
            <input id="amount" type="number" className="form-control" />
        </div>
        <div className="mb-3">
            <label htmlFor="category" className="form-label"></label>
            <select name="" id="category" className="form-select">
                <option value=""></option>
                {categories.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
        </div>
        <button className="btn btn-primary">Submit</button>
    </form>
  )   
}

export default ExpenseForm