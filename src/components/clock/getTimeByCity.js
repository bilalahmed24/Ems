const offsets = {
  karachi: 300,
};

const getTime = (cityId) => {
  const localDate = new Date();
  const offset = localDate.getTimezoneOffset() + offsets[cityId];
  return new Date(+localDate + offset * 60 * 1000);
};

export default getTime;
