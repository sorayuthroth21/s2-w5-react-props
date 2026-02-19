


export default function Food({food}) {
  return(
    <div className="bg-gray-200 gap-3 rounded-2xl">
           <div className="p-4 flex flex-col">
              <img src={food.img.src} alt={food.img.alt} className="w-100 hover:animate-pulse rounded-2xl" />
              <h3 className="font-serif ">Name : {food.name}</h3>
              <h3 className="font-serif"> From: {food.origin}</h3>
              <h4 className="font-serif font-light text-md">{food.description}</h4>
              <h2 className="text-orange-400 font-bold font-serif">Price : {food.price}</h2>

           </div>

    </div>
  )
}
