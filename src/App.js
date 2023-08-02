import React from 'react'
import Child  from './Child'
import Child2 from './Child2'
export const App = () => {
  var l=[{name:'nikhil',id:79},{name:'kumar',id:900}]
  return (
    <div>
      <Child value={l}/>

      {
        l.map((e)=>{
          return <Child2 name={e.name} id={e.id} />
        })

        
      }
    </div>
  )
}
export default App