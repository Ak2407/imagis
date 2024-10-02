"use client";

import { images } from "@/constants";
import {
  AnimatePresence,
  MotionConfig,
  motion,
  useMotionTemplate,
  useSpring,
} from "framer-motion";
import { ChevronUpIcon, ChevronDownIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function Carousel() {
  let [index, setIndex] = useState(0);
  let y = index * 100;
  let ySpring = useSpring(y, { bounce: 0 });
  let yPercentage = useMotionTemplate`-${ySpring}%`;

  useEffect(() => {
    ySpring.set(y);
  }, [y, ySpring]);

  useEffect(() => {
    function handleKeyPress(e: KeyboardEvent) {
      if (e.key === "ArrowUp") {
        if (index > 0) {
          setIndex(index - 1);
        }
      } else if (e.key === "ArrowDown") {
        if (index < images.length - 1) {
          setIndex(index + 1);
        }
      }
    }

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [index]);

  // Scroll event on main image
  const handleScroll = (event: React.WheelEvent<HTMLDivElement>) => {
    if (event.deltaY > 0 && index < images.length - 1) {
      setIndex(index + 1);
    } else if (event.deltaY < 0 && index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <MotionConfig transition={{ type: "spring", bounce: 0 }}>
      <div className="flex h-full">
        {/* Fixed Main Image */}
        <div
          className="fixed left-0 top-0 h-screen w-3/5 bg-gray-200 flex items-center justify-center"
          onWheel={handleScroll} // Add scroll event for smooth image change
        >
          <motion.div style={{ y: yPercentage }} className="h-full w-full">
            {images.map((image, i) => (
              <motion.img
                key={image.id}
                src={image.src}
                animate={{ opacity: i === index ? 1 : 0.4 }}
                className="object-contain h-full w-auto transition-opacity duration-700 ease-in-out"
              />
            ))}
          </motion.div>
        </div>

        {/* Thumbnails on the right, scrollable */}
        <div className="ml-auto w-1/5 h-screen overflow-y-auto flex flex-col items-center space-y-4 mt-6">
          <Thumbnails index={index} setIndex={setIndex} />
        </div>

        {/* Up/Down buttons */}
        <div className="fixed right-4 top-1/2 flex flex-col items-center space-y-4">
          {index > 0 && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              exit={{ opacity: 0, pointerEvents: "none" }}
              whileHover={{ opacity: 1 }}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white"
              onClick={() => setIndex(index - 1)}
            >
              <ChevronUpIcon className="h-6 w-6 text-black" />
            </motion.button>
          )}

          {index + 1 < images.length && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              exit={{ opacity: 0, pointerEvents: "none" }}
              whileHover={{ opacity: 1 }}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white"
              onClick={() => setIndex(index + 1)}
            >
              <ChevronDownIcon className="h-6 w-6 text-black" />
            </motion.button>
          )}
        </div>
      </div>
    </MotionConfig>
  );
}

const Thumbnails = ({
  index,
  setIndex,
}: {
  index: number;
  setIndex: (value: number) => void;
}) => {
  return (
    <div className="flex flex-col space-y-4">
      {images.map((image, i) => (
        <motion.button
          key={image.id}
          onClick={() => setIndex(i)}
          className={`h-24 w-24 flex-shrink-0 overflow-hidden ${
            i === index ? "ring-2 ring-indigo-500" : ""
          }`}
        >
          <img
            src={image.src}
            alt={`Thumbnail ${i}`}
            className="h-full w-full object-cover"
          />
        </motion.button>
      ))}
    </div>
  );
};
