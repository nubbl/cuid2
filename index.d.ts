declare namespace cuid2 {
  export function getConstants(): {
    defaultLength: number
    bigLength: number
  }

  export function init(options?: {
    counter?: () => number
    length?: number
    fingerprint?: string
  }): () => string

  export function createId(): string
}

export = cuid2;
