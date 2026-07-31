import { useState } from "react"
import ExpenseList from './components/ExpenseList'
import ExpenseFilter from "./components/ExpenseFilter"

function App() {
  const [selectedCategory, setSelectedCategory] = useState('')

    const [expenses, setExpenses] = useState([ 
      {id: 1, description: 'aaa', amount: 3, category: 'Utilities'},
      {id: 2, description: 'bbb', amount: 3, category: 'Entertainment'},
      {id: 3, description: 'ccc', amount: 3, category: 'Utilities'},
      {id: 4, description: 'ddd', amount: 3, category: 'Utilities'},
      {id: 5, description: 'eee', amount: 3, category: 'Utilities'},
    ])
    
    const visibleExpenses = selectedCategory ? expenses.filter(e => e.category === selectedCategory) : expenses
  return(
    <>
      <ExpenseFilter onSelectCategory={(category)=> setSelectedCategory(category)}/>
      <ExpenseList expenses={visibleExpenses} onDelete={(id)=> setExpenses(expenses.filter(e => e.id !== id))}/>
    </>
  )
}

export default App