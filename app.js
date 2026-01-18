// State
const state = {
    currentView: 'vendors', // vendors, menu, checkout, vendor_wait, payment, success
    selectedVendor: null,
    cart: [],
    orderCode: null,
    vendorCode: null,
    deliveryTime: null,
    orderStatus: 'pending' // pending, preparing, ready
};

// Data
const VENDORS = [
    {
        id: 1,
        name: 'Fast Food Hub',
        desc: 'Burgers, Fries & Shakes',
        rating: 4.8,
        stats: { pending: 12, preparing: 4 }, // Dynamic dashboard data
        image: 'vendor_fast_food.png',
        menu: [
            { id: 101, name: 'Classic Burger', price: 199, rating: 4.7, orders: 1205, image: 'vendor_fast_food.png' },
            { id: 102, name: 'Cheesy Fries', price: 99, rating: 4.5, orders: 850, image: 'vendor_fast_food.png' },
            { id: 103, name: 'Chicken Nuggets', price: 149, rating: 4.6, orders: 940, image: 'vendor_fast_food.png' },
            { id: 104, name: 'Cola', price: 49, rating: 4.2, orders: 2100, image: 'vendor_fast_food.png' },
            { id: 105, name: 'Spicy Chicken Wrap', price: 179, rating: 4.8, orders: 600, image: 'vendor_fast_food.png' },
            { id: 106, name: 'Onion Rings', price: 89, rating: 4.3, orders: 400, image: 'vendor_fast_food.png' },
            { id: 107, name: 'Double Cheeseburger', price: 249, rating: 4.9, orders: 1500, image: 'vendor_fast_food.png' },
            { id: 108, name: 'Vanilla Shake', price: 129, rating: 4.6, orders: 750, image: 'vendor_fast_food.png' },
            { id: 109, name: 'Veggie Burger', price: 169, rating: 4.4, orders: 320, image: 'vendor_fast_food.png' },
            { id: 110, name: 'Large Pepsi', price: 59, rating: 4.1, orders: 1800, image: 'vendor_fast_food.png' }
        ]
    },
    {
        id: 2,
        name: 'Spicy Kitchen',
        desc: 'Authentic Curries & Spice',
        rating: 4.5,
        stats: { pending: 3, preparing: 8 },
        image: 'vendor_spicy_kitchen.png',
        menu: [
            { id: 201, name: 'Red Curry', price: 299, rating: 4.6, orders: 500, image: 'vendor_spicy_kitchen.png' },
            { id: 202, name: 'Spicy Noodles', price: 249, rating: 4.5, orders: 600, image: 'vendor_spicy_kitchen.png' },
            { id: 203, name: 'Tom Yum Soup', price: 199, rating: 4.7, orders: 450, image: 'vendor_spicy_kitchen.png' },
            { id: 204, name: 'Thai Iced Tea', price: 129, rating: 4.8, orders: 900, image: 'vendor_spicy_kitchen.png' },
            { id: 205, name: 'Green Curry', price: 299, rating: 4.5, orders: 480, image: 'vendor_spicy_kitchen.png' },
            { id: 206, name: 'Pad Thai', price: 269, rating: 4.9, orders: 1200, image: 'vendor_spicy_kitchen.png' },
            { id: 207, name: 'Spring Rolls', price: 149, rating: 4.4, orders: 700, image: 'vendor_spicy_kitchen.png' },
            { id: 208, name: 'Mango Sticky Rice', price: 189, rating: 4.8, orders: 550, image: 'vendor_spicy_kitchen.png' },
            { id: 209, name: 'Papaya Salad', price: 159, rating: 4.3, orders: 300, image: 'vendor_spicy_kitchen.png' },
            { id: 210, name: 'Coconut Water', price: 79, rating: 4.6, orders: 800, image: 'vendor_spicy_kitchen.png' }
        ]
    },
    {
        id: 3,
        name: 'Yummy Bites',
        desc: 'Desserts & Sweet Treats',
        rating: 4.9,
        stats: { pending: 0, preparing: 2 },
        image: 'vendor_yummy_bites.png',
        menu: [
            { id: 301, name: 'Lava Cake', price: 189, rating: 4.9, orders: 2000, image: 'vendor_yummy_bites.png' },
            { id: 302, name: 'Fruit Tart', price: 149, rating: 4.7, orders: 600, image: 'vendor_yummy_bites.png' },
            { id: 303, name: 'Cheesecake', price: 179, rating: 4.8, orders: 1500, image: 'vendor_yummy_bites.png' },
            { id: 304, name: 'Cappuccino', price: 119, rating: 4.6, orders: 1200, image: 'vendor_yummy_bites.png' },
            { id: 305, name: 'Brownie', price: 99, rating: 4.5, orders: 1100, image: 'vendor_yummy_bites.png' },
            { id: 306, name: 'Macarons (3pc)', price: 159, rating: 4.7, orders: 850, image: 'vendor_yummy_bites.png' },
            { id: 307, name: 'Ice Cream Sundae', price: 129, rating: 4.8, orders: 900, image: 'vendor_yummy_bites.png' },
            { id: 308, name: 'Waffle', price: 149, rating: 4.6, orders: 700, image: 'vendor_yummy_bites.png' },
            { id: 309, name: 'Hot Chocolate', price: 139, rating: 4.9, orders: 1600, image: 'vendor_yummy_bites.png' },
            { id: 310, name: 'Donut', price: 79, rating: 4.4, orders: 1000, image: 'vendor_yummy_bites.png' }
        ]
    },
    {
        id: 4,
        name: 'Pizza Place',
        desc: 'Slices & Pies',
        rating: 4.6,
        stats: { pending: 15, preparing: 10 },
        image: 'vendor_pizza_place.png',
        menu: [
            { id: 401, name: 'Pepperoni Slice', price: 149, rating: 4.8, orders: 3000, image: 'vendor_pizza_place.png' },
            { id: 402, name: 'Cheese Pizza', price: 399, rating: 4.5, orders: 1200, image: 'vendor_pizza_place.png' },
            { id: 403, name: 'Garlic Knots', price: 99, rating: 4.7, orders: 900, image: 'vendor_pizza_place.png' },
            { id: 404, name: 'BBQ Chicken Pizza', price: 499, rating: 4.8, orders: 800, image: 'vendor_pizza_place.png' },
            { id: 405, name: 'Veggie Supreme', price: 449, rating: 4.6, orders: 600, image: 'vendor_pizza_place.png' },
            { id: 406, name: 'Coke Zero', price: 49, rating: 4.2, orders: 500, image: 'vendor_pizza_place.png' },
            { id: 407, name: 'Hawaiian', price: 429, rating: 4.4, orders: 400, image: 'vendor_pizza_place.png' },
            { id: 408, name: 'Meat Lovers', price: 549, rating: 4.9, orders: 1100, image: 'vendor_pizza_place.png' },
            { id: 409, name: 'Mozzarella Sticks', price: 159, rating: 4.7, orders: 1300, image: 'vendor_pizza_place.png' },
            { id: 410, name: 'Marinara Sauce', price: 29, rating: 4.0, orders: 200, image: 'vendor_pizza_place.png' }
        ]
    },
    {
        id: 5,
        name: 'Healthy Greens',
        desc: 'Salads & Smoothies',
        rating: 4.7,
        stats: { pending: 4, preparing: 1 },
        image: 'vendor_healthy_greens.png',
        menu: [
            { id: 501, name: 'Caesar Salad', price: 229, rating: 4.6, orders: 500, image: 'vendor_healthy_greens.png' },
            { id: 502, name: 'Green Smoothie', price: 149, rating: 4.8, orders: 800, image: 'vendor_healthy_greens.png' },
            { id: 503, name: 'Quinoa Bowl', price: 279, rating: 4.7, orders: 600, image: 'vendor_healthy_greens.png' },
            { id: 504, name: 'Greek Salad', price: 219, rating: 4.5, orders: 450, image: 'vendor_healthy_greens.png' },
            { id: 505, name: 'Avocado Toast', price: 199, rating: 4.9, orders: 1200, image: 'vendor_healthy_greens.png' },
            { id: 506, name: 'Fruit Bowl', price: 159, rating: 4.6, orders: 700, image: 'vendor_healthy_greens.png' },
            { id: 507, name: 'Protein Shake', price: 179, rating: 4.7, orders: 900, image: 'vendor_healthy_greens.png' },
            { id: 508, name: 'Kale Chips', price: 99, rating: 4.3, orders: 300, image: 'vendor_healthy_greens.png' },
            { id: 509, name: 'Wrap', price: 189, rating: 4.5, orders: 500, image: 'vendor_healthy_greens.png' },
            { id: 510, name: 'Detox Juice', price: 129, rating: 4.4, orders: 400, image: 'vendor_healthy_greens.png' }
        ]
    },
    {
        id: 6,
        name: 'Sushi Bar',
        desc: 'Fresh Rolls & Sashimi',
        rating: 4.9,
        stats: { pending: 8, preparing: 6 },
        image: 'vendor_sushi_bar.png',
        menu: [
            { id: 601, name: 'Salmon Roll', price: 299, rating: 4.8, orders: 1100, image: 'vendor_sushi_bar.png' },
            { id: 602, name: 'Tuna Sashimi', price: 349, rating: 4.9, orders: 800, image: 'vendor_sushi_bar.png' },
            { id: 603, name: 'California Roll', price: 249, rating: 4.5, orders: 1500, image: 'vendor_sushi_bar.png' },
            { id: 604, name: 'Miso Soup', price: 99, rating: 4.6, orders: 1000, image: 'vendor_sushi_bar.png' },
            { id: 605, name: 'Tempura Shrimp', price: 279, rating: 4.8, orders: 900, image: 'vendor_sushi_bar.png' },
            { id: 606, name: 'Edamame', price: 129, rating: 4.7, orders: 600, image: 'vendor_sushi_bar.png' },
            { id: 607, name: 'Dragon Roll', price: 499, rating: 4.9, orders: 750, image: 'vendor_sushi_bar.png' },
            { id: 608, name: 'Eel Roll', price: 399, rating: 4.7, orders: 500, image: 'vendor_sushi_bar.png' },
            { id: 609, name: 'Seaweed Salad', price: 149, rating: 4.4, orders: 400, image: 'vendor_sushi_bar.png' },
            { id: 610, name: 'Green Tea', price: 69, rating: 4.5, orders: 1200, image: 'vendor_sushi_bar.png' }
        ]
    }
];

