import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faDribbble,
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { useSpring, animated, config } from "@react-spring/web";

const About = () => {
  const jiggyWiggyAnimation = useSpring({
    from: { opacity: 0, transform: "scale(0.5) rotate(0deg)", color: "#888" },
    to: async (next) => {
      await next({ opacity: 1, transform: "scale(1.2) rotate(10deg)", color: "#ccc" });
      await next({ transform: "scale(1) rotate(-10deg)", color: "#aaa" });
      await next({ transform: "scale(1.2) rotate(10deg)", color: "#ccc" });
      await next({ transform: "scale(1) rotate(0deg)", color: "#888" });
    },
    config: config.wobbly,
    delay: 300,
  });

  return (
    <section className="bg-black px-6 md:px-10 py-10 md:py-16"> {/* Adjusted padding for better spacing */}
      <div className="flex flex-col md:flex-row justify-between mb-12"> {/* Stack on small screens, row on larger */}
        <h1 className="text-gray-500 text-xl px-6 md:px-14 mb-4 md:mb-0">About Me</h1> {/* Added bottom margin on mobile */}
        <div className="flex justify-center md:justify-end gap-6 md:gap-8 text-slate-700 px-6 md:px-14"> {/* Adjusted gap and alignment */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-100"
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
          <a
            href="https://dribbble.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-100"
          >
            <FontAwesomeIcon icon={faDribbble} size="lg" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-100"
          >
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-100"
          >
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-100"
          >
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
        </div>
      </div>

      <section className="px-6 md:px-16 py-6"> {/* Adjusted padding for more breathing room */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 md:mt-20"> {/* Adjusted top margin */}
          <div className="md:w-3/5 text-left mb-8 md:mb-0"> {/* Adjusted bottom margin */}
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8"> {/* Responsive text size */}
              Hi, I am [Your Name]! I'm a designer with 3 years of web development experience...
            </h2>
            <p className="text-xl md:text-2xl leading-relaxed mb-6">
              I understand the importance of a pixel-perfect website, pride myself
              on producing high-quality websites, and I'm comfortable working solo
              or as part of a team.
            </p>
          </div>
          <div className="mt-6 md:mt-0"> {/* Adjusted top margin */}
            <animated.div style={jiggyWiggyAnimation}>
              <h1 className="text-3xl md:text-4xl font-bold pr-6 md:pr-9"> {/* Responsive text size */}
                Welcome aboard!
              </h1>
            </animated.div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
