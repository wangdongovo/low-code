import React, { useState, useMemo, useEffect } from 'react'

const ItemList = ({ items }: any) => {
  const renderedItems = useMemo(() => {
    console.log('Rendering items...')
    return items.map((item: any, index: number) => <li key={index}>{item}</li>)
  }, [items])

  return <ul>{renderedItems}</ul>
}

const MemoHooks = () => {
  const [count, setCount] = useState(0)
  const [items, setItems] = useState(['Apple', 'Banana', 'Cherry'])

  const addItem = () => {
    setItems([...items, `Item ${items.length + 1}`])
  }


  useEffect(() => {
    console.log('🍍🙏🍍👉: 触发渲染', )
  })



  return (
    <div>
      <h1>useMemo List Example</h1>
      <button onClick={() => setCount(count + 1)}>Increment count</button>
      <button onClick={addItem}>Add Item</button>
      <ItemList items={items} />
    </div>
  )
}

export default MemoHooks
