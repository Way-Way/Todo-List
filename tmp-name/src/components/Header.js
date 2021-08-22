
const Header = ({data, setData}) => {


    //Handle add data
    const getData = (event) =>{
        let valueInput = event.target.value
        let keyCode = event.keyCode
        if(keyCode === 13){
            const newData = [...data, {
                name: valueInput,
                completed: false,
                id: Math.random()
            }]
            setData(newData)
            event.target.value = ''
        }
    }
    return(
        <header className="header">
            <h1>todos</h1>
            <input onKeyUp={getData} className="new-todo" placeholder="What needs to be done?" />
        </header>
    )
}


export default Header