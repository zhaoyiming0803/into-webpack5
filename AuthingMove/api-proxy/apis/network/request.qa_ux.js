import fetch from '@system.fetch'

export function request (options = {}) {
  return fetch.fetch(options)
}
