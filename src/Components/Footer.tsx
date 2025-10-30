import React from 'react'


export default function Footer(){
return (
<footer className="footer mt-5">
<div className="container">
<div className="row">
<div className="col-md-6">
<h5>Montana Animal Feeds</h5>
<p>FURAHA YA MKULIMA.</p>
</div>
<div className="col-md-3">
<h6>Quick Links</h6>
<ul className="list-unstyled">
<li>Facebook</li>
<li>Tiktok</li>
<li>Instagram</li>
</ul>
</div>
<div className="col-md-3">
<h6>Contact</h6>
<p>Phone: +254 72 3092 409  +254 704 417 813<br/>Email: info@montanafeeds.co.ke</p>
</div>
</div>
<hr className="my-3" />
<div className="text-center small">© {new Date().getFullYear()} Montana Animal Feeds</div>
</div>
</footer>
)
}