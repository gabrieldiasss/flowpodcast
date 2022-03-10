import{s as n,j as a,a as e,L as A,W as te,b as re,r as d,t as E,C as L,P as oe,c as ne,d as ie,e as ae,A as se,f as ce,M as le,g as de,u as pe,h as ue,F as he,i as ge,k as me,R as fe,l as R,T as xe,m as ve,n as ye,B as be}from"./vendor.4e1ccb15.js";const we=function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))p(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&p(l)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function p(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}};we();const Se=n.aside`
    padding: 2rem;

    background: var(--black);
    width: 20%;
    max-width: 700px;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media(max-width: 1400px) {
        min-width: 25%;
    }

    img {
        width: 15rem;
    }

    p {
        text-align: center;
        color: var(--gray-300);
    }

`,Ce=n.nav`

        ul {

            text-align: center;

            a {
                
                line-height: 5.4rem;
                font-size: 2rem;
                padding: 1rem 2rem;
                border-radius: 5px;
            }

            a:hover {
                transition: 1s;
                background: linear-gradient(90deg, #D7AD2A, #FD740F);
                text-decoration: none;
            }
            
        }

    }
`;var Ee="/assets/logo-flow.42e66d37.svg";function ke(){return a(Se,{children:[e("img",{src:Ee,alt:""}),e(Ce,{children:a("ul",{children:[e("li",{children:e(A,{to:"/",children:"Home"})}),e("li",{children:e(A,{to:"/episodes",children:"Epis\xF3dios"})}),e("li",{children:e(A,{to:"/saved",children:"Salvos"})})]})}),a("p",{children:["N\xE3o \xE9 uma entrevista, ",e("br",{})," \xE9 uma conversa."]})]})}const Fe=n.div`
    display: flex;
`,Pe=te`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --white: #fff;
        --black: #0C0C0C; // fundo sidebar
        --gray-700: #1C1B21; // fundo secondary
        --gray-600: #27282A; // linhas
        --gray-550: #1F1F26; // fundo
        --gray-450: #4F4F5F;
        

        //texts
        --gray-300: #9A8181;
        --gray-200: #9C9C9C;
        --gray-150: #BDB4B4;
        --gray-100: #EBE7E7; 
        --gray-50: #F4F4F4;
        

        // icons
        --orange-800: #EE8B19;
        --orange-600: #FFB705;
        --gray-250: #4C4F56;

        --width: 0;
    }

    body {
        background: var(--gray-550);
        height: 100vh;

        color: var(--white);
    }

    html {
        @media (max-width: 1440px) {
            font-size: 93.75%; // 15px
        }
        @media (max-width: 720px) {
            font-size: 87.5%; // 14px
        }
        @media(max-width: 400px) {
            font-size: 81.125%;
        }
        @media(max-width: 350px) {
            font-size: 75%;
        }
    }

    h1, h3, strong, time, a, span {
        font-family: 'Poppins', sans-serif;
    }

    h1, h3, strong {
        color: var(--white);
    }

    h1 {
        font-weight: 600;
    }

    h2, p {
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
    }

    strong {
        font-weight: 600;
    }

    a {
        text-decoration: none;
        color: var(--white);
        font-weight: 400;
    }

    li {
        list-style: none;
    }

    a:hover {
        text-decoration: underline;
    }

    input, button, ul {
        font-family: Poppins, sans-serif;
    }

   button[type=button] {
        cursor: pointer;
        color: var(--white);
        border: 0;
        outline: 0;
        border-radius: 5px;
    } 

    button.active {
        background: linear-gradient(to left, var(--orange-600),var(--orange-800), var(--orange-600));
        background-size: 200%;
        transition: 0.7s;
    }

    button.active:hover {
        background-position: right;
        transition: 0.4s;
    }

    .react-modal-overlay {
        background: rgba(0,0,0,0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content {
        background: var(--gray-550);

        max-width: 841px;

        flex-direction: column;

        padding: 1rem 3rem;
        position: relative;
        border-radius: 0.25rem;

        button {
            width: 100%;

            font-size: 2rem;
            padding: 2rem 2rem;

            margin: 2rem 0;
            
        }
    }

`,T=re.create({baseURL:"https://flow3r-api-master-2eqj3fl3la-ue.a.run.app/v2/"}),H=d.exports.createContext({});function $e({children:t}){const[c,s]=d.exports.useState([]),[p,r]=d.exports.useState(""),[o,l]=d.exports.useState(()=>{const i=localStorage.getItem("saveds");return i?JSON.parse(i):[]}),[f,g]=d.exports.useState(()=>{const i=localStorage.getItem("episode");return i?JSON.parse(i):[]}),[u,v]=d.exports.useState(!0),[k,I]=d.exports.useState(!1),[y,h]=d.exports.useState(0),[F,b]=d.exports.useState(0),x=d.exports.useRef(null),m=d.exports.useRef(null),C=d.exports.useRef(null),_=async({mp3:i,cover:w})=>{try{await g({mp3:i,cover:w}),W(),localStorage.setItem("episode",JSON.stringify({mp3:i,cover:w}))}catch{E.error("Erro na aplica\xE7\xE3o")}},G=()=>{const i=Math.floor(x.current.duration);h(i),m.current.max=i},U=i=>{const w=Math.floor(i/3600),Y=w<10?`0${w}`:`${w}`,B=Math.floor((i-w*3600)/60),Z=B<10?`0${B}`:`${B}`,M=Math.floor(i%60),ee=M<10?`0${M}`:`${M}`;return`${Y}:${Z}:${ee}`},W=()=>{const i=k;I(!i),x.current.play(),C.current=requestAnimationFrame(P),v(!1)},X=()=>{const i=u;v(!i),i?(x.current.play(),C.current=requestAnimationFrame(P),N()):(x.current.pause(),cancelAnimationFrame(C.current),C.current=requestAnimationFrame(P))},N=()=>{try{m.current.style.setProperty("--width",`${m.current.value/y*100}%`),b(m.current.value)}catch{E.error("Erro interno")}};function P(){m.current.value=x.current.currentTime,C.current=requestAnimationFrame(P),N()}const q=i=>{m.current.value=i},D=()=>{x.current.currentTime=m.current.value,N()},K=()=>{q(Number(m.current.value)-30),D()},Q=()=>{q(Number(m.current.value)+30),D()};return d.exports.useEffect(()=>{T.post("episodes/list",{params:{filter:"episodes"}}).then(i=>{s(i.data.episodes),r(i.data.paging.next)}).catch(i=>{console.log(i)})},[]),e(H.Provider,{value:{episodes:c,setEpisodes:s,nextEpisodes:p,setNextEpisodes:r,saved:o,setSaved:l,selectedEpisode:f,setSelectedEpisode:g,SelectedEpisode:_,onLoadedMetadata:G,calculateTime:U,backThirty:K,forwardThirty:Q,togglePlayPouse:X,audioPlayer:x,changeRange:D,currentTime:F,progressBar:m,duration:y,isPlaying:u},children:t})}function S(){return d.exports.useContext(H)}const Ae=n.footer`
    height: 6rem;
    background: var(--gray-700);

    position: absolute;
    bottom: 0;
    left: 20%;

    width: 80%;
    flex: 1;

    

    display: flex;
    align-items: center;

    img {
        width: 100px;
        height: 60px;
    }

    span {
        color: var(--gray-200);
    }

    @media(max-width: 1400px) {
        left: 25%;
        width: 75%;
    }

`,Re=n.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    flex: 1;

    @media(min-width: 1400px) {
        max-width: 1100px;
    }

    max-width: 900px; 

    .progressBar {
        appearance: none;
        background: var(--gray-300);

        display: flex;
        align-items: center;

        border-radius: 10px;
        position: relative;
        width: 500px;
        height: 8px;

        @media(max-width: 1400px) {
            width: 350px;
        }

        &::-webkit-slider-runnable-track {
            appearance: none;
            background: var(--gray-450);

            display: flex;
            align-items: center;

            border-radius: 10px;
            position: relative;
            width: 500px;
            height: 8px;
        }

        &::-moz-range-track {
            appearance: none;
            background: var(--gray-450);

            display: flex;
            align-items: center;

            border-radius: 10px;
            position: relative;
            width: 500px;
            height: 8px;
        }

        &::-moz-focus-outer {
           border: 0;
        }

        &:before {
            content: '';
            height: 8px;
            width: var(--width);
            background-color: var(--orange-600);
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 2;
            cursor: pointer;
        }

        &::-moz-range-progress {
            background-color: var(--gray-150);
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px;
            height: 8px;
        }

        &::-webkit-slider-thumb {
            -webkit-appearance: none;
            height: 15px;
            width: 15px;
            border-radius: 50%;
            border: none;
            background-color: var(--gray-100);
            cursor: pointer;
            position: relative;
            margin: -3px 0 0 0;
            z-index: 2;
            box-sizing: border-box;
        }

        &:active::-webkit-slider-thumb {
            transform: scale(1.2);
            background: var(--gray-100);
        }

        &:active::-moz-range-thumb {
            height: 15px;
            width: 15px;
            border-radius: 50%;
            border: transparent;
            background-color: var(--gray-100);
            cursor: pointer;
            position: relative;
            z-index: 2;
            box-sizing: border-box;
        }

        &:active::-moz-range-thumb {
            transform: scale(1.2);
            background: var(--gray-50);
        }

    }