// DOM Elements
const app = document.getElementById('app');

// Utils
const formatPrice = (price) => `₹${price}`;
const generateCode = () => Math.floor(1000 + Math.random() * 9000);
const showNotification = (title, msg) => {
    const existing = document.querySelector('.notification-toast');
    if (existing) existing.remove();

    const notif = document.createElement('div');
    notif.className = 'notification-toast';
    notif.innerHTML = `
        <div class="notification-icon">🔔</div>
        <div class="notification-content">
            <h4>${title}</h4>
            <p>${msg}</p>
        </div>
    `;
    document.body.appendChild(notif);

    // Trigger animation
    setTimeout(() => notif.classList.add('show'), 10);

    setTimeout(() => {
        notif.classList.remove('show');
        setTimeout(() => notif.remove(), 500);
    }, 5000);
};
const triggerHaptic = () => {
    if (navigator.vibrate) {
        navigator.vibrate(10); // Short 10ms pulse
    }
};

// Helper to generate star HTML
const generateStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;
    let html = '';
    for (let i = 0; i < 5; i++) {
        if (i < fullStars) html += '<span class="star filled">★</span>';
        else if (i === fullStars && hasHalf) html += '<span class="star filled">★</span>'; // Simplified half star
        else html += '<span class="star">★</span>';
    }
    return `<div class="star-rating-display" style="color:#FFD700; font-size:0.9rem;">${html} <span style="color:var(--text-muted); font-size:0.8rem; margin-left:4px;">(${rating})</span></div>`;
};

