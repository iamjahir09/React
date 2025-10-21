import React from "react";

const Right = () => {
  const suggestions = [
    { name: "nagnathmadhorav", info: "Suggested for you", gradient: "from-yellow-400 to-orange-500" },
    { name: "ds_ke_bache", info: "Followed by pro.nawaz", gradient: "from-green-400 to-blue-500" },
    { name: "_arrshiaa_", info: "Followed by iman_navdekar + 2...", gradient: "from-pink-400 to-red-500" },
    { name: "hereiffrayyy02", info: "Suggested for you", gradient: "from-purple-400 to-indigo-500" },
    { name: "aeraxia.in", info: "Suggested for you", gradient: "from-teal-400 to-cyan-500" },
  ];

  return (
    <div className="w-70 max-w-xs mx-auto lg:fixed lg:right-10 lg:top-8 mt-1">
      {/* Profile */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-14 h-14 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full border-2 border-white shadow-md"></div>
          <div>
            <h2 className="font-semibold text-sm">iamjahir_09</h2>
            <p className="text-gray-500 text-xs">★彡[JAHIR]彡★</p>
          </div>
        </div>
        <button className="text-xs text-blue-500 font-semibold hover:text-blue-400 transition-colors">Switch</button>
      </div>

      {/* Suggested for you */}
      <div className="flex justify-between items-center mb-3">
        <span className="text-gray-500 font-semibold text-sm">Suggested for you</span>
        <span className="text-xs text-white font-semibold  cursor-pointer">See All</span>
      </div>

      {/* Suggestions list */}
      <div className="space-y-4 mb-6">
        {suggestions.map((user, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className={`w-8 h-8 bg-gradient-to-r ${user.gradient} rounded-full`}></div>
              <div className="cursor-pointer">
                <h3 className="font-semibold text-sm truncate">{user.name}</h3>
                <p className="text-gray-500 text-xs truncate">{user.info}</p>
              </div>
            </div>
            <button className="text-xs text-blue-500 font-semibold hover:text-blue-400 transition-colors cursor-pointer">Follow</button>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="text-gray-400 text-xs flex flex-wrap gap-2">
        {["About", "Help", "Press", "API", "Jobs", "Privacy", "Terms", "Locations", "Language"].map((item, i) => (
          <span key={i} className="hover:text-gray-500 cursor-pointer">{item}</span>
        ))}
      </div>
    </div>
  );
};

export default Right;
