import './App.scss'
import { useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Typed from 'typed.js';
import SiteNav from './layout/SiteNav';

function App() {

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Mohamed Ahmed ', 'Frontend developer.'],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <div>
      <SiteNav />
      <span ref={el} />
    </div>)
}

export default App
