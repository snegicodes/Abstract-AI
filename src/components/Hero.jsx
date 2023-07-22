import { logo } from "../assets";
import { AiFillGithub } from "react-icons/ai";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="abstract_logo" className="w-40 object-contain" />
        <button
          type="button"
          onClick={() =>
            window.open("https://github.com/snegicodes/Abstract-AI", "_blank")
          }
          className="black_btn flex justify-between items-center"
        >
          Github <AiFillGithub className="github-cat-logo ml-2" />
        </button>
      </nav>

      <h1 className="head_text">
        Unleash Summarization Power with
        <br />
        <span className="head_text_orange orange_gradient ">Abstract.AI</span>
      </h1>
      <h2 className="desc">
        Streamline reading with Abstract.AI, A brilliant article summarizer
        powered by OpenAI GPT-4. Transform lengthy content into concise insights
        at your fingertips. Embrace efficiency, bid farewell to information
        overload!
      </h2>
    </header>
  );
};

export default Hero;
