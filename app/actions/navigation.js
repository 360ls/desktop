export const TOGGLE_NAV = 'TOGGLE_NAV';
export const CHANGE_NAV = 'CHANGE_NAV';
export const CLOSE_NAV = 'CLOSE_NAV';

export function toggle() {
  return {
    type: TOGGLE_NAV,
  };
}

export function change(open) {
  return {
    type: CHANGE_NAV,
    open,
  };
}

export function close() {
  return {
    type: CLOSE_NAV,
  };
}
