export function init() {
  return {
    done: null,
    error: null,
  };
}
export function success(data) {
  return {
    done: data,
    error: null,
  };
}
export function fail(error) {
  return {
    done: null,
    error: error,
  };
}
