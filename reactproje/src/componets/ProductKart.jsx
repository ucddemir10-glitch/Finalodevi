

function ProductKart({product}){
    console.log(product.image)
  return (
    <div className='rounded-2xl overflow-hidden shadow-lg bg-white'>
        <img src={product.image} alt={product.title} loading='lazy'className='object-cover w-full h-72' />
        <div className='p-4'>
            <h1 className='text-lg font-bold'>{product.title}</h1>
            <div className='flex justify-between'>
         <p className='font-bold'>{product.category}</p>           
            <p>{product.price} TL</p>
           
            </div>
        </div>
    </div>
  )
}
export default ProductKart
