export const updateScreen = (stateObj, placeholder) => {
    sequence.value = stateObj.a;
    placeholder.value = stateObj.b ? stateObj.b : stateObj.a;
  };
  
export const clearData = (stateObj, placeholder) => {
    const data = stateObj;
  
    data.a = "";
    data.b = "";
    data.operator = "";
    data.completed = false;
    data.sequence = [];
    updateScreen(data, placeholder);
    return data;
  };