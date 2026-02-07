import { useMemo } from "react";
import { useGet } from "../useQuery";
import type { Course, LiteratureResponse } from "../../types/course.type";
import keys from "../../constants/key";

interface UseLiteratureParams {
  searchTerm?: string;
  page?: number;
}

const mapCourseData = (courses?: Course[]): Course[] => {
  if (!Array.isArray(courses)) return [];
  return courses.map((c) => ({
    id: c.id,
    image: c.image,
    title: c.title,
    discounted_price: c.discounted_price,
  }));
};

export const useLiteratureCourseList = ({ searchTerm, page }: UseLiteratureParams = {}) => {
  const endpoint = useMemo(() => {
    const params = new URLSearchParams();
    if (searchTerm?.trim()) params.append("search", searchTerm.trim());
    if (page && page > 0) params.append("page", String(page));
    const query = params.toString();
    return query ? `course/literature/list/?${query}` : "course/literature/list/";
  }, [searchTerm, page]);

  const { data: response, isLoading } = useGet<LiteratureResponse>(endpoint, {
    key: keys.COURSE,
    returnFullResponse: true,
  });

  const courses = useMemo(() => mapCourseData(response?.data?.courses), [response]);

  const pagination = response?.pagination ?? null;

  return { courses, isLoading, pagination };
};
