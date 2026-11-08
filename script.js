const menuButton=document.querySelector('.menu-toggle');const nav=document.querySelector('.nav');menuButton?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));menuButton.textContent=open?'✕':'☰';});nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false');menuButton.textContent='☰';}));document.getElementById('year').textContent=new Date().getFullYear();

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

// A főoldali Kiemelt akta a napló JSON-adatainak legfrissebb bejegyzését mutatja.
(async()=>{try{const r=await fetch('diary-data.json',{cache:'no-cache'});if(!r.ok)return;const a=await r.json();if(!Array.isArray(a)||!a.length)return;a.sort((x,y)=>String(y.date||'').localeCompare(String(x.date||''))||String(y.number||'').localeCompare(String(x.number||'')));const e=a[0],box=document.querySelector('.feature'),link=document.getElementById('featured-diary-link');if(!box||!link)return;link.href='diary.html#'+encodeURIComponent(e.id);const img=box.querySelector('.feature-cover-photo');if(img){img.src=e.cover;img.alt=e.title;}const title=box.querySelector('.feature-copy h2');if(title)title.textContent=e.title;const desc=box.querySelector('.feature-copy p');if(desc)desc.textContent=e.excerpt||'';const tape=box.querySelector('.feature-copy .tape');if(tape)tape.textContent='GLITCH DIARY / '+e.number;const tag=box.querySelector('.panel-label span');if(tag)tag.textContent=e.number+' / CHAOS ARCHIVE';const stamp=box.querySelector('.feature-stamp');if(stamp)stamp.textContent=e.stamp||'GLITCH WAS HERE';}catch(e){}})();
