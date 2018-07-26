<!-- App -->
<template>
    <div>App vue is resolved</div>
</template>

<script>
export default {
    data() {
        return {};
    },

    components: {},

    computed: {},

    mounted() {
        console.log(process.env.NODE_ENV)
    },

    methods: {}
};
</script>
<style>
div {
    color: red
}
</style>