import React from "react";
import { v4 } from "uuid";
import CheckRound from "@assets/icons/check-round.svg";
import { formatCurrency } from "@/common/utils";

export interface IPricingCardProps {
  title: string;
  summary: string;
  amount: number;
  period: string;
  offer: string;
  perks: string[];
}

function PricingCard(
  props: IPricingCardProps & { onBuyPlan?: (plan: IPricingCardProps) => void }
) {
  const { onBuyPlan = () => {}, ...rest } = props || {};
  const { title, summary, amount, offer, period, perks } = rest;
  return (
    <div
      data-aos="flip-right"
      className="flex flex-col justify-start items-start gap-[50px] py-10 px-6 border border-[#13121266] bg-brand-dark rounded-[20px]"
    >
      <div className="space-y-[50px] w-full">
        <div className="space-y-4">
          <div className="space-y-3">
            <p className="text-2xl font-semibold text-white capitalize">
              {title}
            </p>
            <p className="text-base text-white font-[300] capitalize">
              {summary}
            </p>
          </div>
          <h3 className="text-[42px] text-white font-bold leading-[50px]">
            {offer}
          </h3>
          <p className=" text-[28px] font-medium text-white">
            NGN {formatCurrency(amount?.toFixed(0))}
            <span className="text-xl font-[300] text-white text-opacity-60 ml-2">
              /{period}
            </span>
          </p>
        </div>
        <button
          onClick={() => onBuyPlan(rest)}
          type="button"
          className="filled w-full rounded"
        >
          Buy {title} Plan
        </button>
      </div>
      <div className="w-full divide-y divide-white divide-opacity-10">
        {perks?.map((perk) => (
          <div key={v4()} className="flex items-center space-x-5 py-5">
            <CheckRound />
            <p className="text-base font-[300] tracking-[0.32px] text-white text-opacity-90">
              {perk}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

PricingCard.propTypes = {};

export default PricingCard;