// Render Functions
function render() {
    app.innerHTML = '';

    // Header
    const header = document.createElement('header');
    const showBack = state.currentView !== 'vendors';

    header.innerHTML = `
        <div style="flex: 1; display: flex; align-items: center;">
            ${showBack ? `<button class="btn btn-icon" style="color:var(--text-main); font-size:1.5rem; padding:0;" id="backBtn">←</button>` : ''}
        </div>
        <h1 style="margin: 0;">Serve Foodies</h1>
        <div style="flex: 1;"></div>
    `;
    app.appendChild(header);

    // Main Content
    const main = document.createElement('main');

    switch (state.currentView) {
        case 'vendors':
            main.appendChild(renderVendorList());
            break;
        case 'menu':
            main.appendChild(renderMenu());
            break;
        case 'checkout':
            main.appendChild(renderCheckout());
            break;
        case 'vendor_wait':
            main.appendChild(renderVendorWait());
            break;
        case 'payment':
            main.appendChild(renderPayment());
            break;
        case 'success':
            main.appendChild(renderSuccess());
            break;
    }

    app.appendChild(main);

    // Event Listeners
    if (document.getElementById('backBtn')) {
        document.getElementById('backBtn').addEventListener('click', () => {
            triggerHaptic();
            if (state.currentView === 'menu') setState({ currentView: 'vendors', selectedVendor: null, cart: [] });
            else if (state.currentView === 'checkout') setState({ currentView: 'menu' });
            else if (state.currentView === 'payment') setState({ currentView: 'checkout' }); // Warning: losing vendor code
        });
    }
}

