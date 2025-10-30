import React from 'react'

export default function About() {
  return (
    <section className="my-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <h2>About Montana</h2>
          <p>
            Montana Animal Feeds is committed to producing high-quality, affordable, and nutritious
            animal feed. We source ingredients responsibly and follow strict quality controls to
            ensure consistent results for your livestock.
          </p>
          <ul>
            <li>Local ingredient sourcing</li>
            <li>Nutritionist-approved mixes</li>
            <li>Bulk supply & delivery</li>
          </ul>
        </div>

        <div className="col-md-6">
          <div className="ratio ratio-16x9">
            <img
              src="/src/assets/IMG_20250709_175917_HDR.jpg"
              alt="Montana Animal Feeds production"
              className="img-fluid rounded shadow-sm"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
