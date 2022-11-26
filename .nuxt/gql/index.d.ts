import { getSdk as defaultGqlSdk } from '#gql/default'
export { CreateTodoInput, LoginInput, UpdateTodoInput, LoginMutationVariables, LoginMutation, SignMutationVariables, SignMutation, InsertTodosMutationVariables, InsertTodosMutation, RemoveMutationVariables, RemoveMutation, AllusersQueryVariables, AllusersQuery, UsertodoQueryVariables, UsertodoQuery } from "#gql/default";
declare module '#gql' {
  type GqlClients = 'default'
  type GqlOps = 'InsertTodos' | 'remove' | 'allusers' | 'usertodo' | 'login' | 'sign'
  const GqClientOps = {"default":["InsertTodos","remove","allusers","usertodo","login","sign"]}
  const GqlSdks = {
    default: defaultGqlSdk,
  }
  export const GqlInsertTodos: (...params: Parameters<GqlSdkFuncs['InsertTodos']>) => ReturnType<GqlSdkFuncs['InsertTodos']>
  export const GqlAllusers: (...params: Parameters<GqlSdkFuncs['allusers']>) => ReturnType<GqlSdkFuncs['allusers']>
  export const GqlLogin: (...params: Parameters<GqlSdkFuncs['login']>) => ReturnType<GqlSdkFuncs['login']>
  export const GqlRemove: (...params: Parameters<GqlSdkFuncs['remove']>) => ReturnType<GqlSdkFuncs['remove']>
  export const GqlSign: (...params: Parameters<GqlSdkFuncs['sign']>) => ReturnType<GqlSdkFuncs['sign']>
  export const GqlUsertodo: (...params: Parameters<GqlSdkFuncs['usertodo']>) => ReturnType<GqlSdkFuncs['usertodo']>
  type GqlSdkFuncs = ReturnType<typeof defaultGqlSdk>
}