import bg from "../../../assets/images/bg-shadow.png";
import bannerImage from "../../../assets/images/banner-main.png";
import PropTypes from "prop-types";
const Banner = ({ handleClaimCoins }) => {
  return (
    <div className="mt-16 mb-4">
      <div
        className="hero h-[550px] rounded-2xl"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="hero-overlay bg-opacity-90 rounded-2xl"></div>
        <div className="hero-content text-neutral-content text-center">
          <div>
            <img className="ml-[430px]" src={bannerImage} />
            <h1 className="font-black text-5xl mt-8">
              Assemble Your Ultimate Dream 11 Cricket Team
            </h1>
            <p className="mb-5 mt-6 text-2xl font-semibold text-slate-400">
              Beyond Boundaries Beyond Limits
            </p>
            <div className="border-2 w-52 rounded-xl py-2 ml-[450px] border-lime-500">
              <button
                onClick={handleClaimCoins}
                className="btn bg-lime-400 font-black text-lg border-none"
              >
                Claim Free Credit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Banner.propTypes = {
  handleClaimCoins: PropTypes.func.isRequired,
};

export default Banner;
