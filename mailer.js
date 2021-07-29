const nodemailer = require('nodemailer')

class Mailer {
  transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'pavelsatanenko69@gmail.com',
      pass: 'pavel123121',
    },
  })

  #createOrderHTML(firstName, lastName, phone, city, userPostDepartment, items) {
    return `
      <div>${firstName} ${lastName}</div>
      <div>${phone}</div>
      <div>${city} Новая почта ${userPostDepartment}</div>

      <div style="margin-top: 40px;">
        ${items
          .map(item => `<div>${item.title} ${item.quantity}шт</div>`)
          .join('</br>')
        }
      </div>
    `
  }

  #createContactMessageHTML(userName, userEmail, userMessage) {
    return `
      <div>${userName}</div>
      <div>${userEmail}</div>

      <div style="margin-top: 40px;">${userMessage}</div>
    `
  }
  
  sendOrder(firstName, lastName, phone, city, userPostDepartment, items) {
    this.transporter.sendMail({
      from: '"Juicy Click" <juicyclick@example.com>',
      to: 'dennis.priadka@gmail.com',
      subject: 'Поступил новый заказ',
      html: this.#createOrderHTML(firstName, lastName, phone, city, userPostDepartment, items)
    })
  }

  sendContactMessage(userName, userEmail, userMessage) {
    this.transporter.sendMail({
      from: '"Juicy Click" <juicyclick@example.com>',
      to: 'dennis.priadka@gmail.com',
      subject: 'Поступило новое обращение',
      html: this.#createContactMessageHTML(userName, userEmail, userMessage)
    })
  }
}

module.exports = new Mailer()
