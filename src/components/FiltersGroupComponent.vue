<template>
    <div class="d-flex justify-content-center mt-3">
      <form class="row row-cols-auto gx-2 align-items-center">
        <FilterComponent />

        <div class="col-6">
          <label class="visually-hidden" for="inlineFormSelectPref">Services</label>
          <select class="form-select" id="inlineFormSelectPref">
            <option selected>Services...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="4">Four</option>
            <option value="5">Five</option>
            <option value="6">Six</option>
          </select>
        </div>
      </form>
    </div>
</template>

<script setup>
import FilterComponent from './FilterComponent.vue';
</script>