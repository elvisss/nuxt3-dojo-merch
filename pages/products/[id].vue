<template>
  <div>
    <p>Product Details for {{ id }}</p>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, modi
      veritatis sint vitae voluptas debitis odit perspiciatis voluptates
      asperiores deleniti quos commodi consequuntur. Dolore a expedita ea
      perspiciatis. Vel, officia?
    </p>
  </div>
</template>

<script setup lang="ts">
const { id } = useRoute().params

definePageMeta({
  layout: 'products',
})
</script>

<style scoped></style>
