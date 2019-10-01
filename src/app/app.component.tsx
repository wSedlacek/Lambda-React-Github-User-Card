import React from 'react';
import axios from 'axios';

import { Typography } from '@material-ui/core';

import { User } from './models/User';
import { UserCard } from './components/user-card/user-card.component';

export type AppProps = {};
export type AppState = {
  user: User | null;
  followers: User[];
  error: boolean;
};

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      user: null,
      followers: [],
      error: false,
    };

    const user = 'wSedlacek';

    axios
      .get<User>(`https://api.github.com/users/${user}`)
      .then((res) => this.setState({ user: res.data }))
      .catch(() => this.setState({ error: true }));
  }

  componentDidUpdate() {
    const { user, followers } = this.state;
    if (user && followers.length === 0)
      axios
        .get<User[]>(user.followers_url)
        .then((res) => this.setState({ followers: res.data }))
        .catch(() => this.setState({ error: true }));
  }

  render() {
    const { user, followers, error } = this.state;

    if (error)
      return (
        <Typography variant='h3'>
          Error - Could not load data, this is typically because of the GitHub API limit.
        </Typography>
      );
    if (!user) return <Typography variant='h3'>Loading...</Typography>;

    return (
      <div>
        <Typography align='center' variant='h2' gutterBottom>
          Me
        </Typography>
        <UserCard user={user} />
        <br />
        <Typography align='center' variant='h2' gutterBottom>
          Followers
        </Typography>
        {followers.map((follower) => (
          <UserCard user={follower} />
        ))}
      </div>
    );
  }
}

export { App };
