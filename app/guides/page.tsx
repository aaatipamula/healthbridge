import React from "react";
import Link from "next/link";
import { STATES } from "../other/constants";
import { normalize } from "../other/utils";

const Guides: React.FC = () => {
  return (
    <div className="mt-20 w-3/4 min-h-[80vh] m-auto text-center">
      <h1 className="text-2xl text-sky-900 my-4">Guides</h1>
      <p className="text-zinc-800 text-center lg:w-3/4 lg:m-auto">
        Our resource guides are a brief but descriptive few pages of writing that detail the health resources available for individuals to look for. Resource guide lengths will vary from region to region, but each resource should be detailed with a description 50-100 words in length, describing the organization and what facilities each offers. Formatting will be reviewed by officers at the conclusion of each resource guide made and then will be distributed to most centers within that area
      </p>
      <div className="grid lg:grid-cols-2 gap-6 mt-4">
        {STATES.map((stateItem, index) => (
          <div
            key={index}
            id={normalize(stateItem.name)}
            className="flex flex-col text-slate-500"
          >
            <Link href={`/guides/#${normalize(stateItem.name)}`}>
              <h2 className="text-lg text-sky-900">{stateItem.name}</h2>
            </Link>
            <hr className="border-t-2 border-neutral-400 my-4 w-full lg:w-1/2 m-auto"/>
            {stateItem.cities.map((cityItem, index) => (
              <a
                key={stateItem.name + index}
                className={(cityItem.link) && "hover:text-slate-600"}
                href={(cityItem.link) ? cityItem.link : `/guides/#${normalize(stateItem.name)}`}
                target="_blank" rel="noopener noreferrer"
              >
                {cityItem.city}
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Guides;

