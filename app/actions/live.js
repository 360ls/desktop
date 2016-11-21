export const TOGGLE_STREAM = 'TOGGLE_STREAM';
export const TOGGLE_PREVIEW = 'TOGGLE_PREVIEW';

export const toggleStream = () => {
  return ({
    type: TOGGLE_STREAM,
  });
};

export const togglePreview = () => {
  return ({
    type: TOGGLE_PREVIEW,
  });
};
