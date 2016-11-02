export const TOGGLE_NAV = 'TOGGLE_NAV';
export const CHANGE_NAV = 'CHANGE_NAV';
export const CLOSE_NAV = 'CLOSE_NAV';

export const toggle = () => ({
  type: TOGGLE_NAV,
});

export const change = open => ({
  type: CHANGE_NAV,
  open,
});

export const close = () => ({
  type: CLOSE_NAV,
});
