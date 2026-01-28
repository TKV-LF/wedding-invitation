# 💍 Thuỷ & Thuỳ - Wedding Website

A beautiful, bilingual (Vietnamese-English) wedding website featuring a romantic pastel theme with white, pink, beige, and gold colors.

**Couple:** Nguyễn Trọng Thuỷ & Lê Thị Diệu Thuỳ  
**Engagement:** February 22, 2026  
**Wedding:** February 26, 2026

---

## ✨ Features

- 🌐 **Bilingual Support** - Vietnamese and English with one-click toggle
- ⏰ **Countdown Timer** - Real-time countdown to the wedding day
- 📖 **Love Story** - Beautiful story section with photo transitions
- 📅 **Event Information** - Two events (Engagement & Wedding) with Google Maps integration
- 📸 **Photo Gallery** - Responsive grid with lightbox viewer
- 📝 **RSVP Form** - Simple 3-field form with validation
- 🎁 **Gift Section** - QR code display for bank transfers
- 📱 **Fully Responsive** - Mobile-first design, works on all devices
- 🎨 **Elegant Design** - Romantic pastel theme with smooth animations
- ⚡ **Performance Optimized** - Lazy loading images, smooth scrolling

---

## 🏗️ Project Structure

```
Wedding/
├── index.html                  # Main HTML file
├── styles.css                  # All styles and responsive design
├── script.js                   # JavaScript for interactivity
├── README.md                   # This file
│
├── assets/
│   └── images/
│       ├── hero-bg.jpg         # Hero section background
│       ├── story-1.jpg         # Story section image 1
│       ├── story-2.jpg         # Story section image 2
│       ├── story-3.jpg         # Story section image 3
│       ├── gallery-1.jpg       # Gallery image 1
│       ├── gallery-2.jpg       # Gallery image 2
│       ├── gallery-3.jpg       # Gallery image 3
│       ├── gallery-4.jpg       # Gallery image 4
│       ├── gallery-5.jpg       # Gallery image 5
│       ├── gallery-6.jpg       # Gallery image 6
│       ├── qr-groom.png        # Groom's QR code for gifts
│       └── qr-bride.png        # Bride's QR code for gifts
│
├── api/
│   ├── rsvp.php               # PHP backend for RSVP
│   └── .htaccess              # Apache configuration
│
├── backend-nodejs/
│   ├── server.js              # Node.js/Express backend
│   ├── package.json           # Node dependencies
│   ├── .gitignore             # Git ignore file
│   └── .env.example           # Environment variables template
│
└── database/
    ├── schema.sql             # Database schema
    └── setup-instructions.md  # Database setup guide
```

---

## 🚀 Quick Start

### Option 1: Static Website (No Backend)

If you just want to display the website without RSVP functionality:

1. **Upload files to your server:**
   ```bash
   # Upload these files via FTP or file manager:
   - index.html
   - styles.css
   - script.js
   - assets/ folder with all images
   ```

2. **Access your website:**
   ```
   http://yourdomain.com/
   ```

3. **Note:** RSVP form will not work without backend setup.

---

### Option 2: PHP Backend (Recommended for Shared Hosting)

**Requirements:**
- PHP 7.4 or higher
- MySQL 5.7 or higher
- Apache with mod_rewrite enabled

**Step 1: Upload Files**
```bash
# Upload via FTP/SFTP or cPanel File Manager:
- index.html
- styles.css
- script.js
- assets/ folder
- api/ folder
```

**Step 2: Setup Database**
```bash
# See database/setup-instructions.md for detailed steps
1. Create database 'wedding_db'
2. Import database/schema.sql
3. Create database user
```

**Step 3: Configure PHP Backend**

Edit `api/rsvp.php` and update database credentials:

```php
define('DB_HOST', 'localhost');
define('DB_NAME', 'wedding_db');
define('DB_USER', 'your_db_user');
define('DB_PASS', 'your_db_password');
```

**Step 4: Test RSVP**
1. Open your website
2. Scroll to RSVP section
3. Fill out the form and submit
4. Check database for new entry

**Troubleshooting:**
- Check PHP error logs if submission fails
- Ensure `.htaccess` is uploaded to `/api/` folder
- Verify file permissions (644 for PHP files)

---

### Option 3: Node.js Backend (VPS/Cloud Hosting)

**Requirements:**
- Node.js 14.x or higher
- MySQL 5.7 or higher
- PM2 (recommended for production)

**Step 1: Clone and Install**
```bash
# Upload files to server
cd /var/www/wedding

# Install Node.js dependencies
cd backend-nodejs
npm install
```

**Step 2: Setup Database**
```bash
# See database/setup-instructions.md
mysql -u root -p < database/schema.sql
```

