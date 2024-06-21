import React, { useState, useCallback } from 'react'

const ThrottledButton: React.FC = () => {
  const [clickCount, setClickCount] = useState<number>(0)

  // 节流函数
  const throttle = <F extends (...args: any[]) => void>(func: F, interval: number) => {
    let lastTime = 0
    return function (this: ThisParameterType<F>, ...args: Parameters<F>) {
      const now = Date.now()
      if (now - lastTime >= interval) {
        lastTime = now
        func.apply(this, args)
      }
    } as F
  }

  // 点击事件处理函数
  const handleClick = useCallback(() => {
    setClickCount((prevCount) => prevCount + 1)
    console.log('Button clicked', clickCount)
  }, [])

  // 使用 useCallback 缓存节流后的点击事件处理函数
  const throttledClick = useCallback(throttle(handleClick, 2000), [handleClick])

  return (
    <div>
      <h1>Throttle Button Click Example</h1>
      <p>Click count: {clickCount}</p>
      <button onClick={throttledClick}>Click me</button>
    </div>
  )
}

export default ThrottledButton
