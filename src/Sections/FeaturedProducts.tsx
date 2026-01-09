import React from 'react'
import dairyImg from '../assets/Dairy.jpg'
import sheepImg from '../assets/Sheep Meal.jpg'
import kienyejiImg from '../assets/Kienjeji.jpg'
import layersImg from '../assets/Layers.jpg'

const products = [
{id:1, name:'Dairy Feeds', img: dairyImg},
{id:2, name:'Sheep Feeds', img: sheepImg},
{id:3, name:'Kienyeji Feeds', img: kienyejiImg},
{id:4, name:'Layers Feeds', img: layersImg},
]


export default function FeaturedProducts(){
return (
<section className="my-5">
<h3 className="mb-4">Featured Products</h3>
<div className="row g-3">
{products.map(p=> (
<div key={p.id} className="col-sm-6 col-md-4">
<div className="card card-product h-100 shadow-sm">
<img src={p.img} className="card-img-top" alt={p.name} />
<div className="card-body d-flex flex-column">
<h5 className="card-title">{p.name}</h5>
<div className="d-grid mt-2">
</div>
</div>
</div>
</div>
))}
</div>
</section>
)
}