`,O=n.button`
    background: none;
    border: none;
    display: flex;
    align-items: center;
    font-size: 16px;
    cursor: pointer;

`,ze=n.div`
    gap: 1rem;
    display: flex;
`,Ie=n.div`
    display: flex;
    align-items: center;
    gap: 2rem;

    
`,z=L`
    width: 40px;
    height: 40px;
    color: var(--orange-600);
    cursor: pointer;
`,Ne=n(oe)`
    ${z}
`,De=n(ne)`
    ${z}
`,Be=n(ie)`
    ${z}
`,Me=n(ae)`
    ${z}
`;function Oe(){const{selectedEpisode:t,onLoadedMetadata:c,calculateTime:s,backThirty:p,forwardThirty:r,togglePlayPouse:o,audioPlayer:l,changeRange:f,currentTime:g,progressBar:u,duration:v,isPlaying:k}=S();return a(Ae,{children:[e("audio",{ref:l,preload:"metadata",onLoadedMetadata:c,src:t==null?void 0:t.mp3}),a(Re,{children:[e("img",{src:t==null?void 0:t.cover,alt:""}),a(Ie,{children:[e("span",{children:s(g)}),e("div",{children:e("input",{ref:u,type:"range",className:"progressBar",defaultValue:"0",onChange:f,onLoadedMetadata:c})}),e("span",{children:s(v)})]}),a(ze,{children:[e(O,{onClick:p,children:e(Be,{})}),e(O,{onClick:o,children:k?e(Ne,{}):e(De,{})}),e(O,{type:"button",onClick:r,children:e(Me,{})})]})]})]})}const Le=n.header`

    strong {
        font-size: 2.4rem;
    }

