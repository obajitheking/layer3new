"use client";
import React from "react";
import CaseStudyCard, {
  CaseStudyCardLoading,
  CaseStudyCardProps,
} from "./CaseStudyCard";
import { Row, Col } from "antd";
import { v4 } from "uuid";
import { useGetCaseStudiesQuery } from "@/redux/services/blog.api";

function CaseStudies() {
  const { isLoading, data = [], isError } = useGetCaseStudiesQuery();

  return (
    <section className="py-[50px]  bg-white text-brand-dark">
      <div className="container flex flex-col space-y-6">
        <h4 data-aos="fade-in" className="text-[32px] font-semibold">
          Case Studies
        </h4>
        {isLoading ? (
          <Row gutter={[16, 16]}>
            {Array.from(Array(3).keys()).map(() => (
              <Col key={v4()} xs={24} sm={12} lg={8}>
                <CaseStudyCardLoading />
              </Col>
            ))}
          </Row>
        ) : (
          <Row gutter={[16, 16]}>
            {data.map((caseStudy) => (
              <Col key={v4()} xs={24} sm={12} lg={8}>
                <CaseStudyCard
                  title={caseStudy.title}
                  details={caseStudy.details}
                  href={caseStudy.href}
                  media_id={caseStudy.media_id}
                />
              </Col>
            ))}
          </Row>
        )}
      </div>
    </section>
  );
}

export default CaseStudies;
