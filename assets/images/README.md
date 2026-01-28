# Wedding Website - Images Directory

This directory contains all images used in the wedding website.

## Required Images

Please add the following images to this folder:

### Hero Section
- **hero-bg.jpg** - Background image for the hero section
  - Recommended size: 1920x1080px
  - Format: JPG
  - Quality: High quality, optimized

### Story Section
- **story-1.jpg** - First meeting photo
  - Recommended size: 800x800px
  - Format: JPG

- **story-2.jpg** - Dating/relationship photo
  - Recommended size: 800x800px
  - Format: JPG

- **story-3.jpg** - Engagement/proposal photo
  - Recommended size: 800x800px
  - Format: JPG

### Gallery Section
- **gallery-1.jpg** through **gallery-6.jpg** - Wedding photos for the gallery
  - Recommended size: 800x600px
  - Format: JPG
  - You can add more gallery images by following the pattern

### Gift Section
- **qr-groom.png** - Groom's bank transfer QR code
  - Recommended size: 500x500px
  - Format: PNG (for transparency support)

- **qr-bride.png** - Bride's bank transfer QR code
  - Recommended size: 500x500px
  - Format: PNG (for transparency support)

## Image Optimization Tips

Before uploading images, optimize them to improve website performance:

### Using ImageMagick (Command Line)
```bash
# Resize and optimize hero background
convert hero-bg.jpg -resize 1920x1080 -quality 85 hero-bg.jpg

# Resize and optimize story images
convert story-1.jpg -resize 800x800 -quality 85 story-1.jpg

# Resize and optimize gallery images
convert gallery-1.jpg -resize 800x600 -quality 85 gallery-1.jpg
```

### Using Online Tools
- **TinyPNG** - https://tinypng.com/ (PNG and JPG)
- **Squoosh** - https://squoosh.app/ (All formats)
- **Compressor.io** - https://compressor.io/ (All formats)

### Optimization Goals
- Keep file sizes under 500KB for hero background
- Keep file sizes under 200KB for story and gallery images
- Keep file sizes under 100KB for QR codes
- Maintain good visual quality (quality 80-85 is recommended)

## File Naming Convention

- Use lowercase letters
- Use hyphens (-) instead of spaces
- Use descriptive names
- Follow the naming pattern specified above

## Adding More Images

To add more gallery images:

1. Add the image file to this directory (e.g., `gallery-7.jpg`)
2. Edit `index.html` and add a new gallery item in the Gallery section
3. Follow the existing pattern for consistency

Example:
```html
<div class="gallery-item" data-index="6">
    <img src="assets/images/gallery-7.jpg" alt="Wedding Photo 7" loading="lazy">
    <div class="gallery-overlay">
        <i class="fas fa-search-plus"></i>
    </div>
</div>
```

## Image Formats Supported

- **JPG/JPEG** - Best for photos
- **PNG** - Best for graphics, logos, QR codes (supports transparency)
- **WebP** - Modern format (optional, for better compression)

## Responsive Images

All images are automatically responsive thanks to CSS. No additional configuration needed.

## Lazy Loading

Images use native lazy loading (`loading="lazy"` attribute) for better performance.

## Troubleshooting

### Images Not Displaying
- Check that filenames match exactly (case-sensitive on Linux servers)
- Verify image files exist in this directory
- Check file permissions (should be readable: 644)
- Clear browser cache

### Images Loading Slowly
- Reduce file sizes through optimization
- Ensure images are properly sized (don't upload 5MB photos)
- Use appropriate image formats

### Poor Quality
- Don't compress too much (stay above quality 75)
- Use appropriate source images (high resolution)
- Avoid excessive resizing

## License

Please ensure you have the rights to use all images on your website, especially if using professional photography.

---

**Note:** This website template does not include placeholder images. You must add your own wedding photos to make the website complete and personal.


