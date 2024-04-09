import { apiUrl } from '@/app/helpers/constants'
const baseUrl = `${apiUrl}/wp-json/wp/v2`

export async function getNotes() {
  try {
    const response = await fetch(`${baseUrl}/posts`)
    const result = await response.json()
    return result
  } catch (error) {
    console.log(error)
  }
}

export async function getNote(noteId) {
  const response = await fetch(`${baseUrl}/posts/${noteId}`)
  const result = await response.json()
  return result
}
