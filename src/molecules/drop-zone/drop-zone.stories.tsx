import React from 'react'
import type { ComponentMeta } from '@storybook/react'
import { DROPZONE_DEFAULT_TRANSLATIONS, DropZone, DropZoneProps } from '../..'

export const Default: React.FC<
  DropZoneProps & { maxSize: number; mimeTypes: string[] } & typeof DROPZONE_DEFAULT_TRANSLATIONS
> = ({
  multiple,
  maxSize,
  mimeTypes,
  uploadLimitIn,
  placeholder,
  acceptedSize,
  acceptedType,
  unsupportedSize,
  unsupportedType,
}) => (
  <DropZone
    multiple={multiple}
    validate={{
      maxSize,
      mimeTypes,
    }}
    uploadLimitIn={uploadLimitIn}
    translations={{
      placeholder,
      acceptedSize,
      acceptedType,
      unsupportedSize,
      unsupportedType,
    }}
  />
)

export default {
  title: 'DesignSystem/Molecules/DropZone',
  component: DropZone,
  argTypes: {
    multiple: {
      defaultValue: false,
      description: 'If drop zone should handle multiple uploads',
      control: { type: 'boolean' },
    },
    maxSize: {
      defaultValue: 10240000,
      description:
        'Maximum size of the uploaded file in bytes. If not defined - all files are allowed',
      control: { type: 'number' },
    },
    mimeTypes: {
      defaultValue: ['application/pdf', 'image/png'],
      control: { type: 'object' },
    },
    uploadLimitIn: {
      defaultValue: 'MB',
      description: 'Upload limit display',
      options: ['B', 'KB', 'MB', 'GB', 'TB'],
      control: { type: 'select' },
    },
    placeholder: {
      defaultValue: DROPZONE_DEFAULT_TRANSLATIONS.placeholder,
      control: { type: 'text' },
    },
    acceptedSize: {
      defaultValue: DROPZONE_DEFAULT_TRANSLATIONS.acceptedSize,
      control: { type: 'text' },
    },
    acceptedType: {
      defaultValue: DROPZONE_DEFAULT_TRANSLATIONS.acceptedType,
      control: { type: 'text' },
    },
    unsupportedSize: {
      defaultValue: DROPZONE_DEFAULT_TRANSLATIONS.unsupportedSize,
      control: { type: 'text' },
    },
    unsupportedType: {
      defaultValue: DROPZONE_DEFAULT_TRANSLATIONS.unsupportedType,
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof DropZone>
