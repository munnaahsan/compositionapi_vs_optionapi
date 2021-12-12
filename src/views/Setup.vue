<script setup>
    const props = defineProps({ name: String});

</script>

<template>
    <div>
        <h5>Received Name From {{props.name}}</h5>
    </div>
</template>


<style>

</style>