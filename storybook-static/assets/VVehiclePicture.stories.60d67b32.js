import{d as u,o as t,f as o,z as r,E as i,B as d,t as n,j as c}from"./vue.esm-bundler.0b7946ce.js";const l={class:"overflow-hidden relative max-w-[220px] max-h-[140px]"},p=["src"],f={key:0,class:"flex absolute top-[10px] items-center px-2 text-xs text-white bg-blue rounded-sm"},m={key:0,class:"mr-1",width:"16",height:"11",viewBox:"0 0 16 11",fill:"none",xmlns:"http://www.w3.org/2000/svg"},h=r("path",{d:"M0.5 3H2L5 0H11L11.75 0.75L8 4.5L6 2.5L4.5 4L8 7.5L13.25 2.25L14 3H15.5C15.7761 3 16 3.22386 16 3.5C16 3.77614 15.7761 4 15.5 4H15V10C15 10.5523 14.5523 11 14 11H13C12.4477 11 12 10.5523 12 10V9H4V10C4 10.5523 3.55228 11 3 11H2C1.44772 11 1 10.5523 1 10V4H0.5C0.223858 4 0 3.77614 0 3.5C0 3.22386 0.223858 3 0.5 3Z",fill:"white"},null,-1),x=[h],V={key:1,class:"v-vehicle-picture__triangle after:block after:absolute absolute after:top-0 top-[10px] after:right-[-8px] py-[2px] px-2 mt-[23px] text-xs text-white bg-green-light"},s=u({props:{src:{type:String,required:!0},isNew:Boolean,isVerifiedCode:Boolean,topPosition:{type:Number,default:void 0}},setup(e){return(C,b)=>(t(),o("div",l,[r("img",{src:e.src},null,8,p),e.isNew||e.isVerifiedCode?(t(),o("span",f,[e.isVerifiedCode?(t(),o("svg",m,x)):i("",!0),d(" "+n(e.isVerifiedCode?"\u041F\u0435\u0440\u0435\u0432\u0456\u0440\u0435\u043D\u0438\u0439 VIN-\u043A\u043E\u0434":"\u041D\u043E\u0432\u0438\u0439"),1)])):i("",!0),e.topPosition?(t(),o("span",V," \u0422\u041E\u041F "+n(e.topPosition),1)):i("",!0)]))}});s.__docgenInfo={exportName:"default",displayName:"VVehiclePicture",description:"",tags:{},props:[{name:"src",type:{name:"string"},required:!0},{name:"isNew",type:{name:"boolean"}},{name:"isVerifiedCode",type:{name:"boolean"}},{name:"topPosition",type:{name:"number"},defaultValue:{func:!1,value:"undefined"}}]};const y={title:"UI/VehiclePicture",component:s,args:{src:"https://cdn.riastatic.com/photosnew/auto/photo/mazda_3__444263528b.webp",isNew:!1,isVerifiedCode:!1}},a=e=>c(s,e,null),_=a.bind({});_.args={isNew:!0};const g=a.bind({});g.args={isVerifiedCode:!0};const w=a.bind({});w.args={topPosition:50};const v=["Default","IsNew","IsVerifiedCode","TopPosition"];export{a as Default,_ as IsNew,g as IsVerifiedCode,w as TopPosition,v as __namedExportsOrder,y as default};
//# sourceMappingURL=VVehiclePicture.stories.60d67b32.js.map