import { Skeleton } from "@/components/ui/skeleton";
import Header from "@/components/Header";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { RotateCcwIcon, RotateCwIcon } from "lucide-react";

function Divider() {
  return <div className="divider" />;
}

export default function Loading() {
  return (
    <div>
      <Header>
        <div
          //   ref={containerRef}
          className="flex w-fit items-center justify-center gap-2"
        >
          <p className="document-title">Title</p>

          <Image
            src="/assets/icons/edit.svg"
            alt="edit"
            width={24}
            height={24}
            //   onClick={() => setEditing(true)}
            className="pointer"
          />
        </div>
        <div className="flex w-full flex-1 justify-end gap-2 sm:gap-3">
          {/* <ActiveCollaborators /> */}

          <Button
            className="gradient-blue flex h-9 gap-1 px-4"
            // disabled={currentUserType !== "editor"}
          >
            <Image
              src="/assets/icons/share.svg"
              alt="share"
              width={20}
              height={20}
              className="min-w-4 md:size-5"
            />
            <p className="mr-1 hidden sm:block">Share</p>
          </Button>

          <Skeleton className="w-9 h-9 rounded-full" />
        </div>
      </Header>

      {/* Toolbar */}
      <div className="editor-container size-full">
        <div className="toolbar-wrapper flex min-w-full justify-between">
          {/* ToolbarPlugin Buttons */}
          <div className="toolbar">
            <Button
              variant={"ghost"}
              disabled
              className="toolbar-btn spaced"
              aria-label="Undo"
            >
              <i className="format undo" />
            </Button>
            <Button
              variant={"ghost"}
              disabled
              className="toolbar-btn"
              aria-label="Redo"
            >
              <i className="format redo" />
            </Button>
            <Divider />
            <Button variant={"ghost"} className="toolbar-btn spaced">
              <i className="format h1" />
            </Button>
            <Button variant={"ghost"} className="toolbar-btn spaced">
              <i className="format h2" />
            </Button>
            <Button variant={"ghost"} className="toolbar-btn spaced">
              <i className="format h3" />
            </Button>
            <Divider />
            <Button
              variant={"ghost"}
              className="toolbar-btn spaced"
              aria-label="Format Bold"
            >
              <i className="format bold" />
            </Button>
            <Button
              variant={"ghost"}
              className="toolbar-btn spaced"
              aria-label="Format Italic"
            >
              <i className="format italic" />
            </Button>
            <Button
              variant={"ghost"}
              className="toolbar-btn spaced"
              aria-label="Format Underline"
            >
              <i className="format underline" />
            </Button>
            <Button
              variant={"ghost"}
              className="toolbar-btn spaced"
              aria-label="Format Strikethrough"
            >
              <i className="format strikethrough" />
            </Button>
            <Divider />
            <Button
              variant={"ghost"}
              className="toolbar-btn spaced"
              aria-label="Left Align"
            >
              <i className="format left-align" />
            </Button>
            <Button
              variant={"ghost"}
              className="toolbar-btn spaced"
              aria-label="Center Align"
            >
              <i className="format center-align" />
            </Button>
            <Button
              variant={"ghost"}
              className="toolbar-btn spaced"
              aria-label="Right Align"
            >
              <i className="format right-align" />
            </Button>
            <Button
              variant={"ghost"}
              className="toolbar-btn spaced"
              aria-label="Justify Align"
            >
              <i className="format justify-align" />
            </Button>{" "}
          </div>

          {/* Delete Button */}
          <Button
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
          </Button>
        </div>
      </div>

      {/* Editor */}
      <div className="grid grid-cols-3 gap-4 lg:gap-0 pt-[3rem] lg:px-10">
        <div className="col-span-3 lg:col-span-2 px-16">
          <Skeleton className="w-full h-[80vh]" />
        </div>
        <div className="space-y-4 col-span-3 lg:col-span-1 px-16 lg:px-0 lg:max-w-[23rem]">
          <Skeleton className="w-full h-28" />
        </div>
      </div>
    </div>
  );
}