`,Te=n.div`

    margin-top: 2rem;

    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 100%;
        border-radius: 10px;
    }

`,V=L`
    width: 28px;
    height: 28px;
    color: var(--orange-800);

    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    cursor: pointer;
`,je=n(se)`
    ${V}
    left: 5%;
`,qe=n(ce)`
    ${V}
    right: 5%;
`,$=[{id:1,image:"https://carousel-flow.s3-sa-east-1.amazonaws.com/especial_2_anos.jpg"},{id:2,image:"https://cdn.flowpodcast.com.br/assets/images/carousel/d6f8d7a9-3c39-48b1-853d-6e0b344aecb3.png"},{id:3,image:"https://cdn.flowpodcast.com.br/assets/images/cortes/regras_092021.png"}];function He(){const[t,c]=d.exports.useState(0),s=$.length,p=()=>{c(t===s-1?0:t+1)},r=()=>{c(t===0?s-1:t-1)};return!Array.isArray($)||$.length<=0?null:(console.log($),a(Le,{children:[e("strong",{children:"Ol\xE1, Seja bem vindo(a)"}),a(Te,{children:[e(je,{onClick:r}),e(qe,{onClick:p}),$.map((o,l)=>e("div",{children:l===t&&e("img",{src:o.image,alt:"Banners Flow"})},l))]})]}))}const Ve=n.div`
    
