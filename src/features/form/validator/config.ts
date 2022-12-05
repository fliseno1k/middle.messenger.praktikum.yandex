import type { ValidationScheme } from "./types";

// ^[A-Za-z0-9]+([A-Za-z0-9]*|[._-]?[A-Za-z0-9]+)*$

type FieldNameMap = "first_name" | "last_name" | "login" | "password" | "repeat_password" | "phone" | "email" | "message";

export const defaultConfig: Partial<Record<FieldNameMap, ValidationScheme>> = {
    login: {
        pattern: /^[A-Za-z0-9]+([A-Za-z0-9]*|[._-]?[A-Za-z0-9]+)*$/,
        minLength: 3,
        maxLength: 20
    },
    first_name: {
        pattern: /^[A-z][a-zа-я-]+$/,
    },
    last_name: {
        pattern: /^[A-z][a-zа-я-]+$/,
    },
    email: {
        pattern: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
    },
    password: {
        minLength: 8,
        maxLength: 40,
        pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*[a-zA-Z\d]/
    },
    repeat_password: {
        minLength: 8,
        maxLength: 40,
        pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*[a-zA-Z\d]/
    },
    phone: {
        pattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
    },
    message: {
        minLength: 1
    }
}

