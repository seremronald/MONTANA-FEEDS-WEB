import React from 'react'
import { useParams } from 'react-router-dom'

const allProducts = {
  dairy: [
    { 
      id: 1, 
      name: 'Serem Economy Dairy Meal', 
      img: '/assets/dairy1.jpg',
      description: 'A balanced dairy feed ideal for low-yield cows, promoting consistent milk flow.'
    },
    { 
      id: 2, 
      name: 'Serem Standard Dairy Meal', 
      img: '/assets/dairy2.jpg',
      description: 'Formulated for medium-yield cows to support daily milk production and cow health.'
    },
    { 
      id: 3, 
      name: 'Serem Hi-Yield Dairy Meal', 
      img: '/assets/dairy3.jpg',
      description: 'High-protein formula designed for high-yielding dairy cows for optimal performance.'
    },
    { 
      id: 4, 
      name: 'Serem Calf Pellets', 
      img: '/assets/dairy4.jpg',
      description: 'Nutrient-rich starter feed that promotes early growth and development in calves.'
    },
    { 
      id: 5, 
      name: 'Serem Steamers', 
      img: '/assets/dairy5.jpg',
      description: 'Energy-dense feed to help maintain body condition in dairy cows post-calving.'
    },
  ],
  layers: [
    { 
      id: 6, 
      name: 'Serem Chick and Duckling Mash', 
      img: '/assets/layers1.jpg',
      description: 'Balanced starter mash rich in protein for young chicks and ducklings.'
    },
    { 
      id: 7, 
      name: 'Serem Growers Mash', 
      img: '/assets/layers2.jpg',
      description: 'Specially formulated feed for growing poultry to build strong bones and muscles.'
    },
    { 
      id: 8, 
      name: 'Serem Layers Mash', 
      img: '/assets/layers3.jpg',
      description: 'Complete feed designed to boost egg production and shell quality in layers.'
    },
  ],
  kienyeji: [
    { 
      id: 9, 
      name: 'Serem Kienyeji Mash with Omena', 
      img: '/assets/kienyeji1.jpg',
      description: 'High-protein traditional poultry feed enriched with omena for healthy growth.'
    },
    { 
      id: 10, 
      name: 'Serem Kienyeji Mash', 
      img: '/assets/kienyeji2.jpg',
      description: 'Balanced feed for indigenous chickens raised under free-range conditions.'
    },
    { 
      id: 11, 
      name: 'Serem Kienyeji Growers Mash', 
      img: '/assets/kienyeji3.jpg',
      description: 'Supports muscle and bone growth in developing Kienyeji chickens.'
    },
    { 
      id: 12, 
      name: 'Serem Kienyeji Layers Mash', 
      img: '/assets/kienyeji4.jpg',
      description: 'Formulated to enhance egg yield and nutrition in Kienyeji hens.'
    },
  ],
  sheep: [
    { 
      id: 13, 
      name: 'Serem Sheep Meal', 
      img: '/assets/sheep1.jpg',
      description: 'High-energy formula ideal for fattening and maintaining healthy sheep.'
    },
    { 
      id: 14, 
      name: 'Serem Sheep Pellets', 
      img: '/assets/sheep2.jpg',
      description: 'Compact, nutrient-rich pellets for easy feeding and improved digestion.'
    },
    { 
      id: 15, 
      name: 'Serem Lamb & Kids Pellets', 
      img: '/assets/sheep3.jpg',
      description: 'Supports rapid growth and muscle development in lambs and young goats.'
    },
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
                <p className="text-muted small mb-3">{product.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
