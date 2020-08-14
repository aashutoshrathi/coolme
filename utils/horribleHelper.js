const axios = require('axios');
require('dotenv').config();

const enhanceChat = require('./enhanceChat');

const horribleHelper = {};

const { HORRIBLE_URI } = process.env

horribleHelper.magnet = function(args, message) {
  const argsArray = args.split('/')
  const anime = argsArray[0].trim()

  if (!anime) {
    message.channel.send(
      enhanceChat.embedStatic('Try **!magnet naruto** or **magnet 323**', 'Missing anime name or id', '#bf0000')
    )
    return
  }
  const ep = argsArray[1] && argsArray[1].trim()
  const params = {
    anime,
    ...(parseInt(ep, 10) > 0 && { ep })
  }

  axios
    .get(HORRIBLE_URI, { params })
    .then(res => {
      message.channel.send(enhanceChat.embedMagnets(res.data));
    })
    .catch(err => {
      console.log(err);
      message.channel.send(
        enhanceChat.embedStatic('Something went wrong, ❌', ':/ ', '#bf0000')
      );
    });
};

module.exports = horribleHelper;
