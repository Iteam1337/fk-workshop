const amqp = require('fluent-amqp')
const host = 'amqp://admin:workshop@rabbitmq-1.fk-dev-days.80cb1ef5.cont.dockerapp.io'
const queue = 'hello'

amqp(host)
  .queue(queue)
  .subscribe()
  .errors(err => console.error(err))
  .each(msg => console.log(msg.string()))

amqp(host)
  .queue(queue)
  .publish('Hello World!')
  .then(() => console.log('Sent'))
  .catch(err => console.error(err))
