const TelegramApi = require('node-telegram-bot-api')

class Mailer {
  token = '1828560214:AAFIqXEpgfqvlWFOTt5eEmhCCCW1LbEYxcM'
  chatId = 471177922
  bot = new TelegramApi(this.token, { polling: true })

  sendOrder(firstName, lastName, phone, city, userPostDepartment, items) {
    const preparedItems = items
      .map(item => `${item.title} ${item.quantity}шт`)
      .join('\n')

    this.bot.sendMessage(
      this.chatId, `Поступил новый заказ!\n\n\n${firstName} ${lastName}\n${phone}\n${city} НП ${userPostDepartment}\n${preparedItems}`
    )
  }

  sendContactMessage(userName, userEmail, userMessage) {
    this.bot.sendMessage(this.chatId, `Поступило новое обращение!\n\n\n${userName} \n ${userEmail} \n ${userMessage}`)
  }
}

module.exports = new Mailer()
