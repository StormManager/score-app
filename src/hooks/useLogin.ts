import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginApis } from "../apis/loginApi";
import { ILogin } from "../utils/types/loginType";

export function useLogin() {
    const queryClient = useQueryClient();
    return useMutation(
        {
            mutationFn: async (data: ILogin) => {
                const response = await loginApis.login(data);
                return response.data;
            },
            onSuccess: (data: ILogin) => {
                // 뮤테이션 성공 시 실행할 작업을 정의할 수 있습니다.
            },
            onError: (error: Error) => {
                // 뮤테이션 실패 시 실행할 작업을 정의할 수 있습니다.
                console.error("로그인 실패:", error);
            }
        },
        queryClient
    );
}
