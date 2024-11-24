import test from 'node:test'
import assert from 'node:assert'
import { isYouTubeUrl } from './index.js'

test('isYouTubeUrl correctly identifies YouTube and Google Video URLs', async (t) => {
  await t.test('returns true for valid YouTube URLs', () => {
    const urls = [
      new URL('https://www.youtube.com/watch?v=dQw4w9WgXcQ'),
      new URL('https://youtube.com/channel/UC123456789'),
      new URL('https://m.youtube.com/watch?v=dQw4w9WgXcQ'),
      new URL('https://youtu.be/dQw4w9WgXcQ'),
      new URL('https://youtube-nocookie.com/embed/dQw4w9WgXcQ'),
      new URL('https://googlevideo.com/videoplayback')
    ]

    urls.forEach((url) => {
      assert.strictEqual(isYouTubeUrl(url), true, `Expected ${url.href} to be identified as a YouTube URL`)
    })
  })

  await t.test('returns false for non-YouTube URLs', () => {
    const urls = [
      new URL('https://www.google.com/search?q=YouTube'),
      new URL('https://vimeo.com/123456789'),
      new URL('https://example.com'),
      new URL('https://notyoutube.com/watch?v=dQw4w9WgXcQ'),
      new URL('https://subdomain.googlevideo.com/videoplayback')
    ]

    urls.forEach((url) => {
      assert.strictEqual(isYouTubeUrl(url), false, `Expected ${url.href} to not be identified as a YouTube URL`)
    })
  })

  await t.test('returns false for malformed URLs', () => {
    const urls = [
      new URL('https://youtube.com.evilsite.com'),
      new URL('https://googlevideo.com.example.com'),
      new URL('https://www.youtu.be.evil.com')
    ]

    urls.forEach((url) => {
      assert.strictEqual(isYouTubeUrl(url), false, `Expected ${url.href} to not be identified as a YouTube URL`)
    })
  })
})
