<template>
  <div class="bottom-nav">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <nav>
            <ul class="menu">
              <li class="menu__item">
                <router-link to="/" tag="a" exact>
                  <b-icon icon="house-door" font-scale="2" title="Home" aria-hidden="true"></b-icon>
                </router-link>
              </li>
              <li class="menu__item">
                <router-link to="/balance" tag="a">
                  <b-icon icon="wallet2" font-scale="2" title="Balance" aria-hidden="true"></b-icon>  
                </router-link>
              </li>
              <li class="menu__item menu__item--add">
                <router-link to="/add" tag="a">
                  <div class="add-icon">
                    +
                  </div>
                </router-link>
              </li>
              <li class="menu__item">
                <router-link to="/statistics" tag="a">
                  <b-icon icon="pie-chart" font-scale="2" title="Stats" aria-hidden="true"></b-icon>  
                </router-link>
              </li>
              <li class="menu__item">
                <router-link to="/profile" tag="a">
                  <b-icon icon="person" font-scale="2" title="Profile" aria-hidden="true"></b-icon>    
                </router-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
  .bottom-nav{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 50px;
    background: #fff;
    box-shadow: 0px -5px 25px -5px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
  }
  nav{
    width: 100%;
  }
  .menu{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style: none;

    &__item{
      a{
        text-decoration: none;

        svg{
          fill: #0D1131;
        }

        &.current{
          svg{
            fill: #565FE6;
          }
        }
      }

      &--add{
         position: relative;
         width: 50px;
         height: 50px;

        .add-icon{
          position: absolute;
          top: -30px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 60px;
          background: linear-gradient(225deg, #565FE6 0%, #B582F9 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 40px;
          box-shadow: 0px 10px 20px -5px rgba(0, 0, 0, 0.15);
          transition: all .2s ease-in-out;

          &:active{
            top: -25px;
            box-shadow: 0px 10px 15px -5px rgba(0, 0, 0, 0.25);
          }
        }
      }
    }
  }
</style>