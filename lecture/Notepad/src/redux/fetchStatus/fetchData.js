import { FAIL, INIT, LOADING, SUCCESS } from './constants';

export function init() {
  return {
    status: INIT,
    loading: false,
    done: null,
    error: null,
  };
}
export function loading() {
  return {
    status: LOADING,
    loading: true,
    done: null,
    error: null,
  };
}
export function success(data) {
  return {
    status: SUCCESS,
    loading: false,
    done: data,
    error: null,
  };
}
export function fail(error) {
  return {
    status: FAIL,
    loading: false,
    done: null,
    error: error,
  };
}
