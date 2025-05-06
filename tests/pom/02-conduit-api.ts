import { APIRequest, APIRequestContext, APIResponse, request, Response } from '@playwright/test'

export class ConduitAPI {
    request: APIRequestContext;
    baseURL: string;
    endpointRegister: string = '/users';
    endpointLogin: string = '/users/login';
    endpointArticle: string = '/articles';
    token: string;


    constructor(request: APIRequestContext, baseURL: string) {
        this.request = request;
        this.baseURL = baseURL;
    }

    async sigUp(email: string, password: string, username: string) {
        const response: APIResponse = await this.request.post(this.baseURL + this.endpointRegister, {
            data: {
                'user':{
                    'email': email,
                    'password': password,
                    'username': username,
                }
            }
        });

        return response;
    };

    async logIn(email: string, password: string) {
        const response: APIResponse = await this.request.post(this.baseURL + this. endpointLogin, {
            data: {
                'user':{
                    'email': email,
                    'password': password,
                }
            }
        });
        
        return response;
        //return await this.request.get(this.baseURL + this. endpointLogin, ...
    };

    async getToken(email: string, password: string) {
        const response: APIResponse = await this.logIn(email, password);
        this.token = (await response.json()).user.token;

    };

    async createNewArticle(title: string, description: string, body: string, tagList: string[]) {
        const response: APIResponse = await this.request.post(this.baseURL + this.endpointArticle, {
            headers: {
                authorization: `Token ${this.token}`,
            },
            data: {
                'article': {
                    'title': title,
                    'description': description,
                    'body': body,
                    'tagList': tagList
                }
            }
        });

        return response;
    }
}