`,Je=n.main`

    margin: 2rem 0 6rem 0;

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        h1 {
            font-size: 2rem;
            color: var(--gray-100);
        }
    }

`,_e=n.div`
    margin-top: 2rem;
`,Ge=n.div`

    background-color: var(--gray-700);
    border: 1px solid var(--gray-600);
    border-radius: 10px;

    display: flex;
    align-items: center;

    max-width: 800px;

    padding: 2rem;

    & + div {
        margin-top: 1rem;
    }

    img {
        width: 150px;
        height: 100px;
        margin-right: 16px;
    }

    div {

        gap: 1rem;
        flex: 1;

        .line-1 {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;

            a {
                font-size: 1.4rem;
            }
        }

        .line-2 {
            
            display: flex;
            justify-content: space-between;
            flex: 1;

            time {
                color: var(--gray-200);
            }
        }
    }

    @media(max-width: 1400px) {
        padding: 1rem;
    }

`,J=L`
    cursor: pointer;
`,Ue=n(le)`
    ${J}
    color: var(--gray-250);
    width: 50px;
    height: 50px;
`,We=n(de)`
    ${J}
    width: 28px;
    height: 28px;
    color: var(--orange-600);
`;function Xe({isOpen:t,onRequestClose:c,id:s,title:p,cover:r,duration:o,mp3:l,showButtonDeleteEpisodeSaved:f}){const{saved:g,setSaved:u}=S();let v=pe();function k(y){try{const h=[...g];if(g.find(b=>b.id===y))E.error("Esse epis\xF3dio j\xE1 est\xE1 salvo");else{const b={id:y,title:p,cover:r,duration:o,mp3:l};h.push(b),v("/saved"),E.success("Epis\xF3dio salvo")}u(h),localStorage.setItem("saveds",JSON.stringify(h))}catch(h){console.log(h)}}function I(y){try{const h=[...g],F=h.findIndex(b=>b.id===y);if(F>=0)h.splice(F,1),u(h),localStorage.setItem("saveds",JSON.stringify(h)),E.success("Epis\xF3dio deletado");else throw Error()}catch{E.error("Erro interno")}}return a(ue,{isOpen:t,onRequestClose:c,overlayClassName:"react-modal-overlay",className:"react-modal-content",ariaHideApp:!1,children:[e(A,{to:`/episode/${s}`,children:e("button",{className:"active",type:"button",children:"SABER MAIS SOBRE O EPIS\xD3DIO"})}),f&&e("button",{className:"active",type:"button",onClick:()=>I(s),children:"EXCLUIR DA LISTA DE SALVOS"}),!f&&e("button",{className:"active",type:"button",onClick:()=>k(s),children:"SALVAR EPIS\xD3DIO"})]})}function j({data:t,showButtonDeleteEpisodeSaved:c}){const{SelectedEpisode:s}=S(),[p,r]=d.exports.useState(!1);function o(){r(!0)}function l(){r(!1)}return console.log(t),a(Ge,{children:[e("img",{src:t==null?void 0:t.cover,alt:""}),a("div",{children:[a("div",{className:"line-1",children:[e("a",{href:"#",onClick:()=>s(t),children:t==null?void 0:t.title}),e(Ue,{onClick:o})]}),a("div",{className:"line-2",children:[e("time",{children:t==null?void 0:t.duration}),e(We,{onClick:()=>s(t)})]})]}),e(Xe,{id:t.id,title:t.title,cover:t.cover,duration:t.duration,mp3:t.mp3,isOpen:p,onRequestClose:l,showButtonDeleteEpisodeSaved:c})]})}function Ke(){const{episodes:t}=S();return a(Ve,{children:[e(He,{}),e(Je,{children:a("section",{children:[a("header",{children:[e("h1",{children:"\xDAltimos Epis\xF3dios"}),e(A,{to:"/episodes",children:"Ver todos"})]}),e(_e,{children:t.slice(0,2).map((c,s)=>e(j,{showButtonDeleteEpisodeSaved:!1,data:c},s))})]})})]})}const Qe=n.main`

    h1 {
        font-size: 2.4rem;
    }

    margin: 1rem 0 6rem 0;

