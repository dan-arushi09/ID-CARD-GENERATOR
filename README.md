# ID-CARD-GENERATOR

## 1. Project Overview
The ID Card Generator is a web application that allows users to create customized student or staff ID cards. Users fill in personal and academic details, upload a photo, and instantly generate a professional-looking ID card that can be downloaded as a JPEG image.  
This tool is ideal for educational institutions, clubs, or events that require ID cards.

## 2. Features
### ✅ Form Inputs
- College Name  
- Name  
- Course  
- Branch  
- Enrollment Number  
- Batch  
- Mobile Number  
- Blood Group  
- Optional Card Number  
- Photo upload (JPG/PNG/JPEG)

### ✅ ID Card Generation
- Dynamic display of user information on a card  
- Photo displayed in a cropped left section  
- Proper text formatting: uppercase for names, title case for courses

### ✅ Download Functionality
- ID card can be downloaded as a high-resolution JPEG using `html2canvas`  
- File name is automatically generated from the user’s name

### ✅ Validation & Error Handling
- Ensures all required fields are filled  
- Alerts user if the photo is not uploaded  
- Provides inline error messages for missing inputs

### ✅ Stylish & Responsive Layout
- Modern card layout with header, body, and footer  
- Left section for photo, right section for details  
- Footer for card number and director signature  
- Hover effects for buttons

## 3. How It Works
1. **Fill the Form**  
   User enters all required details:  
   `College Name | Name | Course | Branch | Enrollment No. | Batch | Mobile | Blood Group | Card No. (optional)`
2. **Upload Photo**  
   Upload a photo (JPG, JPEG, PNG)
3. **Generate ID Card**  
   Click **Generate** → the ID card is displayed dynamically on the page
4. **Download ID Card**  
   Click **Download** → ID card is converted to JPEG and saved locally

## 4. File Structure
ID-Card-Generator/
│
├── index.html       # HTML structure and form
├── styles.css       # CSS for styling form and card
├── script.js        # JS logic for generation and download
├── images/          # Optional folder for screenshots
└── README.md        # Project documentation

## 5. Technologies Used
- HTML5 – Structure and form inputs  
- CSS3 – Styling of form, buttons, and generated ID card  
- JavaScript (ES6) – Dynamic card generation, validation, and download  
- html2canvas – Converts the HTML card to a downloadable image

## 6. Customization Options
- Change color themes in `styles.css`  
- Resize card, photo, or sections  
- Add more fields (update form + JS logic)  
- Create multiple card templates for different institutions

## 7. Future Improvements
- Add QR code containing user details  
- Enable print-ready format for A4 paper  
- Add dark/light themes for ID card design  
- Include multiple ID card templates  
- Demo GIF (Optional) showing flow: form → generate → download

## 8. Notes
- Only supports JPG, JPEG, PNG images  
- Optional card number shows a blank line if left empty  
- All required fields must be filled to generate the card
