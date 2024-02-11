"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export const DocumentSuccessMessage = ({ onBack }: { onBack?: () => void }) => {
  const router = useRouter();
  return (
    <div className="text-center md:max-w-[600px]">
      <p>
        Please note that your document is currently being reviewed by our
        moderation team. Once approved, it will be available in the material
        repository for other users to access.
      </p>

      <p className="my-5">
        In the meantime, you can explore other files or upload more documents to
        contribute further.
      </p>

      <div className="flex flex-col md:flex-row-reverse items-center gap-5">
        <Button
          onClick={() => router.push("/app/explore")}
          variant="outline"
          type="button"
          className="w-full md:mt-10"
        >
          Explore
        </Button>

        <Button onClick={onBack} className="w-full md:mt-10">
          Upload more
        </Button>
      </div>
    </div>
  );
};
