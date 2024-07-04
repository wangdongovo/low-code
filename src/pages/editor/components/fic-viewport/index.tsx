import './index.less'

const FicViewport = () => {
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault() // 阻止默认行为，允许拖拽

    const ficViewport = e.currentTarget as HTMLElement // 获取 fic-viewport 元素
    const rect = ficViewport.getBoundingClientRect() // 获取 fic-viewport 元素的边界信息

    const x = e.clientX - rect.left // 计算鼠标指针相对于 fic-viewport 元素的横坐标
    const y = e.clientY - rect.top // 计算鼠标指针相对于 fic-viewport 元素的纵坐标

    console.log(`鼠标指针相对于 fic-viewport 元素的坐标为：(${x}, ${y})`)
  }

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.persist()
    const itemId = e.dataTransfer.getData('itemId')
    console.log('Dropped item ID:', itemId)
  }

  return (
    <div
      className="fic-viewport"
      onDragOver={(e) => handleDragOver(e)}
      onDrop={(e) => handleDragEnd(e)}
    >
      <canvas className='fic-viewport-canvas'></canvas>
    </div>
  )
}

export default FicViewport
