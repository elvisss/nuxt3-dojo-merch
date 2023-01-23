export default defineEventHandler(async (event) => {
  // query params
  // const { name } = getQuery(event)

  // body
  // const { age } = await readBody(event)

  // api call
  const { currencyKey } = useRuntimeConfig()

  const { data } = await $fetch<{data: any}>(`https://api.currencyapi.com/v3/latest?&apikey=${currencyKey}`)

  return data
})
