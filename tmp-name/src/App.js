
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer'
import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([])
  const [filters, setFilters] = useState({find: 'all'})

  // get data from localStorage
  useEffect(() => {
    const dataOld = JSON.parse(localStorage.getItem('List_Todo')) || []
    setData(dataOld)
  }, [])
  useEffect(() => {
      localStorage.setItem('List_Todo', JSON.stringify(data))
  }, [data])

  return (
    <div>
        <section className="todoapp">
          <Header setData={setData} data={data}/>
          <Body setData={setData} data={data} filters={filters}/>
          {data.length > 0 && <Footer filters={filters} data={data} 
          setData={setData} setFilters={setFilters}/>}
        </section>
  </div>
  );
}

export default App;
