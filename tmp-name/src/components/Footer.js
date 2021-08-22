


const Footer = ({data, setData, filters ,setFilters}) => {


    // total to do completed
    const totalCompleted = () => {
      let count = 0
      data.forEach(item => {
        if(item.completed) count += 1
      })
      return count
    }

    //set find data
    const find = (event) => {
        const nameFind = event.target.textContent.toLowerCase()
        setFilters({
          find: nameFind
        })
        event.target.classList.add("selected")
    }

    //clear todo completed
    const clearCompleted = () => {
      let newData = [...data]
      newData = newData.filter((item) => {
        return item.completed === false
      })
      setData(newData)
    }
    return( 
      <footer className="footer">
          <span className="todo-count"><strong>{totalCompleted()}</strong> item left</span>
          <ul className="filters">
            <li>
              <a className={filters.find === 'all' ? "selected" : ""} href="#/" onClick={find}>All</a>
            </li>
            <li>
              <a className={filters.find === 'active' ? "selected" : ""} href="#/" onClick={find}>Active</a>
            </li>
            <li>
              <a className={filters.find === 'completed' ? "selected" : ""} href="#/" onClick={find}>Completed</a>
            </li>
          </ul>
          <button className="clear-completed" onClick={clearCompleted}>Clear completed</button>
    </footer>
    )
}


export default Footer