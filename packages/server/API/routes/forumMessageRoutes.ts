import express from 'express';

import * as forumMessageController from '../controllers/forumMessageController';

export const forumMessage = express.Router();

forumMessage
  .use(express.urlencoded({ extended: true }))
  .use(express.json())

  /** получение всех сообщений форума, в продакшене вряд ли будет полезен */
  .get('/all', forumMessageController.getAllForumMessage)

  /** получение сообщения форума по id сообщения */
  .get('/:message_id', forumMessageController.getForumMessageById)

  /** получение сообщений форума по id темы */
  .get('/topic/:topic_id', forumMessageController.getForumMessageByTopicId)

  /** создание или обновление сообщения форума */
  .post('/', forumMessageController.createOrUpdateForumMessage)

  /** удаление сообщения форума */
  .delete('/:message_id', forumMessageController.deleteForumMessage);
