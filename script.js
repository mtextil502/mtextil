// LISTA DE PRODUCTOS (Aquí puedes agregar o editar tus productos)
const products = [
    { 
        id: 1, 
        name: "Boxer Corto de Caballero Probox", 
        category: "caballero", 
        pack: "Talla Única (Varios diseños)",
        price: "Cotizar por volumen",
        images: ["imagenes/boxer/caballero/boxercorto/35/bch371.jpg",
                 "imagenes/boxer/caballero/boxercorto/35/bch372.jpg",
                 "imagenes/boxer/caballero/boxercorto/35/bch373.jpg",
                 "imagenes/boxer/caballero/boxercorto/35/bch374.jpg",
                 "imagenes/boxer/caballero/boxercorto/35/bch375.jpg"
                ],
      description: "Bóxer corto de caballero marca Probox confeccionado en tela microfibra de alta elasticidad y secado rápido. Diseño anatómico con elástico reforzado en la cintura.",
        specs: [
                  
                  "Talla: Talla Única adaptable (S a L)",
                  "Composición: 90% Poliéster / 10% Elastano",
                  "Colores en el paquete: Azul, Verde Oliva, Gris, Guinda, Negro",
                  "Venta mínima: Desde 5 docenas surtidas"
                ]
    },
   { 
        id: 2, 
        name: "Boxer largo de Caballero Probox", 
        category: "caballero", 
        pack: "Talla Única (Varios diseños)", 
        price: "Cotizar por volumen",
        images: ["imagenes/boxer/caballero/boxerlargo/45/BL451.jpg",
                 "imagenes/boxer/caballero/boxerlargo/45/BL452.jpg"
                ],
      description: "Bóxer largo de caballero marca Probox confeccionado en tela microfibra de alta elasticidad y secado rápido. Diseño anatómico con elástico reforzado en la cintura.",
        specs: [          
                  "Talla: Talla Única adaptable (S a L)",
                  "Composición: 90% Poliéster / 10% Elastano",
                  "Colores en el paquete: Azul, Verde Oliva, Gris, Guinda, Negro",
                  "Venta mínima: Desde 5 docenas surtidas"
                ]
    },
    { 
        id: 3, 
        name: "calsetin corto de algodon de hombre", 
        category: "caballero", 
        pack: "Talla 10-13",
        price: "Cotizar por volumen",
        images: ["imagenes/calsetines/caballero/calsetindealgodon/10-13/corto/27/NC27.jpg",
                 "imagenes/calsetines/caballero/calsetindealgodon/10-13/corto/27/BC27.jpg",
                 "imagenes/calsetines/caballero/calsetindealgodon/10-13/corto/27/CC27.jpg",
                 "imagenes/calsetines/caballero/calsetindealgodon/10-13/corto/27/AC27.jpg",
                ],
      description: "Calcetin corto de caballero confeccionado en algodon de calidad.",
        specs: [
                  
                  "Talla: Talla(10-13)",
                  "Composición: 98% algodon",
                  "Colores: Azul, Negro, Gris, blanco, pak de clores",
                  "Venta mínima: Desde 5 docenas surtidas"
                ]
    },
        { 
        id: 4, 
        name: "calsetin largo de algodon de hombre", 
        category: "caballero", 
        pack: "Talla 10-13",
        price: "Cotizar por volumen",
        images: ["imagenes/calsetines/caballero/calsetindealgodon/10-13/largo/27/NL27.jpeg",
                 "imagenes/calsetines/caballero/calsetindealgodon/10-13/largo/27/BL27.jpeg",
                 "imagenes/calsetines/caballero/calsetindealgodon/10-13/largo/27/CL27.jpeg",
                 "imagenes/calsetines/caballero/calsetindealgodon/10-13/largo/27/AL27.jpeg",
                ],
      description: "Calcetin corto de caballero confeccionado en algodon de calidad.",
        specs: [
                  
                  "Talla: Talla(10-13)",
                  "Composición: 98% algodon",
                  "Colores: Azul, Negro, Gris, blanco, pak de colores",
                  "Venta mínima: Desde 5 docenas surtidas"
                ]
    },
    { 
        id: 5, 
        name: "calsetin corto de poliester de hombre", 
        category: "caballero", 
        pack: "Talla 10-13",
        price: "Cotizar por volumen",
        images: ["imagenes/calsetines/caballero/poliester/10-13/corto/12/bd.jpeg",
                 "imagenes/calsetines/caballero/poliester/10-13/corto/12/bt.jpeg",
                 "imagenes/calsetines/caballero/poliester/10-13/corto/12/nd.jpeg",
                 "imagenes/calsetines/caballero/poliester/10-13/corto/12/nt.jpeg",
                 "imagenes/calsetines/caballero/poliester/10-13/corto/12/c.jpeg",
                ],
      description: "Calcetin corto de caballero confeccionado en poliester.",
        specs: [
                  
                  "Talla: Talla  (10-13)",
                  "Composición: 98% poliester",
                  "Colores: Negro, blanco, pak de clores",
                  "Venta mínima: Desde 5 docenas surtidas"
                ]
    },
    { 
        id: 6, 
        name: "calsetin corto de niño 8-10", 
        category: "niños", 
        pack: "Talla 8-10",
        price: "Cotizar por volumen",
        images: ["imagenes/calsetines/niño/poliester/8-10/corto/12/cd.jpeg",
                 "imagenes/calsetines/niño/poliester/8-10/corto/12/ct.jpeg",
                ],
      description: "Calcetin corto de niño confeccionado en poliester.",
        specs: [
                  
                  "Talla: Talla  (8-10)",
                  "Composición: 98% poliester",
                  "Colores: pak de clores",
                  "Venta mínima: Desde 5 docenas surtidas"
                ]
    },
   { 
        id: 7, 
        name: "calsetin corto de niño 2-4", 
        category: "niños", 
        pack: "Talla 2-4",
        price: "Cotizar por volumen",
        images: ["imagenes/calsetines/niño/poliester/2-4/corto/12/cd.jpeg",
                 "imagenes/calsetines/niño/poliester/2-4/corto/12/ct.jpeg",
                ],
      description: "Calcetin corto de niño confeccionado en poliester.",
        specs: [
                  
                  "Talla: Talla  (2-4)",
                  "Composición: 98% poliester",
                  "Colores: pak de clores",
                  "Venta mínima: Desde 5 docenas surtidas"
                ]
    },
    { 
        id: 8, 
        name: "calsetin corto de niño 4-6", 
        category: "niños", 
        pack: "Talla 4-6",
        price: "Cotizar por volumen",
        images: ["imagenes/calsetines/niño/poliester/4-6/corto/12/cd.jpeg",
                 "imagenes/calsetines/niño/poliester/4-6/corto/12/ct.jpeg",
                ],
      description: "Calcetin corto de niño confeccionado en poliester.",
        specs: [
                  
                  "Talla: Talla  (4-6)",
                  "Composición: 98% poliester",
                  "Colores: pak de clores",
                  "Venta mínima: Desde 5 docenas surtidas"
                ]
    },
    { 
        id: 9, 
        name: "calsetin corto de niña 4-6", 
        category: "niños", 
        pack: "Talla 4-6",
        price: "Cotizar por volumen",
        images: ["imagenes/calsetines/niña/poliester/4-6/corto/12/c.jpeg",
                 "imagenes/calsetines/niña/poliester/4-6/corto/12/cd.jpeg",
                ],
      description: "Calcetin corto de niña confeccionado en poliester.",
        specs: [
                  
                  "Talla: Talla  (4-6)",
                  "Composición: 98% poliester",
                  "Colores: pak de clores",
                  "Venta mínima: Desde 5 docenas surtidas"
                ]
    },
 ];

