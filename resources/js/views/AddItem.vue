<template>
    <section class="pt-3 pb-3">
        <ul v-if="errors">
            <li v-for="error in arErrors">{{ error }}</li>
        </ul>
        <form @submit.prevent="addItem" method="post">
            <div class="form-group">
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="action" id="exampleRadios1" value="1" v-model="action">
                    <label class="form-check-label" for="exampleRadios1">
                        Пополнение
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="action" id="exampleRadios2" value="0" v-model="action">
                    <label class="form-check-label" for="exampleRadios2">
                        Списание
                    </label>
                </div>
            </div>

            <div class="form-group">
                <label for="exampleFormControlInput1">Сумма</label>
                <div class="input-group mb-2">
                    <div class="input-group-prepend">
                        <div class="input-group-text">₽</div>
                    </div>
                    <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="100" v-model="value" pattern="[0-9]" required>
                </div>
            </div>

            <div class="form-group">
                <label for="exampleFormControlInput2">Название</label>
                <input type="text" class="form-control" id="exampleFormControlInput2" placeholder="Покупка еды" v-model="title" required>
            </div>

            <button class="btn btn-primary">Добавить</button>
        </form>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                action: 1,
                value: '',
                title: '',
                errors: false,
                arErrors: []
            }
        },
        methods: {
            addItem () {
                axios
                    .post('/api/items', {
                        action: this.action,
                        title: this.title,
                        value: this.value
                    })
                    .then(response => {
                        if (response.status === 200) {
                            this.errors = false;
                            this.action = 1;
                            this.title = '';
                            this.value = '';
                            this.$router.push('/');
                        } else {
                            console.error(response.status);
                        }
                    })
                    .catch(error => {
                        this.errors = true;
                        this.arErrors = error.errors;
                    });
            }
        }
    }
</script>
