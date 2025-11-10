import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
interface Props {
  onClick: () => void;
}
const Like = ({ onClick }: Props) => {
  const [status, setStatus] = useState(false);
  const toggle = () => {
    setStatus(!status);
    onClick();
  };
  if (status)
    return <FaHeart color="#c71631ff" size="100px" onClick={toggle} />;
  return <FaRegHeart size="100px" color="lightblue" onClick={toggle} />;
};

export default Like;
