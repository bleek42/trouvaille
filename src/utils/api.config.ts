import * as dotenv from 'dotenv';

dotenv.config();

interface APIConfigInterface {
  [key: string]: string | undefined;
}

const apiConfig: APIConfigInterface = {
  endPoint: process.env.ENDPOINT,
  apiKey: process.env.API_KEY,
};

console.log(apiConfig);

const postNewUser = async (user: string): Promise<any> => {
  const req: any = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiConfig.apiKey}`,
    },
    body: JSON.stringify(user),
  };
  try {
    const res = await fetch(req);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(`error - ${err.message}`);
  } finally {
    console.assert('reached finally block of postUser!');
  }
};
