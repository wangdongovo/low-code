import React, { useId } from 'react'



const IdHooks = () => {




    const id = useId()
    const userId = useId()



    console.log('🍍🙏🍍👉: id', id, userId)
    return (
        <div>
            <h1>Id Hooks</h1>
        </div>
    )
}

export default IdHooks