import React from 'react'


export default function Footer(){
return (
<footer className="footer mt-5">
<div className="container">
<div className="row">
<div className="col-md-6">
<h5>Montana Animal Feeds</h5>
<p>Providing nutritious animal feed across the region. Contact us for bulk orders and farm consultations.</p>
</div>
<div className="col-md-3">
<h6>Quick Links</h6>
<ul className="list-unstyled">
<li>Products</li>
<li>About</li>
<li>Contact</li>
</ul>
</div>
<div className="col-md-3">
<h6>Contact</h6>
<p>Phone: +254 700 000000<br/>Email: info@montanafeeds.co.ke</p>
</div>
</div>
<hr className="my-3" />
<div className="text-center small">© {new Date().getFullYear()} Montana Animal Feeds</div>
</div>
</footer>
)
}