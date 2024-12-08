import Uploader from '@/components/ui/forms/new-uploader';
import { Controller } from 'react-hook-form';

interface FileInputProps {
  control: any;
  name: string;
  multiple?: boolean;
  setFiles:any;
  setImages:any;
}

const FileInput = ({ control, name, multiple,setFiles,setImages }: FileInputProps) => {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={[]}
      render={({ field: { ref, ...rest } }) => (
        <Uploader {...rest} multiple={multiple} setFiles={setFiles} setImages={setImages} />
      )}
    />
  );
};

export default FileInput;
