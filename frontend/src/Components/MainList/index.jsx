import React from 'react'



const MainList = ({props, loc}) => {

    return (
        <div>
            {props ? props.filter(c => c.MUFC_CNTRY_NM == loc).map((data) => (
                data.MUFC_CNTRY_NM
                
            )) : ''}
        </div>
    )
}

export default MainList
