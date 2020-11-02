<template>
    <div>
        <router-view />

        <BottomNav />
    </div>
</template>

<script>
    import BottomNav from "./parts/BottomNav";

    export default {
        components: {
            BottomNav
        }
    }
</script>

<style lang="scss">
    *{
        font-family: 'Ubuntu', sans-serif;
    }
</style>
