const nav = `<nav class="navbar navbar-expand-md navbar-light bg-light">
<a class="navbar-brand" href="#">Navbar</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNav">
  <ul class="navbar-nav">
    <li class="nav-item active">
      <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="features.html">Features</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="pricing.html">Pricing</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="contact.html">Contact</a>
      </li>
  </ul>
</div>
</nav>`
document.body.insertAdjacentHTML("beforebegin",nav)