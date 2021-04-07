<template>
  <div class="wrapper">
    <div class="editors">
      <div class="section">
        <h2>React style json</h2>
        <prism-editor class="editor" v-model="reactStyle" :highlight="jsHighlighter" line-numbers></prism-editor>
      </div>
      <div class="section">
        <h2>css</h2>
        <prism-editor class="editor" v-model="css" :highlight="cssHighlighter" line-numbers readonly></prism-editor>
      </div>
    </div>
    <button @click="convert()">Convert</button>
  </div>
  
</template>

<script>  
  import { highlight, languages } from 'prismjs/components/prism-core';
  import 'prismjs/components/prism-clike';
  import 'prismjs/components/prism-json';
  import 'prismjs/themes/prism-tomorrow.css';
  import 'prismjs/components/prism-css';

  const camelToKebabCase = str => str.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`);
  
export default {
  name: 'HelloWorld',
  data: function() {
    return {
      reactStyle: '{\n\twidth: "25px",\n\theight: "25px",\n\tmargin: "auto 0",\n\tbackgroundColor: "rgba(128, 134, 147, 0.2)",\n\tborderRadius: "10px",\n}',
      css: "/* Converted css here */"
    }
  },
  methods: {
    jsHighlighter(code) {
      return highlight(code, languages.json, "json");
    },
    cssHighlighter(code) {
      return highlight(code, languages.css, "css");
    },
    convert() {
      const splitStyle = this.reactStyle.split(":");
      let css = "/* Converted css here */\n\n"
      const re = "\\w+$";
      splitStyle.forEach((bit, index) => {
        if(index === 0) {
          const prop = bit.match(re)?.[0];
          prop && (css += `${camelToKebabCase(prop)}: `);
        }
        else {
          const secondSplit = bit.split('"');
          css += `${secondSplit[1]};\n`;
          const nextProp = secondSplit[2].match(re)?.[0];
          nextProp && (css += `${camelToKebabCase(nextProp)}: `);
        }
      });

      this.css = css;
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

.section {
  width: 50%;
  margin: 0 1rem;
}

.section h2 {
  text-align: center;
  display: inline-block;
  color: white;
  border-radius: 4px;
  background-color: #ef0041;
}

.editor {
  width: 100%;
  height: 55vh;
  overflow: auto;
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
