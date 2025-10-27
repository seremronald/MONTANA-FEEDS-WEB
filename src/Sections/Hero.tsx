import React from 'react'
import { Link } from 'react-router-dom'


export default function Hero(){
return (
<section className="hero text-white">
<div className="container">
<div className="row align-items-center">
<div className="col-md-6">
<h1 className="display-5 fw-bold">Nutritious Feed. Stronger Herds.</h1>
<p className="lead">Premium feed formulations for poultry, cattle, and small stock — developed by nutritionists, trusted by farmers.</p>
<Link to="/products" className="btn btn-light btn-lg">View Products</Link>
</div>
<div className="col-md-6 d-none d-md-block">
<div className="card bg-transparent border-0">
<img src="/assets/hero-products.jpg" className="img-fluid rounded shadow" alt="Feeds" />
</div>
</div>
</div>
</div>
</section>
)
}