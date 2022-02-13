import React from "react";
import './CarImg.css';
import CarDescription from "./CarDescription";
import { DropDownContext } from '../DropDownContext';

function CarImg(car_info) {

  const [dropdownOpen, setDropdownOpen] = useContext(DropDownContext);

  return (

    <div className="wrapper">
      {car_info.car_info.map((el, i) => {
        
        return (

          <div className="wrapper__car">
            <div className="carimg" key={i}>
              <img src={el.image} alt="" />
            </div>
            <CarDescription/>
            
          </div>

        )
      })}

    </div>

  );

}

export default CarImg;