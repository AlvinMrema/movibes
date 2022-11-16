<template>
    <h1 :id="type" class="fw-light text-center text-lg-start mt-4 mb-0">{{title}}</h1>

    <hr class="mt-2 mb-5">

    <div class="row text-center text-lg-start">
        <ContentListItem v-for="item of content" :key="item.id" :itemInfo="item" />
    </div>
</template>

<script>
import ContentListItem from "@/components/ContentItem.vue";

export default {
    components: {
        ContentListItem
    },
    props: {
        content: Object,
        title: String,
        type: String
    }
}
</script>