function reservation() {
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;
  const people = document.getElementById('people').value;

  const message = `Bonjour, je souhaite réserver au restaurant Guédalia :\nNom: ${name}\nTéléphone: ${phone}\nDate: ${date}\nHeure: ${time}\nNombre de personnes: ${people}`;
  const url = `https://wa.me/229XXXXXXXX?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
  return false;
}
