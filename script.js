document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', function (e) {
    e.preventDefault();

    // Haal productgegevens op
    const name = this.dataset.name;
    const price = parseFloat(this.dataset.price);

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Voeg product toe aan winkelmandje
    cart.push({ name, price });

    // Sla winkelmandje op
    localStorage.setItem('cart', JSON.stringify(cart));

    alert(`${name} is toegevoegd aan je winkelmandje.`);
  });
});
