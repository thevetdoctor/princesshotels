// import Login from "./Login";
import { Fragment, useState, useEffect } from 'react';
// import { Banner } from './Banner';
import { Header } from './Header';
import { poolSofts } from './js/pool-softs';
import { poolWines } from './js/pool-wines.js';
import { Nav } from "./Nav";
import { Pool } from "./Pool";


function App() {
  // const [poolProducts, setPoolProducts] = useState([]);
  const [activePage, setActivePage] = useState(0);
  const poolProducts = [
    poolSofts, poolWines
  ];
  const handleActive = (val) => {
    console.log(`selecting page ${val}!`);
    setActivePage(val);
}
  useEffect(() => {
  }, []);

  return (
    <Fragment>
    <Nav />
    {/* <Banner /> */}
    <Header activePage={activePage} handleActive={handleActive} />
    <div className="App" style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'center'}}>
     {poolProducts[activePage].map(product => {
       return <Pool product={product} />
      })}
    </div>
    </Fragment>
  );
}

export default App;
