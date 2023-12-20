let cartItemCount = 0;

function openCartModal() {
    const emptyCartModal = document.getElementById("emptyCartModal");
    if (cartItemCount === 0) {
        emptyCartModal.style.display = "block";
    } else {
        // Redirect to the cart page if items are added
        window.location.href = "cart.html";
    }
}

function closeCartModal() {
    const emptyCartModal = document.getElementById("emptyCartModal");
    emptyCartModal.style.display = "none";
}

function openQuantityModal() {
    const quantityModal = document.getElementById("quantityModal");
    quantityModal.style.display = "block";
}

function closeQuantityModal() {
    const quantityModal = document.getElementById("quantityModal");
    quantityModal.style.display = "none";
}

function addToCart() {
    const addedToCartModal = document.getElementById("addedToCartModal");
    const quantityInput = document.getElementById("quantityInput").value;

    // Update the cart item count
    cartItemCount += parseInt(quantityInput);
    document.getElementById("cartItemCount").innerText = cartItemCount;

    // Display "Товар додано" modal
    addedToCartModal.style.display = "block";
}

function closeAddedToCartModal() {
    const addedToCartModal = document.getElementById("addedToCartModal");
    addedToCartModal.style.display = "none";
}

function goToCart() {
    // Redirect to the cart page
    window.location.href = "cart.html";
}

function pay() {
    // Handle payment logic
}

function returnToShopping() {
    // Redirect to the main page or shopping page
    window.location.href = "index.html";
}

// Close modals if clicked outside the modal content
window.onclick = function (event) {
    const modals = document.getElementsByClassName("modal");
    for (const modal of modals) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
};
