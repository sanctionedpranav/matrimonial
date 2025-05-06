declare module "aos" {
  interface AOSOptions {
    duration?: number;
    delay?: number;
    easing?: string;
    once?: boolean;
  }
  const AOS: {
    init(options?: AOSOptions): void;
  };
  export default AOS;
}
