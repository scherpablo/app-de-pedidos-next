"use client";

import { CldUploadWidget } from "next-cloudinary";
import { TbPhotoPlus } from "react-icons/tb";

const ImageUpload = () => {
  return (
    <>
      <CldUploadWidget
        uploadPreset="ndseojzg"
        options={{ maxFiles: 1 }}
        onSuccess={(result, { widget }) => {
            console.log(result)
        }}
      >
        {({ open }) => (
          <>
            <div className="space-y-2">
              <label className="text-slate-800">
                <div
                  onClick={() => open()}
                  className="realtive cursor-pointer hover:opacity-70 transition p-10 
                border-neutral-300 flex flex-col justify-center items-center gap-4 text-neutral-600 bg-slate-100"
                >
                  <TbPhotoPlus size={50} />
                  <p className="text-lg font-semibold">Agergar Imagen</p>
                </div>
              </label>
            </div>
          </>
        )}
      </CldUploadWidget>
    </>
  );
};

export default ImageUpload;
