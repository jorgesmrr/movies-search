const mockedMethods = {
  get: jest.fn().mockResolvedValue({}),
};

const mockedAxios = {
  ...mockedMethods,
  create: () => mockedMethods,
};

export default mockedAxios;
