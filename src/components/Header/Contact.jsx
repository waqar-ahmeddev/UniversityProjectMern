import React from "react";

const Contact = () => {
  return (
    <div style={{ padding: '30px 20px' }}>

      <h1 style={{ fontSize: '26px', fontWeight: 'bold', color: '#15803d' }}>
        Contact Us
      </h1>

      <p style={{ color: '#4b5563', fontSize: '14px', marginTop: '8px' }}>
        If Any Query Contact Us!
      </p>

      <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <p style={{ fontSize: '15px' }}>📞 +92 300 1234567</p>
        <p style={{ fontSize: '15px' }}>📧 freshmart@gmail.com</p>
        <p style={{ fontSize: '15px' }}>📍 123 Green Street, Karachi, Pakistan</p>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h2 style={{ fontSize: '17px', fontWeight: '600', color: '#1f2937', marginBottom: '12px' }}>
          Our Store Tour
        </h2>
        <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #e5e7eb' }}>
          <iframe
            width="100%"
            height="300"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Grocery Store Tour"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

    </div>
  );
};

export default Contact;