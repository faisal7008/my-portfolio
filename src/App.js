import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Projects from './components/projects/Projects'

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Projects />
      <Contact /> 
      <Footer />
    </div>
  );
}

export default App;
