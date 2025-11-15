// =============================================
// SECTION 1: CART MANAGEMENT FUNCTIONS
// =============================================

/**
 * GET CART - Retrieves cart data from localStorage
 */
function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

/**
 * SAVE CART - Saves cart data to localStorage and updates counter
 */
function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCounter();
}

/**
 * ADD TO CART - Adds a product to the cart
 */
function addToCart(productId, variantIndex = 0, size = null) {
    const product = products.find(p => p.id === productId);
    if (!product) {
        console.error('Product not found:', productId);
        return;
    }

    const variant = product.variants[variantIndex];
    const selectedSize = size || variant.sizes[0];

    const cart = getCart();
    const existingItem = cart.find(item => 
        item.productId === productId && 
        item.variantIndex === variantIndex && 
        item.size === selectedSize
    );

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            productId: productId,
            variantIndex: variantIndex,
            title: product.title,
            price: product.price,
            priceValue: product.priceValue,
            image: variant.mainImage,
            variantName: variant.name,
            size: selectedSize,
            quantity: 1
        });
    }

    saveCart(cart);
    showAddToCartNotification();
}

/**
 * REMOVE FROM CART - Removes an item from cart by index
 */
function removeFromCart(index) {
    const cart = getCart();
    cart.splice(index, 1);
    saveCart(cart);
    
    // Refresh cart page if on cart page
    if (window.location.pathname.includes('cart.html')) {
        displayCart();
    }
}

/**
 * UPDATE CART QUANTITY - Updates quantity of cart item
 */
function updateCartQuantity(index, quantity) {
    const cart = getCart();
    if (quantity <= 0) {
        removeFromCart(index);
    } else {
        cart[index].quantity = quantity;
        saveCart(cart);
        
        // Refresh cart page if on cart page
        if (window.location.pathname.includes('cart.html')) {
            displayCart();
        }
    }
}

/**
 * UPDATE CART COUNTER - Updates the cart icon counter in header
 */
function updateCartCounter() {
    const cart = getCart();
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const counter = document.querySelector('.cart-counter');
    
    if (counter) {
        counter.textContent = totalItems;
        if (totalItems > 0) {
            counter.style.display = 'flex';
        } else {
            counter.style.display = 'none';
        }
    }
}

/**
 * SHOW ADD TO CART NOTIFICATION - Displays success notification
 */
