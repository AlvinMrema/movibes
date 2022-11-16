<script>
import { RouterLink } from 'vue-router';

export default {
    props: {
        itemInfo: Object
    },
    components: { RouterLink }
}
</script>

<template>
    <div class="col-lg-3 col-md-6 col-12">
        <RouterLink :to="{
            name: (itemInfo.category === 'movie' ? 'Movie' : 'Series'),
            params: { id: itemInfo.id },
            props: itemInfo.id
        }" class="d-block mb-4 h-100">
            <img class="img-fluid img-thumbnail" :src="itemInfo.pictures.small" alt="">
        </RouterLink>
    </div>
</template>