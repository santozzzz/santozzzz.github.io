document.addEventListener('keyup', e => {
   if (e.target.matches('#buscador')){
    document.querySelectorAll('.item').forEach(tenis => {
      tenis.textContent.toLowerCase().includes(e.target.value)
      ? tenis.classList.remove('filtro')
      : tenis.classList.add('filtro');
    })
   }
})