function showAddToCartNotification() {
    // Remove any existing notification
    const existingNotification = document.querySelector('.cart-notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    const notification = document.createElement('div');
    notification.className = 'cart-notification';
    notification.innerHTML = '<i class="fas fa-check-circle"></i> Added to cart!';
    document.body.appendChild(notification);
    
    setTimeout(() => notification.classList.add('show'), 100);
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// =============================================
// SECTION 2: PRODUCT GALLERY FUNCTIONS
// =============================================

let currentCategory = 'All';
let currentSearchTerm = '';

/**
 * DISPLAY PRODUCTS - Renders products with filter and search
 */
function displayProducts(category = 'All', searchTerm = '') {
    console.log('displayProducts called - Category:', category, 'Search:', searchTerm);
    
    const productList = document.querySelector('.product-list');
    if (!productList) {
        console.log('Product list not found - not on product page');
        return;
    }

    currentCategory = category;
    currentSearchTerm = searchTerm.toLowerCase().trim();

    // Filter by category
    let filteredProducts = category === 'All' 
        ? products 
        : products.filter(product => product.category === category);

    // Filter by search term
    if (currentSearchTerm) {
        filteredProducts = filteredProducts.filter(product => {
            return product.title.toLowerCase().includes(currentSearchTerm) ||
                   product.description.toLowerCase().includes(currentSearchTerm) ||
                   product.category.toLowerCase().includes(currentSearchTerm) ||
                   product.shortDescription.toLowerCase().includes(currentSearchTerm);
        });
    }

    console.log('Filtered products:', filteredProducts.length);

    // Clear existing products
    productList.innerHTML = '';

    // Display message if no products found
    if (filteredProducts.length === 0) {
        productList.innerHTML = `
            <div style="text-align: center; width: 100%; padding: 3rem; grid-column: 1 / -1;">
                <i class="fas fa-search" style="font-size: 3rem; color: #ccc; margin-bottom: 1rem;"></i>
                <p style="font-size: 1.2rem; color: #666;">
                    ${currentSearchTerm ? `No products found for "${currentSearchTerm}"` : 'No products found in this category.'}
                </p>
            </div>
        `;
        return;
    }

    // Render product cards
    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="img-box" data-product-id="${product.id}">
                <img src="${product.variants[0].mainImage}" alt="${product.title}">
            </div>
            <div class="product-info-text">
                <h2 class="title">${product.title}</h2>
                <span class="price">${product.price}</span>
                <button class="btn-add-to-cart" data-product-id="${product.id}">
                    <i class="fas fa-shopping-cart"></i> Add to Cart
                </button>
            </div>
        `;
        
        productList.appendChild(productCard);

        // Navigate to product detail on image/title click
        const imgBox = productCard.querySelector('.img-box');
        const title = productCard.querySelector('.title');
        
        [imgBox, title].forEach(element => {
            element.style.cursor = 'pointer';
            element.addEventListener('click', () => {
                sessionStorage.setItem('selectedProductId', product.id);
                window.location.href = 'productdetail.html';
            });
        });

        // Add to cart on button click
        const addBtn = productCard.querySelector('.btn-add-to-cart');
        addBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            addToCart(product.id);
        });
    });
    
    console.log('Products displayed successfully!');
}

/**
 * HANDLE SEARCH - Processes search input
 */
function handleSearch() {
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        displayProducts(currentCategory, searchInput.value);
    }
}

// =============================================
// SECTION 3: PRODUCT DETAIL PAGE FUNCTIONS
// =============================================

let selectedVariantIndex = 0;
let selectedSize = null;

/**
 * DISPLAY PRODUCT DETAIL - Renders product detail page
 */
function displayProductDetail() {
    const productId = parseInt(sessionStorage.getItem('selectedProductId'));
    
    if (!productId) {
        console.error('No product ID found in session storage');
        alert('No product selected. Redirecting to shop...');
        window.location.href = 'product.html';
        return;
    }

    const product = products.find(p => p.id === productId);
    
    if (!product) {
        console.error('Product not found with ID:', productId);
        alert('Product not found. Redirecting to shop...');
        window.location.href = 'product.html';
        return;
    }

    console.log('Displaying product:', product.title);

    // Set initial selected size
    selectedSize = product.variants[0].sizes[0];

    // Basic Info
    document.getElementById('productTitle').textContent = product.title;
    document.getElementById('productPrice').textContent = product.price;
    document.getElementById('productShortDesc').textContent = product.shortDescription || '';
    document.getElementById('breadcrumb-product').textContent = product.title;
    
    // Description
    const descriptionElement = document.getElementById('productDescription');
    if (descriptionElement) {
        descriptionElement.textContent = product.description;
    }

    // Features
    const featuresList = document.getElementById('productFeatures');
    const featuresSection = document.querySelector('.product-features-section');
    if (featuresList && product.features && product.features.length > 0) {
        featuresList.innerHTML = '';
        product.features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            featuresList.appendChild(li);
        });
        if (featuresSection) featuresSection.style.display = 'block';
    } else if (featuresSection) {
        featuresSection.style.display = 'none';
    }

    // Materials
    const materialsList = document.getElementById('productMaterials');
    const materialsSection = document.querySelector('.product-materials-section');
    if (materialsList && product.materials && product.materials.length > 0) {
        materialsList.innerHTML = '';
        product.materials.forEach(material => {
            const li = document.createElement('li');
            li.textContent = material;
            materialsList.appendChild(li);
        });
        if (materialsSection) materialsSection.style.display = 'block';
    } else if (materialsSection) {
        materialsSection.style.display = 'none';
    }

    // Ideal For
    const idealList = document.getElementById('productIdeal');
    const idealSection = document.querySelector('.product-ideal-section');
    if (idealList && product.idealFor && product.idealFor.length > 0) {
        idealList.innerHTML = '';
        product.idealFor.forEach(use => {
            const li = document.createElement('li');
            li.textContent = use;
            idealList.appendChild(li);
        });
        if (idealSection) idealSection.style.display = 'block';
    } else if (idealSection) {
        idealSection.style.display = 'none';
    }

    // Sizing & Fit (if exists)
    const sizingSection = document.getElementById('sizingSection');
    const sizingList = document.getElementById('productSizing');
    if (sizingList && product.sizingFit && product.sizingFit.length > 0) {
        sizingList.innerHTML = '';
        product.sizingFit.forEach(info => {
            const li = document.createElement('li');
            li.textContent = info;
            sizingList.appendChild(li);
        });
        if (sizingSection) sizingSection.style.display = 'block';
    } else if (sizingSection) {
        sizingSection.style.display = 'none';
    }

    // Care Instructions
    const careList = document.getElementById('productCare');
    const careSection = document.querySelector('.product-care-section');
    if (careList && product.careInstructions && product.careInstructions.length > 0) {
        careList.innerHTML = '';
        product.careInstructions.forEach(instruction => {
            const li = document.createElement('li');
            li.textContent = instruction;
            careList.appendChild(li);
        });
        if (careSection) careSection.style.display = 'block';
    } else if (careSection) {
        careSection.style.display = 'none';
    }

    // Variant Colors
    const colorOptions = document.querySelector('.color-options');
    const variantSection = document.getElementById('variantSelection');
    
    if (colorOptions) {
        colorOptions.innerHTML = '';
        
        if (product.variants.length > 1) {
            product.variants.forEach((variant, index) => {
                const colorBtn = document.createElement('button');
                colorBtn.className = 'color-btn' + (index === 0 ? ' active' : '');
                colorBtn.textContent = variant.name;
                colorBtn.addEventListener('click', () => selectVariant(product, index));
                colorOptions.appendChild(colorBtn);
            });
            if (variantSection) variantSection.style.display = 'block';
        } else {
            if (variantSection) variantSection.style.display = 'none';
        }
    }

    // Update images and sizes
    updateVariantDisplay(product);

    // Setup action buttons with proper error handling
    const addToCartBtn = document.getElementById('addToCartBtn');
    const buyNowBtn = document.getElementById('buyNowBtn');
    
    if (addToCartBtn) {
        addToCartBtn.onclick = function() {
            console.log('Add to cart clicked:', product.id, selectedVariantIndex, selectedSize);
            addToCart(product.id, selectedVariantIndex, selectedSize);
        };
    }

    if (buyNowBtn) {
        buyNowBtn.onclick = function() {
            console.log('Buy now clicked:', product.id, selectedVariantIndex, selectedSize);
            // Use quick checkout instead of going to cart
            quickCheckout(product.id, selectedVariantIndex, selectedSize);
        };
    }

    console.log('Product detail page fully loaded');
}

/**
 * UPDATE VARIANT DISPLAY - Updates images and sizes when variant changes
 */
function updateVariantDisplay(product) {
    const variant = product.variants[selectedVariantIndex];

    console.log('Updating variant display:', variant.name);

    // Update main image
    const mainImage = document.getElementById('mainImage');
    if (mainImage) {
        mainImage.src = variant.mainImage;
        mainImage.alt = product.title + ' - ' + variant.name;
        
        // Add loading state
        mainImage.style.opacity = '0.5';
        mainImage.onload = function() {
            mainImage.style.opacity = '1';
        };
    }

    // Update thumbnails
    const thumbnailList = document.querySelector('.thumbnail-list');
    if (thumbnailList) {
        thumbnailList.innerHTML = '';
        
        const allImages = [variant.mainImage, ...variant.thumbnails];
        allImages.forEach((imgSrc, index) => {
            const thumb = document.createElement('img');
            thumb.src = imgSrc;
            thumb.className = 'thumbnail' + (index === 0 ? ' active' : '');
            thumb.alt = `${product.title} - ${variant.name} view ${index + 1}`;
            thumb.addEventListener('click', () => {
                // Update main image
                if (mainImage) {
                    mainImage.style.opacity = '0.5';
                    mainImage.src = imgSrc;
                }
                
                // Update active thumbnail
                document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
                thumb.classList.add('active');
            });
            thumbnailList.appendChild(thumb);
        });
    }

    // Update size options
    const sizeOptions = document.querySelector('.size-options');
    if (sizeOptions) {
        sizeOptions.innerHTML = '';
        
        variant.sizes.forEach((size, index) => {
            const sizeBtn = document.createElement('button');
            sizeBtn.className = 'size-btn' + (index === 0 ? ' active' : '');
            sizeBtn.textContent = size;
            sizeBtn.addEventListener('click', () => selectSize(size, sizeBtn));
            sizeOptions.appendChild(sizeBtn);
        });
    }

    // Reset selected size to first available
    selectedSize = variant.sizes[0];
    console.log('Variant display updated. Selected size:', selectedSize);
}

/**
 * SELECT VARIANT - Changes the active variant
 */
function selectVariant(product, index) {
    selectedVariantIndex = index;
    
    // Update active color button
    document.querySelectorAll('.color-btn').forEach((btn, i) => {
        btn.classList.toggle('active', i === index);
    });
    
    updateVariantDisplay(product);
}

/**
 * SELECT SIZE - Changes the selected size
 */
function selectSize(size, button) {
    selectedSize = size;
    
    // Update active size button
    document.querySelectorAll('.size-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    button.classList.add('active');
}

// =============================================
// SECTION 4: CART PAGE FUNCTIONS
// =============================================

/**
 * DISPLAY CART - Renders the shopping cart page
 */
function displayCart() {
    const cartContent = document.getElementById('cartContent');
    if (!cartContent) return;

    const cart = getCart();

    if (cart.length === 0) {
        cartContent.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <h2>Your Cart is Empty</h2>
                <p>Looks like you haven't added anything to your cart yet.</p>
                <a href="product.html" class="btn-primary">Start Shopping</a>
            </div>
        `;
        return;
    }

    // Calculate totals
    const subtotal = cart.reduce((sum, item) => sum + (item.priceValue * item.quantity), 0);
    const shipping = subtotal > 5000 ? 0 : 150; // Free shipping over ₱5000
    const total = subtotal + shipping;

    cartContent.innerHTML = `
        <div class="cart-container">
            <!-- Cart Items -->
            <div class="cart-items-section">
                <h2>Cart Items (${cart.reduce((sum, item) => sum + item.quantity, 0)})</h2>
                <div id="cartItemsList"></div>
            </div>

            <!-- Cart Summary -->
            <div class="cart-summary">
                <h2>Order Summary</h2>
                <div class="summary-row">
                    <span>Subtotal:</span>
                    <span>₱${subtotal.toLocaleString()}.00</span>
                </div>
                <div class="summary-row">
                    <span>Shipping:</span>
                    <span>${shipping === 0 ? 'FREE' : '₱' + shipping + '.00'}</span>
                </div>
                ${shipping > 0 ? `<p style="font-size: 0.85rem; color: #666; margin-top: 0.5rem;">Add ₱${(5000 - subtotal).toLocaleString()}.00 more for free shipping!</p>` : ''}
                <div class="summary-row total">
                    <span>Total:</span>
                    <span class="amount">₱${total.toLocaleString()}.00</span>
                </div>
                <button class="checkout-btn" onclick="proceedToCheckout()">
                    <i class="fas fa-lock"></i> Proceed to Checkout
                </button>
                <button class="continue-shopping-btn" onclick="window.location.href='product.html'">
                    Continue Shopping
                </button>
            </div>
        </div>
    `;

    // Render cart items
    const cartItemsList = document.getElementById('cartItemsList');
    cart.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.title}" class="cart-item-image">
            <div class="cart-item-details">
                <h3>${item.title}</h3>
                <p>Color: ${item.variantName}</p>
                <p>Size: ${item.size}</p>
                <p class="cart-item-price">${item.price}</p>
            </div>
            <div class="cart-item-actions">
                <div class="quantity-control">
                    <button class="quantity-btn" onclick="updateCartQuantity(${index}, ${item.quantity - 1})">
                        <i class="fas fa-minus"></i>
                    </button>
                    <span class="quantity-display">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateCartQuantity(${index}, ${item.quantity + 1})">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
                <button class="remove-item-btn" onclick="removeFromCart(${index})">
                    <i class="fas fa-trash"></i> Remove
                </button>
            </div>
        `;
        cartItemsList.appendChild(itemDiv);
    });
}

/**
 * PROCEED TO CHECKOUT - Handles checkout process
 */
function proceedToCheckout() {
    const cart = getCart();
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    // Show checkout form
    showCheckoutForm();
}

/**
 * SHOW CHECKOUT FORM - Displays the checkout form modal
 */
function showCheckoutForm() {
    const cart = getCart();
    const subtotal = cart.reduce((sum, item) => sum + (item.priceValue * item.quantity), 0);
    const shipping = subtotal > 5000 ? 0 : 150;
    const total = subtotal + shipping;

    const formHTML = `
        <h2><i class="fas fa-shopping-bag"></i> Checkout</h2>
        <p class="form-subtitle">Complete your order details</p>

        <form id="checkoutForm" onsubmit="submitOrder(event)">
            <!-- Order Summary -->
            <div class="order-summary-mini">
                <h4>Order Summary</h4>
                <div class="summary-line">
                    <span>Items (${cart.reduce((sum, item) => sum + item.quantity, 0)}):</span>
                    <span>₱${subtotal.toLocaleString()}.00</span>
                </div>
                <div class="summary-line">
                    <span>Shipping:</span>
                    <span>${shipping === 0 ? 'FREE' : '₱' + shipping + '.00'}</span>
                </div>
                <div class="summary-line total">
                    <span>Total:</span>
                    <span class="amount">₱${total.toLocaleString()}.00</span>
                </div>
            </div>

            <!-- Contact Information -->
            <div class="form-section">
                <h3>Contact Information</h3>
                <div class="form-row">
                    <div class="form-group">
                        <label>First Name <span class="required">*</span></label>
                        <input type="text" name="firstName" required>
                    </div>
                    <div class="form-group">
                        <label>Last Name <span class="required">*</span></label>
                        <input type="text" name="lastName" required>
                    </div>
                </div>
                <div class="form-group">
                    <label>Email Address <span class="required">*</span></label>
                    <input type="email" name="email" required>
                </div>
                <div class="form-group">
                    <label>Phone Number <span class="required">*</span></label>
                    <input type="tel" name="phone" placeholder="+63" required>
                </div>
            </div>

            <!-- Delivery Address -->
            <div class="form-section">
                <h3>Delivery Address</h3>
                <div class="form-group">
                    <label>Street Address <span class="required">*</span></label>
                    <input type="text" name="address" placeholder="House/Unit No., Street Name" required>
                </div>
                <div class="form-group">
                    <label>Barangay <span class="required">*</span></label>
                    <input type="text" name="barangay" required>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>City <span class="required">*</span></label>
                        <input type="text" name="city" required>
                    </div>
                    <div class="form-group">
                        <label>Province <span class="required">*</span></label>
                        <input type="text" name="province" required>
                    </div>
                </div>
                <div class="form-group">
                    <label>Postal Code <span class="required">*</span></label>
                    <input type="text" name="postalCode" placeholder="e.g., 1100" required>
                </div>
            </div>

            <!-- Payment Method -->
            <div class="form-section">
                <h3>Payment Method</h3>
                <div class="form-group">
                    <label>Select Payment <span class="required">*</span></label>
                    <select name="paymentMethod" required>
                        <option value="">Choose payment method</option>
                        <option value="cod">Cash on Delivery (COD)</option>
                        <option value="gcash">GCash</option>
                        <option value="card">Credit/Debit Card</option>
                        <option value="bank">Bank Transfer</option>
                    </select>
                </div>
            </div>

            <!-- Additional Notes -->
            <div class="form-section">
                <h3>Additional Notes (Optional)</h3>
                <div class="form-group">
                    <label>Order Notes</label>
                    <textarea name="notes" placeholder="Any special instructions for your order..."></textarea>
                </div>
            </div>

            <!-- Form Actions -->
            <div class="form-actions">
                <button type="button" class="btn-cancel-order" onclick="closeCheckoutForm()">Cancel</button>
                <button type="submit" class="btn-submit-order">
                    <i class="fas fa-check"></i> Place Order
                </button>
            </div>
        </form>
    `;

    document.getElementById('checkoutFormContent').innerHTML = formHTML;
    document.getElementById('checkoutFormOverlay').classList.add('show');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

/**
 * SUBMIT ORDER - Processes the order form
 */
function submitOrder(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    
    // Get form values
    const orderData = {
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        address: formData.get('address'),
        barangay: formData.get('barangay'),
        city: formData.get('city'),
        province: formData.get('province'),
        postalCode: formData.get('postalCode'),
        paymentMethod: formData.get('paymentMethod'),
        notes: formData.get('notes'),
        cart: getCart(),
        orderDate: new Date().toISOString()
    };

    // Calculate totals
    const cart = getCart();
    const subtotal = cart.reduce((sum, item) => sum + (item.priceValue * item.quantity), 0);
    const shipping = subtotal > 5000 ? 0 : 150;
    const total = subtotal + shipping;

    // Generate order number
    const orderNumber = 'AK' + Date.now();

    // Store order in localStorage (in real app, send to server)
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push({
        orderNumber: orderNumber,
        ...orderData,
        subtotal: subtotal,
        shipping: shipping,
        total: total
    });
    localStorage.setItem('orders', JSON.stringify(orders));

    // Show confirmation
    showOrderConfirmation(orderNumber, orderData, total);

    // Clear cart
    localStorage.removeItem('cart');
    updateCartCounter();
}

/**
 * SHOW ORDER CONFIRMATION - Displays success message
 */
function showOrderConfirmation(orderNumber, orderData, total) {
    const confirmationHTML = `
        <div class="confirmation-container">
            <i class="fas fa-check-circle"></i>
            <h2>Order Placed Successfully!</h2>
            <p>Thank you for your order, ${orderData.firstName}!</p>
            
            <div class="order-number">
                Order #${orderNumber}
            </div>
            
            <p>Total Amount: <strong style="color: var(--color-gold);">₱${total.toLocaleString()}.00</strong></p>
            <p style="margin-top: 1rem;">We've sent a confirmation email to:</p>
            <p><strong>${orderData.email}</strong></p>
            
            <p style="margin-top: 1.5rem; color: #666;">
                Your order will be delivered to:<br>
                <strong>${orderData.address}, ${orderData.barangay}<br>
                ${orderData.city}, ${orderData.province} ${orderData.postalCode}</strong>
            </p>
            
            <p style="margin-top: 1.5rem; font-size: 0.95rem; color: #666;">
                Expected delivery: 3-5 business days
            </p>
            
            <button class="btn-primary" onclick="closeCheckoutFormAndRedirect()">
                Continue Shopping
            </button>
        </div>
    `;

    document.getElementById('checkoutFormContent').innerHTML = confirmationHTML;
}

/**
 * CLOSE CHECKOUT FORM - Closes the modal
 */
function closeCheckoutForm() {
    document.getElementById('checkoutFormOverlay').classList.remove('show');
    document.body.style.overflow = ''; // Re-enable scrolling
}

/**
 * CLOSE CHECKOUT FORM AND REDIRECT - Closes modal and goes to homepage
 */
function closeCheckoutFormAndRedirect() {
    closeCheckoutForm();
    setTimeout(() => {
        window.location.href = 'tempindex.html';
    }, 300);
}

/**
 * QUICK CHECKOUT - For Buy Now button (bypasses cart page)
 */
function quickCheckout(productId, variantIndex, size) {
    // Add item to cart first
    addToCart(productId, variantIndex, size);
    
    // Small delay to ensure cart is updated
    setTimeout(() => {
        // Show checkout form directly
        showCheckoutForm();
    }, 300);
}

// =============================================
// SECTION 5: PAGE INITIALIZATION
// =============================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('Tempscript.js loaded - Initializing...');

    // Update cart counter on all pages
    updateCartCounter();

    // =============================================
    // HOME PAGE: Video Mute Toggle
    // =============================================
    const video = document.getElementById('heroVideo');
    const toggleButton = document.getElementById('muteToggle');
    const toggleIcon = toggleButton ? toggleButton.querySelector('i') : null;

    if (video && toggleButton && toggleIcon) {
        video.muted = true;

        toggleButton.addEventListener('click', function() {
            if (video.muted) {
                video.muted = false;
                toggleIcon.className = 'fas fa-volume-up';
            } else {
                video.muted = true;
                toggleIcon.className = 'fas fa-volume-mute';
            }
        });
    }

    // =============================================
    // PRODUCT GALLERY PAGE: Filter & Search Setup
    // =============================================
    const productList = document.querySelector('.product-list');
    if (productList) {
        console.log('Product gallery page detected');
        
        // Display initial products
        displayProducts('All', '');
        
        // Setup filter buttons
        const filterButtons = document.querySelectorAll(".filter-btn");
        filterButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Update active state
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');

                // Get category and filter
                const category = this.getAttribute('data-category');
                const searchInput = document.querySelector('.search-input');
                const searchTerm = searchInput ? searchInput.value : '';
                
                displayProducts(category, searchTerm);
            });
        });
        
        // Setup search functionality
        const searchInput = document.querySelector('.search-input');
        const searchButton = document.querySelector('.search-btn');
        
        if (searchInput) {
            // Search on Enter key
            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    handleSearch();
                }
            });
            
            // Live search on input
            searchInput.addEventListener('input', handleSearch);
        }
        
        if (searchButton) {
            searchButton.addEventListener('click', handleSearch);
        }
    }

    // =============================================
    // PRODUCT DETAIL PAGE: Initialize
    // =============================================
    const productDetailPage = document.querySelector('.product-detail-page');
    if (productDetailPage) {
        console.log('Product detail page detected');
        displayProductDetail();
    }

    // =============================================
    // CART PAGE: Initialize
    // =============================================
    const cartPage = document.querySelector('.cart-page');
    if (cartPage) {
        console.log('Cart page detected');
        displayCart();
    }

    // =============================================
    // GLOBAL: Smooth Scrolling for Anchor Links
    // =============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#' || !href) return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // =============================================
    // HOME PAGE: Newsletter Form
    // =============================================
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value;
            
            if (email && email.includes('@')) {
                alert('Thank you for subscribing to AeroKicks PH!');
                emailInput.value = '';
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }

    console.log('Tempscript.js fully initialized!');
});

// =============================================
// SECTION 6: LOGIN & PROFILE MANAGEMENT
// =============================================

/**
 * SWITCH AUTH TAB - Toggle between login and register forms
 */
function switchAuthTab(tab) {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const tabs = document.querySelectorAll('.auth-tab');
    
    tabs.forEach(t => t.classList.remove('active'));
    
    if (tab === 'login') {
        loginForm.classList.add('active');
        registerForm.classList.remove('active');
        tabs[0].classList.add('active');
    } else {
        loginForm.classList.remove('active');
        registerForm.classList.add('active');
        tabs[1].classList.add('active');
    }
}

/**
 * HANDLE LOGIN - Process login form
 */
function handleLogin(event) {
    event.preventDefault();
    
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    
    // Check if user exists in localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        // Login successful
        localStorage.setItem('currentUser', JSON.stringify(user));
        showProfile(user);
        
        // Show success notification
        alert('Login successful! Welcome back, ' + user.fullName);
    } else {
        // Login failed
        alert('Invalid email or password. Please try again.');
    }
}

/**
 * HANDLE REGISTER - Process registration form
 */
function handleRegister(event) {
    event.preventDefault();
    
    const form = event.target;
    const fullName = form.fullName.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    
    // Validate passwords match
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }
    
    // Check if email already exists
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = users.find(u => u.email === email);
    
    if (existingUser) {
        alert('Email already registered. Please login instead.');
        return;
    }
    
    // Create new user
    const newUser = {
        id: Date.now(),
        fullName: fullName,
        email: email,
        phone: phone,
        password: password,
        memberSince: new Date().toISOString(),
        avatar: fullName.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2)
    };
    
    // Save user
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    // Auto-login after registration
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    showProfile(newUser);
    
    // Show success notification
    alert('Registration successful! Welcome, ' + fullName);
}

/**
 * SHOW PROFILE - Display user profile page
 */
function showProfile(user) {
    const authContainer = document.getElementById('authContainer');
    const profileContainer = document.getElementById('profileContainer');
    
    if (authContainer) authContainer.style.display = 'none';
    if (profileContainer) profileContainer.classList.add('active');
    
    // Update profile header
    document.getElementById('profileAvatar').textContent = user.avatar || user.fullName.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2);
    document.getElementById('profileName').textContent = user.fullName;
    document.getElementById('profileEmail').textContent = user.email;
    
    // Format member since date
    const memberDate = new Date(user.memberSince);
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const formattedDate = monthNames[memberDate.getMonth()] + ' ' + memberDate.getFullYear();
    document.getElementById('memberSince').textContent = formattedDate;
    
    // Update profile details
    document.getElementById('detailName').textContent = user.fullName;
    document.getElementById('detailEmail').textContent = user.email;
    document.getElementById('detailPhone').textContent = user.phone;
    document.getElementById('detailMemberSince').textContent = memberDate.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
    
    // Load order history
    loadOrderHistory(user.email);
}

/**
 * LOAD ORDER HISTORY - Display user's past orders
 */
function loadOrderHistory(userEmail) {
    const orderHistoryContainer = document.getElementById('orderHistory');
    const allOrders = JSON.parse(localStorage.getItem('orders')) || [];
    
    // Filter orders by user email
    const userOrders = allOrders.filter(order => order.email === userEmail);
    
    if (userOrders.length === 0) {
        orderHistoryContainer.innerHTML = '<p style="text-align: center; color: #666;">No orders yet. Start shopping!</p>';
        return;
    }
    
    // Display orders
    orderHistoryContainer.innerHTML = '';
    userOrders.reverse().slice(0, 5).forEach(order => {
        const orderDate = new Date(order.orderDate);
        const orderDiv = document.createElement('div');
        orderDiv.className = 'order-item';
        orderDiv.innerHTML = `
            <div class="order-info">
                <h4>Order #${order.orderNumber}</h4>
                <p>${orderDate.toLocaleDateString()} - ₱${order.total.toLocaleString()}.00</p>
                <p style="font-size: 0.85rem;">${order.cart.length} item(s)</p>
            </div>
            <div class="order-status completed">Completed</div>
        `;
        orderHistoryContainer.appendChild(orderDiv);
    });
}

/**
 * HANDLE LOGOUT - Log out current user
 */
function handleLogout() {
    if (confirm('Are you sure you want to logout?')) {
        localStorage.removeItem('currentUser');
        window.location.href = 'login.html';
    }
}

/**
 * CHECK LOGIN STATUS - Check if user is logged in on page load
 */
function checkLoginStatus() {
    const loginPage = document.querySelector('.login-page');
    if (!loginPage) return; // Not on login page
    
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    if (currentUser) {
        // User is logged in, show profile
        showProfile(currentUser);
    }
}

// Check login status on page load
document.addEventListener('DOMContentLoaded', function() {
    checkLoginStatus();
});