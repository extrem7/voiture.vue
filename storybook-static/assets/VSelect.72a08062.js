import{d as r,o as s,f as u,g as d}from"./vue.esm-bundler.0b7946ce.js";var p=(t,a)=>{const e=t.__vccOpts||t;for(const[o,l]of a)e[o]=l;return e};const m=["value"],n=r({props:{modelValue:null},emits:["update:modelValue"],setup(t){return(a,e)=>(s(),u("select",{class:"py-1 pl-2 rounded-[3px] border-none cursor-pointer",value:t.modelValue,onChange:e[0]||(e[0]=o=>a.$emit("update:modelValue",o.target.value))},[d(a.$slots,"default",{},void 0,!0)],40,m))}});var c=p(n,[["__scopeId","data-v-2bb4b4ee"]]);n.__docgenInfo={exportName:"default",displayName:"VSelect",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"union",elements:[{name:"number"},{name:"string"}]}}],events:[{name:"update:modelValue",type:{names:["string"]}}],slots:[{name:"default"}]};export{c as V,p as _};
//# sourceMappingURL=VSelect.72a08062.js.map
