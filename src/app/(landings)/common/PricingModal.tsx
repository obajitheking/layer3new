"use client";
import Checked from "@/assets/icons/checked.svg";
import Unchecked from "@/assets/icons/unchecked.svg";
import { IPricingCardProps } from "./PricingCard";
import { useState } from "react";
import { Modal } from "antd";
import cx from "classnames";
import Link from "next/link";

function CheckMark({ checked }: { checked: boolean }) {
  return checked ? <Checked /> : <Unchecked />;
}

const urls: Record<string, string> = {
  new: "/contact-us",
  renew: "#",
};

function PlanModal({
  plan,
  visible,
  onClose,
}: {
  plan: IPricingCardProps;
  visible: boolean;
  onClose: () => void;
}) {
  const [option, setOption] = useState<string>("");

  return (
    <Modal
      className="pricing_modal"
      title={
        <div>
          <h3 className="text-white text-2xl font-semibold">
            Buy {plan?.title} Plan
          </h3>
          <p className="text-white text-opacity-80 text-sm font-light">
            Select Prefrence
          </p>
        </div>
      }
      open={visible}
      onCancel={onClose}
      footer={null}
    >
      <div className="py-6 flex flex-col gap-5">
        <button
          onClick={() => setOption("new")}
          className={cx(
            "min-h-[48px] text-white text-base font-light hover:border-primary flex items-center justify-between p-2 rounded border w-full",
            option === "new" ? "border-primary" : "border-white"
          )}
        >
          <span>Buy New Plan</span>
          <CheckMark checked={option === "new"} />
        </button>
        <button
          onClick={() => setOption("renew")}
          className={cx(
            "min-h-[48px] text-white text-base font-light hover:border-primary flex items-center justify-between p-2 rounded border  w-full",
            option === "renew" ? "border-primary" : "border-white"
          )}
        >
          <span>Renew Plan</span>
          <CheckMark checked={option === "renew"} />
        </button>

        <Link
          className={cx("filled w-full min-h-[50px] rounded", {
            "pointer-events-none opacity-30": !option,
          })}
          href={urls[option] || "#"}
        >
          {option === "new" ? "Buy New" : "Renew"} {plan?.title} Plan
        </Link>
      </div>
    </Modal>
  );
}

export default PlanModal;
