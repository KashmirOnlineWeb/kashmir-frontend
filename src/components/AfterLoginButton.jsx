import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const AfterLoginButton = () => {

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Since useEffect runs after the first render, it will adjust the visibility only on the client.
    setShowButton(true);
  }, []);

  if (!showButton) {
    return null; // or some kind of placeholder
  }

  return isLoggedIn ? (
    <div>
      <button className="bg-white mt-3 text-black py-[10px] px-[20px] rounded-full text-[14px] font-medium leading-3 w-[159px] h-[40px] cursor-pointer">Logout</button>
    </div>
  ) : null;
};

export default AfterLoginButton;
