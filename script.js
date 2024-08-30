// nav bar toogle 
document.getElementById('menu-toggle').addEventListener('click', function () {
    document.getElementById('nav-menu').classList.toggle('active');
 });
   
// new arrival 
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    
    let index = 0;

    function showSlide(n) {
        if (n >= slides.length) {
            index = 0;
        } else if (n < 0) {
            index = slides.length - 1;
            if(n==1){
                index = n;  
            }
        }  
        slider.style.transform = `translateX(${-index * 100}%)`;
    }

    prevButton.addEventListener('click', () => {
        showSlide(index - 1);
    });

    nextButton.addEventListener('click', () => {
        showSlide(index + 1);
    });

    // Auto-slide every 5 seconds
    setInterval(() => {
        showSlide(index + 1);
    }, 1000);
});
 
// contact us 
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    form.addEventListener('submit', (event) => {
        let valid = true;

        // Clear previous error messages
        document.querySelectorAll('.error-message').forEach(el => el.style.display = 'none');

        // Name validation
        if (nameInput.value.trim() === '') {
            document.getElementById('name-error').style.display = 'block';
            valid = false;
        }

        // Email validation
        if (!emailInput.value.includes('@')) {
            document.getElementById('email-error').style.display = 'block';
            valid = false;
        }

        // Message validation
        if (messageInput.value.length < 10) {
            document.getElementById('message-error').style.display = 'block';
            valid = false;
        }

        if (!valid) {
            event.preventDefault(); // Prevent form submission
        }
    });
});



document.addEventListener('DOMContentLoaded', () => {
    // Scroll Animations
    const elementsToAnimate = document.querySelectorAll('.fade-in, .bounce-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });

    // Slider Functionality
    const sliders = document.querySelectorAll('.slider-container');
    sliders.forEach(slider => {
        const slides = slider.querySelectorAll('.slide');
        const prevBtn = slider.querySelector('.prev');
        const nextBtn = slider.querySelector('.next');
        let index = 0;

        function showSlide(i) {
            if (i >= slides.length) index = 0;
            else if (i < 0) index = slides.length - 1;
            else index = i;
            slides.forEach((slide, idx) => {
                slide.style.transform = `translateX(-${index * 100}%)`;
            });
        }

        prevBtn.addEventListener('click', () => {
            showSlide(index - 1);
        });

        nextBtn.addEventListener('click', () => {
            showSlide(index + 1);
        });

        showSlide(index);
    });
});
  
// Handle the Cart Modal
function openCartModal() {
    document.getElementById('cart-modal').style.display = 'block';
}

function closeCartModal() {
    document.getElementById('cart-modal').style.display = 'none';
}

function emptyCart() {
    document.getElementById('cart-items').innerHTML = '<p>Your cart is empty.</p>';
}
 
// Function to show the success modal
function showSuccessModal(messageText) {
    const successModal = document.getElementById('success-modal');
    const successMessage = document.getElementById('success-message');

    successMessage.textContent = messageText;
    successModal.style.display = 'block';

    // Automatically close the modal after 2 seconds
    setTimeout(closeSuccessModal, 700);
}

// Function to close the success modal
function closeSuccessModal() {
    const successModal = document.getElementById('success-modal');
    successModal.style.display = 'none';
}


// Add event listener to the Add to Cart buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productCard = this.closest('.product-card');
        const title = productCard.querySelector('h3').textContent;
        const price = productCard.querySelector('p').textContent.replace('$', '');

        addToCart(title, price); 
        showSuccessModal(`Added "${title}" to cart successfully!`); 
    });
});

// Function to add item to the cart
function addToCart(title, price) {
    var cartItemsContainer = document.getElementById('cart-items');
    
    // Create a new list item
    var cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    cartItem.innerHTML = `
        <h3>${title}</h3>
        <p>Price: $${price}</p>
    `;
  
    // Append the new list item to the existing list
    cartItemsContainer.appendChild(cartItem);
    
    // Remove the empty cart message if it exists
    var emptyMessage = cartItemsContainer.querySelector('p');
    if (emptyMessage) {
        emptyMessage.remove();
    }
}

// Event listeners for checkout and empty cart buttons
document.getElementById('checkout-button').addEventListener('click', function() {
    alert('Proceeding to checkout!');
    emptyCart(); // Clear the cart after checkout
    closeCartModal();
});

document.getElementById('empty-cart-button').addEventListener('click', function() {
    emptyCart();
});

 



