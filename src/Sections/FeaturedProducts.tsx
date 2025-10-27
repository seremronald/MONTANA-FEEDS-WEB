import React from 'react'


const products = [
{id:1, name:'Poultry Grower Mix 25kg', price:'KSh 1,200', img:'/assets/product1.jpg'},
{id:2, name:'Dairy Cattle Ration 50kg', price:'KSh 3,500', img:'/assets/product2.jpg'},
{id:3, name:'Goat & Sheep Pellets 20kg', price:'KSh 900', img:'/assets/product3.jpg'},
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
<p className="mt-auto fw-bold">{p.price}</p>
<div className="d-grid mt-2">
<button className="btn btn-outline-success">Order Now</button>
</div>
</div>
</div>
</div>
))}
</div>
</section>
)
}