// Botão "Voltar ao Topo"
document.querySelector('a.text-white').addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  