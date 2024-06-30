import { Router } from "express";
import { CurrentUser, RequireAuth } from "@eduverse/common";
import { IDependencies } from "@/application/interfaces/IDependencies";
import { controllers } from "../../presentation/controllers";

export const routes = (dependancies: IDependencies) => {
	const { createChat, getChatsByUserId, getMessagesByChatId, createMessage, updateMessage } = controllers(dependancies);

	const router = Router();

	router.route("/").post(createChat);

	router.route("/user/:userId").get(getChatsByUserId);

	router.route("/message/:chatId").get(getMessagesByChatId)

	router.route("/message").post(createMessage)
							.patch(updateMessage)

	
	return router;
};
