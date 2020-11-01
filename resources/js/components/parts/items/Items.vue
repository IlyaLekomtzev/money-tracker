<template>
    <section class="items">
        <div v-if="loading">
            <Loader />
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="items-wrap pt-3 pb-3">
                        <h5 class="mb-3">История:</h5>
                        <div v-if="errored">
                            Произошла ошибка!
                        </div>
                        <div v-else class="items-wrap__items">
                            <div
                                class="items-wrap__item"
                                v-for="item in items"
                                :key="item.id"
                            >
                                <Item :item="item" />
                                <hr>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import Item from './Item';
    import Loader from '../../Loader';

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
          Item,
          Loader
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

<style scoped>
    h5{
        font-size: 16px;
        color: #0D1131;
        font-weight: 700;
    }
</style>