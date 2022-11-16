<script>
import SearchComponent from "@/components/SearchComponent.vue";
import NavigationComponent from "@/components/NavigationComponent.vue";
import ScreenComponent from "@/components/ScreenComponent.vue"
import ContentList from "@/components/ContentList.vue";
import FiltersGroupComponent from "@/components/FiltersGroupComponent.vue";

import { data } from "../../data.json";

const movies = [], series = [], upcoming = [];

data.forEach(content => {
  if (content.type === "movie") movies.push(content);
  else if (content.type === "series") series.push(content);
  else upcoming.push(content);
});

export default {
  components: {
    SearchComponent, NavigationComponent, ScreenComponent,
    ContentList, FiltersGroupComponent
  },
  data() {
    return {
      movies,
      series,
      upcoming
    }
  }
}
</script>

<template>
  <!-- Navigation -->
  <NavigationComponent />

  <div class="container mt-5 py-1">
    <!-- Search -->
    <SearchComponent />

    <!-- Filters -->
    <FiltersGroupComponent />
  </div>

  <hr class="mb-5" />

  <ScreenComponent backgroundImgURL="https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/8sMmAmN2x7mBiNKEX2o0aOTozEB.jpg" />

  <main class="container">
    <ContentList :content="movies" title="Trending" type="movies" />

    <ContentList :content="upcoming" title="Upcoming" type="upcoming" />

    <ContentList :content="series" title="TV Series" type="series" />
  </main>
</template>
