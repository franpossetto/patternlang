<template lang="pug">
#app
	.container
		h1 {{ title }}
		h2 {{ subtitle }}
		h3 {{ text }}

</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      title: 'patternlang.com',
      subtitle: 'Based on the book "A pattern language for Architecture", by Christopher Alexander',
      text: 'this project add computacional complexity to the original schema, showing patterns that could be programmed with Softwares like Revit or Rhino'
    }
  }
}
</script>

<style lang="scss">
@import './scss/main.scss'

</style>
