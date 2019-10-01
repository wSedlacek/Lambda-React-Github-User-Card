import React from 'react';
import axios from 'axios';

import { UserCard } from './components/user-card/user-card.component';
import { User } from './models/User';

export type AppProps = {};
export type AppState = {
  user: User | null;
};

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = { user: null };

    const user = 'wSedlacek';
    axios
      .get<User>(`https://api.github.com/users/${user}`)
      .then((res) => this.setState({ user: res.data }));
  }

  render() {
    const { user } = this.state;

    if (!user) return <div>Loading...</div>;

    return (
      <div>
        <UserCard user={user} />
      </div>
    );
  }
}

export { App };
