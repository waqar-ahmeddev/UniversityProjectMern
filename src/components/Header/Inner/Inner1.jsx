import React from 'react'
import Smallcomp from './Smallcomp'
import Smallcomp2 from './Smallcomp2'
import Smallcomp3 from './Smallcomp3'
import { useNavigate } from 'react-router-dom'

const Inner1 = ({title}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/product');
  }
  const handleClickk = () => {
    navigate('/Categories');
  }
  return (
    <div style={{ backgroundColor: '#EEF7EA', width: '100%', borderBottomLeftRadius: '24px', borderBottomRightRadius: '24px', padding: '30px 20px', marginTop: '4px' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '20px' }}>

        {/* Left Side */}
        <div style={{ flex: 1, minWidth: '280px' }}>
          <button style={{ backgroundColor: '#E5F4E3', color: '#2E7D32', padding: '6px 16px', borderRadius: '999px', fontWeight: 'bold', fontSize: '13px', border: 'none', cursor: 'pointer' }}>
            100% Fresh Organic
          </button>

          <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#1a3d1c', marginTop: '14px', lineHeight: '1.3' }}>
            Fresh Groceries <br />
            Delivered to Your Doorstep
          </h1>

          <p style={{ color: '#555', marginTop: '8px', fontSize: '14px' }}>
            Get the freshest produce and essentials delivered to your doorstep with just a few clicks.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '20px' }}>
            <button onClick={handleClick} style={{ backgroundColor: '#156019', color: 'white', padding: '10px 20px', borderRadius: '10px', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '600', fontSize: '14px' }}>
              Shop Now
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>

           <button onClick={handleClickk} style={{ backgroundColor: 'white', color: '#2e7d32', border: '1px solid #4caf50', padding: '10px 20px', borderRadius: '10px', cursor: 'pointer', fontSize: '14px' }}>
  View Categories
</button>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '16px' }}>
            <Smallcomp title="Fast Delivery" subtitle="in 30 Minutes" />
            <Smallcomp2
              title="Best Quality"
              subtitle="100% Fresh"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.74z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              }
            />
            <Smallcomp3
              title="Affortable Prices"
              subtitle="Best Deals For you"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 18H2a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2z" />
                  <path d="M7 7V4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3" />
                  <path d="M11 11h2l1 2.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z" />
                </svg>
              }
            />
          </div>
        </div>

        {/* Right Side Image */}
        <div style={{ flex: 1, minWidth: '200px', display: 'flex', justifyContent: 'center' }}>
          <img
            src="https://png.pngtree.com/png-clipart/20241121/original/pngtree-supermarket-shopping-basket-png-image_17283317.png"
            alt="Fresh Groceries Basket"
            style={{ width: '100%', maxWidth: '380px', height: 'auto', objectFit: 'contain', mixBlendMode: 'multiply' }}
          />
        </div>

      </div>
    </div>
  )
}

export default Inner1
