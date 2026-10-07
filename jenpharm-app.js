/**
 * JENPHARM DERMIVE - CLINICAL PRECISION JAVASCRIPT ENGINE
 * E-Commerce, Skin Diagnostic Quiz, Cart Management, and Clinical Interactive UI
 */

document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. CLINICAL PRODUCTS DATABASE
    // ==========================================
    const products = [
        {
            id: 'dermive-oil-free-spf20',
            name: 'Dermive Oil Free Moisturizer SPF 20',
            category: 'moisturizer',
            tag: 'Hero Best Seller',
            price: 1450,
            originalPrice: 1650,
            rating: 4.9,
            reviewsCount: 3820,
            chips: ['Oil-Free', 'SPF 20', '3 Ceramides', 'Non-Comedogenic'],
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCexhfGPpW-Dd1ri6UlAVmRPO9nhcBLOMMsCBTaOU-mgunWP237Mh-UCsTtO0uHiC4TM92q7Z7UEzv5VIOZxbQOA4W4EO05Fs7uO5cxxRc742CPT3C_ptxM97Ytkiuly53WYxhPbatffmDOlbSy264rHujE_efN-FcaDZQ160raUjGJLyV8HE3m6CGgdOBWa87yeWUmCMBokf25pZByLZLV3R4I5i2JHLZbxeY3iAezs7fC3lG9WVt17-peZU9epi6RIg25FKTP4A',
            description: 'Weightless daytime gel-cream with 3 essential ceramides, hyaluronic acid, and broad-spectrum SPF 20 photostable UV filters. Leaves an invisible, velvety matte finish with zero pore-clogging.',
            size: '100 ml / 3.38 fl. oz.',
            ingredients: 'Ceramide NP, Ceramide AP, Ceramide EOP, Hyaluronic Acid, Ethylhexyl Methoxycinnamate, Zinc Oxide, Niacinamide, Glycerin, Dimethicone, Purified Water.',
            directions: 'Apply generously to cleansed face and neck 15 minutes before sun exposure. Reapply every 2-3 hours during prolonged sun exposure.'
        },
        {
            id: 'dermive-hydrating-cream',
            name: 'Dermive Deep Hydration Ceramide Cream',
            category: 'moisturizer',
            tag: 'Barrier Repair',
            price: 1550,
            originalPrice: 1800,
            rating: 4.8,
            reviewsCount: 2140,
            chips: ['Dry Skin', 'Lipid Matrix', 'Peptides', 'Hypoallergenic'],
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCexhfGPpW-Dd1ri6UlAVmRPO9nhcBLOMMsCBTaOU-mgunWP237Mh-UCsTtO0uHiC4TM92q7Z7UEzv5VIOZxbQOA4W4EO05Fs7uO5cxxRc742CPT3C_ptxM97Ytkiuly53WYxhPbatffmDOlbSy264rHujE_efN-FcaDZQ160raUjGJLyV8HE3m6CGgdOBWa87yeWUmCMBokf25pZByLZLV3R4I5i2JHLZbxeY3iAezs7fC3lG9WVt17-peZU9epi6RIg25FKTP4A',
            description: 'Rich yet non-greasy lipid-replenishing barrier cream engineered for dry, flaking, or compromised moisture barriers. Delivers deep 48-hour cellular hydration.',
            size: '100 ml / 3.38 fl. oz.',
            ingredients: 'Ceramide Complex 1, 3, 6-II, Shea Butter, Phytosphingosine, Squalane, Cholesterol, Hyaluronic Acid.',
            directions: 'Massage gently over clean face and neck in the evening or whenever skin feels tight and dry.'
        },
        {
            id: 'dermive-sun-defense-spf50',
            name: 'Dermive Sun Defense Fluid SPF 50+ PA++++',
            category: 'spf',
            tag: 'Maximum UV Guard',
            price: 1850,
            originalPrice: 2100,
            rating: 4.9,
            reviewsCount: 1950,
            chips: ['SPF 50+', 'PA++++', 'Zero White Cast', 'Water Resistant'],
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCexhfGPpW-Dd1ri6UlAVmRPO9nhcBLOMMsCBTaOU-mgunWP237Mh-UCsTtO0uHiC4TM92q7Z7UEzv5VIOZxbQOA4W4EO05Fs7uO5cxxRc742CPT3C_ptxM97Ytkiuly53WYxhPbatffmDOlbSy264rHujE_efN-FcaDZQ160raUjGJLyV8HE3m6CGgdOBWa87yeWUmCMBokf25pZByLZLV3R4I5i2JHLZbxeY3iAezs7fC3lG9WVt17-peZU9epi6RIg25FKTP4A',
            description: 'Ultra-lightweight invisible fluid sunscreen providing ultra-high protection against UVA/UVB rays and blue light pollution. Ideal for humid climates.',
            size: '50 ml / 1.7 fl. oz.',
            ingredients: 'Tinosorb S, Uvinul A Plus, Octinoxate, Niacinamide, Vitamin E, Centella Asiatica Extract.',
            directions: 'Shake well before use. Apply evenly as the final step in your morning routine.'
        },
        {
            id: 'dermive-foaming-cleanser',
            name: 'Dermive Gentle Purifying Foaming Cleanser',
            category: 'cleanser',
            tag: 'Sebum Control',
            price: 1250,
            originalPrice: 1450,
            rating: 4.8,
            reviewsCount: 1780,
            chips: ['Salicylic Acid 0.5%', 'Zinc PCA', 'pH 5.5', 'Non-Stripping'],
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCexhfGPpW-Dd1ri6UlAVmRPO9nhcBLOMMsCBTaOU-mgunWP237Mh-UCsTtO0uHiC4TM92q7Z7UEzv5VIOZxbQOA4W4EO05Fs7uO5cxxRc742CPT3C_ptxM97Ytkiuly53WYxhPbatffmDOlbSy264rHujE_efN-FcaDZQ160raUjGJLyV8HE3m6CGgdOBWa87yeWUmCMBokf25pZByLZLV3R4I5i2JHLZbxeY3iAezs7fC3lG9WVt17-peZU9epi6RIg25FKTP4A',
            description: 'Micellar foaming cleanser that gently washes away excess sebum, micro-pollutants, and stubborn debris without disrupting the skin’s natural moisture barrier.',
            size: '150 ml / 5.07 fl. oz.',
            ingredients: 'Sodium Cocoyl Isethionate, Salicylic Acid, Zinc PCA, Ceramides, Allantoin, Glycerin.',
            directions: 'Pump onto damp palms, lather with water, and massage onto face in circular motions for 60 seconds. Rinse thoroughly.'
        },
        {
            id: 'dermive-niacinamide-serum',
            name: 'Dermive Niacinamide 10% + Zinc Barrier Serum',
            category: 'serum',
            tag: 'Pore Tightening',
            price: 1750,
            originalPrice: 1950,
            rating: 4.9,
            reviewsCount: 2450,
            chips: ['10% Niacinamide', '1% Zinc PCA', 'Fades Spots', 'Sebum Regulation'],
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCexhfGPpW-Dd1ri6UlAVmRPO9nhcBLOMMsCBTaOU-mgunWP237Mh-UCsTtO0uHiC4TM92q7Z7UEzv5VIOZxbQOA4W4EO05Fs7uO5cxxRc742CPT3C_ptxM97Ytkiuly53WYxhPbatffmDOlbSy264rHujE_efN-FcaDZQ160raUjGJLyV8HE3m6CGgdOBWa87yeWUmCMBokf25pZByLZLV3R4I5i2JHLZbxeY3iAezs7fC3lG9WVt17-peZU9epi6RIg25FKTP4A',
            description: 'High-strength clinical serum specifically developed to tighten enlarged pores, regulate oil production, and diminish hyperpigmentation and post-acne marks.',
            size: '30 ml / 1.0 fl. oz.',
            ingredients: 'Niacinamide 10%, Zinc PCA 1%, Hyaluronic Acid, Panthenol (Vitamin B5), Phenoxyethanol.',
            directions: 'Apply 3-4 drops morning and evening to face before heavier moisturizers.'
        },
        {
            id: 'dermive-cica-soothing-gel',
            name: 'Dermive Cica Calming & Redness Relief Gel',
            category: 'moisturizer',
            tag: 'Sensitivity Relief',
            price: 1350,
            originalPrice: 1550,
            rating: 4.7,
            reviewsCount: 960,
            chips: ['Centella Asiatica', 'Panthenol', 'Zero Fragrance', 'Cooling Effect'],
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCexhfGPpW-Dd1ri6UlAVmRPO9nhcBLOMMsCBTaOU-mgunWP237Mh-UCsTtO0uHiC4TM92q7Z7UEzv5VIOZxbQOA4W4EO05Fs7uO5cxxRc742CPT3C_ptxM97Ytkiuly53WYxhPbatffmDOlbSy264rHujE_efN-FcaDZQ160raUjGJLyV8HE3m6CGgdOBWa87yeWUmCMBokf25pZByLZLV3R4I5i2JHLZbxeY3iAezs7fC3lG9WVt17-peZU9epi6RIg25FKTP4A',
            description: 'A cooling water-gel formula packed with high-potency Centella Asiatica to instantly quell flushing, burning sensations, and post-procedure skin sensitivity.',
            size: '75 ml / 2.5 fl. oz.',
            ingredients: 'Centella Asiatica Extract, Madecassoside, Asiatic Acid, Sodium Hyaluronate, Allantoin.',
            directions: 'Apply generously whenever skin feels overheated, red, or irritated.'
        }
    ];

    // ==========================================
    // 2. STATE MANAGEMENT & LOCAL STORAGE
    // ==========================================
    let cart = JSON.parse(localStorage.getItem('jenpharm_cart')) || [];
    let wishlist = JSON.parse(localStorage.getItem('jenpharm_wishlist')) || [];
    let activePromoCode = localStorage.getItem('jenpharm_promo') || null;
    const FREE_SHIPPING_THRESHOLD = 2000;
    const STANDARD_SHIPPING_FEE = 200;

    // Save cart to LocalStorage
    function saveCart() {
        localStorage.setItem('jenpharm_cart', JSON.stringify(cart));
        updateCartUI();
    }

    // Save wishlist
    function saveWishlist() {
        localStorage.setItem('jenpharm_wishlist', JSON.stringify(wishlist));
        updateWishlistBadge();
    }

    // ==========================================
    // 3. RENDER PRODUCTS CATALOG
    // ==========================================
    const productGrid = document.getElementById('product-grid');
    const filterTabs = document.querySelectorAll('.filter-tab');

    function renderProducts(filter = 'all') {
        if (!productGrid) return;
        productGrid.innerHTML = '';

        const filtered = filter === 'all' 
            ? products 
            : products.filter(p => p.category === filter);

        filtered.forEach(p => {
            const isWishlisted = wishlist.includes(p.id);
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <span class="product-badge-tag">${p.tag}</span>
                <button class="product-wishlist-btn ${isWishlisted ? 'active' : ''}" data-id="${p.id}" title="Wishlist" aria-label="Add to Wishlist">
                    <span class="material-symbols-outlined">favorite</span>
                </button>
                <div class="product-image-container">
                    <img src="${p.image}" alt="${p.name}" class="product-img" loading="lazy">
                    <button class="quick-view-overlay-btn" data-id="${p.id}">
                        <span class="material-symbols-outlined">visibility</span>
                        <span>Quick View</span>
                    </button>
                </div>
                <div class="product-info">
                    <div class="product-chips">
                        ${p.chips.map(c => `<span class="chip-tag">${c}</span>`).join('')}
                    </div>
                    <h3 class="product-card-title">${p.name}</h3>
                    <p class="product-card-desc">${p.description}</p>
                    <div class="product-rating-row">
                        <span class="product-stars">★★★★★</span>
                        <span class="rating-count">${p.rating} (${p.reviewsCount.toLocaleString()})</span>
                    </div>
                    <div class="product-bottom-row">
                        <div class="price-box">
                            <span class="current-price">Rs. ${p.price.toLocaleString()}</span>
                            <span class="original-price">Rs. ${p.originalPrice.toLocaleString()}</span>
                        </div>
                        <button class="add-cart-btn" data-id="${p.id}">
                            <span class="material-symbols-outlined">add_shopping_cart</span>
                            <span>Add</span>
                        </button>
                    </div>
                </div>
            `;
            productGrid.appendChild(card);
        });

        attachProductCardListeners();
    }

    // Filter tabs click
    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            filterTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderProducts(tab.dataset.filter);
        });
    });

    // ==========================================
    // 4. CART & DRAWER MANAGEMENT
    // ==========================================
    const cartDrawer = document.getElementById('cart-drawer');
    const cartOverlay = document.getElementById('cart-drawer-overlay');
    const cartToggleBtn = document.getElementById('cart-drawer-toggle');
    const closeCartBtn = document.getElementById('close-cart-btn');
    const cartBadge = document.getElementById('cart-badge');
    const cartDrawerCount = document.getElementById('cart-drawer-count');
    const cartItemsList = document.getElementById('cart-items-list');
    const emptyCartView = document.getElementById('empty-cart-view');
    const cartSubtotalEl = document.getElementById('cart-subtotal');
    const cartShippingEl = document.getElementById('cart-shipping');
    const cartTotalEl = document.getElementById('cart-total');
    const discountRow = document.getElementById('discount-row');
    const cartDiscountEl = document.getElementById('cart-discount');
    const shippingMeterFill = document.getElementById('shipping-meter-fill');
    const shippingMeterText = document.getElementById('shipping-meter-text');
    const applyPromoBtn = document.getElementById('apply-promo-btn');
    const promoCodeInput = document.getElementById('promo-code-input');

    function openCart() {
        cartDrawer.classList.add('active');
        cartOverlay.classList.add('active');
        cartDrawer.setAttribute('aria-hidden', 'false');
    }

    function closeCart() {
        cartDrawer.classList.remove('active');
        cartOverlay.classList.remove('active');
        cartDrawer.setAttribute('aria-hidden', 'true');
    }

    if (cartToggleBtn) cartToggleBtn.addEventListener('click', openCart);
    if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);
    if (cartOverlay) cartOverlay.addEventListener('click', closeCart);

    function addToCart(productId, qty = 1) {
        const product = products.find(p => p.id === productId);
        if (!product) return;

        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.qty += qty;
        } else {
            cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                size: product.size,
                qty: qty
            });
        }

        saveCart();
        showToast(`Added "${product.name}" to your Clinical Bag!`, 'success');
        openCart();
    }

    function updateCartUI() {
        const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
        if (cartBadge) cartBadge.textContent = totalItems;
        if (cartDrawerCount) cartDrawerCount.textContent = `${totalItems} items`;

        // Render Cart Items
        if (cartItemsList) {
            cartItemsList.innerHTML = '';

            if (cart.length === 0) {
                if (emptyCartView) {
                    cartItemsList.appendChild(emptyCartView);
                    emptyCartView.style.display = 'flex';
                }
            } else {
                cart.forEach(item => {
                    const itemEl = document.createElement('div');
                    itemEl.className = 'cart-item';
                    itemEl.innerHTML = `
                        <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                        <div class="cart-item-details">
                            <div>
                                <h4 class="cart-item-title">${item.name}</h4>
                                <small style="color: var(--on-surface-variant); font-size: 0.75rem;">${item.size || 'Standard Size'}</small>
                                <div class="cart-item-price">Rs. ${(item.price * item.qty).toLocaleString()}</div>
                            </div>
                            <div class="cart-item-controls">
                                <div class="quantity-stepper">
                                    <button class="cart-qty-btn minus" data-id="${item.id}">-</button>
                                    <span>${item.qty}</span>
                                    <button class="cart-qty-btn plus" data-id="${item.id}">+</button>
                                </div>
                                <button class="remove-item-btn" data-id="${item.id}">
                                    <span class="material-symbols-outlined icon-sm">delete</span>
                                    <span>Remove</span>
                                </button>
                            </div>
                        </div>
                    `;
                    cartItemsList.appendChild(itemEl);
                });
            }
        }

        // Calculate Totals
        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
        let discount = 0;
        if (activePromoCode && subtotal > 0) {
            discount = Math.round(subtotal * 0.15); // 15% off
            if (discountRow) discountRow.style.display = 'flex';
            if (cartDiscountEl) cartDiscountEl.textContent = `-Rs. ${discount.toLocaleString()}`;
        } else {
            if (discountRow) discountRow.style.display = 'none';
        }

        let shipping = subtotal >= FREE_SHIPPING_THRESHOLD || subtotal === 0 ? 0 : STANDARD_SHIPPING_FEE;
        let total = subtotal - discount + shipping;

        if (cartSubtotalEl) cartSubtotalEl.textContent = `Rs. ${subtotal.toLocaleString()}`;
        if (cartShippingEl) cartShippingEl.textContent = shipping === 0 ? 'FREE' : `Rs. ${shipping}`;
        if (cartTotalEl) cartTotalEl.textContent = `Rs. ${total.toLocaleString()}`;

        // Free Shipping Meter
        if (shippingMeterFill && shippingMeterText) {
            const progress = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100));
            shippingMeterFill.style.width = `${progress}%`;

            if (subtotal >= FREE_SHIPPING_THRESHOLD) {
                shippingMeterText.innerHTML = `🎉 You unlocked <strong>FREE Express Shipping!</strong>`;
            } else {
                const remaining = FREE_SHIPPING_THRESHOLD - subtotal;
                shippingMeterText.innerHTML = `Add <strong>Rs. ${remaining.toLocaleString()}</strong> more for <strong>FREE Shipping!</strong>`;
            }
        }

        attachCartListeners();
    }

    function attachCartListeners() {
        // Quantity Plus
        document.querySelectorAll('.cart-qty-btn.plus').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.dataset.id;
                const item = cart.find(i => i.id === id);
                if (item) {
                    item.qty++;
                    saveCart();
                }
            });
        });

        // Quantity Minus
        document.querySelectorAll('.cart-qty-btn.minus').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.dataset.id;
                const item = cart.find(i => i.id === id);
                if (item) {
                    if (item.qty > 1) {
                        item.qty--;
                    } else {
                        cart = cart.filter(i => i.id !== id);
                    }
                    saveCart();
                }
            });
        });

        // Remove Item
        document.querySelectorAll('.remove-item-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.dataset.id;
                cart = cart.filter(i => i.id !== id);
                saveCart();
                showToast('Item removed from cart', 'info');
            });
        });
    }

    // Apply Promo Code
    if (applyPromoBtn && promoCodeInput) {
        applyPromoBtn.addEventListener('click', () => {
            const code = promoCodeInput.value.trim().toUpperCase();
            if (code === 'CLINICAL15' || code === 'DERMIVE15') {
                activePromoCode = code;
                localStorage.setItem('jenpharm_promo', code);
                saveCart();
                showToast('Promo code applied! 15% discount activated.', 'success');
            } else if (code === '') {
                showToast('Please enter a coupon code', 'info');
            } else {
                showToast('Invalid promo code. Use CLINICAL15 for 15% off!', 'info');
            }
        });
    }

    // ==========================================
    // 5. PRODUCT LISTENERS (WISHLIST, QUICK VIEW, ADD)
    // ==========================================
    function attachProductCardListeners() {
        // Add to Cart Buttons
        document.querySelectorAll('.add-cart-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const id = btn.dataset.id;
                addToCart(id, 1);
            });
        });

        // Wishlist Toggle
        document.querySelectorAll('.product-wishlist-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const id = btn.dataset.id;
                if (wishlist.includes(id)) {
                    wishlist = wishlist.filter(item => item !== id);
                    btn.classList.remove('active');
                    showToast('Removed from saved items', 'info');
                } else {
                    wishlist.push(id);
                    btn.classList.add('active');
                    showToast('Saved to your wishlist!', 'success');
                }
                saveWishlist();
            });
        });

        // Quick View
        document.querySelectorAll('.quick-view-overlay-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const id = btn.dataset.id;
                openQuickViewModal(id);
            });
        });
    }

    function updateWishlistBadge() {
        const wishlistBadge = document.getElementById('wishlist-badge');
        if (wishlistBadge) {
            wishlistBadge.textContent = wishlist.length;
        }
    }

    // ==========================================
    // 6. QUICK VIEW MODAL
    // ==========================================
    const productModal = document.getElementById('product-quickview-modal');
    const productModalBackdrop = document.getElementById('product-modal-backdrop');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const modalContentContainer = document.getElementById('modal-content-container');

    function openQuickViewModal(productId) {
        const product = products.find(p => p.id === productId);
        if (!product || !modalContentContainer) return;

        modalContentContainer.innerHTML = `
            <div class="modal-img-col">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="modal-info-col">
                <span class="clinical-chip">${product.tag}</span>
                <h2 class="modal-product-title">${product.name}</h2>
                <div class="modal-price-row">
                    <span class="modal-product-price">Rs. ${product.price.toLocaleString()}</span>
                    <span class="original-price">Rs. ${product.originalPrice.toLocaleString()}</span>
                </div>
                <p style="font-size: 0.9rem; color: var(--on-surface-variant);">${product.description}</p>
                <div class="modal-details-tabs">
                    <div class="modal-detail-item">
                        <strong>Key Actives & Science:</strong>
                        <span>${product.ingredients}</span>
                    </div>
                    <div class="modal-detail-item">
                        <strong>Clinical Usage Protocol:</strong>
                        <span>${product.directions}</span>
                    </div>
                </div>
                <div style="display: flex; gap: 1rem; margin-top: 1rem;">
                    <button class="btn btn-primary btn-lg btn-block" id="modal-add-cart-btn" data-id="${product.id}">
                        <span class="material-symbols-outlined">shopping_bag</span>
                        <span>Add to Bag — Rs. ${product.price.toLocaleString()}</span>
                    </button>
                </div>
            </div>
        `;

        const modalAddBtn = document.getElementById('modal-add-cart-btn');
        if (modalAddBtn) {
            modalAddBtn.addEventListener('click', () => {
                addToCart(product.id, 1);
                closeQuickViewModal();
            });
        }

        productModal.classList.add('active');
        productModalBackdrop.classList.add('active');
    }

    function closeQuickViewModal() {
        if (productModal) productModal.classList.remove('active');
        if (productModalBackdrop) productModalBackdrop.classList.remove('active');
    }

    if (closeModalBtn) closeModalBtn.addEventListener('click', closeQuickViewModal);
    if (productModalBackdrop) productModalBackdrop.addEventListener('click', closeQuickViewModal);

    // ==========================================
    // 7. CLINICAL REPORT MODAL
    // ==========================================
    const clinicalModal = document.getElementById('clinical-data-modal');
    const clinicalBackdrop = document.getElementById('clinical-modal-backdrop');
    const viewClinicalBtn = document.getElementById('view-clinical-data-btn');
    const closeClinicalBtn = document.getElementById('close-clinical-modal-btn');
    const closeClinicalActionBtn = document.getElementById('close-clinical-modal-action-btn');

    function openClinicalModal() {
        if (clinicalModal && clinicalBackdrop) {
            clinicalModal.classList.add('active');
            clinicalBackdrop.classList.add('active');
        }
    }

    function closeClinicalModal() {
        if (clinicalModal && clinicalBackdrop) {
            clinicalModal.classList.remove('active');
            clinicalBackdrop.classList.remove('active');
        }
    }

    if (viewClinicalBtn) viewClinicalBtn.addEventListener('click', openClinicalModal);
    if (closeClinicalBtn) closeClinicalBtn.addEventListener('click', closeClinicalModal);
    if (closeClinicalActionBtn) closeClinicalActionBtn.addEventListener('click', closeClinicalModal);
    if (clinicalBackdrop) clinicalBackdrop.addEventListener('click', closeClinicalModal);

    // ==========================================
    // 8. CHECKOUT MODAL & ORDER CONFIRMATION
    // ==========================================
    const checkoutBtn = document.getElementById('checkout-btn');
    const checkoutModal = document.getElementById('checkout-modal');
    const checkoutBackdrop = document.getElementById('checkout-modal-backdrop');
    const closeCheckoutBtn = document.getElementById('close-checkout-modal-btn');
    const orderForm = document.getElementById('order-form');
    const checkoutPayableAmount = document.getElementById('checkout-payable-amount');

    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (cart.length === 0) {
                showToast('Your cart is empty! Add products first.', 'info');
                return;
            }
            closeCart();
            const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
            const discount = activePromoCode ? Math.round(subtotal * 0.15) : 0;
            const shipping = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : STANDARD_SHIPPING_FEE;
            const grandTotal = subtotal - discount + shipping;

            if (checkoutPayableAmount) {
                checkoutPayableAmount.textContent = `Rs. ${grandTotal.toLocaleString()}`;
            }

            if (checkoutModal && checkoutBackdrop) {
                checkoutModal.classList.add('active');
                checkoutBackdrop.classList.add('active');
            }
        });
    }

    function closeCheckout() {
        if (checkoutModal && checkoutBackdrop) {
            checkoutModal.classList.remove('active');
            checkoutBackdrop.classList.remove('active');
        }
    }

    if (closeCheckoutBtn) closeCheckoutBtn.addEventListener('click', closeCheckout);
    if (checkoutBackdrop) checkoutBackdrop.addEventListener('click', closeCheckout);

    if (orderForm) {
        orderForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('cust-name').value;
            const orderNum = 'JP-' + Math.floor(100000 + Math.random() * 900000);
            
            closeCheckout();
            cart = [];
            saveCart();

            showToast(`Order #${orderNum} confirmed! Thank you ${name}. Fresh batch arriving in 2-3 days.`, 'success');
        });
    }

    // ==========================================
    // 9. SEARCH WITH LIVE AUTOCOMPLETE
    // ==========================================
    const globalSearchInput = document.getElementById('global-search-input');
    const searchDropdown = document.getElementById('search-results-dropdown');

    if (globalSearchInput && searchDropdown) {
        globalSearchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            if (query.length < 2) {
                searchDropdown.classList.remove('active');
                return;
            }

            const matches = products.filter(p => 
                p.name.toLowerCase().includes(query) || 
                p.description.toLowerCase().includes(query) ||
                p.chips.some(c => c.toLowerCase().includes(query))
            );

            if (matches.length > 0) {
                searchDropdown.innerHTML = matches.map(p => `
                    <div class="search-result-item" data-id="${p.id}">
                        <img src="${p.image}" alt="${p.name}">
                        <div>
                            <div class="search-result-title">${p.name}</div>
                            <div class="search-result-price">Rs. ${p.price.toLocaleString()}</div>
                        </div>
                    </div>
                `).join('');
                searchDropdown.classList.add('active');

                // Attach click to results
                searchDropdown.querySelectorAll('.search-result-item').forEach(item => {
                    item.addEventListener('click', () => {
                        const id = item.dataset.id;
                        searchDropdown.classList.remove('active');
                        globalSearchInput.value = '';
                        openQuickViewModal(id);
                    });
                });
            } else {
                searchDropdown.innerHTML = `<div style="padding: 1rem; font-size: 0.85rem; color: var(--on-surface-variant); text-align: center;">No clinical formulas found</div>`;
                searchDropdown.classList.add('active');
            }
        });

        // Close on outside click
        document.addEventListener('click', (e) => {
            if (!globalSearchInput.contains(e.target) && !searchDropdown.contains(e.target)) {
                searchDropdown.classList.remove('active');
            }
        });
    }

    // ==========================================
    // 10. INTERACTIVE SKIN DIAGNOSTIC QUIZ
    // ==========================================
    const quizState = {
        skin: null,
        concern: null,
        goal: null
    };

    const stepDots = [
        document.getElementById('step-dot-1'),
        document.getElementById('step-dot-2'),
        document.getElementById('step-dot-3')
    ];

    const quizSteps = [
        document.getElementById('quiz-step-1'),
        document.getElementById('quiz-step-2'),
        document.getElementById('quiz-step-3')
    ];

    const quizResultView = document.getElementById('quiz-result-view');
    const quizRecommendationsList = document.getElementById('quiz-recommendations-list');
    const addRoutineBundleBtn = document.getElementById('add-routine-bundle-btn');
    const restartQuizBtn = document.getElementById('restart-quiz-btn');

    document.querySelectorAll('.quiz-option-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const type = btn.dataset.type;
            const value = btn.dataset.value;
            quizState[type] = value;

            if (type === 'skin') {
                goToQuizStep(2);
            } else if (type === 'concern') {
                goToQuizStep(3);
            } else if (type === 'goal') {
                showQuizResults();
            }
        });
    });

    function goToQuizStep(stepNumber) {
        quizSteps.forEach((step, index) => {
            if (step) {
                step.classList.toggle('active', index === stepNumber - 1);
            }
        });

        stepDots.forEach((dot, index) => {
            if (dot) {
                dot.classList.toggle('active', index === stepNumber - 1);
            }
        });

        if (quizResultView) quizResultView.style.display = 'none';
    }

    function showQuizResults() {
        quizSteps.forEach(s => s && s.classList.remove('active'));
        if (quizResultView) quizResultView.style.display = 'block';

        let recs = [];
        // Determine recommended protocol based on answers
        if (quizState.skin === 'oily' || quizState.concern === 'acne') {
            recs = [
                { step: 'Step 1: Cleanse', product: products.find(p => p.id === 'dermive-foaming-cleanser') },
                { step: 'Step 2: Treat', product: products.find(p => p.id === 'dermive-niacinamide-serum') },
                { step: 'Step 3: Hydrate & Protect', product: products.find(p => p.id === 'dermive-oil-free-spf20') }
            ];
        } else if (quizState.skin === 'sensitive' || quizState.concern === 'redness') {
            recs = [
                { step: 'Step 1: Cleanse', product: products.find(p => p.id === 'dermive-foaming-cleanser') },
                { step: 'Step 2: Soothe', product: products.find(p => p.id === 'dermive-cica-soothing-gel') },
                { step: 'Step 3: Daytime Shield', product: products.find(p => p.id === 'dermive-oil-free-spf20') }
            ];
        } else {
            recs = [
                { step: 'Step 1: Cleanse', product: products.find(p => p.id === 'dermive-foaming-cleanser') },
                { step: 'Step 2: AM Protect', product: products.find(p => p.id === 'dermive-oil-free-spf20') },
                { step: 'Step 3: PM Restore', product: products.find(p => p.id === 'dermive-hydrating-cream') }
            ];
        }

        if (quizRecommendationsList) {
            quizRecommendationsList.innerHTML = recs.map(r => `
                <div class="recommended-routine-item">
                    <span class="routine-step-tag">${r.step}</span>
                    <img src="${r.product.image}" alt="${r.product.name}">
                    <h4 style="font-size: 0.95rem; font-weight: 600; margin-bottom: 0.25rem;">${r.product.name}</h4>
                    <span style="font-weight: 700; color: var(--primary);">Rs. ${r.product.price.toLocaleString()}</span>
                </div>
            `).join('');
        }

        if (addRoutineBundleBtn) {
            addRoutineBundleBtn.onclick = () => {
                recs.forEach(r => addToCart(r.product.id, 1));
                activePromoCode = 'CLINICAL15';
                localStorage.setItem('jenpharm_promo', 'CLINICAL15');
                saveCart();
                showToast('Clinical Regimen added with 15% discount applied!', 'success');
            };
        }
    }

    if (restartQuizBtn) {
        restartQuizBtn.addEventListener('click', () => {
            quizState.skin = null;
            quizState.concern = null;
            quizState.goal = null;
            goToQuizStep(1);
        });
    }

    // ==========================================
    // 11. HOTSPOTS ON MOLECULAR TECH SHOWCASE
    // ==========================================
    const hotspotPins = document.querySelectorAll('.hotspot-pin');
    const tooltipTitle = document.getElementById('tooltip-title');
    const tooltipDesc = document.getElementById('tooltip-desc');

    hotspotPins.forEach(pin => {
        pin.addEventListener('mouseenter', () => {
            if (tooltipTitle) tooltipTitle.textContent = pin.dataset.title;
            if (tooltipDesc) tooltipDesc.textContent = pin.dataset.desc;
        });
        pin.addEventListener('click', () => {
            if (tooltipTitle) tooltipTitle.textContent = pin.dataset.title;
            if (tooltipDesc) tooltipDesc.textContent = pin.dataset.desc;
        });
    });

    // ==========================================
    // 12. FAQ ACCORDION
    // ==========================================
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const btn = item.querySelector('.faq-question-btn');
        btn.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            faqItems.forEach(other => other.classList.remove('active'));
            if (!isActive) {
                item.classList.add('active');
                btn.setAttribute('aria-expanded', 'true');
            } else {
                btn.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // ==========================================
    // 13. NEWSLETTER SUBSCRIPTION
    // ==========================================
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('newsletter-email').value;
            activePromoCode = 'CLINICAL15';
            localStorage.setItem('jenpharm_promo', 'CLINICAL15');
            saveCart();
            showToast(`Welcome! Use promo code CLINICAL15 for 15% off your first order.`, 'success');
            newsletterForm.reset();
        });
    }

    // ==========================================
    // 14. INTERSECTION OBSERVER FOR CLINICAL STATS
    // ==========================================
    const statsContainer = document.getElementById('hydration-stats');
    if (statsContainer) {
        const statsObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const fills = entry.target.querySelectorAll('.progress-fill');
                    fills.forEach(fill => {
                        const target = fill.getAttribute('data-fill');
                        fill.style.width = target;
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        statsObserver.observe(statsContainer);
    }

    // Header scroll background effect
    window.addEventListener('scroll', () => {
        const header = document.getElementById('main-header');
        if (header) {
            if (window.scrollY > 30) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    });

    // Mobile menu toggle
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            document.body.classList.toggle('mobile-nav-open');
        });
    }

    // ==========================================
    // 15. TOAST NOTIFICATION UTILITY
    // ==========================================
    function showToast(message, type = 'info') {
        const container = document.getElementById('toast-container');
        if (!container) return;

        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        const icon = type === 'success' ? 'check_circle' : 'info';
        toast.innerHTML = `
            <span class="material-symbols-outlined">${icon}</span>
            <span>${message}</span>
        `;

        container.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(15px)';
            toast.style.transition = 'all 0.3s ease';
            setTimeout(() => toast.remove(), 300);
        }, 3500);
    }

    // ==========================================
    // 16. INITIALIZE UI
    // ==========================================
    renderProducts('all');
    updateCartUI();
    updateWishlistBadge();

});
