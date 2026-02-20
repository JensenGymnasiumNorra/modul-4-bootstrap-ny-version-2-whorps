let header = document.querySelector('header');
header.classList.add('mb-3');
header.innerHTML = `
<nav class="navbar navbar-expand-lg bg-primary navbar-dark shadow-sm">
    <div class="container">
        <a class="navbar-brand fw-bold" href="index.html">🎬 MyMedia</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <a class="nav-link" href="index.html">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="movies.html">Movies</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="series.html">Series</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="music.html">Music</a>
                </li>
            </ul>
        </div>
    </div>
</nav>`;

let footer = document.querySelector('footer');
footer.classList.add('bg-primary', 'text-white', 'py-4', 'mt-5', 'shadow-sm');
footer.innerHTML = `
<div class="container">
    <div class="row">
        <div class="col-md-4 mb-3 mb-md-0">
            <h6 class="fw-bold">Navigation</h6>
            <ul class="list-unstyled">
                <li><a href="index.html" class="text-white-50 text-decoration-none">Home</a></li>
                <li><a href="movies.html" class="text-white-50 text-decoration-none">Movies</a></li>
                <li><a href="series.html" class="text-white-50 text-decoration-none">Series</a></li>
                <li><a href="music.html" class="text-white-50 text-decoration-none">Music</a></li>
            </ul>
        </div>
        <div class="col-md-4 mb-3 mb-md-0">
            <h6 class="fw-bold">About</h6>
            <p class="text-white-50 small">MyMedia är en samling av mina favoritfilmer, serier och musiktips.</p>
        </div>
        <div class="col-md-4 text-md-end">
            <h6 class="fw-bold">Contact</h6>
            <p class="text-white-50 small">© 2026 MyMedia<br>All rights reserved.</p>
        </div>
    </div>
</div>`;