# PDF Tools

**A PDF editor, letterhead & letter writer, a PDF reader, a document scanner and 38 PDF tools in one HTML file — no uploads, no server, no account.**

Everything runs in your browser. Your files never leave your device.

🔗 **[abdullahmuhy-pixel.github.io/Pdf-tools](https://abdullahmuhy-pixel.github.io/Pdf-tools)**

---

## Highlights

### ✏️ PDF Editor (Edit · Fill & Sign · Annotate · Pages)
- **Fill forms right on the page** — text boxes, multi-line fields, checkboxes, radio buttons, drop-downs and signature fields. Values are saved into the real PDF form fields, with an option to flatten
- **Signatures** — draw (smooth, pressure-aware), type in 4 handwriting styles, or upload a photo (background removed automatically). Up to 8 signatures are remembered on the device
- **Edit existing text** — tap a line to change it; the original font style, size and colours are matched
- **Add** text boxes (font, size, bold/italic, colour), images, white-out, boxes, circles, lines, arrows, ticks, crosses, dots, today's date and stamps (Approved, Paid, Draft…)
- Everything can be selected, moved, resized, recoloured, duplicated and deleted, with full **undo / redo**
- **Pages** — rotate, insert blank, duplicate, move up/down, extract or delete pages
- Works on rotated pages; keyboard shortcuts on desktop (Ctrl+Z/Y/S/D, Delete, arrow keys)

### 🏢 Letterheads & Letters
- **Design a letterhead** for any business: 6 styles (Classic, Modern, Bold band, Minimal, Sidebar, Elegant), logo (white backgrounds removed automatically), company name, tagline, address, phone, email, website, registration/VAT footer, brand colour and font — with a live preview
- **Upload a ready-made letterhead** (image or PDF). Full-page or header-only (with optional footer image); the writing area is **detected automatically** and can be fine-tuned
- **Write letters** on any letterhead: date, reference, recipient, greeting, bold subject line, body (justify option), closing, saved signature, name and title, enclosures. Long letters flow onto more pages with page numbers; letterhead on every page or the first page only
- Letters are saved as PDFs in My Files and **can be re-opened and edited any time** — or finished in the PDF editor
- Blank letterhead page in the PDF editor, or download the letterhead itself as a PDF

### 📖 PDF Reader
- Smooth continuous scrolling that stays fast on long documents (pages render only when near the screen)
- Pinch, Ctrl + scroll or double-tap to zoom; fit-to-width
- Search with highlighted matches and next/previous
- Page thumbnails and table of contents (outline)
- Day, sepia and night reading modes
- Selectable, copyable text
- Remembers the page you were on
- Opens password-protected PDFs
- **Annotate:** highlighter, pen and eraser — all saved into the PDF
- Share, download, print and document info

### 📷 Document Scanner
- Full-screen camera with live document-edge detection
- Auto-capture when the document is steady, flash/torch, single or batch mode
- Import photos from the gallery (auto-detected too)
- Drag the 4 corners or the edges, with a magnifier, to fine-tune the crop
- Perspective correction straightens skewed photos
- Filters: **Magic colour** (removes shadows), Lighten, Grayscale, **Black & white** (adaptive threshold)
- Rotate, reorder and delete pages; apply a filter to all pages
- Save as PDF (fit image, A4 or Letter) or JPG

### 📁 My Files
- Every scan, opened PDF and tool result is kept on the device (IndexedDB)
- Thumbnails, search, sort, filter by type
- Rename, duplicate, share, download, delete; multi-select to merge, share or delete
- Send any file straight into another tool, or pick from My Files inside any tool

---

## Tools

| Category | Tools |
|---|---|
| **Scan** | Document Scanner, QR Code (create/read), Enhance Image, Business Card, Study Cards |
| **View & Edit** | PDF Reader, Edit PDF, Fill & Sign, Letterhead & Letters, Signature, Fill Forms, Watermark, Page Numbers, Header & Footer, Edit Metadata |
| **Convert** | Create PDF, Image → PDF, Text → PDF, HTML → PDF, Word → PDF, PDF → JPG, PDF → Text, PDF → Word, OCR |
| **Organize** | Merge, Split, Organize pages, Rotate, Delete pages, Insert page, Crop, Resize pages |
| **Optimize** | Compress, Grayscale, Flatten, Extract images |
| **Security** | Unlock PDF (remove password), Redact |

---

## Features

- ✅ **Private** — no uploads, no tracking, no cookies, no ads
- ✅ **Works offline** after the first visit
- ✅ **Installable PWA** — add to home screen on Android, iOS or desktop; can open PDFs from the OS ("Open with")
- ✅ **Phone-first** — bottom navigation, sheets, touch gestures, and the back button works
- ✅ **Light, dark or automatic theme**
- ✅ **Open source** — MIT licence

---

## Libraries used

| Library | Purpose |
|---------|---------|
| [pdf-lib](https://pdf-lib.js.org/) | PDF creation and editing |
| [PDF.js](https://mozilla.github.io/pdf.js/) | Rendering, text layer and search |
| [Mammoth.js](https://github.com/mwilliamson/mammoth.js) | DOCX to HTML |
| [Tesseract.js](https://tesseract.projectnaptha.com/) | OCR |
| [docx](https://docx.js.org/) | PDF to Word |
| [qrcode](https://github.com/soldair/node-qrcode) / [jsQR](https://github.com/cozmo/jsQR) | QR codes |

The scanner's edge detection, perspective correction and filters are written from scratch in plain JavaScript (no OpenCV), so the app stays a single file.

---

## Deploy your own

### GitHub Pages (recommended)
1. Fork this repo
2. Go to **Settings → Pages**
3. Source: **Deploy from branch → main → / (root)**
4. Your site will be live at `https://yourusername.github.io/pdf-tools`

### Local use
Open `index.html` in a modern browser. (The camera and offline mode need `https://` or `localhost`.)

---

## Licence

MIT — free to use, modify, and distribute.
