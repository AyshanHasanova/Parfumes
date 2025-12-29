

import React from 'react'

const Contact1 = () => {
  return (
    <section 
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1.5rem 0',
        backgroundColor: '#f7f7f7',
        borderBottom: '1px solid #e0e0e0'
      }}
    >
      <p 
        style={{
          fontSize: '1rem',
          color: '#666'
        }}
      >
        Ana səhifə
        <i 
          className="fa-solid fa-minus" 
          style={{
            margin: '0 0.5rem',
            fontSize: '0.8rem',
            color: '#999'
          }}
        ></i> 
        Əlaqə
      </p>
    </section>
  )
}

export default Contact1