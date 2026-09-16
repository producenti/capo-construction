import pymupdf
import os
import sys

downloads_dir = r"C:\Users\Macinto'ks\Downloads"
target_file = None

for f in os.listdir(downloads_dir):
    if "cc cv" in f.lower() or ("cc" in f.lower() and "cv" in f.lower()):
        target_file = os.path.join(downloads_dir, f)
        print(f"Found PDF file: {target_file}")
        break

if not target_file or not os.path.exists(target_file):
    print("PDF file not found!")
    sys.exit(1)

doc = pymupdf.open(target_file)
print(f"Total pages: {len(doc)}")

output_img_dir = os.path.join(os.getcwd(), "public", "images", "pdf_images")
os.makedirs(output_img_dir, exist_ok=True)

full_text = []
image_counter = 0

for page_idx in range(len(doc)):
    page = doc[page_idx]
    page_text = page.get_text()
    full_text.append(f"=== PAGE {page_idx + 1} ===")
    full_text.append(page_text)
    
    # Also render page as high resolution image in case images are rasterized in PDF
    pix = page.get_pixmap(dpi=200)
    page_img_path = os.path.join(output_img_dir, f"page_{page_idx + 1}.png")
    pix.save(page_img_path)
    print(f"Rendered page {page_idx + 1} to {page_img_path}")

    # Extract embedded raw images
    images = page.get_images()
    for img_idx, img in enumerate(images):
        xref = img[0]
        base_image = doc.extract_image(xref)
        image_bytes = base_image["image"]
        image_ext = base_image["ext"]
        img_name = f"extracted_p{page_idx + 1}_img{img_idx + 1}.{image_ext}"
        img_path = os.path.join(output_img_dir, img_name)
        with open(img_path, "wb") as f:
            f.write(image_bytes)
        image_counter += 1
        print(f"Saved embedded image: {img_name}")

print(f"Extracted {image_counter} embedded images.")

text_out_path = os.path.join(os.getcwd(), "cv_extracted_text.txt")
with open(text_out_path, "w", encoding="utf-8") as f:
    f.write("\n".join(full_text))

print(f"Saved extracted text to {text_out_path}")
