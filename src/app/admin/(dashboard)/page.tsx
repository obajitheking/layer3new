import { Card, Col, Row } from "antd";
import Meta from "antd/es/card/Meta";
import Image from "next/image";
import Link from "next/link";

const StatCard = ({
  title,
  description,
  href,
}: {
  title?: string;
  description?: string;
  href?: string;
}) => (
  <Link href={href || "#"}>
    <Card hoverable style={{ width: 240 }}>
      <Meta title={title} description={description} />
    </Card>
  </Link>
);

function page() {
  return (
    <Row gutter={16}>
      <Col span={6}>
        <StatCard href="/admin/pages" title="Pages" description="10" />
      </Col>
      <Col span={6}>
        <StatCard href="/admin/faqs" title="Faqs" description="500" />
      </Col>
      <Col span={6}>
        <StatCard
          href="/admin/supports"
          title="Support Requests"
          description="20"
        />
      </Col>
      <Col span={6}>
        <StatCard
          href="/admin/news-letters"
          title="Newsletters Subs"
          description="100"
        />
      </Col>
    </Row>
  );
}

page.propTypes = {};

export default page;
