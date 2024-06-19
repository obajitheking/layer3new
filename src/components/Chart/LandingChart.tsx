/** @jsxImportSource @emotion/react */
"use client";

import type { ColumnConfig } from "@ant-design/plots";
import dynamic from "next/dynamic";

const Column = dynamic(
  () => import("@ant-design/plots").then((mod) => mod.Column),
  { ssr: false }
);

const LandingPageChart = ({
  data = [],
}: {
  data: { bandwidth: number; time: number }[];
}) => {
  const config: ColumnConfig = {
    group: true,
    theme: {
      view: {
        stroke: "none",
        fill: "#000000",
        fillOpacity: 0,
      },
    },
    height: 305,
    smooth: true,
    autoFit: true,
    data,
    xField: "time",
    yField: "bandwidth",
    columnWidthRatio: 0.5,
    axis: {
      x: {
        size: 20,
        autoRotate: false,
        lineLineWidth: 20,
        labelFill: "#FFFFFFB2",
      },
      y: {
        labelSpaceing: 50,
        labelFill: "#FFFFFFB2",
        grid: false,
      },
    },
    style: {
      radiusTopLeft: 0,
      radiusTopRight: 0,
      maxWidth: 20,
      fill: "#EB303D",
      inset: 5,
    },
    state: {
      inactive: { opacity: 0.5 },
      active: { fill: "l(90) 0:#34CAA5 1:rgba(52, 202, 165, 0)" },
    },
    interaction: {
      elementHighlightByColor: false,
      elementHighlight: false,
      elementHighlightByX: true,
      tooltip: {
        render: () => null,
        style: {
          padding: "0px",
        },
      },
    },
    animate: { enter: { type: "growInY" } },
  };

  return (
    <div className="">
      <div className="flex items-center justify-between mb-12">
        <div className="space-y-3">
          <p className="text-[#FFFFFFB2] font-sm">Latency</p>
          <h5 className="text-xl font-medium text-white">13.43 BPS</h5>
        </div>
        <div className="space-y-3">
          <p className="text-[#FFFFFFB2] font-sm">Latency</p>
          <h5 className="text-xl font-medium text-white">13.43 BPS</h5>
        </div>
      </div>
      <Column {...config} colorField="#fff" />
    </div>
  );
};

export default LandingPageChart;
