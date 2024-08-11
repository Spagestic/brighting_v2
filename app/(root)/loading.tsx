import { Skeleton } from "@/components/ui/skeleton";
import Header from "@/components/Header";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Loading() {
  return (
    <div className="home-container">
      <Header className="sticky left-0 top-0">
        <div className="flex items-center gap-2 lg:gap-4">
          <Image
            src="/assets/icons/bell.svg"
            alt="inbox"
            width={24}
            height={24}
          />
          <Skeleton className="w-9 h-9 rounded-full" />
        </div>
      </Header>

      <div className="document-list-container">
        <div className="document-list-title">
          <h3 className="text-28-semibold">All documents</h3>
          <Button type="submit" className="gradient-blue flex gap-1 shadow-md">
            <Image
              src="/assets/icons/add.svg"
              alt="add"
              width={24}
              height={24}
            />
            <p className="hidden sm:block">Start a blank document</p>
          </Button>
        </div>
        <div className="document-ul">
          {/* Document List */}
          <Skeleton className="document-list-item hover:bg-gray-100">
            <div className="flex flex-1 items-center gap-4">
              <div
                // className="hidden rounded-md bg-dark-500 p-2 sm:block"
                className="hidden rounded-md p-2 sm:block"
              >
                {/* <Image
                  src="/assets/icons/doc.svg"
                  alt="file"
                  width={40}
                  height={40}
                /> */}
                <Skeleton className="w-[40px] h-[40px]" />
              </div>
              <div className="space-y-1">
                {/* <p className="line-clamp-1 text-lg text-black">Title</p> 
                <p className="text-sm font-light text-gray-800">
                  Created about XXX ago
                </p>*/}
              </div>
            </div>
            {/* Delete Button */}
            {/* <Button
              variant={"ghost"}
              className="min-w-9 rounded-xl bg-transparent p-2 transition-all"
            >
              <Image
                src="/assets/icons/delete.svg"
                alt="delete"
                width={20}
                height={20}
                className="mt-1"
              />
            </Button> */}
          </Skeleton>
        </div>
      </div>
    </div>
  );
}
