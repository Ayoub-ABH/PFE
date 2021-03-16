import Home from './components/pages/Home';
import Hotel from './components/pages/Hotel';
import About from './components/pages/About';
import Contact from './components/pages/Contact';


const Routes = [
   {
      path: "/",
      nam: "home",
      component: Home
   },
   {
      path: "/Hotel",
      nam: "hotel",
      component: Hotel
   },
   {
      path: "/About",
      nam: "about",
      component: About
   },
   {
      path: "/Contact",
      nam: "contact",
      component: Contact
   }
];

export default ({
   mode: "history",
   Routes
})



