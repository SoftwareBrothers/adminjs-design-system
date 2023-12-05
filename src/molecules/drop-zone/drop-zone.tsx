import React, { useCallback, useEffect, useState } from 'react'
import template from 'lodash/template.js'
import { rgba } from 'polished'
import { styled, css } from '@styled-components'

import { Box, BoxProps } from '../../atoms/box/index.js'
import { Label } from '../../atoms/label/index.js'
import { Text } from '../../atoms/text/index.js'
import { DisplaySizeUnit, humanFileSize } from '../../utils/human-file-size.js'
import { MessageBox } from '../message-box/index.js'
import { DropZoneItem } from './drop-zone-item.jsx'
import Image from './drop-zone-image.jsx'

/**
 * @memberof DropZone
 * @alias FileSizeUnit
 */
type FileSizeUnit = DisplaySizeUnit

const validateContentType = (mimeTypes: undefined | Array<string>, mimeType: string): boolean => {
  if (!mimeTypes || !mimeTypes.length) {
    return true
  }
  return mimeTypes.includes(mimeType)
}

const validateSize = (
  maxSize: string | number | undefined,
  size: string | number | null,
): boolean => {
  if (!maxSize) {
    return true
  }
  if (!size) {
    return true
  }
  return +maxSize >= +size
}

const inUnit = (size: string | number, unit?: FileSizeUnit): string => {
  if (!size) {
    return ''
  }

  return humanFileSize(size, unit)
}

export const DROPZONE_DEFAULT_TRANSLATIONS = {
  placeholder: 'Drop your file here, or click to browse',
  acceptedSize: 'Max size: {{maxSize}}',
  acceptedType: 'Supports: {{mimeTypes}}',
  unsupportedSize: 'File {{fileName}} is too big',
  unsupportedType: 'File {{fileName}} has unsupported type: {{fileType}}',
}

const translate = (str: string, params?: Record<string, string | number>) => {
  try {
    return template(str, { interpolate: /\{\{(\w+)\}\}/g })(params)
  } catch (e) {
    return str
  }
}

/**
 * @returns {void}
 * @memberof DropZone
 * @alias OnDropDownChange
 */
export type OnDropZoneChange = (files: Array<File>) => void

/**
 * @memberof DropZone
 * @alias DropZoneProps
 */
export type DropZoneProps = {
  /**
   * if drop zone should handle multiple uploads
   */
  multiple?: boolean
  /**
   * Initial files collection (in case you want to hold files state)
   */
  files?: Array<File>
  /**
   * Callback performed when the file is dropped/selected
   */
  onChange?: OnDropZoneChange
  /**
   * Validate options
   */
  validate?: {
    /**
     * Maximum size of the uploaded file in bytes. If not defined - all files are allowed.
     */
    maxSize?: number
    /**
     * Available mime types. When not defined - all mime types are allowed.
     */
    mimeTypes?: Array<string>
  }
  /**
   * Upload limit display e.g.: 'KB' (upper case)
   */
  uploadLimitIn?: FileSizeUnit
  /**
   * Custom drop zone translations
   * @default
   * {
   *   placeholder: 'Drop your image here, or click to browse',
   *   acceptedSize: 'Max size: {{maxSize}}',
   *   acceptedType: 'Supports: {{mimeTypes}}',
   *   unsupportedSize: 'File {{fileName}} is too big',
   *   unsupportedType: 'File {{fileName}} has unsupported type: {{fileType}}',
   * }
   */
  translations?: Partial<typeof DROPZONE_DEFAULT_TRANSLATIONS>
}

const UploadInput = styled.input`
  font-size: 100px;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  bottom: 0;
  cursor: pointer;
  width: 100%;
`

const StyledDropZone: any = styled(Box)<{ isDragging: boolean } & BoxProps>`
  border: 1px dashed ${({ theme }) => theme.colors.inputBorder};
  border-radius: ${({ theme }) => theme.space.sm};
  position: relative;
  text-align: center;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary100};
  }

  ${({ isDragging }) => isDragging
    && css`
      background-color: ${({ theme }) => rgba(theme.colors.primary100, 0.05)};
    `}

  & ${Label} {
    color: ${({ theme }) => theme.colors.grey60};
    font-size: ${({ theme }) => theme.fontSizes.xs};
    padding-right: 4px;
    letter-spacing: 1px;
  }
`

