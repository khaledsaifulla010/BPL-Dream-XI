import footerLogo from "../../assets/images/logo-footer.png";
import footerShadow from "../../assets/images/bg-shadow.png";

const Footer = () => {
  return (
    <div className="mt-[1570px]">
      <div>
        <div>
          <div
            className="hero h-[350px] w-[1000px] rounded-2xl relative ml-[250px] -bottom-8 border-2"
            style={{
              backgroundImage: `url(${footerShadow})`,
            }}
          >
            <div className="hero-content text-center text-black">
              <div>
                <h1 className="font-black text-5xl mt-8">
                  Subscribe to our Newsletter
                </h1>
                <p className="mb-5 mt-6 text-2xl font-semibold ">
                  Get the latest updates and news right in your inbox!
                </p>
                <div>
                  <input
                    dir="ltr"
                    className="p-2 w-[350px]  font-bold text-lg rounded-s-lg border-2"
                    type="email"
                    placeholder="Enter your Email "
                  />
                  <button
                    dir="rtl"
                    className="p-2  bg-gradient-to-r from-purple-500 to-pink-500 absolute right-[250px] font-bold text-lg rounded-s-lg border-2"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className=" bg-black text-white p-10">
        <img className="ml-[600px] mb-12" src={footerLogo} />
        <footer className="footer">
          <nav>
            <h6 className="text-2xl font-black">About us</h6>
            <p className="text-lg font-semibold text-slate-400">
              We are a passionate team <br /> dedicated to providing the best{" "}
              <br /> services to our customers.
            </p>
          </nav>
          <nav>
            <h6 className="text-2xl font-black">Quick Links</h6>
            <a className="link link-hover text-lg font-semibold text-slate-400">
              Home
            </a>
            <a className="link link-hover text-lg font-semibold text-slate-400">
              Services
            </a>
            <a className="link link-hover text-lg font-semibold text-slate-400">
              About
            </a>
            <a className="link link-hover text-lg font-semibold text-slate-400">
              Contact
            </a>
          </nav>
          <nav>
            <h6 className="text-2xl font-black">Subscribe</h6>
            <p className="text-lg font-semibold text-slate-400">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div>
              <input
                dir="ltr"
                className="p-2 w-[250px]  font-bold text-lg rounded-s-lg"
                type="email"
                placeholder="Enter your Email "
              />
              <button
                dir="rtl"
                className="p-2  bg-gradient-to-r from-purple-500 to-pink-500 absolute right-[330px] font-bold text-lg rounded-s-lg"
              >
                Subscribe
              </button>
            </div>
          </nav>
        </footer>
        <div className="divider divider-neutral"></div>
        <h1 className="text-center font-bold">@2024 BPL Dream XI Company All Right Reserved.</h1>
      </div>
    </div>
  );
};

export default Footer;
