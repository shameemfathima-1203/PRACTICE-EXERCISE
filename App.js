import logo from './logo.svg';
import './App.css';
import Header from './header';
import Footer from './footer';
import Product from './product';
import Content from './content';
import Day4 from './Day4';
import Day1 from './Day1';
import Day5 from './Day5';
import Day3 from './Day3';
function App() {
  return (
    <div className="App">
    <Day1/>
    <Header/>
   <Product/>
      <Content/>
      <Footer/>
      <Day3/>
      <Day4/>
      <Day5/>
    </div>
  );
}

export default App;