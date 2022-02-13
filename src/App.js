import { useState } from 'react';
import './App.css';
import CarImg from './components/CarImg';
import car_info from './databases/cars-info';
import { DropDownContext } from './DropDownContext';


function App() {

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const car_array = Object.keys(car_info).map((key) => car_info[key]);

  return (
    <div className="App">
      <DropDownContext.Provider value={[dropdownOpen, setDropdownOpen]}>
        <CarImg car_info={car_array} />
      </DropDownContext.Provider>
    </div>
  );

};

export default App;