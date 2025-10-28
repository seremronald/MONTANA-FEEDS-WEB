import React from 'react'
import { useParams } from 'react-router-dom'

const allProducts = {
  dairy: [
    { id: 1, name: 'Dairy Meal 50kg', price: 'KSh 3,500', img: '/assets/dairy1.jpg' },
    { id: 2, name: 'Milk Booster Mix 25kg', price: 'KSh 2,000', img: '/assets/dairy2.jpg' }
  ],
  layers: [
    { id: 3, name: 'Layers Mash 50kg', price: 'KSh 3,200', img: '/assets/layers1.jpg' },
    { id: 4, name: 'Layers Grower Feed 25kg', price: 'KSh 1,800', img: '/assets/layers2.jpg' }
  ],
  kienyeji: [
    { id: 5, name: 'Kienyeji Mash 25kg', price: 'KSh 1,600', img: '/assets/kienyeji1.jpg' }
  ],
  sheep: [
    { id: 6, name: 'Sheep Feed Pellets 20kg', price: 'KSh 900', img: '/assets/sheep1.jpg' }
  ]
}

export default function CategoryPage() {
  const { category } = useParams()
  const products = allProducts[category as keyof typeof allProducts]

  if (!products) {
    return (
      <div className="container py-5 text-center">
        <h3>Category Not Found</h3>
      </div>
    )
  }

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-capitalize">{category} Products</h2>
      <div className="row g-4">
        {products.map((product) => (
          <div className="col-sm-6 col-md-4" key={product.id}>
            <div className="card h-100 shadow-sm">
              <img src={product.img} className="card-img-top" alt={product.name} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.name}</h5>
                <p className="fw-bold mt-auto">{product.price}</p>
                <button className="btn btn-success w-100 mt-2">Order Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
