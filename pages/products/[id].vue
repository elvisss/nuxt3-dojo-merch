<template>
  <div>
    <Head>
      <Title>Nuxt Dojo | {{ product.title }}</Title>
      <Meta name="description" :content="product.description" />
    </Head>

    <ProductDetails :product="product" />
  </div>
</template>

<script setup lang="ts">
const { id } = useRoute().params

// fetch product
const { data: product } = await useFetch<any>(`https://fakestoreapi.com/products/${id}`)
if (!product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Product not found',
    fatal: true,
  })
}

definePageMeta({
  layout: 'products',
})

</script>

<style scoped></style>
