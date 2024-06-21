import React from 'react'


import './index.less'

const Main = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='main-section'>
            { children }
        </div>
    )
}

export default Main