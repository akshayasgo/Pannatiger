<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Panna Tiger Safari</title>
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <!-- Custom CSS -->
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <!-- Header -->
    <header id="header">
        <div class="logo">
            <img src="logo.png" alt="Panna Tiger Safari Logo">
        </div>
        <div class="contact-info">
            <i class="fas fa-phone-alt"></i>
            <a href="tel:+911234567890">+91 12345 67890</a>
        </div>
    </header>

    <!-- Banner Section -->
    <section id="banner" class="banner">
        <div class="banner-content">
            <h1>Explore Panna's Wilderness</h1>
            <p>Experience the thrill of a lifetime on our thrilling jungle safaris and heritage tours.</p>
            <a href="#booking" class="btn">Book Your Safari Now</a>
        </div>
    </section>

    <!-- Card Carousel Section -->
    <section id="zones-carousel" class="carousel-section">
        <h2 class="section-title">Explore Our Jungle Zones</h2>
        <div class="carousel">
            <div class="carousel-card">
                <div class="icon"><i class="fas fa-leaf"></i></div>
                <h3>Mignon Zone</h3>
                <span class="badge core">Core Zone</span>
            </div>
            <div class="carousel-card">
                <div class="icon"><i class="fas fa-archway"></i></div>
                <h3>Ajaygarh Zone</h3>
                <span class="badge buffer">Buffer Zone</span>
            </div>
            <div class="carousel-card">
                <div class="icon"><i class="fas fa-tree"></i></div>
                <h3>Kanchan Khera Zone</h3>
                <span class="badge core">Core Zone</span>
            </div>
            <div class="carousel-card">
                <div class="icon"><i class="fas fa-turtle"></i></div>
                <h3>Turtle Sanctuary</h3>
                <span class="badge core">Core Zone</span>
            </div>
            <div class="carousel-card">
                <div class="icon"><i class="fas fa-water"></i></div>
                <h3>Bamni Dadar Zone</h3>
                <span class="badge buffer">Buffer Zone</span>
            </div>
        </div>
    </section>

    <!-- Zone Details Accordion -->
    <section id="zones-details" class="accordion-section">
        <h2 class="section-title">Zone Details</h2>
        <div class="accordion">
            <div class="accordion-item">
                <div class="accordion-header"><h3>Core Zone Details</h3><i class="fas fa-chevron-down"></i></div>
                <div class="accordion-content">
                    <p>The Core zones of Panna Tiger Reserve are pristine, protected areas where wildlife thrives undisturbed. Safaris in these areas offer the highest chances of spotting tigers, leopards, and other wildlife in their natural habitat. Strict regulations are in place to ensure minimal human impact.</p>
                </div>
            </div>
            <div class="accordion-item">
                <div class="accordion-header"><h3>Buffer Zone Details</h3><i class="fas fa-chevron-down"></i></div>
                <div class="accordion-content">
                    <p>The Buffer zones serve as a transition area between the core forests and human settlements. These areas support controlled tourism and other activities like fishing and agriculture, helping to balance conservation with local livelihoods. Wildlife in buffer zones includes deer, wild boar, and diverse birdlife.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Safari & Hotel Pricing Section -->
    <section id="pricing" class="pricing-section">
        <h2 class="section-title">Safari & Hotel Pricing</h2>
        <div class="pricing-cards">
            <div class="pricing-card">
                <h3><i class="fas fa-car"></i> Safari Pricing</h3>
                <ul>
                    <li>Jeep Safari (Core Zone) - ₹2,500 per person</li>
                    <li>Canter Safari (Core Zone) - ₹1,000 per person</li>
                    <li>Jeep Safari (Buffer Zone) - ₹2,000 per person</li>
                    <li>Night Safari (Buffer Zone) - ₹1,500 per person</li>
                </ul>
            </div>
            <div class="pricing-card">
                <h3><i class="fas fa-hotel"></i> Hotel Pricing</h3>
                <ul>
                    <li>Deluxe Cottage - ₹5,000 per night</li>
                    <li>Safari Resort Room - ₹3,500 per night</li>
                    <li>Tent Stay (Forest Camp) - ₹2,000 per night</li>
                </ul>
            </div>
        </div>
    </section>

    <!-- Booking Form Section -->
    <section id="booking" class="booking-section">
        <h2 class="section-title">Book Your Safari</h2>
        <form id="booking-form">
            <div class="form-group">
                <i class="fas fa-user"></i>
                <input type="text" id="name" placeholder=" " name="name" required>
                <label for="name">Your Name</label>
            </div>
            <div class="form-group">
                <i class="fas fa-envelope"></i>
                <input type="email" id="email" placeholder=" " name="email" required>
                <label for="email">Your Email</label>
            </div>
            <div class="form-group">
                <i class="fas fa-phone"></i>
                <input type="tel" id="phone" placeholder=" " name="phone" required>
                <label for="phone">Your Phone</label>
            </div>
            <div class="form-group">
                <i class="fas fa-calendar-alt"></i>
                <input type="date" id="safari-date" placeholder=" " name="date" required>
                <label for="safari-date">Safari Date</label>
            </div>
            <div class="form-group">
                <i class="fas fa-users"></i>
                <input type="number" id="persons" placeholder=" " name="persons" min="1" value="1" required>
                <label for="persons">Number of Persons</label>
            </div>
            <div class="form-group">
                <i class="fas fa-map-marker-alt"></i>
                <select id="zone" name="zone" required>
                    <option value="" disabled selected>Select Zone</option>
                    <option value="mignon">Mignon (Core)</option>
                    <option value="ajaygarh">Ajaygarh (Buffer)</option>
                    <option value="kanchan">Kanchan Khera (Core)</option>
                    <option value="turtle">Turtle Sanctuary (Core)</option>
                    <option value="bamni">Bamni Dadar (Buffer)</option>
                </select>
                <label for="zone">Preferred Zone</label>
            </div>
            <button type="submit" class="btn submit-btn">Submit</button>
        </form>
    </section>

    <!-- About Section -->
    <section id="about" class="about-section">
        <h2 class="section-title">About Panna Safari</h2>
        <p class="about-text">Panna Tiger Reserve is a <span class="highlight">spectacular wilderness</span> in the heart of India’s Madhya Pradesh. Known for its thriving tiger population and lush forests, Panna offers an unforgettable experience for nature lovers. Our goal is to promote <span class="highlight">conservation</span> and responsible tourism, ensuring the safety of wildlife while providing guests with comfortable accommodations and guided tours.</p>
    </section>

    <!-- Transport Connectivity Section -->
    <section id="connectivity" class="connectivity-section">
        <h2 class="section-title">Transport Connectivity</h2>
        <div class="connectivity-cards">
            <div class="connectivity-card">
                <i class="fas fa-plane"></i>
                <h3>Nearest Airport</h3>
                <p>Khajuraho Airport (50 km) - 1.5 hours drive</p>
            </div>
            <div class="connectivity-card">
                <i class="fas fa-train"></i>
                <h3>Nearest Railway</h3>
                <p>Satna Railway Station (60 km) - 2 hours drive</p>
            </div>
        </div>
    </section>

    <!-- Safari Timing Section -->
    <section id="timing" class="timing-section">
        <h2 class="section-title">Safari Timing</h2>
        <table class="timing-table">
            <thead>
                <tr>
                    <th>Season</th>
                    <th>Core Zone</th>
                    <th>Buffer Zone</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Winter (Oct - Feb)</td>
                    <td>Sunrise - 11:00 AM<br>3:00 PM - Sunset</td>
                    <td>Sunrise - 11:00 AM<br>3:00 PM - Sunset</td>
                </tr>
                <tr>
                    <td>Summer (Mar - Jun)</td>
                    <td>Sunrise - 11:00 AM<br>4:00 PM - Sunset</td>
                    <td>Sunrise - 11:00 AM<br>4:00 PM - Sunset<br>(Night Safari 6:00 PM - 9:00 PM)</td>
                </tr>
                <tr>
                    <td>Monsoon (Jul - Sep)</td>
                    <td>Closed</td>
                    <td>Sunrise - 11:00 AM<br>4:00 PM - Sunset<br>(Night Safari 6:00 PM - 9:00 PM)</td>
                </tr>
            </tbody>
        </table>
    </section>

    <!-- Bottom Navigation Bar -->
    <nav id="bottom-nav">
        <a href="#banner"><i class="fas fa-home"></i><span>Home</span></a>
        <a href="#zones-carousel"><i class="fas fa-map"></i><span>Zones</span></a>
        <a href="#pricing"><i class="fas fa-money-bill"></i><span>Pricing</span></a>
        <a href="#booking"><i class="fas fa-calendar-check"></i><span>Booking</span></a>
        <a href="#about"><i class="fas fa-info-circle"></i><span>About</span></a>
    </nav>

    <!-- Floating Contact Button -->
    <div id="contact-btn">
        <i class="fas fa-plus"></i>
    </div>
    <div id="contact-options">
        <a href="tel:+911234567890" class="contact-option"><i class="fas fa-phone-alt"></i></a>
        <a href="https://wa.me/911234567890" class="contact-option"><i class="fab fa-whatsapp"></i></a>
    </div>

    <!-- Custom Script -->
    <script src="script.js"></script>
</body>
</html>
