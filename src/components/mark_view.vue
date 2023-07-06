<template>
    <div class="content">
      <div class="line-numbers language-markup" v-html="mdToHtml"></div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed,defineProps,onMounted,watch } from "vue";
  import { marked } from "marked";
  import prism from "prismjs";
  const mdfile_dir = "/github.io/markdownfile/"
  const props = defineProps({
    mdfile: String,
  });

  
  // Add numbering to the Code blocks
  import "prismjs/plugins/line-numbers/prism-line-numbers.js";
  import "prismjs/plugins/line-numbers/prism-line-numbers.css";
  import "prismjs/components/prism-python.js";
  import "prismjs/components/prism-bash.js";
  
  import "prismjs/plugins/toolbar/prism-toolbar.js"; // required for the following plugins
  import "prismjs/plugins/toolbar/prism-toolbar.css"; // required for the following plugins
  import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.js"; // show copy button
  import "prismjs/plugins/show-language/prism-show-language.js"; // display the language of the code block
  
  // This is needed for a conflict with other CSS files being used (i.e. Bulma).
  import "prismjs/plugins/custom-class/prism-custom-class";

  prism.plugins.customClass.map({ number: "prism-number", tag: "prism-tag" });
  const mdfile =ref(""); 
  const markDown = ref("");
  
  //marked Options => https://marked.js.org/using_advanced#options
  marked.use({
    highlight: (code, lang) => {
      if (prism.languages[lang]) {
        return prism.highlight(code, prism.languages[lang], lang);
      } else {
        return code;
      }
    },
  });
  
  // read in the md file and apply the highlight style to the Code Block
  const getMarkdownData = async () => {
    await fetch(mdfile.value)
      .then((response) => response.text())
      .then((data) => (markDown.value = data));
    prism.highlightAll(); // perform the highlighting of the Code Blocks
  };
  
  // use the finialized markdown to HTML code in the template
  const mdToHtml = computed(() => {
    console.log(markDown.value);
    console.log(mdfile.value)
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
  </style>