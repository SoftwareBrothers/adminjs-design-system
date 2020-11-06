import React from 'react'
import { withKnobs, select, boolean } from '../../../storybook/node_modules/@storybook/addon-knobs/dist'
import StoryWrapper from '../../utils/story-wrapper'
import { Notifications, StyledToastContainer, Box, Label, Text as TextComponent } from '../..'
import { Button } from '../button'
import { toast } from 'react-toastify';

export default { title: 'DesignSystem/Atoms/Notifications', decorators: [withKnobs] }

enum NotificationsVariant {
  Info = 'info',
  Success = 'success',
  Warning = 'warning',
  Error = 'error'
}

enum NotificationsTypes {
  Text = 'text',
  Action = 'action',
  Icon = 'icon',
  Large = 'large'
}


enum NotificationsPosition {
  TOP_CENTER = 'top-center',
  TOP_RIGHT = 'top-right',
  TOP_LEFT = 'top-left',
  BOTTOM_CENTER = 'bottom-center',
  BOTTOM_RIGHT = 'bottom-right',
  BOTTOM_LEFT = 'bottom-left'
}

export const Default: React.FC = () => {
  const variant = select('Variant', Object.values(NotificationsVariant), NotificationsVariant.Info)
  const type = select('Type', Object.values(NotificationsTypes), NotificationsTypes.Text)
  const position = select('Position', Object.values(NotificationsPosition), NotificationsPosition.TOP_RIGHT)
  return (
    <StoryWrapper label="Notifications props">
      <Notifications>
      </Notifications>
    </StoryWrapper>
  )
}

const triggerNotification = () => {
  toast.success("Success Notification !", {
    position: toast.POSITION.TOP_CENTER
  });
}

export const Examples: React.FC = () => (
  <Box width={1}>


  <StyledToastContainer
    autoClose={2000}
    newestOnTop={false}
    rtl={false}
    pauseOnHover
  />
    <StoryWrapper label="Notifications Variants">
      <Box><Label>Regular: </Label></Box>
      <Box>
          <Button onClick={triggerNotification}>
            Dupa
          </Button>
          <Button onClick={triggerNotification}>
            Dupa 2
          </Button>
      </Box>
    </StoryWrapper>

  </Box>
)
