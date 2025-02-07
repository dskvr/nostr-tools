export function getHex64(json: string, field: string): string {
  let len = field.length + 3
  let idx = json.indexOf(`"${field}":`) + len
  let s = json.slice(idx).indexOf(`"`) + idx + 1
  return json.slice(s, s + 64)
}

export function getInt(json: string, field: string): number {
  let len = field.length
  let idx = json.indexOf(`"${field}":`) + len + 3
  let sliced = json.slice(idx)
  let end = Math.min(sliced.indexOf(','), sliced.indexOf('}'))
  return parseInt(sliced.slice(0, end), 10)
}

export function matchEventId(json: string, id: string): boolean {
  return id === getHex64(json, 'id')
}

export function matchEventPubkey(json: string, pubkey: string): boolean {
  return pubkey === getHex64(json, 'pubkey')
}

export function matchEventKind(json: string, kind: number): boolean {
  return kind === getInt(json, 'kind')
}
