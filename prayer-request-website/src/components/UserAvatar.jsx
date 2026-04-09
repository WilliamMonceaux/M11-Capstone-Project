import { Avatar, styled } from '@mui/material';
import { gray } from '../lib/theme/customizations/themePrimitives';

const StyledAvatar = styled(Avatar)(({ theme, size }) => ({
  backgroundColor: gray[200],
  color: theme.palette.light,
}));


// Displays profile picture if a user has one
// else it will display the first initials of username
function UserAvatar({ user }) {
  const profilePic = user.profilePicture;
  const initials = user.username.charAt(0).toUpperCase();

 const userProfile = profilePic ? profilePic : initials;

  return (
    <StyledAvatar src={profilePic}>
      {userProfile}
    </StyledAvatar>
  );
}

export { UserAvatar };
