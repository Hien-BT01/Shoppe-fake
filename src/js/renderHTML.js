export function loadContent(products, element) {
  let productContent = "";
  products.forEach((product) => {
    const { img, text } = product;
    productContent += `<a class="product">
                  <div class="product-img">
                      <img src="${img}" alt="product-image">
                  </div>
              <p class="desc-product">${text}</p>
          </a>`;
  });
  element.innerHTML = productContent;
}

export function loadTopSearchProducts(products, element) {
  let html = "";
  products.forEach((product) => {
    const { img, quantity, desc } = product;
    html += `
        <a href="#" class="top-search__product">
              <div class="top-search__product__img">
                <div>
                  <img src="${img}" alt="product">
                </div>
                <div class="quantity">
                  <span>Bán ${quantity}k+ / tháng</span>
                </div>
              </div>
              <p class="top-search__product__desc">${desc}</p>
              <div class="top-brand">
                <span>Top</span>
              </div>
            </a>
        `;
  });
  element.innerHTML = html;
}
