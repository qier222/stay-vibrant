interface PlyrPlayer {
  source: {
    type: string;
    sources: {
      src: string;
      provider: string;
    }[];
  };
  destroy: () => void;
}
