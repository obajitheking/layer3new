"use client";

import FaqCollapse from "@/components/FaqCollapse";
import { enterprise_faq } from "../common/data";

function FaqContent() {
  return <FaqCollapse items={enterprise_faq} />;
}

FaqContent.propTypes = {};

export default FaqContent;
