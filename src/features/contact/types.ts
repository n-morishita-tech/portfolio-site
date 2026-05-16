export type ContactFormState = {
  name: string;
  email: string;
  message: string;
};

export type ContactErrorResponse = {
  errors?: {
    fieldErrors?: {
      name?: string[];
      email?: string[];
      message?: string[];
    };
  };
  error?: string;
};
