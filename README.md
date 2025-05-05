<!-- Book Now Button (Inline + Centered Horizontally) -->
<div class="linear-btn-wrapper">
  <a href="#testc" class="book-btn">Book Safari</a>
</div>

<style>
  html {
    scroll-behavior: smooth;
  }

  .linear-btn-wrapper {
    display: flex;
    justify-content: center;
    margin: 40px 0; /* Adjust vertical spacing */
  }

  .book-btn {
    padding: 14px 35px;
    background: linear-gradient(135deg, #3b6a33, #a4d85e); /* Earthy Green + Lush Tropical Green */
    color: white; /* White text */
    text-decoration: none;
    border-radius: 30px;
    font-weight: 600;
    font-size: 1.2rem;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); /* Soft Shadow */
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .book-btn:hover {
    background: linear-gradient(135deg, #a4d85e, #3b6a33); /* Inverted gradient for hover */
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.3); /* Darker Shadow */
    transform: scale(1.05);
  }

  .book-btn:active {
    transform: scale(0.98);
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.25);
  }
</style>