function renderDashboard() {
    const div = document.createElement('div');
    div.className = 'dashboard-container';

    // Sort vendors by busy-ness for initial display, but keep consistent order for updates? 
    // Actually, stick to VENDORS order or top busy? Let's stick to VENDORS sliced to top 5 or just all 6.
    // Let's show all 6.

    div.innerHTML = `
        <div class="dashboard-card">
            <div class="dashboard-title">
                <span>Live Vendor Status</span>
                <span class="live-badge"><span class="pulse-dot"></span> Live</span>
            </div>
            <div class="graph-container">
                ${VENDORS.map(v => {
        const load = v.stats.pending + v.stats.preparing;
        const maxLoad = 40; // Scale
        const height = Math.min((load / maxLoad) * 100, 100);

        // Dynamic color based on load
        let colorClass = 'low';
        if (load > 15) colorClass = 'med';
        if (load > 25) colorClass = 'high';

        return `
                    <div class="graph-bar-group" id="vendor-group-${v.id}">
                        <div class="graph-bar">
                            <div class="graph-bar-fill ${colorClass}" id="bar-${v.id}" style="height: ${height}%"></div>
                        </div>
                        <div class="graph-label">${v.name}</div>
                        <div class="graph-count" id="count-${v.id}">${load} orders</div>
                    </div>
                    `;
    }).join('')}
            </div>
        </div>
    `;
    return div;
}

// Live Analytics Simulation
function startLiveUpdates() {
    setInterval(() => {
        VENDORS.forEach(v => {
            // Randomly change stats
            if (Math.random() > 0.6) {
                const change = Math.random() > 0.5 ? 1 : -1;
                v.stats.pending = Math.max(0, v.stats.pending + change);
            }
            if (Math.random() > 0.7) {
                const change = Math.random() > 0.5 ? 1 : -1;
                v.stats.preparing = Math.max(0, v.stats.preparing + change);
            }

            // Update DOM if visible
            const load = v.stats.pending + v.stats.preparing;
            const maxLoad = 40;
            const height = Math.min((load / maxLoad) * 100, 100);

            const bar = document.getElementById(`bar-${v.id}`);
            const count = document.getElementById(`count-${v.id}`);

            if (bar && count) {
                bar.style.height = `${height}%`;

                // Update Color Class
                bar.className = 'graph-bar-fill'; // Reset
                if (load > 25) bar.classList.add('high');
                else if (load > 15) bar.classList.add('med');
                else bar.classList.add('low');

                count.innerText = `${load} orders`;
            }
        });
    }, 2000); // Update every 2 seconds
}

