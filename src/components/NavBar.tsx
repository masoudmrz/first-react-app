import React from "react";
interface Props {
  itemCardCont: number;
}
const NavBar = ({ itemCardCont }: Props) => {
  return <div>NavBar : {itemCardCont} </div>;
};

export default NavBar;
