// DestinationCards.jsx
const destinations = [
    { img: "https://source.unsplash.com/300x200/?paris", name: "Paris, France" },
    { img: "https://source.unsplash.com/300x200/?tokyo", name: "Tokyo, Japan" },
    { img: "https://source.unsplash.com/300x200/?bali", name: "Bali, Indonesia" },
  ];
  const DestinationCards = () => {
    return (
      <div className="container mx-auto py-16 px-6 mt-16 bg-purple-50">
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-950">Top Destinations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((place, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <img src={place.img} className="w-full h-56 object-cover" alt={place.name} />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800">{place.name}</h3>
                <p className="text-gray-600">{place.location}</p>
                <p className="text-lg font-bold text-blue-500 mt-2">{place.price}</p>
                <button className="mt-4 bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default DestinationCards;