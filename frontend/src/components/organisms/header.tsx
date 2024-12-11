import { memo } from 'react';

import { Box, Stack } from '@mui/material';

import { useAudio } from '@chainlit/react-client';

import UserButton from 'components/atoms/buttons/userButton';
import { Logo } from 'components/atoms/logo';
import ChatProfiles from 'components/molecules/chatProfiles';
import NewChatButton from 'components/molecules/newChatButton';

import AudioPresence from './chat/inputBox/AudioPresence';
import ReadmeButton from './readmeButton';

const Header = memo(() => {
  const { audioConnection } = useAudio();
  return (
    <Box
      px={1}
      py={1}
      display="flex"
      height="45px"
      alignItems="center"
      flexDirection="row"
      justifyContent="space-between"
      color="text.primary"
      gap={2}
      id="header"
      position="relative"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          alignItems: 'center',
          gap: 1
        }}
      >
        {audioConnection === 'on' ? (
          <AudioPresence
            type="server"
            height={35}
            width={70}
            barCount={4}
            barSpacing={2}
          />
        ) : null}
        <ChatProfiles />
      </Box>
      <Logo style={{ maxHeight: '25px', marginLeft: '8px' }} />
      <Box />
      <Stack direction="row" alignItems="center">
        <ReadmeButton />
        <NewChatButton />
        <UserButton />
      </Stack>
    </Box>
  );
});

export { Header };
