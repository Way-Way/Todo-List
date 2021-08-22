
const BodyItem = ({id,index, item, data, setData}) => {


  //dandle destroy data
  const destroy = (event) => {
    const destroyId = event.target.id
    const newData = [...data]
    newData.forEach((item, indexCurrent) => {
      if(item.id === Number(destroyId)){
        newData.splice(indexCurrent, 1)
      }
    })
    setData(newData)
  }

  // handle click checkbox
  const handleCheck = (event) => {
    const status = event.target.checked
    const checkId = event.target.id
    const newData = [...data]
    newData.forEach((item) => {
      if(item.id === Number(checkId)){
        item.completed = status
      }
    })
    setData(newData)
  }

  // handle Editing
  const handleEdit = (event) => {
    const element = event.target.parentElement
    element.parentElement.classList.add("editing")
  }

  const confirmEdit = (event) => {
    const element = event.target.parentElement
    const keyCode = event.keyCode
    if(keyCode === 13){
        element.classList.remove("editing")
        const valueEdit = event.target.value
        const checkId = event.target.id
        const newData = [...data]
        newData.forEach((item) => {
          if(item.id === Number(checkId)){
            item.name = valueEdit
          }
        })
        setData(newData)
    }else if(keyCode === 27){
      stopEdit(event)
    }
  }
  const stopEdit = (event) => {
    const element = event.target.parentElement
    element.classList.remove("editing")
  }
   return (
    <li className={item.completed ? "completed" : ""} >
      <div className="view">
      <input className="toggle" type="checkbox" id={id}
      onChange={handleCheck} checked={item.completed}/>
        <label onDoubleClick={handleEdit}>{item.name}</label>
        <button className="destroy" id={id} onClick={destroy}/>
      </div>
      <input className="edit" onBlur={stopEdit}
      id={id} value={item.name} onChange={ e => e.target.value} onKeyUp={confirmEdit} />
    </li>
  );
};

export default BodyItem;
