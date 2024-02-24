import { atomFamily } from "recoil";
import { todo } from "./Todo";

export const todoFamily = atomFamily({
    key: 'todoFamily',
    default: id=>todo.find(elem=>elem.id==id)
})