**Step 3: Configure Environment**
```bash
cd backend-nodejs
cp .env.example .env
nano .env

# Update these values:
DB_HOST=localhost
DB_NAME=wedding_db
DB_USER=your_db_user
DB_PASSWORD=your_db_password
PORT=3000
```

**Step 4: Start Server**

**Development:**
```bash
npm run dev
```

**Production (with PM2):**
```bash
# Install PM2 globally
npm install -g pm2

# Start server
pm2 start server.js --name wedding-api

# Save PM2 configuration
pm2 save

# Setup auto-start on reboot
pm2 startup
```

**Step 5: Configure Nginx (Reverse Proxy)**

Create `/etc/nginx/sites-available/wedding`:

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;
    
    root /var/www/wedding;
    index index.html;
    
    # Serve static files
    location / {
        try_files $uri $uri/ =404;
    }
    
    # Proxy API requests to Node.js
    location /api/ {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable site and restart Nginx:
```bash
sudo ln -s /etc/nginx/sites-available/wedding /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

---

## 📸 Adding Your Photos

### Required Images

Replace placeholder images in `assets/images/` with your wedding photos:

| File | Purpose | Recommended Size |
|------|---------|------------------|
| `hero-bg.jpg` | Hero section background | 1920x1080px |
| `story-1.jpg` | First meeting photo | 800x800px |
| `story-2.jpg` | Dating/love photo | 800x800px |
| `story-3.jpg` | Engagement/proposal photo | 800x800px |
| `gallery-1.jpg` to `gallery-6.jpg` | Gallery photos | 800x600px each |
| `qr-groom.png` | Groom's bank QR code | 500x500px |
| `qr-bride.png` | Bride's bank QR code | 500x500px |

### Image Optimization Tips

```bash
# Optimize images before uploading (use ImageMagick):
mogrify -resize 1920x1080 -quality 85 hero-bg.jpg
mogrify -resize 800x800 -quality 85 story-*.jpg
mogrify -resize 800x600 -quality 85 gallery-*.jpg

# Or use online tools:
- TinyPNG (https://tinypng.com/)
- Squoosh (https://squoosh.app/)
```

### Adding More Gallery Images

1. Add images to `assets/images/` folder
2. Edit `index.html` in Gallery section:

```html
<div class="gallery-item" data-index="6">
    <img src="assets/images/gallery-7.jpg" alt="Wedding Photo 7" loading="lazy">
    <div class="gallery-overlay">
        <i class="fas fa-search-plus"></i>
    </div>
</div>
```

---

## 🎨 Customization

### Change Colors

Edit `styles.css` CSS variables:

```css
:root {
    --color-primary: #f4c2c2;        /* Main pink color */
    --color-primary-dark: #e8a5a5;   /* Darker pink */
    --color-secondary: #d4a574;      /* Beige color */
    --color-gold: #d4af37;           /* Gold accent */
}
```

### Update Couple Information

Edit `index.html`:

```html
<!-- Line ~40: Update names -->
<h1 class="hero-title">
    <span class="groom-name">Your Groom Name</span>
    <span class="ampersand">&</span>
    <span class="bride-name">Your Bride Name</span>
</h1>

<!-- Line ~46: Update date -->
<div class="hero-date">
    <span>DD.MM.YYYY</span>
</div>
```

### Update Event Details

Edit `index.html` Events section (around line 130):

```html
<!-- Update date, time, and location for each event -->
<span data-vi="Date in Vietnamese" data-en="Date in English">...</span>
```

### Change Fonts

Edit `index.html` (in `<head>` section):

```html
<!-- Replace Google Fonts link with your preferred fonts -->
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet">
```

Then update in `styles.css`:

```css
:root {
    --font-heading: 'Your Heading Font', serif;
    --font-body: 'Your Body Font', sans-serif;
}
```

---

## 🌐 Language Management

### Add/Edit Translations

Edit `script.js` - translations object:

```javascript
const translations = {
    vi: {
        'nameRequired': 'Vui lòng nhập họ tên',
        // Add more Vietnamese translations
    },
    en: {
        'nameRequired': 'Please enter your name',
        // Add more English translations
    }
};
```

### Set Default Language

Edit `script.js`:

```javascript
// Change default language (line 10)
let currentLanguage = 'vi'; // or 'en'
```

---

## 📱 Testing

### Local Testing

1. **Using Python (easiest):**
   ```bash
   cd /path/to/wedding
   python3 -m http.server 8000
   # Visit: http://localhost:8000
   ```

2. **Using PHP:**
   ```bash
   cd /path/to/wedding
   php -S localhost:8000
   # Visit: http://localhost:8000
   ```

3. **Using Node.js (http-server):**
   ```bash
   npm install -g http-server
   cd /path/to/wedding
   http-server -p 8000
   # Visit: http://localhost:8000
   ```

### Mobile Testing

- Use Chrome DevTools (F12 → Toggle Device Toolbar)
- Test on actual devices
- Use tools like BrowserStack or LambdaTest

### Browser Compatibility

Tested and working on:
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🔒 Security Checklist

Before going live:

- [ ] Change all default database passwords
- [ ] Update database credentials in backend files
- [ ] Enable HTTPS (SSL certificate)
- [ ] Set proper file permissions (644 for files, 755 for directories)
- [ ] Disable PHP error display in production
- [ ] Enable error logging
- [ ] Setup database backups
- [ ] Test RSVP form submission
- [ ] Add rate limiting to prevent spam
- [ ] Sanitize all user inputs (already implemented)
- [ ] Keep software updated (PHP, MySQL, Node.js)

---

## 📊 Viewing RSVP Data

### Using phpMyAdmin

1. Login to phpMyAdmin
2. Select `wedding_db` database
3. Click on `rsvp_guests` table
4. View all submissions

### Using MySQL Command Line

```bash
mysql -u root -p
USE wedding_db;
SELECT * FROM rsvp_guests ORDER BY created_at DESC;
```

### Export to CSV

```bash
mysql -u root -p -e "SELECT * FROM rsvp_guests" wedding_db > rsvps.csv
```

### Using Node.js API

The Node.js backend includes admin endpoints:

```bash
# Get RSVP count
curl http://localhost:3000/api/rsvp/count

# Get all RSVPs (add authentication before production use!)
curl http://localhost:3000/api/rsvp/all
```

---

## 🐛 Troubleshooting

### RSVP Form Not Working

1. **Check browser console for errors** (F12 → Console tab)
2. **Verify backend is running:**
   - PHP: Check PHP error logs
   - Node.js: Check if server is running on correct port
3. **Check database connection:**
   - Verify credentials in config files
   - Test MySQL connection manually
4. **Check API endpoint URL in script.js** (line 384)

### Images Not Loading

1. Check file paths are correct (case-sensitive on Linux)
2. Verify images exist in `assets/images/` folder
3. Check file permissions (should be readable)
4. Use browser DevTools Network tab to see 404 errors

### Language Toggle Not Working

1. Verify all elements have `data-vi` and `data-en` attributes
2. Check browser console for JavaScript errors
3. Clear browser cache and reload

### Countdown Shows Negative Numbers

Update wedding date in `script.js`:

```javascript
const weddingDate = new Date('2026-02-26T11:00:00').getTime();
```

---

## 📦 Deployment Checklist

Before deploying to production:

- [ ] Replace all placeholder images with your photos
- [ ] Update couple names and dates
- [ ] Update event locations and Google Maps links
- [ ] Update contact phone numbers
- [ ] Upload QR codes for gift section
- [ ] Test all sections on mobile and desktop
- [ ] Setup database and test RSVP form
- [ ] Configure SSL certificate (HTTPS)
- [ ] Test language toggle functionality
- [ ] Verify countdown timer is accurate
- [ ] Check all links work correctly
- [ ] Test on multiple browsers
- [ ] Setup analytics (optional: Google Analytics)
- [ ] Create database backup system
- [ ] Configure error monitoring
- [ ] Test performance (Google PageSpeed Insights)

---

## 🎯 Performance Optimization

### Already Implemented

- ✅ Lazy loading images
- ✅ Minified CSS and optimized selectors
- ✅ Smooth scroll with CSS
- ✅ Debounced scroll events
- ✅ Optimized animations
- ✅ Mobile-first responsive design

### Additional Optimizations (Optional)

1. **Enable Gzip Compression**

Add to `.htaccess`:
```apache
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>
```

2. **Enable Browser Caching**

Add to `.htaccess`:
```apache
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

3. **Use CDN for Font Awesome (already using CDN)**

4. **Minify CSS and JavaScript**

Use online tools:
- CSS: https://cssminifier.com/
- JS: https://javascript-minifier.com/

---

## 📝 License

This wedding website template is provided as-is for personal use.

---

## 💖 Credits

**Design & Development:** Professional web design for Thuỷ & Thuỳ  
**Fonts:** Google Fonts (Playfair Display, Poppins)  
**Icons:** Font Awesome  
**Theme:** Romantic Pastel (White, Pink, Beige, Gold)

---

## 📞 Support

For technical issues:

1. Check this README thoroughly
2. Review database setup instructions
3. Check server error logs
4. Test in different browsers
5. Verify all file paths and permissions

---

## 🎉 Congratulations!

Wishing Nguyễn Trọng Thuỷ and Lê Thị Diệu Thuỳ a lifetime of love and happiness! 💕

**Chúc mừng hạnh phúc!** 🎊


