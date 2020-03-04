<template>
  <div id="app">
    <div id="nav">
      <h1 class="greeting">Good morning Wael. Here's what you have planned.</h1>
    </div>
    <router-view />
  </div>
</template>

<style lang="less">
body {
  background-color: rgb(231, 221, 80);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.flex {
  display: flex;
}

.font-bold {
  font-weight: bold;
}

.rounded {
  border-radius: 15px;
}

.small {
  font-size: smaller;
}

.slim {
  font-weight: 100;
}

.zm {
  margin: 0;
}

.zp {
  padding: 0;
}

.heading {
  text-transform: capitalize;
}

.greeting {
  margin: 0;
}

input {
  border: none;
  background: transparent;
  padding-bottom: 2px;
  &:focus {
    outline: none;
    border-bottom: rgba(112, 128, 144, 0.5) solid 1px;
  }
}
</style>
