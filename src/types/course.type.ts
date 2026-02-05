export interface Course {
	id: number;
	image: string;
	title: string;
	discounted_price: number;
}

export interface LiteratureResponse {
	course_type: string;
	currency: string;
	courses: Course[];
}

export type { Course as CourseType };
