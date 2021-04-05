<template>
  <div class="wrapper">
    <div class="editors">
      <prism-editor class="editor" v-model="reactStyle" :highlight="jsHighlighter" line-numbers></prism-editor>
      <prism-editor class="editor" v-model="css" :highlight="cssHighlighter" line-numbers readonly></prism-editor>
    </div>
    <button>Convert</button>
  </div>
  
</template>

<script>  
  import { highlight, languages } from 'prismjs/components/prism-core';
  import 'prismjs/components/prism-clike';
  import 'prismjs/components/prism-javascript';
  import 'prismjs/themes/prism-tomorrow.css';
  import 'prismjs/components/prism-css';
  
export default {
  name: 'HelloWorld',
  data: function() {
    return {
      reactStyle: "console.log('Hello World');",
      css: "/* Converted css here */"
    }
  },
  methods: {
    jsHighlighter(code) {
      return highlight(code, languages.js, "js");
    },
    cssHighlighter(code) {
      return highlight(code, languages.css, "css");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {
  height: 100%;
  width: calc(100% - 10rem);
  padding: 0 5rem;
}

.editors {
  display: flex;
  height: 100%;
  width: 100%;
}

.editor {
  width: 50%;
  height: 60vh;
  overflow: auto;
  margin: 0 1rem;
  background-color: white;
}

button {
  margin: 2rem;
  border-radius: 4px;
  background-color: #ffe33d;
  color: black;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 5px;
  text-justify: kashida;
  padding: 1rem;
  text-align: center;
}

button:focus {
  outline: none;
}

button:hover {
  background-color: #ef0041;
  color: white;
}
</style>
