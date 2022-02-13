import React from "react";
import './CarDescription.css'
import { DropDownContext } from '../DropDownContext';

function CarDescription (car_info) {
  
  const [dropdownOpen, setDropdownOpen] = useContext(DropDownContext);

  let current_car;
  // car_info.car_info.map((el) => {
	// 	// if (el.job === popupOpen) {
	// 		current_car = el;
	// 	// }
	// });
  return(

    <div className="cardescription__wrapper">
      <div className="cardescription__title">Марка: ----</div>
      <div className="cardescription__year">Год: ----</div>
      <div className="cardescription__mileage">Пробег: ----</div>
    </div>

  );

};

export default CarDescription;