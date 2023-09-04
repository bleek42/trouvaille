declare namespace NodeJS {

  export interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    NODE_PATH?: string;

  }
}
