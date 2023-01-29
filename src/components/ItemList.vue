<script>
export default {
  props: {
    msg: String
  }
}
</script>

<template>
    <li @click="$emit('eventAdded')"> {{ msg }} </li>
</template>