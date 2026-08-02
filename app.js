
(function(){
var S={g:412,r:18420,t:44.7,f:68,w:17};
var H=[["10a",18],["11a",42],["12p",78],["1p",95],["2p",88],["3p",102],["4p",74],["5p",55]];
var W=[["Johnson family",1840,"94d","High","Free pizza + 4 passes"],["Prairie View PTA",4200,"61d","Med","Group rate lock-in"],["Northside Softball",2900,"78d","High","Team night 20% off"],["Chen household",960,"112d","High","2x points weekend"]];
var L=[["Mon",62,8,8],["Tue",58,7,7],["Wed",71,8,9],["Thu",88,9,10],["Fri",110,11,13],["Sat",145,14,16],["Sun",128,13,14]];
var P=[["Emma R.",8,"Mar 14","Deposit",420],["Liam K.",7,"Mar 15","Inquiry",380],["Sophia T.",9,"Mar 21","Won",510],["Ava M.",10,"Mar 28","Radar",450]];
var A=[["Cold families 15-30mi","B3G1 wristbands","SMS+FB","+$2.1k"],["Birthday kids 7-10","$50 off deposit","Email+IG","+$4.4k"],["Corporate HR","Team night pkg","LinkedIn","+$3.2k"]];
var V=[["First Glow Night","Fri 8-11p",28,40,"Open"],["Pixel After-Hours","Sat 9p-12a",34,35,"Nearly full"]];
var OT=[["ops","Overview"],["winback","Win-back"],["labor","Labor"],["parties","Parties"],["ads","Ads"],["vip","VIP"]];
var AT=[["app","Wallet"],["rewards","Rewards"],["vote","Vote"]];
var page="home";
function go(p){page=p;render()}
function home(){
return '<div class="w"><div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:.8rem;margin-bottom:1.2rem"><div><div class="fd" style="font-weight:700;font-size:1.05rem">SC Fargo Command</div><div class="subtle">Built for Dan Bryant · Fargo, ND</div></div><span class="badge" style="background:#fff;border:1px solid var(--b);color:var(--m)">Confidential</span></div><span class="badge">7-point plan + 3 extras</span><h1>Perfect Fargo. Then buy parks and double revenue.</h1><p class="muted" style="max-width:34rem;margin-bottom:.9rem">Roller-connected intelligence, ads that pay, win-back, labor forecast, party radar, VIP + guest loyalty.</p><div style="display:flex;gap:.5rem;flex-wrap:wrap;margin-bottom:1.2rem"><button class="btn bp" data-go="ops">Operator command →</button><button class="btn bs" data-go="app">Guest loyalty app</button></div><div class="g">'+[["1. Roller data","Live tickets + food POS"],["2. Visitor intel","Groups, drive distance, mix"],["3. Outside signals","Weather, schools, competitors"],["4. Ads that pay","Who, offer, channel, lift"],["5. Track & tweak","Live ROI, re-score"],["6-7. Loyalty + VIP","Points, votes, glow nights"]].map(function(x){return '<div class="card"><div class="fd" style="font-size:.88rem;margin-bottom:.25rem">'+x[0]+'</div><p class="muted" style="font-size:.8rem">'+x[1]+'</p></div>'}).join('')+'</div></div>';
}
function shell(title,sub,tabs,body){
return '<div class="w"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:.9rem;flex-wrap:wrap;gap:.4rem"><div><div class="fd" style="font-weight:700">'+title+'</div><div class="subtle">'+sub+'</div></div><button class="btn bs" data-go="home" style="padding:.35rem .7rem;font-size:.78rem">← Home</button></div><div class="nav">'+tabs.map(function(t){return '<button class="'+(page===t[0]?'on':'')+'" data-go="'+t[0]+'">'+t[1]+'</button>'}).join('')+'</div>'+body+'</div>';
}
function body(){
if(page==='ops')return '<div class="g" style="margin-bottom:.9rem"><div class="card"><div class="sv">'+S.g+'</div><div class="sl">Guests today</div></div><div class="card"><div class="sv">$'+S.r.toLocaleString()+'</div><div class="sl">Revenue</div></div><div class="card"><div class="sv">$'+S.t+'</div><div class="sl">Avg ticket</div></div><div class="card"><div class="sv">'+S.f+'%</div><div class="sl">Food attach</div></div></div><div class="card"><div class="fd" style="margin-bottom:.6rem">Hourly traffic</div>'+H.map(function(h){return '<div class="bar"><div class="bl">'+h[0]+'</div><div class="bt"><div class="bf" style="width:'+h[1]+'%"></div></div><div class="bv">'+h[1]+'</div></div>'}).join('')+'</div>';
if(page==='winback')return '<p class="muted" style="margin-bottom:.7rem">'+S.w+' high-LTV accounts cooling off</p><div class="card" style="overflow:auto"><table><tr><th>Account</th><th>LTV</th><th>Last</th><th>Risk</th><th>Offer</th></tr>'+W.map(function(w){return '<tr><td style="font-weight:700">'+w[0]+'</td><td>$'+w[1].toLocaleString()+'</td><td>'+w[2]+'</td><td><span class="pill">'+w[3]+'</span></td><td>'+w[4]+'</td></tr>'}).join('')+'</table></div>';
if(page==='labor')return '<div class="card" style="overflow:auto"><table><tr><th>Day</th><th>Demand</th><th>Staff</th><th>Need</th><th>Status</th></tr>'+L.map(function(l){var g=l[3]-l[2];return '<tr><td style="font-weight:700">'+l[0]+'</td><td>'+l[1]+'</td><td>'+l[2]+'</td><td>'+l[3]+'</td><td><span class="pill '+(g>0?'':'ok')+'">'+(g>0?('+'+g+' needed'):'Covered')+'</span></td></tr>'}).join('')+'</table></div>';
if(page==='parties')return '<div class="card" style="overflow:auto"><table><tr><th>Kid</th><th>Age</th><th>Date</th><th>Stage</th><th>Value</th></tr>'+P.map(function(p){return '<tr><td style="font-weight:700">'+p[0]+'</td><td>'+p[1]+'</td><td>'+p[2]+'</td><td>'+p[3]+'</td><td>$'+p[4]+'</td></tr>'}).join('')+'</table></div>';
if(page==='ads')return '<div class="g">'+A.map(function(a){return '<div class="card"><div style="display:flex;justify-content:space-between;gap:.4rem"><strong style="font-size:.85rem">'+a[0]+'</strong><span class="pill ok">'+a[3]+'</span></div><p class="muted" style="font-size:.8rem;margin-top:.35rem">'+a[1]+' · '+a[2]+'</p></div>'}).join('')+'</div>';
if(page==='vip')return '<div class="g">'+V.map(function(v){return '<div class="card"><div class="fd" style="font-size:.92rem">'+v[0]+'</div><div class="subtle">'+v[1]+'</div><div style="font-weight:700;margin:.35rem 0">'+v[2]+'/'+v[3]+' RSVPs</div><span class="pill ok">'+v[4]+'</span></div>'}).join('')+'</div>';
if(page==='app')return '<div class="g"><div class="card"><div class="sv">1,240</div><div class="sl">Points</div></div><div class="card"><div class="sv">Gold</div><div class="sl">Tier</div></div><div class="card"><div class="sv">$62</div><div class="sl">Avg spend</div></div><div class="card"><div class="sv">4</div><div class="sl">Visits / mo</div></div></div>';
if(page==='rewards')return '<div class="g"><div class="card"><strong>Free slime upgrade</strong><div class="subtle">200 pts · Owned</div></div><div class="card"><strong>Pizza slice</strong><div class="subtle">350 pts</div></div><div class="card"><strong>Guest pass</strong><div class="subtle">800 pts</div></div></div>';
if(page==='vote')return '<div class="card"><div class="fd" style="margin-bottom:.6rem">What should we build next?</div>'+[["New glow slide",142],["Pixel hole 7",98],["Foam pit",87]].map(function(n){return '<div class="bar"><div class="bl" style="width:7.5rem">'+n[0]+'</div><div class="bt"><div class="bf" style="width:'+Math.min(100,n[1]/1.5)+'%"></div></div><div class="bv">'+n[1]+'</div></div>'}).join('')+'</div>';
return '';
}
function render(){
var el=document.getElementById('app');if(!el)return;
if(page==='home')el.innerHTML=home();
else if(page==='app'||page==='rewards'||page==='vote')el.innerHTML=shell('SC Fargo · Guest app','Loyalty · rewards · votes',AT,body());
else el.innerHTML=shell('SC Fargo · Operator command','Park intelligence for Dan Bryant',OT,body());
[].forEach.call(el.querySelectorAll('[data-go]'),function(b){b.onclick=function(){go(b.getAttribute('data-go'))}});
}
render();
})();
