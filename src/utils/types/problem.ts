export type Example = {
	id: number;
	inputText: string;
	outputText: string;
	explanation?: string;
	img?: string;
};

// local problem data


export type DBProblem = {
	id:string;
	title: string;
	problemStatement: string;
	category: string;
	difficulty: string;
	likes: number;
	dislikes: number;
	order: number;
	videoId?: string;
	link?: string;
	examples: Example[];
	constraints: string;
	starterFunctionName:string;
	starterCode:string;
	handlerFunction: string;
	isPrivate:boolean;
	creatorId:string;
};