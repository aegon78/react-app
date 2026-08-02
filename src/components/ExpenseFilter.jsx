import { categories } from "../App"

const ExpenseFilter = ( { onSelectCategory } ) => {
  return (
    <select className="mb-3 form-select" onChange={ (e)=> onSelectCategory(e.target.value)}>
      <option value="" key="AllCategories">All categories</option>
      {categories.map(c => <option key={c} value={c}>{c}</option>)}
    </select>
  )
}

export default ExpenseFilter