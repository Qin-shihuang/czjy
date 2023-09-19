import{_ as p,o as a,c as l,a as t,t as o,r as I,b as F,n as m,d as n,e as B,p as x,f as q,F as _,g,h as T,i as M,j as w,k as U,l as K,u as N,m as v}from"./index-b96fd8ae.js";const W=["src","title"],G={__name:"Title",props:{hero:{type:Object,default:()=>({})}},setup(e){return(c,r)=>(a(),l("module",null,[t("img",{class:"Header",src:"./head/".concat(e.hero.head,".jpg"),title:e.hero.id},null,8,W),t("p-name",null,o(e.hero.name),1),t("p-nick",null,"—— "+o(e.hero.nick),1)]))}},J=p(G,[["__scopeId","data-v-16cf2fc9"]]);const E=e=>(x("data-v-ddf71f05"),e=e(),q(),e),P={attr:""},Q=E(()=>t("p-title",null,"● 角色定位",-1)),X={split:""},Y={split:""},Z={break:""},ee=E(()=>t("p-title",null,"● 进化素材",-1)),te=["alt","title"],ae=["alt","title"],le=["alt","title"],ne=["alt","title"],se=["alt","title"],oe=["alt","title"],ie=["alt","title"],re=["alt","title"],ce={mate:""},ue=E(()=>t("p-title",null,"● 推荐队友",-1)),de={key:0},he=["src","alt"],me={exclu:""},_e=E(()=>t("p-title",null,"● 专属装备",-1)),ge={key:0},ye=["src","alt"],be={key:1,class:"block"},ke=["alt"],pe={"no-desc":""},ve={__name:"Attr",props:{hero:{type:Object,default:()=>({})}},setup(e){const c=I({pos:["","近战","远程","肉盾","输出","辅助","前期","中期","后期"],heat:["fast","middle","slow"]});return(r,u)=>(a(),l("module",{style:B({backgroundImage:"url(./draw/".concat(e.hero.draw,".jpg)")})},[t("p-box",P,[Q,t("p-attr-tag",null,o(c.value.pos[e.hero.pos[2]]),1),t("p-attr-tag",X,o(c.value.pos[e.hero.pos[1]])+" ( "+o(e.hero.attr.range)+" )",1),t("p-attr-tag",Y,[F(o(c.value.pos[e.hero.pos[3]])+" ",1),t("p-sprite",{class:m(["inblock w-6 h-6 select-none","_heat-".concat(c.value.heat[e.hero.pos[3]-6])])},null,2)])]),t("p-box",Z,[ee,t("p-material",{class:m("_material-".concat(e.hero.breaks[0].image)),alt:e.hero.breaks[0].name,title:e.hero.breaks[0].name},null,10,te),t("p-material",{class:m("_material-".concat(e.hero.breaks[1].image)),alt:e.hero.breaks[1].name,title:e.hero.breaks[1].name},null,10,ae),t("p-material",{class:m("_material-".concat(e.hero.breaks[2].image)),alt:e.hero.breaks[2].name,title:e.hero.breaks[2].name},null,10,le),t("p-material",{split:"",class:m("_material-".concat(e.hero.breaks[3].image)),alt:e.hero.breaks[3].name,title:e.hero.breaks[3].name},null,10,ne),t("p-material",{class:m("_material-".concat(e.hero.breaks[4].image)),alt:e.hero.breaks[4].name,title:e.hero.breaks[4].name},null,10,se),t("p-material",{split:"",class:m("_material-".concat(e.hero.breaks[5].image)),alt:e.hero.breaks[5].name,title:e.hero.breaks[5].name},null,10,oe),t("p-material",{class:m("_material-".concat(e.hero.breaks[6].image)),alt:e.hero.breaks[6].name,title:e.hero.breaks[6].name},null,10,ie),e.hero.breaks[7]?(a(),l("p-material",{key:0,split:"",class:m("_material-".concat(e.hero.breaks[7].image)),alt:e.hero.breaks[7].name,title:e.hero.breaks[7].name},null,10,re)):n("",!0)]),t("p-box",ce,[ue,e.hero.mate?(a(),l("p-image-text",de,[t("img",{class:"inblock Header",src:"./head/".concat(e.hero.mate.head,".jpg"),alt:e.hero.mate.name},null,8,he),t("p-two-line",null,[t("p-name",null,o(e.hero.mate.name),1),t("p-desc",null,o(e.hero.mate.note),1)])])):n("",!0)]),t("p-box",me,[_e,e.hero.ring?(a(),l("p-image-text",ge,[t("img",{"no-ring":"",class:"inblock Header",src:"./equip/".concat(e.hero.ring.image,".jpg"),alt:e.hero.ring.image},null,8,ye),t("p-two-line",null,[t("p-name",null,o(e.hero.ring.name),1),t("p-desc",null,o(e.hero.ring.desc),1)])])):n("",!0),e.hero.engrav?(a(),l("p-image-text",be,[t("p-image",{class:m(["_engrav-".concat(e.hero.engrav.image)]),alt:e.hero.engrav.name},null,10,ke),t("p-two-line",null,[t("p-name",pe,o(e.hero.engrav.name),1)])])):n("",!0)])],4))}},$e=p(ve,[["__scopeId","data-v-ddf71f05"]]);const fe=e=>(x("data-v-0cdc6fb5"),e=e(),q(),e),we=fe(()=>t("p-title",null,"● 英雄立绘",-1)),xe=["src"],qe={__name:"Draw",props:{hero:{type:Object,default:()=>({})}},setup(e){return(c,r)=>(a(),l("module",null,[we,t("img",{src:"./draw/".concat(e.hero.draw,".jpg")},null,8,xe)]))}},He=p(qe,[["__scopeId","data-v-0cdc6fb5"]]);const A=e=>(x("data-v-f7c27a01"),e=e(),q(),e),je={skill:""},Te=A(()=>t("p-title",null,"● 英雄技能",-1)),Le=A(()=>t("p-alter",null,"橙色数值是技能精通后的数值",-1)),Ie=["src"],Ce=["innerHTML"],Me={__name:"Skill",props:{hero:{type:Object,default:()=>({})}},setup(e){return(c,r)=>(a(),l("module",je,[Te,Le,t("table",null,[(a(!0),l(_,null,g(e.hero.skills,u=>(a(),l("tr",null,[t("td",null,[t("p-skill-title",null,[t("img",{src:"./skill/".concat(u.image,".jpg"),onError:r[0]||(r[0]=h=>h.target.src+=".fuckosc")},null,40,Ie),t("p-skill-name",null,o(u.name),1)]),t("p-skill-desc",{innerHTML:u.desc},null,8,Ce)])]))),256))])]))}},Se=p(Me,[["__scopeId","data-v-f7c27a01"]]);const Oe=["src"],Ne=["innerHTML"],Ee={__name:"Captain",props:{hero:{type:Object,default:()=>({})}},setup(e){const c=e,r=T(()=>{var u,h;return(h=(u=c.hero)==null?void 0:u.captains)!=null&&h.length?"":"（尚未实装）"});return(u,h)=>(a(),l("module",null,[t("p-title",null,"● 助战技能"+o(r.value),1),t("table",null,[(a(!0),l(_,null,g(e.hero.captains,d=>(a(),l("tr",null,[t("td",null,[t("p-skill-title",null,[t("img",{src:"./skill/".concat(d.image,".jpg")},null,8,Oe),t("p-skill-name",null,o(d.name),1)]),t("p-skill-desc",{innerHTML:d.desc},null,8,Ne)])]))),256))])]))}},De=p(Ee,[["__scopeId","data-v-9f4de61f"]]);const Ve=e=>(x("data-v-568ff330"),e=e(),q(),e),Be={combo:""},Ae={key:0},Re=Ve(()=>t("tr",{class:"nosel"},[t("th",null,"组合名"),t("th",null,"效果"),t("th",null,"主技能"),t("th",null,"组合技1"),t("th",null,"组合技2")],-1)),ze={class:"font-bold"},Fe={class:""},Ue=["rowspan"],Ke=["src"],We=["rowspan"],Ge=["src"],Je={mate:""},Pe=["src"],Qe={class:"inline name"},Xe=["rowspan"],Ye={__name:"Combo",props:{hero:{type:Object,default:()=>({})}},setup(e){const c=e,r=T(()=>{var u,h;return(h=(u=c.hero)==null?void 0:u.combos)!=null&&h.reduce((d,y)=>d+y.combos.length,0)?"":"（无）"});return(u,h)=>(a(),l("module",Be,[t("p-title",null,"● 技能组合"+o(r.value),1),r.value?n("",!0):(a(),l("table",Ae,[Re,(a(!0),l(_,null,g(e.hero.combos,d=>(a(),l(_,null,[(a(!0),l(_,null,g(d.combos,(y,i)=>(a(),l("tr",null,[t("td",ze,o(y.name),1),t("td",Fe,o(y.effect),1),i==0?(a(),l("td",{key:0,rowspan:d.combos.length},[t("img",{src:"./skill/".concat(d.image,".jpg")},null,8,Ke),t("p-name",null,o(d.name),1)],8,Ue)):n("",!0),(a(!0),l(_,null,g(y.skills,b=>(a(),l(_,null,[b.hide?n("",!0):(a(),l(_,{key:0},[b.empty?(a(),l("td",{key:1,rowspan:b.rowspan},"无",8,Xe)):(a(),l("td",{key:0,rowspan:b.rowspan},[t("img",{src:"./skill/".concat(b.image,".jpg")},null,8,Ge),t("p-skill-mate",null,[t("p-name",Je,o(b.name),1),t("p-hero",null,[t("img",{hero:"",src:"./head/".concat(b.heroHead,".jpg")},null,8,Pe),t("p-name",Qe,o(b.heroName),1)])])],8,We))],64))],64))),256))]))),256))],64))),256))]))]))}},Ze=p(Ye,[["__scopeId","data-v-568ff330"]]);const et={__name:"CrystalIcon",props:{id:{type:Number,default:null}},setup(e){const c=e,r=I({1:"gray",3:"#218EDA",4:"#C841E0",5:"#DC6727"}),u=I({5001:{name:"堕天",quality:1,image:"black/angel04"},5002:{name:"统治",quality:1,image:"black/crow04"},5003:{name:"永夜",quality:1,image:"black/death04"},5004:{name:"抵御",quality:1,image:"black/defence04"},5005:{name:"深渊",quality:1,image:"black/demon04"},5006:{name:"宿命",quality:3,image:"black/destiny04"},5007:{name:"灼烧",quality:3,image:"black/fire04"},5008:{name:"宝藏",quality:4,image:"black/grail04"},5009:{name:"凛霜",quality:4,image:"black/ice04"},5010:{name:"裁决",quality:4,image:"black/judge04"},5011:{name:"法则",quality:4,image:"black/justice04"},5012:{name:"魔法",quality:4,image:"black/magic04"},5013:{name:"永恒",quality:4,image:"black/power04"},5014:{name:"雷霆",quality:5,image:"black/thund04"},5015:{name:"堡垒",quality:5,image:"black/town04"},5016:{name:"反抗",quality:5,image:"black/war04"},5017:{name:"秘密",quality:5,image:"black/wisdom04"},5018:{name:"领域",quality:5,image:"black/world04"},5019:{name:"天使",quality:1,image:"white/angel04"},5020:{name:"王权",quality:1,image:"white/crow04"},5021:{name:"安息",quality:1,image:"white/death04"},5022:{name:"守护",quality:1,image:"white/defence04"},5023:{name:"魔鬼",quality:1,image:"white/demon04"},5024:{name:"命运",quality:3,image:"white/destiny04"},5025:{name:"热诚",quality:3,image:"white/fire04"},5026:{name:"圣杯",quality:4,image:"white/grail04"},5027:{name:"冰霜",quality:4,image:"white/ice04"},5028:{name:"审判",quality:4,image:"white/judge04"},5029:{name:"正义",quality:4,image:"white/justice04"},5030:{name:"圣言",quality:4,image:"white/magic04"},5031:{name:"力量",quality:4,image:"white/power04"},5032:{name:"闪电",quality:5,image:"white/thund04"},5033:{name:"要塞",quality:5,image:"white/town04"},5034:{name:"战争",quality:5,image:"white/war04"},5035:{name:"智慧",quality:5,image:"white/wisdom04"},5036:{name:"世界",quality:5,image:"white/world04"}}),h=T(()=>u.value[c.id]||{image:""});return(d,y)=>(a(),l("p-crystal",{style:B({color:r.value[h.value.quality]})},[t("p-image",{class:m("_crystal-".concat(h.value.image.replace(/\//g,"-")))},null,2),t("p-name",null,o(h.value.name),1)],4))}},S=p(et,[["__scopeId","data-v-a0d1b6f5"]]);const tt={key:0,class:"TableCombo"},at={name:""},lt=["rowspan"],nt=["rowspan"],st=["rowspan"],ot=["rowspan"],it=["rowspan"],rt={desc:""},ct=["innerHTML"],ut=["innerHTML"],dt={__name:"Crystal",props:{hero:{type:Object,default:()=>({})}},setup(e){const c=e,r=T(()=>c.hero.crystal?"":"（尚未实装）");return(u,h)=>(a(),l("module",null,[t("p-title",null,"● 专属符文"+o(r.value),1),e.hero.crystal?(a(),l("table",tt,[(a(),l(_,null,g(["black","white"],(d,y)=>(a(),l(_,null,[(a(!0),l(_,null,g(e.hero.crystal[d],(i,b)=>(a(),l("tr",{class:m(y&&!b?"_splitTop":"")},[t("td",at,o(i.name),1),i.crystals.top[0][1]?(a(),l("td",{key:0,rowspan:i.crystals.top[0][1],crystal:""},[M(S,{id:i.crystals.top[0][0]},null,8,["id"])],8,lt)):n("",!0),i.crystals.top[1][1]?(a(),l("td",{key:1,rowspan:i.crystals.top[1][1],crystal:""},[M(S,{id:i.crystals.top[1][0]},null,8,["id"])],8,nt)):n("",!0),i.crystals.mid[0][1]?(a(),l("td",{key:2,rowspan:i.crystals.mid[0][1],crystal:""},[M(S,{id:i.crystals.mid[0][0]},null,8,["id"])],8,st)):n("",!0),i.crystals.bot[0][1]?(a(),l("td",{key:3,rowspan:i.crystals.bot[0][1],crystal:""},[M(S,{id:i.crystals.bot[0][0]},null,8,["id"])],8,ot)):n("",!0),i.crystals.bot[1][1]?(a(),l("td",{key:4,rowspan:i.crystals.bot[1][1],crystal:""},[M(S,{id:i.crystals.bot[1][0]},null,8,["id"])],8,it)):n("",!0),t("td",rt,[i.states&&i.level==3?(a(!0),l(_,{key:0},g(i.states,(H,$)=>(a(),l("p-desc",{key:$,class:m({_last:i.states.length==$+1}),innerHTML:H},null,10,ct))),128)):n("",!0),i.texts?(a(!0),l(_,{key:1},g(i.texts,(H,$)=>(a(),l("p-desc",{key:$,class:m({_last:i.texts.length==$+1}),innerHTML:H},null,10,ut))),128)):n("",!0)])],2))),256))],64))),64))])):n("",!0)]))}},ht=p(dt,[["__scopeId","data-v-342fd41d"]]);const mt={ring:""},_t=["src","alt"],gt=["src"],yt=["innerHTML"],bt={__name:"Ring",props:{hero:{type:Object,default:()=>({})}},setup(e){const c=e,r=T(()=>c.hero.ring?"":"（尚未实装）");return(u,h)=>(a(),l("module",mt,[t("p-title",null,"● 专属戒指"+o(r.value),1),e.hero.ring?(a(),l(_,{key:0},[t("p-equip",null,[t("img",{class:"nosel image",src:"./equip/".concat(e.hero.ring.image,".jpg"),alt:e.hero.ring.image},null,8,_t),t("p-equip-text",null,[t("p-equip-name",null,o(e.hero.ring.name),1),t("p-equip-desc",null,o(e.hero.ring.desc),1)])]),t("table",null,[(a(!0),l(_,null,g(e.hero.ring.skills,d=>(a(),l("tr",null,[t("td",null,[t("p-skill-title",null,[t("img",{src:"./skill/".concat(d.image,".jpg")},null,8,gt),t("p-skill-name",null,o(d.skillName),1)]),(a(!0),l(_,null,g(d.texts,(y,i)=>(a(),l("p-skill-desc",{key:i,innerHTML:y},null,8,yt))),128))])]))),256))])],64)):n("",!0)]))}},kt=p(bt,[["__scopeId","data-v-977f1a34"]]);const pt=e=>(x("data-v-d1231c81"),e=e(),q(),e),vt={engrav:""},$t={key:0},ft=["alt"],wt=pt(()=>t("p-engrav-split",null,">>>",-1)),xt=["src"],qt=["innerHTML"],Ht={__name:"Engrav",props:{hero:{type:Object,default:()=>({})}},setup(e){const c=e,r=T(()=>c.hero.engrav.skillName=="尚未实装"?"（尚未实装）":"");return(u,h)=>(a(),l("module",vt,[t("p-title",null,"● 刻印特技"+o(r.value),1),r.value?n("",!0):(a(),l("table",$t,[t("tr",null,[t("td",null,[t("p-image",{class:m(["_engrav-".concat(e.hero.engrav.image)]),alt:e.hero.engrav.name},null,10,ft),t("p-engrav-text",null,o(e.hero.engrav.name),1),wt,t("p-skill-title",null,[t("img",{src:"./skill/".concat(e.hero.engrav.skillImage,".jpg")},null,8,xt),t("p-skill-name",null,o(e.hero.engrav.skillName),1)]),(a(!0),l(_,null,g(e.hero.engrav.texts,(d,y)=>(a(),l("p-skill-desc",{key:y,innerHTML:d},null,8,qt))),128))])])]))]))}},jt=p(Ht,[["__scopeId","data-v-d1231c81"]]);const Tt=e=>(x("data-v-92f27cd6"),e=e(),q(),e),Lt={subli:""},It={key:0},Ct=["alt"],Mt=Tt(()=>t("p-engrav-split",null,">>>",-1)),St=["src"],Ot=["innerHTML"],Nt={__name:"Subli",props:{hero:{type:Object,default:()=>({})}},setup(e){const c=e,r=T(()=>c.hero.subli.name=="尚未实装"?"（尚未实装）":"");return(u,h)=>(a(),l("module",Lt,[t("p-title",null,"● 极限觉醒"+o(r.value),1),!r.value&&e.hero.breaks[5]?(a(),l("table",It,[t("tr",null,[t("td",null,[t("p-image",{class:m(["_material-".concat(e.hero.breaks[5].image)]),alt:e.hero.breaks[5].name},null,10,Ct),t("p-engrav-text",null,o(e.hero.breaks[5].name),1),Mt,t("p-skill-title",null,[t("img",{src:"./skill/".concat(e.hero.subli.image,".jpg")},null,8,St),t("p-skill-name",null,o(e.hero.subli.name),1)]),e.hero.subli.text?(a(),l("p-skill-desc",{key:0,innerHTML:e.hero.subli.text},null,8,Ot)):n("",!0)])])])):n("",!0)]))}},Et=p(Nt,[["__scopeId","data-v-92f27cd6"]]);const Dt=e=>(x("data-v-0b5f1ae6"),e=e(),q(),e),Vt={voice:""},Bt=Dt(()=>t("p-title",null,"● 互动语音",-1)),At=["innerHTML"],Rt={__name:"Voice",props:{hero:{type:Object,default:()=>({})}},setup(e){return(c,r)=>(a(),l("module",Vt,[Bt,t("table",null,[(a(!0),l(_,null,g(e.hero.voice,u=>(a(),l("tr",null,[t("td",null,[t("p-cond",{innerHTML:"🔊 "+u.name},null,8,At),(a(!0),l(_,null,g(u.texts,(h,d)=>(a(),l("p-line",{key:d,class:"line"},o(h),1))),128))])]))),256))])]))}},zt=p(Rt,[["__scopeId","data-v-0b5f1ae6"]]);const R=e=>(x("data-v-4bde2626"),e=e(),q(),e),Ft={story:""},Ut=R(()=>t("p-title",null,"● 背景故事",-1)),Kt={key:0},Wt=R(()=>t("td",null,"敬请期待",-1)),Gt=[Wt],Jt={key:1},Pt=["innerHTML"],Qt={key:2},Xt=["innerHTML"],Yt={key:3},Zt=["innerHTML"],ea={key:4},ta=["innerHTML"],aa={__name:"Story",props:{hero:{type:Object,default:()=>({})}},setup(e){return(c,r)=>(a(),l("module",Ft,[Ut,t("table",null,[e.hero.story[1]=="敬请期待"&&e.hero.story[2]=="敬请期待"&&e.hero.story[3]=="敬请期待"&&e.hero.story[4]=="敬请期待"?(a(),l("tr",Kt,Gt)):n("",!0),e.hero.story[1]&&e.hero.story[1]!="敬请期待"?(a(),l("tr",Jt,[t("td",{story:"",class:m({_hasTitle:/[\[【]/.test(e.hero.story[1])}),innerHTML:e.hero.story[1]},null,10,Pt)])):n("",!0),e.hero.story[2]&&e.hero.story[2]!="敬请期待"?(a(),l("tr",Qt,[t("td",{story:"",class:m({_hasTitle:/[\[【]/.test(e.hero.story[2])}),innerHTML:e.hero.story[2]},null,10,Xt)])):n("",!0),e.hero.story[3]&&e.hero.story[3]!="敬请期待"?(a(),l("tr",Yt,[t("td",{story:"",class:m({_hasTitle:/[\[【]/.test(e.hero.story[3])}),innerHTML:e.hero.story[3]},null,10,Zt)])):n("",!0),e.hero.story[4]&&e.hero.story[4]!="敬请期待"?(a(),l("tr",ea,[t("td",{story:"",class:m({_hasTitle:/[\[【]/.test(e.hero.story[4])}),innerHTML:e.hero.story[4]},null,10,ta)])):n("",!0)])]))}},la=p(aa,[["__scopeId","data-v-4bde2626"]]);const na={key:12},sa={__name:"Home",setup(e){const c=w("$get"),r=w("indexs"),u=w("herosNow"),h=I(""),d=I(""),y=w("isOpenMenu"),i=w("isHideTop"),b=w("isHideBot"),H=w("isHideHead"),$=I({属性:"attr",技能:"skills",助战:"captains",组合:"combos",符文:"crystal",戒指:"ring",刻印:"engrav",极限:"subli",台词:"voice",故事:"story"}),z=w("loadHero"),D=async(L,C)=>{const s=await z(L);if(!s)return;const f={hero:s};for(const k of Object.values($.value))f[k]=!1;for(const k of C.length?C:Object.keys($.value)){const j=$.value[k];j&&(f[j]=!0)}u.value.push(f)},V=()=>{const L=(decodeURIComponent(window.location.hash.trim())||h.value).replace(/^#/,"").split("|");if(L.length){u.value=[],i.value=!1,b.value=!1,H.value=!1;for(const C of L){const[s,...f]=C.split(":");if(s=="菜单"){i.value=!0;continue}if(s=="声明"){b.value=!0;continue}if(s=="名称"){H.value=!0;continue}if(s=="全部")for(let k of Object.values(r.value))D(k[0],f);else if(/^\d+$/.test(s)){const k=r.value[s];k&&D(k[0],f)}else Object.values(r.value).forEach(k=>{const j=s.startsWith("'"),O=s.toLowerCase().replace(/^'/g,"");(!j&&k[1].toLowerCase().includes(O)||j&&k[1].toLowerCase()==O||!j&&k[2].toLowerCase().includes(O)||j&&k[2].toLowerCase()==O)&&D(k[0],f)})}}y.value=!!u.value.length};return U(async()=>{window.addEventListener("hashchange",V);try{r.value=await c("./hero.index.json"),h.value=await c("./hash.default.json"),d.value=await c("./hash.credit.json"),V()}catch(L){alert("加载数据失败，请刷新重试")}}),K(()=>window.removeEventListener("hashchange",V)),(L,C)=>(a(),l("module",{home:"","height-full":"",class:m(["container p-1 mx-auto overflow-x-hidden overflow-y-auto",{_showCredit:!N(b)}])},[(a(!0),l(_,null,g(N(u),(s,f)=>(a(),l(_,{key:s.hero.id},[N(H)?n("",!0):(a(),v(J,{key:0,hero:s.hero},null,8,["hero"])),s.attr?(a(),v($e,{key:1,hero:s.hero},null,8,["hero"])):n("",!0),s.attr?(a(),v(He,{key:2,hero:s.hero},null,8,["hero"])):n("",!0),s.skills?(a(),v(Se,{key:3,hero:s.hero},null,8,["hero"])):n("",!0),s.captains?(a(),v(De,{key:4,hero:s.hero},null,8,["hero"])):n("",!0),s.combos?(a(),v(Ze,{key:5,hero:s.hero},null,8,["hero"])):n("",!0),s.crystal?(a(),v(ht,{key:6,hero:s.hero},null,8,["hero"])):n("",!0),s.ring?(a(),v(kt,{key:7,hero:s.hero},null,8,["hero"])):n("",!0),s.engrav?(a(),v(jt,{key:8,hero:s.hero},null,8,["hero"])):n("",!0),s.subli?(a(),v(Et,{key:9,hero:s.hero},null,8,["hero"])):n("",!0),s.voice?(a(),v(zt,{key:10,hero:s.hero},null,8,["hero"])):n("",!0),s.story?(a(),v(la,{key:11,hero:s.hero},null,8,["hero"])):n("",!0),N(u).length!=f+1?(a(),l("p-split",na)):n("",!0)],64))),128)),t("p-credit",null,o(d.value),1)],2))}},ia=p(sa,[["__scopeId","data-v-040b8672"]]);export{ia as default};
