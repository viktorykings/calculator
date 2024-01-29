export const updateScreen = (stateObj, val, seq) => {
  const sequence = seq;
  const placeholder = val;
  sequence.value = stateObj.a;
  placeholder.value = stateObj.b ? stateObj.b : stateObj.a;
};

export const clearData = (stateObj, placeholder, seq) => {
  const data = stateObj;

  data.a = "";
  data.b = "";
  data.operator = "";
  data.completed = false;
  updateScreen(data, placeholder, seq);
  return data;
};
