import React from 'react'
import Hero from '../Sections/Hero'
import About from '../Sections/About'
import FeaturedProducts from '../Sections/FeaturedProducts'


export default function Home(){
return (
<div>
<Hero />
<div className="container py-5">
<About />
<FeaturedProducts />
</div>
</div>
)
}