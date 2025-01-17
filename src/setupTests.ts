import '@testing-library/jest-dom/extend-expect';
import { User, Type } from './app/models/User';

export const dave: User = {
  login: 'AlmightyMegadeth00',
  id: 1711471,
  node_id: 'MDQ6VXNlcjE3MTE0NzE=',
  avatar_url: 'https://avatars0.githubusercontent.com/u/1711471?v=4',
  gravatar_id: '',
  url: 'https://api.github.com/users/AlmightyMegadeth00',
  html_url: 'https://github.com/AlmightyMegadeth00',
  followers_url: 'https://api.github.com/users/AlmightyMegadeth00/followers',
  following_url: 'https://api.github.com/users/AlmightyMegadeth00/following{/other_user}',
  gists_url: 'https://api.github.com/users/AlmightyMegadeth00/gists{/gist_id}',
  starred_url: 'https://api.github.com/users/AlmightyMegadeth00/starred{/owner}{/repo}',
  subscriptions_url: 'https://api.github.com/users/AlmightyMegadeth00/subscriptions',
  organizations_url: 'https://api.github.com/users/AlmightyMegadeth00/orgs',
  repos_url: 'https://api.github.com/users/AlmightyMegadeth00/repos',
  events_url: 'https://api.github.com/users/AlmightyMegadeth00/events{/privacy}',
  received_events_url: 'https://api.github.com/users/AlmightyMegadeth00/received_events',
  type: Type.User,
  site_admin: false,
  name: 'Dave Kessler',
  company: 'Exodus Android',
  blog: '',
  location: null,
  email: null,
  hireable: true,
  bio: null,
  public_repos: 24,
  public_gists: 0,
  followers: 40,
  following: 5,
  created_at: '2012-05-06T21:15:01Z',
  updated_at: '2019-09-13T16:27:18Z',
};

export const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
