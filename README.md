# React Vite Application

A modern full-stack React application built with Vite, featuring user management, book management, and todo functionality with authentication and authorization.

## 🚀 Features

- **User Management**: Complete CRUD operations for user accounts
- **Book Management**: Comprehensive book catalog with CRUD functionality
- **Todo Application**: Interactive todo list with task management
- **Authentication & Authorization**: Secure login/logout with JWT tokens
- **File Upload**: Avatar and book thumbnail upload capabilities
- **Responsive Design**: Mobile-friendly UI built with Ant Design
- **Protected Routes**: Role-based access control for sensitive pages

## 🛠️ Tech Stack

### Frontend

- **React 18.3.1** - UI library
- **Vite 5.2.12** - Build tool and dev server
- **React Router DOM 6.23.1** - Client-side routing
- **Ant Design 5.18.1** - UI component library
- **Axios 1.7.2** - HTTP client
- **React Icons 5.3.0** - Icon library
- **NProgress 0.2.0** - Loading progress bars

### Development Tools

- **ESLint** - Code linting
- **Vite Plugin React SWC** - Fast refresh and building

## 📁 Project Structure

```
src/
├── components/
│   ├── books/           # Book management components
│   ├── context/         # React context providers
│   ├── layout/          # Layout components (Header, Footer, Background)
│   ├── todo/            # Todo application components
│   └── user/            # User management components
├── pages/               # Route page components
├── services/            # API services and axios configuration
├── styles/              # Global styles
└── assets/              # Static assets
```

## 🚦 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

```bash
git clone <repository-url>
cd react-vite-1
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Create `.env.development` and `.env.production` files:

```env
# .env.development
VITE_BACKEND_URL=http://localhost:8080

# .env.production
VITE_BACKEND_URL=your-production-api-url
```

4. **Start the development server**

```bash
npm run dev
# or
npm start
```

The application will be available at `http://localhost:3000`

## 📝 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm start           # Alternative start command

# Production
npm run build       # Build for production
npm run preview     # Preview production build

# Code Quality
npm run lint        # Run ESLint
```

## 🔗 API Integration

The application integrates with a backend API for:

- **User Management**: `/api/v1/user`
- **Authentication**: `/api/v1/auth`
- **Book Management**: `/api/v1/book`
- **File Upload**: `/api/v1/file/upload`

### API Services

All API calls are centralized in [`src/services/api.services.js`](src/services/api.services.js):

- User CRUD operations
- Authentication (login/logout)
- Book management
- File upload handling
- Avatar updates

## 🛡️ Authentication

The application uses JWT-based authentication:

- Access tokens are stored in `localStorage`
- Automatic token injection via Axios interceptors
- Protected routes with [`PrivateRoute`](src/pages/private.route.jsx) component
- Authentication context with [`AuthContext`](src/components/context/auth.context.jsx)

## 🎨 UI Components

### Key Features

- **Responsive Design**: Built with Ant Design components
- **Dark/Light Theme**: Theme switching capability
- **File Upload**: Drag-and-drop file upload with preview
- **Data Tables**: Paginated tables with sorting and filtering
- **Form Validation**: Comprehensive form validation
- **Notifications**: Success/error messaging system

### Main Pages

- **Dashboard** (`/`) - Todo application
- **Users** (`/users`) - User management interface
- **Books** (`/books`) - Book catalog (protected route)
- **Login** (`/login`) - Authentication page
- **Register** (`/register`) - User registration

## 📱 Responsive Design

- Mobile-first approach
- Flexible grid system with Ant Design
- Responsive navigation and layouts
- Optimized for various screen sizes

## 🔧 Configuration

### Vite Configuration

```javascript
// vite.config.js
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
});
```

### ESLint Configuration

The project uses ESLint with React-specific rules for code quality and consistency.

## 🚀 Deployment

### Vercel Deployment

The project is configured for Vercel deployment with [`vercel.json`](vercel.json):

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/"
    }
  ]
}
```

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

## 📄 License

This project is private and proprietary.

## 🐛 Issues

If you encounter any issues, please file them on the GitHub issues page.

---

_Built with ❤️ using React and Vite_
