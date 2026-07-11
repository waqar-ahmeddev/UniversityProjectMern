import React from "react";

const About = () => {
  return (
    <section style={{ backgroundColor: '#F8FCF6', padding: '40px 20px' }}>

      <div style={{ textAlign: 'center' }}>
        <h3 style={{ color: '#16a34a', fontWeight: '600', fontSize: '16px' }}>
          About Fresh Mart
        </h3>

        <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#1f2937', marginTop: '8px' }}>
          Bringing Freshness To Your Doorstep
        </h1>

        <p style={{ color: '#6b7280', marginTop: '12px', maxWidth: '650px', margin: '12px auto 0' }}>
          Fresh Mart is dedicated to delivering farm-fresh groceries, fruits, vegetables, dairy products,
          and daily essentials directly to your home with speed, quality, and convenience.
        </p>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', alignItems: 'center', marginTop: '40px' }}>

        {/* Left Image */}
        <div style={{ flex: 1, minWidth: '260px' }}>
          <img
            src="https://images.unsplash.com/photo-1542838132-92c53300491e"
            alt="Fresh Grocery"
            style={{ width: '100%', borderRadius: '20px', display: 'block' }}
          />
        </div>

        {/* Right */}
        <div style={{ flex: 1, minWidth: '260px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937' }}>
            Why Choose Fresh Mart?
          </h2>

          <p style={{ color: '#4b5563', marginTop: '12px', fontSize: '14px', lineHeight: '1.7' }}>
            We work directly with trusted farmers and suppliers to ensure that every
            product reaches you fresh, healthy, and affordable.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '24px' }}>
            <div style={{ backgroundColor: 'white', padding: '16px', borderRadius: '14px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
              <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: '#16a34a' }}>5000+</h3>
              <p style={{ color: '#6b7280', fontSize: '13px', margin: '4px 0 0' }}>Products</p>
            </div>

            <div style={{ backgroundColor: 'white', padding: '16px', borderRadius: '14px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
              <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: '#16a34a' }}>10K+</h3>
              <p style={{ color: '#6b7280', fontSize: '13px', margin: '4px 0 0' }}>Happy Customers</p>
            </div>

            <div style={{ backgroundColor: 'white', padding: '16px', borderRadius: '14px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
              <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: '#16a34a' }}>30 Min</h3>
              <p style={{ color: '#6b7280', fontSize: '13px', margin: '4px 0 0' }}>Fast Delivery</p>
            </div>

            <div style={{ backgroundColor: 'white', padding: '16px', borderRadius: '14px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
              <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: '#16a34a' }}>100%</h3>
              <p style={{ color: '#6b7280', fontSize: '13px', margin: '4px 0 0' }}>Fresh Quality</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;