import { CircularProgress, Typography } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { UserReviewList } from '../cmps/user-review-list';
import { userService } from '../services/user.service';

export const UserDetails = props => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const loadUser = async () => {
      const { id } = props.match.params;
      setUser(await userService.getUserById(id));
    };
    loadUser();
  }, [props.match.params]);

  if (!user) return <CircularProgress />;
  const { firstName, lastName, reviews = [] } = user;
  return (
    <main className="user-details container">
      <Typography variant="h3" gutterBottom style={{ fontWeight: '500' }}>
        {firstName} {lastName}
      </Typography>
      <UserReviewList reviews={reviews} />
    </main>
  );
};
