import { useEffect, useState, useLayoutEffect } from 'react'

const EffectHooks: React.FC = () => {
  const [version, setVersion] = useState('1.0.0')

  const fetchData = async () => {
    try {
      const response = await fetch('/zlkdatasys/data_zlk_xpflby.json')

      console.log('🍍🙏🍍👉: response', response)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json()
      console.log('🍍🙏🍍👉: data', data)
    } catch (error) {
      console.error('Error:', error)
    } finally {
      console.log('🍍🙏🍍👉: finally')
    }
  }

  const handleVersion = () => {
    setVersion('1.0.1')
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    console.log('🍍🙏🍍👉: version', version)
  }, [version])

  useEffect(() => {
    console.log('🍍🙏🍍👉: 总是再次运行')
  }) // 总是再次运行

  useLayoutEffect(() => {
    console.log('🍍🙏🍍👉: useLayoutEffect')
  })

  return (
    <div>
      <h2>useEffect Hooks</h2>

      <div>
        <p>当前版本号：{version}</p>

        <button onClick={handleVersion}>更换版本号为1.0.1</button>
      </div>
    </div>
  )
}

export default EffectHooks
