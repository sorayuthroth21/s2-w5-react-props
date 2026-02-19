


export default function Food({food}) {
  return(
    <div className="">
           <div>
              <img src={food.img.src} alt={food.img.alt} />
              <h3>{food.name}</h3>
              <h3>{food.origin}</h3>
              <h4>{food.description}</h4>
              <h2>{food.price}</h2>

           </div>

    </div>
  )
}
