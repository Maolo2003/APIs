function obtenerProductosYCrearCartas() {
    const apiUrl = 'https://fakestore-maolo.onrender.com/products';
  
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const productosDiv = document.getElementById('productos');
  
        data.forEach((producto) => {
          const carta = document.createElement('div');
          carta.className = 'carta';
          carta.innerHTML = `
            <p><strong>Price:</strong> $${producto.price}</p>
            <p><strong>Category:</strong> ${producto.category}</p>
            <p><strong>Rating:</strong> ${producto.rating.rate} (based on ${producto.rating.count} ratings)</p>
            <img src="${producto.image}" alt="${producto.title}" />
          `;
          productosDiv.appendChild(carta);
        });
      })
      .catch((error) => {
        console.error('Error al obtener los productos:', error);
      });
  }
  
  window.addEventListener('load', obtenerProductosYCrearCartas);
  