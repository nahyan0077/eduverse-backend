import { Types } from "mongoose";

enum Status {
	active = "active",
	blocked = "blocked",
}

export interface CategoryEntity {
	_id: Types.ObjectId;
	categoryName: string;
	status: Status;
}
