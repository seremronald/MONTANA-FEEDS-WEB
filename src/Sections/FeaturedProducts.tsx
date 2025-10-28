import React from 'react'


const products = [
{id:1, name:'Dairy Feeds', img:'/src/assets/Dairy.jpg'},
{id:2, name:'Sheep Feeds', img:'/src/assets/Sheep Meal.jpg'},
{id:3, name:'Kienyeji Feeds', img:'/src/assets/Kienjeji.jpg'},
{id:4, name:'Layers Feeds', img:'/src/assets/Layers.jpg'},
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