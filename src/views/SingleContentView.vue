<script>
import SearchComponent from "@/components/SearchComponent.vue";
import NavigationComponent from "@/components/NavigationComponent.vue";
import ScreenComponent from "@/components/ScreenComponent.vue";

import { data } from "../../data.json";

export default {
    components: {
        SearchComponent, NavigationComponent, ScreenComponent
    },
    data() {
        return {
            content: {},
            director: "",
            actors: "",
            writers: ""
        }
    },
    methods: {
        casts() {
            this.content.casts.forEach(cast => {
                if (cast.role === "Director") this.director += cast.name + ", ";
                else if (cast.role === "Actor") this.actors += cast.name + ", ";
                else this.writers += cast.name + ", ";
            });

            this.director = this.director.slice(0, -2);
            this.actors = this.actors.slice(0, -2);
            this.writers = this.writers.slice(0, -2);
        }
    },
    props: ['id'],
    created() {
        this.content = data.find(item => item.id == this.id);
        this.casts();
    }
}
</script>

<template>
    <NavigationComponent />

    <div class="container mt-5 py-1">
        <SearchComponent />
    </div>

    <hr class="mb-5" />

    <ScreenComponent :backgroundImgURL="content.pictures.large" />

    <div class="container mt-3">
        <!-- Portfolio Item Row -->
        <div class="row d-flex justify-content-center">

            <div class="col-md-8">
                <h3 class="my-3">
                    {{ content.title }}<i class="bi bi-dot"></i>{{ content.release_year }}<i
                        class="bi bi-dot"></i>PG-13<i class="bi bi-dot"></i>{{ content.category === 'movie' ? '2h10m' :
                                '42m'
                        }}
                </h3>
                <p>
                    {{ content.overview }}
                </p>
                <ul class="list-group list-group-flush my-3">
                    <li class="list-group-item">Director: <span class="text-primary">{{ director }}</span></li>
                    <li class="list-group-item">Writers: <span class="text-primary">{{ writers }}</span></li>
                    <li class="list-group-item">Stars: <span class="text-primary">{{ actors }}</span></li>
                </ul>

                <button class="my-3 btn btn-primary btn-lg">Top rated movie</button>

            </div>

            <div class="col-md-3 mt-3 mt-sm-1 py-2">
                <div class="d-flex cols-auto align-items-center justify-content-between fs-3">
                    <div class="col">
                        <i class="bi bi-heart"></i>
                    </div>
                    <div class="col">
                        <i class="bi bi-share"></i>
                    </div>
                    <div class="col">
                        <i class="bi bi-bookmark"></i>
                    </div>
                    <div class="col">
                        <i class="bi bi-star-fill text-warning"></i> 8.5
                    </div>
                </div>
                <button class="mt-4 btn btn-success btn-lg w-100">
                    <i class="bi bi-ticket-detailed me-1"></i> See Showtimes
                </button>
                <button class="mt-3 btn btn-dark btn-lg w-100">
                    <i class="bi bi-list-ul me-1"></i> More Watch Options
                </button>
            </div>

        </div>
    </div>
</template>