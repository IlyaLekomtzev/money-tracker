<template>
  <section class="form">
    <Loader v-if="loading" />
    <div class="container">
      <div class="row">
        <div class="col-12">
          <form class="form__item" @submit.prevent="addItem">

           <div class="form__item-group">
            <div class="title">Действие:</div>
            <div class="form__radio-items">
              <div class="form__radio-item">
                <input type="radio" name="action" id="action-plus" value="1"
                  v-model="action"
                >
                <label class="label" for="action-plus">
                  <div class="label__info">
                      <div class="label__title">Пополнение</div>
                      <div class="label__value" v-if="value !== ''">{{ value | priceFormat(value) }} <span class="label__currency">₽</span></div>
                  </div>
                  <div class="label__icon">
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
                </label>
              </div>
              <div class="form__radio-item">
                <input type="radio" name="action" id="action-minus" value="0"
                  v-model="action"
                >
                <label class="label" for="action-minus">
                  <div class="label__info">
                      <div class="label__title">Списание</div>
                      <div class="label__value" v-if="value !== ''">-{{ value | priceFormat(value) }} <span class="label__currency">₽</span></div>
                  </div>
                  <div class="label__icon">
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
                </label>
              </div>
            </div>
           </div>

           <div class="form__item-group">
             <div class="title">Сумма:</div>
             <div class="form__inpit-item">
              <input type="number" name="value" placeholder="100" min="1" v-model="value" pattern="[0-9]" required autofocus
                :class="{invalid: $v.value.$dirty && !$v.title.value}"
              >
             </div>
           </div>

           <div class="form__item-group">
             <div class="title">Название:</div>
             <div class="form__inpit-item">
              <input type="text" name="title" placeholder="Покупка еды" v-model="title" required
                :class="{invalid: $v.title.$dirty && !$v.title.minValue}"
              >
             </div>
           </div>

           <button class="form__button" type="submit">Добавить</button>
            
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {required} from 'vuelidate/lib/validators';
import Loader from '../../Loader';

export default {
  data() {
    return{
      action: 1,
      value: '',
      title: '',
      loading: false
    }
  },
  components: {
    Loader
  },
  validations: {
    action: {
      required
    },
    value: {
      required,
    },
    title: {
      required,
    }
  },
  methods: {
    addItem () {
      if (this.$v.$invalid) {
        console.log(this.$v);
        this.$v.$touch()
        return
      }

      this.loading = true;
      axios
        .post('/api/items', {
            action: this.action,
            title: this.title,
            value: this.value
        })
        .then(response => {
            this.$router.push('/');
        })
        .catch(error => {
            console.error(error);
        });
    }
  }
}
</script>

<style lang="scss" scoped>
  .form{

    &__button{
      display: block;
      padding: 12px 35px;
      border: none;
      background: linear-gradient(260.36deg, #565FE6 0%, #B582F9 100%);
      box-shadow: 0px 10px 20px -5px rgba(0, 0, 0, 0.15);
      border-radius: 50px;
      font-size: 14px;
      text-transform: uppercase;
      font-weight: 700;
      text-align: center;
      margin: 30px auto;
      color: #fff;
    }

    &__item{

    }

    &__item-group{
      margin-top: 30px;
    }

    &__radio-items{
      width: 100%;
      display: flex;
      justify-content: space-between;
    }

    &__radio-item{
      width: 47%;

      :hover{
        + .label{
          border-color: #565FE6;
        }
      }

      .label{
        width: 100%;
        padding: 15px 20px;
        margin: 0;
        background: #fff;
        border: 1px solid rgba(#fff, 0);
        display: flex;
        align-content: center;
        justify-content: space-between;
        border-radius: 5px;
        box-shadow: 0px 10px 20px -5px rgba(0, 0, 0, 0.15);
        margin-top: 5px;
        transition: all .2s ease-in-out;
        cursor: pointer;

        &__info{
            display: flex;
            flex-direction: column;
        }
        &__title{
            font-weight: 400;
            font-size: 12px;
            color: #A3A5AE;
            transition: all .2s ease-in-out;
        }
        &__value{
            font-weight: bold;
            font-size: 18px;
            color: #0D1131;
            transition: all .2s ease-in-out;
        }
        &__currency{
            font-size: 14px;
            font-weight: 400;
        }
        &__icon{
            display: flex;
            flex-direction: column;
            justify-content: center;
            transition: all .2s ease-in-out;
        }
      }

      input[type=radio]{
        display: none;
      }

      input[type=radio]:checked{
        + .label{
          background: linear-gradient(260.36deg, #565FE6 0%, #B582F9 100%);
        }

        + .label .label__title{
          color: #fff;
        }
        
        + .label .label__value{
          color: #fff;
        }

        + .label .label__icon svg path{
          fill: #fff;
        }

        + .label .label__icon svg{
          animation: rotateArrow .5s 1 alternate ease-in-out;
        }
      }
    }

    &__inpit-item{
      margin-top: 10px;

      input{
        width: 100%;
        height: 40px;
        background: none;
        border: 1px solid #DDDDDD;
        border-radius: 5px;
        padding-left: 15px;
        font-size: 16px;
        color: #0D1131;
        outline: none;
        transition: all .2s ease-in-out;

        &:focus{
          border-color: #565FE6;
        }

        &.invalid{
          border-color: #EB5757;
        }
      }
    }
  }

  .title{
    font-size: 14px;
    color: #0D1131;
  }

  @keyframes rotateArrow{
    from {transform: rotate(0deg);}
    to {transform: rotate(360deg);}
  }
</style>