// Función para mostrar los productos en pantalla
function renderProducts(items) {
    const container = document.getElementById('productContainer');
    if(!container) return; // Si no existe el contenedor, salimos

    container.innerHTML = '';
  
    items.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';

      // Detecta si hay fotos en la lista 'images'; si no, pone la imagen por defecto
        const mainImage = (product.images && product.images.length > 0) 
            ? product.images[0] 
            : 'https://via.placeholder.com/300x250?text=Sin+Imagen';
      
        card.innerHTML = `
            <div class="product-img-wrapper">
                <img src="${mainImage}" alt="${product.name}" class="product-img-file" onerror="this.src='https://via.placeholder.com/300x250?text=Sin+Imagen'">
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-meta">Presentación: ${product.pack}</p>
                <div class="product-price">${product.price}</div>
                <!-- Redirige a producto.html con el ID correspondiente -->
                <button class="btn-quote" onclick="goToProductDetail(${product.id})">Ver Detalle y Cotizar</button>
            </div>
        `;
        container.appendChild(card);
    });
}

// Redirecciona a la página de detalle
function goToProductDetail(productId) {
    window.location.href = `producto.html?id=${productId}`;
}

// Función para el filtro de categorías (Dama, Caballero, Niños)
function filterProducts(category) {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    if(event) event.target.classList.add('active');

    if (category === 'todos') {
        renderProducts(products);
    } else {
        const filtered = products.filter(p => p.category === category);
        renderProducts(filtered);
    }
}

// Función para enviar mensaje por WhatsApp
function sendWhatsapp(productName) {
    const phone = "50241310872"; // Reemplaza con tu número de WhatsApp
    const message = encodeURIComponent(`Hola M-Textil, me interesa solicitar una cotización al por mayor del producto: ${productName}`);
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
}

// Cargar catálogo cuando la página esté lista
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);
});
