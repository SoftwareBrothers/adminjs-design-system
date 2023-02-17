import React from 'react'
import styled from 'styled-components'
import JWPaginate from 'jw-paginate'

import { Box } from '../../atoms/box'
import { Button, ButtonProps } from '../../atoms/button'
import { Icon } from '../../atoms/icon'
import { cssClass } from '../../utils/css-class'

const MIN_PAGES_FOR_FIRST_PAGE_BUTTON = 3
const FIRST_PAGE = 1

/**
 * @alias PaginationProps
 * @memberof Pagination
 */
export type PaginationProps = {
  /**
   * Current page
   */
  page: number;
  /**
   * Items per page
   */
  perPage: number;
  /**
   * Total number of items
   */
  total: number;
  /**
   * location. You can pass window.location or the location object
   * given by ReactRouter
   */
  location?: Location;

  /**
   * Triggers when user clicks any of the button
   */
  onChange: (pageNumber: number) => void;
}

const PaginationLink = styled(Button).attrs((props: ButtonProps) => ({
  size: 'icon',
  variant: props.variant ? props.variant : 'text',
}))`
  min-width: 28px;
  height: 28px;
  line-height: 12px;
  padding: 3px 6px;
  text-align: center;
`

PaginationLink.defaultProps = {
  className: cssClass('PaginationLink'),
}

const PaginationWrapper = styled(Box)`
  display: inline-block;
  padding: 2px;
  border: 1px solid ${({ theme }): string => theme.colors.grey20};
  & > :first-child {
    width: 56px;
    border-right: 1px solid ${({ theme }): string => theme.colors.grey20};
  }
  & > :last-child {
    width: 56px;
    border-left: 1px solid ${({ theme }): string => theme.colors.grey20};
  }
`

/**
 * @classdesc
 *
 * <img src="components/pagination.png" />
 *
 * Pagination component
 *
 * ### Usage
 *
 * ```javascript
 * import { Pagination, PaginationProps } from '@adminjs/design-system'
 * ```
 *
 * @component
 * @subcategory Molecules
 * @hideconstructor
 * @see PaginationProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-molecules-pagination--default Storybook}
 * @example
 * const location = { search: ''}
 * return (
 *   <Text py="xl" textAlign="center">
 *     <Pagination
 *      total={100}
 *      page={4}
 *      perPage={10}
 *      location={location}
 *      onChange={(item) => alert(`clicked ${item}`)}
 *   />
 *   </Text>
 * )
 * @section design-system
 */
const Pagination: React.FC<PaginationProps> = (props) => {
  const { total, page, perPage, onChange, ...rest } = props
  const currentPage = page || FIRST_PAGE
  const paginate = JWPaginate(total, currentPage, perPage)

  const isFirstPage = currentPage === paginate.startPage
  const isLastPage = currentPage === paginate.endPage

  const prevPage = isFirstPage ? currentPage : currentPage - 1
  const nextPage = isLastPage ? currentPage : currentPage + 1

  if (paginate.totalPages === FIRST_PAGE || total === 0) {
    return null
  }

  return (
    <PaginationWrapper className={cssClass('Pagination')} {...rest}>
      {
        total >= MIN_PAGES_FOR_FIRST_PAGE_BUTTON
          ? (
            <PaginationLink
              data-testid="first"
              disabled={isFirstPage}
              onClick={() => (!isFirstPage ? onChange(FIRST_PAGE) : undefined)}
            >
              <Icon icon="PageFirst" />
            </PaginationLink>
          )
          : null
      }
      <PaginationLink
        data-testid="previous"
        disabled={isFirstPage}
        onClick={() => (!isFirstPage ? onChange(prevPage) : undefined)}
      >
        <Icon icon="ChevronLeft" />
      </PaginationLink>
      {paginate.pages.map((p) => (
        <PaginationLink
          key={p}
          onClick={(): void => onChange(p)}
          variant={p === currentPage ? 'primary' : 'text'}
          className={cssClass('PaginationLink', p === currentPage ? 'current' : '')}
          data-testid={`page-${p}`}
        >
          {p}
        </PaginationLink>
      ))}
      <PaginationLink
        data-testid="next"
        onClick={() => (!isLastPage ? onChange(nextPage) : undefined)}
        disabled={isLastPage}
      >
        <Icon icon="ChevronRight" />
      </PaginationLink>
      {
        total >= MIN_PAGES_FOR_FIRST_PAGE_BUTTON
          ? (
            <PaginationLink
              data-testid="last"
              onClick={() => (!isLastPage ? onChange(paginate.totalPages) : undefined)}
              disabled={isLastPage}
            >
              <Icon icon="PageLast" />
            </PaginationLink>
          )
          : null
      }

    </PaginationWrapper>
  )
}

export { Pagination }
export default Pagination
