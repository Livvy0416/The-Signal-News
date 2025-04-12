body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #003A60;
  color: #000;
}

.site-header {
  background: white;
  border-bottom: 1px solid #ccc;
  padding: 20px 0;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: auto;
  padding: 0 20px;
}

.logo {
  font-size: 2rem;
  font-weight: bold;
  color: black;
}

.nav-links {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.nav-links a {
  text-decoration: none;
  color: black;
  font-weight: bold;
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
}

.hamburger span {
  width: 25px;
  height: 3px;
  background: black;
}

/* Main content layout */
.main-wrapper {
  padding: 40px 20px;
}

.content-container {
  display: flex;
  max-width: 1200px;
  margin: auto;
  gap: 40px;
  align-items: flex-start;
  background: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.left-column {
  flex: 2;
}

.right-column {
  flex: 1;
}

h2 {
  border-bottom: 2px solid #000;
  padding-bottom: 10px;
  margin-bottom: 20px;
}

.article-row {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
}

.article-row img {
  width: 150px;
  height: 100px;
  object-fit: cover;
  border-radius: 4px;
}

.article-text h3 {
  margin: 0 0 10px;
  font-size: 1.1rem;
}

.article-text p {
  margin: 5px 0;
  font-size: 0.9rem;
}

.article-text a {
  color: #003A60;
  text-decoration: underline;
}

.article-card {
  background: #f4f4f4;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 6px;
  text-align: center;
}

.article-card img {
  width: 100%;
  border-radius: 4px;
  margin-bottom: 10px;
}

/* Mobile */
@media (max-width: 768px) {
  .nav-links {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 0;
    background: white;
    width: 100%;
    padding: 20px;
    z-index: 10;
  }

  .nav-links.show {
    display: flex;
  }

  .hamburger {
    display: flex;
  }

  .content-container {
    flex-direction: column;
  }

  .left-column, .right-column {
    width: 100%;
  }
}
.site-header {
  background: white;
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
  position: relative;
  z-index: 10;
}

.banner {
  max-width: 1200px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}

.logo-img {
  width: 60px;
  height: auto;
}

.site-title h1 {
  font-size: 2rem;
  margin: 0;
}

.site-title p {
  font-size: 0.9rem;
  margin: 0;
  color: #333;
}

.site-title {
  margin-left: 10px;
  flex: 1;
}

/* Hamburger */
.hamburger {
  display: flex;
  flex-direction: column;
  cursor: pointer;
  gap: 5px;
  z-index: 11;
}

.hamburger span {
  height: 3px;
  width: 25px;
  background: black;
  border-radius: 2px;
}

/* Slide-Out Mobile Nav */
.mobile-nav {
  position: fixed;
  top: 0;
  right: -100%;
  width: 250px;
  height: 100vh;
  background-color: #1a1a1a;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 80px 20px;
  transition: right 0.3s ease-in-out;
}

.mobile-nav a {
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  margin: 10px 0;
}

/* Open menu state */
.mobile-nav.show {
  right: 0;
}

