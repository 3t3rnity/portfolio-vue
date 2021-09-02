<template>
  <div id="app">
    <header id="header">
      <ul>
        <router-link
          v-for="(item, id) in menuList"
          :key="id"
          :to="item.to"
          tag="li"
        >
          {{ item.title }}
        </router-link>
      </ul>
    </header>
    <div id="transition-wrapper">
      <transition :name="transitionName" mode="out-in">
        <router-view class="wrapper"></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuList: [
        {
          to: '/',
          title: 'Главная',
        },
        {
          to: '/about',
          title: 'Обо мне',
        },
        {
          to: '/techs',
          title: 'Мой стэк',
        },
        {
          to: '/projects',
          title: 'Мои проекты',
        },
        {
          to: '/contacts',
          title: 'Контакты',
        },
      ],
      transitionName: 'slide',
    };
  },
  watch: {
    $route(to, from) {
      //   const toDepth = to.path.split('/').length;
      //   const fromDepth = from.path.split('/').length;
      //   this.transitionName = toDepth < fromDepth ? 'slide' : 'slideback';
      const indexTo = this.menuList.findIndex((el) => el.to === to.path);
      const indexFrom = this.menuList.findIndex((el) => el.to === from.path);
      this.transitionName = indexTo > indexFrom ? 'slideback' : 'slide';
      //   console.log(to, from);
    },
  },
};
</script>

<style lang="scss" scoped>
#app {
  position: relative;
  width: 100vw;
  height: 100vh;
  background: rgb(154, 58, 180);
  background: -moz-linear-gradient(
    90deg,
    rgba(154, 58, 180, 1) 15%,
    rgba(252, 69, 85, 1) 77%
  );
  background: -webkit-linear-gradient(
    90deg,
    rgba(154, 58, 180, 1) 15%,
    rgba(252, 69, 85, 1) 77%
  );
  background: linear-gradient(
    90deg,
    rgba(154, 58, 180, 1) 15%,
    rgba(252, 69, 85, 1) 77%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#9a3ab4",endColorstr="#fc4555",GradientType=1);
}

#header {
  position: absolute;
  background: white;
  width: 100%;
  height: 50px;
  > ul {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;

    > li {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 10%;
      height: 100%;
    }
  }
}

#transition-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.wrapper {
    width: 95%;
  height: 80%;
}
.slide-leave-active,
.slide-enter-active {
  transition: 0.3s ease-out;
}
.slide-enter {
  transform: translate(-100%, 0);
}
.slide-leave-to {
  transform: translate(100%, 0);
}

.slideback-leave-active,
.slideback-enter-active {
  transition: 0.3s ease-out;
}
.slideback-enter {
  transform: translate(100%, 0);
}
.slideback-leave-to {
  transform: translate(-100%, 0);
}
</style>
