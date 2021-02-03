import * as dotenv from 'dotenv';

dotenv.config();

interface APIConfigInterface {
  endPoint: any;
  apiKey: string | undefined;
}

const apiConfig: APIConfigInterface = {
  endPoint: process.env.ENDPOINT,
  apiKey: process.env.API_KEY,
};

console.log(apiConfig);

interface UserInterface {
  username: string;
  email: string;
  password: string;
}

const postNewUser = async (user: UserInterface): Promise<void> => {
  const req: any = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiConfig.apiKey}`,
    },
    body: JSON.stringify(user),
  };
  try {
    const res = await fetch(apiConfig.endPoint, req);
    const data = await res.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error(`error - ${err.message}`);
  } finally {
    console.assert('reached finally block of postUser!');
  }
};

const newUser = {
  username: 'newUser177487',
  email: 'newUser@me.com',
  password: 'P@55werd123',
};

postNewUser(newUser);
