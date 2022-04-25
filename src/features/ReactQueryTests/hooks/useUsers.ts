import { get } from '../../../services/customApi';
import { useInfiniteQuery } from 'react-query';

export function useUsers(params: any = {}, options: any = {}) {
    const queryOptions: any = {
        getNextPageParam: (lastPage: any ) => lastPage.page + 1,
        ...options,
    }
    return useInfiniteQuery(
        ['users', params],
        ({ pageParam = 1 }) => get(`/users`, {
            params: { ...params, page: pageParam }
        }),
        queryOptions
    )
}
