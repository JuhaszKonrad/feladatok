const nav = `<nav class="navbar navbar-expand-md navbar-light bg-light">
<a class="navbar-brand" href="feladat.html">Home Page</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNav">
  <ul class="navbar-nav">
    
    <li class="nav-item">
      <a class="nav-link" href="bolygok0.html">Bolygók</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="superhero.html">Szuperhősök</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="themoviedb.html">The Movie DB</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="tours.html">Tours</a>
      </li>
  </ul>
</div>
</nav>`
document.body.insertAdjacentHTML("beforebegin",nav)