import { Types } from "mongoose";

enum Status {
	active = "active",
	blocked = "blocked",
}

export interface CategoryEntity {
	_id: Types.ObjectId;
	title: string;
	status: Status;
}
