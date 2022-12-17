import { Kafka } from 'kafkajs';
import { randomUUID } from 'node:crypto';

import * as dotenv from 'dotenv';
dotenv.config()

async function bootstrap() {
    const kafka = new Kafka({
        clientId: 'kafka-producer',
        brokers: ['leading-bison-8901-us1-kafka.upstash.io:9092'],
        sasl: {
            mechanism: 'scram-sha-256',
            username: process.env.USERNAME,
            password: process.env.PASSWORD
        },
        ssl: true,
    })

    const producer = kafka.producer()

    await producer.connect()
    await producer.send({
        topic: 'notifications.send-notification',
        messages: [
            {
                value: JSON.stringify({
                    content: 'Nova solicitação de amizade!',
                    category: 'social',
                    recipientId: randomUUID()
                })
            }
        ]
    })

    await producer.disconnect()
}

bootstrap()