<template>
  <div id="app">
    <div class="header">
      <h1>r2css</h1>
      <img id="logo" :src="logo" />
    </div>
    <StyleConverter />
    <p class="footer">Made with 💖 using Vue 🤣</p>
  </div>
</template>

<script>
import StyleConverter from './components/StyleConverter.vue'
import logo from './assets/logo.png';

export default {
  name: 'App',
  metaInfo: {
    title: 'r2css',
    htmlAttrs: {
      lang: 'en-US'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'description', content: 'Online tool that converts react style to css style' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  },
  components: {
    StyleConverter
  },
  data() {
    return {
      logo
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap');

html, body {
  margin: 0;
}

body {
  background-color: #f6eeee;  
}

#app {
  font-family: 'Source Code Pro', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ff5bd7;
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
}

.header h1 {
  margin: 0;
  margin-bottom: 2rem;
  font-size: 100px;
  display: inline-block;
}

.header #logo {
  height: 10rem;
  width: auto;
  margin-left: 1rem;
}

.footer {
  margin-bottom: 0;
  background-color: #a4debf;
  color: black;
  height: 2.5rem;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Overrides */

.prism-editor__textarea:focus {
  outline: none;
}

/* Media queries */

@media screen and (max-width: 550px) {
  .header {
    margin-bottom: 1rem;
  }
  
  .header h1 {
    font-size: 50px;
    margin-bottom: 0;
  }

  .header #logo {
    height: 4rem;
  }

  .footer {
    position: unset;
  }
}

</style>
