import { Link } from "react-router-dom";


function MainButton() {
  const goTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  return (
    <Link
      onClick={goTop}
      to={'/contact'}
      className={`text-[15px] text-black bg-white flex items-center justify-center font-[600] w-40 md:w-[20rem] h-[4.5rem] md:h-[5.5rem] uppercase hero-cta relative ml-2`}
    >
      Contact Us &nbsp;
      <i className={`fa-solid fa-arrow-right text-[#FF0336] red`}></i>
    </Link>
  );
}

export default MainButton;
