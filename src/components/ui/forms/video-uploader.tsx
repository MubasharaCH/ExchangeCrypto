import { useEffect, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { useTranslation } from 'next-i18next';
import { UploadIcon } from '@/components/icons/upload-icon';
import Spinner from '@/components/ui/loaders/spinner/spinner';
import { useUploads } from '@/framework/settings';
import { toast } from 'react-toastify';

export default function Uploader({
  setFiles,
  setImages,
  value,
  name,
  onBlur,
  multiple,
}: any) {
  const { t } = useTranslation('common');

  const { getRootProps, getInputProps } = useDropzone({
    //@ts-ignore
    accept: 'video/mp4',
    multiple :false,
    onDrop: async (acceptedFiles) => {
      if (acceptedFiles.length) {
        const file = acceptedFiles[0];
        const maxSize = 5 * 1024 * 1024; // 5MB in bytes

        if (file.size <= maxSize&&file.type==="video/mp4") {
          setFiles((current: any) => [...current, URL.createObjectURL(file)]);
          setImages((current: any) => [...current, file]);
        } else {
          toast.error("Video Should Less Then 5MB and mp4 format")
        }
      }
    },
  });

  return (
    <section className="upload">
      <div
        {...getRootProps({
          className:
            'border-dashed border-2 border-border-base h-36 rounded flex flex-col justify-center items-center cursor-pointer focus:border-accent-400 focus:outline-none',
        })}
      >
        <input
          {...getInputProps({
            name,
            onBlur,
          })}
        />
        <UploadIcon className="text-muted-light" />
        <p className="mt-4 text-center text-sm text-body">
          <span className="font-semibold text-accent">
            {t('text-upload-video')}
          </span>{' '}
          {t('text-upload-message')} <br />
          <span className="text-xs text-body">{t('text-video-format')}</span>
        </p>
      </div>
    </section>
  );
}
