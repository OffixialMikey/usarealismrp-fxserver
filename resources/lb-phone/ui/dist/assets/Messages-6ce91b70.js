var Ue=Object.defineProperty;var Ie=(t,n,d)=>n in t?Ue(t,n,{enumerable:!0,configurable:!0,writable:!0,value:d}):t[n]=d;var ee=(t,n,d)=>(Ie(t,typeof n!="symbol"?n+"":n,d),d);import{r as S,j as e,F as se,a as m}from"./jsx-runtime-f40812bf.js";import{f as k,b as _,u as W,K as ye,M as Ae,I as De,L as l,n as V,N as Le,p as ke,O as ve,Q as ie,k as te,R as Me,C as Y,h as K,T as Re,U as pe,V as he,d as Q,v as q,W as _e,X as fe,Y as $e,c as H,Z as Ve,_ as Ee,a0 as Ye,a1 as Fe,a2 as le,a3 as ce,i as je,t as xe,a4 as He,y as Xe,z as qe,a5 as Be,x as be,m as z,a6 as Qe,a7 as We,a8 as ze}from"./Phone-bbdfbfe1.js";import{r as ge,f as Pe}from"./number-28525126.js";const Ne=(t,n=25,d=7,A=360,i=120)=>new Promise((a,r)=>{let c=document.createElement("canvas");c.width=A,c.height=i;let u=c.getContext("2d");u.fillStyle="#000";let v=new AudioContext;t.arrayBuffer().then(o=>v.decodeAudioData(o)).then(o=>{let p=(c.width-(n-1)*d)/n,U=c.height/2,y=Math.floor(o.length/n),E=o.getChannelData(0);for(let w=0;w<n;w++){let G=1,D=.1;for(let O=0;O<y;O++){let C=E[w*y+O];C<G&&(G=C),C>D&&(D=C)}let L=(1+G)*U,R=(D-G)*U;u.beginPath(),u.moveTo(w*(p+d),L),u.lineTo(w*(p+d),L+R),u.lineTo(w*(p+d)+p,L+R),u.lineTo(w*(p+d)+p,L),u.closePath(),u.fill()}c.toBlob(w=>a({blob:w,base64:c.toDataURL()}))})});class Ke{constructor(){ee(this,"recorder");ee(this,"chunks");ee(this,"mute",()=>{this.recorder&&this.recorder.stream.getTracks().forEach(n=>n.enabled=!1)});ee(this,"unmute",()=>{this.recorder&&this.recorder.stream.getTracks().forEach(n=>n.enabled=!0)});this.recorder=null,this.chunks=[]}start(n){this.recorder=new MediaRecorder(n),this.recorder.ondataavailable=d=>this.chunks.push(d.data),this.chunks=[],this.recorder.start(),k("isTalking").then(d=>{d?this.unmute():this.mute()})}stop(){const{recorder:n,chunks:d}=this;return new Promise(A=>{n.onstop=()=>{const i=new Blob(d,{type:n.mimeType}),a=new Audio;a.src=URL.createObjectURL(i);let r={blob:i};Ne(i).then(c=>{Ne(i,60,7,960,200).then(u=>{r.waveform={message:c.blob,placeholder:u.base64},a.duration===1/0?(a.currentTime=Number.MAX_SAFE_INTEGER,a.ontimeupdate=()=>A({...r,duration:Math.floor(a.duration+.5)})):A({...r,duration:Math.floor(a.duration+.5)})})})},n.stop()})}}function Je(){const{User:t,View:n,UnreadMessages:d}=S.useContext(J),A=_(H.Settings),i=_(H.PhoneNumber),[a,r]=t,[c,u]=n,[v,o]=d,p=_(Y.Emoji),[U,y]=S.useState(!1),[E,w]=S.useState(null),[G,D]=S.useState(!1),[L,R]=S.useState(!1),[O,C]=S.useState(0),[x,X]=S.useState(0),[g,f]=S.useState(!1),[M,T]=S.useState(!1),[P,N]=S.useState([]),[F,ae]=S.useState(null),ne=S.useRef(null),[$,Z]=S.useState({content:"",attachments:[]}),j=_(K);S.useEffect(()=>{k("Messages",{action:"getMessages",page:0,id:a.id}).then(s=>{if(s&&s.length>0){N([...s.reverse()]);let h=document.querySelector(".message-container");h.scrollTop=h.scrollHeight}else f(!0)})},[]);const re=S.useRef(!1),oe=()=>{if($.content.length>0||$.attachments.length>0||F){let s={sender:i,timestamp:Date.now(),id:a.id,content:$.content,attachments:$.attachments};if(A.airplaneMode)return N(h=>[...h,{...s,delivered:!1}]);if(F){if(re.current)return;re.current=!0,he("Image",F.waves.message).then(h=>{he("Audio",F.blob).then(b=>{s.content=`<!AUDIO-MESSAGE-IMAGE="${h}"-AUDIO="${b}"-DURATION="${F.duration}"!>`,k("Messages",{action:"sendMessage",number:a.number,content:s.content,id:a.id}).then(I=>{N(I?B=>[...B,s]:B=>[...B,{...s,delivered:!1}]),re.current=!1,ae(null)})})});return}if(F)return;k("Messages",{action:"sendMessage",number:a.number,content:$.content,attachments:$.attachments,id:a.id}).then(h=>{h?(N(b=>[...b,s]),ae(null)):N(b=>[...b,{...s,delivered:!1}]),Z({content:"",attachments:[]}),ne.current&&(ne.current.value=""),Q("info","Updating recent message cache state"),q.APPS.MESSAGES.messages.set(q.APPS.MESSAGES.messages.value.map(b=>b.id===a.id?{...b,timestamp:new Date().getTime(),lastMessage:s.content}:b))})}},me=s=>{if(j.EnableMessagePay&&!(!s&&s<=0)){if(s>((j==null?void 0:j.MaxTransferAmount)??Number.MAX_SAFE_INTEGER))return Q("error","Amount is too high");Y.PopUp.set({title:l("APPS.MESSAGES.PAY.SEND_TITLE").format({amount:j.CurrencyFormat.replace("%s",s.toString())}),description:l("APPS.MESSAGES.PAY.SEND_DESCRIPTION").format({amount:j.CurrencyFormat.replace("%s",s.toString()),name:a.name??V(a.number)}),buttons:[{title:l("APPS.MESSAGES.PAY.SEND_BUTTON_CANCEL")},{title:l("APPS.MESSAGES.PAY.SEND_BUTTON_SEND"),cb:()=>{k("Wallet",{action:"sendPayment",number:a.number,amount:s}).then(h=>{if(!h.success){Q("error","Failed to send payment "+JSON.stringify(h)),setTimeout(()=>{Y.PopUp.set({title:l("APPS.MESSAGES.PAYMENT_FAILED_POPUP.TITLE"),description:l("APPS.MESSAGES.PAYMENT_FAILED_POPUP.DESCRIPTION").format({error:h.reason}),buttons:[{title:l("APPS.MESSAGES.PAYMENT_FAILED_POPUP.CLOSE")}]})},500);return}let b={id:a.id,sender:i,content:`<!SENT-PAYMENT-${s}!>`,attachments:[],timestamp:Date.now()};N(I=>[...I,b])})}}]})}},Ce=s=>{if(!j.EnableMessagePay||!s&&s<=0)return;let h={sender:i,content:`<!REQUESTED-PAYMENT-${s}!>`,attachments:[],timestamp:Date.now()};k("Messages",{action:"sendMessage",number:a.number,content:h.content,attachments:[]}).then(b=>{N(b?I=>[...I,h]:I=>[...I,{...h,delivered:!1}])})},de=()=>{Y.PopUp.set({title:l("APPS.MESSAGES.SEND_LOCATION_POPUP.TITLE"),description:l("APPS.MESSAGES.SEND_LOCATION_POPUP.TEXT"),buttons:[{title:l("APPS.MESSAGES.SEND_LOCATION_POPUP.CANCEL")},{title:l("APPS.MESSAGES.SEND_LOCATION_POPUP.SEND"),cb:()=>{k("Maps",{action:"getCurrentLocation"}).then(s=>{if(!s)return;let h={id:a.id,sender:i,content:`<!SENT-LOCATION-X=${ge(s.x,2)}Y=${ge(s.y,2)}!>`,attachments:[],timestamp:Date.now()};k("Messages",{action:"sendMessage",number:a.number,content:h.content,attachments:h.attachments,id:h.id}).then(b=>{N(b?I=>[...I,h]:I=>[...I,{...h,delivered:!1}])})})}}]})},Te=()=>{if(g||M)return;let s=document.querySelector("#last");if(!s)return;!_e(s)&&(T(!0),k("Messages",{action:"getMessages",page:x+1,id:a.id}).then(b=>{b&&b.length>0?(N([...b.reverse(),...P]),T(!1)):f(!0)}),X(b=>b+1))};W("messages:newMessage",s=>{if(a.id!==s.id||A.airplaneMode)return;N(b=>[...b,{...s,timestamp:Date.now()}]);let h=document.querySelector(".message-container");h.scrollTop=h.scrollHeight}),W("messages:renameGroup",s=>{a.id===s.channelId&&(A.airplaneMode||r(h=>({...h,name:s.name})))}),W("messages:messageDeleted",s=>{s&&(A.airplaneMode||N(P.filter(h=>h.id!==s)))}),W("messages:removeMember",s=>{a.id===s.channelId&&(A.airplaneMode||s.number===i&&(u("userlist"),r(null)))});const we=ye(s=>{let h=s.target;for(;!h.classList.contains("message");)h=h.parentElement;let b=h.getAttribute("data-id");if(!b)return;let I=P.find(B=>B.id===b);I&&I.sender===i&&(ue(I.content)||Oe(I.content)||Se(I.content)||Y.ContextMenu.set({buttons:[{title:l("APPS.MESSAGES.DELETE"),color:"red",cb:()=>{k("Messages",{action:"deleteMessage",id:b}).then(B=>{})}}]}))}),Oe=s=>!s||!j.EnableMessagePay?!1:/<!SENT-PAYMENT-(\d*)!>/.test(s)?!0:!!/<!REQUESTED-PAYMENT-(\d*)!>/.test(s),ue=s=>{if(s)return/<!SENT-LOCATION-X=(-?\d*\.?\d*)Y=(-?\d*\.?\d*)!>/.test(s)},Se=s=>{if(s)return s==="<!CALL-NO-ANSWER!>"},Ge=s=>{if(s)return/<!AUDIO-MESSAGE-IMAGE="(.*)"-AUDIO="(.*)"-DURATION="(.*)"!>/.test(s)};return e(se,{children:m("div",{className:"animation-slide left",children:[m(Ae,{children:[U&&e(nt,{setShow:y,setShowUserInfo:w,sendLocation:de,setData:r,data:a}),E&&e(at,{setShow:w,user:a!=null&&a.isGroup?E:a})]}),m("div",{className:"message-header",children:[m("div",{className:"back",onClick:()=>{u("userlist"),r(null),a.unread&&(k("Messages",{action:"markRead",id:a.id}),o(s=>s-1))},children:[e(De,{}),v>0&&e("span",{className:"back-title",children:v})]}),m("div",{className:"user",onClick:()=>{a.isGroup?y(!0):w(!0)},children:[a.isGroup?e("div",{className:"group-avatar",children:a.members.sort((s,h)=>s.avatar?1:-1).map((s,h)=>e("img",{src:s.avatar??"./assets/img/no-pfp.png",alt:""},h)).slice(0,5)}):e("img",{src:a.avatar??"./assets/img/no-pfp.png",className:"avatar"}),e("div",{className:"name",children:a.isGroup?a.name??`${a.members.length} ${l("APPS.MESSAGES.PEOPLE")}`:a.name??V(a.number)})]}),e(Le,{className:`facetime ${a.isGroup?"hidden":""}`,onClick:()=>{a.isGroup||ke({number:a.number,videoCall:!0})}})]}),e("div",{className:"message-container",onScroll:Te,style:L||G?{height:"48%"}:{},children:e("div",{className:"message-body",children:P.map((s,h)=>e(Ze,{index:h,messages:P,message:s,longPressEvent:we,func:{isMissed:Se,isLocation:ue,isVoiceMessage:Ge,pay:me}}))})}),e("div",{className:"attachments",children:$.attachments.map((s,h)=>m("div",{className:"attachment",children:[ve(s)?e("video",{src:s,muted:!0,controls:!1,loop:!0,autoPlay:!0}):e("img",{src:s}),e(ie,{onClick:()=>{Z({...$,attachments:$.attachments.filter((b,I)=>I!==h)})}})]},h))}),m("div",{className:"message-bottom",style:L||G?{height:"18%"}:{},children:[e("div",{className:"upper",children:m("div",{className:"input","data-border":!F,children:[F?m("div",{className:"audio-message",children:[e(ie,{onClick:()=>ae(null)}),e("div",{className:"audio-waves",children:e("img",{src:F.waves.placeholder})})]}):e(te,{placeholder:l("APPS.MESSAGES.PLACEHOLDER"),ref:ne,value:$.content,onChange:s=>{Z({content:s.target.value,attachments:$.attachments})},onKeyDown:s=>{s.key=="Enter"&&oe()}}),($.content.length>0||$.attachments.length>0||F)&&e("div",{className:"send",onClick:()=>oe(),children:e(Me,{})})]})}),e("div",{className:"actions-wrapper",children:m("div",{className:"actions",children:[e("div",{className:"action",onClick:()=>{if(p)return Y.Emoji.reset();Y.Emoji.set({onSelect:s=>Z(h=>({content:`${h.content}${s.emoji}`,attachments:h.attachments}))})},children:e("img",{src:"./assets/img/icons/messages/emoji.png"})}),e("div",{className:"action",onClick:()=>{var s,h,b;$.attachments.length<3&&Y.Gallery.set({includeVideos:!0,allowExternal:(b=(h=(s=K)==null?void 0:s.value)==null?void 0:h.AllowExternal)==null?void 0:b.Messages,onSelect:I=>Z({...$,attachments:[...$.attachments,I.src]})})},children:e("img",{src:"./assets/img/icons/messages/gallery.png"})}),(j==null?void 0:j.EnableMessagePay)&&!a.isGroup&&e("div",{className:"action black",onClick:()=>{D(!1),R(s=>!s)},children:"$"}),e("div",{className:"action",onClick:()=>de(),children:e(Re,{})}),(j==null?void 0:j.EnableVoiceMessages)&&e("div",{className:"action blue",onClick:()=>{R(!1),D(s=>!s)},children:e(pe,{})})]})}),L&&e(tt,{paymentAmount:O,setPaymentAmount:C,pay:me,request:Ce}),G&&e(et,{onEnd:s=>{s&&(ae({src:URL.createObjectURL(s.blob),blob:s.blob,waves:s.waveform,duration:s.duration}),D(!1))}})]})]})})}const Ze=({messages:t,message:n,index:d,longPressEvent:A,func:i})=>{var L,R;const{User:a}=S.useContext(J),r=_(H.PhoneNumber),[c]=a,u=_(K);let v,o,p,U,y,E,w=d===0?"last":"",G=n.sender===r?"self":"other",D=((L=t[d+1])==null?void 0:L.sender)===r?"self":"other";if(t[d+1]?p=Math.abs(n.timestamp-t[d+1].timestamp)/36e5:D=void 0,c.isGroup)v=(R=c.members.find(O=>O.number===n.sender))==null?void 0:R.name,o=!t[d-1]||t[d-1].sender!==n.sender;else if(n.content)if(i.isMissed(n.content))if(G==="other")n.content=l("APPS.MESSAGES.MISSED_CALL").format({number:n.sender});else return null;else/<!SENT-PAYMENT-(\d*)!>/.test(n.content)?U={amount:n.content.match(/\d/g).join(""),request:!1}:/<!REQUESTED-PAYMENT-(\d*)!>/.test(n.content)&&(U={amount:n.content.match(/\d/g).join(""),request:!0});if(i.isLocation(n.content)){let O=n.content.match(/X=(-?\d*\.?\d*)Y/)[1],C=n.content.match(/Y=(-?\d*\.?\d*)!>/)[1];y={x:O,y:C}}return i.isVoiceMessage(n.content)&&(E={wave:n.content.match(/AUDIO-MESSAGE-IMAGE="([^"]+)"/)[1],src:n.content.match(/AUDIO="([^"]+)"/)[1],duration:n.content.match(/DURATION="([^"]+)"/)[1]}),m("div",{className:`message ${G}`,id:w,"data-id":n.id,...A,children:[o&&G=="other"&&e("div",{className:"user",children:v??V(n.sender)}),n.delivered===!1?m("div",{className:"content-wrapper",children:[U&&e("div",{className:"payment",children:u.CurrencyFormat.replace("%s",U.amount)}),e("div",{className:"content",children:fe(n.content)}),e($e,{})]}):U||y||E?m(se,{children:[y&&m("div",{className:"location",onClick:()=>{H.App.set({name:"Maps",data:{location:[y.y,y.x],name:`${v??V(n.sender)}'s location`,icon:c.avatar}})},children:[e("div",{className:"img",style:{backgroundImage:'url("https://img.gta5-mods.com/q95/images/mirror-park-garden/2b72f9-20160428154103_1.jpg")'}}),G==="other"&&m("div",{className:"sender",children:[v??V(n.sender)," ",l("APPS.MESSAGES.SENT_LOCATION")]})]}),U&&e("div",{className:"payment",children:U.request?m("div",{className:`request ${G}`,children:[m("div",{className:"title",children:[u.CurrencyFormat.replace("%s",Pe(U.amount))," ",l("APPS.MESSAGES.PAY.REQUESTED")]}),G==="other"&&e("div",{className:"button",onClick:()=>i.pay(U.amount),children:l("APPS.MESSAGES.PAY.PAY")})]}):e("div",{className:"sent",children:u.CurrencyFormat.replace("%s",Pe(U.amount))})}),E&&e(st,{data:E,sender:G})]}):n.content&&e("div",{className:"content",children:fe(n.content)}),n.attachments&&n.attachments.length>0&&e("div",{className:"attatchments",children:n.attachments.map((O,C)=>ve(O)?e("video",{src:O,controls:!1,loop:!0,autoPlay:!0,muted:!0,onClick:x=>{Y.FullscreenImage.set({display:!0,image:O})}},C):e(Ve,{src:O,onClick:()=>{Y.FullscreenImage.set({display:!0,image:O})}},C))}),n.delivered===!1?e("div",{className:"status",children:l("APPS.MESSAGES.NOT_DELIVERED")}):t[d+1]&&p>6?e("div",{className:"date",children:Ee(n.timestamp)}):G!==D&&e("div",{className:"date",children:Ee(n.timestamp)})]},d)},et=({onEnd:t})=>{const n=_(K),[d,A]=S.useState(!1),i=S.useRef(null);return n.EnableVoiceMessages?(S.useEffect(()=>{i.current=new Ke},[]),W("camera:toggleMicrophone",a=>{i!=null&&i.current&&(a?i.current.unmute():i.current.mute())}),e("div",{className:"audioMessage-container",children:e("div",{className:"audioMessage-button","data-recording":d,onClick:()=>{var r;if(!((r=navigator.mediaDevices)!=null&&r.getUserMedia)||!(i!=null&&i.current))return Q("error","No media devices found!");let a=i.current;d?a.stop().then(c=>{t(c),A(u=>!u)}):navigator.mediaDevices.getUserMedia({audio:!0}).then(c=>{a.start(c),A(u=>!u)})},children:d?e(ie,{}):e(pe,{})})})):null},tt=({paymentAmount:t,setPaymentAmount:n,request:d,pay:A})=>{const i=_(K),[a,r]=S.useState(0),[c,u]=S.useState(4);let v={0:3,11:2.75,14:2.2};return S.useEffect(()=>{a===0&&u(v[0]);let o=0;for(let p=0;p<Object.keys(v).length;p++)a>=parseInt(Object.keys(v)[p])&&(console.log(v[Object.keys(v)[p]]),o=v[Object.keys(v)[p]]);u(o)},[a]),S.useEffect(()=>{n(a)},[a]),m("div",{className:"payment-container",children:[m("div",{className:"payment-wrapper",children:[e("div",{className:"button",onClick:()=>t>0&&r(o=>o-1),children:"-"}),e("div",{className:"amount",children:e(te,{type:"number",value:t,style:{fontSize:`${c}rem`},onChange:o=>{if(o.target.value.match(/^[0-9]+$/)&&parseFloat(o.target.value)>0&&parseFloat(o.target.value)<(i.MaxTransferAmount??Number.MAX_SAFE_INTEGER))r(parseFloat(o.target.value));else return o.preventDefault()}})}),e("div",{className:"button",onClick:()=>r(o=>o+1),children:"+"})]}),m("div",{className:"payment-buttons",children:[e("div",{className:"button",onClick:()=>d(t),children:l("APPS.MESSAGES.PAY.REQUEST")}),e("div",{className:"button",onClick:()=>A(t),children:l("APPS.MESSAGES.PAY.SEND")})]})]})},st=({data:t,sender:n})=>{var u;const[d,A]=S.useState(!1),[i,a]=S.useState(0),r=S.useRef(null);S.useEffect(()=>{r.current&&(r.current.onended=()=>{A(!1)})},[r]);const c=v=>{v=Math.floor(v);const o=Math.floor(v/60),p=v-o*60;return`${o<10?"0"+o:o}:${p<10?"0"+p:p}`};return m("div",{className:`voice-message ${n}`,children:[e("a",{onClick:()=>{r.current&&(d?(r.current.pause(),r.current.currentTime=0):r.current.play(),A(v=>!v))},children:d?e(Ye,{}):e(Fe,{})}),m("div",{className:"wave",children:[e("div",{className:"overlay",style:{width:`${(t.duration-i)/t.duration*100}%`}}),e("img",{src:t.wave,alt:"wave"})]}),e("div",{className:"duration",children:c(d&&Math.floor(((u=r.current)==null?void 0:u.currentTime)+.5)!==0?r.current.currentTime:t.duration)}),e("audio",{ref:r,onTimeUpdate:v=>a(v.currentTarget.currentTime),children:e("source",{src:t.src,type:"audio/mpeg"})})]})},at=({user:t,setShow:n})=>m(le.div,{...ce,className:"info-panel",children:[e("div",{className:"info-panel-header",children:e("div",{className:"done",onClick:()=>n(!1),children:l("APPS.MESSAGES.DONE")})}),m("div",{className:"info-panel-body",children:[m("div",{className:"info-panel-top",children:[t.avatar?e("div",{className:"profile-image bigger",style:{backgroundImage:`url(${t.avatar})`}}):t.name?e("div",{className:"profile-image bigger",children:je(t.name)}):e("img",{src:t.avatar??"./assets/img/no-pfp.png",className:"avatar"}),e("div",{className:"name",children:t.name??V(t.number)})]}),e("div",{className:"items",children:!t.company&&m(se,{children:[t.name&&e("div",{className:"info-section",children:e("div",{className:"item blue",onClick:()=>xe(t.number),children:V(t.number)})}),e("div",{className:"info-section",children:t.name?e("div",{className:"item blue",onClick:()=>{Y.Share.set({type:"contact",data:{firstname:t.firstname,lastname:t.lastname,number:t.number,avatar:t.avatar}})},children:l("APPS.PHONE.CONTACTS.SHARE_CONTACT")}):e("div",{className:"item blue",onClick:()=>{H.App.set({name:"Phone",view:"newContact",data:t.number})},children:l("APPS.PHONE.CONTACTS.ADD_CONTACT")})})]})})]})]}),nt=t=>{const{View:n}=S.useContext(J),[d,A]=n,[i,a]=S.useState(!1),[r,c]=S.useState(null);let u=t.data,v=!u.members.find(o=>o.isOwner);return m(se,{children:[e(Ae,{children:i&&e(rt,{setShow:a,members:u.members,id:u.id})}),m(le.div,{...ce,className:"info-panel",children:[e("div",{className:"info-panel-header",children:e("div",{className:"done",onClick:()=>{r&&r!==""&&r!==u.name?k("Messages",{action:"renameGroup",id:u.id,name:r}).then(o=>{t.setShow(!1)}):t.setShow(!1)},children:l("APPS.MESSAGES.DONE")})}),m("div",{className:"info-panel-body",children:[m("div",{className:"info-panel-top",children:[e("div",{className:"group-avatar",children:u.members.sort((o,p)=>o.avatar?1:-1).slice(0,10).map(o=>e("img",{src:o.avatar??"./assets/img/no-pfp.png",alt:""}))}),m("div",{className:"members",children:[u.members.length," ",l("APPS.MESSAGES.MEMBERS")]})]}),m("div",{className:"items",children:[e("div",{className:"info-section",children:m("div",{className:"item blue",children:[e(He,{className:"add"}),e(te,{defaultValue:u.name??"Group Name",onChange:o=>c(o.target.value)})]})}),m("div",{className:"info-section",children:[u.members.sort((o,p)=>o.name&&!p.name?-1:!o.name&&p.name?1:o.name<p.name?-1:o.name>p.name?1:0).map(o=>m("div",{className:"item",children:[v&&e(Xe,{className:"remove",onClick:()=>{Y.PopUp.set({title:l("APPS.MESSAGES.REMOVE_POPUP.TITLE"),description:l("APPS.MESSAGES.REMOVE_POPUP.TEXT").format({name:o.name??V(o.number)}),buttons:[{title:l("APPS.MESSAGES.CANCEL")},{title:l("APPS.MESSAGES.REMOVE_POPUP.REMOVE"),color:"red",cb:()=>{k("Messages",{action:"removeMember",number:o.number,id:u.id}).then(p=>{p&&(t.setData(U=>{let y=U;return y.members=y.members.filter(E=>E.number!==o.number),y}),t.setShow(!1))})}}]})}}),e("img",{src:o.avatar??"./assets/img/no-pfp.png",alt:""}),e("div",{className:"name",children:o.name??V(o.number)}),e(qe,{className:"info",onClick:()=>{t.setShowUserInfo({...o})}})]})),m("div",{className:"item blue",onClick:()=>a(!0),children:[e(Be,{className:"add"}),l("APPS.MESSAGES.ADD_MEMBER")]})]}),e("div",{className:"info-section",children:e("div",{className:"item blue",onClick:()=>t.sendLocation(),children:l("APPS.MESSAGES.SHARE_LOCATION")})}),e("div",{className:"info-section",onClick:()=>{Y.PopUp.set({title:l("APPS.MESSAGES.LEAVE_POPUP.TITLE"),description:l("APPS.MESSAGES.LEAVE_POPUP.TEXT"),buttons:[{title:l("APPS.MESSAGES.CANCEL")},{title:l("APPS.MESSAGES.LEAVE_POPUP.LEAVE"),color:"red",cb:()=>{k("Messages",{action:"leaveGroup",id:u.id}).then(o=>{if(!o)return Q("info","Failed to leave group, server didnt callback request");A("userlist"),t.setShow(!1)})}}]})},children:e("div",{className:"item red",children:l("APPS.MESSAGES.LEAVE_GROUP")})})]})]})]})]})},rt=t=>{const n=_(H.PhoneNumber),[d,A]=S.useState(""),i=_(q.APPS.PHONE.contacts);let a=t.members;return m(le.div,{...ce,className:"add-member-container",children:[m("div",{className:"add-member-header",children:[m("div",{className:"top",children:[e("span",{}),e("div",{className:"title",children:l("APPS.MESSAGES.ADD_MEMBER")}),e("div",{className:"button",onClick:()=>t.setShow(!1),children:l("APPS.MESSAGES.CANCEL")})]}),e(be,{placeholder:l("APPS.MESSAGES.SEARCH"),onChange:r=>A(r.target.value)})]}),e("div",{className:"contacts",children:i.filter(r=>!r.company).sort((r,c)=>r.firstname&&!c.firstname?-1:!r.firstname&&c.firstname?1:r.firstname<c.firstname?-1:r.firstname>c.firstname?1:0).filter(r=>!a.find(c=>c.number===r.number)||r.number===n).filter(r=>{var c,u;return r.firstname.toLowerCase().includes(d.toLowerCase())||((u=(c=r==null?void 0:r.lastname)==null?void 0:c.toLowerCase())==null?void 0:u.includes(d.toLowerCase()))}).map(r=>{let c=z(r.firstname,r.lastname);return m("div",{className:"contact",onClick:()=>{Y.PopUp.set({title:l("APPS.MESSAGES.ADD_POPUP.TITLE"),description:l("APPS.MESSAGES.ADD_POPUP.TEXT").format({name:c}),buttons:[{title:l("APPS.MESSAGES.CANCEL")},{title:l("APPS.MESSAGES.ADD_POPUP.ADD"),cb:()=>{k("Messages",{action:"addMember",number:r.number,id:t.id}).then(u=>{u&&t.setShow(!1)})}}]})},children:[e("img",{src:r.avatar??"./assets/img/no-pfp.png"}),m("div",{className:"user",children:[e("div",{className:"name",children:c}),e("div",{className:"number",children:V(r.number)})]})]})})})]})};function it(){const{User:t,View:n,Newmessage:d,ImportedUser:A}=S.useContext(J),[i,a]=t,[r,c]=n,[u,v]=A,o=_(H.PhoneNumber),[p,U]=d,y=_(q.APPS.PHONE.contacts),[E,w]=S.useState([]),G=S.useRef(null),[D,L]=S.useState(""),[R,O]=S.useState([]),[C,x]=S.useState({content:"",attachments:[]});S.useEffect(()=>{u&&(w([u]),v(null))},[u]);const X=()=>{(C.content.length>0||C.attachments.length>0)&&(E.length>1?k("Messages",{action:"createGroup",members:E,content:C.content,attachments:C.attachments}).then(g=>{g&&(a({isGroup:!0,members:E,lastMessage:C.content,timestamp:Date.now(),id:g}),c("messages"),U(!1))}):k("Messages",{action:"sendMessage",number:E[0].number,content:C.content,attachments:C.attachments}).then(g=>{var f,M,T,P;if(g){let N;E[0].name?N=E[0].name:(f=E[0])!=null&&f.firstname&&(N=z((M=E[0])==null?void 0:M.firstname,(T=E[0])==null?void 0:T.lastname));let F={number:E[0].number,name:N,avatar:(P=E[0])==null?void 0:P.avatar};a({...F,lastMessage:C.content,timestamp:Date.now(),id:g}),c("messages"),U(!1)}}))};return S.useEffect(()=>{if(D.length>0){if(y){const g=y.filter(f=>{let M=z(f.firstname,f.lastname);return M&&M.toLowerCase().includes(D.toLowerCase())&&!f.company});O(g)}}else O([])},[D]),m("div",{className:"new-message-container",children:[m("div",{className:"new-message-header",children:[e("span",{}),e("div",{className:"title",children:l("APPS.MESSAGES.NEW_MESSAGE")}),e("div",{className:"button",onClick:()=>{E.length>0&&(C.content.length>0||C.attachments.length>0)?X():U(!1)},children:E.length>0&&(C.content.length>0||C.attachments.length>0)?l("APPS.MESSAGES.SEND"):l("APPS.MESSAGES.CANCEL")})]}),m("div",{className:"new-message-body",children:[m("div",{className:"new-message-search",children:[m("div",{className:"to",children:[l("APPS.MESSAGES.TO"),":"]}),e("div",{className:"contacts",children:E.map((g,f)=>{let M=z(g.firstname,g.lastname),T=M!=="Unknown";return e("div",{className:`contact ${T?"green":"blue"}`,onClick:()=>{Y.PopUp.set({title:l("APPS.MESSAGES.REMOVE_POPUP.TITLE"),description:l("APPS.MESSAGES.REMOVE_POPUP.TEXT").format({NAME:M??V(g.number)}),buttons:[{title:l("APPS.MESSAGES.CANCEL")},{title:l("APPS.MESSAGES.REMOVE_POPUP.REMOVE"),color:"red",cb:()=>{let P=E.filter(N=>N.number!==g.number);w(P)}}]})},children:T?M:V(g.number)},f)})}),e(te,{type:"text",ref:G,onChange:g=>{if(L(g.target.value),g.target.value.length==o.length&&/^\d+$/g.test(g.target.value)){if(g.target.value===o)return;w([...E,{number:g.target.value}]),G.current.value="",L("")}},onKeyDown:g=>{var f;g.key=="Backspace"&&D.length==0?((f=E[E.length-1])==null?void 0:f.name)===void 0?(G.current.value=E[E.length-1].number,w(E.slice(0,E.length-1))):w(E.slice(0,-1)):g.key=="Tab"&&(g.preventDefault(),R.length==1&&(w([...E,R[0]]),G.current.value="",L("")))}})]}),e("div",{className:"search-results",children:R&&R.filter(g=>!E.find(f=>f.number==g.number)).map((g,f)=>{let M=z(g.firstname,g.lastname);return m("div",{className:"contact",onClick:()=>{E.find(P=>P.number==g.number)||(w([...E,g]),G.current.value="",L(""))},children:[e("img",{src:g.avatar??"./assets/img/no-pfp.png"}),m("div",{className:"user",children:[e("div",{className:"name",children:M}),e("div",{className:"number",children:V(g.number)})]})]},f)})})]}),E.length>0&&R.length===0&&e("div",{className:"message-bottom absolute",children:e("div",{className:"upper",children:m("div",{className:"input",children:[e(te,{placeholder:l("APPS.MESSAGES.PLACEHOLDER"),value:C.content,onChange:g=>{x({content:g.target.value??"",attachments:C.attachments})},onKeyDown:g=>{g.key=="Enter"&&X()}}),(C.content.length>0||C.attachments.length>0)&&e("div",{className:"send",onClick:()=>X(),children:e(Me,{})})]})})})]})}function lt(){const{User:t,View:n,Newmessage:d,UnreadMessages:A,ImportedUser:i}=S.useContext(J),a=_(H.PhoneNumber),r=_(H.Settings),c=_(H.App),[u,v]=t,[o,p]=n,[U,y]=i,[E,w]=d,[G,D]=A,L=_(q.APPS.PHONE.contacts),R=_(q.APPS.MESSAGES.messages),[O,C]=S.useState(""),[x,X]=S.useState([]);S.useEffect(()=>{R?(Q("info","Using cache for recent messages"),X(R),D(x.filter(f=>f.unread).length)):k("Messages",{action:"getRecentMessages"}).then(f=>{let M=f.map(T=>{if(T.isGroup)return T.members=T.members.filter(P=>P.number!==a).map(P=>{let N=L.find(F=>F.number===P.number);return{name:N&&N.firstname?z(N==null?void 0:N.firstname,N==null?void 0:N.lastname):void 0,avatar:N==null?void 0:N.avatar,blocked:N==null?void 0:N.blocked,favourite:N==null?void 0:N.favourite,number:P.number,isOwner:P.isOwner}}),T;{let P=L.find(N=>N.number===T.number);return T.name=P!=null&&P.lastname?`${P.firstname} ${P.lastname}`:P==null?void 0:P.firstname,T.avatar=P==null?void 0:P.avatar,T}});D(M.filter(T=>T.unread).length),X(M),Q("info","setting cache"),q.APPS.MESSAGES.messages.set(M)})},[R]);let g=S.useRef(!1);return S.useEffect(()=>{if(!g.current&&c!=null&&c.data&&(g.current=!0,c!=null&&c.data&&c.view=="messages")){let f=x.find(M=>M.number===c.data.number);f?(v(f),p("messages")):(w(!0),y({number:c.data.number,name:c.data.name,avatar:c.data.avatar})),H.App.set({name:c.name})}},[c==null?void 0:c.data,x]),W("messages:newMessage",f=>{let M=JSON.parse(JSON.stringify(x)),T=M.findIndex(P=>P.id===f.id);r.airplaneMode||(T!==-1&&M.unshift(M.splice(T,1)[0]),M[0].lastMessage=f.content,M[0].timestamp=new Date,X(M))}),m(se,{children:[E&&e(it,{}),m("div",{className:`animation-slide ${x.length>0?"right":""}`,children:[m("div",{className:"messages-header",children:[e("div",{className:"title",children:l("APPS.MESSAGES.TITLE")}),e(Qe,{onClick:()=>w(!0)})]}),e(be,{placeholder:l("SEARCH"),onChange:f=>C(f.target.value)}),e("div",{className:"users-list",children:x.filter(f=>{var M;return(f.isGroup?f.members.find(T=>{var P;return((P=T.name)==null?void 0:P.toLowerCase().includes(O.toLowerCase()))||T.number.includes(O)}):((M=f.name)==null?void 0:M.toLowerCase().includes(O.toLowerCase()))||f.number.includes(O))||f.lastMessage.toLowerCase().includes(O.toLowerCase())}).sort((f,M)=>M.timestamp-f.timestamp).map((f,M)=>e(ct,{user:f,onClick:()=>{if(v(f),p("messages"),f.unread){k("Messages",{action:"markRead",id:f.id}),D(P=>P-1);let T=q.APPS.MESSAGES.messages.value;q.APPS.MESSAGES.messages.set(T.map(P=>(P.id===f.id&&(P.unread=!1),P)))}}},M))})]})]})}const ct=({user:t,onClick:n})=>{const d=_(K);let A;if(t.isGroup?t.name?A=t.name:A=t.members.sort((i,a)=>i.name&&!a.name?-1:!i.name&&a.name?1:i.name<a.name?-1:i.name>a.name?1:0).map((i,a)=>{if(a<2)return i.name?i.name:V(i.number);if(a===2)return`+${t.members.length-2} ${l("APPS.MESSAGES.OTHER").toLowerCase()}`}).join(" "):A=t.name,t.lastMessage==="Attachment"&&(t.lastMessage=l("APPS.MESSAGES.SENT_A_PHOTO")),/<!SENT-PAYMENT-(\d*)!>/.test(t.lastMessage)){let i=t.lastMessage.match(/\d/g).join("");t.lastMessage=`${l("APPS.MESSAGES.SENT")} ${d.CurrencyFormat.replace("%s",i)}`}else if(/<!REQUESTED-PAYMENT-(\d*)!>/.test(t.lastMessage)){let i=t.lastMessage.match(/\d/g).join("");t.lastMessage=`${l("APPS.MESSAGES.REQUESTED")} $${i}`}else if(/<!SENT-LOCATION-X=(-?\d*\.?\d*)Y=(-?\d*\.?\d*)!>/.test(t.lastMessage))t.lastMessage=`${l("APPS.MESSAGES.SENT_LOCATION_SHORT")}`;else if(t.lastMessage.startsWith('<!AUDIO-MESSAGE-IMAGE="'))t.lastMessage="sent an audio message";else if(t.lastMessage==="<!CALL-NO-ANSWER!>")t.lastMessage=`${V(t.number)} tried to call you`;else if(t.lastMessage==="")return;return m("div",{className:"user",onClick:()=>n(),children:[e("div",{className:`read${t.unread?" unread":""}`}),t.isGroup?e("div",{className:"avatar group",children:t.members.map((i,a)=>{if(a<=4)return i.avatar?e("div",{style:{backgroundImage:`url(${i.avatar})`}},a):i.name?e("div",{children:i.name.charAt(0)},a):e("div",{className:"unknown"},a)})}):e("img",{className:"avatar",src:t.avatar??"assets/img/no-pfp.png"}),m("div",{className:"user-body",children:[m("div",{className:"user-header",children:[e("div",{className:"name",children:A??V(t.number)}),m("div",{className:"right",children:[e("div",{className:"time",children:We(t.timestamp)}),e(ze,{})]})]}),e("div",{className:"content",children:t.lastMessage.length>40?t.lastMessage.substring(0,40)+"...":t.lastMessage})]})]})};const J=S.createContext(null);function St(){const[t,n]=S.useState(null),[d,A]=S.useState("userlist"),[i,a]=S.useState(null),[r,c]=S.useState(0),[u,v]=S.useState(!1);return e("div",{className:"messages-container",children:e(J.Provider,{value:{User:[t,n],View:[d,A],Newmessage:[u,v],ImportedUser:[i,a],UnreadMessages:[r,c]},children:d=="userlist"?e(lt,{}):e(Je,{})})})}export{J as MessagesContext,St as default};