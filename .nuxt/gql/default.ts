import type { GraphQLClient } from 'graphql-request';
import type * as Dom from 'graphql-request/dist/types.dom';
import { gql } from 'graphql-request';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type CreateTodoInput = {
  content: Scalars['String'];
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type UpdateTodoInput = {
  content: Scalars['String'];
  id: Scalars['Float'];
};

export type InsertTodosMutationVariables = Exact<{
  createTodoInput: CreateTodoInput;
}>;


export type InsertTodosMutation = { createTodo: { id: number, content: string, createdAt: any } };

export type RemoveMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type RemoveMutation = { removeTodo: { message: string } };

export type AllusersQueryVariables = Exact<{ [key: string]: never; }>;


export type AllusersQuery = { users: Array<{ id: number, email: string, todos?: Array<{ content: string }> | null }> };

export type UsertodoQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type UsertodoQuery = { user: { id: number, email: string, todos?: Array<{ content: string, id: number }> | null } };


export const InsertTodosDocument = gql`
    mutation InsertTodos($createTodoInput: CreateTodoInput!) {
  createTodo(createTodoInput: $createTodoInput) {
    id
    content
    createdAt
  }
}
    `;
export const RemoveDocument = gql`
    mutation remove($id: Int!) {
  removeTodo(id: $id) {
    message
  }
}
    `;
export const AllusersDocument = gql`
    query allusers {
  users {
    id
    email
    todos {
      content
    }
  }
}
    `;
export const UsertodoDocument = gql`
    query usertodo($id: Int!) {
  user(id: $id) {
    id
    email
    todos {
      content
      id
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    InsertTodos(variables: InsertTodosMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<InsertTodosMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<InsertTodosMutation>(InsertTodosDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'InsertTodos', 'mutation');
    },
    remove(variables: RemoveMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<RemoveMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<RemoveMutation>(RemoveDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'remove', 'mutation');
    },
    allusers(variables?: AllusersQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AllusersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AllusersQuery>(AllusersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'allusers', 'query');
    },
    usertodo(variables: UsertodoQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UsertodoQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<UsertodoQuery>(UsertodoDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'usertodo', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;