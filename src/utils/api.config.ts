import * as dotenv from 'dotenv';

dotenv.config();

interface APIConfigInterface {
  endPoint: any;
}

const apiConfig: APIConfigInterface = {
  endPoint: process.env.ENDPOINT,
  // apiKey: process.env.API_KEY,
};

// console.log(apiConfig);

interface UserInterface {
  username: string;
  email: string;
  password: string;
}

export const postNewUser = async (user: UserInterface): Promise<void> => {
  const req: any = {
    method: 'POST',
    body: JSON.stringify(user),
  };
  try {
    const res = await fetch(`${apiConfig.endPoint}/users/new`, req);
    const data = await res.json();
    console.log(data);
    return data;
  } catch (err: unknown) {
    console.error(`post new user error: ${err?.toString()}`);
  } finally {
    console.info({ info: 'reached finally block of postUser!' });
  }
};

// const newUser: UserInterface = {
//   username: 'newUser177487',
//   email: 'newUser@me.com',
//   password: 'P@55werd123',
// };

// postNewUser(newUser);
