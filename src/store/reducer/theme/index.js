const fontSize1 = 11;
const fontSize2 = 12;
const fontSize3 = 13;
const fontSize4 = 14;
const fontSize5 = 15;
const fontSize6 = 16;
const fontSize7 = 17;
const fontSize8 = 18;
const fontSize9 = 19;
const fontSize10 = 20;

const data = {
  mainColor: 'red',
  unSelectTabColor: 'gray',
  fontSize1,
  fontSize2,
  fontSize3,
  fontSize4,
  fontSize5,
  fontSize6,
  fontSize7,
  fontSize8,
  fontSize9,
  fontSize10,
};
export const theme = (state = data, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
