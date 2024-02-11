"use client";

import { Button } from "@/components/ui/button";
import { useDropzone } from "react-dropzone";

const acceptedFormats = {
  "application/pdf": [],
  "application/msword": [],
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document":[],
  "application/vnd.ms-powerpoint": [],
   "applicatiapplication/vnd.openxmlformats-officedocument.presentationml.presentation": [],
   "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [],
  "image/png": [],
}


export const DocumentUploader = ({ onNext }: { onNext: () => void }) => {

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: acceptedFormats,
    maxFiles: 1,
  });

  const fileToSubmit = acceptedFiles.length > 0 && acceptedFiles[0]


  const files = acceptedFiles.map((file) => (
    <p key={file.name} className="text-[14px]">
      {file.name} - {(file.size / (1024 * 1024)).toFixed(3)} MB
    </p>
  ));

  const onFileSubmit = () => {
    console.log("uploaded file:", fileToSubmit)
    onNext()
  }



  return (
    <div>
      <div
        {...getRootProps({
          className:
            "dropzone cursor-pointer border text-center w-[90vw] md:w-[500px] flex flex-col items-center justify-center border-[#000] border-dashed p-10 rounded-[5px]",
        })}
      >
        <input {...getInputProps()} />
        {UploadIcon}
        <p className="text-[14px] md:text-base">Drag n drop file here or click to upload</p>
        <p>Maximum of 1 file at a time</p>

        {acceptedFiles.length > 0 && <div className="flex mt-3 gap-3 flex-col">{files}</div>}
      </div>


      {/* buttons */}

      <div className="mt-10">
        <Button
          disabled={acceptedFiles.length === 0 }
          onClick={onFileSubmit}
          type="button"
          className="w-full"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

const UploadIcon = (
  <svg
    fill="#000000"
    width="150px"
    height="150px"
    viewBox="-1.75 -1.75 38.50 38.50"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    stroke="#000000"
    transform="rotate(0)matrix(-1, 0, 0, 1, 0, 0)"
    stroke-width="1.9600000000000002"
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke="#CCCCCC"
      stroke-width="2.45"
    >
      {" "}
    
      <path d="M29.426 15.535c0 0 0.649-8.743-7.361-9.74-6.865-0.701-8.955 5.679-8.955 5.679s-2.067-1.988-4.872-0.364c-2.511 1.55-2.067 4.388-2.067 4.388s-5.576 1.084-5.576 6.768c0.124 5.677 6.054 5.734 6.054 5.734h9.351v-6h-3l5-5 5 5h-3v6h8.467c0 0 5.52 0.006 6.295-5.395 0.369-5.906-5.336-7.070-5.336-7.070z"></path>{" "}
    </g>
    <g id="SVGRepo_iconCarrier">
      {" "}
  
      <path d="M29.426 15.535c0 0 0.649-8.743-7.361-9.74-6.865-0.701-8.955 5.679-8.955 5.679s-2.067-1.988-4.872-0.364c-2.511 1.55-2.067 4.388-2.067 4.388s-5.576 1.084-5.576 6.768c0.124 5.677 6.054 5.734 6.054 5.734h9.351v-6h-3l5-5 5 5h-3v6h8.467c0 0 5.52 0.006 6.295-5.395 0.369-5.906-5.336-7.070-5.336-7.070z"></path>{" "}
    </g>
  </svg>
);
