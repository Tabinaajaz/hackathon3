const Stats = () => {
    const stats = [
      { value: "15K", label: "Happy Customers" },
      { value: "150K", label: "Monthly Visitors" },
      { value: "15", label: "Countries Worldwide" },
      { value: "100+", label: "Top Partners" },
    ];
  
    return (
      <div className="bg-white py-10">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1  gap-24  md:grid-cols-4 md:gap-6 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <p className="text-4xl font-bold  text-gray-800">{stat.value}</p>
              <p className="text-gray-500 text-sm mt-7">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Stats;
  