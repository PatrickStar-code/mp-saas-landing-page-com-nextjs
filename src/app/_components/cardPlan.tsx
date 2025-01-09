import { Check } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { PlansType } from "./plansSection";

export default function CardPlan({
  name,
  price,
  description,
  features,
}: PlansType) {
  return (
    <div className="bg-white border-2 border-[#CCCCCC]  rounded-lg shadow-md p-6 w-full max-w-[20rem] sm:max-w-[22rem]">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-800 ">{name}</h2>
        <h3 className="text-sm text-gray-500 ">{description}</h3>
      </div>
      <div className="mb-4 flex  items-baseline gap-2">
        <h2 className="text-[28px] sm:text-[36px] font-bold text-gray-800">
          R${price}
        </h2>
        <h3 className="text-[16px] sm:text-[20px] text-gray-500">/mês</h3>
      </div>
      <ul className="text-sm text-gray-700 space-y-2">
        {features.map((feature) => (
          <li className="flex items-center gap-2" key={feature}>
            <Check
              className="text-[#22C55E] font-bold"
              strokeWidth={2}
              scale={1.5}
              size={20}
            />
            {feature}
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-center mt-8">
        <Button className="w-full sm:w-[20.75rem]">Assine Agora</Button>
      </div>
    </div>
  );
}
