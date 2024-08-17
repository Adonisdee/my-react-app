

function ItemCard({ item }) {
  return (
    <div className="border rounded-lg shadow-lg p-4 flex flex-col items-center">
      <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-md" />
      <h2 className="mt-2 text-lg font-medium text-gray-900">{item.name}</h2>
      <p className="text-gray-700">{item.price}</p>
      {/* <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Add to Cart</button> */}
      <Button className="mt-4 px-4 py-2 rounded" type="default">Select options</Button>
    </div>
  );
}

export default ItemCard