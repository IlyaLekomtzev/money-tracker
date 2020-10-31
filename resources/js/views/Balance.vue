<template>
    <div>
        <h1>Balance</h1>
        <p v-if="!loading">{{balance}}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                balance: 0,
                loading: true
            }
        },
        mounted() {
            this.getBalance();
        },
        methods: {
            getBalance () {
                axios
                    .get('/api/balance')
                    .then(response => {
                        this.balance = response.data.balance;
                        this.loading = false;
                    })
                    .catch(error => console.error(error));
            }
        }
    }
</script>
