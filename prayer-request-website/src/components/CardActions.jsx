import { EditBtn } from './EditBtn';
import { LikeBtn } from './LikeBtn';
import { CommentBtn } from './CommentBtn';
import { Stack } from '@mui/material';
import PropTypes from 'prop-types';

function CardActions({
  prayerAuthor,
  onEdit,
  onPray,
  commentToggle,
  isExpanded,
  hasPrayed,
  prayCount,
  commentCount,
}) {
  return (
    // Horizontal container for CardActions
    <Stack
      direction="row"
      spacing={1}
      alignItems="center"
      sx={{
        order: { xs: 1, sm: 2 },
        width: { xs: '100%', sm: 'auto' },
        justifyContent: 'flex-end',
      }}
    >
        {/* If there is an author, enable edit prayer ability */}
      {prayerAuthor && <EditBtn editToggle={onEdit} />}
      <LikeBtn
        author={prayerAuthor}
        toggle={onPray}
        prayed={hasPrayed}
        prayCount={prayCount}
      />
      <CommentBtn
        text={isExpanded ? 'Hide' : 'Comment'}
        expand={commentToggle}
        amount={commentCount}
      />
    </Stack>
  );
}

 // PropTypes
CardActions.propTypes = {
  prayerAuthor: PropTypes.bool,
  onEdit: PropTypes.func.isRequired,
  onPray: PropTypes.func.isRequired,
  hasPrayed: PropTypes.bool,
  prayCount: PropTypes.number,
  commentToggle: PropTypes.func.isRequired,
  commentCount: PropTypes.number,
  isExpanded: PropTypes.bool,
};

export { CardActions };
