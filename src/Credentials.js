const Credentials = () => {
  return {
    ClientId: "process.env.REACT_APP_CLIENT_ID",
    ClientSecret: "process.env.REACT_APP_CLIENT_SECRET",
  };
};

export { Credentials };