/**
 * @classdesc
 *
 * <img src="components/drop-zone.png" />
 *
 * DropZone which can be used for uploading files.
 *
 * ### usage
 *
 * ```javascript
 * import { DropZone, DropZoneProps } from '@adminjs/design-system'
 * ```
 *
 * how to use it in your custom component.tsx (TypesScript):
 * ```
 * import React, { useState } from 'react'
 * import { DropZone, Label, BasePropertyProps } from '@adminjs/design-system'
 * import { unflatten } from 'flat'
 *
 * const UploadPhoto: React.FC<BasePropertyProps> = (props) => {
 *   const { property, record, onChange } = props
 *
 *   const onUpload = (files: FileList) => {
 *     const newRecord = {...record}
 *     const file = files.length && files[0]
 *
 *     onChange({
 *       ...newRecord,
 *       params: {
 *         ...newRecord.params,
 *         [property.name]: file,
 *       }
 *     })
 *     event.preventDefault()
 *   }
 *
 *   return (
 *     <Box>
 *       <Label>{property.label}</Label>
 *       <DropZone onChange={onUpload} />
 *     </Box>
 *   )
 * }
 * ```
 * @hideconstructor
 * @component
 * @subcategory Molecules
 * @see FileSizeUnit
 * @see OnDropDownChange
 * @see DropZoneProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-molecules-dropzone--default Storybook}
 * @example <caption>Single file with validation</caption>
 * const maxSize = 1024 * 100
 * const mimeTypes = ['application/pdf']
 * const onUpload = (files) => { alert(files,length ? files[0].name : 'no files' ) }
 * return (
 * <Box>
 *   <DropZone
 *     onChange={onUpload}
 *     validate= { { maxSize, mimeTypes } }
 *   />
 * </Box>
 * )
 *
 * @example <caption>Multi file of photos</caption>
 * const mimeTypes = ['image/png']
 * const onUpload = (files) => { alert(files.length ? files.length : 'no files' ) }
 * return (
 * <Box>
 *   <DropZone
 *     multiple
 *     onChange={onUpload}
 *     validate= { { mimeTypes } }
 *   />
 * </Box>
 * )
 * @section design-system
 */
const DropZone: React.FC<DropZoneProps> = (props) => {
  const {
    validate,
    onChange,
    multiple,
    files: filesFromProps,
    uploadLimitIn,
    translations,
    ...other
  } = props
  const [isDragging, setIsDragging] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [filesToUpload, setFilesToUpload] = useState<Array<File>>(filesFromProps ?? [])
  const t = { ...DROPZONE_DEFAULT_TRANSLATIONS, ...translations }

  useEffect(() => {
    if (filesFromProps) {
      setFilesToUpload(filesFromProps)
    }
  }, [filesFromProps])

  const onDragEnter = (): void => setIsDragging(true)
  const onDragLeave = (): void => setIsDragging(false)
  const onDragOver = (): void => setIsDragging(true)

  const removeItem = useCallback(
    (index: number): void => {
      const newItems = [...filesToUpload]
      newItems.splice(index, 1)
      if (onChange) {
        onChange(newItems)
      }
      setFilesToUpload(newItems)
    },
    [filesToUpload, setFilesToUpload, onChange],
  )

  const onDrop = useCallback(
    (event: React.DragEvent | React.SyntheticEvent): void => {
      event.preventDefault()
      setIsDragging(false)

      const { files } = (event as React.DragEvent).dataTransfer || event.target
      const validatedFiles: Array<File> = []

      for (let i = 0; i < files.length; i += 1) {
        const file = files.item(i) as File
        if (!file) {
          return
        }
        if (validate && !validateContentType(validate.mimeTypes, file.type)) {
          setError(
            translate(t.unsupportedType, {
              fileName: file.name,
              fileType: file.type,
            }),
          )
          return
        }
        if (validate && !validateSize(validate.maxSize, file && file.size)) {
          setError(translate(t.unsupportedSize, { fileName: file.name }))
          return
        }
        validatedFiles.push(file)
        setError(null)
      }
      let newFiles
      if (!multiple && validatedFiles.length) {
        newFiles = [validatedFiles[0]]
      } else {
        newFiles = [...filesToUpload, ...validatedFiles]
      }
      if (onChange) {
        onChange(newFiles)
      }
      setFilesToUpload(newFiles)
    },
    [onChange, setFilesToUpload, setIsDragging],
  )

  const displayUploadLimit = useCallback(() => {
    if (validate && validate.maxSize) {
      return inUnit(validate.maxSize, uploadLimitIn)
    }
    return ''
  }, [validate])

  return (
    <Box>
      <StyledDropZone
        onDragEnter={onDragEnter}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        isDragging={isDragging}
        {...other}
        p="xl"
      >
        <UploadInput type="file" onChange={(event): void => onDrop(event)} multiple={multiple} />
        <Box>
          <Box color="primary100">
            <Image />
          </Box>
          <Text fontSize="sm">{t.placeholder}</Text>
          <Box>
            {validate && validate.maxSize ? (
              <Text variant="xs" color="grey60" lineHeight="default" mt="sm">
                {translate(t.acceptedSize, { maxSize: displayUploadLimit() })}
              </Text>
            ) : (
              ''
            )}
            {validate && validate.mimeTypes && validate.mimeTypes.length ? (
              <Text variant="xs" color="grey60" lineHeight="default" mt="sm">
                {translate(t.acceptedType, { mimeTypes: validate.mimeTypes.join(', ') })}
              </Text>
            ) : (
              ''
            )}
          </Box>
        </Box>
      </StyledDropZone>
      {error && (
        <MessageBox
          mt="default"
          variant="danger"
          size="sm"
          icon="AlertCircle"
          message={error}
          onCloseClick={(): void => setError(null)}
        />
      )}
      {filesToUpload.map((file, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <DropZoneItem file={file} key={index} onRemove={(): void => removeItem(index)} />
      ))}
    </Box>
  )
}

DropZone.displayName = 'DropZone'

export { DropZone }
export default DropZone
