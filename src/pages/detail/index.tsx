import React from 'react'

import { useParams } from 'react-router-dom'
import NavBar from '@/components/nav-bar/index'


import './index.less'

const Detail = () => {


    const {id} = useParams()


    console.log('🍍🙏🍍👉: id', id)
    return(
        <div className='detail-container'>
            <NavBar title='详情'/>
            Detail
        </div>
    )
}



export default Detail