import React from 'react'

export default function AboutPage() {
  return (
    <div className="container py-5">
      {/* About Us Section */}
      <section className="mb-5">
        <h2 className="mb-3 text-center">About Montana Animal Feeds</h2>
        <p className="text-center text-muted mb-4">
          At <strong>Montana Animal Feeds</strong>, we are dedicated to producing superior, affordable, and nutritious animal feeds 
          that promote healthy growth, productivity, and sustainability. Our commitment to excellence is backed by 
          years of expertise in animal nutrition and a passion for supporting farmers with reliable, high-quality products.
        </p>

        <p className="text-center text-muted">
          We work closely with local ingredient suppliers to ensure every batch of feed meets strict quality standards. 
          Whether you’re raising dairy cows, poultry, or small ruminants, Montana Animal Feeds provides tailored nutrition 
          that brings out the best in your livestock.
        </p>
      </section>

      {/* Vision Section */}
      <section className="my-5">
        <h3 className="text-center mb-3">Our Vision</h3>
        <p className="text-center text-muted">
          To be the leading provider of sustainable and innovative animal feed solutions in East Africa — 
          empowering farmers to achieve higher productivity and healthier livestock.
        </p>
      </section>

      {/* Mission Section */}
      <section className="my-5">
        <h3 className="text-center mb-3">Our Mission</h3>
        <p className="text-center text-muted">
          To produce high-quality, nutrient-balanced feeds through continuous innovation, 
          local sourcing, and scientific formulation — ensuring animal health, customer satisfaction, 
          and environmental responsibility.
        </p>
      </section>

      {/* Core Values Section */}
      <section className="my-5">
        <h3 className="text-center mb-3">Our Core Values</h3>
        <ul className="list-unstyled text-center text-muted">
          <li>✅ Quality and Consistency</li>
          <li>🌱 Sustainability and Local Sourcing</li>
          <li>🤝 Farmer Empowerment</li>
          <li>💡 Innovation and Integrity</li>
        </ul>
      </section>
    </div>
  )
}
