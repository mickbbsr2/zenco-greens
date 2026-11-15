// Zenco Greens Main Script
document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Header Sticky Shadow
  const navbar = document.getElementById('siteHeader');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        navbar.classList.add('shadow-md', 'bg-white/95', 'backdrop-blur-md');
        navbar.classList.remove('bg-white');
      } else {
        navbar.classList.remove('shadow-md', 'bg-white/95', 'backdrop-blur-md');
        navbar.classList.add('bg-white');
      }
    });
  }

  // FAQ Accordions
  const faqItems = document.querySelectorAll('.faq-toggle');
  faqItems.forEach(btn => {
    btn.addEventListener('click', () => {
      const content = btn.nextElementSibling;
      const icon = btn.querySelector('.faq-icon');
      
      if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        if (icon) icon.style.transform = 'rotate(180deg)';
      } else {
        content.classList.add('hidden');
        if (icon) icon.style.transform = 'rotate(0deg)';
      }
    });
  });

  // Product Filter on products.html
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-item');

  if (filterBtns.length > 0 && productCards.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // remove active classes
        filterBtns.forEach(b => {
          b.classList.remove('bg-green-700', 'text-white');
          b.classList.add('bg-white', 'text-gray-700', 'border');
        });
        btn.classList.add('bg-green-700', 'text-white');
        btn.classList.remove('bg-white', 'text-gray-700', 'border');

        const filter = btn.getAttribute('data-filter');
        productCards.forEach(card => {
          const category = card.getAttribute('data-category');
          if (filter === 'all' || category === filter || category.includes(filter)) {
            card.classList.remove('hidden');
          } else {
            card.classList.add('hidden');
          }
        });
      });
    });
  }

  // Enquiry & Quote Form Handler
  const enquiryForm = document.getElementById('enquiryForm');
  if (enquiryForm) {
    enquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('name')?.value || 'Customer';
      const phone = document.getElementById('phone')?.value || '';
      const email = document.getElementById('email')?.value || 'Not provided';
      const type = document.getElementById('customerType')?.value || 'Retail / Home Gardening';
      const product = document.getElementById('productRequirement')?.value || 'General Grow Bags';
      const quantity = document.getElementById('quantity')?.value || '10';
      const location = document.getElementById('deliveryLocation')?.value || 'Bhubaneswar';
      const message = document.getElementById('notes')?.value || 'Looking for pricing and size recommendations.';

      const whatsappText = `*New Enquiry from Website - Zenco Greens*
👤 *Name:* ${name}
📞 *Phone:* ${phone}
✉️ *Email:* ${email}
🏢 *Type:* ${type}
📦 *Product/Sizes:* ${product}
🔢 *Quantity:* ${quantity}
📍 *Location:* ${location}
📝 *Notes:* ${message}`;

      const encodedMsg = encodeURIComponent(whatsappText);
      const whatsappUrl = `https://wa.me/919437040880?text=${encodedMsg}`;

      // Show success modal or feedback
      const successModal = document.getElementById('successModal');
      if (successModal) {
        successModal.classList.remove('hidden');
        const waRedirectBtn = document.getElementById('waRedirectBtn');
        if (waRedirectBtn) {
          waRedirectBtn.href = whatsappUrl;
        }
      } else {
        // Direct open WhatsApp
        window.open(whatsappUrl, '_blank');
      }
    });
  }
});

// Quick WhatsApp message helper for product buttons
function openProductWhatsApp(productName, size) {
  const text = `Hello Zenco Greens! I am interested in ordering/inquiring about *${productName}* (Size: ${size}). Please share price and delivery details for Bhubaneswar/Odisha.`;
  const url = `https://wa.me/919437040880?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
}
