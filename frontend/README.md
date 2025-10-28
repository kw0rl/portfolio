# Portfolio Website

A modern, animated portfolio website built with Next.js, featuring a stunning PrismaticBurst WebGL background and smooth scrolling sections.

## ✨ Features

- **Animated WebGL Background**: Beautiful PrismaticBurst effect with customizable colors and animations
- **5 Main Sections**:
  - 🏠 **Home**: Hero section with introduction
  - 👨‍💻 **About**: Technical skills with animated progress bars
  - 💼 **Works**: Portfolio showcase with Live Demo buttons
  - 🛠️ **Services**: Web dev, mobile dev, and frontend services
  - 📧 **Contact**: Contact form with email integration
- **Responsive Design**: Mobile-first approach with glass-morphism effects
- **Smooth Scrolling**: Seamless navigation between sections
- **Email Integration**: Contact form sends messages to your email
- **Accessibility**: Keyboard navigation and reduced-motion support

## 🚀 Tech Stack

- **Frontend**: Next.js 16 with TypeScript
- **Styling**: Tailwind CSS with custom animations
- **WebGL**: OGL library for 3D background effects
- **Email**: Next.js API routes (ready for nodemailer integration)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Background Colors
Edit the `colors` prop in `PrismaticBurst` component in `app/page.tsx`:
```tsx
colors={['#00ffff', '#0080ff', '#0040ff', '#8000ff', '#ff0080']}
```

### Personal Information
Update the following in `app/page.tsx`:
- Hero section title and description
- Skills and percentages in the `skills` array
- Projects in the `projects` array
- Services in the `services` array
- Contact information (email, phone, location)

### Email Setup
To enable real email sending:

1. **Install nodemailer**
   ```bash
   npm install nodemailer @types/nodemailer
   ```

2. **Add environment variables** (create `.env.local`):
   ```env
   EMAIL_USER=your.email@gmail.com
   EMAIL_PASS=your-app-password
   ```

3. **Uncomment email code** in `app/api/contact/route.ts`

## 🎯 Sections Overview

### 1. Home Section
- Hero introduction with animated background
- Role badges (Web Developer, Mobile App Developer, AI Specialist)
- Call-to-action button

### 2. About Section
- Personal introduction
- Technical skills with animated progress bars
- Customizable skill levels

### 3. Works Section
- Project showcase with cards
- Technology badges for each project
- Live Demo buttons (customize URLs)

### 4. Services Section
- Three main service categories
- Feature lists for each service
- Icon-based design

### 5. Contact Section
- Contact information display
- Social media links
- Contact form for affirmations/messages
- Form validation and submission handling

## 🔧 Customization Guide

### Adding New Projects
```tsx
const projects = [
  {
    title: 'Your Project Name',
    description: 'Project description...',
    technologies: ['React', 'Node.js', 'MongoDB'],
    demoUrl: 'https://your-demo-url.com',
    image: '/your-image.jpg'
  },
  // Add more projects...
];
```

### Updating Skills
```tsx
const skills = [
  { name: 'React', level: 95 },
  { name: 'Your Skill', level: 80 },
  // Add more skills...
];
```

### Modifying Background
```tsx
<PrismaticBurst
  intensity={1.2}        // Brightness (0.1 - 3.0)
  speed={0.4}           // Animation speed (0.1 - 2.0)
  animationType="rotate3d" // 'rotate' | 'rotate3d' | 'hover'
  colors={['#00ffff', '#0080ff']} // Color palette
  distort={3}           // Distortion level (0 - 10)
  rayCount={12}         // Number of rays (0 - 50)
/>
```

## 📱 Mobile Responsiveness

The portfolio is fully responsive with:
- Mobile-first design approach
- Touch-friendly navigation
- Optimized performance on mobile devices
- Accessible form controls

## 🎨 Color Scheme

Primary colors used:
- **Cyan**: `#00ffff` - Primary accent
- **Purple**: `#8000ff` - Secondary accent  
- **Blue variants**: `#0080ff`, `#0040ff`
- **Background**: Black with transparency overlays

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Other Platforms
The project can be deployed to any platform supporting Next.js:
- Netlify
- AWS Amplify
- Railway
- Heroku

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

---

**Made with ❤️ and lots of ☕**
