const menuButton=document.querySelector('.menu-toggle');const nav=document.querySelector('.nav');menuButton?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));menuButton.textContent=open?'✕':'☰';});nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false');menuButton.textContent='☰';}));document.getElementById('year').textContent=new Date().getFullYear();document.getElementById('vote-form')?.addEventListener('submit',e=>{e.preventDefault();document.getElementById('vote-result').textContent='SZAVAZAT RÖGZÍTVE… csak ebben a böngészőnézetben. A közös szavazás később érkezik!';});

const glitchQuotes=[
 '„A szabályokat elolvastam. Aztán úgy döntöttem, nem nekem írták őket.”',
 '„Nem keresem a bajt. Csak általában ugyanoda megyünk.”',
 '„Ha azt mondják, lehetetlen, én már a kerítést mászom.”',
 '„Nem vagyok rossz hatással másokra. Csak jó ötleteim vannak rossz időpontban.”',
 '„A káosz nem hiba a rendszerben. Én vagyok a rendszerhibád.”'
];
const quoteEl=document.getElementById('glitch-quote');
const quoteCount=document.getElementById('quote-count');
const quoteDots=document.getElementById('quote-dots');
let quoteIndex=0;
function showGlitchQuote(index){quoteIndex=(index+glitchQuotes.length)%glitchQuotes.length;if(quoteEl)quoteEl.textContent=glitchQuotes[quoteIndex];if(quoteCount)quoteCount.textContent=`${quoteIndex+1} / ${glitchQuotes.length}`;quoteDots?.querySelectorAll('button').forEach((b,i)=>b.setAttribute('aria-current',String(i===quoteIndex)));}
if(quoteDots){glitchQuotes.forEach((_,i)=>{const b=document.createElement('button');b.type='button';b.setAttribute('aria-label',`${i+1}. üzenet`);b.addEventListener('click',()=>showGlitchQuote(i));quoteDots.appendChild(b);});showGlitchQuote(0);}
document.getElementById('quote-prev')?.addEventListener('click',()=>showGlitchQuote(quoteIndex-1));
document.getElementById('quote-next')?.addEventListener('click',()=>showGlitchQuote(quoteIndex+1));
