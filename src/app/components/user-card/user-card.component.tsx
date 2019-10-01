import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

import { User } from '../../models/User';

export type UserCardProps = {
  user: User;
};

export type UserCardState = {};

class UserCard extends React.Component<UserCardProps, UserCardState> {
  render() {
    const { name, login } = this.props.user;

    return (
      <Card className='UserCard'>
        <CardContent>
          <Typography variant='h3'>{name || login}</Typography>
        </CardContent>
      </Card>
    );
  }
}

export { UserCard };
