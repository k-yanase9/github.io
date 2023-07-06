<template>
  <v-container>
    <div class="content">
      <div class="line-numbers language-markup" v-html="mdToHtml"></div>
    </div>
  </v-container>
  </template>
  
  <script setup>
  import { ref, computed,defineProps,onMounted,watch } from "vue";
  // marked
  import { marked } from "marked";
  import {markedHighlight} from "marked-highlight";
  import { mangle } from "marked-mangle";
  import { gfmHeadingId } from "marked-gfm-heading-id";
  
  // prismjs
  import prism from "prismjs";
  import "prismjs/plugins/line-numbers/prism-line-numbers.js";
  import "prismjs/plugins/line-numbers/prism-line-numbers.css";
  import "prismjs/components/prism-python.js";
  import "prismjs/components/prism-bash.js";
  
  import "prismjs/plugins/toolbar/prism-toolbar.js"; // required for the following plugins
  import "prismjs/plugins/toolbar/prism-toolbar.css"; // required for the following plugins
  import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.js"; // show copy button
  import "prismjs/plugins/show-language/prism-show-language.js"; // display the language of the code block
  import "prismjs/plugins/custom-class/prism-custom-class";
  prism.plugins.customClass.map({ number: "prism-number", tag: "prism-tag" });

  const mdfile_dir = "/github.io/markdownfile/"
  // const mdfile_dir = "/markdownfile/"
  const props = defineProps({
    mdfile: String,
  });
  const mdfile =ref(""); 
  const markDown = ref("");
  
  marked.use(
    gfmHeadingId(),
    mangle(),
    markedHighlight({
    highlight: (code, lang) => {
      if (prism.languages[lang]) {
        return prism.highlight(code, prism.languages[lang], lang);
      } else {
        return code;
      }
    },
  }));
  
  // read in the md file and apply the highlight style to the Code Block
  const getMarkdownData = async () => {
    if (props.mdfile == null){
      return
    }
    // await fetch(mdfile.value)
    //   .then((response) => response.text())
    //   .then((data) => {markDown.value = data});
    await fetch(mdfile.value)
      .then((response) => {
        console.log(response.headers.get('last-modified'))
        return response.text()
      })
      .then((data) => {
        markDown.value = data
      });
    prism.highlightAll(); // perform the highlighting of the Code Blocks
  };
  
  // use the finialized markdown to HTML code in the template
  const mdToHtml = computed(() => {
    const mdhtml = marked.parse(markDown.value);
    return mdhtml;
  });
  
  // call the function to be ran
  onMounted(() => {
    mdfile.value=mdfile_dir + props.mdfile
    getMarkdownData();
  });

  watch(()=>props.mdfile,(newVal,oldVal)=>{
    mdfile.value=mdfile_dir + newVal
    getMarkdownData();
  },{deep:true})

  </script>
  
  <style>
  /* Add the prism themes here */
  @import "prismjs/themes/prism-okaidia.css";
  h1{
    font-size: 3rem;
  } 
  h2{
    font-size: 2rem;
  }
  p{
    font-size: 1.2rem;
    list-style-type: '👉';
  }
  ul, ol {
    padding-left:1rem;
    font-size: 1.5rem;
  }
 
  </style>