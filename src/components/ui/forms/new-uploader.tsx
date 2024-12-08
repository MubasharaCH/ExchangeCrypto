import { useEffect, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { useTranslation } from 'next-i18next';
import { UploadIcon } from '@/components/icons/upload-icon';
import Spinner from '@/components/ui/loaders/spinner/spinner';
import { useUploads } from '@/framework/settings';

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
    accept: 'image/*',
    multiple,
    onDrop: async (acceptedFiles) => {
      if (acceptedFiles.length) {
        if (multiple) {
            setFiles((current:any) => [...current, ...acceptedFiles.map((file) => URL.createObjectURL(file))]);
            setImages((current:any) => [...current, ...acceptedFiles]);
        } else {
          setFiles((current: any) => [
            ...current,
            URL?.createObjectURL(acceptedFiles[0]),
          ]);
          setImages((current: any) => [...current, acceptedFiles[0]]);
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
            {t('text-upload-highlight')}
          </span>{' '}
          {t('text-upload-message')} <br />
          <span className="text-xs text-body">{t('text-img-format')}</span>
        </p>
      </div>
    </section>
  );
}