// Start simulation once
startLiveUpdates();

function renderVendorList() {
    const container = document.createElement('div');
    container.style.width = '100%';

    // Dashboard
    container.appendChild(renderDashboard());

    const title = document.createElement('h2');
    title.textContent = 'Select a Vendor';
    title.style.textAlign = 'center';
    title.style.marginTop = '40px';
    title.style.marginBottom = '20px';
    container.appendChild(title);

    const grid = document.createElement('div');
    grid.className = 'vendor-grid';
    // Remove padding from grid since we might want it on the container or handle it differently, 
    // but looking at style.css, .vendor-grid has padding: 40px. 
    // We should probably keep the grid style but purely for cards.

    VENDORS.forEach(vendor => {
        const card = document.createElement('div');
        card.className = 'vendor-card';
        card.onclick = () => selectVendor(vendor);
        card.innerHTML = `
            <img src="${vendor.image}" class="vendor-img" alt="${vendor.name}">
            <div class="vendor-info">
                <div class="vendor-name">${vendor.name}</div>
                ${generateStars(vendor.rating)}
                <div class="vendor-desc">${vendor.desc}</div>
            </div>
        `;
        grid.appendChild(card);
    });

    container.appendChild(grid);
    return container;
}

function renderMenu() {
    const div = document.createElement('div');
    const vendor = state.selectedVendor;

    div.innerHTML = `
        <div style="padding: 20px 20px 0;">
            <h2>${vendor.name} Menu</h2>
        </div>
        <div class="menu-list">
            ${vendor.menu.map(item => {
        const inCart = state.cart.find(i => i.id === item.id);
        return `
                <div class="menu-item">
                    <img src="${item.image}" class="menu-item-img" alt="${item.name}">
                    <div class="menu-item-details">
                        <div>
                            ${item.name} 
                            ${item.orders > 1000 ? '<span style="font-size:0.7rem; background:#FFD700; color:black; padding:2px 6px; border-radius:10px; font-weight:bold;">Best Seller</span>' : ''}
                        </div>
                        <div style="font-size:0.8rem; color:var(--text-muted); margin: 2px 0;">
                            ⭐ ${item.rating} • ${item.orders} orders
                        </div>
                        <div class="menu-item-price">${formatPrice(item.price)}</div>
                    </div>
                    <button class="add-btn ${inCart ? 'active' : ''}" onclick="toggleCart(${item.id})">
                        ${inCart ? '✓' : '+'}
                    </button>
                </div>
                `;
    }).join('')}
        </div>
    `;

    if (state.cart.length > 0) {
        // Fix for NaN: ensure price and quantity are numbers
        const total = state.cart.reduce((sum, item) => sum + (Number(item.price) || 0) * (Number(item.quantity) || 1), 0);
        const count = state.cart.reduce((s, i) => s + (Number(i.quantity) || 1), 0);

        const cartBar = document.createElement('div');
        cartBar.className = 'cart-bar';
        cartBar.onclick = () => { triggerHaptic(); setState({ currentView: 'checkout' }); };
        cartBar.innerHTML = `
            <div>${count} Items</div>
            <div style="font-weight:700">Checkout ${formatPrice(total)}</div>
        `;
        div.appendChild(cartBar);
    }

    return div;
}

window.toggleCart = function (itemId) {
    triggerHaptic();
    const item = state.selectedVendor.menu.find(i => i.id === itemId);
    const inCartIndex = state.cart.findIndex(i => i.id === itemId);

    if (inCartIndex > -1) {
        // Remove
        const newCart = [...state.cart];
        newCart.splice(inCartIndex, 1);
        setState({ cart: newCart });
        showNotification('Removed', `${item.name} removed from cart`);
    } else {
        // Add Simple - Force numbers
        const cartItem = {
            ...item,
            price: Number(item.price),
            quantity: 1,
            customization: {}
        };
        setState({ cart: [...state.cart, cartItem] });
        showNotification('Added', `${item.name} added to cart`);
    }
};

