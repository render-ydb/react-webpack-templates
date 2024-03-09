declare module '*.less' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare interface Window {
  less: {
    modifyVars: (arg: any) => Promise;
  };
  ActiveXObject: any;
}
