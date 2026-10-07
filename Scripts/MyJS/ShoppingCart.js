document.addEventListener("DOMContentLoaded", function () {
    const cartItems = document.querySelectorAll(".cart-item");

    cartItems.forEach(item => {
        const minusBtn = item.querySelector(".btn-minus");
        const plusBtn = item.querySelector(".btn-plus");
        const qtyValElement = item.querySelector(".qty-val");
        const subtotalElement = item.querySelector(".item-subtotal");

        const originalPrice = parseFloat(item.getAttribute("data-price"));

        minusBtn.addEventListener("click", () => {
            let currentQty = parseInt(qtyValElement.textContent);
            if (currentQty > 1) {
                currentQty--;
                qtyValElement.textContent = currentQty;

                updateItemSubtotal(subtotalElement, originalPrice, currentQty);
                updateMainCartTotal();
            }
        });

        plusBtn.addEventListener("click", () => {
            let currentQty = parseInt(qtyValElement.textContent);
            currentQty++;
            qtyValElement.textContent = currentQty;

            updateItemSubtotal(subtotalElement, originalPrice, currentQty);
            updateMainCartTotal();
        });
    });

    function updateItemSubtotal(element, price, qty) {
        const subtotal = price * qty;
        element.textContent = subtotal.toFixed(2);
    }

    function updateMainCartTotal() {
        let totalItems = 0;
        let totalMoney = 0;

        const currentItems = document.querySelectorAll(".cart-item");
        currentItems.forEach(item => {
            const qty = parseInt(item.querySelector(".qty-val").textContent);
            const subtotal = parseFloat(item.querySelector(".item-subtotal").textContent);

            totalItems += qty;
            totalMoney += subtotal;
        });

        document.getElementById("cart-count").textContent = totalItems;
        document.getElementById("total-items").textContent = totalItems;
        document.getElementById("cart-total").textContent = totalMoney.toFixed(2);
    }

    updateMainCartTotal();
});