const p=document.getElementById('panel'),c=document.getElementById('game'),x=c.getContext('2d'),t=document.getElementById('title');let px=380,py=210,keys={};
onkeydown=e=>keys[e.key.toLowerCase()]=1;onkeyup=e=>keys[e.key.toLowerCase()]=0;
function play(n){t.textContent=n;p.hidden=false;px=380;py=210;requestAnimationFrame(loop)}
function closeGame(){p.hidden=true}
function loop(){if(p.hidden)return;x.fillStyle='#111';x.fillRect(0,0,760,420);x.fillStyle='#222';for(let i=0;i<760;i+=70)x.fillRect(i,0,35,420);x.fillStyle='#ffd84d';x.font='bold 24px Arial';x.fillText('GOLDEN GAMING',20,35);if(keys.a||keys.arrowleft)px-=4;if(keys.d||keys.arrowright)px+=4;if(keys.w||keys.arrowup)py-=4;if(keys.s||keys.arrowdown)py+=4;px=Math.max(20,Math.min(740,px));py=Math.max(55,Math.min(395,py));x.fillStyle='#35a900';x.fillRect(px-18,py-18,36,36);x.fillStyle='#fff';x.fillText('★',px-9,py+9);requestAnimationFrame(loop)}
