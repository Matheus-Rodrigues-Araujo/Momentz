import florest from '@/assets/postImages/florest.png'
import parrot from '@/assets/postImages/parrot.png'
import soapBubbles from '@/assets/postImages/soap-bubbles.jpg'
import flash from '@/assets/postImages/flash.jpg'
import superman from '@/assets/postImages/superman.jpg'
import luffy from '@/assets/postImages/luffy.jpg'

const postsList = [
    {
      username: 'Clark Kent',
      profileImage: superman,
      postImage: florest,
      datetime: new Date(),
      content: 'Enjoying the view here!'
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