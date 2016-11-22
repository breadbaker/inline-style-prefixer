export default value => {
  if (Array.isArray(value)) value = value.join(',')

  return value.match(/-webkit-|-ms-/) !== null
}
