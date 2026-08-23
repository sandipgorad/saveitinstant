import assert from 'node:assert/strict'
import {
  classifyYouTubeInput,
  extractYouTubeVideoId,
  getThumbnailUrls,
} from '../src/utils/youtube.js'

const valid = 'https://www.youtube.com/watch?v=dy8VetlMgLw&si=abc'
assert.equal(extractYouTubeVideoId(valid), 'dy8VetlMgLw')
assert.equal(extractYouTubeVideoId('https://youtu.be/dy8VetlMgLw?t=30'), 'dy8VetlMgLw')
assert.equal(extractYouTubeVideoId('https://youtube.com/shorts/dy8VetlMgLw'), 'dy8VetlMgLw')
assert.equal(extractYouTubeVideoId('https://www.youtube.com/embed/dy8VetlMgLw'), 'dy8VetlMgLw')
assert.equal(extractYouTubeVideoId('https://www.youtube.com/live/dy8VetlMgLw'), 'dy8VetlMgLw')

assert.equal(extractYouTubeVideoId('https://www.google.com/watch?v=dy8VetlMgLw'), null)
assert.equal(extractYouTubeVideoId('https://youtube.com/watch?v=short'), null)
assert.equal(extractYouTubeVideoId('https://youtube.com/watch?v=dy8VetlMgLw<script>'), null)
assert.equal(extractYouTubeVideoId('https://evil-youtube.com/watch?v=dy8VetlMgLw'), null)
assert.equal(extractYouTubeVideoId(''), null)

assert.deepEqual(classifyYouTubeInput(''), { type: 'empty' })
assert.equal(classifyYouTubeInput('not a url').type, 'invalid')
assert.equal(classifyYouTubeInput('https://example.com/watch?v=dy8VetlMgLw').type, 'unsupported')
assert.deepEqual(classifyYouTubeInput(valid), { type: 'valid', videoId: 'dy8VetlMgLw' })

const thumbs = getThumbnailUrls('dy8VetlMgLw')
assert.equal(thumbs.length, 4)
assert.equal(thumbs[0].url, 'https://i.ytimg.com/vi/dy8VetlMgLw/maxresdefault.jpg')

console.log('YouTube URL utility tests passed.')
