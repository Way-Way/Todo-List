import BodyItem from "./BodyItem"


const Body = ({data, setData, filters}) => {


  //handle toggle all completed
  const handleStatus = (event) => {
    const status = event.target.checked
      const newData = [...data]
      newData.forEach(item => item.completed = status)
      setData(newData)
  } 
    return(
        <section className="main" >
            <input id="toggle-all" className="toggle-all " type="checkbox" onClick={handleStatus}/>
            <label htmlFor="toggle-all">Mark all as complete</label>
            <ul className="todo-list" >
              {data.filter((item) => {
                if(filters.find === 'all') return true
                else if(filters.find === 'active')  return !item.completed
                else if(filters.find === 'completed') return item.completed
                return true
              })
              .map((item, index) => <BodyItem id={item.id} index={index} data={data} setData={setData} key={index} item={item} />)}
            </ul>
        </section>
    )
}

export default Body