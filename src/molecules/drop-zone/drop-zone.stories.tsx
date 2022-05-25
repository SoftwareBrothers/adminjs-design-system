import React from 'react'
import { DropZone } from '../..'

export const Default: React.FC<any> = ({ multiple, maxSize, mimeTypes, uploadLimitIn }) => (
  <DropZone
    multiple={multiple}
    validate={{
      maxSize,
      mimeTypes,
    }}
    uploadLimitIn={uploadLimitIn}
  />
)

export default {
  title: 'DesignSystem/Molecules/DropZone',
  argTypes: {
    multiple: {
      defaultValue: false,
      description: 'If drop zone should handle multiple uploads',
      control: { type: 'boolean' },
    },
    maxSize: {
      defaultValue: 15,
      description: 'Maximum size of the uploaded file in bytes. If not defined - all files are allowed',
      control: { type: 'number' },
    },
    mimeTypes: {
      defaultValue: ['application/pdf'],
      control: { type: 'object' },
    },
    uploadLimitIn: {
      defaultValue: 'KB',
      description: 'Upload limit display',
      options: ['B', 'KB', 'MB', 'GB', 'TB'],
      control: { type: 'select' },
    },
  },
}
