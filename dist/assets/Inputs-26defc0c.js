import{_ as p}from"./_plugin-vue_export-helper-c27b6911.js";import{V as r}from"./VCard-f29c5544.js";import{l as o,U as i,_ as l,i as a,q as n,aB as u,a3 as c,W as v,X as h,v as e,n as b}from"./index-17bf78ba.js";import{V as m}from"./VCol-0c5d6296.js";const _={data:()=>({model:"La cruz borra lo escrito -->",variants:[{label:"Regular",placeholder:"Placeholder",variant:null},{label:"Solo",placeholder:"Placeholder",variant:"solo"},{label:"Filled",placeholder:"Placeholder",variant:"filled"},{label:"Outlined",placeholder:"Placeholder",variant:"outlined"},{label:"Plain",placeholder:"Placeholder",variant:"plain"},{label:"Underlined",placeholder:"Placeholder",variant:"underlined"}]})},f={class:"dark:bg-slate-800 h-screen grid items-center"},g={class:"grid grid-cols-2 place-content-center"},k=l("pre",{class:"text-center"},[e("              "),l("code",{class:"whitespace-pre-line"},[e(`
                `),l("span",null,`
                  <v-responsive class="dark:bg-white">
                  <v-text-field
                    v-model="model"
                    clearable
                    hide-details="auto"
                    label="Campo 1"
                  ></v-text-field>
                  </v-responsive>
                `),e(`
              `)]),e(`
            `)],-1),x=l("pre",{class:"text-center"},[e("              "),l("code",{class:"whitespace-pre-line"},[e(`
                `),l("span",null,`
                  <v-col v-for="variant in variants" :key="variant.label">
                  <v-text-field
                    class="dark:bg-white"
                    hide-details="auto"
                    :label="variant.label"
                    :placeholder="variant.placeholder"
                    :variant="variant.variant"
                  ></v-text-field>
                  </v-col>
                `),e(`
              `)]),e(`
            `)],-1);function V(d,s,w,P,B,C){return o(),i("div",f,[l("div",g,[a(r,{class:"mx-auto pa-3 pb-3 dark:bg-slate-300",elevation:"8",width:"448",rounded:"lg"},{default:n(()=>[a(u,{class:"dark:bg-white"},{default:n(()=>[a(c,{modelValue:d.model,"onUpdate:modelValue":s[0]||(s[0]=t=>d.model=t),clearable:"","hide-details":"auto",label:"Campo 1"},null,8,["modelValue"])]),_:1})]),_:1}),a(r,{class:"mx-auto mt-4 mb-8 dark:bg-slate-300",elevation:"8",width:"448",rounded:"lg"},{default:n(()=>[k]),_:1}),a(r,{class:"mx-auto pa-3 pb-3 dark:bg-slate-300",elevation:"8",width:"448",rounded:"lg"},{default:n(()=>[(o(!0),i(v,null,h(d.variants,t=>(o(),b(m,{key:t.label},{default:n(()=>[a(c,{class:"dark:bg-white","hide-details":"auto",label:t.label,placeholder:t.placeholder,variant:t.variant},null,8,["label","placeholder","variant"])]),_:2},1024))),128))]),_:1}),a(r,{class:"mx-auto mt-4 mb-8 dark:bg-slate-300",elevation:"8",width:"448",rounded:"lg"},{default:n(()=>[x]),_:1})])])}const U=p(_,[["render",V]]);export{U as default};
