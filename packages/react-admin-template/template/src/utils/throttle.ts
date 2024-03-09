// 节流
type Fn = (...args: any) => void | (() => void);
export default (fn: Fn, delay = 200) => {
  let timer: NodeJS.Timeout | null = null;

  return function () {
    // @ts-ignore
    let that = this;
    var args = Array.prototype.slice.call(arguments);
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(that, args);
        timer = null;
      }, delay);
    }
  };
};
