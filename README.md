# 🎯 Interactive Resume Website

A modern, responsive digital resume built with React.js and styled with Tailwind CSS. This project showcases a clean, professional design with smooth animations and interactive elements.

## ✨ Features

- **📱 Fully Responsive Design** - Looks great on all devices
- **🎨 Modern UI/UX** - Clean, professional interface with smooth animations
- **⚡ Interactive Elements** - Hover effects, transitions, and micro-animations
- **🧩 Modular Components** - Well-organized, reusable React components
- **🎭 Professional Sections** - Header, Education, Skills, Contact, Links, and more
- **📄 PDF Download** - Direct resume download functionality
- **🔗 Social Links** - Quick access to professional profiles

## 🚀 Live Demo

[View Live Demo](https://your-resume-website.com) <!-- Replace with your actual URL -->

## 📸 Screenshots

![Resume Header](screenshots/header.png)
![Skills Section](screenshots/skills.png)
![Contact Section](screenshots/contact.png)

## 🛠️ Built With

- **React.js** - Frontend framework
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons
- **Vite** - Build tool and dev server

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- Node.js (v14.0 or higher)
- npm or yarn package manager

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/interactive-resume.git
   cd interactive-resume
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   Navigate to http://localhost:5173
   ```

## 📁 Project Structure

```
interactive-resume/
├── public/
│   ├── index.html
│   └── resume.pdf
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Education.jsx
│   │   ├── TechnicalSkills.jsx
│   │   ├── ContactInformation.jsx
│   │   ├── ProfessionalLinks.jsx
│   │   ├── Documents.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── README.md
```

## 🎨 Customization

### Personal Information
Update your personal details in the respective components:

- **Header.jsx** - Name, title, graduation info
- **Education.jsx** - University, degree, CGPA
- **ContactInformation.jsx** - Email, phone, address
- **ProfessionalLinks.jsx** - GitHub, LinkedIn, LeetCode profiles

### Skills & Technologies
Modify the `technicalSkills` object in `TechnicalSkills.jsx`:

```javascript
const technicalSkills = {
  "Programming Languages": ["Java", "Python", "C++", "JavaScript"],
  "Web Technologies": ["React", "Node.js", "HTML5", "CSS3"],
  // Add your skills here
};
```

### Styling
- Colors and gradients can be customized using Tailwind CSS classes
- Animations and transitions are easily adjustable
- Component-specific styling is contained within each file

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌟 Key Sections

### 🎯 Header
- Professional profile photo placeholder
- Name and title with AI/ML specialization
- Graduation timeline and CGPA

### 🎓 Education
- Degree information with university details
- Academic achievements and honors
- Timeline and location

### 💻 Technical Skills
- Categorized skill sets with icons
- Interactive hover effects
- Professional technology stack

### 📞 Contact Information
- Email, phone, and address
- Interactive contact cards
- Hover animations

### 🔗 Professional Links
- GitHub repositories
- LinkedIn profile
- LeetCode and coding platforms
- GeeksforGeeks profile

### 📄 Documents
- Resume PDF download
- Portfolio website link
- Call-to-action buttons

## 🎯 Performance Features

- **Fast Loading** - Optimized with Vite
- **Smooth Animations** - CSS transitions and transforms
- **Mobile Optimized** - Responsive design patterns
- **SEO Friendly** - Proper HTML structure and meta tags

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Tailwind CSS** for the amazing utility classes
- **Lucide React** for the beautiful icons
- **React.js** community for excellent documentation
- **Vite** for the fast development experience

## 📧 Contact

Your Name - [your.email@example.com](mailto:your.email@example.com)

Project Link: [https://github.com/yourusername/interactive-resume](https://github.com/yourusername/interactive-resume)

---

⭐ **Star this repository if you found it helpful!** ⭐

Made with ❤️ by [Your Name]