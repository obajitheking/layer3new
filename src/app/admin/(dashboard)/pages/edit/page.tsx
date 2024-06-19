"use client";
import { getErrorMessage } from "@/common/utils";
import PageForm from "@/components/Page/PageForm";
import {
  ICreatePage,
  IPage,
  useGetPageQuery,
  useUpdatePageMutation,
} from "@/redux/services/pages.api";
import { Alert, Button, Skeleton } from "antd";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

function UpdatePage({ params }: { params: { page: string } }) {
  const [updatePage] = useUpdatePageMutation();
  const searchParams = useSearchParams();
  const pageKey = searchParams.get("page");
  const {
    data = {} as IPage,
    isLoading,
    isError,
    error,
    refetch,
  } = useGetPageQuery(pageKey || "");
  const router = useRouter();

  useEffect(() => {
    if (!pageKey) router.push("/admin/pages");
  }, [router, pageKey]);

  const handleSubmit = async (values: ICreatePage) => {
    try {
      await updatePage({ key: pageKey || "", payload: values });
      router.push("/admin/pages");
    } catch (error) {}
  };

  return (
    <div>
      <div className="flex justify-between w-full items-center my-4">
        <p>{pageKey}</p>
        <Link href="/admin/pages/add" passHref>
          <Button type="primary">Add New Page</Button>
        </Link>
      </div>
      <div className="bg-white min-h-[300px] p-4 my-4 rounded">
        {isLoading ? (
          <Skeleton />
        ) : isError ? (
          <div>
            <Alert
              message="Error"
              description={getErrorMessage(error)}
              type="error"
              showIcon
              action={
                <Button type="primary" onClick={refetch}>
                  Retry
                </Button>
              }
            />
          </div>
        ) : (
          <PageForm
            handleSubmit={handleSubmit}
            intialValues={{
              key: data.key,
              title: data.title,
              description: data.description,
              content: data.content,
            }}
            updatedAt={data.updated_at}
            actionText="Update Page"
          />
        )}
      </div>
    </div>
  );
}

export default UpdatePage;