function renderCheckout() {
    const div = document.createElement('div');
    div.className = 'page-container';
    // Fix for NaN in checkout too
    const total = state.cart.reduce((sum, item) => sum + (Number(item.price) || 0) * (Number(item.quantity) || 1), 0);

    div.innerHTML = `
        <h2>Order Summary</h2>
        <div class="order-summary">
            ${state.cart.map(item => `
                <div class="summary-row" style="align-items:flex-start">
                    <div style="flex:1">
                        <div>${item.name}</div>
                        <div style="font-size:0.8rem; color:var(--text-muted)">
                            ${item.customization.instructions ? `<i>"${item.customization.instructions}"</i>` : ''}
                        </div>
                    </div>
                    <span>${formatPrice(item.price)}</span>
                </div>
            `).join('')}
            <div class="summary-total">
                <div class="summary-row">
                    <span>Total</span>
                    <span>${formatPrice(total)}</span>
                </div>
            </div>
        </div>
        <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 20px;">
            Clicking "Send to Vendor" will send your order to <strong>${state.selectedVendor.name}</strong> for approval.
        </p>
        <button class="btn btn-primary" onclick="requestVendorApproval()">Send to Vendor</button>
    `;
    return div;
}

function renderVendorWait() {
    const div = document.createElement('div');
    div.className = 'page-container';

    if (!state.vendorCode) {
        // Waiting state
        div.innerHTML = `
            <div class="status-card">
                <div class="spinner"></div>
                <h3>Waiting for Vendor...</h3>
                <p style="color: var(--text-muted); margin-top: 10px;">
                    ${state.selectedVendor.name} is reviewing your order.
                </p>
            </div>
        `;
        // Simulate approval after 3 seconds
        setTimeout(() => {
            const now = new Date();
            const delivery = new Date(now.getTime() + 20 * 60000); // +20 mins
            const timeString = delivery.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

            setState({
                vendorCode: generateCode(),
                deliveryTime: timeString
            });
        }, 3000);
    } else {
        // Approved state
        div.innerHTML = `
            <div class="status-card">
                <div style="font-size: 3rem; margin-bottom: 10px;">✅</div>
                <h3>Order Approved!</h3>
                <p>Estimated Delivery: <strong>${state.deliveryTime}</strong></p>
                <p>Please use this code to complete payment:</p>
                <div class="code-display">${state.vendorCode}</div>
                <button class="btn btn-primary" onclick="triggerHaptic(); setState({ currentView: 'payment' })">Proceed to Payment</button>
            </div>
        `;
    }
    return div;
}

function renderPayment() {
    const div = document.createElement('div');
    div.className = 'page-container';
    // Fix for NaN: ensure price and quantity are numbers
    const total = state.cart.reduce((sum, item) => sum + (Number(item.price) || 0) * (Number(item.quantity) || 1), 0);

    div.innerHTML = `
        <h2>Payment</h2>
        <div class="order-summary">
            <div class="summary-row">
                <span>Total Amount</span>
                <span style="color: var(--primary); font-weight: 700;">${formatPrice(total)}</span>
            </div>
        </div>

        <div class="input-group">
            <label>Vendor Approval Code</label>
            <input type="text" class="input-field" value="${state.vendorCode}" readonly style="opacity: 0.7">
        </div>

        <div class="input-group">
            <label>Payment Method</label>
            <select class="input-field">
                <option>Credit/Debit Card</option>
                <option>Employee Wallet</option>
                <option>Cash on Delivery</option>
            </select>
        </div>

        <button class="btn btn-primary" onclick="processPayment()">Pay & Place Order</button>
    `;
    return div;
}

