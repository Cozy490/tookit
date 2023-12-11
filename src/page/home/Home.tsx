import React, { useEffect, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getInfo,getParamsInfo } from "@/store/homeSlice";
import { useNavigate } from "react-router-dom";
import { counterSlice,getInfo,getParamsInfo  } from "../../store/homeSlice";
import './home.css'

const Home = () => {
  const valueFromStore = useSelector((state:any) => state.home.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 使用 useMemo 计算加法的结果
  const sumResult = useMemo(() => {
    console.log("Calculating sum...");
    return valueFromStore + 10; // 举例：这里的计算可能较为耗时
  }, [valueFromStore]);

  useEffect(() => {
    document.title = sumResult.toString();
    if (valueFromStore > 5 || valueFromStore < 0) {
      dispatch(counterSlice.actions.reset());
    }
  }, [dispatch, valueFromStore, sumResult]);

  useEffect(() => {
    dispatch(getInfo() as any);
  }, [dispatch]);
  // 第二个参数传空数组跟dispatch是一样的
  useEffect(()=>{
    const params = {
      id:1
    }
    dispatch(getParamsInfo(params) as any)
  },[dispatch])

  const handleIncrement = useCallback(() => {
    dispatch(counterSlice.actions.increment());
  }, [dispatch]);

  const handleDecrement = useCallback(() => {
    dispatch(counterSlice.actions.decrement());
  }, [dispatch]);

  const goToAbout = useCallback(() => {
    navigate('/about');
    // navigate(-1); 返回上一页
  }, [navigate]);

  return (
    <>
      <div>
        <button onClick={handleDecrement}>减一</button>
        <button onClick={handleIncrement}>加一</button>
        <div>{valueFromStore}</div>
        <div>Sum Result: {sumResult}</div>
        <div>{process.env.REACT_APP_API_URL}</div>
        <button onClick={goToAbout}>去About页面</button>
      </div>
    </>
  );
};

export default Home;
