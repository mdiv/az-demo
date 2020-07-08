import axios from 'axios';
import { GreetingCounts } from '../models';

const schema = process.env.REACT_APP_API_SCHEMA || 'http';
const host = process.env.REACT_APP_API_HOST || '52.233.243.210';
const port = process.env.REACT_APP_API_PORT || '8001';

const getAPIUrl = (path: string) =>
  `${schema}://${host}${port ? `:${port}` : ``}/${path}`;

export const getGreeting: (name: string) => Promise<string> = async (name) => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Hi ${name}`);
    }, 2000);
  });
  try {
    const { data } = await axios.get(getAPIUrl(`api/greeting?name=${name}`));
    return data as string;
  } catch (error) {
    console.error('getGreetings failed', error);
    throw 'Unable to fetch greeting';
  }
};

export const getCounts: () => Promise<GreetingCounts> = async () => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        hi: 1,
        hello: 2,
        somethingelse: 5,
      });
    }, 2000);
  });
  try {
    const { data } = await axios.get(getAPIUrl(`api/greeting/counts`));
    return data as GreetingCounts;
  } catch (error) {
    console.error('getCounts failed', error);
    throw 'Unable to fetch greeting counts';
  }
};
