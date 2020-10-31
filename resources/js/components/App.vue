<template>
    <div>
        <BalanceNav />

        <router-view />
    </div>
</template>

<script>
    import BalanceNav from "./parts/BalanceNav";

    export default {
        components: {
            BalanceNav
        }
    }
</script>

<style lang="scss">
    *{
        font-family: 'Ubuntu', sans-serif;
    }
</style>
