import { CollapseProps } from "antd";
import Link from "next/link";

const tels = [
  "09085293734",
  "09085293734",
  "09085293735",
  "09085293736",
  "09085293733",
];

export const individual_faq: CollapseProps["items"] = [
  {
    key: "1",
    label: "Can I upgrade my service plan?",
    children:
      "Yes you can, at the beginning of a billing cycle, contact our customer care service center for more information.",
  },
  {
    key: "2",
    label: "How long is my service valid for? ",
    children:
      "All service plans have a 30 day validity period. This means your subscription will expire at the end of every 30 days.",
  },
  {
    key: "3",
    label:
      "What happens if I need to change my residence or business location?",
    children:
      "If your resident location changes, we can relocate your active devices and process to install in your new location at a cost that will be communicated to you as long as our fiber presence is in the new location.",
  },
  {
    key: "4",
    label: "Do you run a 24/7 customer service system? ",
    children: (
      <p>
        We operate a 24/7 customer support system to help and attend to every
        arising issue You can call{" "}
        {tels?.map((tel) => (
          <Link className="mx-2 inline-block" key={tel} href={`tel:${tel}`}>
            {tel}
          </Link>
        ))}{" "}
        or send an email to {" "}
        <Link href="mailto:support@layer3.com.ng">support@layer3.com.ng</Link>
      </p>
    ),
  },
];
