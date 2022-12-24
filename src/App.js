import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategoris=['all',...new Set(items.map((item)=>item.category))] ;


function App() {
  const[menuItems,setMenuItems]=useState(items);
  const[categories,setCategories]=useState(allCategoris);
  const filterItem=(category)=>{
    if(category==='all'){
      setMenuItems(items)
      return;
    }
    const newItem=items.filter((item)=>item.category === category);
    setMenuItems(newItem);
  };

  return(
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2> our menu</h2>
          <div className='underline'></div>
        </div>
        <Categories categories={categories} filterItem={filterItem}/>
        <Menu items={menuItems}/>
      </section>
    </main>
  );
}

export default App;
