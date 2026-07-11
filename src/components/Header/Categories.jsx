import React from "react";

const Categories = () => {
  const categories = [
    { name: "Fresh Vegetables", icon: "🥬", items: "120+ Items" },
    { name: "Fresh Fruits", icon: "🍎", items: "80+ Items" },
    { name: "Dairy Products", icon: "🥛", items: "50+ Items" },
    { name: "Bakery", icon: "🍞", items: "40+ Items" },
    { name: "Beverages", icon: "🥤", items: "60+ Items" },
    { name: "Snacks", icon: "🍪", items: "90+ Items" },
  ];

  return (
    <section style={{ backgroundColor: '#fff', padding: '40px 20px' }}>

      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <span style={{ backgroundColor: '#dcfce7', color: '#15803d', padding: '4px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: '600' }}>
          Shop By Category
        </span>
        <h1 style={{ fontSize: '26px', fontWeight: 'bold', color: '#111827', marginTop: '12px' }}>
          Browse Our Categories
        </h1>
        <p style={{ color: '#9ca3af', fontSize: '14px', marginTop: '6px' }}>
          Discover fresh groceries and daily essentials at the best prices.
        </p>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
        {categories.map((item, index) => (
          <div key={index} style={{ backgroundColor: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '20px', width: '180px', cursor: 'pointer' }}>
            <div style={{ fontSize: '38px' }}>{item.icon}</div>
            <h2 style={{ fontSize: '15px', fontWeight: '600', color: '#1f2937', marginTop: '10px' }}>
              {item.name}
            </h2>
            <p style={{ color: '#9ca3af', fontSize: '12px', marginTop: '4px' }}>{item.items}</p>
            <button style={{ marginTop: '12px', color: '#16a34a', fontSize: '13px', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
              Explore →
            </button>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Categories;