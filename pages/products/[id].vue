<template>
  <div>
    <ProductDetails :product="product" />
  </div>
</template>

<script setup lang="ts">
const { id } = useRoute().params

definePageMeta({
  layout: 'products',
})

// fetch product
const { data: product } = await useFetch<any>(`https://fakestoreapi.com/products/${id}`)
</script>

<style scoped></style>
