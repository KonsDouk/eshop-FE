<template>
  <div class="default-wrapper">
    <h2 class="title">{{ title }}</h2>
    <slot></slot>
  </div>
</template>

<script>
export default {
    props: {
        title: {
            required: false,
            type: String,
        }
    }

}
</script>

<style scoped>
.default-wrapper{
    max-width: 75%;
    margin: auto;
    padding: 2em;
    
}

.title {
    margin-bottom: 1em;
}

</style>