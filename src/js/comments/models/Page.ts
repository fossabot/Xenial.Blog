/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Comment } from './Comment';

export interface Page {
    id: string;
    readonly comments: Array<Comment>;
}