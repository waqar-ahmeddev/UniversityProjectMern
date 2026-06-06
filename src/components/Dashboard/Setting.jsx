import React from "react";

const Settings = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">⚙ Settings</h1>

      <div className="bg-white p-6 rounded-xl shadow">
        <label className="block mb-2 font-semibold">
          Store Name
        </label>

        <input
          type="text"
          placeholder="Fresh Mart"
          className="border w-full p-3 rounded-lg"
        />

        <button className="mt-4 bg-green-600 text-white px-5 py-2 rounded-lg">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Settings;