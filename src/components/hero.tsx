import { motion } from "framer-motion";

import { DragonCanvas } from "./canvas";
import { styles } from "../styles";
import { cn } from "../utils/lib";

// Hero
export const Hero = () => {
  return (
    <section className="relative mx-auto h-screen min-h-[100dvh] w-full overflow-hidden">
      {/* 3D layer — full bleed; GL background stays transparent over copy */}
      <div className="pointer-events-none absolute inset-0 z-0 h-full w-full [&_canvas]:pointer-events-auto">
        <DragonCanvas />
      </div>

      <div
        className={cn(
          styles.paddingX,
          "relative z-10 mx-auto flex max-w-7xl flex-row items-start gap-3 pt-24 xs:gap-4 xs:pt-28 sm:gap-5 sm:pt-[120px]",
        )}
      >
        {/* Title */}
        <div className="mt-2 flex shrink-0 flex-col items-center justify-center sm:mt-5">
          <div className="h-4 w-4 rounded-full bg-[#915eff] sm:h-5 sm:w-5" />
          <div className="violet-gradient h-32 w-1 sm:h-80" />
        </div>

        {/* About Me */}
        <div className="min-w-0 max-w-full flex-1 pr-1 sm:pr-0">
          <h1 className={cn(styles.heroHeadText, "text-white")}>
            Hi, I'm <span className="text-[#915eff]">Mark Rapelo</span>
          </h1>
          <p className={cn(styles.heroSubText, "mt-2 text-white-100")}>
            Full Stack Developer <br className="sm:block hidden" />
          </p>
          <p className="mt-3 text-secondary text-xs sm:mt-4 sm:text-[14px]">
            Hint: You can drag the dragon to rotate it!
          </p>
        </div>
      </div>

      {/* Scroll to about section */}
      <div className="absolute bottom-24 z-20 flex w-full items-center justify-center xs:bottom-10 sm:bottom-10">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};
