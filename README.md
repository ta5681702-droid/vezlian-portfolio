# VEZLIAN — Personal Graphic Designer Portfolio

A 2026 dark luxury personal website for **MD Tanim Chowdhury** built with HTML5, CSS3, and Vanilla JavaScript.

## Setup Instructions

### 1. File Placement (Crucial)
Place your reference images inside the `images/` directory:
- Save your logo image as `images/logo.png`
- Save your portrait photo as `images/profile.jpg`

Place your showcase project images inside the `images/projects/` directory.

### 2. Updating Your Personal Information & Projects
You **do not need to modify HTML** to change your details or portfolio items. 

Open `js/script.js` and locate the `portfolioData` object at the top of the file:

```javascript
const portfolioData = {
  personal: {
    firstName: "MD TANIM",
    lastName: "CHOWDHURY",
    title: "Graphic Designer",
    tagline: "...",
    email: "your-email@domain.com",
    cvUrl: "path/to/your/cv.pdf"
  },
  ...
}