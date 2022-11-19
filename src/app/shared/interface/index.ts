export interface Children {
  children: React.ReactNode;
}

export type DataRepositories = {
  name: string;
  language: string;
  homepage: string;
  description: string;
  clone_url: string;
  private: boolean;
  topics: [];
  updated_at: string;
};

export interface Repositories {
  data?: [
    {
      name: string;
      language: string;
      homepage: string;
      description: string;
      clone_url: string;
      private: boolean;
      topics: [];
      updated_at: string;
    },
  ];
}
