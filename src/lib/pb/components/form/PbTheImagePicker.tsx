import { useRef, useState } from "react";
import { getFileURL } from "../../client";
import { Schema } from "../../db-types";
import { ImagePlus } from "lucide-react";

interface PbTheImagePickerProps {
  collection_id_or_name?:keyof Schema;
  record_id?: string;
  file_name?: string;
  setFileImage?: (file: File | null) => void;
}

export function PbTheImagePicker({collection_id_or_name,record_id,file_name,setFileImage}:PbTheImagePickerProps){
const img_url = getFileURL({ collection_id_or_name, record_id, file_name });
const [pic,setPic] = useState(img_url)
//  const [input_pic, setInputPic] = useState<File | null>(null);
  const ref = useRef<HTMLInputElement>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files[0]) {
    //   setInputPic(e.target.files[0]);
      setPic((prev) => {
        if (e.target.files && e.target.files[0]) {
          return URL.createObjectURL(e.target.files[0]);
        }
        return prev;
      });
      setFileImage && setFileImage(e.target.files && e.target.files[0]);
    }
  }
return (
  <div className="w-full h-full flex flex-col gap-1">
    <h2 className="text-sm text-accent">image input</h2>
    <div className="md:min-w-[200px]  bg-accent/20 flex flex-col items-center justify-center border">
      {typeof pic === "string" && pic.length > 0 ? (
        <div className="avatar" onClick={() => ref.current?.click()}>
          <div className="">
            <img className="max-w-md" src={pic} height={"300"} width={"400"} />
          </div>
        </div>
      ) : null}

      <div className="flex flex-col items-center justify-center">
        <input
          type="file"
          ref={ref}
          className="hidden"
          onChange={(e) => handleChange(e)}
        />
        <ImagePlus
          onClick={() => ref.current?.click()}
          className="h-7 w-7"
        ></ImagePlus>
      </div>
    </div>
  </div>
);
}