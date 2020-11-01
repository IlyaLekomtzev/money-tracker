<template>
    <section class="balance">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="balance__title">Счёт текущего месяца:</div>
                    <div class="balance__value">{{ balance }} <span class="balance__currency">₽</span></div>
                </div>
            </div>
        </div>
        <div class="balance__cards">
            <div class="container">
                <div class="row">
                    <div class="col-6">
                        <div class="balance__card">
                            <div class="balance__card-info">
                                <div class="balance__card-title">Получено:</div>
                                <div class="balance__card-value">{{ plus }} <span class="balance__card-currency">₽</span></div>
                            </div>
                            <div class="balance__card-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0)">
                                        <path d="M11.3364 0.274969C11.3361 0.275249 11.3358 0.275484 11.3355 0.275812L6.4605 5.17444C6.09529 5.54142 6.09665 6.135 6.46368 6.5003C6.83067 6.86555 7.42424 6.86414 7.78949 6.49716L11.0625 3.20822L11.0625 23.0625C11.0625 23.5803 11.4822 24 12 24C12.5178 24 12.9375 23.5803 12.9375 23.0625L12.9375 3.20827L16.2105 6.49711C16.5757 6.86409 17.1693 6.8655 17.5363 6.50025C17.9034 6.13495 17.9046 5.54133 17.5395 5.17439L12.6645 0.275764C12.6642 0.275484 12.6639 0.275249 12.6636 0.274921C12.2971 -0.0922511 11.7016 -0.091078 11.3364 0.274969Z" fill="#4FC99B"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0">
                                            <rect width="24" height="24" fill="white" transform="translate(0 24) rotate(-90)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="balance__card">
                            <div class="balance__card-info">
                                <div class="balance__card-title">Потрачено:</div>
                                <div class="balance__card-value">{{ minus }} <span class="balance__card-currency">₽</span></div>
                            </div>
                            <div class="balance__card-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0)">
                                        <path d="M12.6636 23.725C12.6639 23.7248 12.6642 23.7245 12.6645 23.7242L17.5395 18.8256C17.9047 18.4586 17.9033 17.865 17.5363 17.4997C17.1693 17.1345 16.5758 17.1359 16.2105 17.5028L12.9375 20.7918L12.9375 0.9375C12.9375 0.419719 12.5178 -2.31439e-07 12 -2.54072e-07C11.4822 -2.76705e-07 11.0625 0.419718 11.0625 0.9375L11.0625 20.7917L7.78952 17.5029C7.42427 17.1359 6.83069 17.1345 6.4637 17.4997C6.09663 17.865 6.09536 18.4587 6.46052 18.8256L11.3355 23.7242C11.3358 23.7245 11.3361 23.7248 11.3364 23.7251C11.7029 24.0923 12.2984 24.0911 12.6636 23.725Z" fill="#EB5757"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0">
                                            <rect width="24" height="24" fill="white" transform="translate(24) rotate(90)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                balance: 0,
                plus: 0,
                minus: 0,
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
                        this.plus = response.data.plus;
                        this.minus = response.data.minus;
                        this.loading = false;
                    })
                    .catch(error => console.error(error));
            }
        }
    }
</script>

<style lang="scss" scoped>
    .balance{
        width: 100%;
        padding: 50px 0;
        margin-bottom: 60px;
        background: linear-gradient(246.04deg, #B582F9 0%, #565FE6 100%);
        position: relative;

        &__title{
            font-size: 14px;
            color: #fff;
            font-weight: 400;
        }

        &__value{
            font-size: 36px;
            color: #fff;
            font-weight: 700;
        }

        &__currency{
            font-size: 24px;
            color: #fff;
            font-weight: 400;
        }

        &__cards{
            position: absolute;
            width: 100%;
            left: 50%;
            bottom: 0;
            transform: translate(-50%, 50%);
        }

        &__card{
            width: 100%;
            padding: 15px 20px;
            background: #fff;
            display: flex;
            align-content: center;
            justify-content: space-between;
            border-radius: 5px;
            box-shadow: 0px 10px 20px -5px rgba(0, 0, 0, 0.15);
            margin-top: 5px;
            transition: all .2s ease-in-out;

            &:hover{
                margin-top: 0;
            }
        }
        &__card-info{
            display: flex;
            flex-direction: column;
        }
        &__card-title{
            font-weight: 400;
            font-size: 12px;
            color: #A3A5AE;
        }
        &__card-value{
            font-weight: bold;
            font-size: 18px;
            color: #0D1131;
        }
        &__card-currency{
            font-size: 14px;
            font-weight: 400;
        }
        &__card-icon{
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
    }
</style>
