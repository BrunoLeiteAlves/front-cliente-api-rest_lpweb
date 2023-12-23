<template>
    
    <div>
        <div class="notification is-info is-light">
            <p>{{ msg }}</p>
        </div>
    </div>

</template>

<script>
    export default {
        name: "ShowMessage",
        props: {
            msg: String
        }
    }

</script>

<style scoped>

</style>