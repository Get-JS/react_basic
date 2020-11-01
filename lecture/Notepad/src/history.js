import { createBrowserHistory, createMemoryHistory } from 'history';
import { URL_GROUP } from './configs/links/urls';

const isTest = process.env.NODE_ENV === 'test';

export const history = isTest ? createMemoryHistory({ initialEntries: [URL_GROUP.Home] }) : createBrowserHistory();
