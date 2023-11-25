import florest from '@/assets/postImages/florest.png'
import parrot from '@/assets/postImages/parrot.png'
import soapBubbles from '@/assets/postImages/soap-bubbles.jpg'
import flash from '@/assets/postImages/flash.jpg'
import superman from '@/assets/postImages/superman.jpg'
import luffy from '@/assets/postImages/luffy.jpg'
import spiderman from '@/assets/userSuggestions/spiderman.jpg'

const postsList = [
    {
      username: 'Clark Kent',
      profileImage: superman,
      postImage: florest,
      datetime: new Date(),
      content: 'Enjoying the view here!'
    },
    {
      username: 'Spider-Man',
      profileImage: spiderman,
      postImage: spiderman,
      datetime: new Date(),
      content: 'Hey there! I took a new photo from this tall buildind!'
    },
    {
      username: 'Luffy',
      profileImage: luffy,
      postImage: parrot,
      datetime: new Date(),
      content: 'My little parrot is so cute!'
    },
    {
      username: 'Barry Allen',
      profileImage: flash,
      postImage: soapBubbles,
      datetime: new Date(),
      content: 'I created a new wallpaper!'
    },
]

export default postsList