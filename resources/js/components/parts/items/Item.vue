<template>
    <div class="items-wrap__item-wrap">
        <div class="items-wrap__item-title">
            {{ getTitle }}
            <span>{{ item.created_at | date('date') }}</span>
        </div>
        <div class="items-wrap__item-value" :class="getActionColorClass">
            {{ getAction }}{{ value }} ₽
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            item: {
                title: {
                    type: String,
                },
                action: {
                    type: Number,
                    required: true
                },
                value: {
                    type: Number,
                    required: true
                },
                created_at: {
                    required: true
                },
            }
        },
        data() {
            return {
                title: this.item.title,
                action: this.item.action,
                value: this.item.value,
            }
        },
        mounted() {
            console.log(this.item)
        },
        computed: {
            getAction () {
                return (this.action === 1) ? '+' : '-';
            },
            getActionColorClass () {
                return (this.action === 1) ? 'color-plus' : 'color-minus';
            },
            getTitle () {
                if (this.title.length > 0) {
                    return this.title;
                } else {
                    return 'No name';
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .items-wrap{
        &__item-wrap{
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        &__item-title{
            display: flex;
            flex-direction: column;
            font-size: 14px;
            color: #0D1131;
            font-weight: 700;

            span{
                font-size: 12px;
                color: #A3A5AE;
                font-weight: 400
            }
        }
        
        &__item-value{
            font-weight: 700;
            font-size: 16px;
        }
    }
    .color-plus{
        color: #4FC99B;
    }
    .color-minus{
        color: #EB5757;
    }
</style>
