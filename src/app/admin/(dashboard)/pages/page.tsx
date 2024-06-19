"use client";
import { useGetPagesQuery } from "@/redux/services/pages.api";
import { Button, Card, Col, List, Row } from "antd";
import Meta from "antd/es/card/Meta";
import Image from "next/image";
import Link from "next/link";

const PageCard = ({
  title,
  description,
  href,
}: {
  title?: string;
  description?: string;
  href?: string;
}) => (
  <Link href={href || "#"}>
    <Card
      hoverable
      style={{ width: 240 }}
      cover={
        <Image
          width={300}
          height={300}
          alt="example"
          src="/img/placeholder.webp"
        />
      }
    >
      <Meta title={title} description={description} />
    </Card>
  </Link>
);

function Pages() {
  const { data = [], isLoading, isError, refetch } = useGetPagesQuery();

  return (
    <div>
      <div className="flex justify-between w-full items-center my-4">
        <h1>Pages</h1>
        <Link href="/admin/pages/add" passHref>
          <Button type="primary">Add Page</Button>
        </Link>
      </div>
      <List
        loading={isLoading}
        locale={{ emptyText: "No Pages Found" }}
        grid={{ gutter: 16, column: 4, xs: 24, sm: 12, md: 8, lg: 6 }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <PageCard
              href={`/admin/pages/edit?page=${item.key}`}
              title={item.title}
              description={item.key}
            />
          </List.Item>
        )}
      />
    </div>
  );
}

export default Pages;
