#!/usr/bin/env python3
"""Generate tiny WebP placeholders from the portfolio's original images.

Install once with: python -m pip install Pillow
Run from the repository root with: python scripts/generate_image_thumbnails.py
The generated public/image-thumbnails files are intended to be committed alongside
the UI changes so the browser can show a genuine image preview before the full asset.
"""
from pathlib import Path
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
SOURCE_DIR = ROOT / "src" / "assets" / "img"
OUTPUT_DIR = ROOT / "public" / "image-thumbnails"
MAX_WIDTH = 80
QUALITY = 28

ASSETS = [
    "NP_DP_2.png",
    "RIA.jpg",
    "soilnwater_banner.png",
    "shivoham_.png",
    "yogateacherstrainingcourses.png",
    "ybm.png",
    "Satvadig_.png",
    "multi-workspace-doc-assistant.webp",
    "docs-studio-preview.webp",
]

def main():
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    total_before = 0
    total_after = 0
    for filename in ASSETS:
        source = SOURCE_DIR / filename
        if not source.exists():
            raise FileNotFoundError(f"Original image not found: {source}")

        with Image.open(source) as opened:
            image = ImageOps.exif_transpose(opened)
            width = min(MAX_WIDTH, image.width)
            height = max(1, round(image.height * (width / image.width)))
            image = image.resize((width, height), Image.Resampling.LANCZOS)
            image = image.convert("RGBA" if "A" in image.getbands() else "RGB")

            destination = OUTPUT_DIR / f"{Path(filename).stem}.webp"
            image.save(destination, "WEBP", quality=QUALITY, method=6)
            total_before += source.stat().st_size
            total_after += destination.stat().st_size
            print(f"{filename} -> {destination.relative_to(ROOT)} ({destination.stat().st_size:,} bytes)")

    print(f"Generated {len(ASSETS)} thumbnails.")
    if total_before:
        print(f"Source total: {total_before:,} bytes; thumbnails total: {total_after:,} bytes.")

if __name__ == "__main__":
    main()
