import React from "react";
import CardPlan from "./cardPlan";

export type PlansType = {
  name: string;
  price: number;
  description: string;
  features: string[];
};

export default function PlansSection() {
  const Plans: PlansType[] = [
    {
      name: "Plano Pro Premium VIP",
      price: 29,
      description: "Tudo que vocês precisa para seus estudos",
      features: [
        "1 ebook por mês",
        "Curadoria especial",
        "Cancele quando quiser",
      ],
    },
  ];
  return (
    <section className="w-full flex flex-col items-center justify-center mt-16 md:mt-[7.438rem] mb-16 md:mb-[8.063rem] px-4">
      <div className="text-center">
        <h1 className="font-bold text-[32px] sm:text-[45px] md:text-[60px] mt-8 md:mt-[2rem] mb-4 md:mb-[1.125rem] leading-[1.2] md:leading-[87px]">
          Preço Simples e Transparente
        </h1>
        <h3 className="font-normal text-[16px] sm:text-[18px] md:text-[20px] w-full max-w-[20rem] sm:max-w-[35rem] md:max-w-[51.688rem] leading-[1.5] md:leading-[35px] break-words mb-8 md:mb-[4.625rem]">
          Pra que inúmeros planos quando nós sabemos exatamente o que é melhor
          para você? Assine o nosso plano mensal{" "}
          <span className="underline">Pro Premium VIP</span> e garanta
          mensalmente um ebook novo de programação. E por menos de um café por
          dia.
        </h3>
      </div>
      {Plans.map((plan) => (
        <CardPlan
          key={plan.name}
          name={plan.name}
          price={plan.price}
          description={plan.description}
          features={plan.features}
        />
      ))}
    </section>
  );
}
