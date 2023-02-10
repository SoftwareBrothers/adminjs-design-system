import styled from 'styled-components'
import { Button } from '../../atoms/button'
import { Input } from '../../atoms/input'
import { Label } from '../../atoms/label'
import { Link } from '../../atoms/link'

/**
 * @component
 * @private
 */
const InputGroup = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  ${Input} {
    flex-grow: 1;
  }
  ${Input}:not(:last-child) {
    border-right: none;
  }
  ${Label}, & > ${Button}, & > ${Link}:last-child {
    padding: ${({ theme }) => theme.space.sm};
    border: solid ${({ theme }) => theme.colors.inputBorder};
    border-width: 1px 1px 1px 0;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    margin: 0;
    color: ${({ theme }) => theme.colors.grey40};
  }

  ${Label}, ${Button}, ${Link} {
    flex-shrink: 0;
    flex-grow: 0;
  }

  ${Label}, ${Link} {
    line-height: ${({ theme }) => theme.lineHeights.lg};
  }

  ${Button}:first-child, ${Link}:first-child {
    border-right: 0;
  }

  ${Input}:hover {
    & + ${Label}, & + ${Button}, & + ${Link} {
      border-color: ${({ theme }) => theme.colors.grey60};
    }
  } 
  ${Input}:focus {
    & + ${Label}, & + ${Button}, & + ${Link} {
      border-color: ${({ theme }) => theme.colors.primary100};
    }
  }
`

export default InputGroup
