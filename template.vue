<template>
    <p>{{message}}!</p>
</template>

<script>
export default = {
    data () {
        return {
            message: 'こんにちは'
        }
    }
}
</script>

<style scoped>
p {
    color: red;
}
</style>
