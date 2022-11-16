<template>
    <div class="d-flex justify-content-center mt-5">
        <form class="row row-cols-auto gx-2 align-items-center vw-75">
            <div class="col-8 w-75">
                <label class="visually-hidden" for="inlineFormInputGroupUsername">Search</label>
                <div class="input-group">
                    <input type="text" class="form-control" id="inlineFormInputGroupUsername"
                        placeholder="Search for Movies, TV Shows..">
                </div>
            </div>

            <div class="col-4 w-25">
                <button type="submit" class="btn btn-primary">Search</button>
            </div>
        </form>
    </div>
</template>

<script setup></script>