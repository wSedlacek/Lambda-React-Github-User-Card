import React from 'react';
import { Card, CardContent, Typography, withStyles } from '@material-ui/core';

import { User } from '../../models/User';

export type UserCardProps = {
  user: User;
  classes: Record<'header' | 'avatar' | 'content' | 'root', string>;
};
export type UserCardState = {};

const UserCard = withStyles(() => ({
  root: {
    maxWidth: 600,
    margin: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    height: 140,
  },
  avatar: {
    width: 150,
    height: 150,
    marginTop: -130,
    background: 'white',
    border: 'solid 10px white',
    borderRadius: '50%',
  },
}))(
  class extends React.Component<UserCardProps, UserCardState> {
    render(): React.ReactNode {
      const { classes, user } = this.props;
      const { name, login, avatar_url } = user;

      return (
        <Card className={`${classes.root} UserCard`}>
          <div className={classes.header}></div>
          <CardContent className={classes.content}>
            <img className={classes.avatar} src={avatar_url} alt={name || login} />
            <Typography variant='h4'>{name || login}</Typography>
          </CardContent>
        </Card>
      );
    }
  }
);

export { UserCard };
