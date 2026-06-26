#!/usr/bin/env python3
"""
Auto-compress images in the repo.
Resizes images larger than 1200px wide to 1200px max.
Compresses JPEG/PNG to reduce file size.
"""
import os, sys
from PIL import Image

IMAGES_DIR = "images"
MAX_WIDTH = 1200
JPEG_QUALITY = 80

def compress_image(path):
    try:
        img = Image.open(path)
        original_size = os.path.getsize(path)
        
        # Skip small files
        if original_size < 100 * 1024:
            return False
        
        modified = False
        
        # Resize if too large
        if img.width > MAX_WIDTH:
            ratio = MAX_WIDTH / img.width
            new_size = (MAX_WIDTH, int(img.height * ratio))
            img = img.resize(new_size, Image.LANCZOS)
            modified = True
        
        # Convert RGBA to RGB for JPEG
        save_path = path
        if img.mode in ('RGBA', 'P'):
            img = img.convert('RGB')
            if path.endswith('.png'):
                save_path = path.replace('.png', '.jpg')
        
        # Save with compression
        if save_path.endswith('.jpg') or save_path.endswith('.jpeg'):
            img.save(save_path, 'JPEG', quality=JPEG_QUALITY, optimize=True)
        elif save_path.endswith('.png'):
            img.save(save_path, 'PNG', optimize=True)
        
        new_size = os.path.getsize(save_path)
        if new_size < original_size:
            print(f"  Compressed: {os.path.basename(path)} {original_size/1024:.0f}KB -> {new_size/1024:.0f}KB")
            return True
        return False
    except Exception as e:
        print(f"  ERROR processing {path}: {e}")
        return False

def main():
    count = 0
    for root, dirs, files in os.walk(IMAGES_DIR):
        for fname in files:
            if fname.lower().endswith(('.jpg', '.jpeg', '.png')):
                path = os.path.join(root, fname)
                if compress_image(path):
                    count += 1
    
    print(f"\nCompressed {count} images")

if __name__ == "__main__":
    main()
