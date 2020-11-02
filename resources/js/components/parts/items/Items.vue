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
                        <div v-else-if="items.length > 0" class="items-wrap__items">
                            <transition-group name="list" tag="div">
                                <div
                                    class="items-wrap__item"
                                    v-for="item in items"
                                    :key="item.id"

                                    @click="itemPanelShow($event, item.id)"
                                >
                                    <Item :item="item" />
                                    <hr>
                                </div>
                            </transition-group>
                        </div>
                        <span v-else>Нет записей</span>
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
                errored: false,
                dblclick: {
                    delay: 300,
                    clicks: 0,
                    timer: null
                }
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
            },
            itemPanelShow (e, id) {
                this.dblclick.clicks++;
                if (this.dblclick.clicks === 1) {
                    let self = this;
                    this.dblclick.timer = setTimeout(function() {
                        self.dblclick.clicks = 0;
                    }, this.dblclick.delay);
                } else {
                    clearTimeout(this.dblclick.timer);
                    this.dblclick.clicks = 0;
                    console.log(e);
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .items{
        padding-bottom: 60px;
    }
    h5{
        font-size: 16px;
        color: #565FE6;
        font-weight: 700;
    }

    // Animation
    .list-enter-active, .list-leave-active {
        transition: all 0.5s;
        opacity: 1;
    }
    .list-enter, .list-leave-to {
        opacity: 0;
        transform: translateX(-150px);
    }
</style>