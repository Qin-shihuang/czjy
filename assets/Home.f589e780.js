import{_ as b,o as a,c as l,a as t,t as o,r as M,b as F,n as d,d as n,e as V,p as q,f as H,F as m,g as y,h as L,u as g,i as O,j as x,k as U,l as K,m as $}from"./index.cc5c7932.js";const W=["src","title"],G={props:{hero:{type:Object,default:()=>({})}},setup(e){return(i,c)=>(a(),l("module",null,[t("img",{class:"Header",src:`./head/${e.hero.head}.jpg`,title:e.hero.id},null,8,W),t("p-name",null,o(e.hero.name),1),t("p-nick",null,"\u2014\u2014 "+o(e.hero.nick),1)]))}};var J=b(G,[["__scopeId","data-v-502a68f6"]]);const E=e=>(q("data-v-4e8078db"),e=e(),H(),e),P={attr:""},Q=E(()=>t("p-title",null,"\u25CF \u89D2\u8272\u5B9A\u4F4D",-1)),X={split:""},Y={split:""},Z={break:""},ee=E(()=>t("p-title",null,"\u25CF \u8FDB\u5316\u7D20\u6750",-1)),te=["alt","title"],ae=["alt","title"],le=["alt","title"],ne=["alt","title"],se=["alt","title"],oe=["alt","title"],re=["alt","title"],ie=["alt","title"],ce={mate:""},ue=E(()=>t("p-title",null,"\u25CF \u63A8\u8350\u961F\u53CB",-1)),he={key:0},de=["src","alt"],me={exclu:""},_e=E(()=>t("p-title",null,"\u25CF \u4E13\u5C5E\u88C5\u5907",-1)),ge={key:0},ye=["src","alt"],ve={key:1,class:"block"},ke=["alt"],pe={"no-desc":""},be={props:{hero:{type:Object,default:()=>({})}},setup(e){const i=M({pos:["","\u8FD1\u6218","\u8FDC\u7A0B","\u8089\u76FE","\u8F93\u51FA","\u8F85\u52A9","\u524D\u671F","\u4E2D\u671F","\u540E\u671F"],heat:["fast","middle","slow"]});return(c,u)=>(a(),l("module",{style:V({backgroundImage:`url(./draw/${e.hero.draw}.jpg)`})},[t("p-box",P,[Q,t("p-attr-tag",null,o(i.value.pos[e.hero.pos[2]]),1),t("p-attr-tag",X,o(i.value.pos[e.hero.pos[1]])+" ( "+o(e.hero.attr.range)+" )",1),t("p-attr-tag",Y,[F(o(i.value.pos[e.hero.pos[3]])+" ",1),t("p-sprite",{class:d(["inblock w-6 h-6 select-none",`_heat-${i.value.heat[e.hero.pos[3]-6]}`])},null,2)])]),t("p-box",Z,[ee,t("p-material",{class:d(`_material-${e.hero.breaks[0].image}`),alt:e.hero.breaks[0].name,title:e.hero.breaks[0].name},null,10,te),t("p-material",{class:d(`_material-${e.hero.breaks[1].image}`),alt:e.hero.breaks[1].name,title:e.hero.breaks[1].name},null,10,ae),t("p-material",{class:d(`_material-${e.hero.breaks[2].image}`),alt:e.hero.breaks[2].name,title:e.hero.breaks[2].name},null,10,le),t("p-material",{split:"",class:d(`_material-${e.hero.breaks[3].image}`),alt:e.hero.breaks[3].name,title:e.hero.breaks[3].name},null,10,ne),t("p-material",{class:d(`_material-${e.hero.breaks[4].image}`),alt:e.hero.breaks[4].name,title:e.hero.breaks[4].name},null,10,se),t("p-material",{split:"",class:d(`_material-${e.hero.breaks[5].image}`),alt:e.hero.breaks[5].name,title:e.hero.breaks[5].name},null,10,oe),t("p-material",{class:d(`_material-${e.hero.breaks[6].image}`),alt:e.hero.breaks[6].name,title:e.hero.breaks[6].name},null,10,re),e.hero.breaks[7]?(a(),l("p-material",{key:0,split:"",class:d(`_material-${e.hero.breaks[7].image}`),alt:e.hero.breaks[7].name,title:e.hero.breaks[7].name},null,10,ie)):n("",!0)]),t("p-box",ce,[ue,e.hero.mate?(a(),l("p-image-text",he,[t("img",{class:"inblock Header",src:`./head/${e.hero.mate.head}.jpg`,alt:e.hero.mate.name},null,8,de),t("p-two-line",null,[t("p-name",null,o(e.hero.mate.name),1),t("p-desc",null,o(e.hero.mate.note),1)])])):n("",!0)]),t("p-box",me,[_e,e.hero.ring?(a(),l("p-image-text",ge,[t("img",{"no-ring":"",class:"inblock Header",src:`./equip/${e.hero.ring.image}.jpg`,alt:e.hero.ring.image},null,8,ye),t("p-two-line",null,[t("p-name",null,o(e.hero.ring.name),1),t("p-desc",null,o(e.hero.ring.desc),1)])])):n("",!0),e.hero.engrav?(a(),l("p-image-text",ve,[t("p-image",{class:d([`_engrav-${e.hero.engrav.image}`]),alt:e.hero.engrav.name},null,10,ke),t("p-two-line",null,[t("p-name",pe,o(e.hero.engrav.name),1)])])):n("",!0)])],4))}};var $e=b(be,[["__scopeId","data-v-4e8078db"]]);const we=e=>(q("data-v-70822126"),e=e(),H(),e),fe=we(()=>t("p-title",null,"\u25CF \u82F1\u96C4\u7ACB\u7ED8",-1)),xe=["src"],qe={props:{hero:{type:Object,default:()=>({})}},setup(e){return(i,c)=>(a(),l("module",null,[fe,t("img",{src:`./draw/${e.hero.draw}.jpg`},null,8,xe)]))}};var He=b(qe,[["__scopeId","data-v-70822126"]]);const A=e=>(q("data-v-4f824212"),e=e(),H(),e),je={skill:""},Te=A(()=>t("p-title",null,"\u25CF \u82F1\u96C4\u6280\u80FD",-1)),Le=A(()=>t("p-alter",null,"\u6A59\u8272\u6570\u503C\u662F\u6280\u80FD\u7CBE\u901A\u540E\u7684\u6570\u503C",-1)),Ie=["src"],Me=["innerHTML"],Ce={props:{hero:{type:Object,default:()=>({})}},setup(e){return(i,c)=>(a(),l("module",je,[Te,Le,t("table",null,[(a(!0),l(m,null,y(e.hero.skills,u=>(a(),l("tr",null,[t("td",null,[t("p-skill-title",null,[t("img",{src:`./skill/${u.image}.jpg`},null,8,Ie),t("p-skill-name",null,o(u.name),1)]),t("p-skill-desc",{innerHTML:u.desc},null,8,Me)])]))),256))])]))}};var Oe=b(Ce,[["__scopeId","data-v-4f824212"]]);const Se=["src"],Ne=["innerHTML"],Ee={props:{hero:{type:Object,default:()=>({})}},setup(e){const i=e,c=L(()=>{var u,_;return(_=(u=i.hero)==null?void 0:u.captains)!=null&&_.length?"":"\uFF08\u5C1A\u672A\u5B9E\u88C5\uFF09"});return(u,_)=>(a(),l("module",null,[t("p-title",null,"\u25CF \u52A9\u6218\u6280\u80FD"+o(g(c)),1),t("table",null,[(a(!0),l(m,null,y(e.hero.captains,h=>(a(),l("tr",null,[t("td",null,[t("p-skill-title",null,[t("img",{src:`./skill/${h.image}.jpg`},null,8,Se),t("p-skill-name",null,o(h.name),1)]),t("p-skill-desc",{innerHTML:h.desc},null,8,Ne)])]))),256))])]))}};var Be=b(Ee,[["__scopeId","data-v-342e7c3f"]]);const De=e=>(q("data-v-bfae54e0"),e=e(),H(),e),Ve={combo:""},Ae={key:0},Re=De(()=>t("tr",{class:"nosel"},[t("th",null,"\u7EC4\u5408\u540D"),t("th",null,"\u6548\u679C"),t("th",null,"\u4E3B\u6280\u80FD"),t("th",null,"\u7EC4\u5408\u62801"),t("th",null,"\u7EC4\u5408\u62802")],-1)),ze={class:"font-bold"},Fe={class:""},Ue=["rowspan"],Ke=["src"],We=["rowspan"],Ge=["src"],Je={mate:""},Pe=["src"],Qe={class:"inline name"},Xe=["rowspan"],Ye={props:{hero:{type:Object,default:()=>({})}},setup(e){const i=e,c=L(()=>{var u,_;return(_=(u=i.hero)==null?void 0:u.combos)!=null&&_.reduce((h,v)=>h+v.combos.length,0)?"":"\uFF08\u65E0\uFF09"});return(u,_)=>(a(),l("module",Ve,[t("p-title",null,"\u25CF \u6280\u80FD\u7EC4\u5408"+o(g(c)),1),g(c)?n("",!0):(a(),l("table",Ae,[Re,(a(!0),l(m,null,y(e.hero.combos,h=>(a(),l(m,null,[(a(!0),l(m,null,y(h.combos,(v,r)=>(a(),l("tr",null,[t("td",ze,o(v.name),1),t("td",Fe,o(v.effect),1),r==0?(a(),l("td",{key:0,rowspan:h.combos.length},[t("img",{src:`./skill/${h.image}.jpg`},null,8,Ke),t("p-name",null,o(h.name),1)],8,Ue)):n("",!0),(a(!0),l(m,null,y(v.skills,k=>(a(),l(m,null,[k.hide?n("",!0):(a(),l(m,{key:0},[k.empty?(a(),l("td",{key:1,rowspan:k.rowspan},"\u65E0",8,Xe)):(a(),l("td",{key:0,rowspan:k.rowspan},[t("img",{src:`./skill/${k.image}.jpg`},null,8,Ge),t("p-skill-mate",null,[t("p-name",Je,o(k.name),1),t("p-hero",null,[t("img",{hero:"",src:`./head/${k.heroHead}.jpg`},null,8,Pe),t("p-name",Qe,o(k.heroName),1)])])],8,We))],64))],64))),256))]))),256))],64))),256))]))]))}};var Ze=b(Ye,[["__scopeId","data-v-bfae54e0"]]);const et={props:{id:{type:Number,default:null}},setup(e){const i=e,c=M({1:"gray",3:"#218EDA",4:"#C841E0",5:"#DC6727"}),u=M({5001:{name:"\u5815\u5929",quality:1,image:"black/angel04"},5002:{name:"\u7EDF\u6CBB",quality:1,image:"black/crow04"},5003:{name:"\u6C38\u591C",quality:1,image:"black/death04"},5004:{name:"\u62B5\u5FA1",quality:1,image:"black/defence04"},5005:{name:"\u6DF1\u6E0A",quality:1,image:"black/demon04"},5006:{name:"\u5BBF\u547D",quality:3,image:"black/destiny04"},5007:{name:"\u707C\u70E7",quality:3,image:"black/fire04"},5008:{name:"\u5B9D\u85CF",quality:4,image:"black/grail04"},5009:{name:"\u51DB\u971C",quality:4,image:"black/ice04"},5010:{name:"\u88C1\u51B3",quality:4,image:"black/judge04"},5011:{name:"\u6CD5\u5219",quality:4,image:"black/justice04"},5012:{name:"\u9B54\u6CD5",quality:4,image:"black/magic04"},5013:{name:"\u6C38\u6052",quality:4,image:"black/power04"},5014:{name:"\u96F7\u9706",quality:5,image:"black/thund04"},5015:{name:"\u5821\u5792",quality:5,image:"black/town04"},5016:{name:"\u53CD\u6297",quality:5,image:"black/war04"},5017:{name:"\u79D8\u5BC6",quality:5,image:"black/wisdom04"},5018:{name:"\u9886\u57DF",quality:5,image:"black/world04"},5019:{name:"\u5929\u4F7F",quality:1,image:"white/angel04"},5020:{name:"\u738B\u6743",quality:1,image:"white/crow04"},5021:{name:"\u5B89\u606F",quality:1,image:"white/death04"},5022:{name:"\u5B88\u62A4",quality:1,image:"white/defence04"},5023:{name:"\u9B54\u9B3C",quality:1,image:"white/demon04"},5024:{name:"\u547D\u8FD0",quality:3,image:"white/destiny04"},5025:{name:"\u70ED\u8BDA",quality:3,image:"white/fire04"},5026:{name:"\u5723\u676F",quality:4,image:"white/grail04"},5027:{name:"\u51B0\u971C",quality:4,image:"white/ice04"},5028:{name:"\u5BA1\u5224",quality:4,image:"white/judge04"},5029:{name:"\u6B63\u4E49",quality:4,image:"white/justice04"},5030:{name:"\u5723\u8A00",quality:4,image:"white/magic04"},5031:{name:"\u529B\u91CF",quality:4,image:"white/power04"},5032:{name:"\u95EA\u7535",quality:5,image:"white/thund04"},5033:{name:"\u8981\u585E",quality:5,image:"white/town04"},5034:{name:"\u6218\u4E89",quality:5,image:"white/war04"},5035:{name:"\u667A\u6167",quality:5,image:"white/wisdom04"},5036:{name:"\u4E16\u754C",quality:5,image:"white/world04"}}),_=L(()=>u.value[i.id]||{image:""});return(h,v)=>(a(),l("p-crystal",{style:V({color:c.value[g(_).quality]})},[t("p-image",{class:d(`_crystal-${g(_).image.replace(/\//g,"-")}`)},null,2),t("p-name",null,o(g(_).name),1)],4))}};var S=b(et,[["__scopeId","data-v-1a274fd0"]]);const tt={key:0,class:"TableCombo"},at={name:""},lt=["rowspan"],nt=["rowspan"],st=["rowspan"],ot=["rowspan"],rt=["rowspan"],it={desc:""},ct=["innerHTML"],ut=["innerHTML"],ht={props:{hero:{type:Object,default:()=>({})}},setup(e){const i=e,c=L(()=>i.hero.crystal?"":"\uFF08\u5C1A\u672A\u5B9E\u88C5\uFF09");return(u,_)=>(a(),l("module",null,[t("p-title",null,"\u25CF \u4E13\u5C5E\u7B26\u6587"+o(g(c)),1),e.hero.crystal?(a(),l("table",tt,[(a(),l(m,null,y(["black","white"],(h,v)=>(a(),l(m,null,[(a(!0),l(m,null,y(e.hero.crystal[h],(r,k)=>(a(),l("tr",{class:d(v&&!k?"_splitTop":"")},[t("td",at,o(r.name),1),r.crystals.top[0][1]?(a(),l("td",{key:0,rowspan:r.crystals.top[0][1],crystal:""},[O(S,{id:r.crystals.top[0][0]},null,8,["id"])],8,lt)):n("",!0),r.crystals.top[1][1]?(a(),l("td",{key:1,rowspan:r.crystals.top[1][1],crystal:""},[O(S,{id:r.crystals.top[1][0]},null,8,["id"])],8,nt)):n("",!0),r.crystals.mid[0][1]?(a(),l("td",{key:2,rowspan:r.crystals.mid[0][1],crystal:""},[O(S,{id:r.crystals.mid[0][0]},null,8,["id"])],8,st)):n("",!0),r.crystals.bot[0][1]?(a(),l("td",{key:3,rowspan:r.crystals.bot[0][1],crystal:""},[O(S,{id:r.crystals.bot[0][0]},null,8,["id"])],8,ot)):n("",!0),r.crystals.bot[1][1]?(a(),l("td",{key:4,rowspan:r.crystals.bot[1][1],crystal:""},[O(S,{id:r.crystals.bot[1][0]},null,8,["id"])],8,rt)):n("",!0),t("td",it,[r.states&&r.level==3?(a(!0),l(m,{key:0},y(r.states,(j,w)=>(a(),l("p-desc",{key:w,class:d({_last:r.states.length==w+1}),innerHTML:j},null,10,ct))),128)):n("",!0),r.texts?(a(!0),l(m,{key:1},y(r.texts,(j,w)=>(a(),l("p-desc",{key:w,class:d({_last:r.texts.length==w+1}),innerHTML:j},null,10,ut))),128)):n("",!0)])],2))),256))],64))),64))])):n("",!0)]))}};var dt=b(ht,[["__scopeId","data-v-3a0630a4"]]);const mt={ring:""},_t=["src","alt"],gt=["src"],yt=["innerHTML"],vt={props:{hero:{type:Object,default:()=>({})}},setup(e){const i=e,c=L(()=>i.hero.ring?"":"\uFF08\u5C1A\u672A\u5B9E\u88C5\uFF09");return(u,_)=>(a(),l("module",mt,[t("p-title",null,"\u25CF \u4E13\u5C5E\u6212\u6307"+o(g(c)),1),e.hero.ring?(a(),l(m,{key:0},[t("p-equip",null,[t("img",{class:"nosel image",src:`./equip/${e.hero.ring.image}.jpg`,alt:e.hero.ring.image},null,8,_t),t("p-equip-text",null,[t("p-equip-name",null,o(e.hero.ring.name),1),t("p-equip-desc",null,o(e.hero.ring.desc),1)])]),t("table",null,[(a(!0),l(m,null,y(e.hero.ring.skills,h=>(a(),l("tr",null,[t("td",null,[t("p-skill-title",null,[t("img",{src:`./skill/${h.image}.jpg`},null,8,gt),t("p-skill-name",null,o(h.skillName),1)]),(a(!0),l(m,null,y(h.texts,(v,r)=>(a(),l("p-skill-desc",{key:r,innerHTML:v},null,8,yt))),128))])]))),256))])],64)):n("",!0)]))}};var kt=b(vt,[["__scopeId","data-v-4b14eeb2"]]);const pt=e=>(q("data-v-54a19a5c"),e=e(),H(),e),bt={engrav:""},$t={key:0},wt=["alt"],ft=pt(()=>t("p-engrav-split",null,">>>",-1)),xt=["src"],qt=["innerHTML"],Ht={props:{hero:{type:Object,default:()=>({})}},setup(e){const i=e,c=L(()=>i.hero.engrav.skillName=="\u5C1A\u672A\u5B9E\u88C5"?"\uFF08\u5C1A\u672A\u5B9E\u88C5\uFF09":"");return(u,_)=>(a(),l("module",bt,[t("p-title",null,"\u25CF \u523B\u5370\u7279\u6280"+o(g(c)),1),g(c)?n("",!0):(a(),l("table",$t,[t("tr",null,[t("td",null,[t("p-image",{class:d([`_engrav-${e.hero.engrav.image}`]),alt:e.hero.engrav.name},null,10,wt),t("p-engrav-text",null,o(e.hero.engrav.name),1),ft,t("p-skill-title",null,[t("img",{src:`./skill/${e.hero.engrav.skillImage}.jpg`},null,8,xt),t("p-skill-name",null,o(e.hero.engrav.skillName),1)]),(a(!0),l(m,null,y(e.hero.engrav.texts,(h,v)=>(a(),l("p-skill-desc",{key:v,innerHTML:h},null,8,qt))),128))])])]))]))}};var jt=b(Ht,[["__scopeId","data-v-54a19a5c"]]);const Tt=e=>(q("data-v-6d31bd21"),e=e(),H(),e),Lt={subli:""},It={key:0},Mt=["alt"],Ct=Tt(()=>t("p-engrav-split",null,">>>",-1)),Ot=["src"],St=["innerHTML"],Nt={props:{hero:{type:Object,default:()=>({})}},setup(e){const i=e,c=L(()=>i.hero.subli.name=="\u5C1A\u672A\u5B9E\u88C5"?"\uFF08\u5C1A\u672A\u5B9E\u88C5\uFF09":"");return(u,_)=>(a(),l("module",Lt,[t("p-title",null,"\u25CF \u6781\u9650\u89C9\u9192"+o(g(c)),1),!g(c)&&e.hero.breaks[5]?(a(),l("table",It,[t("tr",null,[t("td",null,[t("p-image",{class:d([`_material-${e.hero.breaks[5].image}`]),alt:e.hero.breaks[5].name},null,10,Mt),t("p-engrav-text",null,o(e.hero.breaks[5].name),1),Ct,t("p-skill-title",null,[t("img",{src:`./skill/${e.hero.subli.image}.jpg`},null,8,Ot),t("p-skill-name",null,o(e.hero.subli.name),1)]),e.hero.subli.text?(a(),l("p-skill-desc",{key:0,innerHTML:e.hero.subli.text},null,8,St)):n("",!0)])])])):n("",!0)]))}};var Et=b(Nt,[["__scopeId","data-v-6d31bd21"]]);const Bt=e=>(q("data-v-e2804a3c"),e=e(),H(),e),Dt={voice:""},Vt=Bt(()=>t("p-title",null,"\u25CF \u4E92\u52A8\u8BED\u97F3",-1)),At=["innerHTML"],Rt={props:{hero:{type:Object,default:()=>({})}},setup(e){return(i,c)=>(a(),l("module",Dt,[Vt,t("table",null,[(a(!0),l(m,null,y(e.hero.voice,u=>(a(),l("tr",null,[t("td",null,[t("p-cond",{innerHTML:"\u{1F50A} "+u.name},null,8,At),(a(!0),l(m,null,y(u.texts,(_,h)=>(a(),l("p-line",{key:h,class:"line"},o(_),1))),128))])]))),256))])]))}};var zt=b(Rt,[["__scopeId","data-v-e2804a3c"]]);const R=e=>(q("data-v-47dc4ce5"),e=e(),H(),e),Ft={story:""},Ut=R(()=>t("p-title",null,"\u25CF \u80CC\u666F\u6545\u4E8B",-1)),Kt={key:0},Wt=R(()=>t("td",null,"\u656C\u8BF7\u671F\u5F85",-1)),Gt=[Wt],Jt={key:1},Pt=["innerHTML"],Qt={key:2},Xt=["innerHTML"],Yt={key:3},Zt=["innerHTML"],ea={key:4},ta=["innerHTML"],aa={props:{hero:{type:Object,default:()=>({})}},setup(e){return(i,c)=>(a(),l("module",Ft,[Ut,t("table",null,[e.hero.story[1]=="\u656C\u8BF7\u671F\u5F85"&&e.hero.story[2]=="\u656C\u8BF7\u671F\u5F85"&&e.hero.story[3]=="\u656C\u8BF7\u671F\u5F85"&&e.hero.story[4]=="\u656C\u8BF7\u671F\u5F85"?(a(),l("tr",Kt,Gt)):n("",!0),e.hero.story[1]&&e.hero.story[1]!="\u656C\u8BF7\u671F\u5F85"?(a(),l("tr",Jt,[t("td",{story:"",class:d({_hasTitle:/[\[【]/.test(e.hero.story[1])}),innerHTML:e.hero.story[1]},null,10,Pt)])):n("",!0),e.hero.story[2]&&e.hero.story[2]!="\u656C\u8BF7\u671F\u5F85"?(a(),l("tr",Qt,[t("td",{story:"",class:d({_hasTitle:/[\[【]/.test(e.hero.story[2])}),innerHTML:e.hero.story[2]},null,10,Xt)])):n("",!0),e.hero.story[3]&&e.hero.story[3]!="\u656C\u8BF7\u671F\u5F85"?(a(),l("tr",Yt,[t("td",{story:"",class:d({_hasTitle:/[\[【]/.test(e.hero.story[3])}),innerHTML:e.hero.story[3]},null,10,Zt)])):n("",!0),e.hero.story[4]&&e.hero.story[4]!="\u656C\u8BF7\u671F\u5F85"?(a(),l("tr",ea,[t("td",{story:"",class:d({_hasTitle:/[\[【]/.test(e.hero.story[4])}),innerHTML:e.hero.story[4]},null,10,ta)])):n("",!0)])]))}};var la=b(aa,[["__scopeId","data-v-47dc4ce5"]]);const na={key:12},sa={setup(e){const i=x("$get"),c=x("indexs"),u=x("herosNow"),_=M(""),h=M(""),v=x("isOpenMenu"),r=x("isHideTop"),k=x("isHideBot"),j=x("isHideHead"),w=M({\u5C5E\u6027:"attr",\u6280\u80FD:"skills",\u52A9\u6218:"captains",\u7EC4\u5408:"combos",\u7B26\u6587:"crystal",\u6212\u6307:"ring",\u523B\u5370:"engrav",\u6781\u9650:"subli",\u53F0\u8BCD:"voice",\u6545\u4E8B:"story"}),z=x("loadHero"),B=async(I,C)=>{const s=await z(I);if(!s)return;const f={hero:s};for(const p of Object.values(w.value))f[p]=!1;for(const p of C.length?C:Object.keys(w.value)){const T=w.value[p];!T||(f[T]=!0)}u.value.push(f)},D=()=>{const I=(decodeURIComponent(window.location.hash.trim())||_.value).replace(/^#/,"").split("|");if(I.length){u.value=[],r.value=!1,k.value=!1,j.value=!1;for(const C of I){const[s,...f]=C.split(":");if(s=="\u83DC\u5355"){r.value=!0;continue}if(s=="\u58F0\u660E"){k.value=!0;continue}if(s=="\u540D\u79F0"){j.value=!0;continue}if(s=="\u5168\u90E8")for(let p of Object.values(c.value))B(p[0],f);else if(/^\d+$/.test(s)){const p=c.value[s];p&&B(p[0],f)}else Object.values(c.value).forEach(p=>{const T=s.startsWith("'"),N=s.toLowerCase().replace(/^'/g,"");(!T&&p[1].toLowerCase().includes(N)||T&&p[1].toLowerCase()==N||!T&&p[2].toLowerCase().includes(N)||T&&p[2].toLowerCase()==N)&&B(p[0],f)})}}v.value=!!u.value.length};return U(async()=>{window.addEventListener("hashchange",D);try{c.value=await i("./hero.index.json"),_.value=await i("./hash.default.json"),h.value=await i("./hash.credit.json"),D()}catch{alert("\u52A0\u8F7D\u6570\u636E\u5931\u8D25\uFF0C\u8BF7\u5237\u65B0\u91CD\u8BD5")}}),K(()=>window.removeEventListener("hashchange",D)),(I,C)=>(a(),l("module",{home:"","height-full":"",class:d(["container p-1 mx-auto overflow-x-hidden overflow-y-auto",{_showCredit:!g(k)}])},[(a(!0),l(m,null,y(g(u),(s,f)=>(a(),l(m,{key:s.hero.id},[g(j)?n("",!0):(a(),$(J,{key:0,hero:s.hero},null,8,["hero"])),s.attr?(a(),$($e,{key:1,hero:s.hero},null,8,["hero"])):n("",!0),s.attr?(a(),$(He,{key:2,hero:s.hero},null,8,["hero"])):n("",!0),s.skills?(a(),$(Oe,{key:3,hero:s.hero},null,8,["hero"])):n("",!0),s.captains?(a(),$(Be,{key:4,hero:s.hero},null,8,["hero"])):n("",!0),s.combos?(a(),$(Ze,{key:5,hero:s.hero},null,8,["hero"])):n("",!0),s.crystal?(a(),$(dt,{key:6,hero:s.hero},null,8,["hero"])):n("",!0),s.ring?(a(),$(kt,{key:7,hero:s.hero},null,8,["hero"])):n("",!0),s.engrav?(a(),$(jt,{key:8,hero:s.hero},null,8,["hero"])):n("",!0),s.subli?(a(),$(Et,{key:9,hero:s.hero},null,8,["hero"])):n("",!0),s.voice?(a(),$(zt,{key:10,hero:s.hero},null,8,["hero"])):n("",!0),s.story?(a(),$(la,{key:11,hero:s.hero},null,8,["hero"])):n("",!0),g(u).length!=f+1?(a(),l("p-split",na)):n("",!0)],64))),128)),t("p-credit",null,o(h.value),1)],2))}};var ra=b(sa,[["__scopeId","data-v-79b0ee88"]]);export{ra as default};
