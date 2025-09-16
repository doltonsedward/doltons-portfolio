import useSWR from 'swr';

const fetcher = (api: string) => fetch(api).then((res) => res.json());

export function useGetData<T = any>({
  api,
  options,
  withoutValidation = false,
}: {
  api: string;
  options?: any;
  withoutValidation?: boolean;
}) {
  const withoutValidationOptions = {
    revalidateOnFocus: false,
  };

  const { data, error, isLoading } = useSWR<T>(api, fetcher, {
    ...options,
    ...(withoutValidation ? withoutValidationOptions : {}),
  });

  return { data, error, isLoading };
}
