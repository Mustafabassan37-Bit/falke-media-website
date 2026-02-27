const basePath = "/falke-media-website";

export function getImagePath(path: string): string {
  return `${basePath}${path}`;
}

export default basePath;
