"use client";
import { useState } from "react";
import { createDocument } from "@/lib/actions/room.actions";
import { LoadingButton } from "@/components/ui/loading-button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const AddDocumentBtn = ({ userId, email }: AddDocumentBtnProps) => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const addDocumentHandler = async () => {
    setLoading(true);
    try {
      const room = await createDocument({ userId, email });

      if (room) router.push(`/documents/${room.id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LoadingButton
      type="submit"
      loading={loading}
      onClick={addDocumentHandler}
      className="gradient-blue flex gap-1 shadow-md"
    >
      <Image src="/assets/icons/add.svg" alt="add" width={24} height={24} />
      <p className="hidden sm:block text-white">Start a blank document</p>
    </LoadingButton>
  );
};

export default AddDocumentBtn;
