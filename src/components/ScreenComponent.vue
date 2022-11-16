<script>
export default {
    props: {
        backgroundImgURL: String
    }
}
</script>

<template>
    <header class="container h-50 d-flex text-center align-items-center rounded-5"
    :style="`background: url(${backgroundImgURL}) black no-repeat center center scroll;`">
        <div class="container h-100">
            <div class="d-flex h-100 text-center align-items-center">
                <div class="w-100 text-white">
                    <button type="button" class="btn btn-lg btn-light">
                        <i class="bi bi-play-fill"></i> Play
                    </button>
                </div>
            </div>
        </div>
    </header>
</template>

<style>
header {
    position: relative;
    /* background: url('https://images.unsplash.com/photo-1643020875468-20c87ea213a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80') black no-repeat center center scroll; */
    height: 75vh;
    min-height: 25rem;
    width: 100%;
    overflow: hidden;
}

header .container {
    position: relative;
    z-index: 2;
}
</style>