function renderSuccess() {
    const div = document.createElement('div');
    div.className = 'page-container';
    const isReady = state.orderStatus === 'ready';

    div.innerHTML = `
        <div class="status-card">
            <div class="success-icon">${isReady ? '🍽️' : '👨‍🍳'}</div>
            <h2>${isReady ? 'Order Ready!' : 'Preparing...'}</h2>
            <p style="color: var(--text-muted); margin-bottom: 20px;">
                ${isReady ? 'Please collect your order at the counter.' : 'Your food is being prepared.'}
            </p>
            
            <div class="order-summary" style="text-align: left;">
                <div class="summary-row">
                    <span>Order Number</span>
                    <span>#${state.orderCode}</span>
                </div>
                
                <div style="text-align:center; margin: 20px 0;">
                    <img src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=${state.orderCode}" style="border-radius:8px; border:1px solid var(--border);" alt="Order QR">
                    <div style="font-size:0.8rem; color:var(--text-muted); margin-top:5px;">Show this QR for pickup</div>
                </div>

                <div class="summary-row">
                    <span>Estimated Delivery</span>
                    <span>${state.deliveryTime}</span>
                </div>
                <div class="summary-row">
                    <span>Vendor</span>
                    <span>${state.selectedVendor.name}</span>
                </div>
                <div class="summary-row">
                    <span>Status</span>
                    <span style="color: ${isReady ? 'var(--success)' : 'var(--secondary)'}; font-weight:700">
                        ${isReady ? 'Ready to Pick Up' : 'Cooking'}
                    </span>
                </div>
            </div>

            <button class="btn btn-secondary" onclick="resetApp()">Order More</button>
            
            <!-- Feedback Form -->
            <div id="feedback-section" style="margin-top: 30px; border-top: 1px solid var(--border); padding-top: 20px;">
                <h3>Rate your experience</h3>
                <div class="star-rating-input" style="font-size: 2rem; color: #ddd; cursor: pointer; margin: 10px 0;">
                    <span onclick="rateStar(1)">★</span><span onclick="rateStar(2)">★</span><span onclick="rateStar(3)">★</span><span onclick="rateStar(4)">★</span><span onclick="rateStar(5)">★</span>
                </div>
                <textarea id="feedback-text" class="input-field" placeholder="Tell us what you liked..." rows="3"></textarea>
                <button class="btn btn-primary" onclick="submitFeedback()" style="margin-top: 10px;">Submit Feedback</button>
            </div>
        </div>
    `;
    return div;
}

window.rateStar = function (n) {
    const stars = document.querySelectorAll('.star-rating-input span');
    stars.forEach((s, i) => {
        s.style.color = i < n ? '#FFD700' : '#ddd';
    });
};

window.submitFeedback = function () {
    triggerHaptic();
    document.getElementById('feedback-section').innerHTML = '<p style="color:var(--success); font-weight:bold;">Thank you for your feedback!</p>';
    showNotification('Feedback Sent', 'Thanks for helping us improve!');
};

// Actions
function setState(newState) {
    Object.assign(state, newState);
    render();
}

function selectVendor(vendor) {
    triggerHaptic();
    setState({ selectedVendor: vendor, currentView: 'menu', cart: [] });
}

window.requestVendorApproval = function () {
    triggerHaptic();
    setState({ currentView: 'vendor_wait', vendorCode: null });
};

window.processPayment = function () {
    triggerHaptic();
    // Simulate payment processing
    setState({
        currentView: 'success',
        orderStatus: 'preparing',
        orderCode: 'ORD-' + generateCode()
    });

    // Simulate cooking time (5 seconds for demo)
    setTimeout(() => {
        state.orderStatus = 'ready';
        // Only re-render if we are still on the success screen
        if (state.currentView === 'success') {
            render();
        }
        showNotification('Order Ready!', `Your order #${state.orderCode} is ready for pickup!`);
    }, 5000);
};

window.resetApp = function () {
    triggerHaptic();
    setState({
        currentView: 'vendors',
        selectedVendor: null,
        cart: [],
        orderCode: null,
        orderCode: null,
        vendorCode: null,
        deliveryTime: null,
        orderStatus: 'pending'
    });
};

// Initial Render
document.addEventListener('DOMContentLoaded', () => {
    render();
});
