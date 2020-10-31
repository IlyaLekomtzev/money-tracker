<template>
    <div class="items-wrap pt-3 pb-3">
        <h5 class="mb-3">История операций:</h5>
        <div v-if="errored">
            Произошла ошибка!
        </div>
        <div v-else class="items-wrap__items">
            <div v-if="loading">Идет загрузка...</div>
            <div
                v-else
                class="items-wrap__item"
                v-for="item in items"
                :key="item.id"
            >
                <Item :item="item" />
                <hr>
            </div>
        </div>
    </div>
</template>

<script>
    import Item from './Item';

    export default {
        data() {
            return {
                items: [],
                item: {
                    id: '',
                    user_id: '',
                    title: '',
                    action: '',
                    value: ''
                },
                item_id: '',
                pagination: {},
                edit: false,
                loading: true,
                errored: false
            }
        },
        components: {
          Item
        },
        mounted() {
            this.getItems();
        },
        methods: {
            getItems () {
                axios
                    .get('/api/items')
                    .then(response => {
                        this.items = response.data.data;
                    })
                    .catch(error => {
                        console.error(error);
                        this.errored = true;
                    })
                    .finally(() => {
                        this.loading = false;
                    });
            }
        }
    }
</script>