`,Ye=n.section`
    margin-top: 2rem;
    
    button {
        margin-top: 1rem;
        width: 800px;
        padding: 1.6rem;
        font-size: 2rem;
    }
`;function Ze(){const{episodes:t,setEpisodes:c,nextEpisodes:s,setNextEpisodes:p}=S();function r(){T.post("episodes/list",{params:{filter:"episodes",paging:{previous:null,next:s}}}).then(o=>{const l=o.data.episodes;c([...t,...l]),p(o.data.paging.next)})}return a(Qe,{children:[e("header",{children:e("h1",{children:"Todos epis\xF3dios"})}),a(Ye,{children:[t.map(o=>e(j,{showButtonDeleteEpisodeSaved:!1,data:o},o.id)),e("button",{type:"button",className:"active",onClick:r,children:"CARREGAR PR\xD3XIMOS 9 EPIS\xD3DIOS"})]})]})}const et=n.header`

    margin-bottom: 32px;

    span {
        color: var(--gray-200);
    }
`,tt=n.main`
    margin: 2rem 0 6rem;
`;function rt(){const{saved:t}=S();return console.log(t),a(he,{children:[a(et,{children:[e("h1",{children:"Epis\xF3dios Salvos"}),a("span",{children:[t.length," ",t.length===1?"epis\xF3dio salvo":"epis\xF3dios salvos"]})]}),e(tt,{children:t.map(c=>e(j,{showButtonDeleteEpisodeSaved:!0,data:c},c.id))})]})}const ot=n.div`

    max-width: 700px;

    h1 {
        font-size: 2.5rem;
    }

`,nt=n.section`

    margin-top: 3rem;

    h2 {
        font-size: 2rem;
    }

    .infos-duration {
        margin-top: 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

        time, span {
            color: var(--gray-200);
        }
        
        span {
            margin-left: 16px;
        }
       
    }

    .line {
        margin: 2rem 0;
        border-top: 1px solid var(--gray-250);
    }

    p {
        color: var(--gray-150);
    }
    
`,it=n(ge)`
    width: 28px;
    height: 28px;
    color: var(--orange-800);

    cursor: pointer;
`;function at(){var o,l,f,g;const{SelectedEpisode:t}=S();let{id:c}=me();const[s,p]=d.exports.useState({});d.exports.useEffect(()=>{T.get(`episodes/view/${c}`).then(u=>{p(u.data)})},[]);function r(u){t({mp3:u.episode.mp3,cover:u.episode.cover})}return a(ot,{children:[e("h1",{children:"Saiba mais sobre o Epis\xF3dio"}),e("main",{children:a(nt,{children:[e("h2",{children:(o=s.episode)==null?void 0:o.title}),a("div",{className:"infos-duration",children:[a("div",{children:[e("time",{children:new Date((l=s.episode)==null?void 0:l.created_at).toLocaleDateString("pt-BR",{day:"2-digit",month:"long",year:"numeric"})}),e("span",{children:(f=s.episode)==null?void 0:f.duration})]}),e(it,{onClick:()=>r(s)})]}),e("div",{className:"line"}),e("p",{children:(g=s.episode)==null?void 0:g.description})]})})]})}function st(){return a(fe,{children:[e(R,{path:"/",element:e(Ke,{})}),e(R,{path:"/episodes",element:e(Ze,{})}),e(R,{path:"/saved",element:e(rt,{})}),e(R,{path:"/episode/:id",element:e(at,{})})]})}const ct=n.div`
    padding: 2rem 4rem;
    flex: 1;

    height: 100vh;
    overflow-y: auto;
`;function lt(){return e(ct,{children:e(st,{})})}function dt(){return e(Fe,{children:a($e,{children:[e(xe,{autoClose:3e3}),e(Pe,{}),e(ke,{}),e(Oe,{}),e(lt,{})]})})}ve.render(e(ye.StrictMode,{children:e(be,{children:e(dt,{})})}),document.getElementById("root"));
