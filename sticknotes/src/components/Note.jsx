import React, { forwardRef } from 'react'

const Note=forwardRef(({content,initialPosition,...props},ref)=> {
  return (
    <div
    ref={ref}
    style={{
        position:'absolute',
        left:`${initialPosition?.x}px`,
        top:`${initialPosition?.y}px`,
        border:'1px solid red',
        userSelect:'none',
        padding:'10px',
        width:'200px',
        cursor:'move',
        backgroundColor:'lightyellow'
    }}
    {...props}
    >
    📌{content}
    {/* press windows + semicon for emojis */}
    </div>
  )
});

export default Note