import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const About = () => {
  const [count, setCount] = useState(0);
  const navigate = useNavigate()
  const goToHome = () => {
    navigate(-1);
  };
  const add = () => {
    setCount(count + 1);
  }
  useEffect(() => {
    document.title = count.toString();
    if (count > 5 || count < 0) {
      setCount(0)
    }
  }
  , [count]);
  return (
    <>
      About
      <div>{count}</div>
      <button onClick={goToHome}>返回home</button>
      <button onClick={add}>加一</button>
    </>
  )
}
export default About