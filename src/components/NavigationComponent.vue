<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-secondary fixed-top">
        <div class="container">
            <RouterLink class="navbar-brand fw-bold fs-2" to="/">MoVibes</RouterLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive"
                aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ms-auto fs-5">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#movies">Movies</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#series">TV Series</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#upcoming">Upcoming</a>
                    </li>
                    <li class="nav-item dropdown ms-lg-5">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Alvin
                        </a>
                        <!-- Here's the magic. Add the .animate and .slideIn classes to your .dropdown-menu and you're all set! -->
                        <div class="dropdown-menu dropdown-menu-end animate slideIn" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">
                                <i class="bi bi-person-fill"></i> Profile
                            </a>
                            <a class="dropdown-item" href="#">
                                <i class="bi bi-tools"></i> Settings
                            </a>
                            <div class="dropdown-divider"></div>
                            <RouterLink class="dropdown-item" to="/auth">
                                <i class="bi bi-box-arrow-right"></i> Log Out
                            </RouterLink>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router';</script>

<style>
@media (min-width: 768px) {
    .animate {
        animation-duration: 0.3s;
        -webkit-animation-duration: 0.3s;
        animation-fill-mode: both;
        -webkit-animation-fill-mode: both;
    }
}

@keyframes slideIn {
    0% {
        transform: translateY(1rem);
        opacity: 0;
    }

    100% {
        transform: translateY(0rem);
        opacity: 1;
    }

    0% {
        transform: translateY(1rem);
        opacity: 0;
    }
}

@-webkit-keyframes slideIn {
    0% {
        -webkit-transform: transform;
        -webkit-opacity: 0;
    }

    100% {
        -webkit-transform: translateY(0);
        -webkit-opacity: 1;
    }

    0% {
        -webkit-transform: translateY(1rem);
        -webkit-opacity: 0;
    }
}

.slideIn {
    -webkit-animation-name: slideIn;
    animation-name: slideIn;
}
</style>