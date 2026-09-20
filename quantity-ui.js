(() => {
  const enhance=()=>document.querySelectorAll('.library-item').forEach(item=>{if(item.querySelector('.plant-qty'))return;const qty=document.createElement('input');qty.className='plant-qty';qty.type='number';qty.min='1';qty.max='99';qty.value='1';qty.setAttribute('aria-label','Liczba roślin');item.insertBefore(qty,item.querySelector('.add-plant'))});
  window.addEventListener('load',enhance);new MutationObserver(enhance).observe(document.body,{childList:true,subtree:true});
  document.addEventListener('click',e=>{const button=e.target.closest('.library-item[data-add]');if(!button||e.target.closest('.plant-qty')||button.dataset.bulk==='1')return;const qty=Math.max(1,Math.min(99,Number(button.querySelector('.plant-qty')?.value)||1));if(qty===1)return;button.dataset.bulk='1';for(let i=0;i<qty;i++)button.click();delete button.dataset.bulk;e.stopImmediatePropagation()},{capture:true});
})();
