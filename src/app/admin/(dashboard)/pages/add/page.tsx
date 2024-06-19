"use client";
import { openNotification } from "@/common/utils";
import PageForm from "@/components/Page/PageForm";
import { ICreatePage, useCreatePageMutation } from "@/redux/services/pages.api";
import { useRouter } from "next/navigation";

function AddPage({ params }: { params: { page: string } }) {
  const [createPage] = useCreatePageMutation();
  const router = useRouter();

  const handleSubmit = async (values: ICreatePage) => {
    try {
      const page = await createPage(values).unwrap();
      openNotification({
        type: "success",
        message: "Page Created Successfully",
      });
      router.push(`/admin/pages/edit?page=${values.key}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <p>{params.page}</p>
      <div className="bg-white min-h-[300px] p-4 my-4 rounded">
        <PageForm handleSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default AddPage;
