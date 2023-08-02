import React from 'react'

export const Child = (props) => {
    
    var l=props['value']
    console.log(props);
  return (
    <div>

        {
         

         l.map((e)=>{
            return (
                <div style={{border:'1px dotted red'}}>{e.name}
                {e.id}</div>
            )
         })
           
        }
    </div>
  )
}
export default Child