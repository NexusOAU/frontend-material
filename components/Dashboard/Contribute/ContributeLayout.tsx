"use client";

import { ProgressBar } from "@/components/utils/ProgressBar";
import { useState } from "react";
import { DocumentUploader } from "./DocumentUploader";
import { DocumentForm } from "./DocumentForm";
import { DocumentSuccessMessage } from "./SuccessMessage";

const pageTitles = ["Upload file", "Add Details", "Document Uploaded Successfully!"];
const pageDescriptions = [
    "Note that only .PDF, .DOCX and .PPT files are allowed.",
    "Tell us about this file you're uploading",
    "Thank you for sharing with the community. 🚀"
]

export const ContributeLayout = () => {
  const [page, setPage] = useState(1);
  const [pageTitle, setPageTitle] = useState(pageTitles[0]);
  const [pageDescription, setPageDescription] = useState(pageDescriptions[0])
  const [progress, setProgress] = useState(100 / 3);

  const handlePageProgress = (page: number) => {
    setPage(page);
    setPageTitle(pageTitles[page - 1]);
    setPageDescription(pageDescriptions[page - 1]);
    setProgress((100 * page) / 3);
  };

  return (
    <section className="grid place-items-center">
      <ProgressBar progress={progress} />


       <div className="mt-3 mb-6">
      <h2 className="page__title text-center font-[500] text-[25px] md:text-[40px]">
        {pageTitle}
      </h2>

      <p className="text-[14px] text-center md:text-base">{pageDescription}</p>
      </div>

      {page === 1 && <DocumentUploader onNext={() => handlePageProgress(2)} />}
      {page === 2 && (
        <DocumentForm onNext={() => handlePageProgress(3)} onBack={() => handlePageProgress(1)} />
      )}
      {page === 3 && (
        <DocumentSuccessMessage onBack={() => handlePageProgress(1)} />
        
      )}
    </section>
  );
};
