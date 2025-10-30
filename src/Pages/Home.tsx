import React from 'react'
import Hero from '../Sections/Hero'
import About from '../Sections/About'
import FeaturedProducts from '../Sections/FeaturedProducts'

export default function Home() {
  return (
    <div>
      {/* --- Hero Section --- */}
      <Hero />

      <div className="container py-5">

        {/* --- About Section --- */}
        <About />

        {/* --- Why Choose Montana Feeds --- */}
        <section className="my-5 p-5 rounded-3 bg-success-subtle">
          <h2 className="text-center mb-4 text-success">Why Choose Montana Feeds</h2>
          <div className="row">
            <div className="col-md-4 mb-3">
              <div className="card shadow-sm h-100 border-0">
                <div className="card-body">
                  <h5 className="card-title text-success">Superior Animal Feeds</h5>
                  <p className="card-text">
                    Our feeds are made with premium-quality ingredients to provide complete and balanced nutrition for your livestock, ensuring optimal health and productivity.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div className="card shadow-sm h-100 border-0">
                <div className="card-body">
                  <h5 className="card-title text-success">Specially Formulated Feeds</h5>
                  <p className="card-text">
                    Each feed is developed by expert nutritionists to meet specific dietary needs — for dairy cows, layers, kienyeji chickens, and sheep.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div className="card shadow-sm h-100 border-0">
                <div className="card-body">
                  <h5 className="card-title text-success">Quality Product Feeds</h5>
                  <p className="card-text">
                    We follow strict quality standards and source ingredients sustainably to deliver reliable, high-performing feeds for every farmer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Featured Products --- */}
        <FeaturedProducts />

        {/* --- Testimonials Section --- */}
        <section className="my-5 p-5 rounded-3 bg-light">
          <h2 className="text-center mb-4 text-success">What Farmers Say</h2>
          <div className="row">
            <div className="col-md-4 mb-3">
              <div className="card shadow-sm border-0 h-100">
                <div className="card-body">
                  <p className="card-text">
                    “My dairy cows now produce more milk thanks to Montana Feeds. Truly the best in the region!”
                  </p>
                  <h6 className="text-success mt-3">— Grace, Uasin Gishu</h6>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card shadow-sm border-0 h-100">
                <div className="card-body">
                  <p className="card-text">
                    “The kienyeji mash gave my chickens a noticeable boost in growth and health. Highly recommend!”
                  </p>
                  <h6 className="text-success mt-3">— Peter, Bungoma</h6>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card shadow-sm border-0 h-100">
                <div className="card-body">
                  <p className="card-text">
                    “Montana Feeds has been a game changer for my farm. Consistent quality and great customer service.”
                  </p>
                  <h6 className="text-success mt-3">— Faith, Kericho</h6>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Call to Action Banner --- */}
        <section className="bg-success text-white text-center py-5 rounded-3 shadow">
          <h2>Ready to Boost Your Farm’s Productivity?</h2>
          <p className="lead mb-4">
            Partner with Montana Feeds for superior nutrition and consistent results.
          </p>
          <a href="/contact" className="btn btn-light btn-lg text-success fw-bold">
            Get in Touch
          </a>
        </section>
      </div>
    </div>
  )
}
