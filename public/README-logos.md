# Client Logos Setup

## How to Add Your Client Logos

1. **Replace Placeholder Files**:
   - Replace the existing `logo-placeholder-1.svg` through `logo-placeholder-10.svg` files with your actual client logos
   - Keep the same filenames for easy replacement

2. **Supported Formats**:
   - **SVG** (recommended for scalability)
   - **PNG** (with transparent background)
   - **JPG** (if no transparency needed)

3. **Logo Specifications**:
   - **Recommended size**: 120x60 pixels (2:1 aspect ratio)
   - **Maximum size**: 200x100 pixels
   - **Background**: Transparent or white
   - **Format**: SVG preferred for crisp display at all sizes

4. **File Naming**:
   - Keep the naming convention: `logo-placeholder-1.svg`, `logo-placeholder-2.svg`, etc.
   - Or update the `clientLogos` array in `src/app/components/Clients.tsx` with your custom filenames

5. **Adding More Logos**:
   - To add more than 10 logos, update the `clientLogos` array in the Clients component
   - Add corresponding logo files to the public folder

## Current Placeholder Logos

The current setup includes 10 placeholder SVG logos that will display "Client 1", "Client 2", etc. These are ready to be replaced with your actual client logos.

## Animation Features

- **Smooth endless loop**: Logos scroll continuously from right to left
- **Hover to pause**: Animation pauses when you hover over the logos
- **Responsive design**: Works on all screen sizes
- **Fallback handling**: Shows client name if logo fails to load
