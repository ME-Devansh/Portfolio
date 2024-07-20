import { workExperience } from "@/data";
import React from "react";
import { Button } from "./ui/moving-border";

const Experience = () => {
  return (
    <div className="py-20" id="experience">
      <h1 className="font-bold text-4xl md:text-4xl text-center">
        My <span className="text-purple"> work experience</span>
      </h1>
      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map(
          ({
            className,
            desc,
            id,
            thumbnail,
            title,
            organisation,
            duration,
          }) => (
            <Button
              key={id}
              borderRadius="1.75rem"
              className="flex-1 text-white border-neutral-200 dark:border-slate-800"
              duration={Math.floor(Math.random() * 10000) + 10000}
            >
              <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                <div className="rounded-full">
                  <img
                    src={thumbnail}
                    alt={thumbnail}
                    className={"lg:w-32 md:w-20 w-16 rounded-lg"}
                  />
                </div>
                <div className="lg:ms-5">
                  <div className="flex flex-col gap-y-1">
                    <h1 className="text-start text-xl md:text-xl font-bold">
                      {title}
                    </h1>
                    <div className="flex justify-between">
                      <h1 className="text-start text-sm md:text-base font-semibold text-purple">
                        {organisation}
                      </h1>
                      <h1 className="text-start text-sm md:text-sm font-semibold text-purple">
                        {duration}
                      </h1>
                    </div>
                  </div>
                  <p className="text-start text-white-100 mt-3 font-semibold">
                    {desc}
                  </p>
                </div>
              </div>
            </Button>
          )
        )}
      </div>
    </div>
  );
};

export default Experience;
