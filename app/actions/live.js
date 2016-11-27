export const TOGGLE_STREAM = 'TOGGLE_STREAM';
export const TOGGLE_PREVIEW = 'TOGGLE_PREVIEW';
export const TOGGLE_BROADCAST = 'TOGGLE_BROADCAST';

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

export const toggleBroadcast = () => {
  return ({
    type: TOGGLE_BROADCAST,
  });
};
