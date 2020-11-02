<template>
    <div>
        <Balance />
        <Items />
    </div>
</template>

<script>
    import Items from "../components/parts/items/Items";
    import Balance from "../components/parts/Balance";

    export default {
        components: {
            Items,
            Balance
        }
    }
</script>
